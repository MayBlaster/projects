(ns projects.components.back-end
  (:require [ajax.core :refer [PUT POST GET DELETE]]
            [promesa.core :as p]
            [projects.components.utils :refer [next-status]]
            [projects.components.messsages :as messages]
            [integrant.core :as ig]))

(def conn (atom nil))

(defn delete-project
  [remove-project project token]
  (DELETE (str "http://" (:host @conn) ":" (:port @conn) "/backend/api/project/" (:id project))
    {:headers {"authorization" (str "Bearer " token)}
     :handler #(remove-project project)}))

(defn register-user 
  [user alert-action]
  (PUT (str "http://" (:host @conn) ":" (:port @conn) "/backend/register")
    :format :json
    :params user 
    :handler (fn [response]
               (if (contains? response :error)
                 (alert-action {:status false
                                :message messages/register-fail})
                 (alert-action {:status true
                                :message (messages/register-success (:username user))})))))

(defn autheticate-user
  [user autheticate-action alert-action]
  (POST (str "http://" (:host @conn)":" (:port @conn) "/backend/login")
    {:format :json
     :params user
     :handler (fn [response]
                (if (contains? response :error)
                  (alert-action {:status false
                                 :message messages/auth-fail})
                  (doall
                   (autheticate-action response)
                   (alert-action {:status true
                                  :message messages/auth-success}))))}))

(defn get-projects
  [set-projects token]
  (GET (str "http://" (:host @conn) ":" (:port @conn) "/backend/api/project")
    {:headers {"authorization" (str "Bearer " token)}
     :handler (fn [response]
                (set-projects response))}))

(defn post-project
  [state token]
  (p/promise
   (fn [resolve reject]
     (POST (str "http://" (:host @conn) ":" (:port @conn) "/backend/api/project/" (:id state))
       {:format :json
        :headers {"authorization" (str "Bearer " token)}
        :params {:status (next-status {:project state})}
        :handler resolve
        :error-handler reject}))))

(defn get-history
  [handler state token]
  (GET (str "http://" (:host @conn) ":" (:port @conn) "/backend/api/project/" (:id state) "/history")
    {:headers {"authorization" (str "Bearer " token)}
     :handler #(handler %)}))

(defn put-project
  [state token]
  (p/promise
   (fn [resolve reject]
     (PUT (str "http://" (:host @conn) ":" (:port @conn) "/backend/api/project")
       {:format :json
        :headers {"authorization" (str "Bearer " token)}
        :params {:name (:name state)
                 :status "Initiated"}
        :handler resolve
        :error-handler reject}))))

(defn update-
  [update-project set-project-history response token alert-action]
  (response (fn [data]
              (update-project data)
              (get-history set-project-history data token)
              (alert-action {:status true
                             :message messages/post-project-success}))))

(defn add-
  [add-project set-project-history response token alert-action]
  (response (fn [data]
              (add-project data)
              (get-history set-project-history data token)
              (alert-action {:status true
                             :message (messages/put-project-success (:name data))}))))

(defn add-state
  [add-project set-project-history state token alert-action]
  (-> (put-project state token)
      (p/then (fn [response]
                (if (contains? response :error)
                  (alert-action {:status false
                                 :message (messages/put-project-fail (:name state))})
                  (add- add-project set-project-history response token alert-action))))
      (p/catch (fn [error]
                 (js/console.log "error in promisa" error)))))


(defn update-state
  [update-project set-project-history state token alert-action]
  (-> (post-project state token)
      (p/then (fn [response]
                (update- update-project set-project-history response token alert-action)))
      (p/catch (fn [error]
                 (js/console.log "error in promisa" error)))))

(defmethod ig/init-key ::connection
  [_ config]
  (reset! conn config))