(ns projects.components.buttons
  (:require [projects.components.back-end :as backend]
            [helix.core :refer [defnc $]]
            ["react-router-dom" :as rr]
            [helix.dom :as d]))

(defn on-click-select
  [on-click-response projects action token]
  (let [index (- (.. on-click-response
                     -target
                     -parentNode
                     -parentNode
                     -parentNode
                     -rowIndex) 1)
        set-project-history (:set-project-history action)
        set-selected (:set-selected action)
        project (nth projects index)]
    (backend/get-history set-project-history project token)
    (set-selected project)))

(defn on-click-delete
  [on-click-response projects action token]
  (let [index (- (.. on-click-response
                     -target
                     -parentNode
                     -parentNode
                     -parentNode
                     -rowIndex) 1)
        remove-project (:remove-project action)
        project (nth projects index)]
    (backend/delete-project remove-project project token)))

(defnc login-project-buttons-component
  [{:keys [user]}]
  (let [color (if user
                "bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2"
                "bg-red-500 text-white px-1 py-1 rounded mb-2 mt-2")]
    (d/div {:style {:margin-top "20px"
                    :text-align "center"}}
           ($ rr/NavLink {:to "/register"}
              (d/button {:class '[bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2]
                         :style {:margin-right "20px"}}
                        "Register"))
           ($ rr/NavLink {:to "/login"}
              (d/button {:class '[bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2]
                         :style {:margin-right "20px"}}
                        "Login"))
           (if user
             ($ rr/NavLink {:to "/projects"}
                (d/button {:class '[bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2]}
                          "Projects"))
             (d/button {:class color}
                       "Projects")))))