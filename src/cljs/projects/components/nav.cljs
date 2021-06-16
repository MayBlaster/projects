(ns projects.components.nav
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            ["react-router-dom" :as rr]
            [projects.components.state :refer [use-app-state]]))

(defnc alert-success [{:keys [action message]}]
  (js/setTimeout #(action nil) 3000)
  (d/div {:class '[alert alert-success]
          :style {:float "right"
                  :width "60%"}}
         (d/strong "Success! ") message))

(defnc alert-danger [{:keys [action message]}]
  (js/setTimeout #(action nil) 3000)
  (d/div {:class '[alert alert-danger]
          :style {:float "right"
                  :width "60%"}}
         (d/strong "Fail! ") message))

(defnc nav
  []
  (let [[app-state actions] (use-app-state)
        user (:user app-state)
        set-message (:set-message actions)
        message (:message app-state)
        sign-out (:sign-out actions)]
    (d/nav {:class "py-4 shadow"
          :style {:overflow "hidden"}}
         
         (d/div {:class "container-fluid pt-4"
                 :style {:width "95%"
                         :margin-left "5%"
                         :margin-right "1%"}}
                (d/div {:style {:width "40%"
                                :float "left"}}
                       (d/h2 {:class "text-xl"}
                             "Projects")
                       (if user
                         (d/div
                          (d/h2 {:class "py-1"
                                 :style {:display "inline-block"
                                         :margin-right "10px"}}
                                "Användare: " (d/strong (:username user)))
                          ($ rr/NavLink {:to (str "/user/" (:username user))}
                             (d/button {:class '[bg-green-500 text-white px-1 py-1 rounded]
                                        :style {:display "inline-block"
                                                :margin-right "10px"}}
                                       "Edit user"))
                          ($ rr/NavLink {:to (str "/")}
                             (d/button {:class '[bg-green-500 text-white px-1 py-1 rounded]
                                        :style {:display "inline-block"}
                                        :on-click (fn [_]
                                                    (sign-out))}
                                       "Sign out")))
                         (d/div
                          (d/h2 {:class "py-1"
                                 :style {:display "inline-block"
                                         :margin-right "10px"}}
                                "Ej Inloggad"))))
                
                (cond
                  (nil? (:status message)) (d/div)
                  (= true (:status message)) ($ alert-success {:action set-message
                                                               :message (:message message)}) 
                  (= false (:status message)) ($ alert-danger {:action set-message
                                                               :message (:message message)}))))))