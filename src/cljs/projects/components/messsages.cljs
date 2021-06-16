(ns projects.components.messsages)


(def auth-fail "Authentication failed, check username or password")

(def auth-success "Authentication successful")

(def register-fail "Choose another username or/and password")

(defn register-success
  [username]
  (str "Username " username " have been added"))

(defn put-project-fail
  [projects-name]
  (str "Project " projects-name " already exist, choose aonther project name"))

(defn put-project-success
 [project-name]
  (str "Project " project-name " has been added"))

(def post-project-success "Project updated")