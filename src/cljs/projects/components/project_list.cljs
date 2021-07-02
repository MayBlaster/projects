(ns projects.components.project-list
  (:require [helix.dom :as d]
            [helix.core :refer [defnc $]]
            [projects.components.state :refer [use-app-state]]
            [projects.components.project-history :refer [display-history]]
            [projects.components.project-table :refer [project-table]]
            [projects.components.project-form :refer [project-form]]))

(defnc project-list []
  (let [[app-state action] (use-app-state)
        token (:token app-state)
        projects (:projects app-state)
        project-history (:project-history app-state)
        columns (->> projects
                     (first)
                     (keys)
                     (remove #(= :id %)))]
    (d/div {:style {:overflow "hidden"}}
           (d/div {:style {:float "left"
                           :width "50%"
                           :margin-right "20px"}}
                  ($ project-table {:columns columns
                                    :projects projects
                                    :action action
                                    :token token})
                  ($ project-form))
           (if (empty? project-history)
             (d/p "Click on a project to view project history")
             ($ display-history {:project-history project-history})))))
