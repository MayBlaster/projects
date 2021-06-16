goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35108){
var map__35109 = p__35108;
var map__35109__$1 = (((((!((map__35109 == null))))?(((((map__35109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35109):map__35109);
var m = map__35109__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35109__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35109__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35111_35321 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35112_35322 = null;
var count__35113_35323 = (0);
var i__35114_35324 = (0);
while(true){
if((i__35114_35324 < count__35113_35323)){
var f_35325 = chunk__35112_35322.cljs$core$IIndexed$_nth$arity$2(null,i__35114_35324);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35325], 0));


var G__35326 = seq__35111_35321;
var G__35327 = chunk__35112_35322;
var G__35328 = count__35113_35323;
var G__35329 = (i__35114_35324 + (1));
seq__35111_35321 = G__35326;
chunk__35112_35322 = G__35327;
count__35113_35323 = G__35328;
i__35114_35324 = G__35329;
continue;
} else {
var temp__5735__auto___35330 = cljs.core.seq(seq__35111_35321);
if(temp__5735__auto___35330){
var seq__35111_35331__$1 = temp__5735__auto___35330;
if(cljs.core.chunked_seq_QMARK_(seq__35111_35331__$1)){
var c__4556__auto___35332 = cljs.core.chunk_first(seq__35111_35331__$1);
var G__35333 = cljs.core.chunk_rest(seq__35111_35331__$1);
var G__35334 = c__4556__auto___35332;
var G__35335 = cljs.core.count(c__4556__auto___35332);
var G__35336 = (0);
seq__35111_35321 = G__35333;
chunk__35112_35322 = G__35334;
count__35113_35323 = G__35335;
i__35114_35324 = G__35336;
continue;
} else {
var f_35337 = cljs.core.first(seq__35111_35331__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35337], 0));


var G__35339 = cljs.core.next(seq__35111_35331__$1);
var G__35340 = null;
var G__35341 = (0);
var G__35342 = (0);
seq__35111_35321 = G__35339;
chunk__35112_35322 = G__35340;
count__35113_35323 = G__35341;
i__35114_35324 = G__35342;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35343 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35343], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35343)))?cljs.core.second(arglists_35343):arglists_35343)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35119_35345 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35120_35346 = null;
var count__35121_35347 = (0);
var i__35122_35348 = (0);
while(true){
if((i__35122_35348 < count__35121_35347)){
var vec__35133_35349 = chunk__35120_35346.cljs$core$IIndexed$_nth$arity$2(null,i__35122_35348);
var name_35350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35133_35349,(0),null);
var map__35136_35351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35133_35349,(1),null);
var map__35136_35352__$1 = (((((!((map__35136_35351 == null))))?(((((map__35136_35351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35136_35351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35136_35351):map__35136_35351);
var doc_35353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35136_35352__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35136_35352__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35350], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35354], 0));

if(cljs.core.truth_(doc_35353)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35353], 0));
} else {
}


var G__35355 = seq__35119_35345;
var G__35356 = chunk__35120_35346;
var G__35357 = count__35121_35347;
var G__35358 = (i__35122_35348 + (1));
seq__35119_35345 = G__35355;
chunk__35120_35346 = G__35356;
count__35121_35347 = G__35357;
i__35122_35348 = G__35358;
continue;
} else {
var temp__5735__auto___35359 = cljs.core.seq(seq__35119_35345);
if(temp__5735__auto___35359){
var seq__35119_35360__$1 = temp__5735__auto___35359;
if(cljs.core.chunked_seq_QMARK_(seq__35119_35360__$1)){
var c__4556__auto___35361 = cljs.core.chunk_first(seq__35119_35360__$1);
var G__35362 = cljs.core.chunk_rest(seq__35119_35360__$1);
var G__35363 = c__4556__auto___35361;
var G__35364 = cljs.core.count(c__4556__auto___35361);
var G__35365 = (0);
seq__35119_35345 = G__35362;
chunk__35120_35346 = G__35363;
count__35121_35347 = G__35364;
i__35122_35348 = G__35365;
continue;
} else {
var vec__35141_35366 = cljs.core.first(seq__35119_35360__$1);
var name_35367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141_35366,(0),null);
var map__35144_35368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141_35366,(1),null);
var map__35144_35369__$1 = (((((!((map__35144_35368 == null))))?(((((map__35144_35368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35144_35368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35144_35368):map__35144_35368);
var doc_35370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35144_35369__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35144_35369__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35367], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35371], 0));

if(cljs.core.truth_(doc_35370)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35370], 0));
} else {
}


var G__35372 = cljs.core.next(seq__35119_35360__$1);
var G__35373 = null;
var G__35374 = (0);
var G__35375 = (0);
seq__35119_35345 = G__35372;
chunk__35120_35346 = G__35373;
count__35121_35347 = G__35374;
i__35122_35348 = G__35375;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35146 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35147 = null;
var count__35148 = (0);
var i__35149 = (0);
while(true){
if((i__35149 < count__35148)){
var role = chunk__35147.cljs$core$IIndexed$_nth$arity$2(null,i__35149);
var temp__5735__auto___35376__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35376__$1)){
var spec_35377 = temp__5735__auto___35376__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35377)], 0));
} else {
}


var G__35378 = seq__35146;
var G__35379 = chunk__35147;
var G__35380 = count__35148;
var G__35381 = (i__35149 + (1));
seq__35146 = G__35378;
chunk__35147 = G__35379;
count__35148 = G__35380;
i__35149 = G__35381;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__35146);
if(temp__5735__auto____$1){
var seq__35146__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35146__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35146__$1);
var G__35382 = cljs.core.chunk_rest(seq__35146__$1);
var G__35383 = c__4556__auto__;
var G__35384 = cljs.core.count(c__4556__auto__);
var G__35385 = (0);
seq__35146 = G__35382;
chunk__35147 = G__35383;
count__35148 = G__35384;
i__35149 = G__35385;
continue;
} else {
var role = cljs.core.first(seq__35146__$1);
var temp__5735__auto___35386__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35386__$2)){
var spec_35387 = temp__5735__auto___35386__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35387)], 0));
} else {
}


var G__35388 = cljs.core.next(seq__35146__$1);
var G__35389 = null;
var G__35390 = (0);
var G__35391 = (0);
seq__35146 = G__35388;
chunk__35147 = G__35389;
count__35148 = G__35390;
i__35149 = G__35391;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35393 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35394 = cljs.core.ex_cause(t);
via = G__35393;
t = G__35394;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35157 = datafied_throwable;
var map__35157__$1 = (((((!((map__35157 == null))))?(((((map__35157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35157):map__35157);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35157__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35157__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35157__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35158 = cljs.core.last(via);
var map__35158__$1 = (((((!((map__35158 == null))))?(((((map__35158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35158):map__35158);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35158__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35158__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35158__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35159 = data;
var map__35159__$1 = (((((!((map__35159 == null))))?(((((map__35159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35159):map__35159);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35159__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35159__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35159__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35160 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35160__$1 = (((((!((map__35160 == null))))?(((((map__35160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35160):map__35160);
var top_data = map__35160__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35160__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35165 = phase;
var G__35165__$1 = (((G__35165 instanceof cljs.core.Keyword))?G__35165.fqn:null);
switch (G__35165__$1) {
case "read-source":
var map__35166 = data;
var map__35166__$1 = (((((!((map__35166 == null))))?(((((map__35166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35166):map__35166);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35166__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35166__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35168 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35168__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35168,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35168);
var G__35168__$2 = (cljs.core.truth_((function (){var fexpr__35222 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35222.cljs$core$IFn$_invoke$arity$1 ? fexpr__35222.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35222.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35168__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35168__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35168__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35168__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35223 = top_data;
var G__35223__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35223,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35223);
var G__35223__$2 = (cljs.core.truth_((function (){var fexpr__35224 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35224.cljs$core$IFn$_invoke$arity$1 ? fexpr__35224.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35224.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35223__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35223__$1);
var G__35223__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35223__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35223__$2);
var G__35223__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35223__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35223__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35223__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35223__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35225 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,(3),null);
var G__35228 = top_data;
var G__35228__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35228,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35228);
var G__35228__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35228__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35228__$1);
var G__35228__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35228__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35228__$2);
var G__35228__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35228__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35228__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35228__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35228__$4;
}

break;
case "execution":
var vec__35229 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35229,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35229,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35229,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35229,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35156_SHARP_){
var or__4126__auto__ = (p1__35156_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__35267 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35267.cljs$core$IFn$_invoke$arity$1 ? fexpr__35267.cljs$core$IFn$_invoke$arity$1(p1__35156_SHARP_) : fexpr__35267.call(null,p1__35156_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__35268 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35268__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35268,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35268);
var G__35268__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35268__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35268__$1);
var G__35268__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35268__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35268__$2);
var G__35268__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35268__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35268__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35268__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35268__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35165__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35271){
var map__35272 = p__35271;
var map__35272__$1 = (((((!((map__35272 == null))))?(((((map__35272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35272):map__35272);
var triage_data = map__35272__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35283 = phase;
var G__35283__$1 = (((G__35283 instanceof cljs.core.Keyword))?G__35283.fqn:null);
switch (G__35283__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35284 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35286 = loc;
var G__35287 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35288_35398 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35289_35399 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35290_35400 = true;
var _STAR_print_fn_STAR__temp_val__35291_35401 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35290_35400);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35291_35401);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35269_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35269_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35289_35399);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35288_35398);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35284,G__35285,G__35286,G__35287) : format.call(null,G__35284,G__35285,G__35286,G__35287));

break;
case "macroexpansion":
var G__35292 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35293 = cause_type;
var G__35294 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35295 = loc;
var G__35296 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35292,G__35293,G__35294,G__35295,G__35296) : format.call(null,G__35292,G__35293,G__35294,G__35295,G__35296));

break;
case "compile-syntax-check":
var G__35297 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35298 = cause_type;
var G__35299 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35300 = loc;
var G__35301 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35297,G__35298,G__35299,G__35300,G__35301) : format.call(null,G__35297,G__35298,G__35299,G__35300,G__35301));

break;
case "compilation":
var G__35302 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35303 = cause_type;
var G__35304 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35305 = loc;
var G__35306 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35302,G__35303,G__35304,G__35305,G__35306) : format.call(null,G__35302,G__35303,G__35304,G__35305,G__35306));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35308 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35309 = symbol;
var G__35310 = loc;
var G__35311 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35312_35402 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35313_35403 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35314_35404 = true;
var _STAR_print_fn_STAR__temp_val__35315_35405 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35314_35404);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35315_35405);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35270_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35270_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35313_35403);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35312_35402);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35308,G__35309,G__35310,G__35311) : format.call(null,G__35308,G__35309,G__35310,G__35311));
} else {
var G__35316 = "Execution error%s at %s(%s).\n%s\n";
var G__35317 = cause_type;
var G__35318 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35319 = loc;
var G__35320 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35316,G__35317,G__35318,G__35319,G__35320) : format.call(null,G__35316,G__35317,G__35318,G__35319,G__35320));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35283__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
