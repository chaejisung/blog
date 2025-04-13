import{r as n}from"./index.BVOCwoKb.js";var m={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f;function E(){if(f)return c;f=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(r,e,t){var u=null;if(t!==void 0&&(u=""+t),e.key!==void 0&&(u=""+e.key),"key"in e){t={};for(var o in e)o!=="key"&&(t[o]=e[o])}else t=e;return e=t.ref,{$$typeof:l,type:r,key:u,ref:e!==void 0?e:null,props:t}}return c.Fragment=i,c.jsx=s,c.jsxs=s,c}var R;function S(){return R||(R=1,m.exports=E()),m.exports}var g=S();const v=["Web Development","Server Development","Computer Systems","Python Programming Language","Java Programming Language"];function F(){const[l,i]=n.useState(""),s=n.useRef(0),r=n.useRef(0),e=n.useRef(!1),t=n.useRef(0),u=n.useRef(0);return n.useEffect(()=>{const p=a=>{const d=a-t.current;if(a<u.current){requestAnimationFrame(p);return}const x=v[s.current];!e.current&&d>100?(i(x.slice(0,r.current+1)),r.current++,t.current=a,r.current===x.length&&(e.current=!0,u.current=a+1e3)):e.current&&d>50&&(i(x.slice(0,r.current-1)),r.current--,t.current=a,r.current===0&&(e.current=!1,s.current=(s.current+1)%v.length)),requestAnimationFrame(p)},T=requestAnimationFrame(p);return()=>cancelAnimationFrame(T)},[]),g.jsxs("span",{className:"typing-text",children:[l,"|"]})}export{F as default};
