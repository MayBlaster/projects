(ns projects.routes
  (:require [reitit.ring :as ring]
            [muuntaja.core :as m]
            [ring.middleware.cors :refer [wrap-cors]]
            [reitit.coercion.schema]
            [reitit.swagger :as swagger]
            [reitit.ring.coercion :refer [coerce-exceptions-middleware
                                          coerce-request-middleware
                                          coerce-response-middleware]]
            [reitit.ring.middleware.muuntaja :refer [format-negotiate-middleware
                                                     format-response-middleware
                                                     format-request-middleware]]
            [reitit.ring.middleware.exception :refer [exception-middleware]]
            [integrant.core :as ig]
            [reitit.swagger-ui :as swagger-ui]))

(defmethod ig/init-key ::routes
  [_ {:keys [routes]}]
  (ring/ring-handler
   (ring/router
    routes
    {:data {:coercion reitit.coercion.schema/coercion
            :muuntaja m/instance
            :middleware [
                         [wrap-cors
                          :access-control-allow-origin [#".*"] ; to allow all access #".*" for docker-compose #"http://localhost:8080"
                          :access-control-allow-methods [:get :put :post :delete]]
                         format-negotiate-middleware
                         format-response-middleware
                         exception-middleware
                         format-request-middleware
                         coerce-response-middleware
                         coerce-request-middleware
                         ;coerce-exceptions-middleware
                         swagger/swagger-feature]}})
   (ring/routes
    (swagger-ui/create-swagger-ui-handler {:path "/backend/doc"})
    (ring/redirect-trailing-slash-handler {:method :both})
    (ring/create-default-handler
     (:not-found (constantly {:status 404
                              :body "Route not found"}))))))

(defmethod ig/init-key ::swagger-handler
  [_ _]
  (swagger/create-swagger-handler))
