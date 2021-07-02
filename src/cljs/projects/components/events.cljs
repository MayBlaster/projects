(ns projects.components.events)

(defn set-color
  [i]
  (if (odd? i)
    "#BFBFBF"
    "#AAAAAA"))

(defn change-color-on-over [event]
  (let [cell-index-js (.. event
                          -target
                          -cellIndex)
        js-tr-nodes (.. event
                        -target
                        -parentNode
                        -parentNode
                        -childNodes)
        js-horizontal-nodes (.. event -target -parentNode -childNodes)]
    (doall
     (for [item (js->clj js-tr-nodes)]
       (let [js-obj (clj->js item)
             clj-tds (js->clj (.. js-obj
                                  -childNodes))
             hit-js-td (clj->js (nth (into [] clj-tds) cell-index-js))]
         (set! (.. hit-js-td
                   -style
                   -backgroundColor) "grey"))))
    (doall
     (for [item (js->clj js-horizontal-nodes)]
       (set! (.. item
                 -style
                 -backgroundColor) "grey")))))

(defn change-color-on-leave [event]
  (let [row-index (.. event -target -parentNode -rowIndex)
        cell-index-js (.. event
                          -target
                          -cellIndex)
        js-tr-nodes (.. event
                        -target
                        -parentNode
                        -parentNode
                        -childNodes)
        js-horizontal-nodes (.. event
                                -target
                                -parentNode
                                -childNodes)]
    (doall
     (for [item (js->clj js-tr-nodes)]
       (let [js-obj (clj->js item)
             row-index (.. js-obj -rowIndex)
             clj-tds (js->clj (.. js-obj
                                  -childNodes))
             hit-js-td (clj->js (nth (into [] clj-tds) cell-index-js))]
         (set! (.. hit-js-td
                   -style
                   -backgroundColor) (set-color (- row-index 1))))))
    (doall
     (for [item (js->clj js-horizontal-nodes)]
       (set! (.. item
                 -style
                 -backgroundColor) (set-color (- row-index 1)))))))