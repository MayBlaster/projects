(ns projects.auth
  (:require [buddy.auth.backends :as backends]
            [buddy.auth.middleware :refer [wrap-authentication]]
            [buddy.sign.jwt :as jwt]
            [buddy.auth :refer [authenticated?]]
            [integrant.core :as ig]
            [clj-time.core :as t]
            [clj-time.coerce :as c]))

;(def jwt-secret "JWT_SECRET")

(defonce *token (atom {}))

(defn rand-str [len]
  (apply str (take len (repeatedly #(char (+ (rand 26) 65))))))

(defn create-token
  [exp]
  (let [exp (->> exp
                (t/minutes)
             (t/plus (t/now)))]
  (jwt/sign {:token (rand-str 36)
             :exp exp} (get @*token :token))))

(defn authetication-middleware
  [handler]
  (fn
    ([request]
     (if (authenticated? request)
       (handler request)
       {:status 401 :body {:error "Unauthorized"}}))))

(defmethod ig/init-key ::auth-config
  [_ config]
  (let [secret (:secret config)
        token-name (:token-name config)
        exp (:exp config)
        backend (backends/jws {:secret secret
                               :token-name token-name})]
    (swap! *token assoc :token secret)
    (-> {}
        (assoc :backend backend)
        (assoc :exp exp))))

(defmethod ig/init-key ::authentication-middleware
  [_ {:keys [config]}]
  (let [backend (:backend config)
        wrap-fn (fn [handler]
                  (-> handler
                      (authetication-middleware)
                      (wrap-authentication backend)))
        item {:name :authorization-middleware
              :wrap wrap-fn}]
    (conj '() item)))

