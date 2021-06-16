goog.provide('projects.components.nav');
var module$node_modules$react_router_dom$index=shadow.js.require("module$node_modules$react_router_dom$index", {});

projects.components.nav.alert_success = (function (){var G__29419 = (function projects$components$nav$alert_success(props__26411__auto__,maybe_ref__26412__auto__){
var vec__29420 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);
var map__29423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29420,(0),null);
var map__29423__$1 = (((((!((map__29423 == null))))?(((((map__29423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29423):map__29423);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29423__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29423__$1,new cljs.core.Keyword(null,"message","message",-406056002));

setTimeout((function (){
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(null) : action.call(null,null));
}),(3000));

return helix.core.get_react().createElement("div",(function (){var obj29426 = ({"className":"alert alert-success","style":(function (){var obj29428 = ({"float":helix.impl.props.__GT_js("right"),"width":helix.impl.props.__GT_js("60%")});
return obj29428;
})()});
return obj29426;
})(),helix.core.get_react().createElement("strong",null,"Success! "),message);
});
if(goog.DEBUG === true){
var G__29429 = G__29419;
goog.object.set(G__29429,"displayName","projects.components.nav/alert-success");

return G__29429;
} else {
return G__29419;
}
})();




projects.components.nav.alert_danger = (function (){var G__29432 = (function projects$components$nav$alert_danger(props__26411__auto__,maybe_ref__26412__auto__){
var vec__29433 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);
var map__29436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29433,(0),null);
var map__29436__$1 = (((((!((map__29436 == null))))?(((((map__29436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29436):map__29436);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29436__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29436__$1,new cljs.core.Keyword(null,"message","message",-406056002));

setTimeout((function (){
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(null) : action.call(null,null));
}),(3000));

return helix.core.get_react().createElement("div",(function (){var obj29439 = ({"className":"alert alert-danger","style":(function (){var obj29441 = ({"float":helix.impl.props.__GT_js("right"),"width":helix.impl.props.__GT_js("60%")});
return obj29441;
})()});
return obj29439;
})(),helix.core.get_react().createElement("strong",null,"Fail! "),message);
});
if(goog.DEBUG === true){
var G__29442 = G__29432;
goog.object.set(G__29442,"displayName","projects.components.nav/alert-danger");

return G__29442;
} else {
return G__29432;
}
})();




projects.components.nav.nav = (function (){var G__29445 = (function projects$components$nav$nav(props__26411__auto__,maybe_ref__26412__auto__){
var vec__29446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var vec__29449 = projects.components.state.use_app_state();
var app_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29449,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29449,(1),null);
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(app_state);
var set_message = new cljs.core.Keyword(null,"set-message","set-message",2131888440).cljs$core$IFn$_invoke$arity$1(actions);
var message = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(app_state);
var sign_out = new cljs.core.Keyword(null,"sign-out","sign-out",-156523241).cljs$core$IFn$_invoke$arity$1(actions);
return helix.core.get_react().createElement("nav",(function (){var obj29453 = ({"className":"py-4 shadow","style":(function (){var obj29455 = ({"overflow":helix.impl.props.__GT_js("hidden")});
return obj29455;
})()});
return obj29453;
})(),helix.core.get_react().createElement("div",(function (){var obj29457 = ({"className":"container-fluid pt-4","style":(function (){var obj29459 = ({"width":helix.impl.props.__GT_js("95%"),"marginLeft":helix.impl.props.__GT_js("5%"),"marginRight":helix.impl.props.__GT_js("1%")});
return obj29459;
})()});
return obj29457;
})(),helix.core.get_react().createElement("div",(function (){var obj29461 = ({"style":(function (){var obj29463 = ({"width":helix.impl.props.__GT_js("40%"),"float":helix.impl.props.__GT_js("left")});
return obj29463;
})()});
return obj29461;
})(),helix.core.get_react().createElement("h2",(function (){var obj29465 = ({"className":"text-xl"});
return obj29465;
})(),"Projects"),(cljs.core.truth_(user)?helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("h2",(function (){var obj29467 = ({"className":"py-1","style":(function (){var obj29469 = ({"display":helix.impl.props.__GT_js("inline-block"),"marginRight":helix.impl.props.__GT_js("10px")});
return obj29469;
})()});
return obj29467;
})(),"Anv\u00E4ndare: ",helix.core.get_react().createElement("strong",null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user))),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.NavLink,(function (){var obj29471 = ({"to":["/user/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user))].join('')});
return obj29471;
})(),helix.core.get_react().createElement("button",(function (){var obj29473 = ({"className":"bg-green-500 text-white px-1 py-1 rounded","style":(function (){var obj29475 = ({"display":helix.impl.props.__GT_js("inline-block"),"marginRight":helix.impl.props.__GT_js("10px")});
return obj29475;
})()});
return obj29473;
})(),"Edit user")),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.NavLink,(function (){var obj29477 = ({"to":"/"});
return obj29477;
})(),helix.core.get_react().createElement("button",(function (){var obj29479 = ({"className":"bg-green-500 text-white px-1 py-1 rounded","style":(function (){var obj29481 = ({"display":helix.impl.props.__GT_js("inline-block")});
return obj29481;
})(),"onClick":(function (_){
return (sign_out.cljs$core$IFn$_invoke$arity$0 ? sign_out.cljs$core$IFn$_invoke$arity$0() : sign_out.call(null));
})});
return obj29479;
})(),"Sign out"))):helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("h2",(function (){var obj29483 = ({"className":"py-1","style":(function (){var obj29485 = ({"display":helix.impl.props.__GT_js("inline-block"),"marginRight":helix.impl.props.__GT_js("10px")});
return obj29485;
})()});
return obj29483;
})(),"Ej Inloggad")))),(((new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(message) == null))?helix.core.get_react().createElement("div",null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(message)))?helix.core.get_react().createElement(projects.components.nav.alert_success,(function (){var obj29487 = ({"action":set_message,"message":new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)});
return obj29487;
})()):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(message)))?helix.core.get_react().createElement(projects.components.nav.alert_danger,(function (){var obj29489 = ({"action":set_message,"message":new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)});
return obj29489;
})()):null)))));
});
if(goog.DEBUG === true){
var G__29490 = G__29445;
goog.object.set(G__29490,"displayName","projects.components.nav/nav");

return G__29490;
} else {
return G__29445;
}
})();




//# sourceMappingURL=projects.components.nav.js.map
