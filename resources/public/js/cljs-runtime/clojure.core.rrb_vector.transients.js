goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_31760 = ret;
var shift_31761__$1 = shift;
while(true){
var arr_31762 = n_31760.arr;
var subidx_31763 = (((cnt - (1)) >> shift_31761__$1) & (31));
if((shift_31761__$1 === (5))){
(arr_31762[subidx_31763] = tail_node);
} else {
var child_31764 = (arr_31762[subidx_31763]);
if((child_31764 == null)){
(arr_31762[subidx_31763] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_31761__$1 - (5)),tail_node));
} else {
var editable_child_31765 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_31764);
(arr_31762[subidx_31763] = editable_child_31765);

var G__31766 = editable_child_31765;
var G__31767 = (shift_31761__$1 - (5));
n_31760 = G__31766;
shift_31761__$1 = G__31767;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__31717 = (shift - (5));
var G__31718 = ccnt;
var G__31719 = root_edit;
var G__31720 = child;
var G__31721 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__31717,G__31718,G__31719,G__31720,G__31721) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__31717,G__31718,G__31719,G__31720,G__31721));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_31775 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_31776 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_31775,data_31776);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__31722 = (shift - (5));
var G__31723 = cnt;
var G__31724 = root_edit;
var G__31725 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__31722,G__31723,G__31724,G__31725) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__31722,G__31723,G__31724,G__31725));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__31726 = (shift - (5));
var G__31727 = child_cnt;
var G__31728 = root_edit;
var G__31729 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__31726,G__31727,G__31728,G__31729) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__31726,G__31727,G__31728,G__31729));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_31777__$1 = shift;
var node_31778 = ret;
while(true){
if((shift_31777__$1 === (0))){
var arr_31779 = node_31778.arr;
(arr_31779[(i & (31))] = val);
} else {
var arr_31780 = node_31778.arr;
var subidx_31781 = ((i >> shift_31777__$1) & (31));
var child_31782 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_31780[subidx_31781]));
(arr_31780[subidx_31781] = child_31782);

var G__31783 = (shift_31777__$1 - (5));
var G__31784 = child_31782;
shift_31777__$1 = G__31783;
node_31778 = G__31784;
continue;
}
break;
}
} else {
var arr_31785 = ret.arr;
var rngs_31786 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_31787 = ((i >> shift) & (31));
var subidx_31788__$1 = (function (){var subidx_31788__$1 = subidx_31787;
while(true){
if((i < ((rngs_31786[subidx_31788__$1]) | (0)))){
return subidx_31788__$1;
} else {
var G__31790 = (subidx_31788__$1 + (1));
subidx_31788__$1 = G__31790;
continue;
}
break;
}
})();
var i_31789__$1 = (((subidx_31788__$1 === (0)))?i:(i - (rngs_31786[(subidx_31788__$1 - (1))])));
(arr_31785[subidx_31788__$1] = (function (){var G__31730 = (shift - (5));
var G__31731 = root_edit;
var G__31732 = (arr_31785[subidx_31788__$1]);
var G__31733 = i_31789__$1;
var G__31734 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__31730,G__31731,G__31732,G__31733,G__31734) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__31730,G__31731,G__31732,G__31733,G__31734));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
