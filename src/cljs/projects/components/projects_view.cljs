(ns projects.components.projects-view
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [projects.components.back-end :refer [get-projects]]
            [projects.components.state :refer [use-app-state]]
            [projects.components.project-list :refer [project-list]]))

(defnc projects []
  (let [[app-state actions] (use-app-state)
        set-projects (:set-projects actions)
        token (:token app-state)]
    (hooks/use-effect
     :once
     (get-projects set-projects token))
    (d/div {:class "container pt-4"}
           ($ project-list))))
