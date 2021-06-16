(ns projects.components.utils)

(defn next-status
  [{:keys [project]}]
  (cond
    (= "Initiated" (:status_name project)) "Reviewed"
    (= "Reviewed" (:status_name project)) "Approved"
    (= "Approved" (:status_name project)) "Denied"
    (= "Denied" (:status_name project)) "Reviewed"))