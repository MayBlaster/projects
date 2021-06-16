(ns projects.components.edit-user-view
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]))

(defnc edit-user []
  (d/h2 "Welcome to user edit"))