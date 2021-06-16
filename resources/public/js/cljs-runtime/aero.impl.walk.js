goog.provide('aero.impl.walk');
aero.impl.walk.walk = (function aero$impl$walk$walk(inner,outer,form){
var x = ((cljs.core.list_QMARK_(form))?(function (){var G__28256 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__28256) : outer.call(null,G__28256));
})():((cljs.core.map_entry_QMARK_(form))?(function (){var G__28257 = (new cljs.core.MapEntry((function (){var G__28258 = cljs.core.key(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__28258) : inner.call(null,G__28258));
})(),(function (){var G__28259 = cljs.core.val(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__28259) : inner.call(null,G__28259));
})(),null));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__28257) : outer.call(null,G__28257));
})():((cljs.core.seq_QMARK_(form))?(function (){var G__28260 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__28260) : outer.call(null,G__28260));
})():((cljs.core.record_QMARK_(form))?(function (){var G__28261 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null,x)));
}),form,form);
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__28261) : outer.call(null,G__28261));
})():((cljs.core.coll_QMARK_(form))?(function (){var G__28262 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__28262) : outer.call(null,G__28262));
})():(outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(form) : outer.call(null,form))
)))));
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWithMeta$))))?true:false):false)){
return cljs.core.with_meta(x,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(form),cljs.core.meta(x)], 0)));
} else {
return x;
}
});
aero.impl.walk.postwalk = (function aero$impl$walk$postwalk(f,form){
return aero.impl.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(aero.impl.walk.postwalk,f),f,form);
});

//# sourceMappingURL=aero.impl.walk.js.map
