"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=n(function(z,v){
function j(e,r,a,i,u,E){var t,s;if(e<=0)return i;for(t=E,s=0;s<e;s++)i[t]===r&&(i[t]=a),t+=u;return i}v.exports=j
});var o=n(function(A,f){
var m=require('@stdlib/strided-base-stride2offset/dist'),x=l();function R(e,r,a,i,u){return x(e,r,a,i,u,m(e,u))}f.exports=R
});var p=n(function(B,d){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=o(),O=l();_(c,"ndarray",O);d.exports=c
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=p(),q,y=g(b(__dirname,"./native.js"));h(y)?q=k:q=y;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
