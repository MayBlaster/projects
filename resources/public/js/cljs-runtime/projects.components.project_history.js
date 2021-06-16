goog.provide('projects.components.project_history');

projects.components.project_history.display_history = (function (){var G__28254 = (function projects$components$project_history$display_history(props__26411__auto__,maybe_ref__26412__auto__){
var vec__28255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);
var map__28258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28255,(0),null);
var map__28258__$1 = (((((!((map__28258 == null))))?(((((map__28258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28258):map__28258);
var project_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28258__$1,new cljs.core.Keyword(null,"project-history","project-history",96987911));

var columns = cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.first(project_history),new cljs.core.Keyword(null,"name","name",1843675177)));
var project_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(project_history));
return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("p",(function (){var obj28261 = ({"style":(function (){var obj28263 = ({"marginBottom":helix.impl.props.__GT_js("10px")});
return obj28263;
})()});
return obj28261;
})(),helix.core.get_react().createElement("strong",null,["Project: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(project_name)].join(''))),helix.core.get_react().createElement("table",(function (){var obj28265 = ({"style":(function (){var obj28267 = ({"border":helix.impl.props.__GT_js("1px solid black"),"width":helix.impl.props.__GT_js("30%"),"textAlign":helix.impl.props.__GT_js(new cljs.core.Keyword(null,"center","center",-748944368))});
return obj28267;
})()});
return obj28265;
})(),helix.core.get_react().createElement("thead",(function (){var obj28269 = ({"style":(function (){var obj28271 = ({"border":helix.impl.props.__GT_js("1px solid black")});
return obj28271;
})()});
return obj28269;
})(),helix.core.get_react().createElement("tr",(function (){var obj28273 = ({"key":(1)});
return obj28273;
})(),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,col){
return helix.core.get_react().createElement("th",(function (){var obj28275 = ({"key":i});
return obj28275;
})(),clojure.string.capitalize(clojure.string.replace(cljs.core.name(col),"_"," ")));
}),columns))),helix.core.get_react().createElement("tbody",null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,project){
return helix.core.get_react().createElement("tr",(function (){var obj28277 = ({"key":i,"style":(function (){var obj28279 = ({"border":helix.impl.props.__GT_js("1px soild black")});
return obj28279;
})()});
return obj28277;
})(),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (j,item){
return helix.core.get_react().createElement("td",(function (){var obj28281 = ({"key":j,"style":(function (){var obj28283 = ({"border":helix.impl.props.__GT_js("1px solid black"),"center":helix.impl.props.__GT_js(true)});
return obj28283;
})()});
return obj28281;
})(),item);
}),cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(project,new cljs.core.Keyword(null,"name","name",1843675177)))));
}),project_history))));
});
if(goog.DEBUG === true){
var G__28284 = G__28254;
goog.object.set(G__28284,"displayName","projects.components.project-history/display-history");

return G__28284;
} else {
return G__28254;
}
})();




//# sourceMappingURL=projects.components.project_history.js.map
