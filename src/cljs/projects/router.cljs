(ns projects.router
  (:require ["react-router-dom" :as rr]
            [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [projects.components.nav :refer [nav]]
            [projects.components.state :refer [use-app-state]]
            [projects.components.home-view :refer [home-page]]
            [projects.components.login-view :refer [login-page]]
            [projects.components.projects-view :refer [projects]]
            [projects.components.user-view :refer [view-user]]
            [projects.components.register-view :refer [register]]
            [projects.components.edit-user-view :refer [edit-user]]))

(defnc routes []
  (let [[app-state _] (use-app-state)]
    ($ rr/BrowserRouter
       (<>
        ($ nav)
        ($ rr/Switch
           ($ rr/Route {:path "/register" :exact true}
              ($ register))
           ($ rr/Route {:path "/user/:id" :exact true}
              ($ view-user))
           ($ rr/Route {:path "/user/:id/edit" :exact true}
              ($ edit-user))
           ($ rr/Route {:path "/login" :exact true}
              ($ login-page))
           ($ rr/Route {:path "/" :exact true}
              ($ home-page))
           ($ rr/Route {:path "/projects" :exact true}
              (if (:user app-state)
                ($ projects)
                (d/div)))
           ($ rr/Route {:path "/dummy"}
              (d/h1 "dummy")))))))