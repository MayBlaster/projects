goog.provide('helix.hooks');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
helix.hooks.raw_use_effect = module$node_modules$react$index.useEffect;

helix.hooks.raw_use_layout_effect = module$node_modules$react$index.useLayoutEffect;

helix.hooks.raw_use_memo = module$node_modules$react$index.useMemo;

helix.hooks.raw_use_callback = module$node_modules$react$index.useCallback;

helix.hooks.raw_use_imperative_handle = module$node_modules$react$index.useImperativeHandle;
/**
 * Like `react/useState`, but the update function returned can be used similar
 *   to `swap!`.
 * 
 *   Example:
 *   ```
 *   (let [[state set-state] (use-state {:count 0})]
 * ;; ...
 * (set-state update :count inc))
 *   ```
 */
helix.hooks.use_state = (function helix$hooks$use_state(initial){
var vec__32490 = module$node_modules$react$index.useState(initial);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32490,(0),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32490,(1),null);
var updater = module$node_modules$react$index.useCallback((function() {
var helix$hooks$use_state_$_updater = null;
var helix$hooks$use_state_$_updater__1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var helix$hooks$use_state_$_updater__2 = (function() { 
var G__32519__delegate = function (f,xs){
return helix$hooks$use_state_$_updater.cljs$core$IFn$_invoke$arity$1((function helix$hooks$use_state_$_updater_$_spread_updater(x){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,x,xs);
}));
};
var G__32519 = function (f,var_args){
var xs = null;
if (arguments.length > 1) {
var G__32520__i = 0, G__32520__a = new Array(arguments.length -  1);
while (G__32520__i < G__32520__a.length) {G__32520__a[G__32520__i] = arguments[G__32520__i + 1]; ++G__32520__i;}
  xs = new cljs.core.IndexedSeq(G__32520__a,0,null);
} 
return G__32519__delegate.call(this,f,xs);};
G__32519.cljs$lang$maxFixedArity = 1;
G__32519.cljs$lang$applyTo = (function (arglist__32521){
var f = cljs.core.first(arglist__32521);
var xs = cljs.core.rest(arglist__32521);
return G__32519__delegate(f,xs);
});
G__32519.cljs$core$IFn$_invoke$arity$variadic = G__32519__delegate;
return G__32519;
})()
;
helix$hooks$use_state_$_updater = function(f,var_args){
var xs = var_args;
switch(arguments.length){
case 1:
return helix$hooks$use_state_$_updater__1.call(this,f);
default:
var G__32522 = null;
if (arguments.length > 1) {
var G__32523__i = 0, G__32523__a = new Array(arguments.length -  1);
while (G__32523__i < G__32523__a.length) {G__32523__a[G__32523__i] = arguments[G__32523__i + 1]; ++G__32523__i;}
G__32522 = new cljs.core.IndexedSeq(G__32523__a,0,null);
}
return helix$hooks$use_state_$_updater__2.cljs$core$IFn$_invoke$arity$variadic(f, G__32522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
helix$hooks$use_state_$_updater.cljs$lang$maxFixedArity = 1;
helix$hooks$use_state_$_updater.cljs$lang$applyTo = helix$hooks$use_state_$_updater__2.cljs$lang$applyTo;
helix$hooks$use_state_$_updater.cljs$core$IFn$_invoke$arity$1 = helix$hooks$use_state_$_updater__1;
helix$hooks$use_state_$_updater.cljs$core$IFn$_invoke$arity$variadic = helix$hooks$use_state_$_updater__2.cljs$core$IFn$_invoke$arity$variadic;
return helix$hooks$use_state_$_updater;
})()
,[]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,updater], null);
});
/**
 * Just like react/useRef. Supports accessing the "current" property via
 *   dereference (@) and updating the "current" property via `reset!` and `swap!`
 */
helix.hooks.use_ref = (function helix$hooks$use_ref(x){
var ref = module$node_modules$react$index.useRef(null);
if((ref.current == null)){
(ref.current = (function (){var x32493 = ({"current": x});
(x32493.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(x32493.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.current;
}));

(x32493.cljs$core$IReset$ = cljs.core.PROTOCOL_SENTINEL);

(x32493.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,v){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",v);
}));

(x32493.cljs$core$ISwap$ = cljs.core.PROTOCOL_SENTINEL);

(x32493.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",(function (){var G__32494 = this$__$1.current;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32494) : f.call(null,G__32494));
})());
}));

(x32493.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",(function (){var G__32495 = this$__$1.current;
var G__32496 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32495,G__32496) : f.call(null,G__32495,G__32496));
})());
}));

(x32493.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",(function (){var G__32497 = this$__$1.current;
var G__32498 = a;
var G__32499 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__32497,G__32498,G__32499) : f.call(null,G__32497,G__32498,G__32499));
})());
}));

(x32493.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.current,a,b,xs));
}));

return x32493;
})());
} else {
}

return ref.current;
});
/**
 * Just react/useReducer.
 */
helix.hooks.use_reducer = (function helix$hooks$use_reducer(var_args){
var G__32501 = arguments.length;
switch (G__32501) {
case 2:
return helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2 = (function (reducer,init_state){
return helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3(reducer,init_state,undefined);
}));

(helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3 = (function (reducer,init_state,init){
return module$node_modules$react$index.useReducer(module$node_modules$react$index.useMemo((function (){
if((((!(cljs.core.fn_QMARK_(reducer)))) && (cljs.core.ifn_QMARK_(reducer)))){
return (function helix$hooks$wrap_ifn(state,action){
return (reducer.cljs$core$IFn$_invoke$arity$2 ? reducer.cljs$core$IFn$_invoke$arity$2(state,action) : reducer.call(null,state,action));
});
} else {
return reducer;
}
}),[reducer]),init_state,init);
}));

(helix.hooks.use_reducer.cljs$lang$maxFixedArity = 3);

/**
 * Just react/useContext
 */
helix.hooks.use_context = module$node_modules$react$index.useContext;
helix.hooks.wrap_fx = (function helix$hooks$wrap_fx(f){
return (function helix$hooks$wrap_fx_$_wrap_fx_return(){
var x = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(x)){
return x;
} else {
return undefined;
}
});
});
helix.hooks.simple_body_QMARK_ = (function helix$hooks$simple_body_QMARK_(body){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(body),(1))) && ((cljs.core.first(body) instanceof cljs.core.Symbol)));
});
helix.hooks.determine_deps = (function helix$hooks$determine_deps(deps){
var G__32502 = deps;
var G__32502__$1 = (((G__32502 instanceof cljs.core.Keyword))?G__32502.fqn:null);
switch (G__32502__$1) {
case "once":
return [];

break;
case "always":
return undefined;

break;
case "auto-deps":
throw (new Error("Cannot use :auto-deps outside of macro."));

break;
default:
return cljs.core.to_array(deps);

}
});
helix.hooks.use_effect_STAR_ = (function helix$hooks$use_effect_STAR_(var_args){
var G__32504 = arguments.length;
switch (G__32504) {
case 1:
return helix.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useEffect(helix.hooks.wrap_fx(f));
}));

(helix.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-effect*`; use `use-effect` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useEffect(helix.hooks.wrap_fx(f),cljs.core.to_array(deps));
}));

(helix.hooks.use_effect_STAR_.cljs$lang$maxFixedArity = 2);

helix.hooks.use_layout_effect_STAR_ = (function helix$hooks$use_layout_effect_STAR_(var_args){
var G__32506 = arguments.length;
switch (G__32506) {
case 1:
return helix.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useLayoutEffect(helix.hooks.wrap_fx(f));
}));

(helix.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-layout-effect*`; use `use-layout-effect` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useLayoutEffect(helix.hooks.wrap_fx(f),cljs.core.to_array(deps));
}));

(helix.hooks.use_layout_effect_STAR_.cljs$lang$maxFixedArity = 2);

helix.hooks.use_memo_STAR_ = (function helix$hooks$use_memo_STAR_(var_args){
var G__32508 = arguments.length;
switch (G__32508) {
case 1:
return helix.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useMemo(f);
}));

(helix.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-memo*`; use `use-memo` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useMemo(f,cljs.core.to_array(deps));
}));

(helix.hooks.use_memo_STAR_.cljs$lang$maxFixedArity = 2);

helix.hooks.use_callback_STAR_ = (function helix$hooks$use_callback_STAR_(var_args){
var G__32510 = arguments.length;
switch (G__32510) {
case 1:
return helix.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useCallback(f);
}));

(helix.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-callback*`; use `use-callback` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useCallback(f,cljs.core.to_array(deps));
}));

(helix.hooks.use_callback_STAR_.cljs$lang$maxFixedArity = 2);

helix.hooks.use_imperative_handle_STAR_ = (function helix$hooks$use_imperative_handle_STAR_(var_args){
var G__32512 = arguments.length;
switch (G__32512) {
case 2:
return helix.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return helix.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return module$node_modules$react$index.useImperativeHandle(ref,f);
}));

(helix.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ref,f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-imperative-handle*`; use `use-imperative-handle` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useImperativeHandle(ref,f,cljs.core.to_array(deps));
}));

(helix.hooks.use_imperative_handle_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * just react/useDebugValue
 */
helix.hooks.use_debug_value = module$node_modules$react$index.debugValue;

//# sourceMappingURL=helix.hooks.js.map
