(ns projects.components.user-view
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            ["react-router-dom" :as rr]))

(defnc view-user []
  (let [user-id (.. (rr/useParams)
                    -id)]
    (d/div
     (d/h2 "Welcome to view user")
     ($ rr/NavLink {:to (str user-id "/edit")}
        (d/button {:class '[bg-green-500 text-white px-1 py-1 rounded]
                   :style {:vertical-align "top"
                           :display "inline-block"}}
                  "Edit user")))))