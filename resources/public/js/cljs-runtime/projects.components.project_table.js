goog.provide('projects.components.project_table');

projects.components.project_table.project_table = (function (){var G__28099 = (function projects$components$project_table$project_table(props__26411__auto__,maybe_ref__26412__auto__){
var vec__28103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);
var map__28106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28103,(0),null);
var map__28106__$1 = (((((!((map__28106 == null))))?(((((map__28106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28106):map__28106);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28106__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var projects__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28106__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28106__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28106__$1,new cljs.core.Keyword(null,"token","token",-1211463215));

return helix.core.get_react().createElement("table",(function (){var obj28123 = ({"style":(function (){var obj28125 = ({"border":helix.impl.props.__GT_js("1px solid black"),"textAlign":helix.impl.props.__GT_js(new cljs.core.Keyword(null,"center","center",-748944368)),"width":helix.impl.props.__GT_js("100%")});
return obj28125;
})()});
return obj28123;
})(),helix.core.get_react().createElement("thead",(function (){var obj28127 = ({"style":(function (){var obj28129 = ({"border":helix.impl.props.__GT_js("1px solid black"),"backgroundColor":helix.impl.props.__GT_js("#BFBFBF")});
return obj28129;
})()});
return obj28127;
})(),helix.core.get_react().createElement("tr",(function (){var obj28131 = ({"key":(1)});
return obj28131;
})(),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,col){
return helix.core.get_react().createElement("th",(function (){var obj28133 = ({"key":i});
return obj28133;
})(),clojure.string.capitalize(clojure.string.replace(cljs.core.name(col),"_"," ")));
}),columns))),helix.core.get_react().createElement("tbody",null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,project){
return helix.core.get_react().createElement("tr",(function (){var obj28135 = ({"key":i,"style":(function (){var obj28137 = ({"border":helix.impl.props.__GT_js("1px solid black"),"backgroundColor":helix.impl.props.__GT_js(projects.components.events.set_color(i))});
return obj28137;
})()});
return obj28135;
})(),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (j,item){
return helix.core.get_react().createElement("td",(function (){var obj28139 = ({"key":j,"style":(function (){var obj28141 = ({"border":helix.impl.props.__GT_js("1px solid black"),"center":helix.impl.props.__GT_js(true)});
return obj28141;
})(),"onMouseLeave":projects.components.events.change_color_on_leave,"onMouseOver":projects.components.events.change_color_on_over});
return obj28139;
})(),item);
}),cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(project,new cljs.core.Keyword(null,"id","id",-1388402092)))),helix.core.get_react().createElement("td",null,helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("button",(function (){var obj28143 = ({"className":"bg-blue-500 text-white px-1 py-1 rounded","onClick":(function (response){
return projects.components.buttons.on_click_select(response,projects__$1,action,token);
})});
return obj28143;
})(),"Select"),helix.core.get_react().createElement("button",(function (){var obj28145 = ({"className":"bg-red-500 ml-2 text-white px-1 py-1 rounded","onClick":(function (response){
return projects.components.buttons.on_click_delete(response,projects__$1,action,token);
})});
return obj28145;
})(),"Delete"))));
}),projects__$1)));
});
if(goog.DEBUG === true){
var G__28146 = G__28099;
goog.object.set(G__28146,"displayName","projects.components.project-table/project-table");

return G__28146;
} else {
return G__28099;
}
})();




//# sourceMappingURL=projects.components.project_table.js.map
