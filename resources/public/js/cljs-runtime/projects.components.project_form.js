goog.provide('projects.components.project_form');

projects.components.project_form.project_display = (function (){var G__33115 = (function projects$components$project_form$project_display(props__26411__auto__,maybe_ref__26412__auto__){
var vec__33116 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);
var map__33119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33116,(0),null);
var map__33119__$1 = (((((!((map__33119 == null))))?(((((map__33119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33119):map__33119);
var project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33119__$1,new cljs.core.Keyword(null,"project","project",1124394579));

return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("p",(function (){var obj33124 = ({"key":(0)});
return obj33124;
})(),helix.core.get_react().createElement("strong",null,"Project: "),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)),helix.core.get_react().createElement("p",(function (){var obj33129 = ({"key":(1)});
return obj33129;
})(),helix.core.get_react().createElement("strong",null,"Current Status "),new cljs.core.Keyword(null,"status_name","status_name",525382486).cljs$core$IFn$_invoke$arity$1(project)));
});
if(goog.DEBUG === true){
var G__33132 = G__33115;
goog.object.set(G__33132,"displayName","projects.components.project-form/project-display");

return G__33132;
} else {
return G__33115;
}
})();




projects.components.project_form.project_edit = (function (){var G__33136 = (function projects$components$project_form$project_edit(props__26411__auto__,maybe_ref__26412__auto__){
var vec__33137 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);
var map__33140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137,(0),null);
var map__33140__$1 = (((((!((map__33140 == null))))?(((((map__33140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33140):map__33140);
var project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140__$1,new cljs.core.Keyword(null,"project","project",1124394579));

var vec__33144 = helix.hooks.use_state(project);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33144,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33144,(1),null);
var vec__33147 = projects.components.state.use_app_state();
var app_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33147,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33147,(1),null);
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(app_state);
var selected = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(app_state);
var map__33150 = actions;
var map__33150__$1 = (((((!((map__33150 == null))))?(((((map__33150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33150):map__33150);
var add_project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33150__$1,new cljs.core.Keyword(null,"add-project","add-project",1465861820));
var update_project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33150__$1,new cljs.core.Keyword(null,"update-project","update-project",1537441284));
var set_project_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33150__$1,new cljs.core.Keyword(null,"set-project-history","set-project-history",-1915471124));
var set_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33150__$1,new cljs.core.Keyword(null,"set-message","set-message",2131888440));
var G__33152_33272 = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__33152_33272)){
(set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(project) : set_state.call(null,project));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__33152_33272)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33152_33272)].join('')));

}
}

return helix.core.get_react().createElement("form",(function (){var obj33157 = ({"onSubmit":(function (e){
e.preventDefault();

if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected))){
return projects.components.back_end.update_state(update_project,set_project_history,state,token,set_message);
} else {
return projects.components.back_end.add_state(add_project,set_project_history,state,token,set_message);
}
})});
return obj33157;
})(),(((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(state) == null))?helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement("p",(function (){var obj33164 = ({"key":(0)});
return obj33164;
})(),helix.core.get_react().createElement("label",(function (){var obj33166 = ({"htmlFor":"name"});
return obj33166;
})(),"New Project: "),helix.core.get_react().createElement("input",(function (){var obj33168 = ({"className":"shadow border rounded py-2 px-3 mb-3","id":"name","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__33133_SHARP_){
var G__33169 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"name","name",1843675177),p1__33133_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__33169) : set_state.call(null,G__33169));
})});
return obj33168;
})())),helix.core.get_react().createElement("p",(function (){var obj33171 = ({"key":(1)});
return obj33171;
})(),helix.core.get_react().createElement("strong",null,"Status: "),"Initiated")):helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement("p",(function (){var obj33184 = ({"key":(0)});
return obj33184;
})(),helix.core.get_react().createElement("strong",null,"Project: "),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state)),helix.core.get_react().createElement("p",(function (){var obj33191 = ({"key":(1)});
return obj33191;
})(),helix.core.get_react().createElement("strong",null,"Current Status: "),new cljs.core.Keyword(null,"status_name","status_name",525382486).cljs$core$IFn$_invoke$arity$1(state)),helix.core.get_react().createElement("p",(function (){var obj33210 = ({"key":(2)});
return obj33210;
})(),helix.core.get_react().createElement("strong",null,"Update Status to: "),projects.components.utils.next_status(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),state], null))))),helix.core.get_react().createElement("button",(function (){var obj33220 = ({"className":"bg-green-500 text-white px-1 py-1 rounded mb-2 mt-2","type":"submit"});
return obj33220;
})(),"Submit"));
});
if(goog.DEBUG === true){
var G__33221 = G__33136;
goog.object.set(G__33221,"displayName","projects.components.project-form/project-edit");

return G__33221;
} else {
return G__33136;
}
})();




projects.components.project_form.project_form = (function (){var G__33224 = (function projects$components$project_form$project_form(props__26411__auto__,maybe_ref__26412__auto__){
var vec__33225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26411__auto__),maybe_ref__26412__auto__], null);

var vec__33228 = helix.hooks.use_state(false);
var edit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33228,(0),null);
var set_edit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33228,(1),null);
var vec__33231 = projects.components.state.use_app_state();
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33231,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33231,(1),null);
var new_project = new cljs.core.Keyword(null,"new-project","new-project",-1947445636).cljs$core$IFn$_invoke$arity$1(actions);
var project = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(state);
var G__33234_33276 = helix.hooks.wrap_fx((function (){
if(cljs.core.not(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project))){
return (set_edit.cljs$core$IFn$_invoke$arity$1 ? set_edit.cljs$core$IFn$_invoke$arity$1(true) : set_edit.call(null,true));
} else {
return (set_edit.cljs$core$IFn$_invoke$arity$1 ? set_edit.cljs$core$IFn$_invoke$arity$1(false) : set_edit.call(null,false));
}
}));
var G__33235_33277 = [project];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__33234_33276,G__33235_33277) : helix.hooks.raw_use_effect.call(null,G__33234_33276,G__33235_33277));

return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("div",(function (){var obj33242 = ({"className":"mb-2 mt-2"});
return obj33242;
})(),helix.core.get_react().createElement("button",(function (){var obj33251 = ({"className":"bg-blue-500 text-white px-1 py-1 rounded","style":(function (){var obj33253 = ({"marginRight":helix.impl.props.__GT_js("20px")});
return obj33253;
})(),"onClick":(function (_){
(new_project.cljs$core$IFn$_invoke$arity$0 ? new_project.cljs$core$IFn$_invoke$arity$0() : new_project.call(null));

return (set_edit.cljs$core$IFn$_invoke$arity$1 ? set_edit.cljs$core$IFn$_invoke$arity$1(true) : set_edit.call(null,true));
})});
return obj33251;
})(),"New Project"),helix.core.get_react().createElement("button",(function (){var obj33255 = ({"className":"bg-blue-500 text-white px-1 py-1 rounded","onClick":(function (){
return (set_edit.cljs$core$IFn$_invoke$arity$1 ? set_edit.cljs$core$IFn$_invoke$arity$1(true) : set_edit.call(null,true));
})});
return obj33255;
})(),"Edit Project")),(((project == null))?helix.core.get_react().createElement("p",null,""):(cljs.core.truth_(edit)?helix.core.get_react().createElement(projects.components.project_form.project_edit,(function (){var obj33263 = ({"project":project});
return obj33263;
})()):helix.core.get_react().createElement(projects.components.project_form.project_display,(function (){var obj33268 = ({"project":project});
return obj33268;
})()))));
});
if(goog.DEBUG === true){
var G__33269 = G__33224;
goog.object.set(G__33269,"displayName","projects.components.project-form/project-form");

return G__33269;
} else {
return G__33224;
}
})();




//# sourceMappingURL=projects.components.project_form.js.map
