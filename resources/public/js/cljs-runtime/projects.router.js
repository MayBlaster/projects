goog.provide('projects.router');
var module$node_modules$react_router_dom$index=shadow.js.require("module$node_modules$react_router_dom$index", {});

projects.router.routes = (function (){var G__28172 = (function projects$router$routes(props__26411__auto__,maybe_ref__26412__auto__){
var vec__28173 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var vec__28176 = projects.components.state.use_app_state();
var app_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28176,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28176,(1),null);
return helix.core.get_react().createElement(module$node_modules$react_router_dom$index.BrowserRouter,null,helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(projects.components.nav.nav,null),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Switch,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28180 = ({"path":"/register","exact":true});
return obj28180;
})(),helix.core.get_react().createElement(projects.components.register_view.register,null)),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28182 = ({"path":"/user/:id","exact":true});
return obj28182;
})(),helix.core.get_react().createElement(projects.components.user_view.view_user,null)),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28184 = ({"path":"/user/:id/edit","exact":true});
return obj28184;
})(),helix.core.get_react().createElement(projects.components.edit_user_view.edit_user,null)),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28186 = ({"path":"/login","exact":true});
return obj28186;
})(),helix.core.get_react().createElement(projects.components.login_view.login_page,null)),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28188 = ({"path":"/","exact":true});
return obj28188;
})(),helix.core.get_react().createElement(projects.components.home_view.home_page,null)),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28190 = ({"path":"/projects","exact":true});
return obj28190;
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(app_state))?helix.core.get_react().createElement(projects.components.projects_view.projects,null):helix.core.get_react().createElement("div",null))),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28192 = ({"path":"/dummy"});
return obj28192;
})(),helix.core.get_react().createElement("h1",null,"dummy")))));
});
if(goog.DEBUG === true){
var G__28193 = G__28172;
goog.object.set(G__28193,"displayName","projects.router/routes");

return G__28193;
} else {
return G__28172;
}
})();




//# sourceMappingURL=projects.router.js.map
