goog.provide('projects.components.buttons');
var module$node_modules$react_router_dom$index=shadow.js.require("module$node_modules$react_router_dom$index", {});
projects.components.buttons.on_click_select = (function projects$components$buttons$on_click_select(on_click_response,projects__$1,action,token){
var index = (on_click_response.target.parentNode.parentNode.parentNode.rowIndex - (1));
var set_project_history = new cljs.core.Keyword(null,"set-project-history","set-project-history",-1915471124).cljs$core$IFn$_invoke$arity$1(action);
var set_selected = new cljs.core.Keyword(null,"set-selected","set-selected",-767510843).cljs$core$IFn$_invoke$arity$1(action);
var project = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(projects__$1,index);
projects.components.back_end.get_history(set_project_history,project,token);

return (set_selected.cljs$core$IFn$_invoke$arity$1 ? set_selected.cljs$core$IFn$_invoke$arity$1(project) : set_selected.call(null,project));
});
projects.components.buttons.on_click_delete = (function projects$components$buttons$on_click_delete(on_click_response,projects__$1,action,token){
var index = (on_click_response.target.parentNode.parentNode.parentNode.rowIndex - (1));
var remove_project = new cljs.core.Keyword(null,"remove-project","remove-project",949499885).cljs$core$IFn$_invoke$arity$1(action);
var project = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(projects__$1,index);
return projects.components.back_end.delete_project(remove_project,project,token);
});

projects.components.buttons.login_project_buttons_component = (function (){var G__33062 = (function projects$components$buttons$login_project_buttons_component(props__26411__auto__,maybe_ref__26412__auto__){
var vec__33063 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);
var map__33066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33063,(0),null);
var map__33066__$1 = (((((!((map__33066 == null))))?(((((map__33066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33066):map__33066);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33066__$1,new cljs.core.Keyword(null,"user","user",1532431356));

var color = (cljs.core.truth_(user)?"bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2":"bg-red-500 text-white px-1 py-1 rounded mb-2 mt-2");
return helix.core.get_react().createElement("div",(function (){var obj33069 = ({"style":(function (){var obj33071 = ({"marginTop":helix.impl.props.__GT_js("20px"),"textAlign":helix.impl.props.__GT_js("center")});
return obj33071;
})()});
return obj33069;
})(),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.NavLink,(function (){var obj33073 = ({"to":"/register"});
return obj33073;
})(),helix.core.get_react().createElement("button",(function (){var obj33075 = ({"className":"bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2","style":(function (){var obj33077 = ({"marginRight":helix.impl.props.__GT_js("20px")});
return obj33077;
})()});
return obj33075;
})(),"Register")),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.NavLink,(function (){var obj33079 = ({"to":"/login"});
return obj33079;
})(),helix.core.get_react().createElement("button",(function (){var obj33081 = ({"className":"bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2","style":(function (){var obj33083 = ({"marginRight":helix.impl.props.__GT_js("20px")});
return obj33083;
})()});
return obj33081;
})(),"Login")),(cljs.core.truth_(user)?helix.core.get_react().createElement(module$node_modules$react_router_dom$index.NavLink,(function (){var obj33085 = ({"to":"/projects"});
return obj33085;
})(),helix.core.get_react().createElement("button",(function (){var obj33087 = ({"className":"bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2"});
return obj33087;
})(),"Projects")):helix.core.get_react().createElement("button",(function (){var obj33089 = ({"className":helix.impl.props.normalize_class(color)});
return obj33089;
})(),"Projects")));
});
if(goog.DEBUG === true){
var G__33090 = G__33062;
goog.object.set(G__33090,"displayName","projects.components.buttons/login-project-buttons-component");

return G__33090;
} else {
return G__33062;
}
})();




//# sourceMappingURL=projects.components.buttons.js.map
