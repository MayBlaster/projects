goog.provide('projects.components.events');
projects.components.events.set_color = (function projects$components$events$set_color(i){
if(cljs.core.odd_QMARK_(i)){
return "#BFBFBF";
} else {
return "#AAAAAA";
}
});
projects.components.events.change_color_on_over = (function projects$components$events$change_color_on_over(event){
var cell_index_js = event.target.cellIndex;
var js_tr_nodes = event.target.parentNode.parentNode.childNodes;
var js_horizontal_nodes = event.target.parentNode.childNodes;
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function projects$components$events$change_color_on_over_$_iter__27252(s__27253){
return (new cljs.core.LazySeq(null,(function (){
var s__27253__$1 = s__27253;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27253__$1);
if(temp__5735__auto__){
var s__27253__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27253__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27253__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27255 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27254 = (0);
while(true){
if((i__27254 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__27254);
cljs.core.chunk_append(b__27255,(function (){var js_obj = cljs.core.clj__GT_js(item);
var clj_tds = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(js_obj.childNodes);
var hit_js_td = cljs.core.clj__GT_js(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,clj_tds),cell_index_js));
return (hit_js_td.style.backgroundColor = "grey");
})());

var G__27268 = (i__27254 + (1));
i__27254 = G__27268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27255),projects$components$events$change_color_on_over_$_iter__27252(cljs.core.chunk_rest(s__27253__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27255),null);
}
} else {
var item = cljs.core.first(s__27253__$2);
return cljs.core.cons((function (){var js_obj = cljs.core.clj__GT_js(item);
var clj_tds = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(js_obj.childNodes);
var hit_js_td = cljs.core.clj__GT_js(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,clj_tds),cell_index_js));
return (hit_js_td.style.backgroundColor = "grey");
})(),projects$components$events$change_color_on_over_$_iter__27252(cljs.core.rest(s__27253__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(js_tr_nodes));
})());

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function projects$components$events$change_color_on_over_$_iter__27256(s__27257){
return (new cljs.core.LazySeq(null,(function (){
var s__27257__$1 = s__27257;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27257__$1);
if(temp__5735__auto__){
var s__27257__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27257__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27257__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27259 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27258 = (0);
while(true){
if((i__27258 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__27258);
cljs.core.chunk_append(b__27259,(item.style.backgroundColor = "grey"));

var G__27269 = (i__27258 + (1));
i__27258 = G__27269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27259),projects$components$events$change_color_on_over_$_iter__27256(cljs.core.chunk_rest(s__27257__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27259),null);
}
} else {
var item = cljs.core.first(s__27257__$2);
return cljs.core.cons((item.style.backgroundColor = "grey"),projects$components$events$change_color_on_over_$_iter__27256(cljs.core.rest(s__27257__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(js_horizontal_nodes));
})());
});
projects.components.events.change_color_on_leave = (function projects$components$events$change_color_on_leave(event){
var row_index = event.target.parentNode.rowIndex;
var cell_index_js = event.target.cellIndex;
var js_tr_nodes = event.target.parentNode.parentNode.childNodes;
var js_horizontal_nodes = event.target.parentNode.childNodes;
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function projects$components$events$change_color_on_leave_$_iter__27260(s__27261){
return (new cljs.core.LazySeq(null,(function (){
var s__27261__$1 = s__27261;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27261__$1);
if(temp__5735__auto__){
var s__27261__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27261__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27261__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27263 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27262 = (0);
while(true){
if((i__27262 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__27262);
cljs.core.chunk_append(b__27263,(function (){var js_obj = cljs.core.clj__GT_js(item);
var row_index__$1 = js_obj.rowIndex;
var clj_tds = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(js_obj.childNodes);
var hit_js_td = cljs.core.clj__GT_js(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,clj_tds),cell_index_js));
return (hit_js_td.style.backgroundColor = projects.components.events.set_color((row_index__$1 - (1))));
})());

var G__27270 = (i__27262 + (1));
i__27262 = G__27270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27263),projects$components$events$change_color_on_leave_$_iter__27260(cljs.core.chunk_rest(s__27261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27263),null);
}
} else {
var item = cljs.core.first(s__27261__$2);
return cljs.core.cons((function (){var js_obj = cljs.core.clj__GT_js(item);
var row_index__$1 = js_obj.rowIndex;
var clj_tds = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(js_obj.childNodes);
var hit_js_td = cljs.core.clj__GT_js(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,clj_tds),cell_index_js));
return (hit_js_td.style.backgroundColor = projects.components.events.set_color((row_index__$1 - (1))));
})(),projects$components$events$change_color_on_leave_$_iter__27260(cljs.core.rest(s__27261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(js_tr_nodes));
})());

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function projects$components$events$change_color_on_leave_$_iter__27264(s__27265){
return (new cljs.core.LazySeq(null,(function (){
var s__27265__$1 = s__27265;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27265__$1);
if(temp__5735__auto__){
var s__27265__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27265__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27265__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27267 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27266 = (0);
while(true){
if((i__27266 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__27266);
cljs.core.chunk_append(b__27267,(item.style.backgroundColor = projects.components.events.set_color((row_index - (1)))));

var G__27271 = (i__27266 + (1));
i__27266 = G__27271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27267),projects$components$events$change_color_on_leave_$_iter__27264(cljs.core.chunk_rest(s__27265__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27267),null);
}
} else {
var item = cljs.core.first(s__27265__$2);
return cljs.core.cons((item.style.backgroundColor = projects.components.events.set_color((row_index - (1)))),projects$components$events$change_color_on_leave_$_iter__27264(cljs.core.rest(s__27265__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(js_horizontal_nodes));
})());
});

//# sourceMappingURL=projects.components.events.js.map
