goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30820 = arguments.length;
switch (G__30820) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30821 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30821 = (function (f,blockable,meta30822){
this.f = f;
this.blockable = blockable;
this.meta30822 = meta30822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30823,meta30822__$1){
var self__ = this;
var _30823__$1 = this;
return (new cljs.core.async.t_cljs$core$async30821(self__.f,self__.blockable,meta30822__$1));
}));

(cljs.core.async.t_cljs$core$async30821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30823){
var self__ = this;
var _30823__$1 = this;
return self__.meta30822;
}));

(cljs.core.async.t_cljs$core$async30821.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30821.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30822","meta30822",1372062122,null)], null);
}));

(cljs.core.async.t_cljs$core$async30821.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30821");

(cljs.core.async.t_cljs$core$async30821.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30821");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30821.
 */
cljs.core.async.__GT_t_cljs$core$async30821 = (function cljs$core$async$__GT_t_cljs$core$async30821(f__$1,blockable__$1,meta30822){
return (new cljs.core.async.t_cljs$core$async30821(f__$1,blockable__$1,meta30822));
});

}

return (new cljs.core.async.t_cljs$core$async30821(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30826 = arguments.length;
switch (G__30826) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30828 = arguments.length;
switch (G__30828) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30830 = arguments.length;
switch (G__30830) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32309 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32309) : fn1.call(null,val_32309));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32309) : fn1.call(null,val_32309));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30832 = arguments.length;
switch (G__30832) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32313 = n;
var x_32314 = (0);
while(true){
if((x_32314 < n__4613__auto___32313)){
(a[x_32314] = x_32314);

var G__32315 = (x_32314 + (1));
x_32314 = G__32315;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30833 = (function (flag,meta30834){
this.flag = flag;
this.meta30834 = meta30834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30835,meta30834__$1){
var self__ = this;
var _30835__$1 = this;
return (new cljs.core.async.t_cljs$core$async30833(self__.flag,meta30834__$1));
}));

(cljs.core.async.t_cljs$core$async30833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30835){
var self__ = this;
var _30835__$1 = this;
return self__.meta30834;
}));

(cljs.core.async.t_cljs$core$async30833.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30834","meta30834",-184139134,null)], null);
}));

(cljs.core.async.t_cljs$core$async30833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30833");

(cljs.core.async.t_cljs$core$async30833.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30833.
 */
cljs.core.async.__GT_t_cljs$core$async30833 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30833(flag__$1,meta30834){
return (new cljs.core.async.t_cljs$core$async30833(flag__$1,meta30834));
});

}

return (new cljs.core.async.t_cljs$core$async30833(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30836 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30836 = (function (flag,cb,meta30837){
this.flag = flag;
this.cb = cb;
this.meta30837 = meta30837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30838,meta30837__$1){
var self__ = this;
var _30838__$1 = this;
return (new cljs.core.async.t_cljs$core$async30836(self__.flag,self__.cb,meta30837__$1));
}));

(cljs.core.async.t_cljs$core$async30836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30838){
var self__ = this;
var _30838__$1 = this;
return self__.meta30837;
}));

(cljs.core.async.t_cljs$core$async30836.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30837","meta30837",1548246668,null)], null);
}));

(cljs.core.async.t_cljs$core$async30836.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30836");

(cljs.core.async.t_cljs$core$async30836.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30836");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30836.
 */
cljs.core.async.__GT_t_cljs$core$async30836 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30836(flag__$1,cb__$1,meta30837){
return (new cljs.core.async.t_cljs$core$async30836(flag__$1,cb__$1,meta30837));
});

}

return (new cljs.core.async.t_cljs$core$async30836(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30839_SHARP_){
var G__30841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30839_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30841) : fret.call(null,G__30841));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30840_SHARP_){
var G__30842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30840_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30842) : fret.call(null,G__30842));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32316 = (i + (1));
i = G__32316;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32317 = arguments.length;
var i__4737__auto___32318 = (0);
while(true){
if((i__4737__auto___32318 < len__4736__auto___32317)){
args__4742__auto__.push((arguments[i__4737__auto___32318]));

var G__32319 = (i__4737__auto___32318 + (1));
i__4737__auto___32318 = G__32319;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30845){
var map__30846 = p__30845;
var map__30846__$1 = (((((!((map__30846 == null))))?(((((map__30846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30846):map__30846);
var opts = map__30846__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30843){
var G__30844 = cljs.core.first(seq30843);
var seq30843__$1 = cljs.core.next(seq30843);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30844,seq30843__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30849 = arguments.length;
switch (G__30849) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30758__auto___32321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_30873){
var state_val_30874 = (state_30873[(1)]);
if((state_val_30874 === (7))){
var inst_30869 = (state_30873[(2)]);
var state_30873__$1 = state_30873;
var statearr_30875_32323 = state_30873__$1;
(statearr_30875_32323[(2)] = inst_30869);

(statearr_30875_32323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (1))){
var state_30873__$1 = state_30873;
var statearr_30876_32324 = state_30873__$1;
(statearr_30876_32324[(2)] = null);

(statearr_30876_32324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (4))){
var inst_30852 = (state_30873[(7)]);
var inst_30852__$1 = (state_30873[(2)]);
var inst_30853 = (inst_30852__$1 == null);
var state_30873__$1 = (function (){var statearr_30877 = state_30873;
(statearr_30877[(7)] = inst_30852__$1);

return statearr_30877;
})();
if(cljs.core.truth_(inst_30853)){
var statearr_30878_32326 = state_30873__$1;
(statearr_30878_32326[(1)] = (5));

} else {
var statearr_30879_32327 = state_30873__$1;
(statearr_30879_32327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (13))){
var state_30873__$1 = state_30873;
var statearr_30880_32329 = state_30873__$1;
(statearr_30880_32329[(2)] = null);

(statearr_30880_32329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (6))){
var inst_30852 = (state_30873[(7)]);
var state_30873__$1 = state_30873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30873__$1,(11),to,inst_30852);
} else {
if((state_val_30874 === (3))){
var inst_30871 = (state_30873[(2)]);
var state_30873__$1 = state_30873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30873__$1,inst_30871);
} else {
if((state_val_30874 === (12))){
var state_30873__$1 = state_30873;
var statearr_30881_32330 = state_30873__$1;
(statearr_30881_32330[(2)] = null);

(statearr_30881_32330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (2))){
var state_30873__$1 = state_30873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30873__$1,(4),from);
} else {
if((state_val_30874 === (11))){
var inst_30862 = (state_30873[(2)]);
var state_30873__$1 = state_30873;
if(cljs.core.truth_(inst_30862)){
var statearr_30882_32331 = state_30873__$1;
(statearr_30882_32331[(1)] = (12));

} else {
var statearr_30883_32332 = state_30873__$1;
(statearr_30883_32332[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (9))){
var state_30873__$1 = state_30873;
var statearr_30884_32333 = state_30873__$1;
(statearr_30884_32333[(2)] = null);

(statearr_30884_32333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (5))){
var state_30873__$1 = state_30873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30885_32334 = state_30873__$1;
(statearr_30885_32334[(1)] = (8));

} else {
var statearr_30886_32335 = state_30873__$1;
(statearr_30886_32335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (14))){
var inst_30867 = (state_30873[(2)]);
var state_30873__$1 = state_30873;
var statearr_30887_32336 = state_30873__$1;
(statearr_30887_32336[(2)] = inst_30867);

(statearr_30887_32336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (10))){
var inst_30859 = (state_30873[(2)]);
var state_30873__$1 = state_30873;
var statearr_30888_32337 = state_30873__$1;
(statearr_30888_32337[(2)] = inst_30859);

(statearr_30888_32337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30874 === (8))){
var inst_30856 = cljs.core.async.close_BANG_(to);
var state_30873__$1 = state_30873;
var statearr_30889_32338 = state_30873__$1;
(statearr_30889_32338[(2)] = inst_30856);

(statearr_30889_32338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30727__auto__ = null;
var cljs$core$async$state_machine__30727__auto____0 = (function (){
var statearr_30890 = [null,null,null,null,null,null,null,null];
(statearr_30890[(0)] = cljs$core$async$state_machine__30727__auto__);

(statearr_30890[(1)] = (1));

return statearr_30890;
});
var cljs$core$async$state_machine__30727__auto____1 = (function (state_30873){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_30873);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e30891){var ex__30730__auto__ = e30891;
var statearr_30892_32339 = state_30873;
(statearr_30892_32339[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_30873[(4)]))){
var statearr_30893_32340 = state_30873;
(statearr_30893_32340[(1)] = cljs.core.first((state_30873[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32342 = state_30873;
state_30873 = G__32342;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$state_machine__30727__auto__ = function(state_30873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30727__auto____1.call(this,state_30873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30727__auto____0;
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30727__auto____1;
return cljs$core$async$state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_30894 = f__30759__auto__();
(statearr_30894[(6)] = c__30758__auto___32321);

return statearr_30894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30895){
var vec__30896 = p__30895;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30896,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30896,(1),null);
var job = vec__30896;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30758__auto___32344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_30903){
var state_val_30904 = (state_30903[(1)]);
if((state_val_30904 === (1))){
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30903__$1,(2),res,v);
} else {
if((state_val_30904 === (2))){
var inst_30900 = (state_30903[(2)]);
var inst_30901 = cljs.core.async.close_BANG_(res);
var state_30903__$1 = (function (){var statearr_30905 = state_30903;
(statearr_30905[(7)] = inst_30900);

return statearr_30905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30903__$1,inst_30901);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0 = (function (){
var statearr_30906 = [null,null,null,null,null,null,null,null];
(statearr_30906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__);

(statearr_30906[(1)] = (1));

return statearr_30906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1 = (function (state_30903){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_30903);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e30907){var ex__30730__auto__ = e30907;
var statearr_30908_32347 = state_30903;
(statearr_30908_32347[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_30903[(4)]))){
var statearr_30909_32348 = state_30903;
(statearr_30909_32348[(1)] = cljs.core.first((state_30903[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32349 = state_30903;
state_30903 = G__32349;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__ = function(state_30903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1.call(this,state_30903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_30910 = f__30759__auto__();
(statearr_30910[(6)] = c__30758__auto___32344);

return statearr_30910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30911){
var vec__30912 = p__30911;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30912,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30912,(1),null);
var job = vec__30912;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32352 = n;
var __32353 = (0);
while(true){
if((__32353 < n__4613__auto___32352)){
var G__30915_32354 = type;
var G__30915_32355__$1 = (((G__30915_32354 instanceof cljs.core.Keyword))?G__30915_32354.fqn:null);
switch (G__30915_32355__$1) {
case "compute":
var c__30758__auto___32357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32353,c__30758__auto___32357,G__30915_32354,G__30915_32355__$1,n__4613__auto___32352,jobs,results,process,async){
return (function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = ((function (__32353,c__30758__auto___32357,G__30915_32354,G__30915_32355__$1,n__4613__auto___32352,jobs,results,process,async){
return (function (state_30928){
var state_val_30929 = (state_30928[(1)]);
if((state_val_30929 === (1))){
var state_30928__$1 = state_30928;
var statearr_30930_32358 = state_30928__$1;
(statearr_30930_32358[(2)] = null);

(statearr_30930_32358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (2))){
var state_30928__$1 = state_30928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30928__$1,(4),jobs);
} else {
if((state_val_30929 === (3))){
var inst_30926 = (state_30928[(2)]);
var state_30928__$1 = state_30928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30928__$1,inst_30926);
} else {
if((state_val_30929 === (4))){
var inst_30918 = (state_30928[(2)]);
var inst_30919 = process(inst_30918);
var state_30928__$1 = state_30928;
if(cljs.core.truth_(inst_30919)){
var statearr_30931_32359 = state_30928__$1;
(statearr_30931_32359[(1)] = (5));

} else {
var statearr_30932_32360 = state_30928__$1;
(statearr_30932_32360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (5))){
var state_30928__$1 = state_30928;
var statearr_30933_32361 = state_30928__$1;
(statearr_30933_32361[(2)] = null);

(statearr_30933_32361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (6))){
var state_30928__$1 = state_30928;
var statearr_30934_32362 = state_30928__$1;
(statearr_30934_32362[(2)] = null);

(statearr_30934_32362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (7))){
var inst_30924 = (state_30928[(2)]);
var state_30928__$1 = state_30928;
var statearr_30935_32363 = state_30928__$1;
(statearr_30935_32363[(2)] = inst_30924);

(statearr_30935_32363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32353,c__30758__auto___32357,G__30915_32354,G__30915_32355__$1,n__4613__auto___32352,jobs,results,process,async))
;
return ((function (__32353,switch__30726__auto__,c__30758__auto___32357,G__30915_32354,G__30915_32355__$1,n__4613__auto___32352,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0 = (function (){
var statearr_30936 = [null,null,null,null,null,null,null];
(statearr_30936[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__);

(statearr_30936[(1)] = (1));

return statearr_30936;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1 = (function (state_30928){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_30928);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e30937){var ex__30730__auto__ = e30937;
var statearr_30938_32364 = state_30928;
(statearr_30938_32364[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_30928[(4)]))){
var statearr_30939_32365 = state_30928;
(statearr_30939_32365[(1)] = cljs.core.first((state_30928[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32366 = state_30928;
state_30928 = G__32366;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__ = function(state_30928){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1.call(this,state_30928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__;
})()
;})(__32353,switch__30726__auto__,c__30758__auto___32357,G__30915_32354,G__30915_32355__$1,n__4613__auto___32352,jobs,results,process,async))
})();
var state__30760__auto__ = (function (){var statearr_30940 = f__30759__auto__();
(statearr_30940[(6)] = c__30758__auto___32357);

return statearr_30940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
});})(__32353,c__30758__auto___32357,G__30915_32354,G__30915_32355__$1,n__4613__auto___32352,jobs,results,process,async))
);


break;
case "async":
var c__30758__auto___32367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32353,c__30758__auto___32367,G__30915_32354,G__30915_32355__$1,n__4613__auto___32352,jobs,results,process,async){
return (function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = ((function (__32353,c__30758__auto___32367,G__30915_32354,G__30915_32355__$1,n__4613__auto___32352,jobs,results,process,async){
return (function (state_30953){
var state_val_30954 = (state_30953[(1)]);
if((state_val_30954 === (1))){
var state_30953__$1 = state_30953;
var statearr_30955_32373 = state_30953__$1;
(statearr_30955_32373[(2)] = null);

(statearr_30955_32373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (2))){
var state_30953__$1 = state_30953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30953__$1,(4),jobs);
} else {
if((state_val_30954 === (3))){
var inst_30951 = (state_30953[(2)]);
var state_30953__$1 = state_30953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30953__$1,inst_30951);
} else {
if((state_val_30954 === (4))){
var inst_30943 = (state_30953[(2)]);
var inst_30944 = async(inst_30943);
var state_30953__$1 = state_30953;
if(cljs.core.truth_(inst_30944)){
var statearr_30956_32374 = state_30953__$1;
(statearr_30956_32374[(1)] = (5));

} else {
var statearr_30957_32375 = state_30953__$1;
(statearr_30957_32375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (5))){
var state_30953__$1 = state_30953;
var statearr_30958_32376 = state_30953__$1;
(statearr_30958_32376[(2)] = null);

(statearr_30958_32376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (6))){
var state_30953__$1 = state_30953;
var statearr_30959_32377 = state_30953__$1;
(statearr_30959_32377[(2)] = null);

(statearr_30959_32377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30954 === (7))){
var inst_30949 = (state_30953[(2)]);
var state_30953__$1 = state_30953;
var statearr_30960_32378 = state_30953__$1;
(statearr_30960_32378[(2)] = inst_30949);

(statearr_30960_32378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32353,c__30758__auto___32367,G__30915_32354,G__30915_32355__$1,n__4613__auto___32352,jobs,results,process,async))
;
return ((function (__32353,switch__30726__auto__,c__30758__auto___32367,G__30915_32354,G__30915_32355__$1,n__4613__auto___32352,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0 = (function (){
var statearr_30961 = [null,null,null,null,null,null,null];
(statearr_30961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__);

(statearr_30961[(1)] = (1));

return statearr_30961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1 = (function (state_30953){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_30953);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e30962){var ex__30730__auto__ = e30962;
var statearr_30963_32379 = state_30953;
(statearr_30963_32379[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_30953[(4)]))){
var statearr_30964_32380 = state_30953;
(statearr_30964_32380[(1)] = cljs.core.first((state_30953[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32381 = state_30953;
state_30953 = G__32381;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__ = function(state_30953){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1.call(this,state_30953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__;
})()
;})(__32353,switch__30726__auto__,c__30758__auto___32367,G__30915_32354,G__30915_32355__$1,n__4613__auto___32352,jobs,results,process,async))
})();
var state__30760__auto__ = (function (){var statearr_30965 = f__30759__auto__();
(statearr_30965[(6)] = c__30758__auto___32367);

return statearr_30965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
});})(__32353,c__30758__auto___32367,G__30915_32354,G__30915_32355__$1,n__4613__auto___32352,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30915_32355__$1)].join('')));

}

var G__32382 = (__32353 + (1));
__32353 = G__32382;
continue;
} else {
}
break;
}

var c__30758__auto___32383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_30987){
var state_val_30988 = (state_30987[(1)]);
if((state_val_30988 === (7))){
var inst_30983 = (state_30987[(2)]);
var state_30987__$1 = state_30987;
var statearr_30989_32384 = state_30987__$1;
(statearr_30989_32384[(2)] = inst_30983);

(statearr_30989_32384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (1))){
var state_30987__$1 = state_30987;
var statearr_30990_32389 = state_30987__$1;
(statearr_30990_32389[(2)] = null);

(statearr_30990_32389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (4))){
var inst_30968 = (state_30987[(7)]);
var inst_30968__$1 = (state_30987[(2)]);
var inst_30969 = (inst_30968__$1 == null);
var state_30987__$1 = (function (){var statearr_30991 = state_30987;
(statearr_30991[(7)] = inst_30968__$1);

return statearr_30991;
})();
if(cljs.core.truth_(inst_30969)){
var statearr_30992_32390 = state_30987__$1;
(statearr_30992_32390[(1)] = (5));

} else {
var statearr_30993_32391 = state_30987__$1;
(statearr_30993_32391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (6))){
var inst_30968 = (state_30987[(7)]);
var inst_30973 = (state_30987[(8)]);
var inst_30973__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30974 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30975 = [inst_30968,inst_30973__$1];
var inst_30976 = (new cljs.core.PersistentVector(null,2,(5),inst_30974,inst_30975,null));
var state_30987__$1 = (function (){var statearr_30994 = state_30987;
(statearr_30994[(8)] = inst_30973__$1);

return statearr_30994;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30987__$1,(8),jobs,inst_30976);
} else {
if((state_val_30988 === (3))){
var inst_30985 = (state_30987[(2)]);
var state_30987__$1 = state_30987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30987__$1,inst_30985);
} else {
if((state_val_30988 === (2))){
var state_30987__$1 = state_30987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30987__$1,(4),from);
} else {
if((state_val_30988 === (9))){
var inst_30980 = (state_30987[(2)]);
var state_30987__$1 = (function (){var statearr_30995 = state_30987;
(statearr_30995[(9)] = inst_30980);

return statearr_30995;
})();
var statearr_30996_32404 = state_30987__$1;
(statearr_30996_32404[(2)] = null);

(statearr_30996_32404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (5))){
var inst_30971 = cljs.core.async.close_BANG_(jobs);
var state_30987__$1 = state_30987;
var statearr_30997_32405 = state_30987__$1;
(statearr_30997_32405[(2)] = inst_30971);

(statearr_30997_32405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (8))){
var inst_30973 = (state_30987[(8)]);
var inst_30978 = (state_30987[(2)]);
var state_30987__$1 = (function (){var statearr_30998 = state_30987;
(statearr_30998[(10)] = inst_30978);

return statearr_30998;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30987__$1,(9),results,inst_30973);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0 = (function (){
var statearr_30999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__);

(statearr_30999[(1)] = (1));

return statearr_30999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1 = (function (state_30987){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_30987);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e31000){var ex__30730__auto__ = e31000;
var statearr_31001_32406 = state_30987;
(statearr_31001_32406[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_30987[(4)]))){
var statearr_31002_32407 = state_30987;
(statearr_31002_32407[(1)] = cljs.core.first((state_30987[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32408 = state_30987;
state_30987 = G__32408;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__ = function(state_30987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1.call(this,state_30987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_31003 = f__30759__auto__();
(statearr_31003[(6)] = c__30758__auto___32383);

return statearr_31003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


var c__30758__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_31041){
var state_val_31042 = (state_31041[(1)]);
if((state_val_31042 === (7))){
var inst_31037 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31043_32409 = state_31041__$1;
(statearr_31043_32409[(2)] = inst_31037);

(statearr_31043_32409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (20))){
var state_31041__$1 = state_31041;
var statearr_31044_32410 = state_31041__$1;
(statearr_31044_32410[(2)] = null);

(statearr_31044_32410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (1))){
var state_31041__$1 = state_31041;
var statearr_31045_32411 = state_31041__$1;
(statearr_31045_32411[(2)] = null);

(statearr_31045_32411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (4))){
var inst_31006 = (state_31041[(7)]);
var inst_31006__$1 = (state_31041[(2)]);
var inst_31007 = (inst_31006__$1 == null);
var state_31041__$1 = (function (){var statearr_31046 = state_31041;
(statearr_31046[(7)] = inst_31006__$1);

return statearr_31046;
})();
if(cljs.core.truth_(inst_31007)){
var statearr_31047_32412 = state_31041__$1;
(statearr_31047_32412[(1)] = (5));

} else {
var statearr_31048_32413 = state_31041__$1;
(statearr_31048_32413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (15))){
var inst_31019 = (state_31041[(8)]);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31041__$1,(18),to,inst_31019);
} else {
if((state_val_31042 === (21))){
var inst_31032 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31049_32436 = state_31041__$1;
(statearr_31049_32436[(2)] = inst_31032);

(statearr_31049_32436[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (13))){
var inst_31034 = (state_31041[(2)]);
var state_31041__$1 = (function (){var statearr_31050 = state_31041;
(statearr_31050[(9)] = inst_31034);

return statearr_31050;
})();
var statearr_31051_32437 = state_31041__$1;
(statearr_31051_32437[(2)] = null);

(statearr_31051_32437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (6))){
var inst_31006 = (state_31041[(7)]);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31041__$1,(11),inst_31006);
} else {
if((state_val_31042 === (17))){
var inst_31027 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
if(cljs.core.truth_(inst_31027)){
var statearr_31052_32438 = state_31041__$1;
(statearr_31052_32438[(1)] = (19));

} else {
var statearr_31053_32439 = state_31041__$1;
(statearr_31053_32439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (3))){
var inst_31039 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31041__$1,inst_31039);
} else {
if((state_val_31042 === (12))){
var inst_31016 = (state_31041[(10)]);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31041__$1,(14),inst_31016);
} else {
if((state_val_31042 === (2))){
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31041__$1,(4),results);
} else {
if((state_val_31042 === (19))){
var state_31041__$1 = state_31041;
var statearr_31054_32440 = state_31041__$1;
(statearr_31054_32440[(2)] = null);

(statearr_31054_32440[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (11))){
var inst_31016 = (state_31041[(2)]);
var state_31041__$1 = (function (){var statearr_31055 = state_31041;
(statearr_31055[(10)] = inst_31016);

return statearr_31055;
})();
var statearr_31056_32441 = state_31041__$1;
(statearr_31056_32441[(2)] = null);

(statearr_31056_32441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (9))){
var state_31041__$1 = state_31041;
var statearr_31057_32442 = state_31041__$1;
(statearr_31057_32442[(2)] = null);

(statearr_31057_32442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (5))){
var state_31041__$1 = state_31041;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31058_32443 = state_31041__$1;
(statearr_31058_32443[(1)] = (8));

} else {
var statearr_31059_32444 = state_31041__$1;
(statearr_31059_32444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (14))){
var inst_31019 = (state_31041[(8)]);
var inst_31019__$1 = (state_31041[(2)]);
var inst_31020 = (inst_31019__$1 == null);
var inst_31021 = cljs.core.not(inst_31020);
var state_31041__$1 = (function (){var statearr_31060 = state_31041;
(statearr_31060[(8)] = inst_31019__$1);

return statearr_31060;
})();
if(inst_31021){
var statearr_31061_32445 = state_31041__$1;
(statearr_31061_32445[(1)] = (15));

} else {
var statearr_31062_32446 = state_31041__$1;
(statearr_31062_32446[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (16))){
var state_31041__$1 = state_31041;
var statearr_31063_32447 = state_31041__$1;
(statearr_31063_32447[(2)] = false);

(statearr_31063_32447[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (10))){
var inst_31013 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31064_32448 = state_31041__$1;
(statearr_31064_32448[(2)] = inst_31013);

(statearr_31064_32448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (18))){
var inst_31024 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31065_32449 = state_31041__$1;
(statearr_31065_32449[(2)] = inst_31024);

(statearr_31065_32449[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (8))){
var inst_31010 = cljs.core.async.close_BANG_(to);
var state_31041__$1 = state_31041;
var statearr_31066_32450 = state_31041__$1;
(statearr_31066_32450[(2)] = inst_31010);

(statearr_31066_32450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0 = (function (){
var statearr_31067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__);

(statearr_31067[(1)] = (1));

return statearr_31067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1 = (function (state_31041){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_31041);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e31068){var ex__30730__auto__ = e31068;
var statearr_31069_32452 = state_31041;
(statearr_31069_32452[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_31041[(4)]))){
var statearr_31070_32453 = state_31041;
(statearr_31070_32453[(1)] = cljs.core.first((state_31041[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32454 = state_31041;
state_31041 = G__32454;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__ = function(state_31041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1.call(this,state_31041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_31071 = f__30759__auto__();
(statearr_31071[(6)] = c__30758__auto__);

return statearr_31071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));

return c__30758__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31073 = arguments.length;
switch (G__31073) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31075 = arguments.length;
switch (G__31075) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31077 = arguments.length;
switch (G__31077) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30758__auto___32461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_31103){
var state_val_31104 = (state_31103[(1)]);
if((state_val_31104 === (7))){
var inst_31099 = (state_31103[(2)]);
var state_31103__$1 = state_31103;
var statearr_31105_32462 = state_31103__$1;
(statearr_31105_32462[(2)] = inst_31099);

(statearr_31105_32462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (1))){
var state_31103__$1 = state_31103;
var statearr_31106_32469 = state_31103__$1;
(statearr_31106_32469[(2)] = null);

(statearr_31106_32469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (4))){
var inst_31080 = (state_31103[(7)]);
var inst_31080__$1 = (state_31103[(2)]);
var inst_31081 = (inst_31080__$1 == null);
var state_31103__$1 = (function (){var statearr_31107 = state_31103;
(statearr_31107[(7)] = inst_31080__$1);

return statearr_31107;
})();
if(cljs.core.truth_(inst_31081)){
var statearr_31108_32470 = state_31103__$1;
(statearr_31108_32470[(1)] = (5));

} else {
var statearr_31109_32471 = state_31103__$1;
(statearr_31109_32471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (13))){
var state_31103__$1 = state_31103;
var statearr_31110_32472 = state_31103__$1;
(statearr_31110_32472[(2)] = null);

(statearr_31110_32472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (6))){
var inst_31080 = (state_31103[(7)]);
var inst_31086 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31080) : p.call(null,inst_31080));
var state_31103__$1 = state_31103;
if(cljs.core.truth_(inst_31086)){
var statearr_31111_32473 = state_31103__$1;
(statearr_31111_32473[(1)] = (9));

} else {
var statearr_31112_32474 = state_31103__$1;
(statearr_31112_32474[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (3))){
var inst_31101 = (state_31103[(2)]);
var state_31103__$1 = state_31103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31103__$1,inst_31101);
} else {
if((state_val_31104 === (12))){
var state_31103__$1 = state_31103;
var statearr_31113_32475 = state_31103__$1;
(statearr_31113_32475[(2)] = null);

(statearr_31113_32475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (2))){
var state_31103__$1 = state_31103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31103__$1,(4),ch);
} else {
if((state_val_31104 === (11))){
var inst_31080 = (state_31103[(7)]);
var inst_31090 = (state_31103[(2)]);
var state_31103__$1 = state_31103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31103__$1,(8),inst_31090,inst_31080);
} else {
if((state_val_31104 === (9))){
var state_31103__$1 = state_31103;
var statearr_31114_32476 = state_31103__$1;
(statearr_31114_32476[(2)] = tc);

(statearr_31114_32476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (5))){
var inst_31083 = cljs.core.async.close_BANG_(tc);
var inst_31084 = cljs.core.async.close_BANG_(fc);
var state_31103__$1 = (function (){var statearr_31115 = state_31103;
(statearr_31115[(8)] = inst_31083);

return statearr_31115;
})();
var statearr_31116_32477 = state_31103__$1;
(statearr_31116_32477[(2)] = inst_31084);

(statearr_31116_32477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (14))){
var inst_31097 = (state_31103[(2)]);
var state_31103__$1 = state_31103;
var statearr_31117_32478 = state_31103__$1;
(statearr_31117_32478[(2)] = inst_31097);

(statearr_31117_32478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (10))){
var state_31103__$1 = state_31103;
var statearr_31118_32479 = state_31103__$1;
(statearr_31118_32479[(2)] = fc);

(statearr_31118_32479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31104 === (8))){
var inst_31092 = (state_31103[(2)]);
var state_31103__$1 = state_31103;
if(cljs.core.truth_(inst_31092)){
var statearr_31119_32480 = state_31103__$1;
(statearr_31119_32480[(1)] = (12));

} else {
var statearr_31120_32481 = state_31103__$1;
(statearr_31120_32481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30727__auto__ = null;
var cljs$core$async$state_machine__30727__auto____0 = (function (){
var statearr_31121 = [null,null,null,null,null,null,null,null,null];
(statearr_31121[(0)] = cljs$core$async$state_machine__30727__auto__);

(statearr_31121[(1)] = (1));

return statearr_31121;
});
var cljs$core$async$state_machine__30727__auto____1 = (function (state_31103){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_31103);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e31122){var ex__30730__auto__ = e31122;
var statearr_31123_32503 = state_31103;
(statearr_31123_32503[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_31103[(4)]))){
var statearr_31124_32504 = state_31103;
(statearr_31124_32504[(1)] = cljs.core.first((state_31103[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32505 = state_31103;
state_31103 = G__32505;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$state_machine__30727__auto__ = function(state_31103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30727__auto____1.call(this,state_31103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30727__auto____0;
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30727__auto____1;
return cljs$core$async$state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_31125 = f__30759__auto__();
(statearr_31125[(6)] = c__30758__auto___32461);

return statearr_31125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30758__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_31147){
var state_val_31148 = (state_31147[(1)]);
if((state_val_31148 === (7))){
var inst_31143 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31149_32506 = state_31147__$1;
(statearr_31149_32506[(2)] = inst_31143);

(statearr_31149_32506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (1))){
var inst_31126 = init;
var inst_31127 = inst_31126;
var state_31147__$1 = (function (){var statearr_31150 = state_31147;
(statearr_31150[(7)] = inst_31127);

return statearr_31150;
})();
var statearr_31151_32507 = state_31147__$1;
(statearr_31151_32507[(2)] = null);

(statearr_31151_32507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (4))){
var inst_31130 = (state_31147[(8)]);
var inst_31130__$1 = (state_31147[(2)]);
var inst_31131 = (inst_31130__$1 == null);
var state_31147__$1 = (function (){var statearr_31152 = state_31147;
(statearr_31152[(8)] = inst_31130__$1);

return statearr_31152;
})();
if(cljs.core.truth_(inst_31131)){
var statearr_31153_32508 = state_31147__$1;
(statearr_31153_32508[(1)] = (5));

} else {
var statearr_31154_32509 = state_31147__$1;
(statearr_31154_32509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (6))){
var inst_31127 = (state_31147[(7)]);
var inst_31130 = (state_31147[(8)]);
var inst_31134 = (state_31147[(9)]);
var inst_31134__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31127,inst_31130) : f.call(null,inst_31127,inst_31130));
var inst_31135 = cljs.core.reduced_QMARK_(inst_31134__$1);
var state_31147__$1 = (function (){var statearr_31155 = state_31147;
(statearr_31155[(9)] = inst_31134__$1);

return statearr_31155;
})();
if(inst_31135){
var statearr_31156_32510 = state_31147__$1;
(statearr_31156_32510[(1)] = (8));

} else {
var statearr_31157_32511 = state_31147__$1;
(statearr_31157_32511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (3))){
var inst_31145 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31147__$1,inst_31145);
} else {
if((state_val_31148 === (2))){
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31147__$1,(4),ch);
} else {
if((state_val_31148 === (9))){
var inst_31134 = (state_31147[(9)]);
var inst_31127 = inst_31134;
var state_31147__$1 = (function (){var statearr_31158 = state_31147;
(statearr_31158[(7)] = inst_31127);

return statearr_31158;
})();
var statearr_31159_32518 = state_31147__$1;
(statearr_31159_32518[(2)] = null);

(statearr_31159_32518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (5))){
var inst_31127 = (state_31147[(7)]);
var state_31147__$1 = state_31147;
var statearr_31160_32519 = state_31147__$1;
(statearr_31160_32519[(2)] = inst_31127);

(statearr_31160_32519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (10))){
var inst_31141 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31161_32520 = state_31147__$1;
(statearr_31161_32520[(2)] = inst_31141);

(statearr_31161_32520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (8))){
var inst_31134 = (state_31147[(9)]);
var inst_31137 = cljs.core.deref(inst_31134);
var state_31147__$1 = state_31147;
var statearr_31162_32521 = state_31147__$1;
(statearr_31162_32521[(2)] = inst_31137);

(statearr_31162_32521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30727__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30727__auto____0 = (function (){
var statearr_31163 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31163[(0)] = cljs$core$async$reduce_$_state_machine__30727__auto__);

(statearr_31163[(1)] = (1));

return statearr_31163;
});
var cljs$core$async$reduce_$_state_machine__30727__auto____1 = (function (state_31147){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_31147);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e31164){var ex__30730__auto__ = e31164;
var statearr_31165_32522 = state_31147;
(statearr_31165_32522[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_31147[(4)]))){
var statearr_31166_32523 = state_31147;
(statearr_31166_32523[(1)] = cljs.core.first((state_31147[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32524 = state_31147;
state_31147 = G__32524;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30727__auto__ = function(state_31147){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30727__auto____1.call(this,state_31147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30727__auto____0;
cljs$core$async$reduce_$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30727__auto____1;
return cljs$core$async$reduce_$_state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_31167 = f__30759__auto__();
(statearr_31167[(6)] = c__30758__auto__);

return statearr_31167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));

return c__30758__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30758__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_31173){
var state_val_31174 = (state_31173[(1)]);
if((state_val_31174 === (1))){
var inst_31168 = cljs.core.async.reduce(f__$1,init,ch);
var state_31173__$1 = state_31173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31173__$1,(2),inst_31168);
} else {
if((state_val_31174 === (2))){
var inst_31170 = (state_31173[(2)]);
var inst_31171 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31170) : f__$1.call(null,inst_31170));
var state_31173__$1 = state_31173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31173__$1,inst_31171);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30727__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30727__auto____0 = (function (){
var statearr_31175 = [null,null,null,null,null,null,null];
(statearr_31175[(0)] = cljs$core$async$transduce_$_state_machine__30727__auto__);

(statearr_31175[(1)] = (1));

return statearr_31175;
});
var cljs$core$async$transduce_$_state_machine__30727__auto____1 = (function (state_31173){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_31173);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e31176){var ex__30730__auto__ = e31176;
var statearr_31177_32525 = state_31173;
(statearr_31177_32525[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_31173[(4)]))){
var statearr_31178_32526 = state_31173;
(statearr_31178_32526[(1)] = cljs.core.first((state_31173[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32533 = state_31173;
state_31173 = G__32533;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30727__auto__ = function(state_31173){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30727__auto____1.call(this,state_31173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30727__auto____0;
cljs$core$async$transduce_$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30727__auto____1;
return cljs$core$async$transduce_$_state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_31179 = f__30759__auto__();
(statearr_31179[(6)] = c__30758__auto__);

return statearr_31179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));

return c__30758__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31181 = arguments.length;
switch (G__31181) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30758__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_31206){
var state_val_31207 = (state_31206[(1)]);
if((state_val_31207 === (7))){
var inst_31188 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
var statearr_31208_32541 = state_31206__$1;
(statearr_31208_32541[(2)] = inst_31188);

(statearr_31208_32541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (1))){
var inst_31182 = cljs.core.seq(coll);
var inst_31183 = inst_31182;
var state_31206__$1 = (function (){var statearr_31209 = state_31206;
(statearr_31209[(7)] = inst_31183);

return statearr_31209;
})();
var statearr_31210_32542 = state_31206__$1;
(statearr_31210_32542[(2)] = null);

(statearr_31210_32542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (4))){
var inst_31183 = (state_31206[(7)]);
var inst_31186 = cljs.core.first(inst_31183);
var state_31206__$1 = state_31206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31206__$1,(7),ch,inst_31186);
} else {
if((state_val_31207 === (13))){
var inst_31200 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
var statearr_31211_32543 = state_31206__$1;
(statearr_31211_32543[(2)] = inst_31200);

(statearr_31211_32543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (6))){
var inst_31191 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
if(cljs.core.truth_(inst_31191)){
var statearr_31212_32544 = state_31206__$1;
(statearr_31212_32544[(1)] = (8));

} else {
var statearr_31213_32545 = state_31206__$1;
(statearr_31213_32545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (3))){
var inst_31204 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31206__$1,inst_31204);
} else {
if((state_val_31207 === (12))){
var state_31206__$1 = state_31206;
var statearr_31214_32546 = state_31206__$1;
(statearr_31214_32546[(2)] = null);

(statearr_31214_32546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (2))){
var inst_31183 = (state_31206[(7)]);
var state_31206__$1 = state_31206;
if(cljs.core.truth_(inst_31183)){
var statearr_31215_32547 = state_31206__$1;
(statearr_31215_32547[(1)] = (4));

} else {
var statearr_31216_32548 = state_31206__$1;
(statearr_31216_32548[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (11))){
var inst_31197 = cljs.core.async.close_BANG_(ch);
var state_31206__$1 = state_31206;
var statearr_31217_32549 = state_31206__$1;
(statearr_31217_32549[(2)] = inst_31197);

(statearr_31217_32549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (9))){
var state_31206__$1 = state_31206;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31218_32550 = state_31206__$1;
(statearr_31218_32550[(1)] = (11));

} else {
var statearr_31219_32551 = state_31206__$1;
(statearr_31219_32551[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (5))){
var inst_31183 = (state_31206[(7)]);
var state_31206__$1 = state_31206;
var statearr_31220_32552 = state_31206__$1;
(statearr_31220_32552[(2)] = inst_31183);

(statearr_31220_32552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (10))){
var inst_31202 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
var statearr_31221_32553 = state_31206__$1;
(statearr_31221_32553[(2)] = inst_31202);

(statearr_31221_32553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31207 === (8))){
var inst_31183 = (state_31206[(7)]);
var inst_31193 = cljs.core.next(inst_31183);
var inst_31183__$1 = inst_31193;
var state_31206__$1 = (function (){var statearr_31222 = state_31206;
(statearr_31222[(7)] = inst_31183__$1);

return statearr_31222;
})();
var statearr_31223_32554 = state_31206__$1;
(statearr_31223_32554[(2)] = null);

(statearr_31223_32554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30727__auto__ = null;
var cljs$core$async$state_machine__30727__auto____0 = (function (){
var statearr_31224 = [null,null,null,null,null,null,null,null];
(statearr_31224[(0)] = cljs$core$async$state_machine__30727__auto__);

(statearr_31224[(1)] = (1));

return statearr_31224;
});
var cljs$core$async$state_machine__30727__auto____1 = (function (state_31206){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_31206);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e31225){var ex__30730__auto__ = e31225;
var statearr_31226_32555 = state_31206;
(statearr_31226_32555[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_31206[(4)]))){
var statearr_31227_32556 = state_31206;
(statearr_31227_32556[(1)] = cljs.core.first((state_31206[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32557 = state_31206;
state_31206 = G__32557;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$state_machine__30727__auto__ = function(state_31206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30727__auto____1.call(this,state_31206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30727__auto____0;
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30727__auto____1;
return cljs$core$async$state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_31228 = f__30759__auto__();
(statearr_31228[(6)] = c__30758__auto__);

return statearr_31228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));

return c__30758__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31230 = arguments.length;
switch (G__31230) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32559 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32559(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32561 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32561(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32562 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32562(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32563 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32563(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31231 = (function (ch,cs,meta31232){
this.ch = ch;
this.cs = cs;
this.meta31232 = meta31232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31233,meta31232__$1){
var self__ = this;
var _31233__$1 = this;
return (new cljs.core.async.t_cljs$core$async31231(self__.ch,self__.cs,meta31232__$1));
}));

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31233){
var self__ = this;
var _31233__$1 = this;
return self__.meta31232;
}));

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31231.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31232","meta31232",234150188,null)], null);
}));

(cljs.core.async.t_cljs$core$async31231.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31231");

(cljs.core.async.t_cljs$core$async31231.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31231");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31231.
 */
cljs.core.async.__GT_t_cljs$core$async31231 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31231(ch__$1,cs__$1,meta31232){
return (new cljs.core.async.t_cljs$core$async31231(ch__$1,cs__$1,meta31232));
});

}

return (new cljs.core.async.t_cljs$core$async31231(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30758__auto___32568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_31366){
var state_val_31367 = (state_31366[(1)]);
if((state_val_31367 === (7))){
var inst_31362 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31368_32569 = state_31366__$1;
(statearr_31368_32569[(2)] = inst_31362);

(statearr_31368_32569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (20))){
var inst_31267 = (state_31366[(7)]);
var inst_31279 = cljs.core.first(inst_31267);
var inst_31280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31279,(0),null);
var inst_31281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31279,(1),null);
var state_31366__$1 = (function (){var statearr_31369 = state_31366;
(statearr_31369[(8)] = inst_31280);

return statearr_31369;
})();
if(cljs.core.truth_(inst_31281)){
var statearr_31370_32570 = state_31366__$1;
(statearr_31370_32570[(1)] = (22));

} else {
var statearr_31371_32571 = state_31366__$1;
(statearr_31371_32571[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (27))){
var inst_31236 = (state_31366[(9)]);
var inst_31309 = (state_31366[(10)]);
var inst_31316 = (state_31366[(11)]);
var inst_31311 = (state_31366[(12)]);
var inst_31316__$1 = cljs.core._nth(inst_31309,inst_31311);
var inst_31317 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31316__$1,inst_31236,done);
var state_31366__$1 = (function (){var statearr_31372 = state_31366;
(statearr_31372[(11)] = inst_31316__$1);

return statearr_31372;
})();
if(cljs.core.truth_(inst_31317)){
var statearr_31373_32572 = state_31366__$1;
(statearr_31373_32572[(1)] = (30));

} else {
var statearr_31374_32573 = state_31366__$1;
(statearr_31374_32573[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (1))){
var state_31366__$1 = state_31366;
var statearr_31375_32574 = state_31366__$1;
(statearr_31375_32574[(2)] = null);

(statearr_31375_32574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (24))){
var inst_31267 = (state_31366[(7)]);
var inst_31286 = (state_31366[(2)]);
var inst_31287 = cljs.core.next(inst_31267);
var inst_31245 = inst_31287;
var inst_31246 = null;
var inst_31247 = (0);
var inst_31248 = (0);
var state_31366__$1 = (function (){var statearr_31376 = state_31366;
(statearr_31376[(13)] = inst_31246);

(statearr_31376[(14)] = inst_31247);

(statearr_31376[(15)] = inst_31245);

(statearr_31376[(16)] = inst_31248);

(statearr_31376[(17)] = inst_31286);

return statearr_31376;
})();
var statearr_31377_32577 = state_31366__$1;
(statearr_31377_32577[(2)] = null);

(statearr_31377_32577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (39))){
var state_31366__$1 = state_31366;
var statearr_31381_32578 = state_31366__$1;
(statearr_31381_32578[(2)] = null);

(statearr_31381_32578[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (4))){
var inst_31236 = (state_31366[(9)]);
var inst_31236__$1 = (state_31366[(2)]);
var inst_31237 = (inst_31236__$1 == null);
var state_31366__$1 = (function (){var statearr_31382 = state_31366;
(statearr_31382[(9)] = inst_31236__$1);

return statearr_31382;
})();
if(cljs.core.truth_(inst_31237)){
var statearr_31383_32579 = state_31366__$1;
(statearr_31383_32579[(1)] = (5));

} else {
var statearr_31384_32580 = state_31366__$1;
(statearr_31384_32580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (15))){
var inst_31246 = (state_31366[(13)]);
var inst_31247 = (state_31366[(14)]);
var inst_31245 = (state_31366[(15)]);
var inst_31248 = (state_31366[(16)]);
var inst_31263 = (state_31366[(2)]);
var inst_31264 = (inst_31248 + (1));
var tmp31378 = inst_31246;
var tmp31379 = inst_31247;
var tmp31380 = inst_31245;
var inst_31245__$1 = tmp31380;
var inst_31246__$1 = tmp31378;
var inst_31247__$1 = tmp31379;
var inst_31248__$1 = inst_31264;
var state_31366__$1 = (function (){var statearr_31385 = state_31366;
(statearr_31385[(13)] = inst_31246__$1);

(statearr_31385[(18)] = inst_31263);

(statearr_31385[(14)] = inst_31247__$1);

(statearr_31385[(15)] = inst_31245__$1);

(statearr_31385[(16)] = inst_31248__$1);

return statearr_31385;
})();
var statearr_31386_32583 = state_31366__$1;
(statearr_31386_32583[(2)] = null);

(statearr_31386_32583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (21))){
var inst_31290 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31390_32584 = state_31366__$1;
(statearr_31390_32584[(2)] = inst_31290);

(statearr_31390_32584[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (31))){
var inst_31316 = (state_31366[(11)]);
var inst_31320 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31316);
var state_31366__$1 = state_31366;
var statearr_31391_32585 = state_31366__$1;
(statearr_31391_32585[(2)] = inst_31320);

(statearr_31391_32585[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (32))){
var inst_31308 = (state_31366[(19)]);
var inst_31309 = (state_31366[(10)]);
var inst_31310 = (state_31366[(20)]);
var inst_31311 = (state_31366[(12)]);
var inst_31322 = (state_31366[(2)]);
var inst_31323 = (inst_31311 + (1));
var tmp31387 = inst_31308;
var tmp31388 = inst_31309;
var tmp31389 = inst_31310;
var inst_31308__$1 = tmp31387;
var inst_31309__$1 = tmp31388;
var inst_31310__$1 = tmp31389;
var inst_31311__$1 = inst_31323;
var state_31366__$1 = (function (){var statearr_31392 = state_31366;
(statearr_31392[(19)] = inst_31308__$1);

(statearr_31392[(21)] = inst_31322);

(statearr_31392[(10)] = inst_31309__$1);

(statearr_31392[(20)] = inst_31310__$1);

(statearr_31392[(12)] = inst_31311__$1);

return statearr_31392;
})();
var statearr_31393_32586 = state_31366__$1;
(statearr_31393_32586[(2)] = null);

(statearr_31393_32586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (40))){
var inst_31335 = (state_31366[(22)]);
var inst_31339 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31335);
var state_31366__$1 = state_31366;
var statearr_31394_32587 = state_31366__$1;
(statearr_31394_32587[(2)] = inst_31339);

(statearr_31394_32587[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (33))){
var inst_31326 = (state_31366[(23)]);
var inst_31328 = cljs.core.chunked_seq_QMARK_(inst_31326);
var state_31366__$1 = state_31366;
if(inst_31328){
var statearr_31395_32588 = state_31366__$1;
(statearr_31395_32588[(1)] = (36));

} else {
var statearr_31396_32589 = state_31366__$1;
(statearr_31396_32589[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (13))){
var inst_31257 = (state_31366[(24)]);
var inst_31260 = cljs.core.async.close_BANG_(inst_31257);
var state_31366__$1 = state_31366;
var statearr_31397_32590 = state_31366__$1;
(statearr_31397_32590[(2)] = inst_31260);

(statearr_31397_32590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (22))){
var inst_31280 = (state_31366[(8)]);
var inst_31283 = cljs.core.async.close_BANG_(inst_31280);
var state_31366__$1 = state_31366;
var statearr_31398_32591 = state_31366__$1;
(statearr_31398_32591[(2)] = inst_31283);

(statearr_31398_32591[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (36))){
var inst_31326 = (state_31366[(23)]);
var inst_31330 = cljs.core.chunk_first(inst_31326);
var inst_31331 = cljs.core.chunk_rest(inst_31326);
var inst_31332 = cljs.core.count(inst_31330);
var inst_31308 = inst_31331;
var inst_31309 = inst_31330;
var inst_31310 = inst_31332;
var inst_31311 = (0);
var state_31366__$1 = (function (){var statearr_31399 = state_31366;
(statearr_31399[(19)] = inst_31308);

(statearr_31399[(10)] = inst_31309);

(statearr_31399[(20)] = inst_31310);

(statearr_31399[(12)] = inst_31311);

return statearr_31399;
})();
var statearr_31400_32592 = state_31366__$1;
(statearr_31400_32592[(2)] = null);

(statearr_31400_32592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (41))){
var inst_31326 = (state_31366[(23)]);
var inst_31341 = (state_31366[(2)]);
var inst_31342 = cljs.core.next(inst_31326);
var inst_31308 = inst_31342;
var inst_31309 = null;
var inst_31310 = (0);
var inst_31311 = (0);
var state_31366__$1 = (function (){var statearr_31401 = state_31366;
(statearr_31401[(19)] = inst_31308);

(statearr_31401[(10)] = inst_31309);

(statearr_31401[(25)] = inst_31341);

(statearr_31401[(20)] = inst_31310);

(statearr_31401[(12)] = inst_31311);

return statearr_31401;
})();
var statearr_31402_32593 = state_31366__$1;
(statearr_31402_32593[(2)] = null);

(statearr_31402_32593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (43))){
var state_31366__$1 = state_31366;
var statearr_31403_32594 = state_31366__$1;
(statearr_31403_32594[(2)] = null);

(statearr_31403_32594[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (29))){
var inst_31350 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31404_32595 = state_31366__$1;
(statearr_31404_32595[(2)] = inst_31350);

(statearr_31404_32595[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (44))){
var inst_31359 = (state_31366[(2)]);
var state_31366__$1 = (function (){var statearr_31405 = state_31366;
(statearr_31405[(26)] = inst_31359);

return statearr_31405;
})();
var statearr_31406_32596 = state_31366__$1;
(statearr_31406_32596[(2)] = null);

(statearr_31406_32596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (6))){
var inst_31300 = (state_31366[(27)]);
var inst_31299 = cljs.core.deref(cs);
var inst_31300__$1 = cljs.core.keys(inst_31299);
var inst_31301 = cljs.core.count(inst_31300__$1);
var inst_31302 = cljs.core.reset_BANG_(dctr,inst_31301);
var inst_31307 = cljs.core.seq(inst_31300__$1);
var inst_31308 = inst_31307;
var inst_31309 = null;
var inst_31310 = (0);
var inst_31311 = (0);
var state_31366__$1 = (function (){var statearr_31407 = state_31366;
(statearr_31407[(19)] = inst_31308);

(statearr_31407[(28)] = inst_31302);

(statearr_31407[(10)] = inst_31309);

(statearr_31407[(20)] = inst_31310);

(statearr_31407[(27)] = inst_31300__$1);

(statearr_31407[(12)] = inst_31311);

return statearr_31407;
})();
var statearr_31408_32599 = state_31366__$1;
(statearr_31408_32599[(2)] = null);

(statearr_31408_32599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (28))){
var inst_31308 = (state_31366[(19)]);
var inst_31326 = (state_31366[(23)]);
var inst_31326__$1 = cljs.core.seq(inst_31308);
var state_31366__$1 = (function (){var statearr_31409 = state_31366;
(statearr_31409[(23)] = inst_31326__$1);

return statearr_31409;
})();
if(inst_31326__$1){
var statearr_31410_32600 = state_31366__$1;
(statearr_31410_32600[(1)] = (33));

} else {
var statearr_31411_32601 = state_31366__$1;
(statearr_31411_32601[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (25))){
var inst_31310 = (state_31366[(20)]);
var inst_31311 = (state_31366[(12)]);
var inst_31313 = (inst_31311 < inst_31310);
var inst_31314 = inst_31313;
var state_31366__$1 = state_31366;
if(cljs.core.truth_(inst_31314)){
var statearr_31412_32602 = state_31366__$1;
(statearr_31412_32602[(1)] = (27));

} else {
var statearr_31413_32603 = state_31366__$1;
(statearr_31413_32603[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (34))){
var state_31366__$1 = state_31366;
var statearr_31414_32604 = state_31366__$1;
(statearr_31414_32604[(2)] = null);

(statearr_31414_32604[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (17))){
var state_31366__$1 = state_31366;
var statearr_31415_32605 = state_31366__$1;
(statearr_31415_32605[(2)] = null);

(statearr_31415_32605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (3))){
var inst_31364 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31366__$1,inst_31364);
} else {
if((state_val_31367 === (12))){
var inst_31295 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31416_32606 = state_31366__$1;
(statearr_31416_32606[(2)] = inst_31295);

(statearr_31416_32606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (2))){
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31366__$1,(4),ch);
} else {
if((state_val_31367 === (23))){
var state_31366__$1 = state_31366;
var statearr_31417_32607 = state_31366__$1;
(statearr_31417_32607[(2)] = null);

(statearr_31417_32607[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (35))){
var inst_31348 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31418_32608 = state_31366__$1;
(statearr_31418_32608[(2)] = inst_31348);

(statearr_31418_32608[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (19))){
var inst_31267 = (state_31366[(7)]);
var inst_31271 = cljs.core.chunk_first(inst_31267);
var inst_31272 = cljs.core.chunk_rest(inst_31267);
var inst_31273 = cljs.core.count(inst_31271);
var inst_31245 = inst_31272;
var inst_31246 = inst_31271;
var inst_31247 = inst_31273;
var inst_31248 = (0);
var state_31366__$1 = (function (){var statearr_31419 = state_31366;
(statearr_31419[(13)] = inst_31246);

(statearr_31419[(14)] = inst_31247);

(statearr_31419[(15)] = inst_31245);

(statearr_31419[(16)] = inst_31248);

return statearr_31419;
})();
var statearr_31420_32609 = state_31366__$1;
(statearr_31420_32609[(2)] = null);

(statearr_31420_32609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (11))){
var inst_31267 = (state_31366[(7)]);
var inst_31245 = (state_31366[(15)]);
var inst_31267__$1 = cljs.core.seq(inst_31245);
var state_31366__$1 = (function (){var statearr_31421 = state_31366;
(statearr_31421[(7)] = inst_31267__$1);

return statearr_31421;
})();
if(inst_31267__$1){
var statearr_31422_32610 = state_31366__$1;
(statearr_31422_32610[(1)] = (16));

} else {
var statearr_31423_32611 = state_31366__$1;
(statearr_31423_32611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (9))){
var inst_31297 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31424_32612 = state_31366__$1;
(statearr_31424_32612[(2)] = inst_31297);

(statearr_31424_32612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (5))){
var inst_31243 = cljs.core.deref(cs);
var inst_31244 = cljs.core.seq(inst_31243);
var inst_31245 = inst_31244;
var inst_31246 = null;
var inst_31247 = (0);
var inst_31248 = (0);
var state_31366__$1 = (function (){var statearr_31425 = state_31366;
(statearr_31425[(13)] = inst_31246);

(statearr_31425[(14)] = inst_31247);

(statearr_31425[(15)] = inst_31245);

(statearr_31425[(16)] = inst_31248);

return statearr_31425;
})();
var statearr_31426_32613 = state_31366__$1;
(statearr_31426_32613[(2)] = null);

(statearr_31426_32613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (14))){
var state_31366__$1 = state_31366;
var statearr_31427_32614 = state_31366__$1;
(statearr_31427_32614[(2)] = null);

(statearr_31427_32614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (45))){
var inst_31356 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31428_32615 = state_31366__$1;
(statearr_31428_32615[(2)] = inst_31356);

(statearr_31428_32615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (26))){
var inst_31300 = (state_31366[(27)]);
var inst_31352 = (state_31366[(2)]);
var inst_31353 = cljs.core.seq(inst_31300);
var state_31366__$1 = (function (){var statearr_31429 = state_31366;
(statearr_31429[(29)] = inst_31352);

return statearr_31429;
})();
if(inst_31353){
var statearr_31430_32616 = state_31366__$1;
(statearr_31430_32616[(1)] = (42));

} else {
var statearr_31431_32617 = state_31366__$1;
(statearr_31431_32617[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (16))){
var inst_31267 = (state_31366[(7)]);
var inst_31269 = cljs.core.chunked_seq_QMARK_(inst_31267);
var state_31366__$1 = state_31366;
if(inst_31269){
var statearr_31432_32618 = state_31366__$1;
(statearr_31432_32618[(1)] = (19));

} else {
var statearr_31433_32619 = state_31366__$1;
(statearr_31433_32619[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (38))){
var inst_31345 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31434_32621 = state_31366__$1;
(statearr_31434_32621[(2)] = inst_31345);

(statearr_31434_32621[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (30))){
var state_31366__$1 = state_31366;
var statearr_31435_32622 = state_31366__$1;
(statearr_31435_32622[(2)] = null);

(statearr_31435_32622[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (10))){
var inst_31246 = (state_31366[(13)]);
var inst_31248 = (state_31366[(16)]);
var inst_31256 = cljs.core._nth(inst_31246,inst_31248);
var inst_31257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31256,(0),null);
var inst_31258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31256,(1),null);
var state_31366__$1 = (function (){var statearr_31436 = state_31366;
(statearr_31436[(24)] = inst_31257);

return statearr_31436;
})();
if(cljs.core.truth_(inst_31258)){
var statearr_31437_32623 = state_31366__$1;
(statearr_31437_32623[(1)] = (13));

} else {
var statearr_31438_32624 = state_31366__$1;
(statearr_31438_32624[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (18))){
var inst_31293 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31439_32625 = state_31366__$1;
(statearr_31439_32625[(2)] = inst_31293);

(statearr_31439_32625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (42))){
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31366__$1,(45),dchan);
} else {
if((state_val_31367 === (37))){
var inst_31236 = (state_31366[(9)]);
var inst_31326 = (state_31366[(23)]);
var inst_31335 = (state_31366[(22)]);
var inst_31335__$1 = cljs.core.first(inst_31326);
var inst_31336 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31335__$1,inst_31236,done);
var state_31366__$1 = (function (){var statearr_31440 = state_31366;
(statearr_31440[(22)] = inst_31335__$1);

return statearr_31440;
})();
if(cljs.core.truth_(inst_31336)){
var statearr_31441_32626 = state_31366__$1;
(statearr_31441_32626[(1)] = (39));

} else {
var statearr_31442_32627 = state_31366__$1;
(statearr_31442_32627[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (8))){
var inst_31247 = (state_31366[(14)]);
var inst_31248 = (state_31366[(16)]);
var inst_31250 = (inst_31248 < inst_31247);
var inst_31251 = inst_31250;
var state_31366__$1 = state_31366;
if(cljs.core.truth_(inst_31251)){
var statearr_31443_32628 = state_31366__$1;
(statearr_31443_32628[(1)] = (10));

} else {
var statearr_31444_32629 = state_31366__$1;
(statearr_31444_32629[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30727__auto__ = null;
var cljs$core$async$mult_$_state_machine__30727__auto____0 = (function (){
var statearr_31445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31445[(0)] = cljs$core$async$mult_$_state_machine__30727__auto__);

(statearr_31445[(1)] = (1));

return statearr_31445;
});
var cljs$core$async$mult_$_state_machine__30727__auto____1 = (function (state_31366){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_31366);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e31446){var ex__30730__auto__ = e31446;
var statearr_31447_32630 = state_31366;
(statearr_31447_32630[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_31366[(4)]))){
var statearr_31448_32631 = state_31366;
(statearr_31448_32631[(1)] = cljs.core.first((state_31366[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32632 = state_31366;
state_31366 = G__32632;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30727__auto__ = function(state_31366){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30727__auto____1.call(this,state_31366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30727__auto____0;
cljs$core$async$mult_$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30727__auto____1;
return cljs$core$async$mult_$_state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_31449 = f__30759__auto__();
(statearr_31449[(6)] = c__30758__auto___32568);

return statearr_31449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31451 = arguments.length;
switch (G__31451) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32634 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32634(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32635 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32635(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32636 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32636(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32641 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32641(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32642 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32642(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32643 = arguments.length;
var i__4737__auto___32644 = (0);
while(true){
if((i__4737__auto___32644 < len__4736__auto___32643)){
args__4742__auto__.push((arguments[i__4737__auto___32644]));

var G__32645 = (i__4737__auto___32644 + (1));
i__4737__auto___32644 = G__32645;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31456){
var map__31457 = p__31456;
var map__31457__$1 = (((((!((map__31457 == null))))?(((((map__31457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31457):map__31457);
var opts = map__31457__$1;
var statearr_31459_32650 = state;
(statearr_31459_32650[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31460_32654 = state;
(statearr_31460_32654[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31461_32655 = state;
(statearr_31461_32655[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31452){
var G__31453 = cljs.core.first(seq31452);
var seq31452__$1 = cljs.core.next(seq31452);
var G__31454 = cljs.core.first(seq31452__$1);
var seq31452__$2 = cljs.core.next(seq31452__$1);
var G__31455 = cljs.core.first(seq31452__$2);
var seq31452__$3 = cljs.core.next(seq31452__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31453,G__31454,G__31455,seq31452__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31462 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31463){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31463 = meta31463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31464,meta31463__$1){
var self__ = this;
var _31464__$1 = this;
return (new cljs.core.async.t_cljs$core$async31462(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31463__$1));
}));

(cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31464){
var self__ = this;
var _31464__$1 = this;
return self__.meta31463;
}));

(cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31462.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31463","meta31463",295206272,null)], null);
}));

(cljs.core.async.t_cljs$core$async31462.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31462");

(cljs.core.async.t_cljs$core$async31462.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31462");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31462.
 */
cljs.core.async.__GT_t_cljs$core$async31462 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31462(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31463){
return (new cljs.core.async.t_cljs$core$async31462(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31463));
});

}

return (new cljs.core.async.t_cljs$core$async31462(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30758__auto___32662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_31566){
var state_val_31567 = (state_31566[(1)]);
if((state_val_31567 === (7))){
var inst_31481 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
var statearr_31568_32663 = state_31566__$1;
(statearr_31568_32663[(2)] = inst_31481);

(statearr_31568_32663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (20))){
var inst_31493 = (state_31566[(7)]);
var state_31566__$1 = state_31566;
var statearr_31569_32664 = state_31566__$1;
(statearr_31569_32664[(2)] = inst_31493);

(statearr_31569_32664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (27))){
var state_31566__$1 = state_31566;
var statearr_31570_32665 = state_31566__$1;
(statearr_31570_32665[(2)] = null);

(statearr_31570_32665[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (1))){
var inst_31468 = (state_31566[(8)]);
var inst_31468__$1 = calc_state();
var inst_31470 = (inst_31468__$1 == null);
var inst_31471 = cljs.core.not(inst_31470);
var state_31566__$1 = (function (){var statearr_31571 = state_31566;
(statearr_31571[(8)] = inst_31468__$1);

return statearr_31571;
})();
if(inst_31471){
var statearr_31572_32669 = state_31566__$1;
(statearr_31572_32669[(1)] = (2));

} else {
var statearr_31573_32670 = state_31566__$1;
(statearr_31573_32670[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (24))){
var inst_31540 = (state_31566[(9)]);
var inst_31517 = (state_31566[(10)]);
var inst_31526 = (state_31566[(11)]);
var inst_31540__$1 = (inst_31517.cljs$core$IFn$_invoke$arity$1 ? inst_31517.cljs$core$IFn$_invoke$arity$1(inst_31526) : inst_31517.call(null,inst_31526));
var state_31566__$1 = (function (){var statearr_31574 = state_31566;
(statearr_31574[(9)] = inst_31540__$1);

return statearr_31574;
})();
if(cljs.core.truth_(inst_31540__$1)){
var statearr_31575_32675 = state_31566__$1;
(statearr_31575_32675[(1)] = (29));

} else {
var statearr_31576_32676 = state_31566__$1;
(statearr_31576_32676[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (4))){
var inst_31484 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
if(cljs.core.truth_(inst_31484)){
var statearr_31577_32677 = state_31566__$1;
(statearr_31577_32677[(1)] = (8));

} else {
var statearr_31578_32678 = state_31566__$1;
(statearr_31578_32678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (15))){
var inst_31511 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
if(cljs.core.truth_(inst_31511)){
var statearr_31579_32679 = state_31566__$1;
(statearr_31579_32679[(1)] = (19));

} else {
var statearr_31580_32680 = state_31566__$1;
(statearr_31580_32680[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (21))){
var inst_31516 = (state_31566[(12)]);
var inst_31516__$1 = (state_31566[(2)]);
var inst_31517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31516__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31516__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31516__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31566__$1 = (function (){var statearr_31581 = state_31566;
(statearr_31581[(12)] = inst_31516__$1);

(statearr_31581[(10)] = inst_31517);

(statearr_31581[(13)] = inst_31518);

return statearr_31581;
})();
return cljs.core.async.ioc_alts_BANG_(state_31566__$1,(22),inst_31519);
} else {
if((state_val_31567 === (31))){
var inst_31548 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
if(cljs.core.truth_(inst_31548)){
var statearr_31582_32682 = state_31566__$1;
(statearr_31582_32682[(1)] = (32));

} else {
var statearr_31583_32683 = state_31566__$1;
(statearr_31583_32683[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (32))){
var inst_31525 = (state_31566[(14)]);
var state_31566__$1 = state_31566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31566__$1,(35),out,inst_31525);
} else {
if((state_val_31567 === (33))){
var inst_31516 = (state_31566[(12)]);
var inst_31493 = inst_31516;
var state_31566__$1 = (function (){var statearr_31584 = state_31566;
(statearr_31584[(7)] = inst_31493);

return statearr_31584;
})();
var statearr_31585_32685 = state_31566__$1;
(statearr_31585_32685[(2)] = null);

(statearr_31585_32685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (13))){
var inst_31493 = (state_31566[(7)]);
var inst_31500 = inst_31493.cljs$lang$protocol_mask$partition0$;
var inst_31501 = (inst_31500 & (64));
var inst_31502 = inst_31493.cljs$core$ISeq$;
var inst_31503 = (cljs.core.PROTOCOL_SENTINEL === inst_31502);
var inst_31504 = ((inst_31501) || (inst_31503));
var state_31566__$1 = state_31566;
if(cljs.core.truth_(inst_31504)){
var statearr_31586_32686 = state_31566__$1;
(statearr_31586_32686[(1)] = (16));

} else {
var statearr_31587_32687 = state_31566__$1;
(statearr_31587_32687[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (22))){
var inst_31525 = (state_31566[(14)]);
var inst_31526 = (state_31566[(11)]);
var inst_31524 = (state_31566[(2)]);
var inst_31525__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31524,(0),null);
var inst_31526__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31524,(1),null);
var inst_31527 = (inst_31525__$1 == null);
var inst_31528 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31526__$1,change);
var inst_31529 = ((inst_31527) || (inst_31528));
var state_31566__$1 = (function (){var statearr_31588 = state_31566;
(statearr_31588[(14)] = inst_31525__$1);

(statearr_31588[(11)] = inst_31526__$1);

return statearr_31588;
})();
if(cljs.core.truth_(inst_31529)){
var statearr_31589_32692 = state_31566__$1;
(statearr_31589_32692[(1)] = (23));

} else {
var statearr_31590_32693 = state_31566__$1;
(statearr_31590_32693[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (36))){
var inst_31516 = (state_31566[(12)]);
var inst_31493 = inst_31516;
var state_31566__$1 = (function (){var statearr_31591 = state_31566;
(statearr_31591[(7)] = inst_31493);

return statearr_31591;
})();
var statearr_31592_32694 = state_31566__$1;
(statearr_31592_32694[(2)] = null);

(statearr_31592_32694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (29))){
var inst_31540 = (state_31566[(9)]);
var state_31566__$1 = state_31566;
var statearr_31593_32695 = state_31566__$1;
(statearr_31593_32695[(2)] = inst_31540);

(statearr_31593_32695[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (6))){
var state_31566__$1 = state_31566;
var statearr_31594_32696 = state_31566__$1;
(statearr_31594_32696[(2)] = false);

(statearr_31594_32696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (28))){
var inst_31536 = (state_31566[(2)]);
var inst_31537 = calc_state();
var inst_31493 = inst_31537;
var state_31566__$1 = (function (){var statearr_31595 = state_31566;
(statearr_31595[(7)] = inst_31493);

(statearr_31595[(15)] = inst_31536);

return statearr_31595;
})();
var statearr_31596_32697 = state_31566__$1;
(statearr_31596_32697[(2)] = null);

(statearr_31596_32697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (25))){
var inst_31562 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
var statearr_31597_32698 = state_31566__$1;
(statearr_31597_32698[(2)] = inst_31562);

(statearr_31597_32698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (34))){
var inst_31560 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
var statearr_31598_32699 = state_31566__$1;
(statearr_31598_32699[(2)] = inst_31560);

(statearr_31598_32699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (17))){
var state_31566__$1 = state_31566;
var statearr_31599_32700 = state_31566__$1;
(statearr_31599_32700[(2)] = false);

(statearr_31599_32700[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (3))){
var state_31566__$1 = state_31566;
var statearr_31600_32701 = state_31566__$1;
(statearr_31600_32701[(2)] = false);

(statearr_31600_32701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (12))){
var inst_31564 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31566__$1,inst_31564);
} else {
if((state_val_31567 === (2))){
var inst_31468 = (state_31566[(8)]);
var inst_31473 = inst_31468.cljs$lang$protocol_mask$partition0$;
var inst_31474 = (inst_31473 & (64));
var inst_31475 = inst_31468.cljs$core$ISeq$;
var inst_31476 = (cljs.core.PROTOCOL_SENTINEL === inst_31475);
var inst_31477 = ((inst_31474) || (inst_31476));
var state_31566__$1 = state_31566;
if(cljs.core.truth_(inst_31477)){
var statearr_31601_32702 = state_31566__$1;
(statearr_31601_32702[(1)] = (5));

} else {
var statearr_31602_32703 = state_31566__$1;
(statearr_31602_32703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (23))){
var inst_31525 = (state_31566[(14)]);
var inst_31531 = (inst_31525 == null);
var state_31566__$1 = state_31566;
if(cljs.core.truth_(inst_31531)){
var statearr_31603_32704 = state_31566__$1;
(statearr_31603_32704[(1)] = (26));

} else {
var statearr_31604_32705 = state_31566__$1;
(statearr_31604_32705[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (35))){
var inst_31551 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
if(cljs.core.truth_(inst_31551)){
var statearr_31605_32706 = state_31566__$1;
(statearr_31605_32706[(1)] = (36));

} else {
var statearr_31606_32707 = state_31566__$1;
(statearr_31606_32707[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (19))){
var inst_31493 = (state_31566[(7)]);
var inst_31513 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31493);
var state_31566__$1 = state_31566;
var statearr_31607_32708 = state_31566__$1;
(statearr_31607_32708[(2)] = inst_31513);

(statearr_31607_32708[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (11))){
var inst_31493 = (state_31566[(7)]);
var inst_31497 = (inst_31493 == null);
var inst_31498 = cljs.core.not(inst_31497);
var state_31566__$1 = state_31566;
if(inst_31498){
var statearr_31608_32709 = state_31566__$1;
(statearr_31608_32709[(1)] = (13));

} else {
var statearr_31609_32710 = state_31566__$1;
(statearr_31609_32710[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (9))){
var inst_31468 = (state_31566[(8)]);
var state_31566__$1 = state_31566;
var statearr_31610_32711 = state_31566__$1;
(statearr_31610_32711[(2)] = inst_31468);

(statearr_31610_32711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (5))){
var state_31566__$1 = state_31566;
var statearr_31611_32712 = state_31566__$1;
(statearr_31611_32712[(2)] = true);

(statearr_31611_32712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (14))){
var state_31566__$1 = state_31566;
var statearr_31612_32713 = state_31566__$1;
(statearr_31612_32713[(2)] = false);

(statearr_31612_32713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (26))){
var inst_31526 = (state_31566[(11)]);
var inst_31533 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31526);
var state_31566__$1 = state_31566;
var statearr_31613_32718 = state_31566__$1;
(statearr_31613_32718[(2)] = inst_31533);

(statearr_31613_32718[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (16))){
var state_31566__$1 = state_31566;
var statearr_31614_32720 = state_31566__$1;
(statearr_31614_32720[(2)] = true);

(statearr_31614_32720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (38))){
var inst_31556 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
var statearr_31615_32721 = state_31566__$1;
(statearr_31615_32721[(2)] = inst_31556);

(statearr_31615_32721[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (30))){
var inst_31517 = (state_31566[(10)]);
var inst_31526 = (state_31566[(11)]);
var inst_31518 = (state_31566[(13)]);
var inst_31543 = cljs.core.empty_QMARK_(inst_31517);
var inst_31544 = (inst_31518.cljs$core$IFn$_invoke$arity$1 ? inst_31518.cljs$core$IFn$_invoke$arity$1(inst_31526) : inst_31518.call(null,inst_31526));
var inst_31545 = cljs.core.not(inst_31544);
var inst_31546 = ((inst_31543) && (inst_31545));
var state_31566__$1 = state_31566;
var statearr_31616_32722 = state_31566__$1;
(statearr_31616_32722[(2)] = inst_31546);

(statearr_31616_32722[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (10))){
var inst_31468 = (state_31566[(8)]);
var inst_31489 = (state_31566[(2)]);
var inst_31490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31489,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31489,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31489,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31493 = inst_31468;
var state_31566__$1 = (function (){var statearr_31617 = state_31566;
(statearr_31617[(16)] = inst_31491);

(statearr_31617[(17)] = inst_31492);

(statearr_31617[(18)] = inst_31490);

(statearr_31617[(7)] = inst_31493);

return statearr_31617;
})();
var statearr_31618_32725 = state_31566__$1;
(statearr_31618_32725[(2)] = null);

(statearr_31618_32725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (18))){
var inst_31508 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
var statearr_31619_32729 = state_31566__$1;
(statearr_31619_32729[(2)] = inst_31508);

(statearr_31619_32729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (37))){
var state_31566__$1 = state_31566;
var statearr_31620_32730 = state_31566__$1;
(statearr_31620_32730[(2)] = null);

(statearr_31620_32730[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (8))){
var inst_31468 = (state_31566[(8)]);
var inst_31486 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31468);
var state_31566__$1 = state_31566;
var statearr_31621_32731 = state_31566__$1;
(statearr_31621_32731[(2)] = inst_31486);

(statearr_31621_32731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30727__auto__ = null;
var cljs$core$async$mix_$_state_machine__30727__auto____0 = (function (){
var statearr_31622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31622[(0)] = cljs$core$async$mix_$_state_machine__30727__auto__);

(statearr_31622[(1)] = (1));

return statearr_31622;
});
var cljs$core$async$mix_$_state_machine__30727__auto____1 = (function (state_31566){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_31566);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e31623){var ex__30730__auto__ = e31623;
var statearr_31624_32732 = state_31566;
(statearr_31624_32732[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_31566[(4)]))){
var statearr_31625_32733 = state_31566;
(statearr_31625_32733[(1)] = cljs.core.first((state_31566[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32734 = state_31566;
state_31566 = G__32734;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30727__auto__ = function(state_31566){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30727__auto____1.call(this,state_31566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30727__auto____0;
cljs$core$async$mix_$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30727__auto____1;
return cljs$core$async$mix_$_state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_31626 = f__30759__auto__();
(statearr_31626[(6)] = c__30758__auto___32662);

return statearr_31626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32735 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32735(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32736 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32736(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32737 = (function() {
var G__32738 = null;
var G__32738__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32738__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32738 = function(p,v){
switch(arguments.length){
case 1:
return G__32738__1.call(this,p);
case 2:
return G__32738__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32738.cljs$core$IFn$_invoke$arity$1 = G__32738__1;
G__32738.cljs$core$IFn$_invoke$arity$2 = G__32738__2;
return G__32738;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31628 = arguments.length;
switch (G__31628) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32737(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32737(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31631 = arguments.length;
switch (G__31631) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31629_SHARP_){
if(cljs.core.truth_((p1__31629_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31629_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31629_SHARP_.call(null,topic)))){
return p1__31629_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31629_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31632 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31633){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31633 = meta31633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31634,meta31633__$1){
var self__ = this;
var _31634__$1 = this;
return (new cljs.core.async.t_cljs$core$async31632(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31633__$1));
}));

(cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31634){
var self__ = this;
var _31634__$1 = this;
return self__.meta31633;
}));

(cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31632.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31633","meta31633",-1430112818,null)], null);
}));

(cljs.core.async.t_cljs$core$async31632.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31632");

(cljs.core.async.t_cljs$core$async31632.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31632");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31632.
 */
cljs.core.async.__GT_t_cljs$core$async31632 = (function cljs$core$async$__GT_t_cljs$core$async31632(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31633){
return (new cljs.core.async.t_cljs$core$async31632(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31633));
});

}

return (new cljs.core.async.t_cljs$core$async31632(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30758__auto___32744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_31706){
var state_val_31707 = (state_31706[(1)]);
if((state_val_31707 === (7))){
var inst_31702 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31708_32745 = state_31706__$1;
(statearr_31708_32745[(2)] = inst_31702);

(statearr_31708_32745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (20))){
var state_31706__$1 = state_31706;
var statearr_31709_32746 = state_31706__$1;
(statearr_31709_32746[(2)] = null);

(statearr_31709_32746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (1))){
var state_31706__$1 = state_31706;
var statearr_31710_32747 = state_31706__$1;
(statearr_31710_32747[(2)] = null);

(statearr_31710_32747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (24))){
var inst_31685 = (state_31706[(7)]);
var inst_31694 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31685);
var state_31706__$1 = state_31706;
var statearr_31711_32748 = state_31706__$1;
(statearr_31711_32748[(2)] = inst_31694);

(statearr_31711_32748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (4))){
var inst_31637 = (state_31706[(8)]);
var inst_31637__$1 = (state_31706[(2)]);
var inst_31638 = (inst_31637__$1 == null);
var state_31706__$1 = (function (){var statearr_31712 = state_31706;
(statearr_31712[(8)] = inst_31637__$1);

return statearr_31712;
})();
if(cljs.core.truth_(inst_31638)){
var statearr_31713_32749 = state_31706__$1;
(statearr_31713_32749[(1)] = (5));

} else {
var statearr_31714_32750 = state_31706__$1;
(statearr_31714_32750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (15))){
var inst_31679 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31715_32751 = state_31706__$1;
(statearr_31715_32751[(2)] = inst_31679);

(statearr_31715_32751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (21))){
var inst_31699 = (state_31706[(2)]);
var state_31706__$1 = (function (){var statearr_31716 = state_31706;
(statearr_31716[(9)] = inst_31699);

return statearr_31716;
})();
var statearr_31717_32752 = state_31706__$1;
(statearr_31717_32752[(2)] = null);

(statearr_31717_32752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (13))){
var inst_31661 = (state_31706[(10)]);
var inst_31663 = cljs.core.chunked_seq_QMARK_(inst_31661);
var state_31706__$1 = state_31706;
if(inst_31663){
var statearr_31718_32753 = state_31706__$1;
(statearr_31718_32753[(1)] = (16));

} else {
var statearr_31719_32754 = state_31706__$1;
(statearr_31719_32754[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (22))){
var inst_31691 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
if(cljs.core.truth_(inst_31691)){
var statearr_31720_32755 = state_31706__$1;
(statearr_31720_32755[(1)] = (23));

} else {
var statearr_31721_32756 = state_31706__$1;
(statearr_31721_32756[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (6))){
var inst_31687 = (state_31706[(11)]);
var inst_31685 = (state_31706[(7)]);
var inst_31637 = (state_31706[(8)]);
var inst_31685__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31637) : topic_fn.call(null,inst_31637));
var inst_31686 = cljs.core.deref(mults);
var inst_31687__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31686,inst_31685__$1);
var state_31706__$1 = (function (){var statearr_31722 = state_31706;
(statearr_31722[(11)] = inst_31687__$1);

(statearr_31722[(7)] = inst_31685__$1);

return statearr_31722;
})();
if(cljs.core.truth_(inst_31687__$1)){
var statearr_31723_32757 = state_31706__$1;
(statearr_31723_32757[(1)] = (19));

} else {
var statearr_31724_32758 = state_31706__$1;
(statearr_31724_32758[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (25))){
var inst_31696 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31725_32759 = state_31706__$1;
(statearr_31725_32759[(2)] = inst_31696);

(statearr_31725_32759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (17))){
var inst_31661 = (state_31706[(10)]);
var inst_31670 = cljs.core.first(inst_31661);
var inst_31671 = cljs.core.async.muxch_STAR_(inst_31670);
var inst_31672 = cljs.core.async.close_BANG_(inst_31671);
var inst_31673 = cljs.core.next(inst_31661);
var inst_31647 = inst_31673;
var inst_31648 = null;
var inst_31649 = (0);
var inst_31650 = (0);
var state_31706__$1 = (function (){var statearr_31726 = state_31706;
(statearr_31726[(12)] = inst_31649);

(statearr_31726[(13)] = inst_31672);

(statearr_31726[(14)] = inst_31650);

(statearr_31726[(15)] = inst_31647);

(statearr_31726[(16)] = inst_31648);

return statearr_31726;
})();
var statearr_31727_32760 = state_31706__$1;
(statearr_31727_32760[(2)] = null);

(statearr_31727_32760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (3))){
var inst_31704 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31706__$1,inst_31704);
} else {
if((state_val_31707 === (12))){
var inst_31681 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31728_32761 = state_31706__$1;
(statearr_31728_32761[(2)] = inst_31681);

(statearr_31728_32761[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (2))){
var state_31706__$1 = state_31706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31706__$1,(4),ch);
} else {
if((state_val_31707 === (23))){
var state_31706__$1 = state_31706;
var statearr_31729_32762 = state_31706__$1;
(statearr_31729_32762[(2)] = null);

(statearr_31729_32762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (19))){
var inst_31687 = (state_31706[(11)]);
var inst_31637 = (state_31706[(8)]);
var inst_31689 = cljs.core.async.muxch_STAR_(inst_31687);
var state_31706__$1 = state_31706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31706__$1,(22),inst_31689,inst_31637);
} else {
if((state_val_31707 === (11))){
var inst_31661 = (state_31706[(10)]);
var inst_31647 = (state_31706[(15)]);
var inst_31661__$1 = cljs.core.seq(inst_31647);
var state_31706__$1 = (function (){var statearr_31730 = state_31706;
(statearr_31730[(10)] = inst_31661__$1);

return statearr_31730;
})();
if(inst_31661__$1){
var statearr_31731_32763 = state_31706__$1;
(statearr_31731_32763[(1)] = (13));

} else {
var statearr_31732_32764 = state_31706__$1;
(statearr_31732_32764[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (9))){
var inst_31683 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31733_32765 = state_31706__$1;
(statearr_31733_32765[(2)] = inst_31683);

(statearr_31733_32765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (5))){
var inst_31644 = cljs.core.deref(mults);
var inst_31645 = cljs.core.vals(inst_31644);
var inst_31646 = cljs.core.seq(inst_31645);
var inst_31647 = inst_31646;
var inst_31648 = null;
var inst_31649 = (0);
var inst_31650 = (0);
var state_31706__$1 = (function (){var statearr_31734 = state_31706;
(statearr_31734[(12)] = inst_31649);

(statearr_31734[(14)] = inst_31650);

(statearr_31734[(15)] = inst_31647);

(statearr_31734[(16)] = inst_31648);

return statearr_31734;
})();
var statearr_31735_32766 = state_31706__$1;
(statearr_31735_32766[(2)] = null);

(statearr_31735_32766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (14))){
var state_31706__$1 = state_31706;
var statearr_31739_32767 = state_31706__$1;
(statearr_31739_32767[(2)] = null);

(statearr_31739_32767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (16))){
var inst_31661 = (state_31706[(10)]);
var inst_31665 = cljs.core.chunk_first(inst_31661);
var inst_31666 = cljs.core.chunk_rest(inst_31661);
var inst_31667 = cljs.core.count(inst_31665);
var inst_31647 = inst_31666;
var inst_31648 = inst_31665;
var inst_31649 = inst_31667;
var inst_31650 = (0);
var state_31706__$1 = (function (){var statearr_31740 = state_31706;
(statearr_31740[(12)] = inst_31649);

(statearr_31740[(14)] = inst_31650);

(statearr_31740[(15)] = inst_31647);

(statearr_31740[(16)] = inst_31648);

return statearr_31740;
})();
var statearr_31741_32768 = state_31706__$1;
(statearr_31741_32768[(2)] = null);

(statearr_31741_32768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (10))){
var inst_31649 = (state_31706[(12)]);
var inst_31650 = (state_31706[(14)]);
var inst_31647 = (state_31706[(15)]);
var inst_31648 = (state_31706[(16)]);
var inst_31655 = cljs.core._nth(inst_31648,inst_31650);
var inst_31656 = cljs.core.async.muxch_STAR_(inst_31655);
var inst_31657 = cljs.core.async.close_BANG_(inst_31656);
var inst_31658 = (inst_31650 + (1));
var tmp31736 = inst_31649;
var tmp31737 = inst_31647;
var tmp31738 = inst_31648;
var inst_31647__$1 = tmp31737;
var inst_31648__$1 = tmp31738;
var inst_31649__$1 = tmp31736;
var inst_31650__$1 = inst_31658;
var state_31706__$1 = (function (){var statearr_31742 = state_31706;
(statearr_31742[(17)] = inst_31657);

(statearr_31742[(12)] = inst_31649__$1);

(statearr_31742[(14)] = inst_31650__$1);

(statearr_31742[(15)] = inst_31647__$1);

(statearr_31742[(16)] = inst_31648__$1);

return statearr_31742;
})();
var statearr_31743_32770 = state_31706__$1;
(statearr_31743_32770[(2)] = null);

(statearr_31743_32770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (18))){
var inst_31676 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31744_32771 = state_31706__$1;
(statearr_31744_32771[(2)] = inst_31676);

(statearr_31744_32771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (8))){
var inst_31649 = (state_31706[(12)]);
var inst_31650 = (state_31706[(14)]);
var inst_31652 = (inst_31650 < inst_31649);
var inst_31653 = inst_31652;
var state_31706__$1 = state_31706;
if(cljs.core.truth_(inst_31653)){
var statearr_31745_32772 = state_31706__$1;
(statearr_31745_32772[(1)] = (10));

} else {
var statearr_31746_32773 = state_31706__$1;
(statearr_31746_32773[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30727__auto__ = null;
var cljs$core$async$state_machine__30727__auto____0 = (function (){
var statearr_31747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31747[(0)] = cljs$core$async$state_machine__30727__auto__);

(statearr_31747[(1)] = (1));

return statearr_31747;
});
var cljs$core$async$state_machine__30727__auto____1 = (function (state_31706){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_31706);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e31748){var ex__30730__auto__ = e31748;
var statearr_31749_32779 = state_31706;
(statearr_31749_32779[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_31706[(4)]))){
var statearr_31750_32780 = state_31706;
(statearr_31750_32780[(1)] = cljs.core.first((state_31706[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32781 = state_31706;
state_31706 = G__32781;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$state_machine__30727__auto__ = function(state_31706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30727__auto____1.call(this,state_31706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30727__auto____0;
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30727__auto____1;
return cljs$core$async$state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_31751 = f__30759__auto__();
(statearr_31751[(6)] = c__30758__auto___32744);

return statearr_31751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31753 = arguments.length;
switch (G__31753) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31755 = arguments.length;
switch (G__31755) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31757 = arguments.length;
switch (G__31757) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30758__auto___32793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_31800){
var state_val_31801 = (state_31800[(1)]);
if((state_val_31801 === (7))){
var state_31800__$1 = state_31800;
var statearr_31802_32794 = state_31800__$1;
(statearr_31802_32794[(2)] = null);

(statearr_31802_32794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (1))){
var state_31800__$1 = state_31800;
var statearr_31803_32795 = state_31800__$1;
(statearr_31803_32795[(2)] = null);

(statearr_31803_32795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (4))){
var inst_31761 = (state_31800[(7)]);
var inst_31760 = (state_31800[(8)]);
var inst_31763 = (inst_31761 < inst_31760);
var state_31800__$1 = state_31800;
if(cljs.core.truth_(inst_31763)){
var statearr_31804_32797 = state_31800__$1;
(statearr_31804_32797[(1)] = (6));

} else {
var statearr_31805_32798 = state_31800__$1;
(statearr_31805_32798[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (15))){
var inst_31786 = (state_31800[(9)]);
var inst_31791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31786);
var state_31800__$1 = state_31800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31800__$1,(17),out,inst_31791);
} else {
if((state_val_31801 === (13))){
var inst_31786 = (state_31800[(9)]);
var inst_31786__$1 = (state_31800[(2)]);
var inst_31787 = cljs.core.some(cljs.core.nil_QMARK_,inst_31786__$1);
var state_31800__$1 = (function (){var statearr_31806 = state_31800;
(statearr_31806[(9)] = inst_31786__$1);

return statearr_31806;
})();
if(cljs.core.truth_(inst_31787)){
var statearr_31807_32799 = state_31800__$1;
(statearr_31807_32799[(1)] = (14));

} else {
var statearr_31808_32800 = state_31800__$1;
(statearr_31808_32800[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (6))){
var state_31800__$1 = state_31800;
var statearr_31809_32801 = state_31800__$1;
(statearr_31809_32801[(2)] = null);

(statearr_31809_32801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (17))){
var inst_31793 = (state_31800[(2)]);
var state_31800__$1 = (function (){var statearr_31811 = state_31800;
(statearr_31811[(10)] = inst_31793);

return statearr_31811;
})();
var statearr_31812_32802 = state_31800__$1;
(statearr_31812_32802[(2)] = null);

(statearr_31812_32802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (3))){
var inst_31798 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31800__$1,inst_31798);
} else {
if((state_val_31801 === (12))){
var _ = (function (){var statearr_31813 = state_31800;
(statearr_31813[(4)] = cljs.core.rest((state_31800[(4)])));

return statearr_31813;
})();
var state_31800__$1 = state_31800;
var ex31810 = (state_31800__$1[(2)]);
var statearr_31814_32813 = state_31800__$1;
(statearr_31814_32813[(5)] = ex31810);


if((ex31810 instanceof Object)){
var statearr_31815_32814 = state_31800__$1;
(statearr_31815_32814[(1)] = (11));

(statearr_31815_32814[(5)] = null);

} else {
throw ex31810;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (2))){
var inst_31759 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31760 = cnt;
var inst_31761 = (0);
var state_31800__$1 = (function (){var statearr_31816 = state_31800;
(statearr_31816[(7)] = inst_31761);

(statearr_31816[(8)] = inst_31760);

(statearr_31816[(11)] = inst_31759);

return statearr_31816;
})();
var statearr_31817_32815 = state_31800__$1;
(statearr_31817_32815[(2)] = null);

(statearr_31817_32815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (11))){
var inst_31765 = (state_31800[(2)]);
var inst_31766 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31800__$1 = (function (){var statearr_31818 = state_31800;
(statearr_31818[(12)] = inst_31765);

return statearr_31818;
})();
var statearr_31819_32816 = state_31800__$1;
(statearr_31819_32816[(2)] = inst_31766);

(statearr_31819_32816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (9))){
var inst_31761 = (state_31800[(7)]);
var _ = (function (){var statearr_31820 = state_31800;
(statearr_31820[(4)] = cljs.core.cons((12),(state_31800[(4)])));

return statearr_31820;
})();
var inst_31772 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31761) : chs__$1.call(null,inst_31761));
var inst_31773 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31761) : done.call(null,inst_31761));
var inst_31774 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31772,inst_31773);
var ___$1 = (function (){var statearr_31821 = state_31800;
(statearr_31821[(4)] = cljs.core.rest((state_31800[(4)])));

return statearr_31821;
})();
var state_31800__$1 = state_31800;
var statearr_31822_32817 = state_31800__$1;
(statearr_31822_32817[(2)] = inst_31774);

(statearr_31822_32817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (5))){
var inst_31784 = (state_31800[(2)]);
var state_31800__$1 = (function (){var statearr_31823 = state_31800;
(statearr_31823[(13)] = inst_31784);

return statearr_31823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31800__$1,(13),dchan);
} else {
if((state_val_31801 === (14))){
var inst_31789 = cljs.core.async.close_BANG_(out);
var state_31800__$1 = state_31800;
var statearr_31824_32818 = state_31800__$1;
(statearr_31824_32818[(2)] = inst_31789);

(statearr_31824_32818[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (16))){
var inst_31796 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31825_32819 = state_31800__$1;
(statearr_31825_32819[(2)] = inst_31796);

(statearr_31825_32819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (10))){
var inst_31761 = (state_31800[(7)]);
var inst_31777 = (state_31800[(2)]);
var inst_31778 = (inst_31761 + (1));
var inst_31761__$1 = inst_31778;
var state_31800__$1 = (function (){var statearr_31826 = state_31800;
(statearr_31826[(7)] = inst_31761__$1);

(statearr_31826[(14)] = inst_31777);

return statearr_31826;
})();
var statearr_31827_32820 = state_31800__$1;
(statearr_31827_32820[(2)] = null);

(statearr_31827_32820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (8))){
var inst_31782 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31828_32821 = state_31800__$1;
(statearr_31828_32821[(2)] = inst_31782);

(statearr_31828_32821[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30727__auto__ = null;
var cljs$core$async$state_machine__30727__auto____0 = (function (){
var statearr_31829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31829[(0)] = cljs$core$async$state_machine__30727__auto__);

(statearr_31829[(1)] = (1));

return statearr_31829;
});
var cljs$core$async$state_machine__30727__auto____1 = (function (state_31800){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_31800);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e31830){var ex__30730__auto__ = e31830;
var statearr_31831_32842 = state_31800;
(statearr_31831_32842[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_31800[(4)]))){
var statearr_31832_32843 = state_31800;
(statearr_31832_32843[(1)] = cljs.core.first((state_31800[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32844 = state_31800;
state_31800 = G__32844;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$state_machine__30727__auto__ = function(state_31800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30727__auto____1.call(this,state_31800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30727__auto____0;
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30727__auto____1;
return cljs$core$async$state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_31833 = f__30759__auto__();
(statearr_31833[(6)] = c__30758__auto___32793);

return statearr_31833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31836 = arguments.length;
switch (G__31836) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30758__auto___32855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_31868){
var state_val_31869 = (state_31868[(1)]);
if((state_val_31869 === (7))){
var inst_31847 = (state_31868[(7)]);
var inst_31848 = (state_31868[(8)]);
var inst_31847__$1 = (state_31868[(2)]);
var inst_31848__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31847__$1,(0),null);
var inst_31849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31847__$1,(1),null);
var inst_31850 = (inst_31848__$1 == null);
var state_31868__$1 = (function (){var statearr_31870 = state_31868;
(statearr_31870[(7)] = inst_31847__$1);

(statearr_31870[(9)] = inst_31849);

(statearr_31870[(8)] = inst_31848__$1);

return statearr_31870;
})();
if(cljs.core.truth_(inst_31850)){
var statearr_31871_32862 = state_31868__$1;
(statearr_31871_32862[(1)] = (8));

} else {
var statearr_31872_32863 = state_31868__$1;
(statearr_31872_32863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31869 === (1))){
var inst_31837 = cljs.core.vec(chs);
var inst_31838 = inst_31837;
var state_31868__$1 = (function (){var statearr_31873 = state_31868;
(statearr_31873[(10)] = inst_31838);

return statearr_31873;
})();
var statearr_31874_32864 = state_31868__$1;
(statearr_31874_32864[(2)] = null);

(statearr_31874_32864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31869 === (4))){
var inst_31838 = (state_31868[(10)]);
var state_31868__$1 = state_31868;
return cljs.core.async.ioc_alts_BANG_(state_31868__$1,(7),inst_31838);
} else {
if((state_val_31869 === (6))){
var inst_31864 = (state_31868[(2)]);
var state_31868__$1 = state_31868;
var statearr_31875_32865 = state_31868__$1;
(statearr_31875_32865[(2)] = inst_31864);

(statearr_31875_32865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31869 === (3))){
var inst_31866 = (state_31868[(2)]);
var state_31868__$1 = state_31868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31868__$1,inst_31866);
} else {
if((state_val_31869 === (2))){
var inst_31838 = (state_31868[(10)]);
var inst_31840 = cljs.core.count(inst_31838);
var inst_31841 = (inst_31840 > (0));
var state_31868__$1 = state_31868;
if(cljs.core.truth_(inst_31841)){
var statearr_31877_32878 = state_31868__$1;
(statearr_31877_32878[(1)] = (4));

} else {
var statearr_31878_32879 = state_31868__$1;
(statearr_31878_32879[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31869 === (11))){
var inst_31838 = (state_31868[(10)]);
var inst_31857 = (state_31868[(2)]);
var tmp31876 = inst_31838;
var inst_31838__$1 = tmp31876;
var state_31868__$1 = (function (){var statearr_31879 = state_31868;
(statearr_31879[(11)] = inst_31857);

(statearr_31879[(10)] = inst_31838__$1);

return statearr_31879;
})();
var statearr_31880_32880 = state_31868__$1;
(statearr_31880_32880[(2)] = null);

(statearr_31880_32880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31869 === (9))){
var inst_31848 = (state_31868[(8)]);
var state_31868__$1 = state_31868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31868__$1,(11),out,inst_31848);
} else {
if((state_val_31869 === (5))){
var inst_31862 = cljs.core.async.close_BANG_(out);
var state_31868__$1 = state_31868;
var statearr_31881_32881 = state_31868__$1;
(statearr_31881_32881[(2)] = inst_31862);

(statearr_31881_32881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31869 === (10))){
var inst_31860 = (state_31868[(2)]);
var state_31868__$1 = state_31868;
var statearr_31882_32882 = state_31868__$1;
(statearr_31882_32882[(2)] = inst_31860);

(statearr_31882_32882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31869 === (8))){
var inst_31838 = (state_31868[(10)]);
var inst_31847 = (state_31868[(7)]);
var inst_31849 = (state_31868[(9)]);
var inst_31848 = (state_31868[(8)]);
var inst_31852 = (function (){var cs = inst_31838;
var vec__31843 = inst_31847;
var v = inst_31848;
var c = inst_31849;
return (function (p1__31834_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31834_SHARP_);
});
})();
var inst_31853 = cljs.core.filterv(inst_31852,inst_31838);
var inst_31838__$1 = inst_31853;
var state_31868__$1 = (function (){var statearr_31883 = state_31868;
(statearr_31883[(10)] = inst_31838__$1);

return statearr_31883;
})();
var statearr_31884_32883 = state_31868__$1;
(statearr_31884_32883[(2)] = null);

(statearr_31884_32883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30727__auto__ = null;
var cljs$core$async$state_machine__30727__auto____0 = (function (){
var statearr_31885 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31885[(0)] = cljs$core$async$state_machine__30727__auto__);

(statearr_31885[(1)] = (1));

return statearr_31885;
});
var cljs$core$async$state_machine__30727__auto____1 = (function (state_31868){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_31868);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e31886){var ex__30730__auto__ = e31886;
var statearr_31887_32884 = state_31868;
(statearr_31887_32884[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_31868[(4)]))){
var statearr_31888_32885 = state_31868;
(statearr_31888_32885[(1)] = cljs.core.first((state_31868[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32892 = state_31868;
state_31868 = G__32892;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$state_machine__30727__auto__ = function(state_31868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30727__auto____1.call(this,state_31868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30727__auto____0;
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30727__auto____1;
return cljs$core$async$state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_31889 = f__30759__auto__();
(statearr_31889[(6)] = c__30758__auto___32855);

return statearr_31889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31891 = arguments.length;
switch (G__31891) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30758__auto___32898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_31915){
var state_val_31916 = (state_31915[(1)]);
if((state_val_31916 === (7))){
var inst_31897 = (state_31915[(7)]);
var inst_31897__$1 = (state_31915[(2)]);
var inst_31898 = (inst_31897__$1 == null);
var inst_31899 = cljs.core.not(inst_31898);
var state_31915__$1 = (function (){var statearr_31917 = state_31915;
(statearr_31917[(7)] = inst_31897__$1);

return statearr_31917;
})();
if(inst_31899){
var statearr_31918_32905 = state_31915__$1;
(statearr_31918_32905[(1)] = (8));

} else {
var statearr_31919_32906 = state_31915__$1;
(statearr_31919_32906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (1))){
var inst_31892 = (0);
var state_31915__$1 = (function (){var statearr_31920 = state_31915;
(statearr_31920[(8)] = inst_31892);

return statearr_31920;
})();
var statearr_31921_32907 = state_31915__$1;
(statearr_31921_32907[(2)] = null);

(statearr_31921_32907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (4))){
var state_31915__$1 = state_31915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31915__$1,(7),ch);
} else {
if((state_val_31916 === (6))){
var inst_31910 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
var statearr_31922_32909 = state_31915__$1;
(statearr_31922_32909[(2)] = inst_31910);

(statearr_31922_32909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (3))){
var inst_31912 = (state_31915[(2)]);
var inst_31913 = cljs.core.async.close_BANG_(out);
var state_31915__$1 = (function (){var statearr_31923 = state_31915;
(statearr_31923[(9)] = inst_31912);

return statearr_31923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31915__$1,inst_31913);
} else {
if((state_val_31916 === (2))){
var inst_31892 = (state_31915[(8)]);
var inst_31894 = (inst_31892 < n);
var state_31915__$1 = state_31915;
if(cljs.core.truth_(inst_31894)){
var statearr_31924_32914 = state_31915__$1;
(statearr_31924_32914[(1)] = (4));

} else {
var statearr_31925_32915 = state_31915__$1;
(statearr_31925_32915[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (11))){
var inst_31892 = (state_31915[(8)]);
var inst_31902 = (state_31915[(2)]);
var inst_31903 = (inst_31892 + (1));
var inst_31892__$1 = inst_31903;
var state_31915__$1 = (function (){var statearr_31926 = state_31915;
(statearr_31926[(10)] = inst_31902);

(statearr_31926[(8)] = inst_31892__$1);

return statearr_31926;
})();
var statearr_31927_32917 = state_31915__$1;
(statearr_31927_32917[(2)] = null);

(statearr_31927_32917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (9))){
var state_31915__$1 = state_31915;
var statearr_31928_32918 = state_31915__$1;
(statearr_31928_32918[(2)] = null);

(statearr_31928_32918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (5))){
var state_31915__$1 = state_31915;
var statearr_31929_32919 = state_31915__$1;
(statearr_31929_32919[(2)] = null);

(statearr_31929_32919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (10))){
var inst_31907 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
var statearr_31930_32920 = state_31915__$1;
(statearr_31930_32920[(2)] = inst_31907);

(statearr_31930_32920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (8))){
var inst_31897 = (state_31915[(7)]);
var state_31915__$1 = state_31915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31915__$1,(11),out,inst_31897);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30727__auto__ = null;
var cljs$core$async$state_machine__30727__auto____0 = (function (){
var statearr_31931 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31931[(0)] = cljs$core$async$state_machine__30727__auto__);

(statearr_31931[(1)] = (1));

return statearr_31931;
});
var cljs$core$async$state_machine__30727__auto____1 = (function (state_31915){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_31915);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e31932){var ex__30730__auto__ = e31932;
var statearr_31933_32921 = state_31915;
(statearr_31933_32921[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_31915[(4)]))){
var statearr_31934_32922 = state_31915;
(statearr_31934_32922[(1)] = cljs.core.first((state_31915[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32923 = state_31915;
state_31915 = G__32923;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$state_machine__30727__auto__ = function(state_31915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30727__auto____1.call(this,state_31915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30727__auto____0;
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30727__auto____1;
return cljs$core$async$state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_31935 = f__30759__auto__();
(statearr_31935[(6)] = c__30758__auto___32898);

return statearr_31935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31937 = (function (f,ch,meta31938){
this.f = f;
this.ch = ch;
this.meta31938 = meta31938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31939,meta31938__$1){
var self__ = this;
var _31939__$1 = this;
return (new cljs.core.async.t_cljs$core$async31937(self__.f,self__.ch,meta31938__$1));
}));

(cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31939){
var self__ = this;
var _31939__$1 = this;
return self__.meta31938;
}));

(cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31940 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31940 = (function (f,ch,meta31938,_,fn1,meta31941){
this.f = f;
this.ch = ch;
this.meta31938 = meta31938;
this._ = _;
this.fn1 = fn1;
this.meta31941 = meta31941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31942,meta31941__$1){
var self__ = this;
var _31942__$1 = this;
return (new cljs.core.async.t_cljs$core$async31940(self__.f,self__.ch,self__.meta31938,self__._,self__.fn1,meta31941__$1));
}));

(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31942){
var self__ = this;
var _31942__$1 = this;
return self__.meta31941;
}));

(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31936_SHARP_){
var G__31943 = (((p1__31936_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31936_SHARP_) : self__.f.call(null,p1__31936_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31943) : f1.call(null,G__31943));
});
}));

(cljs.core.async.t_cljs$core$async31940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31938","meta31938",313066938,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31937","cljs.core.async/t_cljs$core$async31937",1662863895,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31941","meta31941",938893104,null)], null);
}));

(cljs.core.async.t_cljs$core$async31940.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31940");

(cljs.core.async.t_cljs$core$async31940.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31940");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31940.
 */
cljs.core.async.__GT_t_cljs$core$async31940 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31940(f__$1,ch__$1,meta31938__$1,___$2,fn1__$1,meta31941){
return (new cljs.core.async.t_cljs$core$async31940(f__$1,ch__$1,meta31938__$1,___$2,fn1__$1,meta31941));
});

}

return (new cljs.core.async.t_cljs$core$async31940(self__.f,self__.ch,self__.meta31938,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31944 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31944) : self__.f.call(null,G__31944));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31938","meta31938",313066938,null)], null);
}));

(cljs.core.async.t_cljs$core$async31937.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31937");

(cljs.core.async.t_cljs$core$async31937.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31937");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31937.
 */
cljs.core.async.__GT_t_cljs$core$async31937 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31937(f__$1,ch__$1,meta31938){
return (new cljs.core.async.t_cljs$core$async31937(f__$1,ch__$1,meta31938));
});

}

return (new cljs.core.async.t_cljs$core$async31937(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31945 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31945 = (function (f,ch,meta31946){
this.f = f;
this.ch = ch;
this.meta31946 = meta31946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31947,meta31946__$1){
var self__ = this;
var _31947__$1 = this;
return (new cljs.core.async.t_cljs$core$async31945(self__.f,self__.ch,meta31946__$1));
}));

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31947){
var self__ = this;
var _31947__$1 = this;
return self__.meta31946;
}));

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31945.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31946","meta31946",-1862736147,null)], null);
}));

(cljs.core.async.t_cljs$core$async31945.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31945");

(cljs.core.async.t_cljs$core$async31945.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31945");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31945.
 */
cljs.core.async.__GT_t_cljs$core$async31945 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31945(f__$1,ch__$1,meta31946){
return (new cljs.core.async.t_cljs$core$async31945(f__$1,ch__$1,meta31946));
});

}

return (new cljs.core.async.t_cljs$core$async31945(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31948 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31948 = (function (p,ch,meta31949){
this.p = p;
this.ch = ch;
this.meta31949 = meta31949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31950,meta31949__$1){
var self__ = this;
var _31950__$1 = this;
return (new cljs.core.async.t_cljs$core$async31948(self__.p,self__.ch,meta31949__$1));
}));

(cljs.core.async.t_cljs$core$async31948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31950){
var self__ = this;
var _31950__$1 = this;
return self__.meta31949;
}));

(cljs.core.async.t_cljs$core$async31948.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31948.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31948.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31948.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31949","meta31949",-251095349,null)], null);
}));

(cljs.core.async.t_cljs$core$async31948.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31948");

(cljs.core.async.t_cljs$core$async31948.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31948");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31948.
 */
cljs.core.async.__GT_t_cljs$core$async31948 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31948(p__$1,ch__$1,meta31949){
return (new cljs.core.async.t_cljs$core$async31948(p__$1,ch__$1,meta31949));
});

}

return (new cljs.core.async.t_cljs$core$async31948(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31952 = arguments.length;
switch (G__31952) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30758__auto___32927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_31973){
var state_val_31974 = (state_31973[(1)]);
if((state_val_31974 === (7))){
var inst_31969 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
var statearr_31975_32928 = state_31973__$1;
(statearr_31975_32928[(2)] = inst_31969);

(statearr_31975_32928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (1))){
var state_31973__$1 = state_31973;
var statearr_31976_32929 = state_31973__$1;
(statearr_31976_32929[(2)] = null);

(statearr_31976_32929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (4))){
var inst_31955 = (state_31973[(7)]);
var inst_31955__$1 = (state_31973[(2)]);
var inst_31956 = (inst_31955__$1 == null);
var state_31973__$1 = (function (){var statearr_31977 = state_31973;
(statearr_31977[(7)] = inst_31955__$1);

return statearr_31977;
})();
if(cljs.core.truth_(inst_31956)){
var statearr_31978_32930 = state_31973__$1;
(statearr_31978_32930[(1)] = (5));

} else {
var statearr_31979_32931 = state_31973__$1;
(statearr_31979_32931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (6))){
var inst_31955 = (state_31973[(7)]);
var inst_31960 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31955) : p.call(null,inst_31955));
var state_31973__$1 = state_31973;
if(cljs.core.truth_(inst_31960)){
var statearr_31980_32932 = state_31973__$1;
(statearr_31980_32932[(1)] = (8));

} else {
var statearr_31981_32933 = state_31973__$1;
(statearr_31981_32933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (3))){
var inst_31971 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31973__$1,inst_31971);
} else {
if((state_val_31974 === (2))){
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31973__$1,(4),ch);
} else {
if((state_val_31974 === (11))){
var inst_31963 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
var statearr_31982_32935 = state_31973__$1;
(statearr_31982_32935[(2)] = inst_31963);

(statearr_31982_32935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (9))){
var state_31973__$1 = state_31973;
var statearr_31983_32936 = state_31973__$1;
(statearr_31983_32936[(2)] = null);

(statearr_31983_32936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (5))){
var inst_31958 = cljs.core.async.close_BANG_(out);
var state_31973__$1 = state_31973;
var statearr_31984_32938 = state_31973__$1;
(statearr_31984_32938[(2)] = inst_31958);

(statearr_31984_32938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (10))){
var inst_31966 = (state_31973[(2)]);
var state_31973__$1 = (function (){var statearr_31985 = state_31973;
(statearr_31985[(8)] = inst_31966);

return statearr_31985;
})();
var statearr_31986_32939 = state_31973__$1;
(statearr_31986_32939[(2)] = null);

(statearr_31986_32939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (8))){
var inst_31955 = (state_31973[(7)]);
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31973__$1,(11),out,inst_31955);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30727__auto__ = null;
var cljs$core$async$state_machine__30727__auto____0 = (function (){
var statearr_31987 = [null,null,null,null,null,null,null,null,null];
(statearr_31987[(0)] = cljs$core$async$state_machine__30727__auto__);

(statearr_31987[(1)] = (1));

return statearr_31987;
});
var cljs$core$async$state_machine__30727__auto____1 = (function (state_31973){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_31973);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e31988){var ex__30730__auto__ = e31988;
var statearr_31989_32942 = state_31973;
(statearr_31989_32942[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_31973[(4)]))){
var statearr_31990_32943 = state_31973;
(statearr_31990_32943[(1)] = cljs.core.first((state_31973[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32944 = state_31973;
state_31973 = G__32944;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$state_machine__30727__auto__ = function(state_31973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30727__auto____1.call(this,state_31973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30727__auto____0;
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30727__auto____1;
return cljs$core$async$state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_31991 = f__30759__auto__();
(statearr_31991[(6)] = c__30758__auto___32927);

return statearr_31991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31993 = arguments.length;
switch (G__31993) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30758__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_32055){
var state_val_32056 = (state_32055[(1)]);
if((state_val_32056 === (7))){
var inst_32051 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
var statearr_32057_32946 = state_32055__$1;
(statearr_32057_32946[(2)] = inst_32051);

(statearr_32057_32946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (20))){
var inst_32021 = (state_32055[(7)]);
var inst_32032 = (state_32055[(2)]);
var inst_32033 = cljs.core.next(inst_32021);
var inst_32007 = inst_32033;
var inst_32008 = null;
var inst_32009 = (0);
var inst_32010 = (0);
var state_32055__$1 = (function (){var statearr_32058 = state_32055;
(statearr_32058[(8)] = inst_32032);

(statearr_32058[(9)] = inst_32009);

(statearr_32058[(10)] = inst_32007);

(statearr_32058[(11)] = inst_32008);

(statearr_32058[(12)] = inst_32010);

return statearr_32058;
})();
var statearr_32059_32964 = state_32055__$1;
(statearr_32059_32964[(2)] = null);

(statearr_32059_32964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (1))){
var state_32055__$1 = state_32055;
var statearr_32060_32965 = state_32055__$1;
(statearr_32060_32965[(2)] = null);

(statearr_32060_32965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (4))){
var inst_31996 = (state_32055[(13)]);
var inst_31996__$1 = (state_32055[(2)]);
var inst_31997 = (inst_31996__$1 == null);
var state_32055__$1 = (function (){var statearr_32061 = state_32055;
(statearr_32061[(13)] = inst_31996__$1);

return statearr_32061;
})();
if(cljs.core.truth_(inst_31997)){
var statearr_32062_32966 = state_32055__$1;
(statearr_32062_32966[(1)] = (5));

} else {
var statearr_32063_32967 = state_32055__$1;
(statearr_32063_32967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (15))){
var state_32055__$1 = state_32055;
var statearr_32067_32968 = state_32055__$1;
(statearr_32067_32968[(2)] = null);

(statearr_32067_32968[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (21))){
var state_32055__$1 = state_32055;
var statearr_32068_32969 = state_32055__$1;
(statearr_32068_32969[(2)] = null);

(statearr_32068_32969[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (13))){
var inst_32009 = (state_32055[(9)]);
var inst_32007 = (state_32055[(10)]);
var inst_32008 = (state_32055[(11)]);
var inst_32010 = (state_32055[(12)]);
var inst_32017 = (state_32055[(2)]);
var inst_32018 = (inst_32010 + (1));
var tmp32064 = inst_32009;
var tmp32065 = inst_32007;
var tmp32066 = inst_32008;
var inst_32007__$1 = tmp32065;
var inst_32008__$1 = tmp32066;
var inst_32009__$1 = tmp32064;
var inst_32010__$1 = inst_32018;
var state_32055__$1 = (function (){var statearr_32069 = state_32055;
(statearr_32069[(9)] = inst_32009__$1);

(statearr_32069[(14)] = inst_32017);

(statearr_32069[(10)] = inst_32007__$1);

(statearr_32069[(11)] = inst_32008__$1);

(statearr_32069[(12)] = inst_32010__$1);

return statearr_32069;
})();
var statearr_32070_32970 = state_32055__$1;
(statearr_32070_32970[(2)] = null);

(statearr_32070_32970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (22))){
var state_32055__$1 = state_32055;
var statearr_32071_32971 = state_32055__$1;
(statearr_32071_32971[(2)] = null);

(statearr_32071_32971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (6))){
var inst_31996 = (state_32055[(13)]);
var inst_32005 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31996) : f.call(null,inst_31996));
var inst_32006 = cljs.core.seq(inst_32005);
var inst_32007 = inst_32006;
var inst_32008 = null;
var inst_32009 = (0);
var inst_32010 = (0);
var state_32055__$1 = (function (){var statearr_32072 = state_32055;
(statearr_32072[(9)] = inst_32009);

(statearr_32072[(10)] = inst_32007);

(statearr_32072[(11)] = inst_32008);

(statearr_32072[(12)] = inst_32010);

return statearr_32072;
})();
var statearr_32073_32972 = state_32055__$1;
(statearr_32073_32972[(2)] = null);

(statearr_32073_32972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (17))){
var inst_32021 = (state_32055[(7)]);
var inst_32025 = cljs.core.chunk_first(inst_32021);
var inst_32026 = cljs.core.chunk_rest(inst_32021);
var inst_32027 = cljs.core.count(inst_32025);
var inst_32007 = inst_32026;
var inst_32008 = inst_32025;
var inst_32009 = inst_32027;
var inst_32010 = (0);
var state_32055__$1 = (function (){var statearr_32074 = state_32055;
(statearr_32074[(9)] = inst_32009);

(statearr_32074[(10)] = inst_32007);

(statearr_32074[(11)] = inst_32008);

(statearr_32074[(12)] = inst_32010);

return statearr_32074;
})();
var statearr_32075_32973 = state_32055__$1;
(statearr_32075_32973[(2)] = null);

(statearr_32075_32973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (3))){
var inst_32053 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32055__$1,inst_32053);
} else {
if((state_val_32056 === (12))){
var inst_32041 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
var statearr_32076_32974 = state_32055__$1;
(statearr_32076_32974[(2)] = inst_32041);

(statearr_32076_32974[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (2))){
var state_32055__$1 = state_32055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32055__$1,(4),in$);
} else {
if((state_val_32056 === (23))){
var inst_32049 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
var statearr_32077_32975 = state_32055__$1;
(statearr_32077_32975[(2)] = inst_32049);

(statearr_32077_32975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (19))){
var inst_32036 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
var statearr_32078_32976 = state_32055__$1;
(statearr_32078_32976[(2)] = inst_32036);

(statearr_32078_32976[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (11))){
var inst_32021 = (state_32055[(7)]);
var inst_32007 = (state_32055[(10)]);
var inst_32021__$1 = cljs.core.seq(inst_32007);
var state_32055__$1 = (function (){var statearr_32079 = state_32055;
(statearr_32079[(7)] = inst_32021__$1);

return statearr_32079;
})();
if(inst_32021__$1){
var statearr_32080_32999 = state_32055__$1;
(statearr_32080_32999[(1)] = (14));

} else {
var statearr_32081_33002 = state_32055__$1;
(statearr_32081_33002[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (9))){
var inst_32043 = (state_32055[(2)]);
var inst_32044 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32055__$1 = (function (){var statearr_32082 = state_32055;
(statearr_32082[(15)] = inst_32043);

return statearr_32082;
})();
if(cljs.core.truth_(inst_32044)){
var statearr_32083_33006 = state_32055__$1;
(statearr_32083_33006[(1)] = (21));

} else {
var statearr_32084_33007 = state_32055__$1;
(statearr_32084_33007[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (5))){
var inst_31999 = cljs.core.async.close_BANG_(out);
var state_32055__$1 = state_32055;
var statearr_32085_33008 = state_32055__$1;
(statearr_32085_33008[(2)] = inst_31999);

(statearr_32085_33008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (14))){
var inst_32021 = (state_32055[(7)]);
var inst_32023 = cljs.core.chunked_seq_QMARK_(inst_32021);
var state_32055__$1 = state_32055;
if(inst_32023){
var statearr_32086_33009 = state_32055__$1;
(statearr_32086_33009[(1)] = (17));

} else {
var statearr_32087_33010 = state_32055__$1;
(statearr_32087_33010[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (16))){
var inst_32039 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
var statearr_32088_33011 = state_32055__$1;
(statearr_32088_33011[(2)] = inst_32039);

(statearr_32088_33011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (10))){
var inst_32008 = (state_32055[(11)]);
var inst_32010 = (state_32055[(12)]);
var inst_32015 = cljs.core._nth(inst_32008,inst_32010);
var state_32055__$1 = state_32055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32055__$1,(13),out,inst_32015);
} else {
if((state_val_32056 === (18))){
var inst_32021 = (state_32055[(7)]);
var inst_32030 = cljs.core.first(inst_32021);
var state_32055__$1 = state_32055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32055__$1,(20),out,inst_32030);
} else {
if((state_val_32056 === (8))){
var inst_32009 = (state_32055[(9)]);
var inst_32010 = (state_32055[(12)]);
var inst_32012 = (inst_32010 < inst_32009);
var inst_32013 = inst_32012;
var state_32055__$1 = state_32055;
if(cljs.core.truth_(inst_32013)){
var statearr_32089_33014 = state_32055__$1;
(statearr_32089_33014[(1)] = (10));

} else {
var statearr_32090_33015 = state_32055__$1;
(statearr_32090_33015[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30727__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30727__auto____0 = (function (){
var statearr_32091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32091[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30727__auto__);

(statearr_32091[(1)] = (1));

return statearr_32091;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30727__auto____1 = (function (state_32055){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_32055);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e32092){var ex__30730__auto__ = e32092;
var statearr_32093_33016 = state_32055;
(statearr_32093_33016[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_32055[(4)]))){
var statearr_32094_33017 = state_32055;
(statearr_32094_33017[(1)] = cljs.core.first((state_32055[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33018 = state_32055;
state_32055 = G__33018;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30727__auto__ = function(state_32055){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30727__auto____1.call(this,state_32055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30727__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30727__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_32095 = f__30759__auto__();
(statearr_32095[(6)] = c__30758__auto__);

return statearr_32095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));

return c__30758__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32097 = arguments.length;
switch (G__32097) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32099 = arguments.length;
switch (G__32099) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32101 = arguments.length;
switch (G__32101) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30758__auto___33085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_32125){
var state_val_32126 = (state_32125[(1)]);
if((state_val_32126 === (7))){
var inst_32120 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
var statearr_32127_33092 = state_32125__$1;
(statearr_32127_33092[(2)] = inst_32120);

(statearr_32127_33092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (1))){
var inst_32102 = null;
var state_32125__$1 = (function (){var statearr_32128 = state_32125;
(statearr_32128[(7)] = inst_32102);

return statearr_32128;
})();
var statearr_32129_33101 = state_32125__$1;
(statearr_32129_33101[(2)] = null);

(statearr_32129_33101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (4))){
var inst_32105 = (state_32125[(8)]);
var inst_32105__$1 = (state_32125[(2)]);
var inst_32106 = (inst_32105__$1 == null);
var inst_32107 = cljs.core.not(inst_32106);
var state_32125__$1 = (function (){var statearr_32130 = state_32125;
(statearr_32130[(8)] = inst_32105__$1);

return statearr_32130;
})();
if(inst_32107){
var statearr_32131_33106 = state_32125__$1;
(statearr_32131_33106[(1)] = (5));

} else {
var statearr_32132_33120 = state_32125__$1;
(statearr_32132_33120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (6))){
var state_32125__$1 = state_32125;
var statearr_32133_33121 = state_32125__$1;
(statearr_32133_33121[(2)] = null);

(statearr_32133_33121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (3))){
var inst_32122 = (state_32125[(2)]);
var inst_32123 = cljs.core.async.close_BANG_(out);
var state_32125__$1 = (function (){var statearr_32134 = state_32125;
(statearr_32134[(9)] = inst_32122);

return statearr_32134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32125__$1,inst_32123);
} else {
if((state_val_32126 === (2))){
var state_32125__$1 = state_32125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32125__$1,(4),ch);
} else {
if((state_val_32126 === (11))){
var inst_32105 = (state_32125[(8)]);
var inst_32114 = (state_32125[(2)]);
var inst_32102 = inst_32105;
var state_32125__$1 = (function (){var statearr_32135 = state_32125;
(statearr_32135[(10)] = inst_32114);

(statearr_32135[(7)] = inst_32102);

return statearr_32135;
})();
var statearr_32136_33123 = state_32125__$1;
(statearr_32136_33123[(2)] = null);

(statearr_32136_33123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (9))){
var inst_32105 = (state_32125[(8)]);
var state_32125__$1 = state_32125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32125__$1,(11),out,inst_32105);
} else {
if((state_val_32126 === (5))){
var inst_32105 = (state_32125[(8)]);
var inst_32102 = (state_32125[(7)]);
var inst_32109 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32105,inst_32102);
var state_32125__$1 = state_32125;
if(inst_32109){
var statearr_32138_33125 = state_32125__$1;
(statearr_32138_33125[(1)] = (8));

} else {
var statearr_32139_33126 = state_32125__$1;
(statearr_32139_33126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (10))){
var inst_32117 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
var statearr_32140_33127 = state_32125__$1;
(statearr_32140_33127[(2)] = inst_32117);

(statearr_32140_33127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (8))){
var inst_32102 = (state_32125[(7)]);
var tmp32137 = inst_32102;
var inst_32102__$1 = tmp32137;
var state_32125__$1 = (function (){var statearr_32141 = state_32125;
(statearr_32141[(7)] = inst_32102__$1);

return statearr_32141;
})();
var statearr_32142_33131 = state_32125__$1;
(statearr_32142_33131[(2)] = null);

(statearr_32142_33131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30727__auto__ = null;
var cljs$core$async$state_machine__30727__auto____0 = (function (){
var statearr_32143 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32143[(0)] = cljs$core$async$state_machine__30727__auto__);

(statearr_32143[(1)] = (1));

return statearr_32143;
});
var cljs$core$async$state_machine__30727__auto____1 = (function (state_32125){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_32125);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e32144){var ex__30730__auto__ = e32144;
var statearr_32145_33141 = state_32125;
(statearr_32145_33141[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_32125[(4)]))){
var statearr_32146_33144 = state_32125;
(statearr_32146_33144[(1)] = cljs.core.first((state_32125[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33151 = state_32125;
state_32125 = G__33151;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$state_machine__30727__auto__ = function(state_32125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30727__auto____1.call(this,state_32125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30727__auto____0;
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30727__auto____1;
return cljs$core$async$state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_32147 = f__30759__auto__();
(statearr_32147[(6)] = c__30758__auto___33085);

return statearr_32147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32149 = arguments.length;
switch (G__32149) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30758__auto___33183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_32187){
var state_val_32188 = (state_32187[(1)]);
if((state_val_32188 === (7))){
var inst_32183 = (state_32187[(2)]);
var state_32187__$1 = state_32187;
var statearr_32189_33184 = state_32187__$1;
(statearr_32189_33184[(2)] = inst_32183);

(statearr_32189_33184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (1))){
var inst_32150 = (new Array(n));
var inst_32151 = inst_32150;
var inst_32152 = (0);
var state_32187__$1 = (function (){var statearr_32190 = state_32187;
(statearr_32190[(7)] = inst_32152);

(statearr_32190[(8)] = inst_32151);

return statearr_32190;
})();
var statearr_32191_33185 = state_32187__$1;
(statearr_32191_33185[(2)] = null);

(statearr_32191_33185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (4))){
var inst_32155 = (state_32187[(9)]);
var inst_32155__$1 = (state_32187[(2)]);
var inst_32156 = (inst_32155__$1 == null);
var inst_32157 = cljs.core.not(inst_32156);
var state_32187__$1 = (function (){var statearr_32192 = state_32187;
(statearr_32192[(9)] = inst_32155__$1);

return statearr_32192;
})();
if(inst_32157){
var statearr_32193_33186 = state_32187__$1;
(statearr_32193_33186[(1)] = (5));

} else {
var statearr_32194_33187 = state_32187__$1;
(statearr_32194_33187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (15))){
var inst_32177 = (state_32187[(2)]);
var state_32187__$1 = state_32187;
var statearr_32195_33188 = state_32187__$1;
(statearr_32195_33188[(2)] = inst_32177);

(statearr_32195_33188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (13))){
var state_32187__$1 = state_32187;
var statearr_32196_33189 = state_32187__$1;
(statearr_32196_33189[(2)] = null);

(statearr_32196_33189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (6))){
var inst_32152 = (state_32187[(7)]);
var inst_32173 = (inst_32152 > (0));
var state_32187__$1 = state_32187;
if(cljs.core.truth_(inst_32173)){
var statearr_32197_33190 = state_32187__$1;
(statearr_32197_33190[(1)] = (12));

} else {
var statearr_32198_33191 = state_32187__$1;
(statearr_32198_33191[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (3))){
var inst_32185 = (state_32187[(2)]);
var state_32187__$1 = state_32187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32187__$1,inst_32185);
} else {
if((state_val_32188 === (12))){
var inst_32151 = (state_32187[(8)]);
var inst_32175 = cljs.core.vec(inst_32151);
var state_32187__$1 = state_32187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32187__$1,(15),out,inst_32175);
} else {
if((state_val_32188 === (2))){
var state_32187__$1 = state_32187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32187__$1,(4),ch);
} else {
if((state_val_32188 === (11))){
var inst_32167 = (state_32187[(2)]);
var inst_32168 = (new Array(n));
var inst_32151 = inst_32168;
var inst_32152 = (0);
var state_32187__$1 = (function (){var statearr_32199 = state_32187;
(statearr_32199[(7)] = inst_32152);

(statearr_32199[(8)] = inst_32151);

(statearr_32199[(10)] = inst_32167);

return statearr_32199;
})();
var statearr_32200_33192 = state_32187__$1;
(statearr_32200_33192[(2)] = null);

(statearr_32200_33192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (9))){
var inst_32151 = (state_32187[(8)]);
var inst_32165 = cljs.core.vec(inst_32151);
var state_32187__$1 = state_32187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32187__$1,(11),out,inst_32165);
} else {
if((state_val_32188 === (5))){
var inst_32160 = (state_32187[(11)]);
var inst_32152 = (state_32187[(7)]);
var inst_32155 = (state_32187[(9)]);
var inst_32151 = (state_32187[(8)]);
var inst_32159 = (inst_32151[inst_32152] = inst_32155);
var inst_32160__$1 = (inst_32152 + (1));
var inst_32161 = (inst_32160__$1 < n);
var state_32187__$1 = (function (){var statearr_32201 = state_32187;
(statearr_32201[(11)] = inst_32160__$1);

(statearr_32201[(12)] = inst_32159);

return statearr_32201;
})();
if(cljs.core.truth_(inst_32161)){
var statearr_32202_33206 = state_32187__$1;
(statearr_32202_33206[(1)] = (8));

} else {
var statearr_32203_33207 = state_32187__$1;
(statearr_32203_33207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (14))){
var inst_32180 = (state_32187[(2)]);
var inst_32181 = cljs.core.async.close_BANG_(out);
var state_32187__$1 = (function (){var statearr_32205 = state_32187;
(statearr_32205[(13)] = inst_32180);

return statearr_32205;
})();
var statearr_32206_33208 = state_32187__$1;
(statearr_32206_33208[(2)] = inst_32181);

(statearr_32206_33208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (10))){
var inst_32171 = (state_32187[(2)]);
var state_32187__$1 = state_32187;
var statearr_32207_33209 = state_32187__$1;
(statearr_32207_33209[(2)] = inst_32171);

(statearr_32207_33209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (8))){
var inst_32160 = (state_32187[(11)]);
var inst_32151 = (state_32187[(8)]);
var tmp32204 = inst_32151;
var inst_32151__$1 = tmp32204;
var inst_32152 = inst_32160;
var state_32187__$1 = (function (){var statearr_32208 = state_32187;
(statearr_32208[(7)] = inst_32152);

(statearr_32208[(8)] = inst_32151__$1);

return statearr_32208;
})();
var statearr_32209_33210 = state_32187__$1;
(statearr_32209_33210[(2)] = null);

(statearr_32209_33210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30727__auto__ = null;
var cljs$core$async$state_machine__30727__auto____0 = (function (){
var statearr_32210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32210[(0)] = cljs$core$async$state_machine__30727__auto__);

(statearr_32210[(1)] = (1));

return statearr_32210;
});
var cljs$core$async$state_machine__30727__auto____1 = (function (state_32187){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_32187);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e32211){var ex__30730__auto__ = e32211;
var statearr_32212_33211 = state_32187;
(statearr_32212_33211[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_32187[(4)]))){
var statearr_32213_33212 = state_32187;
(statearr_32213_33212[(1)] = cljs.core.first((state_32187[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33213 = state_32187;
state_32187 = G__33213;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$state_machine__30727__auto__ = function(state_32187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30727__auto____1.call(this,state_32187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30727__auto____0;
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30727__auto____1;
return cljs$core$async$state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_32214 = f__30759__auto__();
(statearr_32214[(6)] = c__30758__auto___33183);

return statearr_32214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32216 = arguments.length;
switch (G__32216) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30758__auto___33215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30759__auto__ = (function (){var switch__30726__auto__ = (function (state_32258){
var state_val_32259 = (state_32258[(1)]);
if((state_val_32259 === (7))){
var inst_32254 = (state_32258[(2)]);
var state_32258__$1 = state_32258;
var statearr_32260_33216 = state_32258__$1;
(statearr_32260_33216[(2)] = inst_32254);

(statearr_32260_33216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (1))){
var inst_32217 = [];
var inst_32218 = inst_32217;
var inst_32219 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32258__$1 = (function (){var statearr_32261 = state_32258;
(statearr_32261[(7)] = inst_32218);

(statearr_32261[(8)] = inst_32219);

return statearr_32261;
})();
var statearr_32262_33217 = state_32258__$1;
(statearr_32262_33217[(2)] = null);

(statearr_32262_33217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (4))){
var inst_32222 = (state_32258[(9)]);
var inst_32222__$1 = (state_32258[(2)]);
var inst_32223 = (inst_32222__$1 == null);
var inst_32224 = cljs.core.not(inst_32223);
var state_32258__$1 = (function (){var statearr_32263 = state_32258;
(statearr_32263[(9)] = inst_32222__$1);

return statearr_32263;
})();
if(inst_32224){
var statearr_32264_33218 = state_32258__$1;
(statearr_32264_33218[(1)] = (5));

} else {
var statearr_32265_33219 = state_32258__$1;
(statearr_32265_33219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (15))){
var inst_32248 = (state_32258[(2)]);
var state_32258__$1 = state_32258;
var statearr_32266_33220 = state_32258__$1;
(statearr_32266_33220[(2)] = inst_32248);

(statearr_32266_33220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (13))){
var state_32258__$1 = state_32258;
var statearr_32267_33221 = state_32258__$1;
(statearr_32267_33221[(2)] = null);

(statearr_32267_33221[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (6))){
var inst_32218 = (state_32258[(7)]);
var inst_32243 = inst_32218.length;
var inst_32244 = (inst_32243 > (0));
var state_32258__$1 = state_32258;
if(cljs.core.truth_(inst_32244)){
var statearr_32268_33222 = state_32258__$1;
(statearr_32268_33222[(1)] = (12));

} else {
var statearr_32269_33223 = state_32258__$1;
(statearr_32269_33223[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (3))){
var inst_32256 = (state_32258[(2)]);
var state_32258__$1 = state_32258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32258__$1,inst_32256);
} else {
if((state_val_32259 === (12))){
var inst_32218 = (state_32258[(7)]);
var inst_32246 = cljs.core.vec(inst_32218);
var state_32258__$1 = state_32258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32258__$1,(15),out,inst_32246);
} else {
if((state_val_32259 === (2))){
var state_32258__$1 = state_32258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32258__$1,(4),ch);
} else {
if((state_val_32259 === (11))){
var inst_32226 = (state_32258[(10)]);
var inst_32222 = (state_32258[(9)]);
var inst_32236 = (state_32258[(2)]);
var inst_32237 = [];
var inst_32238 = inst_32237.push(inst_32222);
var inst_32218 = inst_32237;
var inst_32219 = inst_32226;
var state_32258__$1 = (function (){var statearr_32270 = state_32258;
(statearr_32270[(7)] = inst_32218);

(statearr_32270[(11)] = inst_32236);

(statearr_32270[(12)] = inst_32238);

(statearr_32270[(8)] = inst_32219);

return statearr_32270;
})();
var statearr_32271_33224 = state_32258__$1;
(statearr_32271_33224[(2)] = null);

(statearr_32271_33224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (9))){
var inst_32218 = (state_32258[(7)]);
var inst_32234 = cljs.core.vec(inst_32218);
var state_32258__$1 = state_32258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32258__$1,(11),out,inst_32234);
} else {
if((state_val_32259 === (5))){
var inst_32226 = (state_32258[(10)]);
var inst_32222 = (state_32258[(9)]);
var inst_32219 = (state_32258[(8)]);
var inst_32226__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32222) : f.call(null,inst_32222));
var inst_32227 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32226__$1,inst_32219);
var inst_32228 = cljs.core.keyword_identical_QMARK_(inst_32219,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32229 = ((inst_32227) || (inst_32228));
var state_32258__$1 = (function (){var statearr_32272 = state_32258;
(statearr_32272[(10)] = inst_32226__$1);

return statearr_32272;
})();
if(cljs.core.truth_(inst_32229)){
var statearr_32273_33225 = state_32258__$1;
(statearr_32273_33225[(1)] = (8));

} else {
var statearr_32274_33226 = state_32258__$1;
(statearr_32274_33226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (14))){
var inst_32251 = (state_32258[(2)]);
var inst_32252 = cljs.core.async.close_BANG_(out);
var state_32258__$1 = (function (){var statearr_32276 = state_32258;
(statearr_32276[(13)] = inst_32251);

return statearr_32276;
})();
var statearr_32277_33227 = state_32258__$1;
(statearr_32277_33227[(2)] = inst_32252);

(statearr_32277_33227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (10))){
var inst_32241 = (state_32258[(2)]);
var state_32258__$1 = state_32258;
var statearr_32278_33228 = state_32258__$1;
(statearr_32278_33228[(2)] = inst_32241);

(statearr_32278_33228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (8))){
var inst_32226 = (state_32258[(10)]);
var inst_32218 = (state_32258[(7)]);
var inst_32222 = (state_32258[(9)]);
var inst_32231 = inst_32218.push(inst_32222);
var tmp32275 = inst_32218;
var inst_32218__$1 = tmp32275;
var inst_32219 = inst_32226;
var state_32258__$1 = (function (){var statearr_32279 = state_32258;
(statearr_32279[(7)] = inst_32218__$1);

(statearr_32279[(8)] = inst_32219);

(statearr_32279[(14)] = inst_32231);

return statearr_32279;
})();
var statearr_32280_33229 = state_32258__$1;
(statearr_32280_33229[(2)] = null);

(statearr_32280_33229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30727__auto__ = null;
var cljs$core$async$state_machine__30727__auto____0 = (function (){
var statearr_32281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32281[(0)] = cljs$core$async$state_machine__30727__auto__);

(statearr_32281[(1)] = (1));

return statearr_32281;
});
var cljs$core$async$state_machine__30727__auto____1 = (function (state_32258){
while(true){
var ret_value__30728__auto__ = (function (){try{while(true){
var result__30729__auto__ = switch__30726__auto__(state_32258);
if(cljs.core.keyword_identical_QMARK_(result__30729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30729__auto__;
}
break;
}
}catch (e32282){var ex__30730__auto__ = e32282;
var statearr_32283_33230 = state_32258;
(statearr_32283_33230[(2)] = ex__30730__auto__);


if(cljs.core.seq((state_32258[(4)]))){
var statearr_32284_33231 = state_32258;
(statearr_32284_33231[(1)] = cljs.core.first((state_32258[(4)])));

} else {
throw ex__30730__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33232 = state_32258;
state_32258 = G__33232;
continue;
} else {
return ret_value__30728__auto__;
}
break;
}
});
cljs$core$async$state_machine__30727__auto__ = function(state_32258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30727__auto____1.call(this,state_32258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30727__auto____0;
cljs$core$async$state_machine__30727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30727__auto____1;
return cljs$core$async$state_machine__30727__auto__;
})()
})();
var state__30760__auto__ = (function (){var statearr_32285 = f__30759__auto__();
(statearr_32285[(6)] = c__30758__auto___33215);

return statearr_32285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30760__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
