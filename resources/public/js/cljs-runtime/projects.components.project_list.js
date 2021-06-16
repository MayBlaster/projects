goog.provide('projects.components.project_list');

projects.components.project_list.project_list = (function (){var G__28150 = (function projects$components$project_list$project_list(props__26411__auto__,maybe_ref__26412__auto__){
var vec__28151 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var vec__28154 = projects.components.state.use_app_state();
var app_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28154,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28154,(1),null);
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(app_state);
var projects__$1 = new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(app_state);
var project_history = new cljs.core.Keyword(null,"project-history","project-history",96987911).cljs$core$IFn$_invoke$arity$1(app_state);
var columns = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28147_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),p1__28147_SHARP_);
}),cljs.core.keys(cljs.core.first(projects__$1)));
return helix.core.get_react().createElement("div",(function (){var obj28158 = ({"style":(function (){var obj28160 = ({"overflow":helix.impl.props.__GT_js("hidden")});
return obj28160;
})()});
return obj28158;
})(),helix.core.get_react().createElement("div",(function (){var obj28162 = ({"style":(function (){var obj28164 = ({"float":helix.impl.props.__GT_js("left"),"width":helix.impl.props.__GT_js("50%"),"marginRight":helix.impl.props.__GT_js("20px")});
return obj28164;
})()});
return obj28162;
})(),helix.core.get_react().createElement(projects.components.project_table.project_table,(function (){var obj28166 = ({"columns":columns,"projects":projects__$1,"action":action,"token":token});
return obj28166;
})()),helix.core.get_react().createElement(projects.components.project_form.project_form,null)),((cljs.core.empty_QMARK_(project_history))?helix.core.get_react().createElement("p",null,"Click on a project to view project history"):helix.core.get_react().createElement(projects.components.project_history.display_history,(function (){var obj28168 = ({"project-history":project_history});
return obj28168;
})())));
});
if(goog.DEBUG === true){
var G__28169 = G__28150;
goog.object.set(G__28169,"displayName","projects.components.project-list/project-list");

return G__28169;
} else {
return G__28150;
}
})();




//# sourceMappingURL=projects.components.project_list.js.map
