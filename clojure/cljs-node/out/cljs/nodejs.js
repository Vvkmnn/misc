// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29__i = 0, G__29__a = new Array(arguments.length -  0);
while (G__29__i < G__29__a.length) {G__29__a[G__29__i] = arguments[G__29__i + 0]; ++G__29__i;}
  args = new cljs.core.IndexedSeq(G__29__a,0,null);
} 
return G__28__delegate.call(this,args);};
G__28.cljs$lang$maxFixedArity = 0;
G__28.cljs$lang$applyTo = (function (arglist__30){
var args = cljs.core.seq(arglist__30);
return G__28__delegate(args);
});
G__28.cljs$core$IFn$_invoke$arity$variadic = G__28__delegate;
return G__28;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32__i = 0, G__32__a = new Array(arguments.length -  0);
while (G__32__i < G__32__a.length) {G__32__a[G__32__i] = arguments[G__32__i + 0]; ++G__32__i;}
  args = new cljs.core.IndexedSeq(G__32__a,0,null);
} 
return G__31__delegate.call(this,args);};
G__31.cljs$lang$maxFixedArity = 0;
G__31.cljs$lang$applyTo = (function (arglist__33){
var args = cljs.core.seq(arglist__33);
return G__31__delegate(args);
});
G__31.cljs$core$IFn$_invoke$arity$variadic = G__31__delegate;
return G__31;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map
