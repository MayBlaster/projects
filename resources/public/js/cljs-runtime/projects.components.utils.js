goog.provide('projects.components.utils');
projects.components.utils.next_status = (function projects$components$utils$next_status(p__30292){
var map__30293 = p__30292;
var map__30293__$1 = (((((!((map__30293 == null))))?(((((map__30293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30293):map__30293);
var project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30293__$1,new cljs.core.Keyword(null,"project","project",1124394579));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Initiated",new cljs.core.Keyword(null,"status_name","status_name",525382486).cljs$core$IFn$_invoke$arity$1(project))){
return "Reviewed";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Reviewed",new cljs.core.Keyword(null,"status_name","status_name",525382486).cljs$core$IFn$_invoke$arity$1(project))){
return "Approved";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Approved",new cljs.core.Keyword(null,"status_name","status_name",525382486).cljs$core$IFn$_invoke$arity$1(project))){
return "Denied";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Denied",new cljs.core.Keyword(null,"status_name","status_name",525382486).cljs$core$IFn$_invoke$arity$1(project))){
return "Reviewed";
} else {
return null;
}
}
}
}
});

//# sourceMappingURL=projects.components.utils.js.map
