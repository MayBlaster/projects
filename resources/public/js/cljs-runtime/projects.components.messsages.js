goog.provide('projects.components.messsages');
projects.components.messsages.auth_fail = "Authentication failed, check username or password";
projects.components.messsages.auth_success = "Authentication successful";
projects.components.messsages.register_fail = "Choose another username or/and password";
projects.components.messsages.register_success = (function projects$components$messsages$register_success(username){
return ["Username ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(username)," have been added"].join('');
});
projects.components.messsages.put_project_fail = (function projects$components$messsages$put_project_fail(projects_name){
return ["Project ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projects_name)," already exist, choose aonther project name"].join('');
});
projects.components.messsages.put_project_success = (function projects$components$messsages$put_project_success(project_name){
return ["Project ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(project_name)," has been added"].join('');
});
projects.components.messsages.post_project_success = "Project updated";

//# sourceMappingURL=projects.components.messsages.js.map
