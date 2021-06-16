goog.provide('projects.components.register_view');

projects.components.register_view.register = (function (){var G__33197 = (function projects$components$register_view$register(props__26411__auto__,maybe_ref__26412__auto__){
var vec__33198 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var vec__33201 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"email","email",1415816706),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33201,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33201,(1),null);
var vec__33204 = projects.components.state.use_app_state();
var app_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33204,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33204,(1),null);
var set_message = new cljs.core.Keyword(null,"set-message","set-message",2131888440).cljs$core$IFn$_invoke$arity$1(actions);
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(app_state);
return helix.core.get_react().createElement("div",(function (){var obj33208 = ({"className":"container pt-4"});
return obj33208;
})(),helix.core.get_react().createElement("form",(function (){var obj33212 = ({"onSubmit":(function (e){
e.preventDefault();

return projects.components.back_end.register_user(state,set_message);
})});
return obj33212;
})(),helix.core.get_react().createElement("p",(function (){var obj33214 = ({"key":(0)});
return obj33214;
})(),helix.core.get_react().createElement("label",(function (){var obj33216 = ({"htmlFor":"username","style":(function (){var obj33218 = ({"marginRight":helix.impl.props.__GT_js("20px")});
return obj33218;
})()});
return obj33216;
})(),"Username: "),helix.core.get_react().createElement("input",(function (){var obj33237 = ({"className":"shadow border rounded py-2 px-3 mb-3","id":"username","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__33192_SHARP_){
var G__33238 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"username","username",1605666410),p1__33192_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__33238) : set_state.call(null,G__33238));
})});
return obj33237;
})())),helix.core.get_react().createElement("p",(function (){var obj33240 = ({"key":(1)});
return obj33240;
})(),helix.core.get_react().createElement("label",(function (){var obj33244 = ({"htmlFor":"password","style":(function (){var obj33246 = ({"marginRight":helix.impl.props.__GT_js("20px")});
return obj33246;
})()});
return obj33244;
})(),"Password: "),helix.core.get_react().createElement("input",(function (){var obj33248 = ({"className":"shadow border rounded py-2 px-3 mb-3","id":"password","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__33193_SHARP_){
var G__33249 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"password","password",417022471),p1__33193_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__33249) : set_state.call(null,G__33249));
})});
return obj33248;
})())),helix.core.get_react().createElement("p",(function (){var obj33257 = ({"key":(2)});
return obj33257;
})(),helix.core.get_react().createElement("label",(function (){var obj33259 = ({"htmlFor":"email","style":(function (){var obj33261 = ({"marginRight":helix.impl.props.__GT_js("20px")});
return obj33261;
})()});
return obj33259;
})(),"Email: "),helix.core.get_react().createElement("input",(function (){var obj33265 = ({"className":"shadow border rounded py-2 px-3 mb-3","id":"email","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__33194_SHARP_){
var G__33266 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"email","email",1415816706),p1__33194_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__33266) : set_state.call(null,G__33266));
})});
return obj33265;
})())),helix.core.get_react().createElement("button",(function (){var obj33271 = ({"className":"bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2","type":"submit"});
return obj33271;
})(),"Submit")),helix.core.get_react().createElement(projects.components.buttons.login_project_buttons_component,(function (){var obj33274 = ({"user":user});
return obj33274;
})()));
});
if(goog.DEBUG === true){
var G__33275 = G__33197;
goog.object.set(G__33275,"displayName","projects.components.register-view/register");

return G__33275;
} else {
return G__33197;
}
})();




//# sourceMappingURL=projects.components.register_view.js.map
