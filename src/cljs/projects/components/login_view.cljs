(ns projects.components.login-view
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [projects.components.back-end :refer [autheticate-user]]
            [projects.components.state :refer [use-app-state]]
            [projects.components.buttons :refer [login-project-buttons-component]]))

(defnc login-page []
  (let [[state set-state] (hooks/use-state {:username ""
                                            :password ""})
        [app-state actions] (use-app-state)
        set-message (:set-message actions)
        authenticate (:authenticate actions)
        user (:user app-state)]

    (d/div {:style {:text-align "center"
                    :margin-top "20px"}}
           (d/div
            (d/form {:on-submit (fn [e]
                                  (.preventDefault e)
                                  (autheticate-user state authenticate set-message))}
                    (d/p {:key 0}
                         (d/label {:for "username"}
                                  "Username: ")
                         (d/input {:class '[shadow border rounded py-2 px-3 mb-3]
                                   :id "username"
                                   :value (:username state)
                                   :on-change #(set-state
                                                (assoc state :username (.. %
                                                                           -target
                                                                           -value)))}))
                    (d/p {:key 1}
                         (d/label {:for "password"}
                                  "Password: ")
                         (d/input {:class '[shadow border rounded py-2 px-3 mb-3]
                                   :id "password"
                                   :value (:password state)
                                   :on-change #(set-state
                                                (assoc state :password (.. %
                                                                           -target
                                                                           -value)))}))
                    (d/button {:class '[bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2]
                               :type "submit"}
                              "Authenticate")))
           ($ login-project-buttons-component {:user user}))))
