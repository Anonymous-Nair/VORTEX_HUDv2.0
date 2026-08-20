(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function Tv(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var ih={exports:{}},Io={},rh={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function Y_(){if(q0)return St;q0=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),x=Symbol.iterator;function g(G){return G===null||typeof G!="object"?null:(G=x&&G[x]||G["@@iterator"],typeof G=="function"?G:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function v(G,J,Ue){this.props=G,this.context=J,this.refs=b,this.updater=Ue||_}v.prototype.isReactComponent={},v.prototype.setState=function(G,J){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,J,"setState")},v.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function y(){}y.prototype=v.prototype;function P(G,J,Ue){this.props=G,this.context=J,this.refs=b,this.updater=Ue||_}var L=P.prototype=new y;L.constructor=P,M(L,v.prototype),L.isPureReactComponent=!0;var A=Array.isArray,D=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(G,J,Ue){var Ke,Ge={},le=null,xe=null;if(J!=null)for(Ke in J.ref!==void 0&&(xe=J.ref),J.key!==void 0&&(le=""+J.key),J)D.call(J,Ke)&&!O.hasOwnProperty(Ke)&&(Ge[Ke]=J[Ke]);var me=arguments.length-2;if(me===1)Ge.children=Ue;else if(1<me){for(var Oe=Array(me),nt=0;nt<me;nt++)Oe[nt]=arguments[nt+2];Ge.children=Oe}if(G&&G.defaultProps)for(Ke in me=G.defaultProps,me)Ge[Ke]===void 0&&(Ge[Ke]=me[Ke]);return{$$typeof:a,type:G,key:le,ref:xe,props:Ge,_owner:I.current}}function R(G,J){return{$$typeof:a,type:G.type,key:J,ref:G.ref,props:G.props,_owner:G._owner}}function F(G){return typeof G=="object"&&G!==null&&G.$$typeof===a}function B(G){var J={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(Ue){return J[Ue]})}var z=/\/+/g;function K(G,J){return typeof G=="object"&&G!==null&&G.key!=null?B(""+G.key):J.toString(36)}function te(G,J,Ue,Ke,Ge){var le=typeof G;(le==="undefined"||le==="boolean")&&(G=null);var xe=!1;if(G===null)xe=!0;else switch(le){case"string":case"number":xe=!0;break;case"object":switch(G.$$typeof){case a:case e:xe=!0}}if(xe)return xe=G,Ge=Ge(xe),G=Ke===""?"."+K(xe,0):Ke,A(Ge)?(Ue="",G!=null&&(Ue=G.replace(z,"$&/")+"/"),te(Ge,J,Ue,"",function(nt){return nt})):Ge!=null&&(F(Ge)&&(Ge=R(Ge,Ue+(!Ge.key||xe&&xe.key===Ge.key?"":(""+Ge.key).replace(z,"$&/")+"/")+G)),J.push(Ge)),1;if(xe=0,Ke=Ke===""?".":Ke+":",A(G))for(var me=0;me<G.length;me++){le=G[me];var Oe=Ke+K(le,me);xe+=te(le,J,Ue,Oe,Ge)}else if(Oe=g(G),typeof Oe=="function")for(G=Oe.call(G),me=0;!(le=G.next()).done;)le=le.value,Oe=Ke+K(le,me++),xe+=te(le,J,Ue,Oe,Ge);else if(le==="object")throw J=String(G),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return xe}function Y(G,J,Ue){if(G==null)return G;var Ke=[],Ge=0;return te(G,Ke,"","",function(le){return J.call(Ue,le,Ge++)}),Ke}function oe(G){if(G._status===-1){var J=G._result;J=J(),J.then(function(Ue){(G._status===0||G._status===-1)&&(G._status=1,G._result=Ue)},function(Ue){(G._status===0||G._status===-1)&&(G._status=2,G._result=Ue)}),G._status===-1&&(G._status=0,G._result=J)}if(G._status===1)return G._result.default;throw G._result}var Z={current:null},$={transition:null},se={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:$,ReactCurrentOwner:I};function de(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:Y,forEach:function(G,J,Ue){Y(G,function(){J.apply(this,arguments)},Ue)},count:function(G){var J=0;return Y(G,function(){J++}),J},toArray:function(G){return Y(G,function(J){return J})||[]},only:function(G){if(!F(G))throw Error("React.Children.only expected to receive a single React element child.");return G}},St.Component=v,St.Fragment=t,St.Profiler=s,St.PureComponent=P,St.StrictMode=i,St.Suspense=h,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,St.act=de,St.cloneElement=function(G,J,Ue){if(G==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+G+".");var Ke=M({},G.props),Ge=G.key,le=G.ref,xe=G._owner;if(J!=null){if(J.ref!==void 0&&(le=J.ref,xe=I.current),J.key!==void 0&&(Ge=""+J.key),G.type&&G.type.defaultProps)var me=G.type.defaultProps;for(Oe in J)D.call(J,Oe)&&!O.hasOwnProperty(Oe)&&(Ke[Oe]=J[Oe]===void 0&&me!==void 0?me[Oe]:J[Oe])}var Oe=arguments.length-2;if(Oe===1)Ke.children=Ue;else if(1<Oe){me=Array(Oe);for(var nt=0;nt<Oe;nt++)me[nt]=arguments[nt+2];Ke.children=me}return{$$typeof:a,type:G.type,key:Ge,ref:le,props:Ke,_owner:xe}},St.createContext=function(G){return G={$$typeof:c,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},G.Provider={$$typeof:o,_context:G},G.Consumer=G},St.createElement=w,St.createFactory=function(G){var J=w.bind(null,G);return J.type=G,J},St.createRef=function(){return{current:null}},St.forwardRef=function(G){return{$$typeof:u,render:G}},St.isValidElement=F,St.lazy=function(G){return{$$typeof:p,_payload:{_status:-1,_result:G},_init:oe}},St.memo=function(G,J){return{$$typeof:f,type:G,compare:J===void 0?null:J}},St.startTransition=function(G){var J=$.transition;$.transition={};try{G()}finally{$.transition=J}},St.unstable_act=de,St.useCallback=function(G,J){return Z.current.useCallback(G,J)},St.useContext=function(G){return Z.current.useContext(G)},St.useDebugValue=function(){},St.useDeferredValue=function(G){return Z.current.useDeferredValue(G)},St.useEffect=function(G,J){return Z.current.useEffect(G,J)},St.useId=function(){return Z.current.useId()},St.useImperativeHandle=function(G,J,Ue){return Z.current.useImperativeHandle(G,J,Ue)},St.useInsertionEffect=function(G,J){return Z.current.useInsertionEffect(G,J)},St.useLayoutEffect=function(G,J){return Z.current.useLayoutEffect(G,J)},St.useMemo=function(G,J){return Z.current.useMemo(G,J)},St.useReducer=function(G,J,Ue){return Z.current.useReducer(G,J,Ue)},St.useRef=function(G){return Z.current.useRef(G)},St.useState=function(G){return Z.current.useState(G)},St.useSyncExternalStore=function(G,J,Ue){return Z.current.useSyncExternalStore(G,J,Ue)},St.useTransition=function(){return Z.current.useTransition()},St.version="18.3.1",St}var $0;function Zf(){return $0||($0=1,rh.exports=Y_()),rh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function q_(){if(K0)return Io;K0=1;var a=Zf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,f){var p,x={},g=null,_=null;f!==void 0&&(g=""+f),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(_=h.ref);for(p in h)i.call(h,p)&&!o.hasOwnProperty(p)&&(x[p]=h[p]);if(u&&u.defaultProps)for(p in h=u.defaultProps,h)x[p]===void 0&&(x[p]=h[p]);return{$$typeof:e,type:u,key:g,ref:_,props:x,_owner:s.current}}return Io.Fragment=t,Io.jsx=c,Io.jsxs=c,Io}var Z0;function $_(){return Z0||(Z0=1,ih.exports=q_()),ih.exports}var E=$_(),rc={},sh={exports:{}},si={},ah={exports:{}},oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function K_(){return Q0||(Q0=1,(function(a){function e($,se){var de=$.length;$.push(se);e:for(;0<de;){var G=de-1>>>1,J=$[G];if(0<s(J,se))$[G]=se,$[de]=J,de=G;else break e}}function t($){return $.length===0?null:$[0]}function i($){if($.length===0)return null;var se=$[0],de=$.pop();if(de!==se){$[0]=de;e:for(var G=0,J=$.length,Ue=J>>>1;G<Ue;){var Ke=2*(G+1)-1,Ge=$[Ke],le=Ke+1,xe=$[le];if(0>s(Ge,de))le<J&&0>s(xe,Ge)?($[G]=xe,$[le]=de,G=le):($[G]=Ge,$[Ke]=de,G=Ke);else if(le<J&&0>s(xe,de))$[G]=xe,$[le]=de,G=le;else break e}}return se}function s($,se){var de=$.sortIndex-se.sortIndex;return de!==0?de:$.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();a.unstable_now=function(){return c.now()-u}}var h=[],f=[],p=1,x=null,g=3,_=!1,M=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L($){for(var se=t(f);se!==null;){if(se.callback===null)i(f);else if(se.startTime<=$)i(f),se.sortIndex=se.expirationTime,e(h,se);else break;se=t(f)}}function A($){if(b=!1,L($),!M)if(t(h)!==null)M=!0,oe(D);else{var se=t(f);se!==null&&Z(A,se.startTime-$)}}function D($,se){M=!1,b&&(b=!1,y(w),w=-1),_=!0;var de=g;try{for(L(se),x=t(h);x!==null&&(!(x.expirationTime>se)||$&&!B());){var G=x.callback;if(typeof G=="function"){x.callback=null,g=x.priorityLevel;var J=G(x.expirationTime<=se);se=a.unstable_now(),typeof J=="function"?x.callback=J:x===t(h)&&i(h),L(se)}else i(h);x=t(h)}if(x!==null)var Ue=!0;else{var Ke=t(f);Ke!==null&&Z(A,Ke.startTime-se),Ue=!1}return Ue}finally{x=null,g=de,_=!1}}var I=!1,O=null,w=-1,R=5,F=-1;function B(){return!(a.unstable_now()-F<R)}function z(){if(O!==null){var $=a.unstable_now();F=$;var se=!0;try{se=O(!0,$)}finally{se?K():(I=!1,O=null)}}else I=!1}var K;if(typeof P=="function")K=function(){P(z)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,Y=te.port2;te.port1.onmessage=z,K=function(){Y.postMessage(null)}}else K=function(){v(z,0)};function oe($){O=$,I||(I=!0,K())}function Z($,se){w=v(function(){$(a.unstable_now())},se)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function($){$.callback=null},a.unstable_continueExecution=function(){M||_||(M=!0,oe(D))},a.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_getFirstCallbackNode=function(){return t(h)},a.unstable_next=function($){switch(g){case 1:case 2:case 3:var se=3;break;default:se=g}var de=g;g=se;try{return $()}finally{g=de}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function($,se){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var de=g;g=$;try{return se()}finally{g=de}},a.unstable_scheduleCallback=function($,se,de){var G=a.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?G+de:G):de=G,$){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=de+J,$={id:p++,callback:se,priorityLevel:$,startTime:de,expirationTime:J,sortIndex:-1},de>G?($.sortIndex=de,e(f,$),t(h)===null&&$===t(f)&&(b?(y(w),w=-1):b=!0,Z(A,de-G))):($.sortIndex=J,e(h,$),M||_||(M=!0,oe(D))),$},a.unstable_shouldYield=B,a.unstable_wrapCallback=function($){var se=g;return function(){var de=g;g=se;try{return $.apply(this,arguments)}finally{g=de}}}})(oh)),oh}var J0;function Z_(){return J0||(J0=1,ah.exports=K_()),ah.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function Q_(){if(eg)return si;eg=1;var a=Zf(),e=Z_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function o(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},x={};function g(n){return h.call(x,n)?!0:h.call(p,n)?!1:f.test(n)?x[n]=!0:(p[n]=!0,!1)}function _(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,d){if(r===null||typeof r>"u"||_(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function b(n,r,l,d,m,S,C){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=S,this.removeEmptyString=C}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];v[r]=new b(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,P);v[r]=new b(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,P);v[r]=new b(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,P);v[r]=new b(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,d){var m=v.hasOwnProperty(r)?v[r]:null;(m!==null?m.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,m,d)&&(l=null),d||m===null?g(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,d=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var A=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),B=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),$=Symbol.iterator;function se(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var de=Object.assign,G;function J(n){if(G===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);G=r&&r[1]||""}return`
`+G+n}var Ue=!1;function Ke(n,r){if(!n||Ue)return"";Ue=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ue){var d=ue}Reflect.construct(n,[],r)}else{try{r.call()}catch(ue){d=ue}n.call(r.prototype)}else{try{throw Error()}catch(ue){d=ue}n()}}catch(ue){if(ue&&d&&typeof ue.stack=="string"){for(var m=ue.stack.split(`
`),S=d.stack.split(`
`),C=m.length-1,k=S.length-1;1<=C&&0<=k&&m[C]!==S[k];)k--;for(;1<=C&&0<=k;C--,k--)if(m[C]!==S[k]){if(C!==1||k!==1)do if(C--,k--,0>k||m[C]!==S[k]){var H=`
`+m[C].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=C&&0<=k);break}}}finally{Ue=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?J(n):""}function Ge(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Ke(n.type,!1),n;case 11:return n=Ke(n.type.render,!1),n;case 1:return n=Ke(n.type,!0),n;default:return""}}function le(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case R:return"Profiler";case w:return"StrictMode";case K:return"Suspense";case te:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case F:return(n._context.displayName||"Context")+".Provider";case z:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return r=n.displayName||null,r!==null?r:le(n.type)||"Memo";case oe:r=n._payload,n=n._init;try{return le(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function nt(n){var r=Oe(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,S=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(C){d=""+C,S.call(this,C)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(C){d=""+C},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function it(n){n._valueTracker||(n._valueTracker=nt(n))}function Jt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=Oe(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ut(n,r){var l=r.checked;return de({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Ct(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=me(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Et(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function en(n,r){Et(n,r);var l=me(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?dn(n,r.type,l):r.hasOwnProperty("defaultValue")&&dn(n,r.type,me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function un(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function dn(n,r,l){(r!=="number"||pt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var sn=Array.isArray;function Ht(n,r,l,d){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&d&&(n[l].defaultSelected=!0)}else{for(l=""+me(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,d&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function tn(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return de({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function j(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(sn(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:me(l)}}function Pn(n,r){var l=me(r.value),d=me(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function Lt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function T(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?U(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Q,ae=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function he(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Re.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ee[r]=Ee[n]})});function fe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+r).trim():r+"px"}function ge(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,m=fe(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,m):n[l]=m}}var Ne=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,r){if(r){if(Ne[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ie(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function et(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rt=null,ot=null,W=null;function Ae(n){if(n=vo(n)){if(typeof rt!="function")throw Error(t(280));var r=n.stateNode;r&&(r=_l(r),rt(n.stateNode,n.type,r))}}function pe(n){ot?W?W.push(n):W=[n]:ot=n}function Pe(){if(ot){var n=ot,r=W;if(W=ot=null,Ae(n),r)for(n=0;n<r.length;n++)Ae(r[n])}}function Le(n,r){return n(r)}function ve(){}var Xe=!1;function Ve(n,r,l){if(Xe)return n(r,l);Xe=!0;try{return Le(n,r,l)}finally{Xe=!1,(ot!==null||W!==null)&&(ve(),Pe())}}function jt(n,r){var l=n.stateNode;if(l===null)return null;var d=_l(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ft=!1;if(u)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Ft=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Ft=!1}function yi(n,r,l,d,m,S,C,k,H){var ue=Array.prototype.slice.call(arguments,3);try{r.apply(l,ue)}catch(ye){this.onError(ye)}}var ss=!1,Hs=null,as=!1,os=null,bu={onError:function(n){ss=!0,Hs=n}};function tl(n,r,l,d,m,S,C,k,H){ss=!1,Hs=null,yi.apply(bu,arguments)}function nl(n,r,l,d,m,S,C,k,H){if(tl.apply(this,arguments),ss){if(ss){var ue=Hs;ss=!1,Hs=null}else throw Error(t(198));as||(as=!0,os=ue)}}function Wn(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ws(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ka(n){if(Wn(n)!==n)throw Error(t(188))}function il(n){var r=n.alternate;if(!r){if(r=Wn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var m=l.return;if(m===null)break;var S=m.alternate;if(S===null){if(d=m.return,d!==null){l=d;continue}break}if(m.child===S.child){for(S=m.child;S;){if(S===l)return Ka(m),n;if(S===d)return Ka(m),r;S=S.sibling}throw Error(t(188))}if(l.return!==d.return)l=m,d=S;else{for(var C=!1,k=m.child;k;){if(k===l){C=!0,l=m,d=S;break}if(k===d){C=!0,d=m,l=S;break}k=k.sibling}if(!C){for(k=S.child;k;){if(k===l){C=!0,l=S,d=m;break}if(k===d){C=!0,d=S,l=m;break}k=k.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function ls(n){return n=il(n),n!==null?Za(n):null}function Za(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Za(n);if(r!==null)return r;n=n.sibling}return null}var cs=e.unstable_scheduleCallback,Qa=e.unstable_cancelCallback,rl=e.unstable_shouldYield,Au=e.unstable_requestPaint,an=e.unstable_now,Cu=e.unstable_getCurrentPriorityLevel,Ja=e.unstable_ImmediatePriority,N=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,ce=e.unstable_LowPriority,ie=e.unstable_IdlePriority,ne=null,be=null;function Be(n){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}}var we=Math.clz32?Math.clz32:dt,je=Math.log,Qe=Math.LN2;function dt(n){return n>>>=0,n===0?32:31-(je(n)/Qe|0)|0}var ht=64,$e=4194304;function Rt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qt(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,m=n.suspendedLanes,S=n.pingedLanes,C=l&268435455;if(C!==0){var k=C&~m;k!==0?d=Rt(k):(S&=C,S!==0&&(d=Rt(S)))}else C=l&~m,C!==0?d=Rt(C):S!==0&&(d=Rt(S));if(d===0)return 0;if(r!==0&&r!==d&&(r&m)===0&&(m=d&-d,S=r&-r,m>=S||m===16&&(S&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-we(r),m=1<<l,d|=n[l],r&=~m;return d}function nn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,m=n.expirationTimes,S=n.pendingLanes;0<S;){var C=31-we(S),k=1<<C,H=m[C];H===-1?((k&l)===0||(k&d)!==0)&&(m[C]=nn(k,r)):H<=r&&(n.expiredLanes|=k),S&=~k}}function vn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Fe(){var n=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),n}function Nn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function vt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-we(r),n[r]=l}function Qn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-we(l),S=1<<m;r[m]=0,d[m]=-1,n[m]=-1,l&=~S}}function Jn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-we(l),m=1<<d;m&r|n[d]&r&&(n[d]|=r),l&=~m}}var yt=0;function sr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var kt,Kt,Ni,Xt,Ii,ji=!1,us=[],Cr=null,Rr=null,Pr=null,eo=new Map,to=new Map,Nr=[],mx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Np(n,r){switch(n){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":eo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(r.pointerId)}}function no(n,r,l,d,m,S){return n===null||n.nativeEvent!==S?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:S,targetContainers:[m]},r!==null&&(r=vo(r),r!==null&&Kt(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function gx(n,r,l,d,m){switch(r){case"focusin":return Cr=no(Cr,n,r,l,d,m),!0;case"dragenter":return Rr=no(Rr,n,r,l,d,m),!0;case"mouseover":return Pr=no(Pr,n,r,l,d,m),!0;case"pointerover":var S=m.pointerId;return eo.set(S,no(eo.get(S)||null,n,r,l,d,m)),!0;case"gotpointercapture":return S=m.pointerId,to.set(S,no(to.get(S)||null,n,r,l,d,m)),!0}return!1}function Ip(n){var r=ds(n.target);if(r!==null){var l=Wn(r);if(l!==null){if(r=l.tag,r===13){if(r=Ws(l),r!==null){n.blockedOn=r,Ii(n.priority,function(){Ni(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Pu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Ce=d,l.target.dispatchEvent(d),Ce=null}else return r=vo(l),r!==null&&Kt(r),n.blockedOn=l,!1;r.shift()}return!0}function Lp(n,r,l){sl(n)&&l.delete(r)}function vx(){ji=!1,Cr!==null&&sl(Cr)&&(Cr=null),Rr!==null&&sl(Rr)&&(Rr=null),Pr!==null&&sl(Pr)&&(Pr=null),eo.forEach(Lp),to.forEach(Lp)}function io(n,r){n.blockedOn===r&&(n.blockedOn=null,ji||(ji=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vx)))}function ro(n){function r(m){return io(m,n)}if(0<us.length){io(us[0],n);for(var l=1;l<us.length;l++){var d=us[l];d.blockedOn===n&&(d.blockedOn=null)}}for(Cr!==null&&io(Cr,n),Rr!==null&&io(Rr,n),Pr!==null&&io(Pr,n),eo.forEach(r),to.forEach(r),l=0;l<Nr.length;l++)d=Nr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<Nr.length&&(l=Nr[0],l.blockedOn===null);)Ip(l),l.blockedOn===null&&Nr.shift()}var Xs=A.ReactCurrentBatchConfig,al=!0;function xx(n,r,l,d){var m=yt,S=Xs.transition;Xs.transition=null;try{yt=1,Ru(n,r,l,d)}finally{yt=m,Xs.transition=S}}function _x(n,r,l,d){var m=yt,S=Xs.transition;Xs.transition=null;try{yt=4,Ru(n,r,l,d)}finally{yt=m,Xs.transition=S}}function Ru(n,r,l,d){if(al){var m=Pu(n,r,l,d);if(m===null)Yu(n,r,d,ol,l),Np(n,d);else if(gx(m,n,r,l,d))d.stopPropagation();else if(Np(n,d),r&4&&-1<mx.indexOf(n)){for(;m!==null;){var S=vo(m);if(S!==null&&kt(S),S=Pu(n,r,l,d),S===null&&Yu(n,r,d,ol,l),S===m)break;m=S}m!==null&&d.stopPropagation()}else Yu(n,r,d,null,l)}}var ol=null;function Pu(n,r,l,d){if(ol=null,n=et(d),n=ds(n),n!==null)if(r=Wn(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ws(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ol=n,null}function Dp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cu()){case Ja:return 1;case N:return 4;case q:case ce:return 16;case ie:return 536870912;default:return 16}default:return 16}}var Ir=null,Nu=null,ll=null;function Up(){if(ll)return ll;var n,r=Nu,l=r.length,d,m="value"in Ir?Ir.value:Ir.textContent,S=m.length;for(n=0;n<l&&r[n]===m[n];n++);var C=l-n;for(d=1;d<=C&&r[l-d]===m[S-d];d++);return ll=m.slice(n,1<d?1-d:void 0)}function cl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ul(){return!0}function Op(){return!1}function ci(n){function r(l,d,m,S,C){this._reactName=l,this._targetInst=m,this.type=d,this.nativeEvent=S,this.target=C,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(l=n[k],this[k]=l?l(S):S[k]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?ul:Op,this.isPropagationStopped=Op,this}return de(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),r}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=ci(js),so=de({},js,{view:0,detail:0}),yx=ci(so),Lu,Du,ao,dl=de({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ao&&(ao&&n.type==="mousemove"?(Lu=n.screenX-ao.screenX,Du=n.screenY-ao.screenY):Du=Lu=0,ao=n),Lu)},movementY:function(n){return"movementY"in n?n.movementY:Du}}),Fp=ci(dl),Sx=de({},dl,{dataTransfer:0}),Mx=ci(Sx),Ex=de({},so,{relatedTarget:0}),Uu=ci(Ex),Tx=de({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),wx=ci(Tx),bx=de({},js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ax=ci(bx),Cx=de({},js,{data:0}),kp=ci(Cx),Rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Nx[n])?!!r[n]:!1}function Ou(){return Ix}var Lx=de({},so,{key:function(n){if(n.key){var r=Rx[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=cl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Px[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(n){return n.type==="keypress"?cl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?cl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Dx=ci(Lx),Ux=de({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=ci(Ux),Ox=de({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),Fx=ci(Ox),kx=de({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bx=ci(kx),zx=de({},dl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Gx=ci(zx),Vx=[9,13,27,32],Fu=u&&"CompositionEvent"in window,oo=null;u&&"documentMode"in document&&(oo=document.documentMode);var Hx=u&&"TextEvent"in window&&!oo,zp=u&&(!Fu||oo&&8<oo&&11>=oo),Gp=" ",Vp=!1;function Hp(n,r){switch(n){case"keyup":return Vx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ys=!1;function Wx(n,r){switch(n){case"compositionend":return Wp(r);case"keypress":return r.which!==32?null:(Vp=!0,Gp);case"textInput":return n=r.data,n===Gp&&Vp?null:n;default:return null}}function Xx(n,r){if(Ys)return n==="compositionend"||!Fu&&Hp(n,r)?(n=Up(),ll=Nu=Ir=null,Ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return zp&&r.locale!=="ko"?null:r.data;default:return null}}var jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!jx[n.type]:r==="textarea"}function jp(n,r,l,d){pe(d),r=gl(r,"onChange"),0<r.length&&(l=new Iu("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var lo=null,co=null;function Yx(n){um(n,0)}function hl(n){var r=Qs(n);if(Jt(r))return n}function qx(n,r){if(n==="change")return r}var Yp=!1;if(u){var ku;if(u){var Bu="oninput"in document;if(!Bu){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),Bu=typeof qp.oninput=="function"}ku=Bu}else ku=!1;Yp=ku&&(!document.documentMode||9<document.documentMode)}function $p(){lo&&(lo.detachEvent("onpropertychange",Kp),co=lo=null)}function Kp(n){if(n.propertyName==="value"&&hl(co)){var r=[];jp(r,co,n,et(n)),Ve(Yx,r)}}function $x(n,r,l){n==="focusin"?($p(),lo=r,co=l,lo.attachEvent("onpropertychange",Kp)):n==="focusout"&&$p()}function Kx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hl(co)}function Zx(n,r){if(n==="click")return hl(r)}function Qx(n,r){if(n==="input"||n==="change")return hl(r)}function Jx(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Li=typeof Object.is=="function"?Object.is:Jx;function uo(n,r){if(Li(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var m=l[d];if(!h.call(r,m)||!Li(n[m],r[m]))return!1}return!0}function Zp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Qp(n,r){var l=Zp(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Zp(l)}}function Jp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Jp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function em(){for(var n=window,r=pt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=pt(n.document)}return r}function zu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function e_(n){var r=em(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Jp(l.ownerDocument.documentElement,l)){if(d!==null&&zu(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,S=Math.min(d.start,m);d=d.end===void 0?S:Math.min(d.end,m),!n.extend&&S>d&&(m=d,d=S,S=m),m=Qp(l,S);var C=Qp(l,d);m&&C&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),S>d?(n.addRange(r),n.extend(C.node,C.offset)):(r.setEnd(C.node,C.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var t_=u&&"documentMode"in document&&11>=document.documentMode,qs=null,Gu=null,ho=null,Vu=!1;function tm(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Vu||qs==null||qs!==pt(d)||(d=qs,"selectionStart"in d&&zu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),ho&&uo(ho,d)||(ho=d,d=gl(Gu,"onSelect"),0<d.length&&(r=new Iu("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=qs)))}function fl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var $s={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},Hu={},nm={};u&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function pl(n){if(Hu[n])return Hu[n];if(!$s[n])return n;var r=$s[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in nm)return Hu[n]=r[l];return n}var im=pl("animationend"),rm=pl("animationiteration"),sm=pl("animationstart"),am=pl("transitionend"),om=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(n,r){om.set(n,r),o(r,[n])}for(var Wu=0;Wu<lm.length;Wu++){var Xu=lm[Wu],n_=Xu.toLowerCase(),i_=Xu[0].toUpperCase()+Xu.slice(1);Lr(n_,"on"+i_)}Lr(im,"onAnimationEnd"),Lr(rm,"onAnimationIteration"),Lr(sm,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(am,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r_=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function cm(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,nl(d,r,void 0,n),n.currentTarget=null}function um(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],m=d.event;d=d.listeners;e:{var S=void 0;if(r)for(var C=d.length-1;0<=C;C--){var k=d[C],H=k.instance,ue=k.currentTarget;if(k=k.listener,H!==S&&m.isPropagationStopped())break e;cm(m,k,ue),S=H}else for(C=0;C<d.length;C++){if(k=d[C],H=k.instance,ue=k.currentTarget,k=k.listener,H!==S&&m.isPropagationStopped())break e;cm(m,k,ue),S=H}}}if(as)throw n=os,as=!1,os=null,n}function Zt(n,r){var l=r[Ju];l===void 0&&(l=r[Ju]=new Set);var d=n+"__bubble";l.has(d)||(dm(r,n,2,!1),l.add(d))}function ju(n,r,l){var d=0;r&&(d|=4),dm(l,n,d,r)}var ml="_reactListening"+Math.random().toString(36).slice(2);function po(n){if(!n[ml]){n[ml]=!0,i.forEach(function(l){l!=="selectionchange"&&(r_.has(l)||ju(l,!1,n),ju(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ml]||(r[ml]=!0,ju("selectionchange",!1,r))}}function dm(n,r,l,d){switch(Dp(r)){case 1:var m=xx;break;case 4:m=_x;break;default:m=Ru}l=m.bind(null,r,l,n),m=void 0,!Ft||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),d?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function Yu(n,r,l,d,m){var S=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var C=d.tag;if(C===3||C===4){var k=d.stateNode.containerInfo;if(k===m||k.nodeType===8&&k.parentNode===m)break;if(C===4)for(C=d.return;C!==null;){var H=C.tag;if((H===3||H===4)&&(H=C.stateNode.containerInfo,H===m||H.nodeType===8&&H.parentNode===m))return;C=C.return}for(;k!==null;){if(C=ds(k),C===null)return;if(H=C.tag,H===5||H===6){d=S=C;continue e}k=k.parentNode}}d=d.return}Ve(function(){var ue=S,ye=et(l),Se=[];e:{var _e=om.get(n);if(_e!==void 0){var ke=Iu,He=n;switch(n){case"keypress":if(cl(l)===0)break e;case"keydown":case"keyup":ke=Dx;break;case"focusin":He="focus",ke=Uu;break;case"focusout":He="blur",ke=Uu;break;case"beforeblur":case"afterblur":ke=Uu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=Fx;break;case im:case rm:case sm:ke=wx;break;case am:ke=Bx;break;case"scroll":ke=yx;break;case"wheel":ke=Gx;break;case"copy":case"cut":case"paste":ke=Ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Bp}var Ye=(r&4)!==0,pn=!Ye&&n==="scroll",ee=Ye?_e!==null?_e+"Capture":null:_e;Ye=[];for(var X=ue,re;X!==null;){re=X;var Te=re.stateNode;if(re.tag===5&&Te!==null&&(re=Te,ee!==null&&(Te=jt(X,ee),Te!=null&&Ye.push(mo(X,Te,re)))),pn)break;X=X.return}0<Ye.length&&(_e=new ke(_e,He,null,l,ye),Se.push({event:_e,listeners:Ye}))}}if((r&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",_e&&l!==Ce&&(He=l.relatedTarget||l.fromElement)&&(ds(He)||He[ar]))break e;if((ke||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,ke?(He=l.relatedTarget||l.toElement,ke=ue,He=He?ds(He):null,He!==null&&(pn=Wn(He),He!==pn||He.tag!==5&&He.tag!==6)&&(He=null)):(ke=null,He=ue),ke!==He)){if(Ye=Fp,Te="onMouseLeave",ee="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Bp,Te="onPointerLeave",ee="onPointerEnter",X="pointer"),pn=ke==null?_e:Qs(ke),re=He==null?_e:Qs(He),_e=new Ye(Te,X+"leave",ke,l,ye),_e.target=pn,_e.relatedTarget=re,Te=null,ds(ye)===ue&&(Ye=new Ye(ee,X+"enter",He,l,ye),Ye.target=re,Ye.relatedTarget=pn,Te=Ye),pn=Te,ke&&He)t:{for(Ye=ke,ee=He,X=0,re=Ye;re;re=Ks(re))X++;for(re=0,Te=ee;Te;Te=Ks(Te))re++;for(;0<X-re;)Ye=Ks(Ye),X--;for(;0<re-X;)ee=Ks(ee),re--;for(;X--;){if(Ye===ee||ee!==null&&Ye===ee.alternate)break t;Ye=Ks(Ye),ee=Ks(ee)}Ye=null}else Ye=null;ke!==null&&hm(Se,_e,ke,Ye,!1),He!==null&&pn!==null&&hm(Se,pn,He,Ye,!0)}}e:{if(_e=ue?Qs(ue):window,ke=_e.nodeName&&_e.nodeName.toLowerCase(),ke==="select"||ke==="input"&&_e.type==="file")var Ze=qx;else if(Xp(_e))if(Yp)Ze=Qx;else{Ze=Kx;var st=$x}else(ke=_e.nodeName)&&ke.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ze=Zx);if(Ze&&(Ze=Ze(n,ue))){jp(Se,Ze,l,ye);break e}st&&st(n,_e,ue),n==="focusout"&&(st=_e._wrapperState)&&st.controlled&&_e.type==="number"&&dn(_e,"number",_e.value)}switch(st=ue?Qs(ue):window,n){case"focusin":(Xp(st)||st.contentEditable==="true")&&(qs=st,Gu=ue,ho=null);break;case"focusout":ho=Gu=qs=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,tm(Se,l,ye);break;case"selectionchange":if(t_)break;case"keydown":case"keyup":tm(Se,l,ye)}var at;if(Fu)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Ys?Hp(n,l)&&(ut="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ut="onCompositionStart");ut&&(zp&&l.locale!=="ko"&&(Ys||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Ys&&(at=Up()):(Ir=ye,Nu="value"in Ir?Ir.value:Ir.textContent,Ys=!0)),st=gl(ue,ut),0<st.length&&(ut=new kp(ut,n,null,l,ye),Se.push({event:ut,listeners:st}),at?ut.data=at:(at=Wp(l),at!==null&&(ut.data=at)))),(at=Hx?Wx(n,l):Xx(n,l))&&(ue=gl(ue,"onBeforeInput"),0<ue.length&&(ye=new kp("onBeforeInput","beforeinput",null,l,ye),Se.push({event:ye,listeners:ue}),ye.data=at))}um(Se,r)})}function mo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function gl(n,r){for(var l=r+"Capture",d=[];n!==null;){var m=n,S=m.stateNode;m.tag===5&&S!==null&&(m=S,S=jt(n,l),S!=null&&d.unshift(mo(n,S,m)),S=jt(n,r),S!=null&&d.push(mo(n,S,m))),n=n.return}return d}function Ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hm(n,r,l,d,m){for(var S=r._reactName,C=[];l!==null&&l!==d;){var k=l,H=k.alternate,ue=k.stateNode;if(H!==null&&H===d)break;k.tag===5&&ue!==null&&(k=ue,m?(H=jt(l,S),H!=null&&C.unshift(mo(l,H,k))):m||(H=jt(l,S),H!=null&&C.push(mo(l,H,k)))),l=l.return}C.length!==0&&n.push({event:r,listeners:C})}var s_=/\r\n?/g,a_=/\u0000|\uFFFD/g;function fm(n){return(typeof n=="string"?n:""+n).replace(s_,`
`).replace(a_,"")}function vl(n,r,l){if(r=fm(r),fm(n)!==r&&l)throw Error(t(425))}function xl(){}var qu=null,$u=null;function Ku(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Zu=typeof setTimeout=="function"?setTimeout:void 0,o_=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,l_=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(n){return pm.resolve(null).then(n).catch(c_)}:Zu;function c_(n){setTimeout(function(){throw n})}function Qu(n,r){var l=r,d=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(d===0){n.removeChild(m),ro(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=m}while(l);ro(r)}function Dr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function mm(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),Yi="__reactFiber$"+Zs,go="__reactProps$"+Zs,ar="__reactContainer$"+Zs,Ju="__reactEvents$"+Zs,u_="__reactListeners$"+Zs,d_="__reactHandles$"+Zs;function ds(n){var r=n[Yi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[ar]||l[Yi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=mm(n);n!==null;){if(l=n[Yi])return l;n=mm(n)}return r}n=l,l=n.parentNode}return null}function vo(n){return n=n[Yi]||n[ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function _l(n){return n[go]||null}var ed=[],Js=-1;function Ur(n){return{current:n}}function Qt(n){0>Js||(n.current=ed[Js],ed[Js]=null,Js--)}function $t(n,r){Js++,ed[Js]=n.current,n.current=r}var Or={},Un=Ur(Or),ei=Ur(!1),hs=Or;function ea(n,r){var l=n.type.contextTypes;if(!l)return Or;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var m={},S;for(S in l)m[S]=r[S];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function ti(n){return n=n.childContextTypes,n!=null}function yl(){Qt(ei),Qt(Un)}function gm(n,r,l){if(Un.current!==Or)throw Error(t(168));$t(Un,r),$t(ei,l)}function vm(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var m in d)if(!(m in r))throw Error(t(108,xe(n)||"Unknown",m));return de({},l,d)}function Sl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Or,hs=Un.current,$t(Un,n),$t(ei,ei.current),!0}function xm(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=vm(n,r,hs),d.__reactInternalMemoizedMergedChildContext=n,Qt(ei),Qt(Un),$t(Un,n)):Qt(ei),$t(ei,l)}var or=null,Ml=!1,td=!1;function _m(n){or===null?or=[n]:or.push(n)}function h_(n){Ml=!0,_m(n)}function Fr(){if(!td&&or!==null){td=!0;var n=0,r=yt;try{var l=or;for(yt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}or=null,Ml=!1}catch(m){throw or!==null&&(or=or.slice(n+1)),cs(Ja,Fr),m}finally{yt=r,td=!1}}return null}var ta=[],na=0,El=null,Tl=0,Si=[],Mi=0,fs=null,lr=1,cr="";function ps(n,r){ta[na++]=Tl,ta[na++]=El,El=n,Tl=r}function ym(n,r,l){Si[Mi++]=lr,Si[Mi++]=cr,Si[Mi++]=fs,fs=n;var d=lr;n=cr;var m=32-we(d)-1;d&=~(1<<m),l+=1;var S=32-we(r)+m;if(30<S){var C=m-m%5;S=(d&(1<<C)-1).toString(32),d>>=C,m-=C,lr=1<<32-we(r)+m|l<<m|d,cr=S+n}else lr=1<<S|l<<m|d,cr=n}function nd(n){n.return!==null&&(ps(n,1),ym(n,1,0))}function id(n){for(;n===El;)El=ta[--na],ta[na]=null,Tl=ta[--na],ta[na]=null;for(;n===fs;)fs=Si[--Mi],Si[Mi]=null,cr=Si[--Mi],Si[Mi]=null,lr=Si[--Mi],Si[Mi]=null}var ui=null,di=null,rn=!1,Di=null;function Sm(n,r){var l=bi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Mm(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ui=n,di=Dr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ui=n,di=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=fs!==null?{id:lr,overflow:cr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=bi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ui=n,di=null,!0):!1;default:return!1}}function rd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function sd(n){if(rn){var r=di;if(r){var l=r;if(!Mm(n,r)){if(rd(n))throw Error(t(418));r=Dr(l.nextSibling);var d=ui;r&&Mm(n,r)?Sm(d,l):(n.flags=n.flags&-4097|2,rn=!1,ui=n)}}else{if(rd(n))throw Error(t(418));n.flags=n.flags&-4097|2,rn=!1,ui=n}}}function Em(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ui=n}function wl(n){if(n!==ui)return!1;if(!rn)return Em(n),rn=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Ku(n.type,n.memoizedProps)),r&&(r=di)){if(rd(n))throw Tm(),Error(t(418));for(;r;)Sm(n,r),r=Dr(r.nextSibling)}if(Em(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){di=Dr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}di=null}}else di=ui?Dr(n.stateNode.nextSibling):null;return!0}function Tm(){for(var n=di;n;)n=Dr(n.nextSibling)}function ia(){di=ui=null,rn=!1}function ad(n){Di===null?Di=[n]:Di.push(n)}var f_=A.ReactCurrentBatchConfig;function xo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var m=d,S=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===S?r.ref:(r=function(C){var k=m.refs;C===null?delete k[S]:k[S]=C},r._stringRef=S,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function bl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function wm(n){var r=n._init;return r(n._payload)}function bm(n){function r(ee,X){if(n){var re=ee.deletions;re===null?(ee.deletions=[X],ee.flags|=16):re.push(X)}}function l(ee,X){if(!n)return null;for(;X!==null;)r(ee,X),X=X.sibling;return null}function d(ee,X){for(ee=new Map;X!==null;)X.key!==null?ee.set(X.key,X):ee.set(X.index,X),X=X.sibling;return ee}function m(ee,X){return ee=Xr(ee,X),ee.index=0,ee.sibling=null,ee}function S(ee,X,re){return ee.index=re,n?(re=ee.alternate,re!==null?(re=re.index,re<X?(ee.flags|=2,X):re):(ee.flags|=2,X)):(ee.flags|=1048576,X)}function C(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function k(ee,X,re,Te){return X===null||X.tag!==6?(X=Zd(re,ee.mode,Te),X.return=ee,X):(X=m(X,re),X.return=ee,X)}function H(ee,X,re,Te){var Ze=re.type;return Ze===O?ye(ee,X,re.props.children,Te,re.key):X!==null&&(X.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===oe&&wm(Ze)===X.type)?(Te=m(X,re.props),Te.ref=xo(ee,X,re),Te.return=ee,Te):(Te=Kl(re.type,re.key,re.props,null,ee.mode,Te),Te.ref=xo(ee,X,re),Te.return=ee,Te)}function ue(ee,X,re,Te){return X===null||X.tag!==4||X.stateNode.containerInfo!==re.containerInfo||X.stateNode.implementation!==re.implementation?(X=Qd(re,ee.mode,Te),X.return=ee,X):(X=m(X,re.children||[]),X.return=ee,X)}function ye(ee,X,re,Te,Ze){return X===null||X.tag!==7?(X=Ms(re,ee.mode,Te,Ze),X.return=ee,X):(X=m(X,re),X.return=ee,X)}function Se(ee,X,re){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Zd(""+X,ee.mode,re),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case D:return re=Kl(X.type,X.key,X.props,null,ee.mode,re),re.ref=xo(ee,null,X),re.return=ee,re;case I:return X=Qd(X,ee.mode,re),X.return=ee,X;case oe:var Te=X._init;return Se(ee,Te(X._payload),re)}if(sn(X)||se(X))return X=Ms(X,ee.mode,re,null),X.return=ee,X;bl(ee,X)}return null}function _e(ee,X,re,Te){var Ze=X!==null?X.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Ze!==null?null:k(ee,X,""+re,Te);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case D:return re.key===Ze?H(ee,X,re,Te):null;case I:return re.key===Ze?ue(ee,X,re,Te):null;case oe:return Ze=re._init,_e(ee,X,Ze(re._payload),Te)}if(sn(re)||se(re))return Ze!==null?null:ye(ee,X,re,Te,null);bl(ee,re)}return null}function ke(ee,X,re,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ee=ee.get(re)||null,k(X,ee,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case D:return ee=ee.get(Te.key===null?re:Te.key)||null,H(X,ee,Te,Ze);case I:return ee=ee.get(Te.key===null?re:Te.key)||null,ue(X,ee,Te,Ze);case oe:var st=Te._init;return ke(ee,X,re,st(Te._payload),Ze)}if(sn(Te)||se(Te))return ee=ee.get(re)||null,ye(X,ee,Te,Ze,null);bl(X,Te)}return null}function He(ee,X,re,Te){for(var Ze=null,st=null,at=X,ut=X=0,Cn=null;at!==null&&ut<re.length;ut++){at.index>ut?(Cn=at,at=null):Cn=at.sibling;var Dt=_e(ee,at,re[ut],Te);if(Dt===null){at===null&&(at=Cn);break}n&&at&&Dt.alternate===null&&r(ee,at),X=S(Dt,X,ut),st===null?Ze=Dt:st.sibling=Dt,st=Dt,at=Cn}if(ut===re.length)return l(ee,at),rn&&ps(ee,ut),Ze;if(at===null){for(;ut<re.length;ut++)at=Se(ee,re[ut],Te),at!==null&&(X=S(at,X,ut),st===null?Ze=at:st.sibling=at,st=at);return rn&&ps(ee,ut),Ze}for(at=d(ee,at);ut<re.length;ut++)Cn=ke(at,ee,ut,re[ut],Te),Cn!==null&&(n&&Cn.alternate!==null&&at.delete(Cn.key===null?ut:Cn.key),X=S(Cn,X,ut),st===null?Ze=Cn:st.sibling=Cn,st=Cn);return n&&at.forEach(function(jr){return r(ee,jr)}),rn&&ps(ee,ut),Ze}function Ye(ee,X,re,Te){var Ze=se(re);if(typeof Ze!="function")throw Error(t(150));if(re=Ze.call(re),re==null)throw Error(t(151));for(var st=Ze=null,at=X,ut=X=0,Cn=null,Dt=re.next();at!==null&&!Dt.done;ut++,Dt=re.next()){at.index>ut?(Cn=at,at=null):Cn=at.sibling;var jr=_e(ee,at,Dt.value,Te);if(jr===null){at===null&&(at=Cn);break}n&&at&&jr.alternate===null&&r(ee,at),X=S(jr,X,ut),st===null?Ze=jr:st.sibling=jr,st=jr,at=Cn}if(Dt.done)return l(ee,at),rn&&ps(ee,ut),Ze;if(at===null){for(;!Dt.done;ut++,Dt=re.next())Dt=Se(ee,Dt.value,Te),Dt!==null&&(X=S(Dt,X,ut),st===null?Ze=Dt:st.sibling=Dt,st=Dt);return rn&&ps(ee,ut),Ze}for(at=d(ee,at);!Dt.done;ut++,Dt=re.next())Dt=ke(at,ee,ut,Dt.value,Te),Dt!==null&&(n&&Dt.alternate!==null&&at.delete(Dt.key===null?ut:Dt.key),X=S(Dt,X,ut),st===null?Ze=Dt:st.sibling=Dt,st=Dt);return n&&at.forEach(function(j_){return r(ee,j_)}),rn&&ps(ee,ut),Ze}function pn(ee,X,re,Te){if(typeof re=="object"&&re!==null&&re.type===O&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case D:e:{for(var Ze=re.key,st=X;st!==null;){if(st.key===Ze){if(Ze=re.type,Ze===O){if(st.tag===7){l(ee,st.sibling),X=m(st,re.props.children),X.return=ee,ee=X;break e}}else if(st.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===oe&&wm(Ze)===st.type){l(ee,st.sibling),X=m(st,re.props),X.ref=xo(ee,st,re),X.return=ee,ee=X;break e}l(ee,st);break}else r(ee,st);st=st.sibling}re.type===O?(X=Ms(re.props.children,ee.mode,Te,re.key),X.return=ee,ee=X):(Te=Kl(re.type,re.key,re.props,null,ee.mode,Te),Te.ref=xo(ee,X,re),Te.return=ee,ee=Te)}return C(ee);case I:e:{for(st=re.key;X!==null;){if(X.key===st)if(X.tag===4&&X.stateNode.containerInfo===re.containerInfo&&X.stateNode.implementation===re.implementation){l(ee,X.sibling),X=m(X,re.children||[]),X.return=ee,ee=X;break e}else{l(ee,X);break}else r(ee,X);X=X.sibling}X=Qd(re,ee.mode,Te),X.return=ee,ee=X}return C(ee);case oe:return st=re._init,pn(ee,X,st(re._payload),Te)}if(sn(re))return He(ee,X,re,Te);if(se(re))return Ye(ee,X,re,Te);bl(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,X!==null&&X.tag===6?(l(ee,X.sibling),X=m(X,re),X.return=ee,ee=X):(l(ee,X),X=Zd(re,ee.mode,Te),X.return=ee,ee=X),C(ee)):l(ee,X)}return pn}var ra=bm(!0),Am=bm(!1),Al=Ur(null),Cl=null,sa=null,od=null;function ld(){od=sa=Cl=null}function cd(n){var r=Al.current;Qt(Al),n._currentValue=r}function ud(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function aa(n,r){Cl=n,od=sa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(ni=!0),n.firstContext=null)}function Ei(n){var r=n._currentValue;if(od!==n)if(n={context:n,memoizedValue:r,next:null},sa===null){if(Cl===null)throw Error(t(308));sa=n,Cl.dependencies={lanes:0,firstContext:n}}else sa=sa.next=n;return r}var ms=null;function dd(n){ms===null?ms=[n]:ms.push(n)}function Cm(n,r,l,d){var m=r.interleaved;return m===null?(l.next=l,dd(r)):(l.next=m.next,m.next=l),r.interleaved=l,ur(n,d)}function ur(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var kr=!1;function hd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function dr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Br(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(It&2)!==0){var m=d.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),d.pending=r,ur(n,l)}return m=d.interleaved,m===null?(r.next=r,dd(d)):(r.next=m.next,m.next=r),d.interleaved=r,ur(n,l)}function Rl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Jn(n,l)}}function Pm(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var m=null,S=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};S===null?m=S=C:S=S.next=C,l=l.next}while(l!==null);S===null?m=S=r:S=S.next=r}else m=S=r;l={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:S,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Pl(n,r,l,d){var m=n.updateQueue;kr=!1;var S=m.firstBaseUpdate,C=m.lastBaseUpdate,k=m.shared.pending;if(k!==null){m.shared.pending=null;var H=k,ue=H.next;H.next=null,C===null?S=ue:C.next=ue,C=H;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,k=ye.lastBaseUpdate,k!==C&&(k===null?ye.firstBaseUpdate=ue:k.next=ue,ye.lastBaseUpdate=H))}if(S!==null){var Se=m.baseState;C=0,ye=ue=H=null,k=S;do{var _e=k.lane,ke=k.eventTime;if((d&_e)===_e){ye!==null&&(ye=ye.next={eventTime:ke,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var He=n,Ye=k;switch(_e=r,ke=l,Ye.tag){case 1:if(He=Ye.payload,typeof He=="function"){Se=He.call(ke,Se,_e);break e}Se=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ye.payload,_e=typeof He=="function"?He.call(ke,Se,_e):He,_e==null)break e;Se=de({},Se,_e);break e;case 2:kr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,_e=m.effects,_e===null?m.effects=[k]:_e.push(k))}else ke={eventTime:ke,lane:_e,tag:k.tag,payload:k.payload,callback:k.callback,next:null},ye===null?(ue=ye=ke,H=Se):ye=ye.next=ke,C|=_e;if(k=k.next,k===null){if(k=m.shared.pending,k===null)break;_e=k,k=_e.next,_e.next=null,m.lastBaseUpdate=_e,m.shared.pending=null}}while(!0);if(ye===null&&(H=Se),m.baseState=H,m.firstBaseUpdate=ue,m.lastBaseUpdate=ye,r=m.shared.interleaved,r!==null){m=r;do C|=m.lane,m=m.next;while(m!==r)}else S===null&&(m.shared.lanes=0);xs|=C,n.lanes=C,n.memoizedState=Se}}function Nm(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],m=d.callback;if(m!==null){if(d.callback=null,d=l,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var _o={},qi=Ur(_o),yo=Ur(_o),So=Ur(_o);function gs(n){if(n===_o)throw Error(t(174));return n}function fd(n,r){switch($t(So,r),$t(yo,n),$t(qi,_o),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:T(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=T(r,n)}Qt(qi),$t(qi,r)}function oa(){Qt(qi),Qt(yo),Qt(So)}function Im(n){gs(So.current);var r=gs(qi.current),l=T(r,n.type);r!==l&&($t(yo,n),$t(qi,l))}function pd(n){yo.current===n&&(Qt(qi),Qt(yo))}var on=Ur(0);function Nl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var md=[];function gd(){for(var n=0;n<md.length;n++)md[n]._workInProgressVersionPrimary=null;md.length=0}var Il=A.ReactCurrentDispatcher,vd=A.ReactCurrentBatchConfig,vs=0,ln=null,Sn=null,bn=null,Ll=!1,Mo=!1,Eo=0,p_=0;function On(){throw Error(t(321))}function xd(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Li(n[l],r[l]))return!1;return!0}function _d(n,r,l,d,m,S){if(vs=S,ln=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Il.current=n===null||n.memoizedState===null?x_:__,n=l(d,m),Mo){S=0;do{if(Mo=!1,Eo=0,25<=S)throw Error(t(301));S+=1,bn=Sn=null,r.updateQueue=null,Il.current=y_,n=l(d,m)}while(Mo)}if(Il.current=Ol,r=Sn!==null&&Sn.next!==null,vs=0,bn=Sn=ln=null,Ll=!1,r)throw Error(t(300));return n}function yd(){var n=Eo!==0;return Eo=0,n}function $i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?ln.memoizedState=bn=n:bn=bn.next=n,bn}function Ti(){if(Sn===null){var n=ln.alternate;n=n!==null?n.memoizedState:null}else n=Sn.next;var r=bn===null?ln.memoizedState:bn.next;if(r!==null)bn=r,Sn=n;else{if(n===null)throw Error(t(310));Sn=n,n={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},bn===null?ln.memoizedState=bn=n:bn=bn.next=n}return bn}function To(n,r){return typeof r=="function"?r(n):r}function Sd(n){var r=Ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=Sn,m=d.baseQueue,S=l.pending;if(S!==null){if(m!==null){var C=m.next;m.next=S.next,S.next=C}d.baseQueue=m=S,l.pending=null}if(m!==null){S=m.next,d=d.baseState;var k=C=null,H=null,ue=S;do{var ye=ue.lane;if((vs&ye)===ye)H!==null&&(H=H.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),d=ue.hasEagerState?ue.eagerState:n(d,ue.action);else{var Se={lane:ye,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};H===null?(k=H=Se,C=d):H=H.next=Se,ln.lanes|=ye,xs|=ye}ue=ue.next}while(ue!==null&&ue!==S);H===null?C=d:H.next=k,Li(d,r.memoizedState)||(ni=!0),r.memoizedState=d,r.baseState=C,r.baseQueue=H,l.lastRenderedState=d}if(n=l.interleaved,n!==null){m=n;do S=m.lane,ln.lanes|=S,xs|=S,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Md(n){var r=Ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,m=l.pending,S=r.memoizedState;if(m!==null){l.pending=null;var C=m=m.next;do S=n(S,C.action),C=C.next;while(C!==m);Li(S,r.memoizedState)||(ni=!0),r.memoizedState=S,r.baseQueue===null&&(r.baseState=S),l.lastRenderedState=S}return[S,d]}function Lm(){}function Dm(n,r){var l=ln,d=Ti(),m=r(),S=!Li(d.memoizedState,m);if(S&&(d.memoizedState=m,ni=!0),d=d.queue,Ed(Fm.bind(null,l,d,n),[n]),d.getSnapshot!==r||S||bn!==null&&bn.memoizedState.tag&1){if(l.flags|=2048,wo(9,Om.bind(null,l,d,m,r),void 0,null),An===null)throw Error(t(349));(vs&30)!==0||Um(l,r,m)}return m}function Um(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=ln.updateQueue,r===null?(r={lastEffect:null,stores:null},ln.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Om(n,r,l,d){r.value=l,r.getSnapshot=d,km(r)&&Bm(n)}function Fm(n,r,l){return l(function(){km(r)&&Bm(n)})}function km(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Li(n,l)}catch{return!0}}function Bm(n){var r=ur(n,1);r!==null&&ki(r,n,1,-1)}function zm(n){var r=$i();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:n},r.queue=n,n=n.dispatch=v_.bind(null,ln,n),[r.memoizedState,n]}function wo(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=ln.updateQueue,r===null?(r={lastEffect:null,stores:null},ln.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function Gm(){return Ti().memoizedState}function Dl(n,r,l,d){var m=$i();ln.flags|=n,m.memoizedState=wo(1|r,l,void 0,d===void 0?null:d)}function Ul(n,r,l,d){var m=Ti();d=d===void 0?null:d;var S=void 0;if(Sn!==null){var C=Sn.memoizedState;if(S=C.destroy,d!==null&&xd(d,C.deps)){m.memoizedState=wo(r,l,S,d);return}}ln.flags|=n,m.memoizedState=wo(1|r,l,S,d)}function Vm(n,r){return Dl(8390656,8,n,r)}function Ed(n,r){return Ul(2048,8,n,r)}function Hm(n,r){return Ul(4,2,n,r)}function Wm(n,r){return Ul(4,4,n,r)}function Xm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function jm(n,r,l){return l=l!=null?l.concat([n]):null,Ul(4,4,Xm.bind(null,r,n),l)}function Td(){}function Ym(n,r){var l=Ti();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&xd(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function qm(n,r){var l=Ti();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&xd(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function $m(n,r,l){return(vs&21)===0?(n.baseState&&(n.baseState=!1,ni=!0),n.memoizedState=l):(Li(l,r)||(l=Fe(),ln.lanes|=l,xs|=l,n.baseState=!0),r)}function m_(n,r){var l=yt;yt=l!==0&&4>l?l:4,n(!0);var d=vd.transition;vd.transition={};try{n(!1),r()}finally{yt=l,vd.transition=d}}function Km(){return Ti().memoizedState}function g_(n,r,l){var d=Hr(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Zm(n))Qm(r,l);else if(l=Cm(n,r,l,d),l!==null){var m=jn();ki(l,n,d,m),Jm(l,r,d)}}function v_(n,r,l){var d=Hr(n),m={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Zm(n))Qm(r,m);else{var S=n.alternate;if(n.lanes===0&&(S===null||S.lanes===0)&&(S=r.lastRenderedReducer,S!==null))try{var C=r.lastRenderedState,k=S(C,l);if(m.hasEagerState=!0,m.eagerState=k,Li(k,C)){var H=r.interleaved;H===null?(m.next=m,dd(r)):(m.next=H.next,H.next=m),r.interleaved=m;return}}catch{}finally{}l=Cm(n,r,m,d),l!==null&&(m=jn(),ki(l,n,d,m),Jm(l,r,d))}}function Zm(n){var r=n.alternate;return n===ln||r!==null&&r===ln}function Qm(n,r){Mo=Ll=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Jm(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Jn(n,l)}}var Ol={readContext:Ei,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},x_={readContext:Ei,useCallback:function(n,r){return $i().memoizedState=[n,r===void 0?null:r],n},useContext:Ei,useEffect:Vm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Dl(4194308,4,Xm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Dl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Dl(4,2,n,r)},useMemo:function(n,r){var l=$i();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=$i();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=g_.bind(null,ln,n),[d.memoizedState,n]},useRef:function(n){var r=$i();return n={current:n},r.memoizedState=n},useState:zm,useDebugValue:Td,useDeferredValue:function(n){return $i().memoizedState=n},useTransition:function(){var n=zm(!1),r=n[0];return n=m_.bind(null,n[1]),$i().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=ln,m=$i();if(rn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),An===null)throw Error(t(349));(vs&30)!==0||Um(d,r,l)}m.memoizedState=l;var S={value:l,getSnapshot:r};return m.queue=S,Vm(Fm.bind(null,d,S,n),[n]),d.flags|=2048,wo(9,Om.bind(null,d,S,l,r),void 0,null),l},useId:function(){var n=$i(),r=An.identifierPrefix;if(rn){var l=cr,d=lr;l=(d&~(1<<32-we(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=Eo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=p_++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},__={readContext:Ei,useCallback:Ym,useContext:Ei,useEffect:Ed,useImperativeHandle:jm,useInsertionEffect:Hm,useLayoutEffect:Wm,useMemo:qm,useReducer:Sd,useRef:Gm,useState:function(){return Sd(To)},useDebugValue:Td,useDeferredValue:function(n){var r=Ti();return $m(r,Sn.memoizedState,n)},useTransition:function(){var n=Sd(To)[0],r=Ti().memoizedState;return[n,r]},useMutableSource:Lm,useSyncExternalStore:Dm,useId:Km,unstable_isNewReconciler:!1},y_={readContext:Ei,useCallback:Ym,useContext:Ei,useEffect:Ed,useImperativeHandle:jm,useInsertionEffect:Hm,useLayoutEffect:Wm,useMemo:qm,useReducer:Md,useRef:Gm,useState:function(){return Md(To)},useDebugValue:Td,useDeferredValue:function(n){var r=Ti();return Sn===null?r.memoizedState=n:$m(r,Sn.memoizedState,n)},useTransition:function(){var n=Md(To)[0],r=Ti().memoizedState;return[n,r]},useMutableSource:Lm,useSyncExternalStore:Dm,useId:Km,unstable_isNewReconciler:!1};function Ui(n,r){if(n&&n.defaultProps){r=de({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function wd(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:de({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Fl={isMounted:function(n){return(n=n._reactInternals)?Wn(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=jn(),m=Hr(n),S=dr(d,m);S.payload=r,l!=null&&(S.callback=l),r=Br(n,S,m),r!==null&&(ki(r,n,m,d),Rl(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=jn(),m=Hr(n),S=dr(d,m);S.tag=1,S.payload=r,l!=null&&(S.callback=l),r=Br(n,S,m),r!==null&&(ki(r,n,m,d),Rl(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=jn(),d=Hr(n),m=dr(l,d);m.tag=2,r!=null&&(m.callback=r),r=Br(n,m,d),r!==null&&(ki(r,n,d,l),Rl(r,n,d))}};function e0(n,r,l,d,m,S,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,S,C):r.prototype&&r.prototype.isPureReactComponent?!uo(l,d)||!uo(m,S):!0}function t0(n,r,l){var d=!1,m=Or,S=r.contextType;return typeof S=="object"&&S!==null?S=Ei(S):(m=ti(r)?hs:Un.current,d=r.contextTypes,S=(d=d!=null)?ea(n,m):Or),r=new r(l,S),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Fl,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=S),r}function n0(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&Fl.enqueueReplaceState(r,r.state,null)}function bd(n,r,l,d){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},hd(n);var S=r.contextType;typeof S=="object"&&S!==null?m.context=Ei(S):(S=ti(r)?hs:Un.current,m.context=ea(n,S)),m.state=n.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(wd(n,r,S,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Fl.enqueueReplaceState(m,m.state,null),Pl(n,l,m,d),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function la(n,r){try{var l="",d=r;do l+=Ge(d),d=d.return;while(d);var m=l}catch(S){m=`
Error generating stack: `+S.message+`
`+S.stack}return{value:n,source:r,stack:m,digest:null}}function Ad(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Cd(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var S_=typeof WeakMap=="function"?WeakMap:Map;function i0(n,r,l){l=dr(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){Wl||(Wl=!0,Hd=d),Cd(n,r)},l}function r0(n,r,l){l=dr(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var m=r.value;l.payload=function(){return d(m)},l.callback=function(){Cd(n,r)}}var S=n.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(l.callback=function(){Cd(n,r),typeof d!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})}),l}function s0(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new S_;var m=new Set;d.set(r,m)}else m=d.get(r),m===void 0&&(m=new Set,d.set(r,m));m.has(l)||(m.add(l),n=U_.bind(null,n,r,l),r.then(n,n))}function a0(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function o0(n,r,l,d,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=dr(-1,1),r.tag=2,Br(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var M_=A.ReactCurrentOwner,ni=!1;function Xn(n,r,l,d){r.child=n===null?Am(r,null,l,d):ra(r,n.child,l,d)}function l0(n,r,l,d,m){l=l.render;var S=r.ref;return aa(r,m),d=_d(n,r,l,d,S,m),l=yd(),n!==null&&!ni?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,hr(n,r,m)):(rn&&l&&nd(r),r.flags|=1,Xn(n,r,d,m),r.child)}function c0(n,r,l,d,m){if(n===null){var S=l.type;return typeof S=="function"&&!Kd(S)&&S.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=S,u0(n,r,S,d,m)):(n=Kl(l.type,null,d,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(S=n.child,(n.lanes&m)===0){var C=S.memoizedProps;if(l=l.compare,l=l!==null?l:uo,l(C,d)&&n.ref===r.ref)return hr(n,r,m)}return r.flags|=1,n=Xr(S,d),n.ref=r.ref,n.return=r,r.child=n}function u0(n,r,l,d,m){if(n!==null){var S=n.memoizedProps;if(uo(S,d)&&n.ref===r.ref)if(ni=!1,r.pendingProps=d=S,(n.lanes&m)!==0)(n.flags&131072)!==0&&(ni=!0);else return r.lanes=n.lanes,hr(n,r,m)}return Rd(n,r,l,d,m)}function d0(n,r,l){var d=r.pendingProps,m=d.children,S=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(ua,hi),hi|=l;else{if((l&1073741824)===0)return n=S!==null?S.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$t(ua,hi),hi|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=S!==null?S.baseLanes:l,$t(ua,hi),hi|=d}else S!==null?(d=S.baseLanes|l,r.memoizedState=null):d=l,$t(ua,hi),hi|=d;return Xn(n,r,m,l),r.child}function h0(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Rd(n,r,l,d,m){var S=ti(l)?hs:Un.current;return S=ea(r,S),aa(r,m),l=_d(n,r,l,d,S,m),d=yd(),n!==null&&!ni?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,hr(n,r,m)):(rn&&d&&nd(r),r.flags|=1,Xn(n,r,l,m),r.child)}function f0(n,r,l,d,m){if(ti(l)){var S=!0;Sl(r)}else S=!1;if(aa(r,m),r.stateNode===null)Bl(n,r),t0(r,l,d),bd(r,l,d,m),d=!0;else if(n===null){var C=r.stateNode,k=r.memoizedProps;C.props=k;var H=C.context,ue=l.contextType;typeof ue=="object"&&ue!==null?ue=Ei(ue):(ue=ti(l)?hs:Un.current,ue=ea(r,ue));var ye=l.getDerivedStateFromProps,Se=typeof ye=="function"||typeof C.getSnapshotBeforeUpdate=="function";Se||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(k!==d||H!==ue)&&n0(r,C,d,ue),kr=!1;var _e=r.memoizedState;C.state=_e,Pl(r,d,C,m),H=r.memoizedState,k!==d||_e!==H||ei.current||kr?(typeof ye=="function"&&(wd(r,l,ye,d),H=r.memoizedState),(k=kr||e0(r,l,k,d,_e,H,ue))?(Se||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(r.flags|=4194308)):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=H),C.props=d,C.state=H,C.context=ue,d=k):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{C=r.stateNode,Rm(n,r),k=r.memoizedProps,ue=r.type===r.elementType?k:Ui(r.type,k),C.props=ue,Se=r.pendingProps,_e=C.context,H=l.contextType,typeof H=="object"&&H!==null?H=Ei(H):(H=ti(l)?hs:Un.current,H=ea(r,H));var ke=l.getDerivedStateFromProps;(ye=typeof ke=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(k!==Se||_e!==H)&&n0(r,C,d,H),kr=!1,_e=r.memoizedState,C.state=_e,Pl(r,d,C,m);var He=r.memoizedState;k!==Se||_e!==He||ei.current||kr?(typeof ke=="function"&&(wd(r,l,ke,d),He=r.memoizedState),(ue=kr||e0(r,l,ue,d,_e,He,H)||!1)?(ye||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(d,He,H),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(d,He,H)),typeof C.componentDidUpdate=="function"&&(r.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof C.componentDidUpdate!="function"||k===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=He),C.props=d,C.state=He,C.context=H,d=ue):(typeof C.componentDidUpdate!="function"||k===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),d=!1)}return Pd(n,r,l,d,S,m)}function Pd(n,r,l,d,m,S){h0(n,r);var C=(r.flags&128)!==0;if(!d&&!C)return m&&xm(r,l,!1),hr(n,r,S);d=r.stateNode,M_.current=r;var k=C&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&C?(r.child=ra(r,n.child,null,S),r.child=ra(r,null,k,S)):Xn(n,r,k,S),r.memoizedState=d.state,m&&xm(r,l,!0),r.child}function p0(n){var r=n.stateNode;r.pendingContext?gm(n,r.pendingContext,r.pendingContext!==r.context):r.context&&gm(n,r.context,!1),fd(n,r.containerInfo)}function m0(n,r,l,d,m){return ia(),ad(m),r.flags|=256,Xn(n,r,l,d),r.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Id(n){return{baseLanes:n,cachePool:null,transitions:null}}function g0(n,r,l){var d=r.pendingProps,m=on.current,S=!1,C=(r.flags&128)!==0,k;if((k=C)||(k=n!==null&&n.memoizedState===null?!1:(m&2)!==0),k?(S=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),$t(on,m&1),n===null)return sd(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(C=d.children,n=d.fallback,S?(d=r.mode,S=r.child,C={mode:"hidden",children:C},(d&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=C):S=Zl(C,d,0,null),n=Ms(n,d,l,null),S.return=r,n.return=r,S.sibling=n,r.child=S,r.child.memoizedState=Id(l),r.memoizedState=Nd,n):Ld(r,C));if(m=n.memoizedState,m!==null&&(k=m.dehydrated,k!==null))return E_(n,r,C,d,k,m,l);if(S){S=d.fallback,C=r.mode,m=n.child,k=m.sibling;var H={mode:"hidden",children:d.children};return(C&1)===0&&r.child!==m?(d=r.child,d.childLanes=0,d.pendingProps=H,r.deletions=null):(d=Xr(m,H),d.subtreeFlags=m.subtreeFlags&14680064),k!==null?S=Xr(k,S):(S=Ms(S,C,l,null),S.flags|=2),S.return=r,d.return=r,d.sibling=S,r.child=d,d=S,S=r.child,C=n.child.memoizedState,C=C===null?Id(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},S.memoizedState=C,S.childLanes=n.childLanes&~l,r.memoizedState=Nd,d}return S=n.child,n=S.sibling,d=Xr(S,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function Ld(n,r){return r=Zl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function kl(n,r,l,d){return d!==null&&ad(d),ra(r,n.child,null,l),n=Ld(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function E_(n,r,l,d,m,S,C){if(l)return r.flags&256?(r.flags&=-257,d=Ad(Error(t(422))),kl(n,r,C,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(S=d.fallback,m=r.mode,d=Zl({mode:"visible",children:d.children},m,0,null),S=Ms(S,m,C,null),S.flags|=2,d.return=r,S.return=r,d.sibling=S,r.child=d,(r.mode&1)!==0&&ra(r,n.child,null,C),r.child.memoizedState=Id(C),r.memoizedState=Nd,S);if((r.mode&1)===0)return kl(n,r,C,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var k=d.dgst;return d=k,S=Error(t(419)),d=Ad(S,d,void 0),kl(n,r,C,d)}if(k=(C&n.childLanes)!==0,ni||k){if(d=An,d!==null){switch(C&-C){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(d.suspendedLanes|C))!==0?0:m,m!==0&&m!==S.retryLane&&(S.retryLane=m,ur(n,m),ki(d,n,m,-1))}return $d(),d=Ad(Error(t(421))),kl(n,r,C,d)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=O_.bind(null,n),m._reactRetry=r,null):(n=S.treeContext,di=Dr(m.nextSibling),ui=r,rn=!0,Di=null,n!==null&&(Si[Mi++]=lr,Si[Mi++]=cr,Si[Mi++]=fs,lr=n.id,cr=n.overflow,fs=r),r=Ld(r,d.children),r.flags|=4096,r)}function v0(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),ud(n.return,r,l)}function Dd(n,r,l,d,m){var S=n.memoizedState;S===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:m}:(S.isBackwards=r,S.rendering=null,S.renderingStartTime=0,S.last=d,S.tail=l,S.tailMode=m)}function x0(n,r,l){var d=r.pendingProps,m=d.revealOrder,S=d.tail;if(Xn(n,r,d.children,l),d=on.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&v0(n,l,r);else if(n.tag===19)v0(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if($t(on,d),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&Nl(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),Dd(r,!1,m,l,S);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&Nl(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Dd(r,!0,l,null,S);break;case"together":Dd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Bl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function hr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),xs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Xr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Xr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function T_(n,r,l){switch(r.tag){case 3:p0(r),ia();break;case 5:Im(r);break;case 1:ti(r.type)&&Sl(r);break;case 4:fd(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,m=r.memoizedProps.value;$t(Al,d._currentValue),d._currentValue=m;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?($t(on,on.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?g0(n,r,l):($t(on,on.current&1),n=hr(n,r,l),n!==null?n.sibling:null);$t(on,on.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return x0(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),$t(on,on.current),d)break;return null;case 22:case 23:return r.lanes=0,d0(n,r,l)}return hr(n,r,l)}var _0,Ud,y0,S0;_0=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ud=function(){},y0=function(n,r,l,d){var m=n.memoizedProps;if(m!==d){n=r.stateNode,gs(qi.current);var S=null;switch(l){case"input":m=Ut(n,m),d=Ut(n,d),S=[];break;case"select":m=de({},m,{value:void 0}),d=de({},d,{value:void 0}),S=[];break;case"textarea":m=tn(n,m),d=tn(n,d),S=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=xl)}qe(l,d);var C;l=null;for(ue in m)if(!d.hasOwnProperty(ue)&&m.hasOwnProperty(ue)&&m[ue]!=null)if(ue==="style"){var k=m[ue];for(C in k)k.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(s.hasOwnProperty(ue)?S||(S=[]):(S=S||[]).push(ue,null));for(ue in d){var H=d[ue];if(k=m!=null?m[ue]:void 0,d.hasOwnProperty(ue)&&H!==k&&(H!=null||k!=null))if(ue==="style")if(k){for(C in k)!k.hasOwnProperty(C)||H&&H.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in H)H.hasOwnProperty(C)&&k[C]!==H[C]&&(l||(l={}),l[C]=H[C])}else l||(S||(S=[]),S.push(ue,l)),l=H;else ue==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,k=k?k.__html:void 0,H!=null&&k!==H&&(S=S||[]).push(ue,H)):ue==="children"?typeof H!="string"&&typeof H!="number"||(S=S||[]).push(ue,""+H):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(s.hasOwnProperty(ue)?(H!=null&&ue==="onScroll"&&Zt("scroll",n),S||k===H||(S=[])):(S=S||[]).push(ue,H))}l&&(S=S||[]).push("style",l);var ue=S;(r.updateQueue=ue)&&(r.flags|=4)}},S0=function(n,r,l,d){l!==d&&(r.flags|=4)};function bo(n,r){if(!rn)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function Fn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function w_(n,r,l){var d=r.pendingProps;switch(id(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(r),null;case 1:return ti(r.type)&&yl(),Fn(r),null;case 3:return d=r.stateNode,oa(),Qt(ei),Qt(Un),gd(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(wl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Di!==null&&(jd(Di),Di=null))),Ud(n,r),Fn(r),null;case 5:pd(r);var m=gs(So.current);if(l=r.type,n!==null&&r.stateNode!=null)y0(n,r,l,d,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return Fn(r),null}if(n=gs(qi.current),wl(r)){d=r.stateNode,l=r.type;var S=r.memoizedProps;switch(d[Yi]=r,d[go]=S,n=(r.mode&1)!==0,l){case"dialog":Zt("cancel",d),Zt("close",d);break;case"iframe":case"object":case"embed":Zt("load",d);break;case"video":case"audio":for(m=0;m<fo.length;m++)Zt(fo[m],d);break;case"source":Zt("error",d);break;case"img":case"image":case"link":Zt("error",d),Zt("load",d);break;case"details":Zt("toggle",d);break;case"input":Ct(d,S),Zt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!S.multiple},Zt("invalid",d);break;case"textarea":j(d,S),Zt("invalid",d)}qe(l,S),m=null;for(var C in S)if(S.hasOwnProperty(C)){var k=S[C];C==="children"?typeof k=="string"?d.textContent!==k&&(S.suppressHydrationWarning!==!0&&vl(d.textContent,k,n),m=["children",k]):typeof k=="number"&&d.textContent!==""+k&&(S.suppressHydrationWarning!==!0&&vl(d.textContent,k,n),m=["children",""+k]):s.hasOwnProperty(C)&&k!=null&&C==="onScroll"&&Zt("scroll",d)}switch(l){case"input":it(d),un(d,S,!0);break;case"textarea":it(d),Lt(d);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(d.onclick=xl)}d=m,r.updateQueue=d,d!==null&&(r.flags|=4)}else{C=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=C.createElement(l,{is:d.is}):(n=C.createElement(l),l==="select"&&(C=n,d.multiple?C.multiple=!0:d.size&&(C.size=d.size))):n=C.createElementNS(n,l),n[Yi]=r,n[go]=d,_0(n,r,!1,!1),r.stateNode=n;e:{switch(C=Ie(l,d),l){case"dialog":Zt("cancel",n),Zt("close",n),m=d;break;case"iframe":case"object":case"embed":Zt("load",n),m=d;break;case"video":case"audio":for(m=0;m<fo.length;m++)Zt(fo[m],n);m=d;break;case"source":Zt("error",n),m=d;break;case"img":case"image":case"link":Zt("error",n),Zt("load",n),m=d;break;case"details":Zt("toggle",n),m=d;break;case"input":Ct(n,d),m=Ut(n,d),Zt("invalid",n);break;case"option":m=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},m=de({},d,{value:void 0}),Zt("invalid",n);break;case"textarea":j(n,d),m=tn(n,d),Zt("invalid",n);break;default:m=d}qe(l,m),k=m;for(S in k)if(k.hasOwnProperty(S)){var H=k[S];S==="style"?ge(n,H):S==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&ae(n,H)):S==="children"?typeof H=="string"?(l!=="textarea"||H!=="")&&he(n,H):typeof H=="number"&&he(n,""+H):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(s.hasOwnProperty(S)?H!=null&&S==="onScroll"&&Zt("scroll",n):H!=null&&L(n,S,H,C))}switch(l){case"input":it(n),un(n,d,!1);break;case"textarea":it(n),Lt(n);break;case"option":d.value!=null&&n.setAttribute("value",""+me(d.value));break;case"select":n.multiple=!!d.multiple,S=d.value,S!=null?Ht(n,!!d.multiple,S,!1):d.defaultValue!=null&&Ht(n,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=xl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Fn(r),null;case 6:if(n&&r.stateNode!=null)S0(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=gs(So.current),gs(qi.current),wl(r)){if(d=r.stateNode,l=r.memoizedProps,d[Yi]=r,(S=d.nodeValue!==l)&&(n=ui,n!==null))switch(n.tag){case 3:vl(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&vl(d.nodeValue,l,(n.mode&1)!==0)}S&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Yi]=r,r.stateNode=d}return Fn(r),null;case 13:if(Qt(on),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(rn&&di!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Tm(),ia(),r.flags|=98560,S=!1;else if(S=wl(r),d!==null&&d.dehydrated!==null){if(n===null){if(!S)throw Error(t(318));if(S=r.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Yi]=r}else ia(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Fn(r),S=!1}else Di!==null&&(jd(Di),Di=null),S=!0;if(!S)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(on.current&1)!==0?Mn===0&&(Mn=3):$d())),r.updateQueue!==null&&(r.flags|=4),Fn(r),null);case 4:return oa(),Ud(n,r),n===null&&po(r.stateNode.containerInfo),Fn(r),null;case 10:return cd(r.type._context),Fn(r),null;case 17:return ti(r.type)&&yl(),Fn(r),null;case 19:if(Qt(on),S=r.memoizedState,S===null)return Fn(r),null;if(d=(r.flags&128)!==0,C=S.rendering,C===null)if(d)bo(S,!1);else{if(Mn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(C=Nl(n),C!==null){for(r.flags|=128,bo(S,!1),d=C.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)S=l,n=d,S.flags&=14680066,C=S.alternate,C===null?(S.childLanes=0,S.lanes=n,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=C.childLanes,S.lanes=C.lanes,S.child=C.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=C.memoizedProps,S.memoizedState=C.memoizedState,S.updateQueue=C.updateQueue,S.type=C.type,n=C.dependencies,S.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return $t(on,on.current&1|2),r.child}n=n.sibling}S.tail!==null&&an()>da&&(r.flags|=128,d=!0,bo(S,!1),r.lanes=4194304)}else{if(!d)if(n=Nl(C),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),bo(S,!0),S.tail===null&&S.tailMode==="hidden"&&!C.alternate&&!rn)return Fn(r),null}else 2*an()-S.renderingStartTime>da&&l!==1073741824&&(r.flags|=128,d=!0,bo(S,!1),r.lanes=4194304);S.isBackwards?(C.sibling=r.child,r.child=C):(l=S.last,l!==null?l.sibling=C:r.child=C,S.last=C)}return S.tail!==null?(r=S.tail,S.rendering=r,S.tail=r.sibling,S.renderingStartTime=an(),r.sibling=null,l=on.current,$t(on,d?l&1|2:l&1),r):(Fn(r),null);case 22:case 23:return qd(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(hi&1073741824)!==0&&(Fn(r),r.subtreeFlags&6&&(r.flags|=8192)):Fn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function b_(n,r){switch(id(r),r.tag){case 1:return ti(r.type)&&yl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return oa(),Qt(ei),Qt(Un),gd(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return pd(r),null;case 13:if(Qt(on),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ia()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Qt(on),null;case 4:return oa(),null;case 10:return cd(r.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var zl=!1,kn=!1,A_=typeof WeakSet=="function"?WeakSet:Set,ze=null;function ca(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){hn(n,r,d)}else l.current=null}function Od(n,r,l){try{l()}catch(d){hn(n,r,d)}}var M0=!1;function C_(n,r){if(qu=al,n=em(),zu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var m=d.anchorOffset,S=d.focusNode;d=d.focusOffset;try{l.nodeType,S.nodeType}catch{l=null;break e}var C=0,k=-1,H=-1,ue=0,ye=0,Se=n,_e=null;t:for(;;){for(var ke;Se!==l||m!==0&&Se.nodeType!==3||(k=C+m),Se!==S||d!==0&&Se.nodeType!==3||(H=C+d),Se.nodeType===3&&(C+=Se.nodeValue.length),(ke=Se.firstChild)!==null;)_e=Se,Se=ke;for(;;){if(Se===n)break t;if(_e===l&&++ue===m&&(k=C),_e===S&&++ye===d&&(H=C),(ke=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=ke}l=k===-1||H===-1?null:{start:k,end:H}}else l=null}l=l||{start:0,end:0}}else l=null;for($u={focusedElem:n,selectionRange:l},al=!1,ze=r;ze!==null;)if(r=ze,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ze=n;else for(;ze!==null;){r=ze;try{var He=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ye=He.memoizedProps,pn=He.memoizedState,ee=r.stateNode,X=ee.getSnapshotBeforeUpdate(r.elementType===r.type?Ye:Ui(r.type,Ye),pn);ee.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var re=r.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){hn(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,ze=n;break}ze=r.return}return He=M0,M0=!1,He}function Ao(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&n)===n){var S=m.destroy;m.destroy=void 0,S!==void 0&&Od(r,l,S)}m=m.next}while(m!==d)}}function Gl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function Fd(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function E0(n){var r=n.alternate;r!==null&&(n.alternate=null,E0(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Yi],delete r[go],delete r[Ju],delete r[u_],delete r[d_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function T0(n){return n.tag===5||n.tag===3||n.tag===4}function w0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||T0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kd(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=xl));else if(d!==4&&(n=n.child,n!==null))for(kd(n,r,l),n=n.sibling;n!==null;)kd(n,r,l),n=n.sibling}function Bd(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(Bd(n,r,l),n=n.sibling;n!==null;)Bd(n,r,l),n=n.sibling}var In=null,Oi=!1;function zr(n,r,l){for(l=l.child;l!==null;)b0(n,r,l),l=l.sibling}function b0(n,r,l){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(ne,l)}catch{}switch(l.tag){case 5:kn||ca(l,r);case 6:var d=In,m=Oi;In=null,zr(n,r,l),In=d,Oi=m,In!==null&&(Oi?(n=In,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):In.removeChild(l.stateNode));break;case 18:In!==null&&(Oi?(n=In,l=l.stateNode,n.nodeType===8?Qu(n.parentNode,l):n.nodeType===1&&Qu(n,l),ro(n)):Qu(In,l.stateNode));break;case 4:d=In,m=Oi,In=l.stateNode.containerInfo,Oi=!0,zr(n,r,l),In=d,Oi=m;break;case 0:case 11:case 14:case 15:if(!kn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var S=m,C=S.destroy;S=S.tag,C!==void 0&&((S&2)!==0||(S&4)!==0)&&Od(l,r,C),m=m.next}while(m!==d)}zr(n,r,l);break;case 1:if(!kn&&(ca(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(k){hn(l,r,k)}zr(n,r,l);break;case 21:zr(n,r,l);break;case 22:l.mode&1?(kn=(d=kn)||l.memoizedState!==null,zr(n,r,l),kn=d):zr(n,r,l);break;default:zr(n,r,l)}}function A0(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new A_),r.forEach(function(d){var m=F_.bind(null,n,d);l.has(d)||(l.add(d),d.then(m,m))})}}function Fi(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var m=l[d];try{var S=n,C=r,k=C;e:for(;k!==null;){switch(k.tag){case 5:In=k.stateNode,Oi=!1;break e;case 3:In=k.stateNode.containerInfo,Oi=!0;break e;case 4:In=k.stateNode.containerInfo,Oi=!0;break e}k=k.return}if(In===null)throw Error(t(160));b0(S,C,m),In=null,Oi=!1;var H=m.alternate;H!==null&&(H.return=null),m.return=null}catch(ue){hn(m,r,ue)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)C0(r,n),r=r.sibling}function C0(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fi(r,n),Ki(n),d&4){try{Ao(3,n,n.return),Gl(3,n)}catch(Ye){hn(n,n.return,Ye)}try{Ao(5,n,n.return)}catch(Ye){hn(n,n.return,Ye)}}break;case 1:Fi(r,n),Ki(n),d&512&&l!==null&&ca(l,l.return);break;case 5:if(Fi(r,n),Ki(n),d&512&&l!==null&&ca(l,l.return),n.flags&32){var m=n.stateNode;try{he(m,"")}catch(Ye){hn(n,n.return,Ye)}}if(d&4&&(m=n.stateNode,m!=null)){var S=n.memoizedProps,C=l!==null?l.memoizedProps:S,k=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{k==="input"&&S.type==="radio"&&S.name!=null&&Et(m,S),Ie(k,C);var ue=Ie(k,S);for(C=0;C<H.length;C+=2){var ye=H[C],Se=H[C+1];ye==="style"?ge(m,Se):ye==="dangerouslySetInnerHTML"?ae(m,Se):ye==="children"?he(m,Se):L(m,ye,Se,ue)}switch(k){case"input":en(m,S);break;case"textarea":Pn(m,S);break;case"select":var _e=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!S.multiple;var ke=S.value;ke!=null?Ht(m,!!S.multiple,ke,!1):_e!==!!S.multiple&&(S.defaultValue!=null?Ht(m,!!S.multiple,S.defaultValue,!0):Ht(m,!!S.multiple,S.multiple?[]:"",!1))}m[go]=S}catch(Ye){hn(n,n.return,Ye)}}break;case 6:if(Fi(r,n),Ki(n),d&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,S=n.memoizedProps;try{m.nodeValue=S}catch(Ye){hn(n,n.return,Ye)}}break;case 3:if(Fi(r,n),Ki(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{ro(r.containerInfo)}catch(Ye){hn(n,n.return,Ye)}break;case 4:Fi(r,n),Ki(n);break;case 13:Fi(r,n),Ki(n),m=n.child,m.flags&8192&&(S=m.memoizedState!==null,m.stateNode.isHidden=S,!S||m.alternate!==null&&m.alternate.memoizedState!==null||(Vd=an())),d&4&&A0(n);break;case 22:if(ye=l!==null&&l.memoizedState!==null,n.mode&1?(kn=(ue=kn)||ye,Fi(r,n),kn=ue):Fi(r,n),Ki(n),d&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!ye&&(n.mode&1)!==0)for(ze=n,ye=n.child;ye!==null;){for(Se=ze=ye;ze!==null;){switch(_e=ze,ke=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ao(4,_e,_e.return);break;case 1:ca(_e,_e.return);var He=_e.stateNode;if(typeof He.componentWillUnmount=="function"){d=_e,l=_e.return;try{r=d,He.props=r.memoizedProps,He.state=r.memoizedState,He.componentWillUnmount()}catch(Ye){hn(d,l,Ye)}}break;case 5:ca(_e,_e.return);break;case 22:if(_e.memoizedState!==null){N0(Se);continue}}ke!==null?(ke.return=_e,ze=ke):N0(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{m=Se.stateNode,ue?(S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(k=Se.stateNode,H=Se.memoizedProps.style,C=H!=null&&H.hasOwnProperty("display")?H.display:null,k.style.display=fe("display",C))}catch(Ye){hn(n,n.return,Ye)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=ue?"":Se.memoizedProps}catch(Ye){hn(n,n.return,Ye)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Fi(r,n),Ki(n),d&4&&A0(n);break;case 21:break;default:Fi(r,n),Ki(n)}}function Ki(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(T0(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(he(m,""),d.flags&=-33);var S=w0(n);Bd(n,S,m);break;case 3:case 4:var C=d.stateNode.containerInfo,k=w0(n);kd(n,k,C);break;default:throw Error(t(161))}}catch(H){hn(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function R_(n,r,l){ze=n,R0(n)}function R0(n,r,l){for(var d=(n.mode&1)!==0;ze!==null;){var m=ze,S=m.child;if(m.tag===22&&d){var C=m.memoizedState!==null||zl;if(!C){var k=m.alternate,H=k!==null&&k.memoizedState!==null||kn;k=zl;var ue=kn;if(zl=C,(kn=H)&&!ue)for(ze=m;ze!==null;)C=ze,H=C.child,C.tag===22&&C.memoizedState!==null?I0(m):H!==null?(H.return=C,ze=H):I0(m);for(;S!==null;)ze=S,R0(S),S=S.sibling;ze=m,zl=k,kn=ue}P0(n)}else(m.subtreeFlags&8772)!==0&&S!==null?(S.return=m,ze=S):P0(n)}}function P0(n){for(;ze!==null;){var r=ze;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:kn||Gl(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!kn)if(l===null)d.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:Ui(r.type,l.memoizedProps);d.componentDidUpdate(m,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var S=r.updateQueue;S!==null&&Nm(r,S,d);break;case 3:var C=r.updateQueue;if(C!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Nm(r,C,l)}break;case 5:var k=r.stateNode;if(l===null&&r.flags&4){l=k;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&l.focus();break;case"img":H.src&&(l.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ue=r.alternate;if(ue!==null){var ye=ue.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&ro(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}kn||r.flags&512&&Fd(r)}catch(_e){hn(r,r.return,_e)}}if(r===n){ze=null;break}if(l=r.sibling,l!==null){l.return=r.return,ze=l;break}ze=r.return}}function N0(n){for(;ze!==null;){var r=ze;if(r===n){ze=null;break}var l=r.sibling;if(l!==null){l.return=r.return,ze=l;break}ze=r.return}}function I0(n){for(;ze!==null;){var r=ze;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Gl(4,r)}catch(H){hn(r,l,H)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var m=r.return;try{d.componentDidMount()}catch(H){hn(r,m,H)}}var S=r.return;try{Fd(r)}catch(H){hn(r,S,H)}break;case 5:var C=r.return;try{Fd(r)}catch(H){hn(r,C,H)}}}catch(H){hn(r,r.return,H)}if(r===n){ze=null;break}var k=r.sibling;if(k!==null){k.return=r.return,ze=k;break}ze=r.return}}var P_=Math.ceil,Vl=A.ReactCurrentDispatcher,zd=A.ReactCurrentOwner,wi=A.ReactCurrentBatchConfig,It=0,An=null,xn=null,Ln=0,hi=0,ua=Ur(0),Mn=0,Co=null,xs=0,Hl=0,Gd=0,Ro=null,ii=null,Vd=0,da=1/0,fr=null,Wl=!1,Hd=null,Gr=null,Xl=!1,Vr=null,jl=0,Po=0,Wd=null,Yl=-1,ql=0;function jn(){return(It&6)!==0?an():Yl!==-1?Yl:Yl=an()}function Hr(n){return(n.mode&1)===0?1:(It&2)!==0&&Ln!==0?Ln&-Ln:f_.transition!==null?(ql===0&&(ql=Fe()),ql):(n=yt,n!==0||(n=window.event,n=n===void 0?16:Dp(n.type)),n)}function ki(n,r,l,d){if(50<Po)throw Po=0,Wd=null,Error(t(185));vt(n,l,d),((It&2)===0||n!==An)&&(n===An&&((It&2)===0&&(Hl|=l),Mn===4&&Wr(n,Ln)),ri(n,d),l===1&&It===0&&(r.mode&1)===0&&(da=an()+500,Ml&&Fr()))}function ri(n,r){var l=n.callbackNode;Wt(n,r);var d=qt(n,n===An?Ln:0);if(d===0)l!==null&&Qa(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&Qa(l),r===1)n.tag===0?h_(D0.bind(null,n)):_m(D0.bind(null,n)),l_(function(){(It&6)===0&&Fr()}),l=null;else{switch(sr(d)){case 1:l=Ja;break;case 4:l=N;break;case 16:l=q;break;case 536870912:l=ie;break;default:l=q}l=V0(l,L0.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function L0(n,r){if(Yl=-1,ql=0,(It&6)!==0)throw Error(t(327));var l=n.callbackNode;if(ha()&&n.callbackNode!==l)return null;var d=qt(n,n===An?Ln:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=$l(n,d);else{r=d;var m=It;It|=2;var S=O0();(An!==n||Ln!==r)&&(fr=null,da=an()+500,ys(n,r));do try{L_();break}catch(k){U0(n,k)}while(!0);ld(),Vl.current=S,It=m,xn!==null?r=0:(An=null,Ln=0,r=Mn)}if(r!==0){if(r===2&&(m=vn(n),m!==0&&(d=m,r=Xd(n,m))),r===1)throw l=Co,ys(n,0),Wr(n,d),ri(n,an()),l;if(r===6)Wr(n,d);else{if(m=n.current.alternate,(d&30)===0&&!N_(m)&&(r=$l(n,d),r===2&&(S=vn(n),S!==0&&(d=S,r=Xd(n,S))),r===1))throw l=Co,ys(n,0),Wr(n,d),ri(n,an()),l;switch(n.finishedWork=m,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:Ss(n,ii,fr);break;case 3:if(Wr(n,d),(d&130023424)===d&&(r=Vd+500-an(),10<r)){if(qt(n,0)!==0)break;if(m=n.suspendedLanes,(m&d)!==d){jn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=Zu(Ss.bind(null,n,ii,fr),r);break}Ss(n,ii,fr);break;case 4:if(Wr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,m=-1;0<d;){var C=31-we(d);S=1<<C,C=r[C],C>m&&(m=C),d&=~S}if(d=m,d=an()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*P_(d/1960))-d,10<d){n.timeoutHandle=Zu(Ss.bind(null,n,ii,fr),d);break}Ss(n,ii,fr);break;case 5:Ss(n,ii,fr);break;default:throw Error(t(329))}}}return ri(n,an()),n.callbackNode===l?L0.bind(null,n):null}function Xd(n,r){var l=Ro;return n.current.memoizedState.isDehydrated&&(ys(n,r).flags|=256),n=$l(n,r),n!==2&&(r=ii,ii=l,r!==null&&jd(r)),n}function jd(n){ii===null?ii=n:ii.push.apply(ii,n)}function N_(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var m=l[d],S=m.getSnapshot;m=m.value;try{if(!Li(S(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wr(n,r){for(r&=~Gd,r&=~Hl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-we(r),d=1<<l;n[l]=-1,r&=~d}}function D0(n){if((It&6)!==0)throw Error(t(327));ha();var r=qt(n,0);if((r&1)===0)return ri(n,an()),null;var l=$l(n,r);if(n.tag!==0&&l===2){var d=vn(n);d!==0&&(r=d,l=Xd(n,d))}if(l===1)throw l=Co,ys(n,0),Wr(n,r),ri(n,an()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ss(n,ii,fr),ri(n,an()),null}function Yd(n,r){var l=It;It|=1;try{return n(r)}finally{It=l,It===0&&(da=an()+500,Ml&&Fr())}}function _s(n){Vr!==null&&Vr.tag===0&&(It&6)===0&&ha();var r=It;It|=1;var l=wi.transition,d=yt;try{if(wi.transition=null,yt=1,n)return n()}finally{yt=d,wi.transition=l,It=r,(It&6)===0&&Fr()}}function qd(){hi=ua.current,Qt(ua)}function ys(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,o_(l)),xn!==null)for(l=xn.return;l!==null;){var d=l;switch(id(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&yl();break;case 3:oa(),Qt(ei),Qt(Un),gd();break;case 5:pd(d);break;case 4:oa();break;case 13:Qt(on);break;case 19:Qt(on);break;case 10:cd(d.type._context);break;case 22:case 23:qd()}l=l.return}if(An=n,xn=n=Xr(n.current,null),Ln=hi=r,Mn=0,Co=null,Gd=Hl=xs=0,ii=Ro=null,ms!==null){for(r=0;r<ms.length;r++)if(l=ms[r],d=l.interleaved,d!==null){l.interleaved=null;var m=d.next,S=l.pending;if(S!==null){var C=S.next;S.next=m,d.next=C}l.pending=d}ms=null}return n}function U0(n,r){do{var l=xn;try{if(ld(),Il.current=Ol,Ll){for(var d=ln.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}Ll=!1}if(vs=0,bn=Sn=ln=null,Mo=!1,Eo=0,zd.current=null,l===null||l.return===null){Mn=1,Co=r,xn=null;break}e:{var S=n,C=l.return,k=l,H=r;if(r=Ln,k.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ue=H,ye=k,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ke=a0(C);if(ke!==null){ke.flags&=-257,o0(ke,C,k,S,r),ke.mode&1&&s0(S,ue,r),r=ke,H=ue;var He=r.updateQueue;if(He===null){var Ye=new Set;Ye.add(H),r.updateQueue=Ye}else He.add(H);break e}else{if((r&1)===0){s0(S,ue,r),$d();break e}H=Error(t(426))}}else if(rn&&k.mode&1){var pn=a0(C);if(pn!==null){(pn.flags&65536)===0&&(pn.flags|=256),o0(pn,C,k,S,r),ad(la(H,k));break e}}S=H=la(H,k),Mn!==4&&(Mn=2),Ro===null?Ro=[S]:Ro.push(S),S=C;do{switch(S.tag){case 3:S.flags|=65536,r&=-r,S.lanes|=r;var ee=i0(S,H,r);Pm(S,ee);break e;case 1:k=H;var X=S.type,re=S.stateNode;if((S.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Gr===null||!Gr.has(re)))){S.flags|=65536,r&=-r,S.lanes|=r;var Te=r0(S,k,r);Pm(S,Te);break e}}S=S.return}while(S!==null)}k0(l)}catch(Ze){r=Ze,xn===l&&l!==null&&(xn=l=l.return);continue}break}while(!0)}function O0(){var n=Vl.current;return Vl.current=Ol,n===null?Ol:n}function $d(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),An===null||(xs&268435455)===0&&(Hl&268435455)===0||Wr(An,Ln)}function $l(n,r){var l=It;It|=2;var d=O0();(An!==n||Ln!==r)&&(fr=null,ys(n,r));do try{I_();break}catch(m){U0(n,m)}while(!0);if(ld(),It=l,Vl.current=d,xn!==null)throw Error(t(261));return An=null,Ln=0,Mn}function I_(){for(;xn!==null;)F0(xn)}function L_(){for(;xn!==null&&!rl();)F0(xn)}function F0(n){var r=G0(n.alternate,n,hi);n.memoizedProps=n.pendingProps,r===null?k0(n):xn=r,zd.current=null}function k0(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=w_(l,r,hi),l!==null){xn=l;return}}else{if(l=b_(l,r),l!==null){l.flags&=32767,xn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Mn=6,xn=null;return}}if(r=r.sibling,r!==null){xn=r;return}xn=r=n}while(r!==null);Mn===0&&(Mn=5)}function Ss(n,r,l){var d=yt,m=wi.transition;try{wi.transition=null,yt=1,D_(n,r,l,d)}finally{wi.transition=m,yt=d}return null}function D_(n,r,l,d){do ha();while(Vr!==null);if((It&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var S=l.lanes|l.childLanes;if(Qn(n,S),n===An&&(xn=An=null,Ln=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Xl||(Xl=!0,V0(q,function(){return ha(),null})),S=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||S){S=wi.transition,wi.transition=null;var C=yt;yt=1;var k=It;It|=4,zd.current=null,C_(n,l),C0(l,n),e_($u),al=!!qu,$u=qu=null,n.current=l,R_(l),Au(),It=k,yt=C,wi.transition=S}else n.current=l;if(Xl&&(Xl=!1,Vr=n,jl=m),S=n.pendingLanes,S===0&&(Gr=null),Be(l.stateNode),ri(n,an()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],d(m.value,{componentStack:m.stack,digest:m.digest});if(Wl)throw Wl=!1,n=Hd,Hd=null,n;return(jl&1)!==0&&n.tag!==0&&ha(),S=n.pendingLanes,(S&1)!==0?n===Wd?Po++:(Po=0,Wd=n):Po=0,Fr(),null}function ha(){if(Vr!==null){var n=sr(jl),r=wi.transition,l=yt;try{if(wi.transition=null,yt=16>n?16:n,Vr===null)var d=!1;else{if(n=Vr,Vr=null,jl=0,(It&6)!==0)throw Error(t(331));var m=It;for(It|=4,ze=n.current;ze!==null;){var S=ze,C=S.child;if((ze.flags&16)!==0){var k=S.deletions;if(k!==null){for(var H=0;H<k.length;H++){var ue=k[H];for(ze=ue;ze!==null;){var ye=ze;switch(ye.tag){case 0:case 11:case 15:Ao(8,ye,S)}var Se=ye.child;if(Se!==null)Se.return=ye,ze=Se;else for(;ze!==null;){ye=ze;var _e=ye.sibling,ke=ye.return;if(E0(ye),ye===ue){ze=null;break}if(_e!==null){_e.return=ke,ze=_e;break}ze=ke}}}var He=S.alternate;if(He!==null){var Ye=He.child;if(Ye!==null){He.child=null;do{var pn=Ye.sibling;Ye.sibling=null,Ye=pn}while(Ye!==null)}}ze=S}}if((S.subtreeFlags&2064)!==0&&C!==null)C.return=S,ze=C;else e:for(;ze!==null;){if(S=ze,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:Ao(9,S,S.return)}var ee=S.sibling;if(ee!==null){ee.return=S.return,ze=ee;break e}ze=S.return}}var X=n.current;for(ze=X;ze!==null;){C=ze;var re=C.child;if((C.subtreeFlags&2064)!==0&&re!==null)re.return=C,ze=re;else e:for(C=X;ze!==null;){if(k=ze,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Gl(9,k)}}catch(Ze){hn(k,k.return,Ze)}if(k===C){ze=null;break e}var Te=k.sibling;if(Te!==null){Te.return=k.return,ze=Te;break e}ze=k.return}}if(It=m,Fr(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(ne,n)}catch{}d=!0}return d}finally{yt=l,wi.transition=r}}return!1}function B0(n,r,l){r=la(l,r),r=i0(n,r,1),n=Br(n,r,1),r=jn(),n!==null&&(vt(n,1,r),ri(n,r))}function hn(n,r,l){if(n.tag===3)B0(n,n,l);else for(;r!==null;){if(r.tag===3){B0(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Gr===null||!Gr.has(d))){n=la(l,n),n=r0(r,n,1),r=Br(r,n,1),n=jn(),r!==null&&(vt(r,1,n),ri(r,n));break}}r=r.return}}function U_(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=jn(),n.pingedLanes|=n.suspendedLanes&l,An===n&&(Ln&l)===l&&(Mn===4||Mn===3&&(Ln&130023424)===Ln&&500>an()-Vd?ys(n,0):Gd|=l),ri(n,r)}function z0(n,r){r===0&&((n.mode&1)===0?r=1:(r=$e,$e<<=1,($e&130023424)===0&&($e=4194304)));var l=jn();n=ur(n,r),n!==null&&(vt(n,r,l),ri(n,l))}function O_(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),z0(n,l)}function F_(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),z0(n,l)}var G0;G0=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||ei.current)ni=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return ni=!1,T_(n,r,l);ni=(n.flags&131072)!==0}else ni=!1,rn&&(r.flags&1048576)!==0&&ym(r,Tl,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Bl(n,r),n=r.pendingProps;var m=ea(r,Un.current);aa(r,l),m=_d(null,r,d,n,m,l);var S=yd();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ti(d)?(S=!0,Sl(r)):S=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,hd(r),m.updater=Fl,r.stateNode=m,m._reactInternals=r,bd(r,d,n,l),r=Pd(null,r,d,!0,S,l)):(r.tag=0,rn&&S&&nd(r),Xn(null,r,m,l),r=r.child),r;case 16:d=r.elementType;e:{switch(Bl(n,r),n=r.pendingProps,m=d._init,d=m(d._payload),r.type=d,m=r.tag=B_(d),n=Ui(d,n),m){case 0:r=Rd(null,r,d,n,l);break e;case 1:r=f0(null,r,d,n,l);break e;case 11:r=l0(null,r,d,n,l);break e;case 14:r=c0(null,r,d,Ui(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:Ui(d,m),Rd(n,r,d,m,l);case 1:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:Ui(d,m),f0(n,r,d,m,l);case 3:e:{if(p0(r),n===null)throw Error(t(387));d=r.pendingProps,S=r.memoizedState,m=S.element,Rm(n,r),Pl(r,d,null,l);var C=r.memoizedState;if(d=C.element,S.isDehydrated)if(S={element:d,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},r.updateQueue.baseState=S,r.memoizedState=S,r.flags&256){m=la(Error(t(423)),r),r=m0(n,r,d,l,m);break e}else if(d!==m){m=la(Error(t(424)),r),r=m0(n,r,d,l,m);break e}else for(di=Dr(r.stateNode.containerInfo.firstChild),ui=r,rn=!0,Di=null,l=Am(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ia(),d===m){r=hr(n,r,l);break e}Xn(n,r,d,l)}r=r.child}return r;case 5:return Im(r),n===null&&sd(r),d=r.type,m=r.pendingProps,S=n!==null?n.memoizedProps:null,C=m.children,Ku(d,m)?C=null:S!==null&&Ku(d,S)&&(r.flags|=32),h0(n,r),Xn(n,r,C,l),r.child;case 6:return n===null&&sd(r),null;case 13:return g0(n,r,l);case 4:return fd(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=ra(r,null,d,l):Xn(n,r,d,l),r.child;case 11:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:Ui(d,m),l0(n,r,d,m,l);case 7:return Xn(n,r,r.pendingProps,l),r.child;case 8:return Xn(n,r,r.pendingProps.children,l),r.child;case 12:return Xn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,m=r.pendingProps,S=r.memoizedProps,C=m.value,$t(Al,d._currentValue),d._currentValue=C,S!==null)if(Li(S.value,C)){if(S.children===m.children&&!ei.current){r=hr(n,r,l);break e}}else for(S=r.child,S!==null&&(S.return=r);S!==null;){var k=S.dependencies;if(k!==null){C=S.child;for(var H=k.firstContext;H!==null;){if(H.context===d){if(S.tag===1){H=dr(-1,l&-l),H.tag=2;var ue=S.updateQueue;if(ue!==null){ue=ue.shared;var ye=ue.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),ue.pending=H}}S.lanes|=l,H=S.alternate,H!==null&&(H.lanes|=l),ud(S.return,l,r),k.lanes|=l;break}H=H.next}}else if(S.tag===10)C=S.type===r.type?null:S.child;else if(S.tag===18){if(C=S.return,C===null)throw Error(t(341));C.lanes|=l,k=C.alternate,k!==null&&(k.lanes|=l),ud(C,l,r),C=S.sibling}else C=S.child;if(C!==null)C.return=S;else for(C=S;C!==null;){if(C===r){C=null;break}if(S=C.sibling,S!==null){S.return=C.return,C=S;break}C=C.return}S=C}Xn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,d=r.pendingProps.children,aa(r,l),m=Ei(m),d=d(m),r.flags|=1,Xn(n,r,d,l),r.child;case 14:return d=r.type,m=Ui(d,r.pendingProps),m=Ui(d.type,m),c0(n,r,d,m,l);case 15:return u0(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:Ui(d,m),Bl(n,r),r.tag=1,ti(d)?(n=!0,Sl(r)):n=!1,aa(r,l),t0(r,d,m),bd(r,d,m,l),Pd(null,r,d,!0,n,l);case 19:return x0(n,r,l);case 22:return d0(n,r,l)}throw Error(t(156,r.tag))};function V0(n,r){return cs(n,r)}function k_(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(n,r,l,d){return new k_(n,r,l,d)}function Kd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function B_(n){if(typeof n=="function")return Kd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===z)return 11;if(n===Y)return 14}return 2}function Xr(n,r){var l=n.alternate;return l===null?(l=bi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Kl(n,r,l,d,m,S){var C=2;if(d=n,typeof n=="function")Kd(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case O:return Ms(l.children,m,S,r);case w:C=8,m|=8;break;case R:return n=bi(12,l,r,m|2),n.elementType=R,n.lanes=S,n;case K:return n=bi(13,l,r,m),n.elementType=K,n.lanes=S,n;case te:return n=bi(19,l,r,m),n.elementType=te,n.lanes=S,n;case Z:return Zl(l,m,S,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case F:C=10;break e;case B:C=9;break e;case z:C=11;break e;case Y:C=14;break e;case oe:C=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=bi(C,l,r,m),r.elementType=n,r.type=d,r.lanes=S,r}function Ms(n,r,l,d){return n=bi(7,n,d,r),n.lanes=l,n}function Zl(n,r,l,d){return n=bi(22,n,d,r),n.elementType=Z,n.lanes=l,n.stateNode={isHidden:!1},n}function Zd(n,r,l){return n=bi(6,n,null,r),n.lanes=l,n}function Qd(n,r,l){return r=bi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function z_(n,r,l,d,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nn(0),this.expirationTimes=Nn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nn(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Jd(n,r,l,d,m,S,C,k,H){return n=new z_(n,r,l,k,H),r===1?(r=1,S===!0&&(r|=8)):r=0,S=bi(3,null,null,r),n.current=S,S.stateNode=n,S.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},hd(S),n}function G_(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function H0(n){if(!n)return Or;n=n._reactInternals;e:{if(Wn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ti(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(ti(l))return vm(n,l,r)}return r}function W0(n,r,l,d,m,S,C,k,H){return n=Jd(l,d,!0,n,m,S,C,k,H),n.context=H0(null),l=n.current,d=jn(),m=Hr(l),S=dr(d,m),S.callback=r??null,Br(l,S,m),n.current.lanes=m,vt(n,m,d),ri(n,d),n}function Ql(n,r,l,d){var m=r.current,S=jn(),C=Hr(m);return l=H0(l),r.context===null?r.context=l:r.pendingContext=l,r=dr(S,C),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Br(m,r,C),n!==null&&(ki(n,m,C,S),Rl(n,m,C)),C}function Jl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function X0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function eh(n,r){X0(n,r),(n=n.alternate)&&X0(n,r)}function V_(){return null}var j0=typeof reportError=="function"?reportError:function(n){console.error(n)};function th(n){this._internalRoot=n}ec.prototype.render=th.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Ql(n,r,null,null)},ec.prototype.unmount=th.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;_s(function(){Ql(null,n,null,null)}),r[ar]=null}};function ec(n){this._internalRoot=n}ec.prototype.unstable_scheduleHydration=function(n){if(n){var r=Xt();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Nr.length&&r!==0&&r<Nr[l].priority;l++);Nr.splice(l,0,n),l===0&&Ip(n)}};function nh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function tc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Y0(){}function H_(n,r,l,d,m){if(m){if(typeof d=="function"){var S=d;d=function(){var ue=Jl(C);S.call(ue)}}var C=W0(r,d,n,0,null,!1,!1,"",Y0);return n._reactRootContainer=C,n[ar]=C.current,po(n.nodeType===8?n.parentNode:n),_s(),C}for(;m=n.lastChild;)n.removeChild(m);if(typeof d=="function"){var k=d;d=function(){var ue=Jl(H);k.call(ue)}}var H=Jd(n,0,!1,null,null,!1,!1,"",Y0);return n._reactRootContainer=H,n[ar]=H.current,po(n.nodeType===8?n.parentNode:n),_s(function(){Ql(r,H,l,d)}),H}function nc(n,r,l,d,m){var S=l._reactRootContainer;if(S){var C=S;if(typeof m=="function"){var k=m;m=function(){var H=Jl(C);k.call(H)}}Ql(r,C,n,m)}else C=H_(l,r,n,m,d);return Jl(C)}kt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Rt(r.pendingLanes);l!==0&&(Jn(r,l|1),ri(r,an()),(It&6)===0&&(da=an()+500,Fr()))}break;case 13:_s(function(){var d=ur(n,1);if(d!==null){var m=jn();ki(d,n,1,m)}}),eh(n,1)}},Kt=function(n){if(n.tag===13){var r=ur(n,134217728);if(r!==null){var l=jn();ki(r,n,134217728,l)}eh(n,134217728)}},Ni=function(n){if(n.tag===13){var r=Hr(n),l=ur(n,r);if(l!==null){var d=jn();ki(l,n,r,d)}eh(n,r)}},Xt=function(){return yt},Ii=function(n,r){var l=yt;try{return yt=n,r()}finally{yt=l}},rt=function(n,r,l){switch(r){case"input":if(en(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var m=_l(d);if(!m)throw Error(t(90));Jt(d),en(d,m)}}}break;case"textarea":Pn(n,l);break;case"select":r=l.value,r!=null&&Ht(n,!!l.multiple,r,!1)}},Le=Yd,ve=_s;var W_={usingClientEntryPoint:!1,Events:[vo,Qs,_l,pe,Pe,Yd]},No={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X_={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ls(n),n===null?null:n.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||V_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{ne=ic.inject(X_),be=ic}catch{}}return si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W_,si.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nh(r))throw Error(t(200));return G_(n,r,null,l)},si.createRoot=function(n,r){if(!nh(n))throw Error(t(299));var l=!1,d="",m=j0;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=Jd(n,1,!1,null,null,l,!1,d,m),n[ar]=r.current,po(n.nodeType===8?n.parentNode:n),new th(r)},si.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ls(r),n=n===null?null:n.stateNode,n},si.flushSync=function(n){return _s(n)},si.hydrate=function(n,r,l){if(!tc(r))throw Error(t(200));return nc(null,n,r,!0,l)},si.hydrateRoot=function(n,r,l){if(!nh(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,m=!1,S="",C=j0;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(S=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),r=W0(r,null,n,1,l??null,m,!1,S,C),n[ar]=r.current,po(n),d)for(n=0;n<d.length;n++)l=d[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new ec(r)},si.render=function(n,r,l){if(!tc(r))throw Error(t(200));return nc(null,n,r,!1,l)},si.unmountComponentAtNode=function(n){if(!tc(n))throw Error(t(40));return n._reactRootContainer?(_s(function(){nc(null,null,n,!1,function(){n._reactRootContainer=null,n[ar]=null})}),!0):!1},si.unstable_batchedUpdates=Yd,si.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!tc(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return nc(n,r,l,!1,d)},si.version="18.3.1-next-f1338f8080-20240426",si}var tg;function J_(){if(tg)return sh.exports;tg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),sh.exports=Q_(),sh.exports}var ng;function ey(){if(ng)return rc;ng=1;var a=J_();return rc.createRoot=a.createRoot,rc.hydrateRoot=a.hydrateRoot,rc}var ty=ey();const ny=Tv(ty);var tt=Zf();const sc=Tv(tt),ig=a=>{let e;const t=new Set,i=(f,p)=>{const x=typeof f=="function"?f(e):f;if(!Object.is(x,e)){const g=e;e=p??(typeof x!="object"||x===null)?x:Object.assign({},e,x),t.forEach(_=>_(e,g))}},s=()=>e,u={setState:i,getState:s,getInitialState:()=>h,subscribe:f=>(t.add(f),()=>t.delete(f))},h=e=a(i,s,u);return u},iy=(a=>a?ig(a):ig),ry=a=>a;function sy(a,e=ry){const t=sc.useSyncExternalStore(a.subscribe,sc.useCallback(()=>e(a.getState()),[a,e]),sc.useCallback(()=>e(a.getInitialState()),[a,e]));return sc.useDebugValue(t),t}const ay=a=>{const e=iy(a),t=i=>sy(e,i);return Object.assign(t,e),t},wv=(a=>ay);class oy{constructor(){this.handlers=new Map,this.counters=new Map,this.totalEmitted=0,this.windowStart=performance.now(),this.windowCount=0,this.eventsPerSec=0}on(e,t){let i=this.handlers.get(e);return i||(i=new Set,this.handlers.set(e,i)),i.add(t),()=>this.off(e,t)}off(e,t){const i=this.handlers.get(e);i&&i.delete(t)}emit(e,t){this.counters.set(e,(this.counters.get(e)??0)+1),this.totalEmitted++,this.windowCount++;const i=performance.now();i-this.windowStart>=1e3&&(this.eventsPerSec=this.windowCount,this.windowCount=0,this.windowStart=i);const s=this.handlers.get(e);if(!s)return;const o=Array.from(s);for(const c of o)try{c(t)}catch(u){console.error(`[vortex-bus] handler error on ${String(e)}`,u)}}count(e){return this.counters.get(e)??0}}const bt=new oy,bv=[{id:"ag-strategist",name:"AURELIA",codename:"VANTAGE-1",role:"STRATEGIST",department:"COMMAND",color:"#d4af37",speed:.9,personality:{focus:.9,drive:.7,sociability:.8},workstation:0},{id:"ag-researcher",name:"ORION",codename:"SIFTER-2",role:"RESEARCHER",department:"KNOWLEDGE",color:"#00f0ff",speed:1.5,personality:{focus:.5,drive:.9,sociability:.6},workstation:1},{id:"ag-coder",name:"VEGA",codename:"FORGE-3",role:"CODER",department:"ENGINEERING",color:"#00ff66",speed:1.1,personality:{focus:1,drive:1,sociability:.25},workstation:2},{id:"ag-analyst",name:"LYRA",codename:"PRISM-4",role:"ANALYST",department:"INTELLIGENCE",color:"#7ad7ff",speed:1,personality:{focus:.85,drive:.8,sociability:.5},workstation:3},{id:"ag-security",name:"KERBEROS",codename:"WARDEN-5",role:"SECURITY",department:"DEFENSE",color:"#ff3333",speed:1.3,personality:{focus:.6,drive:.85,sociability:.35},workstation:4},{id:"ag-creative",name:"MUSE",codename:"LUMEN-6",role:"CREATIVE",department:"SYNTHESIS",color:"#ff7ad9",speed:1.05,personality:{focus:.55,drive:.75,sociability:.9},workstation:5},{id:"ag-automation",name:"ATLAS",codename:"CONDUIT-7",role:"AUTOMATION",department:"OPERATIONS",color:"#ffb700",speed:1.7,personality:{focus:.7,drive:1,sociability:.45},workstation:6},{id:"ag-executive",name:"HELIOS",codename:"SOVEREIGN-0",role:"EXECUTIVE",department:"COMMAND",color:"#e0e6ed",speed:.8,personality:{focus:.8,drive:.65,sociability:1},workstation:7}],jc={STRATEGIST:["Projecting Q3 objective lattice","Weighing resource allocation vectors","Scanning horizon for asymmetric risks","Composing doctrine revision 7C"],RESEARCHER:["Crawling 4,096 abstracts for signal","Cross-indexing citation topology","Distilling whitepaper corpus v12","Verifying source provenance chain"],CODER:["Refactoring plasma shader passes","Compiling agent kernel module 9","Patching race in event dispatcher","Optimizing particle SIMD lanes"],ANALYST:["Clustering telemetry manifolds","Fitting Bayesian latency model","Reducing 88-dim feature space","Scoring anomaly hypersurface"],SECURITY:["Sweeping perimeter mesh sectors","Rotating cipher handshakes","Auditing vault access ledger","Tracing packet origin spoofing"],CREATIVE:["Sculpting holographic asset set","Tuning chromatic identity matrix","Drafting narrative branch 3B","Arranging spatial UI constellation"],AUTOMATION:["Routing pipeline packet bursts","Balancing queue throughput lanes","Scheduling cron constellation","Welding CI/CD junction nodes"],EXECUTIVE:["Synthesizing swarm mission brief","Aligning stakeholder vectors","Ratifying priority stack v44","Broadcasting command intent"]},rg=["ECHO-9","NOVA-11","ZEPHYR-12","ONYX-13","PULSE-14","RAZOR-15","SIGMA-16","TALON-17"],sg=["NADIR","SOLACE","KITE","EMBER","QUILL","HALCYON","RIFT","CINDER"],ly=[{id:"m-root",title:"OPERATION HELIOS",status:"ACTIVE",x:480,y:300},{id:"m-intel",title:"INTEL SWEEP",status:"DONE",x:250,y:150},{id:"m-ingress",title:"DATA INGRESS",status:"DONE",x:240,y:300},{id:"m-tune",title:"MODEL TUNING",status:"ACTIVE",x:255,y:450},{id:"m-dispatch",title:"AGENT DISPATCH",status:"ACTIVE",x:700,y:140},{id:"m-signal",title:"SIGNAL ANALYSIS",status:"ACTIVE",x:720,y:300},{id:"m-counter",title:"COUNTERMEASURE DRAFT",status:"PENDING",x:700,y:460},{id:"m-qa",title:"QA GATE",status:"PENDING",x:940,y:220},{id:"m-comms",title:"COMMS UPLINK",status:"PENDING",x:945,y:380},{id:"m-risk",title:"RISK LEDGER",status:"BLOCKED",x:470,y:520},{id:"m-archive",title:"ARCHIVE & REPORT",status:"PENDING",x:1140,y:300},{id:"m-sync",title:"FINAL SYNC",status:"PENDING",x:1140,y:450}],cy=[{id:"me-1",from:"m-root",to:"m-intel"},{id:"me-2",from:"m-root",to:"m-ingress"},{id:"me-3",from:"m-root",to:"m-tune"},{id:"me-4",from:"m-root",to:"m-dispatch"},{id:"me-5",from:"m-root",to:"m-signal"},{id:"me-6",from:"m-root",to:"m-counter"},{id:"me-7",from:"m-intel",to:"m-dispatch"},{id:"me-8",from:"m-ingress",to:"m-signal"},{id:"me-9",from:"m-tune",to:"m-counter"},{id:"me-10",from:"m-dispatch",to:"m-qa"},{id:"me-11",from:"m-signal",to:"m-qa"},{id:"me-12",from:"m-signal",to:"m-comms"},{id:"me-13",from:"m-counter",to:"m-comms"},{id:"me-14",from:"m-qa",to:"m-archive"},{id:"me-15",from:"m-comms",to:"m-archive"},{id:"me-16",from:"m-archive",to:"m-sync"},{id:"me-17",from:"m-tune",to:"m-risk"}],uy=[{id:"f-projects",title:"projects/",type:"folder",body:"Active operation folders.",x:-180,y:-120,vx:0,vy:0,born:0},{id:"f-research",title:"research/",type:"folder",body:"Corpus, citations, distilled briefs.",x:180,y:-140,vx:0,vy:0,born:0},{id:"f-ops",title:"ops/",type:"folder",body:"Runbooks, pipelines, ledgers.",x:0,y:190,vx:0,vy:0,born:0},{id:"n-helios",title:"helios-brief.md",type:"note",body:`# Operation Helios

Directive: synchronize swarm telemetry with the central arc.

- [x] Uplink handshake
- [ ] Phase-lock plasma conduits
- [ ] Archive final report

> The arc answers only when the swarm breathes as one.`,x:-60,y:-40,vx:0,vy:0,born:0},{id:"n-swarm",title:"swarm-protocol.md",type:"note",body:`# Swarm Protocol v7

Agents negotiate tasks over the waypoint lattice. Steering uses arrival damping; separation radius 0.8u.`,x:90,y:20,vx:0,vy:0,born:0},{id:"n-lattice",title:"lattice-notes.md",type:"note",body:`# Waypoint Lattice

Ring corridor r=4.6 · 16 nodes. Spokes at 0/90/180/270. Center table triad.`,x:-160,y:70,vx:0,vy:0,born:0},{id:"n-obsidian",title:"obsidian-sync.md",type:"note",body:`# Obsidian Bridge

MCP/WebSocket bridge spec drafted. MockMemoryProvider replays fs events until live vault attaches.`,x:150,y:130,vx:0,vy:0,born:0},{id:"n-roster",title:"agent-roster.md",type:"note",body:`# Roster

8 autonomous units. Sovereign-0 holds command intent; Warden-5 patrols the perimeter mesh.`,x:-240,y:-20,vx:0,vy:0,born:0},{id:"t-ai",title:"#ai",type:"tag",body:"",x:40,y:-190,vx:0,vy:0,born:0},{id:"t-ops",title:"#ops",type:"tag",body:"",x:240,y:20,vx:0,vy:0,born:0}],dy=[{id:"fe-1",from:"n-helios",to:"f-projects",kind:"folder"},{id:"fe-2",from:"n-swarm",to:"f-projects",kind:"folder"},{id:"fe-3",from:"n-lattice",to:"f-research",kind:"folder"},{id:"fe-4",from:"n-obsidian",to:"f-ops",kind:"folder"},{id:"fe-5",from:"n-roster",to:"f-ops",kind:"folder"},{id:"fe-6",from:"n-helios",to:"n-swarm",kind:"link"},{id:"fe-7",from:"n-swarm",to:"n-lattice",kind:"link"},{id:"fe-8",from:"n-helios",to:"t-ai",kind:"tag"},{id:"fe-9",from:"n-roster",to:"t-ops",kind:"tag"},{id:"fe-10",from:"n-obsidian",to:"t-ops",kind:"tag"}],ag=[{title:"quantum-cache.md",body:`# Quantum Cache

Eviction policy tuned; hit ratio 94.2%. Cold shards migrated to vault tier 2.`,tags:["#ai"]},{title:"night-log-042.md",body:`# Night Log 042

Perimeter quiet. Two handshake retries from relay 9 — whitelisted after audit.`,tags:["#ops"]},{title:"glyph-taxonomy.md",body:`# Glyph Taxonomy

Holographic glyph set mapped to 64-state semaphore. Arc shutters mirror the taxonomy.`,tags:["#ai"]},{title:"plasma-thermals.md",body:`# Plasma Thermals

Conduit envelope stable at 312K. Turbulence index correlates with THINKING depth.`,tags:["#ai","#ops"]},{title:"director-shots.md",body:`# Director Shots

Cinematic grammar: swoop on spike, dolly on task start, slow push on success.`,tags:["#ops"]},{title:"backlink-atlas.md",body:`# Backlink Atlas

Graph density 0.31. Orphan rate below 2% after last reorganization sweep.`,tags:["#ai"]},{title:"cipher-rotation.md",body:`# Cipher Rotation

Handshake keys rotated every 900s. Zero drift detected across 4,000 exchanges.`,tags:["#ops"]},{title:"muse-assets.md",body:`# Asset Constellation

LUMEN-6 sculpted 12 holographic primitives for the briefing table projection.`,tags:["#ai"]},{title:"throughput-lanes.md",body:`# Throughput Lanes

CONDUIT-7 balanced 8 lanes; packet jitter under 3ms at peak burst.`,tags:["#ops"]},{title:"horizon-risks.md",body:`# Horizon Risks

Three asymmetric vectors flagged; two hedged, one parked in the risk ledger.`,tags:["#ai","#ops"]}],hy=[{t:0,pos:[0,3.4,10.8],look:[0,2.4,0],fov:50},{t:5,pos:[5.2,2.3,6.4],look:[0,2.7,0],fov:44},{t:9,pos:[.5,9.5,8.5],look:[0,.4,0],fov:52},{t:12,pos:[5.4,2.5,5.2],look:[1.6,1.5,.4],fov:42},{t:15,pos:[0,2,5],look:[0,1.35,0],fov:40},{t:19,pos:[-6.5,3.8,9.5],look:[0,1.7,0],fov:55},{t:23,pos:[0,6.2,10.4],look:[0,1.4,0],fov:50},{t:27,pos:[-4.4,2.6,7.2],look:[0,2.1,0],fov:46},{t:30,pos:[0,3.4,10.8],look:[0,2.4,0],fov:50}],Jh=[{t:.2,kind:"log",value:"CINEMATIC SEQUENCE Ω ENGAGED — DIRECTOR AI ONLINE"},{t:.8,kind:"tab",value:"core"},{t:1.2,kind:"state",value:"LISTENING"},{t:2.6,kind:"state",value:"THINKING"},{t:4.6,kind:"state",value:"TOOL_USE"},{t:5,kind:"burst",value:"140"},{t:7.6,kind:"spike",value:"0.8"},{t:8.6,kind:"tab",value:"agents"},{t:9.4,kind:"log",value:"SWARM FLOOR — 8 AUTONOMOUS UNITS ON STATION"},{t:10.6,kind:"brief",value:"all"},{t:14.4,kind:"tab",value:"intel"},{t:14.8,kind:"speak",value:"Behold the intelligence lattice — my human face."},{t:18.4,kind:"tab",value:"network"},{t:18.8,kind:"burst",value:"220"},{t:19.6,kind:"log",value:"10-LAYER CORTEX — TOKEN PROPAGATION LIVE"},{t:22.4,kind:"tab",value:"missions"},{t:22.9,kind:"pulse",value:"wave"},{t:25.4,kind:"tab",value:"memory"},{t:25.9,kind:"memory",value:"provider-burst"},{t:27.8,kind:"state",value:"SUCCESS"},{t:28.4,kind:"log",value:"SEQUENCE COMPLETE — ALL SYSTEMS NOMINAL"},{t:29.4,kind:"state",value:"IDLE"}],fy=["INPUT","TOKENIZATION","EMBEDDING","CONTEXT","ATTENTION","REASONING","MEMORY","TOOL ROUTING","ORCHESTRATION","OUTPUT"],pr=[5,9,13,11,15,12,10,8,6,4],py=[{name:"helios-brief.md",size:"4.2 KB",mod:"00:02:11"},{name:"swarm-protocol.md",size:"7.8 KB",mod:"00:04:47"},{name:"plasma-thermals.md",size:"2.1 KB",mod:"00:07:03"},{name:"director-shots.md",size:"3.5 KB",mod:"00:09:58"},{name:"cipher-rotation.md",size:"1.4 KB",mod:"00:12:26"},{name:"backlink-atlas.md",size:"5.9 KB",mod:"00:15:40"},{name:"glyph-taxonomy.md",size:"2.7 KB",mod:"00:18:12"},{name:"horizon-risks.md",size:"3.1 KB",mod:"00:21:55"}],og=["Directive acknowledged. Orchestration vector locked — delegating to the swarm.","Analysis complete. Confidence 97.3%. Routing synthesis to your holographic deck.","Task decomposed into 12 sub-vectors. Agents FORGE-3 and PRISM-4 assigned.","Cross-referenced 4,096 vault entries. Signal isolated and crystallized.","Perimeter verified clean. Executing with full plasma authorization.","Projection lattice updated. Outcome branch 3B is now the primary timeline."],fa=[{text:"[0.002s] VORTEX kernel 2.0.7 — cold start initiated",cls:""},{text:"[0.041s] mounting obsidian substrate ............ OK",cls:"ok"},{text:"[0.118s] plasma conduit mesh .................... 312K NOMINAL",cls:"ok"},{text:"[0.233s] GPU compute lanes ...................... 12/12 BOUND",cls:"ok"},{text:"[0.347s] particle populations ................... 131,072 STAGED",cls:"ok"},{text:"[0.452s] waypoint lattice ....................... 31 NODES LINKED",cls:"ok"},{text:"[0.566s] swarm handshake — 8 autonomous units ... ONLINE",cls:"gold"},{text:"[0.684s] neural cortex — 10 layers .............. SYNAPSED",cls:"ok"},{text:"[0.799s] memory vault bridge .................... MOCK → MCP READY",cls:"ok"},{text:"[0.871s] procedural audio engine ................ ARMED",cls:"ok"},{text:"[0.943s] cinematic director AI .................. AWAKE",cls:"gold"},{text:"[1.000s] VORTEX_HUD Ω — ALL SYSTEMS NOMINAL",cls:"gold"}],Av="vortex.agents.v2";function lg(){try{const a=localStorage.getItem(Av);if(a){const e=JSON.parse(a);if(Array.isArray(e)&&e.length>0)return e}}catch{}return bv.map(a=>({...a,personality:{...a.personality}}))}function my(a){try{localStorage.setItem(Av,JSON.stringify(a))}catch{}}function gy(a){return a.map(e=>({...e,personality:{...e.personality},status:"WORKING",task:"Calibrating workstation",progress:Math.floor(Math.random()*60),load:40+Math.floor(Math.random()*40),mood:"NOMINAL"}))}let vy=0;const Me=wv()((a,e)=>({booted:!1,tab:"core",coreState:"IDLE",cameraMode:"ORBIT",selectedAgentId:null,agentDefs:lg(),agents:gy(lg()),audioOn:!1,holoOpen:!1,holoWindows:[],holoZ:10,labOpen:!1,debugOpen:!1,stats:{fps:60,frameMs:16.7,drawCalls:0,triangles:0,points:0,resScale:1},telemetry:{t:0,power:62,temp:312,packets:120,latency:21,throughput:1.2},log:[],tlPlaying:!1,tlTime:0,tlSpeed:1,tlLoop:!0,engineFailed:!1,cameraLocked:!1,setBooted:t=>a({booted:t}),toggleCameraLock:()=>a(t=>({cameraLocked:!t.cameraLocked})),setTab:t=>{e().tab!==t&&a({tab:t})},setCoreState:t=>{const i=e().coreState;i!==t&&(a({coreState:t}),bt.emit("CORE_STATE_CHANGED",{prev:i,next:t}))},setCameraMode:t=>{a({cameraMode:t}),bt.emit("CAMERA_SHOT",{mode:t})},selectAgent:t=>a({selectedAgentId:t}),updateAgentRuntime:(t,i)=>a(s=>({agents:s.agents.map(o=>o.id===t?{...o,...i}:o)})),setRosterRuntime:t=>a({agents:t}),setAgentDefs:t=>{my(t),a(i=>({agentDefs:t,agents:t.map(s=>{const o=i.agents.find(c=>c.id===s.id);return{...s,personality:{...s.personality},status:(o==null?void 0:o.status)??"STANDBY",task:(o==null?void 0:o.task)??"Awaiting directive",progress:(o==null?void 0:o.progress)??0,load:(o==null?void 0:o.load)??30,mood:(o==null?void 0:o.mood)??"NOMINAL"}})}))},toggleAudio:()=>a(t=>({audioOn:!t.audioOn})),setHoloOpen:t=>a({holoOpen:t}),openHolo:t=>{const i=e(),s=i.holoWindows.find(_=>_.kind===t),o=i.holoZ+1;if(s){a({holoOpen:!0,holoZ:o,holoWindows:i.holoWindows.map(_=>_.id===s.id?{..._,z:o,minimized:!1}:_)});return}const c={terminal:[24,60],telemetry:[380,90],files:[90,300]},u={terminal:[330,220],telemetry:[300,240],files:[310,230]},[h,f]=c[t],[p,x]=u[t],g={id:`holo-${t}`,kind:t,x:h,y:f,w:p,h:x,z:o,minimized:!1,rot:0};a({holoOpen:!0,holoZ:o,holoWindows:[...i.holoWindows,g]})},closeHolo:t=>a(i=>({holoWindows:i.holoWindows.filter(s=>s.id!==t)})),minimizeHolo:t=>a(i=>({holoWindows:i.holoWindows.map(s=>s.id===t?{...s,minimized:!s.minimized}:s)})),focusHolo:t=>a(i=>{const s=i.holoZ+1;return{holoZ:s,holoWindows:i.holoWindows.map(o=>o.id===t?{...o,z:s}:o)}}),moveHolo:(t,i,s)=>a(o=>({holoWindows:o.holoWindows.map(c=>c.id===t?{...c,x:i,y:s}:c)})),resizeHolo:(t,i,s)=>a(o=>({holoWindows:o.holoWindows.map(c=>c.id===t?{...c,w:i,h:s}:c)})),rotateHolo:(t,i)=>a(s=>({holoWindows:s.holoWindows.map(o=>o.id===t?{...o,rot:i}:o)})),setLabOpen:t=>a({labOpen:t}),setDebugOpen:t=>a({debugOpen:t}),setStats:t=>a({stats:t}),setTelemetry:t=>a({telemetry:t}),pushLog:(t,i,s)=>a(o=>{const c=new Date,u=`${String(c.getUTCHours()).padStart(2,"0")}:${String(c.getUTCMinutes()).padStart(2,"0")}:${String(c.getUTCSeconds()).padStart(2,"0")}`,h={id:++vy,time:u,level:t,tag:i,msg:s},f=[...o.log,h];return f.length>64&&f.splice(0,f.length-64),{log:f}}),clearLog:()=>a({log:[]}),setTimeline:t=>a(i=>({tlPlaying:t.playing??i.tlPlaying,tlTime:t.t??i.tlTime,tlSpeed:t.speed??i.tlSpeed,tlLoop:t.loop??i.tlLoop})),setEngineFailed:t=>a({engineFailed:t})}));class xy{constructor(){this.ctx=null,this.master=null,this.droneGain=null,this.analyser=null,this.freqData=null,this.failed=!1,this.muted=!1,this.talkEnv=0,this.pulseEnv=0,this.t0=performance.now()}get supported(){return!this.failed}ensure(){if(this.ctx||this.failed)return!!this.ctx;try{const e=window.AudioContext??window.webkitAudioContext;if(!e)throw new Error("no-audio-context");const t=new e;this.ctx=t;const i=t.createGain();i.gain.value=this.muted?0:.8;const s=t.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=6,i.connect(s),s.connect(t.destination),this.master=i;const o=t.createAnalyser();o.fftSize=512,o.smoothingTimeConstant=.82,i.connect(o),this.analyser=o,this.freqData=new Uint8Array(o.frequencyBinCount);const c=t.createGain();c.gain.value=.16;const u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=240,u.Q.value=.8,c.connect(u),u.connect(i),this.droneGain=c;const h=[[30,.55,"sine"],[57.5,.22,"sine"],[90.2,.1,"triangle"]];for(const[v,y,P]of h){const L=t.createOscillator();L.type=P,L.frequency.value=v;const A=t.createGain();A.gain.value=y,L.connect(A),A.connect(c),L.start()}const f=t.createOscillator();f.frequency.value=.07;const p=t.createGain();p.gain.value=.05,f.connect(p),p.connect(c.gain),f.start();const x=t.createBuffer(1,t.sampleRate*2,t.sampleRate),g=x.getChannelData(0);for(let v=0;v<g.length;v++)g[v]=Math.random()*2-1;const _=t.createBufferSource();_.buffer=x,_.loop=!0;const M=t.createBiquadFilter();M.type="bandpass",M.frequency.value=2600,M.Q.value=9;const b=t.createGain();return b.gain.value=.012,_.connect(M),M.connect(b),b.connect(i),_.start(),!0}catch(e){return console.warn("[vortex-audio] Web Audio unavailable — mock envelopes engaged.",e),this.failed=!0,this.ctx=null,!1}}resume(){this.ensure()&&this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(e){if(this.muted=e,this.ctx&&this.master){const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.linearRampToValueAtTime(e?0:.8,t+.25)}}setDroneIntensity(e){if(this.ctx&&this.droneGain){const t=this.ctx.currentTime;this.droneGain.gain.linearRampToValueAtTime(.1+e*.16,t+.4)}}chime(e=1318){if(!this.ensure()||!this.ctx||!this.master||this.muted)return;const t=this.ctx,i=t.currentTime,s=t.createOscillator();s.type="triangle",s.frequency.setValueAtTime(e,i),s.frequency.exponentialRampToValueAtTime(e*1.5,i+.09);const o=t.createGain();o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(.09,i+.012),o.gain.exponentialRampToValueAtTime(1e-4,i+.22);const c=t.createStereoPanner();c.pan.value=Math.random()*.8-.4,s.connect(o),o.connect(c),c.connect(this.master),s.start(i),s.stop(i+.26),this.ping(.35)}zap(){if(!this.ensure()||!this.ctx||!this.master||this.muted)return;const e=this.ctx,t=e.currentTime,i=e.createOscillator();i.type="square",i.frequency.setValueAtTime(1900,t),i.frequency.exponentialRampToValueAtTime(220,t+.11);const s=e.createGain();s.gain.setValueAtTime(.05,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.13),i.connect(s),s.connect(this.master),i.start(t),i.stop(t+.15),this.ping(.5)}thump(){if(!this.ensure()||!this.ctx||!this.master||this.muted)return;const e=this.ctx,t=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(82,t),i.frequency.exponentialRampToValueAtTime(38,t+.3);const s=e.createGain();s.gain.setValueAtTime(.24,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.36),i.connect(s),s.connect(this.master),i.start(t),i.stop(t+.4),this.ping(1)}alarm(){if(!this.ensure()||!this.ctx||!this.master||this.muted)return;const e=this.ctx,t=e.currentTime;[233,174].forEach((i,s)=>{const o=e.createOscillator();o.type="sawtooth",o.frequency.value=i;const c=e.createGain(),u=t+s*.16;c.gain.setValueAtTime(1e-4,u),c.gain.exponentialRampToValueAtTime(.07,u+.02),c.gain.exponentialRampToValueAtTime(1e-4,u+.16),o.connect(c),c.connect(this.master),o.start(u),o.stop(u+.2)}),this.ping(.8)}speak(e){if(this.talkEnv=1,!this.ensure()||!this.ctx||!this.master||this.muted)return;const t=this.ctx,i=t.currentTime,s=Math.max(3,Math.floor(e/.13));for(let o=0;o<s;o++){const c=i+o*.13+Math.random()*.03,u=t.createOscillator();u.type="square";const h=130+Math.random()*110;u.frequency.setValueAtTime(h,c),u.frequency.linearRampToValueAtTime(h*.7,c+.09);const f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=900+Math.random()*1400,f.Q.value=4;const p=t.createGain();p.gain.setValueAtTime(1e-4,c),p.gain.exponentialRampToValueAtTime(.055,c+.02),p.gain.exponentialRampToValueAtTime(1e-4,c+.11),u.connect(f),f.connect(p),p.connect(this.master),u.start(c),u.stop(c+.13)}}ping(e){this.pulseEnv=Math.max(this.pulseEnv,e)}getLevels(){const t=(performance.now()-this.t0)/1e3;if(this.talkEnv=Math.max(0,this.talkEnv-.045),this.pulseEnv=Math.max(0,this.pulseEnv-.06),this.analyser&&this.freqData){this.analyser.getByteFrequencyData(this.freqData);const c=(x,g)=>{let _=0;const M=Math.min(g,this.freqData?this.freqData.length:g);for(let b=x;b<M;b++)_+=this.freqData[b];return _/Math.max(1,M-x)/255},u=c(1,7)*1.6,h=c(8,48),f=c(49,160)*1.8;return{level:Math.min(1,u*.5+h*.4+f*.3),bass:Math.min(1,u),mid:h,high:f,talk:this.talkEnv}}const i=.22+.1*Math.sin(t*.9)+this.pulseEnv*.3,s=.14+.08*Math.sin(t*1.7+1)+this.pulseEnv*.2,o=.08+.05*Math.sin(t*2.9+2)+this.pulseEnv*.25;return{level:Math.min(1,i+s),bass:Math.min(1,i),mid:Math.min(1,s),high:Math.min(1,o),talk:this.talkEnv}}}const mn=new xy;class _y{constructor(){this.mode="MOUSE-VISION-STREAM",this.cb=null,this.last=null,this.onMove=e=>{if(!this.cb)return;const t=performance.now(),i=e.clientX/Math.max(1,window.innerWidth),s=e.clientY/Math.max(1,window.innerHeight);let o=0,c=0;if(this.last){const u=Math.max(1,t-this.last.t);o=(e.clientX-this.last.x)/u,c=(e.clientY-this.last.y)/u}this.last={x:e.clientX,y:e.clientY,t},this.cb({x:i,y:s,vx:o,vy:c,buttons:e.buttons,t})}}start(e){this.cb=e,window.addEventListener("pointermove",this.onMove)}stop(){this.cb=null,window.removeEventListener("pointermove",this.onMove)}}class yy{constructor(){this.mode="MOCK-HAND-RIG",this.cb=null,this.pinch=0,this.shift=!1,this.x=.5,this.y=.5,this.present=!1,this.lastSeen=0,this.onMove=e=>{this.x=e.clientX/Math.max(1,window.innerWidth),this.y=e.clientY/Math.max(1,window.innerHeight),this.present=!0,this.lastSeen=performance.now(),e.buttons>0&&(this.pinch=Math.min(1,this.pinch+.12))},this.onKey=e=>{this.shift=e.shiftKey},this.onUp=()=>{this.pinch=0},this.tick=()=>{if(!this.cb)return;this.shift?this.pinch=Math.min(1,this.pinch+.08):this.pinch=Math.max(0,this.pinch-.05);const e=performance.now()-this.lastSeen>4e3;this.cb({x:this.x,y:this.y,pinch:this.pinch,present:this.present&&!e,t:performance.now()}),setTimeout(this.tick,66)}}start(e){this.cb=e,window.addEventListener("pointermove",this.onMove),window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKey),window.addEventListener("pointerup",this.onUp),this.tick()}stop(){this.cb=null,window.removeEventListener("pointermove",this.onMove),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),window.removeEventListener("pointerup",this.onUp)}}class Sy{constructor(e,t){this.lastGesture=null,this.lastConfidence=0,this.lastAt=0,this.swipeWatch=null,this.running=!1,this.vision=e??new _y,this.hand=t??new yy}start(){this.running||(this.running=!0,this.vision.start(e=>{const t=Math.hypot(e.vx,e.vy);t>2.2&&e.buttons===0&&performance.now()-this.lastAt>900&&this.recognize("SWIPE",Math.min(1,t/4)),this.swipeWatch&&this.swipeWatch(e)}),this.hand.start(e=>{e.pinch>.92&&performance.now()-this.lastAt>1200&&this.recognize("PINCH",e.pinch)}))}stop(){this.running&&(this.running=!1,this.vision.stop(),this.hand.stop(),this.swipeWatch=null)}onVisionFrame(e){this.swipeWatch=e}recognize(e,t=1){this.lastGesture=e,this.lastConfidence=t,this.lastAt=performance.now(),bt.emit("GESTURE_DETECTED",{gesture:e})}}let lh=null;function mu(){return lh||(lh=new Sy),lh}function My(){const a=mu();return a.start(),a}function Ey(){const a=Me(g=>g.coreState),e=Me(g=>g.cameraMode),t=Me(g=>g.stats.fps),i=Me(g=>g.audioOn),s=Me(g=>g.debugOpen),o=Me(g=>g.setDebugOpen),c=Me(g=>g.toggleAudio),u=Me(g=>g.pushLog),[h,f]=tt.useState(()=>new Date);tt.useEffect(()=>{const g=setInterval(()=>f(new Date),1e3);return()=>clearInterval(g)},[]);const p=g=>String(g).padStart(2,"0"),x=()=>{mn.ensure(),mn.resume();const g=!i;mn.setMuted(!g),c(),g&&mn.chime(1560),u("sys","AUDIO",g?"procedural synth engine online — 30 Hz drone engaged":"audio reactor muted")};return E.jsxs("header",{className:"topbar",children:[E.jsxs("div",{className:"brand",children:[E.jsxs("span",{className:"brand-name",children:["VORTEX",E.jsx("em",{children:"_"}),"HUD"]}),E.jsx("span",{className:"omega",children:"Ω"}),E.jsx("span",{className:"brand-ver",children:"v2.0.7 // SENTIENT-GRADE"})]}),E.jsxs("div",{className:"state-badge","data-state":a,children:[E.jsx("span",{className:"pip"}),a]}),E.jsxs("span",{className:"chip",children:["CAM ",E.jsx("b",{children:e})]}),E.jsxs("span",{className:"chip gold",children:["UPLINK ",E.jsx("b",{children:"SECURE·AES-Ω"})]}),E.jsx("div",{className:"top-spacer"}),E.jsxs("span",{className:"chip",children:["UTC ",E.jsxs("b",{children:[p(h.getUTCHours()),":",p(h.getUTCMinutes()),":",p(h.getUTCSeconds())]})]}),E.jsxs("span",{className:"chip",children:["FPS ",E.jsx("b",{children:t.toFixed(0)})]}),E.jsx("button",{className:`icon-btn ${i?"on":""}`,title:"toggle procedural audio engine",onClick:x,"aria-label":"toggle audio",children:E.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[E.jsx("path",{d:"M4 9v6h4l5 4V5L8 9H4z",fill:"currentColor",stroke:"none"}),i?E.jsx("path",{d:"M16 8c1.5 1 2.5 2.4 2.5 4S17.5 15 16 16M18.5 5.5C21 7 22.5 9.4 22.5 12s-1.5 5-4 6.5"}):E.jsx("path",{d:"M16 9l5 6M21 9l-5 6"})]})}),E.jsx("button",{className:`icon-btn ${s?"on":""}`,title:"self-healing debug console [`]",onClick:()=>o(!s),"aria-label":"toggle debug console",children:E.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:E.jsx("path",{d:"M4 17l6-6-6-6M12 19h8"})})})]})}const Ua={tint:"#00f0ff",speed:1,bloomStrength:.62,bloomThreshold:.55,bloomRadius:.42,exposure:1,emissive:1,dustDensity:.85,dustScale:1,streamDensity:1,streamScale:1,coreGeometry:"ARC",coreIntensity:1,networkDensity:1,hqLighting:1,agentDrive:1,audioSensitivity:1,cameraLimit:22,dof:!0,atmosphere:.5,uiScale:1,holoOpacity:.96,scanlines:!0},Ty=[{name:"CINEMATIC",builtin:!0,patch:{bloomStrength:.8,bloomThreshold:.48,bloomRadius:.6,exposure:1.04,emissive:1.1,speed:.85,atmosphere:.7,dof:!0,streamDensity:1,dustDensity:.95}},{name:"TACTICAL",builtin:!0,patch:{bloomStrength:.3,bloomThreshold:.72,bloomRadius:.25,exposure:.94,emissive:.85,speed:1.1,atmosphere:.2,dof:!1,scanlines:!0}},{name:"DEEP_SPACE",builtin:!0,patch:{tint:"#4db8ff",bloomStrength:.55,bloomThreshold:.6,exposure:.86,atmosphere:.95,dustDensity:1,streamDensity:.7,emissive:.9,speed:.7}},{name:"GOD_MODE",builtin:!0,patch:{bloomStrength:.95,bloomThreshold:.42,bloomRadius:.55,exposure:1.1,emissive:1.35,dustDensity:1,dustScale:1.25,streamDensity:1,streamScale:1.3,networkDensity:2.4,speed:1.6,coreIntensity:1.5,audioSensitivity:1.6}},{name:"PERFORMANCE",builtin:!0,patch:{bloomStrength:.35,bloomThreshold:.7,bloomRadius:.2,exposure:.96,dustDensity:.35,dustScale:.8,streamDensity:.5,streamScale:.8,networkDensity:.5,dof:!1,atmosphere:.25,speed:1}}],wy=["#00f0ff","#4db8ff","#ffb700","#d4af37","#00ff66","#ff3333","#ff7ad9","#9d7bff","#e0e6ed"],Cv="vortex.settings.v3",Rv="vortex.userpresets.v1";function by(){try{const a=localStorage.getItem(Cv);if(a){const e=JSON.parse(a);return{...Ua,...e}}}catch{}return{...Ua}}function ac(a){try{localStorage.setItem(Cv,JSON.stringify(a))}catch{}}function Ay(){try{const a=localStorage.getItem(Rv);if(a)return JSON.parse(a)}catch{}return[]}function cg(a){try{localStorage.setItem(Rv,JSON.stringify(a))}catch{}}const Ji=wv()((a,e)=>({...by(),labOpen:!1,labX:-1,labY:-1,userPresets:Ay(),set:t=>{const i={...e(),...t};ac(i),a(t)},applyPreset:t=>{const i={...e(),...t.patch};ac(i),a(t.patch)},reset:()=>{ac(Ua),a({...Ua})},toggleLab:()=>a(t=>({labOpen:!t.labOpen})),moveLab:(t,i)=>a({labX:t,labY:i}),saveUserPreset:t=>{const i={...e(),labOpen:!1,labX:-1,labY:-1},s=[...e().userPresets.filter(o=>o.name!==t),{name:t,settings:i}];cg(s),a({userPresets:s})},loadUserPreset:t=>{const i=e().userPresets.find(o=>o.name===t);if(!i)return;const s={...Ua,...i.settings};ac(s),a(s)},deleteUserPreset:t=>{const i=e().userPresets.filter(s=>s.name!==t);cg(i),a({userPresets:i})}}));/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qf="185",Cy=0,ug=1,Ry=2,Yc=1,Py=2,jo=3,is=0,Kn=1,xi=2,Xi=0,Oa=1,zt=2,dg=3,hg=4,Ny=5,Ns=100,Iy=101,Ly=102,Dy=103,Uy=104,Oy=200,Fy=201,ky=202,By=203,ef=204,tf=205,zy=206,Gy=207,Vy=208,Hy=209,Wy=210,Xy=211,jy=212,Yy=213,qy=214,nf=0,rf=1,sf=2,za=3,af=4,of=5,lf=6,cf=7,Jf=0,$y=1,Ky=2,ir=0,ep=1,tp=2,np=3,gu=4,ip=5,rp=6,sp=7,Pv=300,Os=301,Ga=302,ch=303,uh=304,vu=306,uf=1e3,Er=1001,df=1002,En=1003,Zy=1004,oc=1005,Gn=1006,dh=1007,Ls=1008,_i=1009,Nv=1010,Iv=1011,Zo=1012,ap=1013,rr=1014,Hi=1015,Zn=1016,op=1017,lp=1018,Qo=1020,Lv=35902,Dv=35899,Uv=1021,Ov=1022,Wi=1023,wr=1026,Ds=1027,cp=1028,up=1029,Fs=1030,dp=1031,hp=1033,qc=33776,$c=33777,Kc=33778,Zc=33779,hf=35840,ff=35841,pf=35842,mf=35843,gf=36196,vf=37492,xf=37496,_f=37488,yf=37489,iu=37490,Sf=37491,Mf=37808,Ef=37809,Tf=37810,wf=37811,bf=37812,Af=37813,Cf=37814,Rf=37815,Pf=37816,Nf=37817,If=37818,Lf=37819,Df=37820,Uf=37821,Of=36492,Ff=36494,kf=36495,Bf=36283,zf=36284,ru=36285,Gf=36286,Qy=3200,Jy=3201,su=0,eS=1,Jr="",li="srgb",au="srgb-linear",ou="linear",Bt="srgb",pa=7680,fg=519,tS=512,nS=513,iS=514,fp=515,rS=516,sS=517,pp=518,aS=519,Vf=35044,Us=35048,pg="300 es",nr=2e3,Jo=2001;function oS(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function lu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function lS(){const a=lu("canvas");return a.style.display="block",a}const mg={};function cu(...a){const e="THREE."+a.shift();console.log(e,...a)}function Fv(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ct(...a){a=Fv(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Nt(...a){a=Fv(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function Fa(...a){const e=a.join(" ");e in mg||(mg[e]=!0,ct(...a))}function cS(a,e,t){return new Promise(function(i,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const uS={[nf]:rf,[sf]:lf,[af]:cf,[za]:of,[rf]:nf,[lf]:sf,[cf]:af,[of]:za};class ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=Math.PI/180,Hf=180/Math.PI;function ns(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bn[a&255]+Bn[a>>8&255]+Bn[a>>16&255]+Bn[a>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]).toLowerCase()}function At(a,e,t){return Math.max(e,Math.min(t,a))}function dS(a,e){return(a%e+e)%e}function fh(a,e,t){return(1-t)*a+t*e}function tr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const bp=class bp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*s+e.x,this.y=o*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bp.prototype.isVector2=!0;let Je=bp;class Bs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,c,u){let h=i[s+0],f=i[s+1],p=i[s+2],x=i[s+3],g=o[c+0],_=o[c+1],M=o[c+2],b=o[c+3];if(x!==b||h!==g||f!==_||p!==M){let v=h*g+f*_+p*M+x*b;v<0&&(g=-g,_=-_,M=-M,b=-b,v=-v);let y=1-u;if(v<.9995){const P=Math.acos(v),L=Math.sin(P);y=Math.sin(y*P)/L,u=Math.sin(u*P)/L,h=h*y+g*u,f=f*y+_*u,p=p*y+M*u,x=x*y+b*u}else{h=h*y+g*u,f=f*y+_*u,p=p*y+M*u,x=x*y+b*u;const P=1/Math.sqrt(h*h+f*f+p*p+x*x);h*=P,f*=P,p*=P,x*=P}}e[t]=h,e[t+1]=f,e[t+2]=p,e[t+3]=x}static multiplyQuaternionsFlat(e,t,i,s,o,c){const u=i[s],h=i[s+1],f=i[s+2],p=i[s+3],x=o[c],g=o[c+1],_=o[c+2],M=o[c+3];return e[t]=u*M+p*x+h*_-f*g,e[t+1]=h*M+p*g+f*x-u*_,e[t+2]=f*M+p*_+u*g-h*x,e[t+3]=p*M-u*x-h*g-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,c=e._order,u=Math.cos,h=Math.sin,f=u(i/2),p=u(s/2),x=u(o/2),g=h(i/2),_=h(s/2),M=h(o/2);switch(c){case"XYZ":this._x=g*p*x+f*_*M,this._y=f*_*x-g*p*M,this._z=f*p*M+g*_*x,this._w=f*p*x-g*_*M;break;case"YXZ":this._x=g*p*x+f*_*M,this._y=f*_*x-g*p*M,this._z=f*p*M-g*_*x,this._w=f*p*x+g*_*M;break;case"ZXY":this._x=g*p*x-f*_*M,this._y=f*_*x+g*p*M,this._z=f*p*M+g*_*x,this._w=f*p*x-g*_*M;break;case"ZYX":this._x=g*p*x-f*_*M,this._y=f*_*x+g*p*M,this._z=f*p*M-g*_*x,this._w=f*p*x+g*_*M;break;case"YZX":this._x=g*p*x+f*_*M,this._y=f*_*x+g*p*M,this._z=f*p*M-g*_*x,this._w=f*p*x-g*_*M;break;case"XZY":this._x=g*p*x-f*_*M,this._y=f*_*x-g*p*M,this._z=f*p*M+g*_*x,this._w=f*p*x+g*_*M;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],c=t[1],u=t[5],h=t[9],f=t[2],p=t[6],x=t[10],g=i+u+x;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(p-h)*_,this._y=(o-f)*_,this._z=(c-s)*_}else if(i>u&&i>x){const _=2*Math.sqrt(1+i-u-x);this._w=(p-h)/_,this._x=.25*_,this._y=(s+c)/_,this._z=(o+f)/_}else if(u>x){const _=2*Math.sqrt(1+u-i-x);this._w=(o-f)/_,this._x=(s+c)/_,this._y=.25*_,this._z=(h+p)/_}else{const _=2*Math.sqrt(1+x-i-u);this._w=(c-s)/_,this._x=(o+f)/_,this._y=(h+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,c=e._w,u=t._x,h=t._y,f=t._z,p=t._w;return this._x=i*p+c*u+s*f-o*h,this._y=s*p+c*h+o*u-i*f,this._z=o*p+c*f+i*h-s*u,this._w=c*p-i*u-s*h-o*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,s=-s,o=-o,c=-c,u=-u);let h=1-t;if(u<.9995){const f=Math.acos(u),p=Math.sin(f);h=Math.sin(h*f)/p,t=Math.sin(t*f)/p,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ap=class Ap{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,c=e.y,u=e.z,h=e.w,f=2*(c*s-u*i),p=2*(u*t-o*s),x=2*(o*i-c*t);return this.x=t+h*f+c*x-u*p,this.y=i+h*p+u*f-o*x,this.z=s+h*x+o*p-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,c=t.x,u=t.y,h=t.z;return this.x=s*h-o*u,this.y=o*c-i*h,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ap.prototype.isVector3=!0;let V=Ap;const ph=new V,gg=new Bs,Cp=class Cp{constructor(e,t,i,s,o,c,u,h,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,f)}set(e,t,i,s,o,c,u,h,f){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=o,p[5]=h,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[3],h=i[6],f=i[1],p=i[4],x=i[7],g=i[2],_=i[5],M=i[8],b=s[0],v=s[3],y=s[6],P=s[1],L=s[4],A=s[7],D=s[2],I=s[5],O=s[8];return o[0]=c*b+u*P+h*D,o[3]=c*v+u*L+h*I,o[6]=c*y+u*A+h*O,o[1]=f*b+p*P+x*D,o[4]=f*v+p*L+x*I,o[7]=f*y+p*A+x*O,o[2]=g*b+_*P+M*D,o[5]=g*v+_*L+M*I,o[8]=g*y+_*A+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8];return t*c*p-t*u*f-i*o*p+i*u*h+s*o*f-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],x=p*c-u*f,g=u*h-p*o,_=f*o-c*h,M=t*x+i*g+s*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=x*b,e[1]=(s*f-p*i)*b,e[2]=(u*i-s*c)*b,e[3]=g*b,e[4]=(p*t-s*h)*b,e[5]=(s*o-u*t)*b,e[6]=_*b,e[7]=(i*h-f*t)*b,e[8]=(c*t-i*o)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,c,u){const h=Math.cos(o),f=Math.sin(o);return this.set(i*h,i*f,-i*(h*c+f*u)+c+e,-s*f,s*h,-s*(-f*c+h*u)+u+t,0,0,1),this}scale(e,t){return Fa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mh.makeScale(e,t)),this}rotate(e){return Fa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return Fa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Cp.prototype.isMatrix3=!0;let ft=Cp;const mh=new ft,vg=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xg=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hS(){const a={enabled:!0,workingColorSpace:au,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Bt&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Bt&&(s.r=ka(s.r),s.g=ka(s.g),s.b=ka(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jr?ou:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Fa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Fa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[au]:{primaries:e,whitePoint:i,transfer:ou,toXYZ:vg,fromXYZ:xg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:i,transfer:Bt,toXYZ:vg,fromXYZ:xg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),a}const Tt=hS();function Tr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ka(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ma;class fS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ma===void 0&&(ma=lu("canvas")),ma.width=e.width,ma.height=e.height;const s=ma.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ma}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=Tr(o[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tr(t[i]/255)*255):t[i]=Tr(t[i]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pS=0;class mp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?o.push(gh(s[c].image)):o.push(gh(s[c]))}else o=gh(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function gh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?fS.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let mS=0;const vh=new V;class Vn extends ks{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,i=Er,s=Er,o=Gn,c=Ls,u=Wi,h=_i,f=Vn.DEFAULT_ANISOTROPY,p=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=ns(),this.name="",this.source=new mp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uf:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uf:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Pv;Vn.DEFAULT_ANISOTROPY=1;const Rp=class Rp{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const h=e.elements,f=h[0],p=h[4],x=h[8],g=h[1],_=h[5],M=h[9],b=h[2],v=h[6],y=h[10];if(Math.abs(p-g)<.01&&Math.abs(x-b)<.01&&Math.abs(M-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(x+b)<.1&&Math.abs(M+v)<.1&&Math.abs(f+_+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(f+1)/2,A=(_+1)/2,D=(y+1)/2,I=(p+g)/4,O=(x+b)/4,w=(M+v)/4;return L>A&&L>D?L<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(L),s=I/i,o=O/i):A>D?A<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(A),i=I/s,o=w/s):D<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(D),i=O/o,s=w/o),this.set(i,s,o,t),this}let P=Math.sqrt((v-M)*(v-M)+(x-b)*(x-b)+(g-p)*(g-p));return Math.abs(P)<.001&&(P=1),this.x=(v-M)/P,this.y=(x-b)/P,this.z=(g-p)/P,this.w=Math.acos((f+_+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rp.prototype.isVector4=!0;let cn=Rp;class gS extends ks{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},o=new Vn(s),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new mp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends gS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kv extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vS extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pu=class pu{constructor(e,t,i,s,o,c,u,h,f,p,x,g,_,M,b,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,f,p,x,g,_,M,b,v)}set(e,t,i,s,o,c,u,h,f,p,x,g,_,M,b,v){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=s,y[1]=o,y[5]=c,y[9]=u,y[13]=h,y[2]=f,y[6]=p,y[10]=x,y[14]=g,y[3]=_,y[7]=M,y[11]=b,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pu().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ga.setFromMatrixColumn(e,0).length(),o=1/ga.setFromMatrixColumn(e,1).length(),c=1/ga.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),f=Math.sin(s),p=Math.cos(o),x=Math.sin(o);if(e.order==="XYZ"){const g=c*p,_=c*x,M=u*p,b=u*x;t[0]=h*p,t[4]=-h*x,t[8]=f,t[1]=_+M*f,t[5]=g-b*f,t[9]=-u*h,t[2]=b-g*f,t[6]=M+_*f,t[10]=c*h}else if(e.order==="YXZ"){const g=h*p,_=h*x,M=f*p,b=f*x;t[0]=g+b*u,t[4]=M*u-_,t[8]=c*f,t[1]=c*x,t[5]=c*p,t[9]=-u,t[2]=_*u-M,t[6]=b+g*u,t[10]=c*h}else if(e.order==="ZXY"){const g=h*p,_=h*x,M=f*p,b=f*x;t[0]=g-b*u,t[4]=-c*x,t[8]=M+_*u,t[1]=_+M*u,t[5]=c*p,t[9]=b-g*u,t[2]=-c*f,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const g=c*p,_=c*x,M=u*p,b=u*x;t[0]=h*p,t[4]=M*f-_,t[8]=g*f+b,t[1]=h*x,t[5]=b*f+g,t[9]=_*f-M,t[2]=-f,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,_=c*f,M=u*h,b=u*f;t[0]=h*p,t[4]=b-g*x,t[8]=M*x+_,t[1]=x,t[5]=c*p,t[9]=-u*p,t[2]=-f*p,t[6]=_*x+M,t[10]=g-b*x}else if(e.order==="XZY"){const g=c*h,_=c*f,M=u*h,b=u*f;t[0]=h*p,t[4]=-x,t[8]=f*p,t[1]=g*x+b,t[5]=c*p,t[9]=_*x-M,t[2]=M*x-_,t[6]=u*p,t[10]=b*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xS,e,_S)}lookAt(e,t,i){const s=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),Yr.crossVectors(i,fi),Yr.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),Yr.crossVectors(i,fi)),Yr.normalize(),lc.crossVectors(fi,Yr),s[0]=Yr.x,s[4]=lc.x,s[8]=fi.x,s[1]=Yr.y,s[5]=lc.y,s[9]=fi.y,s[2]=Yr.z,s[6]=lc.z,s[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[4],h=i[8],f=i[12],p=i[1],x=i[5],g=i[9],_=i[13],M=i[2],b=i[6],v=i[10],y=i[14],P=i[3],L=i[7],A=i[11],D=i[15],I=s[0],O=s[4],w=s[8],R=s[12],F=s[1],B=s[5],z=s[9],K=s[13],te=s[2],Y=s[6],oe=s[10],Z=s[14],$=s[3],se=s[7],de=s[11],G=s[15];return o[0]=c*I+u*F+h*te+f*$,o[4]=c*O+u*B+h*Y+f*se,o[8]=c*w+u*z+h*oe+f*de,o[12]=c*R+u*K+h*Z+f*G,o[1]=p*I+x*F+g*te+_*$,o[5]=p*O+x*B+g*Y+_*se,o[9]=p*w+x*z+g*oe+_*de,o[13]=p*R+x*K+g*Z+_*G,o[2]=M*I+b*F+v*te+y*$,o[6]=M*O+b*B+v*Y+y*se,o[10]=M*w+b*z+v*oe+y*de,o[14]=M*R+b*K+v*Z+y*G,o[3]=P*I+L*F+A*te+D*$,o[7]=P*O+L*B+A*Y+D*se,o[11]=P*w+L*z+A*oe+D*de,o[15]=P*R+L*K+A*Z+D*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],c=e[1],u=e[5],h=e[9],f=e[13],p=e[2],x=e[6],g=e[10],_=e[14],M=e[3],b=e[7],v=e[11],y=e[15],P=h*_-f*g,L=u*_-f*x,A=u*g-h*x,D=c*_-f*p,I=c*g-h*p,O=c*x-u*p;return t*(b*P-v*L+y*A)-i*(M*P-v*D+y*I)+s*(M*L-b*D+y*O)-o*(M*A-b*I+v*O)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[1],c=e[5],u=e[9],h=e[2],f=e[6],p=e[10];return t*(c*p-u*f)-i*(o*p-u*h)+s*(o*f-c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],x=e[9],g=e[10],_=e[11],M=e[12],b=e[13],v=e[14],y=e[15],P=t*u-i*c,L=t*h-s*c,A=t*f-o*c,D=i*h-s*u,I=i*f-o*u,O=s*f-o*h,w=p*b-x*M,R=p*v-g*M,F=p*y-_*M,B=x*v-g*b,z=x*y-_*b,K=g*y-_*v,te=P*K-L*z+A*B+D*F-I*R+O*w;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/te;return e[0]=(u*K-h*z+f*B)*Y,e[1]=(s*z-i*K-o*B)*Y,e[2]=(b*O-v*I+y*D)*Y,e[3]=(g*I-x*O-_*D)*Y,e[4]=(h*F-c*K-f*R)*Y,e[5]=(t*K-s*F+o*R)*Y,e[6]=(v*A-M*O-y*L)*Y,e[7]=(p*O-g*A+_*L)*Y,e[8]=(c*z-u*F+f*w)*Y,e[9]=(i*F-t*z-o*w)*Y,e[10]=(M*I-b*A+y*P)*Y,e[11]=(x*A-p*I-_*P)*Y,e[12]=(u*R-c*B-h*w)*Y,e[13]=(t*B-i*R+s*w)*Y,e[14]=(b*L-M*D-v*P)*Y,e[15]=(p*D-x*L+g*P)*Y,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,c=e.x,u=e.y,h=e.z,f=o*c,p=o*u;return this.set(f*c+i,f*u-s*h,f*h+s*u,0,f*u+s*h,p*u+i,p*h-s*c,0,f*h-s*u,p*h+s*c,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,c){return this.set(1,i,o,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,c=t._y,u=t._z,h=t._w,f=o+o,p=c+c,x=u+u,g=o*f,_=o*p,M=o*x,b=c*p,v=c*x,y=u*x,P=h*f,L=h*p,A=h*x,D=i.x,I=i.y,O=i.z;return s[0]=(1-(b+y))*D,s[1]=(_+A)*D,s[2]=(M-L)*D,s[3]=0,s[4]=(_-A)*I,s[5]=(1-(g+y))*I,s[6]=(v+P)*I,s[7]=0,s[8]=(M+L)*O,s[9]=(v-P)*O,s[10]=(1-(g+b))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let c=ga.set(s[0],s[1],s[2]).length();const u=ga.set(s[4],s[5],s[6]).length(),h=ga.set(s[8],s[9],s[10]).length();o<0&&(c=-c),Bi.copy(this);const f=1/c,p=1/u,x=1/h;return Bi.elements[0]*=f,Bi.elements[1]*=f,Bi.elements[2]*=f,Bi.elements[4]*=p,Bi.elements[5]*=p,Bi.elements[6]*=p,Bi.elements[8]*=x,Bi.elements[9]*=x,Bi.elements[10]*=x,t.setFromRotationMatrix(Bi),i.x=c,i.y=u,i.z=h,this}makePerspective(e,t,i,s,o,c,u=nr,h=!1){const f=this.elements,p=2*o/(t-e),x=2*o/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let M,b;if(h)M=o/(c-o),b=c*o/(c-o);else if(u===nr)M=-(c+o)/(c-o),b=-2*c*o/(c-o);else if(u===Jo)M=-c/(c-o),b=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=x,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=b,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,o,c,u=nr,h=!1){const f=this.elements,p=2/(t-e),x=2/(i-s),g=-(t+e)/(t-e),_=-(i+s)/(i-s);let M,b;if(h)M=1/(c-o),b=c/(c-o);else if(u===nr)M=-2/(c-o),b=-(c+o)/(c-o);else if(u===Jo)M=-1/(c-o),b=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=0,f[12]=g,f[1]=0,f[5]=x,f[9]=0,f[13]=_,f[2]=0,f[6]=0,f[10]=M,f[14]=b,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};pu.prototype.isMatrix4=!0;let Vt=pu;const ga=new V,Bi=new Vt,xS=new V(0,0,0),_S=new V(1,1,1),Yr=new V,lc=new V,fi=new V,_g=new Vt,yg=new Bs;class br{constructor(e=0,t=0,i=0,s=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],c=s[4],u=s[8],h=s[1],f=s[5],p=s[9],x=s[2],g=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-At(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-x,o),this._z=0);break;case"ZXY":this._x=Math.asin(At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,_),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-x,o)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,_),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _g.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_g,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yg.setFromEuler(this),this.setFromQuaternion(yg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class Bv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yS=0;const Sg=new V,va=new Bs,mr=new Vt,cc=new V,Lo=new V,SS=new V,MS=new Bs,Mg=new V(1,0,0),Eg=new V(0,1,0),Tg=new V(0,0,1),wg={type:"added"},ES={type:"removed"},xa={type:"childadded",child:null},xh={type:"childremoved",child:null};class gn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new V,t=new br,i=new Bs,s=new V(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new ft}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.multiply(va),this}rotateOnWorldAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.premultiply(va),this}rotateX(e){return this.rotateOnAxis(Mg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(Tg,e)}translateOnAxis(e,t){return Sg.copy(e).applyQuaternion(this.quaternion),this.position.add(Sg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(Tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cc.copy(e):cc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(Lo,cc,this.up):mr.lookAt(cc,Lo,this.up),this.quaternion.setFromRotationMatrix(mr),s&&(mr.extractRotation(s.matrixWorld),va.setFromRotationMatrix(mr),this.quaternion.premultiply(va.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wg),xa.child=e,this.dispatchEvent(xa),xa.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ES),xh.child=e,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wg),xa.child=e,this.dispatchEvent(xa),xa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,SS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,MS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*s,o[13]+=i-o[1]*t-o[5]*i-o[9]*s,o[14]+=s-o[2]*t-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){const x=h[f];o(e.shapes,x)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(o(e.materials,this.material[h]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(o(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),f=c(e.textures),p=c(e.images),x=c(e.shapes),g=c(e.skeletons),_=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),x.length>0&&(i.shapes=x),g.length>0&&(i.skeletons=g),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const h=[];for(const f in u){const p=u[f];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}gn.DEFAULT_UP=new V(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yn extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TS={type:"move"};class _h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,c=null;const u=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const b of e.hand.values()){const v=t.getJointPose(b,i),y=this._getHandJoint(f,b);v!==null&&(y.matrix.fromArray(v.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=v.radius),y.visible=v!==null}const p=f.joints["index-finger-tip"],x=f.joints["thumb-tip"],g=p.position.distanceTo(x.position),_=.02,M=.005;f.inputState.pinching&&g>_+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=_-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(TS)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},uc={h:0,s:0,l:0};function yh(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Tt.workingColorSpace){if(e=dS(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=yh(c,o,e+1/3),this.g=yh(c,o,e),this.b=yh(c,o,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=li){function i(o){o!==void 0&&parseFloat(o)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const i=zv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Tt.workingToColorSpace(zn.copy(this),e),Math.round(At(zn.r*255,0,255))*65536+Math.round(At(zn.g*255,0,255))*256+Math.round(At(zn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(zn.copy(this),t);const i=zn.r,s=zn.g,o=zn.b,c=Math.max(i,s,o),u=Math.min(i,s,o);let h,f;const p=(u+c)/2;if(u===c)h=0,f=0;else{const x=c-u;switch(f=p<=.5?x/(c+u):x/(2-c-u),c){case i:h=(s-o)/x+(s<o?6:0);break;case s:h=(o-i)/x+2;break;case o:h=(i-s)/x+4;break}h/=6}return e.h=h,e.s=f,e.l=p,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=li){Tt.workingToColorSpace(zn.copy(this),e);const t=zn.r,i=zn.g,s=zn.b;return e!==li?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(uc);const i=fh(qr.h,uc.h,t),s=fh(qr.s,uc.s,t),o=fh(qr.l,uc.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new We;We.NAMES=zv;class gp{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new gp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Gv extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zi=new V,gr=new V,Sh=new V,vr=new V,_a=new V,ya=new V,bg=new V,Mh=new V,Eh=new V,Th=new V,wh=new cn,bh=new cn,Ah=new cn;class Ri{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zi.subVectors(e,t),s.cross(zi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){zi.subVectors(s,t),gr.subVectors(i,t),Sh.subVectors(e,t);const c=zi.dot(zi),u=zi.dot(gr),h=zi.dot(Sh),f=gr.dot(gr),p=gr.dot(Sh),x=c*f-u*u;if(x===0)return o.set(0,0,0),null;const g=1/x,_=(f*h-u*p)*g,M=(c*p-u*h)*g;return o.set(1-_-M,M,_)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,i,s,o,c,u,h){return this.getBarycoord(e,t,i,s,vr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,vr.x),h.addScaledVector(c,vr.y),h.addScaledVector(u,vr.z),h)}static getInterpolatedAttribute(e,t,i,s,o,c){return wh.setScalar(0),bh.setScalar(0),Ah.setScalar(0),wh.fromBufferAttribute(e,t),bh.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(wh,o.x),c.addScaledVector(bh,o.y),c.addScaledVector(Ah,o.z),c}static isFrontFacing(e,t,i,s){return zi.subVectors(i,t),gr.subVectors(e,t),zi.cross(gr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),zi.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Ri.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let c,u;_a.subVectors(s,i),ya.subVectors(o,i),Mh.subVectors(e,i);const h=_a.dot(Mh),f=ya.dot(Mh);if(h<=0&&f<=0)return t.copy(i);Eh.subVectors(e,s);const p=_a.dot(Eh),x=ya.dot(Eh);if(p>=0&&x<=p)return t.copy(s);const g=h*x-p*f;if(g<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(i).addScaledVector(_a,c);Th.subVectors(e,o);const _=_a.dot(Th),M=ya.dot(Th);if(M>=0&&_<=M)return t.copy(o);const b=_*f-h*M;if(b<=0&&f>=0&&M<=0)return u=f/(f-M),t.copy(i).addScaledVector(ya,u);const v=p*M-_*x;if(v<=0&&x-p>=0&&_-M>=0)return bg.subVectors(o,s),u=(x-p)/(x-p+(_-M)),t.copy(s).addScaledVector(bg,u);const y=1/(v+b+g);return c=b*y,u=g*y,t.copy(i).addScaledVector(_a,c).addScaledVector(ya,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zs{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Gi):Gi.fromBufferAttribute(o,c),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dc.copy(i.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}const s=e.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),hc.subVectors(this.max,Do),Sa.subVectors(e.a,Do),Ma.subVectors(e.b,Do),Ea.subVectors(e.c,Do),$r.subVectors(Ma,Sa),Kr.subVectors(Ea,Ma),Es.subVectors(Sa,Ea);let t=[0,-$r.z,$r.y,0,-Kr.z,Kr.y,0,-Es.z,Es.y,$r.z,0,-$r.x,Kr.z,0,-Kr.x,Es.z,0,-Es.x,-$r.y,$r.x,0,-Kr.y,Kr.x,0,-Es.y,Es.x,0];return!Ch(t,Sa,Ma,Ea,hc)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,Sa,Ma,Ea,hc))?!1:(fc.crossVectors($r,Kr),t=[fc.x,fc.y,fc.z],Ch(t,Sa,Ma,Ea,hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xr=[new V,new V,new V,new V,new V,new V,new V,new V],Gi=new V,dc=new zs,Sa=new V,Ma=new V,Ea=new V,$r=new V,Kr=new V,Es=new V,Do=new V,hc=new V,fc=new V,Ts=new V;function Ch(a,e,t,i,s){for(let o=0,c=a.length-3;o<=c;o+=3){Ts.fromArray(a,o);const u=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),h=e.dot(Ts),f=t.dot(Ts),p=i.dot(Ts);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>u)return!1}return!0}const _n=new V,pc=new Je;let wS=0;class _t extends ks{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vf,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array),o=Yt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Vv extends _t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hv extends _t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ot extends _t{constructor(e,t,i){super(new Float32Array(e),t,i)}}const bS=new zs,Uo=new V,Rh=new V;class Gs{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bS.setFromPoints(e).getCenter(i);let s=0;for(let o=0,c=e.length;o<c;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const t=Uo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Uo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Rh)),this.expandByPoint(Uo.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let AS=0;const Ai=new Vt,Ph=new gn,Ta=new V,pi=new zs,Oo=new zs,Rn=new V;class wt extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oS(e)?Hv:Vv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ft().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,t,i){return Ai.makeTranslation(e,t,i),this.applyMatrix4(Ai),this}scale(e,t,i){return Ai.makeScale(e,t,i),this.applyMatrix4(Ai),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ot(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];pi.setFromBufferAttribute(o),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];Oo.setFromBufferAttribute(u),this.morphTargetsRelative?(Rn.addVectors(pi.min,Oo.min),pi.expandByPoint(Rn),Rn.addVectors(pi.max,Oo.max),pi.expandByPoint(Rn)):(pi.expandByPoint(Oo.min),pi.expandByPoint(Oo.max))}pi.getCenter(i);let s=0;for(let o=0,c=e.count;o<c;o++)Rn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Rn));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],h=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)Rn.fromBufferAttribute(u,f),h&&(Ta.fromBufferAttribute(e,f),Rn.add(Ta)),s=Math.max(s,i.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new _t(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const u=[],h=[];for(let w=0;w<i.count;w++)u[w]=new V,h[w]=new V;const f=new V,p=new V,x=new V,g=new Je,_=new Je,M=new Je,b=new V,v=new V;function y(w,R,F){f.fromBufferAttribute(i,w),p.fromBufferAttribute(i,R),x.fromBufferAttribute(i,F),g.fromBufferAttribute(o,w),_.fromBufferAttribute(o,R),M.fromBufferAttribute(o,F),p.sub(f),x.sub(f),_.sub(g),M.sub(g);const B=1/(_.x*M.y-M.x*_.y);isFinite(B)&&(b.copy(p).multiplyScalar(M.y).addScaledVector(x,-_.y).multiplyScalar(B),v.copy(x).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(B),u[w].add(b),u[R].add(b),u[F].add(b),h[w].add(v),h[R].add(v),h[F].add(v))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let w=0,R=P.length;w<R;++w){const F=P[w],B=F.start,z=F.count;for(let K=B,te=B+z;K<te;K+=3)y(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const L=new V,A=new V,D=new V,I=new V;function O(w){D.fromBufferAttribute(s,w),I.copy(D);const R=u[w];L.copy(R),L.sub(D.multiplyScalar(D.dot(R))).normalize(),A.crossVectors(I,R);const B=A.dot(h[w])<0?-1:1;c.setXYZW(w,L.x,L.y,L.z,B)}for(let w=0,R=P.length;w<R;++w){const F=P[w],B=F.start,z=F.count;for(let K=B,te=B+z;K<te;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,_=i.count;g<_;g++)i.setXYZ(g,0,0,0);const s=new V,o=new V,c=new V,u=new V,h=new V,f=new V,p=new V,x=new V;if(e)for(let g=0,_=e.count;g<_;g+=3){const M=e.getX(g+0),b=e.getX(g+1),v=e.getX(g+2);s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,b),c.fromBufferAttribute(t,v),p.subVectors(c,o),x.subVectors(s,o),p.cross(x),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,b),f.fromBufferAttribute(i,v),u.add(p),h.add(p),f.add(p),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(b,h.x,h.y,h.z),i.setXYZ(v,f.x,f.y,f.z)}else for(let g=0,_=t.count;g<_;g+=3)s.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,o),x.subVectors(s,o),p.cross(x),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(u,h){const f=u.array,p=u.itemSize,x=u.normalized,g=new f.constructor(h.length*p);let _=0,M=0;for(let b=0,v=h.length;b<v;b++){u.isInterleavedBufferAttribute?_=h[b]*u.data.stride+u.offset:_=h[b]*p;for(let y=0;y<p;y++)g[M++]=f[_++]}return new _t(g,p,x)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,s=this.attributes;for(const u in s){const h=s[u],f=e(h,i);t.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const h=[],f=o[u];for(let p=0,x=f.length;p<x;p++){const g=f[p],_=e(g,i);h.push(_)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],p=[];for(let x=0,g=f.length;x<g;x++){const _=f[x];p.push(_.toJSON(e.data))}p.length>0&&(s[h]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const f in s){const p=s[f];this.setAttribute(f,p.clone(t))}const o=e.morphAttributes;for(const f in o){const p=[],x=o[f];for(let g=0,_=x.length;g<_;g++)p.push(x[g].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,p=c.length;f<p;f++){const x=c[f];this.addGroup(x.start,x.count,x.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class CS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vf,this.updateRanges=[],this.version=0,this.uuid=ns()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yn=new V;class uu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Yn.fromBufferAttribute(this,t),Yn.applyMatrix4(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yn.fromBufferAttribute(this,t),Yn.applyNormalMatrix(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yn.fromBufferAttribute(this,t),Yn.transformDirection(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tr(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array),o=Yt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){cu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){cu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let RS=0;class Ar extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Oa,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ef,this.blendDst=tf,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oa&&(i.blending=this.blending),this.side!==is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ef&&(i.blendSrc=this.blendSrc),this.blendDst!==tf&&(i.blendDst=this.blendDst),this.blendEquation!==Ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}if(t){const o=s(e.textures),c=s(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wv extends Ar{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let wa;const Fo=new V,ba=new V,Aa=new V,Ca=new Je,ko=new Je,Xv=new Vt,mc=new V,Bo=new V,gc=new V,Ag=new Je,Nh=new Je,Cg=new Je;class PS extends gn{constructor(e=new Wv){if(super(),this.isSprite=!0,this.type="Sprite",wa===void 0){wa=new wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new CS(t,5);wa.setIndex([0,1,2,0,2,3]),wa.setAttribute("position",new uu(i,3,0,!1)),wa.setAttribute("uv",new uu(i,2,3,!1))}this.geometry=wa,this.material=e,this.center=new Je(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ba.setFromMatrixScale(this.matrixWorld),Xv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Aa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ba.multiplyScalar(-Aa.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const c=this.center;vc(mc.set(-.5,-.5,0),Aa,c,ba,s,o),vc(Bo.set(.5,-.5,0),Aa,c,ba,s,o),vc(gc.set(.5,.5,0),Aa,c,ba,s,o),Ag.set(0,0),Nh.set(1,0),Cg.set(1,1);let u=e.ray.intersectTriangle(mc,Bo,gc,!1,Fo);if(u===null&&(vc(Bo.set(-.5,.5,0),Aa,c,ba,s,o),Nh.set(0,1),u=e.ray.intersectTriangle(mc,gc,Bo,!1,Fo),u===null))return;const h=e.ray.origin.distanceTo(Fo);h<e.near||h>e.far||t.push({distance:h,point:Fo.clone(),uv:Ri.getInterpolation(Fo,mc,Bo,gc,Ag,Nh,Cg,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function vc(a,e,t,i,s,o){Ca.subVectors(a,t).addScalar(.5).multiply(i),s!==void 0?(ko.x=o*Ca.x-s*Ca.y,ko.y=s*Ca.x+o*Ca.y):ko.copy(Ca),a.copy(e),a.x+=ko.x,a.y+=ko.y,a.applyMatrix4(Xv)}const _r=new V,Ih=new V,xc=new V,Zr=new V,Lh=new V,_c=new V,Dh=new V;class vp{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ih.copy(e).add(t).multiplyScalar(.5),xc.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Ih);const o=e.distanceTo(t)*.5,c=-this.direction.dot(xc),u=Zr.dot(this.direction),h=-Zr.dot(xc),f=Zr.lengthSq(),p=Math.abs(1-c*c);let x,g,_,M;if(p>0)if(x=c*h-u,g=c*u-h,M=o*p,x>=0)if(g>=-M)if(g<=M){const b=1/p;x*=b,g*=b,_=x*(x+c*g+2*u)+g*(c*x+g+2*h)+f}else g=o,x=Math.max(0,-(c*g+u)),_=-x*x+g*(g+2*h)+f;else g=-o,x=Math.max(0,-(c*g+u)),_=-x*x+g*(g+2*h)+f;else g<=-M?(x=Math.max(0,-(-c*o+u)),g=x>0?-o:Math.min(Math.max(-o,-h),o),_=-x*x+g*(g+2*h)+f):g<=M?(x=0,g=Math.min(Math.max(-o,-h),o),_=g*(g+2*h)+f):(x=Math.max(0,-(c*o+u)),g=x>0?o:Math.min(Math.max(-o,-h),o),_=-x*x+g*(g+2*h)+f);else g=c>0?-o:o,x=Math.max(0,-(c*g+u)),_=-x*x+g*(g+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(Ih).addScaledVector(xc,g),_}intersectSphere(e,t){_r.subVectors(e.center,this.origin);const i=_r.dot(this.direction),s=_r.dot(_r)-i*i,o=e.radius*e.radius;if(s>o)return null;const c=Math.sqrt(o-s),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,c,u,h;const f=1/this.direction.x,p=1/this.direction.y,x=1/this.direction.z,g=this.origin;return f>=0?(i=(e.min.x-g.x)*f,s=(e.max.x-g.x)*f):(i=(e.max.x-g.x)*f,s=(e.min.x-g.x)*f),p>=0?(o=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),x>=0?(u=(e.min.z-g.z)*x,h=(e.max.z-g.z)*x):(u=(e.max.z-g.z)*x,h=(e.min.z-g.z)*x),i>h||u>s)||((u>i||i!==i)&&(i=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,i,s,o){Lh.subVectors(t,e),_c.subVectors(i,e),Dh.crossVectors(Lh,_c);let c=this.direction.dot(Dh),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Zr.subVectors(this.origin,e);const h=u*this.direction.dot(_c.crossVectors(Zr,_c));if(h<0)return null;const f=u*this.direction.dot(Lh.cross(Zr));if(f<0||h+f>c)return null;const p=-u*Zr.dot(Dh);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $n extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=Jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rg=new Vt,ws=new vp,yc=new Gs,Pg=new V,Sc=new V,Mc=new V,Ec=new V,Uh=new V,Tc=new V,Ng=new V,wc=new V;class lt extends gn{constructor(e=new wt,t=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){Tc.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const p=u[h],x=o[h];p!==0&&(Uh.fromBufferAttribute(x,e),c?Tc.addScaledVector(Uh,p):Tc.addScaledVector(Uh.sub(t),p))}t.add(Tc)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(o),ws.copy(e.ray).recast(e.near),!(yc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(yc,Pg)===null||ws.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(Rg.copy(o).invert(),ws.copy(e.ray).applyMatrix4(Rg),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,i){let s;const o=this.geometry,c=this.material,u=o.index,h=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,x=o.attributes.normal,g=o.groups,_=o.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,b=g.length;M<b;M++){const v=g[M],y=c[v.materialIndex],P=Math.max(v.start,_.start),L=Math.min(u.count,Math.min(v.start+v.count,_.start+_.count));for(let A=P,D=L;A<D;A+=3){const I=u.getX(A),O=u.getX(A+1),w=u.getX(A+2);s=bc(this,y,e,i,f,p,x,I,O,w),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const M=Math.max(0,_.start),b=Math.min(u.count,_.start+_.count);for(let v=M,y=b;v<y;v+=3){const P=u.getX(v),L=u.getX(v+1),A=u.getX(v+2);s=bc(this,c,e,i,f,p,x,P,L,A),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,b=g.length;M<b;M++){const v=g[M],y=c[v.materialIndex],P=Math.max(v.start,_.start),L=Math.min(h.count,Math.min(v.start+v.count,_.start+_.count));for(let A=P,D=L;A<D;A+=3){const I=A,O=A+1,w=A+2;s=bc(this,y,e,i,f,p,x,I,O,w),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const M=Math.max(0,_.start),b=Math.min(h.count,_.start+_.count);for(let v=M,y=b;v<y;v+=3){const P=v,L=v+1,A=v+2;s=bc(this,c,e,i,f,p,x,P,L,A),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function NS(a,e,t,i,s,o,c,u){let h;if(e.side===Kn?h=i.intersectTriangle(c,o,s,!0,u):h=i.intersectTriangle(s,o,c,e.side===is,u),h===null)return null;wc.copy(u),wc.applyMatrix4(a.matrixWorld);const f=t.ray.origin.distanceTo(wc);return f<t.near||f>t.far?null:{distance:f,point:wc.clone(),object:a}}function bc(a,e,t,i,s,o,c,u,h,f){a.getVertexPosition(u,Sc),a.getVertexPosition(h,Mc),a.getVertexPosition(f,Ec);const p=NS(a,e,t,i,Sc,Mc,Ec,Ng);if(p){const x=new V;Ri.getBarycoord(Ng,Sc,Mc,Ec,x),s&&(p.uv=Ri.getInterpolatedAttribute(s,u,h,f,x,new Je)),o&&(p.uv1=Ri.getInterpolatedAttribute(o,u,h,f,x,new Je)),c&&(p.normal=Ri.getInterpolatedAttribute(c,u,h,f,x,new V),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:h,c:f,normal:new V,materialIndex:0};Ri.getNormal(Sc,Mc,Ec,g.normal),p.face=g,p.barycoord=x}return p}class jv extends Vn{constructor(e=null,t=1,i=1,s,o,c,u,h,f=En,p=En,x,g){super(null,c,u,h,f,p,s,o,x,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ig extends _t{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ra=new Vt,Lg=new Vt,Ac=[],Dg=new zs,IS=new Vt,zo=new lt,Go=new Gs;class xp extends lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ig(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,IS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ra),Dg.copy(e.boundingBox).applyMatrix4(Ra),this.boundingBox.union(Dg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ra),Go.copy(e.boundingSphere).applyMatrix4(Ra),this.boundingSphere.union(Go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,c=e*o+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(zo.geometry=this.geometry,zo.material=this.material,zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(i),e.ray.intersectsSphere(Go)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ra),Lg.multiplyMatrices(i,Ra),zo.matrixWorld=Lg,zo.raycast(e,Ac);for(let c=0,u=Ac.length;c<u;c++){const h=Ac[c];h.instanceId=o,h.object=this,t.push(h)}Ac.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ig(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new jv(new Float32Array(s*this.count),s,this.count,cp,Hi));const o=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const u=this.geometry.morphTargetsRelative?1:1-c,h=s*e;return o[h]=u,o.set(i,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Oh=new V,LS=new V,DS=new ft;class Rs{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Oh.subVectors(i,t).cross(LS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Oh),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||DS.getNormalMatrix(e),s=this.coplanarPoint(Oh).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Gs,US=new Je(.5,.5),Cc=new V;class _p{constructor(e=new Rs,t=new Rs,i=new Rs,s=new Rs,o=new Rs,c=new Rs){this.planes=[e,t,i,s,o,c]}set(e,t,i,s,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=nr,i=!1){const s=this.planes,o=e.elements,c=o[0],u=o[1],h=o[2],f=o[3],p=o[4],x=o[5],g=o[6],_=o[7],M=o[8],b=o[9],v=o[10],y=o[11],P=o[12],L=o[13],A=o[14],D=o[15];if(s[0].setComponents(f-c,_-p,y-M,D-P).normalize(),s[1].setComponents(f+c,_+p,y+M,D+P).normalize(),s[2].setComponents(f+u,_+x,y+b,D+L).normalize(),s[3].setComponents(f-u,_-x,y-b,D-L).normalize(),i)s[4].setComponents(h,g,v,A).normalize(),s[5].setComponents(f-h,_-g,y-v,D-A).normalize();else if(s[4].setComponents(f-h,_-g,y-v,D-A).normalize(),t===nr)s[5].setComponents(f+h,_+g,y+v,D+A).normalize();else if(t===Jo)s[5].setComponents(h,g,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);const t=US.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Cc.x=s.normal.x>0?e.max.x:e.min.x,Cc.y=s.normal.y>0?e.max.y:e.min.y,Cc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Va extends Ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new V,hu=new V,Ug=new Vt,Vo=new vp,Rc=new Gs,Fh=new V,Og=new V;class Ba extends gn{constructor(e=new wt,t=new Va){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)du.fromBufferAttribute(t,s-1),hu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=du.distanceTo(hu);e.setAttribute("lineDistance",new Ot(i,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(s),Rc.radius+=o,e.ray.intersectsSphere(Rc)===!1)return;Ug.copy(s).invert(),Vo.copy(e.ray).applyMatrix4(Ug);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){const _=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let b=_,v=M-1;b<v;b+=f){const y=p.getX(b),P=p.getX(b+1),L=Pc(this,e,Vo,h,y,P,b);L&&t.push(L)}if(this.isLineLoop){const b=p.getX(M-1),v=p.getX(_),y=Pc(this,e,Vo,h,b,v,M-1);y&&t.push(y)}}else{const _=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let b=_,v=M-1;b<v;b+=f){const y=Pc(this,e,Vo,h,b,b+1,b);y&&t.push(y)}if(this.isLineLoop){const b=Pc(this,e,Vo,h,M-1,_,M-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Pc(a,e,t,i,s,o,c){const u=a.geometry.attributes.position;if(du.fromBufferAttribute(u,s),hu.fromBufferAttribute(u,o),t.distanceSqToSegment(du,hu,Fh,Og)>i)return;Fh.applyMatrix4(a.matrixWorld);const f=e.ray.origin.distanceTo(Fh);if(!(f<e.near||f>e.far))return{distance:f,point:Og.clone().applyMatrix4(a.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:a}}const Fg=new V,kg=new V;class xu extends Ba{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)Fg.fromBufferAttribute(t,s),kg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Fg.distanceTo(kg);e.setAttribute("lineDistance",new Ot(i,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wf extends Ar{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bg=new Vt,Xf=new vp,Nc=new Gs,Ic=new V;class rs extends gn{constructor(e=new wt,t=new Wf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(s),Nc.radius+=o,e.ray.intersectsSphere(Nc)===!1)return;Bg.copy(s).invert(),Xf.copy(e.ray).applyMatrix4(Bg);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=i.index,x=i.attributes.position;if(f!==null){const g=Math.max(0,c.start),_=Math.min(f.count,c.start+c.count);for(let M=g,b=_;M<b;M++){const v=f.getX(M);Ic.fromBufferAttribute(x,v),zg(Ic,v,h,s,e,t,this)}}else{const g=Math.max(0,c.start),_=Math.min(x.count,c.start+c.count);for(let M=g,b=_;M<b;M++)Ic.fromBufferAttribute(x,M),zg(Ic,M,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function zg(a,e,t,i,s,o,c){const u=Xf.distanceSqToPoint(a);if(u<t){const h=new V;Xf.closestPointToPoint(a,h),h.applyMatrix4(i);const f=s.ray.origin.distanceTo(h);if(f<s.near||f>s.far)return;o.push({distance:f,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Yv extends Vn{constructor(e=[],t=Os,i,s,o,c,u,h,f,p){super(e,t,i,s,o,c,u,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qv extends Vn{constructor(e,t,i,s,o,c,u,h,f){super(e,t,i,s,o,c,u,h,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ha extends Vn{constructor(e,t,i=rr,s,o,c,u=En,h=En,f,p=wr,x=1){if(p!==wr&&p!==Ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:x};super(g,s,o,c,u,h,p,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class OS extends Ha{constructor(e,t=rr,i=Os,s,o,c=En,u=En,h,f=wr){const p={width:e,height:e,depth:1},x=[p,p,p,p,p,p];super(e,e,t,i,s,o,c,u,h,f),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $v extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fn extends wt{constructor(e=1,t=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};const u=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);const h=[],f=[],p=[],x=[];let g=0,_=0;M("z","y","x",-1,-1,i,t,e,c,o,0),M("z","y","x",1,-1,i,t,-e,c,o,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,o,4),M("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(h),this.setAttribute("position",new Ot(f,3)),this.setAttribute("normal",new Ot(p,3)),this.setAttribute("uv",new Ot(x,2));function M(b,v,y,P,L,A,D,I,O,w,R){const F=A/O,B=D/w,z=A/2,K=D/2,te=I/2,Y=O+1,oe=w+1;let Z=0,$=0;const se=new V;for(let de=0;de<oe;de++){const G=de*B-K;for(let J=0;J<Y;J++){const Ue=J*F-z;se[b]=Ue*P,se[v]=G*L,se[y]=te,f.push(se.x,se.y,se.z),se[b]=0,se[v]=0,se[y]=I>0?1:-1,p.push(se.x,se.y,se.z),x.push(J/O),x.push(1-de/w),Z+=1}}for(let de=0;de<w;de++)for(let G=0;G<O;G++){const J=g+G+Y*de,Ue=g+G+Y*(de+1),Ke=g+(G+1)+Y*(de+1),Ge=g+(G+1)+Y*de;h.push(J,Ue,Ge),h.push(Ue,Ke,Ge),$+=6}u.addGroup(_,$,R),_+=$,g+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yp extends wt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const o=[],c=[],u=[],h=[],f=new V,p=new Je;c.push(0,0,0),u.push(0,0,1),h.push(.5,.5);for(let x=0,g=3;x<=t;x++,g+=3){const _=i+x/t*s;f.x=e*Math.cos(_),f.y=e*Math.sin(_),c.push(f.x,f.y,f.z),u.push(0,0,1),p.x=(c[g]/e+1)/2,p.y=(c[g+1]/e+1)/2,h.push(p.x,p.y)}for(let x=1;x<=t;x++)o.push(x,x+1,0);this.setIndex(o),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wa extends wt{constructor(e=1,t=1,i=1,s=32,o=1,c=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:h};const f=this;s=Math.floor(s),o=Math.floor(o);const p=[],x=[],g=[],_=[];let M=0;const b=[],v=i/2;let y=0;P(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(p),this.setAttribute("position",new Ot(x,3)),this.setAttribute("normal",new Ot(g,3)),this.setAttribute("uv",new Ot(_,2));function P(){const A=new V,D=new V;let I=0;const O=(t-e)/i;for(let w=0;w<=o;w++){const R=[],F=w/o,B=F*(t-e)+e;for(let z=0;z<=s;z++){const K=z/s,te=K*h+u,Y=Math.sin(te),oe=Math.cos(te);D.x=B*Y,D.y=-F*i+v,D.z=B*oe,x.push(D.x,D.y,D.z),A.set(Y,O,oe).normalize(),g.push(A.x,A.y,A.z),_.push(K,1-F),R.push(M++)}b.push(R)}for(let w=0;w<s;w++)for(let R=0;R<o;R++){const F=b[R][w],B=b[R+1][w],z=b[R+1][w+1],K=b[R][w+1];(e>0||R!==0)&&(p.push(F,B,K),I+=3),(t>0||R!==o-1)&&(p.push(B,z,K),I+=3)}f.addGroup(y,I,0),y+=I}function L(A){const D=M,I=new Je,O=new V;let w=0;const R=A===!0?e:t,F=A===!0?1:-1;for(let z=1;z<=s;z++)x.push(0,v*F,0),g.push(0,F,0),_.push(.5,.5),M++;const B=M;for(let z=0;z<=s;z++){const te=z/s*h+u,Y=Math.cos(te),oe=Math.sin(te);O.x=R*oe,O.y=v*F,O.z=R*Y,x.push(O.x,O.y,O.z),g.push(0,F,0),I.x=Y*.5+.5,I.y=oe*.5*F+.5,_.push(I.x,I.y),M++}for(let z=0;z<s;z++){const K=D+z,te=B+z;A===!0?p.push(te,te+1,K):p.push(te+1,te,K),w+=3}f.addGroup(y,w,A===!0?1:2),y+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sp extends Wa{constructor(e=1,t=1,i=32,s=1,o=!1,c=0,u=Math.PI*2){super(0,e,t,i,s,o,c,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:u}}static fromJSON(e){return new Sp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _u extends wt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],c=[];u(s),f(i),p(),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(o.slice(),3)),this.setAttribute("uv",new Ot(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(P){const L=new V,A=new V,D=new V;for(let I=0;I<t.length;I+=3)_(t[I+0],L),_(t[I+1],A),_(t[I+2],D),h(L,A,D,P)}function h(P,L,A,D){const I=D+1,O=[];for(let w=0;w<=I;w++){O[w]=[];const R=P.clone().lerp(A,w/I),F=L.clone().lerp(A,w/I),B=I-w;for(let z=0;z<=B;z++)z===0&&w===I?O[w][z]=R:O[w][z]=R.clone().lerp(F,z/B)}for(let w=0;w<I;w++)for(let R=0;R<2*(I-w)-1;R++){const F=Math.floor(R/2);R%2===0?(g(O[w][F+1]),g(O[w+1][F]),g(O[w][F])):(g(O[w][F+1]),g(O[w+1][F+1]),g(O[w+1][F]))}}function f(P){const L=new V;for(let A=0;A<o.length;A+=3)L.x=o[A+0],L.y=o[A+1],L.z=o[A+2],L.normalize().multiplyScalar(P),o[A+0]=L.x,o[A+1]=L.y,o[A+2]=L.z}function p(){const P=new V;for(let L=0;L<o.length;L+=3){P.x=o[L+0],P.y=o[L+1],P.z=o[L+2];const A=v(P)/2/Math.PI+.5,D=y(P)/Math.PI+.5;c.push(A,1-D)}M(),x()}function x(){for(let P=0;P<c.length;P+=6){const L=c[P+0],A=c[P+2],D=c[P+4],I=Math.max(L,A,D),O=Math.min(L,A,D);I>.9&&O<.1&&(L<.2&&(c[P+0]+=1),A<.2&&(c[P+2]+=1),D<.2&&(c[P+4]+=1))}}function g(P){o.push(P.x,P.y,P.z)}function _(P,L){const A=P*3;L.x=e[A+0],L.y=e[A+1],L.z=e[A+2]}function M(){const P=new V,L=new V,A=new V,D=new V,I=new Je,O=new Je,w=new Je;for(let R=0,F=0;R<o.length;R+=9,F+=6){P.set(o[R+0],o[R+1],o[R+2]),L.set(o[R+3],o[R+4],o[R+5]),A.set(o[R+6],o[R+7],o[R+8]),I.set(c[F+0],c[F+1]),O.set(c[F+2],c[F+3]),w.set(c[F+4],c[F+5]),D.copy(P).add(L).add(A).divideScalar(3);const B=v(D);b(I,F+0,P,B),b(O,F+2,L,B),b(w,F+4,A,B)}}function b(P,L,A,D){D<0&&P.x===1&&(c[L]=P.x-1),A.x===0&&A.z===0&&(c[L]=D/2/Math.PI+.5)}function v(P){return Math.atan2(P.z,-P.x)}function y(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.vertices,e.indices,e.radius,e.detail)}}class Mp extends _u{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,c,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mp(e.radius,e.detail)}}class Ep extends _u{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ep(e.radius,e.detail)}}class Xa extends wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,c=t/2,u=Math.floor(i),h=Math.floor(s),f=u+1,p=h+1,x=e/u,g=t/h,_=[],M=[],b=[],v=[];for(let y=0;y<p;y++){const P=y*g-c;for(let L=0;L<f;L++){const A=L*x-o;M.push(A,-P,0),b.push(0,0,1),v.push(L/u),v.push(1-y/h)}}for(let y=0;y<h;y++)for(let P=0;P<u;P++){const L=P+f*y,A=P+f*(y+1),D=P+1+f*(y+1),I=P+1+f*y;_.push(L,A,I),_.push(A,D,I)}this.setIndex(_),this.setAttribute("position",new Ot(M,3)),this.setAttribute("normal",new Ot(b,3)),this.setAttribute("uv",new Ot(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tp extends wt{constructor(e=.5,t=1,i=32,s=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:c},i=Math.max(3,i),s=Math.max(1,s);const u=[],h=[],f=[],p=[];let x=e;const g=(t-e)/s,_=new V,M=new Je;for(let b=0;b<=s;b++){for(let v=0;v<=i;v++){const y=o+v/i*c;_.x=x*Math.cos(y),_.y=x*Math.sin(y),h.push(_.x,_.y,_.z),f.push(0,0,1),M.x=(_.x/t+1)/2,M.y=(_.y/t+1)/2,p.push(M.x,M.y)}x+=g}for(let b=0;b<s;b++){const v=b*(i+1);for(let y=0;y<i;y++){const P=y+v,L=P,A=P+i+1,D=P+i+2,I=P+1;u.push(L,A,I),u.push(A,D,I)}}this.setIndex(u),this.setAttribute("position",new Ot(h,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class el extends wt{constructor(e=1,t=32,i=16,s=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:o,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(c+u,Math.PI);let f=0;const p=[],x=new V,g=new V,_=[],M=[],b=[],v=[];for(let y=0;y<=i;y++){const P=[],L=y/i,A=c+L*u,D=e*Math.cos(A),I=Math.sqrt(e*e-D*D);let O=0;y===0&&c===0?O=.5/t:y===i&&h===Math.PI&&(O=-.5/t);for(let w=0;w<=t;w++){const R=w/t,F=s+R*o;x.x=-I*Math.cos(F),x.y=D,x.z=I*Math.sin(F),M.push(x.x,x.y,x.z),g.copy(x).normalize(),b.push(g.x,g.y,g.z),v.push(R+O,1-L),P.push(f++)}p.push(P)}for(let y=0;y<i;y++)for(let P=0;P<t;P++){const L=p[y][P+1],A=p[y][P],D=p[y+1][P],I=p[y+1][P+1];(y!==0||c>0)&&_.push(L,A,I),(y!==i-1||h<Math.PI)&&_.push(A,D,I)}this.setIndex(_),this.setAttribute("position",new Ot(M,3)),this.setAttribute("normal",new Ot(b,3)),this.setAttribute("uv",new Ot(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yu extends wt{constructor(e=1,t=.4,i=12,s=48,o=Math.PI*2,c=0,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:o,thetaStart:c,thetaLength:u},i=Math.floor(i),s=Math.floor(s);const h=[],f=[],p=[],x=[],g=new V,_=new V,M=new V;for(let b=0;b<=i;b++){const v=c+b/i*u;for(let y=0;y<=s;y++){const P=y/s*o;_.x=(e+t*Math.cos(v))*Math.cos(P),_.y=(e+t*Math.cos(v))*Math.sin(P),_.z=t*Math.sin(v),f.push(_.x,_.y,_.z),g.x=e*Math.cos(P),g.y=e*Math.sin(P),M.subVectors(_,g).normalize(),p.push(M.x,M.y,M.z),x.push(y/s),x.push(b/i)}}for(let b=1;b<=i;b++)for(let v=1;v<=s;v++){const y=(s+1)*b+v-1,P=(s+1)*(b-1)+v-1,L=(s+1)*(b-1)+v,A=(s+1)*b+v;h.push(y,P,A),h.push(P,L,A)}this.setIndex(h),this.setAttribute("position",new Ot(f,3)),this.setAttribute("normal",new Ot(p,3)),this.setAttribute("uv",new Ot(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function ja(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];if(Gg(s))s.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Gg(s[0])){const o=[];for(let c=0,u=s.length;c<u;c++)o[c]=s[c].clone();e[t][i]=o}else e[t][i]=s.slice();else e[t][i]=s}}return e}function qn(a){const e={};for(let t=0;t<a.length;t++){const i=ja(a[t]);for(const s in i)e[s]=i[s]}return e}function Gg(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function FS(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Kv(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Ya={clone:ja,merge:qn};var kS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gt extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kS,this.fragmentShader=BS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ja(e.uniforms),this.uniformsGroups=FS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new We().setHex(s.value);break;case"v2":this.uniforms[i].value=new Je().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new cn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ft().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Vt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Zv extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ci extends Ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zS extends Ar{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=Jf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qv extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GS extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wp extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class VS extends wp{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const kh=new Vt,Vg=new V,Hg=new V;class Jv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vg),Hg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hg),t.updateMatrixWorld(),kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Jo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lc=new V,Dc=new Bs,Zi=new V;class ex extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lc,Dc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,Zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Lc,Dc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new V,Wg=new Je,Xg=new Je;class vi extends ex{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hf*2*Math.atan(Math.tan(hh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,Wg,Xg),t.subVectors(Xg,Wg)}setViewOffset(e,t,i,s,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;o+=c.offsetX*s/h,t-=c.offsetY*i/f,s*=c.width/h,i*=c.height/f}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class HS extends Jv{constructor(){super(new vi(90,1,.5,500)),this.isPointLightShadow=!0}}class WS extends wp{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new HS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Su extends ex{constructor(e=-1,t=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class XS extends Jv{constructor(){super(new Su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jg extends wp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new XS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Pa=-90,Na=1;class jS extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vi(Pa,Na,e,t);s.layers=this.layers,this.add(s);const o=new vi(Pa,Na,e,t);o.layers=this.layers,this.add(o);const c=new vi(Pa,Na,e,t);c.layers=this.layers,this.add(c);const u=new vi(Pa,Na,e,t);u.layers=this.layers,this.add(u);const h=new vi(Pa,Na,e,t);h.layers=this.layers,this.add(h);const f=new vi(Pa,Na,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,c,u,h]=t;for(const f of t)this.remove(f);if(e===nr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,h,f,p]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(x,g,_),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class YS extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qS{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=$S.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function $S(){this._document.hidden===!1&&this.reset()}const Pp=class Pp{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=s,this}};Pp.prototype.isMatrix2=!0;let Yg=Pp;function qg(a,e,t,i){const s=KS(i);switch(t){case Uv:return a*e;case cp:return a*e/s.components*s.byteLength;case up:return a*e/s.components*s.byteLength;case Fs:return a*e*2/s.components*s.byteLength;case dp:return a*e*2/s.components*s.byteLength;case Ov:return a*e*3/s.components*s.byteLength;case Wi:return a*e*4/s.components*s.byteLength;case hp:return a*e*4/s.components*s.byteLength;case qc:case $c:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Kc:case Zc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ff:case mf:return Math.max(a,16)*Math.max(e,8)/4;case hf:case pf:return Math.max(a,8)*Math.max(e,8)/2;case gf:case vf:case _f:case yf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case xf:case iu:case Sf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case wf:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case bf:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Af:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case If:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Df:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Of:case Ff:case kf:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Bf:case zf:return Math.ceil(a/4)*Math.ceil(e/4)*8;case ru:case Gf:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KS(a){switch(a){case _i:case Nv:return{byteLength:1,components:1};case Zo:case Iv:case Zn:return{byteLength:2,components:1};case op:case lp:return{byteLength:2,components:4};case rr:case ap:case Hi:return{byteLength:4,components:1};case Lv:case Dv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qf}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tx(){let a=null,e=!1,t=null,i=null;function s(o,c){t(o,c),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function ZS(a){const e=new WeakMap;function t(u,h){const f=u.array,p=u.usage,x=f.byteLength,g=a.createBuffer();a.bindBuffer(h,g),a.bufferData(h,f,p),u.onUploadCallback();let _;if(f instanceof Float32Array)_=a.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)_=a.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?_=a.HALF_FLOAT:_=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=a.SHORT;else if(f instanceof Uint32Array)_=a.UNSIGNED_INT;else if(f instanceof Int32Array)_=a.INT;else if(f instanceof Int8Array)_=a.BYTE;else if(f instanceof Uint8Array)_=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:x}}function i(u,h,f){const p=h.array,x=h.updateRanges;if(a.bindBuffer(f,u),x.length===0)a.bufferSubData(f,0,p);else{x.sort((_,M)=>_.start-M.start);let g=0;for(let _=1;_<x.length;_++){const M=x[g],b=x[_];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++g,x[g]=b)}x.length=g+1;for(let _=0,M=x.length;_<M;_++){const b=x[_];a.bufferSubData(f,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(a.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,h),f.version=u.version}}return{get:s,remove:o,update:c}}var QS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JS=`#ifdef USE_ALPHAHASH
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
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rM=`#ifdef USE_AOMAP
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
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aM=`#ifdef USE_BATCHING
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
#endif`,lM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dM=`#ifdef USE_IRIDESCENCE
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
#endif`,hM=`#ifdef USE_BUMPMAP
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
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,SM=`#define PI 3.141592653589793
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
} // validated`,MM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EM=`vec3 transformedNormal = objectNormal;
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
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",RM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
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
}`,zM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,WM=`#ifdef USE_ENVMAP
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
#endif`,XM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$M=`PhysicalMaterial material;
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
#endif`,KM=`uniform sampler2D dfgLUT;
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
}`,ZM=`
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
#endif`,QM=`#if defined( RE_IndirectDiffuse )
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
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,t1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a1=`#ifdef USE_MAP
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
#endif`,l1=`#if defined( USE_POINTS_UV )
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
#endif`,c1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`#ifdef USE_MORPHTARGETS
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
#endif`,m1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,S1=`#ifdef USE_NORMALMAP
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
#endif`,M1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F1=`float getShadowMask() {
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
}`,k1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B1=`#ifdef USE_SKINNING
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
#endif`,z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,V1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j1=`#ifdef USE_TRANSMISSION
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
#endif`,Y1=`#ifdef USE_TRANSMISSION
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
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J1=`uniform sampler2D t2D;
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
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`#include <common>
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
}`,sE=`#if DEPTH_PACKING == 3200
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
}`,aE=`#define DISTANCE
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
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`uniform float scale;
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
}`,dE=`uniform vec3 diffuse;
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
}`,hE=`#include <common>
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
}`,fE=`uniform vec3 diffuse;
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
}`,pE=`#define LAMBERT
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
}`,mE=`#define LAMBERT
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
}`,gE=`#define MATCAP
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
}`,vE=`#define MATCAP
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
}`,xE=`#define NORMAL
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
}`,_E=`#define NORMAL
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
}`,yE=`#define PHONG
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
}`,SE=`#define PHONG
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
}`,ME=`#define STANDARD
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
}`,EE=`#define STANDARD
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
}`,TE=`#define TOON
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
}`,wE=`#define TOON
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
}`,bE=`uniform float size;
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
}`,AE=`uniform vec3 diffuse;
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
}`,CE=`#include <common>
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
}`,RE=`uniform vec3 color;
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
}`,PE=`uniform float rotation;
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
}`,NE=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:QS,alphahash_pars_fragment:JS,alphamap_fragment:eM,alphamap_pars_fragment:tM,alphatest_fragment:nM,alphatest_pars_fragment:iM,aomap_fragment:rM,aomap_pars_fragment:sM,batching_pars_vertex:aM,batching_vertex:oM,begin_vertex:lM,beginnormal_vertex:cM,bsdfs:uM,iridescence_fragment:dM,bumpmap_pars_fragment:hM,clipping_planes_fragment:fM,clipping_planes_pars_fragment:pM,clipping_planes_pars_vertex:mM,clipping_planes_vertex:gM,color_fragment:vM,color_pars_fragment:xM,color_pars_vertex:_M,color_vertex:yM,common:SM,cube_uv_reflection_fragment:MM,defaultnormal_vertex:EM,displacementmap_pars_vertex:TM,displacementmap_vertex:wM,emissivemap_fragment:bM,emissivemap_pars_fragment:AM,colorspace_fragment:CM,colorspace_pars_fragment:RM,envmap_fragment:PM,envmap_common_pars_fragment:NM,envmap_pars_fragment:IM,envmap_pars_vertex:LM,envmap_physical_pars_fragment:WM,envmap_vertex:DM,fog_vertex:UM,fog_pars_vertex:OM,fog_fragment:FM,fog_pars_fragment:kM,gradientmap_pars_fragment:BM,lightmap_pars_fragment:zM,lights_lambert_fragment:GM,lights_lambert_pars_fragment:VM,lights_pars_begin:HM,lights_toon_fragment:XM,lights_toon_pars_fragment:jM,lights_phong_fragment:YM,lights_phong_pars_fragment:qM,lights_physical_fragment:$M,lights_physical_pars_fragment:KM,lights_fragment_begin:ZM,lights_fragment_maps:QM,lights_fragment_end:JM,lightprobes_pars_fragment:e1,logdepthbuf_fragment:t1,logdepthbuf_pars_fragment:n1,logdepthbuf_pars_vertex:i1,logdepthbuf_vertex:r1,map_fragment:s1,map_pars_fragment:a1,map_particle_fragment:o1,map_particle_pars_fragment:l1,metalnessmap_fragment:c1,metalnessmap_pars_fragment:u1,morphinstance_vertex:d1,morphcolor_vertex:h1,morphnormal_vertex:f1,morphtarget_pars_vertex:p1,morphtarget_vertex:m1,normal_fragment_begin:g1,normal_fragment_maps:v1,normal_pars_fragment:x1,normal_pars_vertex:_1,normal_vertex:y1,normalmap_pars_fragment:S1,clearcoat_normal_fragment_begin:M1,clearcoat_normal_fragment_maps:E1,clearcoat_pars_fragment:T1,iridescence_pars_fragment:w1,opaque_fragment:b1,packing:A1,premultiplied_alpha_fragment:C1,project_vertex:R1,dithering_fragment:P1,dithering_pars_fragment:N1,roughnessmap_fragment:I1,roughnessmap_pars_fragment:L1,shadowmap_pars_fragment:D1,shadowmap_pars_vertex:U1,shadowmap_vertex:O1,shadowmask_pars_fragment:F1,skinbase_vertex:k1,skinning_pars_vertex:B1,skinning_vertex:z1,skinnormal_vertex:G1,specularmap_fragment:V1,specularmap_pars_fragment:H1,tonemapping_fragment:W1,tonemapping_pars_fragment:X1,transmission_fragment:j1,transmission_pars_fragment:Y1,uv_pars_fragment:q1,uv_pars_vertex:$1,uv_vertex:K1,worldpos_vertex:Z1,background_vert:Q1,background_frag:J1,backgroundCube_vert:eE,backgroundCube_frag:tE,cube_vert:nE,cube_frag:iE,depth_vert:rE,depth_frag:sE,distance_vert:aE,distance_frag:oE,equirect_vert:lE,equirect_frag:cE,linedashed_vert:uE,linedashed_frag:dE,meshbasic_vert:hE,meshbasic_frag:fE,meshlambert_vert:pE,meshlambert_frag:mE,meshmatcap_vert:gE,meshmatcap_frag:vE,meshnormal_vert:xE,meshnormal_frag:_E,meshphong_vert:yE,meshphong_frag:SE,meshphysical_vert:ME,meshphysical_frag:EE,meshtoon_vert:TE,meshtoon_frag:wE,points_vert:bE,points_frag:AE,shadow_vert:CE,shadow_frag:RE,sprite_vert:PE,sprite_frag:NE},De={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},er={basic:{uniforms:qn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:qn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:qn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:qn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:qn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new We(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:qn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:qn([De.points,De.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:qn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:qn([De.common,De.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:qn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:qn([De.sprite,De.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:qn([De.common,De.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:qn([De.lights,De.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};er.physical={uniforms:qn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Uc={r:0,b:0,g:0},IE=new Vt,nx=new ft;nx.set(-1,0,0,0,1,0,0,0,1);function LE(a,e,t,i,s,o){const c=new We(0);let u=s===!0?0:1,h,f,p=null,x=0,g=null;function _(P){let L=P.isScene===!0?P.background:null;if(L&&L.isTexture){const A=P.backgroundBlurriness>0;L=e.get(L,A)}return L}function M(P){let L=!1;const A=_(P);A===null?v(c,u):A&&A.isColor&&(v(A,1),L=!0);const D=a.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(a.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(P,L){const A=_(L);A&&(A.isCubeTexture||A.mapping===vu)?(f===void 0&&(f=new lt(new fn(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:ja(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=A,f.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(IE.makeRotationFromEuler(L.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(nx),f.material.toneMapped=Tt.getTransfer(A.colorSpace)!==Bt,(p!==A||x!==A.version||g!==a.toneMapping)&&(f.material.needsUpdate=!0,p=A,x=A.version,g=a.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new lt(new Xa(2,2),new Gt({name:"BackgroundMaterial",uniforms:ja(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(A.colorSpace)!==Bt,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||x!==A.version||g!==a.toneMapping)&&(h.material.needsUpdate=!0,p=A,x=A.version,g=a.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function v(P,L){P.getRGB(Uc,Kv(a)),t.buffers.color.setClear(Uc.r,Uc.g,Uc.b,L,o)}function y(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,L=1){c.set(P),u=L,v(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(P){u=P,v(c,u)},render:M,addToRenderList:b,dispose:y}}function DE(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=g(null);let o=s,c=!1;function u(B,z,K,te,Y){let oe=!1;const Z=x(B,te,K,z);o!==Z&&(o=Z,f(o.object)),oe=_(B,te,K,Y),oe&&M(B,te,K,Y),Y!==null&&e.update(Y,a.ELEMENT_ARRAY_BUFFER),(oe||c)&&(c=!1,A(B,z,K,te),Y!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function h(){return a.createVertexArray()}function f(B){return a.bindVertexArray(B)}function p(B){return a.deleteVertexArray(B)}function x(B,z,K,te){const Y=te.wireframe===!0;let oe=i[z.id];oe===void 0&&(oe={},i[z.id]=oe);const Z=B.isInstancedMesh===!0?B.id:0;let $=oe[Z];$===void 0&&($={},oe[Z]=$);let se=$[K.id];se===void 0&&(se={},$[K.id]=se);let de=se[Y];return de===void 0&&(de=g(h()),se[Y]=de),de}function g(B){const z=[],K=[],te=[];for(let Y=0;Y<t;Y++)z[Y]=0,K[Y]=0,te[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:K,attributeDivisors:te,object:B,attributes:{},index:null}}function _(B,z,K,te){const Y=o.attributes,oe=z.attributes;let Z=0;const $=K.getAttributes();for(const se in $)if($[se].location>=0){const G=Y[se];let J=oe[se];if(J===void 0&&(se==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),se==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;Z++}return o.attributesNum!==Z||o.index!==te}function M(B,z,K,te){const Y={},oe=z.attributes;let Z=0;const $=K.getAttributes();for(const se in $)if($[se].location>=0){let G=oe[se];G===void 0&&(se==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),se==="instanceColor"&&B.instanceColor&&(G=B.instanceColor));const J={};J.attribute=G,G&&G.data&&(J.data=G.data),Y[se]=J,Z++}o.attributes=Y,o.attributesNum=Z,o.index=te}function b(){const B=o.newAttributes;for(let z=0,K=B.length;z<K;z++)B[z]=0}function v(B){y(B,0)}function y(B,z){const K=o.newAttributes,te=o.enabledAttributes,Y=o.attributeDivisors;K[B]=1,te[B]===0&&(a.enableVertexAttribArray(B),te[B]=1),Y[B]!==z&&(a.vertexAttribDivisor(B,z),Y[B]=z)}function P(){const B=o.newAttributes,z=o.enabledAttributes;for(let K=0,te=z.length;K<te;K++)z[K]!==B[K]&&(a.disableVertexAttribArray(K),z[K]=0)}function L(B,z,K,te,Y,oe,Z){Z===!0?a.vertexAttribIPointer(B,z,K,Y,oe):a.vertexAttribPointer(B,z,K,te,Y,oe)}function A(B,z,K,te){b();const Y=te.attributes,oe=K.getAttributes(),Z=z.defaultAttributeValues;for(const $ in oe){const se=oe[$];if(se.location>=0){let de=Y[$];if(de===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(de=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(de=B.instanceColor)),de!==void 0){const G=de.normalized,J=de.itemSize,Ue=e.get(de);if(Ue===void 0)continue;const Ke=Ue.buffer,Ge=Ue.type,le=Ue.bytesPerElement,xe=Ge===a.INT||Ge===a.UNSIGNED_INT||de.gpuType===ap;if(de.isInterleavedBufferAttribute){const me=de.data,Oe=me.stride,nt=de.offset;if(me.isInstancedInterleavedBuffer){for(let it=0;it<se.locationSize;it++)y(se.location+it,me.meshPerAttribute);B.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let it=0;it<se.locationSize;it++)v(se.location+it);a.bindBuffer(a.ARRAY_BUFFER,Ke);for(let it=0;it<se.locationSize;it++)L(se.location+it,J/se.locationSize,Ge,G,Oe*le,(nt+J/se.locationSize*it)*le,xe)}else{if(de.isInstancedBufferAttribute){for(let me=0;me<se.locationSize;me++)y(se.location+me,de.meshPerAttribute);B.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let me=0;me<se.locationSize;me++)v(se.location+me);a.bindBuffer(a.ARRAY_BUFFER,Ke);for(let me=0;me<se.locationSize;me++)L(se.location+me,J/se.locationSize,Ge,G,J*le,J/se.locationSize*me*le,xe)}}else if(Z!==void 0){const G=Z[$];if(G!==void 0)switch(G.length){case 2:a.vertexAttrib2fv(se.location,G);break;case 3:a.vertexAttrib3fv(se.location,G);break;case 4:a.vertexAttrib4fv(se.location,G);break;default:a.vertexAttrib1fv(se.location,G)}}}}P()}function D(){R();for(const B in i){const z=i[B];for(const K in z){const te=z[K];for(const Y in te){const oe=te[Y];for(const Z in oe)p(oe[Z].object),delete oe[Z];delete te[Y]}}delete i[B]}}function I(B){if(i[B.id]===void 0)return;const z=i[B.id];for(const K in z){const te=z[K];for(const Y in te){const oe=te[Y];for(const Z in oe)p(oe[Z].object),delete oe[Z];delete te[Y]}}delete i[B.id]}function O(B){for(const z in i){const K=i[z];for(const te in K){const Y=K[te];if(Y[B.id]===void 0)continue;const oe=Y[B.id];for(const Z in oe)p(oe[Z].object),delete oe[Z];delete Y[B.id]}}}function w(B){for(const z in i){const K=i[z],te=B.isInstancedMesh===!0?B.id:0,Y=K[te];if(Y!==void 0){for(const oe in Y){const Z=Y[oe];for(const $ in Z)p(Z[$].object),delete Z[$];delete Y[oe]}delete K[te],Object.keys(K).length===0&&delete i[z]}}}function R(){F(),c=!0,o!==s&&(o=s,f(o.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:R,resetDefaultState:F,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:v,disableUnusedAttributes:P}}function UE(a,e,t){let i;function s(h){i=h}function o(h,f){a.drawArrays(i,h,f),t.update(f,i,1)}function c(h,f,p){p!==0&&(a.drawArraysInstanced(i,h,f,p),t.update(f,i,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_];t.update(g,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function OE(a,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==Wi&&i.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const w=O===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==_i&&i.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Hi&&!w)}function h(O){if(O==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=h(f);p!==f&&(ct("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const x=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),P=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),A=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),D=a.getParameter(a.MAX_SAMPLES),I=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:A,maxSamples:D,samples:I}}function FE(a){const e=this;let t=null,i=0,s=!1,o=!1;const c=new Rs,u=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const _=x.length!==0||g||i!==0||s;return s=g,i=x.length,_},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(x,g){t=p(x,g,0)},this.setState=function(x,g,_){const M=x.clippingPlanes,b=x.clipIntersection,v=x.clipShadows,y=a.get(x);if(!s||M===null||M.length===0||o&&!v)o?p(null):f();else{const P=o?0:i,L=P*4;let A=y.clippingState||null;h.value=A,A=p(M,g,L,_);for(let D=0;D!==L;++D)A[D]=t[D];y.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(x,g,_,M){const b=x!==null?x.length:0;let v=null;if(b!==0){if(v=h.value,M!==!0||v===null){const y=_+b*4,P=g.matrixWorldInverse;u.getNormalMatrix(P),(v===null||v.length<y)&&(v=new Float32Array(y));for(let L=0,A=_;L!==b;++L,A+=4)c.copy(x[L]).applyMatrix4(P,u),c.normal.toArray(v,A),v[A+3]=c.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,v}}const es=4,$g=[.125,.215,.35,.446,.526,.582],Is=20,kE=256,Ho=new Su,Kg=new We;let Bh=null,zh=0,Gh=0,Vh=!1;const BE=new V;class jf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,o={}){const{size:c=256,position:u=BE}=o;Bh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,zh,Gh),this._renderer.xr.enabled=Vh,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Zn,format:Wi,colorSpace:au,depthBuffer:!1},s=Zg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zg(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zE(o)),this._blurMaterial=VE(o,e,t),this._ggxMaterial=GE(o,e,t)}return s}_compileMaterial(e){const t=new lt(new wt,e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,i,s,o){const h=new vi(90,1,t,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,_=x.toneMapping;x.getClearColor(Kg),x.toneMapping=ir,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new fn,new $n({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,v=b.material;let y=!1;const P=e.background;P?P.isColor&&(v.color.copy(P),e.background=null,y=!0):(v.color.copy(Kg),y=!0);for(let L=0;L<6;L++){const A=L%3;A===0?(h.up.set(0,f[L],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+p[L],o.y,o.z)):A===1?(h.up.set(0,0,f[L]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+p[L],o.z)):(h.up.set(0,f[L],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+p[L]));const D=this._cubeSize;Ia(s,A*D,L>2?D:0,D,D),x.setRenderTarget(s),y&&x.render(b,h),x.render(e,h)}x.toneMapping=_,x.autoClear=g,e.background=P}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Os||e.mapping===Ga;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qg());const o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;Ia(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Ho)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,f=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),x=Math.sqrt(f*f-p*p),g=0+f*1.25,_=x*g,{_lodMax:M}=this,b=this._sizeLods[i],v=3*b*(i>M-es?i-M+es:0),y=4*(this._cubeSize-b);h.envMap.value=e.texture,h.roughness.value=_,h.mipInt.value=M-t,Ia(o,v,y,3*b,2*b),s.setRenderTarget(o),s.render(u,Ho),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=M-i,Ia(e,v,y,3*b,2*b),s.setRenderTarget(e),s.render(u,Ho)}_blur(e,t,i,s,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",o),this._halfBlur(c,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,c,u){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const p=3,x=this._lodMeshes[s];x.material=f;const g=f.uniforms,_=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*Is-1),b=o/M,v=isFinite(o)?1+Math.floor(p*b):Is;v>Is&&ct(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Is}`);const y=[];let P=0;for(let O=0;O<Is;++O){const w=O/b,R=Math.exp(-w*w/2);y.push(R),O===0?P+=R:O<v&&(P+=2*R)}for(let O=0;O<y.length;O++)y[O]=y[O]/P;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=y,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:L}=this;g.dTheta.value=M,g.mipInt.value=L-i;const A=this._sizeLods[s],D=3*A*(s>L-es?s-L+es:0),I=4*(this._cubeSize-A);Ia(t,D,I,3*A,2*A),h.setRenderTarget(t),h.render(x,Ho)}}function zE(a){const e=[],t=[],i=[];let s=a;const o=a-es+1+$g.length;for(let c=0;c<o;c++){const u=Math.pow(2,s);e.push(u);let h=1/u;c>a-es?h=$g[c-a+es-1]:c===0&&(h=0),t.push(h);const f=1/(u-2),p=-f,x=1+f,g=[p,p,x,p,x,x,p,p,x,x,p,x],_=6,M=6,b=3,v=2,y=1,P=new Float32Array(b*M*_),L=new Float32Array(v*M*_),A=new Float32Array(y*M*_);for(let I=0;I<_;I++){const O=I%3*2/3-1,w=I>2?0:-1,R=[O,w,0,O+2/3,w,0,O+2/3,w+1,0,O,w,0,O+2/3,w+1,0,O,w+1,0];P.set(R,b*M*I),L.set(g,v*M*I);const F=[I,I,I,I,I,I];A.set(F,y*M*I)}const D=new wt;D.setAttribute("position",new _t(P,b)),D.setAttribute("uv",new _t(L,v)),D.setAttribute("faceIndex",new _t(A,y)),i.push(new lt(D,null)),s>es&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Zg(a,e,t){const i=new Hn(a,e,t);return i.texture.mapping=vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ia(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function GE(a,e,t){return new Gt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function VE(a,e,t){const i=new Float32Array(Is),s=new V(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Qg(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Jg(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

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
	`}class ix extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Yv(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fn(5,5,5),o=new Gt({name:"CubemapFromEquirect",uniforms:ja(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kn,blending:Xi});o.uniforms.tEquirect.value=t;const c=new lt(s,o),u=t.minFilter;return t.minFilter===Ls&&(t.minFilter=Gn),new jS(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(o)}}function HE(a){let e=new WeakMap,t=new WeakMap,i=null;function s(g,_=!1){return g==null?null:_?c(g):o(g)}function o(g){if(g&&g.isTexture){const _=g.mapping;if(_===ch||_===uh)if(e.has(g)){const M=e.get(g).texture;return u(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const b=new ix(M.height);return b.fromEquirectangularTexture(a,g),e.set(g,b),g.addEventListener("dispose",f),u(b.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const _=g.mapping,M=_===ch||_===uh,b=_===Os||_===Ga;if(M||b){let v=t.get(g);const y=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return i===null&&(i=new jf(a)),v=M?i.fromEquirectangular(g,v):i.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),v.texture;if(v!==void 0)return v.texture;{const P=g.image;return M&&P&&P.height>0||b&&P&&h(P)?(i===null&&(i=new jf(a)),v=M?i.fromEquirectangular(g):i.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),g.addEventListener("dispose",p),v.texture):null}}}return g}function u(g,_){return _===ch?g.mapping=Os:_===uh&&(g.mapping=Ga),g}function h(g){let _=0;const M=6;for(let b=0;b<M;b++)g[b]!==void 0&&_++;return _===M}function f(g){const _=g.target;_.removeEventListener("dispose",f);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(g){const _=g.target;_.removeEventListener("dispose",p);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function x(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:x}}function WE(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Fa("WebGLRenderer: "+i+" extension not supported."),s}}}function XE(a,e,t,i){const s={},o=new WeakMap;function c(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete s[g.id];const _=o.get(g);_&&(e.remove(_),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(x,g){return s[g.id]===!0||(g.addEventListener("dispose",c),s[g.id]=!0,t.memory.geometries++),g}function h(x){const g=x.attributes;for(const _ in g)e.update(g[_],a.ARRAY_BUFFER)}function f(x){const g=[],_=x.index,M=x.attributes.position;let b=0;if(M===void 0)return;if(_!==null){const P=_.array;b=_.version;for(let L=0,A=P.length;L<A;L+=3){const D=P[L+0],I=P[L+1],O=P[L+2];g.push(D,I,I,O,O,D)}}else{const P=M.array;b=M.version;for(let L=0,A=P.length/3-1;L<A;L+=3){const D=L+0,I=L+1,O=L+2;g.push(D,I,I,O,O,D)}}const v=new(M.count>=65535?Hv:Vv)(g,1);v.version=b;const y=o.get(x);y&&e.remove(y),o.set(x,v)}function p(x){const g=o.get(x);if(g){const _=x.index;_!==null&&g.version<_.version&&f(x)}else f(x);return o.get(x)}return{get:u,update:h,getWireframeAttribute:p}}function jE(a,e,t){let i;function s(x){i=x}let o,c;function u(x){o=x.type,c=x.bytesPerElement}function h(x,g){a.drawElements(i,g,o,x*c),t.update(g,i,1)}function f(x,g,_){_!==0&&(a.drawElementsInstanced(i,g,o,x*c,_),t.update(g,i,_))}function p(x,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,o,x,0,_);let b=0;for(let v=0;v<_;v++)b+=g[v];t.update(b,i,1)}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function YE(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case a.TRIANGLES:t.triangles+=u*(o/3);break;case a.LINES:t.lines+=u*(o/2);break;case a.LINE_STRIP:t.lines+=u*(o-1);break;case a.LINE_LOOP:t.lines+=u*o;break;case a.POINTS:t.points+=u*o;break;default:Nt("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function qE(a,e,t){const i=new WeakMap,s=new cn;function o(c,u,h){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==x){let F=function(){w.dispose(),i.delete(u),u.removeEventListener("dispose",F)};var _=F;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let A=0;M===!0&&(A=1),b===!0&&(A=2),v===!0&&(A=3);let D=u.attributes.position.count*A,I=1;D>e.maxTextureSize&&(I=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*I*4*x),w=new kv(O,D,I,x);w.type=Hi,w.needsUpdate=!0;const R=A*4;for(let B=0;B<x;B++){const z=y[B],K=P[B],te=L[B],Y=D*I*4*B;for(let oe=0;oe<z.count;oe++){const Z=oe*R;M===!0&&(s.fromBufferAttribute(z,oe),O[Y+Z+0]=s.x,O[Y+Z+1]=s.y,O[Y+Z+2]=s.z,O[Y+Z+3]=0),b===!0&&(s.fromBufferAttribute(K,oe),O[Y+Z+4]=s.x,O[Y+Z+5]=s.y,O[Y+Z+6]=s.z,O[Y+Z+7]=0),v===!0&&(s.fromBufferAttribute(te,oe),O[Y+Z+8]=s.x,O[Y+Z+9]=s.y,O[Y+Z+10]=s.z,O[Y+Z+11]=te.itemSize===4?s.w:1)}}g={count:x,texture:w,size:new Je(D,I)},i.set(u,g),u.addEventListener("dispose",F)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(a,"morphTexture",c.morphTexture,t);else{let M=0;for(let v=0;v<f.length;v++)M+=f[v];const b=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(a,"morphTargetBaseInfluence",b),h.getUniforms().setValue(a,"morphTargetInfluences",f)}h.getUniforms().setValue(a,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:o}}function $E(a,e,t,i,s){let o=new WeakMap;function c(f){const p=s.render.frame,x=f.geometry,g=e.get(f,x);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==p&&(t.update(f.instanceMatrix,a.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,a.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const _=f.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return g}function u(){o=new WeakMap}function h(f){const p=f.target;p.removeEventListener("dispose",h),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const KE={[ep]:"LINEAR_TONE_MAPPING",[tp]:"REINHARD_TONE_MAPPING",[np]:"CINEON_TONE_MAPPING",[gu]:"ACES_FILMIC_TONE_MAPPING",[rp]:"AGX_TONE_MAPPING",[sp]:"NEUTRAL_TONE_MAPPING",[ip]:"CUSTOM_TONE_MAPPING"};function ZE(a,e,t,i,s,o){const c=new Hn(e,t,{type:a,depthBuffer:s,stencilBuffer:o,samples:i?4:0,depthTexture:s?new Ha(e,t):void 0}),u=new Hn(e,t,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),h=new wt;h.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ot([0,2,0,0,2,0],2));const f=new Zv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new lt(h,f),x=new Su(-1,1,1,-1,0,1);let g=null,_=null,M=!1,b,v=null,y=[],P=!1;this.setSize=function(L,A){c.setSize(L,A),u.setSize(L,A);for(let D=0;D<y.length;D++){const I=y[D];I.setSize&&I.setSize(L,A)}},this.setEffects=function(L){y=L,P=y.length>0&&y[0].isRenderPass===!0;const A=c.width,D=c.height;for(let I=0;I<y.length;I++){const O=y[I];O.setSize&&O.setSize(A,D)}},this.begin=function(L,A){if(M||L.toneMapping===ir&&y.length===0)return!1;if(v=A,A!==null){const D=A.width,I=A.height;(c.width!==D||c.height!==I)&&this.setSize(D,I)}return P===!1&&L.setRenderTarget(c),b=L.toneMapping,L.toneMapping=ir,!0},this.hasRenderPass=function(){return P},this.end=function(L,A){L.toneMapping=b,M=!0;let D=c,I=u;for(let O=0;O<y.length;O++){const w=y[O];if(w.enabled!==!1&&(w.render(L,I,D,A),w.needsSwap!==!1)){const R=D;D=I,I=R}}if(g!==L.outputColorSpace||_!==L.toneMapping){g=L.outputColorSpace,_=L.toneMapping,f.defines={},Tt.getTransfer(g)===Bt&&(f.defines.SRGB_TRANSFER="");const O=KE[_];O&&(f.defines[O]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=D.texture,L.setRenderTarget(v),L.render(p,x),v=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),h.dispose(),f.dispose()}}const rx=new Vn,Yf=new Ha(1,1),sx=new kv,ax=new vS,ox=new Yv,ev=[],tv=[],nv=new Float32Array(16),iv=new Float32Array(9),rv=new Float32Array(4);function $a(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let o=ev[s];if(o===void 0&&(o=new Float32Array(s),ev[s]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,a[c].toArray(o,u)}return o}function Tn(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function wn(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Eu(a,e){let t=tv[e];t===void 0&&(t=new Int32Array(e),tv[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function QE(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function JE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;a.uniform2fv(this.addr,e),wn(t,e)}}function eT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;a.uniform3fv(this.addr,e),wn(t,e)}}function tT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;a.uniform4fv(this.addr,e),wn(t,e)}}function nT(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,i))return;rv.set(i),a.uniformMatrix2fv(this.addr,!1,rv),wn(t,i)}}function iT(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,i))return;iv.set(i),a.uniformMatrix3fv(this.addr,!1,iv),wn(t,i)}}function rT(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,i))return;nv.set(i),a.uniformMatrix4fv(this.addr,!1,nv),wn(t,i)}}function sT(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function aT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;a.uniform2iv(this.addr,e),wn(t,e)}}function oT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;a.uniform3iv(this.addr,e),wn(t,e)}}function lT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;a.uniform4iv(this.addr,e),wn(t,e)}}function cT(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function uT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;a.uniform2uiv(this.addr,e),wn(t,e)}}function dT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;a.uniform3uiv(this.addr,e),wn(t,e)}}function hT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;a.uniform4uiv(this.addr,e),wn(t,e)}}function fT(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(Yf.compareFunction=t.isReversedDepthBuffer()?pp:fp,o=Yf):o=rx,t.setTexture2D(e||o,s)}function pT(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ax,s)}function mT(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ox,s)}function gT(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sx,s)}function vT(a){switch(a){case 5126:return QE;case 35664:return JE;case 35665:return eT;case 35666:return tT;case 35674:return nT;case 35675:return iT;case 35676:return rT;case 5124:case 35670:return sT;case 35667:case 35671:return aT;case 35668:case 35672:return oT;case 35669:case 35673:return lT;case 5125:return cT;case 36294:return uT;case 36295:return dT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}function xT(a,e){a.uniform1fv(this.addr,e)}function _T(a,e){const t=$a(e,this.size,2);a.uniform2fv(this.addr,t)}function yT(a,e){const t=$a(e,this.size,3);a.uniform3fv(this.addr,t)}function ST(a,e){const t=$a(e,this.size,4);a.uniform4fv(this.addr,t)}function MT(a,e){const t=$a(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function ET(a,e){const t=$a(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function TT(a,e){const t=$a(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function wT(a,e){a.uniform1iv(this.addr,e)}function bT(a,e){a.uniform2iv(this.addr,e)}function AT(a,e){a.uniform3iv(this.addr,e)}function CT(a,e){a.uniform4iv(this.addr,e)}function RT(a,e){a.uniform1uiv(this.addr,e)}function PT(a,e){a.uniform2uiv(this.addr,e)}function NT(a,e){a.uniform3uiv(this.addr,e)}function IT(a,e){a.uniform4uiv(this.addr,e)}function LT(a,e,t){const i=this.cache,s=e.length,o=Eu(t,s);Tn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));let c;this.type===a.SAMPLER_2D_SHADOW?c=Yf:c=rx;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||c,o[u])}function DT(a,e,t){const i=this.cache,s=e.length,o=Eu(t,s);Tn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||ax,o[c])}function UT(a,e,t){const i=this.cache,s=e.length,o=Eu(t,s);Tn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||ox,o[c])}function OT(a,e,t){const i=this.cache,s=e.length,o=Eu(t,s);Tn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||sx,o[c])}function FT(a){switch(a){case 5126:return xT;case 35664:return _T;case 35665:return yT;case 35666:return ST;case 35674:return MT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return wT;case 35667:case 35671:return bT;case 35668:case 35672:return AT;case 35669:case 35673:return CT;case 5125:return RT;case 36294:return PT;case 36295:return NT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return OT}}class kT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vT(t.type)}}class BT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FT(t.type)}}class zT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,c=s.length;o!==c;++o){const u=s[o];u.setValue(e,t[u.id],i)}}}const Hh=/(\w+)(\])?(\[|\.)?/g;function sv(a,e){a.seq.push(e),a.map[e.id]=e}function GT(a,e,t){const i=a.name,s=i.length;for(Hh.lastIndex=0;;){const o=Hh.exec(i),c=Hh.lastIndex;let u=o[1];const h=o[2]==="]",f=o[3];if(h&&(u=u|0),f===void 0||f==="["&&c+2===s){sv(t,f===void 0?new kT(u,a,e):new BT(u,a,e));break}else{let x=t.map[u];x===void 0&&(x=new zT(u),sv(t,x)),t=x}}}class Qc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),h=e.getUniformLocation(t,u.name);GT(u,h,this)}const s=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,c=t.length;o!==c;++o){const u=t[o],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function av(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const VT=37297;let HT=0;function WT(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=s;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const ov=new ft;function XT(a){Tt._getMatrix(ov,Tt.workingColorSpace,a);const e=`mat3( ${ov.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(a)){case ou:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function lv(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+WT(a.getShaderSource(e),u)}else return o}function jT(a,e){const t=XT(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const YT={[ep]:"Linear",[tp]:"Reinhard",[np]:"Cineon",[gu]:"ACESFilmic",[rp]:"AgX",[sp]:"Neutral",[ip]:"Custom"};function qT(a,e){const t=YT[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oc=new V;function $T(){Tt.getLuminanceCoefficients(Oc);const a=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function ZT(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function QT(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=a.getActiveAttrib(e,s),c=o.name;let u=1;o.type===a.FLOAT_MAT2&&(u=2),o.type===a.FLOAT_MAT3&&(u=3),o.type===a.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:a.getAttribLocation(e,c),locationSize:u}}return t}function Yo(a){return a!==""}function cv(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JT=/^[ \t]*#include +<([\w\d./]+)>/gm;function qf(a){return a.replace(JT,tw)}const ew=new Map;function tw(a,e){let t=gt[e];if(t===void 0){const i=ew.get(e);if(i!==void 0)t=gt[i],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return qf(t)}const nw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(a){return a.replace(nw,iw)}function iw(a,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function hv(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rw={[Yc]:"SHADOWMAP_TYPE_PCF",[jo]:"SHADOWMAP_TYPE_VSM"};function sw(a){return rw[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aw={[Os]:"ENVMAP_TYPE_CUBE",[Ga]:"ENVMAP_TYPE_CUBE",[vu]:"ENVMAP_TYPE_CUBE_UV"};function ow(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":aw[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const lw={[Ga]:"ENVMAP_MODE_REFRACTION"};function cw(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":lw[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uw={[Jf]:"ENVMAP_BLENDING_MULTIPLY",[$y]:"ENVMAP_BLENDING_MIX",[Ky]:"ENVMAP_BLENDING_ADD"};function dw(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":uw[a.combine]||"ENVMAP_BLENDING_NONE"}function hw(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fw(a,e,t,i){const s=a.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=sw(t),f=ow(t),p=cw(t),x=dw(t),g=hw(t),_=KT(t),M=ZT(o),b=s.createProgram();let v,y,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yo).join(`
`),v.length>0&&(v+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yo).join(`
`),y.length>0&&(y+=`
`)):(v=[hv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),y=[hv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?gt.tonemapping_pars_fragment:"",t.toneMapping!==ir?qT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,jT("linearToOutputTexel",t.outputColorSpace),$T(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yo).join(`
`)),c=qf(c),c=cv(c,t),c=uv(c,t),u=qf(u),u=cv(u,t),u=uv(u,t),c=dv(c),u=dv(u),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,v=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,y=["#define varying in",t.glslVersion===pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=P+v+c,A=P+y+u,D=av(s,s.VERTEX_SHADER,L),I=av(s,s.FRAGMENT_SHADER,A);s.attachShader(b,D),s.attachShader(b,I),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function O(B){if(a.debug.checkShaderErrors){const z=s.getProgramInfoLog(b)||"",K=s.getShaderInfoLog(D)||"",te=s.getShaderInfoLog(I)||"",Y=z.trim(),oe=K.trim(),Z=te.trim();let $=!0,se=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,b,D,I);else{const de=lv(s,D,"vertex"),G=lv(s,I,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Y+`
`+de+`
`+G)}else Y!==""?ct("WebGLProgram: Program Info Log:",Y):(oe===""||Z==="")&&(se=!1);se&&(B.diagnostics={runnable:$,programLog:Y,vertexShader:{log:oe,prefix:v},fragmentShader:{log:Z,prefix:y}})}s.deleteShader(D),s.deleteShader(I),w=new Qc(s,b),R=QT(s,b)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(b,VT)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HT++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=D,this.fragmentShader=I,this}let pw=0;class mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gw(e),t.set(e,i)),i}}class gw{constructor(e){this.id=pw++,this.code=e,this.usedTimes=0}}function vw(a){return a===Fs||a===iu||a===ru}function xw(a,e,t,i,s,o){const c=new Bv,u=new mw,h=new Set,f=[],p=new Map,x=i.logarithmicDepthBuffer;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function b(w,R,F,B,z,K){const te=B.fog,Y=z.geometry,oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,Z=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,$=e.get(w.envMap||oe,Z),se=$&&$.mapping===vu?$.image.height:null,de=_[w.type];w.precision!==null&&(g=i.getMaxPrecision(w.precision),g!==w.precision&&ct("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,J=G!==void 0?G.length:0;let Ue=0;Y.morphAttributes.position!==void 0&&(Ue=1),Y.morphAttributes.normal!==void 0&&(Ue=2),Y.morphAttributes.color!==void 0&&(Ue=3);let Ke,Ge,le,xe;if(de){const Ve=er[de];Ke=Ve.vertexShader,Ge=Ve.fragmentShader}else{Ke=w.vertexShader,Ge=w.fragmentShader;const Ve=u.getVertexShaderStage(w),jt=u.getFragmentShaderStage(w);u.update(w,Ve,jt),le=Ve.id,xe=jt.id}const me=a.getRenderTarget(),Oe=a.state.buffers.depth.getReversed(),nt=z.isInstancedMesh===!0,it=z.isBatchedMesh===!0,Jt=!!w.map,pt=!!w.matcap,Ut=!!$,Ct=!!w.aoMap,Et=!!w.lightMap,en=!!w.bumpMap&&w.wireframe===!1,un=!!w.normalMap,dn=!!w.displacementMap,sn=!!w.emissiveMap,Ht=!!w.metalnessMap,tn=!!w.roughnessMap,j=w.anisotropy>0,Pn=w.clearcoat>0,Lt=w.dispersion>0,U=w.iridescence>0,T=w.sheen>0,Q=w.transmission>0,ae=j&&!!w.anisotropyMap,he=Pn&&!!w.clearcoatMap,Ee=Pn&&!!w.clearcoatNormalMap,Re=Pn&&!!w.clearcoatRoughnessMap,fe=U&&!!w.iridescenceMap,ge=U&&!!w.iridescenceThicknessMap,Ne=T&&!!w.sheenColorMap,qe=T&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,Ce=!!w.specularColorMap,et=!!w.specularIntensityMap,rt=Q&&!!w.transmissionMap,ot=Q&&!!w.thicknessMap,W=!!w.gradientMap,Ae=!!w.alphaMap,pe=w.alphaTest>0,Pe=!!w.alphaHash,Le=!!w.extensions;let ve=ir;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ve=a.toneMapping);const Xe={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:Ke,fragmentShader:Ge,defines:w.defines,customVertexShaderID:le,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:it,batchingColor:it&&z._colorsTexture!==null,instancing:nt,instancingColor:nt&&z.instanceColor!==null,instancingMorph:nt&&z.morphTexture!==null,outputColorSpace:me===null?a.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Jt,matcap:pt,envMap:Ut,envMapMode:Ut&&$.mapping,envMapCubeUVHeight:se,aoMap:Ct,lightMap:Et,bumpMap:en,normalMap:un,displacementMap:dn,emissiveMap:sn,normalMapObjectSpace:un&&w.normalMapType===eS,normalMapTangentSpace:un&&w.normalMapType===su,packedNormalMap:un&&w.normalMapType===su&&vw(w.normalMap.format),metalnessMap:Ht,roughnessMap:tn,anisotropy:j,anisotropyMap:ae,clearcoat:Pn,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Re,dispersion:Lt,iridescence:U,iridescenceMap:fe,iridescenceThicknessMap:ge,sheen:T,sheenColorMap:Ne,sheenRoughnessMap:qe,specularMap:Ie,specularColorMap:Ce,specularIntensityMap:et,transmission:Q,transmissionMap:rt,thicknessMap:ot,gradientMap:W,opaque:w.transparent===!1&&w.blending===Oa&&w.alphaToCoverage===!1,alphaMap:Ae,alphaTest:pe,alphaHash:Pe,combine:w.combine,mapUv:Jt&&M(w.map.channel),aoMapUv:Ct&&M(w.aoMap.channel),lightMapUv:Et&&M(w.lightMap.channel),bumpMapUv:en&&M(w.bumpMap.channel),normalMapUv:un&&M(w.normalMap.channel),displacementMapUv:dn&&M(w.displacementMap.channel),emissiveMapUv:sn&&M(w.emissiveMap.channel),metalnessMapUv:Ht&&M(w.metalnessMap.channel),roughnessMapUv:tn&&M(w.roughnessMap.channel),anisotropyMapUv:ae&&M(w.anisotropyMap.channel),clearcoatMapUv:he&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:qe&&M(w.sheenRoughnessMap.channel),specularMapUv:Ie&&M(w.specularMap.channel),specularColorMapUv:Ce&&M(w.specularColorMap.channel),specularIntensityMapUv:et&&M(w.specularIntensityMap.channel),transmissionMapUv:rt&&M(w.transmissionMap.channel),thicknessMapUv:ot&&M(w.thicknessMap.channel),alphaMapUv:Ae&&M(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(un||j),vertexNormals:!!Y.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(Jt||Ae),fog:!!te,useFog:w.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||Y.attributes.normal===void 0&&un===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Oe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Ue,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&F.length>0,shadowMapType:a.shadowMap.type,toneMapping:ve,decodeVideoTexture:Jt&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===Bt,decodeVideoTextureEmissive:sn&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===Bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===xi,flipSided:w.side===Kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Le&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&w.extensions.multiDraw===!0||it)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=h.has(1),Xe.vertexUv2s=h.has(2),Xe.vertexUv3s=h.has(3),h.clear(),Xe}function v(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)R.push(F),R.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(y(R,w),P(R,w),R.push(a.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function y(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function P(w,R){c.disableAll(),R.instancing&&c.enable(0),R.instancingColor&&c.enable(1),R.instancingMorph&&c.enable(2),R.matcap&&c.enable(3),R.envMap&&c.enable(4),R.normalMapObjectSpace&&c.enable(5),R.normalMapTangentSpace&&c.enable(6),R.clearcoat&&c.enable(7),R.iridescence&&c.enable(8),R.alphaTest&&c.enable(9),R.vertexColors&&c.enable(10),R.vertexAlphas&&c.enable(11),R.vertexUv1s&&c.enable(12),R.vertexUv2s&&c.enable(13),R.vertexUv3s&&c.enable(14),R.vertexTangents&&c.enable(15),R.anisotropy&&c.enable(16),R.alphaHash&&c.enable(17),R.batching&&c.enable(18),R.dispersion&&c.enable(19),R.batchingColor&&c.enable(20),R.gradientMap&&c.enable(21),R.packedNormalMap&&c.enable(22),R.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),R.numLightProbeGrids>0&&c.enable(22),R.hasPositionAttribute&&c.enable(23),w.push(c.mask)}function L(w){const R=_[w.type];let F;if(R){const B=er[R];F=Ya.clone(B.uniforms)}else F=w.uniforms;return F}function A(w,R){let F=p.get(R);return F!==void 0?++F.usedTimes:(F=new fw(a,R,w,s),f.push(F),p.set(R,F)),F}function D(w){if(--w.usedTimes===0){const R=f.indexOf(w);f[R]=f[f.length-1],f.pop(),p.delete(w.cacheKey),w.destroy()}}function I(w){u.remove(w)}function O(){u.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:L,acquireProgram:A,releaseProgram:D,releaseShaderCache:I,programs:f,dispose:O}}function _w(){let a=new WeakMap;function e(c){return a.has(c)}function t(c){let u=a.get(c);return u===void 0&&(u={},a.set(c,u)),u}function i(c){a.delete(c)}function s(c,u,h){a.get(c)[u]=h}function o(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function yw(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function fv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function pv(){const a=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function c(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function u(g,_,M,b,v,y){let P=a[e];return P===void 0?(P={id:g.id,object:g,geometry:_,material:M,materialVariant:c(g),groupOrder:b,renderOrder:g.renderOrder,z:v,group:y},a[e]=P):(P.id=g.id,P.object=g,P.geometry=_,P.material=M,P.materialVariant=c(g),P.groupOrder=b,P.renderOrder=g.renderOrder,P.z=v,P.group=y),e++,P}function h(g,_,M,b,v,y){const P=u(g,_,M,b,v,y);M.transmission>0?i.push(P):M.transparent===!0?s.push(P):t.push(P)}function f(g,_,M,b,v,y){const P=u(g,_,M,b,v,y);M.transmission>0?i.unshift(P):M.transparent===!0?s.unshift(P):t.unshift(P)}function p(g,_,M){t.length>1&&t.sort(g||yw),i.length>1&&i.sort(_||fv),s.length>1&&s.sort(_||fv),M&&(t.reverse(),i.reverse(),s.reverse())}function x(){for(let g=e,_=a.length;g<_;g++){const M=a[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:h,unshift:f,finish:x,sort:p}}function Sw(){let a=new WeakMap;function e(i,s){const o=a.get(i);let c;return o===void 0?(c=new pv,a.set(i,[c])):s>=o.length?(c=new pv,o.push(c)):c=o[s],c}function t(){a=new WeakMap}return{get:e,dispose:t}}function Mw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new We};break;case"SpotLight":t={position:new V,direction:new V,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new V,halfWidth:new V,halfHeight:new V};break}return a[e.id]=t,t}}}function Ew(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Tw=0;function ww(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function bw(a){const e=new Mw,t=Ew(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new V);const s=new V,o=new Vt,c=new Vt;function u(f){let p=0,x=0,g=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let _=0,M=0,b=0,v=0,y=0,P=0,L=0,A=0,D=0,I=0,O=0;f.sort(ww);for(let R=0,F=f.length;R<F;R++){const B=f[R],z=B.color,K=B.intensity,te=B.distance;let Y=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Fs?Y=B.shadow.map.texture:Y=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=z.r*K,x+=z.g*K,g+=z.b*K;else if(B.isLightProbe){for(let oe=0;oe<9;oe++)i.probe[oe].addScaledVector(B.sh.coefficients[oe],K);O++}else if(B.isDirectionalLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Z=B.shadow,$=t.get(B);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.directionalShadow[_]=$,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=B.shadow.matrix,P++}i.directional[_]=oe,_++}else if(B.isSpotLight){const oe=e.get(B);oe.position.setFromMatrixPosition(B.matrixWorld),oe.color.copy(z).multiplyScalar(K),oe.distance=te,oe.coneCos=Math.cos(B.angle),oe.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),oe.decay=B.decay,i.spot[b]=oe;const Z=B.shadow;if(B.map&&(i.spotLightMap[D]=B.map,D++,Z.updateMatrices(B),B.castShadow&&I++),i.spotLightMatrix[b]=Z.matrix,B.castShadow){const $=t.get(B);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.spotShadow[b]=$,i.spotShadowMap[b]=Y,A++}b++}else if(B.isRectAreaLight){const oe=e.get(B);oe.color.copy(z).multiplyScalar(K),oe.halfWidth.set(B.width*.5,0,0),oe.halfHeight.set(0,B.height*.5,0),i.rectArea[v]=oe,v++}else if(B.isPointLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),oe.distance=B.distance,oe.decay=B.decay,B.castShadow){const Z=B.shadow,$=t.get(B);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,i.pointShadow[M]=$,i.pointShadowMap[M]=Y,i.pointShadowMatrix[M]=B.shadow.matrix,L++}i.point[M]=oe,M++}else if(B.isHemisphereLight){const oe=e.get(B);oe.skyColor.copy(B.color).multiplyScalar(K),oe.groundColor.copy(B.groundColor).multiplyScalar(K),i.hemi[y]=oe,y++}}v>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=x,i.ambient[2]=g;const w=i.hash;(w.directionalLength!==_||w.pointLength!==M||w.spotLength!==b||w.rectAreaLength!==v||w.hemiLength!==y||w.numDirectionalShadows!==P||w.numPointShadows!==L||w.numSpotShadows!==A||w.numSpotMaps!==D||w.numLightProbes!==O)&&(i.directional.length=_,i.spot.length=b,i.rectArea.length=v,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=A+D-I,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=O,w.directionalLength=_,w.pointLength=M,w.spotLength=b,w.rectAreaLength=v,w.hemiLength=y,w.numDirectionalShadows=P,w.numPointShadows=L,w.numSpotShadows=A,w.numSpotMaps=D,w.numLightProbes=O,i.version=Tw++)}function h(f,p){let x=0,g=0,_=0,M=0,b=0;const v=p.matrixWorldInverse;for(let y=0,P=f.length;y<P;y++){const L=f[y];if(L.isDirectionalLight){const A=i.directional[x];A.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(v),x++}else if(L.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(v),A.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(v),_++}else if(L.isRectAreaLight){const A=i.rectArea[M];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(v),c.identity(),o.copy(L.matrixWorld),o.premultiply(v),c.extractRotation(o),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const A=i.point[g];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(v),g++}else if(L.isHemisphereLight){const A=i.hemi[b];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(v),b++}}}return{setup:u,setupView:h,state:i}}function mv(a){const e=new bw(a),t=[],i=[],s=[];function o(g){x.camera=g,t.length=0,i.length=0,s.length=0}function c(g){t.push(g)}function u(g){i.push(g)}function h(g){s.push(g)}function f(){e.setup(t)}function p(g){e.setupView(t,g)}const x={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:x,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:h}}function Aw(a){let e=new WeakMap;function t(s,o=0){const c=e.get(s);let u;return c===void 0?(u=new mv(a),e.set(s,[u])):o>=c.length?(u=new mv(a),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const Cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rw=`uniform sampler2D shadow_pass;
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
}`,Pw=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Nw=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],gv=new Vt,Wo=new V,Wh=new V;function Iw(a,e,t){let i=new _p;const s=new Je,o=new Je,c=new cn,u=new Qv,h=new GS,f={},p=t.maxTextureSize,x={[is]:Kn,[Kn]:is,[xi]:xi},g=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Cw,fragmentShader:Rw}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const M=new wt;M.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new lt(M,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let y=this.type;this.render=function(I,O,w){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;this.type===Py&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yc);const R=a.getRenderTarget(),F=a.getActiveCubeFace(),B=a.getActiveMipmapLevel(),z=a.state;z.setBlending(Xi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const K=y!==this.type;K&&O.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(Y=>Y.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,Y=I.length;te<Y;te++){const oe=I[te],Z=oe.shadow;if(Z===void 0){ct("WebGLShadowMap:",oe,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const $=Z.getFrameExtents();s.multiply($),o.copy(Z.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/$.x),s.x=o.x*$.x,Z.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/$.y),s.y=o.y*$.y,Z.mapSize.y=o.y));const se=a.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=se,Z.map===null||K===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===jo){if(oe.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Hn(s.x,s.y,{format:Fs,type:Zn,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),Z.map.texture.name=oe.name+".shadowMap",Z.map.depthTexture=new Ha(s.x,s.y,Hi),Z.map.depthTexture.name=oe.name+".shadowMapDepth",Z.map.depthTexture.format=wr,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=En,Z.map.depthTexture.magFilter=En}else oe.isPointLight?(Z.map=new ix(s.x),Z.map.depthTexture=new OS(s.x,rr)):(Z.map=new Hn(s.x,s.y),Z.map.depthTexture=new Ha(s.x,s.y,rr)),Z.map.depthTexture.name=oe.name+".shadowMap",Z.map.depthTexture.format=wr,this.type===Yc?(Z.map.depthTexture.compareFunction=se?pp:fp,Z.map.depthTexture.minFilter=Gn,Z.map.depthTexture.magFilter=Gn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=En,Z.map.depthTexture.magFilter=En);Z.camera.updateProjectionMatrix()}const de=Z.map.isWebGLCubeRenderTarget?6:1;for(let G=0;G<de;G++){if(Z.map.isWebGLCubeRenderTarget)a.setRenderTarget(Z.map,G),a.clear();else{G===0&&(a.setRenderTarget(Z.map),a.clear());const J=Z.getViewport(G);c.set(o.x*J.x,o.y*J.y,o.x*J.z,o.y*J.w),z.viewport(c)}if(oe.isPointLight){const J=Z.camera,Ue=Z.matrix,Ke=oe.distance||J.far;Ke!==J.far&&(J.far=Ke,J.updateProjectionMatrix()),Wo.setFromMatrixPosition(oe.matrixWorld),J.position.copy(Wo),Wh.copy(J.position),Wh.add(Pw[G]),J.up.copy(Nw[G]),J.lookAt(Wh),J.updateMatrixWorld(),Ue.makeTranslation(-Wo.x,-Wo.y,-Wo.z),gv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(gv,J.coordinateSystem,J.reversedDepth)}else Z.updateMatrices(oe);i=Z.getFrustum(),A(O,w,Z.camera,oe,this.type)}Z.isPointLightShadow!==!0&&this.type===jo&&P(Z,w),Z.needsUpdate=!1}y=this.type,v.needsUpdate=!1,a.setRenderTarget(R,F,B)};function P(I,O){const w=e.update(b);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Hn(s.x,s.y,{format:Fs,type:Zn})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,a.setRenderTarget(I.mapPass),a.clear(),a.renderBufferDirect(O,null,w,g,b,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,a.setRenderTarget(I.map),a.clear(),a.renderBufferDirect(O,null,w,_,b,null)}function L(I,O,w,R){let F=null;const B=w.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)F=B;else if(F=w.isPointLight===!0?h:u,a.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const z=F.uuid,K=O.uuid;let te=f[z];te===void 0&&(te={},f[z]=te);let Y=te[K];Y===void 0&&(Y=F.clone(),te[K]=Y,O.addEventListener("dispose",D)),F=Y}if(F.visible=O.visible,F.wireframe=O.wireframe,R===jo?F.side=O.shadowSide!==null?O.shadowSide:O.side:F.side=O.shadowSide!==null?O.shadowSide:x[O.side],F.alphaMap=O.alphaMap,F.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,F.map=O.map,F.clipShadows=O.clipShadows,F.clippingPlanes=O.clippingPlanes,F.clipIntersection=O.clipIntersection,F.displacementMap=O.displacementMap,F.displacementScale=O.displacementScale,F.displacementBias=O.displacementBias,F.wireframeLinewidth=O.wireframeLinewidth,F.linewidth=O.linewidth,w.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const z=a.properties.get(F);z.light=w}return F}function A(I,O,w,R,F){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&F===jo)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,I.matrixWorld);const K=e.update(I),te=I.material;if(Array.isArray(te)){const Y=K.groups;for(let oe=0,Z=Y.length;oe<Z;oe++){const $=Y[oe],se=te[$.materialIndex];if(se&&se.visible){const de=L(I,se,R,F);I.onBeforeShadow(a,I,O,w,K,de,$),a.renderBufferDirect(w,null,K,de,I,$),I.onAfterShadow(a,I,O,w,K,de,$)}}}else if(te.visible){const Y=L(I,te,R,F);I.onBeforeShadow(a,I,O,w,K,Y,null),a.renderBufferDirect(w,null,K,Y,I,null),I.onAfterShadow(a,I,O,w,K,Y,null)}}const z=I.children;for(let K=0,te=z.length;K<te;K++)A(z[K],O,w,R,F)}function D(I){I.target.removeEventListener("dispose",D);for(const w in f){const R=f[w],F=I.target.uuid;F in R&&(R[F].dispose(),delete R[F])}}}function Lw(a,e){function t(){let W=!1;const Ae=new cn;let pe=null;const Pe=new cn(0,0,0,0);return{setMask:function(Le){pe!==Le&&!W&&(a.colorMask(Le,Le,Le,Le),pe=Le)},setLocked:function(Le){W=Le},setClear:function(Le,ve,Xe,Ve,jt){jt===!0&&(Le*=Ve,ve*=Ve,Xe*=Ve),Ae.set(Le,ve,Xe,Ve),Pe.equals(Ae)===!1&&(a.clearColor(Le,ve,Xe,Ve),Pe.copy(Ae))},reset:function(){W=!1,pe=null,Pe.set(-1,0,0,0)}}}function i(){let W=!1,Ae=!1,pe=null,Pe=null,Le=null;return{setReversed:function(ve){if(Ae!==ve){const Xe=e.get("EXT_clip_control");ve?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const Ve=Le;Le=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(ve){ve?me(a.DEPTH_TEST):Oe(a.DEPTH_TEST)},setMask:function(ve){pe!==ve&&!W&&(a.depthMask(ve),pe=ve)},setFunc:function(ve){if(Ae&&(ve=uS[ve]),Pe!==ve){switch(ve){case nf:a.depthFunc(a.NEVER);break;case rf:a.depthFunc(a.ALWAYS);break;case sf:a.depthFunc(a.LESS);break;case za:a.depthFunc(a.LEQUAL);break;case af:a.depthFunc(a.EQUAL);break;case of:a.depthFunc(a.GEQUAL);break;case lf:a.depthFunc(a.GREATER);break;case cf:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Pe=ve}},setLocked:function(ve){W=ve},setClear:function(ve){Le!==ve&&(Le=ve,Ae&&(ve=1-ve),a.clearDepth(ve))},reset:function(){W=!1,pe=null,Pe=null,Le=null,Ae=!1}}}function s(){let W=!1,Ae=null,pe=null,Pe=null,Le=null,ve=null,Xe=null,Ve=null,jt=null;return{setTest:function(Ft){W||(Ft?me(a.STENCIL_TEST):Oe(a.STENCIL_TEST))},setMask:function(Ft){Ae!==Ft&&!W&&(a.stencilMask(Ft),Ae=Ft)},setFunc:function(Ft,Dn,yi){(pe!==Ft||Pe!==Dn||Le!==yi)&&(a.stencilFunc(Ft,Dn,yi),pe=Ft,Pe=Dn,Le=yi)},setOp:function(Ft,Dn,yi){(ve!==Ft||Xe!==Dn||Ve!==yi)&&(a.stencilOp(Ft,Dn,yi),ve=Ft,Xe=Dn,Ve=yi)},setLocked:function(Ft){W=Ft},setClear:function(Ft){jt!==Ft&&(a.clearStencil(Ft),jt=Ft)},reset:function(){W=!1,Ae=null,pe=null,Pe=null,Le=null,ve=null,Xe=null,Ve=null,jt=null}}}const o=new t,c=new i,u=new s,h=new WeakMap,f=new WeakMap;let p={},x={},g={},_=new WeakMap,M=[],b=null,v=!1,y=null,P=null,L=null,A=null,D=null,I=null,O=null,w=new We(0,0,0),R=0,F=!1,B=null,z=null,K=null,te=null,Y=null;const oe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,$=0;const se=a.getParameter(a.VERSION);se.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(se)[1]),Z=$>=1):se.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),Z=$>=2);let de=null,G={};const J=a.getParameter(a.SCISSOR_BOX),Ue=a.getParameter(a.VIEWPORT),Ke=new cn().fromArray(J),Ge=new cn().fromArray(Ue);function le(W,Ae,pe,Pe){const Le=new Uint8Array(4),ve=a.createTexture();a.bindTexture(W,ve),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Xe=0;Xe<pe;Xe++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Ae,0,a.RGBA,1,1,Pe,0,a.RGBA,a.UNSIGNED_BYTE,Le):a.texImage2D(Ae+Xe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Le);return ve}const xe={};xe[a.TEXTURE_2D]=le(a.TEXTURE_2D,a.TEXTURE_2D,1),xe[a.TEXTURE_CUBE_MAP]=le(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[a.TEXTURE_2D_ARRAY]=le(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),xe[a.TEXTURE_3D]=le(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),me(a.DEPTH_TEST),c.setFunc(za),en(!1),un(ug),me(a.CULL_FACE),Ct(Xi);function me(W){p[W]!==!0&&(a.enable(W),p[W]=!0)}function Oe(W){p[W]!==!1&&(a.disable(W),p[W]=!1)}function nt(W,Ae){return g[W]!==Ae?(a.bindFramebuffer(W,Ae),g[W]=Ae,W===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Ae),W===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Ae),!0):!1}function it(W,Ae){let pe=M,Pe=!1;if(W){pe=_.get(Ae),pe===void 0&&(pe=[],_.set(Ae,pe));const Le=W.textures;if(pe.length!==Le.length||pe[0]!==a.COLOR_ATTACHMENT0){for(let ve=0,Xe=Le.length;ve<Xe;ve++)pe[ve]=a.COLOR_ATTACHMENT0+ve;pe.length=Le.length,Pe=!0}}else pe[0]!==a.BACK&&(pe[0]=a.BACK,Pe=!0);Pe&&a.drawBuffers(pe)}function Jt(W){return b!==W?(a.useProgram(W),b=W,!0):!1}const pt={[Ns]:a.FUNC_ADD,[Iy]:a.FUNC_SUBTRACT,[Ly]:a.FUNC_REVERSE_SUBTRACT};pt[Dy]=a.MIN,pt[Uy]=a.MAX;const Ut={[Oy]:a.ZERO,[Fy]:a.ONE,[ky]:a.SRC_COLOR,[ef]:a.SRC_ALPHA,[Wy]:a.SRC_ALPHA_SATURATE,[Vy]:a.DST_COLOR,[zy]:a.DST_ALPHA,[By]:a.ONE_MINUS_SRC_COLOR,[tf]:a.ONE_MINUS_SRC_ALPHA,[Hy]:a.ONE_MINUS_DST_COLOR,[Gy]:a.ONE_MINUS_DST_ALPHA,[Xy]:a.CONSTANT_COLOR,[jy]:a.ONE_MINUS_CONSTANT_COLOR,[Yy]:a.CONSTANT_ALPHA,[qy]:a.ONE_MINUS_CONSTANT_ALPHA};function Ct(W,Ae,pe,Pe,Le,ve,Xe,Ve,jt,Ft){if(W===Xi){v===!0&&(Oe(a.BLEND),v=!1);return}if(v===!1&&(me(a.BLEND),v=!0),W!==Ny){if(W!==y||Ft!==F){if((P!==Ns||D!==Ns)&&(a.blendEquation(a.FUNC_ADD),P=Ns,D=Ns),Ft)switch(W){case Oa:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case zt:a.blendFunc(a.ONE,a.ONE);break;case dg:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case hg:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Nt("WebGLState: Invalid blending: ",W);break}else switch(W){case Oa:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case zt:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case dg:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hg:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",W);break}L=null,A=null,I=null,O=null,w.set(0,0,0),R=0,y=W,F=Ft}return}Le=Le||Ae,ve=ve||pe,Xe=Xe||Pe,(Ae!==P||Le!==D)&&(a.blendEquationSeparate(pt[Ae],pt[Le]),P=Ae,D=Le),(pe!==L||Pe!==A||ve!==I||Xe!==O)&&(a.blendFuncSeparate(Ut[pe],Ut[Pe],Ut[ve],Ut[Xe]),L=pe,A=Pe,I=ve,O=Xe),(Ve.equals(w)===!1||jt!==R)&&(a.blendColor(Ve.r,Ve.g,Ve.b,jt),w.copy(Ve),R=jt),y=W,F=!1}function Et(W,Ae){W.side===xi?Oe(a.CULL_FACE):me(a.CULL_FACE);let pe=W.side===Kn;Ae&&(pe=!pe),en(pe),W.blending===Oa&&W.transparent===!1?Ct(Xi):Ct(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),o.setMask(W.colorWrite);const Pe=W.stencilWrite;u.setTest(Pe),Pe&&(u.setMask(W.stencilWriteMask),u.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),u.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),sn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?me(a.SAMPLE_ALPHA_TO_COVERAGE):Oe(a.SAMPLE_ALPHA_TO_COVERAGE)}function en(W){B!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),B=W)}function un(W){W!==Cy?(me(a.CULL_FACE),W!==z&&(W===ug?a.cullFace(a.BACK):W===Ry?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Oe(a.CULL_FACE),z=W}function dn(W){W!==K&&(Z&&a.lineWidth(W),K=W)}function sn(W,Ae,pe){W?(me(a.POLYGON_OFFSET_FILL),(te!==Ae||Y!==pe)&&(te=Ae,Y=pe,c.getReversed()&&(Ae=-Ae),a.polygonOffset(Ae,pe))):Oe(a.POLYGON_OFFSET_FILL)}function Ht(W){W?me(a.SCISSOR_TEST):Oe(a.SCISSOR_TEST)}function tn(W){W===void 0&&(W=a.TEXTURE0+oe-1),de!==W&&(a.activeTexture(W),de=W)}function j(W,Ae,pe){pe===void 0&&(de===null?pe=a.TEXTURE0+oe-1:pe=de);let Pe=G[pe];Pe===void 0&&(Pe={type:void 0,texture:void 0},G[pe]=Pe),(Pe.type!==W||Pe.texture!==Ae)&&(de!==pe&&(a.activeTexture(pe),de=pe),a.bindTexture(W,Ae||xe[W]),Pe.type=W,Pe.texture=Ae)}function Pn(){const W=G[de];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Lt(){try{a.compressedTexImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function U(){try{a.compressedTexImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function T(){try{a.texSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Q(){try{a.texSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function ae(){try{a.compressedTexSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function he(){try{a.compressedTexSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Ee(){try{a.texStorage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Re(){try{a.texStorage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function fe(){try{a.texImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function ge(){try{a.texImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Ne(W){return x[W]!==void 0?x[W]:a.getParameter(W)}function qe(W,Ae){x[W]!==Ae&&(a.pixelStorei(W,Ae),x[W]=Ae)}function Ie(W){Ke.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),Ke.copy(W))}function Ce(W){Ge.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),Ge.copy(W))}function et(W,Ae){let pe=f.get(Ae);pe===void 0&&(pe=new WeakMap,f.set(Ae,pe));let Pe=pe.get(W);Pe===void 0&&(Pe=a.getUniformBlockIndex(Ae,W.name),pe.set(W,Pe))}function rt(W,Ae){const Pe=f.get(Ae).get(W);h.get(Ae)!==Pe&&(a.uniformBlockBinding(Ae,Pe,W.__bindingPointIndex),h.set(Ae,Pe))}function ot(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),p={},x={},de=null,G={},g={},_=new WeakMap,M=[],b=null,v=!1,y=null,P=null,L=null,A=null,D=null,I=null,O=null,w=new We(0,0,0),R=0,F=!1,B=null,z=null,K=null,te=null,Y=null,Ke.set(0,0,a.canvas.width,a.canvas.height),Ge.set(0,0,a.canvas.width,a.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:me,disable:Oe,bindFramebuffer:nt,drawBuffers:it,useProgram:Jt,setBlending:Ct,setMaterial:Et,setFlipSided:en,setCullFace:un,setLineWidth:dn,setPolygonOffset:sn,setScissorTest:Ht,activeTexture:tn,bindTexture:j,unbindTexture:Pn,compressedTexImage2D:Lt,compressedTexImage3D:U,texImage2D:fe,texImage3D:ge,pixelStorei:qe,getParameter:Ne,updateUBOMapping:et,uniformBlockBinding:rt,texStorage2D:Ee,texStorage3D:Re,texSubImage2D:T,texSubImage3D:Q,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Ie,viewport:Ce,reset:ot}}function Dw(a,e,t,i,s,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Je,p=new WeakMap,x=new Set;let g;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):lu("canvas")}function v(U,T,Q){let ae=1;const he=Lt(U);if((he.width>Q||he.height>Q)&&(ae=Q/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ee=Math.floor(ae*he.width),Re=Math.floor(ae*he.height);g===void 0&&(g=b(Ee,Re));const fe=T?b(Ee,Re):g;return fe.width=Ee,fe.height=Re,fe.getContext("2d").drawImage(U,0,0,Ee,Re),ct("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+Re+")."),fe}else return"data"in U&&ct("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function y(U){return U.generateMipmaps}function P(U){a.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function A(U,T,Q,ae,he,Ee=!1){if(U!==null){if(a[U]!==void 0)return a[U];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Re;ae&&(Re=e.get("EXT_texture_norm16"),Re||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=T;if(T===a.RED&&(Q===a.FLOAT&&(fe=a.R32F),Q===a.HALF_FLOAT&&(fe=a.R16F),Q===a.UNSIGNED_BYTE&&(fe=a.R8),Q===a.UNSIGNED_SHORT&&Re&&(fe=Re.R16_EXT),Q===a.SHORT&&Re&&(fe=Re.R16_SNORM_EXT)),T===a.RED_INTEGER&&(Q===a.UNSIGNED_BYTE&&(fe=a.R8UI),Q===a.UNSIGNED_SHORT&&(fe=a.R16UI),Q===a.UNSIGNED_INT&&(fe=a.R32UI),Q===a.BYTE&&(fe=a.R8I),Q===a.SHORT&&(fe=a.R16I),Q===a.INT&&(fe=a.R32I)),T===a.RG&&(Q===a.FLOAT&&(fe=a.RG32F),Q===a.HALF_FLOAT&&(fe=a.RG16F),Q===a.UNSIGNED_BYTE&&(fe=a.RG8),Q===a.UNSIGNED_SHORT&&Re&&(fe=Re.RG16_EXT),Q===a.SHORT&&Re&&(fe=Re.RG16_SNORM_EXT)),T===a.RG_INTEGER&&(Q===a.UNSIGNED_BYTE&&(fe=a.RG8UI),Q===a.UNSIGNED_SHORT&&(fe=a.RG16UI),Q===a.UNSIGNED_INT&&(fe=a.RG32UI),Q===a.BYTE&&(fe=a.RG8I),Q===a.SHORT&&(fe=a.RG16I),Q===a.INT&&(fe=a.RG32I)),T===a.RGB_INTEGER&&(Q===a.UNSIGNED_BYTE&&(fe=a.RGB8UI),Q===a.UNSIGNED_SHORT&&(fe=a.RGB16UI),Q===a.UNSIGNED_INT&&(fe=a.RGB32UI),Q===a.BYTE&&(fe=a.RGB8I),Q===a.SHORT&&(fe=a.RGB16I),Q===a.INT&&(fe=a.RGB32I)),T===a.RGBA_INTEGER&&(Q===a.UNSIGNED_BYTE&&(fe=a.RGBA8UI),Q===a.UNSIGNED_SHORT&&(fe=a.RGBA16UI),Q===a.UNSIGNED_INT&&(fe=a.RGBA32UI),Q===a.BYTE&&(fe=a.RGBA8I),Q===a.SHORT&&(fe=a.RGBA16I),Q===a.INT&&(fe=a.RGBA32I)),T===a.RGB&&(Q===a.UNSIGNED_SHORT&&Re&&(fe=Re.RGB16_EXT),Q===a.SHORT&&Re&&(fe=Re.RGB16_SNORM_EXT),Q===a.UNSIGNED_INT_5_9_9_9_REV&&(fe=a.RGB9_E5),Q===a.UNSIGNED_INT_10F_11F_11F_REV&&(fe=a.R11F_G11F_B10F)),T===a.RGBA){const ge=Ee?ou:Tt.getTransfer(he);Q===a.FLOAT&&(fe=a.RGBA32F),Q===a.HALF_FLOAT&&(fe=a.RGBA16F),Q===a.UNSIGNED_BYTE&&(fe=ge===Bt?a.SRGB8_ALPHA8:a.RGBA8),Q===a.UNSIGNED_SHORT&&Re&&(fe=Re.RGBA16_EXT),Q===a.SHORT&&Re&&(fe=Re.RGBA16_SNORM_EXT),Q===a.UNSIGNED_SHORT_4_4_4_4&&(fe=a.RGBA4),Q===a.UNSIGNED_SHORT_5_5_5_1&&(fe=a.RGB5_A1)}return(fe===a.R16F||fe===a.R32F||fe===a.RG16F||fe===a.RG32F||fe===a.RGBA16F||fe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function D(U,T){let Q;return U?T===null||T===rr||T===Qo?Q=a.DEPTH24_STENCIL8:T===Hi?Q=a.DEPTH32F_STENCIL8:T===Zo&&(Q=a.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===rr||T===Qo?Q=a.DEPTH_COMPONENT24:T===Hi?Q=a.DEPTH_COMPONENT32F:T===Zo&&(Q=a.DEPTH_COMPONENT16),Q}function I(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==En&&U.minFilter!==Gn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function O(U){const T=U.target;T.removeEventListener("dispose",O),R(T),T.isVideoTexture&&p.delete(T),T.isHTMLTexture&&x.delete(T)}function w(U){const T=U.target;T.removeEventListener("dispose",w),B(T)}function R(U){const T=i.get(U);if(T.__webglInit===void 0)return;const Q=U.source,ae=_.get(Q);if(ae){const he=ae[T.__cacheKey];he.usedTimes--,he.usedTimes===0&&F(U),Object.keys(ae).length===0&&_.delete(Q)}i.remove(U)}function F(U){const T=i.get(U);a.deleteTexture(T.__webglTexture);const Q=U.source,ae=_.get(Q);delete ae[T.__cacheKey],c.memory.textures--}function B(U){const T=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(T.__webglFramebuffer[ae]))for(let he=0;he<T.__webglFramebuffer[ae].length;he++)a.deleteFramebuffer(T.__webglFramebuffer[ae][he]);else a.deleteFramebuffer(T.__webglFramebuffer[ae]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[ae])}else{if(Array.isArray(T.__webglFramebuffer))for(let ae=0;ae<T.__webglFramebuffer.length;ae++)a.deleteFramebuffer(T.__webglFramebuffer[ae]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ae=0;ae<T.__webglColorRenderbuffer.length;ae++)T.__webglColorRenderbuffer[ae]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[ae]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=U.textures;for(let ae=0,he=Q.length;ae<he;ae++){const Ee=i.get(Q[ae]);Ee.__webglTexture&&(a.deleteTexture(Ee.__webglTexture),c.memory.textures--),i.remove(Q[ae])}i.remove(U)}let z=0;function K(){z=0}function te(){return z}function Y(U){z=U}function oe(){const U=z;return U>=s.maxTextures&&ct("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),z+=1,U}function Z(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function $(U,T){const Q=i.get(U);if(U.isVideoTexture&&j(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const ae=U.image;if(ae===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(Q,U,T);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,Q.__webglTexture,a.TEXTURE0+T)}function se(U,T){const Q=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Oe(Q,U,T);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,Q.__webglTexture,a.TEXTURE0+T)}function de(U,T){const Q=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Oe(Q,U,T);return}t.bindTexture(a.TEXTURE_3D,Q.__webglTexture,a.TEXTURE0+T)}function G(U,T){const Q=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Q.__version!==U.version){nt(Q,U,T);return}t.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture,a.TEXTURE0+T)}const J={[uf]:a.REPEAT,[Er]:a.CLAMP_TO_EDGE,[df]:a.MIRRORED_REPEAT},Ue={[En]:a.NEAREST,[Zy]:a.NEAREST_MIPMAP_NEAREST,[oc]:a.NEAREST_MIPMAP_LINEAR,[Gn]:a.LINEAR,[dh]:a.LINEAR_MIPMAP_NEAREST,[Ls]:a.LINEAR_MIPMAP_LINEAR},Ke={[tS]:a.NEVER,[aS]:a.ALWAYS,[nS]:a.LESS,[fp]:a.LEQUAL,[iS]:a.EQUAL,[pp]:a.GEQUAL,[rS]:a.GREATER,[sS]:a.NOTEQUAL};function Ge(U,T){if(T.type===Hi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Gn||T.magFilter===dh||T.magFilter===oc||T.magFilter===Ls||T.minFilter===Gn||T.minFilter===dh||T.minFilter===oc||T.minFilter===Ls)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,J[T.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,J[T.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,J[T.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,Ue[T.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,Ue[T.minFilter]),T.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,Ke[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===En||T.minFilter!==oc&&T.minFilter!==Ls||T.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function le(U,T){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",O));const ae=T.source;let he=_.get(ae);he===void 0&&(he={},_.set(ae,he));const Ee=Z(T);if(Ee!==U.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),he[Ee].usedTimes++;const Re=he[U.__cacheKey];Re!==void 0&&(he[U.__cacheKey].usedTimes--,Re.usedTimes===0&&F(T)),U.__cacheKey=Ee,U.__webglTexture=he[Ee].texture}return Q}function xe(U,T,Q){return Math.floor(Math.floor(U/Q)/T)}function me(U,T,Q,ae){const Ee=U.updateRanges;if(Ee.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,Q,ae,T.data);else{Ee.sort((qe,Ie)=>qe.start-Ie.start);let Re=0;for(let qe=1;qe<Ee.length;qe++){const Ie=Ee[Re],Ce=Ee[qe],et=Ie.start+Ie.count,rt=xe(Ce.start,T.width,4),ot=xe(Ie.start,T.width,4);Ce.start<=et+1&&rt===ot&&xe(Ce.start+Ce.count-1,T.width,4)===rt?Ie.count=Math.max(Ie.count,Ce.start+Ce.count-Ie.start):(++Re,Ee[Re]=Ce)}Ee.length=Re+1;const fe=t.getParameter(a.UNPACK_ROW_LENGTH),ge=t.getParameter(a.UNPACK_SKIP_PIXELS),Ne=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let qe=0,Ie=Ee.length;qe<Ie;qe++){const Ce=Ee[qe],et=Math.floor(Ce.start/4),rt=Math.ceil(Ce.count/4),ot=et%T.width,W=Math.floor(et/T.width),Ae=rt,pe=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(a.UNPACK_SKIP_ROWS,W),t.texSubImage2D(a.TEXTURE_2D,0,ot,W,Ae,pe,Q,ae,T.data)}U.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,fe),t.pixelStorei(a.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(a.UNPACK_SKIP_ROWS,Ne)}}function Oe(U,T,Q){let ae=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ae=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ae=a.TEXTURE_3D);const he=le(U,T),Ee=T.source;t.bindTexture(ae,U.__webglTexture,a.TEXTURE0+Q);const Re=i.get(Ee);if(Ee.version!==Re.__version||he===!0){if(t.activeTexture(a.TEXTURE0+Q),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const pe=Tt.getPrimaries(Tt.workingColorSpace),Pe=T.colorSpace===Jr?null:Tt.getPrimaries(T.colorSpace),Le=T.colorSpace===Jr||pe===Pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment);let ge=v(T.image,!1,s.maxTextureSize);ge=Pn(T,ge);const Ne=o.convert(T.format,T.colorSpace),qe=o.convert(T.type);let Ie=A(T.internalFormat,Ne,qe,T.normalized,T.colorSpace,T.isVideoTexture);Ge(ae,T);let Ce;const et=T.mipmaps,rt=T.isVideoTexture!==!0,ot=Re.__version===void 0||he===!0,W=Ee.dataReady,Ae=I(T,ge);if(T.isDepthTexture)Ie=D(T.format===Ds,T.type),ot&&(rt?t.texStorage2D(a.TEXTURE_2D,1,Ie,ge.width,ge.height):t.texImage2D(a.TEXTURE_2D,0,Ie,ge.width,ge.height,0,Ne,qe,null));else if(T.isDataTexture)if(et.length>0){rt&&ot&&t.texStorage2D(a.TEXTURE_2D,Ae,Ie,et[0].width,et[0].height);for(let pe=0,Pe=et.length;pe<Pe;pe++)Ce=et[pe],rt?W&&t.texSubImage2D(a.TEXTURE_2D,pe,0,0,Ce.width,Ce.height,Ne,qe,Ce.data):t.texImage2D(a.TEXTURE_2D,pe,Ie,Ce.width,Ce.height,0,Ne,qe,Ce.data);T.generateMipmaps=!1}else rt?(ot&&t.texStorage2D(a.TEXTURE_2D,Ae,Ie,ge.width,ge.height),W&&me(T,ge,Ne,qe)):t.texImage2D(a.TEXTURE_2D,0,Ie,ge.width,ge.height,0,Ne,qe,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&ot&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,Ie,et[0].width,et[0].height,ge.depth);for(let pe=0,Pe=et.length;pe<Pe;pe++)if(Ce=et[pe],T.format!==Wi)if(Ne!==null)if(rt){if(W)if(T.layerUpdates.size>0){const Le=qg(Ce.width,Ce.height,T.format,T.type);for(const ve of T.layerUpdates){const Xe=Ce.data.subarray(ve*Le/Ce.data.BYTES_PER_ELEMENT,(ve+1)*Le/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,pe,0,0,ve,Ce.width,Ce.height,1,Ne,Xe)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,pe,0,0,0,Ce.width,Ce.height,ge.depth,Ne,Ce.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,pe,Ie,Ce.width,Ce.height,ge.depth,0,Ce.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?W&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,pe,0,0,0,Ce.width,Ce.height,ge.depth,Ne,qe,Ce.data):t.texImage3D(a.TEXTURE_2D_ARRAY,pe,Ie,Ce.width,Ce.height,ge.depth,0,Ne,qe,Ce.data)}else{rt&&ot&&t.texStorage2D(a.TEXTURE_2D,Ae,Ie,et[0].width,et[0].height);for(let pe=0,Pe=et.length;pe<Pe;pe++)Ce=et[pe],T.format!==Wi?Ne!==null?rt?W&&t.compressedTexSubImage2D(a.TEXTURE_2D,pe,0,0,Ce.width,Ce.height,Ne,Ce.data):t.compressedTexImage2D(a.TEXTURE_2D,pe,Ie,Ce.width,Ce.height,0,Ce.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?W&&t.texSubImage2D(a.TEXTURE_2D,pe,0,0,Ce.width,Ce.height,Ne,qe,Ce.data):t.texImage2D(a.TEXTURE_2D,pe,Ie,Ce.width,Ce.height,0,Ne,qe,Ce.data)}else if(T.isDataArrayTexture)if(rt){if(ot&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,Ie,ge.width,ge.height,ge.depth),W)if(T.layerUpdates.size>0){const pe=qg(ge.width,ge.height,T.format,T.type);for(const Pe of T.layerUpdates){const Le=ge.data.subarray(Pe*pe/ge.data.BYTES_PER_ELEMENT,(Pe+1)*pe/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Pe,ge.width,ge.height,1,Ne,qe,Le)}T.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ne,qe,ge.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ie,ge.width,ge.height,ge.depth,0,Ne,qe,ge.data);else if(T.isData3DTexture)rt?(ot&&t.texStorage3D(a.TEXTURE_3D,Ae,Ie,ge.width,ge.height,ge.depth),W&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ne,qe,ge.data)):t.texImage3D(a.TEXTURE_3D,0,Ie,ge.width,ge.height,ge.depth,0,Ne,qe,ge.data);else if(T.isFramebufferTexture){if(ot)if(rt)t.texStorage2D(a.TEXTURE_2D,Ae,Ie,ge.width,ge.height);else{let pe=ge.width,Pe=ge.height;for(let Le=0;Le<Ae;Le++)t.texImage2D(a.TEXTURE_2D,Le,Ie,pe,Pe,0,Ne,qe,null),pe>>=1,Pe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in a){const pe=a.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ge.parentNode!==pe){pe.appendChild(ge),x.add(T),pe.onpaint=Pe=>{const Le=Pe.changedElements;for(const ve of x)Le.includes(ve.image)&&(ve.needsUpdate=!0)},pe.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ge);else{const Le=a.RGBA,ve=a.RGBA,Xe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Le,ve,Xe,ge)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(et.length>0){if(rt&&ot){const pe=Lt(et[0]);t.texStorage2D(a.TEXTURE_2D,Ae,Ie,pe.width,pe.height)}for(let pe=0,Pe=et.length;pe<Pe;pe++)Ce=et[pe],rt?W&&t.texSubImage2D(a.TEXTURE_2D,pe,0,0,Ne,qe,Ce):t.texImage2D(a.TEXTURE_2D,pe,Ie,Ne,qe,Ce);T.generateMipmaps=!1}else if(rt){if(ot){const pe=Lt(ge);t.texStorage2D(a.TEXTURE_2D,Ae,Ie,pe.width,pe.height)}W&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ne,qe,ge)}else t.texImage2D(a.TEXTURE_2D,0,Ie,Ne,qe,ge);y(T)&&P(ae),Re.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function nt(U,T,Q){if(T.image.length!==6)return;const ae=le(U,T),he=T.source;t.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+Q);const Ee=i.get(he);if(he.version!==Ee.__version||ae===!0){t.activeTexture(a.TEXTURE0+Q);const Re=Tt.getPrimaries(Tt.workingColorSpace),fe=T.colorSpace===Jr?null:Tt.getPrimaries(T.colorSpace),ge=T.colorSpace===Jr||Re===fe?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,qe=T.image[0]&&T.image[0].isDataTexture,Ie=[];for(let ve=0;ve<6;ve++)!Ne&&!qe?Ie[ve]=v(T.image[ve],!0,s.maxCubemapSize):Ie[ve]=qe?T.image[ve].image:T.image[ve],Ie[ve]=Pn(T,Ie[ve]);const Ce=Ie[0],et=o.convert(T.format,T.colorSpace),rt=o.convert(T.type),ot=A(T.internalFormat,et,rt,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,Ae=Ee.__version===void 0||ae===!0,pe=he.dataReady;let Pe=I(T,Ce);Ge(a.TEXTURE_CUBE_MAP,T);let Le;if(Ne){W&&Ae&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,ot,Ce.width,Ce.height);for(let ve=0;ve<6;ve++){Le=Ie[ve].mipmaps;for(let Xe=0;Xe<Le.length;Xe++){const Ve=Le[Xe];T.format!==Wi?et!==null?W?pe&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,0,0,Ve.width,Ve.height,et,Ve.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,ot,Ve.width,Ve.height,0,Ve.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,0,0,Ve.width,Ve.height,et,rt,Ve.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,ot,Ve.width,Ve.height,0,et,rt,Ve.data)}}}else{if(Le=T.mipmaps,W&&Ae){Le.length>0&&Pe++;const ve=Lt(Ie[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,ot,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(qe){W?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie[ve].width,Ie[ve].height,et,rt,Ie[ve].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,Ie[ve].width,Ie[ve].height,0,et,rt,Ie[ve].data);for(let Xe=0;Xe<Le.length;Xe++){const jt=Le[Xe].image[ve].image;W?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,0,0,jt.width,jt.height,et,rt,jt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,ot,jt.width,jt.height,0,et,rt,jt.data)}}else{W?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,et,rt,Ie[ve]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,et,rt,Ie[ve]);for(let Xe=0;Xe<Le.length;Xe++){const Ve=Le[Xe];W?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,0,0,et,rt,Ve.image[ve]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,ot,et,rt,Ve.image[ve])}}}y(T)&&P(a.TEXTURE_CUBE_MAP),Ee.__version=he.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function it(U,T,Q,ae,he,Ee){const Re=o.convert(Q.format,Q.colorSpace),fe=o.convert(Q.type),ge=A(Q.internalFormat,Re,fe,Q.normalized,Q.colorSpace),Ne=i.get(T),qe=i.get(Q);if(qe.__renderTarget=T,!Ne.__hasExternalTextures){const Ie=Math.max(1,T.width>>Ee),Ce=Math.max(1,T.height>>Ee);he===a.TEXTURE_3D||he===a.TEXTURE_2D_ARRAY?t.texImage3D(he,Ee,ge,Ie,Ce,T.depth,0,Re,fe,null):t.texImage2D(he,Ee,ge,Ie,Ce,0,Re,fe,null)}t.bindFramebuffer(a.FRAMEBUFFER,U),tn(T)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ae,he,qe.__webglTexture,0,Ht(T)):(he===a.TEXTURE_2D||he>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ae,he,qe.__webglTexture,Ee),t.bindFramebuffer(a.FRAMEBUFFER,null)}function Jt(U,T,Q){if(a.bindRenderbuffer(a.RENDERBUFFER,U),T.depthBuffer){const ae=T.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,Ee=D(T.stencilBuffer,he),Re=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;tn(T)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ht(T),Ee,T.width,T.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ht(T),Ee,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Ee,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Re,a.RENDERBUFFER,U)}else{const ae=T.textures;for(let he=0;he<ae.length;he++){const Ee=ae[he],Re=o.convert(Ee.format,Ee.colorSpace),fe=o.convert(Ee.type),ge=A(Ee.internalFormat,Re,fe,Ee.normalized,Ee.colorSpace);tn(T)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ht(T),ge,T.width,T.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ht(T),ge,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,ge,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function pt(U,T,Q){const ae=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(T.depthTexture);if(he.__renderTarget=T,(!he.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,T.depthTexture.addEventListener("dispose",O)),he.__webglTexture===void 0){he.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),Ge(a.TEXTURE_CUBE_MAP,T.depthTexture);const Ne=o.convert(T.depthTexture.format),qe=o.convert(T.depthTexture.type);let Ie;T.depthTexture.format===wr?Ie=a.DEPTH_COMPONENT24:T.depthTexture.format===Ds&&(Ie=a.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ie,T.width,T.height,0,Ne,qe,null)}}else $(T.depthTexture,0);const Ee=he.__webglTexture,Re=Ht(T),fe=ae?a.TEXTURE_CUBE_MAP_POSITIVE_X+Q:a.TEXTURE_2D,ge=T.depthTexture.format===Ds?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(T.depthTexture.format===wr)tn(T)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,fe,Ee,0,Re):a.framebufferTexture2D(a.FRAMEBUFFER,ge,fe,Ee,0);else if(T.depthTexture.format===Ds)tn(T)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,fe,Ee,0,Re):a.framebufferTexture2D(a.FRAMEBUFFER,ge,fe,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ut(U){const T=i.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ae=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ae){const he=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),T.__depthDisposeCallback=he}T.__boundDepthTexture=ae}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(Q)for(let ae=0;ae<6;ae++)pt(T.__webglFramebuffer[ae],U,ae);else{const ae=U.texture.mipmaps;ae&&ae.length>0?pt(T.__webglFramebuffer[0],U,0):pt(T.__webglFramebuffer,U,0)}else if(Q){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]===void 0)T.__webglDepthbuffer[ae]=a.createRenderbuffer(),Jt(T.__webglDepthbuffer[ae],U,!1);else{const he=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ee=T.__webglDepthbuffer[ae];a.bindRenderbuffer(a.RENDERBUFFER,Ee),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Ee)}}else{const ae=U.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),Jt(T.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ee=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ee),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Ee)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ct(U,T,Q){const ae=i.get(U);T!==void 0&&it(ae.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Q!==void 0&&Ut(U)}function Et(U){const T=U.texture,Q=i.get(U),ae=i.get(T);U.addEventListener("dispose",w);const he=U.textures,Ee=U.isWebGLCubeRenderTarget===!0,Re=he.length>1;if(Re||(ae.__webglTexture===void 0&&(ae.__webglTexture=a.createTexture()),ae.__version=T.version,c.memory.textures++),Ee){Q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[fe]=[];for(let ge=0;ge<T.mipmaps.length;ge++)Q.__webglFramebuffer[fe][ge]=a.createFramebuffer()}else Q.__webglFramebuffer[fe]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)Q.__webglFramebuffer[fe]=a.createFramebuffer()}else Q.__webglFramebuffer=a.createFramebuffer();if(Re)for(let fe=0,ge=he.length;fe<ge;fe++){const Ne=i.get(he[fe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=a.createTexture(),c.memory.textures++)}if(U.samples>0&&tn(U)===!1){Q.__webglMultisampledFramebuffer=a.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let fe=0;fe<he.length;fe++){const ge=he[fe];Q.__webglColorRenderbuffer[fe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]);const Ne=o.convert(ge.format,ge.colorSpace),qe=o.convert(ge.type),Ie=A(ge.internalFormat,Ne,qe,ge.normalized,ge.colorSpace,U.isXRRenderTarget===!0),Ce=Ht(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ce,Ie,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.RENDERBUFFER,Q.__webglColorRenderbuffer[fe])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=a.createRenderbuffer(),Jt(Q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(a.TEXTURE_CUBE_MAP,ae.__webglTexture),Ge(a.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)it(Q.__webglFramebuffer[fe][ge],U,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else it(Q.__webglFramebuffer[fe],U,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);y(T)&&P(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let fe=0,ge=he.length;fe<ge;fe++){const Ne=he[fe],qe=i.get(Ne);let Ie=a.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ie=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Ie,qe.__webglTexture),Ge(Ie,Ne),it(Q.__webglFramebuffer,U,Ne,a.COLOR_ATTACHMENT0+fe,Ie,0),y(Ne)&&P(Ie)}t.unbindTexture()}else{let fe=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(fe,ae.__webglTexture),Ge(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)it(Q.__webglFramebuffer[ge],U,T,a.COLOR_ATTACHMENT0,fe,ge);else it(Q.__webglFramebuffer,U,T,a.COLOR_ATTACHMENT0,fe,0);y(T)&&P(fe),t.unbindTexture()}U.depthBuffer&&Ut(U)}function en(U){const T=U.textures;for(let Q=0,ae=T.length;Q<ae;Q++){const he=T[Q];if(y(he)){const Ee=L(U),Re=i.get(he).__webglTexture;t.bindTexture(Ee,Re),P(Ee),t.unbindTexture()}}}const un=[],dn=[];function sn(U){if(U.samples>0){if(tn(U)===!1){const T=U.textures,Q=U.width,ae=U.height;let he=a.COLOR_BUFFER_BIT;const Ee=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=i.get(U),fe=T.length>1;if(fe)for(let Ne=0;Ne<T.length;Ne++)t.bindFramebuffer(a.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Re.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ge=U.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=a.STENCIL_BUFFER_BIT)),fe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Re.__webglColorRenderbuffer[Ne]);const qe=i.get(T[Ne]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,qe,0)}a.blitFramebuffer(0,0,Q,ae,0,0,Q,ae,he,a.NEAREST),h===!0&&(un.length=0,dn.length=0,un.push(a.COLOR_ATTACHMENT0+Ne),U.depthBuffer&&U.resolveDepthBuffer===!1&&(un.push(Ee),dn.push(Ee),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,dn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,un))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),fe)for(let Ne=0;Ne<T.length;Ne++){t.bindFramebuffer(a.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,Re.__webglColorRenderbuffer[Ne]);const qe=i.get(T[Ne]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Re.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.TEXTURE_2D,qe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const T=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function Ht(U){return Math.min(s.maxSamples,U.samples)}function tn(U){const T=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function j(U){const T=c.render.frame;p.get(U)!==T&&(p.set(U,T),U.update())}function Pn(U,T){const Q=U.colorSpace,ae=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==au&&Q!==Jr&&(Tt.getTransfer(Q)===Bt?(ae!==Wi||he!==_i)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",Q)),T}function Lt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=oe,this.resetTextureUnits=K,this.getTextureUnits=te,this.setTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=se,this.setTexture3D=de,this.setTextureCube=G,this.rebindTextures=Ct,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=it,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Uw(a,e){function t(i,s=Jr){let o;const c=Tt.getTransfer(s);if(i===_i)return a.UNSIGNED_BYTE;if(i===op)return a.UNSIGNED_SHORT_4_4_4_4;if(i===lp)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Lv)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Dv)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nv)return a.BYTE;if(i===Iv)return a.SHORT;if(i===Zo)return a.UNSIGNED_SHORT;if(i===ap)return a.INT;if(i===rr)return a.UNSIGNED_INT;if(i===Hi)return a.FLOAT;if(i===Zn)return a.HALF_FLOAT;if(i===Uv)return a.ALPHA;if(i===Ov)return a.RGB;if(i===Wi)return a.RGBA;if(i===wr)return a.DEPTH_COMPONENT;if(i===Ds)return a.DEPTH_STENCIL;if(i===cp)return a.RED;if(i===up)return a.RED_INTEGER;if(i===Fs)return a.RG;if(i===dp)return a.RG_INTEGER;if(i===hp)return a.RGBA_INTEGER;if(i===qc||i===$c||i===Kc||i===Zc)if(c===Bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===qc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===qc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$c)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hf||i===ff||i===pf||i===mf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===hf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ff)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gf||i===vf||i===xf||i===_f||i===yf||i===iu||i===Sf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===gf||i===vf)return c===Bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===xf)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===_f)return o.COMPRESSED_R11_EAC;if(i===yf)return o.COMPRESSED_SIGNED_R11_EAC;if(i===iu)return o.COMPRESSED_RG11_EAC;if(i===Sf)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mf||i===Ef||i===Tf||i===wf||i===bf||i===Af||i===Cf||i===Rf||i===Pf||i===Nf||i===If||i===Lf||i===Df||i===Uf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Mf)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ef)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tf)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wf)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bf)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Af)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cf)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rf)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pf)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nf)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===If)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lf)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Df)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uf)return c===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Of||i===Ff||i===kf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Of)return c===Bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ff)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bf||i===zf||i===ru||i===Gf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Bf)return o.COMPRESSED_RED_RGTC1_EXT;if(i===zf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ru)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qo?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const Ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fw=`
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

}`;class kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new $v(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gt({vertexShader:Ow,fragmentShader:Fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bw extends ks{constructor(e,t){super();const i=this;let s=null,o=1,c=null,u="local-floor",h=1,f=null,p=null,x=null,g=null,_=null,M=null;const b=typeof XRWebGLBinding<"u",v=new kw,y={},P=t.getContextAttributes();let L=null,A=null;const D=[],I=[],O=new Je;let w=null;const R=new vi;R.viewport=new cn;const F=new vi;F.viewport=new cn;const B=[R,F],z=new YS;let K=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let xe=D[le];return xe===void 0&&(xe=new _h,D[le]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(le){let xe=D[le];return xe===void 0&&(xe=new _h,D[le]=xe),xe.getGripSpace()},this.getHand=function(le){let xe=D[le];return xe===void 0&&(xe=new _h,D[le]=xe),xe.getHandSpace()};function Y(le){const xe=I.indexOf(le.inputSource);if(xe===-1)return;const me=D[xe];me!==void 0&&(me.update(le.inputSource,le.frame,f||c),me.dispatchEvent({type:le.type,data:le.inputSource}))}function oe(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",Z);for(let le=0;le<D.length;le++){const xe=I[le];xe!==null&&(I[le]=null,D[le].disconnect(xe))}K=null,te=null,v.reset();for(const le in y)delete y[le];e.setRenderTarget(L),_=null,g=null,x=null,s=null,A=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){o=le,i.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){u=le,i.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(le){f=le},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return x===null&&b&&(x=new XRWebGLBinding(s,t)),x},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",Z),P.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Oe=null,nt=null;P.depth&&(nt=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=P.stencil?Ds:wr,Oe=P.stencil?Qo:rr);const it={colorFormat:t.RGBA8,depthFormat:nt,scaleFactor:o};x=this.getBinding(),g=x.createProjectionLayer(it),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),A=new Hn(g.textureWidth,g.textureHeight,{format:Wi,type:_i,depthTexture:new Ha(g.textureWidth,g.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),A=new Hn(_.framebufferWidth,_.framebufferHeight,{format:Wi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await s.requestReferenceSpace(u),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(le){for(let xe=0;xe<le.removed.length;xe++){const me=le.removed[xe],Oe=I.indexOf(me);Oe>=0&&(I[Oe]=null,D[Oe].disconnect(me))}for(let xe=0;xe<le.added.length;xe++){const me=le.added[xe];let Oe=I.indexOf(me);if(Oe===-1){for(let it=0;it<D.length;it++)if(it>=I.length){I.push(me),Oe=it;break}else if(I[it]===null){I[it]=me,Oe=it;break}if(Oe===-1)break}const nt=D[Oe];nt&&nt.connect(me)}}const $=new V,se=new V;function de(le,xe,me){$.setFromMatrixPosition(xe.matrixWorld),se.setFromMatrixPosition(me.matrixWorld);const Oe=$.distanceTo(se),nt=xe.projectionMatrix.elements,it=me.projectionMatrix.elements,Jt=nt[14]/(nt[10]-1),pt=nt[14]/(nt[10]+1),Ut=(nt[9]+1)/nt[5],Ct=(nt[9]-1)/nt[5],Et=(nt[8]-1)/nt[0],en=(it[8]+1)/it[0],un=Jt*Et,dn=Jt*en,sn=Oe/(-Et+en),Ht=sn*-Et;if(xe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Ht),le.translateZ(sn),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),nt[10]===-1)le.projectionMatrix.copy(xe.projectionMatrix),le.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const tn=Jt+sn,j=pt+sn,Pn=un-Ht,Lt=dn+(Oe-Ht),U=Ut*pt/j*tn,T=Ct*pt/j*tn;le.projectionMatrix.makePerspective(Pn,Lt,U,T,tn,j),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function G(le,xe){xe===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(xe.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let xe=le.near,me=le.far;v.texture!==null&&(v.depthNear>0&&(xe=v.depthNear),v.depthFar>0&&(me=v.depthFar)),z.near=F.near=R.near=xe,z.far=F.far=R.far=me,(K!==z.near||te!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),K=z.near,te=z.far),z.layers.mask=le.layers.mask|6,R.layers.mask=z.layers.mask&-5,F.layers.mask=z.layers.mask&-3;const Oe=le.parent,nt=z.cameras;G(z,Oe);for(let it=0;it<nt.length;it++)G(nt[it],Oe);nt.length===2?de(z,R,F):z.projectionMatrix.copy(R.projectionMatrix),J(le,z,Oe)};function J(le,xe,me){me===null?le.matrix.copy(xe.matrixWorld):(le.matrix.copy(me.matrixWorld),le.matrix.invert(),le.matrix.multiply(xe.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(xe.projectionMatrix),le.projectionMatrixInverse.copy(xe.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Hf*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(g===null&&_===null))return h},this.setFoveation=function(le){h=le,g!==null&&(g.fixedFoveation=le),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=le)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(z)},this.getCameraTexture=function(le){return y[le]};let Ue=null;function Ke(le,xe){if(p=xe.getViewerPose(f||c),M=xe,p!==null){const me=p.views;_!==null&&(e.setRenderTargetFramebuffer(A,_.framebuffer),e.setRenderTarget(A));let Oe=!1;me.length!==z.cameras.length&&(z.cameras.length=0,Oe=!0);for(let pt=0;pt<me.length;pt++){const Ut=me[pt];let Ct=null;if(_!==null)Ct=_.getViewport(Ut);else{const en=x.getViewSubImage(g,Ut);Ct=en.viewport,pt===0&&(e.setRenderTargetTextures(A,en.colorTexture,en.depthStencilTexture),e.setRenderTarget(A))}let Et=B[pt];Et===void 0&&(Et=new vi,Et.layers.enable(pt),Et.viewport=new cn,B[pt]=Et),Et.matrix.fromArray(Ut.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Ut.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),pt===0&&(z.matrix.copy(Et.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Oe===!0&&z.cameras.push(Et)}const nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){x=i.getBinding();const pt=x.getDepthInformation(me[0]);pt&&pt.isValid&&pt.texture&&v.init(pt,s.renderState)}if(nt&&nt.includes("camera-access")&&b){e.state.unbindTexture(),x=i.getBinding();for(let pt=0;pt<me.length;pt++){const Ut=me[pt].camera;if(Ut){let Ct=y[Ut];Ct||(Ct=new $v,y[Ut]=Ct);const Et=x.getCameraImage(Ut);Ct.sourceTexture=Et}}}}for(let me=0;me<D.length;me++){const Oe=I[me],nt=D[me];Oe!==null&&nt!==void 0&&nt.update(Oe,xe,f||c)}Ue&&Ue(le,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),M=null}const Ge=new tx;Ge.setAnimationLoop(Ke),this.setAnimationLoop=function(le){Ue=le},this.dispose=function(){}}}const zw=new Vt,lx=new ft;lx.set(-1,0,0,0,1,0,0,0,1);function Gw(a,e){function t(v,y){v.matrixAutoUpdate===!0&&v.updateMatrix(),y.value.copy(v.matrix)}function i(v,y){y.color.getRGB(v.fogColor.value,Kv(a)),y.isFog?(v.fogNear.value=y.near,v.fogFar.value=y.far):y.isFogExp2&&(v.fogDensity.value=y.density)}function s(v,y,P,L,A){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?o(v,y):y.isMeshLambertMaterial?(o(v,y),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(o(v,y),x(v,y)):y.isMeshPhongMaterial?(o(v,y),p(v,y),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(o(v,y),g(v,y),y.isMeshPhysicalMaterial&&_(v,y,A)):y.isMeshMatcapMaterial?(o(v,y),M(v,y)):y.isMeshDepthMaterial?o(v,y):y.isMeshDistanceMaterial?(o(v,y),b(v,y)):y.isMeshNormalMaterial?o(v,y):y.isLineBasicMaterial?(c(v,y),y.isLineDashedMaterial&&u(v,y)):y.isPointsMaterial?h(v,y,P,L):y.isSpriteMaterial?f(v,y):y.isShadowMaterial?(v.color.value.copy(y.color),v.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(v,y){v.opacity.value=y.opacity,y.color&&v.diffuse.value.copy(y.color),y.emissive&&v.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(v.map.value=y.map,t(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.bumpMap&&(v.bumpMap.value=y.bumpMap,t(y.bumpMap,v.bumpMapTransform),v.bumpScale.value=y.bumpScale,y.side===Kn&&(v.bumpScale.value*=-1)),y.normalMap&&(v.normalMap.value=y.normalMap,t(y.normalMap,v.normalMapTransform),v.normalScale.value.copy(y.normalScale),y.side===Kn&&v.normalScale.value.negate()),y.displacementMap&&(v.displacementMap.value=y.displacementMap,t(y.displacementMap,v.displacementMapTransform),v.displacementScale.value=y.displacementScale,v.displacementBias.value=y.displacementBias),y.emissiveMap&&(v.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,v.emissiveMapTransform)),y.specularMap&&(v.specularMap.value=y.specularMap,t(y.specularMap,v.specularMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);const P=e.get(y),L=P.envMap,A=P.envMapRotation;L&&(v.envMap.value=L,v.envMapRotation.value.setFromMatrix4(zw.makeRotationFromEuler(A)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(lx),v.reflectivity.value=y.reflectivity,v.ior.value=y.ior,v.refractionRatio.value=y.refractionRatio),y.lightMap&&(v.lightMap.value=y.lightMap,v.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,v.lightMapTransform)),y.aoMap&&(v.aoMap.value=y.aoMap,v.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,v.aoMapTransform))}function c(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,y.map&&(v.map.value=y.map,t(y.map,v.mapTransform))}function u(v,y){v.dashSize.value=y.dashSize,v.totalSize.value=y.dashSize+y.gapSize,v.scale.value=y.scale}function h(v,y,P,L){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.size.value=y.size*P,v.scale.value=L*.5,y.map&&(v.map.value=y.map,t(y.map,v.uvTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function f(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.rotation.value=y.rotation,y.map&&(v.map.value=y.map,t(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function p(v,y){v.specular.value.copy(y.specular),v.shininess.value=Math.max(y.shininess,1e-4)}function x(v,y){y.gradientMap&&(v.gradientMap.value=y.gradientMap)}function g(v,y){v.metalness.value=y.metalness,y.metalnessMap&&(v.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,v.metalnessMapTransform)),v.roughness.value=y.roughness,y.roughnessMap&&(v.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,v.roughnessMapTransform)),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)}function _(v,y,P){v.ior.value=y.ior,y.sheen>0&&(v.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),v.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(v.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,v.sheenColorMapTransform)),y.sheenRoughnessMap&&(v.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,v.sheenRoughnessMapTransform))),y.clearcoat>0&&(v.clearcoat.value=y.clearcoat,v.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(v.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,v.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(v.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Kn&&v.clearcoatNormalScale.value.negate())),y.dispersion>0&&(v.dispersion.value=y.dispersion),y.iridescence>0&&(v.iridescence.value=y.iridescence,v.iridescenceIOR.value=y.iridescenceIOR,v.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(v.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,v.iridescenceMapTransform)),y.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),y.transmission>0&&(v.transmission.value=y.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(v.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,v.transmissionMapTransform)),v.thickness.value=y.thickness,y.thicknessMap&&(v.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=y.attenuationDistance,v.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(v.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(v.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=y.specularIntensity,v.specularColor.value.copy(y.specularColor),y.specularColorMap&&(v.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,v.specularColorMapTransform)),y.specularIntensityMap&&(v.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,v.specularIntensityMapTransform))}function M(v,y){y.matcap&&(v.matcap.value=y.matcap)}function b(v,y){const P=e.get(y).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vw(a,e,t,i){let s={},o={},c=[];const u=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,D){const I=D.program;i.uniformBlockBinding(A,I)}function f(A,D){let I=s[A.id];I===void 0&&(v(A),I=p(A),s[A.id]=I,A.addEventListener("dispose",P));const O=D.program;i.updateUBOMapping(A,O);const w=e.render.frame;o[A.id]!==w&&(g(A),o[A.id]=w)}function p(A){const D=x();A.__bindingPointIndex=D;const I=a.createBuffer(),O=A.__size,w=A.usage;return a.bindBuffer(a.UNIFORM_BUFFER,I),a.bufferData(a.UNIFORM_BUFFER,O,w),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,D,I),I}function x(){for(let A=0;A<u;A++)if(c.indexOf(A)===-1)return c.push(A),A;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const D=s[A.id],I=A.uniforms,O=A.__cache;a.bindBuffer(a.UNIFORM_BUFFER,D);for(let w=0,R=I.length;w<R;w++){const F=I[w];if(Array.isArray(F))for(let B=0,z=F.length;B<z;B++)_(F[B],w,B,O);else _(F,w,0,O)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function _(A,D,I,O){if(b(A,D,I,O)===!0){const w=A.__offset,R=A.value;if(Array.isArray(R)){let F=0;for(let B=0;B<R.length;B++){const z=R[B],K=y(z);M(z,A.__data,F),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(R,A.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,w,A.__data)}}function M(A,D,I){typeof A=="number"||typeof A=="boolean"?D[0]=A:A.isMatrix3?(D[0]=A.elements[0],D[1]=A.elements[1],D[2]=A.elements[2],D[3]=0,D[4]=A.elements[3],D[5]=A.elements[4],D[6]=A.elements[5],D[7]=0,D[8]=A.elements[6],D[9]=A.elements[7],D[10]=A.elements[8],D[11]=0):ArrayBuffer.isView(A)?D.set(new A.constructor(A.buffer,A.byteOffset,D.length)):A.toArray(D,I)}function b(A,D,I,O){const w=A.value,R=D+"_"+I;if(O[R]===void 0)return typeof w=="number"||typeof w=="boolean"?O[R]=w:ArrayBuffer.isView(w)?O[R]=w.slice():O[R]=w.clone(),!0;{const F=O[R];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return O[R]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(F.equals(w)===!1)return F.copy(w),!0}}return!1}function v(A){const D=A.uniforms;let I=0;const O=16;for(let R=0,F=D.length;R<F;R++){const B=Array.isArray(D[R])?D[R]:[D[R]];for(let z=0,K=B.length;z<K;z++){const te=B[z],Y=Array.isArray(te.value)?te.value:[te.value];for(let oe=0,Z=Y.length;oe<Z;oe++){const $=Y[oe],se=y($),de=I%O,G=de%se.boundary,J=de+G;I+=G,J!==0&&O-J<se.storage&&(I+=O-J),te.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=I,I+=se.storage}}}const w=I%O;return w>0&&(I+=O-w),A.__size=I,A.__cache={},this}function y(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(D.boundary=16,D.storage=A.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",A),D}function P(A){const D=A.target;D.removeEventListener("dispose",P);const I=c.indexOf(D.__bindingPointIndex);c.splice(I,1),a.deleteBuffer(s[D.id]),delete s[D.id],delete o[D.id]}function L(){for(const A in s)a.deleteBuffer(s[A]);c=[],s={},o={}}return{bind:h,update:f,dispose:L}}const Hw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function Ww(){return Qi===null&&(Qi=new jv(Hw,16,16,Fs,Zn),Qi.name="DFG_LUT",Qi.minFilter=Gn,Qi.magFilter=Gn,Qi.wrapS=Er,Qi.wrapT=Er,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class Xw{constructor(e={}){const{canvas:t=lS(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:_=_i}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const b=_,v=new Set([hp,dp,up]),y=new Set([_i,rr,Zo,Qo,op,lp]),P=new Uint32Array(4),L=new Int32Array(4),A=new V;let D=null,I=null;const O=[],w=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let B=!1,z=null,K=null,te=null,Y=null;this._outputColorSpace=li;let oe=0,Z=0,$=null,se=-1,de=null;const G=new cn,J=new cn;let Ue=null;const Ke=new We(0);let Ge=0,le=t.width,xe=t.height,me=1,Oe=null,nt=null;const it=new cn(0,0,le,xe),Jt=new cn(0,0,le,xe);let pt=!1;const Ut=new _p;let Ct=!1,Et=!1;const en=new Vt,un=new V,dn=new cn,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function tn(){return $===null?me:1}let j=i;function Pn(N,q){return t.getContext(N,q)}try{const N={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qf}`),t.addEventListener("webglcontextlost",jt,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",Dn,!1),j===null){const q="webgl2";if(j=Pn(q,N),j===null)throw Pn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(N){throw Nt("WebGLRenderer: "+N.message),N}let Lt,U,T,Q,ae,he,Ee,Re,fe,ge,Ne,qe,Ie,Ce,et,rt,ot,W,Ae,pe,Pe,Le,ve;function Xe(){Lt=new WE(j),Lt.init(),Pe=new Uw(j,Lt),U=new OE(j,Lt,e,Pe),T=new Lw(j,Lt),U.reversedDepthBuffer&&g&&T.buffers.depth.setReversed(!0),K=j.createFramebuffer(),te=j.createFramebuffer(),Y=j.createFramebuffer(),Q=new YE(j),ae=new _w,he=new Dw(j,Lt,T,ae,U,Pe,Q),Ee=new HE(F),Re=new ZS(j),Le=new DE(j,Re),fe=new XE(j,Re,Q,Le),ge=new $E(j,fe,Re,Le,Q),W=new qE(j,U,he),et=new FE(ae),Ne=new xw(F,Ee,Lt,U,Le,et),qe=new Gw(F,ae),Ie=new Sw,Ce=new Aw(Lt),ot=new LE(F,Ee,T,ge,M,h),rt=new Iw(F,ge,U),ve=new Vw(j,Q,U,T),Ae=new UE(j,Lt,Q),pe=new jE(j,Lt,Q),Q.programs=Ne.programs,F.capabilities=U,F.extensions=Lt,F.properties=ae,F.renderLists=Ie,F.shadowMap=rt,F.state=T,F.info=Q}Xe(),b!==_i&&(R=new ZE(b,t.width,t.height,u,s,o));const Ve=new Bw(F,j);this.xr=Ve,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const N=Lt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Lt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(N){N!==void 0&&(me=N,this.setSize(le,xe,!1))},this.getSize=function(N){return N.set(le,xe)},this.setSize=function(N,q,ce=!0){if(Ve.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}le=N,xe=q,t.width=Math.floor(N*me),t.height=Math.floor(q*me),ce===!0&&(t.style.width=N+"px",t.style.height=q+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,N,q)},this.getDrawingBufferSize=function(N){return N.set(le*me,xe*me).floor()},this.setDrawingBufferSize=function(N,q,ce){le=N,xe=q,me=ce,t.width=Math.floor(N*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,N,q)},this.setEffects=function(N){if(b===_i){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let q=0;q<N.length;q++)if(N[q].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(G)},this.getViewport=function(N){return N.copy(it)},this.setViewport=function(N,q,ce,ie){N.isVector4?it.set(N.x,N.y,N.z,N.w):it.set(N,q,ce,ie),T.viewport(G.copy(it).multiplyScalar(me).round())},this.getScissor=function(N){return N.copy(Jt)},this.setScissor=function(N,q,ce,ie){N.isVector4?Jt.set(N.x,N.y,N.z,N.w):Jt.set(N,q,ce,ie),T.scissor(J.copy(Jt).multiplyScalar(me).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(N){T.setScissorTest(pt=N)},this.setOpaqueSort=function(N){Oe=N},this.setTransparentSort=function(N){nt=N},this.getClearColor=function(N){return N.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(N=!0,q=!0,ce=!0){let ie=0;if(N){let ne=!1;if($!==null){const be=$.texture.format;ne=v.has(be)}if(ne){const be=$.texture.type,Be=y.has(be),we=ot.getClearColor(),je=ot.getClearAlpha(),Qe=we.r,dt=we.g,ht=we.b;Be?(P[0]=Qe,P[1]=dt,P[2]=ht,P[3]=je,j.clearBufferuiv(j.COLOR,0,P)):(L[0]=Qe,L[1]=dt,L[2]=ht,L[3]=je,j.clearBufferiv(j.COLOR,0,L))}else ie|=j.COLOR_BUFFER_BIT}q&&(ie|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),z=N},this.dispose=function(){t.removeEventListener("webglcontextlost",jt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),ot.dispose(),Ie.dispose(),Ce.dispose(),ae.dispose(),Ee.dispose(),ge.dispose(),Le.dispose(),ve.dispose(),Ne.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",tl),Ve.removeEventListener("sessionend",nl),Wn.stop()};function jt(N){N.preventDefault(),cu("WebGLRenderer: Context Lost."),B=!0}function Ft(){cu("WebGLRenderer: Context Restored."),B=!1;const N=Q.autoReset,q=rt.enabled,ce=rt.autoUpdate,ie=rt.needsUpdate,ne=rt.type;Xe(),Q.autoReset=N,rt.enabled=q,rt.autoUpdate=ce,rt.needsUpdate=ie,rt.type=ne}function Dn(N){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function yi(N){const q=N.target;q.removeEventListener("dispose",yi),ss(q)}function ss(N){Hs(N),ae.remove(N)}function Hs(N){const q=ae.get(N).programs;q!==void 0&&(q.forEach(function(ce){Ne.releaseProgram(ce)}),N.isShaderMaterial&&Ne.releaseShaderCache(N))}this.renderBufferDirect=function(N,q,ce,ie,ne,be){q===null&&(q=sn);const Be=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,we=an(N,q,ce,ie,ne);T.setMaterial(ie,Be);let je=ce.index,Qe=1;if(ie.wireframe===!0){if(je=fe.getWireframeAttribute(ce),je===void 0)return;Qe=2}const dt=ce.drawRange,ht=ce.attributes.position;let $e=dt.start*Qe,Rt=(dt.start+dt.count)*Qe;be!==null&&($e=Math.max($e,be.start*Qe),Rt=Math.min(Rt,(be.start+be.count)*Qe)),je!==null?($e=Math.max($e,0),Rt=Math.min(Rt,je.count)):ht!=null&&($e=Math.max($e,0),Rt=Math.min(Rt,ht.count));const qt=Rt-$e;if(qt<0||qt===1/0)return;Le.setup(ne,ie,we,ce,je);let nn,Wt=Ae;if(je!==null&&(nn=Re.get(je),Wt=pe,Wt.setIndex(nn)),ne.isMesh)ie.wireframe===!0?(T.setLineWidth(ie.wireframeLinewidth*tn()),Wt.setMode(j.LINES)):Wt.setMode(j.TRIANGLES);else if(ne.isLine){let vn=ie.linewidth;vn===void 0&&(vn=1),T.setLineWidth(vn*tn()),ne.isLineSegments?Wt.setMode(j.LINES):ne.isLineLoop?Wt.setMode(j.LINE_LOOP):Wt.setMode(j.LINE_STRIP)}else ne.isPoints?Wt.setMode(j.POINTS):ne.isSprite&&Wt.setMode(j.TRIANGLES);if(ne.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))Wt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const vn=ne._multiDrawStarts,Fe=ne._multiDrawCounts,Nn=ne._multiDrawCount,vt=je?Re.get(je).bytesPerElement:1,Qn=ae.get(ie).currentProgram.getUniforms();for(let Jn=0;Jn<Nn;Jn++)Qn.setValue(j,"_gl_DrawID",Jn),Wt.render(vn[Jn]/vt,Fe[Jn])}else if(ne.isInstancedMesh)Wt.renderInstances($e,qt,ne.count);else if(ce.isInstancedBufferGeometry){const vn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Fe=Math.min(ce.instanceCount,vn);Wt.renderInstances($e,qt,Fe)}else Wt.render($e,qt)};function as(N,q,ce){N.transparent===!0&&N.side===xi&&N.forceSinglePass===!1?(N.side=Kn,N.needsUpdate=!0,cs(N,q,ce),N.side=is,N.needsUpdate=!0,cs(N,q,ce),N.side=xi):cs(N,q,ce)}this.compile=function(N,q,ce=null){ce===null&&(ce=N),I=Ce.get(ce),I.init(q),w.push(I),ce.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(I.pushLight(ne),ne.castShadow&&I.pushShadow(ne))}),N!==ce&&N.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(I.pushLight(ne),ne.castShadow&&I.pushShadow(ne))}),I.setupLights();const ie=new Set;return N.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const be=ne.material;if(be)if(Array.isArray(be))for(let Be=0;Be<be.length;Be++){const we=be[Be];as(we,ce,ne),ie.add(we)}else as(be,ce,ne),ie.add(be)}),I=w.pop(),ie},this.compileAsync=function(N,q,ce=null){const ie=this.compile(N,q,ce);return new Promise(ne=>{function be(){if(ie.forEach(function(Be){ae.get(Be).currentProgram.isReady()&&ie.delete(Be)}),ie.size===0){ne(N);return}setTimeout(be,10)}Lt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let os=null;function bu(N){os&&os(N)}function tl(){Wn.stop()}function nl(){Wn.start()}const Wn=new tx;Wn.setAnimationLoop(bu),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(N){os=N,Ve.setAnimationLoop(N),N===null?Wn.stop():Wn.start()},Ve.addEventListener("sessionstart",tl),Ve.addEventListener("sessionend",nl),this.render=function(N,q){if(q!==void 0&&q.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;z!==null&&z.renderStart(N,q);const ce=Ve.enabled===!0&&Ve.isPresenting===!0,ie=R!==null&&($===null||ce)&&R.begin(F,$);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(q),q=Ve.getCamera()),N.isScene===!0&&N.onBeforeRender(F,N,q,$),I=Ce.get(N,w.length),I.init(q),I.state.textureUnits=he.getTextureUnits(),w.push(I),en.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ut.setFromProjectionMatrix(en,nr,q.reversedDepth),Et=this.localClippingEnabled,Ct=et.init(this.clippingPlanes,Et),D=Ie.get(N,O.length),D.init(),O.push(D),Ve.enabled===!0&&Ve.isPresenting===!0){const Be=F.xr.getDepthSensingMesh();Be!==null&&Ws(Be,q,-1/0,F.sortObjects)}Ws(N,q,0,F.sortObjects),D.finish(),F.sortObjects===!0&&D.sort(Oe,nt,q.reversedDepth),Ht=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Ht&&ot.addToRenderList(D,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ct===!0&&et.beginShadows();const ne=I.state.shadowsArray;if(rt.render(ne,N,q),Ct===!0&&et.endShadows(),(ie&&R.hasRenderPass())===!1){const Be=D.opaque,we=D.transmissive;if(I.setupLights(),q.isArrayCamera){const je=q.cameras;if(we.length>0)for(let Qe=0,dt=je.length;Qe<dt;Qe++){const ht=je[Qe];il(Be,we,N,ht)}Ht&&ot.render(N);for(let Qe=0,dt=je.length;Qe<dt;Qe++){const ht=je[Qe];Ka(D,N,ht,ht.viewport)}}else we.length>0&&il(Be,we,N,q),Ht&&ot.render(N),Ka(D,N,q)}$!==null&&Z===0&&(he.updateMultisampleRenderTarget($),he.updateRenderTargetMipmap($)),ie&&R.end(F),N.isScene===!0&&N.onAfterRender(F,N,q),Le.resetDefaultState(),se=-1,de=null,w.pop(),w.length>0?(I=w[w.length-1],he.setTextureUnits(I.state.textureUnits),Ct===!0&&et.setGlobalState(F.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?D=O[O.length-1]:D=null,z!==null&&z.renderEnd()};function Ws(N,q,ce,ie){if(N.visible===!1)return;if(N.layers.test(q.layers)){if(N.isGroup)ce=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(q);else if(N.isLightProbeGrid)I.pushLightProbeGrid(N);else if(N.isLight)I.pushLight(N),N.castShadow&&I.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Ut.intersectsSprite(N)){ie&&dn.setFromMatrixPosition(N.matrixWorld).applyMatrix4(en);const Be=ge.update(N),we=N.material;we.visible&&D.push(N,Be,we,ce,dn.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Ut.intersectsObject(N))){const Be=ge.update(N),we=N.material;if(ie&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),dn.copy(N.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),dn.copy(Be.boundingSphere.center)),dn.applyMatrix4(N.matrixWorld).applyMatrix4(en)),Array.isArray(we)){const je=Be.groups;for(let Qe=0,dt=je.length;Qe<dt;Qe++){const ht=je[Qe],$e=we[ht.materialIndex];$e&&$e.visible&&D.push(N,Be,$e,ce,dn.z,ht)}}else we.visible&&D.push(N,Be,we,ce,dn.z,null)}}const be=N.children;for(let Be=0,we=be.length;Be<we;Be++)Ws(be[Be],q,ce,ie)}function Ka(N,q,ce,ie){const{opaque:ne,transmissive:be,transparent:Be}=N;I.setupLightsView(ce),Ct===!0&&et.setGlobalState(F.clippingPlanes,ce),ie&&T.viewport(G.copy(ie)),ne.length>0&&ls(ne,q,ce),be.length>0&&ls(be,q,ce),Be.length>0&&ls(Be,q,ce),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function il(N,q,ce,ie){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ie.id]===void 0){const $e=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ie.id]=new Hn(1,1,{generateMipmaps:!0,type:$e?Zn:_i,minFilter:Ls,samples:Math.max(4,U.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const be=I.state.transmissionRenderTarget[ie.id],Be=ie.viewport||G;be.setSize(Be.z*F.transmissionResolutionScale,Be.w*F.transmissionResolutionScale);const we=F.getRenderTarget(),je=F.getActiveCubeFace(),Qe=F.getActiveMipmapLevel();F.setRenderTarget(be),F.getClearColor(Ke),Ge=F.getClearAlpha(),Ge<1&&F.setClearColor(16777215,.5),F.clear(),Ht&&ot.render(ce);const dt=F.toneMapping;F.toneMapping=ir;const ht=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),I.setupLightsView(ie),Ct===!0&&et.setGlobalState(F.clippingPlanes,ie),ls(N,ce,ie),he.updateMultisampleRenderTarget(be),he.updateRenderTargetMipmap(be),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Rt=0,qt=q.length;Rt<qt;Rt++){const nn=q[Rt],{object:Wt,geometry:vn,material:Fe,group:Nn}=nn;if(Fe.side===xi&&Wt.layers.test(ie.layers)){const vt=Fe.side;Fe.side=Kn,Fe.needsUpdate=!0,Za(Wt,ce,ie,vn,Fe,Nn),Fe.side=vt,Fe.needsUpdate=!0,$e=!0}}$e===!0&&(he.updateMultisampleRenderTarget(be),he.updateRenderTargetMipmap(be))}F.setRenderTarget(we,je,Qe),F.setClearColor(Ke,Ge),ht!==void 0&&(ie.viewport=ht),F.toneMapping=dt}function ls(N,q,ce){const ie=q.isScene===!0?q.overrideMaterial:null;for(let ne=0,be=N.length;ne<be;ne++){const Be=N[ne],{object:we,geometry:je,group:Qe}=Be;let dt=Be.material;dt.allowOverride===!0&&ie!==null&&(dt=ie),we.layers.test(ce.layers)&&Za(we,q,ce,je,dt,Qe)}}function Za(N,q,ce,ie,ne,be){N.onBeforeRender(F,q,ce,ie,ne,be),N.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ne.onBeforeRender(F,q,ce,ie,N,be),ne.transparent===!0&&ne.side===xi&&ne.forceSinglePass===!1?(ne.side=Kn,ne.needsUpdate=!0,F.renderBufferDirect(ce,q,ie,ne,N,be),ne.side=is,ne.needsUpdate=!0,F.renderBufferDirect(ce,q,ie,ne,N,be),ne.side=xi):F.renderBufferDirect(ce,q,ie,ne,N,be),N.onAfterRender(F,q,ce,ie,ne,be)}function cs(N,q,ce){q.isScene!==!0&&(q=sn);const ie=ae.get(N),ne=I.state.lights,be=I.state.shadowsArray,Be=ne.state.version,we=Ne.getParameters(N,ne.state,be,q,ce,I.state.lightProbeGridArray),je=Ne.getProgramCacheKey(we);let Qe=ie.programs;ie.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const dt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ie.envMap=Ee.get(N.envMap||ie.environment,dt),ie.envMapRotation=ie.environment!==null&&N.envMap===null?q.environmentRotation:N.envMapRotation,Qe===void 0&&(N.addEventListener("dispose",yi),Qe=new Map,ie.programs=Qe);let ht=Qe.get(je);if(ht!==void 0){if(ie.currentProgram===ht&&ie.lightsStateVersion===Be)return rl(N,we),ht}else we.uniforms=Ne.getUniforms(N),z!==null&&N.isNodeMaterial&&z.build(N,ce,we),N.onBeforeCompile(we,F),ht=Ne.acquireProgram(we,je),Qe.set(je,ht),ie.uniforms=we.uniforms;const $e=ie.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&($e.clippingPlanes=et.uniform),rl(N,we),ie.needsLights=Ja(N),ie.lightsStateVersion=Be,ie.needsLights&&($e.ambientLightColor.value=ne.state.ambient,$e.lightProbe.value=ne.state.probe,$e.directionalLights.value=ne.state.directional,$e.directionalLightShadows.value=ne.state.directionalShadow,$e.spotLights.value=ne.state.spot,$e.spotLightShadows.value=ne.state.spotShadow,$e.rectAreaLights.value=ne.state.rectArea,$e.ltc_1.value=ne.state.rectAreaLTC1,$e.ltc_2.value=ne.state.rectAreaLTC2,$e.pointLights.value=ne.state.point,$e.pointLightShadows.value=ne.state.pointShadow,$e.hemisphereLights.value=ne.state.hemi,$e.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,$e.spotLightMatrix.value=ne.state.spotLightMatrix,$e.spotLightMap.value=ne.state.spotLightMap,$e.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.lightProbeGrid=I.state.lightProbeGridArray.length>0,ie.currentProgram=ht,ie.uniformsList=null,ht}function Qa(N){if(N.uniformsList===null){const q=N.currentProgram.getUniforms();N.uniformsList=Qc.seqWithValue(q.seq,N.uniforms)}return N.uniformsList}function rl(N,q){const ce=ae.get(N);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function Au(N,q){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;A.setFromMatrixPosition(q.matrixWorld);for(let ce=0,ie=N.length;ce<ie;ce++){const ne=N[ce];if(ne.texture!==null&&ne.boundingBox.containsPoint(A))return ne}return null}function an(N,q,ce,ie,ne){q.isScene!==!0&&(q=sn),he.resetTextureUnits();const be=q.fog,Be=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,we=$===null?F.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Tt.workingColorSpace,je=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Qe=Ee.get(ie.envMap||Be,je),dt=ie.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ht=!!ce.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),$e=!!ce.morphAttributes.position,Rt=!!ce.morphAttributes.normal,qt=!!ce.morphAttributes.color;let nn=ir;ie.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(nn=F.toneMapping);const Wt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,vn=Wt!==void 0?Wt.length:0,Fe=ae.get(ie),Nn=I.state.lights;if(Ct===!0&&(Et===!0||N!==de)){const Xt=N===de&&ie.id===se;et.setState(ie,N,Xt)}let vt=!1;ie.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Nn.state.version||Fe.outputColorSpace!==we||ne.isBatchedMesh&&Fe.batching===!1||!ne.isBatchedMesh&&Fe.batching===!0||ne.isBatchedMesh&&Fe.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Fe.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Fe.instancing===!1||!ne.isInstancedMesh&&Fe.instancing===!0||ne.isSkinnedMesh&&Fe.skinning===!1||!ne.isSkinnedMesh&&Fe.skinning===!0||ne.isInstancedMesh&&Fe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Fe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Fe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Fe.instancingMorph===!1&&ne.morphTexture!==null||Fe.envMap!==Qe||ie.fog===!0&&Fe.fog!==be||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==et.numPlanes||Fe.numIntersection!==et.numIntersection)||Fe.vertexAlphas!==dt||Fe.vertexTangents!==ht||Fe.morphTargets!==$e||Fe.morphNormals!==Rt||Fe.morphColors!==qt||Fe.toneMapping!==nn||Fe.morphTargetsCount!==vn||!!Fe.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Fe.__version=ie.version);let Qn=Fe.currentProgram;vt===!0&&(Qn=cs(ie,q,ne),z&&ie.isNodeMaterial&&z.onUpdateProgram(ie,Qn,Fe));let Jn=!1,yt=!1,sr=!1;const kt=Qn.getUniforms(),Kt=Fe.uniforms;if(T.useProgram(Qn.program)&&(Jn=!0,yt=!0,sr=!0),ie.id!==se&&(se=ie.id,yt=!0),Fe.needsLights){const Xt=Au(I.state.lightProbeGridArray,ne);Fe.lightProbeGrid!==Xt&&(Fe.lightProbeGrid=Xt,yt=!0)}if(Jn||de!==N){T.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),kt.setValue(j,"projectionMatrix",N.projectionMatrix),kt.setValue(j,"viewMatrix",N.matrixWorldInverse);const Ii=kt.map.cameraPosition;Ii!==void 0&&Ii.setValue(j,un.setFromMatrixPosition(N.matrixWorld)),U.logarithmicDepthBuffer&&kt.setValue(j,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&kt.setValue(j,"isOrthographic",N.isOrthographicCamera===!0),de!==N&&(de=N,yt=!0,sr=!0)}if(Fe.needsLights&&(Nn.state.directionalShadowMap.length>0&&kt.setValue(j,"directionalShadowMap",Nn.state.directionalShadowMap,he),Nn.state.spotShadowMap.length>0&&kt.setValue(j,"spotShadowMap",Nn.state.spotShadowMap,he),Nn.state.pointShadowMap.length>0&&kt.setValue(j,"pointShadowMap",Nn.state.pointShadowMap,he)),ne.isSkinnedMesh){kt.setOptional(j,ne,"bindMatrix"),kt.setOptional(j,ne,"bindMatrixInverse");const Xt=ne.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),kt.setValue(j,"boneTexture",Xt.boneTexture,he))}ne.isBatchedMesh&&(kt.setOptional(j,ne,"batchingTexture"),kt.setValue(j,"batchingTexture",ne._matricesTexture,he),kt.setOptional(j,ne,"batchingIdTexture"),kt.setValue(j,"batchingIdTexture",ne._indirectTexture,he),kt.setOptional(j,ne,"batchingColorTexture"),ne._colorsTexture!==null&&kt.setValue(j,"batchingColorTexture",ne._colorsTexture,he));const Ni=ce.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&W.update(ne,ce,Qn),(yt||Fe.receiveShadow!==ne.receiveShadow)&&(Fe.receiveShadow=ne.receiveShadow,kt.setValue(j,"receiveShadow",ne.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(Kt.envMapIntensity.value=q.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=Ww()),yt){if(kt.setValue(j,"toneMappingExposure",F.toneMappingExposure),Fe.needsLights&&Cu(Kt,sr),be&&ie.fog===!0&&qe.refreshFogUniforms(Kt,be),qe.refreshMaterialUniforms(Kt,ie,me,xe,I.state.transmissionRenderTarget[N.id]),Fe.needsLights&&Fe.lightProbeGrid){const Xt=Fe.lightProbeGrid;Kt.probesSH.value=Xt.texture,Kt.probesMin.value.copy(Xt.boundingBox.min),Kt.probesMax.value.copy(Xt.boundingBox.max),Kt.probesResolution.value.copy(Xt.resolution)}Qc.upload(j,Qa(Fe),Kt,he)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Qc.upload(j,Qa(Fe),Kt,he),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&kt.setValue(j,"center",ne.center),kt.setValue(j,"modelViewMatrix",ne.modelViewMatrix),kt.setValue(j,"normalMatrix",ne.normalMatrix),kt.setValue(j,"modelMatrix",ne.matrixWorld),ie.uniformsGroups!==void 0){const Xt=ie.uniformsGroups;for(let Ii=0,ji=Xt.length;Ii<ji;Ii++){const us=Xt[Ii];ve.update(us,Qn),ve.bind(us,Qn)}}return Qn}function Cu(N,q){N.ambientLightColor.needsUpdate=q,N.lightProbe.needsUpdate=q,N.directionalLights.needsUpdate=q,N.directionalLightShadows.needsUpdate=q,N.pointLights.needsUpdate=q,N.pointLightShadows.needsUpdate=q,N.spotLights.needsUpdate=q,N.spotLightShadows.needsUpdate=q,N.rectAreaLights.needsUpdate=q,N.hemisphereLights.needsUpdate=q}function Ja(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(N,q,ce){const ie=ae.get(N);ie.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ae.get(N.texture).__webglTexture=q,ae.get(N.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ce,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,q){const ce=ae.get(N);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(N,q=0,ce=0){$=N,oe=q,Z=ce;let ie=null,ne=!1,be=!1;if(N){const we=ae.get(N);if(we.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(j.FRAMEBUFFER,we.__webglFramebuffer),G.copy(N.viewport),J.copy(N.scissor),Ue=N.scissorTest,T.viewport(G),T.scissor(J),T.setScissorTest(Ue),se=-1;return}else if(we.__webglFramebuffer===void 0)he.setupRenderTarget(N);else if(we.__hasExternalTextures)he.rebindTextures(N,ae.get(N.texture).__webglTexture,ae.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const dt=N.depthTexture;if(we.__boundDepthTexture!==dt){if(dt!==null&&ae.has(dt)&&(N.width!==dt.image.width||N.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(N)}}const je=N.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(be=!0);const Qe=ae.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?ie=Qe[q][ce]:ie=Qe[q],ne=!0):N.samples>0&&he.useMultisampledRTT(N)===!1?ie=ae.get(N).__webglMultisampledFramebuffer:Array.isArray(Qe)?ie=Qe[ce]:ie=Qe,G.copy(N.viewport),J.copy(N.scissor),Ue=N.scissorTest}else G.copy(it).multiplyScalar(me).floor(),J.copy(Jt).multiplyScalar(me).floor(),Ue=pt;if(ce!==0&&(ie=K),T.bindFramebuffer(j.FRAMEBUFFER,ie)&&T.drawBuffers(N,ie),T.viewport(G),T.scissor(J),T.setScissorTest(Ue),ne){const we=ae.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,we.__webglTexture,ce)}else if(be){const we=q;for(let je=0;je<N.textures.length;je++){const Qe=ae.get(N.textures[je]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+je,Qe.__webglTexture,ce,we)}}else if(N!==null&&ce!==0){const we=ae.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,we.__webglTexture,ce)}se=-1},this.readRenderTargetPixels=function(N,q,ce,ie,ne,be,Be,we=0){if(!(N&&N.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=ae.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Be!==void 0&&(je=je[Be]),je){T.bindFramebuffer(j.FRAMEBUFFER,je);try{const Qe=N.textures[we],dt=Qe.format,ht=Qe.type;if(N.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+we),!U.textureFormatReadable(dt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ht)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=N.width-ie&&ce>=0&&ce<=N.height-ne&&j.readPixels(q,ce,ie,ne,Pe.convert(dt),Pe.convert(ht),be)}finally{const Qe=$!==null?ae.get($).__webglFramebuffer:null;T.bindFramebuffer(j.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(N,q,ce,ie,ne,be,Be,we=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=ae.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Be!==void 0&&(je=je[Be]),je)if(q>=0&&q<=N.width-ie&&ce>=0&&ce<=N.height-ne){T.bindFramebuffer(j.FRAMEBUFFER,je);const Qe=N.textures[we],dt=Qe.format,ht=Qe.type;if(N.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+we),!U.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,$e),j.bufferData(j.PIXEL_PACK_BUFFER,be.byteLength,j.STREAM_READ),j.readPixels(q,ce,ie,ne,Pe.convert(dt),Pe.convert(ht),0);const Rt=$!==null?ae.get($).__webglFramebuffer:null;T.bindFramebuffer(j.FRAMEBUFFER,Rt);const qt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await cS(j,qt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,$e),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,be),j.deleteBuffer($e),j.deleteSync(qt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,q=null,ce=0){const ie=Math.pow(2,-ce),ne=Math.floor(N.image.width*ie),be=Math.floor(N.image.height*ie),Be=q!==null?q.x:0,we=q!==null?q.y:0;he.setTexture2D(N,0),j.copyTexSubImage2D(j.TEXTURE_2D,ce,0,0,Be,we,ne,be),T.unbindTexture()},this.copyTextureToTexture=function(N,q,ce=null,ie=null,ne=0,be=0){let Be,we,je,Qe,dt,ht,$e,Rt,qt;const nn=N.isCompressedTexture?N.mipmaps[be]:N.image;if(ce!==null)Be=ce.max.x-ce.min.x,we=ce.max.y-ce.min.y,je=ce.isBox3?ce.max.z-ce.min.z:1,Qe=ce.min.x,dt=ce.min.y,ht=ce.isBox3?ce.min.z:0;else{const Kt=Math.pow(2,-ne);Be=Math.floor(nn.width*Kt),we=Math.floor(nn.height*Kt),N.isDataArrayTexture?je=nn.depth:N.isData3DTexture?je=Math.floor(nn.depth*Kt):je=1,Qe=0,dt=0,ht=0}ie!==null?($e=ie.x,Rt=ie.y,qt=ie.z):($e=0,Rt=0,qt=0);const Wt=Pe.convert(q.format),vn=Pe.convert(q.type);let Fe;q.isData3DTexture?(he.setTexture3D(q,0),Fe=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),Fe=j.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),Fe=j.TEXTURE_2D),T.activeTexture(j.TEXTURE0),T.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),T.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),T.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const Nn=T.getParameter(j.UNPACK_ROW_LENGTH),vt=T.getParameter(j.UNPACK_IMAGE_HEIGHT),Qn=T.getParameter(j.UNPACK_SKIP_PIXELS),Jn=T.getParameter(j.UNPACK_SKIP_ROWS),yt=T.getParameter(j.UNPACK_SKIP_IMAGES);T.pixelStorei(j.UNPACK_ROW_LENGTH,nn.width),T.pixelStorei(j.UNPACK_IMAGE_HEIGHT,nn.height),T.pixelStorei(j.UNPACK_SKIP_PIXELS,Qe),T.pixelStorei(j.UNPACK_SKIP_ROWS,dt),T.pixelStorei(j.UNPACK_SKIP_IMAGES,ht);const sr=N.isDataArrayTexture||N.isData3DTexture,kt=q.isDataArrayTexture||q.isData3DTexture;if(N.isDepthTexture){const Kt=ae.get(N),Ni=ae.get(q),Xt=ae.get(Kt.__renderTarget),Ii=ae.get(Ni.__renderTarget);T.bindFramebuffer(j.READ_FRAMEBUFFER,Xt.__webglFramebuffer),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let ji=0;ji<je;ji++)sr&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ae.get(N).__webglTexture,ne,ht+ji),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ae.get(q).__webglTexture,be,qt+ji)),j.blitFramebuffer(Qe,dt,Be,we,$e,Rt,Be,we,j.DEPTH_BUFFER_BIT,j.NEAREST);T.bindFramebuffer(j.READ_FRAMEBUFFER,null),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ne!==0||N.isRenderTargetTexture||ae.has(N)){const Kt=ae.get(N),Ni=ae.get(q);T.bindFramebuffer(j.READ_FRAMEBUFFER,te),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,Y);for(let Xt=0;Xt<je;Xt++)sr?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Kt.__webglTexture,ne,ht+Xt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Kt.__webglTexture,ne),kt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ni.__webglTexture,be,qt+Xt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ni.__webglTexture,be),ne!==0?j.blitFramebuffer(Qe,dt,Be,we,$e,Rt,Be,we,j.COLOR_BUFFER_BIT,j.NEAREST):kt?j.copyTexSubImage3D(Fe,be,$e,Rt,qt+Xt,Qe,dt,Be,we):j.copyTexSubImage2D(Fe,be,$e,Rt,Qe,dt,Be,we);T.bindFramebuffer(j.READ_FRAMEBUFFER,null),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else kt?N.isDataTexture||N.isData3DTexture?j.texSubImage3D(Fe,be,$e,Rt,qt,Be,we,je,Wt,vn,nn.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(Fe,be,$e,Rt,qt,Be,we,je,Wt,nn.data):j.texSubImage3D(Fe,be,$e,Rt,qt,Be,we,je,Wt,vn,nn):N.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,be,$e,Rt,Be,we,Wt,vn,nn.data):N.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,be,$e,Rt,nn.width,nn.height,Wt,nn.data):j.texSubImage2D(j.TEXTURE_2D,be,$e,Rt,Be,we,Wt,vn,nn);T.pixelStorei(j.UNPACK_ROW_LENGTH,Nn),T.pixelStorei(j.UNPACK_IMAGE_HEIGHT,vt),T.pixelStorei(j.UNPACK_SKIP_PIXELS,Qn),T.pixelStorei(j.UNPACK_SKIP_ROWS,Jn),T.pixelStorei(j.UNPACK_SKIP_IMAGES,yt),be===0&&q.generateMipmaps&&j.generateMipmap(Fe),T.unbindTexture()},this.initRenderTarget=function(N){ae.get(N).__webglFramebuffer===void 0&&he.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?he.setTextureCube(N,0):N.isData3DTexture?he.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?he.setTexture2DArray(N,0):he.setTexture2D(N,0),T.unbindTexture()},this.resetState=function(){oe=0,Z=0,$=null,T.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const Jc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Vs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const jw=new Su(-1,1,1,-1,0,1);class Yw extends wt{constructor(){super(),this.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ot([0,2,0,0,2,0],2))}}const qw=new Yw;class Tu{constructor(e){this._mesh=new lt(qw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,jw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $w extends Vs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ya.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Tu(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class vv extends Vs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,c,4294967295),o.buffers.stencil.setClear(u),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Kw extends Vs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Zw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Je);this._width=i.width,this._height=i.height,t=new Hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $w(Jc),this.copyPass.material.blending=Xi,this.timer=new qS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const c=this.passes[s];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}vv!==void 0&&(c instanceof vv?i=!0:c instanceof Kw&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Qw extends Vs{constructor(e,t,i=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new We}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let o,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=s}}const Jw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class qa extends Vs{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Je(e.x,e.y):new Je(256,256),this.clearColor=new We(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new Hn(o,c,{type:Zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const x=new Hn(o,c,{type:Zn});x.texture.name="UnrealBloomPass.h"+p,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const g=new Hn(o,c,{type:Zn});g.texture.name="UnrealBloomPass.v"+p,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),o=Math.round(o/2),c=Math.round(c/2)}const u=Jw;this.highPassUniforms=Ya.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gt({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new Je(1/o,1/c),o=Math.round(o/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ya.clone(Jc.uniforms),this.blendMaterial=new Gt({uniforms:this.copyUniforms,vertexShader:Jc.vertexShader,fragmentShader:Jc.fragmentShader,premultipliedAlpha:!0,blending:zt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new We,this._oldClearAlpha=1,this._basic=new $n,this._fsQuad=new Tu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new Je(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let u=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[h].uniforms.direction.value=qa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=qa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),u=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=c}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Je(.5,.5)},direction:{value:new Je(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}qa.BlurDirectionX=new Je(1,0);qa.BlurDirectionY=new Je(0,1);const Fc={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class eb extends Vs{constructor(e,t,i){super(),this.scene=e,this.camera=t;const s=i.focus!==void 0?i.focus:1,o=i.aperture!==void 0?i.aperture:.025,c=i.maxblur!==void 0?i.maxblur:1;this._renderTargetDepth=new Hn(1,1,{minFilter:En,magFilter:En,type:Zn}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new Qv,this._materialDepth.depthPacking=Jy,this._materialDepth.blending=Xi;const u=Ya.clone(Fc.uniforms);u.tDepth.value=this._renderTargetDepth.texture,u.focus.value=s,u.aspect.value=t.aspect,u.aperture.value=o,u.maxblur.value=c,u.nearClip.value=t.near,u.farClip.value=t.far,this.materialBokeh=new Gt({defines:Object.assign({},Fc.defines),uniforms:u,vertexShader:Fc.vertexShader,fragmentShader:Fc.fragmentShader}),this.uniforms=u,this._fsQuad=new Tu(this.materialBokeh),this._oldClearColor=new We}render(e,t,i){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);const s=e.getClearAlpha(),o=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=o}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}}const kc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class tb extends Vs{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ya.clone(kc.uniforms),this.material=new Zv({name:kc.name,uniforms:this.uniforms,vertexShader:kc.vertexShader,fragmentShader:kc.fragmentShader}),this._fsQuad=new Tu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Tt.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ep?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===np?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sp?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ip&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class nb extends Gv{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new fn;e.deleteAttribute("uv");const t=new Ci({side:Kn}),i=new Ci,s=new WS(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const o=new lt(e,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const c=new xp(e,i,6),u=new gn;u.position.set(-10.906,2.009,1.846),u.rotation.set(0,-.195,0),u.scale.set(2.328,7.905,4.651),u.updateMatrix(),c.setMatrixAt(0,u.matrix),u.position.set(-5.607,-.754,-.758),u.rotation.set(0,.994,0),u.scale.set(1.97,1.534,3.955),u.updateMatrix(),c.setMatrixAt(1,u.matrix),u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),u.updateMatrix(),c.setMatrixAt(2,u.matrix),u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),u.updateMatrix(),c.setMatrixAt(3,u.matrix),u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),u.updateMatrix(),c.setMatrixAt(4,u.matrix),u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),u.updateMatrix(),c.setMatrixAt(5,u.matrix),this.add(c);const h=new lt(e,La(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const f=new lt(e,La(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const p=new lt(e,La(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const x=new lt(e,La(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const g=new lt(e,La(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const _=new lt(e,La(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function La(a){return new zS({color:0,emissive:16777215,emissiveIntensity:a})}const Mt=Math.PI*2;function xt(a,e,t){return a<e?e:a>t?t:a}function cx(a,e,t){return a+(e-a)*t}function mt(a,e,t,i){return cx(a,e,1-Math.exp(-t*i))}function $o(a,e){return a+Math.random()*(e-a)}function Bc(a){return a[Math.floor(Math.random()*a.length)]}function wu(a){let e=a>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}let xv=0;function Pi(a){return xv++,`${a}-${Date.now().toString(36)}-${xv.toString(36)}${Math.floor(Math.random()*1296).toString(36)}`}function ib(a){const e=xt(a,0,1);return e*e*(3-2*e)}function rb(a){const e=xt(a,0,1);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}function sb(a){const e=a.replace("#",""),t=parseInt(e.length===3?e.split("").map(i=>i+i).join(""):e,16);return[t>>16&255,t>>8&255,t&255]}const Xh={IDLE:{spin:.08,plasma:.6,beam:.15,iris:.05,flicker:.08,turbulence:.03,pulseRate:.25,glowIntensity:.5,signalSpeed:.15},LISTENING:{spin:.18,plasma:.9,beam:.35,iris:.15,flicker:.15,turbulence:.08,pulseRate:.45,glowIntensity:.65,signalSpeed:.28},THINKING:{spin:.55,plasma:1.6,beam:.7,iris:.5,flicker:.4,turbulence:.35,pulseRate:.9,glowIntensity:.85,signalSpeed:.65},TOOL_USE:{spin:.95,plasma:2,beam:.95,iris:.7,flicker:.55,turbulence:.5,pulseRate:1.2,glowIntensity:.95,signalSpeed:.95},SPEAKING:{spin:.42,plasma:1.4,beam:.6,iris:.4,flicker:.32,turbulence:.18,pulseRate:.7,glowIntensity:.75,signalSpeed:.45},ERROR:{spin:1.4,plasma:2.4,beam:1,iris:.85,flicker:.9,turbulence:.75,pulseRate:1.6,glowIntensity:1,signalSpeed:1.2},SUCCESS:{spin:.28,plasma:1.9,beam:.8,iris:.3,flicker:.18,turbulence:.08,pulseRate:.4,glowIntensity:1.1,signalSpeed:.5}},As=new We("#00f0ff"),_v=new We("#d4af37"),ab=new We("#ff3333"),jh=new We("#004455");class ob{constructor(){this.group=new yn,this.platform=new yn,this.arcCount=3,this.orbitRings=[],this.signalCount=24,this.tickCount=96,this.radialCount=64,this.waveT=-1,this.cascadeActive=!1,this.stateParamsCur={...Xh.IDLE},this.targetParams={...Xh.IDLE},this.spinVel=0,this.plasmaCur=.6,this.irisCur=.05,this.turbulenceCur=.03,this.pulseRateCur=.25,this.glowIntensityCur=.5,this.signalSpeedCur=.15,this.tint=new We("#00f0ff"),this.tintTarget=new We("#00f0ff"),this.userTint=new We("#00f0ff"),this.microPulsePhase=0,this.breathPhase=0,this.flashT=-1,this.successGlow=0,this._buildPrimaryArc(),this._buildSignalOrbits(),this._buildComputationalField(),this._buildCentralNode(),this._buildEnergyEvents()}_buildPrimaryArc(){for(let e=0;e<this.arcCount;e++){const t=new Float32Array(384),i=new wt;i.setAttribute("position",new _t(t,3));const s=new Gt({uniforms:{uTime:{value:0},uColor:{value:e===1?_v:As},uIntensity:{value:.6-e*.15},uDashOffset:{value:e*.3}},vertexShader:"uniform float uTime;varying vec3 vColor;uniform vec3 uColor;void main(){vec3 pos=position;float breathe=sin(uTime*0.5)*0.02;pos*=1.0+breathe;float angle=atan(pos.z,pos.x);if(angle>1.8&&angle<2.4)pos*=0.001;vColor=uColor;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}",fragmentShader:"uniform vec3 uColor;uniform float uIntensity;uniform float uDashOffset;varying vec3 vColor;void main(){float dash=mod(gl_FragCoord.x*0.02+uDashOffset,0.15);float alpha=uIntensity*(dash>0.05?1.0:0.3);gl_FragColor=vec4(vColor,alpha);}",transparent:!0,depthWrite:!1,blending:zt}),o=2.8-e*.35,c=Math.PI*1.8,u=Math.PI*.6;for(let f=0;f<128;f++){const p=f/127,x=u+p*c,g=o*(1+.03*Math.sin(p*Math.PI*6));t[f*3]=Math.cos(x)*g,t[f*3+1]=Math.sin(p*Math.PI)*.15*(e+1),t[f*3+2]=Math.sin(x)*g}i.attributes.position.needsUpdate=!0;const h=new Ba(i,s);this.group.add(h),e===0&&(this.primaryArc=h,this.primaryArcMat=s)}}_buildSignalOrbits(){const e=[{radius:3.4,speed:.12,tiltX:.3,tiltZ:.1},{radius:3.8,speed:-.08,tiltX:-.2,tiltZ:.3},{radius:4.2,speed:.05,tiltX:.5,tiltZ:-.2},{radius:4.6,speed:-.04,tiltX:-.4,tiltZ:.4},{radius:5,speed:.03,tiltX:.1,tiltZ:-.3}];for(const s of e){const o=new Float32Array(192);for(let f=0;f<64;f++){const p=f/64*Mt;o[f*3]=Math.cos(p)*s.radius,o[f*3+1]=Math.sin(p)*s.radius*.02,o[f*3+2]=Math.sin(p)*s.radius}const c=new wt;c.setAttribute("position",new _t(o,3));const u=new Gt({uniforms:{uTime:{value:0},uColor:{value:jh},uOpacity:{value:.15}},vertexShader:"uniform float uTime;varying float vAlpha;void main(){float alpha=0.1+0.1*sin(uTime*2.0+position.x);vAlpha=alpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 uColor;uniform float uOpacity;varying float vAlpha;void main(){gl_FragColor=vec4(uColor,uOpacity*vAlpha);}",transparent:!0,depthWrite:!1,blending:zt}),h=new Ba(c,u);h.rotation.x=s.tiltX,h.rotation.z=s.tiltZ,this.group.add(h),this.orbitRings.push({mesh:h,radius:s.radius,speed:s.speed,angle:Math.random()*Mt,tiltX:s.tiltX,tiltZ:s.tiltZ})}this.signalPositions=new Float32Array(this.signalCount*3),this.signalTimes=new Float32Array(this.signalCount);for(let s=0;s<this.signalCount;s++)this.signalTimes[s]=Math.random();const t=new wt;t.setAttribute("position",new _t(this.signalPositions,3));const i=new Wf({color:As,size:.08,transparent:!0,opacity:.8,blending:zt,depthWrite:!1});this.signalParticles=new rs(t,i),this.group.add(this.signalParticles)}_buildComputationalField(){const e=new fn(.008,.08,.008);this.tickMat=new $n({color:As,transparent:!0,opacity:.6,blending:zt,depthWrite:!1}),this.tickRing=new xp(e,this.tickMat,this.tickCount);const t=new Vt;for(let o=0;o<this.tickCount;o++){const c=o/this.tickCount*Mt,u=o%8===0,h=1.6,f=new V(Math.cos(c)*h,0,Math.sin(c)*h),p=new Bs().setFromAxisAngle(new V(0,1,0),-c);t.compose(f,p,new V(1,u?1.8:1,1)),this.tickRing.setMatrixAt(o,t)}this.tickRing.instanceMatrix.needsUpdate=!0,this.group.add(this.tickRing);const i=new Float32Array(this.radialCount*2*3);for(let o=0;o<this.radialCount;o++){const c=o/this.radialCount*Mt;i[o*6]=Math.cos(c)*1.2,i[o*6+1]=.02*Math.sin(o*.5),i[o*6+2]=Math.sin(c)*1.2,i[o*6+3]=Math.cos(c)*1.5,i[o*6+4]=.02*Math.sin(o*.5+.3),i[o*6+5]=Math.sin(c)*1.5}const s=new wt;s.setAttribute("position",new _t(i,3)),this.radialMat=new Gt({uniforms:{uTime:{value:0},uColor:{value:jh},uIntensity:{value:.3}},vertexShader:"uniform float uTime;varying vec3 vColor;uniform vec3 uColor;void main(){float flicker=0.7+0.3*sin(uTime*3.0+position.x*10.0);vColor=uColor*flicker;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vColor;void main(){gl_FragColor=vec4(vColor,0.5);}",transparent:!0,depthWrite:!1,blending:zt}),this.radialLines=new xu(s,this.radialMat),this.group.add(this.radialLines)}_buildCentralNode(){this.nodeMat=new Gt({uniforms:{uTime:{value:0},uColor:{value:As},uIntensity:{value:.8},uAudio:{value:0},uPulsePhase:{value:0}},vertexShader:"varying vec3 vN;varying vec3 vV;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.0);vV=-mv.xyz;gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform float uTime;uniform vec3 uColor;uniform float uIntensity;uniform float uAudio;uniform float uPulsePhase;varying vec3 vN;varying vec3 vV;void main(){float fr=pow(1.0-abs(dot(normalize(vN),normalize(vV))),1.5);float core=0.6+0.4*sin(uTime*2.0+uPulsePhase);vec3 col=uColor*(fr*2.0+core*0.7)*uIntensity*(1.0+uAudio*0.8);col=col/(1.0+0.3*col);gl_FragColor=vec4(col,1.0);}",transparent:!0,depthWrite:!1}),this.centralNode=new lt(new el(.35,32,32),this.nodeMat),this.group.add(this.centralNode),this.nodeGlowMat=new $n({color:As,transparent:!0,opacity:.12,blending:zt,depthWrite:!1}),this.nodeGlow=new lt(new el(.55,24,24),this.nodeGlowMat),this.group.add(this.nodeGlow);const e=new Float32Array(144);for(let i=0;i<48;i++){const s=i/48*Mt,o=.7+.02*Math.sin(i*3);e[i*3]=Math.cos(s)*o,e[i*3+1]=.01*Math.sin(i*5),e[i*3+2]=Math.sin(s)*o}const t=new wt;t.setAttribute("position",new _t(e,3)),this.interferenceMat=new Gt({uniforms:{uTime:{value:0},uColor:{value:jh}},vertexShader:"uniform float uTime;varying float vAlpha;void main(){float wave=0.5+0.5*sin(uTime*4.0+position.x*8.0);vAlpha=0.2*wave;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 uColor;varying float vAlpha;void main(){gl_FragColor=vec4(uColor,vAlpha);}",transparent:!0,depthWrite:!1,blending:zt}),this.interferenceRing=new Ba(t,this.interferenceMat),this.group.add(this.interferenceRing)}_buildEnergyEvents(){const e=new Tp(.5,.52,48);this.waveMat=new $n({color:As,transparent:!0,opacity:0,blending:zt,depthWrite:!1,side:xi}),this.waveRing=new lt(e,this.waveMat),this.waveRing.rotation.x=Math.PI/2,this.group.add(this.waveRing),this.cascadePositions=new Float32Array(144),this.cascadeVelocities=new Float32Array(144);const t=new wt;t.setAttribute("position",new _t(this.cascadePositions,3));const i=new Wf({color:_v,size:.06,transparent:!0,opacity:0,blending:zt,depthWrite:!1});this.cascadeParticles=new rs(t,i),this.group.add(this.cascadeParticles)}setTint(e){this.userTint.set(e),this.tintTarget.copy(this.userTint)}setEmissive(){}setArcVisible(e){this.group.visible=e}setState(e){this.targetParams={...Xh[e]},e==="SUCCESS"?(this.flashT=0,this.successGlow=1,this._triggerCascade(As)):e==="ERROR"&&(this.flashT=0,this._triggerCascade(ab))}pulse(){this.flashT=.3}_triggerCascade(e){this.cascadeActive=!0;for(let t=0;t<48;t++){const i=t/48*Mt,s=.4;this.cascadePositions[t*3]=Math.cos(i)*s,this.cascadePositions[t*3+1]=.01,this.cascadePositions[t*3+2]=Math.sin(i)*s;const o=2+Math.random()*1.5;this.cascadeVelocities[t*3]=Math.cos(i)*o,this.cascadeVelocities[t*3+1]=.3+Math.random()*.2,this.cascadeVelocities[t*3+2]=Math.sin(i)*o}this.cascadeParticles.material.color.copy(e),this.cascadeParticles.material.opacity=.8}update(e,t,i,s){const o=this.targetParams;this.stateParamsCur.spin=mt(this.stateParamsCur.spin,o.spin,2.5,e),this.stateParamsCur.plasma=mt(this.stateParamsCur.plasma,o.plasma,2,e),this.stateParamsCur.iris=mt(this.stateParamsCur.iris,o.iris,1.8,e),this.stateParamsCur.turbulence=mt(this.stateParamsCur.turbulence,o.turbulence,2.2,e),this.stateParamsCur.pulseRate=mt(this.stateParamsCur.pulseRate,o.pulseRate,2.5,e),this.stateParamsCur.glowIntensity=mt(this.stateParamsCur.glowIntensity,o.glowIntensity,2,e),this.stateParamsCur.signalSpeed=mt(this.stateParamsCur.signalSpeed,o.signalSpeed,3.5,e),this.spinVel=mt(this.spinVel,o.spin*.5,1.5,e),this.plasmaCur=mt(this.plasmaCur,o.plasma,2,e),this.irisCur=mt(this.irisCur,o.iris,1.8,e),this.turbulenceCur=mt(this.turbulenceCur,o.turbulence,2.2,e),this.pulseRateCur=mt(this.pulseRateCur,o.pulseRate,2.5,e),this.glowIntensityCur=mt(this.glowIntensityCur,o.glowIntensity,2,e),this.signalSpeedCur=mt(this.signalSpeedCur,o.signalSpeed,3.5,e),this.tint.lerp(this.tintTarget,Math.min(1,e*.3)),this.breathPhase+=e*(.5+this.pulseRateCur*2),this.microPulsePhase+=e*(4+this.pulseRateCur*8),this.primaryArcMat&&(this.primaryArcMat.uniforms.uTime.value=t,this.primaryArcMat.uniforms.uIntensity.value=.5+this.plasmaCur*.3);for(const c of this.orbitRings)c.angle+=e*c.speed*(1+this.signalSpeedCur*2),c.mesh.rotation.y=c.angle,c.mesh.material.uniforms.uTime.value=t,c.mesh.material.uniforms.uOpacity.value=.1+.1*this.glowIntensityCur;for(let c=0;c<this.signalCount;c++){this.signalTimes[c]+=e*(.15+this.signalSpeedCur*.5),this.signalTimes[c]>1&&(this.signalTimes[c]-=1);const u=c%this.orbitRings.length,h=this.orbitRings[u],f=this.signalTimes[c]*Mt,p=h.radius,x=Math.cos(f+h.angle)*p,g=Math.sin(f)*p*.02,_=Math.sin(f+h.angle)*p;this.signalPositions[c*3]=x,this.signalPositions[c*3+1]=g*Math.cos(h.tiltX)-_*Math.sin(h.tiltX),this.signalPositions[c*3+2]=g*Math.sin(h.tiltX)+_*Math.cos(h.tiltX)}if(this.signalParticles.geometry.attributes.position.needsUpdate=!0,this.tickRing.rotation.y+=e*this.spinVel*.3,this.tickMat.opacity=.4+this.glowIntensityCur*.3,this.radialMat.uniforms.uTime.value=t,this.radialMat.uniforms.uIntensity.value=.2+this.stateParamsCur.flicker*.2,this.nodeMat.uniforms.uTime.value=t,this.nodeMat.uniforms.uIntensity.value=.6+this.plasmaCur*.4,this.nodeMat.uniforms.uAudio.value=i.talk,this.nodeMat.uniforms.uPulsePhase.value=this.microPulsePhase,this.nodeGlow.scale.setScalar(1+Math.sin(this.breathPhase)*.08*this.irisCur),this.nodeGlowMat.opacity=.08+this.glowIntensityCur*.06,this.interferenceMat.uniforms.uTime.value=t,this.interferenceRing.rotation.z-=e*.1*(1+this.turbulenceCur),this.flashT>=0){this.flashT-=e;const c=Math.max(0,this.flashT/.3);this.waveMat.opacity=c*.6;const u=1+(1-c)*2.5;this.waveRing.scale.set(u,u,1)}if(this.cascadeActive){for(let c=0;c<48;c++){this.cascadePositions[c*3]+=this.cascadeVelocities[c*3]*e,this.cascadePositions[c*3+1]+=this.cascadeVelocities[c*3+1]*e,this.cascadePositions[c*3+2]+=this.cascadeVelocities[c*3+2]*e;const u=Math.sqrt(this.cascadePositions[c*3]**2+this.cascadePositions[c*3+1]**2+this.cascadePositions[c*3+2]**2),h=Math.max(0,1-u/3);this.cascadeParticles.material.opacity=.8*h}this.cascadeParticles.geometry.attributes.position.needsUpdate=!0,this.cascadeParticles.material.opacity<.05&&(this.cascadeActive=!1)}this.successGlow>0&&(this.successGlow=Math.max(0,this.successGlow-e*.8))}dispose(){this.group.clear()}}const zc=48e3,Gc=800,Sr=15,lb={IDLE:.55,LISTENING:.8,THINKING:1.25,TOOL_USE:1.5,SPEAKING:1.15,ERROR:1.7,SUCCESS:1.45},cb=`
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
`,ub=`
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
`,db=`
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
`;class hb{constructor(){this.group=new yn,this.rings=[],this.ringMats=[],this.subBeams=new yn,this.intensity=.55,this.tint=new We("#00f0ff"),this.targetIntensity=.55,this.userTint=new We("#00f0ff"),this.tintTarget=new We("#00f0ff"),this.intensityScale=1;const e=wu(4242),t=new Float32Array(zc*3),i=new Float32Array(zc),s=new Float32Array(zc),o=9;for(let _=0;_<zc;_++)i[_]=e(),s[_]=Math.floor(e()*o),t[_*3+1]=e()*Sr;const c=new wt;c.setAttribute("position",new _t(t,3)),c.setAttribute("aSeed",new _t(i,1)),c.setAttribute("aStrand",new _t(s,1)),this.mat=new Gt({uniforms:{uTime:{value:0},uAudio:{value:0},uMid:{value:0},uIntensity:{value:1},uDensity:{value:1},uScale:{value:1},uTint:{value:this.tint}},vertexShader:cb,fragmentShader:ub,transparent:!0,depthWrite:!1,blending:zt});const u=new rs(c,this.mat);u.frustumCulled=!1,this.group.add(u),this.coreMat=new Gt({uniforms:{uTime:{value:0},uTint:{value:this.tint},uAudio:{value:0},uIntensity:{value:1}},vertexShader:`
        varying vec3 vN; varying vec3 vV; varying vec2 vUv;
        void main(){
          vUv = uv;
          vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vV = -mv.xyz;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:db,transparent:!0,depthWrite:!1,blending:zt,side:xi});const h=new lt(new Wa(.5,.62,Sr,28,40,!0),this.coreMat);h.position.y=Sr/2,this.group.add(h);for(let _=0;_<6;_++){const M=[],b=_/6*Mt;for(let y=0;y<=90;y++){const P=y/90*Sr,L=b+P*.9,A=1.15+.5*Math.sin(P*.5+b);M.push(new V(Math.cos(L)*A,P,Math.sin(L)*A))}const v=new Ba(new wt().setFromPoints(M),new Va({color:_%2===0?61695:13938487,transparent:!0,opacity:.3,blending:zt,depthWrite:!1,toneMapped:!1}));this.subBeams.add(v)}this.group.add(this.subBeams);for(let _=0;_<5;_++){const M=new $n({color:61695,transparent:!0,opacity:.22,blending:zt,depthWrite:!1,toneMapped:!1}),b=new lt(new yu(1.5-_*.06,.02,8,64),M);b.rotation.x=Math.PI/2,b.position.y=.4+_*(Sr/5),this.rings.push(b),this.ringMats.push(M),this.group.add(b)}this.streakData=new Float32Array(Gc*5);const f=new Float32Array(Gc*6);for(let _=0;_<Gc;_++)this.streakData[_*5]=(e()*2-1)*1.6,this.streakData[_*5+1]=e()*Sr,this.streakData[_*5+2]=(e()*2-1)*1.6,this.streakData[_*5+3]=2.5+e()*5,this.streakData[_*5+4]=e();this.streakGeo=new wt,this.streakGeo.setAttribute("position",new _t(f,3).setUsage(Us)),this.streakMat=new Va({color:8050687,transparent:!0,opacity:.32,blending:zt,depthWrite:!1,toneMapped:!1});const p=new xu(this.streakGeo,this.streakMat);p.frustumCulled=!1,this.group.add(p);const x=new $n({color:61695,transparent:!0,opacity:.4,blending:zt,depthWrite:!1,toneMapped:!1}),g=new lt(new yp(2.2,48),x);g.rotation.x=-Math.PI/2,g.position.y=.03,this.group.add(g),this.baseMat=x}setState(e){this.targetIntensity=lb[e],e==="ERROR"?this.tintTarget.set("#ff5533"):e==="SUCCESS"?this.tintTarget.set("#00ff66"):this.tintTarget.copy(this.userTint)}setTint(e){this.userTint.set(e),this.tintTarget.set(e)}setDensity(e){this.mat.uniforms.uDensity.value=xt(e,.05,1)}setScale(e){this.mat.uniforms.uScale.value=xt(e,.3,3)}setIntensityScale(e){this.intensityScale=xt(e,.2,3)}update(e,t,i){this.intensity=mt(this.intensity,this.targetIntensity*this.intensityScale,2.2,e),this.tint.lerp(this.tintTarget,Math.min(1,e*2.4)),this.mat.uniforms.uTime.value=t,this.mat.uniforms.uAudio.value=i.bass,this.mat.uniforms.uMid.value=i.mid,this.mat.uniforms.uIntensity.value=this.intensity,this.coreMat.uniforms.uTime.value=t,this.coreMat.uniforms.uAudio.value=i.level,this.coreMat.uniforms.uIntensity.value=this.intensity,this.mat.uniforms.uTint.value.copy(this.tint),this.coreMat.uniforms.uTint.value.copy(this.tint),this.subBeams.rotation.y+=e*.5*this.intensity;for(let c=0;c<this.rings.length;c++){const u=this.rings[c];u.rotation.z+=e*(c%2===0?.7:-.5)*this.intensity;const h=1+i.bass*.25+Math.sin(t*2+c)*.03;u.scale.setScalar(h),this.ringMats[c].opacity=.14+i.high*.3+Math.sin(t*3+c*2)*.05,this.ringMats[c].color.copy(this.tint)}this.baseMat.opacity=.25+i.bass*.4,this.baseMat.color.copy(this.tint);const s=this.streakGeo.getAttribute("position"),o=s.array;for(let c=0;c<Gc;c++){const u=this.streakData;let h=u[c*5+1]+u[c*5+3]*e*this.intensity;h>Sr&&(h-=Sr),u[c*5+1]=h;const f=t*.6+u[c*5+4]*Mt+h*.3,p=u[c*5]*Math.cos(f)*.4,x=u[c*5+2]*Math.sin(f)*.4;o[c*6]=p,o[c*6+1]=h,o[c*6+2]=x,o[c*6+3]=p,o[c*6+4]=Math.max(0,h-.55-i.bass*.4),o[c*6+5]=x}s.needsUpdate=!0,this.streakMat.color.copy(this.tint)}}const eu=13e3,$f=5500,fb=eu+$f,Ps=65e3,Cs=1500,pb=`
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
`,mb=`
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
`;class gb{constructor(){this.group=new yn,this.sparkHead=0,this.turb=0;const e=wu(1337),t=eu+$f,i=new Float32Array(t*3),s=new Float32Array(t*4),o=new Float32Array(t),c=new Float32Array(t);for(let f=0;f<eu;f++){const p=4+e()*22,x=e()*Mt;i[f*3]=Math.cos(x)*p,i[f*3+1]=(e()-.35)*14,i[f*3+2]=Math.sin(x)*p,o[f]=e(),c[f]=0}for(let f=0;f<$f;f++){const p=eu+f;s[p*4]=2.2+e()*3.4,s[p*4+1]=(.1+e()*.5)*(e()<.5?1:-1),s[p*4+2]=e()*Mt,s[p*4+3]=(e()-.5)*3.4,o[p]=e(),c[p]=1}const u=new wt;u.setAttribute("position",new _t(i,3)),u.setAttribute("aData",new _t(s,4)),u.setAttribute("aSeed",new _t(o,1)),u.setAttribute("aMode",new _t(c,1)),this.mat=new Gt({uniforms:{uTime:{value:0},uTurb:{value:0},uAudio:{value:0},uDustDensity:{value:.85},uStreamDensity:{value:1},uDustScale:{value:1},uStreamScale:{value:1},uColA:{value:new We("#1e6f7a")},uColB:{value:new We("#d4af37")}},vertexShader:pb,fragmentShader:mb,transparent:!0,depthWrite:!1,blending:zt}),this.points=new rs(u,this.mat),this.points.frustumCulled=!1,this.group.add(this.points),this.sparkPos=new Float32Array(Cs*3),this.sparkVel=new Float32Array(Cs*3),this.sparkLife=new Float32Array(Cs),this.sparkColor=new Float32Array(Cs*3);const h=new wt;h.setAttribute("position",new _t(this.sparkPos,3).setUsage(Us)),h.setAttribute("aLife",new _t(this.sparkLife,1).setUsage(Us)),h.setAttribute("aColor",new _t(this.sparkColor,3).setUsage(Us)),this.sparkMat=new Gt({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`,transparent:!0,depthWrite:!1,blending:zt}),this.sparks=new rs(h,this.sparkMat),this.sparks.frustumCulled=!1,this.group.add(this.sparks)}setDensity(e,t){this.mat.uniforms.uDustDensity.value=xt(e,0,1),this.mat.uniforms.uStreamDensity.value=xt(t,0,1)}setScale(e,t){this.mat.uniforms.uDustScale.value=xt(e,.2,3),this.mat.uniforms.uStreamScale.value=xt(t,.2,3)}burstAt(e,t,i){const s=new We(t),o=i??new V(0,2.6,0);for(let c=0;c<e;c++){const u=this.sparkHead;this.sparkHead=(this.sparkHead+1)%Cs,this.sparkPos[u*3]=o.x+(Math.random()-.5)*.3,this.sparkPos[u*3+1]=o.y+(Math.random()-.5)*.3,this.sparkPos[u*3+2]=o.z+(Math.random()-.5)*.3;const h=Math.random()*Mt,f=(Math.random()-.5)*Math.PI,p=1.5+Math.random()*3.5;this.sparkVel[u*3]=Math.cos(h)*Math.cos(f)*p,this.sparkVel[u*3+1]=Math.sin(f)*p*.9+.8,this.sparkVel[u*3+2]=Math.sin(h)*Math.cos(f)*p,this.sparkLife[u]=1,this.sparkColor[u*3]=s.r,this.sparkColor[u*3+1]=s.g,this.sparkColor[u*3+2]=s.b}}stir(){this.turb=1}activeSparks(){let e=0;for(let t=0;t<Cs;t++)this.sparkLife[t]>0&&e++;return e}update(e,t,i){this.mat.uniforms.uTime.value=t,this.mat.uniforms.uAudio.value=i.level,this.turb=mt(this.turb,0,1.6,e),this.mat.uniforms.uTurb.value=this.turb;const s=Math.sin(t*2.3)*.3+Math.cos(t*4.7)*.2;this.mat.uniforms.uStreamScale.value=1+s*.15*(1+this.turb*.5);let o=!1;for(let c=0;c<Cs;c++)this.sparkLife[c]<=0||(o=!0,this.sparkLife[c]=Math.max(0,this.sparkLife[c]-e*.9),this.sparkVel[c*3+1]-=e*2.4,this.sparkPos[c*3]+=this.sparkVel[c*3]*e,this.sparkPos[c*3+1]+=this.sparkVel[c*3+1]*e,this.sparkPos[c*3+2]+=this.sparkVel[c*3+2]*e,this.sparkLife[c]<=0&&(this.sparkPos[c*3+1]=-999));o&&(this.sparks.geometry.getAttribute("position").needsUpdate=!0,this.sparks.geometry.getAttribute("aLife").needsUpdate=!0,this.sparks.geometry.getAttribute("aColor").needsUpdate=!0)}}const tu=[{kind:"e",c:[0,1.62,0],r:[.155,.185,.165],w:.16},{kind:"e",c:[0,1.63,.13],r:[.028,.034,.03],w:.012},{kind:"e",c:[0,1.715,.125],r:[.1,.02,.028],w:.012},{kind:"e",c:[.15,1.63,.01],r:[.018,.04,.028],w:.008},{kind:"e",c:[-.15,1.63,.01],r:[.018,.04,.028],w:.008},{kind:"c",a:[0,1.47,0],b:[0,1.39,0],r:.058,w:.02},{kind:"e",c:[0,1.13,0],r:[.205,.29,.128],w:.24},{kind:"e",c:[0,1.24,.09],r:[.15,.13,.05],w:.05},{kind:"e",c:[0,.95,0],r:[.175,.05,.115],w:.03},{kind:"e",c:[0,.8,0],r:[.165,.115,.105],w:.07},{kind:"e",c:[.27,1.36,0],r:[.075,.06,.07],w:.035},{kind:"e",c:[-.27,1.36,0],r:[.075,.06,.07],w:.035},{kind:"c",a:[.285,1.34,0],b:[.35,1.06,.03],r:.052,w:.05},{kind:"c",a:[-.285,1.34,0],b:[-.35,1.06,.03],r:.052,w:.05},{kind:"c",a:[.35,1.06,.03],b:[.3,.8,.06],r:.042,w:.045},{kind:"c",a:[-.35,1.06,.03],b:[-.3,.8,.06],r:.042,w:.045},{kind:"e",c:[.3,.74,.07],r:[.045,.065,.04],w:.02},{kind:"e",c:[-.3,.74,.07],r:[.045,.065,.04],w:.02},{kind:"c",a:[.1,.73,0],b:[.115,.4,.02],r:.068,w:.08},{kind:"c",a:[-.1,.73,0],b:[-.115,.4,.02],r:.068,w:.08},{kind:"c",a:[.115,.4,.02],b:[.11,.09,0],r:.048,w:.07},{kind:"c",a:[-.115,.4,.02],b:[-.11,.09,0],r:.048,w:.07},{kind:"e",c:[.11,.05,.045],r:[.055,.042,.11],w:.02},{kind:"e",c:[-.11,.05,.045],r:[.055,.042,.11],w:.02}],Yh=[0,1.62,0];function vb(a,e){const t=(a[0]-e.c[0])/e.r[0],i=(a[1]-e.c[1])/e.r[1],s=(a[2]-e.c[2])/e.r[2],o=Math.sqrt(t*t+i*i+s*s),c=Math.min(e.r[0],Math.min(e.r[1],e.r[2]));return(o-1)*c}function xb(a,e){const t=a[0]-e.a[0],i=a[1]-e.a[1],s=a[2]-e.a[2],o=e.b[0]-e.a[0],c=e.b[1]-e.a[1],u=e.b[2]-e.a[2],h=o*o+c*c+u*u,f=xt((t*o+i*c+s*u)/Math.max(1e-6,h),0,1),p=t-o*f,x=i-c*f,g=s-u*f;return Math.sqrt(p*p+x*x+g*g)-e.r}function _b(a){let e=1/0;for(const t of tu){const i=t.kind==="e"?vb(a,t):xb(a,t);i<e&&(e=i)}return e}function yb(a,e){const t=new Float32Array(a*3),i=tu.reduce((u,h)=>u+h.w,0),s=.026,o=[0,0,0],c=()=>{let u=e()*i;for(const h of tu)if(u-=h.w,u<=0)return h;return tu[0]};for(let u=0;u<a;u++){let h=!1;for(let f=0;f<12&&!h;f++){if(e()<.72){const M=c();if(M.kind==="e")o[0]=M.c[0]+(e()*2-1)*M.r[0]*1.45,o[1]=M.c[1]+(e()*2-1)*M.r[1]*1.45,o[2]=M.c[2]+(e()*2-1)*M.r[2]*1.45;else{const b=e();o[0]=M.a[0]+(M.b[0]-M.a[0])*b+(e()*2-1)*M.r*1.9,o[1]=M.a[1]+(M.b[1]-M.a[1])*b+(e()*2-1)*M.r*1.9,o[2]=M.a[2]+(M.b[2]-M.a[2])*b+(e()*2-1)*M.r*1.9}}else o[0]=(e()*2-1)*.72,o[1]=e()*2.02-.02,o[2]=(e()*2-1)*.42;const p=_b(o),x=Math.abs(p)<s,g=p<0&&e()<.16,_=o[2]>.02&&(o[0]-Yh[0])**2+(o[1]-Yh[1])**2+(o[2]-Yh[2])**2<.03&&p<.05;(x||g||_)&&(t[u*3]=o[0]*1.22,t[u*3+1]=o[1]*1.22,t[u*3+2]=o[2]*1.22,h=!0)}if(!h){const f=c();if(f.kind==="e"){const p=e()*2-1,x=e()*Mt,g=Math.cbrt(e()),_=Math.sqrt(1-p*p);t[u*3]=(f.c[0]+_*Math.cos(x)*g*f.r[0])*1.22,t[u*3+1]=(f.c[1]+p*g*f.r[1])*1.22,t[u*3+2]=(f.c[2]+_*Math.sin(x)*g*f.r[2])*1.22}else{const p=e(),x=e()*Mt,g=Math.sqrt(e())*f.r;t[u*3]=(f.a[0]+(f.b[0]-f.a[0])*p+Math.cos(x)*g)*1.22,t[u*3+1]=(f.a[1]+(f.b[1]-f.a[1])*p)*1.22,t[u*3+2]=(f.a[2]+(f.b[2]-f.a[2])*p+Math.sin(x)*g)*1.22}}}return t}const Sb=`
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
`,Mb=`
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
`;class Eb{constructor(){this.group=new yn,this.morphTarget=0;const e=wu(777),t=yb(Ps,e),i=new Float32Array(Ps*3),s=new Float32Array(Ps);for(let x=0;x<Ps;x++){const g=2.6+e()*4.6,M=e()*Mt+g*.35;i[x*3]=Math.cos(M)*g,i[x*3+1]=1.1+(e()-.5)*3.2,i[x*3+2]=Math.sin(M)*g,s[x]=e()}const o=new wt;o.setAttribute("position",new _t(i,3)),o.setAttribute("aTarget",new _t(t,3)),o.setAttribute("aSeed",new _t(s,1)),this.mat=new Gt({uniforms:{uMorph:{value:0},uTime:{value:0},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uTalk:{value:0}},vertexShader:Sb,fragmentShader:Mb,transparent:!0,depthWrite:!1,blending:zt});const c=new rs(o,this.mat);c.frustumCulled=!1,this.group.add(c);const u=[[0,2.42,0],[0,2.2,0],[0,1.98,0],[0,1.72,0],[0,1.46,0],[0,1.16,0],[0,.92,0],[.41,1.98,0],[-.41,1.98,0],[.52,1.56,.05],[-.52,1.56,.05],[.45,1.16,.09],[-.45,1.16,.09],[.17,.62,.02],[-.17,.62,.02],[.16,.12,0],[-.16,.12,0]],h=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[2,7],[2,8],[7,9],[8,10],[9,11],[10,12],[6,13],[6,14],[13,15],[14,16],[13,14],[3,4]],f=[];for(const[x,g]of h){const _=u[x],M=u[g],b=6;for(let v=0;v<b;v++){const y=v/b,P=(v+1)/b;f.push(_[0]+(M[0]-_[0])*y,_[1]+(M[1]-_[1])*y,_[2]+(M[2]-_[2])*y,_[0]+(M[0]-_[0])*P,_[1]+(M[1]-_[1])*P,_[2]+(M[2]-_[2])*P)}}for(let x=0;x<300;x++){const g=Math.floor(e()*Ps)*3,_=Math.floor(e()*Ps)*3,M=t[g],b=t[g+1],v=t[g+2],y=t[_],P=t[_+1],L=t[_+2],A=(M-y)**2+(b-P)**2+(v-L)**2;A<.09&&A>.004&&f.push(M,b,v,y,P,L)}const p=new wt;p.setAttribute("position",new _t(new Float32Array(f),3)),this.beamMat=new Va({color:61695,transparent:!0,opacity:0,blending:zt,depthWrite:!1,toneMapped:!1}),this.beams=new xu(p,this.beamMat),this.beams.frustumCulled=!1,this.group.add(this.beams),this.group.position.y=.02}setMorphTarget(e){this.morphTarget=xt(e,0,1)}morphValue(){return this.mat.uniforms.uMorph.value}update(e,t,i){this.mat.uniforms.uMorph.value=mt(this.mat.uniforms.uMorph.value,this.morphTarget,1.7,e),this.mat.uniforms.uTime.value=t,this.mat.uniforms.uBass.value=i.bass,this.mat.uniforms.uMid.value=i.mid,this.mat.uniforms.uHigh.value=i.high,this.mat.uniforms.uTalk.value=i.talk,this.beamMat.opacity=this.morphValue()*(.16+i.level*.22),this.group.rotation.y=Math.sin(t*.23)*.3*this.morphValue()}}const yv=Array.from({length:8},(a,e)=>e/8*Mt+Mt/16),Vc=4.6,Sv=6.4;class Tb{constructor(){this.group=new yn,this.agentsGroup=new yn,this.wp=[],this.adj=new Map,this.agents=[],this.screens=[],this.sweep=null,this.briefing=0,this.schedAcc=0,this.syncAcc=0,this.warnPulse=0,this.rosterVersion=-1,this.hemi=null,this.key=null,this.rim=null,this.lightMul=1,this.holoMul=1,this.screenMats=[],this.glowMats=[],this.localMat=null,this.corridorNodes=[],this.approachNodes=[],this.centerNodes=[],this.patrolIdx=0,this.floorMat=null,this.deskPositions=[],this.buildGraph(),this.buildEnvironment(),this.tableHolo=new lt,this.tableGlow=new $n,this.buildTable(),this.group.add(this.agentsGroup),bt.on("SYSTEM_WARNING",()=>{this.warnPulse=1}),bt.on("AGENT_TASK_ASSIGNED",({agentId:e,task:t})=>{const i=this.agents.find(s=>s.def.id===e);i&&(i.task=t,i.progress=0)})}bindLights(e,t,i){this.hemi=e,this.key=t,this.rim=i}setLighting(e){this.lightMul=xt(e,0,3),this.hemi&&(this.hemi.intensity=.75*this.lightMul),this.key&&(this.key.intensity=1.5*this.lightMul),this.rim&&(this.rim.intensity=.8*this.lightMul)}setMaterials(e){this.holoMul=xt(e.holoOpacity,0,1);for(const t of this.screenMats)t.opacity=.96*Math.max(.08,this.holoMul);for(const t of this.glowMats)t.emissiveIntensity=1.5*(.35+this.holoMul)}setParticles(e){this.localMat&&(this.localMat.uniforms.uDensity.value=xt(e.density,0,1))}buildGraph(){let e=0;const t=(o,c)=>(this.wp.push({id:e,pos:new V(o,0,c)}),this.adj.set(e,[]),e++),i=(o,c)=>{var u,h;(u=this.adj.get(o))==null||u.push(c),(h=this.adj.get(c))==null||h.push(o)},s=[];for(let o=0;o<16;o++){const c=o/16*Mt;s.push(t(Math.cos(c)*Vc,Math.sin(c)*Vc))}for(let o=0;o<16;o++)i(s[o],s[(o+1)%16]);this.approachNodes=[];for(let o=0;o<8;o++){const c=yv[o],u=t(Math.cos(c)*(Vc+.95),Math.sin(c)*(Vc+.95));this.approachNodes.push(u);const h=Math.round(c/Mt*16)%16;i(u,s[h]),i(u,s[(h+15)%16])}this.centerNodes=[];for(let o=0;o<3;o++){const c=o/3*Mt+.5,u=t(Math.cos(c)*1.15,Math.sin(c)*1.15);this.centerNodes.push(u)}i(this.centerNodes[0],this.centerNodes[1]),i(this.centerNodes[1],this.centerNodes[2]),i(this.centerNodes[2],this.centerNodes[0]);for(let o=0;o<3;o++)i(this.centerNodes[o],s[(o*5+2)%16]),i(this.centerNodes[o],s[(o*5+3)%16]);this.corridorNodes=s}findPath(e,t){if(e===t)return[this.wp[t].pos.clone()];const i=new Map,s=new Map,o=new Set;i.set(e,0);for(let h=0;h<this.wp.length*4;h++){let f=-1,p=1/0;for(const[x,g]of i)!o.has(x)&&g<p&&(p=g,f=x);if(f===-1||f===t)break;o.add(f);for(const x of this.adj.get(f)??[]){const g=this.wp[f].pos.distanceTo(this.wp[x].pos),_=p+g;_<(i.get(x)??1/0)&&(i.set(x,_),s.set(x,f))}}const c=[];let u=t;for(;u!==void 0&&u!==e;)c.push(this.wp[u].pos.clone()),u=s.get(u);return c.reverse()}nearestNode(e){let t=0,i=1/0;for(const s of this.wp){const o=s.pos.distanceToSquared(e);o<i&&(i=o,t=s.id)}return t}buildEnvironment(){const e=new Gt({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`}),t=new lt(new Xa(34,34),e);t.rotation.x=-Math.PI/2,t.position.y=-.01,this.group.add(t),this.floorMat=e;for(let o=0;o<8;o++){const c=o/8*Mt,u=new lt(new fn(.14,2.7,.14),new Ci({color:1052694,metalness:.9,roughness:.35}));u.position.set(Math.cos(c)*8.8,1.35,Math.sin(c)*8.8);const h=new lt(new fn(.2,.09,.2),new Ci({color:271658,emissive:61695,emissiveIntensity:1.6,metalness:.4,roughness:.4}));h.position.set(Math.cos(c)*8.8,2.72,Math.sin(c)*8.8),this.group.add(u,h)}const i=[];for(let o=0;o<=64;o++){const c=o/64*Mt;i.push(new V(Math.cos(c)*8.8,.03,Math.sin(c)*8.8))}const s=new Ba(new wt().setFromPoints(i),new Va({color:61695,transparent:!0,opacity:.18,blending:zt}));this.group.add(s);for(let o=0;o<8;o++)this.buildDesk(o);this.buildLocalParticles()}buildLocalParticles(){const t=new Float32Array(4200),i=new Float32Array(1400);for(let c=0;c<1400;c++){const u=Math.random()*Mt,h=1.2+Math.random()*8.4;t[c*3]=Math.cos(u)*h,t[c*3+1]=Math.random()*3.4,t[c*3+2]=Math.sin(u)*h,i[c]=Math.random()}const s=new wt;s.setAttribute("position",new _t(t,3)),s.setAttribute("aSeed",new _t(i,1)),this.localMat=new Gt({uniforms:{uTime:{value:0},uDensity:{value:.85}},vertexShader:`
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
        }`,transparent:!0,depthWrite:!1,blending:zt});const o=new rs(s,this.localMat);o.frustumCulled=!1,this.group.add(o)}buildDesk(e){var P;const t=yv[e],i=new yn,s=Math.cos(t)*Sv,o=Math.sin(t)*Sv;i.position.set(s,0,o),i.lookAt(0,0,0);const c=new Ci({color:1184282,metalness:.88,roughness:.34}),u=new lt(new fn(1.6,.06,.72),c);u.position.y=.94;const h=new lt(new fn(.06,.94,.6),c);h.position.set(-.72,.47,0);const f=h.clone();f.position.x=.72,i.add(u,h,f);const p=document.createElement("canvas");p.width=256,p.height=150;const x=p.getContext("2d"),g=new qv(p);g.colorSpace=li;const _=((P=Me.getState().agentDefs[e])==null?void 0:P.role)??"CODER";x&&this.screens.push({ctx:x,tex:g,role:_,acc:Math.random()*.2,seed:Math.random()*100});const M=new $n({map:g,transparent:!0,opacity:.96,toneMapped:!1,side:xi});this.screenMats.push(M);const b=new lt(new Xa(1.24,.72),M);b.position.set(0,1.62,-.12),b.rotation.x=-.12,i.add(b);const v=new Ci({color:271658,emissive:61695,emissiveIntensity:1.5,metalness:.4,roughness:.4});this.glowMats.push(v);const y=new lt(new fn(1.3,.02,.05),v);y.position.set(0,.975,.34),i.add(y),this.group.add(i),this.deskPositions.push(new V(s,0,o))}buildTable(){const e=new Ci({color:1184282,metalness:.9,roughness:.3}),t=new lt(new Wa(1.05,1.2,.1,32),e);t.position.y=.88;const i=new lt(new Wa(.24,.4,.85,16),e);i.position.y=.42;const s=new lt(new yu(1.06,.025,8,48),new Ci({color:2892296,emissive:13938487,emissiveIntensity:1.4,metalness:.85,roughness:.3}));s.rotation.x=Math.PI/2,s.position.y=.93,this.tableGlow=new $n({color:61695,wireframe:!0,transparent:!0,opacity:.4,blending:zt,depthWrite:!1,toneMapped:!1}),this.tableHolo=new lt(new Ep(.55,1),this.tableGlow),this.tableHolo.position.y=1.75,this.group.add(t,i,s,this.tableHolo)}buildRoster(e){for(this.rosterVersion++;this.agentsGroup.children.length>0;){const t=this.agentsGroup.children[0];this.agentsGroup.remove(t)}this.agents=[],this.sweep=null,e.forEach((t,i)=>{const s=this.screens[i];s&&(s.role=t.role)}),e.forEach((t,i)=>{const s=this.buildBody(t),o=this.approachNodes[t.workstation%this.approachNodes.length];s.group.position.copy(this.wp[o].pos),this.agentsGroup.add(s.group);const c={def:t,body:s,mode:"WORKING",modeAfterTransit:"WORKING",path:[],pathIdx:0,velocity:new V,yaw:Math.atan2(-s.group.position.x,-s.group.position.z),task:Bc(jc[t.role]),progress:Math.random()*55,dwell:0,scanAng:0,briefTimer:0,moveAmount:0};if(s.group.rotation.y=c.yaw,this.agents.push(c),t.role==="SECURITY"){const u=new lt(new Sp(1.5,4.4,24,1,!0),new $n({color:16724787,transparent:!0,opacity:.1,blending:zt,depthWrite:!1,side:xi,toneMapped:!1}));u.rotation.x=Math.PI/2,u.position.set(0,1.1,2.2),s.group.add(u),this.sweep=u,c.mode="SCANNING",this.sendToPatrol(c)}i===0&&(c.dwell=3)})}buildBody(e){const t=new yn,i=new We(e.color),s=new Ci({color:1513247,metalness:.62,roughness:.46,flatShading:!0}),o=new Ci({color:921108,metalness:.7,roughness:.4,flatShading:!0}),c=new Ci({color:657934,emissive:i,emissiveIntensity:2,metalness:.4,roughness:.4}),u=new Ci({color:328968,emissive:i,emissiveIntensity:2.6,metalness:.2,roughness:.3}),h=new lt(new fn(.32,.2,.2),o);h.position.y=.92;const f=new lt(new fn(.42,.52,.24),s);f.position.y=1.3;const p=new lt(new fn(.3,.06,.03),c);p.position.set(0,1.38,.13);const x=new lt(new Mp(.15,0),s);x.position.y=1.76;const g=new lt(new fn(.2,.05,.03),u);g.position.set(0,1.77,.13),t.add(h,f,p,x,g);const _=(K,te,Y)=>{const oe=new lt(new fn(K,te,K),Y);return oe.position.y=-te/2,oe},M=(K,te)=>{const Y=new yn;return Y.position.set(K,te,0),t.add(Y),Y},b=M(.1,.86);b.add(_(.11,.42,o));const v=new yn;v.position.y=-.42,b.add(v),v.add(_(.09,.4,s));const y=new lt(new fn(.12,.06,.24),o);y.position.set(0,-.42,.05),v.add(y);const P=M(-.1,.86);P.add(_(.11,.42,o));const L=new yn;L.position.y=-.42,P.add(L),L.add(_(.09,.4,s));const A=y.clone();A.position.set(0,-.42,.05),L.add(A);const D=M(.27,1.52);D.add(_(.09,.3,s));const I=new yn;I.position.y=-.3,D.add(I),I.add(_(.08,.28,o));const O=new lt(new fn(.09,.1,.09),c);O.position.y=-.3,I.add(O);const w=M(-.27,1.52);w.add(_(.09,.3,s));const R=new yn;R.position.y=-.3,w.add(R),R.add(_(.08,.28,o));const F=O.clone();F.position.y=-.3,R.add(F);const B=new lt(new fn(.13,.1,.16),c);B.position.set(.26,1.53,0);const z=B.clone();return z.position.x=-.26,t.add(B,z),{group:t,thighL:b,thighR:P,shinL:v,shinR:L,armL:D,armR:w,foreL:I,foreR:R,head:x,visorMat:u,phase:Math.random()*Mt}}sendToDesk(e){const t=this.nearestNode(e.body.group.position),i=this.approachNodes[e.def.workstation%this.approachNodes.length];e.path=this.findPath(t,i),e.pathIdx=0,e.mode="TRANSIT",e.modeAfterTransit="WORKING",this.announce(e,"TRANSIT")}sendToBriefing(e){const t=this.nearestNode(e.body.group.position),i=this.centerNodes[Math.floor(Math.random()*this.centerNodes.length)];e.path=this.findPath(t,i),e.pathIdx=0,e.mode="TRANSIT",e.modeAfterTransit="BRIEFING",e.briefTimer=$o(6,10),this.announce(e,"TRANSIT")}sendToPatrol(e){this.patrolIdx=(this.patrolIdx+3)%this.corridorNodes.length;const t=this.nearestNode(e.body.group.position);e.path=this.findPath(t,this.corridorNodes[this.patrolIdx]),e.pathIdx=0,e.mode="TRANSIT",e.modeAfterTransit="SCANNING"}announce(e,t){bt.emit("AGENT_STATUS_CHANGED",{agentId:e.def.id,status:t})}triggerBriefing(){this.briefing=9;for(const t of this.agents)t.def.role!=="SECURITY"&&this.sendToBriefing(t);Me.getState().pushLog("info","SWARM","briefing convened — mission synthesis at the strategy table")}getAgentPosition(e){const t=this.agents.find(i=>i.def.id===e);return t?t.body.group.position:null}getDeskPosition(e){const t=this.agents.find(i=>i.def.id===e);return t?this.deskPositions[t.def.workstation%this.deskPositions.length]??null:null}getAgentMode(e){const t=this.agents.find(i=>i.def.id===e);return t?t.mode:null}updateSimOnly(e){this.update(e,0)}update(e,t){const i=Me.getState();if((i.agentDefs.length!==this.agents.length||i.agentDefs.some((s,o)=>{var c;return((c=this.agents[o])==null?void 0:c.def.id)!==s.id}))&&this.buildRoster(i.agentDefs),this.floorMat&&(this.floorMat.uniforms.uTime.value=t),this.localMat&&(this.localMat.uniforms.uTime.value=t),this.tableHolo.rotation.y+=e*.5,this.tableHolo.rotation.x=Math.sin(t*.4)*.2,this.tableGlow.opacity=.3+(this.briefing>0?.45:0)+Math.sin(t*2)*.05,this.briefing=Math.max(0,this.briefing-e),this.warnPulse=Math.max(0,this.warnPulse-e*.5),this.schedAcc+=e,this.schedAcc>1.6){this.schedAcc=0;const s=this.agents.filter(c=>c.mode==="WORKING");if(s.length>0&&this.briefing<=0){const c=Bc(s),u=Math.random();if(c.def.role==="SECURITY")this.sendToPatrol(c);else if(u<c.def.personality.sociability*.14)this.sendToBriefing(c);else if(c.def.role==="RESEARCHER"&&u<.3){const h=this.nearestNode(c.body.group.position),f=this.approachNodes[Math.floor(Math.random()*this.approachNodes.length)];c.path=this.findPath(h,f),c.pathIdx=0,c.mode="TRANSIT",c.modeAfterTransit="WORKING"}}const o=this.agents.filter(c=>c.mode==="SCANNING");for(const c of o)c.path.length===0&&Math.random()<.5&&this.sendToPatrol(c),Math.random()<.12&&this.sendToDesk(c)}for(const s of this.agents){const o=1.9*s.def.speed,c=s.body.group.position;if(s.mode==="TRANSIT"){const p=s.path[s.pathIdx];if(!p){s.mode=s.modeAfterTransit,this.announce(s,s.mode);continue}const x=p.clone().sub(c);x.y=0;const g=x.length(),_=Math.min(o,g*2.4+.15);g>.001&&x.normalize();const M=x.multiplyScalar(_),b=_>o*.7?5:8;s.velocity.x=mt(s.velocity.x,M.x,b,e),s.velocity.z=mt(s.velocity.z,M.z,b,e);for(const v of this.agents){if(v===s)continue;const y=c.x-v.body.group.position.x,P=c.z-v.body.group.position.z,L=y*y+P*P;if(L<.81&&L>1e-4){const A=Math.sqrt(L),D=(.9-A)/A*1.6;s.velocity.x+=y*D*e*8,s.velocity.z+=P*D*e*8}}if(c.addScaledVector(s.velocity,e),s.velocity.lengthSq()>.01){let y=Math.atan2(s.velocity.x,s.velocity.z)-s.yaw;for(;y>Math.PI;)y-=Mt;for(;y<-Math.PI;)y+=Mt;s.yaw+=y*Math.min(1,e*9)}s.moveAmount=xt(s.velocity.length()/o,0,1),g<.14&&(s.pathIdx++,s.pathIdx>=s.path.length&&(s.mode=s.modeAfterTransit,s.velocity.set(0,0,0),this.announce(s,s.mode),s.mode==="WORKING"&&(s.task=Bc(jc[s.def.role]),bt.emit("AGENT_TASK_ASSIGNED",{agentId:s.def.id,task:s.task}))))}else if(s.moveAmount=mt(s.moveAmount,0,8,e),s.mode==="WORKING"){const p=this.deskPositions[s.def.workstation%this.deskPositions.length];if(p){let g=Math.atan2(p.x-c.x,p.z-c.z)-s.yaw;for(;g>Math.PI;)g-=Mt;for(;g<-Math.PI;)g+=Mt;s.yaw+=g*Math.min(1,e*5)}s.progress+=e*(3.2+s.def.personality.drive*4.5),s.progress>=100&&(s.progress=0,s.task=Bc(jc[s.def.role]),bt.emit("AGENT_TASK_ASSIGNED",{agentId:s.def.id,task:s.task}),s.dwell+=1,this.briefing<=0&&Math.random()<s.def.personality.sociability*.2&&this.sendToBriefing(s))}else if(s.mode==="BRIEFING"){let x=Math.atan2(-c.x,-c.z)-s.yaw;for(;x>Math.PI;)x-=Mt;for(;x<-Math.PI;)x+=Mt;s.yaw+=x*Math.min(1,e*4),s.briefTimer-=e,s.briefTimer<=0&&this.briefing<=0&&this.sendToDesk(s)}else s.mode==="SCANNING"&&(s.scanAng+=e*(1.4+this.warnPulse*3),s.yaw=Math.atan2(Math.sin(s.scanAng),Math.cos(s.scanAng))*0+s.scanAng*0+this.patrolYaw(s),this.sweep&&s.def.role==="SECURITY"&&(this.sweep.material.opacity=.08+this.warnPulse*.16+Math.sin(t*3)*.02),s.path.length===0&&this.sendToPatrol(s));const u=s.body;u.group.rotation.y=s.yaw,u.phase+=e*(4+s.moveAmount*7);const h=s.moveAmount,f=Math.sin(u.phase)*.6*h;u.thighL.rotation.x=f,u.thighR.rotation.x=-f,u.shinL.rotation.x=Math.max(0,-Math.sin(u.phase))*.7*h,u.shinR.rotation.x=Math.max(0,Math.sin(u.phase))*.7*h,s.mode==="WORKING"?(u.armL.rotation.x=mt(u.armL.rotation.x,-1.15+Math.sin(t*21+u.phase)*.07,8,e),u.armR.rotation.x=mt(u.armR.rotation.x,-1.15+Math.cos(t*19+u.phase)*.07,8,e),u.foreL.rotation.x=mt(u.foreL.rotation.x,-.5,8,e),u.foreR.rotation.x=mt(u.foreR.rotation.x,-.5,8,e)):s.mode==="BRIEFING"?(u.armL.rotation.x=mt(u.armL.rotation.x,.25,6,e),u.armR.rotation.x=mt(u.armR.rotation.x,.25,6,e),u.foreL.rotation.x=mt(u.foreL.rotation.x,.3,6,e),u.foreR.rotation.x=mt(u.foreR.rotation.x,.3,6,e),s.def.role==="EXECUTIVE"&&(u.head.rotation.x=Math.sin(t*2.2)*.12)):(u.armL.rotation.x=mt(u.armL.rotation.x,Math.sin(u.phase)*.35*h,8,e),u.armR.rotation.x=mt(u.armR.rotation.x,-Math.sin(u.phase)*.35*h,8,e),u.foreL.rotation.x=mt(u.foreL.rotation.x,-.12,8,e),u.foreR.rotation.x=mt(u.foreR.rotation.x,-.12,8,e)),u.group.position.y=Math.abs(Math.sin(u.phase))*.05*h+(s.mode==="WORKING"?Math.sin(t*1.4+u.phase)*.008:0),u.visorMat.emissiveIntensity=2.2+(s.mode==="SCANNING"?this.warnPulse*2.5+Math.sin(t*6)*.5:0)}for(let s=0;s<this.screens.length;s++){const o=this.screens[s],c=this.agents[s];if(o.acc+=e,o.acc>.16){o.acc=0;const u=c&&c.mode==="WORKING"?1:.45;this.drawScreen(o,t,u),o.tex.needsUpdate=!0}}if(this.syncAcc+=e,this.syncAcc>.35){this.syncAcc=0;const s=this.agents.map(o=>({...o.def,personality:{...o.def.personality},status:o.mode,task:o.task,progress:Math.floor(o.progress),load:Math.floor(xt(25+o.progress*.5+o.def.personality.drive*30+(o.mode==="TRANSIT"?12:0),5,99)),mood:o.mode==="SCANNING"?"VIGILANT":o.progress>75?"INTENSE":o.mode==="BRIEFING"?"ALIGNED":o.def.personality.focus>.75?"FOCUSED":"NOMINAL"}));i.setRosterRuntime(s)}}patrolYaw(e){const t=e.path[e.pathIdx];return t?Math.atan2(t.x-e.body.group.position.x,t.z-e.body.group.position.z):e.yaw}drawScreen(e,t,i){const{ctx:s}=e,o=256,c=150;s.fillStyle="rgba(4, 8, 12, 0.94)",s.fillRect(0,0,o,c);const u=t+e.seed;switch(s.globalAlpha=.25+i*.75,e.role){case"CODER":{s.font="8px monospace";for(let h=0;h<14;h++){const f=14+h*10,p=40+(Math.sin(u*3+h*7.3)+1)/2*160;s.fillStyle=h%5===0?"#d4af37":"#00f0ff",s.globalAlpha=(.2+i*.7)*(.4+.6*Math.abs(Math.sin(h*3.1+u))),s.fillRect(10+h%3*8,f-6,p,4)}break}case"ANALYST":{s.strokeStyle="#7ad7ff",s.lineWidth=1.4,s.beginPath();for(let h=0;h<=o;h+=6){const f=c/2+Math.sin(h*.05+u*2)*26+Math.sin(h*.013+u)*18;h===0?s.moveTo(h,f):s.lineTo(h,f)}s.stroke(),s.fillStyle="#00ff66";for(let h=0;h<9;h++){const f=8+(Math.sin(u*1.7+h*2.4)+1)/2*40;s.fillRect(16+h*26,c-16-f,12,f)}break}case"SECURITY":{s.strokeStyle="#ff3333",s.lineWidth=1.2,s.beginPath(),s.arc(o/2,c/2,52,0,Mt),s.stroke(),s.beginPath(),s.arc(o/2,c/2,30,0,Mt),s.stroke();const h=u*2.4;s.fillStyle="#ff3333",s.beginPath(),s.moveTo(o/2,c/2),s.arc(o/2,c/2,52,h,h+.7),s.closePath(),s.globalAlpha=.3*i,s.fill(),s.globalAlpha=.9,s.fillRect(o/2+Math.cos(h)*40-2,c/2+Math.sin(h)*40-2,4,4);break}case"RESEARCHER":{s.font="8px monospace",s.fillStyle="#00f0ff";for(let h=0;h<3;h++)for(let f=0;f<12;f++){const p=20+(Math.sin(u*5+f*4.7+h*9)+1)/2*46;s.globalAlpha=.25+i*.6,s.fillRect(12+h*82,14+f*11,p,4)}break}case"CREATIVE":{s.strokeStyle="#ff7ad9",s.lineWidth=1.3;const h=o/2,f=c/2,p=34;for(let x=0;x<8;x++){const g=u+x/8*Mt,_=u+(x+3)/8*Mt;s.beginPath(),s.moveTo(h+Math.cos(g)*p,f+Math.sin(g)*p*.7),s.lineTo(h+Math.cos(_)*p,f+Math.sin(_)*p*.7),s.stroke()}break}case"AUTOMATION":{s.strokeStyle="#ffb700",s.fillStyle="#ffb700";for(let h=0;h<5;h++){const f=26+h*50;s.strokeRect(f,60,26,26),h<4&&(s.beginPath(),s.moveTo(f+26,73),s.lineTo(f+50,73),s.stroke());const p=f+(u*40+h*20)%24;s.globalAlpha=.9*i,s.fillRect(p+1,71,5,5),s.globalAlpha=.25+i*.7}break}case"STRATEGIST":{s.strokeStyle="#d4af37",s.fillStyle="#d4af37";const h=[[o/2,30],[70,80],[o/2,95],[o-70,80],[100,128],[o-100,128]];for(let f=1;f<h.length;f++)s.beginPath(),s.moveTo(h[0][0],h[0][1]),s.lineTo(h[f][0],h[f][1]),s.globalAlpha=.3,s.stroke();for(let f=0;f<h.length;f++)s.globalAlpha=.5+.5*Math.abs(Math.sin(u*2+f)),s.fillRect(h[f][0]-3,h[f][1]-3,6,6);break}case"EXECUTIVE":{s.font="bold 17px monospace",s.fillStyle="#e0e6ed",s.globalAlpha=.9,s.fillText(`${Math.floor(87+Math.sin(u)*6)}%`,20,44),s.font="8px monospace",s.fillStyle="#d4af37";for(let h=0;h<4;h++){const f=60+(Math.sin(u*1.2+h*2)+1)/2*120;s.fillRect(20,66+h*20,f,8)}break}}s.globalAlpha=1,s.fillStyle="rgba(0, 240, 255, 0.05)",s.fillRect(0,u*60%c,o,2)}}const Xo=1400;class wb{constructor(){this.group=new yn,this.nodePos=[],this.nodeLayer=[],this.edges=[],this.outEdges=new Map,this.baseColors=[],this.packets=[],this.arrivals=0,this.arrivalWindow=[],this.tmpColor=new We,this.gold=new We("#ffb700"),this.cyan=new We("#00f0ff"),this.density=1;const e=wu(4242);for(let h=0;h<pr.length;h++){const f=pr[h],p=-10+h/(pr.length-1)*20;for(let x=0;x<f;x++){const g=x*2.399963,_=.42+1.75*Math.sqrt((x+.5)/f),M=1.7+Math.cos(g)*_*.82,b=Math.sin(g)*_+Math.sin(p*.22)*.8;this.nodePos.push(new V(p,M,b)),this.nodeLayer.push(h)}}const t=this.nodePos.length;this.activation=new Float32Array(t);let i=0;for(let h=0;h<pr.length-1;h++){const f=pr[h+1];for(let p=0;p<pr[h];p++){const x=i+p,g=2+Math.floor(e()*2);for(let _=0;_<g;_++){const M=i+pr[h]+Math.floor(e()*f);this.edges.push([x,M]);const b=this.outEdges.get(x);b?b.push(this.edges.length-1):this.outEdges.set(x,[this.edges.length-1])}}i+=pr[h]}this.nodes=new xp(new el(.115,12,12),new $n({transparent:!0,opacity:.95,blending:zt,depthWrite:!1,toneMapped:!1}),t);const s=new Vt;for(let h=0;h<t;h++){s.setPosition(this.nodePos[h]),this.nodes.setMatrixAt(h,s);const f=this.nodeLayer[h]/9,p=this.cyan.clone().lerp(this.gold,f*.85);this.baseColors.push(p),this.nodes.setColorAt(h,p)}this.nodes.instanceMatrix.needsUpdate=!0,this.group.add(this.nodes);const o=new Float32Array(this.edges.length*6);this.edgeColors=new Float32Array(this.edges.length*6);for(let h=0;h<this.edges.length;h++){const[f,p]=this.edges[h],x=this.nodePos[f],g=this.nodePos[p];o.set([x.x,x.y,x.z,g.x,g.y,g.z],h*6)}const c=new wt;c.setAttribute("position",new _t(o,3)),c.setAttribute("color",new _t(this.edgeColors,3).setUsage(Us)),this.edgeLines=new xu(c,new Va({vertexColors:!0,transparent:!0,opacity:.9,blending:zt,depthWrite:!1,toneMapped:!1})),this.edgeLines.frustumCulled=!1,this.group.add(this.edgeLines),this.packetPos=new Float32Array(Xo*3),this.packetCol=new Float32Array(Xo*3),this.packetPos.fill(-999);const u=new wt;u.setAttribute("position",new _t(this.packetPos,3).setUsage(Us)),u.setAttribute("aColor",new _t(this.packetCol,3).setUsage(Us)),this.packetPoints=new rs(u,new Gt({vertexShader:`
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
          }`,transparent:!0,depthWrite:!1,blending:zt})),this.packetPoints.frustumCulled=!1,this.group.add(this.packetPoints);for(let h=0;h<pr.length;h++){const f=-10+h/9*20,p=new lt(new fn(.05,5.6,.05),new $n({color:61695,transparent:!0,opacity:.12,blending:zt,depthWrite:!1,toneMapped:!1}));p.position.set(f,1.9,-3.1),this.group.add(p);const x=new lt(new fn(.16,.05,.16),new $n({color:13938487,transparent:!0,opacity:.8,toneMapped:!1}));x.position.set(f,4.72,-3.1),this.group.add(x);const g=document.createElement("canvas");g.width=256,g.height=64;const _=g.getContext("2d");if(_){_.font="bold 24px Orbitron, monospace",_.textAlign="center",_.fillStyle="#d4af37",_.fillText(String(h+1).padStart(2,"0"),34,30),_.font="bold 19px Orbitron, monospace",_.fillStyle="#e0e6ed",_.fillText(fy[h],156,30),_.fillStyle="rgba(0,240,255,0.7)",_.fillRect(14,42,228,2);const M=new qv(g);M.colorSpace=li;const b=new PS(new Wv({map:M,transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1}));b.position.set(f,-.75,0),b.scale.set(3.4,.85,1),this.group.add(b)}}}spawnPacket(e){this.packets.length>=Xo||this.packets.push({edge:e,t:0,speed:.55+Math.random()*.7})}setDensity(e){this.density=Math.max(.1,Math.min(3,e))}burst(e){const t=this.edges.map((i,s)=>({e:i,i:s})).filter(({e:i})=>this.nodeLayer[i[0]]===0);for(let i=0;i<e&&t.length!==0;i++){const s=t[Math.floor(Math.random()*t.length)];this.spawnPacket(s.i)}}cascade(){this.burst(46)}getStats(){const e=performance.now();return this.arrivalWindow=this.arrivalWindow.filter(t=>e-t<1500),{active:this.packets.length,throughput:this.arrivalWindow.length/1.5}}update(e,t){const i=1+Math.sin(t*1.7)*.15+Math.cos(t*3.4)*.1,s=[];for(const u of this.packets)if(u.t+=e*u.speed*1.35*i,u.t>=1){const[h,f]=this.edges[u.edge];this.activation[f]=1,this.arrivals++,this.arrivalWindow.push(performance.now());const p=this.outEdges.get(f);if(p&&this.nodeLayer[f]<9){const x=Math.random()<Math.min(.97,.85*this.density)?1+(Math.random()<.3*this.density?1:0):0;for(let g=0;g<x;g++){const _=p[Math.floor(Math.random()*p.length)];this.packets.length+s.length<Xo&&s.push({edge:_,t:0,speed:.55+Math.random()*.7})}}}else s.push(u);this.packets=s;for(let u=0;u<Xo;u++)if(u<this.packets.length){const h=this.packets[u],[f,p]=this.edges[h.edge],x=this.nodePos[f],g=this.nodePos[p],_=h.t,M=Math.sin(_*Math.PI)*.22*i;this.packetPos[u*3]=x.x+(g.x-x.x)*_,this.packetPos[u*3+1]=x.y+(g.y-x.y)*_+M,this.packetPos[u*3+2]=x.z+(g.z-x.z)*_;const b=this.nodeLayer[p]/9;this.tmpColor.copy(this.cyan).lerp(this.gold,b),this.packetCol[u*3]=this.tmpColor.r,this.packetCol[u*3+1]=this.tmpColor.g,this.packetCol[u*3+2]=this.tmpColor.b}else this.packetPos[u*3+1]=-999;this.packetPoints.geometry.getAttribute("position").needsUpdate=!0,this.packetPoints.geometry.getAttribute("aColor").needsUpdate=!0;const o=Math.exp(-e*1.7);for(let u=0;u<this.activation.length;u++){this.activation[u]*=o;const h=this.activation[u];h>.02?(this.tmpColor.copy(this.baseColors[u]).lerp(this.gold,xt(h,0,1)),this.tmpColor.multiplyScalar(1+h*2.2),this.nodes.setColorAt(u,this.tmpColor)):h<=.02&&this.activation[u]!==0&&(this.activation[u]=0,this.nodes.setColorAt(u,this.baseColors[u]))}this.nodes.instanceColor&&(this.nodes.instanceColor.needsUpdate=!0);const c=.05+Math.sin(t*1.3)*.015+Math.cos(t*2.7)*.008;for(let u=0;u<this.edges.length;u++){const[h,f]=this.edges[u],p=xt(Math.max(this.activation[h],this.activation[f]),0,1),x=this.cyan.r*c+this.gold.r*p*.9,g=this.cyan.g*c+this.gold.g*p*.9,_=this.cyan.b*c+this.gold.b*p*.9;this.edgeColors[u*6]=x,this.edgeColors[u*6+1]=g,this.edgeColors[u*6+2]=_,this.edgeColors[u*6+3]=x,this.edgeColors[u*6+4]=g,this.edgeColors[u*6+5]=_}this.edgeLines.geometry.getAttribute("color").needsUpdate=!0}}class bb{constructor(){this.last=performance.now(),this.ema=16.7,this.fps=60,this.frameMs=16.7,this.history=[],this.cap=140}tick(){const e=performance.now(),t=e-this.last;this.last=e,t>0&&t<500&&(this.ema=this.ema*.92+t*.08,this.frameMs=this.ema,this.fps=1e3/this.ema),this.history.push(this.frameMs),this.history.length>this.cap&&this.history.shift()}}class Ab{constructor(){this.cap=90,this.power=[],this.temp=[],this.packets=[],this.latency=[],this.throughput=[]}push(e){const t=(i,s)=>{i.push(s),i.length>this.cap&&i.shift()};t(this.power,e.power),t(this.temp,e.temp),t(this.packets,e.packets),t(this.latency,e.latency),t(this.throughput,e.throughput)}clear(){this.power.length=0,this.temp.length=0,this.packets.length=0,this.latency.length=0,this.throughput.length=0}}class Cb{constructor(){this.budgetMs=8.33,this.usage=0}report(e){this.usage=Math.min(1.5,e/this.budgetMs)}headroom(){return`${Math.max(0,Math.round((1-this.usage)*100))}%`}}const Hc={core:{center:new V(0,2.4,0),dist:10.2,pitch:.32},agents:{center:new V(0,.8,0),dist:12.6,pitch:.74},intel:{center:new V(0,1.35,0),dist:5.8,pitch:.12},network:{center:new V(0,1.8,0),dist:15.5,pitch:.2},missions:{center:new V(0,2.2,0),dist:12.5,pitch:.42},memory:{center:new V(0,2.2,0),dist:12.5,pitch:.42}};class Rb{constructor(e){this.bokeh=null,this.scene=new Gv,this.lastFrameMs=0,this.time=0,this.simTime=0,this.raf=0,this.fps=new bb,this.statsAcc=0,this.resScale=1,this.resAcc=0,this.disposed=!1,this.pos=new V(0,3.4,10.8),this.look=new V(0,2.4,0),this.fov=50,this.yaw=0,this.pitch=.32,this.dist=10.2,this.center=new V(0,2.4,0),this.shake=0,this.shotOverride=null,this.lastCoreState="",this.lastTab="core",this.dragging=!1,this.lastPointer={x:0,y:0},this.unsubscribers=[],this.lastTint="",this.lastEmissive=-1,this.warnedOnce=new Set,this.lastGeometry="",this.lastChrome="",this.onFrame=null,this.canvas=e,this.renderer=new Xw({canvas:e,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.toneMapping=gu,this.renderer.toneMappingExposure=1,this.camera=new vi(50,1,.1,220),this.camera.position.copy(this.pos),this.scene.fog=new gp(328967,.024),this.scene.background=new We(328967);const t=new jf(this.renderer),i=new nb;this.scene.environment=t.fromScene(i,.04).texture,t.dispose(),this.scene.environmentIntensity=.42,this.hemiLight=new VS(2437706,328967,.75),this.keyLight=new jg(16769968,1.5),this.keyLight.position.set(7,11,5),this.rimLight=new jg(61695,.8),this.rimLight.position.set(-8,4,-7),this.scene.add(this.hemiLight,this.keyLight,this.rimLight),this.arc=new ob,this.beam=new hb,this.ambient=new gb,this.humanoid=new Eb,this.office=new Tb,this.net=new wb,this.scene.add(this.arc.group,this.beam.group,this.ambient.group,this.humanoid.group,this.office.group,this.net.group),this.beam.group.visible=!1,this.humanoid.group.visible=!1,this.office.group.visible=!1,this.net.group.visible=!1,this.safeCall(this.office,"bindLights",this.hemiLight,this.keyLight,this.rimLight);const s=new Hn(2,2,{samples:4,type:Zn});this.composer=new Zw(this.renderer,s),this.composer.addPass(new Qw(this.scene,this.camera));try{this.bokeh=new eb(this.scene,this.camera,{focus:10,aperture:16e-5,maxblur:.0045}),this.bokeh.enabled=!1,this.composer.addPass(this.bokeh)}catch(c){console.warn("[vortex] BokehPass unavailable — DoF disabled.",c),this.bokeh=null}this.bloom=new qa(new Je(1024,1024),.62,.42,.55),this.composer.addPass(this.bloom),this.composer.addPass(new tb),this.applySettings(!0),this.applyTab(Me.getState().tab,!0),this.resize(),this.bindPointer(),this.unsubscribers.push(bt.on("NETWORK_SPIKE",({magnitude:c})=>{this.shake=Math.max(this.shake,.5+c*.5)}),bt.on("AUDIO_PEAK",()=>{this.arc.pulse()}),bt.on("CORE_STATE_CHANGED",({next:c})=>{this.arc.setState(c),this.beam.setState(c)})),this.lastFrameMs=performance.now();const o=()=>{this.disposed||(this.raf=requestAnimationFrame(o),this.update())};o()}setTab(e){this.applyTab(e,!1)}applyTab(e,t){const i=Ji.getState().coreGeometry;this.arc.group.visible=e==="core"&&i==="ARC"||e==="intel",this.arc.setArcVisible(e==="core"&&i==="ARC"),this.beam.group.visible=e==="core"&&i==="BEAM",this.office.group.visible=e==="agents",this.net.group.visible=e==="network",this.humanoid.group.visible=e==="intel",this.humanoid.setMorphTarget(e==="intel"?1:0);const s=Hc[e];this.center.copy(s.center),this.dist=Math.min(s.dist,Ji.getState().cameraLimit),this.pitch=s.pitch,e==="network"&&(this.yaw=-.55),t&&(this.pos.set(s.center.x,s.center.y+Math.sin(s.pitch)*s.dist,s.center.z+Math.cos(s.pitch)*s.dist*Math.cos(this.yaw)),this.look.copy(s.center))}requestShot(e){const t=Me.getState();switch(e.kind){case"tactical-swoop":this.shotOverride={mode:"TACTICAL",until:this.time+3};break;case"agent-focus":t.selectAgent(e.agentId),t.setCameraMode("AGENT_FOLLOW");break;case"workstation":t.selectAgent(e.agentId),t.setCameraMode("WORKSTATION_FOCUS");break;case"network-run":t.setCameraMode("TASK_TRACK");break}}safeCall(e,t,...i){const s=e[t];typeof s=="function"?s.apply(e,i):this.warnedOnce.has(t)||(this.warnedOnce.add(t),console.warn(`[vortex] subsystem guard: "${t}" unavailable — graceful fallback engaged`))}applySettings(e=!1){const t=Ji.getState();this.bloom.strength=t.bloomStrength,this.bloom.threshold=t.bloomThreshold,this.bloom.radius=t.bloomRadius,this.renderer.toneMappingExposure=t.exposure,this.safeCall(this.ambient,"setDensity",t.dustDensity,t.streamDensity),this.safeCall(this.ambient,"setScale",t.dustScale,t.streamScale),this.safeCall(this.net,"setDensity",t.networkDensity),this.safeCall(this.office,"setLighting",t.hqLighting),this.safeCall(this.office,"setMaterials",{holoOpacity:t.holoOpacity}),this.safeCall(this.office,"setParticles",{density:t.dustDensity});const i=this.scene.fog;i.density=.008+t.atmosphere*.034,(e||t.tint!==this.lastTint)&&(this.lastTint=t.tint,this.safeCall(this.arc,"setTint",t.tint),this.safeCall(this.beam,"setTint",t.tint)),(e||t.emissive!==this.lastEmissive)&&(this.lastEmissive=t.emissive,this.safeCall(this.arc,"setEmissive",t.emissive)),this.safeCall(this.beam,"setDensity",t.streamDensity),this.safeCall(this.beam,"setScale",t.streamScale),this.beam.setIntensityScale(t.coreIntensity),(e||t.coreGeometry!==this.lastGeometry)&&(this.lastGeometry=t.coreGeometry,this.applyTab(Me.getState().tab,!1),Me.getState().pushLog("sys","CORE",`geometry matrix → ${t.coreGeometry==="ARC"?"MONUMENT ARC":"INTELLIGENCE COLUMN"}`));const s=`${t.uiScale}|${t.holoOpacity}|${t.scanlines?1:0}`;if(e||s!==this.lastChrome){this.lastChrome=s;const o=document.documentElement.style;o.setProperty("--ui-scale",String(t.uiScale)),o.setProperty("--holo-alpha",String(t.holoOpacity)),o.setProperty("--scan-alpha",t.scanlines?"1":"0")}}bindPointer(){const e=this.canvas;e.addEventListener("pointerdown",t=>{Me.getState().cameraLocked||(this.dragging=!0,this.lastPointer={x:t.clientX,y:t.clientY})}),window.addEventListener("pointermove",t=>{if(!this.dragging||Me.getState().cameraLocked)return;const i=t.clientX-this.lastPointer.x,s=t.clientY-this.lastPointer.y;this.lastPointer={x:t.clientX,y:t.clientY},this.yaw-=i*.005,this.pitch=xt(this.pitch+s*.004,-.2,1.35);const o=Me.getState();o.cameraMode!=="FREE"&&o.cameraMode!=="ORBIT"&&(o.setCameraMode("FREE"),o.pushLog("info","DIRECTOR","operator seized camera authority → FREE"))}),window.addEventListener("pointerup",()=>{this.dragging=!1}),e.addEventListener("wheel",t=>{if(t.preventDefault(),Me.getState().cameraLocked)return;const i=Ji.getState().cameraLimit;this.dist=xt(this.dist*(1+t.deltaY*.0011),3.2,i)},{passive:!1})}cameraKeyAt(e){const t=hy;if(e<=t[0].t){const s=t[0];return{pos:new V(...s.pos),look:new V(...s.look),fov:s.fov}}for(let s=0;s<t.length-1;s++){const o=t[s],c=t[s+1];if(e>=o.t&&e<=c.t){const u=ib((e-o.t)/Math.max(.001,c.t-o.t));return{pos:new V(...o.pos).lerp(new V(...c.pos),u),look:new V(...o.look).lerp(new V(...c.look),u),fov:cx(o.fov,c.fov,u)}}}const i=t[t.length-1];return{pos:new V(...i.pos),look:new V(...i.look),fov:i.fov}}updateCamera(e){const t=Me.getState(),i=Ji.getState();if(t.cameraLocked&&!t.tlPlaying)return;let s=t.cameraMode;t.tlPlaying?s="DIRECTOR":this.shotOverride&&(this.time<this.shotOverride.until?s=this.shotOverride.mode:this.shotOverride=null);const o=new V,c=new V;let u=this.fov;switch(s){case"FREE":case"ORBIT":{s==="ORBIT"&&(this.yaw+=e*.1),o.set(this.center.x+Math.cos(this.pitch)*Math.sin(this.yaw)*this.dist,this.center.y+Math.sin(this.pitch)*this.dist,this.center.z+Math.cos(this.pitch)*Math.cos(this.yaw)*this.dist),c.copy(this.center),u=t.tab==="intel"?42:50;break}case"TACTICAL":{const p=Hc[t.tab];o.set(p.center.x+2.5,p.center.y+p.dist*.85,p.center.z+p.dist*.55),c.copy(p.center),u=55;break}case"AGENT_FOLLOW":{const p=t.selectedAgentId?this.office.getAgentPosition(t.selectedAgentId):null;p?(o.set(p.x+2.6,p.y+2.1,p.z+2.9),c.set(p.x,p.y+1.2,p.z)):(o.copy(Hc.agents.center).add(new V(0,8,9)),c.copy(Hc.agents.center)),u=44;break}case"WORKSTATION_FOCUS":{const p=t.selectedAgentId,x=p?this.office.getDeskPosition(p):null;if(x){const g=x.clone().normalize().multiplyScalar(-2.4);o.set(x.x+g.x,1.7,x.z+g.z),c.set(x.x*.86,1.45,x.z*.86)}else o.set(0,6,8),c.set(0,1,0);u=40;break}case"TASK_TRACK":{const p=-10+this.time*1.1%1*20;o.set(p*.55,4.6,9.5),c.set(p,1.8,0),u=52;break}case"DIRECTOR":case"CINEMATIC":{const p=this.cameraKeyAt(t.tlTime);o.copy(p.pos),c.copy(p.look),u=p.fov;break}}const h=s==="DIRECTOR"||s==="CINEMATIC"?3.4:4.2;this.pos.x=mt(this.pos.x,o.x,h,e),this.pos.y=mt(this.pos.y,o.y,h,e),this.pos.z=mt(this.pos.z,o.z,h,e),this.look.x=mt(this.look.x,c.x,h+1,e),this.look.y=mt(this.look.y,c.y,h+1,e),this.look.z=mt(this.look.z,c.z,h+1,e),this.fov=mt(this.fov,u,3,e),this.shake=mt(this.shake,0,3.2,e);const f=this.shake*this.shake;if(this.camera.position.set(this.pos.x+(Math.random()-.5)*f*.24,this.pos.y+(Math.random()-.5)*f*.18,this.pos.z+(Math.random()-.5)*f*.24),this.camera.lookAt(this.look),Math.abs(this.camera.fov-this.fov)>.01&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix()),this.bokeh){const p=s==="WORKSTATION_FOCUS"&&i.dof;if(this.bokeh.enabled=p,p){const x=this.bokeh.uniforms,g=this.camera.position.distanceTo(this.look);x.focus&&(x.focus.value=mt(x.focus.value,g,6,e))}}}scaleLevels(e,t){const i=xt(t,.2,3);return{level:xt(e.level*i,0,1.4),bass:xt(e.bass*i,0,1.4),mid:xt(e.mid*i,0,1.4),high:xt(e.high*i,0,1.4),talk:e.talk}}update(){const e=performance.now(),t=xt((e-this.lastFrameMs)/1e3,0,.05);this.lastFrameMs=e,this.time+=t,this.fps.tick();const i=Me.getState(),s=Ji.getState(),o=t*xt(s.speed,.1,5);this.simTime+=o,this.applySettings();const c=this.scaleLevels(mn.getLevels(),s.audioSensitivity);if(i.tab!==this.lastTab&&(this.lastTab=i.tab,this.applyTab(i.tab,!1)),i.coreState!==this.lastCoreState&&(this.lastCoreState=i.coreState,this.arc.setState(i.coreState),this.beam.setState(i.coreState)),this.arc.update(o,this.simTime,c,i.coreState),this.beam.group.visible&&this.beam.update(o,this.simTime,c),this.ambient.update(o,this.simTime,c),(this.humanoid.group.visible||this.humanoid.morphValue()>.01)&&this.humanoid.update(o,this.simTime,c),this.office.group.visible?this.office.update(t,this.time):this.office.updateSimOnly(t),this.net.group.visible&&this.net.update(t,this.time),this.onFrame&&this.onFrame(t),this.updateCamera(t),this.composer.render(),this.statsAcc+=t,this.resAcc+=t,this.statsAcc>.25){this.statsAcc=0;const u=this.renderer.info.render;Me.getState().setStats({fps:this.fps.fps,frameMs:this.fps.frameMs,drawCalls:u.calls,triangles:u.triangles,points:fb+this.ambient.activeSparks()+(this.humanoid.group.visible?Ps:0)+(this.beam.group.visible?48e3:0)+this.net.getStats().active,resScale:this.resScale})}if(this.resAcc>2.2){this.resAcc=0;const u=this.fps.fps;u<47&&this.resScale>.62?(this.resScale=Math.max(.62,this.resScale-.14),this.applyPixelRatio()):u>105&&this.resScale<1.5&&(this.resScale=Math.min(1.5,this.resScale+.1),this.applyPixelRatio())}}applyPixelRatio(){const e=Math.min(window.devicePixelRatio||1,1.75);this.renderer.setPixelRatio(e*this.resScale),this.resize()}resize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;e===0||t===0||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.composer.setSize(e,t))}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.unsubscribers.forEach(e=>e()),this.renderer.dispose()}}let ts=null;function Pb(a){if(ts)return ts;try{return ts=new Rb(a),ts}catch(e){return console.error("[vortex] WebGL2 pipeline failed — fallback engaged.",e),Me.getState().setEngineFailed(!0),null}}function ai(){return ts}function Nb(){ts&&(ts.dispose(),ts=null)}const ux="vortex.missions.v1";function dx(){return{nodes:ly.map(a=>({...a})),edges:cy.map(a=>({...a}))}}function Ib(a){const e=new Set(a.nodes.map(t=>t.id));return{nodes:a.nodes,edges:a.edges.filter(t=>e.has(t.from)&&e.has(t.to))}}function Lb(){try{const a=localStorage.getItem(ux);if(a){const e=JSON.parse(a);if(Array.isArray(e.nodes)&&Array.isArray(e.edges)&&e.nodes.length>0)return Ib(e)}}catch{}return dx()}function hx(a){try{localStorage.setItem(ux,JSON.stringify(a))}catch{}}let Pt=Lb();const fu=new Set;function yr(a,e){Pt=a,hx(Pt),fu.forEach(t=>t()),bt.emit("MISSION_UPDATED",{kind:e})}function Db(a){return fu.add(a),()=>fu.delete(a)}function Ub(){return Pt}function Ob(){return tt.useSyncExternalStore(Db,Ub)}function Fb(a,e,t){const i=new Map;for(const c of a){const u=i.get(c.from);u?u.push(c.to):i.set(c.from,[c.to])}const s=[t],o=new Set;for(;s.length>0;){const c=s.pop();if(c===e)return!0;if(o.has(c))continue;o.add(c);const u=i.get(c);u&&s.push(...u)}return!1}function kb(a){const e=new Set;for(const t of a.edges)e.add(t.from),e.add(t.to);return a.nodes.filter(t=>!e.has(t.id))}function fx(a){const e=new Set(a.edges.map(s=>s.to)),t=a.nodes.filter(s=>!e.has(s.id));return t.find(s=>s.id==="m-root")??t[0]??a.nodes[0]??null}function Bb(a){const e=new Map,t=fx(a);if(!t)return e;const i=new Map;for(const h of a.edges){const f=i.get(h.from);f?f.push(h.to):i.set(h.from,[h.to])}const s=new Map,o=[t.id];for(s.set(t.id,0);o.length>0;){const h=o.shift(),f=s.get(h);for(const p of i.get(h)??[])s.has(p)||(s.set(p,f+1),o.push(p))}const c=new Map;for(const[h,f]of s){const p=c.get(f);p?p.push(h):c.set(f,[h])}for(const[h,f]of c){const p=(f.length-1)*130;f.forEach((x,g)=>{e.set(x,{x:160+h*235,y:300-p/2+g*130})})}return a.nodes.filter(h=>!s.has(h.id)).forEach((h,f)=>{e.set(h.id,{x:160+f*200,y:620})}),e}function zb(a){const e=fx(a);if(!e)return[];const t=[],i=new Set([e.id]);let s=[e.id];const o=new Set;for(;s.length>0;){const c=[];for(const u of a.edges)o.has(u.id)||i.has(u.from)&&!i.has(u.to)&&(o.add(u.id),t.push(u),c.push(u.to),i.add(u.to));s=c}return t}const oi={addNode(a){const e=Pi("m"),t=a?Pt.nodes.find(o=>o.id===a):null,i={id:e,title:`NEW VECTOR ${Pt.nodes.length+1}`,status:"PENDING",x:t?t.x+210+Math.random()*40:480,y:t?t.y+(Math.random()*120-60):300},s=t?[...Pt.edges,{id:Pi("me"),from:t.id,to:e}]:Pt.edges;return yr({nodes:[...Pt.nodes,i],edges:s},"add"),e},removeNode(a){yr({nodes:Pt.nodes.filter(e=>e.id!==a),edges:Pt.edges.filter(e=>e.from!==a&&e.to!==a)},"remove")},renameNode(a,e){yr({nodes:Pt.nodes.map(t=>t.id===a?{...t,title:e}:t),edges:Pt.edges},"edit")},cycleStatus(a){const e={PENDING:"ACTIVE",ACTIVE:"DONE",DONE:"BLOCKED",BLOCKED:"PENDING"};yr({nodes:Pt.nodes.map(t=>t.id===a?{...t,status:e[t.status]??"PENDING"}:t),edges:Pt.edges},"edit")},moveNode(a,e,t){Pt={nodes:Pt.nodes.map(i=>i.id===a?{...i,x:e,y:t}:i),edges:Pt.edges},hx(Pt),fu.forEach(i=>i())},duplicateNode(a){const e=Pt.nodes.find(s=>s.id===a);if(!e)return;const t=Pi("m"),i={...e,id:t,title:`${e.title} COPY`,x:e.x+60,y:e.y+60};yr({nodes:[...Pt.nodes,i],edges:Pt.edges},"add")},addEdge(a,e){return a===e||Pt.edges.some(t=>t.from===a&&t.to===e)||Fb(Pt.edges,a,e)?!1:(yr({nodes:Pt.nodes,edges:[...Pt.edges,{id:Pi("me"),from:a,to:e}]},"link"),!0)},removeEdge(a){yr({nodes:Pt.nodes,edges:Pt.edges.filter(e=>e.id!==a)},"remove")},autoLayout(){const a=Bb(Pt);yr({nodes:Pt.nodes.map(e=>{const t=a.get(e.id);return t?{...e,x:t.x,y:t.y}:e}),edges:Pt.edges},"layout")},reset(){yr(dx(),"layout")},firePulseWave(){zb(Pt).forEach((e,t)=>{window.setTimeout(()=>bt.emit("MISSION_PULSE",{edgeId:e.id}),t*130)})},fireRandomPulse(){if(Pt.edges.length===0)return;const a=Pt.edges[Math.floor(Math.random()*Pt.edges.length)];bt.emit("MISSION_PULSE",{edgeId:a.id})}};let gi={nodes:uy.map(a=>({...a})),edges:dy.map(a=>({...a}))};const Kf=new Set;function qh(a){gi=a,Kf.forEach(e=>e())}function Gb(a){return Kf.add(a),()=>Kf.delete(a)}function nu(){return gi}function Vb(){return tt.useSyncExternalStore(Gb,nu)}function Hb(a){const{nodes:e,edges:t}=gi,i=Math.min(a,.05),s=new Map(e.map(o=>[o.id,o]));for(const o of t){const c=s.get(o.from),u=s.get(o.to);if(!c||!u)continue;const h=u.x-c.x,f=u.y-c.y,p=Math.max(12,Math.hypot(h,f)),x=o.kind==="folder"?120:95,g=(p-x)/p*.028;c.vx+=h*g,c.vy+=f*g,u.vx-=h*g,u.vy-=f*g}for(let o=0;o<e.length;o++){const c=e[o];for(let u=o+1;u<e.length;u++){const h=e[u],f=h.x-c.x,p=h.y-c.y,x=Math.max(400,f*f+p*p),g=26e3/x,_=Math.sqrt(x);c.vx-=f/_*g,c.vy-=p/_*g,h.vx+=f/_*g,h.vy+=p/_*g}}for(const o of e)o.vx+=-o.x*.0016,o.vy+=-o.y*.0016,o.vx*=.86,o.vy*=.86,o.x+=o.vx*i*60,o.y+=o.vy*i*60}class Wb{constructor(){this.mode="mock"}connect(){Me.getState().pushLog("sys","VAULT","ObsidianBridge attached in MOCK mode — MCP/WebSocket socket dormant")}disconnect(){}}class Xb{constructor(){this.timer=null,this.noteIdx=0,this.bridge=new Wb}start(){this.timer||(this.bridge.connect(),this.timer=setInterval(()=>{document.hidden||this.createNext()},4200))}stop(){this.timer&&clearInterval(this.timer),this.timer=null}burst(e){for(let t=0;t<e;t++)this.createNext(!0)}createNext(e=!1){const t=gi.nodes;if(t.length>=64){const g=t.findIndex(_=>_.type==="note");if(g>=0){const _=t[g];qh({nodes:t.filter(M=>M.id!==_.id),edges:gi.edges.filter(M=>M.from!==_.id&&M.to!==_.id)})}}const i=ag[this.noteIdx%ag.length];this.noteIdx++;const s=Pi("mem"),o=Math.random()*Math.PI*2,c=$o(60,160),u={id:s,title:i.title,type:"note",body:i.body,x:Math.cos(o)*c,y:Math.sin(o)*c,vx:0,vy:0,born:performance.now()},h=[...gi.edges],f=gi.nodes.filter(g=>g.type==="note"),p=Math.min(f.length,1+Math.floor(Math.random()*2)),x=[...f].sort(()=>Math.random()-.5);for(let g=0;g<p;g++)h.push({id:Pi("me"),from:s,to:x[g].id,kind:"link"});for(const g of i.tags){const _=gi.nodes.find(M=>M.type==="tag"&&M.title===g);_&&h.push({id:Pi("me"),from:s,to:_.id,kind:"tag"})}qh({nodes:[...gi.nodes,u],edges:h}),bt.emit("MEMORY_NODE_CREATED",{id:s,title:u.title}),e||Me.getState().pushLog("info","FS",`[vault] + /${u.title} — backlinks woven (${p})`)}manualNote(e){const t=Pi("mem"),i={id:t,title:e.endsWith(".md")?e:`${e}.md`,type:"note",body:`# ${e}

Manually inscribed into the vault. Awaiting swarm annotation.`,x:$o(-80,80),y:$o(-80,80),vx:0,vy:0,born:performance.now()},s=gi.nodes.find(c=>c.type==="folder"),o=s?[...gi.edges,{id:Pi("me"),from:t,to:s.id,kind:"folder"}]:gi.edges;qh({nodes:[...gi.nodes,i],edges:o}),bt.emit("MEMORY_NODE_CREATED",{id:t,title:i.title}),Me.getState().pushLog("ok","FS",`[vault] + /${i.title} inscribed by operator`)}}const Ko=new Xb,qo=new Ab,px=new Cb,Mr=30;class jb{constructor(){this.initialized=!1,this.cuePtr=0,this.accModel=0,this.accTele=0,this.ambTimer=null,this.taskToken=0,this.scrubbing=!1,this.simTime=0}init(){this.initialized||(this.initialized=!0,bt.on("CORE_STATE_CHANGED",({next:e})=>{var t;if(!this.scrubbing)switch(e){case"LISTENING":mn.chime(880);break;case"THINKING":mn.setDroneIntensity(.7);break;case"TOOL_USE":mn.zap(),(t=ai())==null||t.net.cascade();break;case"SPEAKING":mn.speak(1.4),bt.emit("AUDIO_PEAK",{level:.8});break;case"SUCCESS":mn.thump(),mn.setDroneIntensity(.35);break;case"ERROR":mn.alarm();break;case"IDLE":mn.setDroneIntensity(.3);break}}),bt.on("NETWORK_SPIKE",({magnitude:e})=>{var t,i;(t=ai())==null||t.net.burst(Math.floor(120*e)),(i=ai())==null||i.requestShot({kind:"tactical-swoop"}),Me.getState().pushLog("warn","NET",`traffic spike ×${e.toFixed(1)} — director swoops to tactical`)}),bt.on("SYSTEM_WARNING",({msg:e})=>{Me.getState().pushLog("warn","SYS",e)}),bt.on("MEMORY_NODE_CREATED",()=>{}),this.scheduleAmbient(),Ko.start())}scheduleAmbient(){const e=()=>{this.ambTimer=setTimeout(()=>{document.hidden||this.ambientOnce(),e()},$o(3600,7200))};e()}ambientOnce(){var i,s;const e=Me.getState();if(e.tlPlaying)return;const t=Math.random();t<.3?(bt.emit("NETWORK_PACKET_ARRIVED",{layer:Math.floor(Math.random()*10)}),(i=ai())==null||i.net.burst(24)):t<.45?(bt.emit("MISSION_PULSE",{edgeId:""}),oi.fireRandomPulse()):t<.6?bt.emit("SYSTEM_WARNING",{msg:"thermal envelope drift +2.1K — containment field re-tuned"}):t<.75?((s=ai())==null||s.ambient.stir(),e.pushLog("info","NET","packet convoy routed through layer 7 — latency nominal")):t<.88?e.pushLog("info","SWARM","micro-briefing completed at the strategy table"):e.pushLog("sys","ARC","plasma conduit self-calibration — turbulence index 0.31")}frameTick(e){const t=Me.getState();if(this.simTime+=e,t.tlPlaying){const h=t.tlTime;let f=h+e*t.tlSpeed;f>=Mr&&(t.tlLoop?(f=f%Mr,this.cuePtr=0):(f=Mr,t.setTimeline({playing:!1,t:f})));for(const p of Jh)p.t>h&&p.t<=f&&this.fireCue(p);t.setTimeline({t:f})}this.accModel+=e,this.accTele+=e;const i=t.coreState,s=i==="THINKING"?18:i==="TOOL_USE"?26:i==="SPEAKING"?12:i==="ERROR"?-8:0,o=ai(),c=o?o.net.getStats():{active:0,throughput:1},u={t:this.simTime,power:xt(62+16*Math.sin(this.simTime*.21)+s+Math.sin(this.simTime*1.7)*4,8,100),temp:xt(312+14*Math.sin(this.simTime*.13+1)+s*.5+c.active*.02,280,420),packets:xt(120+c.active*2.4+60*Math.sin(this.simTime*.4),0,999),latency:xt(21+c.active*.05+5*Math.sin(this.simTime*.9),4,120),throughput:xt(1.2+c.throughput*.14+.5*Math.sin(this.simTime*.31),.1,9.9)};this.accModel>=.05&&(qo.push(u),px.report(t.stats.frameMs),this.accModel=0),this.accTele>=.2&&(t.setTelemetry(u),this.accTele=0)}fireCue(e){var i,s,o;const t=Me.getState();switch(bt.emit("TIMELINE_CUE",{kind:e.kind,value:e.value}),e.kind){case"log":t.pushLog("sys","DIRECTOR",e.value);break;case"state":t.setCoreState(e.value);break;case"tab":t.setTab(e.value);break;case"burst":{const c=parseInt(e.value,10)||100;(i=ai())==null||i.ambient.burstAt(c,"#ffb700"),(s=ai())==null||s.net.burst(Math.floor(c*.8)),mn.zap();break}case"spike":bt.emit("NETWORK_SPIKE",{magnitude:parseFloat(e.value)||.8});break;case"brief":(o=ai())==null||o.office.triggerBriefing();break;case"pulse":oi.firePulseWave();break;case"memory":Ko.burst(3);break;case"speak":t.setCoreState("SPEAKING"),t.pushLog("ok","VORTEX",e.value);break}}scrubTo(e){const t=Me.getState();this.scrubbing=!0;let i=null,s=null;for(const o of Jh){if(o.t>e)break;o.kind==="tab"&&(i=o.value),o.kind==="state"&&(s=o.value)}t.setTimeline({t:e}),i&&t.setTab(i),s&&t.coreState!==s&&t.setCoreState(s),this.scrubbing=!1}togglePlay(){const e=Me.getState();!e.tlPlaying&&e.tlTime>=Mr-.01&&(e.setTimeline({t:0}),this.cuePtr=0),e.setTimeline({playing:!e.tlPlaying}),Me.getState().tlPlaying?e.pushLog("sys","DIRECTOR","cinematic sequence engaged — camera authority transferred"):e.pushLog("sys","DIRECTOR","camera authority returned to operator")}injectTask(e){const t=Me.getState(),i=++this.taskToken,s=(o,c)=>window.setTimeout(()=>{this.taskToken===i&&c()},o);t.pushLog("info","CMD",`directive received: “${e}”`),t.setCoreState("LISTENING"),s(550,()=>{t.setCoreState("THINKING"),t.pushLog("info","CORTEX","reasoning across 10 layers — attention heads engaged")}),s(1800,()=>{t.setCoreState("TOOL_USE");const o=t.agents[Math.floor(Math.random()*t.agents.length)];o&&(bt.emit("AGENT_TASK_ASSIGNED",{agentId:o.id,task:e}),t.pushLog("info","SWARM",`task delegated → ${o.codename} (${o.role})`))}),s(3100,()=>{t.setCoreState("SPEAKING");const o=og[Math.floor(Math.random()*og.length)];t.pushLog("ok","VORTEX",o)}),s(4700,()=>{var o;t.setCoreState("SUCCESS"),(o=ai())==null||o.ambient.burstAt(90,"#00ff66")}),s(6e3,()=>{Me.getState().coreState==="SUCCESS"&&Me.getState().setCoreState("IDLE")})}netSpike(e=.9){bt.emit("NETWORK_SPIKE",{magnitude:e})}triggerErrorDemo(){const e=Me.getState();e.setCoreState("ERROR"),e.pushLog("err","SYS","simulated containment fault — magnetic field harmonics unstable"),window.setTimeout(()=>{Me.getState().coreState==="ERROR"&&(Me.getState().setCoreState("SUCCESS"),Me.getState().pushLog("ok","SYS","fault isolated and purged — harmonics restored"),window.setTimeout(()=>{Me.getState().coreState==="SUCCESS"&&Me.getState().setCoreState("IDLE")},1400))},2200)}showHumanFace(){const e=Me.getState();e.setTab("intel"),e.pushLog("sys","VORTEX","manifesting intelligence lattice — particle humanoid convergence")}handleCommand(e){var o;const t=e.trim();if(!t)return;const i=Me.getState();bt.emit("COMMAND_ISSUED",{raw:t}),i.pushLog("sys","OPERATOR",`> ${t}`);const s=t.toLowerCase();if(s==="help"){i.pushLog("sys","VORTEX","commands: status · human face · spike · briefing · agents · missions · network · memory · error · camera <mode> · clear");return}if(s==="clear"){i.clearLog();return}if(s==="status"){i.pushLog("info","VORTEX",`core ${i.coreState} · ${i.agents.length} agents · ${i.stats.fps.toFixed(0)} fps · uplink SECURE`);return}if(s.includes("face")||s.includes("human")){this.showHumanFace();return}if(s.includes("spike")){this.netSpike();return}if(s.includes("brief")){(o=ai())==null||o.office.triggerBriefing(),i.setTab("agents"),i.pushLog("info","SWARM","all units summoned to the strategy table");return}if(s.includes("error")||s.includes("fault")){this.triggerErrorDemo();return}if(s==="agents"||s==="office"){i.setTab("agents");return}if(s==="missions"){i.setTab("missions");return}if(s==="network"||s==="cortex"){i.setTab("network");return}if(s==="memory"||s==="vault"){i.setTab("memory");return}if(s==="pulse"){i.setTab("missions"),oi.firePulseWave();return}if(s.startsWith("camera ")){const c=s.slice(7).trim().toUpperCase().replace(" ","_");["FREE","ORBIT","TACTICAL","AGENT_FOLLOW","WORKSTATION_FOCUS","TASK_TRACK"].includes(c)?(i.setCameraMode(c),i.pushLog("info","DIRECTOR",`camera authority → ${c}`)):i.pushLog("warn","DIRECTOR",`unknown shot “${c}”`);return}this.injectTask(t)}dispose(){this.ambTimer&&clearTimeout(this.ambTimer),Ko.stop()}}const Vi=new jb,Da={fill:"none",stroke:"currentColor",strokeWidth:1.6},Yb=[{id:"core",label:"CORE",icon:E.jsxs("svg",{viewBox:"0 0 24 24",...Da,children:[E.jsx("path",{d:"M5 19a8.5 8.5 0 1 1 14 0"}),E.jsx("circle",{cx:"12",cy:"13",r:"2.2",fill:"currentColor",stroke:"none"}),E.jsx("path",{d:"M4 21h16"})]})},{id:"agents",label:"AGENTS",icon:E.jsxs("svg",{viewBox:"0 0 24 24",...Da,children:[E.jsx("circle",{cx:"8",cy:"8",r:"2.6"}),E.jsx("path",{d:"M3.5 19c.6-3.2 2.3-5 4.5-5s3.9 1.8 4.5 5"}),E.jsx("circle",{cx:"16.5",cy:"7",r:"2.1"}),E.jsx("path",{d:"M13.8 18.4c.5-2.6 1.5-4 2.7-4s2.3 1.4 2.8 4"})]})},{id:"intel",label:"INTEL",icon:E.jsxs("svg",{viewBox:"0 0 24 24",...Da,children:[E.jsx("path",{d:"M12 3c4 0 7 3.6 7 8s-3 8-7 8-7-3.6-7-8 3-8 7-8z"}),E.jsx("circle",{cx:"9.5",cy:"10",r:"0.9",fill:"currentColor",stroke:"none"}),E.jsx("circle",{cx:"14.5",cy:"10",r:"0.9",fill:"currentColor",stroke:"none"}),E.jsx("path",{d:"M9 14.5c1 .9 2 1.3 3 1.3s2-.4 3-1.3"})]})},{id:"missions",label:"MISSIONS",icon:E.jsxs("svg",{viewBox:"0 0 24 24",...Da,children:[E.jsx("rect",{x:"3",y:"4",width:"6",height:"4.4"}),E.jsx("rect",{x:"15",y:"4",width:"6",height:"4.4"}),E.jsx("rect",{x:"9",y:"15",width:"6",height:"4.4"}),E.jsx("path",{d:"M6 8.4v3h12v-3M12 11.4V15"})]})},{id:"network",label:"CORTEX",icon:E.jsxs("svg",{viewBox:"0 0 24 24",...Da,children:[E.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",opacity:"0.5"}),E.jsx("circle",{cx:"7",cy:"7",r:"1.4",fill:"currentColor",stroke:"none"}),E.jsx("circle",{cx:"15",cy:"7",r:"1.4",fill:"currentColor",stroke:"none"}),E.jsx("circle",{cx:"10",cy:"12",r:"1.4",fill:"currentColor",stroke:"none"}),E.jsx("circle",{cx:"18",cy:"12",r:"1.4",fill:"currentColor",stroke:"none"}),E.jsx("circle",{cx:"6",cy:"17",r:"1.4",fill:"currentColor",stroke:"none"}),E.jsx("circle",{cx:"13",cy:"17",r:"1.4",fill:"currentColor",stroke:"none"})]})},{id:"memory",label:"MEMORY",icon:E.jsxs("svg",{viewBox:"0 0 24 24",...Da,children:[E.jsx("path",{d:"M12 3l7 4v10l-7 4-7-4V7l7-4z"}),E.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor",stroke:"none"}),E.jsx("path",{d:"M12 10V7M12 14v3M10.3 11L7 9.5M13.7 11L17 9.5"})]})}];function qb(){const a=Ji(t=>t.labOpen),e=Ji(t=>t.toggleLab);return E.jsx("button",{className:`btn sm wide ${a?"active":""}`,onClick:()=>e(),children:"CORE LAB"})}function $b(){const a=Me(h=>h.tab),e=Me(h=>h.setTab),t=Me(h=>h.setHoloOpen),i=Me(h=>h.openHolo),s=Me(h=>h.holoOpen),o=Me(h=>h.setLabOpen),c=Me(h=>h.pushLog),u=h=>{e(h),mn.chime(1180)};return E.jsxs("nav",{className:"left-rail",children:[Yb.map(h=>E.jsxs("button",{className:`rail-tab ${a===h.id?"active":""}`,onClick:()=>u(h.id),title:h.label,children:[E.jsx("span",{className:"rail-ico",children:h.icon}),E.jsx("span",{className:"rail-label",children:h.label})]},h.id)),E.jsx("div",{className:"rail-divider"}),E.jsx("button",{className:"btn sm wide gold",onClick:()=>{Vi.injectTask("priority directive Ω-77"),mn.chime(980)},children:"INJECT TASK"}),E.jsx("button",{className:"btn sm wide",onClick:()=>{Vi.netSpike()},children:"NET SPIKE"}),E.jsx("button",{className:`btn sm wide ${s?"active":""}`,onClick:()=>{s?t(!1):(i("terminal"),c("sys","HOLO","holographic control lab materialized"))},children:"HOLO DECK"}),E.jsx("button",{className:"btn sm wide gold",onClick:()=>o(!0),children:"AGENT LAB"}),E.jsx(qb,{}),E.jsx("div",{className:"row-spacer"}),E.jsxs("div",{style:{textAlign:"center",fontSize:7.5,letterSpacing:"0.2em",color:"var(--faint)"},children:["Ω·LINK",E.jsx("br",{}),"STABLE"]})]})}const Mv={PENDING:"#7d8595",ACTIVE:"#00f0ff",DONE:"#00ff66",BLOCKED:"#ff3333"};function Kb(a,e,t){return`M ${t} 0 H ${a-t} L ${a} ${t} V ${e-t} L ${a-t} ${e} H ${t} L 0 ${e-t} V ${t} Z`}function Zb(){var w;const a=Ob(),e=Me(R=>R.pushLog),[t,i]=tt.useState({x:30,y:10,k:.82}),[s,o]=tt.useState(null),[c,u]=tt.useState(null),[h,f]=tt.useState(null),[p,x]=tt.useState(null),[g,_]=tt.useState(null),[M,b]=tt.useState([]),v=tt.useRef(null),y=tt.useRef(null),P=tt.useRef(null),L=tt.useRef([]);tt.useEffect(()=>{const R=bt.on("MISSION_PULSE",({edgeId:K})=>{if(!K)return;const te={id:Pi("p"),edgeId:K,t:0};L.current=[...L.current,te],b(L.current)});let F=0,B=performance.now();const z=()=>{F=requestAnimationFrame(z);const K=performance.now(),te=Math.min(.05,(K-B)/1e3);if(B=K,L.current.length===0)return;let Y=!1;const oe=[];for(const Z of L.current)Z.t+=te*1.5,Z.t<1&&oe.push(Z),Y=!0;Y&&(L.current=oe,b(oe))};return z(),()=>{R(),cancelAnimationFrame(F)}},[]);const A=(R,F)=>{const B=v.current;if(!B)return{x:0,y:0};const z=B.getBoundingClientRect();return{x:(R-z.left-t.x)/t.k,y:(F-z.top-t.y)/t.k}},D=R=>a.nodes.find(F=>F.id===R),I=(R,F)=>{var z,K;oi.addEdge(R,F)?e("ok","MISSION",`link forged: ${(z=D(R))==null?void 0:z.title} → ${(K=D(F))==null?void 0:K.title}`):e("err","MISSION","link rejected — cycle detected or duplicate edge"),f(null)},O=kb(a);return E.jsxs("div",{className:"mission-layer",children:[E.jsxs("div",{className:"mission-toolbar",children:[E.jsx("button",{className:"btn sm gold",onClick:()=>{const R=oi.addNode(s);o(R)},children:"+ NODE"}),E.jsx("button",{className:`btn sm ${h?"active":""}`,onClick:()=>{f(null),e("info","MISSION","link mode — click an output port, then a target node")},children:h?`FROM: ${((w=D(h))==null?void 0:w.title.slice(0,10))??"?"}`:"LINK MODE"}),E.jsx("button",{className:"btn sm",onClick:()=>{s&&oi.cycleStatus(s)},children:"CYCLE STATUS"}),E.jsx("button",{className:"btn sm",onClick:()=>{s?oi.duplicateNode(s):c&&(oi.removeEdge(c),u(null))},children:c?"CUT EDGE":"DUPLICATE"}),E.jsx("button",{className:"btn sm danger",onClick:()=>{s&&(oi.removeNode(s),o(null))},children:"DELETE"}),E.jsx("button",{className:"btn sm",onClick:()=>oi.autoLayout(),children:"AUTO-LAYOUT"}),E.jsx("button",{className:"btn sm",onClick:()=>oi.reset(),children:"RESET SEED"}),E.jsx("button",{className:"btn sm gold",onClick:()=>{oi.firePulseWave(),e("sys","MISSION","energy pulse wave routed through the graph")},children:"⚡ SEND PULSE"})]}),E.jsxs("div",{className:"m-orphans panel",children:[E.jsxs("div",{className:"panel-title",children:["GRAPH INTEGRITY ",E.jsxs("span",{className:"aux",children:[a.nodes.length,"N·",a.edges.length,"E"]})]}),E.jsxs("div",{className:"panel-body",style:{fontSize:9.5,lineHeight:1.7,color:"var(--dim)"},children:[E.jsxs("div",{children:["CYCLES ",E.jsx("b",{style:{color:"var(--green)"},children:"0"})," · guard ACTIVE"]}),E.jsxs("div",{children:["ORPHANS"," ",E.jsx("b",{style:{color:O.length?"var(--gold2)":"var(--green)"},children:O.length}),O.length>0&&E.jsxs("span",{children:[" — ",O.map(R=>R.title).join(", ")]})]}),E.jsxs("div",{children:["INVALID EDGES ",E.jsx("b",{style:{color:"var(--green)"},children:"0"})," · auto-repaired on load"]}),E.jsx("div",{className:"mt8",style:{color:"var(--faint)",fontSize:8.5},children:"drag nodes · wheel zoom · dbl-click rename · port→node links"})]})]}),E.jsx("svg",{ref:v,className:`mission-svg ${y.current?"panning":""} ${h?"linking":""}`,onPointerDown:R=>{(R.target===v.current||R.target.tagName==="svg")&&(y.current={sx:R.clientX,sy:R.clientY,vx:t.x,vy:t.y},o(null),u(null))},onPointerMove:R=>{if(y.current)i(F=>({...F,x:y.current.vx+(R.clientX-y.current.sx),y:y.current.vy+(R.clientY-y.current.sy)}));else if(P.current){const F=A(R.clientX,R.clientY);oi.moveNode(P.current.id,F.x-P.current.ox,F.y-P.current.oy)}h&&x(A(R.clientX,R.clientY))},onPointerUp:()=>{y.current=null,P.current=null},onWheel:R=>{const F=v.current;if(!F)return;const B=F.getBoundingClientRect(),z=R.clientX-B.left,K=R.clientY-B.top;i(te=>{const Y=Math.min(2.2,Math.max(.35,te.k*(1-R.deltaY*.0012)));return{k:Y,x:z-(z-te.x)/te.k*Y,y:K-(K-te.y)/te.k*Y}})},children:E.jsxs("g",{transform:`translate(${t.x},${t.y}) scale(${t.k})`,children:[a.edges.map(R=>{const F=D(R.from),B=D(R.to);if(!F||!B)return null;const z=M.some(K=>K.edgeId===R.id);return E.jsx("line",{className:`m-edge ${z?"hot":""} ${c===R.id?"hot":""}`,x1:F.x,y1:F.y,x2:B.x,y2:B.y,onPointerDown:K=>{K.stopPropagation(),u(R.id),o(null)}},R.id)}),h&&p&&D(h)&&E.jsx("line",{className:"m-edge-ghost",x1:D(h).x,y1:D(h).y,x2:p.x,y2:p.y}),M.map(R=>{const F=a.edges.find(te=>te.id===R.edgeId);if(!F)return null;const B=D(F.from),z=D(F.to);if(!B||!z)return null;const K=rb(R.t);return E.jsx("circle",{className:"m-pulse",r:5,cx:B.x+(z.x-B.x)*K,cy:B.y+(z.y-B.y)*K},R.id)}),a.nodes.map(R=>E.jsxs("g",{className:`m-node ${s===R.id?"sel":""}`,transform:`translate(${R.x},${R.y})`,onPointerDown:z=>{z.stopPropagation(),o(R.id),u(null);const K=A(z.clientX,z.clientY);P.current={id:R.id,ox:K.x-R.x,oy:K.y-R.y},h&&h!==R.id&&I(h,R.id)},onDoubleClick:z=>{z.stopPropagation(),_({id:R.id,x:R.x*t.k+t.x-80,y:R.y*t.k+t.y-12,value:R.title})},children:[E.jsx("path",{d:Kb(158,48,9),transform:`translate(${-158/2},${-48/2})`,className:"m-node-box"}),E.jsx("line",{className:"m-node-status",x1:-158/2+4,y1:-48/2+8,x2:-158/2+4,y2:48/2-8,stroke:Mv[R.status]}),E.jsx("text",{className:"m-node-title",textAnchor:"middle",y:-2,children:R.title.length>20?R.title.slice(0,19)+"…":R.title}),E.jsx("text",{className:"m-node-sub",textAnchor:"middle",y:13,fill:Mv[R.status],children:R.status}),E.jsx("circle",{className:"m-port",cx:-158/2,cy:0,r:5.5,onPointerDown:z=>{z.stopPropagation(),o(R.id)}}),E.jsx("circle",{className:"m-port",cx:158/2,cy:0,r:5.5,onPointerDown:z=>{z.stopPropagation(),f(R.id),o(R.id)}})]},R.id))]})}),g&&E.jsx("input",{className:"rename-input",style:{left:g.x,top:g.y,width:170},value:g.value,autoFocus:!0,onFocus:R=>R.target.select(),onChange:R=>_({...g,value:R.target.value.toUpperCase()}),onBlur:()=>{oi.renameNode(g.id,g.value.trim()||"UNNAMED"),_(null)},onKeyDown:R=>{R.key==="Enter"&&R.target.blur(),R.key==="Escape"&&_(null)}})]})}const Wc={note:"#00f0ff",folder:"#d4af37",tag:"#00ff66"};function Qb(){const a=Vb(),e=tt.useRef(null),[t,i]=tt.useState(null),[s,o]=tt.useState(0),[c,u]=tt.useState(""),h=tt.useRef({x:0,y:0,k:1.15}),f=tt.useRef(null),p=tt.useRef(null);tt.useEffect(()=>bt.on("MEMORY_NODE_CREATED",()=>o(M=>M+1)),[]),tt.useEffect(()=>{const _=e.current;if(!_)return;const M=_.getContext("2d");if(!M)return;let b=0,v=performance.now();const y=()=>{b=requestAnimationFrame(y);const P=performance.now(),L=Math.min(.05,(P-v)/1e3);v=P,Hb(L);const A=_.clientWidth,D=_.clientHeight;(_.width!==A*2||_.height!==D*2)&&(_.width=A*2,_.height=D*2),M.setTransform(2,0,0,2,0,0),M.clearRect(0,0,A,D);const I=h.current,O=z=>A/2+(z+I.x)*I.k,w=z=>D/2+(z+I.y)*I.k,{nodes:R,edges:F}=nu(),B=new Map(R.map(z=>[z.id,z]));for(const z of F){const K=B.get(z.from),te=B.get(z.to);!K||!te||(M.strokeStyle=z.kind==="tag"?"rgba(0,255,102,0.22)":z.kind==="folder"?"rgba(212,175,55,0.2)":"rgba(0,240,255,0.2)",M.lineWidth=1,M.beginPath(),M.moveTo(O(K.x),w(K.y)),M.lineTo(O(te.x),w(te.y)),M.stroke())}for(const z of R){const K=O(z.x),te=w(z.y),Y=Wc[z.type],oe=(P-z.born)/1e3;z.born>0&&oe<1.6&&(M.strokeStyle=Y,M.globalAlpha=1-oe/1.6,M.beginPath(),M.arc(K,te,10+oe*26,0,Mt),M.stroke(),M.globalAlpha=1);const Z=p.current===z.id,$=t===z.id;M.lineWidth=$?2:Z?1.6:1,M.strokeStyle=Y,M.fillStyle="rgba(10,10,15,0.92)";const se=z.type==="folder"?11:z.type==="tag"?7.5:8.5;if(M.beginPath(),z.type==="folder"){for(let de=0;de<6;de++){const G=de/6*Mt-Math.PI/6,J=K+Math.cos(G)*se,Ue=te+Math.sin(G)*se;de===0?M.moveTo(J,Ue):M.lineTo(J,Ue)}M.closePath()}else z.type==="tag"?(M.moveTo(K,te-se),M.lineTo(K+se,te),M.lineTo(K,te+se),M.lineTo(K-se,te),M.closePath()):M.rect(K-se,te-se*.82,se*2,se*1.64);M.fill(),M.stroke(),$&&(M.strokeStyle="rgba(212,175,55,0.8)",M.beginPath(),M.arc(K,te,se+6,0,Mt),M.stroke()),M.fillStyle=Z||$?"#e0e6ed":"rgba(125,133,149,0.95)",M.font="9.5px 'JetBrains Mono', monospace",M.textAlign="center",M.fillText(z.title,K,te+se+12)}};return y(),()=>cancelAnimationFrame(b)},[t]);const x=(_,M)=>{const b=e.current;if(!b)return null;const v=b.getBoundingClientRect(),y=h.current,P=(_-v.left-v.width/2)/y.k-y.x,L=(M-v.top-v.height/2)/y.k-y.y;let A=null,D=256;for(const I of nu().nodes){const O=(I.x-P)**2+(I.y-L)**2;O<D&&(D=O,A=I.id)}return A},g=t?a.nodes.find(_=>_.id===t):null;return E.jsxs("div",{className:"memory-layer",children:[E.jsx("canvas",{ref:e,className:"memory-canvas",onPointerDown:_=>{var v,y;const M=x(_.clientX,_.clientY),b=h.current;f.current={id:M,sx:_.clientX,sy:_.clientY,vx:b.x,vy:b.y,moved:!1},(y=(v=_.target).setPointerCapture)==null||y.call(v,_.pointerId)},onPointerMove:_=>{const M=f.current;if(!M){p.current=x(_.clientX,_.clientY);return}const b=_.clientX-M.sx,v=_.clientY-M.sy;Math.abs(b)+Math.abs(v)>4&&(M.moved=!0);const y=h.current;if(M.id){const P=nu().nodes.find(L=>L.id===M.id);P&&(P.x+=b/y.k,P.y+=v/y.k,P.vx=0,P.vy=0,M.sx=_.clientX,M.sy=_.clientY)}else y.x=M.vx+b/y.k,y.y=M.vy+v/y.k},onPointerUp:()=>{const _=f.current;_&&!_.moved&&i(_.id),f.current=null},onWheel:_=>{const M=h.current;M.k=Math.min(2.6,Math.max(.4,M.k*(1-_.deltaY*.0012)))}}),E.jsxs("div",{className:"memory-legend",children:[E.jsxs("span",{children:[E.jsx("i",{style:{background:Wc.note}}),"NOTE"]}),E.jsxs("span",{children:[E.jsx("i",{style:{background:Wc.folder}}),"FOLDER"]}),E.jsxs("span",{children:[E.jsx("i",{style:{background:Wc.tag}}),"TAG"]}),E.jsxs("span",{style:{color:"var(--faint)"},children:["LIVE FS EVENTS: ",s]})]}),E.jsxs("div",{className:"memory-card panel",children:[E.jsxs("div",{className:"panel-title",children:[g?g.title:"VAULT INSPECTOR",E.jsx("span",{className:"aux",children:g?g.type.toUpperCase():`${a.nodes.length} NODES`})]}),E.jsxs("div",{className:"panel-body",children:[E.jsxs("div",{className:"gap6",style:{marginBottom:10},children:[E.jsx("input",{className:"input",style:{flex:1,padding:"5px 8px",fontSize:10},placeholder:"inscribe note…",value:c,onChange:_=>u(_.target.value),onKeyDown:_=>{_.key==="Enter"&&c.trim()&&(Ko.manualNote(c.trim()),u(""))}}),E.jsx("button",{className:"btn sm gold",onClick:()=>{c.trim()&&(Ko.manualNote(c.trim()),u(""))},children:"+"})]}),g?E.jsx("div",{className:"body",children:g.body||"— empty node —"}):E.jsxs("div",{className:"body",children:["Select a node to inspect its contents.",`

`,"The ",E.jsx("b",{children:"MockMemoryProvider"})," replays vault file-system events every few seconds — notes materialize, backlinks weave, the constellation reorganizes.",`

`,E.jsx("b",{children:"ObsidianBridge"})," stands ready for MCP / WebSocket attachment."]})]})]})]})}function Jb(){const a=Me(e=>e.log);return E.jsxs("div",{children:[a.slice(-14).map(e=>E.jsxs("div",{className:"holo-term-line",children:[E.jsxs("b",{children:["[",e.tag,"]"]})," ",e.msg]},e.id)),E.jsxs("div",{className:"holo-term-line gold",children:[E.jsx("b",{children:"vortex@Ω"})," ~ ",E.jsx("span",{className:"caret"})]})]})}function eA(){const a=Me(t=>t.telemetry),e=[["PLASMA FLOW",a.power,"#00f0ff"],["THERMAL",a.temp/430*100,"#ffb700"],["THROUGHPUT",a.throughput*10,"#00ff66"],["LATENCY",a.latency/130*100,"#ff3333"]];return E.jsxs("div",{children:[E.jsxs("div",{style:{fontFamily:"var(--disp)",fontSize:26,fontWeight:800,color:"var(--gold2)"},children:[a.power.toFixed(1),E.jsx("span",{style:{fontSize:11,color:"var(--dim)",marginLeft:6},children:"MW"})]}),e.map(([t,i,s])=>E.jsxs("div",{className:"holo-meter",children:[E.jsx("span",{style:{width:84},children:t}),E.jsx("div",{className:"bar",children:E.jsx("i",{style:{transform:`scaleX(${Math.min(1,i/100)})`,background:`linear-gradient(90deg, ${s}, #d4af37)`}})}),E.jsx("span",{style:{width:34,textAlign:"right",color:s},children:Math.min(999,Math.round(i))})]},t))]})}function tA(){const a=Me(e=>e.pushLog);return E.jsx("div",{children:py.map(e=>E.jsxs("div",{className:"holo-file",onClick:()=>{a("info","VAULT",`opened /${e.name} — holographic projection active`),mu().recognize("SWIPE",.7)},children:[E.jsx("span",{children:e.name}),E.jsxs("span",{style:{color:"var(--faint)"},children:[e.size," · ",e.mod]})]},e.name))})}const nA={terminal:"LIVE TERMINAL // BUS STREAM",telemetry:"CORE TELEMETRY // HOLO",files:"VAULT FILES // PROJECTION"};function iA(){const a=Me(v=>v.holoWindows),e=Me(v=>v.holoZ),t=Me(v=>v.moveHolo),i=Me(v=>v.resizeHolo),s=Me(v=>v.rotateHolo),o=Me(v=>v.focusHolo),c=Me(v=>v.minimizeHolo),u=Me(v=>v.closeHolo),h=tt.useRef(null),f=tt.useRef(new Map),p=mu(),x=(v,y,P)=>{v.stopPropagation(),o(y.id),h.current={id:y.id,mode:P,sx:v.clientX,sy:v.clientY,x:y.x,y:y.y,w:y.w,h:y.h,rot:y.rot,cx:y.x+y.w/2,cy:y.y+(y.minimized?14:y.h/2)},p.recognize(P==="rotate"?"ROTATE":"GRAB",.95);const L=D=>{const I=h.current;if(!I)return;const O=D.clientX-I.sx,w=D.clientY-I.sy;if(I.mode==="move")t(I.id,I.x+O,I.y+w);else if(I.mode==="resize")i(I.id,Math.max(210,I.w+O),Math.max(90,I.h+w));else{const R=Math.atan2(I.sy-I.cy,I.sx-I.cx),F=Math.atan2(D.clientY-I.cy,D.clientX-I.cx);let B=I.rot+(F-R)*180/Math.PI;for(;B>180;)B-=360;for(;B<-180;)B+=360;s(I.id,B)}},A=()=>{h.current=null,window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",A)};window.addEventListener("pointermove",L),window.addEventListener("pointerup",A)},g=(v,y)=>{v.stopPropagation();const P=1-v.deltaY*.0012,L=xt(y.w*P,210,720),A=xt(y.h*P,90,560);i(y.id,L,A),t(y.id,y.x-(L-y.w)/2,y.y-(A-y.h)/2),p.recognize("ZOOM",xt(Math.abs(v.deltaY)/120,.3,1))},_=(v,y)=>{if(o(y.id),f.current.set(v.pointerId,{x:v.clientX,y:v.clientY}),f.current.size===2){const P=[...f.current.values()];f.current.set(-1,{x:Math.hypot(P[0].x-P[1].x,P[0].y-P[1].y),y:0})}},M=(v,y)=>{if(f.current.has(v.pointerId)&&(f.current.set(v.pointerId,{x:v.clientX,y:v.clientY}),f.current.size===3)){const P=[...f.current.entries()].filter(([L])=>L!==-1).map(([,L])=>L);if(P.length===2){const L=Math.hypot(P[0].x-P[1].x,P[0].y-P[1].y),A=f.current.get(-1);if(A&&A.x>0){const D=L/A.x,I=xt(y.w*D,210,720),O=xt(y.h*D,90,560);i(y.id,I,O),p.recognize("PINCH",xt(Math.abs(D-1)*8,.3,1))}f.current.set(-1,{x:L,y:0})}}},b=v=>{f.current.delete(v.pointerId),f.current.delete(-1)};return E.jsxs("div",{className:"holo-layer",children:[a.map(v=>E.jsxs("div",{className:`holo-win ${v.z===e?"focused":""} ${v.minimized?"min":""}`,style:{left:v.x,top:v.y,width:v.w,height:v.minimized?"auto":v.h,zIndex:v.z,transform:`rotate(${v.rot}deg)`},onPointerDown:y=>_(y,v),onPointerMove:y=>M(y,v),onPointerUp:b,onWheel:y=>g(y,v),children:[E.jsxs("div",{className:"holo-bar",onPointerDown:y=>x(y,v,y.altKey?"rotate":"move"),onDoubleClick:()=>s(v.id,0),title:"drag: move · alt+drag: rotate · double-click: reset · wheel: zoom",children:[E.jsxs("span",{className:"holo-title",children:[nA[v.kind],Math.abs(v.rot)>.5&&E.jsxs("span",{style:{color:"var(--gold2)",marginLeft:8},children:["∠",v.rot.toFixed(0),"°"]})]}),E.jsxs("span",{className:"holo-btns",children:[E.jsx("button",{onClick:()=>c(v.id),title:"minimize",children:"—"}),E.jsx("button",{onClick:()=>u(v.id),title:"close",children:"×"})]})]}),E.jsxs("div",{className:"holo-body",children:[v.kind==="terminal"&&E.jsx(Jb,{}),v.kind==="telemetry"&&E.jsx(eA,{}),v.kind==="files"&&E.jsx(tA,{})]}),!v.minimized&&E.jsx("div",{className:"holo-resize",onPointerDown:y=>x(y,v,"resize")})]},v.id)),a.length===0&&E.jsx("div",{style:{position:"absolute",bottom:18,left:"50%",transform:"translateX(-50%)",pointerEvents:"none",fontSize:9,letterSpacing:"0.3em",color:"var(--faint)"},children:"HOLO DECK CLEAR — OPEN A WINDOW FROM THE RAIL"})]})}function $h(a,e,t){const i=s=>xt(Math.round(s),0,255).toString(16).padStart(2,"0");return`#${i(a)}${i(e)}${i(t)}`}function mi({label:a,value:e,min:t,max:i,step:s,fmt:o,onChange:c}){return E.jsxs("div",{className:"cl-row",children:[E.jsx("span",{children:a}),E.jsx("input",{className:"range",type:"range",min:t,max:i,step:s,value:e,onChange:u=>c(parseFloat(u.target.value))}),E.jsx("span",{className:"cl-val",children:o?o(e):e.toFixed(2)})]})}function rA(){const a=Ji(),e=a.labOpen;a.toggleLab;const t=a.set,i=Me(u=>u.pushLog),[s,o,c]=sb(a.tint);return E.jsxs("div",{className:`core-lab panel ${e?"open":""}`,children:[E.jsxs("div",{className:"panel-title gold",children:["CORE CONTROL LAB ",E.jsx("span",{className:"aux",children:"LIVE·RENDER"})]}),E.jsxs("div",{className:"panel-body",children:[E.jsx("div",{className:"cl-presets",children:Ty.map(u=>E.jsx("button",{className:`btn sm ${a.tint===(u.patch.tint??a.tint)&&a.speed===(u.patch.speed??a.speed)?"active":""}`,onClick:()=>{a.applyPreset(u),i("sys","LAB",`render preset engaged — ${u.name}`)},children:u.name},u.name))}),E.jsxs("div",{className:"cl-section",children:[E.jsx("div",{className:"cl-head",children:"PLASMA TINT"}),E.jsxs("div",{className:"cl-row",children:[E.jsx("span",{children:"HEX"}),E.jsx("input",{className:"input",style:{padding:"3px 7px",fontSize:10,letterSpacing:"0.1em"},value:a.tint.toUpperCase(),spellCheck:!1,onChange:u=>{const h=u.target.value;/^#[0-9a-fA-F]{6}$/.test(h)?t({tint:h.toLowerCase()}):/^[0-9a-fA-F]{6}$/.test(h)&&t({tint:`#${h.toLowerCase()}`})}}),E.jsx("span",{className:"cl-swatch",style:{background:a.tint,boxShadow:`0 0 12px ${a.tint}`}})]}),E.jsx("div",{className:"cl-swatches",children:wy.map(u=>E.jsx("div",{className:`swatch ${a.tint===u?"sel":""}`,style:{background:u,color:u},onClick:()=>t({tint:u})},u))}),E.jsx(mi,{label:"R",value:s,min:0,max:255,step:1,fmt:u=>String(Math.round(u)),onChange:u=>t({tint:$h(u,o,c)})}),E.jsx(mi,{label:"G",value:o,min:0,max:255,step:1,fmt:u=>String(Math.round(u)),onChange:u=>t({tint:$h(s,u,c)})}),E.jsx(mi,{label:"B",value:c,min:0,max:255,step:1,fmt:u=>String(Math.round(u)),onChange:u=>t({tint:$h(s,o,u)})})]}),E.jsxs("div",{className:"cl-section",children:[E.jsx("div",{className:"cl-head",children:"MOTION"}),E.jsx(mi,{label:"SPEED",value:a.speed,min:.1,max:5,step:.05,fmt:u=>`${u.toFixed(2)}×`,onChange:u=>t({speed:u})})]}),E.jsxs("div",{className:"cl-section",children:[E.jsx("div",{className:"cl-head",children:"LIGHTING · BLOOM MATRIX"}),E.jsx(mi,{label:"BLOOM",value:a.bloomStrength,min:0,max:2.5,step:.01,onChange:u=>t({bloomStrength:u})}),E.jsx(mi,{label:"THRESH",value:a.bloomThreshold,min:0,max:1,step:.01,onChange:u=>t({bloomThreshold:u})}),E.jsx(mi,{label:"RADIUS",value:a.bloomRadius,min:0,max:1,step:.01,onChange:u=>t({bloomRadius:u})}),E.jsx(mi,{label:"EXPOSE",value:a.exposure,min:.4,max:1.8,step:.01,onChange:u=>t({exposure:u})}),E.jsx(mi,{label:"EMISSIVE",value:a.emissive,min:.2,max:3,step:.01,fmt:u=>`${u.toFixed(2)}×`,onChange:u=>t({emissive:u})})]}),E.jsxs("div",{className:"cl-section",children:[E.jsx("div",{className:"cl-head",children:"PARTICLE MATRIX"}),E.jsx(mi,{label:"DUST·N",value:a.dustDensity,min:0,max:1,step:.01,fmt:u=>`${Math.round(u*100)}%`,onChange:u=>t({dustDensity:u})}),E.jsx(mi,{label:"DUST·S",value:a.dustScale,min:.2,max:3,step:.05,fmt:u=>`${u.toFixed(2)}×`,onChange:u=>t({dustScale:u})}),E.jsx(mi,{label:"STREAM·N",value:a.streamDensity,min:0,max:1,step:.01,fmt:u=>`${Math.round(u*100)}%`,onChange:u=>t({streamDensity:u})}),E.jsx(mi,{label:"STREAM·S",value:a.streamScale,min:.2,max:3,step:.05,fmt:u=>`${u.toFixed(2)}×`,onChange:u=>t({streamScale:u})})]}),E.jsxs("div",{className:"cl-section",children:[E.jsx("div",{className:"cl-head",children:"OPTICS"}),E.jsxs("div",{className:"cl-row",children:[E.jsx("span",{children:"DEPTH·DOF"}),E.jsx("button",{className:`btn sm ${a.dof?"active":""}`,onClick:()=>t({dof:!a.dof}),style:{gridColumn:"2 / 4",justifySelf:"start"},children:a.dof?"ENABLED":"DISABLED"})]})]}),E.jsx("button",{className:"btn sm wide",onClick:()=>{Ji.getState().reset(),i("sys","LAB",`render matrix restored to defaults (${Ua.tint})`)},children:"RESTORE DEFAULTS"})]})]})}const sA={core:{title:"CENTRAL CORE",sub:"monumental energy arc · plasma conduit array"},agents:{title:"SECRET AGENT HQ",sub:"autonomous swarm operations floor · 8 units"},intel:{title:"INTELLIGENCE LATTICE",sub:"65,000-particle SDF humanoid · spectrum-bound skeleton"},network:{title:"NEURAL CORTEX",sub:"10-layer token propagation engine"},missions:{title:"MISSION MIND-MAP",sub:"living operational graph · drag · link · pulse"},memory:{title:"MEMORY VAULT",sub:"obsidian-ready backlink constellation"}};function aA(){const a=tt.useRef(null),e=tt.useRef(null),t=Me(g=>g.tab),i=Me(g=>g.holoOpen),s=Me(g=>g.engineFailed),[o,c]=tt.useState(!1),[u,h]=tt.useState(0),f=tt.useRef(!0);tt.useEffect(()=>{const g=a.current;if(!g)return;const _=Pb(g);if(_){_.onFrame=b=>Vi.frameTick(b),Vi.init();const M=()=>_.resize();return window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M),Nb()}}Vi.init()},[]),tt.useEffect(()=>{if(f.current){f.current=!1;return}c(!0),h(_=>_+1);const g=setTimeout(()=>c(!1),720);return()=>clearTimeout(g)},[t]);const p=sA[t],x=t==="missions"||t==="memory";return E.jsxs("div",{className:`viewport-frame ${o?"warp":""} ${x?"dim":""}`,children:[E.jsx("div",{className:"canvas-host",ref:e,children:E.jsx("canvas",{ref:a})}),o&&E.jsx("div",{className:"warp-grid"}),E.jsx("div",{className:`fx-flash ${u>0?"go":""}`},u),E.jsx("div",{className:"fx-scan"}),E.jsx("div",{className:"fx-vignette"}),E.jsx("span",{className:"cb cb1"}),E.jsx("span",{className:"cb cb2"}),E.jsx("span",{className:"cb cb3"}),E.jsx("span",{className:"cb cb4"}),E.jsxs("div",{className:"tab-title",children:[E.jsx("h1",{children:p.title}),E.jsx("p",{children:p.sub}),E.jsx("div",{className:"rule"})]},t),E.jsx("div",{className:"hud-side-note l",children:"VORTEX // SECTOR Ω-77 · OBSIDIAN SUBSTRATE"}),E.jsx("div",{className:"hud-side-note r",children:"PLASMA ENVELOPE 312K · CONTAINMENT NOMINAL"}),t==="missions"&&E.jsx(Zb,{}),t==="memory"&&E.jsx(Qb,{}),i&&t==="core"&&E.jsx(iA,{}),E.jsx(rA,{}),s&&E.jsx("div",{style:{position:"absolute",inset:0,display:"grid",placeItems:"center",zIndex:30},children:E.jsxs("div",{className:"panel",style:{padding:26,maxWidth:420,textAlign:"center"},children:[E.jsx("div",{className:"panel-title gold",children:"RENDER FALLBACK"}),E.jsx("p",{style:{color:"var(--dim)",fontSize:11,lineHeight:1.7},children:"WebGL2 pipeline unavailable in this environment. VORTEX remains operational in telemetry-only mode — all subsystems, graphs and the swarm continue to run."})]})}),!ai()&&!s&&E.jsx("span",{style:{display:"none"},children:(mn.supported,"")})]})}function Xc({series:a,color:e,max:t}){const i=tt.useRef(null);return tt.useEffect(()=>{let s=0;const o=()=>{s=requestAnimationFrame(o);const c=i.current;if(!c)return;const u=c.getContext("2d");if(!u)return;const h=190,f=40;c.width!==h&&(c.width=h),c.height!==f&&(c.height=f),u.clearRect(0,0,h,f);const p=a();if(p.length<2)return;let x=t??0;if(!x){for(const M of p)M>x&&(x=M);x=x*1.15||1}u.beginPath();for(let M=0;M<p.length;M++){const b=M/(p.length-1)*h,v=f-3-Math.min(p[M],x)/x*(f-8);M===0?u.moveTo(b,v):u.lineTo(b,v)}u.strokeStyle=e,u.lineWidth=1.4,u.shadowColor=e,u.shadowBlur=5,u.stroke(),u.shadowBlur=0,u.lineTo(h,f),u.lineTo(0,f),u.closePath(),u.globalAlpha=.09,u.fillStyle=e,u.fill(),u.globalAlpha=1;const g=h,_=f-3-Math.min(p[p.length-1],x)/x*(f-8);u.fillStyle=e,u.fillRect(g-2.5,_-2.5,4,4)};return o(),()=>cancelAnimationFrame(s)},[a,e,t]),E.jsx("canvas",{ref:i,style:{width:"100%",height:26,display:"block"}})}function oA(){const a=Me(p=>p.telemetry),e=Me(p=>p.agents),t=Me(p=>p.selectedAgentId),i=Me(p=>p.selectAgent),s=Me(p=>p.setTab),o=Me(p=>p.setCameraMode),c=Me(p=>p.log),u=tt.useRef(null);tt.useEffect(()=>{const p=u.current;p&&(p.scrollTop=p.scrollHeight)},[c]);const h=p=>{i(p),s("agents"),o("AGENT_FOLLOW")},f=p=>{i(p),s("agents"),o("WORKSTATION_FOCUS")};return E.jsxs("aside",{className:"right-rail",children:[E.jsxs("section",{className:"panel",children:[E.jsxs("div",{className:"panel-title",children:["CORE TELEMETRY ",E.jsx("span",{className:"aux",children:"LIVE·5Hz"})]}),E.jsxs("div",{className:"panel-body spark-grid",children:[E.jsxs("div",{className:"spark-cell",children:[E.jsx("div",{className:"spark-label",children:"POWER DRAW"}),E.jsxs("div",{className:"spark-val hot",children:[a.power.toFixed(1),E.jsx("small",{children:"MW"})]}),E.jsx(Xc,{series:()=>qo.power,color:"#ffb700",max:110})]}),E.jsxs("div",{className:"spark-cell",children:[E.jsx("div",{className:"spark-label",children:"CORE TEMP"}),E.jsxs("div",{className:"spark-val cold",children:[a.temp.toFixed(0),E.jsx("small",{children:"K"})]}),E.jsx(Xc,{series:()=>qo.temp,color:"#00f0ff",max:430})]}),E.jsxs("div",{className:"spark-cell",children:[E.jsx("div",{className:"spark-label",children:"PKT RATE"}),E.jsxs("div",{className:"spark-val cold",children:[a.packets.toFixed(0),E.jsx("small",{children:"/s"})]}),E.jsx(Xc,{series:()=>qo.packets,color:"#00f0ff",max:1e3})]}),E.jsxs("div",{className:"spark-cell",children:[E.jsx("div",{className:"spark-label",children:"NN LATENCY"}),E.jsxs("div",{className:"spark-val hot",children:[a.latency.toFixed(1),E.jsx("small",{children:"ms"})]}),E.jsx(Xc,{series:()=>qo.latency,color:"#d4af37",max:130})]})]})]}),E.jsxs("section",{className:"panel",children:[E.jsxs("div",{className:"panel-title",children:["SWARM ROSTER ",E.jsxs("span",{className:"aux",children:[e.length," UNITS"]})]}),E.jsx("div",{className:"panel-body roster",children:e.map(p=>E.jsxs("div",{className:`roster-row ${t===p.id?"sel":""}`,onClick:()=>h(p.id),onDoubleClick:()=>f(p.id),title:"click: follow · double-click: workstation focus",children:[E.jsx("span",{className:"dot","data-status":p.status,style:{color:p.color}}),E.jsxs("div",{children:[E.jsxs("div",{className:"roster-name",style:{color:p.color},children:[p.codename," ",E.jsxs("span",{style:{color:"var(--faint)",fontWeight:400},children:["· ",p.role]})]}),E.jsx("div",{className:"roster-task",children:p.task})]}),E.jsxs("div",{className:"roster-right",children:[E.jsx("div",{className:"roster-status",children:p.status}),E.jsx("div",{className:"prog",children:E.jsx("div",{className:"prog-fill",style:{transform:`scaleX(${p.progress/100})`}})})]})]},p.id))})]}),E.jsxs("section",{className:"panel",style:{flex:1,minHeight:120,display:"flex",flexDirection:"column"},children:[E.jsxs("div",{className:"panel-title",children:["EVENT STREAM ",E.jsx("span",{className:"aux",children:ai()?"BUS·LIVE":"BUS"})]}),E.jsxs("div",{className:"panel-body log-list",ref:u,children:[c.map(p=>E.jsxs("div",{className:"log-line","data-level":p.level,children:[E.jsx("span",{className:"t",children:p.time}),E.jsxs("b",{children:["[",p.tag,"]"]}),p.msg]},p.id)),c.length===0&&E.jsxs("div",{className:"log-line","data-level":"sys",children:[E.jsx("b",{children:"[SYS]"}),"awaiting first transmission…"]})]})]})]})}const Kh=[.5,1,2,4];function lA(){const a=Me(f=>f.tlPlaying),e=Me(f=>f.tlTime),t=Me(f=>f.tlSpeed),i=Me(f=>f.tlLoop),s=Me(f=>f.setTimeline),o=tt.useRef(null),c=tt.useRef(!1),u=f=>{const p=o.current;if(!p)return 0;const x=p.getBoundingClientRect();return Math.min(1,Math.max(0,(f-x.left)/x.width))*Mr},h=f=>{const p=Math.floor(f),x=Math.floor((f-p)*10);return`00:${String(p).padStart(2,"0")}.${x}`};return E.jsxs("div",{className:"bottom-timeline",children:[E.jsx("button",{className:"tl-btn",onClick:()=>{Vi.togglePlay(),mn.chime(a?700:1400)},title:a?"pause cinematic":"play 30s cinematic demo",children:a?E.jsxs("svg",{viewBox:"0 0 12 12",fill:"currentColor",children:[E.jsx("rect",{x:"2",y:"1.5",width:"3",height:"9"}),E.jsx("rect",{x:"7",y:"1.5",width:"3",height:"9"})]}):E.jsx("svg",{viewBox:"0 0 12 12",fill:"currentColor",children:E.jsx("path",{d:"M2.5 1.2l8 4.8-8 4.8z"})})}),E.jsxs("button",{className:"tl-speed",onClick:()=>{const f=Kh.indexOf(t),p=Kh[(f+1)%Kh.length];s({speed:p})},title:"playback speed",children:[t,"×"]}),E.jsx("button",{className:"tl-btn ",style:{color:i?"var(--gold2)":"var(--faint)"},onClick:()=>s({loop:!i}),title:"loop sequence",children:E.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",children:[E.jsx("path",{d:"M17 2l4 4-4 4"}),E.jsx("path",{d:"M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"}),E.jsx("path",{d:"M21 13v1a4 4 0 0 1-4 4H3"})]})}),E.jsxs("div",{className:"tl-track",ref:o,onPointerDown:f=>{var p,x;c.current=!0,Vi.scrubbing=!0,Vi.scrubTo(u(f.clientX)),(x=(p=f.target).setPointerCapture)==null||x.call(p,f.pointerId)},onPointerMove:f=>{c.current&&Vi.scrubTo(u(f.clientX))},onPointerUp:()=>{c.current=!1,Vi.scrubbing=!1},children:[E.jsx("div",{className:"tl-rail"}),E.jsx("div",{className:"tl-fill",style:{width:`${e/Mr*100}%`}}),Jh.map((f,p)=>E.jsx("div",{className:"tl-marker","data-kind":f.kind,style:{left:`${f.t/Mr*100}%`},title:`${f.kind}: ${f.value}`},p)),E.jsx("div",{className:"tl-head",style:{left:`${e/Mr*100}%`}})]}),E.jsxs("div",{className:"tl-time",children:[h(e)," ",E.jsxs("span",{style:{color:"var(--faint)"},children:["/ ",h(Mr)]}),E.jsx("small",{children:"DIRECTOR TIMELINE"})]})]})}function cA(){const a=Me(c=>c.log),[e,t]=tt.useState(""),i=a.slice(-16),s=c=>E.jsx(E.Fragment,{children:i.map(u=>E.jsxs("span",{className:"ticker-item",children:[E.jsxs("b",{children:["[",u.tag,"]"]})," ",u.msg]},`${c}-${u.id}`))}),o=()=>{e.trim()&&(Vi.handleCommand(e),t(""))};return E.jsxs("div",{className:"bottom-stream",children:[E.jsx("div",{className:"ticker","aria-hidden":!0,children:E.jsxs("div",{className:"ticker-track",children:[s("a"),s("b")]})}),E.jsxs("div",{className:"cmd-wrap",children:[E.jsx("span",{className:"cmd-prompt",children:"Ω>"}),E.jsx("input",{className:"cmd-input",value:e,placeholder:"command the vortex… (try: human face · spike · briefing · help)",onChange:c=>t(c.target.value),onKeyDown:c=>{c.key==="Enter"&&o()},spellCheck:!1})]})]})}function uA(){const a=Me(i=>i.debugOpen),e=Me(i=>i.stats),t=tt.useRef(null);return tt.useEffect(()=>{let i=0;const s=()=>{var g;i=requestAnimationFrame(s);const o=t.current,c=ai();if(!o||!c)return;const u=o.getContext("2d");if(!u)return;const h=260,f=44;o.width!==h&&(o.width=h),o.height!==f&&(o.height=f),u.clearRect(0,0,h,f),u.strokeStyle="rgba(212,175,55,0.5)",u.setLineDash([3,3]),u.beginPath();const p=f-16.7/40*f;u.moveTo(0,p),u.lineTo(h,p),u.stroke(),u.setLineDash([]);const x=((g=c.fps)==null?void 0:g.history)??[];if(!(x.length<2)){u.beginPath();for(let _=0;_<x.length;_++){const M=_/(x.length-1)*h,b=f-Math.min(1,x[_]/40)*f;_===0?u.moveTo(M,b):u.lineTo(M,b)}u.strokeStyle="#00f0ff",u.lineWidth=1.2,u.stroke()}};return s(),()=>cancelAnimationFrame(i)},[]),E.jsxs("div",{className:`debug-console panel ${a?"open":""}`,children:[E.jsxs("div",{className:"panel-title gold",children:["DEBUG // SELF-HEALING ",E.jsx("span",{className:"aux",children:"[`]"})]}),E.jsxs("div",{className:"panel-body",children:[E.jsx("canvas",{ref:t,style:{width:"100%",height:44,display:"block",marginBottom:8}}),E.jsxs("div",{className:"dbg-grid",children:[E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"FPS"}),E.jsx("b",{className:"gold",children:e.fps.toFixed(1)})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"FRAME"}),E.jsxs("b",{children:[e.frameMs.toFixed(2)," ms"]})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"DRAW CALLS"}),E.jsx("b",{children:e.drawCalls})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"TRIANGLES"}),E.jsx("b",{children:e.triangles.toLocaleString()})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"POINTS"}),E.jsx("b",{children:e.points.toLocaleString()})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"RES SCALE"}),E.jsxs("b",{children:[e.resScale.toFixed(2),"×"]})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"EVENTS/S"}),E.jsx("b",{children:bt.eventsPerSec})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"GPU HEADROOM"}),E.jsx("b",{className:"gold",children:px.headroom()})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"BUS TOTAL"}),E.jsx("b",{children:bt.totalEmitted})]}),E.jsxs("div",{className:"dbg-row",children:[E.jsx("span",{children:"AUDIO"}),E.jsx("b",{children:mn.supported?"WEB·AUDIO":"MOCK"})]})]}),E.jsxs("div",{className:"dbg-shaderlog",children:[E.jsxs("div",{children:[E.jsx("span",{className:"ok",children:"✓"})," plasma conduit shader — linked 3.1ms"]}),E.jsxs("div",{children:[E.jsx("span",{className:"ok",children:"✓"})," humanoid lattice shader — linked 4.7ms"]}),E.jsxs("div",{children:[E.jsx("span",{className:"ok",children:"✓"})," ripple platform shader — linked 1.9ms"]}),E.jsxs("div",{children:[E.jsx("span",{className:"ok",children:"✓"})," adaptive resolution governor — ARMED"]})]})]})]})}const Ev={STRATEGIST:"#d4af37",RESEARCHER:"#00f0ff",CODER:"#00ff66",ANALYST:"#7ad7ff",SECURITY:"#ff3333",CREATIVE:"#ff7ad9",AUTOMATION:"#ffb700",EXECUTIVE:"#e0e6ed"},dA=["#d4af37","#ffb700","#00f0ff","#00ff66","#7ad7ff","#ff3333","#ff7ad9","#e0e6ed","#9d7bff","#7dffa8"],Zh=["STRATEGIST","RESEARCHER","CODER","ANALYST","SECURITY","CREATIVE","AUTOMATION","EXECUTIVE"];function hA(){const a=Me(v=>v.labOpen),e=Me(v=>v.setLabOpen),t=Me(v=>v.agentDefs),i=Me(v=>v.setAgentDefs),s=Me(v=>v.pushLog),[o,c]=tt.useState([]),[u,h]=tt.useState(null),[f,p]=tt.useState("");if(tt.useEffect(()=>{var v;a&&(c(t.map(y=>({...y,personality:{...y.personality}}))),h(((v=t[0])==null?void 0:v.id)??null),p(""))},[a,t]),!a)return null;const x=o.find(v=>v.id===u)??null,g=v=>{x&&c(y=>y.map(P=>P.id===x.id?{...P,...v}:P))},_=(v,y)=>{x&&c(P=>P.map(L=>L.id===x.id?{...L,personality:{...L.personality,[v]:y}}:L))},M=()=>{const v=Zh[o.length%Zh.length],y={id:Pi("ag"),name:sg[o.length%sg.length],codename:rg[o.length%rg.length],role:v,department:"RESERVE",color:Ev[v],speed:1,personality:{focus:.6,drive:.7,sociability:.5},workstation:o.length%8};c(P=>[...P,y]),h(y.id)},b=()=>{if(o.length<3){s("err","LAB","roster rejected — minimum 3 autonomous units required");return}i(o),s("ok","LAB",`roster committed — ${o.length} units hot-swapped onto the floor`),e(!1)};return E.jsx("div",{className:"modal-backdrop",onClick:()=>e(!1),children:E.jsxs("div",{className:"lab-modal panel",onClick:v=>v.stopPropagation(),children:[E.jsxs("div",{className:"lab-head",children:["AGENT CONFIG LAB ",E.jsx("span",{className:"sub",children:"// SWARM PERSONA ENGINE — PERSISTED TO LOCAL VAULT"})]}),E.jsxs("div",{className:"lab-list",children:[o.map(v=>E.jsxs("button",{className:`lab-item ${v.id===u?"sel":""}`,onClick:()=>h(v.id),children:[E.jsx("span",{className:"sw",style:{background:v.color,color:v.color}}),E.jsxs("span",{children:[v.codename,E.jsx("br",{}),E.jsxs("span",{style:{fontSize:7.5,color:"var(--faint)",fontWeight:400},children:[v.role," · WS-",v.workstation]})]})]},v.id)),E.jsx("button",{className:"btn sm gold wide mt8",onClick:M,children:"+ NEW UNIT"})]}),E.jsx("div",{className:"lab-form",children:x?E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"field",children:[E.jsx("span",{className:"field-label",children:"Name"}),E.jsx("input",{className:"input",value:x.name,onChange:v=>g({name:v.target.value.toUpperCase()})})]}),E.jsxs("div",{className:"field",children:[E.jsx("span",{className:"field-label",children:"Codename"}),E.jsx("input",{className:"input",value:x.codename,onChange:v=>g({codename:v.target.value.toUpperCase()})})]}),E.jsxs("div",{className:"field",children:[E.jsx("span",{className:"field-label",children:"Role"}),E.jsx("select",{className:"input select",value:x.role,onChange:v=>g({role:v.target.value,color:Ev[v.target.value]??x.color}),children:Zh.map(v=>E.jsx("option",{value:v,children:v},v))})]}),E.jsxs("div",{className:"field",children:[E.jsx("span",{className:"field-label",children:"Department"}),E.jsx("input",{className:"input",value:x.department,onChange:v=>g({department:v.target.value.toUpperCase()})})]}),E.jsxs("div",{className:"field",children:[E.jsx("span",{className:"field-label",children:"Signature Color"}),E.jsx("div",{className:"swatches",children:dA.map(v=>E.jsx("div",{className:`swatch ${x.color===v?"sel":""}`,style:{background:v,color:v},onClick:()=>g({color:v})},v))})]}),E.jsxs("div",{className:"field",children:[E.jsxs("span",{className:"field-label",children:["Workstation (",x.workstation,")"]}),E.jsx("input",{className:"range",type:"range",min:0,max:7,step:1,value:x.workstation,onChange:v=>g({workstation:parseInt(v.target.value,10)})})]}),E.jsxs("div",{className:"field",children:[E.jsxs("span",{className:"field-label",children:["Move Speed ×",x.speed.toFixed(2)]}),E.jsx("input",{className:"range",type:"range",min:.6,max:2,step:.05,value:x.speed,onChange:v=>g({speed:parseFloat(v.target.value)})})]}),E.jsxs("div",{className:"field",children:[E.jsxs("span",{className:"field-label",children:["Focus ",(x.personality.focus*100).toFixed(0),"%"]}),E.jsx("input",{className:"range",type:"range",min:0,max:1,step:.05,value:x.personality.focus,onChange:v=>_("focus",parseFloat(v.target.value))})]}),E.jsxs("div",{className:"field",children:[E.jsxs("span",{className:"field-label",children:["Drive ",(x.personality.drive*100).toFixed(0),"%"]}),E.jsx("input",{className:"range",type:"range",min:0,max:1,step:.05,value:x.personality.drive,onChange:v=>_("drive",parseFloat(v.target.value))})]}),E.jsxs("div",{className:"field",children:[E.jsxs("span",{className:"field-label",children:["Sociability ",(x.personality.sociability*100).toFixed(0),"%"]}),E.jsx("input",{className:"range",type:"range",min:0,max:1,step:.05,value:x.personality.sociability,onChange:v=>_("sociability",parseFloat(v.target.value))})]}),E.jsxs("div",{className:"field full",children:[E.jsx("span",{className:"field-label",children:"Import / Export JSON"}),E.jsx("textarea",{className:"textarea",placeholder:"paste roster JSON here, then IMPORT…",value:f,onChange:v=>p(v.target.value)})]})]}):E.jsx("div",{className:"field full text-dim",children:"select a unit to configure"})}),E.jsxs("div",{className:"lab-foot",children:[E.jsx("button",{className:"btn sm",onClick:()=>{if(!x)return;const v={...x,id:Pi("ag"),codename:`${x.codename}-β`,personality:{...x.personality}};c(y=>[...y,v]),h(v.id)},children:"DUPLICATE"}),E.jsx("button",{className:"btn sm danger",onClick:()=>{var v;!x||o.length<=3||(c(y=>y.filter(P=>P.id!==x.id)),h(((v=o[0])==null?void 0:v.id)??null))},children:"DELETE"}),E.jsx("button",{className:"btn sm",onClick:()=>{c(bv.map(v=>({...v,personality:{...v.personality}}))),s("sys","LAB","roster reset to factory defaults")},children:"RESET"}),E.jsx("button",{className:"btn sm",onClick:()=>p(JSON.stringify(o,null,2)),children:"EXPORT"}),E.jsx("button",{className:"btn sm",onClick:()=>{var v;try{const y=JSON.parse(f);if(!Array.isArray(y))throw new Error("not an array");const P=y;for(const L of P)if(!L.id||!L.name||!L.role)throw new Error("malformed agent");c(P),h(((v=P[0])==null?void 0:v.id)??null),s("ok","LAB",`roster imported — ${P.length} units`)}catch(y){s("err","LAB",`import failed — ${y.message}`)}},children:"IMPORT"}),E.jsx("span",{className:"spacer"}),E.jsxs("span",{className:"lab-live",children:["TASK POOLS: ",jc[(x==null?void 0:x.role)??"CODER"].length," / ROLE"]}),E.jsx("button",{className:"btn gold",onClick:b,children:"COMMIT ROSTER"}),E.jsx("button",{className:"btn",onClick:()=>e(!1),children:"CLOSE"})]})]})})}function fA(){const a=Me(h=>h.booted),e=Me(h=>h.setBooted),t=Me(h=>h.pushLog),[i,s]=tt.useState(0),[o,c]=tt.useState(!1);tt.useEffect(()=>{if(a)return;const h=setInterval(()=>{s(f=>f>=fa.length?(clearInterval(h),f):f+1)},120);return()=>clearInterval(h)},[a]),tt.useEffect(()=>{if(i>=fa.length&&!a){const h=setTimeout(()=>{e(!0),t("sys","BOOT","VORTEX_HUD Ω online — all systems nominal"),t("info","DIRECTOR","press ▶ on the timeline for the 30 s cinematic sequence")},500),f=setTimeout(()=>c(!0),1250);return()=>{clearTimeout(h),clearTimeout(f)}}},[i,a,e,t]);const u=()=>{a||s(fa.length)};return a&&o?null:E.jsxs("div",{className:`boot-overlay ${a?"done":""}`,onClick:u,children:[E.jsxs("div",{className:"boot-brand",children:["VORTEX_HUD",E.jsx("span",{children:"Ω"})]}),E.jsx("div",{className:"boot-lines",children:fa.slice(0,i).map((h,f)=>E.jsx("div",{className:h.cls,children:h.text},f))}),E.jsx("div",{className:"boot-bar",children:E.jsx("div",{className:"boot-fill",style:{transform:`scaleX(${i/fa.length})`}})}),E.jsx("div",{className:"boot-hint",children:i>=fa.length?"INITIALIZING…":"CLICK TO FAST-BOOT"})]})}const Qh=["core","agents","intel","missions","network","memory"];function pA(){const[a,e]=tt.useState(null);tt.useEffect(()=>bt.on("GESTURE_DETECTED",({gesture:s})=>{e({gesture:s,at:performance.now()})}),[]);const t=mu();return E.jsxs("div",{className:"gesture-chip",children:[E.jsx("span",{className:"g-dot"}),E.jsxs("span",{children:["VISION ",E.jsx("b",{children:t.vision.mode})]}),E.jsxs("span",{children:["HAND ",E.jsx("b",{children:t.hand.mode})]}),E.jsxs("span",{children:["GESTURE"," ",E.jsx("b",{style:{color:a&&performance.now()-a.at<1500?"var(--cyan)":"var(--faint)"},children:a?a.gesture:"——"})]})]})}function mA(){const a=Me(t=>t.setDebugOpen),e=Me(t=>t.debugOpen);return tt.useEffect(()=>{const t=()=>{mn.ensure(),mn.resume(),window.removeEventListener("pointerdown",t)};return window.addEventListener("pointerdown",t),()=>window.removeEventListener("pointerdown",t)},[]),tt.useEffect(()=>{const t=My(),i=bt.on("GESTURE_DETECTED",({gesture:s})=>{if(s!=="SWIPE")return;const o=Me.getState(),c=Qh.indexOf(o.tab),u=Qh[(c+1)%Qh.length];o.setTab(u),o.pushLog("info","GESTURE",`SWIPE recognized — sector cycled to ${u.toUpperCase()}`)});return()=>{i(),t.stop()}},[]),tt.useEffect(()=>{const t=i=>{if(i.key==="`"||i.key==="~"){const s=i.target;if(s&&(s.tagName==="INPUT"||s.tagName==="TEXTAREA"))return;a(!Me.getState().debugOpen)}};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[a]),E.jsxs("div",{className:"shell","data-debug":e?"1":"0",children:[E.jsx(Ey,{}),E.jsx($b,{}),E.jsx(aA,{}),E.jsx(oA,{}),E.jsx(lA,{}),E.jsx(cA,{}),E.jsx(pA,{}),E.jsx(uA,{}),E.jsx(hA,{}),E.jsx(fA,{})]})}ny.createRoot(document.getElementById("root")).render(E.jsx(mA,{}));
