goog.provide('aero.core');
var shadow$empty=shadow.js.require("shadow$empty", {});
var module$node_modules$path_browserify$index=shadow.js.require("module$node_modules$path_browserify$index", {});
var module$node_modules$os_browserify$browser=shadow.js.require("module$node_modules$os_browserify$browser", {});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
aero.core.Deferred = (function (delegate,__meta,__extmap,__hash){
this.delegate = delegate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(aero.core.Deferred.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(aero.core.Deferred.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k28288,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28292 = k28288;
var G__28292__$1 = (((G__28292 instanceof cljs.core.Keyword))?G__28292.fqn:null);
switch (G__28292__$1) {
case "delegate":
return self__.delegate;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28288,else__4383__auto__);

}
}));

(aero.core.Deferred.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__28293){
var vec__28294 = p__28293;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28294,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28294,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(aero.core.Deferred.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#aero.core.Deferred{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"delegate","delegate",-1141883770),self__.delegate],null))], null),self__.__extmap));
}));

(aero.core.Deferred.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28287){
var self__ = this;
var G__28287__$1 = this;
return (new cljs.core.RecordIter((0),G__28287__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delegate","delegate",-1141883770)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(aero.core.Deferred.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(aero.core.Deferred.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new aero.core.Deferred(self__.delegate,self__.__meta,self__.__extmap,self__.__hash));
}));

(aero.core.Deferred.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(aero.core.Deferred.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2033037846 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(aero.core.Deferred.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28289,other28290){
var self__ = this;
var this28289__$1 = this;
return (((!((other28290 == null)))) && ((this28289__$1.constructor === other28290.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28289__$1.delegate,other28290.delegate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28289__$1.__extmap,other28290.__extmap)));
}));

(aero.core.Deferred.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delegate","delegate",-1141883770),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new aero.core.Deferred(self__.delegate,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(aero.core.Deferred.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__28287){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__28297 = cljs.core.keyword_identical_QMARK_;
var expr__28298 = k__4388__auto__;
if(cljs.core.truth_((pred__28297.cljs$core$IFn$_invoke$arity$2 ? pred__28297.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delegate","delegate",-1141883770),expr__28298) : pred__28297.call(null,new cljs.core.Keyword(null,"delegate","delegate",-1141883770),expr__28298)))){
return (new aero.core.Deferred(G__28287,self__.__meta,self__.__extmap,null));
} else {
return (new aero.core.Deferred(self__.delegate,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__28287),null));
}
}));

(aero.core.Deferred.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"delegate","delegate",-1141883770),self__.delegate,null))], null),self__.__extmap));
}));

(aero.core.Deferred.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__28287){
var self__ = this;
var this__4379__auto____$1 = this;
return (new aero.core.Deferred(self__.delegate,G__28287,self__.__extmap,self__.__hash));
}));

(aero.core.Deferred.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(aero.core.Deferred.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delegate","delegate",498647757,null)], null);
}));

(aero.core.Deferred.cljs$lang$type = true);

(aero.core.Deferred.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"aero.core/Deferred",null,(1),null));
}));

(aero.core.Deferred.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"aero.core/Deferred");
}));

/**
 * Positional factory function for aero.core/Deferred.
 */
aero.core.__GT_Deferred = (function aero$core$__GT_Deferred(delegate){
return (new aero.core.Deferred(delegate,null,null,null));
});

/**
 * Factory function for aero.core/Deferred, taking a map of keywords to field values.
 */
aero.core.map__GT_Deferred = (function aero$core$map__GT_Deferred(G__28291){
var extmap__4419__auto__ = (function (){var G__28300 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28291,new cljs.core.Keyword(null,"delegate","delegate",-1141883770));
if(cljs.core.record_QMARK_(G__28291)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28300);
} else {
return G__28300;
}
})();
return (new aero.core.Deferred(new cljs.core.Keyword(null,"delegate","delegate",-1141883770).cljs$core$IFn$_invoke$arity$1(G__28291),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


if((typeof aero !== 'undefined') && (typeof aero.core !== 'undefined') && (typeof aero.core.reader !== 'undefined')){
} else {
aero.core.reader = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28304 = cljs.core.get_global_hierarchy;
return (fexpr__28304.cljs$core$IFn$_invoke$arity$0 ? fexpr__28304.cljs$core$IFn$_invoke$arity$0() : fexpr__28304.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("aero.core","reader"),(function (opts,tag,value){
return tag;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}

aero.core.reader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,tag,value){
if(cljs.core.contains_QMARK_(cljs.tools.reader._STAR_data_readers_STAR_,tag)){
var fexpr__28305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader._STAR_data_readers_STAR_,tag);
return (fexpr__28305.cljs$core$IFn$_invoke$arity$1 ? fexpr__28305.cljs$core$IFn$_invoke$arity$1(value) : fexpr__28305.call(null,value));
} else {
if(cljs.core.contains_QMARK_(cljs.tools.reader.default_data_readers,tag)){
var fexpr__28306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.default_data_readers,tag);
return (fexpr__28306.cljs$core$IFn$_invoke$arity$1 ? fexpr__28306.cljs$core$IFn$_invoke$arity$1(value) : fexpr__28306.call(null,value));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(goog.string.format("No reader for tag %s",tag),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"value","value",305978217),value], null));

}
}
}));

aero.core.get_env = (function aero$core$get_env(s){
return goog.object.get(process.env,s);
});

aero.core.reader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"env","env",-175281708,null),(function (opts,tag,value){
return aero.core.get_env(value);
}));

aero.core.reader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"envf","envf",775926025,null),(function (opts,tag,value){
var vec__28307 = value;
var seq__28308 = cljs.core.seq(vec__28307);
var first__28309 = cljs.core.first(seq__28308);
var seq__28308__$1 = cljs.core.next(seq__28308);
var fmt = first__28309;
var args = seq__28308__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28301_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(aero.core.get_env(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28301_SHARP_)));
}),args));
}));

aero.core.reader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"prop","prop",1125363195,null),(function (opts,tag,value){
return null;
}));

aero.core.reader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"long","long",1469079434,null),(function (opts,tag,value){
return parseInt(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}));

aero.core.reader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"double","double",-1769548886,null),(function (opts,tag,value){
return parseFloat(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}));

aero.core.reader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),(function (opts,tag,value){
if((value instanceof cljs.core.Keyword)){
return value;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}
}));

aero.core.reader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),(function (opts,tag,value){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value).toLowerCase());
}));

aero.core.reader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"include","include",1793891757,null),(function (p__28310,tag,value){
var map__28311 = p__28310;
var map__28311__$1 = (((((!((map__28311 == null))))?(((((map__28311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28311):map__28311);
var opts = map__28311__$1;
var resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28311__$1,new cljs.core.Keyword(null,"resolver","resolver",-1740553583));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28311__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var G__28313 = ((cljs.core.map_QMARK_(resolver))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolver,value):(resolver.cljs$core$IFn$_invoke$arity$2 ? resolver.cljs$core$IFn$_invoke$arity$2(source,value) : resolver.call(null,source,value)));
var G__28314 = opts;
return (aero.core.read_config.cljs$core$IFn$_invoke$arity$2 ? aero.core.read_config.cljs$core$IFn$_invoke$arity$2(G__28313,G__28314) : aero.core.read_config.call(null,G__28313,G__28314));
}));

aero.core.reader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"join","join",881669637,null),(function (opts,tag,value){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
}));

aero.core.reader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"read-edn","read-edn",1205909879,null),(function (opts,tag,value){
var G__28315 = value;
var G__28315__$1 = (((G__28315 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28315));
if((G__28315__$1 == null)){
return null;
} else {
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(G__28315__$1);
}
}));

aero.core.reader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"merge","merge",-163787882,null),(function (opts,tag,values){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,values);
}));

aero.core.adaptive_resolver = (function aero$core$adaptive_resolver(source,include){
var fl = (cljs.core.truth_(module$node_modules$path_browserify$index.isAbsolute(include))?include:module$node_modules$path_browserify$index.join(source,"..",include));
if(cljs.core.truth_(shadow$empty.existsSync(fl))){
return fl;
} else {
return cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("aero","missing-include","aero/missing-include",-770063145),include], null)], 0)));
}
});

aero.core.default_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),aero.core.adaptive_resolver], null);

aero.core.realize_deferreds = (function aero$core$realize_deferreds(config){
return aero.impl.walk.postwalk((function (x){
if((x instanceof aero.core.Deferred)){
return cljs.core.deref(x.delegate);
} else {
return x;
}
}),config);
});

aero.core.ref_meta_to_tagged_literal = (function aero$core$ref_meta_to_tagged_literal(config){
return aero.impl.walk.postwalk((function (v){
if(cljs.core.tagged_literal_QMARK_(v)){
return cljs.core.tagged_literal(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(v),(function (){var G__28316 = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(v);
return (aero.core.ref_meta_to_tagged_literal.cljs$core$IFn$_invoke$arity$1 ? aero.core.ref_meta_to_tagged_literal.cljs$core$IFn$_invoke$arity$1(G__28316) : aero.core.ref_meta_to_tagged_literal.call(null,G__28316));
})());
} else {
if(cljs.core.contains_QMARK_(cljs.core.meta(v),new cljs.core.Keyword(null,"ref","ref",1289896967))){
return cljs.core.tagged_literal(new cljs.core.Symbol(null,"ref","ref",-1364538802,null),v);
} else {
return v;

}
}
}),config);
});

aero.core.read_pr_into_tagged_literal = (function aero$core$read_pr_into_tagged_literal(pr){
return aero.core.ref_meta_to_tagged_literal(cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),null,new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28317){
var vec__28318 = p__28317;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28318,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28318,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (p1__28302_SHARP_){
return cljs.core.tagged_literal(k,p1__28302_SHARP_);
})], null);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.tools.reader.default_data_readers,cljs.tools.reader._STAR_data_readers_STAR_], 0)))),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.tagged_literal], null),pr));
});

aero.core.read_config_into_tagged_literal = (function aero$core$read_config_into_tagged_literal(source){
return aero.core.read_pr_into_tagged_literal(((cljs.tools.reader.reader_types.source_logging_reader_QMARK_(source))?source:(((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.cljs$tools$reader$reader_types$Reader$))))?true:false):false))?cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(source):cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$3(shadow$empty.readFileSync(source,"utf-8"),(1),source)
)));
});

aero.core.rewrap = (function aero$core$rewrap(tl){
return (function (v){
return cljs.core.tagged_literal(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(tl),v);
});
});

aero.alpha.core.eval_tagged_literal.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tl,opts,env,ks){
var map__28322 = aero.alpha.core.expand(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(tl),opts,env,ks);
var map__28322__$1 = (((((!((map__28322 == null))))?(((((map__28322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28322):map__28322);
var expansion = map__28322__$1;
var incomplete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28322__$1,new cljs.core.Keyword("aero.core","incomplete?","aero.core/incomplete?",47307585));
if(cljs.core.truth_(incomplete_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(expansion,new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309),aero.core.rewrap(tl));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(expansion,new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309),(function (p1__28303_SHARP_){
return aero.core.reader.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(tl),p1__28303_SHARP_);
}));
}
}));

aero.alpha.core.eval_tagged_literal.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ref","ref",-1364538802,null),(function (tl,opts,env,ks){
var map__28324 = aero.alpha.core.expand(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(tl),opts,env,ks);
var map__28324__$1 = (((((!((map__28324 == null))))?(((((map__28324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28324):map__28324);
var expansion = map__28324__$1;
var incomplete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28324__$1,new cljs.core.Keyword("aero.core","incomplete?","aero.core/incomplete?",47307585));
var env__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28324__$1,new cljs.core.Keyword("aero.core","env","aero.core/env",440985465),env);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28324__$1,new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309));
var incomplete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28324__$1,new cljs.core.Keyword("aero.core","incomplete","aero.core/incomplete",1042748894));
if(cljs.core.truth_((function (){var or__4126__auto__ = incomplete_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (!(cljs.core.contains_QMARK_(env__$1,value)));
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expansion,new cljs.core.Keyword("aero.core","incomplete?","aero.core/incomplete?",47307585),true),new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309),aero.core.rewrap(tl)),new cljs.core.Keyword("aero.core","incomplete","aero.core/incomplete",1042748894),(function (){var or__4126__auto__ = incomplete;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("aero.core","path","aero.core/path",2086431276),cljs.core.pop(ks),new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309),tl], null);
}
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expansion,new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309),cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,value));
}
}));

aero.alpha.core.eval_tagged_literal.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"profile","profile",1094567653,null),(function (tl,opts,env,ks){
return aero.alpha.core.expand_case(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(opts),tl,opts,env,ks);
}));

aero.alpha.core.eval_tagged_literal.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"hostname","hostname",-548765836,null),(function (tl,p__28326,env,ks){
var map__28327 = p__28326;
var map__28327__$1 = (((((!((map__28327 == null))))?(((((map__28327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28327):map__28327);
var opts = map__28327__$1;
var hostname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28327__$1,new cljs.core.Keyword(null,"hostname","hostname",2105669933));
return aero.alpha.core.expand_case((function (){var or__4126__auto__ = hostname;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return module$node_modules$os_browserify$browser.hostname();
}
})(),tl,opts,env,ks);
}));

aero.alpha.core.eval_tagged_literal.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"user","user",-1122004413,null),(function (tl,p__28329,env,ks){
var map__28330 = p__28329;
var map__28330__$1 = (((((!((map__28330 == null))))?(((((map__28330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28330):map__28330);
var opts = map__28330__$1;
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28330__$1,new cljs.core.Keyword(null,"user","user",1532431356));
return aero.alpha.core.expand_case((function (){var or__4126__auto__ = user;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return aero.core.get_env("USER");
}
})(),tl,opts,env,ks);
}));

aero.alpha.core.eval_tagged_literal.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"or","or",1876275696,null),(function (tl,opts,env,ks){
var map__28332 = aero.alpha.core.expand_scalar_repeatedly(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(tl),opts,env,ks);
var map__28332__$1 = (((((!((map__28332 == null))))?(((((map__28332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28332):map__28332);
var expansion = map__28332__$1;
var incomplete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28332__$1,new cljs.core.Keyword("aero.core","incomplete?","aero.core/incomplete?",47307585));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28332__$1,new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309));
if(cljs.core.truth_(incomplete_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(expansion,new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309),aero.core.rewrap);
} else {
var G__28337 = value;
var vec__28338 = G__28337;
var seq__28339 = cljs.core.seq(vec__28338);
var first__28340 = cljs.core.first(seq__28339);
var seq__28339__$1 = cljs.core.next(seq__28339);
var x = first__28340;
var xs = seq__28339__$1;
var idx = (0);
var G__28337__$1 = G__28337;
var idx__$1 = idx;
while(true){
var vec__28346 = G__28337__$1;
var seq__28347 = cljs.core.seq(vec__28346);
var first__28348 = cljs.core.first(seq__28347);
var seq__28347__$1 = cljs.core.next(seq__28347);
var x__$1 = first__28348;
var xs__$1 = seq__28347__$1;
var idx__$2 = idx__$1;
var map__28349 = aero.alpha.core.expand(x__$1,opts,env,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,idx__$2));
var map__28349__$1 = (((((!((map__28349 == null))))?(((((map__28349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28349):map__28349);
var expansion__$1 = map__28349__$1;
var incomplete_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28349__$1,new cljs.core.Keyword("aero.core","incomplete?","aero.core/incomplete?",47307585));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28349__$1,new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309));
if(cljs.core.truth_(incomplete_QMARK___$1)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309),cljs.core.tagged_literal(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(tl),cljs.core.cons(value__$1,xs__$1)),new cljs.core.Keyword("aero.core","incomplete?","aero.core/incomplete?",47307585),true,new cljs.core.Keyword("aero.core","incomplete","aero.core/incomplete",1042748894),new cljs.core.Keyword("aero.core","incomplete","aero.core/incomplete",1042748894).cljs$core$IFn$_invoke$arity$1(expansion__$1)], null);
} else {
if(cljs.core.truth_(value__$1)){
return expansion__$1;
} else {
if(cljs.core.not(cljs.core.seq(xs__$1))){
return null;
} else {
var G__28391 = xs__$1;
var G__28392 = (idx__$2 + (1));
G__28337__$1 = G__28391;
idx__$1 = G__28392;
continue;

}
}
}
break;
}
}
}));

aero.core.assoc_in_kv_seq = (function aero$core$assoc_in_kv_seq(x,ks,v){
var vec__28351 = ks;
var seq__28352 = cljs.core.seq(vec__28351);
var first__28353 = cljs.core.first(seq__28352);
var seq__28352__$1 = cljs.core.next(seq__28352);
var k = first__28353;
var ks__$1 = seq__28352__$1;
var steps = ((cljs.core.tagged_literal_QMARK_(x))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(x)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(x)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("aero.alpha.core","reassemble","aero.alpha.core/reassemble",931927988,null),(function (this$,queue){
var map__28354 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,queue);
var map__28354__$1 = (((((!((map__28354 == null))))?(((((map__28354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28354):map__28354);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28354__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28354__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return cljs.core.tagged_literal(tag,form);
})], null)):aero.alpha.core.kv_seq(x));
return aero.alpha.core.reassemble(steps,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28356){
var vec__28357 = p__28356;
var stepk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28357,(0),null);
var stepv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28357,(1),null);
var kv = vec__28357;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(ks__$1),new cljs.core.Keyword("aero.core","k","aero.core/k",126232019))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stepk,k)))){
if(cljs.core.seq(ks__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stepk,(aero.core.assoc_in_kv_seq.cljs$core$IFn$_invoke$arity$3 ? aero.core.assoc_in_kv_seq.cljs$core$IFn$_invoke$arity$3(stepv,ks__$1,v) : aero.core.assoc_in_kv_seq.call(null,stepv,ks__$1,v))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stepk,v], null);
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(ks__$1),new cljs.core.Keyword("aero.core","k","aero.core/k",126232019))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stepk,k)))){
if(cljs.core.seq(cljs.core.rest(ks__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28360 = stepk;
var G__28361 = cljs.core.rest(ks__$1);
var G__28362 = v;
return (aero.core.assoc_in_kv_seq.cljs$core$IFn$_invoke$arity$3 ? aero.core.assoc_in_kv_seq.cljs$core$IFn$_invoke$arity$3(G__28360,G__28361,G__28362) : aero.core.assoc_in_kv_seq.call(null,G__28360,G__28361,G__28362));
})(),stepv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,stepv], null);
}
} else {
return kv;

}
}
}),steps));
});

aero.core.dissoc_in_kv_seq = (function aero$core$dissoc_in_kv_seq(x,ks){
var vec__28363 = ks;
var seq__28364 = cljs.core.seq(vec__28363);
var first__28365 = cljs.core.first(seq__28364);
var seq__28364__$1 = cljs.core.next(seq__28364);
var k = first__28365;
var ks__$1 = seq__28364__$1;
if(((cljs.core.not(cljs.core.seq(ks__$1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aero.core","k","aero.core/k",126232019)], null),ks__$1)))){
var steps = aero.alpha.core.kv_seq(x);
return aero.alpha.core.reassemble(steps,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__28366){
var vec__28367 = p__28366;
var stepk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28367,(0),null);
var stepv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28367,(1),null);
var kv = vec__28367;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stepk,k);
}),steps));
} else {
var steps = ((cljs.core.tagged_literal_QMARK_(x))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(x)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(x)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("aero.alpha.core","reassemble","aero.alpha.core/reassemble",931927988,null),(function (this$,queue){
var map__28370 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,queue);
var map__28370__$1 = (((((!((map__28370 == null))))?(((((map__28370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28370):map__28370);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28370__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28370__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return cljs.core.tagged_literal(tag,form);
})], null)):aero.alpha.core.kv_seq(x));
return aero.alpha.core.reassemble(steps,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28372){
var vec__28373 = p__28372;
var stepk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28373,(0),null);
var stepv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28373,(1),null);
var kv = vec__28373;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(ks__$1),new cljs.core.Keyword("aero.core","k","aero.core/k",126232019))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stepk,k)))){
if(cljs.core.seq(ks__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stepk,(aero.core.dissoc_in_kv_seq.cljs$core$IFn$_invoke$arity$2 ? aero.core.dissoc_in_kv_seq.cljs$core$IFn$_invoke$arity$2(stepv,ks__$1) : aero.core.dissoc_in_kv_seq.call(null,stepv,ks__$1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stepk,stepv], null);
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(ks__$1),new cljs.core.Keyword("aero.core","k","aero.core/k",126232019))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stepk,k)))){
if(cljs.core.seq(cljs.core.rest(ks__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28376 = stepk;
var G__28377 = cljs.core.rest(ks__$1);
return (aero.core.dissoc_in_kv_seq.cljs$core$IFn$_invoke$arity$2 ? aero.core.dissoc_in_kv_seq.cljs$core$IFn$_invoke$arity$2(G__28376,G__28377) : aero.core.dissoc_in_kv_seq.call(null,G__28376,G__28377));
})(),stepv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stepk,stepv], null);
}
} else {
return kv;

}
}
}),steps));
}
});

aero.core.resolve_tagged_literals = (function aero$core$resolve_tagged_literals(wrapped_config,opts){
var map__28378 = (function (){var attempts = (0);
var x = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309),wrapped_config,new cljs.core.Keyword("aero.core","incomplete?","aero.core/incomplete?",47307585),true], null);
while(true){
var map__28383 = aero.alpha.core.expand(new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309).cljs$core$IFn$_invoke$arity$1(x),opts,new cljs.core.Keyword("aero.core","env","aero.core/env",440985465).cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY),cljs.core.PersistentVector.EMPTY);
var map__28383__$1 = (((((!((map__28383 == null))))?(((((map__28383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28383):map__28383);
var expansion = map__28383__$1;
var incomplete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28383__$1,new cljs.core.Keyword("aero.core","incomplete","aero.core/incomplete",1042748894));
if(cljs.core.not(new cljs.core.Keyword("aero.core","incomplete?","aero.core/incomplete?",47307585).cljs$core$IFn$_invoke$arity$1(x))){
return expansion;
} else {
if((((attempts > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309).cljs$core$IFn$_invoke$arity$1(incomplete)),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))){
var _STAR_out_STAR__orig_val__28385_28405 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28386_28406 = cljs.core._STAR_out_STAR_;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28386_28406);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING: Unable to resolve",["\"",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309).cljs$core$IFn$_invoke$arity$1(incomplete)], 0)),"\""].join(''),"at",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("aero.core","path","aero.core/path",2086431276).cljs$core$IFn$_invoke$arity$1(incomplete)], 0))], 0));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28385_28405);
}
var G__28407 = (0);
var G__28408 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("aero.core","k","aero.core/k",126232019),cljs.core.last(new cljs.core.Keyword("aero.core","path","aero.core/path",2086431276).cljs$core$IFn$_invoke$arity$1(incomplete))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(expansion,new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309),aero.core.dissoc_in_kv_seq,new cljs.core.Keyword("aero.core","path","aero.core/path",2086431276).cljs$core$IFn$_invoke$arity$1(incomplete)):cljs.core.update.cljs$core$IFn$_invoke$arity$5(expansion,new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309),aero.core.assoc_in_kv_seq,new cljs.core.Keyword("aero.core","path","aero.core/path",2086431276).cljs$core$IFn$_invoke$arity$1(incomplete),null));
attempts = G__28407;
x = G__28408;
continue;
} else {
if((attempts > (1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Max attempts exhausted",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"progress","progress",244323547),x,new cljs.core.Keyword(null,"attempts","attempts",1024246729),attempts], null));
} else {
var G__28436 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,expansion))?(attempts + (1)):(0));
var G__28437 = expansion;
attempts = G__28436;
x = G__28437;
continue;

}
}
}
break;
}
})();
var map__28378__$1 = (((((!((map__28378 == null))))?(((((map__28378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28378):map__28378);
var expansion = map__28378__$1;
var incomplete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28378__$1,new cljs.core.Keyword("aero.core","incomplete?","aero.core/incomplete?",47307585));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28378__$1,new cljs.core.Keyword("aero.core","value","aero.core/value",1789458309));
if(cljs.core.truth_(incomplete_QMARK_)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Incomplete resolution",expansion);
} else {
return value;
}
});

/**
 * First argument is a string URL to the file. To read from the
 *   current directory just put the file name. To read from the classpath
 *   call clojure.java.io/resource on the string before passing it into
 *   this function.
 *   Optional second argument is a map that can include
 *   the following keys:
 *   :profile - indicates the profile to use for #profile extension
 *   :user - manually set the user for the #user extension
 *   :resolver - a function or map used to resolve includes.
 */
aero.core.read_config = (function aero$core$read_config(var_args){
var G__28389 = arguments.length;
switch (G__28389) {
case 2:
return aero.core.read_config.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return aero.core.read_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(aero.core.read_config.cljs$core$IFn$_invoke$arity$2 = (function (source,given_opts){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aero.core.default_opts,given_opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null)], 0));
var wrapped_config = aero.core.read_config_into_tagged_literal(source);
return aero.core.realize_deferreds(aero.core.resolve_tagged_literals(wrapped_config,opts));
}));

(aero.core.read_config.cljs$core$IFn$_invoke$arity$1 = (function (source){
return aero.core.read_config.cljs$core$IFn$_invoke$arity$2(source,cljs.core.PersistentArrayMap.EMPTY);
}));

(aero.core.read_config.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=aero.core.js.map
