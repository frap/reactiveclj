// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8957_8971 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8958_8972 = null;
var count__8959_8973 = (0);
var i__8960_8974 = (0);
while(true){
if((i__8960_8974 < count__8959_8973)){
var f_8975 = cljs.core._nth.call(null,chunk__8958_8972,i__8960_8974);
cljs.core.println.call(null,"  ",f_8975);

var G__8976 = seq__8957_8971;
var G__8977 = chunk__8958_8972;
var G__8978 = count__8959_8973;
var G__8979 = (i__8960_8974 + (1));
seq__8957_8971 = G__8976;
chunk__8958_8972 = G__8977;
count__8959_8973 = G__8978;
i__8960_8974 = G__8979;
continue;
} else {
var temp__4425__auto___8980 = cljs.core.seq.call(null,seq__8957_8971);
if(temp__4425__auto___8980){
var seq__8957_8981__$1 = temp__4425__auto___8980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8957_8981__$1)){
var c__8604__auto___8982 = cljs.core.chunk_first.call(null,seq__8957_8981__$1);
var G__8983 = cljs.core.chunk_rest.call(null,seq__8957_8981__$1);
var G__8984 = c__8604__auto___8982;
var G__8985 = cljs.core.count.call(null,c__8604__auto___8982);
var G__8986 = (0);
seq__8957_8971 = G__8983;
chunk__8958_8972 = G__8984;
count__8959_8973 = G__8985;
i__8960_8974 = G__8986;
continue;
} else {
var f_8987 = cljs.core.first.call(null,seq__8957_8981__$1);
cljs.core.println.call(null,"  ",f_8987);

var G__8988 = cljs.core.next.call(null,seq__8957_8981__$1);
var G__8989 = null;
var G__8990 = (0);
var G__8991 = (0);
seq__8957_8971 = G__8988;
chunk__8958_8972 = G__8989;
count__8959_8973 = G__8990;
i__8960_8974 = G__8991;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8992 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7801__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7801__auto__)){
return or__7801__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8992);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8992)))?cljs.core.second.call(null,arglists_8992):arglists_8992));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8961 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8962 = null;
var count__8963 = (0);
var i__8964 = (0);
while(true){
if((i__8964 < count__8963)){
var vec__8965 = cljs.core._nth.call(null,chunk__8962,i__8964);
var name = cljs.core.nth.call(null,vec__8965,(0),null);
var map__8966 = cljs.core.nth.call(null,vec__8965,(1),null);
var map__8966__$1 = ((((!((map__8966 == null)))?((((map__8966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8966):map__8966);
var doc = cljs.core.get.call(null,map__8966__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8966__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8993 = seq__8961;
var G__8994 = chunk__8962;
var G__8995 = count__8963;
var G__8996 = (i__8964 + (1));
seq__8961 = G__8993;
chunk__8962 = G__8994;
count__8963 = G__8995;
i__8964 = G__8996;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8961);
if(temp__4425__auto__){
var seq__8961__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8961__$1)){
var c__8604__auto__ = cljs.core.chunk_first.call(null,seq__8961__$1);
var G__8997 = cljs.core.chunk_rest.call(null,seq__8961__$1);
var G__8998 = c__8604__auto__;
var G__8999 = cljs.core.count.call(null,c__8604__auto__);
var G__9000 = (0);
seq__8961 = G__8997;
chunk__8962 = G__8998;
count__8963 = G__8999;
i__8964 = G__9000;
continue;
} else {
var vec__8968 = cljs.core.first.call(null,seq__8961__$1);
var name = cljs.core.nth.call(null,vec__8968,(0),null);
var map__8969 = cljs.core.nth.call(null,vec__8968,(1),null);
var map__8969__$1 = ((((!((map__8969 == null)))?((((map__8969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8969):map__8969);
var doc = cljs.core.get.call(null,map__8969__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8969__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9001 = cljs.core.next.call(null,seq__8961__$1);
var G__9002 = null;
var G__9003 = (0);
var G__9004 = (0);
seq__8961 = G__9001;
chunk__8962 = G__9002;
count__8963 = G__9003;
i__8964 = G__9004;
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
}
});

//# sourceMappingURL=repl.js.map