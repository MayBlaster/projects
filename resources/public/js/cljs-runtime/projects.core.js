goog.provide('projects.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});

projects.core.app = (function (){var G__28541 = (function projects$core$app(props__26411__auto__,maybe_ref__26412__auto__){
var vec__28542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

return helix.core.get_react().createElement(projects.router.routes,null);
});
if(goog.DEBUG === true){
var G__28545 = G__28541;
goog.object.set(G__28545,"displayName","projects.core/app");

return G__28545;
} else {
return G__28541;
}
})();




projects.core.provided_app = (function (){var G__28548 = (function projects$core$provided_app(props__26411__auto__,maybe_ref__26412__auto__){
var vec__28549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

return helix.core.get_react().createElement(projects.components.state.app_state.Provider,(function (){var obj28553 = ({"value":helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2(projects.components.state.app_reducer,projects.components.state.initial_state)});
return obj28553;
})(),helix.core.get_react().createElement(projects.core.app,null));
});
if(goog.DEBUG === true){
var G__28554 = G__28548;
goog.object.set(G__28554,"displayName","projects.core/provided-app");

return G__28554;
} else {
return G__28548;
}
})();



projects.core.get_config = (function projects$core$get_config(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("projects","core","projects/core",-1216981007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("projects.components.back-end","connection","projects.components.back-end/connection",-1936153711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"port","port",1534937262),(3000),new cljs.core.Keyword(null,"host","host",-1558485167),"localhost"], null)], null)], null);
});
projects.core.system_config = (function projects$core$system_config(){
var config = projects.core.get_config();
var sys_config = new cljs.core.Keyword("projects","core","projects/core",-1216981007).cljs$core$IFn$_invoke$arity$1(config);
return integrant.core.prep.cljs$core$IFn$_invoke$arity$1(sys_config);
});
projects.core.exec_config = (function projects$core$exec_config(){
return integrant.core.init.cljs$core$IFn$_invoke$arity$1(projects.core.system_config());
});
projects.core.init = (function projects$core$init(){
projects.core.exec_config();

return module$node_modules$react_dom$index.render(helix.core.get_react().createElement(projects.core.provided_app,null),document.getElementById("app"));
});
goog.exportSymbol('projects.core.init', projects.core.init);

//# sourceMappingURL=projects.core.js.map
