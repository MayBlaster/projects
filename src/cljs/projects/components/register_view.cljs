(ns projects.components.register-view
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [projects.components.back-end :refer [register-user]]
            [projects.components.state :refer [use-app-state]]
            [projects.components.buttons :refer [login-project-buttons-component]]))

(defnc register []
  (let [[state set-state] (hooks/use-state {:username ""
                                            :password ""
                                            :email ""})
        [app-state actions] (use-app-state)
        set-message (:set-message actions)
        user (:user app-state)]
    (d/div {:class "container pt-4"}
           (d/form {:on-submit (fn [e]
                                 (.preventDefault e)
                                 (register-user state set-message))}
                   (d/p {:key 0}
                        (d/label {:for "username"
                                  :style {:margin-right "20px"}}
                                 "Username: ")
                        (d/input {:class '[shadow border rounded py-2 px-3 mb-3]
                                  :id "username"
                                  :value (:username state)
                                  :on-change #(set-state (assoc state :username (.. %
                                                                                    -target
                                                                                    -value)))}))
                   (d/p {:key 1}
                        (d/label {:for "password"
                                  :style {:margin-right "20px"}}
                                 "Password: ")
                        (d/input {:class '[shadow border rounded py-2 px-3 mb-3]
                                  :id "password"
                                  :value (:password state)
                                  :on-change #(set-state (assoc state :password (.. %
                                                                                    -target
                                                                                    -value)))}))
                   (d/p {:key 2}
                        (d/label {:for "email"
                                  :style {:margin-right "20px"}}
                                 "Email: ")
                        (d/input {:class '[shadow border rounded py-2 px-3 mb-3]
                                  :id "email"
                                  :value (:email state)
                                  :on-change #(set-state (assoc state :email (.. %
                                                                                 -target
                                                                                 -value)))}))
                   (d/button {:class '[bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2]
                              :type "submit"}
                             "Submit"))
           ($ login-project-buttons-component {:user user}))))