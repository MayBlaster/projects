goog.provide('projects.components.back_end');
projects.components.back_end.conn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
projects.components.back_end.delete_project = (function projects$components$back_end$delete_project(remove_project,project,token){
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),"/api/project/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return (remove_project.cljs$core$IFn$_invoke$arity$1 ? remove_project.cljs$core$IFn$_invoke$arity$1(project) : remove_project.call(null,project));
})], null)], 0));
});
projects.components.back_end.register_user = (function projects$components$back_end$register_user(user,alert_action){
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),"/register"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),user,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
if(cljs.core.contains_QMARK_(response,new cljs.core.Keyword(null,"error","error",-978969032))){
var G__33050 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),false,new cljs.core.Keyword(null,"message","message",-406056002),projects.components.messsages.register_fail], null);
return (alert_action.cljs$core$IFn$_invoke$arity$1 ? alert_action.cljs$core$IFn$_invoke$arity$1(G__33050) : alert_action.call(null,G__33050));
} else {
var G__33051 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),true,new cljs.core.Keyword(null,"message","message",-406056002),projects.components.messsages.register_success(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user))], null);
return (alert_action.cljs$core$IFn$_invoke$arity$1 ? alert_action.cljs$core$IFn$_invoke$arity$1(G__33051) : alert_action.call(null,G__33051));
}
})], 0));
});
projects.components.back_end.autheticate_user = (function projects$components$back_end$autheticate_user(user,autheticate_action,alert_action){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),"/login"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),user,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
if(cljs.core.contains_QMARK_(response,new cljs.core.Keyword(null,"error","error",-978969032))){
var G__33052 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),false,new cljs.core.Keyword(null,"message","message",-406056002),projects.components.messsages.auth_fail], null);
return (alert_action.cljs$core$IFn$_invoke$arity$1 ? alert_action.cljs$core$IFn$_invoke$arity$1(G__33052) : alert_action.call(null,G__33052));
} else {
return cljs.core.doall.cljs$core$IFn$_invoke$arity$2((autheticate_action.cljs$core$IFn$_invoke$arity$1 ? autheticate_action.cljs$core$IFn$_invoke$arity$1(response) : autheticate_action.call(null,response)),(function (){var G__33053 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),true,new cljs.core.Keyword(null,"message","message",-406056002),projects.components.messsages.auth_success], null);
return (alert_action.cljs$core$IFn$_invoke$arity$1 ? alert_action.cljs$core$IFn$_invoke$arity$1(G__33053) : alert_action.call(null,G__33053));
})());
}
})], null)], 0));
});
projects.components.back_end.get_projects = (function projects$components$back_end$get_projects(set_projects,token){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),"/api/project"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return (set_projects.cljs$core$IFn$_invoke$arity$1 ? set_projects.cljs$core$IFn$_invoke$arity$1(response) : set_projects.call(null,response));
})], null)], 0));
});
projects.components.back_end.post_project = (function projects$components$back_end$post_project(state,token){
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),"/api/project/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(state))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),projects.components.utils.next_status(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),state], null))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),resolve,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),reject], null)], 0));
}));
});
projects.components.back_end.get_history = (function projects$components$back_end$get_history(handler,state,token){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),"/api/project/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(state)),"/history"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__33054_SHARP_){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(p1__33054_SHARP_) : handler.call(null,p1__33054_SHARP_));
})], null)], 0));
});
projects.components.back_end.put_project = (function projects$components$back_end$put_project(state,token){
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(projects.components.back_end.conn))),"/api/project"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"status","status",-1997798413),"Initiated"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),resolve,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),reject], null)], 0));
}));
});
projects.components.back_end.update_ = (function projects$components$back_end$update_(update_project,set_project_history,response,token,alert_action){
var G__33055 = (function (data){
(update_project.cljs$core$IFn$_invoke$arity$1 ? update_project.cljs$core$IFn$_invoke$arity$1(data) : update_project.call(null,data));

projects.components.back_end.get_history(set_project_history,data,token);

var G__33056 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),true,new cljs.core.Keyword(null,"message","message",-406056002),projects.components.messsages.post_project_success], null);
return (alert_action.cljs$core$IFn$_invoke$arity$1 ? alert_action.cljs$core$IFn$_invoke$arity$1(G__33056) : alert_action.call(null,G__33056));
});
return (response.cljs$core$IFn$_invoke$arity$1 ? response.cljs$core$IFn$_invoke$arity$1(G__33055) : response.call(null,G__33055));
});
projects.components.back_end.add_ = (function projects$components$back_end$add_(add_project,set_project_history,response,token,alert_action){
var G__33057 = (function (data){
(add_project.cljs$core$IFn$_invoke$arity$1 ? add_project.cljs$core$IFn$_invoke$arity$1(data) : add_project.call(null,data));

projects.components.back_end.get_history(set_project_history,data,token);

var G__33058 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),true,new cljs.core.Keyword(null,"message","message",-406056002),projects.components.messsages.put_project_success(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data))], null);
return (alert_action.cljs$core$IFn$_invoke$arity$1 ? alert_action.cljs$core$IFn$_invoke$arity$1(G__33058) : alert_action.call(null,G__33058));
});
return (response.cljs$core$IFn$_invoke$arity$1 ? response.cljs$core$IFn$_invoke$arity$1(G__33057) : response.call(null,G__33057));
});
projects.components.back_end.add_state = (function projects$components$back_end$add_state(add_project,set_project_history,state,token,alert_action){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(projects.components.back_end.put_project(state,token),(function (response){
if(cljs.core.contains_QMARK_(response,new cljs.core.Keyword(null,"error","error",-978969032))){
var G__33059 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),false,new cljs.core.Keyword(null,"message","message",-406056002),projects.components.messsages.put_project_fail(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state))], null);
return (alert_action.cljs$core$IFn$_invoke$arity$1 ? alert_action.cljs$core$IFn$_invoke$arity$1(G__33059) : alert_action.call(null,G__33059));
} else {
return projects.components.back_end.add_(add_project,set_project_history,response,token,alert_action);
}
})),(function (error){
return console.log("error in promisa",error);
}));
});
projects.components.back_end.update_state = (function projects$components$back_end$update_state(update_project,set_project_history,state,token,alert_action){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(projects.components.back_end.post_project(state,token),(function (response){
return projects.components.back_end.update_(update_project,set_project_history,response,token,alert_action);
})),(function (error){
return console.log("error in promisa",error);
}));
});
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("projects.components.back-end","connection","projects.components.back-end/connection",-1936153711),(function (_,config){
return cljs.core.reset_BANG_(projects.components.back_end.conn,config);
}));

//# sourceMappingURL=projects.components.back_end.js.map
