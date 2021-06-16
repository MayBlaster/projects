goog.provide('projects.routes');
var module$node_modules$react_router_dom$index=shadow.js.require("module$node_modules$react_router_dom$index", {});

projects.routes.route = (function (){var G__28143 = (function projects$routes$route(props__26411__auto__,maybe_ref__26412__auto__){
var vec__28144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var vec__28147 = projects.components.state.use_app_state;
var app_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28147,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28147,(1),null);
return helix.core.get_react().createElement(module$node_modules$react_router_dom$index.BrowserRouter,null,helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(projects.components.nav.nav,null),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Switch,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28151 = ({"path":"/register","exact":true});
return obj28151;
})(),helix.core.get_react().createElement(projects.components.temp.register,null)),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28153 = ({"path":"/user/:id","exact":true});
return obj28153;
})(),helix.core.get_react().createElement(projects.components.temp.view_user,null)),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28155 = ({"path":"/user/:id/edit","exact":true});
return obj28155;
})(),helix.core.get_react().createElement(projects.components.temp.edit_user,null)),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28157 = ({"path":"/login","exact":true});
return obj28157;
})(),helix.core.get_react().createElement(projects.components.temp.login_page,null)),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28159 = ({"path":"/","exact":true});
return obj28159;
})(),helix.core.get_react().createElement(projects.components.temp.home_page,null)),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28161 = ({"path":"/projects","exact":true});
return obj28161;
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(app_state))?helix.core.get_react().createElement(projects.components.temp.projects,null):null)),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.Route,(function (){var obj28163 = ({"path":"/dummy"});
return obj28163;
})(),helix.core.get_react().createElement("h1",null,"dummy")))));
});
if(goog.DEBUG === true){
var G__28164 = G__28143;
goog.object.set(G__28164,"displayName","projects.routes/route");

return G__28164;
} else {
return G__28143;
}
})();




//# sourceMappingURL=projects.routes.js.map
