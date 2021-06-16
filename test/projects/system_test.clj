(ns projects.system-test
  (:require [clojure.test :refer [deftest testing is]]
            [projects.handler :as ph]
            [projects.db :as pd]))

(def temp-projects
  [{:id 1
    :name "p1"
    :status_name "Initiated"}])

(defn get-project-test
  [arg _]
  (->> temp-projects
       (filter #(= arg (:id %)))
       (first)))

(defn get-project-map-test
  [arg _]
  (-> arg
      (get-project-test nil)
      (first)))


(deftest get-project
  (testing "Get project"
    (with-redefs [pd/get-project get-project-test
                  ph/project-timestamp-to-date (fn [arg] arg)
                  ph/string-to-uuid (fn [arg] arg)]
      (let [resp-ok (ph/get-project {:ctx {:path-params {:id 1}}})
            resp-fail (ph/get-project {:ctx {:path-params {:id 2}}})]
        (is (map? resp-ok))
        (is (nil? resp-fail))))))

(deftest add-project
  (testing "Insert a new project"
    (with-redefs [ph/project-timestamp-to-date (fn [arg] arg)
                  ph/string-to-uuid (fn [arg] arg)
                  pd/get-projects (fn [_] temp-projects)
                  pd/check-valid-status (fn [arg _] arg)]
      (let [resp-ok (ph/put-project {:ctx {:body-params {:name "p2"}}})
            resp-fail (ph/put-project {:ctx {:body-params {:name "p1"}}})]
        (is (map? resp-ok))
        (is (string? resp-fail))))))

(deftest post-project
  (testing "Update an existing project project"
    (with-redefs [pd/get-project get-project-test
                  ph/project-timestamp-to-date (fn [arg] arg)
                  ph/string-to-uuid (fn [arg] arg)
                  pd/get-projects (fn [_] temp-projects)
                  pd/update-state (fn [arg _ _] arg)]
      (let [resp-ok (ph/post-project {:ctx {:path-params {:id 1}
                                            :body-params {:status "Reviewed"}}})
            resp-fail (ph/post-project {:ctx {:path-params {:id 1}
                                              :body-params {:status nil}}})
            resp-fail-2 (ph/post-project {:ctx {:path-params {:id 1}
                                                :body-params {:status "Denied"}}})]
        (is (map? resp-ok))
        (is (string? resp-fail))
        (is (string? resp-fail-2))))))

(deftest delete-project
  (testing "Remove an existing project project"
    (with-redefs [pd/get-project get-project-test
                  ph/project-timestamp-to-date (fn [arg] arg)
                  ph/string-to-uuid (fn [arg] arg)
                  pd/get-projects (fn [_] temp-projects)
                  pd/remove-project (fn [arg _] arg)
                  pd/delete-history (fn [arg _] arg)]
      (let [resp-ok (ph/delete-project {:ctx {:path-params {:id 1}}})
            resp-fail (ph/delete-project {:ctx {:path-params {:id 2}}})]
        (is (map? resp-ok))
        (is (nil? resp-fail))))))