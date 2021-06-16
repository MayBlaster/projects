goog.provide('projects.components.state');
projects.components.state.initial_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"project-history","project-history",96987911),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null);
projects.components.state.app_state = (helix.core.create_context.cljs$core$IFn$_invoke$arity$1 ? helix.core.create_context.cljs$core$IFn$_invoke$arity$1(null) : helix.core.create_context.call(null,null));
if((typeof projects !== 'undefined') && (typeof projects.components !== 'undefined') && (typeof projects.components.state !== 'undefined') && (typeof projects.components.state.app_reducer !== 'undefined')){
} else {
projects.components.state.app_reducer = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29151 = cljs.core.get_global_hierarchy;
return (fexpr__29151.cljs$core$IFn$_invoke$arity$0 ? fexpr__29151.cljs$core$IFn$_invoke$arity$0() : fexpr__29151.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("projects.components.state","app-reducer"),(function (_,action){
return cljs.core.first(action);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
projects.components.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("projects.components.state","set-projects","projects.components.state/set-projects",-1478935862),(function (state,p__29152){
var vec__29153 = p__29152;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29153,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29153,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"projects","projects",-364845983),payload);
}));
projects.components.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("projects.components.state","set-project-history","projects.components.state/set-project-history",-927538791),(function (state,p__29156){
var vec__29157 = p__29156;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29157,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29157,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"project-history","project-history",96987911),payload);
}));
projects.components.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("projects.components.state","set-selected","projects.components.state/set-selected",295817240),(function (state,p__29160){
var vec__29161 = p__29160;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29161,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29161,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"selected","selected",574897764),payload);
}));
projects.components.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("projects.components.state","remove-project","projects.components.state/remove-project",-214396356),(function (state,p__29165){
var vec__29166 = p__29165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29166,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29166,(1),null);
var prev = new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(state);
var next = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29164_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29164_SHARP_));
}),prev);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"projects","projects",-364845983),next),new cljs.core.Keyword(null,"project-history","project-history",96987911),cljs.core.PersistentVector.EMPTY);
}));
projects.components.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("projects.components.state","add-project","projects.components.state/add-project",-1837243025),(function (state,p__29170){
var vec__29171 = p__29170;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29171,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29171,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"projects","projects",-364845983),(function (p1__29169_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29169_SHARP_,payload);
}));
}));
projects.components.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("projects.components.state","update-project","projects.components.state/update-project",503732951),(function (state,p__29175){
var vec__29176 = p__29175;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29176,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29176,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"projects","projects",-364845983),(function (p1__29174_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (project){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload))){
return payload;
} else {
return project;
}
}),p1__29174_SHARP_);
}));
}));
projects.components.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("projects.components.state","new-project","projects.components.state/new-project",-846349527),(function (state,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-name","status-name",-1467133154),"Initial",new cljs.core.Keyword(null,"name","name",1843675177),""], null));
}));
projects.components.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("projects.components.state","authenticate","projects.components.state/authenticate",297486538),(function (state,p__29179){
var vec__29180 = p__29179;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29180,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29180,(1),null);
var clj_payload = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(payload);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(clj_payload)),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(clj_payload));
}));
projects.components.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("projects.components.state","set-message","projects.components.state/set-message",1152377819),(function (state,p__29183){
var vec__29184 = p__29183;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29184,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29184,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"message","message",-406056002),payload);
}));
projects.components.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("projects.components.state","sign-out","projects.components.state/sign-out",886255532),(function (_,___$1){
return projects.components.state.initial_state;
}));
projects.components.state.use_app_state = (function projects$components$state$use_app_state(){
var vec__29194 = (helix.hooks.use_context.cljs$core$IFn$_invoke$arity$1 ? helix.hooks.use_context.cljs$core$IFn$_invoke$arity$1(projects.components.state.app_state) : helix.hooks.use_context.call(null,projects.components.state.app_state));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29194,(0),null);
var dispatch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29194,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"update-project","update-project",1537441284),new cljs.core.Keyword(null,"set-selected","set-selected",-767510843),new cljs.core.Keyword(null,"set-project-history","set-project-history",-1915471124),new cljs.core.Keyword(null,"remove-project","remove-project",949499885),new cljs.core.Keyword(null,"set-projects","set-projects",-386408395),new cljs.core.Keyword(null,"sign-out","sign-out",-156523241),new cljs.core.Keyword(null,"set-message","set-message",2131888440),new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"add-project","add-project",1465861820),new cljs.core.Keyword(null,"authenticate","authenticate",743951231)],[(function (event){
var G__29197_29225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("projects.components.state","update-project","projects.components.state/update-project",503732951),event], null);
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__29197_29225) : dispatch.call(null,G__29197_29225));

var G__29198 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("projects.components.state","set-selected","projects.components.state/set-selected",295817240),null], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__29198) : dispatch.call(null,G__29198));
}),(function (p1__29189_SHARP_){
var G__29199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("projects.components.state","set-selected","projects.components.state/set-selected",295817240),p1__29189_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__29199) : dispatch.call(null,G__29199));
}),(function (p1__29188_SHARP_){
var G__29200 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("projects.components.state","set-project-history","projects.components.state/set-project-history",-927538791),p1__29188_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__29200) : dispatch.call(null,G__29200));
}),(function (p1__29190_SHARP_){
var G__29201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("projects.components.state","remove-project","projects.components.state/remove-project",-214396356),p1__29190_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__29201) : dispatch.call(null,G__29201));
}),(function (p1__29187_SHARP_){
var G__29202 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("projects.components.state","set-projects","projects.components.state/set-projects",-1478935862),p1__29187_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__29202) : dispatch.call(null,G__29202));
}),(function (p1__29192_SHARP_){
var G__29203 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("projects.components.state","sign-out","projects.components.state/sign-out",886255532),p1__29192_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__29203) : dispatch.call(null,G__29203));
}),(function (p1__29193_SHARP_){
var G__29204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("projects.components.state","set-message","projects.components.state/set-message",1152377819),p1__29193_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__29204) : dispatch.call(null,G__29204));
}),(function (){
var G__29205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("projects.components.state","new-project","projects.components.state/new-project",-846349527),null], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__29205) : dispatch.call(null,G__29205));
}),(function (event){
var G__29206_29231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("projects.components.state","add-project","projects.components.state/add-project",-1837243025),event], null);
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__29206_29231) : dispatch.call(null,G__29206_29231));

var G__29207 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("projects.components.state","set-selected","projects.components.state/set-selected",295817240),null], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__29207) : dispatch.call(null,G__29207));
}),(function (p1__29191_SHARP_){
var G__29208 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("projects.components.state","authenticate","projects.components.state/authenticate",297486538),p1__29191_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__29208) : dispatch.call(null,G__29208));
})])], null);
});

//# sourceMappingURL=projects.components.state.js.map
