(ns projects.db
  (:require [integrant.core :as ig]
            [clj-uuid :as uuid]
            [next.jdbc :as jdbc]
            [next.jdbc.result-set :as rs]
            [honeysql.core :as sql]
            [buddy.hashers :refer [encrypt check]]))

(defn create-connection
  [config]
  (jdbc/get-datasource config))

(defn generate-uuid
  []
  (uuid/v1))

(defn get-timestamp
  []
  (* (.toEpochMilli (java.time.Instant/now)) 1000))

(defn add-id-timestamp-to-project
  [project status]
  (-> project
      (assoc :id (generate-uuid))
      (assoc :timestamp (get-timestamp))
      (assoc :status_id status)
      (dissoc :status)))

(defn insert-project-history
  [project db]
  (let [updated-project (-> project
                            (dissoc :status_name)
                            (dissoc :name)
                            (assoc :project_id (:id project))
                            (assoc :id (generate-uuid)))
        cols (for
              [c (keys updated-project)]
               (keyword c))
        query (sql/format {:insert-into :projects_history
                           :columns cols
                           :values [(vals updated-project)]})]
    (jdbc/execute-one! db query {})))

(defn insert-new-project
  [project db]
  (let [cols (for
              [c (keys project)]
               (keyword c))
        query (sql/format {:insert-into :projects
                           :columns cols
                           :values [(vals project)]})]
    (insert-project-history project db)
    (jdbc/execute-one! db query {:return-keys true
                                 :builder-fn rs/as-unqualified-lower-maps})))

(defn get-all-status
  [db]
  (let [query (-> {:select [:*]
                   :from [:status]}
                  (sql/format))
        res (jdbc/execute! db query {:return-keys true
                                     :builder-fn rs/as-unqualified-lower-maps})]
    (reduce
     (fn [acc item]
       (assoc acc (:status_name item) (:id item)))
     {}
     res)))

(defn get-projects
  [db]
  (let [query (-> {:select [:projects.id :projects.name :projects.timestamp :status.status_name]
                   :from [:projects]
                   :join [:status [:= :projects.status_id :status.id]]}
                  (sql/format))]
    (jdbc/execute! db query {:return-keys true
                             :builder-fn rs/as-unqualified-lower-maps})))

(defn get-project
  [id db]
  (let [query (-> {:select [:projects.id :projects.name :projects.timestamp :status.status_name]
                   :from [:projects]
                   :join [:status [:= :projects.status_id :status.id]]
                   :where [:= :projects.id id]}
                  (sql/format))
        res (jdbc/execute-one! db query {:return-keys true
                                         :builder-fn rs/as-unqualified-lower-maps})]
    res))

(defn check-valid-status
  [project db]
  (let [valid-status (get-all-status db)
        status_id (get valid-status (:status project))]
    (if status_id
      (-> project
          (add-id-timestamp-to-project status_id)
          (insert-new-project db)
          (:id)
          (get-project db))
      (str "Status " (:status project) " does net exist"))))

(defn insert-project
  [project db]
  (let [projects (get-projects db)]
    (if (empty? (filter #(= (:name project) (:name %)) projects))
      (check-valid-status project db)
      (str "Project " (:name project) " already exist"))))

(defn update-state
  [current-project next-status db]
  (let  [status_id (get (get-all-status db) next-status)
         next-project (assoc current-project :status_id status_id)
         query (-> {:update :projects
                    :set {:status_id status_id :timestamp (get-timestamp)}
                    :where [:= :id (:id current-project)]}
                   (sql/format))]
    (jdbc/execute-one! db query {})
    (insert-project-history next-project db)
    (get-project (:id next-project) db)))

(defmulti validate-new-status
  (fn [project _ _] (:status_name project)))

(defmethod validate-new-status "Initiated" [current-project next-status db]
  (case next-status
    "Reviewed" (update-state current-project next-status db)
    "Approved" (update-state current-project next-status db)
    (str "Initiated status, can not advance to " next-status)))

(defmethod validate-new-status "Reviewed" [current-project next-status db]
  (case next-status
    "Approved" (update-state current-project next-status db)
    (str "Reviewed status, can not advance to " next-status)))

(defmethod validate-new-status "Approved" [current-project next-status db]
  (case next-status
    "Denied" (update-state current-project next-status db)
    (str "Approved status, can not advance to " next-status)))

(defmethod validate-new-status "Denied" [current-project next-status db]
  (case next-status
    "Reviewed" (update-state current-project next-status db)
    (str "Approved status, can not advance to " next-status)))

(defmethod validate-new-status :default [_ next-status _]
  (str next-status " status is not recognized"))

(defn update-project
  [id status db]
  (-> id
      (get-project db)
      (validate-new-status status db)))

(defn remove-project
  [project db]
  (let [id (:id project)
        query (-> {:delete-from :projects
                   :where [:= :id id]}
                  (sql/format))]
    (jdbc/execute-one! db query {})
    project))

(defn delete-history
  [removed-project db]
  (let [id (:id removed-project)
        query (-> {:delete-from :projects_history
                   :where [:= :project_id id]}
                  (sql/format))]
    (jdbc/execute! db query {})
    removed-project))

(defn delete-project
  [id db]
  (-> id
      (get-project db)
      (remove-project db)
      (delete-history db)))

(defn get-history
  [id db]
  (let [query (-> {:select [:projects_history.timestamp :projects.name :status.status_name]
                   :from [:projects_history]
                   :join [:status [:= :projects_history.status_id :status.id] :projects [:= :projects_history.project_id :projects.id]]
                   :where [:= :projects_history.project_id id]
                   :order-by [:projects_history.timestamp]}
                  (sql/format))]
    (jdbc/execute! db query {:return-keys true
                             :builder-fn rs/as-unqualified-lower-maps})))

(defn sanitize-output
  [coll]
  (if (vector? coll)
    (map (fn [user]
           (-> user
               (dissoc :id)
               (dissoc :password)))
         coll)
    (-> coll
        (dissoc :id)
        (dissoc :password))))

(defn get-users
  [db]
  (let [query (-> {:select [:*]
                   :from [:users]}
                  (sql/format))
        users (jdbc/execute! db query {:return-keys true
                                       :builder-fn rs/as-unqualified-lower-maps})]
    (sanitize-output users)))

(defn get-user
  [username password db]
  (let [query (-> {:select [:*]
                   :from [:users]
                   :where [:= :username username]}
                  (sql/format))
        user (jdbc/execute-one! db query {:return-keys true
                                          :builder-fn rs/as-unqualified-lower-maps})]
    (if (and user (check password (:password user)))
      (sanitize-output user)
      nil)))

(defn add-user
  [username password email db]
  (let [hashed-password (encrypt password)
        query (-> {:insert-into :users
                   :columns [:id :username :password :email]
                   :values [[(generate-uuid) username hashed-password email]]}
                  (sql/format))
        new-user (jdbc/execute-one! db query {:return-keys true
                                              :builder-fn rs/as-unqualified-lower-maps})]
    (sanitize-output new-user)))

(defn create-user
  [username password email db]
  (let [users (get-users db)]
    (if (empty? (filter #(= (:username %) username) users))
      (add-user username password email db)
      nil)))

(defmethod ig/init-key ::connection
  [_ config]
  (let [db-config (:db-config config)]
    (println "config" config)
    (create-connection db-config)))