(ns projects.components.home-view
  (:require [projects.components.state :refer [use-app-state]]
            [helix.core :refer [defnc $]]
            [projects.components.buttons :refer [login-project-buttons-component]]
            [helix.dom :as d]))




(defnc home-page []
  (let [[app-state _] (use-app-state)
        user (:user app-state)]
    (d/div {:style {:text-align "center"
                    :margin-top "20px"}}
           (d/div
            (d/h1 {:style {:display :center}}
                  "Welcome"))
           ($ login-project-buttons-component {:user user}))))