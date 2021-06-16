goog.provide('projects.components.user_view');
var module$node_modules$react_router_dom$index=shadow.js.require("module$node_modules$react_router_dom$index", {});

projects.components.user_view.view_user = (function (){var G__28184 = (function projects$components$user_view$view_user(props__26411__auto__,maybe_ref__26412__auto__){
var vec__28187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var user_id = module$node_modules$react_router_dom$index.useParams().id;
return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("h2",null,"Welcome to view user"),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.NavLink,(function (){var obj28191 = ({"to":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_id),"/edit"].join('')});
return obj28191;
})(),helix.core.get_react().createElement("button",(function (){var obj28193 = ({"className":"bg-green-500 text-white px-1 py-1 rounded","style":(function (){var obj28195 = ({"verticalAlign":helix.impl.props.__GT_js("top"),"display":helix.impl.props.__GT_js("inline-block")});
return obj28195;
})()});
return obj28193;
})(),"Edit user")));
});
if(goog.DEBUG === true){
var G__28196 = G__28184;
goog.object.set(G__28196,"displayName","projects.components.user-view/view-user");

return G__28196;
} else {
return G__28184;
}
})();




//# sourceMappingURL=projects.components.user_view.js.map
