goog.provide('promesa.impl');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl._STAR_default_promise_STAR_.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl._STAR_default_promise_STAR_.reject(v);
});
promesa.impl.deferred = (function promesa$impl$deferred(){
var state = ({});
var obj = (new promesa.impl._STAR_default_promise_STAR_((function (resolve,reject){
(state.resolve = resolve);

return (state.reject = reject);
})));
var x27313 = obj;
(x27313.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x27313.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x27313.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x27313;
});
promesa.impl.extend_promise_BANG_ = (function promesa$impl$extend_promise_BANG_(t){
(t.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(t.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__27314_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27314_SHARP_) : f.call(null,p1__27314_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__27315_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27315_SHARP_) : f.call(null,p1__27315_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__27316_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27316_SHARP_) : f.call(null,p1__27316_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__27317_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27317_SHARP_) : f.call(null,p1__27317_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__27318_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27318_SHARP_) : f.call(null,p1__27318_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__27319_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27319_SHARP_) : f.call(null,p1__27319_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__27320_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27320_SHARP_) : f.call(null,p1__27320_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__27321_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27321_SHARP_) : f.call(null,p1__27321_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__27322_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27322_SHARP_) : f.call(null,p1__27322_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__27323_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27323_SHARP_) : f.call(null,p1__27323_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__27324_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27324_SHARP_,null) : f.call(null,p1__27324_SHARP_,null));
}),(function (p1__27325_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__27325_SHARP_) : f.call(null,null,p1__27325_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__27326_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27326_SHARP_,null) : f.call(null,p1__27326_SHARP_,null));
}),(function (p1__27327_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__27327_SHARP_) : f.call(null,null,p1__27327_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__27328_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27328_SHARP_,null) : f.call(null,p1__27328_SHARP_,null));
}),(function (p1__27329_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__27329_SHARP_) : f.call(null,null,p1__27329_SHARP_));
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__27330_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27330_SHARP_,null) : f.call(null,p1__27330_SHARP_,null));
}),(function (p1__27331_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__27331_SHARP_) : f.call(null,null,p1__27331_SHARP_));
}));

return it__$1;
}));
});
promesa.impl.extend_promise_BANG_(Promise);
goog.object.set(promesa.protocols.IPromise,"_",true);

goog.object.set(promesa.protocols._map,"_",(function() {
var G__27346 = null;
var G__27346__2 = (function (it,f){
return promesa.protocols._map(promesa.protocols._promise(it),f);
});
var G__27346__3 = (function (it,f,e){
return promesa.protocols._map(promesa.protocols._promise(it),f,e);
});
G__27346 = function(it,f,e){
switch(arguments.length){
case 2:
return G__27346__2.call(this,it,f);
case 3:
return G__27346__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27346.cljs$core$IFn$_invoke$arity$2 = G__27346__2;
G__27346.cljs$core$IFn$_invoke$arity$3 = G__27346__3;
return G__27346;
})()
);

goog.object.set(promesa.protocols._bind,"_",(function() {
var G__27392 = null;
var G__27392__2 = (function (it,f){
return promesa.protocols._bind(promesa.protocols._promise(it),f);
});
var G__27392__3 = (function (it,f,e){
return promesa.protocols._bind(promesa.protocols._promise(it),f,e);
});
G__27392 = function(it,f,e){
switch(arguments.length){
case 2:
return G__27392__2.call(this,it,f);
case 3:
return G__27392__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27392.cljs$core$IFn$_invoke$arity$2 = G__27392__2;
G__27392.cljs$core$IFn$_invoke$arity$3 = G__27392__3;
return G__27392;
})()
);

goog.object.set(promesa.protocols._then,"_",(function() {
var G__27393 = null;
var G__27393__2 = (function (it,f){
return promesa.protocols._then(promesa.protocols._promise(it),f);
});
var G__27393__3 = (function (it,f,e){
return promesa.protocols._then(promesa.protocols._promise(it),f,e);
});
G__27393 = function(it,f,e){
switch(arguments.length){
case 2:
return G__27393__2.call(this,it,f);
case 3:
return G__27393__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27393.cljs$core$IFn$_invoke$arity$2 = G__27393__2;
G__27393.cljs$core$IFn$_invoke$arity$3 = G__27393__3;
return G__27393;
})()
);

goog.object.set(promesa.protocols._mapErr,"_",(function() {
var G__27394 = null;
var G__27394__2 = (function (it,f){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f);
});
var G__27394__3 = (function (it,f,e){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f,e);
});
G__27394 = function(it,f,e){
switch(arguments.length){
case 2:
return G__27394__2.call(this,it,f);
case 3:
return G__27394__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27394.cljs$core$IFn$_invoke$arity$2 = G__27394__2;
G__27394.cljs$core$IFn$_invoke$arity$3 = G__27394__3;
return G__27394;
})()
);

goog.object.set(promesa.protocols._thenErr,"_",(function() {
var G__27395 = null;
var G__27395__2 = (function (it,f){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f);
});
var G__27395__3 = (function (it,f,e){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f,e);
});
G__27395 = function(it,f,e){
switch(arguments.length){
case 2:
return G__27395__2.call(this,it,f);
case 3:
return G__27395__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27395.cljs$core$IFn$_invoke$arity$2 = G__27395__2;
G__27395.cljs$core$IFn$_invoke$arity$3 = G__27395__3;
return G__27395;
})()
);

goog.object.set(promesa.protocols._handle,"_",(function() {
var G__27396 = null;
var G__27396__2 = (function (it,f){
return promesa.protocols._handle(promesa.protocols._promise(it),f);
});
var G__27396__3 = (function (it,f,e){
return promesa.protocols._handle(promesa.protocols._promise(it),f,e);
});
G__27396 = function(it,f,e){
switch(arguments.length){
case 2:
return G__27396__2.call(this,it,f);
case 3:
return G__27396__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27396.cljs$core$IFn$_invoke$arity$2 = G__27396__2;
G__27396.cljs$core$IFn$_invoke$arity$3 = G__27396__3;
return G__27396;
})()
);

goog.object.set(promesa.protocols._finally,"_",(function() {
var G__27397 = null;
var G__27397__2 = (function (it,f){
return promesa.protocols._finally(promesa.protocols._promise(it),f);
});
var G__27397__3 = (function (it,f,e){
return promesa.protocols._finally(promesa.protocols._promise(it),f,e);
});
G__27397 = function(it,f,e){
switch(arguments.length){
case 2:
return G__27397__2.call(this,it,f);
case 3:
return G__27397__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27397.cljs$core$IFn$_invoke$arity$2 = G__27397__2;
G__27397.cljs$core$IFn$_invoke$arity$3 = G__27397__3;
return G__27397;
})()
);
(Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
}));

goog.object.set(promesa.protocols.IPromiseFactory,"_",true);

goog.object.set(promesa.protocols._promise,"_",(function (v){
return promesa.impl.resolved(v);
}));
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
(Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
}));

//# sourceMappingURL=promesa.impl.js.map
