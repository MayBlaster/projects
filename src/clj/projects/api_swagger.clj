(ns projects.api-swagger
  (:require [integrant.core :as ig]))

(defmethod ig/init-key ::login
  [_ {:keys [handler]}]
  (-> {}
      (assoc :handler handler)
      (assoc :tags ["Login"])
      (assoc :description "Authenticates a user")
      (assoc :summary "Checks user credentials")
      (assoc :parameters [{:in "body"
                           :name "user"
                           :description "User credentials"
                           :schema {:type "object"
                                    :properties {:username {:type "string"}
                                                 :password {:type "string"}}}}])
      (assoc :responses {:200 {:description "Success response"
                               :schema {:type "object"
                                        :properties {:user {:type "object"
                                                            :properties {:username {:type "string"}
                                                                         :email {:type "string"}}}
                                                     :token {:type "string"}}}}
                         :401 {:description "Fail response"
                               :schema {:type "object"
                                        :properties {:error {:type "string"}}}}
                         :202 {:description "Fail response"
                               :schema {:type "object"
                                        :properties {:error {:type "string"}}}}})))

(defmethod ig/init-key ::register
  [_ _]
  (-> {}
      (assoc :tags ["Register"])
      (assoc :description "Add a new User")
      (assoc :summary "Register a User")
      (assoc :parameters [{:in "body"
                           :name "user"
                           :description "User credentials"
                           :schema {:type "object"
                                    :properties {:username {:type "string"}
                                                 :password {:type "string"}
                                                 :email {:type "string"}}
                                    :required [:username :password :email]}}])
      (assoc :respnses {:200 {:description "Success response"
                              :schema {:type "object"
                                       :properties {:username {:type "string"}
                                                    :password {:type "string"}}}}
                        :401 {:description "Fail response"
                              :schema {:type "object"
                                       :properties {:error {:type "string"}}}}})))

(defmethod ig/init-key ::users
  [_ _]
  (-> {}
      (assoc :tags ["Users"])
      (assoc :description "Get all current Users")
      (assoc :summary "Get all Users")
      (assoc :parameters [{:in "header"
                           :name "Authorization"
                           :required true
                           :schema {:type "string"
                                    :example "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IkVaVk5SRUtHV0tJTVR"}}])
      (assoc :respnses {:200 {:description "Success response"
                              :schema {:type "array"
                                       :items {:properties {:username {:type "string"}
                                                            :password {:type "string"}}}}}
                        :401 {:description "Fail response"
                              :schema {:type "object"
                                       :properties {:error {:type "string"}}}}})))

(defmethod ig/init-key ::ping
  [_ _]
  (-> {}
      (assoc :tags ["Ping"])
      (assoc :description "Ping api to test connection")
      (assoc :summary "Ping server")
      (assoc :parameters [{:in "header"
                           :name "Authorization"
                           :required true
                           :schema {:type "string"
                                    :example "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IkVaVk5SRUtHV0tJTVR"}}])
      (assoc :respnses {:200 {:description "Success response"
                              :type "string"}
                        :401 {:description "Fail response"
                              :schema {:type "object"
                                       :properties {:error {:type "string"}}}}})))

(defmethod ig/init-key ::status
  [_ _]
  (-> {}
      (assoc :tags ["Status"])
      (assoc :description "Get all avialable Statuses on projects")
      (assoc :summary "Get all Statuses")
      (assoc :parameters [{:in "header"
                           :name "Authorization"
                           :required true
                           :schema {:type "string"
                                    :example "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IkVaVk5SRUtHV0tJTVR"}}])
      (assoc :respnses {:200 {:description "Success response"
                              :type "object"
                              :properties {:status_name {:type "string"
                                                         :format "uuid"}}}
                        :401 {:description "Fail response"
                              :schema {:type "object"
                                       :properties {:error {:type "string"}}}}})))

(defmethod ig/init-key ::get-projects
  [_ _]
  (-> {}
      (assoc :tags ["Project"])
      (assoc :description "Get all existing Projects")
      (assoc :summary "Get Projects")
      (assoc :parameters [{:in "header"
                           :name "Authorization"
                           :required true
                           :schema {:type "string"
                                    :example "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IkVaVk5SRUtHV0tJTVR"}}])
      (assoc :responses {:200 {:description "Success response"
                               :schema {:type "object"
                                        :properties {:id {:type "string"
                                                          :format "uuid"}
                                                     :name {:type "string"}
                                                     :timestamp {:type "string"
                                                                 :format "date"}
                                                     :status_name {:type "string"}}}}
                         :401 {:description "Fail response"
                               :schema {:type "object"
                                        :properties {:error {:type "string"}}}}})))

(defmethod ig/init-key ::put-project
  [_ _]
  (-> {}
      (assoc :tags ["Project"])
      (assoc :description "Add a new project, project name need to be unique")
      (assoc :summary "Add Project")
      (assoc :parameters [{:in "body"
                           :name "Project"
                           :required true
                           :description "New Project"
                           :schema {:type "object"
                                    :properties {:name {:type "string"}
                                                 :status {:type "string"}}
                                    :required [:name :status]}}
                          {:in "header"
                           :name "Authorization"
                           :required true
                           :schema {:type "string"
                                    :example "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IkVaVk5SRUtHV0tJTVR"}}])
      (assoc :responses {:200 {:description "Success response"
                               :schema {:type "object"
                                        :properties {:id {:type "string"
                                                          :format "uuid"}
                                                     :name {:type "string"}
                                                     :timestamp {:type "string"
                                                                 :format "date"}
                                                     :status_name {:type "string"}}}}
                         :401 {:description "Fail response"
                               :schema {:type "object"
                                        :properties {:error {:type "string"}}}}})))

(defmethod ig/init-key ::get-project
  [_ _]
  (-> {}
      (assoc :tags ["Project"])
      (assoc :description "Get a existing Project")
      (assoc :summary "Get Project")
      (assoc :parameters [{:in "path"
                           :description "Project id"
                           :name "id"
                           :type "string"
                           :format "uuid"
                           :required true}
                          {:in "header"
                           :name "Authorization"
                           :required true
                           :schema {:type "string"
                                    :example "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IkVaVk5SRUtHV0tJTVR"}}])
      (assoc :responses {:200 {:description "Success response"
                               :schema {:type "object"
                                        :properties {:id {:type "string"
                                                          :format "uuid"}
                                                     :name {:type "string"}
                                                     :timestamp {:type "string"
                                                                 :format "date"}
                                                     :status_name {:type "string"}}}}
                         :401 {:description "Fail response"
                               :schema {:type "object"
                                        :properties {:error {:type "string"}}}}})))

(defmethod ig/init-key ::post-project
  [_ _]
  (-> {}
      (assoc :tags ["Project"])
      (assoc :description "Update a existing Project")
      (assoc :summary "Update Project")
      (assoc :parameters [{:in "path"
                           :description "Project id"
                           :name "id"
                           :type "string"
                           :format "uuid"
                           :required true}
                          {:in "body"
                           :description "Updated Project"
                           :schema {:type "object"
                                    :properties {:status {:type "string"}}
                                    :required [:status]}}
                          {:in "header"
                           :name "Authorization"
                           :required true
                           :schema {:type "string"
                                    :example "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IkVaVk5SRUtHV0tJTVR"}}])
      (assoc :responses {:200 {:description "Success response"
                               :schema {:type "object"
                                        :properties {:id {:type "string"
                                                          :format "uuid"}
                                                     :name {:type "string"}
                                                     :timestamp {:type "string"
                                                                 :format "date"}
                                                     :status_name {:type "string"}}}}
                         :401 {:description "Fail response"
                               :schema {:type "object"
                                        :properties {:error {:type "string"}}}}})))

(defmethod ig/init-key ::delete-project
  [_ _]
  (-> {}
      (assoc :tags ["Project"])
      (assoc :description "Delete a existing Project")
      (assoc :summary "Remove Project")
      (assoc :parameters [{:in "path"
                           :description "Project id"
                           :name "id"
                           :type "string"
                           :format "uuid"
                           :required true}
                          {:in "header"
                           :name "Authorization"
                           :required true
                           :schema {:type "string"
                                    :example "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IkVaVk5SRUtHV0tJTVR"}}])
      (assoc :responses {:200 {:description "Success response"
                               :schema {:type "object"
                                        :properties {:id {:type "string"
                                                          :format "uuid"}
                                                     :name {:type "string"}
                                                     :timestamp {:type "string"
                                                                 :format "date"}
                                                     :status_name {:type "string"}}}}
                         :401 {:description "Fail response"
                               :schema {:type "object"
                                        :properties {:error {:type "string"}}}}})))

(defmethod ig/init-key ::get-project-history
  [_ _]
  (-> {}
      (assoc :tags ["Project History"])
      (assoc :parameters [{:in "path"
                           :name "id"
                           :type "string"
                           :format "uuid"
                           :required true}
                          {:in "header"
                           :name "Authorization"
                           :required true
                           :schema {:type "string"
                                    :example "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IkVaVk5SRUtHV0tJTVR"}}])
      (assoc :description "Get a existing Project history")
      (assoc :summary "Get Project history")
      (assoc :responses {:200 {:description "Success response"
                               :schema {:type "array"
                                        :items {:type "object"
                                                :properties {:name {:type "string"}
                                                             :status_name {:type "string"}
                                                             :timestamp {:type "string"
                                                                         :format "date"}}}}}
                         :401 {:description "Fail response"
                               :schema {:type "object"
                                        :properties {:error {:type "string"}}}}})))

