(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8311:function(e,t,r){Promise.resolve().then(r.bind(r,9596)),Promise.resolve().then(r.t.bind(r,6417,23)),Promise.resolve().then(r.t.bind(r,1504,23)),Promise.resolve().then(r.bind(r,2241)),Promise.resolve().then(r.t.bind(r,3857,23))},9596:function(e,t,r){"use strict";r.r(t),r.d(t,{Providers:function(){return a}});var n=r(1621),o=r(4822);function a(e){let{children:t}=e;return(0,n.jsx)(o.f,{attribute:"class",children:t})}},2241:function(e,t,r){"use strict";r.r(t),r.d(t,{Toaster:function(){return eo}});var n=r(1621),o=r(4132),a=r(5435),s=r(7941),i=r(1741),l=r(8024),u=r(5407),c=r(2992),d=r(5761),p=r(5879),f=r(3159),m=r(5280),v=r(1498),w=r(2980),E=r(2097);let y=(0,o.forwardRef)((e,t)=>(0,o.createElement)(m.WV.span,(0,a.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),T="ToastProvider",[g,x,h]=(0,u.B)("Toast"),[b,_]=(0,c.b)("Toast",[h]),[R,P]=b(T),S=e=>{let{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:a="right",swipeThreshold:s=50,children:i}=e,[l,u]=(0,o.useState)(null),[c,d]=(0,o.useState)(0),p=(0,o.useRef)(!1),f=(0,o.useRef)(!1);return(0,o.createElement)(g.Provider,{scope:t},(0,o.createElement)(R,{scope:t,label:r,duration:n,swipeDirection:a,swipeThreshold:s,toastCount:c,viewport:l,onViewportChange:u,onToastAdd:(0,o.useCallback)(()=>d(e=>e+1),[]),onToastRemove:(0,o.useCallback)(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:f},i))};S.propTypes={label(e){if(e.label&&"string"==typeof e.label&&!e.label.trim()){let e=`Invalid prop \`label\` supplied to \`${T}\`. Expected non-empty \`string\`.`;return Error(e)}return null}};let C=["F8"],N="toast.viewportPause",D="toast.viewportResume",M=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,hotkey:n=C,label:s="Notifications ({hotkey})",...i}=e,u=P("ToastViewport",r),c=x(r),p=(0,o.useRef)(null),f=(0,o.useRef)(null),v=(0,o.useRef)(null),w=(0,o.useRef)(null),E=(0,l.e)(t,w,u.onViewportChange),y=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),T=u.toastCount>0;(0,o.useEffect)(()=>{let e=e=>{var t;let r=n.every(t=>e[t]||e.code===t);r&&(null===(t=w.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[n]),(0,o.useEffect)(()=>{let e=p.current,t=w.current;if(T&&e&&t){let r=()=>{if(!u.isClosePausedRef.current){let e=new CustomEvent(N);t.dispatchEvent(e),u.isClosePausedRef.current=!0}},n=()=>{if(u.isClosePausedRef.current){let e=new CustomEvent(D);t.dispatchEvent(e),u.isClosePausedRef.current=!1}},o=t=>{let r=!e.contains(t.relatedTarget);r&&n()},a=()=>{let t=e.contains(document.activeElement);t||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",o),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",a),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",a),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[T,u.isClosePausedRef]);let h=(0,o.useCallback)(({tabbingDirection:e})=>{let t=c(),r=t.map(t=>{let r=t.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===e?n:n.reverse()});return("forwards"===e?r.reverse():r).flat()},[c]);return(0,o.useEffect)(()=>{let e=w.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey,n="Tab"===t.key&&!r;if(n){var o,a,s;let r=document.activeElement,n=t.shiftKey,i=t.target===e;if(i&&n){null===(o=f.current)||void 0===o||o.focus();return}let l=h({tabbingDirection:n?"backwards":"forwards"}),u=l.findIndex(e=>e===r);H(l.slice(u+1))?t.preventDefault():n?null===(a=f.current)||void 0===a||a.focus():null===(s=v.current)||void 0===s||s.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[c,h]),(0,o.createElement)(d.I0,{ref:p,role:"region","aria-label":s.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:T?void 0:"none"}},T&&(0,o.createElement)(A,{ref:f,onFocusFromOutsideViewport:()=>{let e=h({tabbingDirection:"forwards"});H(e)}}),(0,o.createElement)(g.Slot,{scope:r},(0,o.createElement)(m.WV.ol,(0,a.Z)({tabIndex:-1},i,{ref:E}))),T&&(0,o.createElement)(A,{ref:v,onFocusFromOutsideViewport:()=>{let e=h({tabbingDirection:"backwards"});H(e)}}))}),A=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:n,...s}=e,i=P("ToastFocusProxy",r);return(0,o.createElement)(y,(0,a.Z)({"aria-hidden":!0,tabIndex:0},s,{ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget,o=!(null!==(t=i.viewport)&&void 0!==t&&t.contains(r));o&&n()}}))}),I="Toast",k=(0,o.forwardRef)((e,t)=>{let{forceMount:r,open:n,defaultOpen:s,onOpenChange:l,...u}=e,[c=!0,d]=(0,w.T)({prop:n,defaultProp:s,onChange:l});return(0,o.createElement)(f.z,{present:r||c},(0,o.createElement)(O,(0,a.Z)({open:c},u,{ref:t,onClose:()=>d(!1),onPause:(0,v.W)(e.onPause),onResume:(0,v.W)(e.onResume),onSwipeStart:(0,i.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,i.M)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${r}px`)}),onSwipeCancel:(0,i.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,i.M)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${r}px`),d(!1)})})))}),[F,L]=b(I,{onClose(){}}),O=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,type:n="foreground",duration:u,open:c,onClose:p,onEscapeKeyDown:f,onPause:w,onResume:E,onSwipeStart:y,onSwipeMove:T,onSwipeCancel:x,onSwipeEnd:h,...b}=e,_=P(I,r),[R,S]=(0,o.useState)(null),C=(0,l.e)(t,e=>S(e)),M=(0,o.useRef)(null),A=(0,o.useRef)(null),k=u||_.duration,L=(0,o.useRef)(0),O=(0,o.useRef)(k),V=(0,o.useRef)(0),{onToastAdd:K,onToastRemove:W}=_,Z=(0,v.W)(()=>{var e;let t=null==R?void 0:R.contains(document.activeElement);t&&(null===(e=_.viewport)||void 0===e||e.focus()),p()}),U=(0,o.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(V.current),L.current=new Date().getTime(),V.current=window.setTimeout(Z,e))},[Z]);(0,o.useEffect)(()=>{let e=_.viewport;if(e){let t=()=>{U(O.current),null==E||E()},r=()=>{let e=new Date().getTime()-L.current;O.current=O.current-e,window.clearTimeout(V.current),null==w||w()};return e.addEventListener(N,r),e.addEventListener(D,t),()=>{e.removeEventListener(N,r),e.removeEventListener(D,t)}}},[_.viewport,k,w,E,U]),(0,o.useEffect)(()=>{c&&!_.isClosePausedRef.current&&U(k)},[c,k,_.isClosePausedRef,U]),(0,o.useEffect)(()=>(K(),()=>W()),[K,W]);let H=(0,o.useMemo)(()=>R?function e(t){let r=[],n=Array.from(t.childNodes);return n.forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!n){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(R):null,[R]);return _.viewport?(0,o.createElement)(o.Fragment,null,H&&(0,o.createElement)(j,{__scopeToast:r,role:"status","aria-live":"foreground"===n?"assertive":"polite","aria-atomic":!0},H),(0,o.createElement)(F,{scope:r,onClose:Z},(0,s.createPortal)((0,o.createElement)(g.ItemSlot,{scope:r},(0,o.createElement)(d.fC,{asChild:!0,onEscapeKeyDown:(0,i.M)(f,()=>{_.isFocusedToastEscapeKeyDownRef.current||Z(),_.isFocusedToastEscapeKeyDownRef.current=!1})},(0,o.createElement)(m.WV.li,(0,a.Z)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":c?"open":"closed","data-swipe-direction":_.swipeDirection},b,{ref:C,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,i.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==f||f(e.nativeEvent),e.nativeEvent.defaultPrevented||(_.isFocusedToastEscapeKeyDownRef.current=!0,Z()))}),onPointerDown:(0,i.M)(e.onPointerDown,e=>{0===e.button&&(M.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,i.M)(e.onPointerMove,e=>{if(!M.current)return;let t=e.clientX-M.current.x,r=e.clientY-M.current.y,n=!!A.current,o=["left","right"].includes(_.swipeDirection),a=["left","up"].includes(_.swipeDirection)?Math.min:Math.max,s=o?a(0,t):0,i=o?0:a(0,r),l="touch"===e.pointerType?10:2,u={x:s,y:i},c={originalEvent:e,delta:u};n?(A.current=u,$("toast.swipeMove",T,c,{discrete:!1})):X(u,_.swipeDirection,l)?(A.current=u,$("toast.swipeStart",y,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(r)>l)&&(M.current=null)}),onPointerUp:(0,i.M)(e.onPointerUp,e=>{let t=A.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),A.current=null,M.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};X(t,_.swipeDirection,_.swipeThreshold)?$("toast.swipeEnd",h,n,{discrete:!0}):$("toast.swipeCancel",x,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),_.viewport))):null});O.propTypes={type(e){if(e.type&&!["foreground","background"].includes(e.type)){let e=`Invalid prop \`type\` supplied to \`${I}\`. Expected \`foreground | background\`.`;return Error(e)}return null}};let j=e=>{let{__scopeToast:t,children:r,...n}=e,a=P(I,t),[s,i]=(0,o.useState)(!1),[l,u]=(0,o.useState)(!1);return function(e=()=>{}){let t=(0,v.W)(e);(0,E.b)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>i(!0)),(0,o.useEffect)(()=>{let e=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:(0,o.createElement)(p.h,{asChild:!0},(0,o.createElement)(y,n,s&&(0,o.createElement)(o.Fragment,null,a.label," ",r)))},V=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,...n}=e;return(0,o.createElement)(m.WV.div,(0,a.Z)({},n,{ref:t}))}),K=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,...n}=e;return(0,o.createElement)(m.WV.div,(0,a.Z)({},n,{ref:t}))}),W=(0,o.forwardRef)((e,t)=>{let{altText:r,...n}=e;return r?(0,o.createElement)(U,{altText:r,asChild:!0},(0,o.createElement)(Z,(0,a.Z)({},n,{ref:t}))):null});W.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `ToastAction`")};let Z=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,...n}=e,s=L("ToastClose",r);return(0,o.createElement)(U,{asChild:!0},(0,o.createElement)(m.WV.button,(0,a.Z)({type:"button"},n,{ref:t,onClick:(0,i.M)(e.onClick,s.onClose)})))}),U=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,altText:n,...s}=e;return(0,o.createElement)(m.WV.div,(0,a.Z)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0},s,{ref:t}))});function $(e,t,r,{discrete:n}){let o=r.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&o.addEventListener(e,t,{once:!0}),n?(0,m.jH)(o,a):o.dispatchEvent(a)}let X=(e,t,r=0)=>{let n=Math.abs(e.x),o=Math.abs(e.y),a=n>o;return"left"===t||"right"===t?a&&n>r:!a&&o>r};function H(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var q=r(5538),z=r(6369),Y=r(1811);let B=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(M,{ref:t,className:(0,Y.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",r),...o})});B.displayName=M.displayName;let G=(0,q.j)("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full",{variants:{variant:{default:"bg-background border",destructive:"group destructive border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),J=o.forwardRef((e,t)=>{let{className:r,variant:o,...a}=e;return(0,n.jsx)(k,{ref:t,className:(0,Y.cn)(G({variant:o}),r),...a})});J.displayName=k.displayName;let Q=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(W,{ref:t,className:(0,Y.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",r),...o})});Q.displayName=W.displayName;let ee=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(Z,{ref:t,className:(0,Y.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",r),"toast-close":"",...o,children:(0,n.jsx)(z.Z,{className:"h-4 w-4"})})});ee.displayName=Z.displayName;let et=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(V,{ref:t,className:(0,Y.cn)("text-sm font-semibold",r),...o})});et.displayName=V.displayName;let er=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(K,{ref:t,className:(0,Y.cn)("text-sm opacity-90",r),...o})});er.displayName=K.displayName;var en=r(4539);function eo(){let{toasts:e}=(0,en.pm)();return(0,n.jsxs)(S,{children:[e.map(function(e){let{id:t,title:r,description:o,action:a,...s}=e;return(0,n.jsxs)(J,{...s,children:[(0,n.jsxs)("div",{className:"grid gap-1",children:[r&&(0,n.jsx)(et,{children:r}),o&&(0,n.jsx)(er,{children:o})]}),a,(0,n.jsx)(ee,{})]},t)}),(0,n.jsx)(B,{})]})}},4539:function(e,t,r){"use strict";r.d(t,{pm:function(){return p}});var n=r(4132);let o=0,a=new Map,s=e=>{if(a.has(e))return;let t=setTimeout(()=>{a.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?s(r):e.toasts.forEach(e=>{s(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],u={toasts:[]};function c(e){u=i(u,e),l.forEach(e=>{e(u)})}function d(e){let{...t}=e,r=(o=(o+1)%Number.MAX_VALUE).toString(),n=e=>c({type:"UPDATE_TOAST",toast:{...e,id:r}}),a=()=>c({type:"DISMISS_TOAST",toastId:r});return c({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||a()}}}),{id:r,dismiss:a,update:n}}function p(){let[e,t]=n.useState(u);return n.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:d,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},1811:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(1993),o=r(928);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m)((0,n.W)(t))}},6417:function(){},1504:function(){},3857:function(e){e.exports={style:{fontFamily:"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'",fontStyle:"normal"},className:"__className_0ec1f4"}}},function(e){e.O(0,[190,972,638,744],function(){return e(e.s=8311)}),_N_E=e.O()}]);