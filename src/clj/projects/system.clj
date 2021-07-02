(ns projects.system
  (:require [integrant.core :as ig]
            [org.httpkit.server :refer [run-server]]
            [aero.core :as ae]))

(defmethod ae/reader 'ig/ref
  [_ _ value]
  (ig/ref value))

(defn get-config
  []
  (ae/read-config "config.edn"))

(defn system-config []
  (let [config (get-config)
        sys-config (:projects/system config)]
    (ig/load-namespaces sys-config)
    (ig/prep sys-config)))

(defmethod ig/init-key ::host
  [_ {:keys [port app]}]
  (let [nbr-port (if (string? port)
                   (Integer/parseInt port)
                   port)]
    (println "server is running!")
    (run-server app {:port nbr-port})))

(defmethod ig/halt-key! ::host
  [_ server]
  (server :timeout 100))

(defn exec-config []
  (-> (system-config)
      (ig/init)))

(defn -main []
  (exec-config))