(ns projects.components.project-form
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [projects.components.state :refer [use-app-state]]
            [projects.components.back-end :as backend]
            [projects.components.utils :refer [next-status]]))

(defnc project-display
  [{:keys [project]}]
  (d/div
   (d/p {:key 0}
        (d/strong "Project: ")
        (:name project))
   (d/p {:key 1}
        (d/strong "Current Status ")
        (:status_name project))))

(defnc project-edit
  [{:keys [project]}]
  (let [[state set-state] (hooks/use-state project)
        [app-state actions] (use-app-state)
        token (:token app-state)
        selected (:selected app-state)
        {:keys [add-project update-project set-project-history set-message]} actions]
    (case (not (= (:id state) (:id project)))
      true (set-state project)
      false nil)
    (d/form {:on-submit (fn [e]
                          (.preventDefault e)
                          (if (:id selected)
                            (backend/update-state update-project set-project-history state token set-message)
                            (backend/add-state add-project set-project-history state token set-message)))}
            (if (nil? (:id state))
              (<>
               (d/p {:key 0}
                    (d/label {:for "name"}
                             "New Project: ")
                    (d/input {:class '[shadow border rounded py-2 px-3 mb-3]
                              :id "name"
                              :value (:name state)
                              :on-change #(set-state
                                           (assoc state :name (.. %
                                                                  -target
                                                                  -value)))}))
               (d/p {:key 1}
                    (d/strong "Status: ")
                    "Initiated"))
              (<>
               (d/p {:key 0}
                    (d/strong "Project: ")
                    (:name state))
               (d/p {:key 1}
                    (d/strong "Current Status: ")
                    (:status_name state))
               (d/p {:key 2}
                    (d/strong "Update Status to: ")
                    (next-status {:project state}))))
            (d/button {:class '[bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2]
                       :type "submit"}
                      "Submit"))))

(defnc project-form []
  (let [[edit set-edit] (hooks/use-state false)
        [state actions] (use-app-state)
        new-project (:new-project actions)
        project (:selected state)]
    (hooks/use-effect
     [project]
     (if (not (:id project))
       (set-edit true)
       (set-edit false)))
    (d/div
     (d/div {:class '[mb-2 mt-2]}
            (d/button {:class '[bg-blue-500 text-white px-1 py-1 rounded]
                       :style {:margin-right "20px"}
                       :on-click (fn [_]
                                   (new-project)
                                   (set-edit true))}
                      "New Project")
            (d/button {:class '[bg-blue-500 text-white px-1 py-1 rounded]
                       :on-click #(set-edit true)}
                      "Edit Project"))
     (if (nil? project)
       (d/p "")
       (if edit
         ($ project-edit {:project project})
         ($ project-display {:project project}))))))