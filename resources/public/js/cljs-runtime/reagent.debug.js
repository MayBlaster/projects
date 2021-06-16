goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26298__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26302__i = 0, G__26302__a = new Array(arguments.length -  0);
while (G__26302__i < G__26302__a.length) {G__26302__a[G__26302__i] = arguments[G__26302__i + 0]; ++G__26302__i;}
  args = new cljs.core.IndexedSeq(G__26302__a,0,null);
} 
return G__26298__delegate.call(this,args);};
G__26298.cljs$lang$maxFixedArity = 0;
G__26298.cljs$lang$applyTo = (function (arglist__26303){
var args = cljs.core.seq(arglist__26303);
return G__26298__delegate(args);
});
G__26298.cljs$core$IFn$_invoke$arity$variadic = G__26298__delegate;
return G__26298;
})()
);

(o.error = (function() { 
var G__26304__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26305__i = 0, G__26305__a = new Array(arguments.length -  0);
while (G__26305__i < G__26305__a.length) {G__26305__a[G__26305__i] = arguments[G__26305__i + 0]; ++G__26305__i;}
  args = new cljs.core.IndexedSeq(G__26305__a,0,null);
} 
return G__26304__delegate.call(this,args);};
G__26304.cljs$lang$maxFixedArity = 0;
G__26304.cljs$lang$applyTo = (function (arglist__26307){
var args = cljs.core.seq(arglist__26307);
return G__26304__delegate(args);
});
G__26304.cljs$core$IFn$_invoke$arity$variadic = G__26304__delegate;
return G__26304;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
