goog.provide('projects.components.home_view');

projects.components.home_view.home_page = (function (){var G__28096 = (function projects$components$home_view$home_page(props__26411__auto__,maybe_ref__26412__auto__){
var vec__28100 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var vec__28107 = projects.components.state.use_app_state();
var app_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28107,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28107,(1),null);
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(app_state);
return helix.core.get_react().createElement("div",(function (){var obj28112 = ({"style":(function (){var obj28114 = ({"textAlign":helix.impl.props.__GT_js("center"),"marginTop":helix.impl.props.__GT_js("20px")});
return obj28114;
})()});
return obj28112;
})(),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("h1",(function (){var obj28116 = ({"style":(function (){var obj28118 = ({"display":helix.impl.props.__GT_js(new cljs.core.Keyword(null,"center","center",-748944368))});
return obj28118;
})()});
return obj28116;
})(),"Welcome")),helix.core.get_react().createElement(projects.components.buttons.login_project_buttons_component,(function (){var obj28120 = ({"user":user});
return obj28120;
})()));
});
if(goog.DEBUG === true){
var G__28121 = G__28096;
goog.object.set(G__28121,"displayName","projects.components.home-view/home-page");

return G__28121;
} else {
return G__28096;
}
})();




//# sourceMappingURL=projects.components.home_view.js.map
