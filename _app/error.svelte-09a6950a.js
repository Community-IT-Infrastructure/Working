import{S as r,i as s,s as a,e as t,t as e,c as n,a as c,g as o,d as u,f,E as l,h as m,k as p,l as d,n as i,F as h}from"./chunks/vendor-686b029b.js";function E(r){let s,a,p=r[1].frame+"";return{c(){s=t("pre"),a=e(p)},l(r){s=n(r,"PRE",{});var t=c(s);a=o(t,p),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&p!==(p=r[1].frame+"")&&m(a,p)},d(r){r&&u(s)}}}function k(r){let s,a,p=r[1].stack+"";return{c(){s=t("pre"),a=e(p)},l(r){s=n(r,"PRE",{});var t=c(s);a=o(t,p),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&p!==(p=r[1].stack+"")&&m(a,p)},d(r){r&&u(s)}}}function v(r){let s,a,v,g,P,R,b,x,N=r[1].message+"",$=r[1].frame&&E(r),j=r[1].stack&&k(r);return{c(){s=t("h1"),a=e(r[0]),v=p(),g=t("pre"),P=e(N),R=p(),$&&$.c(),b=p(),j&&j.c(),x=d()},l(t){s=n(t,"H1",{});var e=c(s);a=o(e,r[0]),e.forEach(u),v=i(t),g=n(t,"PRE",{});var f=c(g);P=o(f,N),f.forEach(u),R=i(t),$&&$.l(t),b=i(t),j&&j.l(t),x=d()},m(r,t){f(r,s,t),l(s,a),f(r,v,t),f(r,g,t),l(g,P),f(r,R,t),$&&$.m(r,t),f(r,b,t),j&&j.m(r,t),f(r,x,t)},p(r,[s]){1&s&&m(a,r[0]),2&s&&N!==(N=r[1].message+"")&&m(P,N),r[1].frame?$?$.p(r,s):($=E(r),$.c(),$.m(b.parentNode,b)):$&&($.d(1),$=null),r[1].stack?j?j.p(r,s):(j=k(r),j.c(),j.m(x.parentNode,x)):j&&(j.d(1),j=null)},i:h,o:h,d(r){r&&u(s),r&&u(v),r&&u(g),r&&u(R),$&&$.d(r),r&&u(b),j&&j.d(r),r&&u(x)}}}function g({error:r,status:s}){return{props:{error:r,status:s}}}function P(r,s,a){let{status:t}=s,{error:e}=s;return r.$$set=r=>{"status"in r&&a(0,t=r.status),"error"in r&&a(1,e=r.error)},[t,e]}class R extends r{constructor(r){super(),s(this,r,P,v,a,{status:0,error:1})}}export{R as default,g as load};
