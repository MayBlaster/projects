(ns projects.components.project-history
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]
            [clojure.string :refer [replace capitalize]]))

(defnc display-history
  [{:keys [project-history]}]
  (let [columns (-> project-history
                    (first)
                    (dissoc :name)
                    (keys))
        project-name (-> project-history
                         (first)
                         (:name))]
    (d/div
     (d/p {:style {:margin-bottom "10px"}}
          (d/strong
           (str "Project: " project-name)))
     (d/table {:style {:border "1px solid black"
                       :width "30%"
                       :text-align :center}}
              (d/thead {:style {:border "1px solid black"}}
                       (d/tr {:key 1}
                             (map-indexed
                              (fn [i col]
                                (d/th {:key i}
                                      (-> col
                                          (name)
                                          (replace "_" " ")
                                          (capitalize))))
                              columns)))
              (d/tbody
               (map-indexed
                (fn [i project]
                  (d/tr {:key i
                         :style {:border "1px soild black"}}
                        (map-indexed
                         (fn [j item]
                           (d/td {:key j
                                  :style {:border "1px solid black" :center true}}
                                 item))
                         (-> project
                             (dissoc :name)
                             (vals)))))
                project-history))))))

