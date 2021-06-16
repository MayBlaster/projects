(ns projects.package
  (:require [uberdeps.api :as uberdeps]))

(defn package
  []
  (let [exclusions (into uberdeps/exclusions [#"\.DS_Store" #".*\.cljs" #"cljsjs/.*"])
        deps       (clojure.edn/read-string (slurp "deps.edn"))]
    (binding [uberdeps/exclusions exclusions
              uberdeps/level      :warn]
      (uberdeps/package deps "target/uber.jar" {:aliases #{:uberjar}}))))

(defn -main []
  (package))