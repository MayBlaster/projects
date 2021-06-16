(ns projects.useful-macros
  (:require [aero.core :as ae]))

(defmacro inline-resource [resource-path]
  (ae/read-config resource-path))