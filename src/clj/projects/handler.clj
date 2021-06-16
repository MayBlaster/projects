(ns projects.handler
  (:require [projects.db :as db]
            [clj-time.format :refer [unparse formatter]]
            [clj-time.coerce :as c]
            [projects.auth :refer [create-token]]))

(defn string-to-uuid
  [s]
  (java.util.UUID/fromString s))

(defn timestamp-to-date
  [project]
  (unparse
   (formatter "yyyy-MM-dd HH:mm:ss")
   (c/from-long (/ (:timestamp project) 1000))))

(defn project-timestamp-to-date
  [response]
  (let [convert-time #(assoc % :timestamp (timestamp-to-date %))]
    (cond
      (vector? response) (->> response
                              (map convert-time))
      
      (map? response) (->> response
                           (timestamp-to-date)
                           (assoc response :timestamp))
      
      (nil? response) (assoc {} :error "Given Id does not exists")

      (string? response) (assoc {} :error response)
      
      :else "project-timestamp-to-date got unkown type")))

(defn get-all-status
  [{:keys [db]}]
  (-> db
      (db/get-all-status)))

(defn get-projects
  [{:keys [db]}]
  (->> db
       (db/get-projects)
       (project-timestamp-to-date)))

(defn put-project
  [{:keys [ctx db]}]
  (-> ctx
      (:body-params)
      (db/insert-project db)
      (project-timestamp-to-date)))

(defn get-project
  [{:keys [ctx db]}]
  (-> ctx
      (:path-params)
      (:id)
      (string-to-uuid)
      (db/get-project db)
      (project-timestamp-to-date)))

(defn post-project
  [{:keys [ctx db]}]
  (let [status (get-in ctx [:body-params :status])
        id (string-to-uuid (get-in ctx [:path-params :id]))]
    (-> id
        (db/update-project status db)
        (project-timestamp-to-date))))

(defn delete-project
  [{:keys [ctx db]}]
  (-> ctx
      (:path-params)
      (:id)
      (string-to-uuid)
      (db/delete-project db)
      (project-timestamp-to-date)))

(defn get-history
  [{:keys [ctx db]}]
  (-> ctx
      (:path-params)
      (:id)
      (string-to-uuid)
      (db/get-history db)
      (project-timestamp-to-date)))

(defn ping
  [_]
  {:repsonse "pong"})

(defn users
  [{:keys [db]}]
  (db/get-users db))

(defn register
  [{:keys [ctx db]}]
  (let [username (get-in ctx [:body-params :username])
        password (get-in ctx [:body-params :password])
        email (get-in ctx [:body-params :email])
        new-user (db/create-user username password email db)]
    (if new-user
      {:user new-user}
      {:error "Username: " username " is already taken, choose another username"})))

(defn login
  [{:keys [ctx db auth]}]
  (let [username (get-in ctx [:body-params :username])
        password (get-in ctx [:body-params :password])
        user (db/get-user username password db)
        exp-date (:exp auth)]
    (if user
      {:user user
       :token (create-token exp-date)}
      {:error "Invalid Credentials"})))