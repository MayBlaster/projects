goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32924 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_32924(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32925 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_32925(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32311 = coll;
var G__32312 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32311,G__32312) : shadow.dom.lazy_native_coll_seq.call(null,G__32311,G__32312));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32328 = arguments.length;
switch (G__32328) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32343 = arguments.length;
switch (G__32343) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32346 = arguments.length;
switch (G__32346) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32351 = arguments.length;
switch (G__32351) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32369 = arguments.length;
switch (G__32369) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32371 = arguments.length;
switch (G__32371) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32372){if((e32372 instanceof Object)){
var e = e32372;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32372;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32385 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32386 = null;
var count__32387 = (0);
var i__32388 = (0);
while(true){
if((i__32388 < count__32387)){
var el = chunk__32386.cljs$core$IIndexed$_nth$arity$2(null,i__32388);
var handler_32949__$1 = ((function (seq__32385,chunk__32386,count__32387,i__32388,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32385,chunk__32386,count__32387,i__32388,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32949__$1);


var G__32950 = seq__32385;
var G__32951 = chunk__32386;
var G__32952 = count__32387;
var G__32953 = (i__32388 + (1));
seq__32385 = G__32950;
chunk__32386 = G__32951;
count__32387 = G__32952;
i__32388 = G__32953;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32385);
if(temp__5735__auto__){
var seq__32385__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32385__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32385__$1);
var G__32954 = cljs.core.chunk_rest(seq__32385__$1);
var G__32955 = c__4556__auto__;
var G__32956 = cljs.core.count(c__4556__auto__);
var G__32957 = (0);
seq__32385 = G__32954;
chunk__32386 = G__32955;
count__32387 = G__32956;
i__32388 = G__32957;
continue;
} else {
var el = cljs.core.first(seq__32385__$1);
var handler_32958__$1 = ((function (seq__32385,chunk__32386,count__32387,i__32388,el,seq__32385__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32385,chunk__32386,count__32387,i__32388,el,seq__32385__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32958__$1);


var G__32959 = cljs.core.next(seq__32385__$1);
var G__32960 = null;
var G__32961 = (0);
var G__32962 = (0);
seq__32385 = G__32959;
chunk__32386 = G__32960;
count__32387 = G__32961;
i__32388 = G__32962;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32393 = arguments.length;
switch (G__32393) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32394 = cljs.core.seq(events);
var chunk__32395 = null;
var count__32396 = (0);
var i__32397 = (0);
while(true){
if((i__32397 < count__32396)){
var vec__32414 = chunk__32395.cljs$core$IIndexed$_nth$arity$2(null,i__32397);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32414,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32977 = seq__32394;
var G__32978 = chunk__32395;
var G__32979 = count__32396;
var G__32980 = (i__32397 + (1));
seq__32394 = G__32977;
chunk__32395 = G__32978;
count__32396 = G__32979;
i__32397 = G__32980;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32394);
if(temp__5735__auto__){
var seq__32394__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32394__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32394__$1);
var G__32981 = cljs.core.chunk_rest(seq__32394__$1);
var G__32982 = c__4556__auto__;
var G__32983 = cljs.core.count(c__4556__auto__);
var G__32984 = (0);
seq__32394 = G__32981;
chunk__32395 = G__32982;
count__32396 = G__32983;
i__32397 = G__32984;
continue;
} else {
var vec__32417 = cljs.core.first(seq__32394__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32417,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32985 = cljs.core.next(seq__32394__$1);
var G__32986 = null;
var G__32987 = (0);
var G__32988 = (0);
seq__32394 = G__32985;
chunk__32395 = G__32986;
count__32396 = G__32987;
i__32397 = G__32988;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32420 = cljs.core.seq(styles);
var chunk__32421 = null;
var count__32422 = (0);
var i__32423 = (0);
while(true){
if((i__32423 < count__32422)){
var vec__32430 = chunk__32421.cljs$core$IIndexed$_nth$arity$2(null,i__32423);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32430,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32430,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32989 = seq__32420;
var G__32990 = chunk__32421;
var G__32991 = count__32422;
var G__32992 = (i__32423 + (1));
seq__32420 = G__32989;
chunk__32421 = G__32990;
count__32422 = G__32991;
i__32423 = G__32992;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32420);
if(temp__5735__auto__){
var seq__32420__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32420__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32420__$1);
var G__32993 = cljs.core.chunk_rest(seq__32420__$1);
var G__32994 = c__4556__auto__;
var G__32995 = cljs.core.count(c__4556__auto__);
var G__32996 = (0);
seq__32420 = G__32993;
chunk__32421 = G__32994;
count__32422 = G__32995;
i__32423 = G__32996;
continue;
} else {
var vec__32433 = cljs.core.first(seq__32420__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32433,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32433,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32997 = cljs.core.next(seq__32420__$1);
var G__32998 = null;
var G__33000 = (0);
var G__33001 = (0);
seq__32420 = G__32997;
chunk__32421 = G__32998;
count__32422 = G__33000;
i__32423 = G__33001;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32451_33003 = key;
var G__32451_33004__$1 = (((G__32451_33003 instanceof cljs.core.Keyword))?G__32451_33003.fqn:null);
switch (G__32451_33004__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33012 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33012,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33012,"aria-");
}
})())){
el.setAttribute(ks_33012,value);
} else {
(el[ks_33012] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32457){
var map__32458 = p__32457;
var map__32458__$1 = (((((!((map__32458 == null))))?(((((map__32458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32458):map__32458);
var props = map__32458__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32458__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32463 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32463,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32463,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32463,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32466 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32466,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32466;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32468 = arguments.length;
switch (G__32468) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32482){
var vec__32483 = p__32482;
var seq__32484 = cljs.core.seq(vec__32483);
var first__32485 = cljs.core.first(seq__32484);
var seq__32484__$1 = cljs.core.next(seq__32484);
var nn = first__32485;
var first__32485__$1 = cljs.core.first(seq__32484__$1);
var seq__32484__$2 = cljs.core.next(seq__32484__$1);
var np = first__32485__$1;
var nc = seq__32484__$2;
var node = vec__32483;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32486 = nn;
var G__32487 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32486,G__32487) : create_fn.call(null,G__32486,G__32487));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32488 = nn;
var G__32489 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32488,G__32489) : create_fn.call(null,G__32488,G__32489));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32490 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32490,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32490,(1),null);
var seq__32493_33020 = cljs.core.seq(node_children);
var chunk__32494_33021 = null;
var count__32495_33022 = (0);
var i__32496_33023 = (0);
while(true){
if((i__32496_33023 < count__32495_33022)){
var child_struct_33024 = chunk__32494_33021.cljs$core$IIndexed$_nth$arity$2(null,i__32496_33023);
var children_33025 = shadow.dom.dom_node(child_struct_33024);
if(cljs.core.seq_QMARK_(children_33025)){
var seq__32527_33026 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33025));
var chunk__32529_33027 = null;
var count__32530_33028 = (0);
var i__32531_33029 = (0);
while(true){
if((i__32531_33029 < count__32530_33028)){
var child_33030 = chunk__32529_33027.cljs$core$IIndexed$_nth$arity$2(null,i__32531_33029);
if(cljs.core.truth_(child_33030)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33030);


var G__33031 = seq__32527_33026;
var G__33032 = chunk__32529_33027;
var G__33033 = count__32530_33028;
var G__33034 = (i__32531_33029 + (1));
seq__32527_33026 = G__33031;
chunk__32529_33027 = G__33032;
count__32530_33028 = G__33033;
i__32531_33029 = G__33034;
continue;
} else {
var G__33035 = seq__32527_33026;
var G__33036 = chunk__32529_33027;
var G__33037 = count__32530_33028;
var G__33038 = (i__32531_33029 + (1));
seq__32527_33026 = G__33035;
chunk__32529_33027 = G__33036;
count__32530_33028 = G__33037;
i__32531_33029 = G__33038;
continue;
}
} else {
var temp__5735__auto___33039 = cljs.core.seq(seq__32527_33026);
if(temp__5735__auto___33039){
var seq__32527_33040__$1 = temp__5735__auto___33039;
if(cljs.core.chunked_seq_QMARK_(seq__32527_33040__$1)){
var c__4556__auto___33041 = cljs.core.chunk_first(seq__32527_33040__$1);
var G__33042 = cljs.core.chunk_rest(seq__32527_33040__$1);
var G__33043 = c__4556__auto___33041;
var G__33044 = cljs.core.count(c__4556__auto___33041);
var G__33045 = (0);
seq__32527_33026 = G__33042;
chunk__32529_33027 = G__33043;
count__32530_33028 = G__33044;
i__32531_33029 = G__33045;
continue;
} else {
var child_33046 = cljs.core.first(seq__32527_33040__$1);
if(cljs.core.truth_(child_33046)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33046);


var G__33047 = cljs.core.next(seq__32527_33040__$1);
var G__33048 = null;
var G__33049 = (0);
var G__33050 = (0);
seq__32527_33026 = G__33047;
chunk__32529_33027 = G__33048;
count__32530_33028 = G__33049;
i__32531_33029 = G__33050;
continue;
} else {
var G__33051 = cljs.core.next(seq__32527_33040__$1);
var G__33052 = null;
var G__33053 = (0);
var G__33054 = (0);
seq__32527_33026 = G__33051;
chunk__32529_33027 = G__33052;
count__32530_33028 = G__33053;
i__32531_33029 = G__33054;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33025);
}


var G__33055 = seq__32493_33020;
var G__33056 = chunk__32494_33021;
var G__33057 = count__32495_33022;
var G__33058 = (i__32496_33023 + (1));
seq__32493_33020 = G__33055;
chunk__32494_33021 = G__33056;
count__32495_33022 = G__33057;
i__32496_33023 = G__33058;
continue;
} else {
var temp__5735__auto___33060 = cljs.core.seq(seq__32493_33020);
if(temp__5735__auto___33060){
var seq__32493_33061__$1 = temp__5735__auto___33060;
if(cljs.core.chunked_seq_QMARK_(seq__32493_33061__$1)){
var c__4556__auto___33062 = cljs.core.chunk_first(seq__32493_33061__$1);
var G__33063 = cljs.core.chunk_rest(seq__32493_33061__$1);
var G__33064 = c__4556__auto___33062;
var G__33065 = cljs.core.count(c__4556__auto___33062);
var G__33066 = (0);
seq__32493_33020 = G__33063;
chunk__32494_33021 = G__33064;
count__32495_33022 = G__33065;
i__32496_33023 = G__33066;
continue;
} else {
var child_struct_33067 = cljs.core.first(seq__32493_33061__$1);
var children_33068 = shadow.dom.dom_node(child_struct_33067);
if(cljs.core.seq_QMARK_(children_33068)){
var seq__32534_33069 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33068));
var chunk__32536_33070 = null;
var count__32537_33071 = (0);
var i__32538_33072 = (0);
while(true){
if((i__32538_33072 < count__32537_33071)){
var child_33073 = chunk__32536_33070.cljs$core$IIndexed$_nth$arity$2(null,i__32538_33072);
if(cljs.core.truth_(child_33073)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33073);


var G__33075 = seq__32534_33069;
var G__33076 = chunk__32536_33070;
var G__33077 = count__32537_33071;
var G__33078 = (i__32538_33072 + (1));
seq__32534_33069 = G__33075;
chunk__32536_33070 = G__33076;
count__32537_33071 = G__33077;
i__32538_33072 = G__33078;
continue;
} else {
var G__33079 = seq__32534_33069;
var G__33080 = chunk__32536_33070;
var G__33081 = count__32537_33071;
var G__33082 = (i__32538_33072 + (1));
seq__32534_33069 = G__33079;
chunk__32536_33070 = G__33080;
count__32537_33071 = G__33081;
i__32538_33072 = G__33082;
continue;
}
} else {
var temp__5735__auto___33083__$1 = cljs.core.seq(seq__32534_33069);
if(temp__5735__auto___33083__$1){
var seq__32534_33084__$1 = temp__5735__auto___33083__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32534_33084__$1)){
var c__4556__auto___33086 = cljs.core.chunk_first(seq__32534_33084__$1);
var G__33087 = cljs.core.chunk_rest(seq__32534_33084__$1);
var G__33088 = c__4556__auto___33086;
var G__33089 = cljs.core.count(c__4556__auto___33086);
var G__33090 = (0);
seq__32534_33069 = G__33087;
chunk__32536_33070 = G__33088;
count__32537_33071 = G__33089;
i__32538_33072 = G__33090;
continue;
} else {
var child_33091 = cljs.core.first(seq__32534_33084__$1);
if(cljs.core.truth_(child_33091)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33091);


var G__33093 = cljs.core.next(seq__32534_33084__$1);
var G__33094 = null;
var G__33095 = (0);
var G__33096 = (0);
seq__32534_33069 = G__33093;
chunk__32536_33070 = G__33094;
count__32537_33071 = G__33095;
i__32538_33072 = G__33096;
continue;
} else {
var G__33097 = cljs.core.next(seq__32534_33084__$1);
var G__33098 = null;
var G__33099 = (0);
var G__33100 = (0);
seq__32534_33069 = G__33097;
chunk__32536_33070 = G__33098;
count__32537_33071 = G__33099;
i__32538_33072 = G__33100;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33068);
}


var G__33102 = cljs.core.next(seq__32493_33061__$1);
var G__33103 = null;
var G__33104 = (0);
var G__33105 = (0);
seq__32493_33020 = G__33102;
chunk__32494_33021 = G__33103;
count__32495_33022 = G__33104;
i__32496_33023 = G__33105;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32564 = cljs.core.seq(node);
var chunk__32565 = null;
var count__32566 = (0);
var i__32567 = (0);
while(true){
if((i__32567 < count__32566)){
var n = chunk__32565.cljs$core$IIndexed$_nth$arity$2(null,i__32567);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33107 = seq__32564;
var G__33108 = chunk__32565;
var G__33109 = count__32566;
var G__33110 = (i__32567 + (1));
seq__32564 = G__33107;
chunk__32565 = G__33108;
count__32566 = G__33109;
i__32567 = G__33110;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32564);
if(temp__5735__auto__){
var seq__32564__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32564__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32564__$1);
var G__33111 = cljs.core.chunk_rest(seq__32564__$1);
var G__33112 = c__4556__auto__;
var G__33113 = cljs.core.count(c__4556__auto__);
var G__33114 = (0);
seq__32564 = G__33111;
chunk__32565 = G__33112;
count__32566 = G__33113;
i__32567 = G__33114;
continue;
} else {
var n = cljs.core.first(seq__32564__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33115 = cljs.core.next(seq__32564__$1);
var G__33116 = null;
var G__33117 = (0);
var G__33118 = (0);
seq__32564 = G__33115;
chunk__32565 = G__33116;
count__32566 = G__33117;
i__32567 = G__33118;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32576 = arguments.length;
switch (G__32576) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32582 = arguments.length;
switch (G__32582) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32598 = arguments.length;
switch (G__32598) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33128 = arguments.length;
var i__4737__auto___33129 = (0);
while(true){
if((i__4737__auto___33129 < len__4736__auto___33128)){
args__4742__auto__.push((arguments[i__4737__auto___33129]));

var G__33130 = (i__4737__auto___33129 + (1));
i__4737__auto___33129 = G__33130;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32637_33132 = cljs.core.seq(nodes);
var chunk__32638_33133 = null;
var count__32639_33134 = (0);
var i__32640_33135 = (0);
while(true){
if((i__32640_33135 < count__32639_33134)){
var node_33136 = chunk__32638_33133.cljs$core$IIndexed$_nth$arity$2(null,i__32640_33135);
fragment.appendChild(shadow.dom._to_dom(node_33136));


var G__33137 = seq__32637_33132;
var G__33138 = chunk__32638_33133;
var G__33139 = count__32639_33134;
var G__33140 = (i__32640_33135 + (1));
seq__32637_33132 = G__33137;
chunk__32638_33133 = G__33138;
count__32639_33134 = G__33139;
i__32640_33135 = G__33140;
continue;
} else {
var temp__5735__auto___33142 = cljs.core.seq(seq__32637_33132);
if(temp__5735__auto___33142){
var seq__32637_33143__$1 = temp__5735__auto___33142;
if(cljs.core.chunked_seq_QMARK_(seq__32637_33143__$1)){
var c__4556__auto___33145 = cljs.core.chunk_first(seq__32637_33143__$1);
var G__33146 = cljs.core.chunk_rest(seq__32637_33143__$1);
var G__33147 = c__4556__auto___33145;
var G__33148 = cljs.core.count(c__4556__auto___33145);
var G__33149 = (0);
seq__32637_33132 = G__33146;
chunk__32638_33133 = G__33147;
count__32639_33134 = G__33148;
i__32640_33135 = G__33149;
continue;
} else {
var node_33150 = cljs.core.first(seq__32637_33143__$1);
fragment.appendChild(shadow.dom._to_dom(node_33150));


var G__33152 = cljs.core.next(seq__32637_33143__$1);
var G__33153 = null;
var G__33154 = (0);
var G__33155 = (0);
seq__32637_33132 = G__33152;
chunk__32638_33133 = G__33153;
count__32639_33134 = G__33154;
i__32640_33135 = G__33155;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32620){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32620));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32646_33157 = cljs.core.seq(scripts);
var chunk__32647_33158 = null;
var count__32648_33159 = (0);
var i__32649_33160 = (0);
while(true){
if((i__32649_33160 < count__32648_33159)){
var vec__32659_33161 = chunk__32647_33158.cljs$core$IIndexed$_nth$arity$2(null,i__32649_33160);
var script_tag_33162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32659_33161,(0),null);
var script_body_33163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32659_33161,(1),null);
eval(script_body_33163);


var G__33164 = seq__32646_33157;
var G__33165 = chunk__32647_33158;
var G__33166 = count__32648_33159;
var G__33167 = (i__32649_33160 + (1));
seq__32646_33157 = G__33164;
chunk__32647_33158 = G__33165;
count__32648_33159 = G__33166;
i__32649_33160 = G__33167;
continue;
} else {
var temp__5735__auto___33168 = cljs.core.seq(seq__32646_33157);
if(temp__5735__auto___33168){
var seq__32646_33169__$1 = temp__5735__auto___33168;
if(cljs.core.chunked_seq_QMARK_(seq__32646_33169__$1)){
var c__4556__auto___33170 = cljs.core.chunk_first(seq__32646_33169__$1);
var G__33171 = cljs.core.chunk_rest(seq__32646_33169__$1);
var G__33172 = c__4556__auto___33170;
var G__33173 = cljs.core.count(c__4556__auto___33170);
var G__33174 = (0);
seq__32646_33157 = G__33171;
chunk__32647_33158 = G__33172;
count__32648_33159 = G__33173;
i__32649_33160 = G__33174;
continue;
} else {
var vec__32666_33175 = cljs.core.first(seq__32646_33169__$1);
var script_tag_33176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32666_33175,(0),null);
var script_body_33177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32666_33175,(1),null);
eval(script_body_33177);


var G__33178 = cljs.core.next(seq__32646_33169__$1);
var G__33179 = null;
var G__33180 = (0);
var G__33181 = (0);
seq__32646_33157 = G__33178;
chunk__32647_33158 = G__33179;
count__32648_33159 = G__33180;
i__32649_33160 = G__33181;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32671){
var vec__32672 = p__32671;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32672,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32672,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32684 = arguments.length;
switch (G__32684) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32688 = cljs.core.seq(style_keys);
var chunk__32689 = null;
var count__32690 = (0);
var i__32691 = (0);
while(true){
if((i__32691 < count__32690)){
var it = chunk__32689.cljs$core$IIndexed$_nth$arity$2(null,i__32691);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33193 = seq__32688;
var G__33194 = chunk__32689;
var G__33195 = count__32690;
var G__33196 = (i__32691 + (1));
seq__32688 = G__33193;
chunk__32689 = G__33194;
count__32690 = G__33195;
i__32691 = G__33196;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32688);
if(temp__5735__auto__){
var seq__32688__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32688__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32688__$1);
var G__33197 = cljs.core.chunk_rest(seq__32688__$1);
var G__33198 = c__4556__auto__;
var G__33199 = cljs.core.count(c__4556__auto__);
var G__33200 = (0);
seq__32688 = G__33197;
chunk__32689 = G__33198;
count__32690 = G__33199;
i__32691 = G__33200;
continue;
} else {
var it = cljs.core.first(seq__32688__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33201 = cljs.core.next(seq__32688__$1);
var G__33202 = null;
var G__33203 = (0);
var G__33204 = (0);
seq__32688 = G__33201;
chunk__32689 = G__33202;
count__32690 = G__33203;
i__32691 = G__33204;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32715,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32723 = k32715;
var G__32723__$1 = (((G__32723 instanceof cljs.core.Keyword))?G__32723.fqn:null);
switch (G__32723__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32715,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32724){
var vec__32726 = p__32724;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32726,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32726,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32714){
var self__ = this;
var G__32714__$1 = this;
return (new cljs.core.RecordIter((0),G__32714__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32716,other32717){
var self__ = this;
var this32716__$1 = this;
return (((!((other32717 == null)))) && ((this32716__$1.constructor === other32717.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32716__$1.x,other32717.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32716__$1.y,other32717.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32716__$1.__extmap,other32717.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32714){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32741 = cljs.core.keyword_identical_QMARK_;
var expr__32742 = k__4388__auto__;
if(cljs.core.truth_((pred__32741.cljs$core$IFn$_invoke$arity$2 ? pred__32741.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32742) : pred__32741.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32742)))){
return (new shadow.dom.Coordinate(G__32714,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32741.cljs$core$IFn$_invoke$arity$2 ? pred__32741.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32742) : pred__32741.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32742)))){
return (new shadow.dom.Coordinate(self__.x,G__32714,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32714),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32714){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32714,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32719){
var extmap__4419__auto__ = (function (){var G__32769 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32719,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32719)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32769);
} else {
return G__32769;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32719),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32719),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32775,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32783 = k32775;
var G__32783__$1 = (((G__32783 instanceof cljs.core.Keyword))?G__32783.fqn:null);
switch (G__32783__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32775,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32784){
var vec__32785 = p__32784;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32785,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32785,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32774){
var self__ = this;
var G__32774__$1 = this;
return (new cljs.core.RecordIter((0),G__32774__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32776,other32777){
var self__ = this;
var this32776__$1 = this;
return (((!((other32777 == null)))) && ((this32776__$1.constructor === other32777.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32776__$1.w,other32777.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32776__$1.h,other32777.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32776__$1.__extmap,other32777.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32774){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32788 = cljs.core.keyword_identical_QMARK_;
var expr__32789 = k__4388__auto__;
if(cljs.core.truth_((pred__32788.cljs$core$IFn$_invoke$arity$2 ? pred__32788.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32789) : pred__32788.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32789)))){
return (new shadow.dom.Size(G__32774,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32788.cljs$core$IFn$_invoke$arity$2 ? pred__32788.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32789) : pred__32788.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32789)))){
return (new shadow.dom.Size(self__.w,G__32774,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32774),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32774){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32774,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32778){
var extmap__4419__auto__ = (function (){var G__32796 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32778,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32778)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32796);
} else {
return G__32796;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32778),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32778),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33234 = (i + (1));
var G__33235 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33234;
ret = G__33235;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32807){
var vec__32808 = p__32807;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32808,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32808,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32812 = arguments.length;
switch (G__32812) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33237 = ps;
var G__33238 = (i + (1));
el__$1 = G__33237;
i = G__33238;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32822 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32822,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32822,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32822,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32825_33239 = cljs.core.seq(props);
var chunk__32826_33240 = null;
var count__32827_33241 = (0);
var i__32828_33242 = (0);
while(true){
if((i__32828_33242 < count__32827_33241)){
var vec__32835_33243 = chunk__32826_33240.cljs$core$IIndexed$_nth$arity$2(null,i__32828_33242);
var k_33244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32835_33243,(0),null);
var v_33245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32835_33243,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33244);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33244),v_33245);


var G__33246 = seq__32825_33239;
var G__33247 = chunk__32826_33240;
var G__33248 = count__32827_33241;
var G__33249 = (i__32828_33242 + (1));
seq__32825_33239 = G__33246;
chunk__32826_33240 = G__33247;
count__32827_33241 = G__33248;
i__32828_33242 = G__33249;
continue;
} else {
var temp__5735__auto___33250 = cljs.core.seq(seq__32825_33239);
if(temp__5735__auto___33250){
var seq__32825_33251__$1 = temp__5735__auto___33250;
if(cljs.core.chunked_seq_QMARK_(seq__32825_33251__$1)){
var c__4556__auto___33252 = cljs.core.chunk_first(seq__32825_33251__$1);
var G__33253 = cljs.core.chunk_rest(seq__32825_33251__$1);
var G__33254 = c__4556__auto___33252;
var G__33255 = cljs.core.count(c__4556__auto___33252);
var G__33256 = (0);
seq__32825_33239 = G__33253;
chunk__32826_33240 = G__33254;
count__32827_33241 = G__33255;
i__32828_33242 = G__33256;
continue;
} else {
var vec__32838_33257 = cljs.core.first(seq__32825_33251__$1);
var k_33258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32838_33257,(0),null);
var v_33259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32838_33257,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33258);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33258),v_33259);


var G__33260 = cljs.core.next(seq__32825_33251__$1);
var G__33261 = null;
var G__33262 = (0);
var G__33263 = (0);
seq__32825_33239 = G__33260;
chunk__32826_33240 = G__33261;
count__32827_33241 = G__33262;
i__32828_33242 = G__33263;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32845 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32845,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32845,(1),null);
var seq__32848_33264 = cljs.core.seq(node_children);
var chunk__32850_33265 = null;
var count__32851_33266 = (0);
var i__32852_33267 = (0);
while(true){
if((i__32852_33267 < count__32851_33266)){
var child_struct_33268 = chunk__32850_33265.cljs$core$IIndexed$_nth$arity$2(null,i__32852_33267);
if((!((child_struct_33268 == null)))){
if(typeof child_struct_33268 === 'string'){
var text_33269 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33269),child_struct_33268].join(''));
} else {
var children_33270 = shadow.dom.svg_node(child_struct_33268);
if(cljs.core.seq_QMARK_(children_33270)){
var seq__32872_33271 = cljs.core.seq(children_33270);
var chunk__32874_33272 = null;
var count__32875_33273 = (0);
var i__32876_33274 = (0);
while(true){
if((i__32876_33274 < count__32875_33273)){
var child_33275 = chunk__32874_33272.cljs$core$IIndexed$_nth$arity$2(null,i__32876_33274);
if(cljs.core.truth_(child_33275)){
node.appendChild(child_33275);


var G__33276 = seq__32872_33271;
var G__33277 = chunk__32874_33272;
var G__33278 = count__32875_33273;
var G__33279 = (i__32876_33274 + (1));
seq__32872_33271 = G__33276;
chunk__32874_33272 = G__33277;
count__32875_33273 = G__33278;
i__32876_33274 = G__33279;
continue;
} else {
var G__33280 = seq__32872_33271;
var G__33281 = chunk__32874_33272;
var G__33282 = count__32875_33273;
var G__33283 = (i__32876_33274 + (1));
seq__32872_33271 = G__33280;
chunk__32874_33272 = G__33281;
count__32875_33273 = G__33282;
i__32876_33274 = G__33283;
continue;
}
} else {
var temp__5735__auto___33284 = cljs.core.seq(seq__32872_33271);
if(temp__5735__auto___33284){
var seq__32872_33285__$1 = temp__5735__auto___33284;
if(cljs.core.chunked_seq_QMARK_(seq__32872_33285__$1)){
var c__4556__auto___33286 = cljs.core.chunk_first(seq__32872_33285__$1);
var G__33287 = cljs.core.chunk_rest(seq__32872_33285__$1);
var G__33288 = c__4556__auto___33286;
var G__33289 = cljs.core.count(c__4556__auto___33286);
var G__33290 = (0);
seq__32872_33271 = G__33287;
chunk__32874_33272 = G__33288;
count__32875_33273 = G__33289;
i__32876_33274 = G__33290;
continue;
} else {
var child_33291 = cljs.core.first(seq__32872_33285__$1);
if(cljs.core.truth_(child_33291)){
node.appendChild(child_33291);


var G__33292 = cljs.core.next(seq__32872_33285__$1);
var G__33293 = null;
var G__33294 = (0);
var G__33295 = (0);
seq__32872_33271 = G__33292;
chunk__32874_33272 = G__33293;
count__32875_33273 = G__33294;
i__32876_33274 = G__33295;
continue;
} else {
var G__33296 = cljs.core.next(seq__32872_33285__$1);
var G__33297 = null;
var G__33298 = (0);
var G__33299 = (0);
seq__32872_33271 = G__33296;
chunk__32874_33272 = G__33297;
count__32875_33273 = G__33298;
i__32876_33274 = G__33299;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33270);
}
}


var G__33300 = seq__32848_33264;
var G__33301 = chunk__32850_33265;
var G__33302 = count__32851_33266;
var G__33303 = (i__32852_33267 + (1));
seq__32848_33264 = G__33300;
chunk__32850_33265 = G__33301;
count__32851_33266 = G__33302;
i__32852_33267 = G__33303;
continue;
} else {
var G__33304 = seq__32848_33264;
var G__33305 = chunk__32850_33265;
var G__33306 = count__32851_33266;
var G__33307 = (i__32852_33267 + (1));
seq__32848_33264 = G__33304;
chunk__32850_33265 = G__33305;
count__32851_33266 = G__33306;
i__32852_33267 = G__33307;
continue;
}
} else {
var temp__5735__auto___33308 = cljs.core.seq(seq__32848_33264);
if(temp__5735__auto___33308){
var seq__32848_33309__$1 = temp__5735__auto___33308;
if(cljs.core.chunked_seq_QMARK_(seq__32848_33309__$1)){
var c__4556__auto___33310 = cljs.core.chunk_first(seq__32848_33309__$1);
var G__33311 = cljs.core.chunk_rest(seq__32848_33309__$1);
var G__33312 = c__4556__auto___33310;
var G__33313 = cljs.core.count(c__4556__auto___33310);
var G__33314 = (0);
seq__32848_33264 = G__33311;
chunk__32850_33265 = G__33312;
count__32851_33266 = G__33313;
i__32852_33267 = G__33314;
continue;
} else {
var child_struct_33315 = cljs.core.first(seq__32848_33309__$1);
if((!((child_struct_33315 == null)))){
if(typeof child_struct_33315 === 'string'){
var text_33316 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33316),child_struct_33315].join(''));
} else {
var children_33317 = shadow.dom.svg_node(child_struct_33315);
if(cljs.core.seq_QMARK_(children_33317)){
var seq__32886_33318 = cljs.core.seq(children_33317);
var chunk__32888_33319 = null;
var count__32889_33320 = (0);
var i__32890_33321 = (0);
while(true){
if((i__32890_33321 < count__32889_33320)){
var child_33322 = chunk__32888_33319.cljs$core$IIndexed$_nth$arity$2(null,i__32890_33321);
if(cljs.core.truth_(child_33322)){
node.appendChild(child_33322);


var G__33323 = seq__32886_33318;
var G__33324 = chunk__32888_33319;
var G__33325 = count__32889_33320;
var G__33326 = (i__32890_33321 + (1));
seq__32886_33318 = G__33323;
chunk__32888_33319 = G__33324;
count__32889_33320 = G__33325;
i__32890_33321 = G__33326;
continue;
} else {
var G__33327 = seq__32886_33318;
var G__33328 = chunk__32888_33319;
var G__33329 = count__32889_33320;
var G__33330 = (i__32890_33321 + (1));
seq__32886_33318 = G__33327;
chunk__32888_33319 = G__33328;
count__32889_33320 = G__33329;
i__32890_33321 = G__33330;
continue;
}
} else {
var temp__5735__auto___33331__$1 = cljs.core.seq(seq__32886_33318);
if(temp__5735__auto___33331__$1){
var seq__32886_33332__$1 = temp__5735__auto___33331__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32886_33332__$1)){
var c__4556__auto___33333 = cljs.core.chunk_first(seq__32886_33332__$1);
var G__33334 = cljs.core.chunk_rest(seq__32886_33332__$1);
var G__33335 = c__4556__auto___33333;
var G__33336 = cljs.core.count(c__4556__auto___33333);
var G__33337 = (0);
seq__32886_33318 = G__33334;
chunk__32888_33319 = G__33335;
count__32889_33320 = G__33336;
i__32890_33321 = G__33337;
continue;
} else {
var child_33338 = cljs.core.first(seq__32886_33332__$1);
if(cljs.core.truth_(child_33338)){
node.appendChild(child_33338);


var G__33339 = cljs.core.next(seq__32886_33332__$1);
var G__33340 = null;
var G__33341 = (0);
var G__33342 = (0);
seq__32886_33318 = G__33339;
chunk__32888_33319 = G__33340;
count__32889_33320 = G__33341;
i__32890_33321 = G__33342;
continue;
} else {
var G__33343 = cljs.core.next(seq__32886_33332__$1);
var G__33344 = null;
var G__33345 = (0);
var G__33346 = (0);
seq__32886_33318 = G__33343;
chunk__32888_33319 = G__33344;
count__32889_33320 = G__33345;
i__32890_33321 = G__33346;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33317);
}
}


var G__33347 = cljs.core.next(seq__32848_33309__$1);
var G__33348 = null;
var G__33349 = (0);
var G__33350 = (0);
seq__32848_33264 = G__33347;
chunk__32850_33265 = G__33348;
count__32851_33266 = G__33349;
i__32852_33267 = G__33350;
continue;
} else {
var G__33351 = cljs.core.next(seq__32848_33309__$1);
var G__33352 = null;
var G__33353 = (0);
var G__33354 = (0);
seq__32848_33264 = G__33351;
chunk__32850_33265 = G__33352;
count__32851_33266 = G__33353;
i__32852_33267 = G__33354;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33355 = arguments.length;
var i__4737__auto___33356 = (0);
while(true){
if((i__4737__auto___33356 < len__4736__auto___33355)){
args__4742__auto__.push((arguments[i__4737__auto___33356]));

var G__33357 = (i__4737__auto___33356 + (1));
i__4737__auto___33356 = G__33357;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32893){
var G__32894 = cljs.core.first(seq32893);
var seq32893__$1 = cljs.core.next(seq32893);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32894,seq32893__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__32896 = arguments.length;
switch (G__32896) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__30758__auto___33359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_32903){
var state_val_32904 = (state_32903[(1)]);
if((state_val_32904 === (1))){
var state_32903__$1 = state_32903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32903__$1,(2),once_or_cleanup);
} else {
if((state_val_32904 === (2))){
var inst_32900 = (state_32903[(2)]);
var inst_32901 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32903__$1 = (function (){var statearr_32908 = state_32903;
(statearr_32908[(7)] = inst_32900);

return statearr_32908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32903__$1,inst_32901);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30727__auto__ = null;
var shadow$dom$state_machine__30727__auto____0 = (function (){
var statearr_32910 = [null,null,null,null,null,null,null,null];
(statearr_32910[(0)] = shadow$dom$state_machine__30727__auto__);

(statearr_32910[(1)] = (1));

return statearr_32910;
});
var shadow$dom$state_machine__30727__auto____1 = (function (state_32903){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_32903);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e32911){var ex__30730__auto__ = e32911;
var statearr_32912_33360 = state_32903;
(statearr_32912_33360[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_32903[(4)]))){
var statearr_32913_33361 = state_32903;
(statearr_32913_33361[(1)] = cljs.core.first((state_32903[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33362 = state_32903;
state_32903 = G__33362;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
shadow$dom$state_machine__30727__auto__ = function(state_32903){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30727__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30727__auto____1.call(this,state_32903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30727__auto____0;
shadow$dom$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30727__auto____1;
return shadow$dom$state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_32916 = f__30759__auto__();
(statearr_32916[(6)] = c__30758__auto___33359);

return statearr_32916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
