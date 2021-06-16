goog.provide('projects.components.projects_view');

projects.components.projects_view.projects = (function (){var G__33174 = (function projects$components$projects_view$projects(props__26411__auto__,maybe_ref__26412__auto__){
var vec__33175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var vec__33178 = projects.components.state.use_app_state();
var app_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33178,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33178,(1),null);
var set_projects = new cljs.core.Keyword(null,"set-projects","set-projects",-386408395).cljs$core$IFn$_invoke$arity$1(actions);
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(app_state);
var G__33181_33188 = helix.hooks.wrap_fx((function (){
return projects.components.back_end.get_projects(set_projects,token);
}));
var G__33182_33189 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__33181_33188,G__33182_33189) : helix.hooks.raw_use_effect.call(null,G__33181_33188,G__33182_33189));

return helix.core.get_react().createElement("div",(function (){var obj33186 = ({"className":"container pt-4"});
return obj33186;
})(),helix.core.get_react().createElement(projects.components.project_list.project_list,null));
});
if(goog.DEBUG === true){
var G__33187 = G__33174;
goog.object.set(G__33187,"displayName","projects.components.projects-view/projects");

return G__33187;
} else {
return G__33174;
}
})();




//# sourceMappingURL=projects.components.projects_view.js.map
