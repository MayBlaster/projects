(ns user
  (:require [integrant.repl :as ig-repl :refer [reset]]
            [projects.system :as system]))

(clojure.tools.namespace.repl/set-refresh-dirs "dev/src" "src" "test")

(ig-repl/set-prep! #(system/system-config))