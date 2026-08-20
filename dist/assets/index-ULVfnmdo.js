(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function Mv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ih={exports:{}},Ia={},rh={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function j_(){if(X0)return St;X0=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(G){return G===null||typeof G!="object"?null:(G=v&&G[v]||G["@@iterator"],typeof G=="function"?G:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function x(G,J,Ue){this.props=G,this.context=J,this.refs=b,this.updater=Ue||_}x.prototype.isReactComponent={},x.prototype.setState=function(G,J){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,J,"setState")},x.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function S(){}S.prototype=x.prototype;function P(G,J,Ue){this.props=G,this.context=J,this.refs=b,this.updater=Ue||_}var L=P.prototype=new S;L.constructor=P,M(L,x.prototype),L.isPureReactComponent=!0;var C=Array.isArray,D=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(G,J,Ue){var Ke,Ge={},le=null,xe=null;if(J!=null)for(Ke in J.ref!==void 0&&(xe=J.ref),J.key!==void 0&&(le=""+J.key),J)D.call(J,Ke)&&!O.hasOwnProperty(Ke)&&(Ge[Ke]=J[Ke]);var me=arguments.length-2;if(me===1)Ge.children=Ue;else if(1<me){for(var Oe=Array(me),nt=0;nt<me;nt++)Oe[nt]=arguments[nt+2];Ge.children=Oe}if(G&&G.defaultProps)for(Ke in me=G.defaultProps,me)Ge[Ke]===void 0&&(Ge[Ke]=me[Ke]);return{$$typeof:o,type:G,key:le,ref:xe,props:Ge,_owner:I.current}}function R(G,J){return{$$typeof:o,type:G.type,key:J,ref:G.ref,props:G.props,_owner:G._owner}}function F(G){return typeof G=="object"&&G!==null&&G.$$typeof===o}function B(G){var J={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(Ue){return J[Ue]})}var z=/\/+/g;function K(G,J){return typeof G=="object"&&G!==null&&G.key!=null?B(""+G.key):J.toString(36)}function te(G,J,Ue,Ke,Ge){var le=typeof G;(le==="undefined"||le==="boolean")&&(G=null);var xe=!1;if(G===null)xe=!0;else switch(le){case"string":case"number":xe=!0;break;case"object":switch(G.$$typeof){case o:case e:xe=!0}}if(xe)return xe=G,Ge=Ge(xe),G=Ke===""?"."+K(xe,0):Ke,C(Ge)?(Ue="",G!=null&&(Ue=G.replace(z,"$&/")+"/"),te(Ge,J,Ue,"",function(nt){return nt})):Ge!=null&&(F(Ge)&&(Ge=R(Ge,Ue+(!Ge.key||xe&&xe.key===Ge.key?"":(""+Ge.key).replace(z,"$&/")+"/")+G)),J.push(Ge)),1;if(xe=0,Ke=Ke===""?".":Ke+":",C(G))for(var me=0;me<G.length;me++){le=G[me];var Oe=Ke+K(le,me);xe+=te(le,J,Ue,Oe,Ge)}else if(Oe=g(G),typeof Oe=="function")for(G=Oe.call(G),me=0;!(le=G.next()).done;)le=le.value,Oe=Ke+K(le,me++),xe+=te(le,J,Ue,Oe,Ge);else if(le==="object")throw J=String(G),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return xe}function Y(G,J,Ue){if(G==null)return G;var Ke=[],Ge=0;return te(G,Ke,"","",function(le){return J.call(Ue,le,Ge++)}),Ke}function ae(G){if(G._status===-1){var J=G._result;J=J(),J.then(function(Ue){(G._status===0||G._status===-1)&&(G._status=1,G._result=Ue)},function(Ue){(G._status===0||G._status===-1)&&(G._status=2,G._result=Ue)}),G._status===-1&&(G._status=0,G._result=J)}if(G._status===1)return G._result.default;throw G._result}var Z={current:null},$={transition:null},se={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:$,ReactCurrentOwner:I};function de(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:Y,forEach:function(G,J,Ue){Y(G,function(){J.apply(this,arguments)},Ue)},count:function(G){var J=0;return Y(G,function(){J++}),J},toArray:function(G){return Y(G,function(J){return J})||[]},only:function(G){if(!F(G))throw Error("React.Children.only expected to receive a single React element child.");return G}},St.Component=x,St.Fragment=t,St.Profiler=s,St.PureComponent=P,St.StrictMode=i,St.Suspense=h,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,St.act=de,St.cloneElement=function(G,J,Ue){if(G==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+G+".");var Ke=M({},G.props),Ge=G.key,le=G.ref,xe=G._owner;if(J!=null){if(J.ref!==void 0&&(le=J.ref,xe=I.current),J.key!==void 0&&(Ge=""+J.key),G.type&&G.type.defaultProps)var me=G.type.defaultProps;for(Oe in J)D.call(J,Oe)&&!O.hasOwnProperty(Oe)&&(Ke[Oe]=J[Oe]===void 0&&me!==void 0?me[Oe]:J[Oe])}var Oe=arguments.length-2;if(Oe===1)Ke.children=Ue;else if(1<Oe){me=Array(Oe);for(var nt=0;nt<Oe;nt++)me[nt]=arguments[nt+2];Ke.children=me}return{$$typeof:o,type:G.type,key:Ge,ref:le,props:Ke,_owner:xe}},St.createContext=function(G){return G={$$typeof:c,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},G.Provider={$$typeof:a,_context:G},G.Consumer=G},St.createElement=w,St.createFactory=function(G){var J=w.bind(null,G);return J.type=G,J},St.createRef=function(){return{current:null}},St.forwardRef=function(G){return{$$typeof:u,render:G}},St.isValidElement=F,St.lazy=function(G){return{$$typeof:p,_payload:{_status:-1,_result:G},_init:ae}},St.memo=function(G,J){return{$$typeof:f,type:G,compare:J===void 0?null:J}},St.startTransition=function(G){var J=$.transition;$.transition={};try{G()}finally{$.transition=J}},St.unstable_act=de,St.useCallback=function(G,J){return Z.current.useCallback(G,J)},St.useContext=function(G){return Z.current.useContext(G)},St.useDebugValue=function(){},St.useDeferredValue=function(G){return Z.current.useDeferredValue(G)},St.useEffect=function(G,J){return Z.current.useEffect(G,J)},St.useId=function(){return Z.current.useId()},St.useImperativeHandle=function(G,J,Ue){return Z.current.useImperativeHandle(G,J,Ue)},St.useInsertionEffect=function(G,J){return Z.current.useInsertionEffect(G,J)},St.useLayoutEffect=function(G,J){return Z.current.useLayoutEffect(G,J)},St.useMemo=function(G,J){return Z.current.useMemo(G,J)},St.useReducer=function(G,J,Ue){return Z.current.useReducer(G,J,Ue)},St.useRef=function(G){return Z.current.useRef(G)},St.useState=function(G){return Z.current.useState(G)},St.useSyncExternalStore=function(G,J,Ue){return Z.current.useSyncExternalStore(G,J,Ue)},St.useTransition=function(){return Z.current.useTransition()},St.version="18.3.1",St}var j0;function qf(){return j0||(j0=1,rh.exports=j_()),rh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function Y_(){if(Y0)return Ia;Y0=1;var o=qf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,f){var p,v={},g=null,_=null;f!==void 0&&(g=""+f),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(_=h.ref);for(p in h)i.call(h,p)&&!a.hasOwnProperty(p)&&(v[p]=h[p]);if(u&&u.defaultProps)for(p in h=u.defaultProps,h)v[p]===void 0&&(v[p]=h[p]);return{$$typeof:e,type:u,key:g,ref:_,props:v,_owner:s.current}}return Ia.Fragment=t,Ia.jsx=c,Ia.jsxs=c,Ia}var q0;function q_(){return q0||(q0=1,ih.exports=Y_()),ih.exports}var E=q_(),rc={},sh={exports:{}},ri={},oh={exports:{}},ah={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function $_(){return $0||($0=1,(function(o){function e($,se){var de=$.length;$.push(se);e:for(;0<de;){var G=de-1>>>1,J=$[G];if(0<s(J,se))$[G]=se,$[de]=J,de=G;else break e}}function t($){return $.length===0?null:$[0]}function i($){if($.length===0)return null;var se=$[0],de=$.pop();if(de!==se){$[0]=de;e:for(var G=0,J=$.length,Ue=J>>>1;G<Ue;){var Ke=2*(G+1)-1,Ge=$[Ke],le=Ke+1,xe=$[le];if(0>s(Ge,de))le<J&&0>s(xe,Ge)?($[G]=xe,$[le]=de,G=le):($[G]=Ge,$[Ke]=de,G=Ke);else if(le<J&&0>s(xe,de))$[G]=xe,$[le]=de,G=le;else break e}}return se}function s($,se){var de=$.sortIndex-se.sortIndex;return de!==0?de:$.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var h=[],f=[],p=1,v=null,g=3,_=!1,M=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L($){for(var se=t(f);se!==null;){if(se.callback===null)i(f);else if(se.startTime<=$)i(f),se.sortIndex=se.expirationTime,e(h,se);else break;se=t(f)}}function C($){if(b=!1,L($),!M)if(t(h)!==null)M=!0,ae(D);else{var se=t(f);se!==null&&Z(C,se.startTime-$)}}function D($,se){M=!1,b&&(b=!1,S(w),w=-1),_=!0;var de=g;try{for(L(se),v=t(h);v!==null&&(!(v.expirationTime>se)||$&&!B());){var G=v.callback;if(typeof G=="function"){v.callback=null,g=v.priorityLevel;var J=G(v.expirationTime<=se);se=o.unstable_now(),typeof J=="function"?v.callback=J:v===t(h)&&i(h),L(se)}else i(h);v=t(h)}if(v!==null)var Ue=!0;else{var Ke=t(f);Ke!==null&&Z(C,Ke.startTime-se),Ue=!1}return Ue}finally{v=null,g=de,_=!1}}var I=!1,O=null,w=-1,R=5,F=-1;function B(){return!(o.unstable_now()-F<R)}function z(){if(O!==null){var $=o.unstable_now();F=$;var se=!0;try{se=O(!0,$)}finally{se?K():(I=!1,O=null)}}else I=!1}var K;if(typeof P=="function")K=function(){P(z)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,Y=te.port2;te.port1.onmessage=z,K=function(){Y.postMessage(null)}}else K=function(){x(z,0)};function ae($){O=$,I||(I=!0,K())}function Z($,se){w=x(function(){$(o.unstable_now())},se)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function($){$.callback=null},o.unstable_continueExecution=function(){M||_||(M=!0,ae(D))},o.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_getFirstCallbackNode=function(){return t(h)},o.unstable_next=function($){switch(g){case 1:case 2:case 3:var se=3;break;default:se=g}var de=g;g=se;try{return $()}finally{g=de}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function($,se){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var de=g;g=$;try{return se()}finally{g=de}},o.unstable_scheduleCallback=function($,se,de){var G=o.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?G+de:G):de=G,$){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=de+J,$={id:p++,callback:se,priorityLevel:$,startTime:de,expirationTime:J,sortIndex:-1},de>G?($.sortIndex=de,e(f,$),t(h)===null&&$===t(f)&&(b?(S(w),w=-1):b=!0,Z(C,de-G))):($.sortIndex=J,e(h,$),M||_||(M=!0,ae(D))),$},o.unstable_shouldYield=B,o.unstable_wrapCallback=function($){var se=g;return function(){var de=g;g=se;try{return $.apply(this,arguments)}finally{g=de}}}})(ah)),ah}var K0;function K_(){return K0||(K0=1,oh.exports=$_()),oh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function Z_(){if(Z0)return ri;Z0=1;var o=qf(),e=K_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(n){return h.call(v,n)?!0:h.call(p,n)?!1:f.test(n)?v[n]=!0:(p[n]=!0,!1)}function _(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,d){if(r===null||typeof r>"u"||_(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function b(n,r,l,d,m,y,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=y,this.removeEmptyString=A}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];x[r]=new b(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,P);x[r]=new b(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,P);x[r]=new b(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,P);x[r]=new b(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,d){var m=x.hasOwnProperty(r)?x[r]:null;(m!==null?m.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,m,d)&&(l=null),d||m===null?g(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,d=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),B=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),$=Symbol.iterator;function se(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var de=Object.assign,G;function J(n){if(G===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);G=r&&r[1]||""}return`
`+G+n}var Ue=!1;function Ke(n,r){if(!n||Ue)return"";Ue=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ue){var d=ue}Reflect.construct(n,[],r)}else{try{r.call()}catch(ue){d=ue}n.call(r.prototype)}else{try{throw Error()}catch(ue){d=ue}n()}}catch(ue){if(ue&&d&&typeof ue.stack=="string"){for(var m=ue.stack.split(`
`),y=d.stack.split(`
`),A=m.length-1,k=y.length-1;1<=A&&0<=k&&m[A]!==y[k];)k--;for(;1<=A&&0<=k;A--,k--)if(m[A]!==y[k]){if(A!==1||k!==1)do if(A--,k--,0>k||m[A]!==y[k]){var H=`
`+m[A].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=A&&0<=k);break}}}finally{Ue=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?J(n):""}function Ge(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Ke(n.type,!1),n;case 11:return n=Ke(n.type.render,!1),n;case 1:return n=Ke(n.type,!0),n;default:return""}}function le(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case R:return"Profiler";case w:return"StrictMode";case K:return"Suspense";case te:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case F:return(n._context.displayName||"Context")+".Provider";case z:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return r=n.displayName||null,r!==null?r:le(n.type)||"Memo";case ae:r=n._payload,n=n._init;try{return le(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function nt(n){var r=Oe(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,y=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(A){d=""+A,y.call(this,A)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(A){d=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function it(n){n._valueTracker||(n._valueTracker=nt(n))}function Jt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=Oe(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ut(n,r){var l=r.checked;return de({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function bt(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=me(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Mt(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function en(n,r){Mt(n,r);var l=me(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?dn(n,r.type,l):r.hasOwnProperty("defaultValue")&&dn(n,r.type,me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function un(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function dn(n,r,l){(r!=="number"||pt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var sn=Array.isArray;function Gt(n,r,l,d){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&d&&(n[l].defaultSelected=!0)}else{for(l=""+me(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,d&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function tn(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return de({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function j(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(sn(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:me(l)}}function Pn(n,r){var l=me(r.value),d=me(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function It(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function T(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?U(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Q,oe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function he(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Re.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ee[r]=Ee[n]})});function fe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+r).trim():r+"px"}function ge(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,m=fe(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,m):n[l]=m}}var Ne=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,r){if(r){if(Ne[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ie(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function Je(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rt=null,at=null,W=null;function Ae(n){if(n=va(n)){if(typeof rt!="function")throw Error(t(280));var r=n.stateNode;r&&(r=_l(r),rt(n.stateNode,n.type,r))}}function pe(n){at?W?W.push(n):W=[n]:at=n}function Pe(){if(at){var n=at,r=W;if(W=at=null,Ae(n),r)for(n=0;n<r.length;n++)Ae(r[n])}}function Le(n,r){return n(r)}function ve(){}var Xe=!1;function Ve(n,r,l){if(Xe)return n(r,l);Xe=!0;try{return Le(n,r,l)}finally{Xe=!1,(at!==null||W!==null)&&(ve(),Pe())}}function Xt(n,r){var l=n.stateNode;if(l===null)return null;var d=_l(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ft=!1;if(u)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Ft=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Ft=!1}function _i(n,r,l,d,m,y,A,k,H){var ue=Array.prototype.slice.call(arguments,3);try{r.apply(l,ue)}catch(ye){this.onError(ye)}}var rs=!1,Hs=null,ss=!1,os=null,bu={onError:function(n){rs=!0,Hs=n}};function tl(n,r,l,d,m,y,A,k,H){rs=!1,Hs=null,_i.apply(bu,arguments)}function nl(n,r,l,d,m,y,A,k,H){if(tl.apply(this,arguments),rs){if(rs){var ue=Hs;rs=!1,Hs=null}else throw Error(t(198));ss||(ss=!0,os=ue)}}function Wn(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ws(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Zo(n){if(Wn(n)!==n)throw Error(t(188))}function il(n){var r=n.alternate;if(!r){if(r=Wn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var m=l.return;if(m===null)break;var y=m.alternate;if(y===null){if(d=m.return,d!==null){l=d;continue}break}if(m.child===y.child){for(y=m.child;y;){if(y===l)return Zo(m),n;if(y===d)return Zo(m),r;y=y.sibling}throw Error(t(188))}if(l.return!==d.return)l=m,d=y;else{for(var A=!1,k=m.child;k;){if(k===l){A=!0,l=m,d=y;break}if(k===d){A=!0,d=m,l=y;break}k=k.sibling}if(!A){for(k=y.child;k;){if(k===l){A=!0,l=y,d=m;break}if(k===d){A=!0,d=y,l=m;break}k=k.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function as(n){return n=il(n),n!==null?Qo(n):null}function Qo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Qo(n);if(r!==null)return r;n=n.sibling}return null}var ls=e.unstable_scheduleCallback,Jo=e.unstable_cancelCallback,rl=e.unstable_shouldYield,Au=e.unstable_requestPaint,on=e.unstable_now,Cu=e.unstable_getCurrentPriorityLevel,ea=e.unstable_ImmediatePriority,N=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,ce=e.unstable_LowPriority,ie=e.unstable_IdlePriority,ne=null,be=null;function Be(n){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}}var we=Math.clz32?Math.clz32:dt,je=Math.log,Qe=Math.LN2;function dt(n){return n>>>=0,n===0?32:31-(je(n)/Qe|0)|0}var ht=64,$e=4194304;function At(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qt(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,m=n.suspendedLanes,y=n.pingedLanes,A=l&268435455;if(A!==0){var k=A&~m;k!==0?d=At(k):(y&=A,y!==0&&(d=At(y)))}else A=l&~m,A!==0?d=At(A):y!==0&&(d=At(y));if(d===0)return 0;if(r!==0&&r!==d&&(r&m)===0&&(m=d&-d,y=r&-r,m>=y||m===16&&(y&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-we(r),m=1<<l,d|=n[l],r&=~m;return d}function nn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,m=n.expirationTimes,y=n.pendingLanes;0<y;){var A=31-we(y),k=1<<A,H=m[A];H===-1?((k&l)===0||(k&d)!==0)&&(m[A]=nn(k,r)):H<=r&&(n.expiredLanes|=k),y&=~k}}function xn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Fe(){var n=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),n}function Nn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function xt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-we(r),n[r]=l}function Zn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-we(l),y=1<<m;r[m]=0,d[m]=-1,n[m]=-1,l&=~y}}function Qn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-we(l),m=1<<d;m&r|n[d]&r&&(n[d]|=r),l&=~m}}var yt=0;function sr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var kt,Kt,Ni,Ht,Ii,ji=!1,cs=[],Cr=null,Rr=null,Pr=null,ta=new Map,na=new Map,Nr=[],px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(n,r){switch(n){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ta.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(r.pointerId)}}function ia(n,r,l,d,m,y){return n===null||n.nativeEvent!==y?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:y,targetContainers:[m]},r!==null&&(r=va(r),r!==null&&Kt(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function mx(n,r,l,d,m){switch(r){case"focusin":return Cr=ia(Cr,n,r,l,d,m),!0;case"dragenter":return Rr=ia(Rr,n,r,l,d,m),!0;case"mouseover":return Pr=ia(Pr,n,r,l,d,m),!0;case"pointerover":var y=m.pointerId;return ta.set(y,ia(ta.get(y)||null,n,r,l,d,m)),!0;case"gotpointercapture":return y=m.pointerId,na.set(y,ia(na.get(y)||null,n,r,l,d,m)),!0}return!1}function Rp(n){var r=us(n.target);if(r!==null){var l=Wn(r);if(l!==null){if(r=l.tag,r===13){if(r=Ws(l),r!==null){n.blockedOn=r,Ii(n.priority,function(){Ni(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Pu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Ce=d,l.target.dispatchEvent(d),Ce=null}else return r=va(l),r!==null&&Kt(r),n.blockedOn=l,!1;r.shift()}return!0}function Pp(n,r,l){sl(n)&&l.delete(r)}function gx(){ji=!1,Cr!==null&&sl(Cr)&&(Cr=null),Rr!==null&&sl(Rr)&&(Rr=null),Pr!==null&&sl(Pr)&&(Pr=null),ta.forEach(Pp),na.forEach(Pp)}function ra(n,r){n.blockedOn===r&&(n.blockedOn=null,ji||(ji=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gx)))}function sa(n){function r(m){return ra(m,n)}if(0<cs.length){ra(cs[0],n);for(var l=1;l<cs.length;l++){var d=cs[l];d.blockedOn===n&&(d.blockedOn=null)}}for(Cr!==null&&ra(Cr,n),Rr!==null&&ra(Rr,n),Pr!==null&&ra(Pr,n),ta.forEach(r),na.forEach(r),l=0;l<Nr.length;l++)d=Nr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<Nr.length&&(l=Nr[0],l.blockedOn===null);)Rp(l),l.blockedOn===null&&Nr.shift()}var Xs=C.ReactCurrentBatchConfig,ol=!0;function vx(n,r,l,d){var m=yt,y=Xs.transition;Xs.transition=null;try{yt=1,Ru(n,r,l,d)}finally{yt=m,Xs.transition=y}}function xx(n,r,l,d){var m=yt,y=Xs.transition;Xs.transition=null;try{yt=4,Ru(n,r,l,d)}finally{yt=m,Xs.transition=y}}function Ru(n,r,l,d){if(ol){var m=Pu(n,r,l,d);if(m===null)Yu(n,r,d,al,l),Cp(n,d);else if(mx(m,n,r,l,d))d.stopPropagation();else if(Cp(n,d),r&4&&-1<px.indexOf(n)){for(;m!==null;){var y=va(m);if(y!==null&&kt(y),y=Pu(n,r,l,d),y===null&&Yu(n,r,d,al,l),y===m)break;m=y}m!==null&&d.stopPropagation()}else Yu(n,r,d,null,l)}}var al=null;function Pu(n,r,l,d){if(al=null,n=Je(d),n=us(n),n!==null)if(r=Wn(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ws(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return al=n,null}function Np(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cu()){case ea:return 1;case N:return 4;case q:case ce:return 16;case ie:return 536870912;default:return 16}default:return 16}}var Ir=null,Nu=null,ll=null;function Ip(){if(ll)return ll;var n,r=Nu,l=r.length,d,m="value"in Ir?Ir.value:Ir.textContent,y=m.length;for(n=0;n<l&&r[n]===m[n];n++);var A=l-n;for(d=1;d<=A&&r[l-d]===m[y-d];d++);return ll=m.slice(n,1<d?1-d:void 0)}function cl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ul(){return!0}function Lp(){return!1}function li(n){function r(l,d,m,y,A){this._reactName=l,this._targetInst=m,this.type=d,this.nativeEvent=y,this.target=A,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(l=n[k],this[k]=l?l(y):y[k]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?ul:Lp,this.isPropagationStopped=Lp,this}return de(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),r}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=li(js),oa=de({},js,{view:0,detail:0}),_x=li(oa),Lu,Du,aa,dl=de({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==aa&&(aa&&n.type==="mousemove"?(Lu=n.screenX-aa.screenX,Du=n.screenY-aa.screenY):Du=Lu=0,aa=n),Lu)},movementY:function(n){return"movementY"in n?n.movementY:Du}}),Dp=li(dl),yx=de({},dl,{dataTransfer:0}),Sx=li(yx),Mx=de({},oa,{relatedTarget:0}),Uu=li(Mx),Ex=de({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),Tx=li(Ex),wx=de({},js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),bx=li(wx),Ax=de({},js,{data:0}),Up=li(Ax),Cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Px[n])?!!r[n]:!1}function Ou(){return Nx}var Ix=de({},oa,{key:function(n){if(n.key){var r=Cx[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=cl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Rx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(n){return n.type==="keypress"?cl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?cl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Lx=li(Ix),Dx=de({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=li(Dx),Ux=de({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),Ox=li(Ux),Fx=de({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=li(Fx),Bx=de({},dl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=li(Bx),Gx=[9,13,27,32],Fu=u&&"CompositionEvent"in window,la=null;u&&"documentMode"in document&&(la=document.documentMode);var Vx=u&&"TextEvent"in window&&!la,Fp=u&&(!Fu||la&&8<la&&11>=la),kp=" ",Bp=!1;function zp(n,r){switch(n){case"keyup":return Gx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ys=!1;function Hx(n,r){switch(n){case"compositionend":return Gp(r);case"keypress":return r.which!==32?null:(Bp=!0,kp);case"textInput":return n=r.data,n===kp&&Bp?null:n;default:return null}}function Wx(n,r){if(Ys)return n==="compositionend"||!Fu&&zp(n,r)?(n=Ip(),ll=Nu=Ir=null,Ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fp&&r.locale!=="ko"?null:r.data;default:return null}}var Xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Xx[n.type]:r==="textarea"}function Hp(n,r,l,d){pe(d),r=gl(r,"onChange"),0<r.length&&(l=new Iu("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var ca=null,ua=null;function jx(n){am(n,0)}function hl(n){var r=Qs(n);if(Jt(r))return n}function Yx(n,r){if(n==="change")return r}var Wp=!1;if(u){var ku;if(u){var Bu="oninput"in document;if(!Bu){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Bu=typeof Xp.oninput=="function"}ku=Bu}else ku=!1;Wp=ku&&(!document.documentMode||9<document.documentMode)}function jp(){ca&&(ca.detachEvent("onpropertychange",Yp),ua=ca=null)}function Yp(n){if(n.propertyName==="value"&&hl(ua)){var r=[];Hp(r,ua,n,Je(n)),Ve(jx,r)}}function qx(n,r,l){n==="focusin"?(jp(),ca=r,ua=l,ca.attachEvent("onpropertychange",Yp)):n==="focusout"&&jp()}function $x(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hl(ua)}function Kx(n,r){if(n==="click")return hl(r)}function Zx(n,r){if(n==="input"||n==="change")return hl(r)}function Qx(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Li=typeof Object.is=="function"?Object.is:Qx;function da(n,r){if(Li(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var m=l[d];if(!h.call(r,m)||!Li(n[m],r[m]))return!1}return!0}function qp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $p(n,r){var l=qp(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=qp(l)}}function Kp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Kp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Zp(){for(var n=window,r=pt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=pt(n.document)}return r}function zu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Jx(n){var r=Zp(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Kp(l.ownerDocument.documentElement,l)){if(d!==null&&zu(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,y=Math.min(d.start,m);d=d.end===void 0?y:Math.min(d.end,m),!n.extend&&y>d&&(m=d,d=y,y=m),m=$p(l,y);var A=$p(l,d);m&&A&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),y>d?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var e_=u&&"documentMode"in document&&11>=document.documentMode,qs=null,Gu=null,ha=null,Vu=!1;function Qp(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Vu||qs==null||qs!==pt(d)||(d=qs,"selectionStart"in d&&zu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),ha&&da(ha,d)||(ha=d,d=gl(Gu,"onSelect"),0<d.length&&(r=new Iu("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=qs)))}function fl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var $s={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},Hu={},Jp={};u&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function pl(n){if(Hu[n])return Hu[n];if(!$s[n])return n;var r=$s[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Jp)return Hu[n]=r[l];return n}var em=pl("animationend"),tm=pl("animationiteration"),nm=pl("animationstart"),im=pl("transitionend"),rm=new Map,sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(n,r){rm.set(n,r),a(r,[n])}for(var Wu=0;Wu<sm.length;Wu++){var Xu=sm[Wu],t_=Xu.toLowerCase(),n_=Xu[0].toUpperCase()+Xu.slice(1);Lr(t_,"on"+n_)}Lr(em,"onAnimationEnd"),Lr(tm,"onAnimationIteration"),Lr(nm,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(im,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i_=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function om(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,nl(d,r,void 0,n),n.currentTarget=null}function am(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],m=d.event;d=d.listeners;e:{var y=void 0;if(r)for(var A=d.length-1;0<=A;A--){var k=d[A],H=k.instance,ue=k.currentTarget;if(k=k.listener,H!==y&&m.isPropagationStopped())break e;om(m,k,ue),y=H}else for(A=0;A<d.length;A++){if(k=d[A],H=k.instance,ue=k.currentTarget,k=k.listener,H!==y&&m.isPropagationStopped())break e;om(m,k,ue),y=H}}}if(ss)throw n=os,ss=!1,os=null,n}function Zt(n,r){var l=r[Ju];l===void 0&&(l=r[Ju]=new Set);var d=n+"__bubble";l.has(d)||(lm(r,n,2,!1),l.add(d))}function ju(n,r,l){var d=0;r&&(d|=4),lm(l,n,d,r)}var ml="_reactListening"+Math.random().toString(36).slice(2);function pa(n){if(!n[ml]){n[ml]=!0,i.forEach(function(l){l!=="selectionchange"&&(i_.has(l)||ju(l,!1,n),ju(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ml]||(r[ml]=!0,ju("selectionchange",!1,r))}}function lm(n,r,l,d){switch(Np(r)){case 1:var m=vx;break;case 4:m=xx;break;default:m=Ru}l=m.bind(null,r,l,n),m=void 0,!Ft||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),d?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function Yu(n,r,l,d,m){var y=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var A=d.tag;if(A===3||A===4){var k=d.stateNode.containerInfo;if(k===m||k.nodeType===8&&k.parentNode===m)break;if(A===4)for(A=d.return;A!==null;){var H=A.tag;if((H===3||H===4)&&(H=A.stateNode.containerInfo,H===m||H.nodeType===8&&H.parentNode===m))return;A=A.return}for(;k!==null;){if(A=us(k),A===null)return;if(H=A.tag,H===5||H===6){d=y=A;continue e}k=k.parentNode}}d=d.return}Ve(function(){var ue=y,ye=Je(l),Se=[];e:{var _e=rm.get(n);if(_e!==void 0){var ke=Iu,He=n;switch(n){case"keypress":if(cl(l)===0)break e;case"keydown":case"keyup":ke=Lx;break;case"focusin":He="focus",ke=Uu;break;case"focusout":He="blur",ke=Uu;break;case"beforeblur":case"afterblur":ke=Uu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Sx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=Ox;break;case em:case tm:case nm:ke=Tx;break;case im:ke=kx;break;case"scroll":ke=_x;break;case"wheel":ke=zx;break;case"copy":case"cut":case"paste":ke=bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Op}var Ye=(r&4)!==0,pn=!Ye&&n==="scroll",ee=Ye?_e!==null?_e+"Capture":null:_e;Ye=[];for(var X=ue,re;X!==null;){re=X;var Te=re.stateNode;if(re.tag===5&&Te!==null&&(re=Te,ee!==null&&(Te=Xt(X,ee),Te!=null&&Ye.push(ma(X,Te,re)))),pn)break;X=X.return}0<Ye.length&&(_e=new ke(_e,He,null,l,ye),Se.push({event:_e,listeners:Ye}))}}if((r&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",_e&&l!==Ce&&(He=l.relatedTarget||l.fromElement)&&(us(He)||He[or]))break e;if((ke||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,ke?(He=l.relatedTarget||l.toElement,ke=ue,He=He?us(He):null,He!==null&&(pn=Wn(He),He!==pn||He.tag!==5&&He.tag!==6)&&(He=null)):(ke=null,He=ue),ke!==He)){if(Ye=Dp,Te="onMouseLeave",ee="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Op,Te="onPointerLeave",ee="onPointerEnter",X="pointer"),pn=ke==null?_e:Qs(ke),re=He==null?_e:Qs(He),_e=new Ye(Te,X+"leave",ke,l,ye),_e.target=pn,_e.relatedTarget=re,Te=null,us(ye)===ue&&(Ye=new Ye(ee,X+"enter",He,l,ye),Ye.target=re,Ye.relatedTarget=pn,Te=Ye),pn=Te,ke&&He)t:{for(Ye=ke,ee=He,X=0,re=Ye;re;re=Ks(re))X++;for(re=0,Te=ee;Te;Te=Ks(Te))re++;for(;0<X-re;)Ye=Ks(Ye),X--;for(;0<re-X;)ee=Ks(ee),re--;for(;X--;){if(Ye===ee||ee!==null&&Ye===ee.alternate)break t;Ye=Ks(Ye),ee=Ks(ee)}Ye=null}else Ye=null;ke!==null&&cm(Se,_e,ke,Ye,!1),He!==null&&pn!==null&&cm(Se,pn,He,Ye,!0)}}e:{if(_e=ue?Qs(ue):window,ke=_e.nodeName&&_e.nodeName.toLowerCase(),ke==="select"||ke==="input"&&_e.type==="file")var Ze=Yx;else if(Vp(_e))if(Wp)Ze=Zx;else{Ze=$x;var st=qx}else(ke=_e.nodeName)&&ke.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ze=Kx);if(Ze&&(Ze=Ze(n,ue))){Hp(Se,Ze,l,ye);break e}st&&st(n,_e,ue),n==="focusout"&&(st=_e._wrapperState)&&st.controlled&&_e.type==="number"&&dn(_e,"number",_e.value)}switch(st=ue?Qs(ue):window,n){case"focusin":(Vp(st)||st.contentEditable==="true")&&(qs=st,Gu=ue,ha=null);break;case"focusout":ha=Gu=qs=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,Qp(Se,l,ye);break;case"selectionchange":if(e_)break;case"keydown":case"keyup":Qp(Se,l,ye)}var ot;if(Fu)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Ys?zp(n,l)&&(ct="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Fp&&l.locale!=="ko"&&(Ys||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Ys&&(ot=Ip()):(Ir=ye,Nu="value"in Ir?Ir.value:Ir.textContent,Ys=!0)),st=gl(ue,ct),0<st.length&&(ct=new Up(ct,n,null,l,ye),Se.push({event:ct,listeners:st}),ot?ct.data=ot:(ot=Gp(l),ot!==null&&(ct.data=ot)))),(ot=Vx?Hx(n,l):Wx(n,l))&&(ue=gl(ue,"onBeforeInput"),0<ue.length&&(ye=new Up("onBeforeInput","beforeinput",null,l,ye),Se.push({event:ye,listeners:ue}),ye.data=ot))}am(Se,r)})}function ma(n,r,l){return{instance:n,listener:r,currentTarget:l}}function gl(n,r){for(var l=r+"Capture",d=[];n!==null;){var m=n,y=m.stateNode;m.tag===5&&y!==null&&(m=y,y=Xt(n,l),y!=null&&d.unshift(ma(n,y,m)),y=Xt(n,r),y!=null&&d.push(ma(n,y,m))),n=n.return}return d}function Ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function cm(n,r,l,d,m){for(var y=r._reactName,A=[];l!==null&&l!==d;){var k=l,H=k.alternate,ue=k.stateNode;if(H!==null&&H===d)break;k.tag===5&&ue!==null&&(k=ue,m?(H=Xt(l,y),H!=null&&A.unshift(ma(l,H,k))):m||(H=Xt(l,y),H!=null&&A.push(ma(l,H,k)))),l=l.return}A.length!==0&&n.push({event:r,listeners:A})}var r_=/\r\n?/g,s_=/\u0000|\uFFFD/g;function um(n){return(typeof n=="string"?n:""+n).replace(r_,`
`).replace(s_,"")}function vl(n,r,l){if(r=um(r),um(n)!==r&&l)throw Error(t(425))}function xl(){}var qu=null,$u=null;function Ku(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Zu=typeof setTimeout=="function"?setTimeout:void 0,o_=typeof clearTimeout=="function"?clearTimeout:void 0,dm=typeof Promise=="function"?Promise:void 0,a_=typeof queueMicrotask=="function"?queueMicrotask:typeof dm<"u"?function(n){return dm.resolve(null).then(n).catch(l_)}:Zu;function l_(n){setTimeout(function(){throw n})}function Qu(n,r){var l=r,d=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(d===0){n.removeChild(m),sa(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=m}while(l);sa(r)}function Dr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function hm(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),Yi="__reactFiber$"+Zs,ga="__reactProps$"+Zs,or="__reactContainer$"+Zs,Ju="__reactEvents$"+Zs,c_="__reactListeners$"+Zs,u_="__reactHandles$"+Zs;function us(n){var r=n[Yi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[or]||l[Yi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=hm(n);n!==null;){if(l=n[Yi])return l;n=hm(n)}return r}n=l,l=n.parentNode}return null}function va(n){return n=n[Yi]||n[or],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function _l(n){return n[ga]||null}var ed=[],Js=-1;function Ur(n){return{current:n}}function Qt(n){0>Js||(n.current=ed[Js],ed[Js]=null,Js--)}function $t(n,r){Js++,ed[Js]=n.current,n.current=r}var Or={},Un=Ur(Or),Jn=Ur(!1),ds=Or;function eo(n,r){var l=n.type.contextTypes;if(!l)return Or;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var m={},y;for(y in l)m[y]=r[y];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function ei(n){return n=n.childContextTypes,n!=null}function yl(){Qt(Jn),Qt(Un)}function fm(n,r,l){if(Un.current!==Or)throw Error(t(168));$t(Un,r),$t(Jn,l)}function pm(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var m in d)if(!(m in r))throw Error(t(108,xe(n)||"Unknown",m));return de({},l,d)}function Sl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Or,ds=Un.current,$t(Un,n),$t(Jn,Jn.current),!0}function mm(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=pm(n,r,ds),d.__reactInternalMemoizedMergedChildContext=n,Qt(Jn),Qt(Un),$t(Un,n)):Qt(Jn),$t(Jn,l)}var ar=null,Ml=!1,td=!1;function gm(n){ar===null?ar=[n]:ar.push(n)}function d_(n){Ml=!0,gm(n)}function Fr(){if(!td&&ar!==null){td=!0;var n=0,r=yt;try{var l=ar;for(yt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}ar=null,Ml=!1}catch(m){throw ar!==null&&(ar=ar.slice(n+1)),ls(ea,Fr),m}finally{yt=r,td=!1}}return null}var to=[],no=0,El=null,Tl=0,yi=[],Si=0,hs=null,lr=1,cr="";function fs(n,r){to[no++]=Tl,to[no++]=El,El=n,Tl=r}function vm(n,r,l){yi[Si++]=lr,yi[Si++]=cr,yi[Si++]=hs,hs=n;var d=lr;n=cr;var m=32-we(d)-1;d&=~(1<<m),l+=1;var y=32-we(r)+m;if(30<y){var A=m-m%5;y=(d&(1<<A)-1).toString(32),d>>=A,m-=A,lr=1<<32-we(r)+m|l<<m|d,cr=y+n}else lr=1<<y|l<<m|d,cr=n}function nd(n){n.return!==null&&(fs(n,1),vm(n,1,0))}function id(n){for(;n===El;)El=to[--no],to[no]=null,Tl=to[--no],to[no]=null;for(;n===hs;)hs=yi[--Si],yi[Si]=null,cr=yi[--Si],yi[Si]=null,lr=yi[--Si],yi[Si]=null}var ci=null,ui=null,rn=!1,Di=null;function xm(n,r){var l=wi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function _m(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ci=n,ui=Dr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ci=n,ui=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=hs!==null?{id:lr,overflow:cr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=wi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ci=n,ui=null,!0):!1;default:return!1}}function rd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function sd(n){if(rn){var r=ui;if(r){var l=r;if(!_m(n,r)){if(rd(n))throw Error(t(418));r=Dr(l.nextSibling);var d=ci;r&&_m(n,r)?xm(d,l):(n.flags=n.flags&-4097|2,rn=!1,ci=n)}}else{if(rd(n))throw Error(t(418));n.flags=n.flags&-4097|2,rn=!1,ci=n}}}function ym(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ci=n}function wl(n){if(n!==ci)return!1;if(!rn)return ym(n),rn=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Ku(n.type,n.memoizedProps)),r&&(r=ui)){if(rd(n))throw Sm(),Error(t(418));for(;r;)xm(n,r),r=Dr(r.nextSibling)}if(ym(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ui=Dr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ui=null}}else ui=ci?Dr(n.stateNode.nextSibling):null;return!0}function Sm(){for(var n=ui;n;)n=Dr(n.nextSibling)}function io(){ui=ci=null,rn=!1}function od(n){Di===null?Di=[n]:Di.push(n)}var h_=C.ReactCurrentBatchConfig;function xa(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var m=d,y=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===y?r.ref:(r=function(A){var k=m.refs;A===null?delete k[y]:k[y]=A},r._stringRef=y,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function bl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Mm(n){var r=n._init;return r(n._payload)}function Em(n){function r(ee,X){if(n){var re=ee.deletions;re===null?(ee.deletions=[X],ee.flags|=16):re.push(X)}}function l(ee,X){if(!n)return null;for(;X!==null;)r(ee,X),X=X.sibling;return null}function d(ee,X){for(ee=new Map;X!==null;)X.key!==null?ee.set(X.key,X):ee.set(X.index,X),X=X.sibling;return ee}function m(ee,X){return ee=Xr(ee,X),ee.index=0,ee.sibling=null,ee}function y(ee,X,re){return ee.index=re,n?(re=ee.alternate,re!==null?(re=re.index,re<X?(ee.flags|=2,X):re):(ee.flags|=2,X)):(ee.flags|=1048576,X)}function A(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function k(ee,X,re,Te){return X===null||X.tag!==6?(X=Zd(re,ee.mode,Te),X.return=ee,X):(X=m(X,re),X.return=ee,X)}function H(ee,X,re,Te){var Ze=re.type;return Ze===O?ye(ee,X,re.props.children,Te,re.key):X!==null&&(X.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ae&&Mm(Ze)===X.type)?(Te=m(X,re.props),Te.ref=xa(ee,X,re),Te.return=ee,Te):(Te=Kl(re.type,re.key,re.props,null,ee.mode,Te),Te.ref=xa(ee,X,re),Te.return=ee,Te)}function ue(ee,X,re,Te){return X===null||X.tag!==4||X.stateNode.containerInfo!==re.containerInfo||X.stateNode.implementation!==re.implementation?(X=Qd(re,ee.mode,Te),X.return=ee,X):(X=m(X,re.children||[]),X.return=ee,X)}function ye(ee,X,re,Te,Ze){return X===null||X.tag!==7?(X=Ss(re,ee.mode,Te,Ze),X.return=ee,X):(X=m(X,re),X.return=ee,X)}function Se(ee,X,re){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Zd(""+X,ee.mode,re),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case D:return re=Kl(X.type,X.key,X.props,null,ee.mode,re),re.ref=xa(ee,null,X),re.return=ee,re;case I:return X=Qd(X,ee.mode,re),X.return=ee,X;case ae:var Te=X._init;return Se(ee,Te(X._payload),re)}if(sn(X)||se(X))return X=Ss(X,ee.mode,re,null),X.return=ee,X;bl(ee,X)}return null}function _e(ee,X,re,Te){var Ze=X!==null?X.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Ze!==null?null:k(ee,X,""+re,Te);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case D:return re.key===Ze?H(ee,X,re,Te):null;case I:return re.key===Ze?ue(ee,X,re,Te):null;case ae:return Ze=re._init,_e(ee,X,Ze(re._payload),Te)}if(sn(re)||se(re))return Ze!==null?null:ye(ee,X,re,Te,null);bl(ee,re)}return null}function ke(ee,X,re,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ee=ee.get(re)||null,k(X,ee,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case D:return ee=ee.get(Te.key===null?re:Te.key)||null,H(X,ee,Te,Ze);case I:return ee=ee.get(Te.key===null?re:Te.key)||null,ue(X,ee,Te,Ze);case ae:var st=Te._init;return ke(ee,X,re,st(Te._payload),Ze)}if(sn(Te)||se(Te))return ee=ee.get(re)||null,ye(X,ee,Te,Ze,null);bl(X,Te)}return null}function He(ee,X,re,Te){for(var Ze=null,st=null,ot=X,ct=X=0,Cn=null;ot!==null&&ct<re.length;ct++){ot.index>ct?(Cn=ot,ot=null):Cn=ot.sibling;var Lt=_e(ee,ot,re[ct],Te);if(Lt===null){ot===null&&(ot=Cn);break}n&&ot&&Lt.alternate===null&&r(ee,ot),X=y(Lt,X,ct),st===null?Ze=Lt:st.sibling=Lt,st=Lt,ot=Cn}if(ct===re.length)return l(ee,ot),rn&&fs(ee,ct),Ze;if(ot===null){for(;ct<re.length;ct++)ot=Se(ee,re[ct],Te),ot!==null&&(X=y(ot,X,ct),st===null?Ze=ot:st.sibling=ot,st=ot);return rn&&fs(ee,ct),Ze}for(ot=d(ee,ot);ct<re.length;ct++)Cn=ke(ot,ee,ct,re[ct],Te),Cn!==null&&(n&&Cn.alternate!==null&&ot.delete(Cn.key===null?ct:Cn.key),X=y(Cn,X,ct),st===null?Ze=Cn:st.sibling=Cn,st=Cn);return n&&ot.forEach(function(jr){return r(ee,jr)}),rn&&fs(ee,ct),Ze}function Ye(ee,X,re,Te){var Ze=se(re);if(typeof Ze!="function")throw Error(t(150));if(re=Ze.call(re),re==null)throw Error(t(151));for(var st=Ze=null,ot=X,ct=X=0,Cn=null,Lt=re.next();ot!==null&&!Lt.done;ct++,Lt=re.next()){ot.index>ct?(Cn=ot,ot=null):Cn=ot.sibling;var jr=_e(ee,ot,Lt.value,Te);if(jr===null){ot===null&&(ot=Cn);break}n&&ot&&jr.alternate===null&&r(ee,ot),X=y(jr,X,ct),st===null?Ze=jr:st.sibling=jr,st=jr,ot=Cn}if(Lt.done)return l(ee,ot),rn&&fs(ee,ct),Ze;if(ot===null){for(;!Lt.done;ct++,Lt=re.next())Lt=Se(ee,Lt.value,Te),Lt!==null&&(X=y(Lt,X,ct),st===null?Ze=Lt:st.sibling=Lt,st=Lt);return rn&&fs(ee,ct),Ze}for(ot=d(ee,ot);!Lt.done;ct++,Lt=re.next())Lt=ke(ot,ee,ct,Lt.value,Te),Lt!==null&&(n&&Lt.alternate!==null&&ot.delete(Lt.key===null?ct:Lt.key),X=y(Lt,X,ct),st===null?Ze=Lt:st.sibling=Lt,st=Lt);return n&&ot.forEach(function(X_){return r(ee,X_)}),rn&&fs(ee,ct),Ze}function pn(ee,X,re,Te){if(typeof re=="object"&&re!==null&&re.type===O&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case D:e:{for(var Ze=re.key,st=X;st!==null;){if(st.key===Ze){if(Ze=re.type,Ze===O){if(st.tag===7){l(ee,st.sibling),X=m(st,re.props.children),X.return=ee,ee=X;break e}}else if(st.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ae&&Mm(Ze)===st.type){l(ee,st.sibling),X=m(st,re.props),X.ref=xa(ee,st,re),X.return=ee,ee=X;break e}l(ee,st);break}else r(ee,st);st=st.sibling}re.type===O?(X=Ss(re.props.children,ee.mode,Te,re.key),X.return=ee,ee=X):(Te=Kl(re.type,re.key,re.props,null,ee.mode,Te),Te.ref=xa(ee,X,re),Te.return=ee,ee=Te)}return A(ee);case I:e:{for(st=re.key;X!==null;){if(X.key===st)if(X.tag===4&&X.stateNode.containerInfo===re.containerInfo&&X.stateNode.implementation===re.implementation){l(ee,X.sibling),X=m(X,re.children||[]),X.return=ee,ee=X;break e}else{l(ee,X);break}else r(ee,X);X=X.sibling}X=Qd(re,ee.mode,Te),X.return=ee,ee=X}return A(ee);case ae:return st=re._init,pn(ee,X,st(re._payload),Te)}if(sn(re))return He(ee,X,re,Te);if(se(re))return Ye(ee,X,re,Te);bl(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,X!==null&&X.tag===6?(l(ee,X.sibling),X=m(X,re),X.return=ee,ee=X):(l(ee,X),X=Zd(re,ee.mode,Te),X.return=ee,ee=X),A(ee)):l(ee,X)}return pn}var ro=Em(!0),Tm=Em(!1),Al=Ur(null),Cl=null,so=null,ad=null;function ld(){ad=so=Cl=null}function cd(n){var r=Al.current;Qt(Al),n._currentValue=r}function ud(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function oo(n,r){Cl=n,ad=so=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(ti=!0),n.firstContext=null)}function Mi(n){var r=n._currentValue;if(ad!==n)if(n={context:n,memoizedValue:r,next:null},so===null){if(Cl===null)throw Error(t(308));so=n,Cl.dependencies={lanes:0,firstContext:n}}else so=so.next=n;return r}var ps=null;function dd(n){ps===null?ps=[n]:ps.push(n)}function wm(n,r,l,d){var m=r.interleaved;return m===null?(l.next=l,dd(r)):(l.next=m.next,m.next=l),r.interleaved=l,ur(n,d)}function ur(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var kr=!1;function hd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function dr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Br(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Nt&2)!==0){var m=d.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),d.pending=r,ur(n,l)}return m=d.interleaved,m===null?(r.next=r,dd(d)):(r.next=m.next,m.next=r),d.interleaved=r,ur(n,l)}function Rl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Qn(n,l)}}function Am(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var m=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?m=y=A:y=y.next=A,l=l.next}while(l!==null);y===null?m=y=r:y=y.next=r}else m=y=r;l={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:y,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Pl(n,r,l,d){var m=n.updateQueue;kr=!1;var y=m.firstBaseUpdate,A=m.lastBaseUpdate,k=m.shared.pending;if(k!==null){m.shared.pending=null;var H=k,ue=H.next;H.next=null,A===null?y=ue:A.next=ue,A=H;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,k=ye.lastBaseUpdate,k!==A&&(k===null?ye.firstBaseUpdate=ue:k.next=ue,ye.lastBaseUpdate=H))}if(y!==null){var Se=m.baseState;A=0,ye=ue=H=null,k=y;do{var _e=k.lane,ke=k.eventTime;if((d&_e)===_e){ye!==null&&(ye=ye.next={eventTime:ke,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var He=n,Ye=k;switch(_e=r,ke=l,Ye.tag){case 1:if(He=Ye.payload,typeof He=="function"){Se=He.call(ke,Se,_e);break e}Se=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ye.payload,_e=typeof He=="function"?He.call(ke,Se,_e):He,_e==null)break e;Se=de({},Se,_e);break e;case 2:kr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,_e=m.effects,_e===null?m.effects=[k]:_e.push(k))}else ke={eventTime:ke,lane:_e,tag:k.tag,payload:k.payload,callback:k.callback,next:null},ye===null?(ue=ye=ke,H=Se):ye=ye.next=ke,A|=_e;if(k=k.next,k===null){if(k=m.shared.pending,k===null)break;_e=k,k=_e.next,_e.next=null,m.lastBaseUpdate=_e,m.shared.pending=null}}while(!0);if(ye===null&&(H=Se),m.baseState=H,m.firstBaseUpdate=ue,m.lastBaseUpdate=ye,r=m.shared.interleaved,r!==null){m=r;do A|=m.lane,m=m.next;while(m!==r)}else y===null&&(m.shared.lanes=0);vs|=A,n.lanes=A,n.memoizedState=Se}}function Cm(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],m=d.callback;if(m!==null){if(d.callback=null,d=l,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var _a={},qi=Ur(_a),ya=Ur(_a),Sa=Ur(_a);function ms(n){if(n===_a)throw Error(t(174));return n}function fd(n,r){switch($t(Sa,r),$t(ya,n),$t(qi,_a),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:T(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=T(r,n)}Qt(qi),$t(qi,r)}function ao(){Qt(qi),Qt(ya),Qt(Sa)}function Rm(n){ms(Sa.current);var r=ms(qi.current),l=T(r,n.type);r!==l&&($t(ya,n),$t(qi,l))}function pd(n){ya.current===n&&(Qt(qi),Qt(ya))}var an=Ur(0);function Nl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var md=[];function gd(){for(var n=0;n<md.length;n++)md[n]._workInProgressVersionPrimary=null;md.length=0}var Il=C.ReactCurrentDispatcher,vd=C.ReactCurrentBatchConfig,gs=0,ln=null,Sn=null,bn=null,Ll=!1,Ma=!1,Ea=0,f_=0;function On(){throw Error(t(321))}function xd(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Li(n[l],r[l]))return!1;return!0}function _d(n,r,l,d,m,y){if(gs=y,ln=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Il.current=n===null||n.memoizedState===null?v_:x_,n=l(d,m),Ma){y=0;do{if(Ma=!1,Ea=0,25<=y)throw Error(t(301));y+=1,bn=Sn=null,r.updateQueue=null,Il.current=__,n=l(d,m)}while(Ma)}if(Il.current=Ol,r=Sn!==null&&Sn.next!==null,gs=0,bn=Sn=ln=null,Ll=!1,r)throw Error(t(300));return n}function yd(){var n=Ea!==0;return Ea=0,n}function $i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?ln.memoizedState=bn=n:bn=bn.next=n,bn}function Ei(){if(Sn===null){var n=ln.alternate;n=n!==null?n.memoizedState:null}else n=Sn.next;var r=bn===null?ln.memoizedState:bn.next;if(r!==null)bn=r,Sn=n;else{if(n===null)throw Error(t(310));Sn=n,n={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},bn===null?ln.memoizedState=bn=n:bn=bn.next=n}return bn}function Ta(n,r){return typeof r=="function"?r(n):r}function Sd(n){var r=Ei(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=Sn,m=d.baseQueue,y=l.pending;if(y!==null){if(m!==null){var A=m.next;m.next=y.next,y.next=A}d.baseQueue=m=y,l.pending=null}if(m!==null){y=m.next,d=d.baseState;var k=A=null,H=null,ue=y;do{var ye=ue.lane;if((gs&ye)===ye)H!==null&&(H=H.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),d=ue.hasEagerState?ue.eagerState:n(d,ue.action);else{var Se={lane:ye,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};H===null?(k=H=Se,A=d):H=H.next=Se,ln.lanes|=ye,vs|=ye}ue=ue.next}while(ue!==null&&ue!==y);H===null?A=d:H.next=k,Li(d,r.memoizedState)||(ti=!0),r.memoizedState=d,r.baseState=A,r.baseQueue=H,l.lastRenderedState=d}if(n=l.interleaved,n!==null){m=n;do y=m.lane,ln.lanes|=y,vs|=y,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Md(n){var r=Ei(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,m=l.pending,y=r.memoizedState;if(m!==null){l.pending=null;var A=m=m.next;do y=n(y,A.action),A=A.next;while(A!==m);Li(y,r.memoizedState)||(ti=!0),r.memoizedState=y,r.baseQueue===null&&(r.baseState=y),l.lastRenderedState=y}return[y,d]}function Pm(){}function Nm(n,r){var l=ln,d=Ei(),m=r(),y=!Li(d.memoizedState,m);if(y&&(d.memoizedState=m,ti=!0),d=d.queue,Ed(Dm.bind(null,l,d,n),[n]),d.getSnapshot!==r||y||bn!==null&&bn.memoizedState.tag&1){if(l.flags|=2048,wa(9,Lm.bind(null,l,d,m,r),void 0,null),An===null)throw Error(t(349));(gs&30)!==0||Im(l,r,m)}return m}function Im(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=ln.updateQueue,r===null?(r={lastEffect:null,stores:null},ln.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Lm(n,r,l,d){r.value=l,r.getSnapshot=d,Um(r)&&Om(n)}function Dm(n,r,l){return l(function(){Um(r)&&Om(n)})}function Um(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Li(n,l)}catch{return!0}}function Om(n){var r=ur(n,1);r!==null&&ki(r,n,1,-1)}function Fm(n){var r=$i();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:n},r.queue=n,n=n.dispatch=g_.bind(null,ln,n),[r.memoizedState,n]}function wa(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=ln.updateQueue,r===null?(r={lastEffect:null,stores:null},ln.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function km(){return Ei().memoizedState}function Dl(n,r,l,d){var m=$i();ln.flags|=n,m.memoizedState=wa(1|r,l,void 0,d===void 0?null:d)}function Ul(n,r,l,d){var m=Ei();d=d===void 0?null:d;var y=void 0;if(Sn!==null){var A=Sn.memoizedState;if(y=A.destroy,d!==null&&xd(d,A.deps)){m.memoizedState=wa(r,l,y,d);return}}ln.flags|=n,m.memoizedState=wa(1|r,l,y,d)}function Bm(n,r){return Dl(8390656,8,n,r)}function Ed(n,r){return Ul(2048,8,n,r)}function zm(n,r){return Ul(4,2,n,r)}function Gm(n,r){return Ul(4,4,n,r)}function Vm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Hm(n,r,l){return l=l!=null?l.concat([n]):null,Ul(4,4,Vm.bind(null,r,n),l)}function Td(){}function Wm(n,r){var l=Ei();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&xd(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function Xm(n,r){var l=Ei();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&xd(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function jm(n,r,l){return(gs&21)===0?(n.baseState&&(n.baseState=!1,ti=!0),n.memoizedState=l):(Li(l,r)||(l=Fe(),ln.lanes|=l,vs|=l,n.baseState=!0),r)}function p_(n,r){var l=yt;yt=l!==0&&4>l?l:4,n(!0);var d=vd.transition;vd.transition={};try{n(!1),r()}finally{yt=l,vd.transition=d}}function Ym(){return Ei().memoizedState}function m_(n,r,l){var d=Hr(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},qm(n))$m(r,l);else if(l=wm(n,r,l,d),l!==null){var m=jn();ki(l,n,d,m),Km(l,r,d)}}function g_(n,r,l){var d=Hr(n),m={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(qm(n))$m(r,m);else{var y=n.alternate;if(n.lanes===0&&(y===null||y.lanes===0)&&(y=r.lastRenderedReducer,y!==null))try{var A=r.lastRenderedState,k=y(A,l);if(m.hasEagerState=!0,m.eagerState=k,Li(k,A)){var H=r.interleaved;H===null?(m.next=m,dd(r)):(m.next=H.next,H.next=m),r.interleaved=m;return}}catch{}finally{}l=wm(n,r,m,d),l!==null&&(m=jn(),ki(l,n,d,m),Km(l,r,d))}}function qm(n){var r=n.alternate;return n===ln||r!==null&&r===ln}function $m(n,r){Ma=Ll=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Km(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Qn(n,l)}}var Ol={readContext:Mi,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},v_={readContext:Mi,useCallback:function(n,r){return $i().memoizedState=[n,r===void 0?null:r],n},useContext:Mi,useEffect:Bm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Dl(4194308,4,Vm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Dl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Dl(4,2,n,r)},useMemo:function(n,r){var l=$i();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=$i();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=m_.bind(null,ln,n),[d.memoizedState,n]},useRef:function(n){var r=$i();return n={current:n},r.memoizedState=n},useState:Fm,useDebugValue:Td,useDeferredValue:function(n){return $i().memoizedState=n},useTransition:function(){var n=Fm(!1),r=n[0];return n=p_.bind(null,n[1]),$i().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=ln,m=$i();if(rn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),An===null)throw Error(t(349));(gs&30)!==0||Im(d,r,l)}m.memoizedState=l;var y={value:l,getSnapshot:r};return m.queue=y,Bm(Dm.bind(null,d,y,n),[n]),d.flags|=2048,wa(9,Lm.bind(null,d,y,l,r),void 0,null),l},useId:function(){var n=$i(),r=An.identifierPrefix;if(rn){var l=cr,d=lr;l=(d&~(1<<32-we(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=Ea++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=f_++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},x_={readContext:Mi,useCallback:Wm,useContext:Mi,useEffect:Ed,useImperativeHandle:Hm,useInsertionEffect:zm,useLayoutEffect:Gm,useMemo:Xm,useReducer:Sd,useRef:km,useState:function(){return Sd(Ta)},useDebugValue:Td,useDeferredValue:function(n){var r=Ei();return jm(r,Sn.memoizedState,n)},useTransition:function(){var n=Sd(Ta)[0],r=Ei().memoizedState;return[n,r]},useMutableSource:Pm,useSyncExternalStore:Nm,useId:Ym,unstable_isNewReconciler:!1},__={readContext:Mi,useCallback:Wm,useContext:Mi,useEffect:Ed,useImperativeHandle:Hm,useInsertionEffect:zm,useLayoutEffect:Gm,useMemo:Xm,useReducer:Md,useRef:km,useState:function(){return Md(Ta)},useDebugValue:Td,useDeferredValue:function(n){var r=Ei();return Sn===null?r.memoizedState=n:jm(r,Sn.memoizedState,n)},useTransition:function(){var n=Md(Ta)[0],r=Ei().memoizedState;return[n,r]},useMutableSource:Pm,useSyncExternalStore:Nm,useId:Ym,unstable_isNewReconciler:!1};function Ui(n,r){if(n&&n.defaultProps){r=de({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function wd(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:de({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Fl={isMounted:function(n){return(n=n._reactInternals)?Wn(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=jn(),m=Hr(n),y=dr(d,m);y.payload=r,l!=null&&(y.callback=l),r=Br(n,y,m),r!==null&&(ki(r,n,m,d),Rl(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=jn(),m=Hr(n),y=dr(d,m);y.tag=1,y.payload=r,l!=null&&(y.callback=l),r=Br(n,y,m),r!==null&&(ki(r,n,m,d),Rl(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=jn(),d=Hr(n),m=dr(l,d);m.tag=2,r!=null&&(m.callback=r),r=Br(n,m,d),r!==null&&(ki(r,n,d,l),Rl(r,n,d))}};function Zm(n,r,l,d,m,y,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,y,A):r.prototype&&r.prototype.isPureReactComponent?!da(l,d)||!da(m,y):!0}function Qm(n,r,l){var d=!1,m=Or,y=r.contextType;return typeof y=="object"&&y!==null?y=Mi(y):(m=ei(r)?ds:Un.current,d=r.contextTypes,y=(d=d!=null)?eo(n,m):Or),r=new r(l,y),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Fl,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=y),r}function Jm(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&Fl.enqueueReplaceState(r,r.state,null)}function bd(n,r,l,d){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},hd(n);var y=r.contextType;typeof y=="object"&&y!==null?m.context=Mi(y):(y=ei(r)?ds:Un.current,m.context=eo(n,y)),m.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(wd(n,r,y,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Fl.enqueueReplaceState(m,m.state,null),Pl(n,l,m,d),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function lo(n,r){try{var l="",d=r;do l+=Ge(d),d=d.return;while(d);var m=l}catch(y){m=`
Error generating stack: `+y.message+`
`+y.stack}return{value:n,source:r,stack:m,digest:null}}function Ad(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Cd(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var y_=typeof WeakMap=="function"?WeakMap:Map;function e0(n,r,l){l=dr(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){Wl||(Wl=!0,Hd=d),Cd(n,r)},l}function t0(n,r,l){l=dr(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var m=r.value;l.payload=function(){return d(m)},l.callback=function(){Cd(n,r)}}var y=n.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){Cd(n,r),typeof d!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),l}function n0(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new y_;var m=new Set;d.set(r,m)}else m=d.get(r),m===void 0&&(m=new Set,d.set(r,m));m.has(l)||(m.add(l),n=D_.bind(null,n,r,l),r.then(n,n))}function i0(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function r0(n,r,l,d,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=dr(-1,1),r.tag=2,Br(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var S_=C.ReactCurrentOwner,ti=!1;function Xn(n,r,l,d){r.child=n===null?Tm(r,null,l,d):ro(r,n.child,l,d)}function s0(n,r,l,d,m){l=l.render;var y=r.ref;return oo(r,m),d=_d(n,r,l,d,y,m),l=yd(),n!==null&&!ti?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,hr(n,r,m)):(rn&&l&&nd(r),r.flags|=1,Xn(n,r,d,m),r.child)}function o0(n,r,l,d,m){if(n===null){var y=l.type;return typeof y=="function"&&!Kd(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=y,a0(n,r,y,d,m)):(n=Kl(l.type,null,d,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(y=n.child,(n.lanes&m)===0){var A=y.memoizedProps;if(l=l.compare,l=l!==null?l:da,l(A,d)&&n.ref===r.ref)return hr(n,r,m)}return r.flags|=1,n=Xr(y,d),n.ref=r.ref,n.return=r,r.child=n}function a0(n,r,l,d,m){if(n!==null){var y=n.memoizedProps;if(da(y,d)&&n.ref===r.ref)if(ti=!1,r.pendingProps=d=y,(n.lanes&m)!==0)(n.flags&131072)!==0&&(ti=!0);else return r.lanes=n.lanes,hr(n,r,m)}return Rd(n,r,l,d,m)}function l0(n,r,l){var d=r.pendingProps,m=d.children,y=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(uo,di),di|=l;else{if((l&1073741824)===0)return n=y!==null?y.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$t(uo,di),di|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=y!==null?y.baseLanes:l,$t(uo,di),di|=d}else y!==null?(d=y.baseLanes|l,r.memoizedState=null):d=l,$t(uo,di),di|=d;return Xn(n,r,m,l),r.child}function c0(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Rd(n,r,l,d,m){var y=ei(l)?ds:Un.current;return y=eo(r,y),oo(r,m),l=_d(n,r,l,d,y,m),d=yd(),n!==null&&!ti?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,hr(n,r,m)):(rn&&d&&nd(r),r.flags|=1,Xn(n,r,l,m),r.child)}function u0(n,r,l,d,m){if(ei(l)){var y=!0;Sl(r)}else y=!1;if(oo(r,m),r.stateNode===null)Bl(n,r),Qm(r,l,d),bd(r,l,d,m),d=!0;else if(n===null){var A=r.stateNode,k=r.memoizedProps;A.props=k;var H=A.context,ue=l.contextType;typeof ue=="object"&&ue!==null?ue=Mi(ue):(ue=ei(l)?ds:Un.current,ue=eo(r,ue));var ye=l.getDerivedStateFromProps,Se=typeof ye=="function"||typeof A.getSnapshotBeforeUpdate=="function";Se||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==d||H!==ue)&&Jm(r,A,d,ue),kr=!1;var _e=r.memoizedState;A.state=_e,Pl(r,d,A,m),H=r.memoizedState,k!==d||_e!==H||Jn.current||kr?(typeof ye=="function"&&(wd(r,l,ye,d),H=r.memoizedState),(k=kr||Zm(r,l,k,d,_e,H,ue))?(Se||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=H),A.props=d,A.state=H,A.context=ue,d=k):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{A=r.stateNode,bm(n,r),k=r.memoizedProps,ue=r.type===r.elementType?k:Ui(r.type,k),A.props=ue,Se=r.pendingProps,_e=A.context,H=l.contextType,typeof H=="object"&&H!==null?H=Mi(H):(H=ei(l)?ds:Un.current,H=eo(r,H));var ke=l.getDerivedStateFromProps;(ye=typeof ke=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==Se||_e!==H)&&Jm(r,A,d,H),kr=!1,_e=r.memoizedState,A.state=_e,Pl(r,d,A,m);var He=r.memoizedState;k!==Se||_e!==He||Jn.current||kr?(typeof ke=="function"&&(wd(r,l,ke,d),He=r.memoizedState),(ue=kr||Zm(r,l,ue,d,_e,He,H)||!1)?(ye||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(d,He,H),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(d,He,H)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||k===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=He),A.props=d,A.state=He,A.context=H,d=ue):(typeof A.componentDidUpdate!="function"||k===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),d=!1)}return Pd(n,r,l,d,y,m)}function Pd(n,r,l,d,m,y){c0(n,r);var A=(r.flags&128)!==0;if(!d&&!A)return m&&mm(r,l,!1),hr(n,r,y);d=r.stateNode,S_.current=r;var k=A&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&A?(r.child=ro(r,n.child,null,y),r.child=ro(r,null,k,y)):Xn(n,r,k,y),r.memoizedState=d.state,m&&mm(r,l,!0),r.child}function d0(n){var r=n.stateNode;r.pendingContext?fm(n,r.pendingContext,r.pendingContext!==r.context):r.context&&fm(n,r.context,!1),fd(n,r.containerInfo)}function h0(n,r,l,d,m){return io(),od(m),r.flags|=256,Xn(n,r,l,d),r.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Id(n){return{baseLanes:n,cachePool:null,transitions:null}}function f0(n,r,l){var d=r.pendingProps,m=an.current,y=!1,A=(r.flags&128)!==0,k;if((k=A)||(k=n!==null&&n.memoizedState===null?!1:(m&2)!==0),k?(y=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),$t(an,m&1),n===null)return sd(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=d.children,n=d.fallback,y?(d=r.mode,y=r.child,A={mode:"hidden",children:A},(d&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=A):y=Zl(A,d,0,null),n=Ss(n,d,l,null),y.return=r,n.return=r,y.sibling=n,r.child=y,r.child.memoizedState=Id(l),r.memoizedState=Nd,n):Ld(r,A));if(m=n.memoizedState,m!==null&&(k=m.dehydrated,k!==null))return M_(n,r,A,d,k,m,l);if(y){y=d.fallback,A=r.mode,m=n.child,k=m.sibling;var H={mode:"hidden",children:d.children};return(A&1)===0&&r.child!==m?(d=r.child,d.childLanes=0,d.pendingProps=H,r.deletions=null):(d=Xr(m,H),d.subtreeFlags=m.subtreeFlags&14680064),k!==null?y=Xr(k,y):(y=Ss(y,A,l,null),y.flags|=2),y.return=r,d.return=r,d.sibling=y,r.child=d,d=y,y=r.child,A=n.child.memoizedState,A=A===null?Id(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},y.memoizedState=A,y.childLanes=n.childLanes&~l,r.memoizedState=Nd,d}return y=n.child,n=y.sibling,d=Xr(y,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function Ld(n,r){return r=Zl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function kl(n,r,l,d){return d!==null&&od(d),ro(r,n.child,null,l),n=Ld(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function M_(n,r,l,d,m,y,A){if(l)return r.flags&256?(r.flags&=-257,d=Ad(Error(t(422))),kl(n,r,A,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(y=d.fallback,m=r.mode,d=Zl({mode:"visible",children:d.children},m,0,null),y=Ss(y,m,A,null),y.flags|=2,d.return=r,y.return=r,d.sibling=y,r.child=d,(r.mode&1)!==0&&ro(r,n.child,null,A),r.child.memoizedState=Id(A),r.memoizedState=Nd,y);if((r.mode&1)===0)return kl(n,r,A,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var k=d.dgst;return d=k,y=Error(t(419)),d=Ad(y,d,void 0),kl(n,r,A,d)}if(k=(A&n.childLanes)!==0,ti||k){if(d=An,d!==null){switch(A&-A){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(d.suspendedLanes|A))!==0?0:m,m!==0&&m!==y.retryLane&&(y.retryLane=m,ur(n,m),ki(d,n,m,-1))}return $d(),d=Ad(Error(t(421))),kl(n,r,A,d)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=U_.bind(null,n),m._reactRetry=r,null):(n=y.treeContext,ui=Dr(m.nextSibling),ci=r,rn=!0,Di=null,n!==null&&(yi[Si++]=lr,yi[Si++]=cr,yi[Si++]=hs,lr=n.id,cr=n.overflow,hs=r),r=Ld(r,d.children),r.flags|=4096,r)}function p0(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),ud(n.return,r,l)}function Dd(n,r,l,d,m){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:m}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=d,y.tail=l,y.tailMode=m)}function m0(n,r,l){var d=r.pendingProps,m=d.revealOrder,y=d.tail;if(Xn(n,r,d.children,l),d=an.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&p0(n,l,r);else if(n.tag===19)p0(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if($t(an,d),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&Nl(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),Dd(r,!1,m,l,y);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&Nl(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Dd(r,!0,l,null,y);break;case"together":Dd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Bl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function hr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),vs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Xr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Xr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function E_(n,r,l){switch(r.tag){case 3:d0(r),io();break;case 5:Rm(r);break;case 1:ei(r.type)&&Sl(r);break;case 4:fd(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,m=r.memoizedProps.value;$t(Al,d._currentValue),d._currentValue=m;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?($t(an,an.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?f0(n,r,l):($t(an,an.current&1),n=hr(n,r,l),n!==null?n.sibling:null);$t(an,an.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return m0(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),$t(an,an.current),d)break;return null;case 22:case 23:return r.lanes=0,l0(n,r,l)}return hr(n,r,l)}var g0,Ud,v0,x0;g0=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ud=function(){},v0=function(n,r,l,d){var m=n.memoizedProps;if(m!==d){n=r.stateNode,ms(qi.current);var y=null;switch(l){case"input":m=Ut(n,m),d=Ut(n,d),y=[];break;case"select":m=de({},m,{value:void 0}),d=de({},d,{value:void 0}),y=[];break;case"textarea":m=tn(n,m),d=tn(n,d),y=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=xl)}qe(l,d);var A;l=null;for(ue in m)if(!d.hasOwnProperty(ue)&&m.hasOwnProperty(ue)&&m[ue]!=null)if(ue==="style"){var k=m[ue];for(A in k)k.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(s.hasOwnProperty(ue)?y||(y=[]):(y=y||[]).push(ue,null));for(ue in d){var H=d[ue];if(k=m!=null?m[ue]:void 0,d.hasOwnProperty(ue)&&H!==k&&(H!=null||k!=null))if(ue==="style")if(k){for(A in k)!k.hasOwnProperty(A)||H&&H.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in H)H.hasOwnProperty(A)&&k[A]!==H[A]&&(l||(l={}),l[A]=H[A])}else l||(y||(y=[]),y.push(ue,l)),l=H;else ue==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,k=k?k.__html:void 0,H!=null&&k!==H&&(y=y||[]).push(ue,H)):ue==="children"?typeof H!="string"&&typeof H!="number"||(y=y||[]).push(ue,""+H):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(s.hasOwnProperty(ue)?(H!=null&&ue==="onScroll"&&Zt("scroll",n),y||k===H||(y=[])):(y=y||[]).push(ue,H))}l&&(y=y||[]).push("style",l);var ue=y;(r.updateQueue=ue)&&(r.flags|=4)}},x0=function(n,r,l,d){l!==d&&(r.flags|=4)};function ba(n,r){if(!rn)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function Fn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function T_(n,r,l){var d=r.pendingProps;switch(id(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(r),null;case 1:return ei(r.type)&&yl(),Fn(r),null;case 3:return d=r.stateNode,ao(),Qt(Jn),Qt(Un),gd(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(wl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Di!==null&&(jd(Di),Di=null))),Ud(n,r),Fn(r),null;case 5:pd(r);var m=ms(Sa.current);if(l=r.type,n!==null&&r.stateNode!=null)v0(n,r,l,d,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return Fn(r),null}if(n=ms(qi.current),wl(r)){d=r.stateNode,l=r.type;var y=r.memoizedProps;switch(d[Yi]=r,d[ga]=y,n=(r.mode&1)!==0,l){case"dialog":Zt("cancel",d),Zt("close",d);break;case"iframe":case"object":case"embed":Zt("load",d);break;case"video":case"audio":for(m=0;m<fa.length;m++)Zt(fa[m],d);break;case"source":Zt("error",d);break;case"img":case"image":case"link":Zt("error",d),Zt("load",d);break;case"details":Zt("toggle",d);break;case"input":bt(d,y),Zt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!y.multiple},Zt("invalid",d);break;case"textarea":j(d,y),Zt("invalid",d)}qe(l,y),m=null;for(var A in y)if(y.hasOwnProperty(A)){var k=y[A];A==="children"?typeof k=="string"?d.textContent!==k&&(y.suppressHydrationWarning!==!0&&vl(d.textContent,k,n),m=["children",k]):typeof k=="number"&&d.textContent!==""+k&&(y.suppressHydrationWarning!==!0&&vl(d.textContent,k,n),m=["children",""+k]):s.hasOwnProperty(A)&&k!=null&&A==="onScroll"&&Zt("scroll",d)}switch(l){case"input":it(d),un(d,y,!0);break;case"textarea":it(d),It(d);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(d.onclick=xl)}d=m,r.updateQueue=d,d!==null&&(r.flags|=4)}else{A=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=A.createElement(l,{is:d.is}):(n=A.createElement(l),l==="select"&&(A=n,d.multiple?A.multiple=!0:d.size&&(A.size=d.size))):n=A.createElementNS(n,l),n[Yi]=r,n[ga]=d,g0(n,r,!1,!1),r.stateNode=n;e:{switch(A=Ie(l,d),l){case"dialog":Zt("cancel",n),Zt("close",n),m=d;break;case"iframe":case"object":case"embed":Zt("load",n),m=d;break;case"video":case"audio":for(m=0;m<fa.length;m++)Zt(fa[m],n);m=d;break;case"source":Zt("error",n),m=d;break;case"img":case"image":case"link":Zt("error",n),Zt("load",n),m=d;break;case"details":Zt("toggle",n),m=d;break;case"input":bt(n,d),m=Ut(n,d),Zt("invalid",n);break;case"option":m=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},m=de({},d,{value:void 0}),Zt("invalid",n);break;case"textarea":j(n,d),m=tn(n,d),Zt("invalid",n);break;default:m=d}qe(l,m),k=m;for(y in k)if(k.hasOwnProperty(y)){var H=k[y];y==="style"?ge(n,H):y==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&oe(n,H)):y==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&he(n,H):typeof H=="number"&&he(n,""+H):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(s.hasOwnProperty(y)?H!=null&&y==="onScroll"&&Zt("scroll",n):H!=null&&L(n,y,H,A))}switch(l){case"input":it(n),un(n,d,!1);break;case"textarea":it(n),It(n);break;case"option":d.value!=null&&n.setAttribute("value",""+me(d.value));break;case"select":n.multiple=!!d.multiple,y=d.value,y!=null?Gt(n,!!d.multiple,y,!1):d.defaultValue!=null&&Gt(n,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=xl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Fn(r),null;case 6:if(n&&r.stateNode!=null)x0(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=ms(Sa.current),ms(qi.current),wl(r)){if(d=r.stateNode,l=r.memoizedProps,d[Yi]=r,(y=d.nodeValue!==l)&&(n=ci,n!==null))switch(n.tag){case 3:vl(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&vl(d.nodeValue,l,(n.mode&1)!==0)}y&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Yi]=r,r.stateNode=d}return Fn(r),null;case 13:if(Qt(an),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(rn&&ui!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Sm(),io(),r.flags|=98560,y=!1;else if(y=wl(r),d!==null&&d.dehydrated!==null){if(n===null){if(!y)throw Error(t(318));if(y=r.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Yi]=r}else io(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Fn(r),y=!1}else Di!==null&&(jd(Di),Di=null),y=!0;if(!y)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(an.current&1)!==0?Mn===0&&(Mn=3):$d())),r.updateQueue!==null&&(r.flags|=4),Fn(r),null);case 4:return ao(),Ud(n,r),n===null&&pa(r.stateNode.containerInfo),Fn(r),null;case 10:return cd(r.type._context),Fn(r),null;case 17:return ei(r.type)&&yl(),Fn(r),null;case 19:if(Qt(an),y=r.memoizedState,y===null)return Fn(r),null;if(d=(r.flags&128)!==0,A=y.rendering,A===null)if(d)ba(y,!1);else{if(Mn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=Nl(n),A!==null){for(r.flags|=128,ba(y,!1),d=A.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)y=l,n=d,y.flags&=14680066,A=y.alternate,A===null?(y.childLanes=0,y.lanes=n,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=A.childLanes,y.lanes=A.lanes,y.child=A.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=A.memoizedProps,y.memoizedState=A.memoizedState,y.updateQueue=A.updateQueue,y.type=A.type,n=A.dependencies,y.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return $t(an,an.current&1|2),r.child}n=n.sibling}y.tail!==null&&on()>ho&&(r.flags|=128,d=!0,ba(y,!1),r.lanes=4194304)}else{if(!d)if(n=Nl(A),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ba(y,!0),y.tail===null&&y.tailMode==="hidden"&&!A.alternate&&!rn)return Fn(r),null}else 2*on()-y.renderingStartTime>ho&&l!==1073741824&&(r.flags|=128,d=!0,ba(y,!1),r.lanes=4194304);y.isBackwards?(A.sibling=r.child,r.child=A):(l=y.last,l!==null?l.sibling=A:r.child=A,y.last=A)}return y.tail!==null?(r=y.tail,y.rendering=r,y.tail=r.sibling,y.renderingStartTime=on(),r.sibling=null,l=an.current,$t(an,d?l&1|2:l&1),r):(Fn(r),null);case 22:case 23:return qd(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(di&1073741824)!==0&&(Fn(r),r.subtreeFlags&6&&(r.flags|=8192)):Fn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function w_(n,r){switch(id(r),r.tag){case 1:return ei(r.type)&&yl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ao(),Qt(Jn),Qt(Un),gd(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return pd(r),null;case 13:if(Qt(an),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));io()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Qt(an),null;case 4:return ao(),null;case 10:return cd(r.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var zl=!1,kn=!1,b_=typeof WeakSet=="function"?WeakSet:Set,ze=null;function co(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){hn(n,r,d)}else l.current=null}function Od(n,r,l){try{l()}catch(d){hn(n,r,d)}}var _0=!1;function A_(n,r){if(qu=ol,n=Zp(),zu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var m=d.anchorOffset,y=d.focusNode;d=d.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var A=0,k=-1,H=-1,ue=0,ye=0,Se=n,_e=null;t:for(;;){for(var ke;Se!==l||m!==0&&Se.nodeType!==3||(k=A+m),Se!==y||d!==0&&Se.nodeType!==3||(H=A+d),Se.nodeType===3&&(A+=Se.nodeValue.length),(ke=Se.firstChild)!==null;)_e=Se,Se=ke;for(;;){if(Se===n)break t;if(_e===l&&++ue===m&&(k=A),_e===y&&++ye===d&&(H=A),(ke=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=ke}l=k===-1||H===-1?null:{start:k,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for($u={focusedElem:n,selectionRange:l},ol=!1,ze=r;ze!==null;)if(r=ze,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ze=n;else for(;ze!==null;){r=ze;try{var He=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ye=He.memoizedProps,pn=He.memoizedState,ee=r.stateNode,X=ee.getSnapshotBeforeUpdate(r.elementType===r.type?Ye:Ui(r.type,Ye),pn);ee.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var re=r.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){hn(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,ze=n;break}ze=r.return}return He=_0,_0=!1,He}function Aa(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&n)===n){var y=m.destroy;m.destroy=void 0,y!==void 0&&Od(r,l,y)}m=m.next}while(m!==d)}}function Gl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function Fd(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function y0(n){var r=n.alternate;r!==null&&(n.alternate=null,y0(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Yi],delete r[ga],delete r[Ju],delete r[c_],delete r[u_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function S0(n){return n.tag===5||n.tag===3||n.tag===4}function M0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||S0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kd(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=xl));else if(d!==4&&(n=n.child,n!==null))for(kd(n,r,l),n=n.sibling;n!==null;)kd(n,r,l),n=n.sibling}function Bd(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(Bd(n,r,l),n=n.sibling;n!==null;)Bd(n,r,l),n=n.sibling}var In=null,Oi=!1;function zr(n,r,l){for(l=l.child;l!==null;)E0(n,r,l),l=l.sibling}function E0(n,r,l){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(ne,l)}catch{}switch(l.tag){case 5:kn||co(l,r);case 6:var d=In,m=Oi;In=null,zr(n,r,l),In=d,Oi=m,In!==null&&(Oi?(n=In,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):In.removeChild(l.stateNode));break;case 18:In!==null&&(Oi?(n=In,l=l.stateNode,n.nodeType===8?Qu(n.parentNode,l):n.nodeType===1&&Qu(n,l),sa(n)):Qu(In,l.stateNode));break;case 4:d=In,m=Oi,In=l.stateNode.containerInfo,Oi=!0,zr(n,r,l),In=d,Oi=m;break;case 0:case 11:case 14:case 15:if(!kn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var y=m,A=y.destroy;y=y.tag,A!==void 0&&((y&2)!==0||(y&4)!==0)&&Od(l,r,A),m=m.next}while(m!==d)}zr(n,r,l);break;case 1:if(!kn&&(co(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(k){hn(l,r,k)}zr(n,r,l);break;case 21:zr(n,r,l);break;case 22:l.mode&1?(kn=(d=kn)||l.memoizedState!==null,zr(n,r,l),kn=d):zr(n,r,l);break;default:zr(n,r,l)}}function T0(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new b_),r.forEach(function(d){var m=O_.bind(null,n,d);l.has(d)||(l.add(d),d.then(m,m))})}}function Fi(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var m=l[d];try{var y=n,A=r,k=A;e:for(;k!==null;){switch(k.tag){case 5:In=k.stateNode,Oi=!1;break e;case 3:In=k.stateNode.containerInfo,Oi=!0;break e;case 4:In=k.stateNode.containerInfo,Oi=!0;break e}k=k.return}if(In===null)throw Error(t(160));E0(y,A,m),In=null,Oi=!1;var H=m.alternate;H!==null&&(H.return=null),m.return=null}catch(ue){hn(m,r,ue)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)w0(r,n),r=r.sibling}function w0(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fi(r,n),Ki(n),d&4){try{Aa(3,n,n.return),Gl(3,n)}catch(Ye){hn(n,n.return,Ye)}try{Aa(5,n,n.return)}catch(Ye){hn(n,n.return,Ye)}}break;case 1:Fi(r,n),Ki(n),d&512&&l!==null&&co(l,l.return);break;case 5:if(Fi(r,n),Ki(n),d&512&&l!==null&&co(l,l.return),n.flags&32){var m=n.stateNode;try{he(m,"")}catch(Ye){hn(n,n.return,Ye)}}if(d&4&&(m=n.stateNode,m!=null)){var y=n.memoizedProps,A=l!==null?l.memoizedProps:y,k=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{k==="input"&&y.type==="radio"&&y.name!=null&&Mt(m,y),Ie(k,A);var ue=Ie(k,y);for(A=0;A<H.length;A+=2){var ye=H[A],Se=H[A+1];ye==="style"?ge(m,Se):ye==="dangerouslySetInnerHTML"?oe(m,Se):ye==="children"?he(m,Se):L(m,ye,Se,ue)}switch(k){case"input":en(m,y);break;case"textarea":Pn(m,y);break;case"select":var _e=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!y.multiple;var ke=y.value;ke!=null?Gt(m,!!y.multiple,ke,!1):_e!==!!y.multiple&&(y.defaultValue!=null?Gt(m,!!y.multiple,y.defaultValue,!0):Gt(m,!!y.multiple,y.multiple?[]:"",!1))}m[ga]=y}catch(Ye){hn(n,n.return,Ye)}}break;case 6:if(Fi(r,n),Ki(n),d&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,y=n.memoizedProps;try{m.nodeValue=y}catch(Ye){hn(n,n.return,Ye)}}break;case 3:if(Fi(r,n),Ki(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{sa(r.containerInfo)}catch(Ye){hn(n,n.return,Ye)}break;case 4:Fi(r,n),Ki(n);break;case 13:Fi(r,n),Ki(n),m=n.child,m.flags&8192&&(y=m.memoizedState!==null,m.stateNode.isHidden=y,!y||m.alternate!==null&&m.alternate.memoizedState!==null||(Vd=on())),d&4&&T0(n);break;case 22:if(ye=l!==null&&l.memoizedState!==null,n.mode&1?(kn=(ue=kn)||ye,Fi(r,n),kn=ue):Fi(r,n),Ki(n),d&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!ye&&(n.mode&1)!==0)for(ze=n,ye=n.child;ye!==null;){for(Se=ze=ye;ze!==null;){switch(_e=ze,ke=_e.child,_e.tag){case 0:case 11:case 14:case 15:Aa(4,_e,_e.return);break;case 1:co(_e,_e.return);var He=_e.stateNode;if(typeof He.componentWillUnmount=="function"){d=_e,l=_e.return;try{r=d,He.props=r.memoizedProps,He.state=r.memoizedState,He.componentWillUnmount()}catch(Ye){hn(d,l,Ye)}}break;case 5:co(_e,_e.return);break;case 22:if(_e.memoizedState!==null){C0(Se);continue}}ke!==null?(ke.return=_e,ze=ke):C0(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{m=Se.stateNode,ue?(y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(k=Se.stateNode,H=Se.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null,k.style.display=fe("display",A))}catch(Ye){hn(n,n.return,Ye)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=ue?"":Se.memoizedProps}catch(Ye){hn(n,n.return,Ye)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Fi(r,n),Ki(n),d&4&&T0(n);break;case 21:break;default:Fi(r,n),Ki(n)}}function Ki(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(S0(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(he(m,""),d.flags&=-33);var y=M0(n);Bd(n,y,m);break;case 3:case 4:var A=d.stateNode.containerInfo,k=M0(n);kd(n,k,A);break;default:throw Error(t(161))}}catch(H){hn(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function C_(n,r,l){ze=n,b0(n)}function b0(n,r,l){for(var d=(n.mode&1)!==0;ze!==null;){var m=ze,y=m.child;if(m.tag===22&&d){var A=m.memoizedState!==null||zl;if(!A){var k=m.alternate,H=k!==null&&k.memoizedState!==null||kn;k=zl;var ue=kn;if(zl=A,(kn=H)&&!ue)for(ze=m;ze!==null;)A=ze,H=A.child,A.tag===22&&A.memoizedState!==null?R0(m):H!==null?(H.return=A,ze=H):R0(m);for(;y!==null;)ze=y,b0(y),y=y.sibling;ze=m,zl=k,kn=ue}A0(n)}else(m.subtreeFlags&8772)!==0&&y!==null?(y.return=m,ze=y):A0(n)}}function A0(n){for(;ze!==null;){var r=ze;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:kn||Gl(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!kn)if(l===null)d.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:Ui(r.type,l.memoizedProps);d.componentDidUpdate(m,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var y=r.updateQueue;y!==null&&Cm(r,y,d);break;case 3:var A=r.updateQueue;if(A!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Cm(r,A,l)}break;case 5:var k=r.stateNode;if(l===null&&r.flags&4){l=k;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ue=r.alternate;if(ue!==null){var ye=ue.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&sa(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}kn||r.flags&512&&Fd(r)}catch(_e){hn(r,r.return,_e)}}if(r===n){ze=null;break}if(l=r.sibling,l!==null){l.return=r.return,ze=l;break}ze=r.return}}function C0(n){for(;ze!==null;){var r=ze;if(r===n){ze=null;break}var l=r.sibling;if(l!==null){l.return=r.return,ze=l;break}ze=r.return}}function R0(n){for(;ze!==null;){var r=ze;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Gl(4,r)}catch(H){hn(r,l,H)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var m=r.return;try{d.componentDidMount()}catch(H){hn(r,m,H)}}var y=r.return;try{Fd(r)}catch(H){hn(r,y,H)}break;case 5:var A=r.return;try{Fd(r)}catch(H){hn(r,A,H)}}}catch(H){hn(r,r.return,H)}if(r===n){ze=null;break}var k=r.sibling;if(k!==null){k.return=r.return,ze=k;break}ze=r.return}}var R_=Math.ceil,Vl=C.ReactCurrentDispatcher,zd=C.ReactCurrentOwner,Ti=C.ReactCurrentBatchConfig,Nt=0,An=null,_n=null,Ln=0,di=0,uo=Ur(0),Mn=0,Ca=null,vs=0,Hl=0,Gd=0,Ra=null,ni=null,Vd=0,ho=1/0,fr=null,Wl=!1,Hd=null,Gr=null,Xl=!1,Vr=null,jl=0,Pa=0,Wd=null,Yl=-1,ql=0;function jn(){return(Nt&6)!==0?on():Yl!==-1?Yl:Yl=on()}function Hr(n){return(n.mode&1)===0?1:(Nt&2)!==0&&Ln!==0?Ln&-Ln:h_.transition!==null?(ql===0&&(ql=Fe()),ql):(n=yt,n!==0||(n=window.event,n=n===void 0?16:Np(n.type)),n)}function ki(n,r,l,d){if(50<Pa)throw Pa=0,Wd=null,Error(t(185));xt(n,l,d),((Nt&2)===0||n!==An)&&(n===An&&((Nt&2)===0&&(Hl|=l),Mn===4&&Wr(n,Ln)),ii(n,d),l===1&&Nt===0&&(r.mode&1)===0&&(ho=on()+500,Ml&&Fr()))}function ii(n,r){var l=n.callbackNode;Vt(n,r);var d=qt(n,n===An?Ln:0);if(d===0)l!==null&&Jo(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&Jo(l),r===1)n.tag===0?d_(N0.bind(null,n)):gm(N0.bind(null,n)),a_(function(){(Nt&6)===0&&Fr()}),l=null;else{switch(sr(d)){case 1:l=ea;break;case 4:l=N;break;case 16:l=q;break;case 536870912:l=ie;break;default:l=q}l=B0(l,P0.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function P0(n,r){if(Yl=-1,ql=0,(Nt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(fo()&&n.callbackNode!==l)return null;var d=qt(n,n===An?Ln:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=$l(n,d);else{r=d;var m=Nt;Nt|=2;var y=L0();(An!==n||Ln!==r)&&(fr=null,ho=on()+500,_s(n,r));do try{I_();break}catch(k){I0(n,k)}while(!0);ld(),Vl.current=y,Nt=m,_n!==null?r=0:(An=null,Ln=0,r=Mn)}if(r!==0){if(r===2&&(m=xn(n),m!==0&&(d=m,r=Xd(n,m))),r===1)throw l=Ca,_s(n,0),Wr(n,d),ii(n,on()),l;if(r===6)Wr(n,d);else{if(m=n.current.alternate,(d&30)===0&&!P_(m)&&(r=$l(n,d),r===2&&(y=xn(n),y!==0&&(d=y,r=Xd(n,y))),r===1))throw l=Ca,_s(n,0),Wr(n,d),ii(n,on()),l;switch(n.finishedWork=m,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:ys(n,ni,fr);break;case 3:if(Wr(n,d),(d&130023424)===d&&(r=Vd+500-on(),10<r)){if(qt(n,0)!==0)break;if(m=n.suspendedLanes,(m&d)!==d){jn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=Zu(ys.bind(null,n,ni,fr),r);break}ys(n,ni,fr);break;case 4:if(Wr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,m=-1;0<d;){var A=31-we(d);y=1<<A,A=r[A],A>m&&(m=A),d&=~y}if(d=m,d=on()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*R_(d/1960))-d,10<d){n.timeoutHandle=Zu(ys.bind(null,n,ni,fr),d);break}ys(n,ni,fr);break;case 5:ys(n,ni,fr);break;default:throw Error(t(329))}}}return ii(n,on()),n.callbackNode===l?P0.bind(null,n):null}function Xd(n,r){var l=Ra;return n.current.memoizedState.isDehydrated&&(_s(n,r).flags|=256),n=$l(n,r),n!==2&&(r=ni,ni=l,r!==null&&jd(r)),n}function jd(n){ni===null?ni=n:ni.push.apply(ni,n)}function P_(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var m=l[d],y=m.getSnapshot;m=m.value;try{if(!Li(y(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wr(n,r){for(r&=~Gd,r&=~Hl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-we(r),d=1<<l;n[l]=-1,r&=~d}}function N0(n){if((Nt&6)!==0)throw Error(t(327));fo();var r=qt(n,0);if((r&1)===0)return ii(n,on()),null;var l=$l(n,r);if(n.tag!==0&&l===2){var d=xn(n);d!==0&&(r=d,l=Xd(n,d))}if(l===1)throw l=Ca,_s(n,0),Wr(n,r),ii(n,on()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ys(n,ni,fr),ii(n,on()),null}function Yd(n,r){var l=Nt;Nt|=1;try{return n(r)}finally{Nt=l,Nt===0&&(ho=on()+500,Ml&&Fr())}}function xs(n){Vr!==null&&Vr.tag===0&&(Nt&6)===0&&fo();var r=Nt;Nt|=1;var l=Ti.transition,d=yt;try{if(Ti.transition=null,yt=1,n)return n()}finally{yt=d,Ti.transition=l,Nt=r,(Nt&6)===0&&Fr()}}function qd(){di=uo.current,Qt(uo)}function _s(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,o_(l)),_n!==null)for(l=_n.return;l!==null;){var d=l;switch(id(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&yl();break;case 3:ao(),Qt(Jn),Qt(Un),gd();break;case 5:pd(d);break;case 4:ao();break;case 13:Qt(an);break;case 19:Qt(an);break;case 10:cd(d.type._context);break;case 22:case 23:qd()}l=l.return}if(An=n,_n=n=Xr(n.current,null),Ln=di=r,Mn=0,Ca=null,Gd=Hl=vs=0,ni=Ra=null,ps!==null){for(r=0;r<ps.length;r++)if(l=ps[r],d=l.interleaved,d!==null){l.interleaved=null;var m=d.next,y=l.pending;if(y!==null){var A=y.next;y.next=m,d.next=A}l.pending=d}ps=null}return n}function I0(n,r){do{var l=_n;try{if(ld(),Il.current=Ol,Ll){for(var d=ln.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}Ll=!1}if(gs=0,bn=Sn=ln=null,Ma=!1,Ea=0,zd.current=null,l===null||l.return===null){Mn=1,Ca=r,_n=null;break}e:{var y=n,A=l.return,k=l,H=r;if(r=Ln,k.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ue=H,ye=k,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ke=i0(A);if(ke!==null){ke.flags&=-257,r0(ke,A,k,y,r),ke.mode&1&&n0(y,ue,r),r=ke,H=ue;var He=r.updateQueue;if(He===null){var Ye=new Set;Ye.add(H),r.updateQueue=Ye}else He.add(H);break e}else{if((r&1)===0){n0(y,ue,r),$d();break e}H=Error(t(426))}}else if(rn&&k.mode&1){var pn=i0(A);if(pn!==null){(pn.flags&65536)===0&&(pn.flags|=256),r0(pn,A,k,y,r),od(lo(H,k));break e}}y=H=lo(H,k),Mn!==4&&(Mn=2),Ra===null?Ra=[y]:Ra.push(y),y=A;do{switch(y.tag){case 3:y.flags|=65536,r&=-r,y.lanes|=r;var ee=e0(y,H,r);Am(y,ee);break e;case 1:k=H;var X=y.type,re=y.stateNode;if((y.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Gr===null||!Gr.has(re)))){y.flags|=65536,r&=-r,y.lanes|=r;var Te=t0(y,k,r);Am(y,Te);break e}}y=y.return}while(y!==null)}U0(l)}catch(Ze){r=Ze,_n===l&&l!==null&&(_n=l=l.return);continue}break}while(!0)}function L0(){var n=Vl.current;return Vl.current=Ol,n===null?Ol:n}function $d(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),An===null||(vs&268435455)===0&&(Hl&268435455)===0||Wr(An,Ln)}function $l(n,r){var l=Nt;Nt|=2;var d=L0();(An!==n||Ln!==r)&&(fr=null,_s(n,r));do try{N_();break}catch(m){I0(n,m)}while(!0);if(ld(),Nt=l,Vl.current=d,_n!==null)throw Error(t(261));return An=null,Ln=0,Mn}function N_(){for(;_n!==null;)D0(_n)}function I_(){for(;_n!==null&&!rl();)D0(_n)}function D0(n){var r=k0(n.alternate,n,di);n.memoizedProps=n.pendingProps,r===null?U0(n):_n=r,zd.current=null}function U0(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=T_(l,r,di),l!==null){_n=l;return}}else{if(l=w_(l,r),l!==null){l.flags&=32767,_n=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Mn=6,_n=null;return}}if(r=r.sibling,r!==null){_n=r;return}_n=r=n}while(r!==null);Mn===0&&(Mn=5)}function ys(n,r,l){var d=yt,m=Ti.transition;try{Ti.transition=null,yt=1,L_(n,r,l,d)}finally{Ti.transition=m,yt=d}return null}function L_(n,r,l,d){do fo();while(Vr!==null);if((Nt&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var y=l.lanes|l.childLanes;if(Zn(n,y),n===An&&(_n=An=null,Ln=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Xl||(Xl=!0,B0(q,function(){return fo(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=Ti.transition,Ti.transition=null;var A=yt;yt=1;var k=Nt;Nt|=4,zd.current=null,A_(n,l),w0(l,n),Jx($u),ol=!!qu,$u=qu=null,n.current=l,C_(l),Au(),Nt=k,yt=A,Ti.transition=y}else n.current=l;if(Xl&&(Xl=!1,Vr=n,jl=m),y=n.pendingLanes,y===0&&(Gr=null),Be(l.stateNode),ii(n,on()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],d(m.value,{componentStack:m.stack,digest:m.digest});if(Wl)throw Wl=!1,n=Hd,Hd=null,n;return(jl&1)!==0&&n.tag!==0&&fo(),y=n.pendingLanes,(y&1)!==0?n===Wd?Pa++:(Pa=0,Wd=n):Pa=0,Fr(),null}function fo(){if(Vr!==null){var n=sr(jl),r=Ti.transition,l=yt;try{if(Ti.transition=null,yt=16>n?16:n,Vr===null)var d=!1;else{if(n=Vr,Vr=null,jl=0,(Nt&6)!==0)throw Error(t(331));var m=Nt;for(Nt|=4,ze=n.current;ze!==null;){var y=ze,A=y.child;if((ze.flags&16)!==0){var k=y.deletions;if(k!==null){for(var H=0;H<k.length;H++){var ue=k[H];for(ze=ue;ze!==null;){var ye=ze;switch(ye.tag){case 0:case 11:case 15:Aa(8,ye,y)}var Se=ye.child;if(Se!==null)Se.return=ye,ze=Se;else for(;ze!==null;){ye=ze;var _e=ye.sibling,ke=ye.return;if(y0(ye),ye===ue){ze=null;break}if(_e!==null){_e.return=ke,ze=_e;break}ze=ke}}}var He=y.alternate;if(He!==null){var Ye=He.child;if(Ye!==null){He.child=null;do{var pn=Ye.sibling;Ye.sibling=null,Ye=pn}while(Ye!==null)}}ze=y}}if((y.subtreeFlags&2064)!==0&&A!==null)A.return=y,ze=A;else e:for(;ze!==null;){if(y=ze,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:Aa(9,y,y.return)}var ee=y.sibling;if(ee!==null){ee.return=y.return,ze=ee;break e}ze=y.return}}var X=n.current;for(ze=X;ze!==null;){A=ze;var re=A.child;if((A.subtreeFlags&2064)!==0&&re!==null)re.return=A,ze=re;else e:for(A=X;ze!==null;){if(k=ze,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Gl(9,k)}}catch(Ze){hn(k,k.return,Ze)}if(k===A){ze=null;break e}var Te=k.sibling;if(Te!==null){Te.return=k.return,ze=Te;break e}ze=k.return}}if(Nt=m,Fr(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(ne,n)}catch{}d=!0}return d}finally{yt=l,Ti.transition=r}}return!1}function O0(n,r,l){r=lo(l,r),r=e0(n,r,1),n=Br(n,r,1),r=jn(),n!==null&&(xt(n,1,r),ii(n,r))}function hn(n,r,l){if(n.tag===3)O0(n,n,l);else for(;r!==null;){if(r.tag===3){O0(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Gr===null||!Gr.has(d))){n=lo(l,n),n=t0(r,n,1),r=Br(r,n,1),n=jn(),r!==null&&(xt(r,1,n),ii(r,n));break}}r=r.return}}function D_(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=jn(),n.pingedLanes|=n.suspendedLanes&l,An===n&&(Ln&l)===l&&(Mn===4||Mn===3&&(Ln&130023424)===Ln&&500>on()-Vd?_s(n,0):Gd|=l),ii(n,r)}function F0(n,r){r===0&&((n.mode&1)===0?r=1:(r=$e,$e<<=1,($e&130023424)===0&&($e=4194304)));var l=jn();n=ur(n,r),n!==null&&(xt(n,r,l),ii(n,l))}function U_(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),F0(n,l)}function O_(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),F0(n,l)}var k0;k0=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Jn.current)ti=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return ti=!1,E_(n,r,l);ti=(n.flags&131072)!==0}else ti=!1,rn&&(r.flags&1048576)!==0&&vm(r,Tl,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Bl(n,r),n=r.pendingProps;var m=eo(r,Un.current);oo(r,l),m=_d(null,r,d,n,m,l);var y=yd();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ei(d)?(y=!0,Sl(r)):y=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,hd(r),m.updater=Fl,r.stateNode=m,m._reactInternals=r,bd(r,d,n,l),r=Pd(null,r,d,!0,y,l)):(r.tag=0,rn&&y&&nd(r),Xn(null,r,m,l),r=r.child),r;case 16:d=r.elementType;e:{switch(Bl(n,r),n=r.pendingProps,m=d._init,d=m(d._payload),r.type=d,m=r.tag=k_(d),n=Ui(d,n),m){case 0:r=Rd(null,r,d,n,l);break e;case 1:r=u0(null,r,d,n,l);break e;case 11:r=s0(null,r,d,n,l);break e;case 14:r=o0(null,r,d,Ui(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:Ui(d,m),Rd(n,r,d,m,l);case 1:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:Ui(d,m),u0(n,r,d,m,l);case 3:e:{if(d0(r),n===null)throw Error(t(387));d=r.pendingProps,y=r.memoizedState,m=y.element,bm(n,r),Pl(r,d,null,l);var A=r.memoizedState;if(d=A.element,y.isDehydrated)if(y={element:d,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=y,r.memoizedState=y,r.flags&256){m=lo(Error(t(423)),r),r=h0(n,r,d,l,m);break e}else if(d!==m){m=lo(Error(t(424)),r),r=h0(n,r,d,l,m);break e}else for(ui=Dr(r.stateNode.containerInfo.firstChild),ci=r,rn=!0,Di=null,l=Tm(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(io(),d===m){r=hr(n,r,l);break e}Xn(n,r,d,l)}r=r.child}return r;case 5:return Rm(r),n===null&&sd(r),d=r.type,m=r.pendingProps,y=n!==null?n.memoizedProps:null,A=m.children,Ku(d,m)?A=null:y!==null&&Ku(d,y)&&(r.flags|=32),c0(n,r),Xn(n,r,A,l),r.child;case 6:return n===null&&sd(r),null;case 13:return f0(n,r,l);case 4:return fd(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=ro(r,null,d,l):Xn(n,r,d,l),r.child;case 11:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:Ui(d,m),s0(n,r,d,m,l);case 7:return Xn(n,r,r.pendingProps,l),r.child;case 8:return Xn(n,r,r.pendingProps.children,l),r.child;case 12:return Xn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,m=r.pendingProps,y=r.memoizedProps,A=m.value,$t(Al,d._currentValue),d._currentValue=A,y!==null)if(Li(y.value,A)){if(y.children===m.children&&!Jn.current){r=hr(n,r,l);break e}}else for(y=r.child,y!==null&&(y.return=r);y!==null;){var k=y.dependencies;if(k!==null){A=y.child;for(var H=k.firstContext;H!==null;){if(H.context===d){if(y.tag===1){H=dr(-1,l&-l),H.tag=2;var ue=y.updateQueue;if(ue!==null){ue=ue.shared;var ye=ue.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),ue.pending=H}}y.lanes|=l,H=y.alternate,H!==null&&(H.lanes|=l),ud(y.return,l,r),k.lanes|=l;break}H=H.next}}else if(y.tag===10)A=y.type===r.type?null:y.child;else if(y.tag===18){if(A=y.return,A===null)throw Error(t(341));A.lanes|=l,k=A.alternate,k!==null&&(k.lanes|=l),ud(A,l,r),A=y.sibling}else A=y.child;if(A!==null)A.return=y;else for(A=y;A!==null;){if(A===r){A=null;break}if(y=A.sibling,y!==null){y.return=A.return,A=y;break}A=A.return}y=A}Xn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,d=r.pendingProps.children,oo(r,l),m=Mi(m),d=d(m),r.flags|=1,Xn(n,r,d,l),r.child;case 14:return d=r.type,m=Ui(d,r.pendingProps),m=Ui(d.type,m),o0(n,r,d,m,l);case 15:return a0(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:Ui(d,m),Bl(n,r),r.tag=1,ei(d)?(n=!0,Sl(r)):n=!1,oo(r,l),Qm(r,d,m),bd(r,d,m,l),Pd(null,r,d,!0,n,l);case 19:return m0(n,r,l);case 22:return l0(n,r,l)}throw Error(t(156,r.tag))};function B0(n,r){return ls(n,r)}function F_(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(n,r,l,d){return new F_(n,r,l,d)}function Kd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function k_(n){if(typeof n=="function")return Kd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===z)return 11;if(n===Y)return 14}return 2}function Xr(n,r){var l=n.alternate;return l===null?(l=wi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Kl(n,r,l,d,m,y){var A=2;if(d=n,typeof n=="function")Kd(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case O:return Ss(l.children,m,y,r);case w:A=8,m|=8;break;case R:return n=wi(12,l,r,m|2),n.elementType=R,n.lanes=y,n;case K:return n=wi(13,l,r,m),n.elementType=K,n.lanes=y,n;case te:return n=wi(19,l,r,m),n.elementType=te,n.lanes=y,n;case Z:return Zl(l,m,y,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case F:A=10;break e;case B:A=9;break e;case z:A=11;break e;case Y:A=14;break e;case ae:A=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=wi(A,l,r,m),r.elementType=n,r.type=d,r.lanes=y,r}function Ss(n,r,l,d){return n=wi(7,n,d,r),n.lanes=l,n}function Zl(n,r,l,d){return n=wi(22,n,d,r),n.elementType=Z,n.lanes=l,n.stateNode={isHidden:!1},n}function Zd(n,r,l){return n=wi(6,n,null,r),n.lanes=l,n}function Qd(n,r,l){return r=wi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function B_(n,r,l,d,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nn(0),this.expirationTimes=Nn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nn(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Jd(n,r,l,d,m,y,A,k,H){return n=new B_(n,r,l,k,H),r===1?(r=1,y===!0&&(r|=8)):r=0,y=wi(3,null,null,r),n.current=y,y.stateNode=n,y.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},hd(y),n}function z_(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function z0(n){if(!n)return Or;n=n._reactInternals;e:{if(Wn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ei(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(ei(l))return pm(n,l,r)}return r}function G0(n,r,l,d,m,y,A,k,H){return n=Jd(l,d,!0,n,m,y,A,k,H),n.context=z0(null),l=n.current,d=jn(),m=Hr(l),y=dr(d,m),y.callback=r??null,Br(l,y,m),n.current.lanes=m,xt(n,m,d),ii(n,d),n}function Ql(n,r,l,d){var m=r.current,y=jn(),A=Hr(m);return l=z0(l),r.context===null?r.context=l:r.pendingContext=l,r=dr(y,A),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Br(m,r,A),n!==null&&(ki(n,m,A,y),Rl(n,m,A)),A}function Jl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function V0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function eh(n,r){V0(n,r),(n=n.alternate)&&V0(n,r)}function G_(){return null}var H0=typeof reportError=="function"?reportError:function(n){console.error(n)};function th(n){this._internalRoot=n}ec.prototype.render=th.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Ql(n,r,null,null)},ec.prototype.unmount=th.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;xs(function(){Ql(null,n,null,null)}),r[or]=null}};function ec(n){this._internalRoot=n}ec.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ht();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Nr.length&&r!==0&&r<Nr[l].priority;l++);Nr.splice(l,0,n),l===0&&Rp(n)}};function nh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function tc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function W0(){}function V_(n,r,l,d,m){if(m){if(typeof d=="function"){var y=d;d=function(){var ue=Jl(A);y.call(ue)}}var A=G0(r,d,n,0,null,!1,!1,"",W0);return n._reactRootContainer=A,n[or]=A.current,pa(n.nodeType===8?n.parentNode:n),xs(),A}for(;m=n.lastChild;)n.removeChild(m);if(typeof d=="function"){var k=d;d=function(){var ue=Jl(H);k.call(ue)}}var H=Jd(n,0,!1,null,null,!1,!1,"",W0);return n._reactRootContainer=H,n[or]=H.current,pa(n.nodeType===8?n.parentNode:n),xs(function(){Ql(r,H,l,d)}),H}function nc(n,r,l,d,m){var y=l._reactRootContainer;if(y){var A=y;if(typeof m=="function"){var k=m;m=function(){var H=Jl(A);k.call(H)}}Ql(r,A,n,m)}else A=V_(l,r,n,m,d);return Jl(A)}kt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=At(r.pendingLanes);l!==0&&(Qn(r,l|1),ii(r,on()),(Nt&6)===0&&(ho=on()+500,Fr()))}break;case 13:xs(function(){var d=ur(n,1);if(d!==null){var m=jn();ki(d,n,1,m)}}),eh(n,1)}},Kt=function(n){if(n.tag===13){var r=ur(n,134217728);if(r!==null){var l=jn();ki(r,n,134217728,l)}eh(n,134217728)}},Ni=function(n){if(n.tag===13){var r=Hr(n),l=ur(n,r);if(l!==null){var d=jn();ki(l,n,r,d)}eh(n,r)}},Ht=function(){return yt},Ii=function(n,r){var l=yt;try{return yt=n,r()}finally{yt=l}},rt=function(n,r,l){switch(r){case"input":if(en(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var m=_l(d);if(!m)throw Error(t(90));Jt(d),en(d,m)}}}break;case"textarea":Pn(n,l);break;case"select":r=l.value,r!=null&&Gt(n,!!l.multiple,r,!1)}},Le=Yd,ve=xs;var H_={usingClientEntryPoint:!1,Events:[va,Qs,_l,pe,Pe,Yd]},Na={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W_={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=as(n),n===null?null:n.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||G_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{ne=ic.inject(W_),be=ic}catch{}}return ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_,ri.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nh(r))throw Error(t(200));return z_(n,r,null,l)},ri.createRoot=function(n,r){if(!nh(n))throw Error(t(299));var l=!1,d="",m=H0;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=Jd(n,1,!1,null,null,l,!1,d,m),n[or]=r.current,pa(n.nodeType===8?n.parentNode:n),new th(r)},ri.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=as(r),n=n===null?null:n.stateNode,n},ri.flushSync=function(n){return xs(n)},ri.hydrate=function(n,r,l){if(!tc(r))throw Error(t(200));return nc(null,n,r,!0,l)},ri.hydrateRoot=function(n,r,l){if(!nh(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,m=!1,y="",A=H0;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),r=G0(r,null,n,1,l??null,m,!1,y,A),n[or]=r.current,pa(n),d)for(n=0;n<d.length;n++)l=d[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new ec(r)},ri.render=function(n,r,l){if(!tc(r))throw Error(t(200));return nc(null,n,r,!1,l)},ri.unmountComponentAtNode=function(n){if(!tc(n))throw Error(t(40));return n._reactRootContainer?(xs(function(){nc(null,null,n,!1,function(){n._reactRootContainer=null,n[or]=null})}),!0):!1},ri.unstable_batchedUpdates=Yd,ri.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!tc(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return nc(n,r,l,!1,d)},ri.version="18.3.1-next-f1338f8080-20240426",ri}var Q0;function Q_(){if(Q0)return sh.exports;Q0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),sh.exports=Z_(),sh.exports}var J0;function J_(){if(J0)return rc;J0=1;var o=Q_();return rc.createRoot=o.createRoot,rc.hydrateRoot=o.hydrateRoot,rc}var ey=J_();const ty=Mv(ey);var tt=qf();const sc=Mv(tt),eg=o=>{let e;const t=new Set,i=(f,p)=>{const v=typeof f=="function"?f(e):f;if(!Object.is(v,e)){const g=e;e=p??(typeof v!="object"||v===null)?v:Object.assign({},e,v),t.forEach(_=>_(e,g))}},s=()=>e,u={setState:i,getState:s,getInitialState:()=>h,subscribe:f=>(t.add(f),()=>t.delete(f))},h=e=o(i,s,u);return u},ny=(o=>o?eg(o):eg),iy=o=>o;function ry(o,e=iy){const t=sc.useSyncExternalStore(o.subscribe,sc.useCallback(()=>e(o.getState()),[o,e]),sc.useCallback(()=>e(o.getInitialState()),[o,e]));return sc.useDebugValue(t),t}const sy=o=>{const e=ny(o),t=i=>ry(e,i);return Object.assign(t,e),t},Ev=(o=>sy);class oy{constructor(){this.handlers=new Map,this.counters=new Map,this.totalEmitted=0,this.windowStart=performance.now(),this.windowCount=0,this.eventsPerSec=0}on(e,t){let i=this.handlers.get(e);return i||(i=new Set,this.handlers.set(e,i)),i.add(t),()=>this.off(e,t)}off(e,t){const i=this.handlers.get(e);i&&i.delete(t)}emit(e,t){this.counters.set(e,(this.counters.get(e)??0)+1),this.totalEmitted++,this.windowCount++;const i=performance.now();i-this.windowStart>=1e3&&(this.eventsPerSec=this.windowCount,this.windowCount=0,this.windowStart=i);const s=this.handlers.get(e);if(!s)return;const a=Array.from(s);for(const c of a)try{c(t)}catch(u){console.error(`[vortex-bus] handler error on ${String(e)}`,u)}}count(e){return this.counters.get(e)??0}}const Pt=new oy,Tv=[{id:"ag-strategist",name:"AURELIA",codename:"VANTAGE-1",role:"STRATEGIST",department:"COMMAND",color:"#d4af37",speed:.9,personality:{focus:.9,drive:.7,sociability:.8},workstation:0},{id:"ag-researcher",name:"ORION",codename:"SIFTER-2",role:"RESEARCHER",department:"KNOWLEDGE",color:"#00f0ff",speed:1.5,personality:{focus:.5,drive:.9,sociability:.6},workstation:1},{id:"ag-coder",name:"VEGA",codename:"FORGE-3",role:"CODER",department:"ENGINEERING",color:"#00ff66",speed:1.1,personality:{focus:1,drive:1,sociability:.25},workstation:2},{id:"ag-analyst",name:"LYRA",codename:"PRISM-4",role:"ANALYST",department:"INTELLIGENCE",color:"#7ad7ff",speed:1,personality:{focus:.85,drive:.8,sociability:.5},workstation:3},{id:"ag-security",name:"KERBEROS",codename:"WARDEN-5",role:"SECURITY",department:"DEFENSE",color:"#ff3333",speed:1.3,personality:{focus:.6,drive:.85,sociability:.35},workstation:4},{id:"ag-creative",name:"MUSE",codename:"LUMEN-6",role:"CREATIVE",department:"SYNTHESIS",color:"#ff7ad9",speed:1.05,personality:{focus:.55,drive:.75,sociability:.9},workstation:5},{id:"ag-automation",name:"ATLAS",codename:"CONDUIT-7",role:"AUTOMATION",department:"OPERATIONS",color:"#ffb700",speed:1.7,personality:{focus:.7,drive:1,sociability:.45},workstation:6},{id:"ag-executive",name:"HELIOS",codename:"SOVEREIGN-0",role:"EXECUTIVE",department:"COMMAND",color:"#e0e6ed",speed:.8,personality:{focus:.8,drive:.65,sociability:1},workstation:7}],Yc={STRATEGIST:["Projecting Q3 objective lattice","Weighing resource allocation vectors","Scanning horizon for asymmetric risks","Composing doctrine revision 7C"],RESEARCHER:["Crawling 4,096 abstracts for signal","Cross-indexing citation topology","Distilling whitepaper corpus v12","Verifying source provenance chain"],CODER:["Refactoring plasma shader passes","Compiling agent kernel module 9","Patching race in event dispatcher","Optimizing particle SIMD lanes"],ANALYST:["Clustering telemetry manifolds","Fitting Bayesian latency model","Reducing 88-dim feature space","Scoring anomaly hypersurface"],SECURITY:["Sweeping perimeter mesh sectors","Rotating cipher handshakes","Auditing vault access ledger","Tracing packet origin spoofing"],CREATIVE:["Sculpting holographic asset set","Tuning chromatic identity matrix","Drafting narrative branch 3B","Arranging spatial UI constellation"],AUTOMATION:["Routing pipeline packet bursts","Balancing queue throughput lanes","Scheduling cron constellation","Welding CI/CD junction nodes"],EXECUTIVE:["Synthesizing swarm mission brief","Aligning stakeholder vectors","Ratifying priority stack v44","Broadcasting command intent"]},tg=["ECHO-9","NOVA-11","ZEPHYR-12","ONYX-13","PULSE-14","RAZOR-15","SIGMA-16","TALON-17"],ng=["NADIR","SOLACE","KITE","EMBER","QUILL","HALCYON","RIFT","CINDER"],ay=[{id:"m-root",title:"OPERATION HELIOS",status:"ACTIVE",x:480,y:300},{id:"m-intel",title:"INTEL SWEEP",status:"DONE",x:250,y:150},{id:"m-ingress",title:"DATA INGRESS",status:"DONE",x:240,y:300},{id:"m-tune",title:"MODEL TUNING",status:"ACTIVE",x:255,y:450},{id:"m-dispatch",title:"AGENT DISPATCH",status:"ACTIVE",x:700,y:140},{id:"m-signal",title:"SIGNAL ANALYSIS",status:"ACTIVE",x:720,y:300},{id:"m-counter",title:"COUNTERMEASURE DRAFT",status:"PENDING",x:700,y:460},{id:"m-qa",title:"QA GATE",status:"PENDING",x:940,y:220},{id:"m-comms",title:"COMMS UPLINK",status:"PENDING",x:945,y:380},{id:"m-risk",title:"RISK LEDGER",status:"BLOCKED",x:470,y:520},{id:"m-archive",title:"ARCHIVE & REPORT",status:"PENDING",x:1140,y:300},{id:"m-sync",title:"FINAL SYNC",status:"PENDING",x:1140,y:450}],ly=[{id:"me-1",from:"m-root",to:"m-intel"},{id:"me-2",from:"m-root",to:"m-ingress"},{id:"me-3",from:"m-root",to:"m-tune"},{id:"me-4",from:"m-root",to:"m-dispatch"},{id:"me-5",from:"m-root",to:"m-signal"},{id:"me-6",from:"m-root",to:"m-counter"},{id:"me-7",from:"m-intel",to:"m-dispatch"},{id:"me-8",from:"m-ingress",to:"m-signal"},{id:"me-9",from:"m-tune",to:"m-counter"},{id:"me-10",from:"m-dispatch",to:"m-qa"},{id:"me-11",from:"m-signal",to:"m-qa"},{id:"me-12",from:"m-signal",to:"m-comms"},{id:"me-13",from:"m-counter",to:"m-comms"},{id:"me-14",from:"m-qa",to:"m-archive"},{id:"me-15",from:"m-comms",to:"m-archive"},{id:"me-16",from:"m-archive",to:"m-sync"},{id:"me-17",from:"m-tune",to:"m-risk"}],cy=[{id:"f-projects",title:"projects/",type:"folder",body:"Active operation folders.",x:-180,y:-120,vx:0,vy:0,born:0},{id:"f-research",title:"research/",type:"folder",body:"Corpus, citations, distilled briefs.",x:180,y:-140,vx:0,vy:0,born:0},{id:"f-ops",title:"ops/",type:"folder",body:"Runbooks, pipelines, ledgers.",x:0,y:190,vx:0,vy:0,born:0},{id:"n-helios",title:"helios-brief.md",type:"note",body:`# Operation Helios

Directive: synchronize swarm telemetry with the central arc.

- [x] Uplink handshake
- [ ] Phase-lock plasma conduits
- [ ] Archive final report

> The arc answers only when the swarm breathes as one.`,x:-60,y:-40,vx:0,vy:0,born:0},{id:"n-swarm",title:"swarm-protocol.md",type:"note",body:`# Swarm Protocol v7

Agents negotiate tasks over the waypoint lattice. Steering uses arrival damping; separation radius 0.8u.`,x:90,y:20,vx:0,vy:0,born:0},{id:"n-lattice",title:"lattice-notes.md",type:"note",body:`# Waypoint Lattice

Ring corridor r=4.6 · 16 nodes. Spokes at 0/90/180/270. Center table triad.`,x:-160,y:70,vx:0,vy:0,born:0},{id:"n-obsidian",title:"obsidian-sync.md",type:"note",body:`# Obsidian Bridge

MCP/WebSocket bridge spec drafted. MockMemoryProvider replays fs events until live vault attaches.`,x:150,y:130,vx:0,vy:0,born:0},{id:"n-roster",title:"agent-roster.md",type:"note",body:`# Roster

8 autonomous units. Sovereign-0 holds command intent; Warden-5 patrols the perimeter mesh.`,x:-240,y:-20,vx:0,vy:0,born:0},{id:"t-ai",title:"#ai",type:"tag",body:"",x:40,y:-190,vx:0,vy:0,born:0},{id:"t-ops",title:"#ops",type:"tag",body:"",x:240,y:20,vx:0,vy:0,born:0}],uy=[{id:"fe-1",from:"n-helios",to:"f-projects",kind:"folder"},{id:"fe-2",from:"n-swarm",to:"f-projects",kind:"folder"},{id:"fe-3",from:"n-lattice",to:"f-research",kind:"folder"},{id:"fe-4",from:"n-obsidian",to:"f-ops",kind:"folder"},{id:"fe-5",from:"n-roster",to:"f-ops",kind:"folder"},{id:"fe-6",from:"n-helios",to:"n-swarm",kind:"link"},{id:"fe-7",from:"n-swarm",to:"n-lattice",kind:"link"},{id:"fe-8",from:"n-helios",to:"t-ai",kind:"tag"},{id:"fe-9",from:"n-roster",to:"t-ops",kind:"tag"},{id:"fe-10",from:"n-obsidian",to:"t-ops",kind:"tag"}],ig=[{title:"quantum-cache.md",body:`# Quantum Cache

Eviction policy tuned; hit ratio 94.2%. Cold shards migrated to vault tier 2.`,tags:["#ai"]},{title:"night-log-042.md",body:`# Night Log 042

Perimeter quiet. Two handshake retries from relay 9 — whitelisted after audit.`,tags:["#ops"]},{title:"glyph-taxonomy.md",body:`# Glyph Taxonomy

Holographic glyph set mapped to 64-state semaphore. Arc shutters mirror the taxonomy.`,tags:["#ai"]},{title:"plasma-thermals.md",body:`# Plasma Thermals

Conduit envelope stable at 312K. Turbulence index correlates with THINKING depth.`,tags:["#ai","#ops"]},{title:"director-shots.md",body:`# Director Shots

Cinematic grammar: swoop on spike, dolly on task start, slow push on success.`,tags:["#ops"]},{title:"backlink-atlas.md",body:`# Backlink Atlas

Graph density 0.31. Orphan rate below 2% after last reorganization sweep.`,tags:["#ai"]},{title:"cipher-rotation.md",body:`# Cipher Rotation

Handshake keys rotated every 900s. Zero drift detected across 4,000 exchanges.`,tags:["#ops"]},{title:"muse-assets.md",body:`# Asset Constellation

LUMEN-6 sculpted 12 holographic primitives for the briefing table projection.`,tags:["#ai"]},{title:"throughput-lanes.md",body:`# Throughput Lanes

CONDUIT-7 balanced 8 lanes; packet jitter under 3ms at peak burst.`,tags:["#ops"]},{title:"horizon-risks.md",body:`# Horizon Risks

Three asymmetric vectors flagged; two hedged, one parked in the risk ledger.`,tags:["#ai","#ops"]}],dy=[{t:0,pos:[0,3.4,10.8],look:[0,2.4,0],fov:50},{t:5,pos:[5.2,2.3,6.4],look:[0,2.7,0],fov:44},{t:9,pos:[.5,9.5,8.5],look:[0,.4,0],fov:52},{t:12,pos:[5.4,2.5,5.2],look:[1.6,1.5,.4],fov:42},{t:15,pos:[0,2,5],look:[0,1.35,0],fov:40},{t:19,pos:[-6.5,3.8,9.5],look:[0,1.7,0],fov:55},{t:23,pos:[0,6.2,10.4],look:[0,1.4,0],fov:50},{t:27,pos:[-4.4,2.6,7.2],look:[0,2.1,0],fov:46},{t:30,pos:[0,3.4,10.8],look:[0,2.4,0],fov:50}],Zh=[{t:.2,kind:"log",value:"CINEMATIC SEQUENCE Ω ENGAGED — DIRECTOR AI ONLINE"},{t:.8,kind:"tab",value:"core"},{t:1.2,kind:"state",value:"LISTENING"},{t:2.6,kind:"state",value:"THINKING"},{t:4.6,kind:"state",value:"TOOL_USE"},{t:5,kind:"burst",value:"140"},{t:7.6,kind:"spike",value:"0.8"},{t:8.6,kind:"tab",value:"agents"},{t:9.4,kind:"log",value:"SWARM FLOOR — 8 AUTONOMOUS UNITS ON STATION"},{t:10.6,kind:"brief",value:"all"},{t:14.4,kind:"tab",value:"intel"},{t:14.8,kind:"speak",value:"Behold the intelligence lattice — my human face."},{t:18.4,kind:"tab",value:"network"},{t:18.8,kind:"burst",value:"220"},{t:19.6,kind:"log",value:"10-LAYER CORTEX — TOKEN PROPAGATION LIVE"},{t:22.4,kind:"tab",value:"missions"},{t:22.9,kind:"pulse",value:"wave"},{t:25.4,kind:"tab",value:"memory"},{t:25.9,kind:"memory",value:"provider-burst"},{t:27.8,kind:"state",value:"SUCCESS"},{t:28.4,kind:"log",value:"SEQUENCE COMPLETE — ALL SYSTEMS NOMINAL"},{t:29.4,kind:"state",value:"IDLE"}],hy=["INPUT","TOKENIZATION","EMBEDDING","CONTEXT","ATTENTION","REASONING","MEMORY","TOOL ROUTING","ORCHESTRATION","OUTPUT"],pr=[5,9,13,11,15,12,10,8,6,4],fy=[{name:"helios-brief.md",size:"4.2 KB",mod:"00:02:11"},{name:"swarm-protocol.md",size:"7.8 KB",mod:"00:04:47"},{name:"plasma-thermals.md",size:"2.1 KB",mod:"00:07:03"},{name:"director-shots.md",size:"3.5 KB",mod:"00:09:58"},{name:"cipher-rotation.md",size:"1.4 KB",mod:"00:12:26"},{name:"backlink-atlas.md",size:"5.9 KB",mod:"00:15:40"},{name:"glyph-taxonomy.md",size:"2.7 KB",mod:"00:18:12"},{name:"horizon-risks.md",size:"3.1 KB",mod:"00:21:55"}],rg=["Directive acknowledged. Orchestration vector locked — delegating to the swarm.","Analysis complete. Confidence 97.3%. Routing synthesis to your holographic deck.","Task decomposed into 12 sub-vectors. Agents FORGE-3 and PRISM-4 assigned.","Cross-referenced 4,096 vault entries. Signal isolated and crystallized.","Perimeter verified clean. Executing with full plasma authorization.","Projection lattice updated. Outcome branch 3B is now the primary timeline."],po=[{text:"[0.002s] VORTEX kernel 2.0.7 — cold start initiated",cls:""},{text:"[0.041s] mounting obsidian substrate ............ OK",cls:"ok"},{text:"[0.118s] plasma conduit mesh .................... 312K NOMINAL",cls:"ok"},{text:"[0.233s] GPU compute lanes ...................... 12/12 BOUND",cls:"ok"},{text:"[0.347s] particle populations ................... 131,072 STAGED",cls:"ok"},{text:"[0.452s] waypoint lattice ....................... 31 NODES LINKED",cls:"ok"},{text:"[0.566s] swarm handshake — 8 autonomous units ... ONLINE",cls:"gold"},{text:"[0.684s] neural cortex — 10 layers .............. SYNAPSED",cls:"ok"},{text:"[0.799s] memory vault bridge .................... MOCK → MCP READY",cls:"ok"},{text:"[0.871s] procedural audio engine ................ ARMED",cls:"ok"},{text:"[0.943s] cinematic director AI .................. AWAKE",cls:"gold"},{text:"[1.000s] VORTEX_HUD Ω — ALL SYSTEMS NOMINAL",cls:"gold"}],wv="vortex.agents.v2";function sg(){try{const o=localStorage.getItem(wv);if(o){const e=JSON.parse(o);if(Array.isArray(e)&&e.length>0)return e}}catch{}return Tv.map(o=>({...o,personality:{...o.personality}}))}function py(o){try{localStorage.setItem(wv,JSON.stringify(o))}catch{}}function my(o){return o.map(e=>({...e,personality:{...e.personality},status:"WORKING",task:"Calibrating workstation",progress:Math.floor(Math.random()*60),load:40+Math.floor(Math.random()*40),mood:"NOMINAL"}))}let gy=0;const Me=Ev()((o,e)=>({booted:!1,tab:"core",coreState:"IDLE",cameraMode:"ORBIT",selectedAgentId:null,agentDefs:sg(),agents:my(sg()),audioOn:!1,holoOpen:!1,holoWindows:[],holoZ:10,labOpen:!1,debugOpen:!1,stats:{fps:60,frameMs:16.7,drawCalls:0,triangles:0,points:0,resScale:1},telemetry:{t:0,power:62,temp:312,packets:120,latency:21,throughput:1.2},log:[],tlPlaying:!1,tlTime:0,tlSpeed:1,tlLoop:!0,engineFailed:!1,cameraLocked:!1,setBooted:t=>o({booted:t}),toggleCameraLock:()=>o(t=>({cameraLocked:!t.cameraLocked})),setTab:t=>{e().tab!==t&&o({tab:t})},setCoreState:t=>{const i=e().coreState;i!==t&&(o({coreState:t}),Pt.emit("CORE_STATE_CHANGED",{prev:i,next:t}))},setCameraMode:t=>{o({cameraMode:t}),Pt.emit("CAMERA_SHOT",{mode:t})},selectAgent:t=>o({selectedAgentId:t}),updateAgentRuntime:(t,i)=>o(s=>({agents:s.agents.map(a=>a.id===t?{...a,...i}:a)})),setRosterRuntime:t=>o({agents:t}),setAgentDefs:t=>{py(t),o(i=>({agentDefs:t,agents:t.map(s=>{const a=i.agents.find(c=>c.id===s.id);return{...s,personality:{...s.personality},status:(a==null?void 0:a.status)??"STANDBY",task:(a==null?void 0:a.task)??"Awaiting directive",progress:(a==null?void 0:a.progress)??0,load:(a==null?void 0:a.load)??30,mood:(a==null?void 0:a.mood)??"NOMINAL"}})}))},toggleAudio:()=>o(t=>({audioOn:!t.audioOn})),setHoloOpen:t=>o({holoOpen:t}),openHolo:t=>{const i=e(),s=i.holoWindows.find(_=>_.kind===t),a=i.holoZ+1;if(s){o({holoOpen:!0,holoZ:a,holoWindows:i.holoWindows.map(_=>_.id===s.id?{..._,z:a,minimized:!1}:_)});return}const c={terminal:[24,60],telemetry:[380,90],files:[90,300]},u={terminal:[330,220],telemetry:[300,240],files:[310,230]},[h,f]=c[t],[p,v]=u[t],g={id:`holo-${t}`,kind:t,x:h,y:f,w:p,h:v,z:a,minimized:!1,rot:0};o({holoOpen:!0,holoZ:a,holoWindows:[...i.holoWindows,g]})},closeHolo:t=>o(i=>({holoWindows:i.holoWindows.filter(s=>s.id!==t)})),minimizeHolo:t=>o(i=>({holoWindows:i.holoWindows.map(s=>s.id===t?{...s,minimized:!s.minimized}:s)})),focusHolo:t=>o(i=>{const s=i.holoZ+1;return{holoZ:s,holoWindows:i.holoWindows.map(a=>a.id===t?{...a,z:s}:a)}}),moveHolo:(t,i,s)=>o(a=>({holoWindows:a.holoWindows.map(c=>c.id===t?{...c,x:i,y:s}:c)})),resizeHolo:(t,i,s)=>o(a=>({holoWindows:a.holoWindows.map(c=>c.id===t?{...c,w:i,h:s}:c)})),rotateHolo:(t,i)=>o(s=>({holoWindows:s.holoWindows.map(a=>a.id===t?{...a,rot:i}:a)})),setLabOpen:t=>o({labOpen:t}),setDebugOpen:t=>o({debugOpen:t}),setStats:t=>o({stats:t}),setTelemetry:t=>o({telemetry:t}),pushLog:(t,i,s)=>o(a=>{const c=new Date,u=`${String(c.getUTCHours()).padStart(2,"0")}:${String(c.getUTCMinutes()).padStart(2,"0")}:${String(c.getUTCSeconds()).padStart(2,"0")}`,h={id:++gy,time:u,level:t,tag:i,msg:s},f=[...a.log,h];return f.length>64&&f.splice(0,f.length-64),{log:f}}),clearLog:()=>o({log:[]}),setTimeline:t=>o(i=>({tlPlaying:t.playing??i.tlPlaying,tlTime:t.t??i.tlTime,tlSpeed:t.speed??i.tlSpeed,tlLoop:t.loop??i.tlLoop})),setEngineFailed:t=>o({engineFailed:t})}));class vy{constructor(){this.ctx=null,this.master=null,this.droneGain=null,this.analyser=null,this.freqData=null,this.failed=!1,this.muted=!1,this.talkEnv=0,this.pulseEnv=0,this.t0=performance.now()}get supported(){return!this.failed}ensure(){if(this.ctx||this.failed)return!!this.ctx;try{const e=window.AudioContext??window.webkitAudioContext;if(!e)throw new Error("no-audio-context");const t=new e;this.ctx=t;const i=t.createGain();i.gain.value=this.muted?0:.8;const s=t.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=6,i.connect(s),s.connect(t.destination),this.master=i;const a=t.createAnalyser();a.fftSize=512,a.smoothingTimeConstant=.82,i.connect(a),this.analyser=a,this.freqData=new Uint8Array(a.frequencyBinCount);const c=t.createGain();c.gain.value=.16;const u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=240,u.Q.value=.8,c.connect(u),u.connect(i),this.droneGain=c;const h=[[30,.55,"sine"],[57.5,.22,"sine"],[90.2,.1,"triangle"]];for(const[x,S,P]of h){const L=t.createOscillator();L.type=P,L.frequency.value=x;const C=t.createGain();C.gain.value=S,L.connect(C),C.connect(c),L.start()}const f=t.createOscillator();f.frequency.value=.07;const p=t.createGain();p.gain.value=.05,f.connect(p),p.connect(c.gain),f.start();const v=t.createBuffer(1,t.sampleRate*2,t.sampleRate),g=v.getChannelData(0);for(let x=0;x<g.length;x++)g[x]=Math.random()*2-1;const _=t.createBufferSource();_.buffer=v,_.loop=!0;const M=t.createBiquadFilter();M.type="bandpass",M.frequency.value=2600,M.Q.value=9;const b=t.createGain();return b.gain.value=.012,_.connect(M),M.connect(b),b.connect(i),_.start(),!0}catch(e){return console.warn("[vortex-audio] Web Audio unavailable — mock envelopes engaged.",e),this.failed=!0,this.ctx=null,!1}}resume(){this.ensure()&&this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(e){if(this.muted=e,this.ctx&&this.master){const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.linearRampToValueAtTime(e?0:.8,t+.25)}}setDroneIntensity(e){if(this.ctx&&this.droneGain){const t=this.ctx.currentTime;this.droneGain.gain.linearRampToValueAtTime(.1+e*.16,t+.4)}}chime(e=1318){if(!this.ensure()||!this.ctx||!this.master||this.muted)return;const t=this.ctx,i=t.currentTime,s=t.createOscillator();s.type="triangle",s.frequency.setValueAtTime(e,i),s.frequency.exponentialRampToValueAtTime(e*1.5,i+.09);const a=t.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.09,i+.012),a.gain.exponentialRampToValueAtTime(1e-4,i+.22);const c=t.createStereoPanner();c.pan.value=Math.random()*.8-.4,s.connect(a),a.connect(c),c.connect(this.master),s.start(i),s.stop(i+.26),this.ping(.35)}zap(){if(!this.ensure()||!this.ctx||!this.master||this.muted)return;const e=this.ctx,t=e.currentTime,i=e.createOscillator();i.type="square",i.frequency.setValueAtTime(1900,t),i.frequency.exponentialRampToValueAtTime(220,t+.11);const s=e.createGain();s.gain.setValueAtTime(.05,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.13),i.connect(s),s.connect(this.master),i.start(t),i.stop(t+.15),this.ping(.5)}thump(){if(!this.ensure()||!this.ctx||!this.master||this.muted)return;const e=this.ctx,t=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(82,t),i.frequency.exponentialRampToValueAtTime(38,t+.3);const s=e.createGain();s.gain.setValueAtTime(.24,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.36),i.connect(s),s.connect(this.master),i.start(t),i.stop(t+.4),this.ping(1)}alarm(){if(!this.ensure()||!this.ctx||!this.master||this.muted)return;const e=this.ctx,t=e.currentTime;[233,174].forEach((i,s)=>{const a=e.createOscillator();a.type="sawtooth",a.frequency.value=i;const c=e.createGain(),u=t+s*.16;c.gain.setValueAtTime(1e-4,u),c.gain.exponentialRampToValueAtTime(.07,u+.02),c.gain.exponentialRampToValueAtTime(1e-4,u+.16),a.connect(c),c.connect(this.master),a.start(u),a.stop(u+.2)}),this.ping(.8)}speak(e){if(this.talkEnv=1,!this.ensure()||!this.ctx||!this.master||this.muted)return;const t=this.ctx,i=t.currentTime,s=Math.max(3,Math.floor(e/.13));for(let a=0;a<s;a++){const c=i+a*.13+Math.random()*.03,u=t.createOscillator();u.type="square";const h=130+Math.random()*110;u.frequency.setValueAtTime(h,c),u.frequency.linearRampToValueAtTime(h*.7,c+.09);const f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=900+Math.random()*1400,f.Q.value=4;const p=t.createGain();p.gain.setValueAtTime(1e-4,c),p.gain.exponentialRampToValueAtTime(.055,c+.02),p.gain.exponentialRampToValueAtTime(1e-4,c+.11),u.connect(f),f.connect(p),p.connect(this.master),u.start(c),u.stop(c+.13)}}ping(e){this.pulseEnv=Math.max(this.pulseEnv,e)}getLevels(){const t=(performance.now()-this.t0)/1e3;if(this.talkEnv=Math.max(0,this.talkEnv-.045),this.pulseEnv=Math.max(0,this.pulseEnv-.06),this.analyser&&this.freqData){this.analyser.getByteFrequencyData(this.freqData);const c=(v,g)=>{let _=0;const M=Math.min(g,this.freqData?this.freqData.length:g);for(let b=v;b<M;b++)_+=this.freqData[b];return _/Math.max(1,M-v)/255},u=c(1,7)*1.6,h=c(8,48),f=c(49,160)*1.8;return{level:Math.min(1,u*.5+h*.4+f*.3),bass:Math.min(1,u),mid:h,high:f,talk:this.talkEnv}}const i=.22+.1*Math.sin(t*.9)+this.pulseEnv*.3,s=.14+.08*Math.sin(t*1.7+1)+this.pulseEnv*.2,a=.08+.05*Math.sin(t*2.9+2)+this.pulseEnv*.25;return{level:Math.min(1,i+s),bass:Math.min(1,i),mid:Math.min(1,s),high:Math.min(1,a),talk:this.talkEnv}}}const mn=new vy;class xy{constructor(){this.mode="MOUSE-VISION-STREAM",this.cb=null,this.last=null,this.onMove=e=>{if(!this.cb)return;const t=performance.now(),i=e.clientX/Math.max(1,window.innerWidth),s=e.clientY/Math.max(1,window.innerHeight);let a=0,c=0;if(this.last){const u=Math.max(1,t-this.last.t);a=(e.clientX-this.last.x)/u,c=(e.clientY-this.last.y)/u}this.last={x:e.clientX,y:e.clientY,t},this.cb({x:i,y:s,vx:a,vy:c,buttons:e.buttons,t})}}start(e){this.cb=e,window.addEventListener("pointermove",this.onMove)}stop(){this.cb=null,window.removeEventListener("pointermove",this.onMove)}}class _y{constructor(){this.mode="MOCK-HAND-RIG",this.cb=null,this.pinch=0,this.shift=!1,this.x=.5,this.y=.5,this.present=!1,this.lastSeen=0,this.onMove=e=>{this.x=e.clientX/Math.max(1,window.innerWidth),this.y=e.clientY/Math.max(1,window.innerHeight),this.present=!0,this.lastSeen=performance.now(),e.buttons>0&&(this.pinch=Math.min(1,this.pinch+.12))},this.onKey=e=>{this.shift=e.shiftKey},this.onUp=()=>{this.pinch=0},this.tick=()=>{if(!this.cb)return;this.shift?this.pinch=Math.min(1,this.pinch+.08):this.pinch=Math.max(0,this.pinch-.05);const e=performance.now()-this.lastSeen>4e3;this.cb({x:this.x,y:this.y,pinch:this.pinch,present:this.present&&!e,t:performance.now()}),setTimeout(this.tick,66)}}start(e){this.cb=e,window.addEventListener("pointermove",this.onMove),window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKey),window.addEventListener("pointerup",this.onUp),this.tick()}stop(){this.cb=null,window.removeEventListener("pointermove",this.onMove),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),window.removeEventListener("pointerup",this.onUp)}}class yy{constructor(e,t){this.lastGesture=null,this.lastConfidence=0,this.lastAt=0,this.swipeWatch=null,this.running=!1,this.vision=e??new xy,this.hand=t??new _y}start(){this.running||(this.running=!0,this.vision.start(e=>{const t=Math.hypot(e.vx,e.vy);t>2.2&&e.buttons===0&&performance.now()-this.lastAt>900&&this.recognize("SWIPE",Math.min(1,t/4)),this.swipeWatch&&this.swipeWatch(e)}),this.hand.start(e=>{e.pinch>.92&&performance.now()-this.lastAt>1200&&this.recognize("PINCH",e.pinch)}))}stop(){this.running&&(this.running=!1,this.vision.stop(),this.hand.stop(),this.swipeWatch=null)}onVisionFrame(e){this.swipeWatch=e}recognize(e,t=1){this.lastGesture=e,this.lastConfidence=t,this.lastAt=performance.now(),Pt.emit("GESTURE_DETECTED",{gesture:e})}}let lh=null;function gu(){return lh||(lh=new yy),lh}function Sy(){const o=gu();return o.start(),o}function My(){const o=Me(g=>g.coreState),e=Me(g=>g.cameraMode),t=Me(g=>g.stats.fps),i=Me(g=>g.audioOn),s=Me(g=>g.debugOpen),a=Me(g=>g.setDebugOpen),c=Me(g=>g.toggleAudio),u=Me(g=>g.pushLog),[h,f]=tt.useState(()=>new Date);tt.useEffect(()=>{const g=setInterval(()=>f(new Date),1e3);return()=>clearInterval(g)},[]);const p=g=>String(g).padStart(2,"0"),v=()=>{mn.ensure(),mn.resume();const g=!i;mn.setMuted(!g),c(),g&&mn.chime(1560),u("sys","AUDIO",g?"procedural synth engine online — 30 Hz drone engaged":"audio reactor muted")};return E.jsxs("header",{className:"topbar",children:[E.jsxs("div",{className:"brand",children:[E.jsxs("span",{className:"brand-name",children:["VORTEX",E.jsx("em",{children:"_"}),"HUD"]}),E.jsx("span",{className:"omega",children:"Ω"}),E.jsx("span",{className:"brand-ver",children:"v2.0.7 // SENTIENT-GRADE"})]}),E.jsxs("div",{className:"state-badge","data-state":o,children:[E.jsx("span",{className:"pip"}),o]}),E.jsxs("span",{className:"chip",children:["CAM ",E.jsx("b",{children:e})]}),E.jsxs("span",{className:"chip gold",children:["UPLINK ",E.jsx("b",{children:"SECURE·AES-Ω"})]}),E.jsx("div",{className:"top-spacer"}),E.jsxs("span",{className:"chip",children:["UTC ",E.jsxs("b",{children:[p(h.getUTCHours()),":",p(h.getUTCMinutes()),":",p(h.getUTCSeconds())]})]}),E.jsxs("span",{className:"chip",children:["FPS ",E.jsx("b",{children:t.toFixed(0)})]}),E.jsx("button",{className:`icon-btn ${i?"on":""}`,title:"toggle procedural audio engine",onClick:v,"aria-label":"toggle audio",children:E.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[E.jsx("path",{d:"M4 9v6h4l5 4V5L8 9H4z",fill:"currentColor",stroke:"none"}),i?E.jsx("path",{d:"M16 8c1.5 1 2.5 2.4 2.5 4S17.5 15 16 16M18.5 5.5C21 7 22.5 9.4 22.5 12s-1.5 5-4 6.5"}):E.jsx("path",{d:"M16 9l5 6M21 9l-5 6"})]})}),E.jsx("button",{className:`icon-btn ${s?"on":""}`,title:"self-healing debug console [`]",onClick:()=>a(!s),"aria-label":"toggle debug console",children:E.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:E.jsx("path",{d:"M4 17l6-6-6-6M12 19h8"})})})]})}const Fo={tint:"#00f0ff",speed:1,bloomStrength:.62,bloomThreshold:.55,bloomRadius:.42,exposure:1,emissive:1,dustDensity:.85,dustScale:1,streamDensity:1,streamScale:1,coreGeometry:"ARC",coreIntensity:1,networkDensity:1,hqLighting:1,agentDrive:1,audioSensitivity:1,cameraLimit:22,dof:!0,atmosphere:.5,uiScale:1,holoOpacity:.96,scanlines:!0},Ey=[{name:"CINEMATIC",builtin:!0,patch:{bloomStrength:.8,bloomThreshold:.48,bloomRadius:.6,exposure:1.04,emissive:1.1,speed:.85,atmosphere:.7,dof:!0,streamDensity:1,dustDensity:.95}},{name:"TACTICAL",builtin:!0,patch:{bloomStrength:.3,bloomThreshold:.72,bloomRadius:.25,exposure:.94,emissive:.85,speed:1.1,atmosphere:.2,dof:!1,scanlines:!0}},{name:"DEEP_SPACE",builtin:!0,patch:{tint:"#4db8ff",bloomStrength:.55,bloomThreshold:.6,exposure:.86,atmosphere:.95,dustDensity:1,streamDensity:.7,emissive:.9,speed:.7}},{name:"GOD_MODE",builtin:!0,patch:{bloomStrength:.95,bloomThreshold:.42,bloomRadius:.55,exposure:1.1,emissive:1.35,dustDensity:1,dustScale:1.25,streamDensity:1,streamScale:1.3,networkDensity:2.4,speed:1.6,coreIntensity:1.5,audioSensitivity:1.6}},{name:"PERFORMANCE",builtin:!0,patch:{bloomStrength:.35,bloomThreshold:.7,bloomRadius:.2,exposure:.96,dustDensity:.35,dustScale:.8,streamDensity:.5,streamScale:.8,networkDensity:.5,dof:!1,atmosphere:.25,speed:1}}],Ty=["#00f0ff","#4db8ff","#ffb700","#d4af37","#00ff66","#ff3333","#ff7ad9","#9d7bff","#e0e6ed"],bv="vortex.settings.v3",Av="vortex.userpresets.v1";function wy(){try{const o=localStorage.getItem(bv);if(o){const e=JSON.parse(o);return{...Fo,...e}}}catch{}return{...Fo}}function oc(o){try{localStorage.setItem(bv,JSON.stringify(o))}catch{}}function by(){try{const o=localStorage.getItem(Av);if(o)return JSON.parse(o)}catch{}return[]}function og(o){try{localStorage.setItem(Av,JSON.stringify(o))}catch{}}const Ji=Ev()((o,e)=>({...wy(),labOpen:!1,labX:-1,labY:-1,userPresets:by(),set:t=>{const i={...e(),...t};oc(i),o(t)},applyPreset:t=>{const i={...e(),...t.patch};oc(i),o(t.patch)},reset:()=>{oc(Fo),o({...Fo})},toggleLab:()=>o(t=>({labOpen:!t.labOpen})),moveLab:(t,i)=>o({labX:t,labY:i}),saveUserPreset:t=>{const i={...e(),labOpen:!1,labX:-1,labY:-1},s=[...e().userPresets.filter(a=>a.name!==t),{name:t,settings:i}];og(s),o({userPresets:s})},loadUserPreset:t=>{const i=e().userPresets.find(a=>a.name===t);if(!i)return;const s={...Fo,...i.settings};oc(s),o(s)},deleteUserPreset:t=>{const i=e().userPresets.filter(s=>s.name!==t);og(i),o({userPresets:i})}}));/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $f="185",Ay=0,ag=1,Cy=2,qc=1,Ry=2,ja=3,is=0,$n=1,Ci=2,Xi=0,ko=1,Wt=2,lg=3,cg=4,Py=5,Rs=100,Ny=101,Iy=102,Ly=103,Dy=104,Uy=200,Oy=201,Fy=202,ky=203,Qh=204,Jh=205,By=206,zy=207,Gy=208,Vy=209,Hy=210,Wy=211,Xy=212,jy=213,Yy=214,ef=0,tf=1,nf=2,Go=3,rf=4,sf=5,of=6,af=7,Kf=0,qy=1,$y=2,ir=0,Zf=1,Qf=2,Jf=3,vu=4,ep=5,tp=6,np=7,Cv=300,Us=301,Vo=302,ch=303,uh=304,xu=306,lf=1e3,Er=1001,cf=1002,En=1003,Ky=1004,ac=1005,Gn=1006,dh=1007,Ns=1008,vi=1009,Rv=1010,Pv=1011,Za=1012,ip=1013,rr=1014,Hi=1015,Kn=1016,rp=1017,sp=1018,Qa=1020,Nv=35902,Iv=35899,Lv=1021,Dv=1022,Wi=1023,wr=1026,Is=1027,op=1028,ap=1029,Os=1030,lp=1031,cp=1033,$c=33776,Kc=33777,Zc=33778,Qc=33779,uf=35840,df=35841,hf=35842,ff=35843,pf=36196,mf=37492,gf=37496,vf=37488,xf=37489,ru=37490,_f=37491,yf=37808,Sf=37809,Mf=37810,Ef=37811,Tf=37812,wf=37813,bf=37814,Af=37815,Cf=37816,Rf=37817,Pf=37818,Nf=37819,If=37820,Lf=37821,Df=36492,Uf=36494,Of=36495,Ff=36283,kf=36284,su=36285,Bf=36286,Zy=3200,Qy=3201,ou=0,Jy=1,Jr="",ai="srgb",au="srgb-linear",lu="linear",Bt="srgb",mo=7680,ug=519,eS=512,tS=513,nS=514,up=515,iS=516,rS=517,dp=518,sS=519,zf=35044,Ds=35048,dg="300 es",nr=2e3,Ja=2001;function oS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function cu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function aS(){const o=cu("canvas");return o.style.display="block",o}const hg={};function uu(...o){const e="THREE."+o.shift();console.log(e,...o)}function Uv(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=o[1];t&&t.isStackTrace?o[0]+=" "+t.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function lt(...o){o=Uv(o);const e="THREE."+o.shift();{const t=o[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...o)}}function Rt(...o){o=Uv(o);const e="THREE."+o.shift();{const t=o[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...o)}}function Bo(...o){const e=o.join(" ");e in hg||(hg[e]=!0,lt(...o))}function lS(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const cS={[ef]:tf,[nf]:of,[rf]:af,[Go]:sf,[tf]:ef,[of]:nf,[af]:rf,[sf]:Go};class ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=Math.PI/180,Gf=180/Math.PI;function ns(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]).toLowerCase()}function wt(o,e,t){return Math.max(e,Math.min(t,o))}function uS(o,e){return(o%e+e)%e}function fh(o,e,t){return(1-t)*o+t*e}function tr(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ep=class Ep{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ep.prototype.isVector2=!0;let et=Ep;class Bs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let h=i[s+0],f=i[s+1],p=i[s+2],v=i[s+3],g=a[c+0],_=a[c+1],M=a[c+2],b=a[c+3];if(v!==b||h!==g||f!==_||p!==M){let x=h*g+f*_+p*M+v*b;x<0&&(g=-g,_=-_,M=-M,b=-b,x=-x);let S=1-u;if(x<.9995){const P=Math.acos(x),L=Math.sin(P);S=Math.sin(S*P)/L,u=Math.sin(u*P)/L,h=h*S+g*u,f=f*S+_*u,p=p*S+M*u,v=v*S+b*u}else{h=h*S+g*u,f=f*S+_*u,p=p*S+M*u,v=v*S+b*u;const P=1/Math.sqrt(h*h+f*f+p*p+v*v);h*=P,f*=P,p*=P,v*=P}}e[t]=h,e[t+1]=f,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],h=i[s+1],f=i[s+2],p=i[s+3],v=a[c],g=a[c+1],_=a[c+2],M=a[c+3];return e[t]=u*M+p*v+h*_-f*g,e[t+1]=h*M+p*g+f*v-u*_,e[t+2]=f*M+p*_+u*g-h*v,e[t+3]=p*M-u*v-h*g-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,h=Math.sin,f=u(i/2),p=u(s/2),v=u(a/2),g=h(i/2),_=h(s/2),M=h(a/2);switch(c){case"XYZ":this._x=g*p*v+f*_*M,this._y=f*_*v-g*p*M,this._z=f*p*M+g*_*v,this._w=f*p*v-g*_*M;break;case"YXZ":this._x=g*p*v+f*_*M,this._y=f*_*v-g*p*M,this._z=f*p*M-g*_*v,this._w=f*p*v+g*_*M;break;case"ZXY":this._x=g*p*v-f*_*M,this._y=f*_*v+g*p*M,this._z=f*p*M+g*_*v,this._w=f*p*v-g*_*M;break;case"ZYX":this._x=g*p*v-f*_*M,this._y=f*_*v+g*p*M,this._z=f*p*M-g*_*v,this._w=f*p*v+g*_*M;break;case"YZX":this._x=g*p*v+f*_*M,this._y=f*_*v+g*p*M,this._z=f*p*M-g*_*v,this._w=f*p*v-g*_*M;break;case"XZY":this._x=g*p*v-f*_*M,this._y=f*_*v-g*p*M,this._z=f*p*M+g*_*v,this._w=f*p*v+g*_*M;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],h=t[9],f=t[2],p=t[6],v=t[10],g=i+u+v;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(p-h)*_,this._y=(a-f)*_,this._z=(c-s)*_}else if(i>u&&i>v){const _=2*Math.sqrt(1+i-u-v);this._w=(p-h)/_,this._x=.25*_,this._y=(s+c)/_,this._z=(a+f)/_}else if(u>v){const _=2*Math.sqrt(1+u-i-v);this._w=(a-f)/_,this._x=(s+c)/_,this._y=.25*_,this._z=(h+p)/_}else{const _=2*Math.sqrt(1+v-i-u);this._w=(c-s)/_,this._x=(a+f)/_,this._y=(h+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,h=t._y,f=t._z,p=t._w;return this._x=i*p+c*u+s*f-a*h,this._y=s*p+c*h+a*u-i*f,this._z=a*p+c*f+i*h-s*u,this._w=c*p-i*u-s*h-a*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,s=-s,a=-a,c=-c,u=-u);let h=1-t;if(u<.9995){const f=Math.acos(u),p=Math.sin(f);h=Math.sin(h*f)/p,t=Math.sin(t*f)/p,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tp=class Tp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,h=e.w,f=2*(c*s-u*i),p=2*(u*t-a*s),v=2*(a*i-c*t);return this.x=t+h*f+c*v-u*p,this.y=i+h*p+u*f-a*v,this.z=s+h*v+a*p-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,h=t.z;return this.x=s*h-a*u,this.y=a*c-i*h,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tp.prototype.isVector3=!0;let V=Tp;const ph=new V,fg=new Bs,wp=class wp{constructor(e,t,i,s,a,c,u,h,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,h,f)}set(e,t,i,s,a,c,u,h,f){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=a,p[5]=h,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],h=i[6],f=i[1],p=i[4],v=i[7],g=i[2],_=i[5],M=i[8],b=s[0],x=s[3],S=s[6],P=s[1],L=s[4],C=s[7],D=s[2],I=s[5],O=s[8];return a[0]=c*b+u*P+h*D,a[3]=c*x+u*L+h*I,a[6]=c*S+u*C+h*O,a[1]=f*b+p*P+v*D,a[4]=f*x+p*L+v*I,a[7]=f*S+p*C+v*O,a[2]=g*b+_*P+M*D,a[5]=g*x+_*L+M*I,a[8]=g*S+_*C+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8];return t*c*p-t*u*f-i*a*p+i*u*h+s*a*f-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],v=p*c-u*f,g=u*h-p*a,_=f*a-c*h,M=t*v+i*g+s*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(s*f-p*i)*b,e[2]=(u*i-s*c)*b,e[3]=g*b,e[4]=(p*t-s*h)*b,e[5]=(s*a-u*t)*b,e[6]=_*b,e[7]=(i*h-f*t)*b,e[8]=(c*t-i*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const h=Math.cos(a),f=Math.sin(a);return this.set(i*h,i*f,-i*(h*c+f*u)+c+e,-s*f,s*h,-s*(-f*c+h*u)+u+t,0,0,1),this}scale(e,t){return Bo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mh.makeScale(e,t)),this}rotate(e){return Bo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return Bo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wp.prototype.isMatrix3=!0;let ft=wp;const mh=new ft,pg=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mg=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dS(){const o={enabled:!0,workingColorSpace:au,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Bt&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Bt&&(s.r=zo(s.r),s.g=zo(s.g),s.b=zo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jr?lu:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[au]:{primaries:e,whitePoint:i,transfer:lu,toXYZ:pg,fromXYZ:mg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:i,transfer:Bt,toXYZ:pg,fromXYZ:mg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const Et=dS();function Tr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function zo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let go;class hS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{go===void 0&&(go=cu("canvas")),go.width=e.width,go.height=e.height;const s=go.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=go}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=Tr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tr(t[i]/255)*255):t[i]=Tr(t[i]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fS=0;class hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(gh(s[c].image)):a.push(gh(s[c]))}else a=gh(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function gh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let pS=0;const vh=new V;class Vn extends ks{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,i=Er,s=Er,a=Gn,c=Ns,u=Wi,h=vi,f=Vn.DEFAULT_ANISOTROPY,p=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=ns(),this.name="",this.source=new hp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lf:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lf:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Cv;Vn.DEFAULT_ANISOTROPY=1;const bp=class bp{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const h=e.elements,f=h[0],p=h[4],v=h[8],g=h[1],_=h[5],M=h[9],b=h[2],x=h[6],S=h[10];if(Math.abs(p-g)<.01&&Math.abs(v-b)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(v+b)<.1&&Math.abs(M+x)<.1&&Math.abs(f+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(f+1)/2,C=(_+1)/2,D=(S+1)/2,I=(p+g)/4,O=(v+b)/4,w=(M+x)/4;return L>C&&L>D?L<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(L),s=I/i,a=O/i):C>D?C<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),i=I/s,a=w/s):D<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(D),i=O/a,s=w/a),this.set(i,s,a,t),this}let P=Math.sqrt((x-M)*(x-M)+(v-b)*(v-b)+(g-p)*(g-p));return Math.abs(P)<.001&&(P=1),this.x=(x-M)/P,this.y=(v-b)/P,this.z=(g-p)/P,this.w=Math.acos((f+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bp.prototype.isVector4=!0;let cn=bp;class mS extends ks{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},a=new Vn(s),c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new hp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends mS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ov extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gS extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mu=class mu{constructor(e,t,i,s,a,c,u,h,f,p,v,g,_,M,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,h,f,p,v,g,_,M,b,x)}set(e,t,i,s,a,c,u,h,f,p,v,g,_,M,b,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=a,S[5]=c,S[9]=u,S[13]=h,S[2]=f,S[6]=p,S[10]=v,S[14]=g,S[3]=_,S[7]=M,S[11]=b,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mu().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/vo.setFromMatrixColumn(e,0).length(),a=1/vo.setFromMatrixColumn(e,1).length(),c=1/vo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),f=Math.sin(s),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const g=c*p,_=c*v,M=u*p,b=u*v;t[0]=h*p,t[4]=-h*v,t[8]=f,t[1]=_+M*f,t[5]=g-b*f,t[9]=-u*h,t[2]=b-g*f,t[6]=M+_*f,t[10]=c*h}else if(e.order==="YXZ"){const g=h*p,_=h*v,M=f*p,b=f*v;t[0]=g+b*u,t[4]=M*u-_,t[8]=c*f,t[1]=c*v,t[5]=c*p,t[9]=-u,t[2]=_*u-M,t[6]=b+g*u,t[10]=c*h}else if(e.order==="ZXY"){const g=h*p,_=h*v,M=f*p,b=f*v;t[0]=g-b*u,t[4]=-c*v,t[8]=M+_*u,t[1]=_+M*u,t[5]=c*p,t[9]=b-g*u,t[2]=-c*f,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const g=c*p,_=c*v,M=u*p,b=u*v;t[0]=h*p,t[4]=M*f-_,t[8]=g*f+b,t[1]=h*v,t[5]=b*f+g,t[9]=_*f-M,t[2]=-f,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,_=c*f,M=u*h,b=u*f;t[0]=h*p,t[4]=b-g*v,t[8]=M*v+_,t[1]=v,t[5]=c*p,t[9]=-u*p,t[2]=-f*p,t[6]=_*v+M,t[10]=g-b*v}else if(e.order==="XZY"){const g=c*h,_=c*f,M=u*h,b=u*f;t[0]=h*p,t[4]=-v,t[8]=f*p,t[1]=g*v+b,t[5]=c*p,t[9]=_*v-M,t[2]=M*v-_,t[6]=u*p,t[10]=b*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vS,e,xS)}lookAt(e,t,i){const s=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Yr.crossVectors(i,hi),Yr.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Yr.crossVectors(i,hi)),Yr.normalize(),lc.crossVectors(hi,Yr),s[0]=Yr.x,s[4]=lc.x,s[8]=hi.x,s[1]=Yr.y,s[5]=lc.y,s[9]=hi.y,s[2]=Yr.z,s[6]=lc.z,s[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],h=i[8],f=i[12],p=i[1],v=i[5],g=i[9],_=i[13],M=i[2],b=i[6],x=i[10],S=i[14],P=i[3],L=i[7],C=i[11],D=i[15],I=s[0],O=s[4],w=s[8],R=s[12],F=s[1],B=s[5],z=s[9],K=s[13],te=s[2],Y=s[6],ae=s[10],Z=s[14],$=s[3],se=s[7],de=s[11],G=s[15];return a[0]=c*I+u*F+h*te+f*$,a[4]=c*O+u*B+h*Y+f*se,a[8]=c*w+u*z+h*ae+f*de,a[12]=c*R+u*K+h*Z+f*G,a[1]=p*I+v*F+g*te+_*$,a[5]=p*O+v*B+g*Y+_*se,a[9]=p*w+v*z+g*ae+_*de,a[13]=p*R+v*K+g*Z+_*G,a[2]=M*I+b*F+x*te+S*$,a[6]=M*O+b*B+x*Y+S*se,a[10]=M*w+b*z+x*ae+S*de,a[14]=M*R+b*K+x*Z+S*G,a[3]=P*I+L*F+C*te+D*$,a[7]=P*O+L*B+C*Y+D*se,a[11]=P*w+L*z+C*ae+D*de,a[15]=P*R+L*K+C*Z+D*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],h=e[9],f=e[13],p=e[2],v=e[6],g=e[10],_=e[14],M=e[3],b=e[7],x=e[11],S=e[15],P=h*_-f*g,L=u*_-f*v,C=u*g-h*v,D=c*_-f*p,I=c*g-h*p,O=c*v-u*p;return t*(b*P-x*L+S*C)-i*(M*P-x*D+S*I)+s*(M*L-b*D+S*O)-a*(M*C-b*I+x*O)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[1],c=e[5],u=e[9],h=e[2],f=e[6],p=e[10];return t*(c*p-u*f)-i*(a*p-u*h)+s*(a*f-c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],v=e[9],g=e[10],_=e[11],M=e[12],b=e[13],x=e[14],S=e[15],P=t*u-i*c,L=t*h-s*c,C=t*f-a*c,D=i*h-s*u,I=i*f-a*u,O=s*f-a*h,w=p*b-v*M,R=p*x-g*M,F=p*S-_*M,B=v*x-g*b,z=v*S-_*b,K=g*S-_*x,te=P*K-L*z+C*B+D*F-I*R+O*w;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/te;return e[0]=(u*K-h*z+f*B)*Y,e[1]=(s*z-i*K-a*B)*Y,e[2]=(b*O-x*I+S*D)*Y,e[3]=(g*I-v*O-_*D)*Y,e[4]=(h*F-c*K-f*R)*Y,e[5]=(t*K-s*F+a*R)*Y,e[6]=(x*C-M*O-S*L)*Y,e[7]=(p*O-g*C+_*L)*Y,e[8]=(c*z-u*F+f*w)*Y,e[9]=(i*F-t*z-a*w)*Y,e[10]=(M*I-b*C+S*P)*Y,e[11]=(v*C-p*I-_*P)*Y,e[12]=(u*R-c*B-h*w)*Y,e[13]=(t*B-i*R+s*w)*Y,e[14]=(b*L-M*D-x*P)*Y,e[15]=(p*D-v*L+g*P)*Y,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,h=e.z,f=a*c,p=a*u;return this.set(f*c+i,f*u-s*h,f*h+s*u,0,f*u+s*h,p*u+i,p*h-s*c,0,f*h-s*u,p*h+s*c,a*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,h=t._w,f=a+a,p=c+c,v=u+u,g=a*f,_=a*p,M=a*v,b=c*p,x=c*v,S=u*v,P=h*f,L=h*p,C=h*v,D=i.x,I=i.y,O=i.z;return s[0]=(1-(b+S))*D,s[1]=(_+C)*D,s[2]=(M-L)*D,s[3]=0,s[4]=(_-C)*I,s[5]=(1-(g+S))*I,s[6]=(x+P)*I,s[7]=0,s[8]=(M+L)*O,s[9]=(x-P)*O,s[10]=(1-(g+b))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let c=vo.set(s[0],s[1],s[2]).length();const u=vo.set(s[4],s[5],s[6]).length(),h=vo.set(s[8],s[9],s[10]).length();a<0&&(c=-c),Bi.copy(this);const f=1/c,p=1/u,v=1/h;return Bi.elements[0]*=f,Bi.elements[1]*=f,Bi.elements[2]*=f,Bi.elements[4]*=p,Bi.elements[5]*=p,Bi.elements[6]*=p,Bi.elements[8]*=v,Bi.elements[9]*=v,Bi.elements[10]*=v,t.setFromRotationMatrix(Bi),i.x=c,i.y=u,i.z=h,this}makePerspective(e,t,i,s,a,c,u=nr,h=!1){const f=this.elements,p=2*a/(t-e),v=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let M,b;if(h)M=a/(c-a),b=c*a/(c-a);else if(u===nr)M=-(c+a)/(c-a),b=-2*c*a/(c-a);else if(u===Ja)M=-c/(c-a),b=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=v,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=b,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=nr,h=!1){const f=this.elements,p=2/(t-e),v=2/(i-s),g=-(t+e)/(t-e),_=-(i+s)/(i-s);let M,b;if(h)M=1/(c-a),b=c/(c-a);else if(u===nr)M=-2/(c-a),b=-(c+a)/(c-a);else if(u===Ja)M=-1/(c-a),b=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=0,f[12]=g,f[1]=0,f[5]=v,f[9]=0,f[13]=_,f[2]=0,f[6]=0,f[10]=M,f[14]=b,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};mu.prototype.isMatrix4=!0;let zt=mu;const vo=new V,Bi=new zt,vS=new V(0,0,0),xS=new V(1,1,1),Yr=new V,lc=new V,hi=new V,gg=new zt,vg=new Bs;class br{constructor(e=0,t=0,i=0,s=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],h=s[1],f=s[5],p=s[9],v=s[2],g=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vg.setFromEuler(this),this.setFromQuaternion(vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class Fv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _S=0;const xg=new V,xo=new Bs,mr=new zt,cc=new V,La=new V,yS=new V,SS=new Bs,_g=new V(1,0,0),yg=new V(0,1,0),Sg=new V(0,0,1),Mg={type:"added"},MS={type:"removed"},_o={type:"childadded",child:null},xh={type:"childremoved",child:null};class vn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new V,t=new br,i=new Bs,s=new V(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new ft}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(_g,e)}rotateY(e){return this.rotateOnAxis(yg,e)}rotateZ(e){return this.rotateOnAxis(Sg,e)}translateOnAxis(e,t){return xg.copy(e).applyQuaternion(this.quaternion),this.position.add(xg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_g,e)}translateY(e){return this.translateOnAxis(yg,e)}translateZ(e){return this.translateOnAxis(Sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cc.copy(e):cc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(La,cc,this.up):mr.lookAt(cc,La,this.up),this.quaternion.setFromRotationMatrix(mr),s&&(mr.extractRotation(s.matrixWorld),xo.setFromRotationMatrix(mr),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mg),_o.child=e,this.dispatchEvent(_o),_o.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(MS),xh.child=e,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mg),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,yS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,SS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*s,a[13]+=i-a[1]*t-a[5]*i-a[9]*s,a[14]+=s-a[2]*t-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){const v=h[f];a(e.shapes,v)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(a(e.materials,this.material[h]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(a(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),f=c(e.textures),p=c(e.images),v=c(e.shapes),g=c(e.skeletons),_=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),v.length>0&&(i.shapes=v),g.length>0&&(i.skeletons=g),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const h=[];for(const f in u){const p=u[f];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}vn.DEFAULT_UP=new V(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gn extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ES={type:"move"};class _h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,i),S=this._getHandJoint(f,b);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const p=f.joints["index-finger-tip"],v=f.joints["thumb-tip"],g=p.position.distanceTo(v.position),_=.02,M=.005;f.inputState.pinching&&g>_+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=_-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(ES)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},uc={h:0,s:0,l:0};function yh(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Et.workingColorSpace){if(e=uS(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=yh(c,a,e+1/3),this.g=yh(c,a,e),this.b=yh(c,a,e-1/3)}return Et.colorSpaceToWorking(this,s),this}setStyle(e,t=ai){function i(a){a!==void 0&&parseFloat(a)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const i=kv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Et.workingToColorSpace(zn.copy(this),e),Math.round(wt(zn.r*255,0,255))*65536+Math.round(wt(zn.g*255,0,255))*256+Math.round(wt(zn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(zn.copy(this),t);const i=zn.r,s=zn.g,a=zn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let h,f;const p=(u+c)/2;if(u===c)h=0,f=0;else{const v=c-u;switch(f=p<=.5?v/(c+u):v/(2-c-u),c){case i:h=(s-a)/v+(s<a?6:0);break;case s:h=(a-i)/v+2;break;case a:h=(i-s)/v+4;break}h/=6}return e.h=h,e.s=f,e.l=p,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=ai){Et.workingToColorSpace(zn.copy(this),e);const t=zn.r,i=zn.g,s=zn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(uc);const i=fh(qr.h,uc.h,t),s=fh(qr.s,uc.s,t),a=fh(qr.l,uc.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new We;We.NAMES=kv;class fp{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new fp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bv extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zi=new V,gr=new V,Sh=new V,vr=new V,yo=new V,So=new V,Eg=new V,Mh=new V,Eh=new V,Th=new V,wh=new cn,bh=new cn,Ah=new cn;class Ri{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zi.subVectors(e,t),s.cross(zi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){zi.subVectors(s,t),gr.subVectors(i,t),Sh.subVectors(e,t);const c=zi.dot(zi),u=zi.dot(gr),h=zi.dot(Sh),f=gr.dot(gr),p=gr.dot(Sh),v=c*f-u*u;if(v===0)return a.set(0,0,0),null;const g=1/v,_=(f*h-u*p)*g,M=(c*p-u*h)*g;return a.set(1-_-M,M,_)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,i,s,a,c,u,h){return this.getBarycoord(e,t,i,s,vr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,vr.x),h.addScaledVector(c,vr.y),h.addScaledVector(u,vr.z),h)}static getInterpolatedAttribute(e,t,i,s,a,c){return wh.setScalar(0),bh.setScalar(0),Ah.setScalar(0),wh.fromBufferAttribute(e,t),bh.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(wh,a.x),c.addScaledVector(bh,a.y),c.addScaledVector(Ah,a.z),c}static isFrontFacing(e,t,i,s){return zi.subVectors(i,t),gr.subVectors(e,t),zi.cross(gr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),zi.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Ri.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;yo.subVectors(s,i),So.subVectors(a,i),Mh.subVectors(e,i);const h=yo.dot(Mh),f=So.dot(Mh);if(h<=0&&f<=0)return t.copy(i);Eh.subVectors(e,s);const p=yo.dot(Eh),v=So.dot(Eh);if(p>=0&&v<=p)return t.copy(s);const g=h*v-p*f;if(g<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(i).addScaledVector(yo,c);Th.subVectors(e,a);const _=yo.dot(Th),M=So.dot(Th);if(M>=0&&_<=M)return t.copy(a);const b=_*f-h*M;if(b<=0&&f>=0&&M<=0)return u=f/(f-M),t.copy(i).addScaledVector(So,u);const x=p*M-_*v;if(x<=0&&v-p>=0&&_-M>=0)return Eg.subVectors(a,s),u=(v-p)/(v-p+(_-M)),t.copy(s).addScaledVector(Eg,u);const S=1/(x+b+g);return c=b*S,u=g*S,t.copy(i).addScaledVector(yo,c).addScaledVector(So,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zs{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Gi):Gi.fromBufferAttribute(a,c),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dc.copy(i.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),hc.subVectors(this.max,Da),Mo.subVectors(e.a,Da),Eo.subVectors(e.b,Da),To.subVectors(e.c,Da),$r.subVectors(Eo,Mo),Kr.subVectors(To,Eo),Ms.subVectors(Mo,To);let t=[0,-$r.z,$r.y,0,-Kr.z,Kr.y,0,-Ms.z,Ms.y,$r.z,0,-$r.x,Kr.z,0,-Kr.x,Ms.z,0,-Ms.x,-$r.y,$r.x,0,-Kr.y,Kr.x,0,-Ms.y,Ms.x,0];return!Ch(t,Mo,Eo,To,hc)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,Mo,Eo,To,hc))?!1:(fc.crossVectors($r,Kr),t=[fc.x,fc.y,fc.z],Ch(t,Mo,Eo,To,hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xr=[new V,new V,new V,new V,new V,new V,new V,new V],Gi=new V,dc=new zs,Mo=new V,Eo=new V,To=new V,$r=new V,Kr=new V,Ms=new V,Da=new V,hc=new V,fc=new V,Es=new V;function Ch(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){Es.fromArray(o,a);const u=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),h=e.dot(Es),f=t.dot(Es),p=i.dot(Es);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>u)return!1}return!0}const yn=new V,pc=new et;let TS=0;class vt extends ks{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zf,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),a=jt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class zv extends vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gv extends vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yt extends vt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const wS=new zs,Ua=new V,Rh=new V;class Gs{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wS.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const t=Ua.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ua,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(Rh)),this.expandByPoint(Ua.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bS=0;const bi=new zt,Ph=new vn,wo=new V,fi=new zs,Oa=new zs,Rn=new V;class Tt extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oS(e)?Gv:zv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ft().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,i){return bi.makeTranslation(e,t,i),this.applyMatrix4(bi),this}scale(e,t,i){return bi.makeScale(e,t,i),this.applyMatrix4(bi),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Yt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];fi.setFromBufferAttribute(a),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Oa.setFromBufferAttribute(u),this.morphTargetsRelative?(Rn.addVectors(fi.min,Oa.min),fi.expandByPoint(Rn),Rn.addVectors(fi.max,Oa.max),fi.expandByPoint(Rn)):(fi.expandByPoint(Oa.min),fi.expandByPoint(Oa.max))}fi.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)Rn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(Rn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],h=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)Rn.fromBufferAttribute(u,f),h&&(wo.fromBufferAttribute(e,f),Rn.add(wo)),s=Math.max(s,i.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new vt(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const u=[],h=[];for(let w=0;w<i.count;w++)u[w]=new V,h[w]=new V;const f=new V,p=new V,v=new V,g=new et,_=new et,M=new et,b=new V,x=new V;function S(w,R,F){f.fromBufferAttribute(i,w),p.fromBufferAttribute(i,R),v.fromBufferAttribute(i,F),g.fromBufferAttribute(a,w),_.fromBufferAttribute(a,R),M.fromBufferAttribute(a,F),p.sub(f),v.sub(f),_.sub(g),M.sub(g);const B=1/(_.x*M.y-M.x*_.y);isFinite(B)&&(b.copy(p).multiplyScalar(M.y).addScaledVector(v,-_.y).multiplyScalar(B),x.copy(v).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(B),u[w].add(b),u[R].add(b),u[F].add(b),h[w].add(x),h[R].add(x),h[F].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let w=0,R=P.length;w<R;++w){const F=P[w],B=F.start,z=F.count;for(let K=B,te=B+z;K<te;K+=3)S(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const L=new V,C=new V,D=new V,I=new V;function O(w){D.fromBufferAttribute(s,w),I.copy(D);const R=u[w];L.copy(R),L.sub(D.multiplyScalar(D.dot(R))).normalize(),C.crossVectors(I,R);const B=C.dot(h[w])<0?-1:1;c.setXYZW(w,L.x,L.y,L.z,B)}for(let w=0,R=P.length;w<R;++w){const F=P[w],B=F.start,z=F.count;for(let K=B,te=B+z;K<te;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,_=i.count;g<_;g++)i.setXYZ(g,0,0,0);const s=new V,a=new V,c=new V,u=new V,h=new V,f=new V,p=new V,v=new V;if(e)for(let g=0,_=e.count;g<_;g+=3){const M=e.getX(g+0),b=e.getX(g+1),x=e.getX(g+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,b),c.fromBufferAttribute(t,x),p.subVectors(c,a),v.subVectors(s,a),p.cross(v),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,b),f.fromBufferAttribute(i,x),u.add(p),h.add(p),f.add(p),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(b,h.x,h.y,h.z),i.setXYZ(x,f.x,f.y,f.z)}else for(let g=0,_=t.count;g<_;g+=3)s.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,a),v.subVectors(s,a),p.cross(v),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(u,h){const f=u.array,p=u.itemSize,v=u.normalized,g=new f.constructor(h.length*p);let _=0,M=0;for(let b=0,x=h.length;b<x;b++){u.isInterleavedBufferAttribute?_=h[b]*u.data.stride+u.offset:_=h[b]*p;for(let S=0;S<p;S++)g[M++]=f[_++]}return new vt(g,p,v)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,i=this.index.array,s=this.attributes;for(const u in s){const h=s[u],f=e(h,i);t.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const h=[],f=a[u];for(let p=0,v=f.length;p<v;p++){const g=f[p],_=e(g,i);h.push(_)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],p=[];for(let v=0,g=f.length;v<g;v++){const _=f[v];p.push(_.toJSON(e.data))}p.length>0&&(s[h]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const f in s){const p=s[f];this.setAttribute(f,p.clone(t))}const a=e.morphAttributes;for(const f in a){const p=[],v=a[f];for(let g=0,_=v.length;g<_;g++)p.push(v[g].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,p=c.length;f<p;f++){const v=c[f];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class AS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zf,this.updateRanges=[],this.version=0,this.uuid=ns()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yn=new V;class du{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Yn.fromBufferAttribute(this,t),Yn.applyMatrix4(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yn.fromBufferAttribute(this,t),Yn.applyNormalMatrix(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yn.fromBufferAttribute(this,t),Yn.transformDirection(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tr(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),a=jt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){uu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new du(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){uu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let CS=0;class Ar extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=ko,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=Jh,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ko&&(i.blending=this.blending),this.side!==is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qh&&(i.blendSrc=this.blendSrc),this.blendDst!==Jh&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new et().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vv extends Ar{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bo;const Fa=new V,Ao=new V,Co=new V,Ro=new et,ka=new et,Hv=new zt,mc=new V,Ba=new V,gc=new V,Tg=new et,Nh=new et,wg=new et;class RS extends vn{constructor(e=new Vv){if(super(),this.isSprite=!0,this.type="Sprite",bo===void 0){bo=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new AS(t,5);bo.setIndex([0,1,2,0,2,3]),bo.setAttribute("position",new du(i,3,0,!1)),bo.setAttribute("uv",new du(i,2,3,!1))}this.geometry=bo,this.material=e,this.center=new et(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ao.setFromMatrixScale(this.matrixWorld),Hv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Co.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ao.multiplyScalar(-Co.z);const i=this.material.rotation;let s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));const c=this.center;vc(mc.set(-.5,-.5,0),Co,c,Ao,s,a),vc(Ba.set(.5,-.5,0),Co,c,Ao,s,a),vc(gc.set(.5,.5,0),Co,c,Ao,s,a),Tg.set(0,0),Nh.set(1,0),wg.set(1,1);let u=e.ray.intersectTriangle(mc,Ba,gc,!1,Fa);if(u===null&&(vc(Ba.set(-.5,.5,0),Co,c,Ao,s,a),Nh.set(0,1),u=e.ray.intersectTriangle(mc,gc,Ba,!1,Fa),u===null))return;const h=e.ray.origin.distanceTo(Fa);h<e.near||h>e.far||t.push({distance:h,point:Fa.clone(),uv:Ri.getInterpolation(Fa,mc,Ba,gc,Tg,Nh,wg,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function vc(o,e,t,i,s,a){Ro.subVectors(o,t).addScalar(.5).multiply(i),s!==void 0?(ka.x=a*Ro.x-s*Ro.y,ka.y=s*Ro.x+a*Ro.y):ka.copy(Ro),o.copy(e),o.x+=ka.x,o.y+=ka.y,o.applyMatrix4(Hv)}const _r=new V,Ih=new V,xc=new V,Zr=new V,Lh=new V,_c=new V,Dh=new V;class pp{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ih.copy(e).add(t).multiplyScalar(.5),xc.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Ih);const a=e.distanceTo(t)*.5,c=-this.direction.dot(xc),u=Zr.dot(this.direction),h=-Zr.dot(xc),f=Zr.lengthSq(),p=Math.abs(1-c*c);let v,g,_,M;if(p>0)if(v=c*h-u,g=c*u-h,M=a*p,v>=0)if(g>=-M)if(g<=M){const b=1/p;v*=b,g*=b,_=v*(v+c*g+2*u)+g*(c*v+g+2*h)+f}else g=a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*h)+f;else g=-a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*h)+f;else g<=-M?(v=Math.max(0,-(-c*a+u)),g=v>0?-a:Math.min(Math.max(-a,-h),a),_=-v*v+g*(g+2*h)+f):g<=M?(v=0,g=Math.min(Math.max(-a,-h),a),_=g*(g+2*h)+f):(v=Math.max(0,-(c*a+u)),g=v>0?a:Math.min(Math.max(-a,-h),a),_=-v*v+g*(g+2*h)+f);else g=c>0?-a:a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Ih).addScaledVector(xc,g),_}intersectSphere(e,t){_r.subVectors(e.center,this.origin);const i=_r.dot(this.direction),s=_r.dot(_r)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,h;const f=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return f>=0?(i=(e.min.x-g.x)*f,s=(e.max.x-g.x)*f):(i=(e.max.x-g.x)*f,s=(e.min.x-g.x)*f),p>=0?(a=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),v>=0?(u=(e.min.z-g.z)*v,h=(e.max.z-g.z)*v):(u=(e.max.z-g.z)*v,h=(e.min.z-g.z)*v),i>h||u>s)||((u>i||i!==i)&&(i=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,i,s,a){Lh.subVectors(t,e),_c.subVectors(i,e),Dh.crossVectors(Lh,_c);let c=this.direction.dot(Dh),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Zr.subVectors(this.origin,e);const h=u*this.direction.dot(_c.crossVectors(Zr,_c));if(h<0)return null;const f=u*this.direction.dot(Lh.cross(Zr));if(f<0||h+f>c)return null;const p=-u*Zr.dot(Dh);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xi extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=Kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bg=new zt,Ts=new pp,yc=new Gs,Ag=new V,Sc=new V,Mc=new V,Ec=new V,Uh=new V,Tc=new V,Cg=new V,wc=new V;class ut extends vn{constructor(e=new Tt,t=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){Tc.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const p=u[h],v=a[h];p!==0&&(Uh.fromBufferAttribute(v,e),c?Tc.addScaledVector(Uh,p):Tc.addScaledVector(Uh.sub(t),p))}t.add(Tc)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(a),Ts.copy(e.ray).recast(e.near),!(yc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(yc,Ag)===null||Ts.origin.distanceToSquared(Ag)>(e.far-e.near)**2))&&(bg.copy(a).invert(),Ts.copy(e.ray).applyMatrix4(bg),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,h=a.attributes.position,f=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,g=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,b=g.length;M<b;M++){const x=g[M],S=c[x.materialIndex],P=Math.max(x.start,_.start),L=Math.min(u.count,Math.min(x.start+x.count,_.start+_.count));for(let C=P,D=L;C<D;C+=3){const I=u.getX(C),O=u.getX(C+1),w=u.getX(C+2);s=bc(this,S,e,i,f,p,v,I,O,w),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const M=Math.max(0,_.start),b=Math.min(u.count,_.start+_.count);for(let x=M,S=b;x<S;x+=3){const P=u.getX(x),L=u.getX(x+1),C=u.getX(x+2);s=bc(this,c,e,i,f,p,v,P,L,C),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,b=g.length;M<b;M++){const x=g[M],S=c[x.materialIndex],P=Math.max(x.start,_.start),L=Math.min(h.count,Math.min(x.start+x.count,_.start+_.count));for(let C=P,D=L;C<D;C+=3){const I=C,O=C+1,w=C+2;s=bc(this,S,e,i,f,p,v,I,O,w),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const M=Math.max(0,_.start),b=Math.min(h.count,_.start+_.count);for(let x=M,S=b;x<S;x+=3){const P=x,L=x+1,C=x+2;s=bc(this,c,e,i,f,p,v,P,L,C),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function PS(o,e,t,i,s,a,c,u){let h;if(e.side===$n?h=i.intersectTriangle(c,a,s,!0,u):h=i.intersectTriangle(s,a,c,e.side===is,u),h===null)return null;wc.copy(u),wc.applyMatrix4(o.matrixWorld);const f=t.ray.origin.distanceTo(wc);return f<t.near||f>t.far?null:{distance:f,point:wc.clone(),object:o}}function bc(o,e,t,i,s,a,c,u,h,f){o.getVertexPosition(u,Sc),o.getVertexPosition(h,Mc),o.getVertexPosition(f,Ec);const p=PS(o,e,t,i,Sc,Mc,Ec,Cg);if(p){const v=new V;Ri.getBarycoord(Cg,Sc,Mc,Ec,v),s&&(p.uv=Ri.getInterpolatedAttribute(s,u,h,f,v,new et)),a&&(p.uv1=Ri.getInterpolatedAttribute(a,u,h,f,v,new et)),c&&(p.normal=Ri.getInterpolatedAttribute(c,u,h,f,v,new V),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:h,c:f,normal:new V,materialIndex:0};Ri.getNormal(Sc,Mc,Ec,g.normal),p.face=g,p.barycoord=v}return p}class Wv extends Vn{constructor(e=null,t=1,i=1,s,a,c,u,h,f=En,p=En,v,g){super(null,c,u,h,f,p,s,a,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rg extends vt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Po=new zt,Pg=new zt,Ac=[],Ng=new zs,NS=new zt,za=new ut,Ga=new Gs;class mp extends ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rg(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,NS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Po),Ng.copy(e.boundingBox).applyMatrix4(Po),this.boundingBox.union(Ng)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Po),Ga.copy(e.boundingSphere).applyMatrix4(Po),this.boundingSphere.union(Ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(za.geometry=this.geometry,za.material=this.material,za.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(i),e.ray.intersectsSphere(Ga)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Po),Pg.multiplyMatrices(i,Po),za.matrixWorld=Pg,za.raycast(e,Ac);for(let c=0,u=Ac.length;c<u;c++){const h=Ac[c];h.instanceId=a,h.object=this,t.push(h)}Ac.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Rg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wv(new Float32Array(s*this.count),s,this.count,op,Hi));const a=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const u=this.geometry.morphTargetsRelative?1:1-c,h=s*e;return a[h]=u,a.set(i,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Oh=new V,IS=new V,LS=new ft;class As{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Oh.subVectors(i,t).cross(IS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Oh),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||LS.getNormalMatrix(e),s=this.coplanarPoint(Oh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Gs,DS=new et(.5,.5),Cc=new V;class gp{constructor(e=new As,t=new As,i=new As,s=new As,a=new As,c=new As){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=nr,i=!1){const s=this.planes,a=e.elements,c=a[0],u=a[1],h=a[2],f=a[3],p=a[4],v=a[5],g=a[6],_=a[7],M=a[8],b=a[9],x=a[10],S=a[11],P=a[12],L=a[13],C=a[14],D=a[15];if(s[0].setComponents(f-c,_-p,S-M,D-P).normalize(),s[1].setComponents(f+c,_+p,S+M,D+P).normalize(),s[2].setComponents(f+u,_+v,S+b,D+L).normalize(),s[3].setComponents(f-u,_-v,S-b,D-L).normalize(),i)s[4].setComponents(h,g,x,C).normalize(),s[5].setComponents(f-h,_-g,S-x,D-C).normalize();else if(s[4].setComponents(f-h,_-g,S-x,D-C).normalize(),t===nr)s[5].setComponents(f+h,_+g,S+x,D+C).normalize();else if(t===Ja)s[5].setComponents(h,g,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const t=DS.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Cc.x=s.normal.x>0?e.max.x:e.min.x,Cc.y=s.normal.y>0?e.max.y:e.min.y,Cc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ho extends Ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hu=new V,fu=new V,Ig=new zt,Va=new pp,Rc=new Gs,Fh=new V,Lg=new V;class Ls extends vn{constructor(e=new Tt,t=new Ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)hu.fromBufferAttribute(t,s-1),fu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=hu.distanceTo(fu);e.setAttribute("lineDistance",new Yt(i,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(s),Rc.radius+=a,e.ray.intersectsSphere(Rc)===!1)return;Ig.copy(s).invert(),Va.copy(e.ray).applyMatrix4(Ig);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){const _=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let b=_,x=M-1;b<x;b+=f){const S=p.getX(b),P=p.getX(b+1),L=Pc(this,e,Va,h,S,P,b);L&&t.push(L)}if(this.isLineLoop){const b=p.getX(M-1),x=p.getX(_),S=Pc(this,e,Va,h,b,x,M-1);S&&t.push(S)}}else{const _=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let b=_,x=M-1;b<x;b+=f){const S=Pc(this,e,Va,h,b,b+1,b);S&&t.push(S)}if(this.isLineLoop){const b=Pc(this,e,Va,h,M-1,_,M-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Pc(o,e,t,i,s,a,c){const u=o.geometry.attributes.position;if(hu.fromBufferAttribute(u,s),fu.fromBufferAttribute(u,a),t.distanceSqToSegment(hu,fu,Fh,Lg)>i)return;Fh.applyMatrix4(o.matrixWorld);const f=e.ray.origin.distanceTo(Fh);if(!(f<e.near||f>e.far))return{distance:f,point:Lg.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const Dg=new V,Ug=new V;class el extends Ls{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)Dg.fromBufferAttribute(t,s),Ug.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Dg.distanceTo(Ug);e.setAttribute("lineDistance",new Yt(i,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xv extends Ar{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Og=new zt,Vf=new pp,Nc=new Gs,Ic=new V;class Fs extends vn{constructor(e=new Tt,t=new Xv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(s),Nc.radius+=a,e.ray.intersectsSphere(Nc)===!1)return;Og.copy(s).invert(),Vf.copy(e.ray).applyMatrix4(Og);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=i.index,v=i.attributes.position;if(f!==null){const g=Math.max(0,c.start),_=Math.min(f.count,c.start+c.count);for(let M=g,b=_;M<b;M++){const x=f.getX(M);Ic.fromBufferAttribute(v,x),Fg(Ic,x,h,s,e,t,this)}}else{const g=Math.max(0,c.start),_=Math.min(v.count,c.start+c.count);for(let M=g,b=_;M<b;M++)Ic.fromBufferAttribute(v,M),Fg(Ic,M,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Fg(o,e,t,i,s,a,c){const u=Vf.distanceSqToPoint(o);if(u<t){const h=new V;Vf.closestPointToPoint(o,h),h.applyMatrix4(i);const f=s.ray.origin.distanceTo(h);if(f<s.near||f>s.far)return;a.push({distance:f,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class jv extends Vn{constructor(e=[],t=Us,i,s,a,c,u,h,f,p){super(e,t,i,s,a,c,u,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yv extends Vn{constructor(e,t,i,s,a,c,u,h,f){super(e,t,i,s,a,c,u,h,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wo extends Vn{constructor(e,t,i=rr,s,a,c,u=En,h=En,f,p=wr,v=1){if(p!==wr&&p!==Is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,s,a,c,u,h,p,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class US extends Wo{constructor(e,t=rr,i=Us,s,a,c=En,u=En,h,f=wr){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,i,s,a,c,u,h,f),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qv extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fn extends Tt{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const h=[],f=[],p=[],v=[];let g=0,_=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(h),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(v,2));function M(b,x,S,P,L,C,D,I,O,w,R){const F=C/O,B=D/w,z=C/2,K=D/2,te=I/2,Y=O+1,ae=w+1;let Z=0,$=0;const se=new V;for(let de=0;de<ae;de++){const G=de*B-K;for(let J=0;J<Y;J++){const Ue=J*F-z;se[b]=Ue*P,se[x]=G*L,se[S]=te,f.push(se.x,se.y,se.z),se[b]=0,se[x]=0,se[S]=I>0?1:-1,p.push(se.x,se.y,se.z),v.push(J/O),v.push(1-de/w),Z+=1}}for(let de=0;de<w;de++)for(let G=0;G<O;G++){const J=g+G+Y*de,Ue=g+G+Y*(de+1),Ke=g+(G+1)+Y*(de+1),Ge=g+(G+1)+Y*de;h.push(J,Ue,Ge),h.push(Ue,Ke,Ge),$+=6}u.addGroup(_,$,R),_+=$,g+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vp extends Tt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const a=[],c=[],u=[],h=[],f=new V,p=new et;c.push(0,0,0),u.push(0,0,1),h.push(.5,.5);for(let v=0,g=3;v<=t;v++,g+=3){const _=i+v/t*s;f.x=e*Math.cos(_),f.y=e*Math.sin(_),c.push(f.x,f.y,f.z),u.push(0,0,1),p.x=(c[g]/e+1)/2,p.y=(c[g+1]/e+1)/2,h.push(p.x,p.y)}for(let v=1;v<=t;v++)a.push(v,v+1,0);this.setIndex(a),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xo extends Tt{constructor(e=1,t=1,i=1,s=32,a=1,c=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:h};const f=this;s=Math.floor(s),a=Math.floor(a);const p=[],v=[],g=[],_=[];let M=0;const b=[],x=i/2;let S=0;P(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(p),this.setAttribute("position",new Yt(v,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(_,2));function P(){const C=new V,D=new V;let I=0;const O=(t-e)/i;for(let w=0;w<=a;w++){const R=[],F=w/a,B=F*(t-e)+e;for(let z=0;z<=s;z++){const K=z/s,te=K*h+u,Y=Math.sin(te),ae=Math.cos(te);D.x=B*Y,D.y=-F*i+x,D.z=B*ae,v.push(D.x,D.y,D.z),C.set(Y,O,ae).normalize(),g.push(C.x,C.y,C.z),_.push(K,1-F),R.push(M++)}b.push(R)}for(let w=0;w<s;w++)for(let R=0;R<a;R++){const F=b[R][w],B=b[R+1][w],z=b[R+1][w+1],K=b[R][w+1];(e>0||R!==0)&&(p.push(F,B,K),I+=3),(t>0||R!==a-1)&&(p.push(B,z,K),I+=3)}f.addGroup(S,I,0),S+=I}function L(C){const D=M,I=new et,O=new V;let w=0;const R=C===!0?e:t,F=C===!0?1:-1;for(let z=1;z<=s;z++)v.push(0,x*F,0),g.push(0,F,0),_.push(.5,.5),M++;const B=M;for(let z=0;z<=s;z++){const te=z/s*h+u,Y=Math.cos(te),ae=Math.sin(te);O.x=R*ae,O.y=x*F,O.z=R*Y,v.push(O.x,O.y,O.z),g.push(0,F,0),I.x=Y*.5+.5,I.y=ae*.5*F+.5,_.push(I.x,I.y),M++}for(let z=0;z<s;z++){const K=D+z,te=B+z;C===!0?p.push(te,te+1,K):p.push(te+1,te,K),w+=3}f.addGroup(S,w,C===!0?1:2),S+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xp extends Xo{constructor(e=1,t=1,i=32,s=1,a=!1,c=0,u=Math.PI*2){super(0,e,t,i,s,a,c,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u}}static fromJSON(e){return new xp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _u extends Tt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const a=[],c=[];u(s),f(i),p(),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(a.slice(),3)),this.setAttribute("uv",new Yt(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(P){const L=new V,C=new V,D=new V;for(let I=0;I<t.length;I+=3)_(t[I+0],L),_(t[I+1],C),_(t[I+2],D),h(L,C,D,P)}function h(P,L,C,D){const I=D+1,O=[];for(let w=0;w<=I;w++){O[w]=[];const R=P.clone().lerp(C,w/I),F=L.clone().lerp(C,w/I),B=I-w;for(let z=0;z<=B;z++)z===0&&w===I?O[w][z]=R:O[w][z]=R.clone().lerp(F,z/B)}for(let w=0;w<I;w++)for(let R=0;R<2*(I-w)-1;R++){const F=Math.floor(R/2);R%2===0?(g(O[w][F+1]),g(O[w+1][F]),g(O[w][F])):(g(O[w][F+1]),g(O[w+1][F+1]),g(O[w+1][F]))}}function f(P){const L=new V;for(let C=0;C<a.length;C+=3)L.x=a[C+0],L.y=a[C+1],L.z=a[C+2],L.normalize().multiplyScalar(P),a[C+0]=L.x,a[C+1]=L.y,a[C+2]=L.z}function p(){const P=new V;for(let L=0;L<a.length;L+=3){P.x=a[L+0],P.y=a[L+1],P.z=a[L+2];const C=x(P)/2/Math.PI+.5,D=S(P)/Math.PI+.5;c.push(C,1-D)}M(),v()}function v(){for(let P=0;P<c.length;P+=6){const L=c[P+0],C=c[P+2],D=c[P+4],I=Math.max(L,C,D),O=Math.min(L,C,D);I>.9&&O<.1&&(L<.2&&(c[P+0]+=1),C<.2&&(c[P+2]+=1),D<.2&&(c[P+4]+=1))}}function g(P){a.push(P.x,P.y,P.z)}function _(P,L){const C=P*3;L.x=e[C+0],L.y=e[C+1],L.z=e[C+2]}function M(){const P=new V,L=new V,C=new V,D=new V,I=new et,O=new et,w=new et;for(let R=0,F=0;R<a.length;R+=9,F+=6){P.set(a[R+0],a[R+1],a[R+2]),L.set(a[R+3],a[R+4],a[R+5]),C.set(a[R+6],a[R+7],a[R+8]),I.set(c[F+0],c[F+1]),O.set(c[F+2],c[F+3]),w.set(c[F+4],c[F+5]),D.copy(P).add(L).add(C).divideScalar(3);const B=x(D);b(I,F+0,P,B),b(O,F+2,L,B),b(w,F+4,C,B)}}function b(P,L,C,D){D<0&&P.x===1&&(c[L]=P.x-1),C.x===0&&C.z===0&&(c[L]=D/2/Math.PI+.5)}function x(P){return Math.atan2(P.z,-P.x)}function S(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.vertices,e.indices,e.radius,e.detail)}}class _p extends _u{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,c,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _p(e.radius,e.detail)}}class yp extends _u{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yp(e.radius,e.detail)}}class jo extends Tt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),h=Math.floor(s),f=u+1,p=h+1,v=e/u,g=t/h,_=[],M=[],b=[],x=[];for(let S=0;S<p;S++){const P=S*g-c;for(let L=0;L<f;L++){const C=L*v-a;M.push(C,-P,0),b.push(0,0,1),x.push(L/u),x.push(1-S/h)}}for(let S=0;S<h;S++)for(let P=0;P<u;P++){const L=P+f*S,C=P+f*(S+1),D=P+1+f*(S+1),I=P+1+f*S;_.push(L,C,I),_.push(C,D,I)}this.setIndex(_),this.setAttribute("position",new Yt(M,3)),this.setAttribute("normal",new Yt(b,3)),this.setAttribute("uv",new Yt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sp extends Tt{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(c+u,Math.PI);let f=0;const p=[],v=new V,g=new V,_=[],M=[],b=[],x=[];for(let S=0;S<=i;S++){const P=[],L=S/i,C=c+L*u,D=e*Math.cos(C),I=Math.sqrt(e*e-D*D);let O=0;S===0&&c===0?O=.5/t:S===i&&h===Math.PI&&(O=-.5/t);for(let w=0;w<=t;w++){const R=w/t,F=s+R*a;v.x=-I*Math.cos(F),v.y=D,v.z=I*Math.sin(F),M.push(v.x,v.y,v.z),g.copy(v).normalize(),b.push(g.x,g.y,g.z),x.push(R+O,1-L),P.push(f++)}p.push(P)}for(let S=0;S<i;S++)for(let P=0;P<t;P++){const L=p[S][P+1],C=p[S][P],D=p[S+1][P],I=p[S+1][P+1];(S!==0||c>0)&&_.push(L,C,I),(S!==i-1||h<Math.PI)&&_.push(C,D,I)}this.setIndex(_),this.setAttribute("position",new Yt(M,3)),this.setAttribute("normal",new Yt(b,3)),this.setAttribute("uv",new Yt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yu extends Tt{constructor(e=1,t=.4,i=12,s=48,a=Math.PI*2,c=0,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:a,thetaStart:c,thetaLength:u},i=Math.floor(i),s=Math.floor(s);const h=[],f=[],p=[],v=[],g=new V,_=new V,M=new V;for(let b=0;b<=i;b++){const x=c+b/i*u;for(let S=0;S<=s;S++){const P=S/s*a;_.x=(e+t*Math.cos(x))*Math.cos(P),_.y=(e+t*Math.cos(x))*Math.sin(P),_.z=t*Math.sin(x),f.push(_.x,_.y,_.z),g.x=e*Math.cos(P),g.y=e*Math.sin(P),M.subVectors(_,g).normalize(),p.push(M.x,M.y,M.z),v.push(S/s),v.push(b/i)}}for(let b=1;b<=i;b++)for(let x=1;x<=s;x++){const S=(s+1)*b+x-1,P=(s+1)*(b-1)+x-1,L=(s+1)*(b-1)+x,C=(s+1)*b+x;h.push(S,P,C),h.push(P,L,C)}this.setIndex(h),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Yo(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];if(kg(s))s.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(kg(s[0])){const a=[];for(let c=0,u=s.length;c<u;c++)a[c]=s[c].clone();e[t][i]=a}else e[t][i]=s.slice();else e[t][i]=s}}return e}function qn(o){const e={};for(let t=0;t<o.length;t++){const i=Yo(o[t]);for(const s in i)e[s]=i[s]}return e}function kg(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function OS(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function $v(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const qo={clone:Yo,merge:qn};var FS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FS,this.fragmentShader=kS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=OS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new We().setHex(s.value);break;case"v2":this.uniforms[i].value=new et().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new cn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ft().fromArray(s.value);break;case"m4":this.uniforms[i].value=new zt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Kv extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ai extends Ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class BS extends Ar{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=Kf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zv extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zS extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mp extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class GS extends Mp{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const kh=new zt,Bg=new V,zg=new V;class Qv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bg),zg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zg),t.updateMatrixWorld(),kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ja||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lc=new V,Dc=new Bs,Zi=new V;class Jv extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lc,Dc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,Zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Lc,Dc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new V,Gg=new et,Vg=new et;class gi extends Jv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gf*2*Math.atan(Math.tan(hh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,Gg,Vg),t.subVectors(Vg,Gg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;a+=c.offsetX*s/h,t-=c.offsetY*i/f,s*=c.width/h,i*=c.height/f}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class VS extends Qv{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0}}class HS extends Mp{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new VS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Su extends Jv{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class WS extends Qv{constructor(){super(new Su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hg extends Mp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new WS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const No=-90,Io=1;class XS extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gi(No,Io,e,t);s.layers=this.layers,this.add(s);const a=new gi(No,Io,e,t);a.layers=this.layers,this.add(a);const c=new gi(No,Io,e,t);c.layers=this.layers,this.add(c);const u=new gi(No,Io,e,t);u.layers=this.layers,this.add(u);const h=new gi(No,Io,e,t);h.layers=this.layers,this.add(h);const f=new gi(No,Io,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,h]=t;for(const f of t)this.remove(f);if(e===nr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,h,f,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,g,_),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class jS extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class YS{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=qS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function qS(){this._document.hidden===!1&&this.reset()}const Ap=class Ap{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=s,this}};Ap.prototype.isMatrix2=!0;let Wg=Ap;function Xg(o,e,t,i){const s=$S(i);switch(t){case Lv:return o*e;case op:return o*e/s.components*s.byteLength;case ap:return o*e/s.components*s.byteLength;case Os:return o*e*2/s.components*s.byteLength;case lp:return o*e*2/s.components*s.byteLength;case Dv:return o*e*3/s.components*s.byteLength;case Wi:return o*e*4/s.components*s.byteLength;case cp:return o*e*4/s.components*s.byteLength;case $c:case Kc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Zc:case Qc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case df:case ff:return Math.max(o,16)*Math.max(e,8)/4;case uf:case hf:return Math.max(o,8)*Math.max(e,8)/2;case pf:case mf:case vf:case xf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case gf:case ru:case _f:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case wf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case bf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Af:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Cf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case If:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Df:case Uf:case Of:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ff:case kf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case su:case Bf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $S(o){switch(o){case vi:case Rv:return{byteLength:1,components:1};case Za:case Pv:case Kn:return{byteLength:2,components:1};case rp:case sp:return{byteLength:2,components:4};case rr:case ip:case Hi:return{byteLength:4,components:1};case Nv:case Iv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$f}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$f);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ex(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&o!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function KS(o){const e=new WeakMap;function t(u,h){const f=u.array,p=u.usage,v=f.byteLength,g=o.createBuffer();o.bindBuffer(h,g),o.bufferData(h,f,p),u.onUploadCallback();let _;if(f instanceof Float32Array)_=o.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)_=o.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?_=o.HALF_FLOAT:_=o.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=o.SHORT;else if(f instanceof Uint32Array)_=o.UNSIGNED_INT;else if(f instanceof Int32Array)_=o.INT;else if(f instanceof Int8Array)_=o.BYTE;else if(f instanceof Uint8Array)_=o.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:v}}function i(u,h,f){const p=h.array,v=h.updateRanges;if(o.bindBuffer(f,u),v.length===0)o.bufferSubData(f,0,p);else{v.sort((_,M)=>_.start-M.start);let g=0;for(let _=1;_<v.length;_++){const M=v[g],b=v[_];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++g,v[g]=b)}v.length=g+1;for(let _=0,M=v.length;_<M;_++){const b=v[_];o.bufferSubData(f,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(o.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,h),f.version=u.version}}return{get:s,remove:a,update:c}}var ZS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,oM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AM="gl_FragColor = linearToOutputTexel( gl_FragColor );",CM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,HM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$M=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,e1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,p1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,g1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,y1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,A1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,O1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,F1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,G1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ME=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:ZS,alphahash_pars_fragment:QS,alphamap_fragment:JS,alphamap_pars_fragment:eM,alphatest_fragment:tM,alphatest_pars_fragment:nM,aomap_fragment:iM,aomap_pars_fragment:rM,batching_pars_vertex:sM,batching_vertex:oM,begin_vertex:aM,beginnormal_vertex:lM,bsdfs:cM,iridescence_fragment:uM,bumpmap_pars_fragment:dM,clipping_planes_fragment:hM,clipping_planes_pars_fragment:fM,clipping_planes_pars_vertex:pM,clipping_planes_vertex:mM,color_fragment:gM,color_pars_fragment:vM,color_pars_vertex:xM,color_vertex:_M,common:yM,cube_uv_reflection_fragment:SM,defaultnormal_vertex:MM,displacementmap_pars_vertex:EM,displacementmap_vertex:TM,emissivemap_fragment:wM,emissivemap_pars_fragment:bM,colorspace_fragment:AM,colorspace_pars_fragment:CM,envmap_fragment:RM,envmap_common_pars_fragment:PM,envmap_pars_fragment:NM,envmap_pars_vertex:IM,envmap_physical_pars_fragment:HM,envmap_vertex:LM,fog_vertex:DM,fog_pars_vertex:UM,fog_fragment:OM,fog_pars_fragment:FM,gradientmap_pars_fragment:kM,lightmap_pars_fragment:BM,lights_lambert_fragment:zM,lights_lambert_pars_fragment:GM,lights_pars_begin:VM,lights_toon_fragment:WM,lights_toon_pars_fragment:XM,lights_phong_fragment:jM,lights_phong_pars_fragment:YM,lights_physical_fragment:qM,lights_physical_pars_fragment:$M,lights_fragment_begin:KM,lights_fragment_maps:ZM,lights_fragment_end:QM,lightprobes_pars_fragment:JM,logdepthbuf_fragment:e1,logdepthbuf_pars_fragment:t1,logdepthbuf_pars_vertex:n1,logdepthbuf_vertex:i1,map_fragment:r1,map_pars_fragment:s1,map_particle_fragment:o1,map_particle_pars_fragment:a1,metalnessmap_fragment:l1,metalnessmap_pars_fragment:c1,morphinstance_vertex:u1,morphcolor_vertex:d1,morphnormal_vertex:h1,morphtarget_pars_vertex:f1,morphtarget_vertex:p1,normal_fragment_begin:m1,normal_fragment_maps:g1,normal_pars_fragment:v1,normal_pars_vertex:x1,normal_vertex:_1,normalmap_pars_fragment:y1,clearcoat_normal_fragment_begin:S1,clearcoat_normal_fragment_maps:M1,clearcoat_pars_fragment:E1,iridescence_pars_fragment:T1,opaque_fragment:w1,packing:b1,premultiplied_alpha_fragment:A1,project_vertex:C1,dithering_fragment:R1,dithering_pars_fragment:P1,roughnessmap_fragment:N1,roughnessmap_pars_fragment:I1,shadowmap_pars_fragment:L1,shadowmap_pars_vertex:D1,shadowmap_vertex:U1,shadowmask_pars_fragment:O1,skinbase_vertex:F1,skinning_pars_vertex:k1,skinning_vertex:B1,skinnormal_vertex:z1,specularmap_fragment:G1,specularmap_pars_fragment:V1,tonemapping_fragment:H1,tonemapping_pars_fragment:W1,transmission_fragment:X1,transmission_pars_fragment:j1,uv_pars_fragment:Y1,uv_pars_vertex:q1,uv_vertex:$1,worldpos_vertex:K1,background_vert:Z1,background_frag:Q1,backgroundCube_vert:J1,backgroundCube_frag:eE,cube_vert:tE,cube_frag:nE,depth_vert:iE,depth_frag:rE,distance_vert:sE,distance_frag:oE,equirect_vert:aE,equirect_frag:lE,linedashed_vert:cE,linedashed_frag:uE,meshbasic_vert:dE,meshbasic_frag:hE,meshlambert_vert:fE,meshlambert_frag:pE,meshmatcap_vert:mE,meshmatcap_frag:gE,meshnormal_vert:vE,meshnormal_frag:xE,meshphong_vert:_E,meshphong_frag:yE,meshphysical_vert:SE,meshphysical_frag:ME,meshtoon_vert:EE,meshtoon_frag:TE,points_vert:wE,points_frag:bE,shadow_vert:AE,shadow_frag:CE,sprite_vert:RE,sprite_frag:PE},De={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},er={basic:{uniforms:qn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:qn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:qn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:qn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:qn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new We(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:qn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:qn([De.points,De.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:qn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:qn([De.common,De.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:qn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:qn([De.sprite,De.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:qn([De.common,De.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:qn([De.lights,De.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};er.physical={uniforms:qn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Uc={r:0,b:0,g:0},NE=new zt,tx=new ft;tx.set(-1,0,0,0,1,0,0,0,1);function IE(o,e,t,i,s,a){const c=new We(0);let u=s===!0?0:1,h,f,p=null,v=0,g=null;function _(P){let L=P.isScene===!0?P.background:null;if(L&&L.isTexture){const C=P.backgroundBlurriness>0;L=e.get(L,C)}return L}function M(P){let L=!1;const C=_(P);C===null?x(c,u):C&&C.isColor&&(x(C,1),L=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(o.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(P,L){const C=_(L);C&&(C.isCubeTexture||C.mapping===xu)?(f===void 0&&(f=new ut(new fn(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Yo(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=C,f.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(NE.makeRotationFromEuler(L.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(tx),f.material.toneMapped=Et.getTransfer(C.colorSpace)!==Bt,(p!==C||v!==C.version||g!==o.toneMapping)&&(f.material.needsUpdate=!0,p=C,v=C.version,g=o.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new ut(new jo(2,2),new Ot({name:"BackgroundMaterial",uniforms:Yo(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.toneMapped=Et.getTransfer(C.colorSpace)!==Bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(p!==C||v!==C.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,p=C,v=C.version,g=o.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function x(P,L){P.getRGB(Uc,$v(o)),t.buffers.color.setClear(Uc.r,Uc.g,Uc.b,L,a)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,L=1){c.set(P),u=L,x(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(P){u=P,x(c,u)},render:M,addToRenderList:b,dispose:S}}function LE(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=g(null);let a=s,c=!1;function u(B,z,K,te,Y){let ae=!1;const Z=v(B,te,K,z);a!==Z&&(a=Z,f(a.object)),ae=_(B,te,K,Y),ae&&M(B,te,K,Y),Y!==null&&e.update(Y,o.ELEMENT_ARRAY_BUFFER),(ae||c)&&(c=!1,C(B,z,K,te),Y!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function h(){return o.createVertexArray()}function f(B){return o.bindVertexArray(B)}function p(B){return o.deleteVertexArray(B)}function v(B,z,K,te){const Y=te.wireframe===!0;let ae=i[z.id];ae===void 0&&(ae={},i[z.id]=ae);const Z=B.isInstancedMesh===!0?B.id:0;let $=ae[Z];$===void 0&&($={},ae[Z]=$);let se=$[K.id];se===void 0&&(se={},$[K.id]=se);let de=se[Y];return de===void 0&&(de=g(h()),se[Y]=de),de}function g(B){const z=[],K=[],te=[];for(let Y=0;Y<t;Y++)z[Y]=0,K[Y]=0,te[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:K,attributeDivisors:te,object:B,attributes:{},index:null}}function _(B,z,K,te){const Y=a.attributes,ae=z.attributes;let Z=0;const $=K.getAttributes();for(const se in $)if($[se].location>=0){const G=Y[se];let J=ae[se];if(J===void 0&&(se==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),se==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;Z++}return a.attributesNum!==Z||a.index!==te}function M(B,z,K,te){const Y={},ae=z.attributes;let Z=0;const $=K.getAttributes();for(const se in $)if($[se].location>=0){let G=ae[se];G===void 0&&(se==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),se==="instanceColor"&&B.instanceColor&&(G=B.instanceColor));const J={};J.attribute=G,G&&G.data&&(J.data=G.data),Y[se]=J,Z++}a.attributes=Y,a.attributesNum=Z,a.index=te}function b(){const B=a.newAttributes;for(let z=0,K=B.length;z<K;z++)B[z]=0}function x(B){S(B,0)}function S(B,z){const K=a.newAttributes,te=a.enabledAttributes,Y=a.attributeDivisors;K[B]=1,te[B]===0&&(o.enableVertexAttribArray(B),te[B]=1),Y[B]!==z&&(o.vertexAttribDivisor(B,z),Y[B]=z)}function P(){const B=a.newAttributes,z=a.enabledAttributes;for(let K=0,te=z.length;K<te;K++)z[K]!==B[K]&&(o.disableVertexAttribArray(K),z[K]=0)}function L(B,z,K,te,Y,ae,Z){Z===!0?o.vertexAttribIPointer(B,z,K,Y,ae):o.vertexAttribPointer(B,z,K,te,Y,ae)}function C(B,z,K,te){b();const Y=te.attributes,ae=K.getAttributes(),Z=z.defaultAttributeValues;for(const $ in ae){const se=ae[$];if(se.location>=0){let de=Y[$];if(de===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(de=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(de=B.instanceColor)),de!==void 0){const G=de.normalized,J=de.itemSize,Ue=e.get(de);if(Ue===void 0)continue;const Ke=Ue.buffer,Ge=Ue.type,le=Ue.bytesPerElement,xe=Ge===o.INT||Ge===o.UNSIGNED_INT||de.gpuType===ip;if(de.isInterleavedBufferAttribute){const me=de.data,Oe=me.stride,nt=de.offset;if(me.isInstancedInterleavedBuffer){for(let it=0;it<se.locationSize;it++)S(se.location+it,me.meshPerAttribute);B.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let it=0;it<se.locationSize;it++)x(se.location+it);o.bindBuffer(o.ARRAY_BUFFER,Ke);for(let it=0;it<se.locationSize;it++)L(se.location+it,J/se.locationSize,Ge,G,Oe*le,(nt+J/se.locationSize*it)*le,xe)}else{if(de.isInstancedBufferAttribute){for(let me=0;me<se.locationSize;me++)S(se.location+me,de.meshPerAttribute);B.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let me=0;me<se.locationSize;me++)x(se.location+me);o.bindBuffer(o.ARRAY_BUFFER,Ke);for(let me=0;me<se.locationSize;me++)L(se.location+me,J/se.locationSize,Ge,G,J*le,J/se.locationSize*me*le,xe)}}else if(Z!==void 0){const G=Z[$];if(G!==void 0)switch(G.length){case 2:o.vertexAttrib2fv(se.location,G);break;case 3:o.vertexAttrib3fv(se.location,G);break;case 4:o.vertexAttrib4fv(se.location,G);break;default:o.vertexAttrib1fv(se.location,G)}}}}P()}function D(){R();for(const B in i){const z=i[B];for(const K in z){const te=z[K];for(const Y in te){const ae=te[Y];for(const Z in ae)p(ae[Z].object),delete ae[Z];delete te[Y]}}delete i[B]}}function I(B){if(i[B.id]===void 0)return;const z=i[B.id];for(const K in z){const te=z[K];for(const Y in te){const ae=te[Y];for(const Z in ae)p(ae[Z].object),delete ae[Z];delete te[Y]}}delete i[B.id]}function O(B){for(const z in i){const K=i[z];for(const te in K){const Y=K[te];if(Y[B.id]===void 0)continue;const ae=Y[B.id];for(const Z in ae)p(ae[Z].object),delete ae[Z];delete Y[B.id]}}}function w(B){for(const z in i){const K=i[z],te=B.isInstancedMesh===!0?B.id:0,Y=K[te];if(Y!==void 0){for(const ae in Y){const Z=Y[ae];for(const $ in Z)p(Z[$].object),delete Z[$];delete Y[ae]}delete K[te],Object.keys(K).length===0&&delete i[z]}}}function R(){F(),c=!0,a!==s&&(a=s,f(a.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:R,resetDefaultState:F,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:x,disableUnusedAttributes:P}}function DE(o,e,t){let i;function s(h){i=h}function a(h,f){o.drawArrays(i,h,f),t.update(f,i,1)}function c(h,f,p){p!==0&&(o.drawArraysInstanced(i,h,f,p),t.update(f,i,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_];t.update(g,i,1)}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function UE(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==Wi&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const w=O===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==vi&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Hi&&!w)}function h(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=h(f);p!==f&&(lt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:C,maxSamples:D,samples:I}}function OE(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new As,u=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const _=v.length!==0||g||i!==0||s;return s=g,i=v.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,_){const M=v.clippingPlanes,b=v.clipIntersection,x=v.clipShadows,S=o.get(v);if(!s||M===null||M.length===0||a&&!x)a?p(null):f();else{const P=a?0:i,L=P*4;let C=S.clippingState||null;h.value=C,C=p(M,g,L,_);for(let D=0;D!==L;++D)C[D]=t[D];S.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(v,g,_,M){const b=v!==null?v.length:0;let x=null;if(b!==0){if(x=h.value,M!==!0||x===null){const S=_+b*4,P=g.matrixWorldInverse;u.getNormalMatrix(P),(x===null||x.length<S)&&(x=new Float32Array(S));for(let L=0,C=_;L!==b;++L,C+=4)c.copy(v[L]).applyMatrix4(P,u),c.normal.toArray(x,C),x[C+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const es=4,jg=[.125,.215,.35,.446,.526,.582],Ps=20,FE=256,Ha=new Su,Yg=new We;let Bh=null,zh=0,Gh=0,Vh=!1;const kE=new V;class Hf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){const{size:c=256,position:u=kE}=a;Bh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,zh,Gh),this._renderer.xr.enabled=Vh,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Kn,format:Wi,colorSpace:au,depthBuffer:!1},s=qg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qg(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=BE(a)),this._blurMaterial=GE(a,e,t),this._ggxMaterial=zE(a,e,t)}return s}_compileMaterial(e){const t=new ut(new Tt,e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,i,s,a){const h=new gi(90,1,t,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,_=v.toneMapping;v.getClearColor(Yg),v.toneMapping=ir,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new fn,new xi({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let S=!1;const P=e.background;P?P.isColor&&(x.color.copy(P),e.background=null,S=!0):(x.color.copy(Yg),S=!0);for(let L=0;L<6;L++){const C=L%3;C===0?(h.up.set(0,f[L],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+p[L],a.y,a.z)):C===1?(h.up.set(0,0,f[L]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+p[L],a.z)):(h.up.set(0,f[L],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+p[L]));const D=this._cubeSize;Lo(s,C*D,L>2?D:0,D,D),v.setRenderTarget(s),S&&v.render(b,h),v.render(e,h)}v.toneMapping=_,v.autoClear=g,e.background=P}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Us||e.mapping===Vo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const a=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const h=this._cubeSize;Lo(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,f=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(f*f-p*p),g=0+f*1.25,_=v*g,{_lodMax:M}=this,b=this._sizeLods[i],x=3*b*(i>M-es?i-M+es:0),S=4*(this._cubeSize-b);h.envMap.value=e.texture,h.roughness.value=_,h.mipInt.value=M-t,Lo(a,x,S,3*b,2*b),s.setRenderTarget(a),s.render(u,Ha),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=M-i,Lo(e,x,S,3*b,2*b),s.setRenderTarget(e),s.render(u,Ha)}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const p=3,v=this._lodMeshes[s];v.material=f;const g=f.uniforms,_=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Ps-1),b=a/M,x=isFinite(a)?1+Math.floor(p*b):Ps;x>Ps&&lt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ps}`);const S=[];let P=0;for(let O=0;O<Ps;++O){const w=O/b,R=Math.exp(-w*w/2);S.push(R),O===0?P+=R:O<x&&(P+=2*R)}for(let O=0;O<S.length;O++)S[O]=S[O]/P;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=S,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:L}=this;g.dTheta.value=M,g.mipInt.value=L-i;const C=this._sizeLods[s],D=3*C*(s>L-es?s-L+es:0),I=4*(this._cubeSize-C);Lo(t,D,I,3*C,2*C),h.setRenderTarget(t),h.render(v,Ha)}}function BE(o){const e=[],t=[],i=[];let s=o;const a=o-es+1+jg.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);e.push(u);let h=1/u;c>o-es?h=jg[c-o+es-1]:c===0&&(h=0),t.push(h);const f=1/(u-2),p=-f,v=1+f,g=[p,p,v,p,v,v,p,p,v,v,p,v],_=6,M=6,b=3,x=2,S=1,P=new Float32Array(b*M*_),L=new Float32Array(x*M*_),C=new Float32Array(S*M*_);for(let I=0;I<_;I++){const O=I%3*2/3-1,w=I>2?0:-1,R=[O,w,0,O+2/3,w,0,O+2/3,w+1,0,O,w,0,O+2/3,w+1,0,O,w+1,0];P.set(R,b*M*I),L.set(g,x*M*I);const F=[I,I,I,I,I,I];C.set(F,S*M*I)}const D=new Tt;D.setAttribute("position",new vt(P,b)),D.setAttribute("uv",new vt(L,x)),D.setAttribute("faceIndex",new vt(C,S)),i.push(new ut(D,null)),s>es&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function qg(o,e,t){const i=new Hn(o,e,t);return i.texture.mapping=xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function zE(o,e,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:FE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function GE(o,e,t){const i=new Float32Array(Ps),s=new V(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function $g(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Kg(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class nx extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new jv(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fn(5,5,5),a=new Ot({name:"CubemapFromEquirect",uniforms:Yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$n,blending:Xi});a.uniforms.tEquirect.value=t;const c=new ut(s,a),u=t.minFilter;return t.minFilter===Ns&&(t.minFilter=Gn),new XS(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}function VE(o){let e=new WeakMap,t=new WeakMap,i=null;function s(g,_=!1){return g==null?null:_?c(g):a(g)}function a(g){if(g&&g.isTexture){const _=g.mapping;if(_===ch||_===uh)if(e.has(g)){const M=e.get(g).texture;return u(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const b=new nx(M.height);return b.fromEquirectangularTexture(o,g),e.set(g,b),g.addEventListener("dispose",f),u(b.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const _=g.mapping,M=_===ch||_===uh,b=_===Us||_===Vo;if(M||b){let x=t.get(g);const S=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return i===null&&(i=new Hf(o)),x=M?i.fromEquirectangular(g,x):i.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const P=g.image;return M&&P&&P.height>0||b&&P&&h(P)?(i===null&&(i=new Hf(o)),x=M?i.fromEquirectangular(g):i.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",p),x.texture):null}}}return g}function u(g,_){return _===ch?g.mapping=Us:_===uh&&(g.mapping=Vo),g}function h(g){let _=0;const M=6;for(let b=0;b<M;b++)g[b]!==void 0&&_++;return _===M}function f(g){const _=g.target;_.removeEventListener("dispose",f);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(g){const _=g.target;_.removeEventListener("dispose",p);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:v}}function HE(o){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=o.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Bo("WebGLRenderer: "+i+" extension not supported."),s}}}function WE(o,e,t,i){const s={},a=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete s[g.id];const _=a.get(g);_&&(e.remove(_),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(v,g){return s[g.id]===!0||(g.addEventListener("dispose",c),s[g.id]=!0,t.memory.geometries++),g}function h(v){const g=v.attributes;for(const _ in g)e.update(g[_],o.ARRAY_BUFFER)}function f(v){const g=[],_=v.index,M=v.attributes.position;let b=0;if(M===void 0)return;if(_!==null){const P=_.array;b=_.version;for(let L=0,C=P.length;L<C;L+=3){const D=P[L+0],I=P[L+1],O=P[L+2];g.push(D,I,I,O,O,D)}}else{const P=M.array;b=M.version;for(let L=0,C=P.length/3-1;L<C;L+=3){const D=L+0,I=L+1,O=L+2;g.push(D,I,I,O,O,D)}}const x=new(M.count>=65535?Gv:zv)(g,1);x.version=b;const S=a.get(v);S&&e.remove(S),a.set(v,x)}function p(v){const g=a.get(v);if(g){const _=v.index;_!==null&&g.version<_.version&&f(v)}else f(v);return a.get(v)}return{get:u,update:h,getWireframeAttribute:p}}function XE(o,e,t){let i;function s(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function h(v,g){o.drawElements(i,g,a,v*c),t.update(g,i,1)}function f(v,g,_){_!==0&&(o.drawElementsInstanced(i,g,a,v*c,_),t.update(g,i,_))}function p(v,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,a,v,0,_);let b=0;for(let x=0;x<_;x++)b+=g[x];t.update(b,i,1)}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function jE(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:Rt("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function YE(o,e,t){const i=new WeakMap,s=new cn;function a(c,u,h){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==v){let F=function(){w.dispose(),i.delete(u),u.removeEventListener("dispose",F)};var _=F;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let C=0;M===!0&&(C=1),b===!0&&(C=2),x===!0&&(C=3);let D=u.attributes.position.count*C,I=1;D>e.maxTextureSize&&(I=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*I*4*v),w=new Ov(O,D,I,v);w.type=Hi,w.needsUpdate=!0;const R=C*4;for(let B=0;B<v;B++){const z=S[B],K=P[B],te=L[B],Y=D*I*4*B;for(let ae=0;ae<z.count;ae++){const Z=ae*R;M===!0&&(s.fromBufferAttribute(z,ae),O[Y+Z+0]=s.x,O[Y+Z+1]=s.y,O[Y+Z+2]=s.z,O[Y+Z+3]=0),b===!0&&(s.fromBufferAttribute(K,ae),O[Y+Z+4]=s.x,O[Y+Z+5]=s.y,O[Y+Z+6]=s.z,O[Y+Z+7]=0),x===!0&&(s.fromBufferAttribute(te,ae),O[Y+Z+8]=s.x,O[Y+Z+9]=s.y,O[Y+Z+10]=s.z,O[Y+Z+11]=te.itemSize===4?s.w:1)}}g={count:v,texture:w,size:new et(D,I)},i.set(u,g),u.addEventListener("dispose",F)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let x=0;x<f.length;x++)M+=f[x];const b=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",b),h.getUniforms().setValue(o,"morphTargetInfluences",f)}h.getUniforms().setValue(o,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:a}}function qE(o,e,t,i,s){let a=new WeakMap;function c(f){const p=s.render.frame,v=f.geometry,g=e.get(f,v);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),a.get(f)!==p&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),a.set(f,p))),f.isSkinnedMesh){const _=f.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return g}function u(){a=new WeakMap}function h(f){const p=f.target;p.removeEventListener("dispose",h),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const $E={[Zf]:"LINEAR_TONE_MAPPING",[Qf]:"REINHARD_TONE_MAPPING",[Jf]:"CINEON_TONE_MAPPING",[vu]:"ACES_FILMIC_TONE_MAPPING",[tp]:"AGX_TONE_MAPPING",[np]:"NEUTRAL_TONE_MAPPING",[ep]:"CUSTOM_TONE_MAPPING"};function KE(o,e,t,i,s,a){const c=new Hn(e,t,{type:o,depthBuffer:s,stencilBuffer:a,samples:i?4:0,depthTexture:s?new Wo(e,t):void 0}),u=new Hn(e,t,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),h=new Tt;h.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const f=new Kv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ut(h,f),v=new Su(-1,1,1,-1,0,1);let g=null,_=null,M=!1,b,x=null,S=[],P=!1;this.setSize=function(L,C){c.setSize(L,C),u.setSize(L,C);for(let D=0;D<S.length;D++){const I=S[D];I.setSize&&I.setSize(L,C)}},this.setEffects=function(L){S=L,P=S.length>0&&S[0].isRenderPass===!0;const C=c.width,D=c.height;for(let I=0;I<S.length;I++){const O=S[I];O.setSize&&O.setSize(C,D)}},this.begin=function(L,C){if(M||L.toneMapping===ir&&S.length===0)return!1;if(x=C,C!==null){const D=C.width,I=C.height;(c.width!==D||c.height!==I)&&this.setSize(D,I)}return P===!1&&L.setRenderTarget(c),b=L.toneMapping,L.toneMapping=ir,!0},this.hasRenderPass=function(){return P},this.end=function(L,C){L.toneMapping=b,M=!0;let D=c,I=u;for(let O=0;O<S.length;O++){const w=S[O];if(w.enabled!==!1&&(w.render(L,I,D,C),w.needsSwap!==!1)){const R=D;D=I,I=R}}if(g!==L.outputColorSpace||_!==L.toneMapping){g=L.outputColorSpace,_=L.toneMapping,f.defines={},Et.getTransfer(g)===Bt&&(f.defines.SRGB_TRANSFER="");const O=$E[_];O&&(f.defines[O]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=D.texture,L.setRenderTarget(x),L.render(p,v),x=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),h.dispose(),f.dispose()}}const ix=new Vn,Wf=new Wo(1,1),rx=new Ov,sx=new gS,ox=new jv,Zg=[],Qg=[],Jg=new Float32Array(16),ev=new Float32Array(9),tv=new Float32Array(4);function Ko(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=Zg[s];if(a===void 0&&(a=new Float32Array(s),Zg[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function Tn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function wn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Eu(o,e){let t=Qg[e];t===void 0&&(t=new Int32Array(e),Qg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function ZE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function QE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;o.uniform2fv(this.addr,e),wn(t,e)}}function JE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;o.uniform3fv(this.addr,e),wn(t,e)}}function eT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;o.uniform4fv(this.addr,e),wn(t,e)}}function tT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,i))return;tv.set(i),o.uniformMatrix2fv(this.addr,!1,tv),wn(t,i)}}function nT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,i))return;ev.set(i),o.uniformMatrix3fv(this.addr,!1,ev),wn(t,i)}}function iT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,i))return;Jg.set(i),o.uniformMatrix4fv(this.addr,!1,Jg),wn(t,i)}}function rT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function sT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;o.uniform2iv(this.addr,e),wn(t,e)}}function oT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;o.uniform3iv(this.addr,e),wn(t,e)}}function aT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;o.uniform4iv(this.addr,e),wn(t,e)}}function lT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function cT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;o.uniform2uiv(this.addr,e),wn(t,e)}}function uT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;o.uniform3uiv(this.addr,e),wn(t,e)}}function dT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;o.uniform4uiv(this.addr,e),wn(t,e)}}function hT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Wf.compareFunction=t.isReversedDepthBuffer()?dp:up,a=Wf):a=ix,t.setTexture2D(e||a,s)}function fT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||sx,s)}function pT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ox,s)}function mT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||rx,s)}function gT(o){switch(o){case 5126:return ZE;case 35664:return QE;case 35665:return JE;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return rT;case 35667:case 35671:return sT;case 35668:case 35672:return oT;case 35669:case 35673:return aT;case 5125:return lT;case 36294:return cT;case 36295:return uT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}function vT(o,e){o.uniform1fv(this.addr,e)}function xT(o,e){const t=Ko(e,this.size,2);o.uniform2fv(this.addr,t)}function _T(o,e){const t=Ko(e,this.size,3);o.uniform3fv(this.addr,t)}function yT(o,e){const t=Ko(e,this.size,4);o.uniform4fv(this.addr,t)}function ST(o,e){const t=Ko(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function MT(o,e){const t=Ko(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function ET(o,e){const t=Ko(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function TT(o,e){o.uniform1iv(this.addr,e)}function wT(o,e){o.uniform2iv(this.addr,e)}function bT(o,e){o.uniform3iv(this.addr,e)}function AT(o,e){o.uniform4iv(this.addr,e)}function CT(o,e){o.uniform1uiv(this.addr,e)}function RT(o,e){o.uniform2uiv(this.addr,e)}function PT(o,e){o.uniform3uiv(this.addr,e)}function NT(o,e){o.uniform4uiv(this.addr,e)}function IT(o,e,t){const i=this.cache,s=e.length,a=Eu(t,s);Tn(i,a)||(o.uniform1iv(this.addr,a),wn(i,a));let c;this.type===o.SAMPLER_2D_SHADOW?c=Wf:c=ix;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||c,a[u])}function LT(o,e,t){const i=this.cache,s=e.length,a=Eu(t,s);Tn(i,a)||(o.uniform1iv(this.addr,a),wn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||sx,a[c])}function DT(o,e,t){const i=this.cache,s=e.length,a=Eu(t,s);Tn(i,a)||(o.uniform1iv(this.addr,a),wn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||ox,a[c])}function UT(o,e,t){const i=this.cache,s=e.length,a=Eu(t,s);Tn(i,a)||(o.uniform1iv(this.addr,a),wn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||rx,a[c])}function OT(o){switch(o){case 5126:return vT;case 35664:return xT;case 35665:return _T;case 35666:return yT;case 35674:return ST;case 35675:return MT;case 35676:return ET;case 5124:case 35670:return TT;case 35667:case 35671:return wT;case 35668:case 35672:return bT;case 35669:case 35673:return AT;case 5125:return CT;case 36294:return RT;case 36295:return PT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}class FT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gT(t.type)}}class kT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OT(t.type)}}class BT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const Hh=/(\w+)(\])?(\[|\.)?/g;function nv(o,e){o.seq.push(e),o.map[e.id]=e}function zT(o,e,t){const i=o.name,s=i.length;for(Hh.lastIndex=0;;){const a=Hh.exec(i),c=Hh.lastIndex;let u=a[1];const h=a[2]==="]",f=a[3];if(h&&(u=u|0),f===void 0||f==="["&&c+2===s){nv(t,f===void 0?new FT(u,o,e):new kT(u,o,e));break}else{let v=t.map[u];v===void 0&&(v=new BT(u),nv(t,v)),t=v}}}class Jc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),h=e.getUniformLocation(t,u.name);zT(u,h,this)}const s=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):a.push(c);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function iv(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const GT=37297;let VT=0;function HT(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const rv=new ft;function WT(o){Et._getMatrix(rv,Et.workingColorSpace,o);const e=`mat3( ${rv.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(o)){case lu:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function sv(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),a=(o.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+HT(o.getShaderSource(e),u)}else return a}function XT(o,e){const t=WT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jT={[Zf]:"Linear",[Qf]:"Reinhard",[Jf]:"Cineon",[vu]:"ACESFilmic",[tp]:"AgX",[np]:"Neutral",[ep]:"Custom"};function YT(o,e){const t=jT[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oc=new V;function qT(){Et.getLuminanceCoefficients(Oc);const o=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $T(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function KT(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ZT(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function Ya(o){return o!==""}function ov(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function av(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xf(o){return o.replace(QT,ew)}const JT=new Map;function ew(o,e){let t=mt[e];if(t===void 0){const i=JT.get(e);if(i!==void 0)t=mt[i],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xf(t)}const tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lv(o){return o.replace(tw,nw)}function nw(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function cv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const iw={[qc]:"SHADOWMAP_TYPE_PCF",[ja]:"SHADOWMAP_TYPE_VSM"};function rw(o){return iw[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sw={[Us]:"ENVMAP_TYPE_CUBE",[Vo]:"ENVMAP_TYPE_CUBE",[xu]:"ENVMAP_TYPE_CUBE_UV"};function ow(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":sw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const aw={[Vo]:"ENVMAP_MODE_REFRACTION"};function lw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":aw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cw={[Kf]:"ENVMAP_BLENDING_MULTIPLY",[qy]:"ENVMAP_BLENDING_MIX",[$y]:"ENVMAP_BLENDING_ADD"};function uw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":cw[o.combine]||"ENVMAP_BLENDING_NONE"}function dw(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function hw(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=rw(t),f=ow(t),p=lw(t),v=uw(t),g=dw(t),_=$T(t),M=KT(a),b=s.createProgram();let x,S,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ya).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ya).join(`
`),S.length>0&&(S+=`
`)):(x=[cv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),S=[cv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?mt.tonemapping_pars_fragment:"",t.toneMapping!==ir?YT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,XT("linearToOutputTexel",t.outputColorSpace),qT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),c=Xf(c),c=ov(c,t),c=av(c,t),u=Xf(u),u=ov(u,t),u=av(u,t),c=lv(c),u=lv(u),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=P+x+c,C=P+S+u,D=iv(s,s.VERTEX_SHADER,L),I=iv(s,s.FRAGMENT_SHADER,C);s.attachShader(b,D),s.attachShader(b,I),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function O(B){if(o.debug.checkShaderErrors){const z=s.getProgramInfoLog(b)||"",K=s.getShaderInfoLog(D)||"",te=s.getShaderInfoLog(I)||"",Y=z.trim(),ae=K.trim(),Z=te.trim();let $=!0,se=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if($=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,b,D,I);else{const de=sv(s,D,"vertex"),G=sv(s,I,"fragment");Rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Y+`
`+de+`
`+G)}else Y!==""?lt("WebGLProgram: Program Info Log:",Y):(ae===""||Z==="")&&(se=!1);se&&(B.diagnostics={runnable:$,programLog:Y,vertexShader:{log:ae,prefix:x},fragmentShader:{log:Z,prefix:S}})}s.deleteShader(D),s.deleteShader(I),w=new Jc(s,b),R=ZT(s,b)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(b,GT)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VT++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=D,this.fragmentShader=I,this}let fw=0;class pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mw(e),t.set(e,i)),i}}class mw{constructor(e){this.id=fw++,this.code=e,this.usedTimes=0}}function gw(o){return o===Os||o===ru||o===su}function vw(o,e,t,i,s,a){const c=new Fv,u=new pw,h=new Set,f=[],p=new Map,v=i.logarithmicDepthBuffer;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function b(w,R,F,B,z,K){const te=B.fog,Y=z.geometry,ae=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,Z=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,$=e.get(w.envMap||ae,Z),se=$&&$.mapping===xu?$.image.height:null,de=_[w.type];w.precision!==null&&(g=i.getMaxPrecision(w.precision),g!==w.precision&&lt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,J=G!==void 0?G.length:0;let Ue=0;Y.morphAttributes.position!==void 0&&(Ue=1),Y.morphAttributes.normal!==void 0&&(Ue=2),Y.morphAttributes.color!==void 0&&(Ue=3);let Ke,Ge,le,xe;if(de){const Ve=er[de];Ke=Ve.vertexShader,Ge=Ve.fragmentShader}else{Ke=w.vertexShader,Ge=w.fragmentShader;const Ve=u.getVertexShaderStage(w),Xt=u.getFragmentShaderStage(w);u.update(w,Ve,Xt),le=Ve.id,xe=Xt.id}const me=o.getRenderTarget(),Oe=o.state.buffers.depth.getReversed(),nt=z.isInstancedMesh===!0,it=z.isBatchedMesh===!0,Jt=!!w.map,pt=!!w.matcap,Ut=!!$,bt=!!w.aoMap,Mt=!!w.lightMap,en=!!w.bumpMap&&w.wireframe===!1,un=!!w.normalMap,dn=!!w.displacementMap,sn=!!w.emissiveMap,Gt=!!w.metalnessMap,tn=!!w.roughnessMap,j=w.anisotropy>0,Pn=w.clearcoat>0,It=w.dispersion>0,U=w.iridescence>0,T=w.sheen>0,Q=w.transmission>0,oe=j&&!!w.anisotropyMap,he=Pn&&!!w.clearcoatMap,Ee=Pn&&!!w.clearcoatNormalMap,Re=Pn&&!!w.clearcoatRoughnessMap,fe=U&&!!w.iridescenceMap,ge=U&&!!w.iridescenceThicknessMap,Ne=T&&!!w.sheenColorMap,qe=T&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,Ce=!!w.specularColorMap,Je=!!w.specularIntensityMap,rt=Q&&!!w.transmissionMap,at=Q&&!!w.thicknessMap,W=!!w.gradientMap,Ae=!!w.alphaMap,pe=w.alphaTest>0,Pe=!!w.alphaHash,Le=!!w.extensions;let ve=ir;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ve=o.toneMapping);const Xe={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:Ke,fragmentShader:Ge,defines:w.defines,customVertexShaderID:le,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:it,batchingColor:it&&z._colorsTexture!==null,instancing:nt,instancingColor:nt&&z.instanceColor!==null,instancingMorph:nt&&z.morphTexture!==null,outputColorSpace:me===null?o.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Jt,matcap:pt,envMap:Ut,envMapMode:Ut&&$.mapping,envMapCubeUVHeight:se,aoMap:bt,lightMap:Mt,bumpMap:en,normalMap:un,displacementMap:dn,emissiveMap:sn,normalMapObjectSpace:un&&w.normalMapType===Jy,normalMapTangentSpace:un&&w.normalMapType===ou,packedNormalMap:un&&w.normalMapType===ou&&gw(w.normalMap.format),metalnessMap:Gt,roughnessMap:tn,anisotropy:j,anisotropyMap:oe,clearcoat:Pn,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Re,dispersion:It,iridescence:U,iridescenceMap:fe,iridescenceThicknessMap:ge,sheen:T,sheenColorMap:Ne,sheenRoughnessMap:qe,specularMap:Ie,specularColorMap:Ce,specularIntensityMap:Je,transmission:Q,transmissionMap:rt,thicknessMap:at,gradientMap:W,opaque:w.transparent===!1&&w.blending===ko&&w.alphaToCoverage===!1,alphaMap:Ae,alphaTest:pe,alphaHash:Pe,combine:w.combine,mapUv:Jt&&M(w.map.channel),aoMapUv:bt&&M(w.aoMap.channel),lightMapUv:Mt&&M(w.lightMap.channel),bumpMapUv:en&&M(w.bumpMap.channel),normalMapUv:un&&M(w.normalMap.channel),displacementMapUv:dn&&M(w.displacementMap.channel),emissiveMapUv:sn&&M(w.emissiveMap.channel),metalnessMapUv:Gt&&M(w.metalnessMap.channel),roughnessMapUv:tn&&M(w.roughnessMap.channel),anisotropyMapUv:oe&&M(w.anisotropyMap.channel),clearcoatMapUv:he&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:qe&&M(w.sheenRoughnessMap.channel),specularMapUv:Ie&&M(w.specularMap.channel),specularColorMapUv:Ce&&M(w.specularColorMap.channel),specularIntensityMapUv:Je&&M(w.specularIntensityMap.channel),transmissionMapUv:rt&&M(w.transmissionMap.channel),thicknessMapUv:at&&M(w.thicknessMap.channel),alphaMapUv:Ae&&M(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(un||j),vertexNormals:!!Y.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(Jt||Ae),fog:!!te,useFog:w.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||Y.attributes.normal===void 0&&un===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Oe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Ue,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:ve,decodeVideoTexture:Jt&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===Bt,decodeVideoTextureEmissive:sn&&w.emissiveMap.isVideoTexture===!0&&Et.getTransfer(w.emissiveMap.colorSpace)===Bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ci,flipSided:w.side===$n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Le&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&w.extensions.multiDraw===!0||it)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=h.has(1),Xe.vertexUv2s=h.has(2),Xe.vertexUv3s=h.has(3),h.clear(),Xe}function x(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)R.push(F),R.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(S(R,w),P(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function S(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function P(w,R){c.disableAll(),R.instancing&&c.enable(0),R.instancingColor&&c.enable(1),R.instancingMorph&&c.enable(2),R.matcap&&c.enable(3),R.envMap&&c.enable(4),R.normalMapObjectSpace&&c.enable(5),R.normalMapTangentSpace&&c.enable(6),R.clearcoat&&c.enable(7),R.iridescence&&c.enable(8),R.alphaTest&&c.enable(9),R.vertexColors&&c.enable(10),R.vertexAlphas&&c.enable(11),R.vertexUv1s&&c.enable(12),R.vertexUv2s&&c.enable(13),R.vertexUv3s&&c.enable(14),R.vertexTangents&&c.enable(15),R.anisotropy&&c.enable(16),R.alphaHash&&c.enable(17),R.batching&&c.enable(18),R.dispersion&&c.enable(19),R.batchingColor&&c.enable(20),R.gradientMap&&c.enable(21),R.packedNormalMap&&c.enable(22),R.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),R.numLightProbeGrids>0&&c.enable(22),R.hasPositionAttribute&&c.enable(23),w.push(c.mask)}function L(w){const R=_[w.type];let F;if(R){const B=er[R];F=qo.clone(B.uniforms)}else F=w.uniforms;return F}function C(w,R){let F=p.get(R);return F!==void 0?++F.usedTimes:(F=new hw(o,R,w,s),f.push(F),p.set(R,F)),F}function D(w){if(--w.usedTimes===0){const R=f.indexOf(w);f[R]=f[f.length-1],f.pop(),p.delete(w.cacheKey),w.destroy()}}function I(w){u.remove(w)}function O(){u.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:L,acquireProgram:C,releaseProgram:D,releaseShaderCache:I,programs:f,dispose:O}}function xw(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,h){o.get(c)[u]=h}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function _w(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function uv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function dv(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function u(g,_,M,b,x,S){let P=o[e];return P===void 0?(P={id:g.id,object:g,geometry:_,material:M,materialVariant:c(g),groupOrder:b,renderOrder:g.renderOrder,z:x,group:S},o[e]=P):(P.id=g.id,P.object=g,P.geometry=_,P.material=M,P.materialVariant=c(g),P.groupOrder=b,P.renderOrder=g.renderOrder,P.z=x,P.group=S),e++,P}function h(g,_,M,b,x,S){const P=u(g,_,M,b,x,S);M.transmission>0?i.push(P):M.transparent===!0?s.push(P):t.push(P)}function f(g,_,M,b,x,S){const P=u(g,_,M,b,x,S);M.transmission>0?i.unshift(P):M.transparent===!0?s.unshift(P):t.unshift(P)}function p(g,_,M){t.length>1&&t.sort(g||_w),i.length>1&&i.sort(_||uv),s.length>1&&s.sort(_||uv),M&&(t.reverse(),i.reverse(),s.reverse())}function v(){for(let g=e,_=o.length;g<_;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:h,unshift:f,finish:v,sort:p}}function yw(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new dv,o.set(i,[c])):s>=a.length?(c=new dv,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function Sw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new We};break;case"SpotLight":t={position:new V,direction:new V,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new V,halfWidth:new V,halfHeight:new V};break}return o[e.id]=t,t}}}function Mw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Ew=0;function Tw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function ww(o){const e=new Sw,t=Mw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new V);const s=new V,a=new zt,c=new zt;function u(f){let p=0,v=0,g=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let _=0,M=0,b=0,x=0,S=0,P=0,L=0,C=0,D=0,I=0,O=0;f.sort(Tw);for(let R=0,F=f.length;R<F;R++){const B=f[R],z=B.color,K=B.intensity,te=B.distance;let Y=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Os?Y=B.shadow.map.texture:Y=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=z.r*K,v+=z.g*K,g+=z.b*K;else if(B.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(B.sh.coefficients[ae],K);O++}else if(B.isDirectionalLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Z=B.shadow,$=t.get(B);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.directionalShadow[_]=$,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=B.shadow.matrix,P++}i.directional[_]=ae,_++}else if(B.isSpotLight){const ae=e.get(B);ae.position.setFromMatrixPosition(B.matrixWorld),ae.color.copy(z).multiplyScalar(K),ae.distance=te,ae.coneCos=Math.cos(B.angle),ae.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ae.decay=B.decay,i.spot[b]=ae;const Z=B.shadow;if(B.map&&(i.spotLightMap[D]=B.map,D++,Z.updateMatrices(B),B.castShadow&&I++),i.spotLightMatrix[b]=Z.matrix,B.castShadow){const $=t.get(B);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.spotShadow[b]=$,i.spotShadowMap[b]=Y,C++}b++}else if(B.isRectAreaLight){const ae=e.get(B);ae.color.copy(z).multiplyScalar(K),ae.halfWidth.set(B.width*.5,0,0),ae.halfHeight.set(0,B.height*.5,0),i.rectArea[x]=ae,x++}else if(B.isPointLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),ae.distance=B.distance,ae.decay=B.decay,B.castShadow){const Z=B.shadow,$=t.get(B);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,i.pointShadow[M]=$,i.pointShadowMap[M]=Y,i.pointShadowMatrix[M]=B.shadow.matrix,L++}i.point[M]=ae,M++}else if(B.isHemisphereLight){const ae=e.get(B);ae.skyColor.copy(B.color).multiplyScalar(K),ae.groundColor.copy(B.groundColor).multiplyScalar(K),i.hemi[S]=ae,S++}}x>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=v,i.ambient[2]=g;const w=i.hash;(w.directionalLength!==_||w.pointLength!==M||w.spotLength!==b||w.rectAreaLength!==x||w.hemiLength!==S||w.numDirectionalShadows!==P||w.numPointShadows!==L||w.numSpotShadows!==C||w.numSpotMaps!==D||w.numLightProbes!==O)&&(i.directional.length=_,i.spot.length=b,i.rectArea.length=x,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=C+D-I,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=O,w.directionalLength=_,w.pointLength=M,w.spotLength=b,w.rectAreaLength=x,w.hemiLength=S,w.numDirectionalShadows=P,w.numPointShadows=L,w.numSpotShadows=C,w.numSpotMaps=D,w.numLightProbes=O,i.version=Ew++)}function h(f,p){let v=0,g=0,_=0,M=0,b=0;const x=p.matrixWorldInverse;for(let S=0,P=f.length;S<P;S++){const L=f[S];if(L.isDirectionalLight){const C=i.directional[v];C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(x),v++}else if(L.isSpotLight){const C=i.spot[_];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(x),_++}else if(L.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(x),c.identity(),a.copy(L.matrixWorld),a.premultiply(x),c.extractRotation(a),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const C=i.point[g];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(x),g++}else if(L.isHemisphereLight){const C=i.hemi[b];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(x),b++}}}return{setup:u,setupView:h,state:i}}function hv(o){const e=new ww(o),t=[],i=[],s=[];function a(g){v.camera=g,t.length=0,i.length=0,s.length=0}function c(g){t.push(g)}function u(g){i.push(g)}function h(g){s.push(g)}function f(){e.setup(t)}function p(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:h}}function bw(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new hv(o),e.set(s,[u])):a>=c.length?(u=new hv(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const Aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rw=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Pw=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],fv=new zt,Wa=new V,Wh=new V;function Nw(o,e,t){let i=new gp;const s=new et,a=new et,c=new cn,u=new Zv,h=new zS,f={},p=t.maxTextureSize,v={[is]:$n,[$n]:is,[Ci]:Ci},g=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Aw,fragmentShader:Cw}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const M=new Tt;M.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ut(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let S=this.type;this.render=function(I,O,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;this.type===Ry&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qc);const R=o.getRenderTarget(),F=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),z=o.state;z.setBlending(Xi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const K=S!==this.type;K&&O.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(Y=>Y.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,Y=I.length;te<Y;te++){const ae=I[te],Z=ae.shadow;if(Z===void 0){lt("WebGLShadowMap:",ae,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const $=Z.getFrameExtents();s.multiply($),a.copy(Z.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/$.x),s.x=a.x*$.x,Z.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/$.y),s.y=a.y*$.y,Z.mapSize.y=a.y));const se=o.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=se,Z.map===null||K===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ja){if(ae.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Hn(s.x,s.y,{format:Os,type:Kn,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),Z.map.texture.name=ae.name+".shadowMap",Z.map.depthTexture=new Wo(s.x,s.y,Hi),Z.map.depthTexture.name=ae.name+".shadowMapDepth",Z.map.depthTexture.format=wr,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=En,Z.map.depthTexture.magFilter=En}else ae.isPointLight?(Z.map=new nx(s.x),Z.map.depthTexture=new US(s.x,rr)):(Z.map=new Hn(s.x,s.y),Z.map.depthTexture=new Wo(s.x,s.y,rr)),Z.map.depthTexture.name=ae.name+".shadowMap",Z.map.depthTexture.format=wr,this.type===qc?(Z.map.depthTexture.compareFunction=se?dp:up,Z.map.depthTexture.minFilter=Gn,Z.map.depthTexture.magFilter=Gn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=En,Z.map.depthTexture.magFilter=En);Z.camera.updateProjectionMatrix()}const de=Z.map.isWebGLCubeRenderTarget?6:1;for(let G=0;G<de;G++){if(Z.map.isWebGLCubeRenderTarget)o.setRenderTarget(Z.map,G),o.clear();else{G===0&&(o.setRenderTarget(Z.map),o.clear());const J=Z.getViewport(G);c.set(a.x*J.x,a.y*J.y,a.x*J.z,a.y*J.w),z.viewport(c)}if(ae.isPointLight){const J=Z.camera,Ue=Z.matrix,Ke=ae.distance||J.far;Ke!==J.far&&(J.far=Ke,J.updateProjectionMatrix()),Wa.setFromMatrixPosition(ae.matrixWorld),J.position.copy(Wa),Wh.copy(J.position),Wh.add(Rw[G]),J.up.copy(Pw[G]),J.lookAt(Wh),J.updateMatrixWorld(),Ue.makeTranslation(-Wa.x,-Wa.y,-Wa.z),fv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(fv,J.coordinateSystem,J.reversedDepth)}else Z.updateMatrices(ae);i=Z.getFrustum(),C(O,w,Z.camera,ae,this.type)}Z.isPointLightShadow!==!0&&this.type===ja&&P(Z,w),Z.needsUpdate=!1}S=this.type,x.needsUpdate=!1,o.setRenderTarget(R,F,B)};function P(I,O){const w=e.update(b);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Hn(s.x,s.y,{format:Os,type:Kn})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(O,null,w,g,b,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(O,null,w,_,b,null)}function L(I,O,w,R){let F=null;const B=w.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)F=B;else if(F=w.isPointLight===!0?h:u,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const z=F.uuid,K=O.uuid;let te=f[z];te===void 0&&(te={},f[z]=te);let Y=te[K];Y===void 0&&(Y=F.clone(),te[K]=Y,O.addEventListener("dispose",D)),F=Y}if(F.visible=O.visible,F.wireframe=O.wireframe,R===ja?F.side=O.shadowSide!==null?O.shadowSide:O.side:F.side=O.shadowSide!==null?O.shadowSide:v[O.side],F.alphaMap=O.alphaMap,F.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,F.map=O.map,F.clipShadows=O.clipShadows,F.clippingPlanes=O.clippingPlanes,F.clipIntersection=O.clipIntersection,F.displacementMap=O.displacementMap,F.displacementScale=O.displacementScale,F.displacementBias=O.displacementBias,F.wireframeLinewidth=O.wireframeLinewidth,F.linewidth=O.linewidth,w.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const z=o.properties.get(F);z.light=w}return F}function C(I,O,w,R,F){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&F===ja)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,I.matrixWorld);const K=e.update(I),te=I.material;if(Array.isArray(te)){const Y=K.groups;for(let ae=0,Z=Y.length;ae<Z;ae++){const $=Y[ae],se=te[$.materialIndex];if(se&&se.visible){const de=L(I,se,R,F);I.onBeforeShadow(o,I,O,w,K,de,$),o.renderBufferDirect(w,null,K,de,I,$),I.onAfterShadow(o,I,O,w,K,de,$)}}}else if(te.visible){const Y=L(I,te,R,F);I.onBeforeShadow(o,I,O,w,K,Y,null),o.renderBufferDirect(w,null,K,Y,I,null),I.onAfterShadow(o,I,O,w,K,Y,null)}}const z=I.children;for(let K=0,te=z.length;K<te;K++)C(z[K],O,w,R,F)}function D(I){I.target.removeEventListener("dispose",D);for(const w in f){const R=f[w],F=I.target.uuid;F in R&&(R[F].dispose(),delete R[F])}}}function Iw(o,e){function t(){let W=!1;const Ae=new cn;let pe=null;const Pe=new cn(0,0,0,0);return{setMask:function(Le){pe!==Le&&!W&&(o.colorMask(Le,Le,Le,Le),pe=Le)},setLocked:function(Le){W=Le},setClear:function(Le,ve,Xe,Ve,Xt){Xt===!0&&(Le*=Ve,ve*=Ve,Xe*=Ve),Ae.set(Le,ve,Xe,Ve),Pe.equals(Ae)===!1&&(o.clearColor(Le,ve,Xe,Ve),Pe.copy(Ae))},reset:function(){W=!1,pe=null,Pe.set(-1,0,0,0)}}}function i(){let W=!1,Ae=!1,pe=null,Pe=null,Le=null;return{setReversed:function(ve){if(Ae!==ve){const Xe=e.get("EXT_clip_control");ve?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const Ve=Le;Le=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(ve){ve?me(o.DEPTH_TEST):Oe(o.DEPTH_TEST)},setMask:function(ve){pe!==ve&&!W&&(o.depthMask(ve),pe=ve)},setFunc:function(ve){if(Ae&&(ve=cS[ve]),Pe!==ve){switch(ve){case ef:o.depthFunc(o.NEVER);break;case tf:o.depthFunc(o.ALWAYS);break;case nf:o.depthFunc(o.LESS);break;case Go:o.depthFunc(o.LEQUAL);break;case rf:o.depthFunc(o.EQUAL);break;case sf:o.depthFunc(o.GEQUAL);break;case of:o.depthFunc(o.GREATER);break;case af:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pe=ve}},setLocked:function(ve){W=ve},setClear:function(ve){Le!==ve&&(Le=ve,Ae&&(ve=1-ve),o.clearDepth(ve))},reset:function(){W=!1,pe=null,Pe=null,Le=null,Ae=!1}}}function s(){let W=!1,Ae=null,pe=null,Pe=null,Le=null,ve=null,Xe=null,Ve=null,Xt=null;return{setTest:function(Ft){W||(Ft?me(o.STENCIL_TEST):Oe(o.STENCIL_TEST))},setMask:function(Ft){Ae!==Ft&&!W&&(o.stencilMask(Ft),Ae=Ft)},setFunc:function(Ft,Dn,_i){(pe!==Ft||Pe!==Dn||Le!==_i)&&(o.stencilFunc(Ft,Dn,_i),pe=Ft,Pe=Dn,Le=_i)},setOp:function(Ft,Dn,_i){(ve!==Ft||Xe!==Dn||Ve!==_i)&&(o.stencilOp(Ft,Dn,_i),ve=Ft,Xe=Dn,Ve=_i)},setLocked:function(Ft){W=Ft},setClear:function(Ft){Xt!==Ft&&(o.clearStencil(Ft),Xt=Ft)},reset:function(){W=!1,Ae=null,pe=null,Pe=null,Le=null,ve=null,Xe=null,Ve=null,Xt=null}}}const a=new t,c=new i,u=new s,h=new WeakMap,f=new WeakMap;let p={},v={},g={},_=new WeakMap,M=[],b=null,x=!1,S=null,P=null,L=null,C=null,D=null,I=null,O=null,w=new We(0,0,0),R=0,F=!1,B=null,z=null,K=null,te=null,Y=null;const ae=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,$=0;const se=o.getParameter(o.VERSION);se.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(se)[1]),Z=$>=1):se.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),Z=$>=2);let de=null,G={};const J=o.getParameter(o.SCISSOR_BOX),Ue=o.getParameter(o.VIEWPORT),Ke=new cn().fromArray(J),Ge=new cn().fromArray(Ue);function le(W,Ae,pe,Pe){const Le=new Uint8Array(4),ve=o.createTexture();o.bindTexture(W,ve),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Xe=0;Xe<pe;Xe++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,Pe,0,o.RGBA,o.UNSIGNED_BYTE,Le):o.texImage2D(Ae+Xe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Le);return ve}const xe={};xe[o.TEXTURE_2D]=le(o.TEXTURE_2D,o.TEXTURE_2D,1),xe[o.TEXTURE_CUBE_MAP]=le(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[o.TEXTURE_2D_ARRAY]=le(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xe[o.TEXTURE_3D]=le(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),me(o.DEPTH_TEST),c.setFunc(Go),en(!1),un(ag),me(o.CULL_FACE),bt(Xi);function me(W){p[W]!==!0&&(o.enable(W),p[W]=!0)}function Oe(W){p[W]!==!1&&(o.disable(W),p[W]=!1)}function nt(W,Ae){return g[W]!==Ae?(o.bindFramebuffer(W,Ae),g[W]=Ae,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ae),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function it(W,Ae){let pe=M,Pe=!1;if(W){pe=_.get(Ae),pe===void 0&&(pe=[],_.set(Ae,pe));const Le=W.textures;if(pe.length!==Le.length||pe[0]!==o.COLOR_ATTACHMENT0){for(let ve=0,Xe=Le.length;ve<Xe;ve++)pe[ve]=o.COLOR_ATTACHMENT0+ve;pe.length=Le.length,Pe=!0}}else pe[0]!==o.BACK&&(pe[0]=o.BACK,Pe=!0);Pe&&o.drawBuffers(pe)}function Jt(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const pt={[Rs]:o.FUNC_ADD,[Ny]:o.FUNC_SUBTRACT,[Iy]:o.FUNC_REVERSE_SUBTRACT};pt[Ly]=o.MIN,pt[Dy]=o.MAX;const Ut={[Uy]:o.ZERO,[Oy]:o.ONE,[Fy]:o.SRC_COLOR,[Qh]:o.SRC_ALPHA,[Hy]:o.SRC_ALPHA_SATURATE,[Gy]:o.DST_COLOR,[By]:o.DST_ALPHA,[ky]:o.ONE_MINUS_SRC_COLOR,[Jh]:o.ONE_MINUS_SRC_ALPHA,[Vy]:o.ONE_MINUS_DST_COLOR,[zy]:o.ONE_MINUS_DST_ALPHA,[Wy]:o.CONSTANT_COLOR,[Xy]:o.ONE_MINUS_CONSTANT_COLOR,[jy]:o.CONSTANT_ALPHA,[Yy]:o.ONE_MINUS_CONSTANT_ALPHA};function bt(W,Ae,pe,Pe,Le,ve,Xe,Ve,Xt,Ft){if(W===Xi){x===!0&&(Oe(o.BLEND),x=!1);return}if(x===!1&&(me(o.BLEND),x=!0),W!==Py){if(W!==S||Ft!==F){if((P!==Rs||D!==Rs)&&(o.blendEquation(o.FUNC_ADD),P=Rs,D=Rs),Ft)switch(W){case ko:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wt:o.blendFunc(o.ONE,o.ONE);break;case lg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case cg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Rt("WebGLState: Invalid blending: ",W);break}else switch(W){case ko:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wt:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case lg:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cg:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",W);break}L=null,C=null,I=null,O=null,w.set(0,0,0),R=0,S=W,F=Ft}return}Le=Le||Ae,ve=ve||pe,Xe=Xe||Pe,(Ae!==P||Le!==D)&&(o.blendEquationSeparate(pt[Ae],pt[Le]),P=Ae,D=Le),(pe!==L||Pe!==C||ve!==I||Xe!==O)&&(o.blendFuncSeparate(Ut[pe],Ut[Pe],Ut[ve],Ut[Xe]),L=pe,C=Pe,I=ve,O=Xe),(Ve.equals(w)===!1||Xt!==R)&&(o.blendColor(Ve.r,Ve.g,Ve.b,Xt),w.copy(Ve),R=Xt),S=W,F=!1}function Mt(W,Ae){W.side===Ci?Oe(o.CULL_FACE):me(o.CULL_FACE);let pe=W.side===$n;Ae&&(pe=!pe),en(pe),W.blending===ko&&W.transparent===!1?bt(Xi):bt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),a.setMask(W.colorWrite);const Pe=W.stencilWrite;u.setTest(Pe),Pe&&(u.setMask(W.stencilWriteMask),u.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),u.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),sn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?me(o.SAMPLE_ALPHA_TO_COVERAGE):Oe(o.SAMPLE_ALPHA_TO_COVERAGE)}function en(W){B!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),B=W)}function un(W){W!==Ay?(me(o.CULL_FACE),W!==z&&(W===ag?o.cullFace(o.BACK):W===Cy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Oe(o.CULL_FACE),z=W}function dn(W){W!==K&&(Z&&o.lineWidth(W),K=W)}function sn(W,Ae,pe){W?(me(o.POLYGON_OFFSET_FILL),(te!==Ae||Y!==pe)&&(te=Ae,Y=pe,c.getReversed()&&(Ae=-Ae),o.polygonOffset(Ae,pe))):Oe(o.POLYGON_OFFSET_FILL)}function Gt(W){W?me(o.SCISSOR_TEST):Oe(o.SCISSOR_TEST)}function tn(W){W===void 0&&(W=o.TEXTURE0+ae-1),de!==W&&(o.activeTexture(W),de=W)}function j(W,Ae,pe){pe===void 0&&(de===null?pe=o.TEXTURE0+ae-1:pe=de);let Pe=G[pe];Pe===void 0&&(Pe={type:void 0,texture:void 0},G[pe]=Pe),(Pe.type!==W||Pe.texture!==Ae)&&(de!==pe&&(o.activeTexture(pe),de=pe),o.bindTexture(W,Ae||xe[W]),Pe.type=W,Pe.texture=Ae)}function Pn(){const W=G[de];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function It(){try{o.compressedTexImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function U(){try{o.compressedTexImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function T(){try{o.texSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Q(){try{o.texSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function oe(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function he(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ee(){try{o.texStorage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Re(){try{o.texStorage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function fe(){try{o.texImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ge(){try{o.texImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ne(W){return v[W]!==void 0?v[W]:o.getParameter(W)}function qe(W,Ae){v[W]!==Ae&&(o.pixelStorei(W,Ae),v[W]=Ae)}function Ie(W){Ke.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),Ke.copy(W))}function Ce(W){Ge.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Ge.copy(W))}function Je(W,Ae){let pe=f.get(Ae);pe===void 0&&(pe=new WeakMap,f.set(Ae,pe));let Pe=pe.get(W);Pe===void 0&&(Pe=o.getUniformBlockIndex(Ae,W.name),pe.set(W,Pe))}function rt(W,Ae){const Pe=f.get(Ae).get(W);h.get(Ae)!==Pe&&(o.uniformBlockBinding(Ae,Pe,W.__bindingPointIndex),h.set(Ae,Pe))}function at(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),p={},v={},de=null,G={},g={},_=new WeakMap,M=[],b=null,x=!1,S=null,P=null,L=null,C=null,D=null,I=null,O=null,w=new We(0,0,0),R=0,F=!1,B=null,z=null,K=null,te=null,Y=null,Ke.set(0,0,o.canvas.width,o.canvas.height),Ge.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:me,disable:Oe,bindFramebuffer:nt,drawBuffers:it,useProgram:Jt,setBlending:bt,setMaterial:Mt,setFlipSided:en,setCullFace:un,setLineWidth:dn,setPolygonOffset:sn,setScissorTest:Gt,activeTexture:tn,bindTexture:j,unbindTexture:Pn,compressedTexImage2D:It,compressedTexImage3D:U,texImage2D:fe,texImage3D:ge,pixelStorei:qe,getParameter:Ne,updateUBOMapping:Je,uniformBlockBinding:rt,texStorage2D:Ee,texStorage3D:Re,texSubImage2D:T,texSubImage3D:Q,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:Ie,viewport:Ce,reset:at}}function Lw(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new et,p=new WeakMap,v=new Set;let g;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):cu("canvas")}function x(U,T,Q){let oe=1;const he=It(U);if((he.width>Q||he.height>Q)&&(oe=Q/Math.max(he.width,he.height)),oe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ee=Math.floor(oe*he.width),Re=Math.floor(oe*he.height);g===void 0&&(g=b(Ee,Re));const fe=T?b(Ee,Re):g;return fe.width=Ee,fe.height=Re,fe.getContext("2d").drawImage(U,0,0,Ee,Re),lt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+Re+")."),fe}else return"data"in U&&lt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function S(U){return U.generateMipmaps}function P(U){o.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(U,T,Q,oe,he,Ee=!1){if(U!==null){if(o[U]!==void 0)return o[U];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Re;oe&&(Re=e.get("EXT_texture_norm16"),Re||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=T;if(T===o.RED&&(Q===o.FLOAT&&(fe=o.R32F),Q===o.HALF_FLOAT&&(fe=o.R16F),Q===o.UNSIGNED_BYTE&&(fe=o.R8),Q===o.UNSIGNED_SHORT&&Re&&(fe=Re.R16_EXT),Q===o.SHORT&&Re&&(fe=Re.R16_SNORM_EXT)),T===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(fe=o.R8UI),Q===o.UNSIGNED_SHORT&&(fe=o.R16UI),Q===o.UNSIGNED_INT&&(fe=o.R32UI),Q===o.BYTE&&(fe=o.R8I),Q===o.SHORT&&(fe=o.R16I),Q===o.INT&&(fe=o.R32I)),T===o.RG&&(Q===o.FLOAT&&(fe=o.RG32F),Q===o.HALF_FLOAT&&(fe=o.RG16F),Q===o.UNSIGNED_BYTE&&(fe=o.RG8),Q===o.UNSIGNED_SHORT&&Re&&(fe=Re.RG16_EXT),Q===o.SHORT&&Re&&(fe=Re.RG16_SNORM_EXT)),T===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(fe=o.RG8UI),Q===o.UNSIGNED_SHORT&&(fe=o.RG16UI),Q===o.UNSIGNED_INT&&(fe=o.RG32UI),Q===o.BYTE&&(fe=o.RG8I),Q===o.SHORT&&(fe=o.RG16I),Q===o.INT&&(fe=o.RG32I)),T===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),Q===o.UNSIGNED_INT&&(fe=o.RGB32UI),Q===o.BYTE&&(fe=o.RGB8I),Q===o.SHORT&&(fe=o.RGB16I),Q===o.INT&&(fe=o.RGB32I)),T===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),Q===o.UNSIGNED_INT&&(fe=o.RGBA32UI),Q===o.BYTE&&(fe=o.RGBA8I),Q===o.SHORT&&(fe=o.RGBA16I),Q===o.INT&&(fe=o.RGBA32I)),T===o.RGB&&(Q===o.UNSIGNED_SHORT&&Re&&(fe=Re.RGB16_EXT),Q===o.SHORT&&Re&&(fe=Re.RGB16_SNORM_EXT),Q===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(fe=o.R11F_G11F_B10F)),T===o.RGBA){const ge=Ee?lu:Et.getTransfer(he);Q===o.FLOAT&&(fe=o.RGBA32F),Q===o.HALF_FLOAT&&(fe=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(fe=ge===Bt?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT&&Re&&(fe=Re.RGBA16_EXT),Q===o.SHORT&&Re&&(fe=Re.RGBA16_SNORM_EXT),Q===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function D(U,T){let Q;return U?T===null||T===rr||T===Qa?Q=o.DEPTH24_STENCIL8:T===Hi?Q=o.DEPTH32F_STENCIL8:T===Za&&(Q=o.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===rr||T===Qa?Q=o.DEPTH_COMPONENT24:T===Hi?Q=o.DEPTH_COMPONENT32F:T===Za&&(Q=o.DEPTH_COMPONENT16),Q}function I(U,T){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==En&&U.minFilter!==Gn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function O(U){const T=U.target;T.removeEventListener("dispose",O),R(T),T.isVideoTexture&&p.delete(T),T.isHTMLTexture&&v.delete(T)}function w(U){const T=U.target;T.removeEventListener("dispose",w),B(T)}function R(U){const T=i.get(U);if(T.__webglInit===void 0)return;const Q=U.source,oe=_.get(Q);if(oe){const he=oe[T.__cacheKey];he.usedTimes--,he.usedTimes===0&&F(U),Object.keys(oe).length===0&&_.delete(Q)}i.remove(U)}function F(U){const T=i.get(U);o.deleteTexture(T.__webglTexture);const Q=U.source,oe=_.get(Q);delete oe[T.__cacheKey],c.memory.textures--}function B(U){const T=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(T.__webglFramebuffer[oe]))for(let he=0;he<T.__webglFramebuffer[oe].length;he++)o.deleteFramebuffer(T.__webglFramebuffer[oe][he]);else o.deleteFramebuffer(T.__webglFramebuffer[oe]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[oe])}else{if(Array.isArray(T.__webglFramebuffer))for(let oe=0;oe<T.__webglFramebuffer.length;oe++)o.deleteFramebuffer(T.__webglFramebuffer[oe]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let oe=0;oe<T.__webglColorRenderbuffer.length;oe++)T.__webglColorRenderbuffer[oe]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[oe]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=U.textures;for(let oe=0,he=Q.length;oe<he;oe++){const Ee=i.get(Q[oe]);Ee.__webglTexture&&(o.deleteTexture(Ee.__webglTexture),c.memory.textures--),i.remove(Q[oe])}i.remove(U)}let z=0;function K(){z=0}function te(){return z}function Y(U){z=U}function ae(){const U=z;return U>=s.maxTextures&&lt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),z+=1,U}function Z(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function $(U,T){const Q=i.get(U);if(U.isVideoTexture&&j(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const oe=U.image;if(oe===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(Q,U,T);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+T)}function se(U,T){const Q=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Oe(Q,U,T);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+T)}function de(U,T){const Q=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Oe(Q,U,T);return}t.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+T)}function G(U,T){const Q=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Q.__version!==U.version){nt(Q,U,T);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+T)}const J={[lf]:o.REPEAT,[Er]:o.CLAMP_TO_EDGE,[cf]:o.MIRRORED_REPEAT},Ue={[En]:o.NEAREST,[Ky]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[Gn]:o.LINEAR,[dh]:o.LINEAR_MIPMAP_NEAREST,[Ns]:o.LINEAR_MIPMAP_LINEAR},Ke={[eS]:o.NEVER,[sS]:o.ALWAYS,[tS]:o.LESS,[up]:o.LEQUAL,[nS]:o.EQUAL,[dp]:o.GEQUAL,[iS]:o.GREATER,[rS]:o.NOTEQUAL};function Ge(U,T){if(T.type===Hi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Gn||T.magFilter===dh||T.magFilter===ac||T.magFilter===Ns||T.minFilter===Gn||T.minFilter===dh||T.minFilter===ac||T.minFilter===Ns)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,J[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,J[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,J[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Ue[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Ue[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Ke[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===En||T.minFilter!==ac&&T.minFilter!==Ns||T.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function le(U,T){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",O));const oe=T.source;let he=_.get(oe);he===void 0&&(he={},_.set(oe,he));const Ee=Z(T);if(Ee!==U.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),he[Ee].usedTimes++;const Re=he[U.__cacheKey];Re!==void 0&&(he[U.__cacheKey].usedTimes--,Re.usedTimes===0&&F(T)),U.__cacheKey=Ee,U.__webglTexture=he[Ee].texture}return Q}function xe(U,T,Q){return Math.floor(Math.floor(U/Q)/T)}function me(U,T,Q,oe){const Ee=U.updateRanges;if(Ee.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,Q,oe,T.data);else{Ee.sort((qe,Ie)=>qe.start-Ie.start);let Re=0;for(let qe=1;qe<Ee.length;qe++){const Ie=Ee[Re],Ce=Ee[qe],Je=Ie.start+Ie.count,rt=xe(Ce.start,T.width,4),at=xe(Ie.start,T.width,4);Ce.start<=Je+1&&rt===at&&xe(Ce.start+Ce.count-1,T.width,4)===rt?Ie.count=Math.max(Ie.count,Ce.start+Ce.count-Ie.start):(++Re,Ee[Re]=Ce)}Ee.length=Re+1;const fe=t.getParameter(o.UNPACK_ROW_LENGTH),ge=t.getParameter(o.UNPACK_SKIP_PIXELS),Ne=t.getParameter(o.UNPACK_SKIP_ROWS);t.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let qe=0,Ie=Ee.length;qe<Ie;qe++){const Ce=Ee[qe],Je=Math.floor(Ce.start/4),rt=Math.ceil(Ce.count/4),at=Je%T.width,W=Math.floor(Je/T.width),Ae=rt,pe=1;t.pixelStorei(o.UNPACK_SKIP_PIXELS,at),t.pixelStorei(o.UNPACK_SKIP_ROWS,W),t.texSubImage2D(o.TEXTURE_2D,0,at,W,Ae,pe,Q,oe,T.data)}U.clearUpdateRanges(),t.pixelStorei(o.UNPACK_ROW_LENGTH,fe),t.pixelStorei(o.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(o.UNPACK_SKIP_ROWS,Ne)}}function Oe(U,T,Q){let oe=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(oe=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(oe=o.TEXTURE_3D);const he=le(U,T),Ee=T.source;t.bindTexture(oe,U.__webglTexture,o.TEXTURE0+Q);const Re=i.get(Ee);if(Ee.version!==Re.__version||he===!0){if(t.activeTexture(o.TEXTURE0+Q),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const pe=Et.getPrimaries(Et.workingColorSpace),Pe=T.colorSpace===Jr?null:Et.getPrimaries(T.colorSpace),Le=T.colorSpace===Jr||pe===Pe?o.NONE:o.BROWSER_DEFAULT_WEBGL;t.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment);let ge=x(T.image,!1,s.maxTextureSize);ge=Pn(T,ge);const Ne=a.convert(T.format,T.colorSpace),qe=a.convert(T.type);let Ie=C(T.internalFormat,Ne,qe,T.normalized,T.colorSpace,T.isVideoTexture);Ge(oe,T);let Ce;const Je=T.mipmaps,rt=T.isVideoTexture!==!0,at=Re.__version===void 0||he===!0,W=Ee.dataReady,Ae=I(T,ge);if(T.isDepthTexture)Ie=D(T.format===Is,T.type),at&&(rt?t.texStorage2D(o.TEXTURE_2D,1,Ie,ge.width,ge.height):t.texImage2D(o.TEXTURE_2D,0,Ie,ge.width,ge.height,0,Ne,qe,null));else if(T.isDataTexture)if(Je.length>0){rt&&at&&t.texStorage2D(o.TEXTURE_2D,Ae,Ie,Je[0].width,Je[0].height);for(let pe=0,Pe=Je.length;pe<Pe;pe++)Ce=Je[pe],rt?W&&t.texSubImage2D(o.TEXTURE_2D,pe,0,0,Ce.width,Ce.height,Ne,qe,Ce.data):t.texImage2D(o.TEXTURE_2D,pe,Ie,Ce.width,Ce.height,0,Ne,qe,Ce.data);T.generateMipmaps=!1}else rt?(at&&t.texStorage2D(o.TEXTURE_2D,Ae,Ie,ge.width,ge.height),W&&me(T,ge,Ne,qe)):t.texImage2D(o.TEXTURE_2D,0,Ie,ge.width,ge.height,0,Ne,qe,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&at&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Ie,Je[0].width,Je[0].height,ge.depth);for(let pe=0,Pe=Je.length;pe<Pe;pe++)if(Ce=Je[pe],T.format!==Wi)if(Ne!==null)if(rt){if(W)if(T.layerUpdates.size>0){const Le=Xg(Ce.width,Ce.height,T.format,T.type);for(const ve of T.layerUpdates){const Xe=Ce.data.subarray(ve*Le/Ce.data.BYTES_PER_ELEMENT,(ve+1)*Le/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,ve,Ce.width,Ce.height,1,Ne,Xe)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Ce.width,Ce.height,ge.depth,Ne,Ce.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pe,Ie,Ce.width,Ce.height,ge.depth,0,Ce.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?W&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Ce.width,Ce.height,ge.depth,Ne,qe,Ce.data):t.texImage3D(o.TEXTURE_2D_ARRAY,pe,Ie,Ce.width,Ce.height,ge.depth,0,Ne,qe,Ce.data)}else{rt&&at&&t.texStorage2D(o.TEXTURE_2D,Ae,Ie,Je[0].width,Je[0].height);for(let pe=0,Pe=Je.length;pe<Pe;pe++)Ce=Je[pe],T.format!==Wi?Ne!==null?rt?W&&t.compressedTexSubImage2D(o.TEXTURE_2D,pe,0,0,Ce.width,Ce.height,Ne,Ce.data):t.compressedTexImage2D(o.TEXTURE_2D,pe,Ie,Ce.width,Ce.height,0,Ce.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?W&&t.texSubImage2D(o.TEXTURE_2D,pe,0,0,Ce.width,Ce.height,Ne,qe,Ce.data):t.texImage2D(o.TEXTURE_2D,pe,Ie,Ce.width,Ce.height,0,Ne,qe,Ce.data)}else if(T.isDataArrayTexture)if(rt){if(at&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Ie,ge.width,ge.height,ge.depth),W)if(T.layerUpdates.size>0){const pe=Xg(ge.width,ge.height,T.format,T.type);for(const Pe of T.layerUpdates){const Le=ge.data.subarray(Pe*pe/ge.data.BYTES_PER_ELEMENT,(Pe+1)*pe/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Pe,ge.width,ge.height,1,Ne,qe,Le)}T.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ne,qe,ge.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Ie,ge.width,ge.height,ge.depth,0,Ne,qe,ge.data);else if(T.isData3DTexture)rt?(at&&t.texStorage3D(o.TEXTURE_3D,Ae,Ie,ge.width,ge.height,ge.depth),W&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ne,qe,ge.data)):t.texImage3D(o.TEXTURE_3D,0,Ie,ge.width,ge.height,ge.depth,0,Ne,qe,ge.data);else if(T.isFramebufferTexture){if(at)if(rt)t.texStorage2D(o.TEXTURE_2D,Ae,Ie,ge.width,ge.height);else{let pe=ge.width,Pe=ge.height;for(let Le=0;Le<Ae;Le++)t.texImage2D(o.TEXTURE_2D,Le,Ie,pe,Pe,0,Ne,qe,null),pe>>=1,Pe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in o){const pe=o.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ge.parentNode!==pe){pe.appendChild(ge),v.add(T),pe.onpaint=Pe=>{const Le=Pe.changedElements;for(const ve of v)Le.includes(ve.image)&&(ve.needsUpdate=!0)},pe.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,ge);else{const Le=o.RGBA,ve=o.RGBA,Xe=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Le,ve,Xe,ge)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Je.length>0){if(rt&&at){const pe=It(Je[0]);t.texStorage2D(o.TEXTURE_2D,Ae,Ie,pe.width,pe.height)}for(let pe=0,Pe=Je.length;pe<Pe;pe++)Ce=Je[pe],rt?W&&t.texSubImage2D(o.TEXTURE_2D,pe,0,0,Ne,qe,Ce):t.texImage2D(o.TEXTURE_2D,pe,Ie,Ne,qe,Ce);T.generateMipmaps=!1}else if(rt){if(at){const pe=It(ge);t.texStorage2D(o.TEXTURE_2D,Ae,Ie,pe.width,pe.height)}W&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Ne,qe,ge)}else t.texImage2D(o.TEXTURE_2D,0,Ie,Ne,qe,ge);S(T)&&P(oe),Re.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function nt(U,T,Q){if(T.image.length!==6)return;const oe=le(U,T),he=T.source;t.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+Q);const Ee=i.get(he);if(he.version!==Ee.__version||oe===!0){t.activeTexture(o.TEXTURE0+Q);const Re=Et.getPrimaries(Et.workingColorSpace),fe=T.colorSpace===Jr?null:Et.getPrimaries(T.colorSpace),ge=T.colorSpace===Jr||Re===fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;t.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,qe=T.image[0]&&T.image[0].isDataTexture,Ie=[];for(let ve=0;ve<6;ve++)!Ne&&!qe?Ie[ve]=x(T.image[ve],!0,s.maxCubemapSize):Ie[ve]=qe?T.image[ve].image:T.image[ve],Ie[ve]=Pn(T,Ie[ve]);const Ce=Ie[0],Je=a.convert(T.format,T.colorSpace),rt=a.convert(T.type),at=C(T.internalFormat,Je,rt,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,Ae=Ee.__version===void 0||oe===!0,pe=he.dataReady;let Pe=I(T,Ce);Ge(o.TEXTURE_CUBE_MAP,T);let Le;if(Ne){W&&Ae&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,at,Ce.width,Ce.height);for(let ve=0;ve<6;ve++){Le=Ie[ve].mipmaps;for(let Xe=0;Xe<Le.length;Xe++){const Ve=Le[Xe];T.format!==Wi?Je!==null?W?pe&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,0,0,Ve.width,Ve.height,Je,Ve.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,at,Ve.width,Ve.height,0,Ve.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?pe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,0,0,Ve.width,Ve.height,Je,rt,Ve.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,at,Ve.width,Ve.height,0,Je,rt,Ve.data)}}}else{if(Le=T.mipmaps,W&&Ae){Le.length>0&&Pe++;const ve=It(Ie[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,at,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(qe){W?pe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie[ve].width,Ie[ve].height,Je,rt,Ie[ve].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,Ie[ve].width,Ie[ve].height,0,Je,rt,Ie[ve].data);for(let Xe=0;Xe<Le.length;Xe++){const Xt=Le[Xe].image[ve].image;W?pe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,0,0,Xt.width,Xt.height,Je,rt,Xt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,at,Xt.width,Xt.height,0,Je,rt,Xt.data)}}else{W?pe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Je,rt,Ie[ve]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,Je,rt,Ie[ve]);for(let Xe=0;Xe<Le.length;Xe++){const Ve=Le[Xe];W?pe&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,0,0,Je,rt,Ve.image[ve]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,at,Je,rt,Ve.image[ve])}}}S(T)&&P(o.TEXTURE_CUBE_MAP),Ee.__version=he.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function it(U,T,Q,oe,he,Ee){const Re=a.convert(Q.format,Q.colorSpace),fe=a.convert(Q.type),ge=C(Q.internalFormat,Re,fe,Q.normalized,Q.colorSpace),Ne=i.get(T),qe=i.get(Q);if(qe.__renderTarget=T,!Ne.__hasExternalTextures){const Ie=Math.max(1,T.width>>Ee),Ce=Math.max(1,T.height>>Ee);he===o.TEXTURE_3D||he===o.TEXTURE_2D_ARRAY?t.texImage3D(he,Ee,ge,Ie,Ce,T.depth,0,Re,fe,null):t.texImage2D(he,Ee,ge,Ie,Ce,0,Re,fe,null)}t.bindFramebuffer(o.FRAMEBUFFER,U),tn(T)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,oe,he,qe.__webglTexture,0,Gt(T)):(he===o.TEXTURE_2D||he>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,oe,he,qe.__webglTexture,Ee),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Jt(U,T,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const oe=T.depthTexture,he=oe&&oe.isDepthTexture?oe.type:null,Ee=D(T.stencilBuffer,he),Re=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;tn(T)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Gt(T),Ee,T.width,T.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Gt(T),Ee,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ee,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Re,o.RENDERBUFFER,U)}else{const oe=T.textures;for(let he=0;he<oe.length;he++){const Ee=oe[he],Re=a.convert(Ee.format,Ee.colorSpace),fe=a.convert(Ee.type),ge=C(Ee.internalFormat,Re,fe,Ee.normalized,Ee.colorSpace);tn(T)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Gt(T),ge,T.width,T.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Gt(T),ge,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ge,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function pt(U,T,Q){const oe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(T.depthTexture);if(he.__renderTarget=T,(!he.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),oe){if(he.__webglInit===void 0&&(he.__webglInit=!0,T.depthTexture.addEventListener("dispose",O)),he.__webglTexture===void 0){he.__webglTexture=o.createTexture(),t.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),Ge(o.TEXTURE_CUBE_MAP,T.depthTexture);const Ne=a.convert(T.depthTexture.format),qe=a.convert(T.depthTexture.type);let Ie;T.depthTexture.format===wr?Ie=o.DEPTH_COMPONENT24:T.depthTexture.format===Is&&(Ie=o.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ie,T.width,T.height,0,Ne,qe,null)}}else $(T.depthTexture,0);const Ee=he.__webglTexture,Re=Gt(T),fe=oe?o.TEXTURE_CUBE_MAP_POSITIVE_X+Q:o.TEXTURE_2D,ge=T.depthTexture.format===Is?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===wr)tn(T)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,fe,Ee,0,Re):o.framebufferTexture2D(o.FRAMEBUFFER,ge,fe,Ee,0);else if(T.depthTexture.format===Is)tn(T)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,fe,Ee,0,Re):o.framebufferTexture2D(o.FRAMEBUFFER,ge,fe,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ut(U){const T=i.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const oe=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),oe){const he=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,oe.removeEventListener("dispose",he)};oe.addEventListener("dispose",he),T.__depthDisposeCallback=he}T.__boundDepthTexture=oe}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(Q)for(let oe=0;oe<6;oe++)pt(T.__webglFramebuffer[oe],U,oe);else{const oe=U.texture.mipmaps;oe&&oe.length>0?pt(T.__webglFramebuffer[0],U,0):pt(T.__webglFramebuffer,U,0)}else if(Q){T.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[oe]),T.__webglDepthbuffer[oe]===void 0)T.__webglDepthbuffer[oe]=o.createRenderbuffer(),Jt(T.__webglDepthbuffer[oe],U,!1);else{const he=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ee=T.__webglDepthbuffer[oe];o.bindRenderbuffer(o.RENDERBUFFER,Ee),o.framebufferRenderbuffer(o.FRAMEBUFFER,he,o.RENDERBUFFER,Ee)}}else{const oe=U.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Jt(T.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ee=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ee),o.framebufferRenderbuffer(o.FRAMEBUFFER,he,o.RENDERBUFFER,Ee)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function bt(U,T,Q){const oe=i.get(U);T!==void 0&&it(oe.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&Ut(U)}function Mt(U){const T=U.texture,Q=i.get(U),oe=i.get(T);U.addEventListener("dispose",w);const he=U.textures,Ee=U.isWebGLCubeRenderTarget===!0,Re=he.length>1;if(Re||(oe.__webglTexture===void 0&&(oe.__webglTexture=o.createTexture()),oe.__version=T.version,c.memory.textures++),Ee){Q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[fe]=[];for(let ge=0;ge<T.mipmaps.length;ge++)Q.__webglFramebuffer[fe][ge]=o.createFramebuffer()}else Q.__webglFramebuffer[fe]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)Q.__webglFramebuffer[fe]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Re)for(let fe=0,ge=he.length;fe<ge;fe++){const Ne=i.get(he[fe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=o.createTexture(),c.memory.textures++)}if(U.samples>0&&tn(U)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let fe=0;fe<he.length;fe++){const ge=he[fe];Q.__webglColorRenderbuffer[fe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]);const Ne=a.convert(ge.format,ge.colorSpace),qe=a.convert(ge.type),Ie=C(ge.internalFormat,Ne,qe,ge.normalized,ge.colorSpace,U.isXRRenderTarget===!0),Ce=Gt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ce,Ie,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+fe,o.RENDERBUFFER,Q.__webglColorRenderbuffer[fe])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Jt(Q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(o.TEXTURE_CUBE_MAP,oe.__webglTexture),Ge(o.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)it(Q.__webglFramebuffer[fe][ge],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else it(Q.__webglFramebuffer[fe],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);S(T)&&P(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let fe=0,ge=he.length;fe<ge;fe++){const Ne=he[fe],qe=i.get(Ne);let Ie=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ie=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ie,qe.__webglTexture),Ge(Ie,Ne),it(Q.__webglFramebuffer,U,Ne,o.COLOR_ATTACHMENT0+fe,Ie,0),S(Ne)&&P(Ie)}t.unbindTexture()}else{let fe=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(fe,oe.__webglTexture),Ge(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)it(Q.__webglFramebuffer[ge],U,T,o.COLOR_ATTACHMENT0,fe,ge);else it(Q.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,fe,0);S(T)&&P(fe),t.unbindTexture()}U.depthBuffer&&Ut(U)}function en(U){const T=U.textures;for(let Q=0,oe=T.length;Q<oe;Q++){const he=T[Q];if(S(he)){const Ee=L(U),Re=i.get(he).__webglTexture;t.bindTexture(Ee,Re),P(Ee),t.unbindTexture()}}}const un=[],dn=[];function sn(U){if(U.samples>0){if(tn(U)===!1){const T=U.textures,Q=U.width,oe=U.height;let he=o.COLOR_BUFFER_BIT;const Ee=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=i.get(U),fe=T.length>1;if(fe)for(let Ne=0;Ne<T.length;Ne++)t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ge=U.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=o.STENCIL_BUFFER_BIT)),fe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Re.__webglColorRenderbuffer[Ne]);const qe=i.get(T[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,qe,0)}o.blitFramebuffer(0,0,Q,oe,0,0,Q,oe,he,o.NEAREST),h===!0&&(un.length=0,dn.length=0,un.push(o.COLOR_ATTACHMENT0+Ne),U.depthBuffer&&U.resolveDepthBuffer===!1&&(un.push(Ee),dn.push(Ee),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,dn)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,un))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),fe)for(let Ne=0;Ne<T.length;Ne++){t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,Re.__webglColorRenderbuffer[Ne]);const qe=i.get(T[Ne]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,qe,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Gt(U){return Math.min(s.maxSamples,U.samples)}function tn(U){const T=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function j(U){const T=c.render.frame;p.get(U)!==T&&(p.set(U,T),U.update())}function Pn(U,T){const Q=U.colorSpace,oe=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==au&&Q!==Jr&&(Et.getTransfer(Q)===Bt?(oe!==Wi||he!==vi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",Q)),T}function It(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=ae,this.resetTextureUnits=K,this.getTextureUnits=te,this.setTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=se,this.setTexture3D=de,this.setTextureCube=G,this.rebindTextures=bt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=it,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Dw(o,e){function t(i,s=Jr){let a;const c=Et.getTransfer(s);if(i===vi)return o.UNSIGNED_BYTE;if(i===rp)return o.UNSIGNED_SHORT_4_4_4_4;if(i===sp)return o.UNSIGNED_SHORT_5_5_5_1;if(i===Nv)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===Iv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rv)return o.BYTE;if(i===Pv)return o.SHORT;if(i===Za)return o.UNSIGNED_SHORT;if(i===ip)return o.INT;if(i===rr)return o.UNSIGNED_INT;if(i===Hi)return o.FLOAT;if(i===Kn)return o.HALF_FLOAT;if(i===Lv)return o.ALPHA;if(i===Dv)return o.RGB;if(i===Wi)return o.RGBA;if(i===wr)return o.DEPTH_COMPONENT;if(i===Is)return o.DEPTH_STENCIL;if(i===op)return o.RED;if(i===ap)return o.RED_INTEGER;if(i===Os)return o.RG;if(i===lp)return o.RG_INTEGER;if(i===cp)return o.RGBA_INTEGER;if(i===$c||i===Kc||i===Zc||i===Qc)if(c===Bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===$c)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===$c)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uf||i===df||i===hf||i===ff)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===uf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===df)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ff)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pf||i===mf||i===gf||i===vf||i===xf||i===ru||i===_f)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===pf||i===mf)return c===Bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===gf)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===vf)return a.COMPRESSED_R11_EAC;if(i===xf)return a.COMPRESSED_SIGNED_R11_EAC;if(i===ru)return a.COMPRESSED_RG11_EAC;if(i===_f)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yf||i===Sf||i===Mf||i===Ef||i===Tf||i===wf||i===bf||i===Af||i===Cf||i===Rf||i===Pf||i===Nf||i===If||i===Lf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===yf)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sf)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mf)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ef)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tf)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wf)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bf)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Af)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cf)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rf)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pf)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nf)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===If)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lf)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Df||i===Uf||i===Of)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Df)return c===Bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Of)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ff||i===kf||i===su||i===Bf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ff)return a.COMPRESSED_RED_RGTC1_EXT;if(i===kf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===su)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qa?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const Uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ow=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new qv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ot({vertexShader:Uw,fragmentShader:Ow,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kw extends ks{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",h=1,f=null,p=null,v=null,g=null,_=null,M=null;const b=typeof XRWebGLBinding<"u",x=new Fw,S={},P=t.getContextAttributes();let L=null,C=null;const D=[],I=[],O=new et;let w=null;const R=new gi;R.viewport=new cn;const F=new gi;F.viewport=new cn;const B=[R,F],z=new jS;let K=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let xe=D[le];return xe===void 0&&(xe=new _h,D[le]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(le){let xe=D[le];return xe===void 0&&(xe=new _h,D[le]=xe),xe.getGripSpace()},this.getHand=function(le){let xe=D[le];return xe===void 0&&(xe=new _h,D[le]=xe),xe.getHandSpace()};function Y(le){const xe=I.indexOf(le.inputSource);if(xe===-1)return;const me=D[xe];me!==void 0&&(me.update(le.inputSource,le.frame,f||c),me.dispatchEvent({type:le.type,data:le.inputSource}))}function ae(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",Z);for(let le=0;le<D.length;le++){const xe=I[le];xe!==null&&(I[le]=null,D[le].disconnect(xe))}K=null,te=null,x.reset();for(const le in S)delete S[le];e.setRenderTarget(L),_=null,g=null,v=null,s=null,C=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){a=le,i.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){u=le,i.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(le){f=le},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(s,t)),v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",Z),P.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Oe=null,nt=null;P.depth&&(nt=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=P.stencil?Is:wr,Oe=P.stencil?Qa:rr);const it={colorFormat:t.RGBA8,depthFormat:nt,scaleFactor:a};v=this.getBinding(),g=v.createProjectionLayer(it),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Hn(g.textureWidth,g.textureHeight,{format:Wi,type:vi,depthTexture:new Wo(g.textureWidth,g.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),C=new Hn(_.framebufferWidth,_.framebufferHeight,{format:Wi,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await s.requestReferenceSpace(u),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(le){for(let xe=0;xe<le.removed.length;xe++){const me=le.removed[xe],Oe=I.indexOf(me);Oe>=0&&(I[Oe]=null,D[Oe].disconnect(me))}for(let xe=0;xe<le.added.length;xe++){const me=le.added[xe];let Oe=I.indexOf(me);if(Oe===-1){for(let it=0;it<D.length;it++)if(it>=I.length){I.push(me),Oe=it;break}else if(I[it]===null){I[it]=me,Oe=it;break}if(Oe===-1)break}const nt=D[Oe];nt&&nt.connect(me)}}const $=new V,se=new V;function de(le,xe,me){$.setFromMatrixPosition(xe.matrixWorld),se.setFromMatrixPosition(me.matrixWorld);const Oe=$.distanceTo(se),nt=xe.projectionMatrix.elements,it=me.projectionMatrix.elements,Jt=nt[14]/(nt[10]-1),pt=nt[14]/(nt[10]+1),Ut=(nt[9]+1)/nt[5],bt=(nt[9]-1)/nt[5],Mt=(nt[8]-1)/nt[0],en=(it[8]+1)/it[0],un=Jt*Mt,dn=Jt*en,sn=Oe/(-Mt+en),Gt=sn*-Mt;if(xe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Gt),le.translateZ(sn),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),nt[10]===-1)le.projectionMatrix.copy(xe.projectionMatrix),le.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const tn=Jt+sn,j=pt+sn,Pn=un-Gt,It=dn+(Oe-Gt),U=Ut*pt/j*tn,T=bt*pt/j*tn;le.projectionMatrix.makePerspective(Pn,It,U,T,tn,j),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function G(le,xe){xe===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(xe.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let xe=le.near,me=le.far;x.texture!==null&&(x.depthNear>0&&(xe=x.depthNear),x.depthFar>0&&(me=x.depthFar)),z.near=F.near=R.near=xe,z.far=F.far=R.far=me,(K!==z.near||te!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),K=z.near,te=z.far),z.layers.mask=le.layers.mask|6,R.layers.mask=z.layers.mask&-5,F.layers.mask=z.layers.mask&-3;const Oe=le.parent,nt=z.cameras;G(z,Oe);for(let it=0;it<nt.length;it++)G(nt[it],Oe);nt.length===2?de(z,R,F):z.projectionMatrix.copy(R.projectionMatrix),J(le,z,Oe)};function J(le,xe,me){me===null?le.matrix.copy(xe.matrixWorld):(le.matrix.copy(me.matrixWorld),le.matrix.invert(),le.matrix.multiply(xe.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(xe.projectionMatrix),le.projectionMatrixInverse.copy(xe.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Gf*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(g===null&&_===null))return h},this.setFoveation=function(le){h=le,g!==null&&(g.fixedFoveation=le),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=le)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(le){return S[le]};let Ue=null;function Ke(le,xe){if(p=xe.getViewerPose(f||c),M=xe,p!==null){const me=p.views;_!==null&&(e.setRenderTargetFramebuffer(C,_.framebuffer),e.setRenderTarget(C));let Oe=!1;me.length!==z.cameras.length&&(z.cameras.length=0,Oe=!0);for(let pt=0;pt<me.length;pt++){const Ut=me[pt];let bt=null;if(_!==null)bt=_.getViewport(Ut);else{const en=v.getViewSubImage(g,Ut);bt=en.viewport,pt===0&&(e.setRenderTargetTextures(C,en.colorTexture,en.depthStencilTexture),e.setRenderTarget(C))}let Mt=B[pt];Mt===void 0&&(Mt=new gi,Mt.layers.enable(pt),Mt.viewport=new cn,B[pt]=Mt),Mt.matrix.fromArray(Ut.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(Ut.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(bt.x,bt.y,bt.width,bt.height),pt===0&&(z.matrix.copy(Mt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Oe===!0&&z.cameras.push(Mt)}const nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){v=i.getBinding();const pt=v.getDepthInformation(me[0]);pt&&pt.isValid&&pt.texture&&x.init(pt,s.renderState)}if(nt&&nt.includes("camera-access")&&b){e.state.unbindTexture(),v=i.getBinding();for(let pt=0;pt<me.length;pt++){const Ut=me[pt].camera;if(Ut){let bt=S[Ut];bt||(bt=new qv,S[Ut]=bt);const Mt=v.getCameraImage(Ut);bt.sourceTexture=Mt}}}}for(let me=0;me<D.length;me++){const Oe=I[me],nt=D[me];Oe!==null&&nt!==void 0&&nt.update(Oe,xe,f||c)}Ue&&Ue(le,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),M=null}const Ge=new ex;Ge.setAnimationLoop(Ke),this.setAnimationLoop=function(le){Ue=le},this.dispose=function(){}}}const Bw=new zt,ax=new ft;ax.set(-1,0,0,0,1,0,0,0,1);function zw(o,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function i(x,S){S.color.getRGB(x.fogColor.value,$v(o)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function s(x,S,P,L,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(x,S):S.isMeshLambertMaterial?(a(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(x,S),v(x,S)):S.isMeshPhongMaterial?(a(x,S),p(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(x,S),g(x,S),S.isMeshPhysicalMaterial&&_(x,S,C)):S.isMeshMatcapMaterial?(a(x,S),M(x,S)):S.isMeshDepthMaterial?a(x,S):S.isMeshDistanceMaterial?(a(x,S),b(x,S)):S.isMeshNormalMaterial?a(x,S):S.isLineBasicMaterial?(c(x,S),S.isLineDashedMaterial&&u(x,S)):S.isPointsMaterial?h(x,S,P,L):S.isSpriteMaterial?f(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===$n&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===$n&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const P=e.get(S),L=P.envMap,C=P.envMapRotation;L&&(x.envMap.value=L,x.envMapRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(C)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(ax),x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function c(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function u(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function h(x,S,P,L){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*P,x.scale.value=L*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function f(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function v(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function g(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function _(x,S,P){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===$n&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,S){S.matcap&&(x.matcap.value=S.matcap)}function b(x,S){const P=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Gw(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,D){const I=D.program;i.uniformBlockBinding(C,I)}function f(C,D){let I=s[C.id];I===void 0&&(x(C),I=p(C),s[C.id]=I,C.addEventListener("dispose",P));const O=D.program;i.updateUBOMapping(C,O);const w=e.render.frame;a[C.id]!==w&&(g(C),a[C.id]=w)}function p(C){const D=v();C.__bindingPointIndex=D;const I=o.createBuffer(),O=C.__size,w=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,I),o.bufferData(o.UNIFORM_BUFFER,O,w),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,I),I}function v(){for(let C=0;C<u;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const D=s[C.id],I=C.uniforms,O=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let w=0,R=I.length;w<R;w++){const F=I[w];if(Array.isArray(F))for(let B=0,z=F.length;B<z;B++)_(F[B],w,B,O);else _(F,w,0,O)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function _(C,D,I,O){if(b(C,D,I,O)===!0){const w=C.__offset,R=C.value;if(Array.isArray(R)){let F=0;for(let B=0;B<R.length;B++){const z=R[B],K=S(z);M(z,C.__data,F),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(R,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,w,C.__data)}}function M(C,D,I){typeof C=="number"||typeof C=="boolean"?D[0]=C:C.isMatrix3?(D[0]=C.elements[0],D[1]=C.elements[1],D[2]=C.elements[2],D[3]=0,D[4]=C.elements[3],D[5]=C.elements[4],D[6]=C.elements[5],D[7]=0,D[8]=C.elements[6],D[9]=C.elements[7],D[10]=C.elements[8],D[11]=0):ArrayBuffer.isView(C)?D.set(new C.constructor(C.buffer,C.byteOffset,D.length)):C.toArray(D,I)}function b(C,D,I,O){const w=C.value,R=D+"_"+I;if(O[R]===void 0)return typeof w=="number"||typeof w=="boolean"?O[R]=w:ArrayBuffer.isView(w)?O[R]=w.slice():O[R]=w.clone(),!0;{const F=O[R];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return O[R]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(F.equals(w)===!1)return F.copy(w),!0}}return!1}function x(C){const D=C.uniforms;let I=0;const O=16;for(let R=0,F=D.length;R<F;R++){const B=Array.isArray(D[R])?D[R]:[D[R]];for(let z=0,K=B.length;z<K;z++){const te=B[z],Y=Array.isArray(te.value)?te.value:[te.value];for(let ae=0,Z=Y.length;ae<Z;ae++){const $=Y[ae],se=S($),de=I%O,G=de%se.boundary,J=de+G;I+=G,J!==0&&O-J<se.storage&&(I+=O-J),te.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=I,I+=se.storage}}}const w=I%O;return w>0&&(I+=O-w),C.__size=I,C.__cache={},this}function S(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(D.boundary=16,D.storage=C.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",C),D}function P(C){const D=C.target;D.removeEventListener("dispose",P);const I=c.indexOf(D.__bindingPointIndex);c.splice(I,1),o.deleteBuffer(s[D.id]),delete s[D.id],delete a[D.id]}function L(){for(const C in s)o.deleteBuffer(s[C]);c=[],s={},a={}}return{bind:h,update:f,dispose:L}}const Vw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function Hw(){return Qi===null&&(Qi=new Wv(Vw,16,16,Os,Kn),Qi.name="DFG_LUT",Qi.minFilter=Gn,Qi.magFilter=Gn,Qi.wrapS=Er,Qi.wrapT=Er,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class Ww{constructor(e={}){const{canvas:t=aS(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:_=vi}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const b=_,x=new Set([cp,lp,ap]),S=new Set([vi,rr,Za,Qa,rp,sp]),P=new Uint32Array(4),L=new Int32Array(4),C=new V;let D=null,I=null;const O=[],w=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let B=!1,z=null,K=null,te=null,Y=null;this._outputColorSpace=ai;let ae=0,Z=0,$=null,se=-1,de=null;const G=new cn,J=new cn;let Ue=null;const Ke=new We(0);let Ge=0,le=t.width,xe=t.height,me=1,Oe=null,nt=null;const it=new cn(0,0,le,xe),Jt=new cn(0,0,le,xe);let pt=!1;const Ut=new gp;let bt=!1,Mt=!1;const en=new zt,un=new V,dn=new cn,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function tn(){return $===null?me:1}let j=i;function Pn(N,q){return t.getContext(N,q)}try{const N={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$f}`),t.addEventListener("webglcontextlost",Xt,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",Dn,!1),j===null){const q="webgl2";if(j=Pn(q,N),j===null)throw Pn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(N){throw Rt("WebGLRenderer: "+N.message),N}let It,U,T,Q,oe,he,Ee,Re,fe,ge,Ne,qe,Ie,Ce,Je,rt,at,W,Ae,pe,Pe,Le,ve;function Xe(){It=new HE(j),It.init(),Pe=new Dw(j,It),U=new UE(j,It,e,Pe),T=new Iw(j,It),U.reversedDepthBuffer&&g&&T.buffers.depth.setReversed(!0),K=j.createFramebuffer(),te=j.createFramebuffer(),Y=j.createFramebuffer(),Q=new jE(j),oe=new xw,he=new Lw(j,It,T,oe,U,Pe,Q),Ee=new VE(F),Re=new KS(j),Le=new LE(j,Re),fe=new WE(j,Re,Q,Le),ge=new qE(j,fe,Re,Le,Q),W=new YE(j,U,he),Je=new OE(oe),Ne=new vw(F,Ee,It,U,Le,Je),qe=new zw(F,oe),Ie=new yw,Ce=new bw(It),at=new IE(F,Ee,T,ge,M,h),rt=new Nw(F,ge,U),ve=new Gw(j,Q,U,T),Ae=new DE(j,It,Q),pe=new XE(j,It,Q),Q.programs=Ne.programs,F.capabilities=U,F.extensions=It,F.properties=oe,F.renderLists=Ie,F.shadowMap=rt,F.state=T,F.info=Q}Xe(),b!==vi&&(R=new KE(b,t.width,t.height,u,s,a));const Ve=new kw(F,j);this.xr=Ve,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const N=It.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=It.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(N){N!==void 0&&(me=N,this.setSize(le,xe,!1))},this.getSize=function(N){return N.set(le,xe)},this.setSize=function(N,q,ce=!0){if(Ve.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}le=N,xe=q,t.width=Math.floor(N*me),t.height=Math.floor(q*me),ce===!0&&(t.style.width=N+"px",t.style.height=q+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,N,q)},this.getDrawingBufferSize=function(N){return N.set(le*me,xe*me).floor()},this.setDrawingBufferSize=function(N,q,ce){le=N,xe=q,me=ce,t.width=Math.floor(N*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,N,q)},this.setEffects=function(N){if(b===vi){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let q=0;q<N.length;q++)if(N[q].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(G)},this.getViewport=function(N){return N.copy(it)},this.setViewport=function(N,q,ce,ie){N.isVector4?it.set(N.x,N.y,N.z,N.w):it.set(N,q,ce,ie),T.viewport(G.copy(it).multiplyScalar(me).round())},this.getScissor=function(N){return N.copy(Jt)},this.setScissor=function(N,q,ce,ie){N.isVector4?Jt.set(N.x,N.y,N.z,N.w):Jt.set(N,q,ce,ie),T.scissor(J.copy(Jt).multiplyScalar(me).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(N){T.setScissorTest(pt=N)},this.setOpaqueSort=function(N){Oe=N},this.setTransparentSort=function(N){nt=N},this.getClearColor=function(N){return N.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(N=!0,q=!0,ce=!0){let ie=0;if(N){let ne=!1;if($!==null){const be=$.texture.format;ne=x.has(be)}if(ne){const be=$.texture.type,Be=S.has(be),we=at.getClearColor(),je=at.getClearAlpha(),Qe=we.r,dt=we.g,ht=we.b;Be?(P[0]=Qe,P[1]=dt,P[2]=ht,P[3]=je,j.clearBufferuiv(j.COLOR,0,P)):(L[0]=Qe,L[1]=dt,L[2]=ht,L[3]=je,j.clearBufferiv(j.COLOR,0,L))}else ie|=j.COLOR_BUFFER_BIT}q&&(ie|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),z=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Xt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),at.dispose(),Ie.dispose(),Ce.dispose(),oe.dispose(),Ee.dispose(),ge.dispose(),Le.dispose(),ve.dispose(),Ne.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",tl),Ve.removeEventListener("sessionend",nl),Wn.stop()};function Xt(N){N.preventDefault(),uu("WebGLRenderer: Context Lost."),B=!0}function Ft(){uu("WebGLRenderer: Context Restored."),B=!1;const N=Q.autoReset,q=rt.enabled,ce=rt.autoUpdate,ie=rt.needsUpdate,ne=rt.type;Xe(),Q.autoReset=N,rt.enabled=q,rt.autoUpdate=ce,rt.needsUpdate=ie,rt.type=ne}function Dn(N){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function _i(N){const q=N.target;q.removeEventListener("dispose",_i),rs(q)}function rs(N){Hs(N),oe.remove(N)}function Hs(N){const q=oe.get(N).programs;q!==void 0&&(q.forEach(function(ce){Ne.releaseProgram(ce)}),N.isShaderMaterial&&Ne.releaseShaderCache(N))}this.renderBufferDirect=function(N,q,ce,ie,ne,be){q===null&&(q=sn);const Be=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,we=on(N,q,ce,ie,ne);T.setMaterial(ie,Be);let je=ce.index,Qe=1;if(ie.wireframe===!0){if(je=fe.getWireframeAttribute(ce),je===void 0)return;Qe=2}const dt=ce.drawRange,ht=ce.attributes.position;let $e=dt.start*Qe,At=(dt.start+dt.count)*Qe;be!==null&&($e=Math.max($e,be.start*Qe),At=Math.min(At,(be.start+be.count)*Qe)),je!==null?($e=Math.max($e,0),At=Math.min(At,je.count)):ht!=null&&($e=Math.max($e,0),At=Math.min(At,ht.count));const qt=At-$e;if(qt<0||qt===1/0)return;Le.setup(ne,ie,we,ce,je);let nn,Vt=Ae;if(je!==null&&(nn=Re.get(je),Vt=pe,Vt.setIndex(nn)),ne.isMesh)ie.wireframe===!0?(T.setLineWidth(ie.wireframeLinewidth*tn()),Vt.setMode(j.LINES)):Vt.setMode(j.TRIANGLES);else if(ne.isLine){let xn=ie.linewidth;xn===void 0&&(xn=1),T.setLineWidth(xn*tn()),ne.isLineSegments?Vt.setMode(j.LINES):ne.isLineLoop?Vt.setMode(j.LINE_LOOP):Vt.setMode(j.LINE_STRIP)}else ne.isPoints?Vt.setMode(j.POINTS):ne.isSprite&&Vt.setMode(j.TRIANGLES);if(ne.isBatchedMesh)if(It.get("WEBGL_multi_draw"))Vt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const xn=ne._multiDrawStarts,Fe=ne._multiDrawCounts,Nn=ne._multiDrawCount,xt=je?Re.get(je).bytesPerElement:1,Zn=oe.get(ie).currentProgram.getUniforms();for(let Qn=0;Qn<Nn;Qn++)Zn.setValue(j,"_gl_DrawID",Qn),Vt.render(xn[Qn]/xt,Fe[Qn])}else if(ne.isInstancedMesh)Vt.renderInstances($e,qt,ne.count);else if(ce.isInstancedBufferGeometry){const xn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Fe=Math.min(ce.instanceCount,xn);Vt.renderInstances($e,qt,Fe)}else Vt.render($e,qt)};function ss(N,q,ce){N.transparent===!0&&N.side===Ci&&N.forceSinglePass===!1?(N.side=$n,N.needsUpdate=!0,ls(N,q,ce),N.side=is,N.needsUpdate=!0,ls(N,q,ce),N.side=Ci):ls(N,q,ce)}this.compile=function(N,q,ce=null){ce===null&&(ce=N),I=Ce.get(ce),I.init(q),w.push(I),ce.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(I.pushLight(ne),ne.castShadow&&I.pushShadow(ne))}),N!==ce&&N.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(I.pushLight(ne),ne.castShadow&&I.pushShadow(ne))}),I.setupLights();const ie=new Set;return N.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const be=ne.material;if(be)if(Array.isArray(be))for(let Be=0;Be<be.length;Be++){const we=be[Be];ss(we,ce,ne),ie.add(we)}else ss(be,ce,ne),ie.add(be)}),I=w.pop(),ie},this.compileAsync=function(N,q,ce=null){const ie=this.compile(N,q,ce);return new Promise(ne=>{function be(){if(ie.forEach(function(Be){oe.get(Be).currentProgram.isReady()&&ie.delete(Be)}),ie.size===0){ne(N);return}setTimeout(be,10)}It.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let os=null;function bu(N){os&&os(N)}function tl(){Wn.stop()}function nl(){Wn.start()}const Wn=new ex;Wn.setAnimationLoop(bu),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(N){os=N,Ve.setAnimationLoop(N),N===null?Wn.stop():Wn.start()},Ve.addEventListener("sessionstart",tl),Ve.addEventListener("sessionend",nl),this.render=function(N,q){if(q!==void 0&&q.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;z!==null&&z.renderStart(N,q);const ce=Ve.enabled===!0&&Ve.isPresenting===!0,ie=R!==null&&($===null||ce)&&R.begin(F,$);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(q),q=Ve.getCamera()),N.isScene===!0&&N.onBeforeRender(F,N,q,$),I=Ce.get(N,w.length),I.init(q),I.state.textureUnits=he.getTextureUnits(),w.push(I),en.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ut.setFromProjectionMatrix(en,nr,q.reversedDepth),Mt=this.localClippingEnabled,bt=Je.init(this.clippingPlanes,Mt),D=Ie.get(N,O.length),D.init(),O.push(D),Ve.enabled===!0&&Ve.isPresenting===!0){const Be=F.xr.getDepthSensingMesh();Be!==null&&Ws(Be,q,-1/0,F.sortObjects)}Ws(N,q,0,F.sortObjects),D.finish(),F.sortObjects===!0&&D.sort(Oe,nt,q.reversedDepth),Gt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Gt&&at.addToRenderList(D,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&Je.beginShadows();const ne=I.state.shadowsArray;if(rt.render(ne,N,q),bt===!0&&Je.endShadows(),(ie&&R.hasRenderPass())===!1){const Be=D.opaque,we=D.transmissive;if(I.setupLights(),q.isArrayCamera){const je=q.cameras;if(we.length>0)for(let Qe=0,dt=je.length;Qe<dt;Qe++){const ht=je[Qe];il(Be,we,N,ht)}Gt&&at.render(N);for(let Qe=0,dt=je.length;Qe<dt;Qe++){const ht=je[Qe];Zo(D,N,ht,ht.viewport)}}else we.length>0&&il(Be,we,N,q),Gt&&at.render(N),Zo(D,N,q)}$!==null&&Z===0&&(he.updateMultisampleRenderTarget($),he.updateRenderTargetMipmap($)),ie&&R.end(F),N.isScene===!0&&N.onAfterRender(F,N,q),Le.resetDefaultState(),se=-1,de=null,w.pop(),w.length>0?(I=w[w.length-1],he.setTextureUnits(I.state.textureUnits),bt===!0&&Je.setGlobalState(F.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?D=O[O.length-1]:D=null,z!==null&&z.renderEnd()};function Ws(N,q,ce,ie){if(N.visible===!1)return;if(N.layers.test(q.layers)){if(N.isGroup)ce=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(q);else if(N.isLightProbeGrid)I.pushLightProbeGrid(N);else if(N.isLight)I.pushLight(N),N.castShadow&&I.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Ut.intersectsSprite(N)){ie&&dn.setFromMatrixPosition(N.matrixWorld).applyMatrix4(en);const Be=ge.update(N),we=N.material;we.visible&&D.push(N,Be,we,ce,dn.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Ut.intersectsObject(N))){const Be=ge.update(N),we=N.material;if(ie&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),dn.copy(N.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),dn.copy(Be.boundingSphere.center)),dn.applyMatrix4(N.matrixWorld).applyMatrix4(en)),Array.isArray(we)){const je=Be.groups;for(let Qe=0,dt=je.length;Qe<dt;Qe++){const ht=je[Qe],$e=we[ht.materialIndex];$e&&$e.visible&&D.push(N,Be,$e,ce,dn.z,ht)}}else we.visible&&D.push(N,Be,we,ce,dn.z,null)}}const be=N.children;for(let Be=0,we=be.length;Be<we;Be++)Ws(be[Be],q,ce,ie)}function Zo(N,q,ce,ie){const{opaque:ne,transmissive:be,transparent:Be}=N;I.setupLightsView(ce),bt===!0&&Je.setGlobalState(F.clippingPlanes,ce),ie&&T.viewport(G.copy(ie)),ne.length>0&&as(ne,q,ce),be.length>0&&as(be,q,ce),Be.length>0&&as(Be,q,ce),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function il(N,q,ce,ie){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ie.id]===void 0){const $e=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ie.id]=new Hn(1,1,{generateMipmaps:!0,type:$e?Kn:vi,minFilter:Ns,samples:Math.max(4,U.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const be=I.state.transmissionRenderTarget[ie.id],Be=ie.viewport||G;be.setSize(Be.z*F.transmissionResolutionScale,Be.w*F.transmissionResolutionScale);const we=F.getRenderTarget(),je=F.getActiveCubeFace(),Qe=F.getActiveMipmapLevel();F.setRenderTarget(be),F.getClearColor(Ke),Ge=F.getClearAlpha(),Ge<1&&F.setClearColor(16777215,.5),F.clear(),Gt&&at.render(ce);const dt=F.toneMapping;F.toneMapping=ir;const ht=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),I.setupLightsView(ie),bt===!0&&Je.setGlobalState(F.clippingPlanes,ie),as(N,ce,ie),he.updateMultisampleRenderTarget(be),he.updateRenderTargetMipmap(be),It.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let At=0,qt=q.length;At<qt;At++){const nn=q[At],{object:Vt,geometry:xn,material:Fe,group:Nn}=nn;if(Fe.side===Ci&&Vt.layers.test(ie.layers)){const xt=Fe.side;Fe.side=$n,Fe.needsUpdate=!0,Qo(Vt,ce,ie,xn,Fe,Nn),Fe.side=xt,Fe.needsUpdate=!0,$e=!0}}$e===!0&&(he.updateMultisampleRenderTarget(be),he.updateRenderTargetMipmap(be))}F.setRenderTarget(we,je,Qe),F.setClearColor(Ke,Ge),ht!==void 0&&(ie.viewport=ht),F.toneMapping=dt}function as(N,q,ce){const ie=q.isScene===!0?q.overrideMaterial:null;for(let ne=0,be=N.length;ne<be;ne++){const Be=N[ne],{object:we,geometry:je,group:Qe}=Be;let dt=Be.material;dt.allowOverride===!0&&ie!==null&&(dt=ie),we.layers.test(ce.layers)&&Qo(we,q,ce,je,dt,Qe)}}function Qo(N,q,ce,ie,ne,be){N.onBeforeRender(F,q,ce,ie,ne,be),N.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ne.onBeforeRender(F,q,ce,ie,N,be),ne.transparent===!0&&ne.side===Ci&&ne.forceSinglePass===!1?(ne.side=$n,ne.needsUpdate=!0,F.renderBufferDirect(ce,q,ie,ne,N,be),ne.side=is,ne.needsUpdate=!0,F.renderBufferDirect(ce,q,ie,ne,N,be),ne.side=Ci):F.renderBufferDirect(ce,q,ie,ne,N,be),N.onAfterRender(F,q,ce,ie,ne,be)}function ls(N,q,ce){q.isScene!==!0&&(q=sn);const ie=oe.get(N),ne=I.state.lights,be=I.state.shadowsArray,Be=ne.state.version,we=Ne.getParameters(N,ne.state,be,q,ce,I.state.lightProbeGridArray),je=Ne.getProgramCacheKey(we);let Qe=ie.programs;ie.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const dt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ie.envMap=Ee.get(N.envMap||ie.environment,dt),ie.envMapRotation=ie.environment!==null&&N.envMap===null?q.environmentRotation:N.envMapRotation,Qe===void 0&&(N.addEventListener("dispose",_i),Qe=new Map,ie.programs=Qe);let ht=Qe.get(je);if(ht!==void 0){if(ie.currentProgram===ht&&ie.lightsStateVersion===Be)return rl(N,we),ht}else we.uniforms=Ne.getUniforms(N),z!==null&&N.isNodeMaterial&&z.build(N,ce,we),N.onBeforeCompile(we,F),ht=Ne.acquireProgram(we,je),Qe.set(je,ht),ie.uniforms=we.uniforms;const $e=ie.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&($e.clippingPlanes=Je.uniform),rl(N,we),ie.needsLights=ea(N),ie.lightsStateVersion=Be,ie.needsLights&&($e.ambientLightColor.value=ne.state.ambient,$e.lightProbe.value=ne.state.probe,$e.directionalLights.value=ne.state.directional,$e.directionalLightShadows.value=ne.state.directionalShadow,$e.spotLights.value=ne.state.spot,$e.spotLightShadows.value=ne.state.spotShadow,$e.rectAreaLights.value=ne.state.rectArea,$e.ltc_1.value=ne.state.rectAreaLTC1,$e.ltc_2.value=ne.state.rectAreaLTC2,$e.pointLights.value=ne.state.point,$e.pointLightShadows.value=ne.state.pointShadow,$e.hemisphereLights.value=ne.state.hemi,$e.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,$e.spotLightMatrix.value=ne.state.spotLightMatrix,$e.spotLightMap.value=ne.state.spotLightMap,$e.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.lightProbeGrid=I.state.lightProbeGridArray.length>0,ie.currentProgram=ht,ie.uniformsList=null,ht}function Jo(N){if(N.uniformsList===null){const q=N.currentProgram.getUniforms();N.uniformsList=Jc.seqWithValue(q.seq,N.uniforms)}return N.uniformsList}function rl(N,q){const ce=oe.get(N);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function Au(N,q){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;C.setFromMatrixPosition(q.matrixWorld);for(let ce=0,ie=N.length;ce<ie;ce++){const ne=N[ce];if(ne.texture!==null&&ne.boundingBox.containsPoint(C))return ne}return null}function on(N,q,ce,ie,ne){q.isScene!==!0&&(q=sn),he.resetTextureUnits();const be=q.fog,Be=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,we=$===null?F.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Et.workingColorSpace,je=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Qe=Ee.get(ie.envMap||Be,je),dt=ie.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ht=!!ce.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),$e=!!ce.morphAttributes.position,At=!!ce.morphAttributes.normal,qt=!!ce.morphAttributes.color;let nn=ir;ie.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(nn=F.toneMapping);const Vt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,xn=Vt!==void 0?Vt.length:0,Fe=oe.get(ie),Nn=I.state.lights;if(bt===!0&&(Mt===!0||N!==de)){const Ht=N===de&&ie.id===se;Je.setState(ie,N,Ht)}let xt=!1;ie.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Nn.state.version||Fe.outputColorSpace!==we||ne.isBatchedMesh&&Fe.batching===!1||!ne.isBatchedMesh&&Fe.batching===!0||ne.isBatchedMesh&&Fe.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Fe.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Fe.instancing===!1||!ne.isInstancedMesh&&Fe.instancing===!0||ne.isSkinnedMesh&&Fe.skinning===!1||!ne.isSkinnedMesh&&Fe.skinning===!0||ne.isInstancedMesh&&Fe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Fe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Fe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Fe.instancingMorph===!1&&ne.morphTexture!==null||Fe.envMap!==Qe||ie.fog===!0&&Fe.fog!==be||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Je.numPlanes||Fe.numIntersection!==Je.numIntersection)||Fe.vertexAlphas!==dt||Fe.vertexTangents!==ht||Fe.morphTargets!==$e||Fe.morphNormals!==At||Fe.morphColors!==qt||Fe.toneMapping!==nn||Fe.morphTargetsCount!==xn||!!Fe.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Fe.__version=ie.version);let Zn=Fe.currentProgram;xt===!0&&(Zn=ls(ie,q,ne),z&&ie.isNodeMaterial&&z.onUpdateProgram(ie,Zn,Fe));let Qn=!1,yt=!1,sr=!1;const kt=Zn.getUniforms(),Kt=Fe.uniforms;if(T.useProgram(Zn.program)&&(Qn=!0,yt=!0,sr=!0),ie.id!==se&&(se=ie.id,yt=!0),Fe.needsLights){const Ht=Au(I.state.lightProbeGridArray,ne);Fe.lightProbeGrid!==Ht&&(Fe.lightProbeGrid=Ht,yt=!0)}if(Qn||de!==N){T.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),kt.setValue(j,"projectionMatrix",N.projectionMatrix),kt.setValue(j,"viewMatrix",N.matrixWorldInverse);const Ii=kt.map.cameraPosition;Ii!==void 0&&Ii.setValue(j,un.setFromMatrixPosition(N.matrixWorld)),U.logarithmicDepthBuffer&&kt.setValue(j,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&kt.setValue(j,"isOrthographic",N.isOrthographicCamera===!0),de!==N&&(de=N,yt=!0,sr=!0)}if(Fe.needsLights&&(Nn.state.directionalShadowMap.length>0&&kt.setValue(j,"directionalShadowMap",Nn.state.directionalShadowMap,he),Nn.state.spotShadowMap.length>0&&kt.setValue(j,"spotShadowMap",Nn.state.spotShadowMap,he),Nn.state.pointShadowMap.length>0&&kt.setValue(j,"pointShadowMap",Nn.state.pointShadowMap,he)),ne.isSkinnedMesh){kt.setOptional(j,ne,"bindMatrix"),kt.setOptional(j,ne,"bindMatrixInverse");const Ht=ne.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),kt.setValue(j,"boneTexture",Ht.boneTexture,he))}ne.isBatchedMesh&&(kt.setOptional(j,ne,"batchingTexture"),kt.setValue(j,"batchingTexture",ne._matricesTexture,he),kt.setOptional(j,ne,"batchingIdTexture"),kt.setValue(j,"batchingIdTexture",ne._indirectTexture,he),kt.setOptional(j,ne,"batchingColorTexture"),ne._colorsTexture!==null&&kt.setValue(j,"batchingColorTexture",ne._colorsTexture,he));const Ni=ce.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&W.update(ne,ce,Zn),(yt||Fe.receiveShadow!==ne.receiveShadow)&&(Fe.receiveShadow=ne.receiveShadow,kt.setValue(j,"receiveShadow",ne.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(Kt.envMapIntensity.value=q.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=Hw()),yt){if(kt.setValue(j,"toneMappingExposure",F.toneMappingExposure),Fe.needsLights&&Cu(Kt,sr),be&&ie.fog===!0&&qe.refreshFogUniforms(Kt,be),qe.refreshMaterialUniforms(Kt,ie,me,xe,I.state.transmissionRenderTarget[N.id]),Fe.needsLights&&Fe.lightProbeGrid){const Ht=Fe.lightProbeGrid;Kt.probesSH.value=Ht.texture,Kt.probesMin.value.copy(Ht.boundingBox.min),Kt.probesMax.value.copy(Ht.boundingBox.max),Kt.probesResolution.value.copy(Ht.resolution)}Jc.upload(j,Jo(Fe),Kt,he)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Jc.upload(j,Jo(Fe),Kt,he),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&kt.setValue(j,"center",ne.center),kt.setValue(j,"modelViewMatrix",ne.modelViewMatrix),kt.setValue(j,"normalMatrix",ne.normalMatrix),kt.setValue(j,"modelMatrix",ne.matrixWorld),ie.uniformsGroups!==void 0){const Ht=ie.uniformsGroups;for(let Ii=0,ji=Ht.length;Ii<ji;Ii++){const cs=Ht[Ii];ve.update(cs,Zn),ve.bind(cs,Zn)}}return Zn}function Cu(N,q){N.ambientLightColor.needsUpdate=q,N.lightProbe.needsUpdate=q,N.directionalLights.needsUpdate=q,N.directionalLightShadows.needsUpdate=q,N.pointLights.needsUpdate=q,N.pointLightShadows.needsUpdate=q,N.spotLights.needsUpdate=q,N.spotLightShadows.needsUpdate=q,N.rectAreaLights.needsUpdate=q,N.hemisphereLights.needsUpdate=q}function ea(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(N,q,ce){const ie=oe.get(N);ie.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),oe.get(N.texture).__webglTexture=q,oe.get(N.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ce,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,q){const ce=oe.get(N);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(N,q=0,ce=0){$=N,ae=q,Z=ce;let ie=null,ne=!1,be=!1;if(N){const we=oe.get(N);if(we.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(j.FRAMEBUFFER,we.__webglFramebuffer),G.copy(N.viewport),J.copy(N.scissor),Ue=N.scissorTest,T.viewport(G),T.scissor(J),T.setScissorTest(Ue),se=-1;return}else if(we.__webglFramebuffer===void 0)he.setupRenderTarget(N);else if(we.__hasExternalTextures)he.rebindTextures(N,oe.get(N.texture).__webglTexture,oe.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const dt=N.depthTexture;if(we.__boundDepthTexture!==dt){if(dt!==null&&oe.has(dt)&&(N.width!==dt.image.width||N.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(N)}}const je=N.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(be=!0);const Qe=oe.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?ie=Qe[q][ce]:ie=Qe[q],ne=!0):N.samples>0&&he.useMultisampledRTT(N)===!1?ie=oe.get(N).__webglMultisampledFramebuffer:Array.isArray(Qe)?ie=Qe[ce]:ie=Qe,G.copy(N.viewport),J.copy(N.scissor),Ue=N.scissorTest}else G.copy(it).multiplyScalar(me).floor(),J.copy(Jt).multiplyScalar(me).floor(),Ue=pt;if(ce!==0&&(ie=K),T.bindFramebuffer(j.FRAMEBUFFER,ie)&&T.drawBuffers(N,ie),T.viewport(G),T.scissor(J),T.setScissorTest(Ue),ne){const we=oe.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,we.__webglTexture,ce)}else if(be){const we=q;for(let je=0;je<N.textures.length;je++){const Qe=oe.get(N.textures[je]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+je,Qe.__webglTexture,ce,we)}}else if(N!==null&&ce!==0){const we=oe.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,we.__webglTexture,ce)}se=-1},this.readRenderTargetPixels=function(N,q,ce,ie,ne,be,Be,we=0){if(!(N&&N.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=oe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Be!==void 0&&(je=je[Be]),je){T.bindFramebuffer(j.FRAMEBUFFER,je);try{const Qe=N.textures[we],dt=Qe.format,ht=Qe.type;if(N.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+we),!U.textureFormatReadable(dt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ht)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=N.width-ie&&ce>=0&&ce<=N.height-ne&&j.readPixels(q,ce,ie,ne,Pe.convert(dt),Pe.convert(ht),be)}finally{const Qe=$!==null?oe.get($).__webglFramebuffer:null;T.bindFramebuffer(j.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(N,q,ce,ie,ne,be,Be,we=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=oe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Be!==void 0&&(je=je[Be]),je)if(q>=0&&q<=N.width-ie&&ce>=0&&ce<=N.height-ne){T.bindFramebuffer(j.FRAMEBUFFER,je);const Qe=N.textures[we],dt=Qe.format,ht=Qe.type;if(N.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+we),!U.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,$e),j.bufferData(j.PIXEL_PACK_BUFFER,be.byteLength,j.STREAM_READ),j.readPixels(q,ce,ie,ne,Pe.convert(dt),Pe.convert(ht),0);const At=$!==null?oe.get($).__webglFramebuffer:null;T.bindFramebuffer(j.FRAMEBUFFER,At);const qt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await lS(j,qt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,$e),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,be),j.deleteBuffer($e),j.deleteSync(qt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,q=null,ce=0){const ie=Math.pow(2,-ce),ne=Math.floor(N.image.width*ie),be=Math.floor(N.image.height*ie),Be=q!==null?q.x:0,we=q!==null?q.y:0;he.setTexture2D(N,0),j.copyTexSubImage2D(j.TEXTURE_2D,ce,0,0,Be,we,ne,be),T.unbindTexture()},this.copyTextureToTexture=function(N,q,ce=null,ie=null,ne=0,be=0){let Be,we,je,Qe,dt,ht,$e,At,qt;const nn=N.isCompressedTexture?N.mipmaps[be]:N.image;if(ce!==null)Be=ce.max.x-ce.min.x,we=ce.max.y-ce.min.y,je=ce.isBox3?ce.max.z-ce.min.z:1,Qe=ce.min.x,dt=ce.min.y,ht=ce.isBox3?ce.min.z:0;else{const Kt=Math.pow(2,-ne);Be=Math.floor(nn.width*Kt),we=Math.floor(nn.height*Kt),N.isDataArrayTexture?je=nn.depth:N.isData3DTexture?je=Math.floor(nn.depth*Kt):je=1,Qe=0,dt=0,ht=0}ie!==null?($e=ie.x,At=ie.y,qt=ie.z):($e=0,At=0,qt=0);const Vt=Pe.convert(q.format),xn=Pe.convert(q.type);let Fe;q.isData3DTexture?(he.setTexture3D(q,0),Fe=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),Fe=j.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),Fe=j.TEXTURE_2D),T.activeTexture(j.TEXTURE0),T.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),T.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),T.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const Nn=T.getParameter(j.UNPACK_ROW_LENGTH),xt=T.getParameter(j.UNPACK_IMAGE_HEIGHT),Zn=T.getParameter(j.UNPACK_SKIP_PIXELS),Qn=T.getParameter(j.UNPACK_SKIP_ROWS),yt=T.getParameter(j.UNPACK_SKIP_IMAGES);T.pixelStorei(j.UNPACK_ROW_LENGTH,nn.width),T.pixelStorei(j.UNPACK_IMAGE_HEIGHT,nn.height),T.pixelStorei(j.UNPACK_SKIP_PIXELS,Qe),T.pixelStorei(j.UNPACK_SKIP_ROWS,dt),T.pixelStorei(j.UNPACK_SKIP_IMAGES,ht);const sr=N.isDataArrayTexture||N.isData3DTexture,kt=q.isDataArrayTexture||q.isData3DTexture;if(N.isDepthTexture){const Kt=oe.get(N),Ni=oe.get(q),Ht=oe.get(Kt.__renderTarget),Ii=oe.get(Ni.__renderTarget);T.bindFramebuffer(j.READ_FRAMEBUFFER,Ht.__webglFramebuffer),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let ji=0;ji<je;ji++)sr&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,oe.get(N).__webglTexture,ne,ht+ji),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,oe.get(q).__webglTexture,be,qt+ji)),j.blitFramebuffer(Qe,dt,Be,we,$e,At,Be,we,j.DEPTH_BUFFER_BIT,j.NEAREST);T.bindFramebuffer(j.READ_FRAMEBUFFER,null),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ne!==0||N.isRenderTargetTexture||oe.has(N)){const Kt=oe.get(N),Ni=oe.get(q);T.bindFramebuffer(j.READ_FRAMEBUFFER,te),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,Y);for(let Ht=0;Ht<je;Ht++)sr?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Kt.__webglTexture,ne,ht+Ht):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Kt.__webglTexture,ne),kt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ni.__webglTexture,be,qt+Ht):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ni.__webglTexture,be),ne!==0?j.blitFramebuffer(Qe,dt,Be,we,$e,At,Be,we,j.COLOR_BUFFER_BIT,j.NEAREST):kt?j.copyTexSubImage3D(Fe,be,$e,At,qt+Ht,Qe,dt,Be,we):j.copyTexSubImage2D(Fe,be,$e,At,Qe,dt,Be,we);T.bindFramebuffer(j.READ_FRAMEBUFFER,null),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else kt?N.isDataTexture||N.isData3DTexture?j.texSubImage3D(Fe,be,$e,At,qt,Be,we,je,Vt,xn,nn.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(Fe,be,$e,At,qt,Be,we,je,Vt,nn.data):j.texSubImage3D(Fe,be,$e,At,qt,Be,we,je,Vt,xn,nn):N.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,be,$e,At,Be,we,Vt,xn,nn.data):N.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,be,$e,At,nn.width,nn.height,Vt,nn.data):j.texSubImage2D(j.TEXTURE_2D,be,$e,At,Be,we,Vt,xn,nn);T.pixelStorei(j.UNPACK_ROW_LENGTH,Nn),T.pixelStorei(j.UNPACK_IMAGE_HEIGHT,xt),T.pixelStorei(j.UNPACK_SKIP_PIXELS,Zn),T.pixelStorei(j.UNPACK_SKIP_ROWS,Qn),T.pixelStorei(j.UNPACK_SKIP_IMAGES,yt),be===0&&q.generateMipmaps&&j.generateMipmap(Fe),T.unbindTexture()},this.initRenderTarget=function(N){oe.get(N).__webglFramebuffer===void 0&&he.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?he.setTextureCube(N,0):N.isData3DTexture?he.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?he.setTexture2DArray(N,0):he.setTexture2D(N,0),T.unbindTexture()},this.resetState=function(){ae=0,Z=0,$=null,T.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const eu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Vs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Xw=new Su(-1,1,1,-1,0,1);class jw extends Tt{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}}const Yw=new jw;class Tu{constructor(e){this._mesh=new ut(Yw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class qw extends Vs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qo.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Tu(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class pv extends Vs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,c,4294967295),a.buffers.stencil.setClear(u),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class $w extends Vs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Kw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new et);this._width=i.width,this._height=i.height,t=new Hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qw(eu),this.copyPass.material.blending=Xi,this.timer=new YS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,a=this.passes.length;s<a;s++){const c=this.passes[s];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}pv!==void 0&&(c instanceof pv?i=!0:c instanceof $w&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Zw extends Vs{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new We}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let a,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=s}}const Qw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class $o extends Vs{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new et(e.x,e.y):new et(256,256),this.clearColor=new We(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new Hn(a,c,{type:Kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const v=new Hn(a,c,{type:Kn});v.texture.name="UnrealBloomPass.h"+p,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const g=new Hn(a,c,{type:Kn});g.texture.name="UnrealBloomPass.v"+p,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),a=Math.round(a/2),c=Math.round(c/2)}const u=Qw;this.highPassUniforms=qo.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];a=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new et(1/a,1/c),a=Math.round(a/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=qo.clone(eu.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:eu.vertexShader,fragmentShader:eu.fragmentShader,premultipliedAlpha:!0,blending:Wt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new We,this._oldClearAlpha=1,this._basic=new xi,this._fsQuad=new Tu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new et(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let u=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[h].uniforms.direction.value=$o.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=$o.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),u=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=c}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}$o.BlurDirectionX=new et(1,0);$o.BlurDirectionY=new et(0,1);const Fc={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class Jw extends Vs{constructor(e,t,i){super(),this.scene=e,this.camera=t;const s=i.focus!==void 0?i.focus:1,a=i.aperture!==void 0?i.aperture:.025,c=i.maxblur!==void 0?i.maxblur:1;this._renderTargetDepth=new Hn(1,1,{minFilter:En,magFilter:En,type:Kn}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new Zv,this._materialDepth.depthPacking=Qy,this._materialDepth.blending=Xi;const u=qo.clone(Fc.uniforms);u.tDepth.value=this._renderTargetDepth.texture,u.focus.value=s,u.aspect.value=t.aspect,u.aperture.value=a,u.maxblur.value=c,u.nearClip.value=t.near,u.farClip.value=t.far,this.materialBokeh=new Ot({defines:Object.assign({},Fc.defines),uniforms:u,vertexShader:Fc.vertexShader,fragmentShader:Fc.fragmentShader}),this.uniforms=u,this._fsQuad=new Tu(this.materialBokeh),this._oldClearColor=new We}render(e,t,i){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);const s=e.getClearAlpha(),a=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=a}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}}const kc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class eb extends Vs{constructor(){super(),this.isOutputPass=!0,this.uniforms=qo.clone(kc.uniforms),this.material=new Kv({name:kc.name,uniforms:this.uniforms,vertexShader:kc.vertexShader,fragmentShader:kc.fragmentShader}),this._fsQuad=new Tu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Et.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===tp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===np?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ep&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class tb extends Bv{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new fn;e.deleteAttribute("uv");const t=new Ai({side:$n}),i=new Ai,s=new HS(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const a=new ut(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const c=new mp(e,i,6),u=new vn;u.position.set(-10.906,2.009,1.846),u.rotation.set(0,-.195,0),u.scale.set(2.328,7.905,4.651),u.updateMatrix(),c.setMatrixAt(0,u.matrix),u.position.set(-5.607,-.754,-.758),u.rotation.set(0,.994,0),u.scale.set(1.97,1.534,3.955),u.updateMatrix(),c.setMatrixAt(1,u.matrix),u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),u.updateMatrix(),c.setMatrixAt(2,u.matrix),u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),u.updateMatrix(),c.setMatrixAt(3,u.matrix),u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),u.updateMatrix(),c.setMatrixAt(4,u.matrix),u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),u.updateMatrix(),c.setMatrixAt(5,u.matrix),this.add(c);const h=new ut(e,Do(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const f=new ut(e,Do(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const p=new ut(e,Do(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const v=new ut(e,Do(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new ut(e,Do(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const _=new ut(e,Do(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Do(o){return new BS({color:0,emissive:16777215,emissiveIntensity:o})}const gt=Math.PI*2;function _t(o,e,t){return o<e?e:o>t?t:o}function lx(o,e,t){return o+(e-o)*t}function Dt(o,e,t,i){return lx(o,e,1-Math.exp(-t*i))}function $a(o,e){return o+Math.random()*(e-o)}function Bc(o){return o[Math.floor(Math.random()*o.length)]}function wu(o){let e=o>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}let mv=0;function Pi(o){return mv++,`${o}-${Date.now().toString(36)}-${mv.toString(36)}${Math.floor(Math.random()*1296).toString(36)}`}function nb(o){const e=_t(o,0,1);return e*e*(3-2*e)}function ib(o){const e=_t(o,0,1);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}function rb(o){const e=o.replace("#",""),t=parseInt(e.length===3?e.split("").map(i=>i+i).join(""):e,16);return[t>>16&255,t>>8&255,t&255]}const Xh={IDLE:{activity:.15,signalSpeed:.2,glowIntensity:.4,turbulence:.02,pulseRate:.3},LISTENING:{activity:.35,signalSpeed:.4,glowIntensity:.55,turbulence:.05,pulseRate:.5},THINKING:{activity:.85,signalSpeed:.9,glowIntensity:.8,turbulence:.25,pulseRate:1.1},TOOL_USE:{activity:.95,signalSpeed:1,glowIntensity:.9,turbulence:.35,pulseRate:1.3},SPEAKING:{activity:.6,signalSpeed:.55,glowIntensity:.65,turbulence:.12,pulseRate:.75},ERROR:{activity:.7,signalSpeed:.8,glowIntensity:.75,turbulence:.6,pulseRate:1.5},SUCCESS:{activity:.8,signalSpeed:.7,glowIntensity:.95,turbulence:.08,pulseRate:.5}},Uo=new We("#00f0ff"),gv=new We("#d4af37");new We("#ff3333");const zc=new We("#003344"),vv=new We("#aaccff");class sb{constructor(){this.group=new gn,this.platform=new gn,this.segmentRings=[],this.tickCount=128,this.signalPaths=[],this.signalCount=18,this.nucleusRings=[],this.stateParamsCur={...Xh.IDLE},this.targetParams={...Xh.IDLE},this.time=0,this.breathPhase=0,this.pulsePhase=0,this.flashT=-1,this.errorShake=0,this.tint=new We("#00f0ff"),this.userTint=new We("#00f0ff"),this._buildOuterRing(),this._buildSegmentRings(),this._buildTickRing(),this._buildSignalPaths(),this._buildInnerField(),this._buildNucleus(),this._buildMarkers()}_buildOuterRing(){const e=new Float32Array(768),t=3.8;for(let s=0;s<256;s++){const a=s/256*gt;let c=t;const u=Math.floor(s/16);(u%7===0||u%11===0)&&(c*=.97),c+=Math.sin(a*24)*.015,e[s*3]=Math.cos(a)*c,e[s*3+1]=0,e[s*3+2]=Math.sin(a)*c}const i=new Tt;i.setAttribute("position",new vt(e,3)),this.outerRingMat=new Ot({uniforms:{uTime:{value:0},uColor:{value:Uo},uIntensity:{value:.5},uDashOffset:{value:0}},vertexShader:`
        uniform float uTime;
        varying vec3 vColor;
        uniform vec3 uColor;
        void main() {
          vColor = uColor;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uIntensity;
        uniform float uDashOffset;
        varying vec3 vColor;
        void main() {
          float dash = mod(gl_FragCoord.x * 0.03 + uDashOffset, 0.12);
          float alpha = uIntensity * (dash > 0.04 ? 1.0 : 0.2);
          gl_FragColor = vec4(vColor, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Wt}),this.outerRing=new Ls(i,this.outerRingMat),this.group.add(this.outerRing)}_buildSegmentRings(){const e=[{radius:3.5,segments:8,thickness:.025,color:Uo,speed:.02},{radius:3.2,segments:12,thickness:.02,color:vv,speed:-.015},{radius:2.9,segments:6,thickness:.03,color:gv,speed:.01},{radius:2.6,segments:16,thickness:.018,color:Uo,speed:-.025},{radius:2.3,segments:10,thickness:.022,color:zc,speed:.008}];for(const t of e){const i=[],s=[];for(let h=0;h<t.segments;h++){const f=h/t.segments*gt,p=gt/t.segments*.7,v=f+gt/t.segments*.15,g=32;for(let _=0;_<g;_++){const M=_/g,b=v+M*p;s.push(Math.cos(b)*t.radius),s.push(0),s.push(Math.sin(b)*t.radius),i.push(b)}}const a=new Tt;a.setAttribute("position",new vt(new Float32Array(s),3));const c=new Ot({uniforms:{uTime:{value:0},uColor:{value:t.color},uIntensity:{value:.4},uRotation:{value:0}},vertexShader:`
          uniform float uRotation;
          varying vec3 vColor;
          uniform vec3 uColor;
          void main() {
            float c = cos(uRotation);
            float s = sin(uRotation);
            vec3 pos = position;
            pos.xz = vec2(pos.x * c - pos.z * s, pos.x * s + pos.z * c);
            vColor = uColor;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 uColor;
          uniform float uIntensity;
          varying vec3 vColor;
          void main() {
            gl_FragColor = vec4(vColor, uIntensity);
          }
        `,transparent:!0,depthWrite:!1,blending:Wt}),u=new Ls(a,c);this.group.add(u),this.segmentRings.push({mesh:u,mat:c,segments:i})}}_buildTickRing(){const e=new fn(.006,.06,.006);this.tickMat=new xi({color:Uo,transparent:!0,opacity:.5,blending:Wt,depthWrite:!1}),this.tickRing=new mp(e,this.tickMat,this.tickCount);const t=new zt;for(let i=0;i<this.tickCount;i++){const s=i/this.tickCount*gt,a=2,u=i%16===0?2:1,h=new V(Math.cos(s)*a,0,Math.sin(s)*a),f=new Bs().setFromAxisAngle(new V(0,1,0),-s);t.compose(h,f,new V(1,u,1)),this.tickRing.setMatrixAt(i,t)}this.tickRing.instanceMatrix.needsUpdate=!0,this.group.add(this.tickRing)}_buildSignalPaths(){const e=[{radius:1.85,speed:.15,tilt:0},{radius:1.75,speed:-.12,tilt:0},{radius:1.65,speed:.18,tilt:0},{radius:1.55,speed:-.1,tilt:0}];for(const t of e){const i=new Float32Array(384);for(let h=0;h<128;h++){const f=h/128*gt;i[h*3]=Math.cos(f)*t.radius,i[h*3+1]=0,i[h*3+2]=Math.sin(f)*t.radius}const s=new Tt;s.setAttribute("position",new vt(i,3));const a=new Ot({uniforms:{uTime:{value:0},uColor:{value:zc},uOpacity:{value:.15}},vertexShader:`
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 uColor;
          uniform float uOpacity;
          void main() {
            gl_FragColor = vec4(uColor, uOpacity);
          }
        `,transparent:!0,depthWrite:!1,blending:Wt}),c=new Ls(s,a);this.group.add(c);const u=new Float32Array(this.signalCount*3);this.signalPaths.push({ring:c,mat:a,signals:u})}}_buildInnerField(){const e=new Float32Array(576);for(let i=0;i<96;i++){const s=i/96*gt,a=1.2,c=1.5;e[i*6]=Math.cos(s)*a,e[i*6+1]=0,e[i*6+2]=Math.sin(s)*a,e[i*6+3]=Math.cos(s)*c,e[i*6+4]=0,e[i*6+5]=Math.sin(s)*c}const t=new Tt;t.setAttribute("position",new vt(e,3)),this.innerFieldMat=new Ot({uniforms:{uTime:{value:0},uColor:{value:zc},uIntensity:{value:.25}},vertexShader:`
        uniform float uTime;
        varying float vAlpha;
        void main() {
          float flicker = 0.6 + 0.4 * sin(uTime * 2.0 + position.x * 8.0);
          vAlpha = flicker;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uIntensity;
        varying float vAlpha;
        void main() {
          gl_FragColor = vec4(uColor, uIntensity * vAlpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Wt}),this.innerFieldLines=new el(t,this.innerFieldMat),this.group.add(this.innerFieldLines)}_buildNucleus(){this.nucleusGroup=new gn;const e=[{radius:.55,segments:32,color:Uo},{radius:.45,segments:24,color:vv},{radius:.35,segments:16,color:gv}];for(const a of e){const c=[];for(let p=0;p<a.segments;p++){const v=p/a.segments*gt;p%3!==0&&(c.push(Math.cos(v)*a.radius),c.push(0),c.push(Math.sin(v)*a.radius))}const u=new Tt;u.setAttribute("position",new vt(new Float32Array(c),3));const h=new Ot({uniforms:{uTime:{value:0},uColor:{value:a.color},uIntensity:{value:.6},uPulse:{value:0}},vertexShader:`
          uniform float uPulse;
          varying vec3 vColor;
          uniform vec3 uColor;
          void main() {
            vec3 pos = position * (1.0 + uPulse * 0.1);
            vColor = uColor;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 uColor;
          uniform float uIntensity;
          varying vec3 vColor;
          void main() {
            gl_FragColor = vec4(vColor, uIntensity);
          }
        `,transparent:!0,depthWrite:!1,blending:Wt}),f=new Ls(u,h);this.nucleusGroup.add(f),this.nucleusRings.push(f),this.nucleusMat=h}const t=new Float32Array([-.6,0,0,.6,0,0,0,0,-.6,0,0,.6]),i=new Tt;i.setAttribute("position",new vt(t,3));const s=new Ot({uniforms:{uColor:{value:zc},uIntensity:{value:.3}},vertexShader:"varying vec3 vColor; uniform vec3 uColor; void main() { vColor = uColor; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec3 vColor; uniform float uIntensity; void main() { gl_FragColor = vec4(vColor, uIntensity); }",transparent:!0,depthWrite:!1,blending:Wt});this.nucleusCrosshair=new el(i,s),this.nucleusGroup.add(this.nucleusCrosshair),this.group.add(this.nucleusGroup)}_buildMarkers(){this.markerPositions=new Float32Array(144);for(let i=0;i<48;i++){const s=i/48*gt,a=2.1+i%3*.05;this.markerPositions[i*3]=Math.cos(s)*a,this.markerPositions[i*3+1]=0,this.markerPositions[i*3+2]=Math.sin(s)*a}const e=new Tt;e.setAttribute("position",new vt(this.markerPositions,3));const t=new Xv({color:Uo,size:.04,transparent:!0,opacity:.6,blending:Wt,depthWrite:!1});this.markerPoints=new Fs(e,t),this.group.add(this.markerPoints)}setTint(e){this.userTint.set(e),this.tint.copy(this.userTint)}setEmissive(){}setArcVisible(e){this.group.visible=e}setState(e){this.targetParams={...Xh[e]},e==="SUCCESS"?this.flashT=.4:e==="ERROR"&&(this.flashT=.4,this.errorShake=.5)}pulse(){this.flashT=.2}update(e,t,i,s){this.time=t;const a=this.targetParams;this.stateParamsCur.activity=Dt(this.stateParamsCur.activity,a.activity,2.5,e),this.stateParamsCur.signalSpeed=Dt(this.stateParamsCur.signalSpeed,a.signalSpeed,3,e),this.stateParamsCur.glowIntensity=Dt(this.stateParamsCur.glowIntensity,a.glowIntensity,2,e),this.stateParamsCur.turbulence=Dt(this.stateParamsCur.turbulence,a.turbulence,2.2,e),this.stateParamsCur.pulseRate=Dt(this.stateParamsCur.pulseRate,a.pulseRate,2.5,e),this.breathPhase+=e*(.5+this.stateParamsCur.pulseRate*1.5),this.pulsePhase+=e*(3+this.stateParamsCur.pulseRate*6),this.outerRingMat&&(this.outerRingMat.uniforms.uTime.value=t,this.outerRingMat.uniforms.uIntensity.value=.4+this.stateParamsCur.glowIntensity*.3,this.outerRingMat.uniforms.uDashOffset.value=t*.1);for(let u=0;u<this.segmentRings.length;u++){const h=this.segmentRings[u],f=1+this.stateParamsCur.signalSpeed*2;h.mat.uniforms.uTime.value=t,h.mat.uniforms.uRotation.value+=e*h.mesh.userData.speed*f,h.mat.uniforms.uIntensity.value=.3+this.stateParamsCur.activity*.4}this.tickRing.rotation.y+=e*.02*(1+this.stateParamsCur.signalSpeed),this.tickMat.opacity=.4+this.stateParamsCur.glowIntensity*.2;for(let u=0;u<this.signalPaths.length;u++){const h=this.signalPaths[u];h.mat.uniforms.uTime.value=t,h.mat.uniforms.uOpacity.value=.1+this.stateParamsCur.activity*.15;for(let f=0;f<this.signalCount;f++){const v=(t*(.2+this.stateParamsCur.signalSpeed*.5)+f*.15)%1*gt,g=1.85-u*.1;h.signals[f*3]=Math.cos(v)*g,h.signals[f*3+1]=0,h.signals[f*3+2]=Math.sin(v)*g}}this.innerFieldMat.uniforms.uTime.value=t,this.innerFieldMat.uniforms.uIntensity.value=.2+this.stateParamsCur.activity*.3;const c=Math.sin(this.pulsePhase)*.1*this.stateParamsCur.activity;for(const u of this.nucleusRings)u.material.uniforms.uPulse.value=c,u.material.uniforms.uIntensity.value=.5+this.stateParamsCur.glowIntensity*.3;if(this.nucleusGroup.scale.setScalar(1+Math.sin(this.breathPhase)*.05*this.stateParamsCur.activity),this.markerPoints.material.opacity=.4+this.stateParamsCur.activity*.3,this.flashT>=0){this.flashT-=e;const u=Math.max(0,this.flashT/.4);for(const h of this.nucleusRings)h.material.uniforms.uIntensity.value=.5+u*.8}if(this.errorShake>0){this.errorShake-=e;const u=this.errorShake*.1;this.group.position.x=(Math.random()-.5)*u,this.group.position.y=(Math.random()-.5)*u}else this.group.position.x=0,this.group.position.y=0}dispose(){this.group.clear()}}const Gc=48e3,Vc=800,Sr=15,ob={IDLE:.55,LISTENING:.8,THINKING:1.25,TOOL_USE:1.5,SPEAKING:1.15,ERROR:1.7,SUCCESS:1.45},ab=`
  attribute float aSeed;
  attribute float aStrand;
  uniform float uTime;
  uniform float uAudio;
  uniform float uMid;
  uniform float uIntensity;
  uniform float uDensity;
  uniform float uScale;
  varying float vGlow;
  varying float vMix;
  void main(){
    float vis = step(aSeed, uDensity);
    float t = fract(aSeed * 3.71 + uTime * (0.03 + aStrand * 0.012) * uIntensity);
    float y = t * ${Sr.toFixed(1)};

    /* strand radius — tapered, breathing with bass */
    float taper = 0.55 + 0.45 * sin(t * 3.14159);
    float radius = (0.5 + aStrand * 0.42) * taper * (1.0 + uAudio * 0.5);

    /* interweaving helix + turbulence noise field */
    float twist = aStrand * 2.39996 + uTime * (0.35 + aStrand * 0.06) * uIntensity + y * 0.28;
    float turb = sin(y * 1.7 + uTime * 2.1 + aSeed * 40.0)
               * cos(y * 0.9 - uTime * 1.4 + aStrand * 5.0);
    radius += turb * 0.34 * (0.4 + uMid);

    vec3 p = vec3(cos(twist) * radius, y, sin(twist) * radius);
    /* axial wobble */
    p.x += sin(uTime * 0.8 + y * 0.35) * 0.16;
    p.z += cos(uTime * 0.7 + y * 0.3) * 0.16;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float d = -mv.z;
    gl_PointSize = uScale * (1.1 + aSeed * 1.5) * (1.0 + uAudio * 0.8) * vis * (150.0 / d);
    vGlow = (0.4 + 0.6 * sin(uTime * 3.0 + aSeed * 61.0)) * uIntensity * (0.4 + uAudio);
    vMix = fract(aSeed * 9.77 + aStrand);
    gl_Position = projectionMatrix * mv;
  }
`,lb=`
  uniform vec3 uTint;
  uniform float uIntensity;
  varying float vGlow;
  varying float vMix;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float a = smoothstep(0.5, 0.02, length(c));
    a *= a;
    vec3 gold = vec3(1.0, 0.72, 0.0);
    vec3 col = mix(uTint, gold, step(0.9, vMix));
    col *= 0.5 + vGlow;
    gl_FragColor = vec4(col, a * 0.6 * clamp(uIntensity, 0.2, 1.6));
  }
`,cb=`
  uniform float uTime;
  uniform vec3 uTint;
  uniform float uAudio;
  uniform float uIntensity;
  varying vec3 vN;
  varying vec3 vV;
  varying vec2 vUv;
  void main(){
    float fr = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 1.6);
    float flow = 0.5 + 0.5 * sin(vUv.y * 42.0 - uTime * 7.0);
    float flick = 0.82 + 0.18 * sin(uTime * 23.0 + vUv.y * 90.0);
    float bands = smoothstep(0.4, 0.9, flow);
    float alpha = (fr * 0.5 + bands * 0.22) * flick * (0.5 + uAudio * 0.8);
    vec3 col = uTint * (0.7 + uIntensity * 0.5) * (1.0 + bands);
    gl_FragColor = vec4(col, alpha * 0.55);
  }
`;class ub{constructor(){this.group=new gn,this.rings=[],this.ringMats=[],this.subBeams=new gn,this.intensity=.55,this.tint=new We("#00f0ff"),this.targetIntensity=.55,this.userTint=new We("#00f0ff"),this.tintTarget=new We("#00f0ff"),this.intensityScale=1;const e=wu(4242),t=new Float32Array(Gc*3),i=new Float32Array(Gc),s=new Float32Array(Gc),a=9;for(let _=0;_<Gc;_++)i[_]=e(),s[_]=Math.floor(e()*a),t[_*3+1]=e()*Sr;const c=new Tt;c.setAttribute("position",new vt(t,3)),c.setAttribute("aSeed",new vt(i,1)),c.setAttribute("aStrand",new vt(s,1)),this.mat=new Ot({uniforms:{uTime:{value:0},uAudio:{value:0},uMid:{value:0},uIntensity:{value:1},uDensity:{value:1},uScale:{value:1},uTint:{value:this.tint}},vertexShader:ab,fragmentShader:lb,transparent:!0,depthWrite:!1,blending:Wt});const u=new Fs(c,this.mat);u.frustumCulled=!1,this.group.add(u),this.coreMat=new Ot({uniforms:{uTime:{value:0},uTint:{value:this.tint},uAudio:{value:0},uIntensity:{value:1}},vertexShader:`
        varying vec3 vN; varying vec3 vV; varying vec2 vUv;
        void main(){
          vUv = uv;
          vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vV = -mv.xyz;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:cb,transparent:!0,depthWrite:!1,blending:Wt,side:Ci});const h=new ut(new Xo(.5,.62,Sr,28,40,!0),this.coreMat);h.position.y=Sr/2,this.group.add(h);for(let _=0;_<6;_++){const M=[],b=_/6*gt;for(let S=0;S<=90;S++){const P=S/90*Sr,L=b+P*.9,C=1.15+.5*Math.sin(P*.5+b);M.push(new V(Math.cos(L)*C,P,Math.sin(L)*C))}const x=new Ls(new Tt().setFromPoints(M),new Ho({color:_%2===0?61695:13938487,transparent:!0,opacity:.3,blending:Wt,depthWrite:!1,toneMapped:!1}));this.subBeams.add(x)}this.group.add(this.subBeams);for(let _=0;_<5;_++){const M=new xi({color:61695,transparent:!0,opacity:.22,blending:Wt,depthWrite:!1,toneMapped:!1}),b=new ut(new yu(1.5-_*.06,.02,8,64),M);b.rotation.x=Math.PI/2,b.position.y=.4+_*(Sr/5),this.rings.push(b),this.ringMats.push(M),this.group.add(b)}this.streakData=new Float32Array(Vc*5);const f=new Float32Array(Vc*6);for(let _=0;_<Vc;_++)this.streakData[_*5]=(e()*2-1)*1.6,this.streakData[_*5+1]=e()*Sr,this.streakData[_*5+2]=(e()*2-1)*1.6,this.streakData[_*5+3]=2.5+e()*5,this.streakData[_*5+4]=e();this.streakGeo=new Tt,this.streakGeo.setAttribute("position",new vt(f,3).setUsage(Ds)),this.streakMat=new Ho({color:8050687,transparent:!0,opacity:.32,blending:Wt,depthWrite:!1,toneMapped:!1});const p=new el(this.streakGeo,this.streakMat);p.frustumCulled=!1,this.group.add(p);const v=new xi({color:61695,transparent:!0,opacity:.4,blending:Wt,depthWrite:!1,toneMapped:!1}),g=new ut(new vp(2.2,48),v);g.rotation.x=-Math.PI/2,g.position.y=.03,this.group.add(g),this.baseMat=v}setState(e){this.targetIntensity=ob[e],e==="ERROR"?this.tintTarget.set("#ff5533"):e==="SUCCESS"?this.tintTarget.set("#00ff66"):this.tintTarget.copy(this.userTint)}setTint(e){this.userTint.set(e),this.tintTarget.set(e)}setDensity(e){this.mat.uniforms.uDensity.value=_t(e,.05,1)}setScale(e){this.mat.uniforms.uScale.value=_t(e,.3,3)}setIntensityScale(e){this.intensityScale=_t(e,.2,3)}update(e,t,i){this.intensity=Dt(this.intensity,this.targetIntensity*this.intensityScale,2.2,e),this.tint.lerp(this.tintTarget,Math.min(1,e*2.4)),this.mat.uniforms.uTime.value=t,this.mat.uniforms.uAudio.value=i.bass,this.mat.uniforms.uMid.value=i.mid,this.mat.uniforms.uIntensity.value=this.intensity,this.coreMat.uniforms.uTime.value=t,this.coreMat.uniforms.uAudio.value=i.level,this.coreMat.uniforms.uIntensity.value=this.intensity,this.mat.uniforms.uTint.value.copy(this.tint),this.coreMat.uniforms.uTint.value.copy(this.tint),this.subBeams.rotation.y+=e*.5*this.intensity;for(let c=0;c<this.rings.length;c++){const u=this.rings[c];u.rotation.z+=e*(c%2===0?.7:-.5)*this.intensity;const h=1+i.bass*.25+Math.sin(t*2+c)*.03;u.scale.setScalar(h),this.ringMats[c].opacity=.14+i.high*.3+Math.sin(t*3+c*2)*.05,this.ringMats[c].color.copy(this.tint)}this.baseMat.opacity=.25+i.bass*.4,this.baseMat.color.copy(this.tint);const s=this.streakGeo.getAttribute("position"),a=s.array;for(let c=0;c<Vc;c++){const u=this.streakData;let h=u[c*5+1]+u[c*5+3]*e*this.intensity;h>Sr&&(h-=Sr),u[c*5+1]=h;const f=t*.6+u[c*5+4]*gt+h*.3,p=u[c*5]*Math.cos(f)*.4,v=u[c*5+2]*Math.sin(f)*.4;a[c*6]=p,a[c*6+1]=h,a[c*6+2]=v,a[c*6+3]=p,a[c*6+4]=Math.max(0,h-.55-i.bass*.4),a[c*6+5]=v}s.needsUpdate=!0,this.streakMat.color.copy(this.tint)}}const tu=13e3,jf=5500,db=tu+jf,Cs=65e3,bs=1500,hb=`
  attribute vec4 aData;   /* orbiters: radius, speed, phase, y */
  attribute float aSeed;
  attribute float aMode;
  uniform float uTime;
  uniform float uTurb;
  uniform float uAudio;
  uniform float uDustDensity;
  uniform float uStreamDensity;
  uniform float uDustScale;
  uniform float uStreamScale;
  varying float vSeed;
  varying float vFade;
  varying float vVis;
  void main(){
    vec3 p;
    float vis;
    float size;
    if (aMode < 0.5) {
      p = position;
      float t = uTime * 0.12 + aSeed * 19.0;
      p += (0.4 + uTurb * 1.4) * vec3(sin(t * 1.3 + p.y * 0.4), cos(t * 0.9 + p.x * 0.3), sin(t * 1.1 + p.z * 0.4));
      vis = step(aSeed, uDustDensity);
      size = 1.3 * uDustScale;
    } else {
      float ang = aData.z + uTime * aData.y * (1.0 + uAudio * 1.6 + uTurb);
      p = vec3(cos(ang) * aData.x, 2.6 + aData.w + sin(uTime * 0.7 + aSeed * 9.0) * 0.25, sin(ang) * aData.x);
      vis = step(fract(aSeed * 5.17), uStreamDensity);
      size = 1.7 * uStreamScale;
    }
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float d = -mv.z;
    gl_PointSize = size * (1.0 + aSeed * 0.9) * (150.0 / d) * (1.0 + uAudio * 0.5) * vis;
    vFade = smoothstep(55.0, 9.0, d);
    vSeed = aSeed;
    vVis = vis;
    gl_Position = projectionMatrix * mv;
  }
`,fb=`
  uniform vec3 uColA; uniform vec3 uColB; uniform float uAudio;
  varying float vSeed; varying float vFade; varying float vVis;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    float a = smoothstep(0.5, 0.05, r);
    a *= a;
    vec3 col = mix(uColA, uColB, step(0.9, fract(vSeed * 7.31)));
    gl_FragColor = vec4(col * (0.65 + uAudio * 0.8), a * vFade * 0.75 * vVis);
  }
`;class pb{constructor(){this.group=new gn,this.sparkHead=0,this.turb=0;const e=wu(1337),t=tu+jf,i=new Float32Array(t*3),s=new Float32Array(t*4),a=new Float32Array(t),c=new Float32Array(t);for(let f=0;f<tu;f++){const p=4+e()*22,v=e()*gt;i[f*3]=Math.cos(v)*p,i[f*3+1]=(e()-.35)*14,i[f*3+2]=Math.sin(v)*p,a[f]=e(),c[f]=0}for(let f=0;f<jf;f++){const p=tu+f;s[p*4]=2.2+e()*3.4,s[p*4+1]=(.1+e()*.5)*(e()<.5?1:-1),s[p*4+2]=e()*gt,s[p*4+3]=(e()-.5)*3.4,a[p]=e(),c[p]=1}const u=new Tt;u.setAttribute("position",new vt(i,3)),u.setAttribute("aData",new vt(s,4)),u.setAttribute("aSeed",new vt(a,1)),u.setAttribute("aMode",new vt(c,1)),this.mat=new Ot({uniforms:{uTime:{value:0},uTurb:{value:0},uAudio:{value:0},uDustDensity:{value:.85},uStreamDensity:{value:1},uDustScale:{value:1},uStreamScale:{value:1},uColA:{value:new We("#1e6f7a")},uColB:{value:new We("#d4af37")}},vertexShader:hb,fragmentShader:fb,transparent:!0,depthWrite:!1,blending:Wt}),this.points=new Fs(u,this.mat),this.points.frustumCulled=!1,this.group.add(this.points),this.sparkPos=new Float32Array(bs*3),this.sparkVel=new Float32Array(bs*3),this.sparkLife=new Float32Array(bs),this.sparkColor=new Float32Array(bs*3);const h=new Tt;h.setAttribute("position",new vt(this.sparkPos,3).setUsage(Ds)),h.setAttribute("aLife",new vt(this.sparkLife,1).setUsage(Ds)),h.setAttribute("aColor",new vt(this.sparkColor,3).setUsage(Ds)),this.sparkMat=new Ot({uniforms:{uTime:{value:0}},vertexShader:`
        attribute float aLife; attribute vec3 aColor;
        varying float vLife; varying vec3 vColor;
        void main(){
          vLife = aLife; vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (2.0 + aLife * 4.5) * (140.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying float vLife; varying vec3 vColor;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float a = smoothstep(0.5, 0.0, length(c)) * vLife;
          gl_FragColor = vec4(vColor * (0.7 + vLife), a);
        }`,transparent:!0,depthWrite:!1,blending:Wt}),this.sparks=new Fs(h,this.sparkMat),this.sparks.frustumCulled=!1,this.group.add(this.sparks)}setDensity(e,t){this.mat.uniforms.uDustDensity.value=_t(e,0,1),this.mat.uniforms.uStreamDensity.value=_t(t,0,1)}setScale(e,t){this.mat.uniforms.uDustScale.value=_t(e,.2,3),this.mat.uniforms.uStreamScale.value=_t(t,.2,3)}burstAt(e,t,i){const s=new We(t),a=i??new V(0,2.6,0);for(let c=0;c<e;c++){const u=this.sparkHead;this.sparkHead=(this.sparkHead+1)%bs,this.sparkPos[u*3]=a.x+(Math.random()-.5)*.3,this.sparkPos[u*3+1]=a.y+(Math.random()-.5)*.3,this.sparkPos[u*3+2]=a.z+(Math.random()-.5)*.3;const h=Math.random()*gt,f=(Math.random()-.5)*Math.PI,p=1.5+Math.random()*3.5;this.sparkVel[u*3]=Math.cos(h)*Math.cos(f)*p,this.sparkVel[u*3+1]=Math.sin(f)*p*.9+.8,this.sparkVel[u*3+2]=Math.sin(h)*Math.cos(f)*p,this.sparkLife[u]=1,this.sparkColor[u*3]=s.r,this.sparkColor[u*3+1]=s.g,this.sparkColor[u*3+2]=s.b}}stir(){this.turb=1}activeSparks(){let e=0;for(let t=0;t<bs;t++)this.sparkLife[t]>0&&e++;return e}update(e,t,i){this.mat.uniforms.uTime.value=t,this.mat.uniforms.uAudio.value=i.level,this.turb=Dt(this.turb,0,1.6,e),this.mat.uniforms.uTurb.value=this.turb;const s=Math.sin(t*2.3)*.3+Math.cos(t*4.7)*.2;this.mat.uniforms.uStreamScale.value=1+s*.15*(1+this.turb*.5);let a=!1;for(let c=0;c<bs;c++)this.sparkLife[c]<=0||(a=!0,this.sparkLife[c]=Math.max(0,this.sparkLife[c]-e*.9),this.sparkVel[c*3+1]-=e*2.4,this.sparkPos[c*3]+=this.sparkVel[c*3]*e,this.sparkPos[c*3+1]+=this.sparkVel[c*3+1]*e,this.sparkPos[c*3+2]+=this.sparkVel[c*3+2]*e,this.sparkLife[c]<=0&&(this.sparkPos[c*3+1]=-999));a&&(this.sparks.geometry.getAttribute("position").needsUpdate=!0,this.sparks.geometry.getAttribute("aLife").needsUpdate=!0,this.sparks.geometry.getAttribute("aColor").needsUpdate=!0)}}const nu=[{kind:"e",c:[0,1.62,0],r:[.155,.185,.165],w:.16},{kind:"e",c:[0,1.63,.13],r:[.028,.034,.03],w:.012},{kind:"e",c:[0,1.715,.125],r:[.1,.02,.028],w:.012},{kind:"e",c:[.15,1.63,.01],r:[.018,.04,.028],w:.008},{kind:"e",c:[-.15,1.63,.01],r:[.018,.04,.028],w:.008},{kind:"c",a:[0,1.47,0],b:[0,1.39,0],r:.058,w:.02},{kind:"e",c:[0,1.13,0],r:[.205,.29,.128],w:.24},{kind:"e",c:[0,1.24,.09],r:[.15,.13,.05],w:.05},{kind:"e",c:[0,.95,0],r:[.175,.05,.115],w:.03},{kind:"e",c:[0,.8,0],r:[.165,.115,.105],w:.07},{kind:"e",c:[.27,1.36,0],r:[.075,.06,.07],w:.035},{kind:"e",c:[-.27,1.36,0],r:[.075,.06,.07],w:.035},{kind:"c",a:[.285,1.34,0],b:[.35,1.06,.03],r:.052,w:.05},{kind:"c",a:[-.285,1.34,0],b:[-.35,1.06,.03],r:.052,w:.05},{kind:"c",a:[.35,1.06,.03],b:[.3,.8,.06],r:.042,w:.045},{kind:"c",a:[-.35,1.06,.03],b:[-.3,.8,.06],r:.042,w:.045},{kind:"e",c:[.3,.74,.07],r:[.045,.065,.04],w:.02},{kind:"e",c:[-.3,.74,.07],r:[.045,.065,.04],w:.02},{kind:"c",a:[.1,.73,0],b:[.115,.4,.02],r:.068,w:.08},{kind:"c",a:[-.1,.73,0],b:[-.115,.4,.02],r:.068,w:.08},{kind:"c",a:[.115,.4,.02],b:[.11,.09,0],r:.048,w:.07},{kind:"c",a:[-.115,.4,.02],b:[-.11,.09,0],r:.048,w:.07},{kind:"e",c:[.11,.05,.045],r:[.055,.042,.11],w:.02},{kind:"e",c:[-.11,.05,.045],r:[.055,.042,.11],w:.02}],jh=[0,1.62,0];function mb(o,e){const t=(o[0]-e.c[0])/e.r[0],i=(o[1]-e.c[1])/e.r[1],s=(o[2]-e.c[2])/e.r[2],a=Math.sqrt(t*t+i*i+s*s),c=Math.min(e.r[0],Math.min(e.r[1],e.r[2]));return(a-1)*c}function gb(o,e){const t=o[0]-e.a[0],i=o[1]-e.a[1],s=o[2]-e.a[2],a=e.b[0]-e.a[0],c=e.b[1]-e.a[1],u=e.b[2]-e.a[2],h=a*a+c*c+u*u,f=_t((t*a+i*c+s*u)/Math.max(1e-6,h),0,1),p=t-a*f,v=i-c*f,g=s-u*f;return Math.sqrt(p*p+v*v+g*g)-e.r}function vb(o){let e=1/0;for(const t of nu){const i=t.kind==="e"?mb(o,t):gb(o,t);i<e&&(e=i)}return e}function xb(o,e){const t=new Float32Array(o*3),i=nu.reduce((u,h)=>u+h.w,0),s=.026,a=[0,0,0],c=()=>{let u=e()*i;for(const h of nu)if(u-=h.w,u<=0)return h;return nu[0]};for(let u=0;u<o;u++){let h=!1;for(let f=0;f<12&&!h;f++){if(e()<.72){const M=c();if(M.kind==="e")a[0]=M.c[0]+(e()*2-1)*M.r[0]*1.45,a[1]=M.c[1]+(e()*2-1)*M.r[1]*1.45,a[2]=M.c[2]+(e()*2-1)*M.r[2]*1.45;else{const b=e();a[0]=M.a[0]+(M.b[0]-M.a[0])*b+(e()*2-1)*M.r*1.9,a[1]=M.a[1]+(M.b[1]-M.a[1])*b+(e()*2-1)*M.r*1.9,a[2]=M.a[2]+(M.b[2]-M.a[2])*b+(e()*2-1)*M.r*1.9}}else a[0]=(e()*2-1)*.72,a[1]=e()*2.02-.02,a[2]=(e()*2-1)*.42;const p=vb(a),v=Math.abs(p)<s,g=p<0&&e()<.16,_=a[2]>.02&&(a[0]-jh[0])**2+(a[1]-jh[1])**2+(a[2]-jh[2])**2<.03&&p<.05;(v||g||_)&&(t[u*3]=a[0]*1.22,t[u*3+1]=a[1]*1.22,t[u*3+2]=a[2]*1.22,h=!0)}if(!h){const f=c();if(f.kind==="e"){const p=e()*2-1,v=e()*gt,g=Math.cbrt(e()),_=Math.sqrt(1-p*p);t[u*3]=(f.c[0]+_*Math.cos(v)*g*f.r[0])*1.22,t[u*3+1]=(f.c[1]+p*g*f.r[1])*1.22,t[u*3+2]=(f.c[2]+_*Math.sin(v)*g*f.r[2])*1.22}else{const p=e(),v=e()*gt,g=Math.sqrt(e())*f.r;t[u*3]=(f.a[0]+(f.b[0]-f.a[0])*p+Math.cos(v)*g)*1.22,t[u*3+1]=(f.a[1]+(f.b[1]-f.a[1])*p)*1.22,t[u*3+2]=(f.a[2]+(f.b[2]-f.a[2])*p+Math.sin(v)*g)*1.22}}}return t}const _b=`
  attribute vec3 aTarget;
  attribute float aSeed;
  uniform float uMorph;
  uniform float uTime;
  uniform float uBass;
  uniform float uMid;
  uniform float uHigh;
  uniform float uTalk;
  varying float vGlow;
  varying float vMix;
  float ez(float x){ return x * x * (3.0 - 2.0 * x); }
  void main(){
    float m = clamp(uMorph * 1.35 - aSeed * 0.35, 0.0, 1.0);
    m = ez(m);
    vec3 cloud = position;
    float t = uTime * 0.4 + aSeed * 23.0;
    cloud += 0.55 * vec3(sin(t), cos(t * 0.8), sin(t * 0.6));
    vec3 human = aTarget;

    /* skeletal audio binding — per body band */
    float headMask = smoothstep(1.7, 1.95, aTarget.y);
    float shoulderMask = smoothstep(1.55, 1.62, aTarget.y) * (1.0 - smoothstep(1.9, 2.05, aTarget.y));
    float armMask = step(0.36, abs(aTarget.x)) * smoothstep(0.85, 1.2, aTarget.y);
    float torsoMask = smoothstep(0.9, 1.1, aTarget.y) * (1.0 - smoothstep(1.7, 1.9, aTarget.y));

    /* bass → torso breathing + head nod */
    float breath = uBass * 0.045 * sin(uTime * 3.0 + aTarget.y * 2.0);
    human.xz *= 1.0 + breath * torsoMask;
    human.y += uBass * 0.02 * headMask * sin(uTime * 2.2);

    /* mid → shoulder shrug */
    human.y += uMid * 0.035 * shoulderMask * (0.5 + 0.5 * sin(uTime * 3.4));

    /* highs → arm flare + hand shimmer */
    human.x += sign(aTarget.x) * uHigh * 0.07 * armMask;

    /* talk → jaw articulation on the facial hemisphere */
    float jaw = step(0.0, aTarget.z) * step(aTarget.y, 2.15) * headMask;
    human.y += uTalk * 0.05 * jaw * sin(uTime * 19.0 + aSeed * 40.0);

    vec3 p = mix(cloud, human, m);
    p += 0.02 * (0.3 + 0.7 * m) * vec3(
      sin(uTime * 2.0 + aSeed * 91.0),
      cos(uTime * 1.7 + aSeed * 57.0),
      sin(uTime * 2.3 + aSeed * 31.0));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float d = -mv.z;
    gl_PointSize = (1.1 + aSeed * 1.4) * (m * 1.5 + 0.65) * (150.0 / d);
    vGlow = m * (0.5 + 0.5 * sin(uTime * 2.0 + aSeed * 40.0))
      + uBass * 0.45 * torsoMask
      + uHigh * 0.9 * armMask * m;
    vMix = aSeed;
    gl_Position = projectionMatrix * mv;
  }
`,yb=`
  uniform float uMorph;
  uniform float uHigh;
  varying float vGlow;
  varying float vMix;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float a = smoothstep(0.5, 0.02, length(c));
    a *= a;
    vec3 cyan = vec3(0.0, 0.94, 1.0);
    vec3 gold = vec3(1.0, 0.72, 0.0);
    vec3 col = mix(cyan, gold, step(0.93, fract(vMix * 5.17)));
    col = mix(col * 0.55, col * (1.15 + vGlow) * (1.0 + uHigh * 0.3), uMorph);
    gl_FragColor = vec4(col, a * (0.34 + 0.5 * uMorph) * (0.7 + vGlow * 0.5));
  }
`;class Sb{constructor(){this.group=new gn,this.morphTarget=0;const e=wu(777),t=xb(Cs,e),i=new Float32Array(Cs*3),s=new Float32Array(Cs);for(let v=0;v<Cs;v++){const g=2.6+e()*4.6,M=e()*gt+g*.35;i[v*3]=Math.cos(M)*g,i[v*3+1]=1.1+(e()-.5)*3.2,i[v*3+2]=Math.sin(M)*g,s[v]=e()}const a=new Tt;a.setAttribute("position",new vt(i,3)),a.setAttribute("aTarget",new vt(t,3)),a.setAttribute("aSeed",new vt(s,1)),this.mat=new Ot({uniforms:{uMorph:{value:0},uTime:{value:0},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uTalk:{value:0}},vertexShader:_b,fragmentShader:yb,transparent:!0,depthWrite:!1,blending:Wt});const c=new Fs(a,this.mat);c.frustumCulled=!1,this.group.add(c);const u=[[0,2.42,0],[0,2.2,0],[0,1.98,0],[0,1.72,0],[0,1.46,0],[0,1.16,0],[0,.92,0],[.41,1.98,0],[-.41,1.98,0],[.52,1.56,.05],[-.52,1.56,.05],[.45,1.16,.09],[-.45,1.16,.09],[.17,.62,.02],[-.17,.62,.02],[.16,.12,0],[-.16,.12,0]],h=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[2,7],[2,8],[7,9],[8,10],[9,11],[10,12],[6,13],[6,14],[13,15],[14,16],[13,14],[3,4]],f=[];for(const[v,g]of h){const _=u[v],M=u[g],b=6;for(let x=0;x<b;x++){const S=x/b,P=(x+1)/b;f.push(_[0]+(M[0]-_[0])*S,_[1]+(M[1]-_[1])*S,_[2]+(M[2]-_[2])*S,_[0]+(M[0]-_[0])*P,_[1]+(M[1]-_[1])*P,_[2]+(M[2]-_[2])*P)}}for(let v=0;v<300;v++){const g=Math.floor(e()*Cs)*3,_=Math.floor(e()*Cs)*3,M=t[g],b=t[g+1],x=t[g+2],S=t[_],P=t[_+1],L=t[_+2],C=(M-S)**2+(b-P)**2+(x-L)**2;C<.09&&C>.004&&f.push(M,b,x,S,P,L)}const p=new Tt;p.setAttribute("position",new vt(new Float32Array(f),3)),this.beamMat=new Ho({color:61695,transparent:!0,opacity:0,blending:Wt,depthWrite:!1,toneMapped:!1}),this.beams=new el(p,this.beamMat),this.beams.frustumCulled=!1,this.group.add(this.beams),this.group.position.y=.02}setMorphTarget(e){this.morphTarget=_t(e,0,1)}morphValue(){return this.mat.uniforms.uMorph.value}update(e,t,i){this.mat.uniforms.uMorph.value=Dt(this.mat.uniforms.uMorph.value,this.morphTarget,1.7,e),this.mat.uniforms.uTime.value=t,this.mat.uniforms.uBass.value=i.bass,this.mat.uniforms.uMid.value=i.mid,this.mat.uniforms.uHigh.value=i.high,this.mat.uniforms.uTalk.value=i.talk,this.beamMat.opacity=this.morphValue()*(.16+i.level*.22),this.group.rotation.y=Math.sin(t*.23)*.3*this.morphValue()}}const xv=Array.from({length:8},(o,e)=>e/8*gt+gt/16),Hc=4.6,_v=6.4;class Mb{constructor(){this.group=new gn,this.agentsGroup=new gn,this.wp=[],this.adj=new Map,this.agents=[],this.screens=[],this.sweep=null,this.briefing=0,this.schedAcc=0,this.syncAcc=0,this.warnPulse=0,this.rosterVersion=-1,this.hemi=null,this.key=null,this.rim=null,this.lightMul=1,this.holoMul=1,this.screenMats=[],this.glowMats=[],this.localMat=null,this.corridorNodes=[],this.approachNodes=[],this.centerNodes=[],this.patrolIdx=0,this.floorMat=null,this.deskPositions=[],this.buildGraph(),this.buildEnvironment(),this.tableHolo=new ut,this.tableGlow=new xi,this.buildTable(),this.group.add(this.agentsGroup),Pt.on("SYSTEM_WARNING",()=>{this.warnPulse=1}),Pt.on("AGENT_TASK_ASSIGNED",({agentId:e,task:t})=>{const i=this.agents.find(s=>s.def.id===e);i&&(i.task=t,i.progress=0)})}bindLights(e,t,i){this.hemi=e,this.key=t,this.rim=i}setLighting(e){this.lightMul=_t(e,0,3),this.hemi&&(this.hemi.intensity=.75*this.lightMul),this.key&&(this.key.intensity=1.5*this.lightMul),this.rim&&(this.rim.intensity=.8*this.lightMul)}setMaterials(e){this.holoMul=_t(e.holoOpacity,0,1);for(const t of this.screenMats)t.opacity=.96*Math.max(.08,this.holoMul);for(const t of this.glowMats)t.emissiveIntensity=1.5*(.35+this.holoMul)}setParticles(e){this.localMat&&(this.localMat.uniforms.uDensity.value=_t(e.density,0,1))}buildGraph(){let e=0;const t=(a,c)=>(this.wp.push({id:e,pos:new V(a,0,c)}),this.adj.set(e,[]),e++),i=(a,c)=>{var u,h;(u=this.adj.get(a))==null||u.push(c),(h=this.adj.get(c))==null||h.push(a)},s=[];for(let a=0;a<16;a++){const c=a/16*gt;s.push(t(Math.cos(c)*Hc,Math.sin(c)*Hc))}for(let a=0;a<16;a++)i(s[a],s[(a+1)%16]);this.approachNodes=[];for(let a=0;a<8;a++){const c=xv[a],u=t(Math.cos(c)*(Hc+.95),Math.sin(c)*(Hc+.95));this.approachNodes.push(u);const h=Math.round(c/gt*16)%16;i(u,s[h]),i(u,s[(h+15)%16])}this.centerNodes=[];for(let a=0;a<3;a++){const c=a/3*gt+.5,u=t(Math.cos(c)*1.15,Math.sin(c)*1.15);this.centerNodes.push(u)}i(this.centerNodes[0],this.centerNodes[1]),i(this.centerNodes[1],this.centerNodes[2]),i(this.centerNodes[2],this.centerNodes[0]);for(let a=0;a<3;a++)i(this.centerNodes[a],s[(a*5+2)%16]),i(this.centerNodes[a],s[(a*5+3)%16]);this.corridorNodes=s}findPath(e,t){if(e===t)return[this.wp[t].pos.clone()];const i=new Map,s=new Map,a=new Set;i.set(e,0);for(let h=0;h<this.wp.length*4;h++){let f=-1,p=1/0;for(const[v,g]of i)!a.has(v)&&g<p&&(p=g,f=v);if(f===-1||f===t)break;a.add(f);for(const v of this.adj.get(f)??[]){const g=this.wp[f].pos.distanceTo(this.wp[v].pos),_=p+g;_<(i.get(v)??1/0)&&(i.set(v,_),s.set(v,f))}}const c=[];let u=t;for(;u!==void 0&&u!==e;)c.push(this.wp[u].pos.clone()),u=s.get(u);return c.reverse()}nearestNode(e){let t=0,i=1/0;for(const s of this.wp){const a=s.pos.distanceToSquared(e);a<i&&(i=a,t=s.id)}return t}buildEnvironment(){const e=new Ot({uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vP;
        void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
        uniform float uTime; varying vec2 vP;
        void main(){
          float d = length(vP);
          vec2 g = abs(fract(vP * 0.5) - 0.5);
          float minor = smoothstep(0.03, 0.0, min(g.x, g.y)) * 0.16;
          vec2 gm = abs(fract(vP * 0.1) - 0.5);
          float major = smoothstep(0.02, 0.0, min(gm.x, gm.y)) * 0.3;
          float ring = smoothstep(0.06, 0.0, abs(d - mod(uTime * 1.4, 17.0))) * 0.22;
          float fade = 1.0 - smoothstep(9.0, 15.5, d);
          vec3 col = vec3(0.043, 0.043, 0.055)
            + vec3(0.0, 0.94, 1.0) * (minor + ring) * fade
            + vec3(0.83, 0.69, 0.22) * major * fade * 0.55;
          gl_FragColor = vec4(col, 1.0);
        }`}),t=new ut(new jo(34,34),e);t.rotation.x=-Math.PI/2,t.position.y=-.01,this.group.add(t),this.floorMat=e;for(let a=0;a<8;a++){const c=a/8*gt,u=new ut(new fn(.14,2.7,.14),new Ai({color:1052694,metalness:.9,roughness:.35}));u.position.set(Math.cos(c)*8.8,1.35,Math.sin(c)*8.8);const h=new ut(new fn(.2,.09,.2),new Ai({color:271658,emissive:61695,emissiveIntensity:1.6,metalness:.4,roughness:.4}));h.position.set(Math.cos(c)*8.8,2.72,Math.sin(c)*8.8),this.group.add(u,h)}const i=[];for(let a=0;a<=64;a++){const c=a/64*gt;i.push(new V(Math.cos(c)*8.8,.03,Math.sin(c)*8.8))}const s=new Ls(new Tt().setFromPoints(i),new Ho({color:61695,transparent:!0,opacity:.18,blending:Wt}));this.group.add(s);for(let a=0;a<8;a++)this.buildDesk(a);this.buildLocalParticles()}buildLocalParticles(){const t=new Float32Array(4200),i=new Float32Array(1400);for(let c=0;c<1400;c++){const u=Math.random()*gt,h=1.2+Math.random()*8.4;t[c*3]=Math.cos(u)*h,t[c*3+1]=Math.random()*3.4,t[c*3+2]=Math.sin(u)*h,i[c]=Math.random()}const s=new Tt;s.setAttribute("position",new vt(t,3)),s.setAttribute("aSeed",new vt(i,1)),this.localMat=new Ot({uniforms:{uTime:{value:0},uDensity:{value:.85}},vertexShader:`
        attribute float aSeed;
        uniform float uTime; uniform float uDensity;
        varying float vA;
        void main(){
          vec3 p = position;
          float speed = 0.15 + aSeed * 0.35;
          p.y = mod(p.y + uTime * speed, 3.4);
          p.x += sin(uTime * 0.6 + aSeed * 40.0) * 0.25;
          p.z += cos(uTime * 0.5 + aSeed * 31.0) * 0.25;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (1.0 + aSeed * 1.6) * (120.0 / -mv.z);
          vA = step(aSeed, uDensity) * (0.35 + 0.65 * aSeed) * smoothstep(3.4, 2.6, p.y);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying float vA;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float a = smoothstep(0.5, 0.05, length(c));
          gl_FragColor = vec4(vec3(0.0, 0.9, 1.0) * 0.8 + vec3(0.83, 0.69, 0.22) * 0.4, a * a * vA * 0.5);
        }`,transparent:!0,depthWrite:!1,blending:Wt});const a=new Fs(s,this.localMat);a.frustumCulled=!1,this.group.add(a)}buildDesk(e){var P;const t=xv[e],i=new gn,s=Math.cos(t)*_v,a=Math.sin(t)*_v;i.position.set(s,0,a),i.lookAt(0,0,0);const c=new Ai({color:1184282,metalness:.88,roughness:.34}),u=new ut(new fn(1.6,.06,.72),c);u.position.y=.94;const h=new ut(new fn(.06,.94,.6),c);h.position.set(-.72,.47,0);const f=h.clone();f.position.x=.72,i.add(u,h,f);const p=document.createElement("canvas");p.width=256,p.height=150;const v=p.getContext("2d"),g=new Yv(p);g.colorSpace=ai;const _=((P=Me.getState().agentDefs[e])==null?void 0:P.role)??"CODER";v&&this.screens.push({ctx:v,tex:g,role:_,acc:Math.random()*.2,seed:Math.random()*100});const M=new xi({map:g,transparent:!0,opacity:.96,toneMapped:!1,side:Ci});this.screenMats.push(M);const b=new ut(new jo(1.24,.72),M);b.position.set(0,1.62,-.12),b.rotation.x=-.12,i.add(b);const x=new Ai({color:271658,emissive:61695,emissiveIntensity:1.5,metalness:.4,roughness:.4});this.glowMats.push(x);const S=new ut(new fn(1.3,.02,.05),x);S.position.set(0,.975,.34),i.add(S),this.group.add(i),this.deskPositions.push(new V(s,0,a))}buildTable(){const e=new Ai({color:1184282,metalness:.9,roughness:.3}),t=new ut(new Xo(1.05,1.2,.1,32),e);t.position.y=.88;const i=new ut(new Xo(.24,.4,.85,16),e);i.position.y=.42;const s=new ut(new yu(1.06,.025,8,48),new Ai({color:2892296,emissive:13938487,emissiveIntensity:1.4,metalness:.85,roughness:.3}));s.rotation.x=Math.PI/2,s.position.y=.93,this.tableGlow=new xi({color:61695,wireframe:!0,transparent:!0,opacity:.4,blending:Wt,depthWrite:!1,toneMapped:!1}),this.tableHolo=new ut(new yp(.55,1),this.tableGlow),this.tableHolo.position.y=1.75,this.group.add(t,i,s,this.tableHolo)}buildRoster(e){for(this.rosterVersion++;this.agentsGroup.children.length>0;){const t=this.agentsGroup.children[0];this.agentsGroup.remove(t)}this.agents=[],this.sweep=null,e.forEach((t,i)=>{const s=this.screens[i];s&&(s.role=t.role)}),e.forEach((t,i)=>{const s=this.buildBody(t),a=this.approachNodes[t.workstation%this.approachNodes.length];s.group.position.copy(this.wp[a].pos),this.agentsGroup.add(s.group);const c={def:t,body:s,mode:"WORKING",modeAfterTransit:"WORKING",path:[],pathIdx:0,velocity:new V,yaw:Math.atan2(-s.group.position.x,-s.group.position.z),task:Bc(Yc[t.role]),progress:Math.random()*55,dwell:0,scanAng:0,briefTimer:0,moveAmount:0};if(s.group.rotation.y=c.yaw,this.agents.push(c),t.role==="SECURITY"){const u=new ut(new xp(1.5,4.4,24,1,!0),new xi({color:16724787,transparent:!0,opacity:.1,blending:Wt,depthWrite:!1,side:Ci,toneMapped:!1}));u.rotation.x=Math.PI/2,u.position.set(0,1.1,2.2),s.group.add(u),this.sweep=u,c.mode="SCANNING",this.sendToPatrol(c)}i===0&&(c.dwell=3)})}buildBody(e){const t=new gn,i=new We(e.color),s=new Ai({color:1513247,metalness:.62,roughness:.46,flatShading:!0}),a=new Ai({color:921108,metalness:.7,roughness:.4,flatShading:!0}),c=new Ai({color:657934,emissive:i,emissiveIntensity:2,metalness:.4,roughness:.4}),u=new Ai({color:328968,emissive:i,emissiveIntensity:2.6,metalness:.2,roughness:.3}),h=new ut(new fn(.32,.2,.2),a);h.position.y=.92;const f=new ut(new fn(.42,.52,.24),s);f.position.y=1.3;const p=new ut(new fn(.3,.06,.03),c);p.position.set(0,1.38,.13);const v=new ut(new _p(.15,0),s);v.position.y=1.76;const g=new ut(new fn(.2,.05,.03),u);g.position.set(0,1.77,.13),t.add(h,f,p,v,g);const _=(K,te,Y)=>{const ae=new ut(new fn(K,te,K),Y);return ae.position.y=-te/2,ae},M=(K,te)=>{const Y=new gn;return Y.position.set(K,te,0),t.add(Y),Y},b=M(.1,.86);b.add(_(.11,.42,a));const x=new gn;x.position.y=-.42,b.add(x),x.add(_(.09,.4,s));const S=new ut(new fn(.12,.06,.24),a);S.position.set(0,-.42,.05),x.add(S);const P=M(-.1,.86);P.add(_(.11,.42,a));const L=new gn;L.position.y=-.42,P.add(L),L.add(_(.09,.4,s));const C=S.clone();C.position.set(0,-.42,.05),L.add(C);const D=M(.27,1.52);D.add(_(.09,.3,s));const I=new gn;I.position.y=-.3,D.add(I),I.add(_(.08,.28,a));const O=new ut(new fn(.09,.1,.09),c);O.position.y=-.3,I.add(O);const w=M(-.27,1.52);w.add(_(.09,.3,s));const R=new gn;R.position.y=-.3,w.add(R),R.add(_(.08,.28,a));const F=O.clone();F.position.y=-.3,R.add(F);const B=new ut(new fn(.13,.1,.16),c);B.position.set(.26,1.53,0);const z=B.clone();return z.position.x=-.26,t.add(B,z),{group:t,thighL:b,thighR:P,shinL:x,shinR:L,armL:D,armR:w,foreL:I,foreR:R,head:v,visorMat:u,phase:Math.random()*gt}}sendToDesk(e){const t=this.nearestNode(e.body.group.position),i=this.approachNodes[e.def.workstation%this.approachNodes.length];e.path=this.findPath(t,i),e.pathIdx=0,e.mode="TRANSIT",e.modeAfterTransit="WORKING",this.announce(e,"TRANSIT")}sendToBriefing(e){const t=this.nearestNode(e.body.group.position),i=this.centerNodes[Math.floor(Math.random()*this.centerNodes.length)];e.path=this.findPath(t,i),e.pathIdx=0,e.mode="TRANSIT",e.modeAfterTransit="BRIEFING",e.briefTimer=$a(6,10),this.announce(e,"TRANSIT")}sendToPatrol(e){this.patrolIdx=(this.patrolIdx+3)%this.corridorNodes.length;const t=this.nearestNode(e.body.group.position);e.path=this.findPath(t,this.corridorNodes[this.patrolIdx]),e.pathIdx=0,e.mode="TRANSIT",e.modeAfterTransit="SCANNING"}announce(e,t){Pt.emit("AGENT_STATUS_CHANGED",{agentId:e.def.id,status:t})}triggerBriefing(){this.briefing=9;for(const t of this.agents)t.def.role!=="SECURITY"&&this.sendToBriefing(t);Me.getState().pushLog("info","SWARM","briefing convened — mission synthesis at the strategy table")}getAgentPosition(e){const t=this.agents.find(i=>i.def.id===e);return t?t.body.group.position:null}getDeskPosition(e){const t=this.agents.find(i=>i.def.id===e);return t?this.deskPositions[t.def.workstation%this.deskPositions.length]??null:null}getAgentMode(e){const t=this.agents.find(i=>i.def.id===e);return t?t.mode:null}updateSimOnly(e){this.update(e,0)}update(e,t){const i=Me.getState();if((i.agentDefs.length!==this.agents.length||i.agentDefs.some((s,a)=>{var c;return((c=this.agents[a])==null?void 0:c.def.id)!==s.id}))&&this.buildRoster(i.agentDefs),this.floorMat&&(this.floorMat.uniforms.uTime.value=t),this.localMat&&(this.localMat.uniforms.uTime.value=t),this.tableHolo.rotation.y+=e*.5,this.tableHolo.rotation.x=Math.sin(t*.4)*.2,this.tableGlow.opacity=.3+(this.briefing>0?.45:0)+Math.sin(t*2)*.05,this.briefing=Math.max(0,this.briefing-e),this.warnPulse=Math.max(0,this.warnPulse-e*.5),this.schedAcc+=e,this.schedAcc>1.6){this.schedAcc=0;const s=this.agents.filter(c=>c.mode==="WORKING");if(s.length>0&&this.briefing<=0){const c=Bc(s),u=Math.random();if(c.def.role==="SECURITY")this.sendToPatrol(c);else if(u<c.def.personality.sociability*.14)this.sendToBriefing(c);else if(c.def.role==="RESEARCHER"&&u<.3){const h=this.nearestNode(c.body.group.position),f=this.approachNodes[Math.floor(Math.random()*this.approachNodes.length)];c.path=this.findPath(h,f),c.pathIdx=0,c.mode="TRANSIT",c.modeAfterTransit="WORKING"}}const a=this.agents.filter(c=>c.mode==="SCANNING");for(const c of a)c.path.length===0&&Math.random()<.5&&this.sendToPatrol(c),Math.random()<.12&&this.sendToDesk(c)}for(const s of this.agents){const a=1.9*s.def.speed,c=s.body.group.position;if(s.mode==="TRANSIT"){const p=s.path[s.pathIdx];if(!p){s.mode=s.modeAfterTransit,this.announce(s,s.mode);continue}const v=p.clone().sub(c);v.y=0;const g=v.length(),_=Math.min(a,g*2.4+.15);g>.001&&v.normalize();const M=v.multiplyScalar(_),b=_>a*.7?5:8;s.velocity.x=Dt(s.velocity.x,M.x,b,e),s.velocity.z=Dt(s.velocity.z,M.z,b,e);for(const x of this.agents){if(x===s)continue;const S=c.x-x.body.group.position.x,P=c.z-x.body.group.position.z,L=S*S+P*P;if(L<.81&&L>1e-4){const C=Math.sqrt(L),D=(.9-C)/C*1.6;s.velocity.x+=S*D*e*8,s.velocity.z+=P*D*e*8}}if(c.addScaledVector(s.velocity,e),s.velocity.lengthSq()>.01){let S=Math.atan2(s.velocity.x,s.velocity.z)-s.yaw;for(;S>Math.PI;)S-=gt;for(;S<-Math.PI;)S+=gt;s.yaw+=S*Math.min(1,e*9)}s.moveAmount=_t(s.velocity.length()/a,0,1),g<.14&&(s.pathIdx++,s.pathIdx>=s.path.length&&(s.mode=s.modeAfterTransit,s.velocity.set(0,0,0),this.announce(s,s.mode),s.mode==="WORKING"&&(s.task=Bc(Yc[s.def.role]),Pt.emit("AGENT_TASK_ASSIGNED",{agentId:s.def.id,task:s.task}))))}else if(s.moveAmount=Dt(s.moveAmount,0,8,e),s.mode==="WORKING"){const p=this.deskPositions[s.def.workstation%this.deskPositions.length];if(p){let g=Math.atan2(p.x-c.x,p.z-c.z)-s.yaw;for(;g>Math.PI;)g-=gt;for(;g<-Math.PI;)g+=gt;s.yaw+=g*Math.min(1,e*5)}s.progress+=e*(3.2+s.def.personality.drive*4.5),s.progress>=100&&(s.progress=0,s.task=Bc(Yc[s.def.role]),Pt.emit("AGENT_TASK_ASSIGNED",{agentId:s.def.id,task:s.task}),s.dwell+=1,this.briefing<=0&&Math.random()<s.def.personality.sociability*.2&&this.sendToBriefing(s))}else if(s.mode==="BRIEFING"){let v=Math.atan2(-c.x,-c.z)-s.yaw;for(;v>Math.PI;)v-=gt;for(;v<-Math.PI;)v+=gt;s.yaw+=v*Math.min(1,e*4),s.briefTimer-=e,s.briefTimer<=0&&this.briefing<=0&&this.sendToDesk(s)}else s.mode==="SCANNING"&&(s.scanAng+=e*(1.4+this.warnPulse*3),s.yaw=Math.atan2(Math.sin(s.scanAng),Math.cos(s.scanAng))*0+s.scanAng*0+this.patrolYaw(s),this.sweep&&s.def.role==="SECURITY"&&(this.sweep.material.opacity=.08+this.warnPulse*.16+Math.sin(t*3)*.02),s.path.length===0&&this.sendToPatrol(s));const u=s.body;u.group.rotation.y=s.yaw,u.phase+=e*(4+s.moveAmount*7);const h=s.moveAmount,f=Math.sin(u.phase)*.6*h;u.thighL.rotation.x=f,u.thighR.rotation.x=-f,u.shinL.rotation.x=Math.max(0,-Math.sin(u.phase))*.7*h,u.shinR.rotation.x=Math.max(0,Math.sin(u.phase))*.7*h,s.mode==="WORKING"?(u.armL.rotation.x=Dt(u.armL.rotation.x,-1.15+Math.sin(t*21+u.phase)*.07,8,e),u.armR.rotation.x=Dt(u.armR.rotation.x,-1.15+Math.cos(t*19+u.phase)*.07,8,e),u.foreL.rotation.x=Dt(u.foreL.rotation.x,-.5,8,e),u.foreR.rotation.x=Dt(u.foreR.rotation.x,-.5,8,e)):s.mode==="BRIEFING"?(u.armL.rotation.x=Dt(u.armL.rotation.x,.25,6,e),u.armR.rotation.x=Dt(u.armR.rotation.x,.25,6,e),u.foreL.rotation.x=Dt(u.foreL.rotation.x,.3,6,e),u.foreR.rotation.x=Dt(u.foreR.rotation.x,.3,6,e),s.def.role==="EXECUTIVE"&&(u.head.rotation.x=Math.sin(t*2.2)*.12)):(u.armL.rotation.x=Dt(u.armL.rotation.x,Math.sin(u.phase)*.35*h,8,e),u.armR.rotation.x=Dt(u.armR.rotation.x,-Math.sin(u.phase)*.35*h,8,e),u.foreL.rotation.x=Dt(u.foreL.rotation.x,-.12,8,e),u.foreR.rotation.x=Dt(u.foreR.rotation.x,-.12,8,e)),u.group.position.y=Math.abs(Math.sin(u.phase))*.05*h+(s.mode==="WORKING"?Math.sin(t*1.4+u.phase)*.008:0),u.visorMat.emissiveIntensity=2.2+(s.mode==="SCANNING"?this.warnPulse*2.5+Math.sin(t*6)*.5:0)}for(let s=0;s<this.screens.length;s++){const a=this.screens[s],c=this.agents[s];if(a.acc+=e,a.acc>.16){a.acc=0;const u=c&&c.mode==="WORKING"?1:.45;this.drawScreen(a,t,u),a.tex.needsUpdate=!0}}if(this.syncAcc+=e,this.syncAcc>.35){this.syncAcc=0;const s=this.agents.map(a=>({...a.def,personality:{...a.def.personality},status:a.mode,task:a.task,progress:Math.floor(a.progress),load:Math.floor(_t(25+a.progress*.5+a.def.personality.drive*30+(a.mode==="TRANSIT"?12:0),5,99)),mood:a.mode==="SCANNING"?"VIGILANT":a.progress>75?"INTENSE":a.mode==="BRIEFING"?"ALIGNED":a.def.personality.focus>.75?"FOCUSED":"NOMINAL"}));i.setRosterRuntime(s)}}patrolYaw(e){const t=e.path[e.pathIdx];return t?Math.atan2(t.x-e.body.group.position.x,t.z-e.body.group.position.z):e.yaw}drawScreen(e,t,i){const{ctx:s}=e,a=256,c=150;s.fillStyle="rgba(4, 8, 12, 0.94)",s.fillRect(0,0,a,c);const u=t+e.seed;switch(s.globalAlpha=.25+i*.75,e.role){case"CODER":{s.font="8px monospace";for(let h=0;h<14;h++){const f=14+h*10,p=40+(Math.sin(u*3+h*7.3)+1)/2*160;s.fillStyle=h%5===0?"#d4af37":"#00f0ff",s.globalAlpha=(.2+i*.7)*(.4+.6*Math.abs(Math.sin(h*3.1+u))),s.fillRect(10+h%3*8,f-6,p,4)}break}case"ANALYST":{s.strokeStyle="#7ad7ff",s.lineWidth=1.4,s.beginPath();for(let h=0;h<=a;h+=6){const f=c/2+Math.sin(h*.05+u*2)*26+Math.sin(h*.013+u)*18;h===0?s.moveTo(h,f):s.lineTo(h,f)}s.stroke(),s.fillStyle="#00ff66";for(let h=0;h<9;h++){const f=8+(Math.sin(u*1.7+h*2.4)+1)/2*40;s.fillRect(16+h*26,c-16-f,12,f)}break}case"SECURITY":{s.strokeStyle="#ff3333",s.lineWidth=1.2,s.beginPath(),s.arc(a/2,c/2,52,0,gt),s.stroke(),s.beginPath(),s.arc(a/2,c/2,30,0,gt),s.stroke();const h=u*2.4;s.fillStyle="#ff3333",s.beginPath(),s.moveTo(a/2,c/2),s.arc(a/2,c/2,52,h,h+.7),s.closePath(),s.globalAlpha=.3*i,s.fill(),s.globalAlpha=.9,s.fillRect(a/2+Math.cos(h)*40-2,c/2+Math.sin(h)*40-2,4,4);break}case"RESEARCHER":{s.font="8px monospace",s.fillStyle="#00f0ff";for(let h=0;h<3;h++)for(let f=0;f<12;f++){const p=20+(Math.sin(u*5+f*4.7+h*9)+1)/2*46;s.globalAlpha=.25+i*.6,s.fillRect(12+h*82,14+f*11,p,4)}break}case"CREATIVE":{s.strokeStyle="#ff7ad9",s.lineWidth=1.3;const h=a/2,f=c/2,p=34;for(let v=0;v<8;v++){const g=u+v/8*gt,_=u+(v+3)/8*gt;s.beginPath(),s.moveTo(h+Math.cos(g)*p,f+Math.sin(g)*p*.7),s.lineTo(h+Math.cos(_)*p,f+Math.sin(_)*p*.7),s.stroke()}break}case"AUTOMATION":{s.strokeStyle="#ffb700",s.fillStyle="#ffb700";for(let h=0;h<5;h++){const f=26+h*50;s.strokeRect(f,60,26,26),h<4&&(s.beginPath(),s.moveTo(f+26,73),s.lineTo(f+50,73),s.stroke());const p=f+(u*40+h*20)%24;s.globalAlpha=.9*i,s.fillRect(p+1,71,5,5),s.globalAlpha=.25+i*.7}break}case"STRATEGIST":{s.strokeStyle="#d4af37",s.fillStyle="#d4af37";const h=[[a/2,30],[70,80],[a/2,95],[a-70,80],[100,128],[a-100,128]];for(let f=1;f<h.length;f++)s.beginPath(),s.moveTo(h[0][0],h[0][1]),s.lineTo(h[f][0],h[f][1]),s.globalAlpha=.3,s.stroke();for(let f=0;f<h.length;f++)s.globalAlpha=.5+.5*Math.abs(Math.sin(u*2+f)),s.fillRect(h[f][0]-3,h[f][1]-3,6,6);break}case"EXECUTIVE":{s.font="bold 17px monospace",s.fillStyle="#e0e6ed",s.globalAlpha=.9,s.fillText(`${Math.floor(87+Math.sin(u)*6)}%`,20,44),s.font="8px monospace",s.fillStyle="#d4af37";for(let h=0;h<4;h++){const f=60+(Math.sin(u*1.2+h*2)+1)/2*120;s.fillRect(20,66+h*20,f,8)}break}}s.globalAlpha=1,s.fillStyle="rgba(0, 240, 255, 0.05)",s.fillRect(0,u*60%c,a,2)}}const Xa=1400;class Eb{constructor(){this.group=new gn,this.nodePos=[],this.nodeLayer=[],this.edges=[],this.outEdges=new Map,this.baseColors=[],this.packets=[],this.arrivals=0,this.arrivalWindow=[],this.tmpColor=new We,this.gold=new We("#ffb700"),this.cyan=new We("#00f0ff"),this.density=1;const e=wu(4242);for(let h=0;h<pr.length;h++){const f=pr[h],p=-10+h/(pr.length-1)*20;for(let v=0;v<f;v++){const g=v*2.399963,_=.42+1.75*Math.sqrt((v+.5)/f),M=1.7+Math.cos(g)*_*.82,b=Math.sin(g)*_+Math.sin(p*.22)*.8;this.nodePos.push(new V(p,M,b)),this.nodeLayer.push(h)}}const t=this.nodePos.length;this.activation=new Float32Array(t);let i=0;for(let h=0;h<pr.length-1;h++){const f=pr[h+1];for(let p=0;p<pr[h];p++){const v=i+p,g=2+Math.floor(e()*2);for(let _=0;_<g;_++){const M=i+pr[h]+Math.floor(e()*f);this.edges.push([v,M]);const b=this.outEdges.get(v);b?b.push(this.edges.length-1):this.outEdges.set(v,[this.edges.length-1])}}i+=pr[h]}this.nodes=new mp(new Sp(.115,12,12),new xi({transparent:!0,opacity:.95,blending:Wt,depthWrite:!1,toneMapped:!1}),t);const s=new zt;for(let h=0;h<t;h++){s.setPosition(this.nodePos[h]),this.nodes.setMatrixAt(h,s);const f=this.nodeLayer[h]/9,p=this.cyan.clone().lerp(this.gold,f*.85);this.baseColors.push(p),this.nodes.setColorAt(h,p)}this.nodes.instanceMatrix.needsUpdate=!0,this.group.add(this.nodes);const a=new Float32Array(this.edges.length*6);this.edgeColors=new Float32Array(this.edges.length*6);for(let h=0;h<this.edges.length;h++){const[f,p]=this.edges[h],v=this.nodePos[f],g=this.nodePos[p];a.set([v.x,v.y,v.z,g.x,g.y,g.z],h*6)}const c=new Tt;c.setAttribute("position",new vt(a,3)),c.setAttribute("color",new vt(this.edgeColors,3).setUsage(Ds)),this.edgeLines=new el(c,new Ho({vertexColors:!0,transparent:!0,opacity:.9,blending:Wt,depthWrite:!1,toneMapped:!1})),this.edgeLines.frustumCulled=!1,this.group.add(this.edgeLines),this.packetPos=new Float32Array(Xa*3),this.packetCol=new Float32Array(Xa*3),this.packetPos.fill(-999);const u=new Tt;u.setAttribute("position",new vt(this.packetPos,3).setUsage(Ds)),u.setAttribute("aColor",new vt(this.packetCol,3).setUsage(Ds)),this.packetPoints=new Fs(u,new Ot({vertexShader:`
          attribute vec3 aColor; varying vec3 vC;
          void main(){
            vC = aColor;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = 5.5 * (120.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }`,fragmentShader:`
          varying vec3 vC;
          void main(){
            vec2 c = gl_PointCoord - 0.5;
            float a = smoothstep(0.5, 0.0, length(c));
            gl_FragColor = vec4(vC * 1.6, a * a);
          }`,transparent:!0,depthWrite:!1,blending:Wt})),this.packetPoints.frustumCulled=!1,this.group.add(this.packetPoints);for(let h=0;h<pr.length;h++){const f=-10+h/9*20,p=new ut(new fn(.05,5.6,.05),new xi({color:61695,transparent:!0,opacity:.12,blending:Wt,depthWrite:!1,toneMapped:!1}));p.position.set(f,1.9,-3.1),this.group.add(p);const v=new ut(new fn(.16,.05,.16),new xi({color:13938487,transparent:!0,opacity:.8,toneMapped:!1}));v.position.set(f,4.72,-3.1),this.group.add(v);const g=document.createElement("canvas");g.width=256,g.height=64;const _=g.getContext("2d");if(_){_.font="bold 24px Orbitron, monospace",_.textAlign="center",_.fillStyle="#d4af37",_.fillText(String(h+1).padStart(2,"0"),34,30),_.font="bold 19px Orbitron, monospace",_.fillStyle="#e0e6ed",_.fillText(hy[h],156,30),_.fillStyle="rgba(0,240,255,0.7)",_.fillRect(14,42,228,2);const M=new Yv(g);M.colorSpace=ai;const b=new RS(new Vv({map:M,transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1}));b.position.set(f,-.75,0),b.scale.set(3.4,.85,1),this.group.add(b)}}}spawnPacket(e){this.packets.length>=Xa||this.packets.push({edge:e,t:0,speed:.55+Math.random()*.7})}setDensity(e){this.density=Math.max(.1,Math.min(3,e))}burst(e){const t=this.edges.map((i,s)=>({e:i,i:s})).filter(({e:i})=>this.nodeLayer[i[0]]===0);for(let i=0;i<e&&t.length!==0;i++){const s=t[Math.floor(Math.random()*t.length)];this.spawnPacket(s.i)}}cascade(){this.burst(46)}getStats(){const e=performance.now();return this.arrivalWindow=this.arrivalWindow.filter(t=>e-t<1500),{active:this.packets.length,throughput:this.arrivalWindow.length/1.5}}update(e,t){const i=1+Math.sin(t*1.7)*.15+Math.cos(t*3.4)*.1,s=[];for(const u of this.packets)if(u.t+=e*u.speed*1.35*i,u.t>=1){const[h,f]=this.edges[u.edge];this.activation[f]=1,this.arrivals++,this.arrivalWindow.push(performance.now());const p=this.outEdges.get(f);if(p&&this.nodeLayer[f]<9){const v=Math.random()<Math.min(.97,.85*this.density)?1+(Math.random()<.3*this.density?1:0):0;for(let g=0;g<v;g++){const _=p[Math.floor(Math.random()*p.length)];this.packets.length+s.length<Xa&&s.push({edge:_,t:0,speed:.55+Math.random()*.7})}}}else s.push(u);this.packets=s;for(let u=0;u<Xa;u++)if(u<this.packets.length){const h=this.packets[u],[f,p]=this.edges[h.edge],v=this.nodePos[f],g=this.nodePos[p],_=h.t,M=Math.sin(_*Math.PI)*.22*i;this.packetPos[u*3]=v.x+(g.x-v.x)*_,this.packetPos[u*3+1]=v.y+(g.y-v.y)*_+M,this.packetPos[u*3+2]=v.z+(g.z-v.z)*_;const b=this.nodeLayer[p]/9;this.tmpColor.copy(this.cyan).lerp(this.gold,b),this.packetCol[u*3]=this.tmpColor.r,this.packetCol[u*3+1]=this.tmpColor.g,this.packetCol[u*3+2]=this.tmpColor.b}else this.packetPos[u*3+1]=-999;this.packetPoints.geometry.getAttribute("position").needsUpdate=!0,this.packetPoints.geometry.getAttribute("aColor").needsUpdate=!0;const a=Math.exp(-e*1.7);for(let u=0;u<this.activation.length;u++){this.activation[u]*=a;const h=this.activation[u];h>.02?(this.tmpColor.copy(this.baseColors[u]).lerp(this.gold,_t(h,0,1)),this.tmpColor.multiplyScalar(1+h*2.2),this.nodes.setColorAt(u,this.tmpColor)):h<=.02&&this.activation[u]!==0&&(this.activation[u]=0,this.nodes.setColorAt(u,this.baseColors[u]))}this.nodes.instanceColor&&(this.nodes.instanceColor.needsUpdate=!0);const c=.05+Math.sin(t*1.3)*.015+Math.cos(t*2.7)*.008;for(let u=0;u<this.edges.length;u++){const[h,f]=this.edges[u],p=_t(Math.max(this.activation[h],this.activation[f]),0,1),v=this.cyan.r*c+this.gold.r*p*.9,g=this.cyan.g*c+this.gold.g*p*.9,_=this.cyan.b*c+this.gold.b*p*.9;this.edgeColors[u*6]=v,this.edgeColors[u*6+1]=g,this.edgeColors[u*6+2]=_,this.edgeColors[u*6+3]=v,this.edgeColors[u*6+4]=g,this.edgeColors[u*6+5]=_}this.edgeLines.geometry.getAttribute("color").needsUpdate=!0}}class Tb{constructor(){this.last=performance.now(),this.ema=16.7,this.fps=60,this.frameMs=16.7,this.history=[],this.cap=140}tick(){const e=performance.now(),t=e-this.last;this.last=e,t>0&&t<500&&(this.ema=this.ema*.92+t*.08,this.frameMs=this.ema,this.fps=1e3/this.ema),this.history.push(this.frameMs),this.history.length>this.cap&&this.history.shift()}}class wb{constructor(){this.cap=90,this.power=[],this.temp=[],this.packets=[],this.latency=[],this.throughput=[]}push(e){const t=(i,s)=>{i.push(s),i.length>this.cap&&i.shift()};t(this.power,e.power),t(this.temp,e.temp),t(this.packets,e.packets),t(this.latency,e.latency),t(this.throughput,e.throughput)}clear(){this.power.length=0,this.temp.length=0,this.packets.length=0,this.latency.length=0,this.throughput.length=0}}class bb{constructor(){this.budgetMs=8.33,this.usage=0}report(e){this.usage=Math.min(1.5,e/this.budgetMs)}headroom(){return`${Math.max(0,Math.round((1-this.usage)*100))}%`}}const Wc={core:{center:new V(0,2.4,0),dist:10.2,pitch:.32},agents:{center:new V(0,.8,0),dist:12.6,pitch:.74},intel:{center:new V(0,1.35,0),dist:5.8,pitch:.12},network:{center:new V(0,1.8,0),dist:15.5,pitch:.2},missions:{center:new V(0,2.2,0),dist:12.5,pitch:.42},memory:{center:new V(0,2.2,0),dist:12.5,pitch:.42}};class Ab{constructor(e){this.bokeh=null,this.scene=new Bv,this.lastFrameMs=0,this.time=0,this.simTime=0,this.raf=0,this.fps=new Tb,this.statsAcc=0,this.resScale=1,this.resAcc=0,this.disposed=!1,this.pos=new V(0,3.4,10.8),this.look=new V(0,2.4,0),this.fov=50,this.yaw=0,this.pitch=.32,this.dist=10.2,this.center=new V(0,2.4,0),this.shake=0,this.shotOverride=null,this.lastCoreState="",this.lastTab="core",this.dragging=!1,this.lastPointer={x:0,y:0},this.unsubscribers=[],this.lastTint="",this.lastEmissive=-1,this.warnedOnce=new Set,this.lastGeometry="",this.lastChrome="",this.onFrame=null,this.canvas=e,this.renderer=new Ww({canvas:e,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.toneMapping=vu,this.renderer.toneMappingExposure=1,this.camera=new gi(50,1,.1,220),this.camera.position.copy(this.pos),this.scene.fog=new fp(328967,.024),this.scene.background=new We(328967);const t=new Hf(this.renderer),i=new tb;this.scene.environment=t.fromScene(i,.04).texture,t.dispose(),this.scene.environmentIntensity=.42,this.hemiLight=new GS(2437706,328967,.75),this.keyLight=new Hg(16769968,1.5),this.keyLight.position.set(7,11,5),this.rimLight=new Hg(61695,.8),this.rimLight.position.set(-8,4,-7),this.scene.add(this.hemiLight,this.keyLight,this.rimLight),this.arc=new sb,this.beam=new ub,this.ambient=new pb,this.humanoid=new Sb,this.office=new Mb,this.net=new Eb,this.scene.add(this.arc.group,this.beam.group,this.ambient.group,this.humanoid.group,this.office.group,this.net.group),this.beam.group.visible=!1,this.humanoid.group.visible=!1,this.office.group.visible=!1,this.net.group.visible=!1,this.safeCall(this.office,"bindLights",this.hemiLight,this.keyLight,this.rimLight);const s=new Hn(2,2,{samples:4,type:Kn});this.composer=new Kw(this.renderer,s),this.composer.addPass(new Zw(this.scene,this.camera));try{this.bokeh=new Jw(this.scene,this.camera,{focus:10,aperture:16e-5,maxblur:.0045}),this.bokeh.enabled=!1,this.composer.addPass(this.bokeh)}catch(c){console.warn("[vortex] BokehPass unavailable — DoF disabled.",c),this.bokeh=null}this.bloom=new $o(new et(1024,1024),.62,.42,.55),this.composer.addPass(this.bloom),this.composer.addPass(new eb),this.applySettings(!0),this.applyTab(Me.getState().tab,!0),this.resize(),this.bindPointer(),this.unsubscribers.push(Pt.on("NETWORK_SPIKE",({magnitude:c})=>{this.shake=Math.max(this.shake,.5+c*.5)}),Pt.on("AUDIO_PEAK",()=>{this.arc.pulse()}),Pt.on("CORE_STATE_CHANGED",({next:c})=>{this.arc.setState(c),this.beam.setState(c)})),this.lastFrameMs=performance.now();const a=()=>{this.disposed||(this.raf=requestAnimationFrame(a),this.update())};a()}setTab(e){this.applyTab(e,!1)}applyTab(e,t){const i=Ji.getState().coreGeometry;this.arc.group.visible=e==="core"&&i==="ARC"||e==="intel",this.arc.setArcVisible(e==="core"&&i==="ARC"),this.beam.group.visible=e==="core"&&i==="BEAM",this.office.group.visible=e==="agents",this.net.group.visible=e==="network",this.humanoid.group.visible=e==="intel",this.humanoid.setMorphTarget(e==="intel"?1:0);const s=Wc[e];this.center.copy(s.center),this.dist=Math.min(s.dist,Ji.getState().cameraLimit),this.pitch=s.pitch,e==="network"&&(this.yaw=-.55),t&&(this.pos.set(s.center.x,s.center.y+Math.sin(s.pitch)*s.dist,s.center.z+Math.cos(s.pitch)*s.dist*Math.cos(this.yaw)),this.look.copy(s.center))}requestShot(e){const t=Me.getState();switch(e.kind){case"tactical-swoop":this.shotOverride={mode:"TACTICAL",until:this.time+3};break;case"agent-focus":t.selectAgent(e.agentId),t.setCameraMode("AGENT_FOLLOW");break;case"workstation":t.selectAgent(e.agentId),t.setCameraMode("WORKSTATION_FOCUS");break;case"network-run":t.setCameraMode("TASK_TRACK");break}}safeCall(e,t,...i){const s=e[t];typeof s=="function"?s.apply(e,i):this.warnedOnce.has(t)||(this.warnedOnce.add(t),console.warn(`[vortex] subsystem guard: "${t}" unavailable — graceful fallback engaged`))}applySettings(e=!1){const t=Ji.getState();this.bloom.strength=t.bloomStrength,this.bloom.threshold=t.bloomThreshold,this.bloom.radius=t.bloomRadius,this.renderer.toneMappingExposure=t.exposure,this.safeCall(this.ambient,"setDensity",t.dustDensity,t.streamDensity),this.safeCall(this.ambient,"setScale",t.dustScale,t.streamScale),this.safeCall(this.net,"setDensity",t.networkDensity),this.safeCall(this.office,"setLighting",t.hqLighting),this.safeCall(this.office,"setMaterials",{holoOpacity:t.holoOpacity}),this.safeCall(this.office,"setParticles",{density:t.dustDensity});const i=this.scene.fog;i.density=.008+t.atmosphere*.034,(e||t.tint!==this.lastTint)&&(this.lastTint=t.tint,this.safeCall(this.arc,"setTint",t.tint),this.safeCall(this.beam,"setTint",t.tint)),(e||t.emissive!==this.lastEmissive)&&(this.lastEmissive=t.emissive,this.safeCall(this.arc,"setEmissive",t.emissive)),this.safeCall(this.beam,"setDensity",t.streamDensity),this.safeCall(this.beam,"setScale",t.streamScale),this.beam.setIntensityScale(t.coreIntensity),(e||t.coreGeometry!==this.lastGeometry)&&(this.lastGeometry=t.coreGeometry,this.applyTab(Me.getState().tab,!1),Me.getState().pushLog("sys","CORE",`geometry matrix → ${t.coreGeometry==="ARC"?"MONUMENT ARC":"INTELLIGENCE COLUMN"}`));const s=`${t.uiScale}|${t.holoOpacity}|${t.scanlines?1:0}`;if(e||s!==this.lastChrome){this.lastChrome=s;const a=document.documentElement.style;a.setProperty("--ui-scale",String(t.uiScale)),a.setProperty("--holo-alpha",String(t.holoOpacity)),a.setProperty("--scan-alpha",t.scanlines?"1":"0")}}bindPointer(){const e=this.canvas;e.addEventListener("pointerdown",t=>{Me.getState().cameraLocked||(this.dragging=!0,this.lastPointer={x:t.clientX,y:t.clientY})}),window.addEventListener("pointermove",t=>{if(!this.dragging||Me.getState().cameraLocked)return;const i=t.clientX-this.lastPointer.x,s=t.clientY-this.lastPointer.y;this.lastPointer={x:t.clientX,y:t.clientY},this.yaw-=i*.005,this.pitch=_t(this.pitch+s*.004,-.2,1.35);const a=Me.getState();a.cameraMode!=="FREE"&&a.cameraMode!=="ORBIT"&&(a.setCameraMode("FREE"),a.pushLog("info","DIRECTOR","operator seized camera authority → FREE"))}),window.addEventListener("pointerup",()=>{this.dragging=!1}),e.addEventListener("wheel",t=>{if(t.preventDefault(),Me.getState().cameraLocked)return;const i=Ji.getState().cameraLimit;this.dist=_t(this.dist*(1+t.deltaY*.0011),3.2,i)},{passive:!1})}cameraKeyAt(e){const t=dy;if(e<=t[0].t){const s=t[0];return{pos:new V(...s.pos),look:new V(...s.look),fov:s.fov}}for(let s=0;s<t.length-1;s++){const a=t[s],c=t[s+1];if(e>=a.t&&e<=c.t){const u=nb((e-a.t)/Math.max(.001,c.t-a.t));return{pos:new V(...a.pos).lerp(new V(...c.pos),u),look:new V(...a.look).lerp(new V(...c.look),u),fov:lx(a.fov,c.fov,u)}}}const i=t[t.length-1];return{pos:new V(...i.pos),look:new V(...i.look),fov:i.fov}}updateCamera(e){const t=Me.getState(),i=Ji.getState();if(t.cameraLocked&&!t.tlPlaying)return;let s=t.cameraMode;t.tlPlaying?s="DIRECTOR":this.shotOverride&&(this.time<this.shotOverride.until?s=this.shotOverride.mode:this.shotOverride=null);const a=new V,c=new V;let u=this.fov;switch(s){case"FREE":case"ORBIT":{s==="ORBIT"&&(this.yaw+=e*.1),a.set(this.center.x+Math.cos(this.pitch)*Math.sin(this.yaw)*this.dist,this.center.y+Math.sin(this.pitch)*this.dist,this.center.z+Math.cos(this.pitch)*Math.cos(this.yaw)*this.dist),c.copy(this.center),u=t.tab==="intel"?42:50;break}case"TACTICAL":{const p=Wc[t.tab];a.set(p.center.x+2.5,p.center.y+p.dist*.85,p.center.z+p.dist*.55),c.copy(p.center),u=55;break}case"AGENT_FOLLOW":{const p=t.selectedAgentId?this.office.getAgentPosition(t.selectedAgentId):null;p?(a.set(p.x+2.6,p.y+2.1,p.z+2.9),c.set(p.x,p.y+1.2,p.z)):(a.copy(Wc.agents.center).add(new V(0,8,9)),c.copy(Wc.agents.center)),u=44;break}case"WORKSTATION_FOCUS":{const p=t.selectedAgentId,v=p?this.office.getDeskPosition(p):null;if(v){const g=v.clone().normalize().multiplyScalar(-2.4);a.set(v.x+g.x,1.7,v.z+g.z),c.set(v.x*.86,1.45,v.z*.86)}else a.set(0,6,8),c.set(0,1,0);u=40;break}case"TASK_TRACK":{const p=-10+this.time*1.1%1*20;a.set(p*.55,4.6,9.5),c.set(p,1.8,0),u=52;break}case"DIRECTOR":case"CINEMATIC":{const p=this.cameraKeyAt(t.tlTime);a.copy(p.pos),c.copy(p.look),u=p.fov;break}}const h=s==="DIRECTOR"||s==="CINEMATIC"?3.4:4.2;this.pos.x=Dt(this.pos.x,a.x,h,e),this.pos.y=Dt(this.pos.y,a.y,h,e),this.pos.z=Dt(this.pos.z,a.z,h,e),this.look.x=Dt(this.look.x,c.x,h+1,e),this.look.y=Dt(this.look.y,c.y,h+1,e),this.look.z=Dt(this.look.z,c.z,h+1,e),this.fov=Dt(this.fov,u,3,e),this.shake=Dt(this.shake,0,3.2,e);const f=this.shake*this.shake;if(this.camera.position.set(this.pos.x+(Math.random()-.5)*f*.24,this.pos.y+(Math.random()-.5)*f*.18,this.pos.z+(Math.random()-.5)*f*.24),this.camera.lookAt(this.look),Math.abs(this.camera.fov-this.fov)>.01&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix()),this.bokeh){const p=s==="WORKSTATION_FOCUS"&&i.dof;if(this.bokeh.enabled=p,p){const v=this.bokeh.uniforms,g=this.camera.position.distanceTo(this.look);v.focus&&(v.focus.value=Dt(v.focus.value,g,6,e))}}}scaleLevels(e,t){const i=_t(t,.2,3);return{level:_t(e.level*i,0,1.4),bass:_t(e.bass*i,0,1.4),mid:_t(e.mid*i,0,1.4),high:_t(e.high*i,0,1.4),talk:e.talk}}update(){const e=performance.now(),t=_t((e-this.lastFrameMs)/1e3,0,.05);this.lastFrameMs=e,this.time+=t,this.fps.tick();const i=Me.getState(),s=Ji.getState(),a=t*_t(s.speed,.1,5);this.simTime+=a,this.applySettings();const c=this.scaleLevels(mn.getLevels(),s.audioSensitivity);if(i.tab!==this.lastTab&&(this.lastTab=i.tab,this.applyTab(i.tab,!1)),i.coreState!==this.lastCoreState&&(this.lastCoreState=i.coreState,this.arc.setState(i.coreState),this.beam.setState(i.coreState)),this.arc.update(a,this.simTime,c,i.coreState),this.beam.group.visible&&this.beam.update(a,this.simTime,c),this.ambient.update(a,this.simTime,c),(this.humanoid.group.visible||this.humanoid.morphValue()>.01)&&this.humanoid.update(a,this.simTime,c),this.office.group.visible?this.office.update(t,this.time):this.office.updateSimOnly(t),this.net.group.visible&&this.net.update(t,this.time),this.onFrame&&this.onFrame(t),this.updateCamera(t),this.composer.render(),this.statsAcc+=t,this.resAcc+=t,this.statsAcc>.25){this.statsAcc=0;const u=this.renderer.info.render;Me.getState().setStats({fps:this.fps.fps,frameMs:this.fps.frameMs,drawCalls:u.calls,triangles:u.triangles,points:db+this.ambient.activeSparks()+(this.humanoid.group.visible?Cs:0)+(this.beam.group.visible?48e3:0)+this.net.getStats().active,resScale:this.resScale})}if(this.resAcc>2.2){this.resAcc=0;const u=this.fps.fps;u<47&&this.resScale>.62?(this.resScale=Math.max(.62,this.resScale-.14),this.applyPixelRatio()):u>105&&this.resScale<1.5&&(this.resScale=Math.min(1.5,this.resScale+.1),this.applyPixelRatio())}}applyPixelRatio(){const e=Math.min(window.devicePixelRatio||1,1.75);this.renderer.setPixelRatio(e*this.resScale),this.resize()}resize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;e===0||t===0||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.composer.setSize(e,t))}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.unsubscribers.forEach(e=>e()),this.renderer.dispose()}}let ts=null;function Cb(o){if(ts)return ts;try{return ts=new Ab(o),ts}catch(e){return console.error("[vortex] WebGL2 pipeline failed — fallback engaged.",e),Me.getState().setEngineFailed(!0),null}}function si(){return ts}function Rb(){ts&&(ts.dispose(),ts=null)}const cx="vortex.missions.v1";function ux(){return{nodes:ay.map(o=>({...o})),edges:ly.map(o=>({...o}))}}function Pb(o){const e=new Set(o.nodes.map(t=>t.id));return{nodes:o.nodes,edges:o.edges.filter(t=>e.has(t.from)&&e.has(t.to))}}function Nb(){try{const o=localStorage.getItem(cx);if(o){const e=JSON.parse(o);if(Array.isArray(e.nodes)&&Array.isArray(e.edges)&&e.nodes.length>0)return Pb(e)}}catch{}return ux()}function dx(o){try{localStorage.setItem(cx,JSON.stringify(o))}catch{}}let Ct=Nb();const pu=new Set;function yr(o,e){Ct=o,dx(Ct),pu.forEach(t=>t()),Pt.emit("MISSION_UPDATED",{kind:e})}function Ib(o){return pu.add(o),()=>pu.delete(o)}function Lb(){return Ct}function Db(){return tt.useSyncExternalStore(Ib,Lb)}function Ub(o,e,t){const i=new Map;for(const c of o){const u=i.get(c.from);u?u.push(c.to):i.set(c.from,[c.to])}const s=[t],a=new Set;for(;s.length>0;){const c=s.pop();if(c===e)return!0;if(a.has(c))continue;a.add(c);const u=i.get(c);u&&s.push(...u)}return!1}function Ob(o){const e=new Set;for(const t of o.edges)e.add(t.from),e.add(t.to);return o.nodes.filter(t=>!e.has(t.id))}function hx(o){const e=new Set(o.edges.map(s=>s.to)),t=o.nodes.filter(s=>!e.has(s.id));return t.find(s=>s.id==="m-root")??t[0]??o.nodes[0]??null}function Fb(o){const e=new Map,t=hx(o);if(!t)return e;const i=new Map;for(const h of o.edges){const f=i.get(h.from);f?f.push(h.to):i.set(h.from,[h.to])}const s=new Map,a=[t.id];for(s.set(t.id,0);a.length>0;){const h=a.shift(),f=s.get(h);for(const p of i.get(h)??[])s.has(p)||(s.set(p,f+1),a.push(p))}const c=new Map;for(const[h,f]of s){const p=c.get(f);p?p.push(h):c.set(f,[h])}for(const[h,f]of c){const p=(f.length-1)*130;f.forEach((v,g)=>{e.set(v,{x:160+h*235,y:300-p/2+g*130})})}return o.nodes.filter(h=>!s.has(h.id)).forEach((h,f)=>{e.set(h.id,{x:160+f*200,y:620})}),e}function kb(o){const e=hx(o);if(!e)return[];const t=[],i=new Set([e.id]);let s=[e.id];const a=new Set;for(;s.length>0;){const c=[];for(const u of o.edges)a.has(u.id)||i.has(u.from)&&!i.has(u.to)&&(a.add(u.id),t.push(u),c.push(u.to),i.add(u.to));s=c}return t}const oi={addNode(o){const e=Pi("m"),t=o?Ct.nodes.find(a=>a.id===o):null,i={id:e,title:`NEW VECTOR ${Ct.nodes.length+1}`,status:"PENDING",x:t?t.x+210+Math.random()*40:480,y:t?t.y+(Math.random()*120-60):300},s=t?[...Ct.edges,{id:Pi("me"),from:t.id,to:e}]:Ct.edges;return yr({nodes:[...Ct.nodes,i],edges:s},"add"),e},removeNode(o){yr({nodes:Ct.nodes.filter(e=>e.id!==o),edges:Ct.edges.filter(e=>e.from!==o&&e.to!==o)},"remove")},renameNode(o,e){yr({nodes:Ct.nodes.map(t=>t.id===o?{...t,title:e}:t),edges:Ct.edges},"edit")},cycleStatus(o){const e={PENDING:"ACTIVE",ACTIVE:"DONE",DONE:"BLOCKED",BLOCKED:"PENDING"};yr({nodes:Ct.nodes.map(t=>t.id===o?{...t,status:e[t.status]??"PENDING"}:t),edges:Ct.edges},"edit")},moveNode(o,e,t){Ct={nodes:Ct.nodes.map(i=>i.id===o?{...i,x:e,y:t}:i),edges:Ct.edges},dx(Ct),pu.forEach(i=>i())},duplicateNode(o){const e=Ct.nodes.find(s=>s.id===o);if(!e)return;const t=Pi("m"),i={...e,id:t,title:`${e.title} COPY`,x:e.x+60,y:e.y+60};yr({nodes:[...Ct.nodes,i],edges:Ct.edges},"add")},addEdge(o,e){return o===e||Ct.edges.some(t=>t.from===o&&t.to===e)||Ub(Ct.edges,o,e)?!1:(yr({nodes:Ct.nodes,edges:[...Ct.edges,{id:Pi("me"),from:o,to:e}]},"link"),!0)},removeEdge(o){yr({nodes:Ct.nodes,edges:Ct.edges.filter(e=>e.id!==o)},"remove")},autoLayout(){const o=Fb(Ct);yr({nodes:Ct.nodes.map(e=>{const t=o.get(e.id);return t?{...e,x:t.x,y:t.y}:e}),edges:Ct.edges},"layout")},reset(){yr(ux(),"layout")},firePulseWave(){kb(Ct).forEach((e,t)=>{window.setTimeout(()=>Pt.emit("MISSION_PULSE",{edgeId:e.id}),t*130)})},fireRandomPulse(){if(Ct.edges.length===0)return;const o=Ct.edges[Math.floor(Math.random()*Ct.edges.length)];Pt.emit("MISSION_PULSE",{edgeId:o.id})}};let mi={nodes:cy.map(o=>({...o})),edges:uy.map(o=>({...o}))};const Yf=new Set;function Yh(o){mi=o,Yf.forEach(e=>e())}function Bb(o){return Yf.add(o),()=>Yf.delete(o)}function iu(){return mi}function zb(){return tt.useSyncExternalStore(Bb,iu)}function Gb(o){const{nodes:e,edges:t}=mi,i=Math.min(o,.05),s=new Map(e.map(a=>[a.id,a]));for(const a of t){const c=s.get(a.from),u=s.get(a.to);if(!c||!u)continue;const h=u.x-c.x,f=u.y-c.y,p=Math.max(12,Math.hypot(h,f)),v=a.kind==="folder"?120:95,g=(p-v)/p*.028;c.vx+=h*g,c.vy+=f*g,u.vx-=h*g,u.vy-=f*g}for(let a=0;a<e.length;a++){const c=e[a];for(let u=a+1;u<e.length;u++){const h=e[u],f=h.x-c.x,p=h.y-c.y,v=Math.max(400,f*f+p*p),g=26e3/v,_=Math.sqrt(v);c.vx-=f/_*g,c.vy-=p/_*g,h.vx+=f/_*g,h.vy+=p/_*g}}for(const a of e)a.vx+=-a.x*.0016,a.vy+=-a.y*.0016,a.vx*=.86,a.vy*=.86,a.x+=a.vx*i*60,a.y+=a.vy*i*60}class Vb{constructor(){this.mode="mock"}connect(){Me.getState().pushLog("sys","VAULT","ObsidianBridge attached in MOCK mode — MCP/WebSocket socket dormant")}disconnect(){}}class Hb{constructor(){this.timer=null,this.noteIdx=0,this.bridge=new Vb}start(){this.timer||(this.bridge.connect(),this.timer=setInterval(()=>{document.hidden||this.createNext()},4200))}stop(){this.timer&&clearInterval(this.timer),this.timer=null}burst(e){for(let t=0;t<e;t++)this.createNext(!0)}createNext(e=!1){const t=mi.nodes;if(t.length>=64){const g=t.findIndex(_=>_.type==="note");if(g>=0){const _=t[g];Yh({nodes:t.filter(M=>M.id!==_.id),edges:mi.edges.filter(M=>M.from!==_.id&&M.to!==_.id)})}}const i=ig[this.noteIdx%ig.length];this.noteIdx++;const s=Pi("mem"),a=Math.random()*Math.PI*2,c=$a(60,160),u={id:s,title:i.title,type:"note",body:i.body,x:Math.cos(a)*c,y:Math.sin(a)*c,vx:0,vy:0,born:performance.now()},h=[...mi.edges],f=mi.nodes.filter(g=>g.type==="note"),p=Math.min(f.length,1+Math.floor(Math.random()*2)),v=[...f].sort(()=>Math.random()-.5);for(let g=0;g<p;g++)h.push({id:Pi("me"),from:s,to:v[g].id,kind:"link"});for(const g of i.tags){const _=mi.nodes.find(M=>M.type==="tag"&&M.title===g);_&&h.push({id:Pi("me"),from:s,to:_.id,kind:"tag"})}Yh({nodes:[...mi.nodes,u],edges:h}),Pt.emit("MEMORY_NODE_CREATED",{id:s,title:u.title}),e||Me.getState().pushLog("info","FS",`[vault] + /${u.title} — backlinks woven (${p})`)}manualNote(e){const t=Pi("mem"),i={id:t,title:e.endsWith(".md")?e:`${e}.md`,type:"note",body:`# ${e}

Manually inscribed into the vault. Awaiting swarm annotation.`,x:$a(-80,80),y:$a(-80,80),vx:0,vy:0,born:performance.now()},s=mi.nodes.find(c=>c.type==="folder"),a=s?[...mi.edges,{id:Pi("me"),from:t,to:s.id,kind:"folder"}]:mi.edges;Yh({nodes:[...mi.nodes,i],edges:a}),Pt.emit("MEMORY_NODE_CREATED",{id:t,title:i.title}),Me.getState().pushLog("ok","FS",`[vault] + /${i.title} inscribed by operator`)}}const Ka=new Hb,qa=new wb,fx=new bb,Mr=30;class Wb{constructor(){this.initialized=!1,this.cuePtr=0,this.accModel=0,this.accTele=0,this.ambTimer=null,this.taskToken=0,this.scrubbing=!1,this.simTime=0}init(){this.initialized||(this.initialized=!0,Pt.on("CORE_STATE_CHANGED",({next:e})=>{var t;if(!this.scrubbing)switch(e){case"LISTENING":mn.chime(880);break;case"THINKING":mn.setDroneIntensity(.7);break;case"TOOL_USE":mn.zap(),(t=si())==null||t.net.cascade();break;case"SPEAKING":mn.speak(1.4),Pt.emit("AUDIO_PEAK",{level:.8});break;case"SUCCESS":mn.thump(),mn.setDroneIntensity(.35);break;case"ERROR":mn.alarm();break;case"IDLE":mn.setDroneIntensity(.3);break}}),Pt.on("NETWORK_SPIKE",({magnitude:e})=>{var t,i;(t=si())==null||t.net.burst(Math.floor(120*e)),(i=si())==null||i.requestShot({kind:"tactical-swoop"}),Me.getState().pushLog("warn","NET",`traffic spike ×${e.toFixed(1)} — director swoops to tactical`)}),Pt.on("SYSTEM_WARNING",({msg:e})=>{Me.getState().pushLog("warn","SYS",e)}),Pt.on("MEMORY_NODE_CREATED",()=>{}),this.scheduleAmbient(),Ka.start())}scheduleAmbient(){const e=()=>{this.ambTimer=setTimeout(()=>{document.hidden||this.ambientOnce(),e()},$a(3600,7200))};e()}ambientOnce(){var i,s;const e=Me.getState();if(e.tlPlaying)return;const t=Math.random();t<.3?(Pt.emit("NETWORK_PACKET_ARRIVED",{layer:Math.floor(Math.random()*10)}),(i=si())==null||i.net.burst(24)):t<.45?(Pt.emit("MISSION_PULSE",{edgeId:""}),oi.fireRandomPulse()):t<.6?Pt.emit("SYSTEM_WARNING",{msg:"thermal envelope drift +2.1K — containment field re-tuned"}):t<.75?((s=si())==null||s.ambient.stir(),e.pushLog("info","NET","packet convoy routed through layer 7 — latency nominal")):t<.88?e.pushLog("info","SWARM","micro-briefing completed at the strategy table"):e.pushLog("sys","ARC","plasma conduit self-calibration — turbulence index 0.31")}frameTick(e){const t=Me.getState();if(this.simTime+=e,t.tlPlaying){const h=t.tlTime;let f=h+e*t.tlSpeed;f>=Mr&&(t.tlLoop?(f=f%Mr,this.cuePtr=0):(f=Mr,t.setTimeline({playing:!1,t:f})));for(const p of Zh)p.t>h&&p.t<=f&&this.fireCue(p);t.setTimeline({t:f})}this.accModel+=e,this.accTele+=e;const i=t.coreState,s=i==="THINKING"?18:i==="TOOL_USE"?26:i==="SPEAKING"?12:i==="ERROR"?-8:0,a=si(),c=a?a.net.getStats():{active:0,throughput:1},u={t:this.simTime,power:_t(62+16*Math.sin(this.simTime*.21)+s+Math.sin(this.simTime*1.7)*4,8,100),temp:_t(312+14*Math.sin(this.simTime*.13+1)+s*.5+c.active*.02,280,420),packets:_t(120+c.active*2.4+60*Math.sin(this.simTime*.4),0,999),latency:_t(21+c.active*.05+5*Math.sin(this.simTime*.9),4,120),throughput:_t(1.2+c.throughput*.14+.5*Math.sin(this.simTime*.31),.1,9.9)};this.accModel>=.05&&(qa.push(u),fx.report(t.stats.frameMs),this.accModel=0),this.accTele>=.2&&(t.setTelemetry(u),this.accTele=0)}fireCue(e){var i,s,a;const t=Me.getState();switch(Pt.emit("TIMELINE_CUE",{kind:e.kind,value:e.value}),e.kind){case"log":t.pushLog("sys","DIRECTOR",e.value);break;case"state":t.setCoreState(e.value);break;case"tab":t.setTab(e.value);break;case"burst":{const c=parseInt(e.value,10)||100;(i=si())==null||i.ambient.burstAt(c,"#ffb700"),(s=si())==null||s.net.burst(Math.floor(c*.8)),mn.zap();break}case"spike":Pt.emit("NETWORK_SPIKE",{magnitude:parseFloat(e.value)||.8});break;case"brief":(a=si())==null||a.office.triggerBriefing();break;case"pulse":oi.firePulseWave();break;case"memory":Ka.burst(3);break;case"speak":t.setCoreState("SPEAKING"),t.pushLog("ok","VORTEX",e.value);break}}scrubTo(e){const t=Me.getState();this.scrubbing=!0;let i=null,s=null;for(const a of Zh){if(a.t>e)break;a.kind==="tab"&&(i=a.value),a.kind==="state"&&(s=a.value)}t.setTimeline({t:e}),i&&t.setTab(i),s&&t.coreState!==s&&t.setCoreState(s),this.scrubbing=!1}togglePlay(){const e=Me.getState();!e.tlPlaying&&e.tlTime>=Mr-.01&&(e.setTimeline({t:0}),this.cuePtr=0),e.setTimeline({playing:!e.tlPlaying}),Me.getState().tlPlaying?e.pushLog("sys","DIRECTOR","cinematic sequence engaged — camera authority transferred"):e.pushLog("sys","DIRECTOR","camera authority returned to operator")}injectTask(e){const t=Me.getState(),i=++this.taskToken,s=(a,c)=>window.setTimeout(()=>{this.taskToken===i&&c()},a);t.pushLog("info","CMD",`directive received: “${e}”`),t.setCoreState("LISTENING"),s(550,()=>{t.setCoreState("THINKING"),t.pushLog("info","CORTEX","reasoning across 10 layers — attention heads engaged")}),s(1800,()=>{t.setCoreState("TOOL_USE");const a=t.agents[Math.floor(Math.random()*t.agents.length)];a&&(Pt.emit("AGENT_TASK_ASSIGNED",{agentId:a.id,task:e}),t.pushLog("info","SWARM",`task delegated → ${a.codename} (${a.role})`))}),s(3100,()=>{t.setCoreState("SPEAKING");const a=rg[Math.floor(Math.random()*rg.length)];t.pushLog("ok","VORTEX",a)}),s(4700,()=>{var a;t.setCoreState("SUCCESS"),(a=si())==null||a.ambient.burstAt(90,"#00ff66")}),s(6e3,()=>{Me.getState().coreState==="SUCCESS"&&Me.getState().setCoreState("IDLE")})}netSpike(e=.9){Pt.emit("NETWORK_SPIKE",{magnitude:e})}triggerErrorDemo(){const e=Me.getState();e.setCoreState("ERROR"),e.pushLog("err","SYS","simulated containment fault — magnetic field harmonics unstable"),window.setTimeout(()=>{Me.getState().coreState==="ERROR"&&(Me.getState().setCoreState("SUCCESS"),Me.getState().pushLog("ok","SYS","fault isolated and purged — harmonics restored"),window.setTimeout(()=>{Me.getState().coreState==="SUCCESS"&&Me.getState().setCoreState("IDLE")},1400))},2200)}showHumanFace(){const e=Me.getState();e.setTab("intel"),e.pushLog("sys","VORTEX","manifesting intelligence lattice — particle humanoid convergence")}handleCommand(e){var a;const t=e.trim();if(!t)return;const i=Me.getState();Pt.emit("COMMAND_ISSUED",{raw:t}),i.pushLog("sys","OPERATOR",`> ${t}`);const s=t.toLowerCase();if(s==="help"){i.pushLog("sys","VORTEX","commands: status · human face · spike · briefing · agents · missions · network · memory · error · camera <mode> · clear");return}if(s==="clear"){i.clearLog();return}if(s==="status"){i.pushLog("info","VORTEX",`core ${i.coreState} · ${i.agents.length} agents · ${i.stats.fps.toFixed(0)} fps · uplink SECURE`);return}if(s.includes("face")||s.includes("human")){this.showHumanFace();return}if(s.includes("spike")){this.netSpike();return}if(s.includes("brief")){(a=si())==null||a.office.triggerBriefing(),i.setTab("agents"),i.pushLog("info","SWARM","all units summoned to the strategy table");return}if(s.includes("error")||s.includes("fault")){this.triggerErrorDemo();return}if(s==="agents"||s==="office"){i.setTab("agents");return}if(s==="missions"){i.setTab("missions");return}if(s==="network"||s==="cortex"){i.setTab("network");return}if(s==="memory"||s==="vault"){i.setTab("memory");return}if(s==="pulse"){i.setTab("missions"),oi.firePulseWave();return}if(s.startsWith("camera ")){const c=s.slice(7).trim().toUpperCase().replace(" ","_");["FREE","ORBIT","TACTICAL","AGENT_FOLLOW","WORKSTATION_FOCUS","TASK_TRACK"].includes(c)?(i.setCameraMode(c),i.pushLog("info","DIRECTOR",`camera authority → ${c}`)):i.pushLog("warn","DIRECTOR",`unknown shot “${c}”`);return}this.injectTask(t)}dispose(){this.ambTimer&&clearTimeout(this.ambTimer),Ka.stop()}}const Vi=new Wb,Oo={fill:"none",stroke:"currentColor",strokeWidth:1.6},Xb=[{id:"core",label:"CORE",icon:E.jsxs("svg",{viewBox:"0 0 24 24",...Oo,children:[E.jsx("path",{d:"M5 19a8.5 8.5 0 1 1 14 0"}),E.jsx("circle",{cx:"12",cy:"13",r:"2.2",fill:"currentColor",stroke:"none"}),E.jsx("path",{d:"M4 21h16"})]})},{id:"agents",label:"AGENTS",icon:E.jsxs("svg",{viewBox:"0 0 24 24",...Oo,children:[E.jsx("circle",{cx:"8",cy:"8",r:"2.6"}),E.jsx("path",{d:"M3.5 19c.6-3.2 2.3-5 4.5-5s3.9 1.8 4.5 5"}),E.jsx("circle",{cx:"16.5",cy:"7",r:"2.1"}),E.jsx("path",{d:"M13.8 18.4c.5-2.6 1.5-4 2.7-4s2.3 1.4 2.8 4"})]})},{id:"intel",label:"INTEL",icon:E.jsxs("svg",{viewBox:"0 0 24 24",...Oo,children:[E.jsx("path",{d:"M12 3c4 0 7 3.6 7 8s-3 8-7 8-7-3.6-7-8 3-8 7-8z"}),E.jsx("circle",{cx:"9.5",cy:"10",r:"0.9",fill:"currentColor",stroke:"none"}),E.jsx("circle",{cx:"14.5",cy:"10",r:"0.9",fill:"currentColor",stroke:"none"}),E.jsx("path",{d:"M9 14.5c1 .9 2 1.3 3 1.3s2-.4 3-1.3"})]})},{id:"missions",label:"MISSIONS",icon:E.jsxs("svg",{viewBox:"0 0 24 24",...Oo,children:[E.jsx("rect",{x:"3",y:"4",width:"6",height:"4.4"}),E.jsx("rect",{x:"15",y:"4",width:"6",height:"4.4"}),E.jsx("rect",{x:"9",y:"15",width:"6",height:"4.4"}),E.jsx("path",{d:"M6 8.4v3h12v-3M12 11.4V15"})]})},{id:"network",label:"CORTEX",icon:E.jsxs("svg",{viewBox:"0 0 24 24",...Oo,children:[E.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",opacity:"0.5"}),E.jsx("circle",{cx:"7",cy:"7",r:"1.4",fill:"currentColor",stroke:"none"}),E.jsx("circle",{cx:"15",cy:"7",r:"1.4",fill:"currentColor",stroke:"none"}),E.jsx("circle",{cx:"10",cy:"12",r:"1.4",fill:"currentColor",stroke:"none"}),E.jsx("circle",{cx:"18",cy:"12",r:"1.4",fill:"currentColor",stroke:"none"}),E.jsx("circle",{cx:"6",cy:"17",r:"1.4",fill:"currentColor",stroke:"none"}),E.jsx("circle",{cx:"13",cy:"17",r:"1.4",fill:"currentColor",stroke:"none"})]})},{id:"memory",label:"MEMORY",icon:E.jsxs("svg",{viewBox:"0 0 24 24",...Oo,children:[E.jsx("path",{d:"M12 3l7 4v10l-7 4-7-4V7l7-4z"}),E.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor",stroke:"none"}),E.jsx("path",{d:"M12 10V7M12 14v3M10.3 11L7 9.5M13.7 11L17 9.5"})]})}];function jb(){const o=Ji(t=>t.labOpen),e=Ji(t=>t.toggleLab);return E.jsx("button",{className:`btn sm wide ${o?"active":""}`,onClick:()=>e(),children:"CORE LAB"})}function Yb(){const o=Me(h=>h.tab),e=Me(h=>h.setTab),t=Me(h=>h.setHoloOpen),i=Me(h=>h.openHolo),s=Me(h=>h.holoOpen),a=Me(h=>h.setLabOpen),c=Me(h=>h.pushLog),u=h=>{e(h),mn.chime(1180)};return E.jsxs("nav",{className:"left-rail",children:[Xb.map(h=>E.jsxs("button",{className:`rail-tab ${o===h.id?"active":""}`,onClick:()=>u(h.id),title:h.label,children:[E.jsx("span",{className:"rail-ico",children:h.icon}),E.jsx("span",{className:"rail-label",children:h.label})]},h.id)),E.jsx("div",{className:"rail-divider"}),E.jsx("button",{className:"btn sm wide gold",onClick:()=>{Vi.injectTask("priority directive Ω-77"),mn.chime(980)},children:"INJECT TASK"}),E.jsx("button",{className:"btn sm wide",onClick:()=>{Vi.netSpike()},children:"NET SPIKE"}),E.jsx("button",{className:`btn sm wide ${s?"active":""}`,onClick:()=>{s?t(!1):(i("terminal"),c("sys","HOLO","holographic control lab materialized"))},children:"HOLO DECK"}),E.jsx("button",{className:"btn sm wide gold",onClick:()=>a(!0),children:"AGENT LAB"}),E.jsx(jb,{}),E.jsx("div",{className:"row-spacer"}),E.jsxs("div",{style:{textAlign:"center",fontSize:7.5,letterSpacing:"0.2em",color:"var(--faint)"},children:["Ω·LINK",E.jsx("br",{}),"STABLE"]})]})}const yv={PENDING:"#7d8595",ACTIVE:"#00f0ff",DONE:"#00ff66",BLOCKED:"#ff3333"};function qb(o,e,t){return`M ${t} 0 H ${o-t} L ${o} ${t} V ${e-t} L ${o-t} ${e} H ${t} L 0 ${e-t} V ${t} Z`}function $b(){var w;const o=Db(),e=Me(R=>R.pushLog),[t,i]=tt.useState({x:30,y:10,k:.82}),[s,a]=tt.useState(null),[c,u]=tt.useState(null),[h,f]=tt.useState(null),[p,v]=tt.useState(null),[g,_]=tt.useState(null),[M,b]=tt.useState([]),x=tt.useRef(null),S=tt.useRef(null),P=tt.useRef(null),L=tt.useRef([]);tt.useEffect(()=>{const R=Pt.on("MISSION_PULSE",({edgeId:K})=>{if(!K)return;const te={id:Pi("p"),edgeId:K,t:0};L.current=[...L.current,te],b(L.current)});let F=0,B=performance.now();const z=()=>{F=requestAnimationFrame(z);const K=performance.now(),te=Math.min(.05,(K-B)/1e3);if(B=K,L.current.length===0)return;let Y=!1;const ae=[];for(const Z of L.current)Z.t+=te*1.5,Z.t<1&&ae.push(Z),Y=!0;Y&&(L.current=ae,b(ae))};return z(),()=>{R(),cancelAnimationFrame(F)}},[]);const C=(R,F)=>{const B=x.current;if(!B)return{x:0,y:0};const z=B.getBoundingClientRect();return{x:(R-z.left-t.x)/t.k,y:(F-z.top-t.y)/t.k}},D=R=>o.nodes.find(F=>F.id===R),I=(R,F)=>{var z,K;oi.addEdge(R,F)?e("ok","MISSION",`link forged: ${(z=D(R))==null?void 0:z.title} → ${(K=D(F))==null?void 0:K.title}`):e("err","MISSION","link rejected — cycle detected or duplicate edge"),f(null)},O=Ob(o);return E.jsxs("div",{className:"mission-layer",children:[E.jsxs("div",{className:"mission-toolbar",children:[E.jsx("button",{className:"btn sm gold",onClick:()=>{const R=oi.addNode(s);a(R)},children:"+ NODE"}),E.jsx("button",{className:`btn sm ${h?"active":""}`,onClick:()=>{f(null),e("info","MISSION","link mode — click an output port, then a target node")},children:h?`FROM: ${((w=D(h))==null?void 0:w.title.slice(0,10))??"?"}`:"LINK MODE"}),E.jsx("button",{className:"btn sm",onClick:()=>{s&&oi.cycleStatus(s)},children:"CYCLE STATUS"}),E.jsx("button",{className:"btn sm",onClick:()=>{s?oi.duplicateNode(s):c&&(oi.removeEdge(c),u(null))},children:c?"CUT EDGE":"DUPLICATE"}),E.jsx("button",{className:"btn sm danger",onClick:()=>{s&&(oi.removeNode(s),a(null))},children:"DELETE"}),E.jsx("button",{className:"btn sm",onClick:()=>oi.autoLayout(),children:"AUTO-LAYOUT"}),E.jsx("button",{className:"btn sm",onClick:()=>oi.reset(),children:"RESET SEED"}),E.jsx("button",{className:"btn sm gold",onClick:()=>{oi.firePulseWave(),e("sys","MISSION","energy pulse wave routed through the graph")},children:"⚡ SEND PULSE"})]}),E.jsxs("div",{className:"m-orphans panel",children:[E.jsxs("div",{className:"panel-title",children:["GRAPH INTEGRITY ",E.jsxs("span",{className:"aux",children:[o.nodes.length,"N·",o.edges.length,"E"]})]}),E.jsxs("div",{className:"panel-body",style:{fontSize:9.5,lineHeight:1.7,color:"var(--dim)"},children:[E.jsxs("div",{children:["CYCLES ",E.jsx("b",{style:{color:"var(--green)"},children:"0"})," · guard ACTIVE"]}),E.jsxs("div",{children:["ORPHANS"," ",E.jsx("b",{style:{color:O.length?"var(--gold2)":"var(--green)"},children:O.length}),O.length>0&&E.jsxs("span",{children:[" — ",O.map(R=>R.title).join(", ")]})]}),E.jsxs("div",{children:["INVALID EDGES ",E.jsx("b",{style:{color:"var(--green)"},children:"0"})," · auto-repaired on load"]}),E.jsx("div",{className:"mt8",style:{color:"var(--faint)",fontSize:8.5},children:"drag nodes · wheel zoom · dbl-click rename · port→node links"})]})]}),E.jsx("svg",{ref:x,className:`mission-svg ${S.current?"panning":""} ${h?"linking":""}`,onPointerDown:R=>{(R.target===x.current||R.target.tagName==="svg")&&(S.current={sx:R.clientX,sy:R.clientY,vx:t.x,vy:t.y},a(null),u(null))},onPointerMove:R=>{if(S.current)i(F=>({...F,x:S.current.vx+(R.clientX-S.current.sx),y:S.current.vy+(R.clientY-S.current.sy)}));else if(P.current){const F=C(R.clientX,R.clientY);oi.moveNode(P.current.id,F.x-P.current.ox,F.y-P.current.oy)}h&&v(C(R.clientX,R.clientY))},onPointerUp:()=>{S.current=null,P.current=null},onWheel:R=>{const F=x.current;if(!F)return;const B=F.getBoundingClientRect(),z=R.clientX-B.left,K=R.clientY-B.top;i(te=>{const Y=Math.min(2.2,Math.max(.35,te.k*(1-R.deltaY*.0012)));return{k:Y,x:z-(z-te.x)/te.k*Y,y:K-(K-te.y)/te.k*Y}})},children:E.jsxs("g",{transform:`translate(${t.x},${t.y}) scale(${t.k})`,children:[o.edges.map(R=>{const F=D(R.from),B=D(R.to);if(!F||!B)return null;const z=M.some(K=>K.edgeId===R.id);return E.jsx("line",{className:`m-edge ${z?"hot":""} ${c===R.id?"hot":""}`,x1:F.x,y1:F.y,x2:B.x,y2:B.y,onPointerDown:K=>{K.stopPropagation(),u(R.id),a(null)}},R.id)}),h&&p&&D(h)&&E.jsx("line",{className:"m-edge-ghost",x1:D(h).x,y1:D(h).y,x2:p.x,y2:p.y}),M.map(R=>{const F=o.edges.find(te=>te.id===R.edgeId);if(!F)return null;const B=D(F.from),z=D(F.to);if(!B||!z)return null;const K=ib(R.t);return E.jsx("circle",{className:"m-pulse",r:5,cx:B.x+(z.x-B.x)*K,cy:B.y+(z.y-B.y)*K},R.id)}),o.nodes.map(R=>E.jsxs("g",{className:`m-node ${s===R.id?"sel":""}`,transform:`translate(${R.x},${R.y})`,onPointerDown:z=>{z.stopPropagation(),a(R.id),u(null);const K=C(z.clientX,z.clientY);P.current={id:R.id,ox:K.x-R.x,oy:K.y-R.y},h&&h!==R.id&&I(h,R.id)},onDoubleClick:z=>{z.stopPropagation(),_({id:R.id,x:R.x*t.k+t.x-80,y:R.y*t.k+t.y-12,value:R.title})},children:[E.jsx("path",{d:qb(158,48,9),transform:`translate(${-158/2},${-48/2})`,className:"m-node-box"}),E.jsx("line",{className:"m-node-status",x1:-158/2+4,y1:-48/2+8,x2:-158/2+4,y2:48/2-8,stroke:yv[R.status]}),E.jsx("text",{className:"m-node-title",textAnchor:"middle",y:-2,children:R.title.length>20?R.title.slice(0,19)+"…":R.title}),E.jsx("text",{className:"m-node-sub",textAnchor:"middle",y:13,fill:yv[R.status],children:R.status}),E.jsx("circle",{className:"m-port",cx:-158/2,cy:0,r:5.5,onPointerDown:z=>{z.stopPropagation(),a(R.id)}}),E.jsx("circle",{className:"m-port",cx:158/2,cy:0,r:5.5,onPointerDown:z=>{z.stopPropagation(),f(R.id),a(R.id)}})]},R.id))]})}),g&&E.jsx("input",{className:"rename-input",style:{left:g.x,top:g.y,width:170},value:g.value,autoFocus:!0,onFocus:R=>R.target.select(),onChange:R=>_({...g,value:R.target.value.toUpperCase()}),onBlur:()=>{oi.renameNode(g.id,g.value.trim()||"UNNAMED"),_(null)},onKeyDown:R=>{R.key==="Enter"&&R.target.blur(),R.key==="Escape"&&_(null)}})]})}const Xc={note:"#00f0ff",folder:"#d4af37",tag:"#00ff66"};function Kb(){const o=zb(),e=tt.useRef(null),[t,i]=tt.useState(null),[s,a]=tt.useState(0),[c,u]=tt.useState(""),h=tt.useRef({x:0,y:0,k:1.15}),f=tt.useRef(null),p=tt.useRef(null);tt.useEffect(()=>Pt.on("MEMORY_NODE_CREATED",()=>a(M=>M+1)),[]),tt.useEffect(()=>{const _=e.current;if(!_)return;const M=_.getContext("2d");if(!M)return;let b=0,x=performance.now();const S=()=>{b=requestAnimationFrame(S);const P=performance.now(),L=Math.min(.05,(P-x)/1e3);x=P,Gb(L);const C=_.clientWidth,D=_.clientHeight;(_.width!==C*2||_.height!==D*2)&&(_.width=C*2,_.height=D*2),M.setTransform(2,0,0,2,0,0),M.clearRect(0,0,C,D);const I=h.current,O=z=>C/2+(z+I.x)*I.k,w=z=>D/2+(z+I.y)*I.k,{nodes:R,edges:F}=iu(),B=new Map(R.map(z=>[z.id,z]));for(const z of F){const K=B.get(z.from),te=B.get(z.to);!K||!te||(M.strokeStyle=z.kind==="tag"?"rgba(0,255,102,0.22)":z.kind==="folder"?"rgba(212,175,55,0.2)":"rgba(0,240,255,0.2)",M.lineWidth=1,M.beginPath(),M.moveTo(O(K.x),w(K.y)),M.lineTo(O(te.x),w(te.y)),M.stroke())}for(const z of R){const K=O(z.x),te=w(z.y),Y=Xc[z.type],ae=(P-z.born)/1e3;z.born>0&&ae<1.6&&(M.strokeStyle=Y,M.globalAlpha=1-ae/1.6,M.beginPath(),M.arc(K,te,10+ae*26,0,gt),M.stroke(),M.globalAlpha=1);const Z=p.current===z.id,$=t===z.id;M.lineWidth=$?2:Z?1.6:1,M.strokeStyle=Y,M.fillStyle="rgba(10,10,15,0.92)";const se=z.type==="folder"?11:z.type==="tag"?7.5:8.5;if(M.beginPath(),z.type==="folder"){for(let de=0;de<6;de++){const G=de/6*gt-Math.PI/6,J=K+Math.cos(G)*se,Ue=te+Math.sin(G)*se;de===0?M.moveTo(J,Ue):M.lineTo(J,Ue)}M.closePath()}else z.type==="tag"?(M.moveTo(K,te-se),M.lineTo(K+se,te),M.lineTo(K,te+se),M.lineTo(K-se,te),M.closePath()):M.rect(K-se,te-se*.82,se*2,se*1.64);M.fill(),M.stroke(),$&&(M.strokeStyle="rgba(212,175,55,0.8)",M.beginPath(),M.arc(K,te,se+6,0,gt),M.stroke()),M.fillStyle=Z||$?"#e0e6ed":"rgba(125,133,149,0.95)",M.font="9.5px 'JetBrains Mono', monospace",M.textAlign="center",M.fillText(z.title,K,te+se+12)}};return S(),()=>cancelAnimationFrame(b)},[t]);const v=(_,M)=>{const b=e.current;if(!b)return null;const x=b.getBoundingClientRect(),S=h.current,P=(_-x.left-x.width/2)/S.k-S.x,L=(M-x.top-x.height/2)/S.k-S.y;let C=null,D=256;for(const I of iu().nodes){const O=(I.x-P)**2+(I.y-L)**2;O<D&&(D=O,C=I.id)}return C},g=t?o.nodes.find(_=>_.id===t):null;return E.jsxs("div",{className:"memory-layer",children:[E.jsx("canvas",{ref:e,className:"memory-canvas",onPointerDown:_=>{var x,S;const M=v(_.clientX,_.clientY),b=h.current;f.current={id:M,sx:_.clientX,sy:_.clientY,vx:b.x,vy:b.y,moved:!1},(S=(x=_.target).setPointerCapture)==null||S.call(x,_.pointerId)},onPointerMove:_=>{const M=f.current;if(!M){p.current=v(_.clientX,_.clientY);return}const b=_.clientX-M.sx,x=_.clientY-M.sy;Math.abs(b)+Math.abs(x)>4&&(M.moved=!0);const S=h.current;if(M.id){const P=iu().nodes.find(L=>L.id===M.id);P&&(P.x+=b/S.k,P.y+=x/S.k,P.vx=0,P.vy=0,M.sx=_.clientX,M.sy=_.clientY)}else S.x=M.vx+b/S.k,S.y=M.vy+x/S.k},onPointerUp:()=>{const _=f.current;_&&!_.moved&&i(_.id),f.current=null},onWheel:_=>{const M=h.current;M.k=Math.min(2.6,Math.max(.4,M.k*(1-_.deltaY*.0012)))}}),E.jsxs("div",{className:"memory-legend",children:[E.jsxs("span",{children:[E.jsx("i",{style:{background:Xc.note}}),"NOTE"]}),E.jsxs("span",{children:[E.jsx("i",{style:{background:Xc.folder}}),"FOLDER"]}),E.jsxs("span",{children:[E.jsx("i",{style:{background:Xc.tag}}),"TAG"]}),E.jsxs("span",{style:{color:"var(--faint)"},children:["LIVE FS EVENTS: ",s]})]}),E.jsxs("div",{className:"memory-card panel",children:[E.jsxs("div",{className:"panel-title",children:[g?g.title:"VAULT INSPECTOR",E.jsx("span",{className:"aux",children:g?g.type.toUpperCase():`${o.nodes.length} NODES`})]}),E.jsxs("div",{className:"panel-body",children:[E.jsxs("div",{className:"gap6",style:{marginBottom:10},children:[E.jsx("input",{className:"input",style:{flex:1,padding:"5px 8px",fontSize:10},placeholder:"inscribe note…",value:c,onChange:_=>u(_.target.value),onKeyDown:_=>{_.key==="Enter"&&c.trim()&&(Ka.manualNote(c.trim()),u(""))}}),E.jsx("button",{className:"btn sm gold",onClick:()=>{c.trim()&&(Ka.manualNote(c.trim()),u(""))},children:"+"})]}),g?E.jsx("div",{className:"body",children:g.body||"— empty node —"}):E.jsxs("div",{className:"body",children:["Select a node to inspect its contents.",`

`,"The ",E.jsx("b",{children:"MockMemoryProvider"})," replays vault file-system events every few seconds — notes materialize, backlinks weave, the constellation reorganizes.",`

`,E.jsx("b",{children:"ObsidianBridge"})," stands ready for MCP / WebSocket attachment."]})]})]})]})}function Zb(){const o=Me(e=>e.log);return E.jsxs("div",{children:[o.slice(-14).map(e=>E.jsxs("div",{className:"holo-term-line",children:[E.jsxs("b",{children:["[",e.tag,"]"]})," ",e.msg]},e.id)),E.jsxs("div",{className:"holo-term-line gold",children:[E.jsx("b",{children:"vortex@Ω"})," ~ ",E.jsx("span",{className:"caret"})]})]})}function Qb(){const o=Me(t=>t.telemetry),e=[["PLASMA FLOW",o.power,"#00f0ff"],["THERMAL",o.temp/430*100,"#ffb700"],["THROUGHPUT",o.throughput*10,"#00ff66"],["LATENCY",o.latency/130*100,"#ff3333"]];return E.jsxs("div",{children:[E.jsxs("div",{style:{fontFamily:"var(--disp)",fontSize:26,fontWeight:800,color:"var(--gold2)"},children:[o.power.toFixed(1),E.jsx("span",{style:{fontSize:11,color:"var(--dim)",marginLeft:6},children:"MW"})]}),e.map(([t,i,s])=>E.jsxs("div",{className:"holo-meter",children:[E.jsx("span",{style:{width:84},children:t}),E.jsx("div",{className:"bar",children:E.jsx("i",{style:{transform:`scaleX(${Math.min(1,i/100)})`,background:`linear-gradient(90deg, ${s}, #d4af37)`}})}),E.jsx("span",{style:{width:34,textAlign:"right",color:s},children:Math.min(999,Math.round(i))})]},t))]})}function Jb(){const o=Me(e=>e.pushLog);return E.jsx("div",{children:fy.map(e=>E.jsxs("div",{className:"holo-file",onClick:()=>{o("info","VAULT",`opened /${e.name} — holographic projection active`),gu().recognize("SWIPE",.7)},children:[E.jsx("span",{children:e.name}),E.jsxs("span",{style:{color:"var(--faint)"},children:[e.size," · ",e.mod]})]},e.name))})}const eA={terminal:"LIVE TERMINAL // BUS STREAM",telemetry:"CORE TELEMETRY // HOLO",files:"VAULT FILES // PROJECTION"};function tA(){const o=Me(x=>x.holoWindows),e=Me(x=>x.holoZ),t=Me(x=>x.moveHolo),i=Me(x=>x.resizeHolo),s=Me(x=>x.rotateHolo),a=Me(x=>x.focusHolo),c=Me(x=>x.minimizeHolo),u=Me(x=>x.closeHolo),h=tt.useRef(null),f=tt.useRef(new Map),p=gu(),v=(x,S,P)=>{x.stopPropagation(),a(S.id),h.current={id:S.id,mode:P,sx:x.clientX,sy:x.clientY,x:S.x,y:S.y,w:S.w,h:S.h,rot:S.rot,cx:S.x+S.w/2,cy:S.y+(S.minimized?14:S.h/2)},p.recognize(P==="rotate"?"ROTATE":"GRAB",.95);const L=D=>{const I=h.current;if(!I)return;const O=D.clientX-I.sx,w=D.clientY-I.sy;if(I.mode==="move")t(I.id,I.x+O,I.y+w);else if(I.mode==="resize")i(I.id,Math.max(210,I.w+O),Math.max(90,I.h+w));else{const R=Math.atan2(I.sy-I.cy,I.sx-I.cx),F=Math.atan2(D.clientY-I.cy,D.clientX-I.cx);let B=I.rot+(F-R)*180/Math.PI;for(;B>180;)B-=360;for(;B<-180;)B+=360;s(I.id,B)}},C=()=>{h.current=null,window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",C)};window.addEventListener("pointermove",L),window.addEventListener("pointerup",C)},g=(x,S)=>{x.stopPropagation();const P=1-x.deltaY*.0012,L=_t(S.w*P,210,720),C=_t(S.h*P,90,560);i(S.id,L,C),t(S.id,S.x-(L-S.w)/2,S.y-(C-S.h)/2),p.recognize("ZOOM",_t(Math.abs(x.deltaY)/120,.3,1))},_=(x,S)=>{if(a(S.id),f.current.set(x.pointerId,{x:x.clientX,y:x.clientY}),f.current.size===2){const P=[...f.current.values()];f.current.set(-1,{x:Math.hypot(P[0].x-P[1].x,P[0].y-P[1].y),y:0})}},M=(x,S)=>{if(f.current.has(x.pointerId)&&(f.current.set(x.pointerId,{x:x.clientX,y:x.clientY}),f.current.size===3)){const P=[...f.current.entries()].filter(([L])=>L!==-1).map(([,L])=>L);if(P.length===2){const L=Math.hypot(P[0].x-P[1].x,P[0].y-P[1].y),C=f.current.get(-1);if(C&&C.x>0){const D=L/C.x,I=_t(S.w*D,210,720),O=_t(S.h*D,90,560);i(S.id,I,O),p.recognize("PINCH",_t(Math.abs(D-1)*8,.3,1))}f.current.set(-1,{x:L,y:0})}}},b=x=>{f.current.delete(x.pointerId),f.current.delete(-1)};return E.jsxs("div",{className:"holo-layer",children:[o.map(x=>E.jsxs("div",{className:`holo-win ${x.z===e?"focused":""} ${x.minimized?"min":""}`,style:{left:x.x,top:x.y,width:x.w,height:x.minimized?"auto":x.h,zIndex:x.z,transform:`rotate(${x.rot}deg)`},onPointerDown:S=>_(S,x),onPointerMove:S=>M(S,x),onPointerUp:b,onWheel:S=>g(S,x),children:[E.jsxs("div",{className:"holo-bar",onPointerDown:S=>v(S,x,S.altKey?"rotate":"move"),onDoubleClick:()=>s(x.id,0),title:"drag: move · alt+drag: rotate · double-click: reset · wheel: zoom",children:[E.jsxs("span",{className:"holo-title",children:[eA[x.kind],Math.abs(x.rot)>.5&&E.jsxs("span",{style:{color:"var(--gold2)",marginLeft:8},children:["∠",x.rot.toFixed(0),"°"]})]}),E.jsxs("span",{className:"holo-btns",children:[E.jsx("button",{onClick:()=>c(x.id),title:"minimize",children:"—"}),E.jsx("button",{onClick:()=>u(x.id),title:"close",children:"×"})]})]}),E.jsxs("div",{className:"holo-body",children:[x.kind==="terminal"&&E.jsx(Zb,{}),x.kind==="telemetry"&&E.jsx(Qb,{}),x.kind==="files"&&E.jsx(Jb,{})]}),!x.minimized&&E.jsx("div",{className:"holo-resize",onPointerDown:S=>v(S,x,"resize")})]},x.id)),o.length===0&&E.jsx("div",{style:{position:"absolute",bottom:18,left:"50%",transform:"translateX(-50%)",pointerEvents:"none",fontSize:9,letterSpacing:"0.3em",color:"var(--faint)"},children:"HOLO DECK CLEAR — OPEN A WINDOW FROM THE RAIL"})]})}function qh(o,e,t){const i=s=>_t(Math.round(s),0,255).toString(16).padStart(2,"0");return`#${i(o)}${i(e)}${i(t)}`}function pi({label:o,value:e,min:t,max:i,step:s,fmt:a,onChange:c}){return E.jsxs("div",{className:"cl-row",children:[E.jsx("span",{children:o}),E.jsx("input",{className:"range",type:"range",min:t,max:i,step:s,value:e,onChange:u=>c(parseFloat(u.target.value))}),E.jsx("span",{className:"cl-val",children:a?a(e):e.toFixed(2)})]})}function nA(){const o=Ji(),e=o.labOpen;o.toggleLab;const t=o.set,i=Me(u=>u.pushLog),[s,a,c]=rb(o.tint);return E.jsxs("div",{className:`core-lab panel ${e?"open":""}`,children:[E.jsxs("div",{className:"panel-title gold",children:["CORE CONTROL LAB ",E.jsx("span",{className:"aux",children:"LIVE·RENDER"})]}),E.jsxs("div",{className:"panel-body",children:[E.jsx("div",{className:"cl-presets",children:Ey.map(u=>E.jsx("button",{className:`btn sm ${o.tint===(u.patch.tint??o.tint)&&o.speed===(u.patch.speed??o.speed)?"active":""}`,onClick:()=>{o.applyPreset(u),i("sys","LAB",`render preset engaged — ${u.name}`)},children:u.name},u.name))}),E.jsxs("div",{className:"cl-section",children:[E.jsx("div",{className:"cl-head",children:"PLASMA TINT"}),E.jsxs("div",{className:"cl-row",children:[E.jsx("span",{children:"HEX"}),E.jsx("input",{className:"input",style:{padding:"3px 7px",fontSize:10,letterSpacing:"0.1em"},value:o.tint.toUpperCase(),spellCheck:!1,onChange:u=>{const h=u.target.value;/^#[0-9a-fA-F]{6}$/.test(h)?t({tint:h.toLowerCase()}):/^[0-9a-fA-F]{6}$/.test(h)&&t({tint:`#${h.toLowerCase()}`})}}),E.jsx("span",{className:"cl-swatch",style:{background:o.tint,boxShadow:`0 0 12px ${o.tint}`}})]}),E.jsx("div",{className:"cl-swatches",children:Ty.map(u=>E.jsx("div",{className:`swatch ${o.tint===u?"sel":""}`,style:{background:u,color:u},onClick:()=>t({tint:u})},u))}),E.jsx(pi,{label:"R",value:s,min:0,max:255,step:1,fmt:u=>String(Math.round(u)),onChange:u=>t({tint:qh(u,a,c)})}),E.jsx(pi,{label:"G",value:a,min:0,max:255,step:1,fmt:u=>String(Math.round(u)),onChange:u=>t({tint:qh(s,u,c)})}),E.jsx(pi,{label:"B",value:c,min:0,max:255,step:1,fmt:u=>String(Math.round(u)),onChange:u=>t({tint:qh(s,a,u)})})]}),E.jsxs("div",{className:"cl-section",children:[E.jsx("div",{className:"cl-head",children:"MOTION"}),E.jsx(pi,{label:"SPEED",value:o.speed,min:.1,max:5,step:.05,fmt:u=>`${u.toFixed(2)}×`,onChange:u=>t({speed:u})})]}),E.jsxs("div",{className:"cl-section",children:[E.jsx("div",{className:"cl-head",children:"LIGHTING · BLOOM MATRIX"}),E.jsx(pi,{label:"BLOOM",value:o.bloomStrength,min:0,max:2.5,step:.01,onChange:u=>t({bloomStrength:u})}),E.jsx(pi,{label:"THRESH",value:o.bloomThreshold,min:0,max:1,step:.01,onChange:u=>t({bloomThreshold:u})}),E.jsx(pi,{label:"RADIUS",value:o.bloomRadius,min:0,max:1,step:.01,onChange:u=>t({bloomRadius:u})}),E.jsx(pi,{label:"EXPOSE",value:o.exposure,min:.4,max:1.8,step:.01,onChange:u=>t({exposure:u})}),E.jsx(pi,{label:"EMISSIVE",value:o.emissive,min:.2,max:3,step:.01,fmt:u=>`${u.toFixed(2)}×`,onChange:u=>t({emissive:u})})]}),E.jsxs("div",{className:"cl-section",children:[E.jsx("div",{className:"cl-head",children:"PARTICLE MATRIX"}),E.jsx(pi,{label:"DUST·N",value:o.dustDensity,min:0,max:1,step:.01,fmt:u=>`${Math.round(u*100)}%`,onChange:u=>t({dustDensity:u})}),E.jsx(pi,{label:"DUST·S",value:o.dustScale,min:.2,max:3,step:.05,fmt:u=>`${u.toFixed(2)}×`,onChange:u=>t({dustScale:u})}),E.jsx(pi,{label:"STREAM·N",value:o.streamDensity,min:0,max:1,step:.01,fmt:u=>`${Math.round(u*100)}%`,onChange:u=>t({streamDensity:u})}),E.jsx(pi,{label:"STREAM·S",value:o.streamScale,min:.2,max:3,step:.05,fmt:u=>`${u.toFixed(2)}×`,onChange:u=>t({streamScale:u})})]}),E.jsxs("div",{className:"cl-section",children:[E.jsx("div",{className:"cl-head",children:"OPTICS"}),E.jsxs("div",{className:"cl-row",children:[E.jsx("span",{children:"DEPTH·DOF"}),E.jsx("button",{className:`btn sm ${o.dof?"active":""}`,onClick:()=>t({dof:!o.dof}),style:{gridColumn:"2 / 4",justifySelf:"start"},children:o.dof?"ENABLED":"DISABLED"})]})]}),E.jsx("button",{className:"btn sm wide",onClick:()=>{Ji.getState().reset(),i("sys","LAB",`render matrix restored to defaults (${Fo.tint})`)},children:"RESTORE DEFAULTS"})]})]})}const iA={core:{title:"CENTRAL CORE",sub:"monumental energy arc · plasma conduit array"},agents:{title:"SECRET AGENT HQ",sub:"autonomous swarm operations floor · 8 units"},intel:{title:"INTELLIGENCE LATTICE",sub:"65,000-particle SDF humanoid · spectrum-bound skeleton"},network:{title:"NEURAL CORTEX",sub:"10-layer token propagation engine"},missions:{title:"MISSION MIND-MAP",sub:"living operational graph · drag · link · pulse"},memory:{title:"MEMORY VAULT",sub:"obsidian-ready backlink constellation"}};function rA(){const o=tt.useRef(null),e=tt.useRef(null),t=Me(g=>g.tab),i=Me(g=>g.holoOpen),s=Me(g=>g.engineFailed),[a,c]=tt.useState(!1),[u,h]=tt.useState(0),f=tt.useRef(!0);tt.useEffect(()=>{const g=o.current;if(!g)return;const _=Cb(g);if(_){_.onFrame=b=>Vi.frameTick(b),Vi.init();const M=()=>_.resize();return window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M),Rb()}}Vi.init()},[]),tt.useEffect(()=>{if(f.current){f.current=!1;return}c(!0),h(_=>_+1);const g=setTimeout(()=>c(!1),720);return()=>clearTimeout(g)},[t]);const p=iA[t],v=t==="missions"||t==="memory";return E.jsxs("div",{className:`viewport-frame ${a?"warp":""} ${v?"dim":""}`,children:[E.jsx("div",{className:"canvas-host",ref:e,children:E.jsx("canvas",{ref:o})}),a&&E.jsx("div",{className:"warp-grid"}),E.jsx("div",{className:`fx-flash ${u>0?"go":""}`},u),E.jsx("div",{className:"fx-scan"}),E.jsx("div",{className:"fx-vignette"}),E.jsx("span",{className:"cb cb1"}),E.jsx("span",{className:"cb cb2"}),E.jsx("span",{className:"cb cb3"}),E.jsx("span",{className:"cb cb4"}),E.jsxs("div",{className:"tab-title",children:[E.jsx("h1",{children:p.title}),E.jsx("p",{children:p.sub}),E.jsx("div",{className:"rule"})]},t),E.jsx("div",{className:"hud-side-note l",children:"VORTEX // SECTOR Ω-77 · OBSIDIAN SUBSTRATE"}),E.jsx("div",{className:"hud-side-note r",children:"PLASMA ENVELOPE 312K · CONTAINMENT NOMINAL"}),t==="missions"&&E.jsx($b,{}),t==="memory"&&E.jsx(Kb,{}),i&&t==="core"&&E.jsx(tA,{}),E.jsx(nA,{}),s&&E.jsx("div",{style:{position:"absolute",inset:0,display:"grid",placeItems:"center",zIndex:30},children:E.jsxs("div",{className:"panel",style:{padding:26,maxWidth:420,textAlign:"center"},children:[E.jsx("div",{className:"panel-title gold",children:"RENDER FALLBACK"}),E.jsx("p",{style:{color:"var(--dim)",fontSize:11,lineHeight:1.7},children:"WebGL2 pipeline unavailable in this environment. VORTEX remains operational in telemetry-only mode — all subsystems, graphs and the swarm continue to run."})]})}),!si()&&!s&&E.jsx("span",{style:{display:"none"},children:(mn.supported,"")})]})}function jc({series:o,color:e,max:t}){const i=tt.useRef(null);return tt.useEffect(()=>{let s=0;const a=()=>{s=requestAnimationFrame(a);const c=i.current;if(!c)return;const u=c.getContext("2d");if(!u)return;const h=190,f=40;c.width!==h&&(c.width=h),c.height!==f&&(c.height=f),u.clearRect(0,0,h,f);const p=o();if(p.length<2)return;let v=t??0;if(!v){for(const M of p)M>v&&(v=M);v=v*1.15||1}u.beginPath();for(let M=0;M<p.length;M++){const b=M/(p.length-1)*h,x=f-3-Math.min(p[M],v)/v*(f-8);M===0?u.moveTo(b,x):u.lineTo(b,x)}u.strokeStyle=e,u.lineWidth=1.4,u.shadowColor=e,u.shadowBlur=5,u.stroke(),u.shadowBlur=0,u.lineTo(h,f),u.lineTo(0,f),u.closePath(),u.globalAlpha=.09,u.fillStyle=e,u.fill(),u.globalAlpha=1;const g=h,_=f-3-Math.min(p[p.length-1],v)/v*(f-8);u.fillStyle=e,u.fillRect(g-2.5,_-2.5,4,4)};return a(),()=>cancelAnimationFrame(s)},[o,e,t]),E.jsx("canvas",{ref:i,style:{width:"100%",height:26,display:"block"}})}function sA(){const o=Me(p=>p.telemetry),e=Me(p=>p.agents),t=Me(p=>p.selectedAgentId),i=Me(p=>p.selectAgent),s=Me(p=>p.setTab),a=Me(p=>p.setCameraMode),c=Me(p=>p.log),u=tt.useRef(null);tt.useEffect(()=>{const p=u.current;p&&(p.scrollTop=p.scrollHeight)},[c]);const h=p=>{i(p),s("agents"),a("AGENT_FOLLOW")},f=p=>{i(p),s("agents"),a("WORKSTATION_FOCUS")};return E.jsxs("aside",{className:"right-rail",children:[E.jsxs("section",{className:"panel",children:[E.jsxs("div",{className:"panel-title",children:["CORE TELEMETRY ",E.jsx("span",{className:"aux",children:"LIVE·5Hz"})]}),E.jsxs("div",{className:"panel-body spark-grid",children:[E.jsxs("div",{className:"spark-cell",children:[E.jsx("div",{className:"spark-label",children:"POWER DRAW"}),E.jsxs("div",{className:"spark-val hot",children:[o.power.toFixed(1),E.jsx("small",{children:"MW"})]}),E.jsx(jc,{series:()=>qa.power,color:"#ffb700",max:110})]}),E.jsxs("div",{className:"spark-cell",children:[E.jsx("div",{className:"spark-label",children:"CORE TEMP"}),E.jsxs("div",{className:"spark-val cold",children:[o.temp.toFixed(0),E.jsx("small",{children:"K"})]}),E.jsx(jc,{series:()=>qa.temp,color:"#00f0ff",max:430})]}),E.jsxs("div",{className:"spark-cell",children:[E.jsx("div",{className:"spark-label",children:"PKT RATE"}),E.jsxs("div",{className:"spark-val cold",children:[o.packets.toFixed(0),E.jsx("small",{children:"/s"})]}),E.jsx(jc,{series:()=>qa.packets,color:"#00f0ff",max:1e3})]}),E.jsxs("div",{className:"spark-cell",children:[E.jsx("div",{className:"spark-label",children:"NN LATENCY"}),E.jsxs("div",{className:"spark-val hot",children:[o.latency.toFixed(1),E.jsx("small",{children:"ms"})]}),E.jsx(jc,{series:()=>qa.latency,color:"#d4af37",max:130})]})]})]}),E.jsxs("section",{className:"panel",children:[E.jsxs("div",{className:"panel-title",children:["SWARM ROSTER ",E.jsxs("span",{className:"aux",children:[e.length," UNITS"]})]}),E.jsx("div",{className:"panel-body roster",children:e.map(p=>E.jsxs("div",{className:`roster-row ${t===p.id?"sel":""}`,onClick:()=>h(p.id),onDoubleClick:()=>f(p.id),title:"click: follow · double-click: workstation focus",children:[E.jsx("span",{className:"dot","data-status":p.status,style:{color:p.color}}),E.jsxs("div",{children:[E.jsxs("div",{className:"roster-name",style:{color:p.color},children:[p.codename," ",E.jsxs("span",{style:{color:"var(--faint)",fontWeight:400},children:["· ",p.role]})]}),E.jsx("div",{className:"roster-task",children:p.task})]}),E.jsxs("div",{className:"roster-right",children:[E.jsx("div",{className:"roster-status",children:p.status}),E.jsx("div",{className:"prog",children:E.jsx("div",{className:"prog-fill",style:{transform:`scaleX(${p.progress/100})`}})})]})]},p.id))})]}),E.jsxs("section",{className:"panel",style:{flex:1,minHeight:120,display:"flex",flexDirection:"column"},children:[E.jsxs("div",{className:"panel-title",children:["EVENT STREAM ",E.jsx("span",{className:"aux",children:si()?"BUS·LIVE":"BUS"})]}),E.jsxs("div",{className:"panel-body log-list",ref:u,children:[c.map(p=>E.jsxs("div",{className:"log-line","data-level":p.level,children:[E.jsx("span",{className:"t",children:p.time}),E.jsxs("b",{children:["[",p.tag,"]"]}),p.msg]},p.id)),c.length===0&&E.jsxs("div",{className:"log-line","data-level":"sys",children:[E.jsx("b",{children:"[SYS]"}),"awaiting first transmission…"]})]})]})]})}const $h=[.5,1,2,4];function oA(){const o=Me(f=>f.tlPlaying),e=Me(f=>f.tlTime),t=Me(f=>f.tlSpeed),i=Me(f=>f.tlLoop),s=Me(f=>f.setTimeline),a=tt.useRef(null),c=tt.useRef(!1),u=f=>{const p=a.current;if(!p)return 0;const v=p.getBoundingClientRect();return Math.min(1,Math.max(0,(f-v.left)/v.width))*Mr},h=f=>{const p=Math.floor(f),v=Math.floor((f-p)*10);return`00:${String(p).padStart(2,"0")}.${v}`};return E.jsxs("div",{className:"bottom-timeline",children:[E.jsx("button",{className:"tl-btn",onClick:()=>{Vi.togglePlay(),mn.chime(o?700:1400)},title:o?"pause cinematic":"play 30s cinematic demo",children:o?E.jsxs("svg",{viewBox:"0 0 12 12",fill:"currentColor",children:[E.jsx("rect",{x:"2",y:"1.5",width:"3",height:"9"}),E.jsx("rect",{x:"7",y:"1.5",width:"3",height:"9"})]}):E.jsx("svg",{viewBox:"0 0 12 12",fill:"currentColor",children:E.jsx("path",{d:"M2.5 1.2l8 4.8-8 4.8z"})})}),E.jsxs("button",{className:"tl-speed",onClick:()=>{const f=$h.indexOf(t),p=$h[(f+1)%$h.length];s({speed:p})},title:"playback speed",children:[t,"×"]}),E.jsx("button",{className:"tl-btn ",style:{color:i?"var(--gold2)":"var(--faint)"},onClick:()=>s({loop:!i}),title:"loop sequence",children:E.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",children:[E.jsx("path",{d:"M17 2l4 4-4 4"}),E.jsx("path",{d:"M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"}),E.jsx("path",{d:"M21 13v1a4 4 0 0 1-4 4H3"})]})}),E.jsxs("div",{className:"tl-track",ref:a,onPointerDown:f=>{var p,v;c.current=!0,Vi.scrubbing=!0,Vi.scrubTo(u(f.clientX)),(v=(p=f.target).setPointerCapture)==null||v.call(p,f.pointerId)},onPointerMove:f=>{c.current&&Vi.scrubTo(u(f.clientX))},onPointerUp:()=>{c.current=!1,Vi.scrubbing=!1},children:[E.jsx("div",{className:"tl-rail"}),E.jsx("div",{className:"tl-fill",style:{width:`${e/Mr*100}%`}}),Zh.map((f,p)=>E.jsx("div",{className:"tl-marker","data-kind":f.kind,style:{left:`${f.t/Mr*100}%`},title:`${f.kind}: ${f.value}`},p)),E.jsx("div",{className:"tl-head",style:{left:`${e/Mr*100}%`}})]}),E.jsxs("div",{className:"tl-time",children:[h(e)," ",E.jsxs("span",{style:{color:"var(--faint)"},children:["/ ",h(Mr)]}),E.jsx("small",{children:"DIRECTOR TIMELINE"})]})]})}function aA(){const o=Me(c=>c.log),[e,t]=tt.useState(""),i=o.slice(-16),s=c=>E.jsx(E.Fragment,{children:i.map(u=>E.jsxs("span",{className:"ticker-item",children:[E.jsxs("b",{children:["[",u.tag,"]"]})," ",u.msg]},`${c}-${u.id}`))}),a=()=>{e.trim()&&(Vi.handleCommand(e),t(""))};return E.jsxs("div",{className:"bottom-stream",children:[E.jsx("div",{className:"ticker","aria-hidden":!0,children:E.jsxs("div",{className:"ticker-track",children:[s("a"),s("b")]})}),E.jsxs("div",{className:"cmd-wrap",children:[E.jsx("span",{className:"cmd-prompt",children:"Ω>"}),E.jsx("input",{className:"cmd-input",value:e,placeholder:"command the vortex… (try: human face · spike · briefing · help)",onChange:c=>t(c.target.value),onKeyDown:c=>{c.key==="Enter"&&a()},spellCheck:!1})]})]})}function lA(){const o=Me(i=>i.debugOpen),e=Me(i=>i.stats),t=tt.useRef(null);return tt.useEffect(()=>{let i=0;const s=()=>{var g;i=requestAnimationFrame(s);const a=t.current,c=si();if(!a||!c)return;const u=a.getContext("2d");if(!u)return;const h=260,f=44;a.width!==h&&(a.width=h),a.height!==f&&(a.height=f),u.clearRect(0,0,h,f),u.strokeStyle="rgba(212,175,55,0.5)",u.setLineDash([3,3]),u.beginPath();const p=f-16.7/40*f;u.moveTo(0,p),u.lineTo(h,p),u.stroke(),u.setLineDash([]);const v=((g=c.fps)==null?void 0:g.history)??[];if(!(v.length<2)){u.beginPath();for(let _=0;_<v.length;_++){const M=_/(v.length-1)*h,b=f-Math.min(1,v[_]/40)*f;_===0?u.moveTo(M,b):u.lineTo(M,b)}u.strokeStyle="#00f0ff",u.lineWidth=1.2,u.stroke()}};return s(),()=>cancelAnimationFrame(i)},[]),E.jsxs("div",{className:`debug-console panel ${o?"open":""}`,children:[E.jsxs("div",{className:"panel-title gold",children:["DEBUG // SELF-HEALING ",E.jsx("span",{className:"aux",children:"[`]"})]}),E.jsxs("div",{className:"panel-body",children:[E.jsx("canvas",{ref:t,style:{width:"100%",height:44,display:"block",marginBottom:8}}),E.jsxs("div",{className:"dbg-grid",children:[E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"FPS"}),E.jsx("b",{className:"gold",children:e.fps.toFixed(1)})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"FRAME"}),E.jsxs("b",{children:[e.frameMs.toFixed(2)," ms"]})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"DRAW CALLS"}),E.jsx("b",{children:e.drawCalls})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"TRIANGLES"}),E.jsx("b",{children:e.triangles.toLocaleString()})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"POINTS"}),E.jsx("b",{children:e.points.toLocaleString()})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"RES SCALE"}),E.jsxs("b",{children:[e.resScale.toFixed(2),"×"]})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"EVENTS/S"}),E.jsx("b",{children:Pt.eventsPerSec})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"GPU HEADROOM"}),E.jsx("b",{className:"gold",children:fx.headroom()})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"BUS TOTAL"}),E.jsx("b",{children:Pt.totalEmitted})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"AUDIO"}),E.jsx("b",{children:mn.supported?"WEB·AUDIO":"MOCK"})]})]}),E.jsxs("div",{className:"dbg-shaderlog",children:[E.jsxs("div",{children:[E.jsx("span",{className:"ok",children:"✓"})," plasma conduit shader — linked 3.1ms"]}),E.jsxs("div",{children:[E.jsx("span",{className:"ok",children:"✓"})," humanoid lattice shader — linked 4.7ms"]}),E.jsxs("div",{children:[E.jsx("span",{className:"ok",children:"✓"})," ripple platform shader — linked 1.9ms"]}),E.jsxs("div",{children:[E.jsx("span",{className:"ok",children:"✓"})," adaptive resolution governor — ARMED"]})]})]})]})}const Sv={STRATEGIST:"#d4af37",RESEARCHER:"#00f0ff",CODER:"#00ff66",ANALYST:"#7ad7ff",SECURITY:"#ff3333",CREATIVE:"#ff7ad9",AUTOMATION:"#ffb700",EXECUTIVE:"#e0e6ed"},cA=["#d4af37","#ffb700","#00f0ff","#00ff66","#7ad7ff","#ff3333","#ff7ad9","#e0e6ed","#9d7bff","#7dffa8"],Kh=["STRATEGIST","RESEARCHER","CODER","ANALYST","SECURITY","CREATIVE","AUTOMATION","EXECUTIVE"];function uA(){const o=Me(x=>x.labOpen),e=Me(x=>x.setLabOpen),t=Me(x=>x.agentDefs),i=Me(x=>x.setAgentDefs),s=Me(x=>x.pushLog),[a,c]=tt.useState([]),[u,h]=tt.useState(null),[f,p]=tt.useState("");if(tt.useEffect(()=>{var x;o&&(c(t.map(S=>({...S,personality:{...S.personality}}))),h(((x=t[0])==null?void 0:x.id)??null),p(""))},[o,t]),!o)return null;const v=a.find(x=>x.id===u)??null,g=x=>{v&&c(S=>S.map(P=>P.id===v.id?{...P,...x}:P))},_=(x,S)=>{v&&c(P=>P.map(L=>L.id===v.id?{...L,personality:{...L.personality,[x]:S}}:L))},M=()=>{const x=Kh[a.length%Kh.length],S={id:Pi("ag"),name:ng[a.length%ng.length],codename:tg[a.length%tg.length],role:x,department:"RESERVE",color:Sv[x],speed:1,personality:{focus:.6,drive:.7,sociability:.5},workstation:a.length%8};c(P=>[...P,S]),h(S.id)},b=()=>{if(a.length<3){s("err","LAB","roster rejected — minimum 3 autonomous units required");return}i(a),s("ok","LAB",`roster committed — ${a.length} units hot-swapped onto the floor`),e(!1)};return E.jsx("div",{className:"modal-backdrop",onClick:()=>e(!1),children:E.jsxs("div",{className:"lab-modal panel",onClick:x=>x.stopPropagation(),children:[E.jsxs("div",{className:"lab-head",children:["AGENT CONFIG LAB ",E.jsx("span",{className:"sub",children:"// SWARM PERSONA ENGINE — PERSISTED TO LOCAL VAULT"})]}),E.jsxs("div",{className:"lab-list",children:[a.map(x=>E.jsxs("button",{className:`lab-item ${x.id===u?"sel":""}`,onClick:()=>h(x.id),children:[E.jsx("span",{className:"sw",style:{background:x.color,color:x.color}}),E.jsxs("span",{children:[x.codename,E.jsx("br",{}),E.jsxs("span",{style:{fontSize:7.5,color:"var(--faint)",fontWeight:400},children:[x.role," · WS-",x.workstation]})]})]},x.id)),E.jsx("button",{className:"btn sm gold wide mt8",onClick:M,children:"+ NEW UNIT"})]}),E.jsx("div",{className:"lab-form",children:v?E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"field",children:[E.jsx("span",{className:"field-label",children:"Name"}),E.jsx("input",{className:"input",value:v.name,onChange:x=>g({name:x.target.value.toUpperCase()})})]}),E.jsxs("div",{className:"field",children:[E.jsx("span",{className:"field-label",children:"Codename"}),E.jsx("input",{className:"input",value:v.codename,onChange:x=>g({codename:x.target.value.toUpperCase()})})]}),E.jsxs("div",{className:"field",children:[E.jsx("span",{className:"field-label",children:"Role"}),E.jsx("select",{className:"input select",value:v.role,onChange:x=>g({role:x.target.value,color:Sv[x.target.value]??v.color}),children:Kh.map(x=>E.jsx("option",{value:x,children:x},x))})]}),E.jsxs("div",{className:"field",children:[E.jsx("span",{className:"field-label",children:"Department"}),E.jsx("input",{className:"input",value:v.department,onChange:x=>g({department:x.target.value.toUpperCase()})})]}),E.jsxs("div",{className:"field",children:[E.jsx("span",{className:"field-label",children:"Signature Color"}),E.jsx("div",{className:"swatches",children:cA.map(x=>E.jsx("div",{className:`swatch ${v.color===x?"sel":""}`,style:{background:x,color:x},onClick:()=>g({color:x})},x))})]}),E.jsxs("div",{className:"field",children:[E.jsxs("span",{className:"field-label",children:["Workstation (",v.workstation,")"]}),E.jsx("input",{className:"range",type:"range",min:0,max:7,step:1,value:v.workstation,onChange:x=>g({workstation:parseInt(x.target.value,10)})})]}),E.jsxs("div",{className:"field",children:[E.jsxs("span",{className:"field-label",children:["Move Speed ×",v.speed.toFixed(2)]}),E.jsx("input",{className:"range",type:"range",min:.6,max:2,step:.05,value:v.speed,onChange:x=>g({speed:parseFloat(x.target.value)})})]}),E.jsxs("div",{className:"field",children:[E.jsxs("span",{className:"field-label",children:["Focus ",(v.personality.focus*100).toFixed(0),"%"]}),E.jsx("input",{className:"range",type:"range",min:0,max:1,step:.05,value:v.personality.focus,onChange:x=>_("focus",parseFloat(x.target.value))})]}),E.jsxs("div",{className:"field",children:[E.jsxs("span",{className:"field-label",children:["Drive ",(v.personality.drive*100).toFixed(0),"%"]}),E.jsx("input",{className:"range",type:"range",min:0,max:1,step:.05,value:v.personality.drive,onChange:x=>_("drive",parseFloat(x.target.value))})]}),E.jsxs("div",{className:"field",children:[E.jsxs("span",{className:"field-label",children:["Sociability ",(v.personality.sociability*100).toFixed(0),"%"]}),E.jsx("input",{className:"range",type:"range",min:0,max:1,step:.05,value:v.personality.sociability,onChange:x=>_("sociability",parseFloat(x.target.value))})]}),E.jsxs("div",{className:"field full",children:[E.jsx("span",{className:"field-label",children:"Import / Export JSON"}),E.jsx("textarea",{className:"textarea",placeholder:"paste roster JSON here, then IMPORT…",value:f,onChange:x=>p(x.target.value)})]})]}):E.jsx("div",{className:"field full text-dim",children:"select a unit to configure"})}),E.jsxs("div",{className:"lab-foot",children:[E.jsx("button",{className:"btn sm",onClick:()=>{if(!v)return;const x={...v,id:Pi("ag"),codename:`${v.codename}-β`,personality:{...v.personality}};c(S=>[...S,x]),h(x.id)},children:"DUPLICATE"}),E.jsx("button",{className:"btn sm danger",onClick:()=>{var x;!v||a.length<=3||(c(S=>S.filter(P=>P.id!==v.id)),h(((x=a[0])==null?void 0:x.id)??null))},children:"DELETE"}),E.jsx("button",{className:"btn sm",onClick:()=>{c(Tv.map(x=>({...x,personality:{...x.personality}}))),s("sys","LAB","roster reset to factory defaults")},children:"RESET"}),E.jsx("button",{className:"btn sm",onClick:()=>p(JSON.stringify(a,null,2)),children:"EXPORT"}),E.jsx("button",{className:"btn sm",onClick:()=>{var x;try{const S=JSON.parse(f);if(!Array.isArray(S))throw new Error("not an array");const P=S;for(const L of P)if(!L.id||!L.name||!L.role)throw new Error("malformed agent");c(P),h(((x=P[0])==null?void 0:x.id)??null),s("ok","LAB",`roster imported — ${P.length} units`)}catch(S){s("err","LAB",`import failed — ${S.message}`)}},children:"IMPORT"}),E.jsx("span",{className:"spacer"}),E.jsxs("span",{className:"lab-live",children:["TASK POOLS: ",Yc[(v==null?void 0:v.role)??"CODER"].length," / ROLE"]}),E.jsx("button",{className:"btn gold",onClick:b,children:"COMMIT ROSTER"}),E.jsx("button",{className:"btn",onClick:()=>e(!1),children:"CLOSE"})]})]})})}function dA(){const o=Me(h=>h.booted),e=Me(h=>h.setBooted),t=Me(h=>h.pushLog),[i,s]=tt.useState(0),[a,c]=tt.useState(!1);tt.useEffect(()=>{if(o)return;const h=setInterval(()=>{s(f=>f>=po.length?(clearInterval(h),f):f+1)},120);return()=>clearInterval(h)},[o]),tt.useEffect(()=>{if(i>=po.length&&!o){const h=setTimeout(()=>{e(!0),t("sys","BOOT","VORTEX_HUD Ω online — all systems nominal"),t("info","DIRECTOR","press ▶ on the timeline for the 30 s cinematic sequence")},500),f=setTimeout(()=>c(!0),1250);return()=>{clearTimeout(h),clearTimeout(f)}}},[i,o,e,t]);const u=()=>{o||s(po.length)};return o&&a?null:E.jsxs("div",{className:`boot-overlay ${o?"done":""}`,onClick:u,children:[E.jsxs("div",{className:"boot-brand",children:["VORTEX_HUD",E.jsx("span",{children:"Ω"})]}),E.jsx("div",{className:"boot-lines",children:po.slice(0,i).map((h,f)=>E.jsx("div",{className:h.cls,children:h.text},f))}),E.jsx("div",{className:"boot-bar",children:E.jsx("div",{className:"boot-fill",style:{transform:`scaleX(${i/po.length})`}})}),E.jsx("div",{className:"boot-hint",children:i>=po.length?"INITIALIZING…":"CLICK TO FAST-BOOT"})]})}function hA(){const[o,e]=tt.useState(null);tt.useEffect(()=>Pt.on("GESTURE_DETECTED",({gesture:s})=>{e({gesture:s,at:performance.now()})}),[]);const t=gu();return E.jsxs("div",{className:"gesture-chip",children:[E.jsx("span",{className:"g-dot"}),E.jsxs("span",{children:["VISION ",E.jsx("b",{children:t.vision.mode})]}),E.jsxs("span",{children:["HAND ",E.jsx("b",{children:t.hand.mode})]}),E.jsxs("span",{children:["GESTURE"," ",E.jsx("b",{style:{color:o&&performance.now()-o.at<1500?"var(--cyan)":"var(--faint)"},children:o?o.gesture:"——"})]})]})}function fA(){const o=Me(t=>t.setDebugOpen),e=Me(t=>t.debugOpen);return tt.useEffect(()=>{const t=()=>{mn.ensure(),mn.resume(),window.removeEventListener("pointerdown",t)};return window.addEventListener("pointerdown",t),()=>window.removeEventListener("pointerdown",t)},[]),tt.useEffect(()=>{const t=Sy();return()=>{t.stop()}},[]),tt.useEffect(()=>{const t=i=>{if(i.key==="`"||i.key==="~"){const s=i.target;if(s&&(s.tagName==="INPUT"||s.tagName==="TEXTAREA"))return;o(!Me.getState().debugOpen)}};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[o]),E.jsxs("div",{className:"shell","data-debug":e?"1":"0",children:[E.jsx(My,{}),E.jsx(Yb,{}),E.jsx(rA,{}),E.jsx(sA,{}),E.jsx(oA,{}),E.jsx(aA,{}),E.jsx(hA,{}),E.jsx(lA,{}),E.jsx(uA,{}),E.jsx(dA,{})]})}ty.createRoot(document.getElementById("root")).render(E.jsx(fA,{}));
