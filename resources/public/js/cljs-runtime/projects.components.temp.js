goog.provide('projects.components.temp');
var module$node_modules$react_router_dom$index=shadow.js.require("module$node_modules$react_router_dom$index", {});

projects.components.temp.login_page = (function (){var G__29519 = (function projects$components$temp$login_page(props__26411__auto__,maybe_ref__26412__auto__){
var vec__29520 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var vec__29523 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"password","password",417022471),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29523,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29523,(1),null);
var vec__29526 = projects.components.state.use_app_state();
var app_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29526,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29526,(1),null);
var set_message = new cljs.core.Keyword(null,"set-message","set-message",2131888440).cljs$core$IFn$_invoke$arity$1(actions);
var authenticate = new cljs.core.Keyword(null,"authenticate","authenticate",743951231).cljs$core$IFn$_invoke$arity$1(actions);
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(app_state);
return helix.core.get_react().createElement("div",(function (){var obj29530 = ({"style":(function (){var obj29532 = ({"textAlign":helix.impl.props.__GT_js("center"),"marginTop":helix.impl.props.__GT_js("20px")});
return obj29532;
})()});
return obj29530;
})(),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("form",(function (){var obj29534 = ({"onSubmit":(function (e){
e.preventDefault();

return projects.components.back_end.autheticate_user(state,authenticate,set_message);
})});
return obj29534;
})(),helix.core.get_react().createElement("p",(function (){var obj29536 = ({"key":(0)});
return obj29536;
})(),helix.core.get_react().createElement("label",(function (){var obj29538 = ({"htmlFor":"username"});
return obj29538;
})(),"Username: "),helix.core.get_react().createElement("input",(function (){var obj29540 = ({"className":"shadow border rounded py-2 px-3 mb-3","id":"username","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__29515_SHARP_){
var G__29541 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"username","username",1605666410),p1__29515_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__29541) : set_state.call(null,G__29541));
})});
return obj29540;
})())),helix.core.get_react().createElement("p",(function (){var obj29543 = ({"key":(1)});
return obj29543;
})(),helix.core.get_react().createElement("label",(function (){var obj29545 = ({"htmlFor":"password"});
return obj29545;
})(),"Password: "),helix.core.get_react().createElement("input",(function (){var obj29547 = ({"className":"shadow border rounded py-2 px-3 mb-3","id":"password","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__29516_SHARP_){
var G__29548 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"password","password",417022471),p1__29516_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__29548) : set_state.call(null,G__29548));
})});
return obj29547;
})())),helix.core.get_react().createElement("button",(function (){var obj29550 = ({"className":"bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2","type":"submit"});
return obj29550;
})(),"Authenticate"))),helix.core.get_react().createElement(projects.components.buttons.login_project_buttons_component,(function (){var obj29552 = ({"user":user});
return obj29552;
})()));
});
if(goog.DEBUG === true){
var G__29553 = G__29519;
goog.object.set(G__29553,"displayName","projects.components.temp/login-page");

return G__29553;
} else {
return G__29519;
}
})();




projects.components.temp.projects = (function (){var G__29556 = (function projects$components$temp$projects(props__26411__auto__,maybe_ref__26412__auto__){
var vec__29557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var vec__29560 = projects.components.state.use_app_state();
var app_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29560,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29560,(1),null);
var set_projects = new cljs.core.Keyword(null,"set-projects","set-projects",-386408395).cljs$core$IFn$_invoke$arity$1(actions);
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(app_state);
var G__29563_29639 = helix.hooks.wrap_fx((function (){
return projects.components.back_end.get_projects(set_projects,token);
}));
var G__29564_29640 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__29563_29639,G__29564_29640) : helix.hooks.raw_use_effect.call(null,G__29563_29639,G__29564_29640));

return helix.core.get_react().createElement("div",(function (){var obj29566 = ({"className":"container pt-4"});
return obj29566;
})(),helix.core.get_react().createElement(projects.components.project_list.project_list,null));
});
if(goog.DEBUG === true){
var G__29567 = G__29556;
goog.object.set(G__29567,"displayName","projects.components.temp/projects");

return G__29567;
} else {
return G__29556;
}
})();




projects.components.temp.view_user = (function (){var G__29570 = (function projects$components$temp$view_user(props__26411__auto__,maybe_ref__26412__auto__){
var vec__29571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var user_id = module$node_modules$react_router_dom$index.useParams().id;
return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("h2",null,"Welcome to view user"),helix.core.get_react().createElement(module$node_modules$react_router_dom$index.NavLink,(function (){var obj29575 = ({"to":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_id),"/edit"].join('')});
return obj29575;
})(),helix.core.get_react().createElement("button",(function (){var obj29577 = ({"className":"bg-green-500 text-white px-1 py-1 rounded","style":(function (){var obj29579 = ({"verticalAlign":helix.impl.props.__GT_js("top"),"display":helix.impl.props.__GT_js("inline-block")});
return obj29579;
})()});
return obj29577;
})(),"Edit user")));
});
if(goog.DEBUG === true){
var G__29580 = G__29570;
goog.object.set(G__29580,"displayName","projects.components.temp/view-user");

return G__29580;
} else {
return G__29570;
}
})();




projects.components.temp.register = (function (){var G__29586 = (function projects$components$temp$register(props__26411__auto__,maybe_ref__26412__auto__){
var vec__29587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var vec__29590 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"email","email",1415816706),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29590,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29590,(1),null);
var vec__29593 = projects.components.state.use_app_state();
var app_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29593,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29593,(1),null);
var set_message = new cljs.core.Keyword(null,"set-message","set-message",2131888440).cljs$core$IFn$_invoke$arity$1(actions);
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(app_state);
return helix.core.get_react().createElement("div",(function (){var obj29597 = ({"className":"container pt-4"});
return obj29597;
})(),helix.core.get_react().createElement("form",(function (){var obj29599 = ({"onSubmit":(function (e){
e.preventDefault();

return projects.components.back_end.register_user(state,set_message);
})});
return obj29599;
})(),helix.core.get_react().createElement("p",(function (){var obj29601 = ({"key":(0)});
return obj29601;
})(),helix.core.get_react().createElement("label",(function (){var obj29603 = ({"htmlFor":"username","style":(function (){var obj29605 = ({"marginRight":helix.impl.props.__GT_js("20px")});
return obj29605;
})()});
return obj29603;
})(),"Username: "),helix.core.get_react().createElement("input",(function (){var obj29607 = ({"className":"shadow border rounded py-2 px-3 mb-3","id":"username","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__29581_SHARP_){
var G__29608 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"username","username",1605666410),p1__29581_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__29608) : set_state.call(null,G__29608));
})});
return obj29607;
})())),helix.core.get_react().createElement("p",(function (){var obj29610 = ({"key":(1)});
return obj29610;
})(),helix.core.get_react().createElement("label",(function (){var obj29612 = ({"htmlFor":"password","style":(function (){var obj29614 = ({"marginRight":helix.impl.props.__GT_js("20px")});
return obj29614;
})()});
return obj29612;
})(),"Password: "),helix.core.get_react().createElement("input",(function (){var obj29616 = ({"className":"shadow border rounded py-2 px-3 mb-3","id":"password","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__29582_SHARP_){
var G__29617 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"password","password",417022471),p1__29582_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__29617) : set_state.call(null,G__29617));
})});
return obj29616;
})())),helix.core.get_react().createElement("p",(function (){var obj29619 = ({"key":(2)});
return obj29619;
})(),helix.core.get_react().createElement("label",(function (){var obj29621 = ({"htmlFor":"email","style":(function (){var obj29623 = ({"marginRight":helix.impl.props.__GT_js("20px")});
return obj29623;
})()});
return obj29621;
})(),"Email: "),helix.core.get_react().createElement("input",(function (){var obj29625 = ({"className":"shadow border rounded py-2 px-3 mb-3","id":"email","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__29583_SHARP_){
var G__29626 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"email","email",1415816706),p1__29583_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__29626) : set_state.call(null,G__29626));
})});
return obj29625;
})())),helix.core.get_react().createElement("button",(function (){var obj29628 = ({"className":"bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2","type":"submit"});
return obj29628;
})(),"Submit")),helix.core.get_react().createElement(projects.components.buttons.login_project_buttons_component,(function (){var obj29630 = ({"user":user});
return obj29630;
})()));
});
if(goog.DEBUG === true){
var G__29631 = G__29586;
goog.object.set(G__29631,"displayName","projects.components.temp/register");

return G__29631;
} else {
return G__29586;
}
})();




projects.components.temp.edit_user = (function (){var G__29634 = (function projects$components$temp$edit_user(props__26411__auto__,maybe_ref__26412__auto__){
var vec__29635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

return helix.core.get_react().createElement("h2",null,"Welcome to user edit");
});
if(goog.DEBUG === true){
var G__29638 = G__29634;
goog.object.set(G__29638,"displayName","projects.components.temp/edit-user");

return G__29638;
} else {
return G__29634;
}
})();




//# sourceMappingURL=projects.components.temp.js.map
