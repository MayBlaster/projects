(ns projects.api
  (:require [integrant.core :as ig]))

(def response-status
  {:get 200
   :post 202
   :put 201
   :delete 202})

(defn- get-response-status
  [opts]
  (->> [:ctx :request-method]
       (get-in opts)
       (get response-status)))

(defn- try-handler
  [sym opts]
  (try
    (require (symbol (namespace sym)))
    {:status (get-response-status opts)
     :body ((resolve sym) opts)}
    (catch Exception e {:status 500
                        :body {:message (.getMessage e)
                               :trace (pr-str e)}})))

(defn- api-login-resources
  [opts]
  (let [sym (::symbol opts)
        db (::db opts)
        auth (::auth opts)]
    (fn [ctx]
      (try-handler sym (-> {}
                           (assoc :db db)
                           (assoc :ctx ctx)
                           (assoc :auth auth))))))

(defn- api-resources
  [opts]
  (let [sym (::symbol opts)
        db (::db opts)]
    (fn [ctx]
      (try-handler sym (-> {}
                           (assoc :db db)
                           (assoc :ctx ctx))))))

(defmethod ig/init-key ::api-resources
  [_ opts]
    ;(assoc opts :handler )
  (api-resources opts))

(defmethod ig/init-key ::api-login-resources
  [_ opts]
  ;(assoc opts :handler )
  (api-login-resources opts))