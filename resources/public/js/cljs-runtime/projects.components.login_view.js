goog.provide('projects.components.login_view');

projects.components.login_view.login_page = (function (){var G__33095 = (function projects$components$login_view$login_page(props__26411__auto__,maybe_ref__26412__auto__){
var vec__33096 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var vec__33099 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"password","password",417022471),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33099,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33099,(1),null);
var vec__33102 = projects.components.state.use_app_state();
var app_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33102,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33102,(1),null);
var set_message = new cljs.core.Keyword(null,"set-message","set-message",2131888440).cljs$core$IFn$_invoke$arity$1(actions);
var authenticate = new cljs.core.Keyword(null,"authenticate","authenticate",743951231).cljs$core$IFn$_invoke$arity$1(actions);
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(app_state);
return helix.core.get_react().createElement("div",(function (){var obj33106 = ({"style":(function (){var obj33108 = ({"textAlign":helix.impl.props.__GT_js("center"),"marginTop":helix.impl.props.__GT_js("20px")});
return obj33108;
})()});
return obj33106;
})(),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("form",(function (){var obj33110 = ({"onSubmit":(function (e){
e.preventDefault();

return projects.components.back_end.autheticate_user(state,authenticate,set_message);
})});
return obj33110;
})(),helix.core.get_react().createElement("p",(function (){var obj33112 = ({"key":(0)});
return obj33112;
})(),helix.core.get_react().createElement("label",(function (){var obj33122 = ({"htmlFor":"username"});
return obj33122;
})(),"Username: "),helix.core.get_react().createElement("input",(function (){var obj33126 = ({"className":"shadow border rounded py-2 px-3 mb-3","id":"username","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__33091_SHARP_){
var G__33127 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"username","username",1605666410),p1__33091_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__33127) : set_state.call(null,G__33127));
})});
return obj33126;
})())),helix.core.get_react().createElement("p",(function (){var obj33131 = ({"key":(1)});
return obj33131;
})(),helix.core.get_react().createElement("label",(function (){var obj33143 = ({"htmlFor":"password"});
return obj33143;
})(),"Password: "),helix.core.get_react().createElement("input",(function (){var obj33154 = ({"className":"shadow border rounded py-2 px-3 mb-3","id":"password","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__33092_SHARP_){
var G__33155 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"password","password",417022471),p1__33092_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__33155) : set_state.call(null,G__33155));
})});
return obj33154;
})())),helix.core.get_react().createElement("button",(function (){var obj33159 = ({"className":"bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2","type":"submit"});
return obj33159;
})(),"Authenticate"))),helix.core.get_react().createElement(projects.components.buttons.login_project_buttons_component,(function (){var obj33161 = ({"user":user});
return obj33161;
})()));
});
if(goog.DEBUG === true){
var G__33162 = G__33095;
goog.object.set(G__33162,"displayName","projects.components.login-view/login-page");

return G__33162;
} else {
return G__33095;
}
})();




//# sourceMappingURL=projects.components.login_view.js.map
