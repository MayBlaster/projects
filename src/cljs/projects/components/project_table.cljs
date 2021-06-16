(ns projects.components.project-table
  (:require [helix.dom :as d]
            [helix.core :refer [defnc]]
            [projects.components.buttons :refer [on-click-select on-click-delete]]
            [projects.components.events :refer [change-color-on-over
                                                change-color-on-leave
                                                set-color]]
            [clojure.string :refer [replace capitalize]]))

(defnc project-table [{:keys [columns projects action token]}]
  (d/table {:style {:border "1px solid black"
                    :text-align :center
                    :width "100%"}}
           (d/thead {:style {:border "1px solid black"
                             :background-color "#BFBFBF"}}
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
                      :style {:border "1px solid black"
                              :background-color (set-color i)}}
                     (map-indexed
                      (fn [j item]
                        (d/td {:key j
                               :style {:border "1px solid black"
                                       :center true}
                               :on-mouse-leave change-color-on-leave
                               :on-mouse-over change-color-on-over}
                              item))
                      (-> project
                          (dissoc :id)
                          (vals)))
                     (d/td
                      (d/div
                       (d/button {:class '[bg-blue-500 text-white px-1 py-1 rounded]
                                  :on-click (fn [response]
                                              (on-click-select response projects action token))}
                                 "Select")
                       (d/button {:class '[bg-red-500 ml-2 text-white px-1 py-1 rounded]
                                  :on-click (fn [response]
                                              (on-click-delete response projects action token))}
                                 "Delete")))))
             projects))))