goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36028 = arguments.length;
var i__4737__auto___36029 = (0);
while(true){
if((i__4737__auto___36029 < len__4736__auto___36028)){
args__4742__auto__.push((arguments[i__4737__auto___36029]));

var G__36030 = (i__4737__auto___36029 + (1));
i__4737__auto___36029 = G__36030;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35885){
var G__35886 = cljs.core.first(seq35885);
var seq35885__$1 = cljs.core.next(seq35885);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35886,seq35885__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35887 = cljs.core.seq(sources);
var chunk__35888 = null;
var count__35889 = (0);
var i__35890 = (0);
while(true){
if((i__35890 < count__35889)){
var map__35897 = chunk__35888.cljs$core$IIndexed$_nth$arity$2(null,i__35890);
var map__35897__$1 = (((((!((map__35897 == null))))?(((((map__35897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35897):map__35897);
var src = map__35897__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35897__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35897__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35897__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35897__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35899){var e_36031 = e35899;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36031);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36031.message)].join('')));
}

var G__36032 = seq__35887;
var G__36033 = chunk__35888;
var G__36034 = count__35889;
var G__36035 = (i__35890 + (1));
seq__35887 = G__36032;
chunk__35888 = G__36033;
count__35889 = G__36034;
i__35890 = G__36035;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35887);
if(temp__5735__auto__){
var seq__35887__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35887__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35887__$1);
var G__36036 = cljs.core.chunk_rest(seq__35887__$1);
var G__36037 = c__4556__auto__;
var G__36038 = cljs.core.count(c__4556__auto__);
var G__36039 = (0);
seq__35887 = G__36036;
chunk__35888 = G__36037;
count__35889 = G__36038;
i__35890 = G__36039;
continue;
} else {
var map__35900 = cljs.core.first(seq__35887__$1);
var map__35900__$1 = (((((!((map__35900 == null))))?(((((map__35900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35900):map__35900);
var src = map__35900__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35900__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35900__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35900__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35900__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35902){var e_36040 = e35902;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36040);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36040.message)].join('')));
}

var G__36041 = cljs.core.next(seq__35887__$1);
var G__36042 = null;
var G__36043 = (0);
var G__36044 = (0);
seq__35887 = G__36041;
chunk__35888 = G__36042;
count__35889 = G__36043;
i__35890 = G__36044;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35903 = cljs.core.seq(js_requires);
var chunk__35904 = null;
var count__35905 = (0);
var i__35906 = (0);
while(true){
if((i__35906 < count__35905)){
var js_ns = chunk__35904.cljs$core$IIndexed$_nth$arity$2(null,i__35906);
var require_str_36045 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36045);


var G__36046 = seq__35903;
var G__36047 = chunk__35904;
var G__36048 = count__35905;
var G__36049 = (i__35906 + (1));
seq__35903 = G__36046;
chunk__35904 = G__36047;
count__35905 = G__36048;
i__35906 = G__36049;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35903);
if(temp__5735__auto__){
var seq__35903__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35903__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35903__$1);
var G__36050 = cljs.core.chunk_rest(seq__35903__$1);
var G__36051 = c__4556__auto__;
var G__36052 = cljs.core.count(c__4556__auto__);
var G__36053 = (0);
seq__35903 = G__36050;
chunk__35904 = G__36051;
count__35905 = G__36052;
i__35906 = G__36053;
continue;
} else {
var js_ns = cljs.core.first(seq__35903__$1);
var require_str_36054 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36054);


var G__36055 = cljs.core.next(seq__35903__$1);
var G__36056 = null;
var G__36057 = (0);
var G__36058 = (0);
seq__35903 = G__36055;
chunk__35904 = G__36056;
count__35905 = G__36057;
i__35906 = G__36058;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35908){
var map__35909 = p__35908;
var map__35909__$1 = (((((!((map__35909 == null))))?(((((map__35909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35909):map__35909);
var msg = map__35909__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35909__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35909__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35911(s__35912){
return (new cljs.core.LazySeq(null,(function (){
var s__35912__$1 = s__35912;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35912__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35917 = cljs.core.first(xs__6292__auto__);
var map__35917__$1 = (((((!((map__35917 == null))))?(((((map__35917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35917):map__35917);
var src = map__35917__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35917__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35917__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35912__$1,map__35917,map__35917__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35909,map__35909__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35911_$_iter__35913(s__35914){
return (new cljs.core.LazySeq(null,((function (s__35912__$1,map__35917,map__35917__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35909,map__35909__$1,msg,info,reload_info){
return (function (){
var s__35914__$1 = s__35914;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35914__$1);
if(temp__5735__auto____$1){
var s__35914__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35914__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35914__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35916 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35915 = (0);
while(true){
if((i__35915 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35915);
cljs.core.chunk_append(b__35916,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36059 = (i__35915 + (1));
i__35915 = G__36059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35916),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35911_$_iter__35913(cljs.core.chunk_rest(s__35914__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35916),null);
}
} else {
var warning = cljs.core.first(s__35914__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35911_$_iter__35913(cljs.core.rest(s__35914__$2)));
}
} else {
return null;
}
break;
}
});})(s__35912__$1,map__35917,map__35917__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35909,map__35909__$1,msg,info,reload_info))
,null,null));
});})(s__35912__$1,map__35917,map__35917__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35909,map__35909__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35911(cljs.core.rest(s__35912__$1)));
} else {
var G__36060 = cljs.core.rest(s__35912__$1);
s__35912__$1 = G__36060;
continue;
}
} else {
var G__36061 = cljs.core.rest(s__35912__$1);
s__35912__$1 = G__36061;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35919_36062 = cljs.core.seq(warnings);
var chunk__35920_36063 = null;
var count__35921_36064 = (0);
var i__35922_36065 = (0);
while(true){
if((i__35922_36065 < count__35921_36064)){
var map__35927_36066 = chunk__35920_36063.cljs$core$IIndexed$_nth$arity$2(null,i__35922_36065);
var map__35927_36067__$1 = (((((!((map__35927_36066 == null))))?(((((map__35927_36066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35927_36066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35927_36066):map__35927_36066);
var w_36068 = map__35927_36067__$1;
var msg_36069__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927_36067__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927_36067__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927_36067__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927_36067__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36072)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36070),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36071),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36069__$1)].join(''));


var G__36073 = seq__35919_36062;
var G__36074 = chunk__35920_36063;
var G__36075 = count__35921_36064;
var G__36076 = (i__35922_36065 + (1));
seq__35919_36062 = G__36073;
chunk__35920_36063 = G__36074;
count__35921_36064 = G__36075;
i__35922_36065 = G__36076;
continue;
} else {
var temp__5735__auto___36077 = cljs.core.seq(seq__35919_36062);
if(temp__5735__auto___36077){
var seq__35919_36078__$1 = temp__5735__auto___36077;
if(cljs.core.chunked_seq_QMARK_(seq__35919_36078__$1)){
var c__4556__auto___36079 = cljs.core.chunk_first(seq__35919_36078__$1);
var G__36080 = cljs.core.chunk_rest(seq__35919_36078__$1);
var G__36081 = c__4556__auto___36079;
var G__36082 = cljs.core.count(c__4556__auto___36079);
var G__36083 = (0);
seq__35919_36062 = G__36080;
chunk__35920_36063 = G__36081;
count__35921_36064 = G__36082;
i__35922_36065 = G__36083;
continue;
} else {
var map__35929_36084 = cljs.core.first(seq__35919_36078__$1);
var map__35929_36085__$1 = (((((!((map__35929_36084 == null))))?(((((map__35929_36084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35929_36084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35929_36084):map__35929_36084);
var w_36086 = map__35929_36085__$1;
var msg_36087__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35929_36085__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35929_36085__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35929_36085__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35929_36085__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36090)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36088),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36089),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36087__$1)].join(''));


var G__36091 = cljs.core.next(seq__35919_36078__$1);
var G__36092 = null;
var G__36093 = (0);
var G__36094 = (0);
seq__35919_36062 = G__36091;
chunk__35920_36063 = G__36092;
count__35921_36064 = G__36093;
i__35922_36065 = G__36094;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35907_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35907_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35931){
var map__35932 = p__35931;
var map__35932__$1 = (((((!((map__35932 == null))))?(((((map__35932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35932):map__35932);
var msg = map__35932__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35932__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35934 = cljs.core.seq(updates);
var chunk__35936 = null;
var count__35937 = (0);
var i__35938 = (0);
while(true){
if((i__35938 < count__35937)){
var path = chunk__35936.cljs$core$IIndexed$_nth$arity$2(null,i__35938);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35968_36095 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35972_36096 = null;
var count__35973_36097 = (0);
var i__35974_36098 = (0);
while(true){
if((i__35974_36098 < count__35973_36097)){
var node_36099 = chunk__35972_36096.cljs$core$IIndexed$_nth$arity$2(null,i__35974_36098);
if(cljs.core.not(node_36099.shadow$old)){
var path_match_36100 = shadow.cljs.devtools.client.browser.match_paths(node_36099.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36100)){
var new_link_36101 = (function (){var G__35980 = node_36099.cloneNode(true);
G__35980.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36100),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35980;
})();
(node_36099.shadow$old = true);

(new_link_36101.onload = ((function (seq__35968_36095,chunk__35972_36096,count__35973_36097,i__35974_36098,seq__35934,chunk__35936,count__35937,i__35938,new_link_36101,path_match_36100,node_36099,path,map__35932,map__35932__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36099);
});})(seq__35968_36095,chunk__35972_36096,count__35973_36097,i__35974_36098,seq__35934,chunk__35936,count__35937,i__35938,new_link_36101,path_match_36100,node_36099,path,map__35932,map__35932__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36100], 0));

goog.dom.insertSiblingAfter(new_link_36101,node_36099);


var G__36102 = seq__35968_36095;
var G__36103 = chunk__35972_36096;
var G__36104 = count__35973_36097;
var G__36105 = (i__35974_36098 + (1));
seq__35968_36095 = G__36102;
chunk__35972_36096 = G__36103;
count__35973_36097 = G__36104;
i__35974_36098 = G__36105;
continue;
} else {
var G__36106 = seq__35968_36095;
var G__36107 = chunk__35972_36096;
var G__36108 = count__35973_36097;
var G__36109 = (i__35974_36098 + (1));
seq__35968_36095 = G__36106;
chunk__35972_36096 = G__36107;
count__35973_36097 = G__36108;
i__35974_36098 = G__36109;
continue;
}
} else {
var G__36110 = seq__35968_36095;
var G__36111 = chunk__35972_36096;
var G__36112 = count__35973_36097;
var G__36113 = (i__35974_36098 + (1));
seq__35968_36095 = G__36110;
chunk__35972_36096 = G__36111;
count__35973_36097 = G__36112;
i__35974_36098 = G__36113;
continue;
}
} else {
var temp__5735__auto___36114 = cljs.core.seq(seq__35968_36095);
if(temp__5735__auto___36114){
var seq__35968_36115__$1 = temp__5735__auto___36114;
if(cljs.core.chunked_seq_QMARK_(seq__35968_36115__$1)){
var c__4556__auto___36116 = cljs.core.chunk_first(seq__35968_36115__$1);
var G__36117 = cljs.core.chunk_rest(seq__35968_36115__$1);
var G__36118 = c__4556__auto___36116;
var G__36119 = cljs.core.count(c__4556__auto___36116);
var G__36120 = (0);
seq__35968_36095 = G__36117;
chunk__35972_36096 = G__36118;
count__35973_36097 = G__36119;
i__35974_36098 = G__36120;
continue;
} else {
var node_36121 = cljs.core.first(seq__35968_36115__$1);
if(cljs.core.not(node_36121.shadow$old)){
var path_match_36122 = shadow.cljs.devtools.client.browser.match_paths(node_36121.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36122)){
var new_link_36123 = (function (){var G__35981 = node_36121.cloneNode(true);
G__35981.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36122),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35981;
})();
(node_36121.shadow$old = true);

(new_link_36123.onload = ((function (seq__35968_36095,chunk__35972_36096,count__35973_36097,i__35974_36098,seq__35934,chunk__35936,count__35937,i__35938,new_link_36123,path_match_36122,node_36121,seq__35968_36115__$1,temp__5735__auto___36114,path,map__35932,map__35932__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36121);
});})(seq__35968_36095,chunk__35972_36096,count__35973_36097,i__35974_36098,seq__35934,chunk__35936,count__35937,i__35938,new_link_36123,path_match_36122,node_36121,seq__35968_36115__$1,temp__5735__auto___36114,path,map__35932,map__35932__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36122], 0));

goog.dom.insertSiblingAfter(new_link_36123,node_36121);


var G__36124 = cljs.core.next(seq__35968_36115__$1);
var G__36125 = null;
var G__36126 = (0);
var G__36127 = (0);
seq__35968_36095 = G__36124;
chunk__35972_36096 = G__36125;
count__35973_36097 = G__36126;
i__35974_36098 = G__36127;
continue;
} else {
var G__36128 = cljs.core.next(seq__35968_36115__$1);
var G__36129 = null;
var G__36130 = (0);
var G__36131 = (0);
seq__35968_36095 = G__36128;
chunk__35972_36096 = G__36129;
count__35973_36097 = G__36130;
i__35974_36098 = G__36131;
continue;
}
} else {
var G__36132 = cljs.core.next(seq__35968_36115__$1);
var G__36133 = null;
var G__36134 = (0);
var G__36135 = (0);
seq__35968_36095 = G__36132;
chunk__35972_36096 = G__36133;
count__35973_36097 = G__36134;
i__35974_36098 = G__36135;
continue;
}
}
} else {
}
}
break;
}


var G__36136 = seq__35934;
var G__36137 = chunk__35936;
var G__36138 = count__35937;
var G__36139 = (i__35938 + (1));
seq__35934 = G__36136;
chunk__35936 = G__36137;
count__35937 = G__36138;
i__35938 = G__36139;
continue;
} else {
var G__36140 = seq__35934;
var G__36141 = chunk__35936;
var G__36142 = count__35937;
var G__36143 = (i__35938 + (1));
seq__35934 = G__36140;
chunk__35936 = G__36141;
count__35937 = G__36142;
i__35938 = G__36143;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35934);
if(temp__5735__auto__){
var seq__35934__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35934__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35934__$1);
var G__36144 = cljs.core.chunk_rest(seq__35934__$1);
var G__36145 = c__4556__auto__;
var G__36146 = cljs.core.count(c__4556__auto__);
var G__36147 = (0);
seq__35934 = G__36144;
chunk__35936 = G__36145;
count__35937 = G__36146;
i__35938 = G__36147;
continue;
} else {
var path = cljs.core.first(seq__35934__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35982_36148 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35986_36149 = null;
var count__35987_36150 = (0);
var i__35988_36151 = (0);
while(true){
if((i__35988_36151 < count__35987_36150)){
var node_36152 = chunk__35986_36149.cljs$core$IIndexed$_nth$arity$2(null,i__35988_36151);
if(cljs.core.not(node_36152.shadow$old)){
var path_match_36153 = shadow.cljs.devtools.client.browser.match_paths(node_36152.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36153)){
var new_link_36154 = (function (){var G__35994 = node_36152.cloneNode(true);
G__35994.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36153),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35994;
})();
(node_36152.shadow$old = true);

(new_link_36154.onload = ((function (seq__35982_36148,chunk__35986_36149,count__35987_36150,i__35988_36151,seq__35934,chunk__35936,count__35937,i__35938,new_link_36154,path_match_36153,node_36152,path,seq__35934__$1,temp__5735__auto__,map__35932,map__35932__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36152);
});})(seq__35982_36148,chunk__35986_36149,count__35987_36150,i__35988_36151,seq__35934,chunk__35936,count__35937,i__35938,new_link_36154,path_match_36153,node_36152,path,seq__35934__$1,temp__5735__auto__,map__35932,map__35932__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36153], 0));

goog.dom.insertSiblingAfter(new_link_36154,node_36152);


var G__36155 = seq__35982_36148;
var G__36156 = chunk__35986_36149;
var G__36157 = count__35987_36150;
var G__36158 = (i__35988_36151 + (1));
seq__35982_36148 = G__36155;
chunk__35986_36149 = G__36156;
count__35987_36150 = G__36157;
i__35988_36151 = G__36158;
continue;
} else {
var G__36159 = seq__35982_36148;
var G__36160 = chunk__35986_36149;
var G__36161 = count__35987_36150;
var G__36162 = (i__35988_36151 + (1));
seq__35982_36148 = G__36159;
chunk__35986_36149 = G__36160;
count__35987_36150 = G__36161;
i__35988_36151 = G__36162;
continue;
}
} else {
var G__36163 = seq__35982_36148;
var G__36164 = chunk__35986_36149;
var G__36165 = count__35987_36150;
var G__36166 = (i__35988_36151 + (1));
seq__35982_36148 = G__36163;
chunk__35986_36149 = G__36164;
count__35987_36150 = G__36165;
i__35988_36151 = G__36166;
continue;
}
} else {
var temp__5735__auto___36167__$1 = cljs.core.seq(seq__35982_36148);
if(temp__5735__auto___36167__$1){
var seq__35982_36168__$1 = temp__5735__auto___36167__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35982_36168__$1)){
var c__4556__auto___36169 = cljs.core.chunk_first(seq__35982_36168__$1);
var G__36170 = cljs.core.chunk_rest(seq__35982_36168__$1);
var G__36171 = c__4556__auto___36169;
var G__36172 = cljs.core.count(c__4556__auto___36169);
var G__36173 = (0);
seq__35982_36148 = G__36170;
chunk__35986_36149 = G__36171;
count__35987_36150 = G__36172;
i__35988_36151 = G__36173;
continue;
} else {
var node_36174 = cljs.core.first(seq__35982_36168__$1);
if(cljs.core.not(node_36174.shadow$old)){
var path_match_36175 = shadow.cljs.devtools.client.browser.match_paths(node_36174.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36175)){
var new_link_36176 = (function (){var G__35995 = node_36174.cloneNode(true);
G__35995.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36175),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35995;
})();
(node_36174.shadow$old = true);

(new_link_36176.onload = ((function (seq__35982_36148,chunk__35986_36149,count__35987_36150,i__35988_36151,seq__35934,chunk__35936,count__35937,i__35938,new_link_36176,path_match_36175,node_36174,seq__35982_36168__$1,temp__5735__auto___36167__$1,path,seq__35934__$1,temp__5735__auto__,map__35932,map__35932__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36174);
});})(seq__35982_36148,chunk__35986_36149,count__35987_36150,i__35988_36151,seq__35934,chunk__35936,count__35937,i__35938,new_link_36176,path_match_36175,node_36174,seq__35982_36168__$1,temp__5735__auto___36167__$1,path,seq__35934__$1,temp__5735__auto__,map__35932,map__35932__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36175], 0));

goog.dom.insertSiblingAfter(new_link_36176,node_36174);


var G__36177 = cljs.core.next(seq__35982_36168__$1);
var G__36178 = null;
var G__36179 = (0);
var G__36180 = (0);
seq__35982_36148 = G__36177;
chunk__35986_36149 = G__36178;
count__35987_36150 = G__36179;
i__35988_36151 = G__36180;
continue;
} else {
var G__36181 = cljs.core.next(seq__35982_36168__$1);
var G__36182 = null;
var G__36183 = (0);
var G__36184 = (0);
seq__35982_36148 = G__36181;
chunk__35986_36149 = G__36182;
count__35987_36150 = G__36183;
i__35988_36151 = G__36184;
continue;
}
} else {
var G__36185 = cljs.core.next(seq__35982_36168__$1);
var G__36186 = null;
var G__36187 = (0);
var G__36188 = (0);
seq__35982_36148 = G__36185;
chunk__35986_36149 = G__36186;
count__35987_36150 = G__36187;
i__35988_36151 = G__36188;
continue;
}
}
} else {
}
}
break;
}


var G__36189 = cljs.core.next(seq__35934__$1);
var G__36190 = null;
var G__36191 = (0);
var G__36192 = (0);
seq__35934 = G__36189;
chunk__35936 = G__36190;
count__35937 = G__36191;
i__35938 = G__36192;
continue;
} else {
var G__36193 = cljs.core.next(seq__35934__$1);
var G__36194 = null;
var G__36195 = (0);
var G__36196 = (0);
seq__35934 = G__36193;
chunk__35936 = G__36194;
count__35937 = G__36195;
i__35938 = G__36196;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35996){
var map__35997 = p__35996;
var map__35997__$1 = (((((!((map__35997 == null))))?(((((map__35997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35997):map__35997);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35997__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35999){
var map__36000 = p__35999;
var map__36000__$1 = (((((!((map__36000 == null))))?(((((map__36000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36000):map__36000);
var _ = map__36000__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36000__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36002,done,error){
var map__36003 = p__36002;
var map__36003__$1 = (((((!((map__36003 == null))))?(((((map__36003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36003):map__36003);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36003__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36005,done,error){
var map__36006 = p__36005;
var map__36006__$1 = (((((!((map__36006 == null))))?(((((map__36006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36006):map__36006);
var msg = map__36006__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36006__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36006__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36006__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36008){
var map__36009 = p__36008;
var map__36009__$1 = (((((!((map__36009 == null))))?(((((map__36009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36009):map__36009);
var src = map__36009__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36009__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36011 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36011) : done.call(null,G__36011));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36012){
var map__36013 = p__36012;
var map__36013__$1 = (((((!((map__36013 == null))))?(((((map__36013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36013):map__36013);
var msg__$1 = map__36013__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36013__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36015){var ex = e36015;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36016){
var map__36017 = p__36016;
var map__36017__$1 = (((((!((map__36017 == null))))?(((((map__36017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36017):map__36017);
var env = map__36017__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36019){
var map__36020 = p__36019;
var map__36020__$1 = (((((!((map__36020 == null))))?(((((map__36020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36020):map__36020);
var msg = map__36020__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36020__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36022){
var map__36023 = p__36022;
var map__36023__$1 = (((((!((map__36023 == null))))?(((((map__36023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36023):map__36023);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36023__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36023__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36025){
var map__36026 = p__36025;
var map__36026__$1 = (((((!((map__36026 == null))))?(((((map__36026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36026):map__36026);
var svc = map__36026__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36026__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
