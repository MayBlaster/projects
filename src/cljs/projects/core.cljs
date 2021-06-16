(ns projects.core
  (:require [helix.core :refer [defnc $ provider]]
            [helix.hooks :as hooks]
            ["react-dom" :as dom]
            [projects.components.state :refer [app-state app-reducer initial-state]]
            [projects.router :refer [routes]]
            [integrant.core :as ig])
  (:require-macros [projects.useful-macros :refer [inline-resource]]))
;npm install --save react-router-dom
; to compile cljs $ ./node_modules/.bin/shadow-cljs compile projects
; kubernetes "http://172.17.0.3:32220/api/project"

(defnc app
  []
  ($ routes))

(defnc provided-app
  []
  (provider {:context app-state
             :value (hooks/use-reducer app-reducer initial-state)}
            ($ app)))

;(defn ^:export ^:dev/after-load init
;  []
;  (dom/render ($ provided-app) (js/document.getElementById "app")))

(defn get-config
  []
  (inline-resource "cljs-config.edn"))

(defn system-config []
  (let [config (get-config)
        sys-config (:projects/core config)]
    ;(ig/load-namespaces sys-config)
    (ig/prep sys-config)))

(defn exec-config []
  (-> (system-config)
      (ig/init)))

(defn ^:export ^:dev/after-load init
  []
  (exec-config)
  (dom/render ($ provided-app) (js/document.getElementById "app")))

;------------------------------ Useful Fucntions ----------------------------------------------
; (-> js/document
;      (.getElementById "myHeader")
;      (.-innerHTML)
;      (set! "Hej Dennis"))
; this will change the value of a component with :id "myHeader" to "Hej Dennis",
; however this must be in context of an action, as in button :on-click(...)

