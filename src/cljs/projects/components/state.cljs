(ns projects.components.state
  (:require [helix.core :refer [create-context]]
            [helix.hooks :as hooks]))

(def initial-state {:selected nil
                    :projects []
                    :project-history []
                    :user nil
                    :token nil
                    :message nil})

(def app-state (create-context nil))


(defmulti app-reducer 
  (fn [_ action]
    (first action)))

(defmethod app-reducer
  ::set-projects [state [_ payload]]
  (assoc state :projects payload))

(defmethod app-reducer
  ::set-project-history [state [_ payload]]
  (assoc state :project-history payload))

(defmethod app-reducer
  ::set-selected [state [_ payload]]
  (assoc state :selected payload))

(defmethod app-reducer
  ::remove-project [state [_ payload]]
  (let [prev (:projects state)
        next (remove #(= (:id payload) (:id %)) prev)]
    (-> state
        (assoc :projects next)
        (assoc :project-history []))))

(defmethod app-reducer
  ::add-project [state [_ payload]]
  (update state :projects #(conj % payload)))

(defmethod app-reducer
  ::update-project [state [_ payload]]
  (update state :projects #(map (fn [project]
                                  (if (= (:id project) (:id payload))
                                    payload
                                    project))
                                %)))

(defmethod app-reducer
  ::new-project [state _]
  (assoc state :selected {:status-name "Initial"
                          :name ""}))

(defmethod app-reducer
  ::authenticate [state [_ payload]]
  (let [clj-payload (js->clj payload)]
    (-> state
        (assoc :user (:user clj-payload))
        (assoc :token (:token clj-payload)))))

(defmethod app-reducer
  ::set-message [state [_ payload]]
  (assoc state :message payload))

(defmethod app-reducer
  ::sign-out [_ _]
  initial-state)


(defn use-app-state []
  (let [[state dispatch] (hooks/use-context app-state)]
    [state {:set-projects #(dispatch [::set-projects %])
            :set-project-history #(dispatch [::set-project-history %])
            :set-selected #(dispatch [::set-selected %])
            :remove-project #(dispatch [::remove-project %])
            :add-project (fn [event] 
                           (dispatch [::add-project event])
                           (dispatch [::set-selected nil]))
            :new-project #(dispatch [::new-project nil])
            :update-project (fn [event]
                              (dispatch [::update-project event])
                              (dispatch [::set-selected nil]))
            :authenticate #(dispatch [::authenticate %])
            :sign-out #(dispatch [::sign-out %])
            :set-message #(dispatch [::set-message %])}]))