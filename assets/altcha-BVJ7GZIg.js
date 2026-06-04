var tu=Object.defineProperty;var Bo=V=>{throw TypeError(V)};var nu=(V,Z,ce)=>Z in V?tu(V,Z,{enumerable:!0,configurable:!0,writable:!0,value:ce}):V[Z]=ce;var R=(V,Z,ce)=>nu(V,typeof Z!="symbol"?Z+"":Z,ce),Ya=(V,Z,ce)=>Z.has(V)||Bo("Cannot "+ce);var h=(V,Z,ce)=>(Ya(V,Z,"read from private field"),ce?ce.call(V):Z.get(V)),L=(V,Z,ce)=>Z.has(V)?Bo("Cannot add the same private member more than once"):Z instanceof WeakSet?Z.add(V):Z.set(V,ce),I=(V,Z,ce,Ae)=>(Ya(V,Z,"write to private field"),Ae?Ae.call(V,ce):Z.set(V,ce),ce),z=(V,Z,ce)=>(Ya(V,Z,"access private method"),ce);function ru(V,Z){for(var ce=0;ce<Z.length;ce++){const Ae=Z[ce];if(typeof Ae!="string"&&!Array.isArray(Ae)){for(const Zt in Ae)if(Zt!=="default"&&!(Zt in V)){const Ut=Object.getOwnPropertyDescriptor(Ae,Zt);Ut&&Object.defineProperty(V,Zt,Ut.get?Ut:{enumerable:!0,get:()=>Ae[Zt]})}}}return Object.freeze(Object.defineProperty(V,Symbol.toStringTag,{value:"Module"}))}function au(V){return V&&V.__esModule&&Object.prototype.hasOwnProperty.call(V,"default")?V.default:V}var Ho={},Ko;function ou(){var So,$n,Gt,cn,Tn,An,un,Rn,Pt,tr,Be,nr,Wt,wt,_t,In,On,W,Ga,hr,Wa,Yo,Go,Br,iu,qa,Mn,He,rr,Xe,fn,De,Qe,Oe,Ke,Lt,hn,qt,Pn,ar,ir,Mt,Nr,re,Wo,qo,Zo,Za,Hr,Kr,Ja,Xa,Co,$o,ct,Dt,ut,dn,or,Ur,La,Nt,et;if(Ko)return Ho;Ko=1;const V=!1;var Z=Array.isArray,ce=Array.prototype.indexOf,Ae=Array.prototype.includes,Zt=Array.from,Ut=Object.keys,Dn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,Xo=Object.getOwnPropertyDescriptors,Qo=Object.prototype,el=Array.prototype,Qa=Object.getPrototypeOf,ei=Object.isExtensible;const Ft=()=>{};function tl(e){for(var t=0;t<e.length;t++)e[t]()}function ti(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}const _e=2,mn=4,dr=8,Yr=1<<24,at=16,ht=32,$t=64,Gr=128,Ge=512,ge=1024,ye=2048,dt=4096,We=8192,it=16384,Vt=32768,Wr=1<<25,jt=65536,vr=1<<17,nl=1<<18,Jt=1<<19,rl=1<<20,Xt=65536,pr=1<<21,yn=1<<22,zt=1<<23,wn=Symbol("$state"),al=Symbol("legacy props"),il=Symbol(""),gr=Symbol("attributes"),qr=Symbol("class"),Zr=Symbol("style"),Nn=Symbol("text"),Un=Symbol("form reset"),br=new class extends Error{constructor(){super(...arguments);R(this,"name","StaleReactionError");R(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Fn=!!((So=globalThis.document)!=null&&So.contentType)&&globalThis.document.contentType.includes("xml"),Vn=3,jn=8;function ni(e){return e===this.v}function ri(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ol(e){return!ri(e,this.v)}function ll(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function sl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function cl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ul(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function hl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function dl(){throw new Error("https://svelte.dev/e/hydration_failed")}function vl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function pl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function gl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function bl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let ml=!1;const yl=1,wl=2,Jr="[",ai="[!",ii="[?",oi="]",Qt={},ve=Symbol("uninitialized"),li="http://www.w3.org/1999/xhtml",_l="http://www.w3.org/2000/svg",kl="http://www.w3.org/1998/Math/MathML",xl="@attach";let Le=null;function _n(e){Le=e}function Tt(e,t=!1,n){Le={p:Le,i:!1,c:null,e:null,s:e,x:null,r:M,l:null}}function At(e){var t=Le,n=t.e;if(n!==null){t.e=null;for(var r of n)Bi(r)}return e!==void 0&&(t.x=e),t.i=!0,Le=t.p,e??{}}function si(){return!0}let en=[];function ci(){var e=en;en=[],tl(e)}function Rt(e){if(en.length===0&&!Kn){var t=en;queueMicrotask(()=>{t===en&&ci()})}en.push(e)}function El(){for(;en.length>0;)ci()}function Sl(){console.warn("https://svelte.dev/e/derived_inert")}function zn(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Cl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function $l(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let N=!1;function vt(e){N=e}let U;function Re(e){if(e===null)throw zn(),Qt;return U=e}function tn(){return Re(gt(U))}function ne(e){if(N){if(gt(U)!==null)throw zn(),Qt;U=e}}function Xr(e=1){if(N){for(var t=e,n=U;t--;)n=gt(n);U=n}}function Qr(e=!0){for(var t=0,n=U;;){if(n.nodeType===jn){var r=n.data;if(r===oi){if(t===0)return n;t-=1}else(r===Jr||r===ai||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1)}var a=gt(n);e&&n.remove(),n=a}}function ui(e){if(!e||e.nodeType!==jn)throw zn(),Qt;return e.data}function It(e){if(typeof e!="object"||e===null||wn in e)return e;const t=Qa(e);if(t!==Qo&&t!==el)return e;var n=new Map,r=Z(e),a=j(0),o=on,l=s=>{if(on===o)return s();var f=B,u=on;qe(null),Ni(o);var v=s();return qe(f),Ni(u),v};return r&&n.set("length",j(e.length)),new Proxy(e,{defineProperty(s,f,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&vl();var v=n.get(f);return v===void 0?l(()=>{var p=j(u.value);return n.set(f,p),p}):E(v,u.value,!0),!0},deleteProperty(s,f){var u=n.get(f);if(u===void 0){if(f in s){const v=l(()=>j(ve));n.set(f,v),Gn(a)}}else E(u,ve),Gn(a);return!0},get(s,f,u){var b;if(f===wn)return e;var v=n.get(f),p=f in s;if(v===void 0&&(!p||(b=bn(s,f))!=null&&b.writable)&&(v=l(()=>{var m=It(p?s[f]:ve),x=j(m);return x}),n.set(f,v)),v!==void 0){var d=i(v);return d===ve?void 0:d}return Reflect.get(s,f,u)},getOwnPropertyDescriptor(s,f){var u=Reflect.getOwnPropertyDescriptor(s,f);if(u&&"value"in u){var v=n.get(f);v&&(u.value=i(v))}else if(u===void 0){var p=n.get(f),d=p==null?void 0:p.v;if(p!==void 0&&d!==ve)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return u},has(s,f){var d;if(f===wn)return!0;var u=n.get(f),v=u!==void 0&&u.v!==ve||Reflect.has(s,f);if(u!==void 0||M!==null&&(!v||(d=bn(s,f))!=null&&d.writable)){u===void 0&&(u=l(()=>{var b=v?It(s[f]):ve,m=j(b);return m}),n.set(f,u));var p=i(u);if(p===ve)return!1}return v},set(s,f,u,v){var fe;var p=n.get(f),d=f in s;if(r&&f==="length")for(var b=u;b<p.v;b+=1){var m=n.get(b+"");m!==void 0?E(m,ve):b in s&&(m=l(()=>j(ve)),n.set(b+"",m))}if(p===void 0)(!d||(fe=bn(s,f))!=null&&fe.writable)&&(p=l(()=>j(void 0)),E(p,It(u)),n.set(f,p));else{d=p.v!==ve;var x=l(()=>It(u));E(p,x)}var P=Reflect.getOwnPropertyDescriptor(s,f);if(P!=null&&P.set&&P.set.call(v,u),!d){if(r&&typeof f=="string"){var T=n.get("length"),X=Number(f);Number.isInteger(X)&&X>=T.v&&E(T,X+1)}Gn(a)}return!0},ownKeys(s){i(a);var f=Reflect.ownKeys(s).filter(p=>{var d=n.get(p);return d===void 0||d.v!==ve});for(var[u,v]of n)v.v!==ve&&!(u in s)&&f.push(u);return f},setPrototypeOf(){pl()}})}function fi(e){try{if(e!==null&&typeof e=="object"&&wn in e)return e[wn]}catch{}return e}function Tl(e,t){return Object.is(fi(e),fi(t))}var nn,ea,hi,di,vi;function ta(){if(nn===void 0){nn=window,ea=document,hi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;di=bn(t,"firstChild").get,vi=bn(t,"nextSibling").get,ei(e)&&(e[qr]=void 0,e[gr]=null,e[Zr]=void 0,e.__e=void 0),ei(n)&&(n[Nn]=void 0)}}function pt(e=""){return document.createTextNode(e)}function Fe(e){return di.call(e)}function gt(e){return vi.call(e)}function ue(e,t){if(!N)return Fe(e);var n=Fe(U);if(n===null)n=U.appendChild(pt());else if(t&&n.nodeType!==Vn){var r=pt();return n==null||n.before(r),Re(r),r}return t&&mr(n),Re(n),n}function kn(e,t=!1){if(!N){var n=Fe(e);return n instanceof Comment&&n.data===""?gt(n):n}if(t){if((U==null?void 0:U.nodeType)!==Vn){var r=pt();return U==null||U.before(r),Re(r),r}mr(U)}return U}function oe(e,t=1,n=!1){let r=N?U:e;for(var a;t--;)a=r,r=gt(r);if(!N)return r;if(n){if((r==null?void 0:r.nodeType)!==Vn){var o=pt();return r===null?a==null||a.after(o):r.before(o),Re(o),o}mr(r)}return Re(r),r}function Al(e){e.textContent=""}function na(e,t,n){return document.createElementNS(t??li,e,void 0)}function mr(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===Vn;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function pi(e){var t=M;if(t===null)return B.f|=zt,e;if((t.f&Vt)===0&&(t.f&mn)===0)throw e;Bt(e,t)}function Bt(e,t){for(;t!==null;){if((t.f&Gr)!==0){if((t.f&Vt)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}const Rl=-7169;function de(e,t){e.f=e.f&Rl|t}function ra(e){(e.f&Ge)!==0||e.deps===null?de(e,ge):de(e,dt)}function gi(e){if(e!==null)for(const t of e)(t.f&_e)===0||(t.f&Xt)===0||(t.f^=Xt,gi(t.deps))}function bi(e,t,n){(e.f&ye)!==0?t.add(e):(e.f&dt)!==0&&n.add(e),gi(e.deps),de(e,ge)}function mi(e,t,n){if(e==null)return t(void 0),Ft;const r=Zn(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const xn=[];function Il(e,t=Ft){let n=null;const r=new Set;function a(s){if(ri(e,s)&&(e=s,n)){const f=!xn.length;for(const u of r)u[1](),xn.push(u,e);if(f){for(let u=0;u<xn.length;u+=2)xn[u][0](xn[u+1]);xn.length=0}}}function o(s){a(s(e))}function l(s,f=Ft){const u=[s,f];return r.add(u),r.size===1&&(n=t(a,o)||Ft),s(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:l}}function Bn(e){let t;return mi(e,n=>t=n)(),t}let aa=Symbol("unmounted");function yi(e,t,n){const r=n[t]??(n[t]={store:null,source:Ri(void 0),unsubscribe:Ft});if(r.store!==e&&!(aa in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=Ft;else{var a=!0;r.unsubscribe=mi(e,o=>{a?r.source.v=o:E(r.source,o)}),a=!1}return e&&aa in n?Bn(e):i(r.source)}function Ol(){const e={};function t(){Cr(()=>{for(var n in e)e[n].unsubscribe();Dn(e,aa,{enumerable:!1,value:!0})})}return[e,t]}let ia=null,En=null,C=null,Hn=null,ke=null,oa=null,Kn=!1,la=!1,Sn=null,yr=null;var wi=0;let Pl=1;const Dr=class Dr{constructor(){L(this,W);R(this,"id",Pl++);L(this,$n,!1);R(this,"linked",!0);L(this,Gt,null);L(this,cn,null);R(this,"async_deriveds",new Map);R(this,"current",new Map);R(this,"previous",new Map);R(this,"unblocked",new Set);L(this,Tn,new Set);L(this,An,new Set);L(this,un,new Set);L(this,Rn,0);L(this,Pt,new Map);L(this,tr,null);L(this,Be,[]);L(this,nr,[]);L(this,Wt,new Set);L(this,wt,new Set);L(this,_t,new Map);L(this,In,new Set);R(this,"is_fork",!1);L(this,On,!1)}skip_effect(t){h(this,_t).has(t)||h(this,_t).set(t,{d:[],m:[]}),h(this,In).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=h(this,_t).get(t);if(r){h(this,_t).delete(t);for(var a of r.d)de(a,ye),n(a);for(a of r.m)de(a,dt),n(a)}h(this,In).add(t)}capture(t,n,r=!1){t.v!==ve&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&zt)===0&&(this.current.set(t,[n,r]),ke==null||ke.set(t,n)),this.is_fork||(t.v=n)}activate(){C=this}deactivate(){C=null,ke=null}flush(){try{la=!0,C=this,z(this,W,hr).call(this)}finally{wi=0,oa=null,Sn=null,yr=null,la=!1,C=null,ke=null,rn.clear()}}discard(){for(const t of h(this,An))t(this);h(this,An).clear(),h(this,un).clear(),z(this,W,Mn).call(this)}register_created_effect(t){h(this,nr).push(t)}increment(t,n){if(I(this,Rn,h(this,Rn)+1),t){let r=h(this,Pt).get(n)??0;h(this,Pt).set(n,r+1)}}decrement(t,n){if(I(this,Rn,h(this,Rn)-1),t){let r=h(this,Pt).get(n)??0;r===1?h(this,Pt).delete(n):h(this,Pt).set(n,r-1)}h(this,On)||(I(this,On,!0),Rt(()=>{I(this,On,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)h(this,Wt).add(r);for(const r of n)h(this,wt).add(r);t.clear(),n.clear()}oncommit(t){h(this,Tn).add(t)}ondiscard(t){h(this,An).add(t)}on_fork_commit(t){h(this,un).add(t)}run_fork_commit_callbacks(){for(const t of h(this,un))t(this);h(this,un).clear()}settled(){return(h(this,tr)??I(this,tr,ti())).promise}static ensure(){var t;if(C===null){const n=C=new Dr;z(t=n,W,qa).call(t),!la&&!Kn&&Rt(()=>{h(n,$n)||n.flush()})}return C}apply(){{ke=null;return}}schedule(t){var a;if(oa=t,(a=t.b)!=null&&a.is_pending&&(t.f&(mn|dr|Yr))!==0&&(t.f&Vt)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Sn!==null&&n===M&&(B===null||(B.f&_e)===0))return;if((r&($t|ht))!==0){if((r&ge)===0)return;n.f^=ge}}h(this,Be).push(n)}};$n=new WeakMap,Gt=new WeakMap,cn=new WeakMap,Tn=new WeakMap,An=new WeakMap,un=new WeakMap,Rn=new WeakMap,Pt=new WeakMap,tr=new WeakMap,Be=new WeakMap,nr=new WeakMap,Wt=new WeakMap,wt=new WeakMap,_t=new WeakMap,In=new WeakMap,On=new WeakMap,W=new WeakSet,Ga=function(){if(this.is_fork)return!0;for(const r of h(this,Pt).keys()){for(var t=r,n=!1;t.parent!==null;){if(h(this,_t).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},hr=function(){var f,u,v,p;if(I(this,$n,!0),wi++>1e3&&(z(this,W,Mn).call(this),Ll()),!z(this,W,Ga).call(this)){for(const d of h(this,Wt))h(this,wt).delete(d),de(d,ye),this.schedule(d);for(const d of h(this,wt))de(d,dt),this.schedule(d)}const t=h(this,Be);I(this,Be,[]),this.apply();var n=Sn=[],r=[],a=yr=[];for(const d of t)try{z(this,W,Wa).call(this,d,n,r)}catch(b){throw Ei(d),b}if(C=null,a.length>0){var o=Dr.ensure();for(const d of a)o.schedule(d)}if(Sn=null,yr=null,z(this,W,Ga).call(this)){z(this,W,Br).call(this,r),z(this,W,Br).call(this,n);for(const[d,b]of h(this,_t))xi(d,b);a.length>0&&z(f=C,W,hr).call(f);return}const l=z(this,W,Yo).call(this);if(l){z(u=l,W,Go).call(u,this);return}h(this,Wt).clear(),h(this,wt).clear();for(const d of h(this,Tn))d(this);h(this,Tn).clear(),Hn=this,_i(r),_i(n),Hn=null,(v=h(this,tr))==null||v.resolve();var s=C;if(this.linked&&h(this,Rn)===0&&z(this,W,Mn).call(this),h(this,Be).length>0){s===null&&(s=this,z(this,W,qa).call(this));const d=s;h(d,Be).push(...h(this,Be).filter(b=>!h(d,Be).includes(b)))}s!==null&&z(p=s,W,hr).call(p)},Wa=function(t,n,r){t.f^=ge;for(var a=t.first;a!==null;){var o=a.f,l=(o&(ht|$t))!==0,s=l&&(o&ge)!==0,f=s||(o&We)!==0||h(this,_t).has(a);if(!f&&a.fn!==null){l?a.f^=ge:(o&mn)!==0?n.push(a):Wn(a)&&((o&at)!==0&&h(this,wt).add(a),Cn(a));var u=a.first;if(u!==null){a=u;continue}}for(;a!==null;){var v=a.next;if(v!==null){a=v;break}a=a.parent}}},Yo=function(){for(var t=h(this,Gt);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=h(t,Gt)}return null},Go=function(t){var r;for(const[a,o]of t.current)!this.previous.has(a)&&t.previous.has(a)&&this.previous.set(a,t.previous.get(a)),this.current.set(a,o);for(const[a,o]of t.async_deriveds){const l=this.async_deriveds.get(a);l&&o.promise.then(l.resolve)}const n=a=>{var o=a.reactions;if(o!==null)for(const f of o){var l=f.f;if((l&_e)!==0)n(f);else{var s=f;l&(yn|at)&&!this.async_deriveds.has(s)&&(h(this,wt).delete(s),de(s,ye),this.schedule(s))}}};for(const a of this.current.keys())n(a);this.oncommit(()=>t.discard()),z(r=t,W,Mn).call(r),C=this,z(this,W,hr).call(this)},Br=function(t){for(var n=0;n<t.length;n+=1)bi(t[n],h(this,Wt),h(this,wt))},iu=function(){var v;z(this,W,Mn).call(this);for(let p=ia;p!==null;p=h(p,cn)){var t=p.id<this.id,n=[];for(const[d,[b,m]]of this.current){if(p.current.has(d)){var r=p.current.get(d)[0];if(t&&b!==r)p.current.set(d,[b,m]);else continue}n.push(d)}if(t)for(const[d,b]of this.async_deriveds){const m=p.async_deriveds.get(d);m&&b.promise.then(m.resolve)}if(h(p,$n)){var a=[...p.current.keys()].filter(d=>!this.current.has(d));if(a.length===0)t&&p.discard();else if(n.length>0){if(t)for(const d of h(this,In))p.unskip_effect(d,b=>{var m;(b.f&(at|yn))!==0?p.schedule(b):z(m=p,W,Br).call(m,[b])});p.activate();var o=new Set,l=new Map;for(var s of n)ki(s,a,o,l);l=new Map;var f=[...p.current.keys()].filter(d=>this.current.has(d)?this.current.get(d)[0]!==d.v:!0);if(f.length>0)for(const d of h(this,nr))(d.f&(it|We|vr))===0&&sa(d,f,l)&&((d.f&(yn|at))!==0?(de(d,ye),p.schedule(d)):h(p,Wt).add(d));if(h(p,Be).length>0){p.apply();for(var u of h(p,Be))z(v=p,W,Wa).call(v,u,[],[]);I(p,Be,[])}p.deactivate()}}}},qa=function(){En===null?ia=En=this:(I(En,cn,this),I(this,Gt,En)),En=this},Mn=function(){var t=h(this,Gt),n=h(this,cn);t===null?ia=n:I(t,cn,n),n===null?En=t:I(n,Gt,t),this.linked=!1};let Ht=Dr;function ee(e){var t=Kn;Kn=!0;try{for(var n;;){if(El(),C===null)return n;C.flush()}}finally{Kn=t}}function Ll(){try{hl()}catch(e){Bt(e,oa)}}let ot=null;function _i(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(it|We))===0&&Wn(r)&&(ot=new Set,Cn(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Gi(r),(ot==null?void 0:ot.size)>0)){rn.clear();for(const a of ot){if((a.f&(it|We))!==0)continue;const o=[a];let l=a.parent;for(;l!==null;)ot.has(l)&&(ot.delete(l),o.push(l)),l=l.parent;for(let s=o.length-1;s>=0;s--){const f=o[s];(f.f&(it|We))===0&&Cn(f)}}ot.clear()}}ot=null}}function ki(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const a of e.reactions){const o=a.f;(o&_e)!==0?ki(a,t,n,r):(o&(yn|at))!==0&&(o&ye)===0&&sa(a,t,r)&&(de(a,ye),ca(a))}}function sa(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const a of e.deps){if(Ae.call(t,a))return!0;if((a.f&_e)!==0&&sa(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function ca(e){C.schedule(e)}function xi(e,t){if(!((e.f&ht)!==0&&(e.f&ge)!==0)){(e.f&ye)!==0?t.d.push(e):(e.f&dt)!==0&&t.m.push(e),de(e,ge);for(var n=e.first;n!==null;)xi(n,t),n=n.next}}function Ei(e){de(e,ge);for(var t=e.first;t!==null;)Ei(t),t=t.next}function Ml(e){let t=0,n=Yn(0),r;return()=>{ha()&&(i(n),$r(()=>(t===0&&(r=Zn(()=>e(()=>Gn(n)))),t+=1,()=>{Rt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,Gn(n))})})))}}var Dl=jt|Jt;function Nl(e,t,n,r){new Ul(e,t,n,r)}class Ul{constructor(t,n,r,a){L(this,re);R(this,"parent");R(this,"is_pending",!1);R(this,"transform_error");L(this,He);L(this,rr,N?U:null);L(this,Xe);L(this,fn);L(this,De);L(this,Qe,null);L(this,Oe,null);L(this,Ke,null);L(this,Lt,null);L(this,hn,0);L(this,qt,0);L(this,Pn,!1);L(this,ar,new Set);L(this,ir,new Set);L(this,Mt,null);L(this,Nr,Ml(()=>(I(this,Mt,Yn(h(this,hn))),()=>{I(this,Mt,null)})));var o;I(this,He,t),I(this,Xe,n),I(this,fn,l=>{var s=M;s.b=this,s.f|=Gr,r(l)}),this.parent=M.b,this.transform_error=a??((o=this.parent)==null?void 0:o.transform_error)??(l=>l),I(this,De,Jn(()=>{if(N){const l=h(this,rr);tn();const s=l.data===ai;if(l.data.startsWith(ii)){const u=JSON.parse(l.data.slice(ii.length));z(this,re,qo).call(this,u)}else s?z(this,re,Zo).call(this):z(this,re,Wo).call(this)}else z(this,re,Za).call(this)},Dl)),N&&I(this,He,U)}defer_effect(t){bi(t,h(this,ar),h(this,ir))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!h(this,Xe).pending}update_pending_count(t,n){z(this,re,Ja).call(this,t,n),I(this,hn,h(this,hn)+t),!(!h(this,Mt)||h(this,Pn))&&(I(this,Pn,!0),Rt(()=>{I(this,Pn,!1),h(this,Mt)&&xr(h(this,Mt),h(this,hn))}))}get_effect_pending(){return h(this,Nr).call(this),i(h(this,Mt))}error(t){if(!h(this,Xe).onerror&&!h(this,Xe).failed)throw t;C!=null&&C.is_fork?(h(this,Qe)&&C.skip_effect(h(this,Qe)),h(this,Oe)&&C.skip_effect(h(this,Oe)),h(this,Ke)&&C.skip_effect(h(this,Ke)),C.on_fork_commit(()=>{z(this,re,Xa).call(this,t)})):z(this,re,Xa).call(this,t)}}He=new WeakMap,rr=new WeakMap,Xe=new WeakMap,fn=new WeakMap,De=new WeakMap,Qe=new WeakMap,Oe=new WeakMap,Ke=new WeakMap,Lt=new WeakMap,hn=new WeakMap,qt=new WeakMap,Pn=new WeakMap,ar=new WeakMap,ir=new WeakMap,Mt=new WeakMap,Nr=new WeakMap,re=new WeakSet,Wo=function(){try{I(this,Qe,mt(()=>h(this,fn).call(this,h(this,He))))}catch(t){this.error(t)}},qo=function(t){const n=h(this,Xe).failed;n&&I(this,Ke,mt(()=>{n(h(this,He),()=>t,()=>()=>{})}))},Zo=function(){const t=h(this,Xe).pending;t&&(this.is_pending=!0,I(this,Oe,mt(()=>t(h(this,He)))),Rt(()=>{var n=I(this,Lt,document.createDocumentFragment()),r=pt();n.append(r),I(this,Qe,z(this,re,Kr).call(this,()=>mt(()=>h(this,fn).call(this,r)))),h(this,qt)===0&&(h(this,He).before(n),I(this,Lt,null),Xn(h(this,Oe),()=>{I(this,Oe,null)}),z(this,re,Hr).call(this,C))}))},Za=function(){try{if(this.is_pending=this.has_pending_snippet(),I(this,qt,0),I(this,hn,0),I(this,Qe,mt(()=>{h(this,fn).call(this,h(this,He))})),h(this,qt)>0){var t=I(this,Lt,document.createDocumentFragment());Zi(h(this,Qe),t);const n=h(this,Xe).pending;I(this,Oe,mt(()=>n(h(this,He))))}else z(this,re,Hr).call(this,C)}catch(n){this.error(n)}},Hr=function(t){this.is_pending=!1,t.transfer_effects(h(this,ar),h(this,ir))},Kr=function(t){var n=M,r=B,a=Le;bt(h(this,De)),qe(h(this,De)),_n(h(this,De).ctx);try{return Ht.ensure(),t()}catch(o){return pi(o),null}finally{bt(n),qe(r),_n(a)}},Ja=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&z(r=this.parent,re,Ja).call(r,t,n);return}I(this,qt,h(this,qt)+t),h(this,qt)===0&&(z(this,re,Hr).call(this,n),h(this,Oe)&&Xn(h(this,Oe),()=>{I(this,Oe,null)}),h(this,Lt)&&(h(this,He).before(h(this,Lt)),I(this,Lt,null)))},Xa=function(t){h(this,Qe)&&(xe(h(this,Qe)),I(this,Qe,null)),h(this,Oe)&&(xe(h(this,Oe)),I(this,Oe,null)),h(this,Ke)&&(xe(h(this,Ke)),I(this,Ke,null)),N&&(Re(h(this,rr)),Xr(),Re(Qr()));var n=h(this,Xe).onerror;let r=h(this,Xe).failed;var a=!1,o=!1;const l=()=>{if(a){$l();return}a=!0,o&&bl(),h(this,Ke)!==null&&Xn(h(this,Ke),()=>{I(this,Ke,null)}),z(this,re,Kr).call(this,()=>{z(this,re,Za).call(this)})},s=f=>{try{o=!0,n==null||n(f,l),o=!1}catch(u){Bt(u,h(this,De)&&h(this,De).parent)}r&&I(this,Ke,z(this,re,Kr).call(this,()=>{try{return mt(()=>{var u=M;u.b=this,u.f|=Gr,r(h(this,He),()=>f,()=>l)})}catch(u){return Bt(u,h(this,De).parent),null}}))};Rt(()=>{var f;try{f=this.transform_error(t)}catch(u){Bt(u,h(this,De)&&h(this,De).parent);return}f!==null&&typeof f=="object"&&typeof f.then=="function"?f.then(s,u=>Bt(u,h(this,De)&&h(this,De).parent)):s(f)})};function Si(e,t,n,r){const a=ua;var o=e.filter(d=>!d.settled);if(n.length===0&&o.length===0){r(t.map(a));return}var l=M,s=Fl(),f=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(d=>d.promise)):null;function u(d){if((l.f&it)===0){s();try{r(d)}catch(b){Bt(b,l)}wr()}}var v=Ci();if(n.length===0){f.then(()=>u(t.map(a))).finally(v);return}function p(){Promise.all(n.map(d=>Vl(d))).then(d=>u([...t.map(a),...d])).catch(d=>Bt(d,l)).finally(v)}f?f.then(()=>{s(),p(),wr()}):p()}function Fl(){var e=M,t=B,n=Le,r=C;return function(o=!0){bt(e),qe(t),_n(n),o&&(e.f&it)===0&&(r==null||r.activate(),r==null||r.apply())}}function wr(e=!0){bt(null),qe(null),_n(null),e&&(C==null||C.deactivate())}function Ci(){var e=M,t=e.b,n=C,r=t.is_rendered();return t.update_pending_count(1,n),n.increment(r,e),()=>{t.update_pending_count(-1,n),n.decrement(r,e)}}function ua(e){var t=_e|ye;return M!==null&&(M.f|=Jt),{ctx:Le,deps:null,effects:null,equals:ni,f:t,fn:e,reactions:null,rv:0,v:ve,wv:0,parent:M,ac:null}}const _r=Symbol("obsolete");function Vl(e,t,n){let r=M;r===null&&sl();var a=void 0,o=Yn(ve),l=!B,s=new Set;return Xl(()=>{var b;var f=M,u=ti();a=u.promise;try{Promise.resolve(e()).then(u.resolve,m=>{m!==br&&u.reject(m)}).finally(wr)}catch(m){u.reject(m),wr()}var v=C;if(l){if((f.f&Vt)!==0)var p=Ci();if(r.b.is_rendered())(b=v.async_deriveds.get(f))==null||b.reject(_r);else for(const m of s.values())m.reject(_r);s.add(u),v.async_deriveds.set(f,u)}const d=(m,x=void 0)=>{p==null||p(),s.delete(u),x!==_r&&(v.activate(),x?(o.f|=zt,xr(o,x)):((o.f&zt)!==0&&(o.f^=zt),xr(o,m)),v.deactivate())};u.promise.then(d,m=>d(null,m||"unknown"))}),Cr(()=>{for(const f of s)f.reject(_r)}),new Promise(f=>{function u(v){function p(){v===a?f(o):u(a)}v.then(p,p)}u(a)})}function Ie(e){const t=ua(e);return Mi(t),t}function jl(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)xe(t[n])}}function fa(e){var t,n=M,r=e.parent;if(!Ot&&r!==null&&e.v!==ve&&(r.f&(it|We))!==0)return Sl(),e.v;bt(r);try{e.f&=~Xt,jl(e),t=Vi(e)}finally{bt(n)}return t}function $i(e){var t=fa(e);if(!e.equals(t)&&(e.wv=Ui(),(!(C!=null&&C.is_fork)||e.deps===null)&&(C!==null?(C.capture(e,t,!0),Hn==null||Hn.capture(e,t,!0)):e.v=t,e.deps===null))){de(e,ge);return}Ot||(ke!==null?(ha()||C!=null&&C.is_fork)&&ke.set(e,t):ra(e))}function zl(e){var t,n;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),(n=r.ac)==null||n.abort(br),r.fn!==null&&(r.teardown=Ft),r.ac=null,qn(r,0),va(r))}function Ti(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Cn(t)}let kr=new Set;const rn=new Map;let Ai=!1;function Yn(e,t){var n={f:0,v:e,reactions:null,equals:ni,rv:0,wv:0};return n}function j(e,t){const n=Yn(e);return Mi(n),n}function Ri(e,t=!1,n=!0){const r=Yn(e);return t||(r.equals=ol),r}function E(e,t,n=!1){B!==null&&(!lt||(B.f&vr)!==0)&&si()&&(B.f&(_e|at|yn|vr))!==0&&(Ze===null||!Ae.call(Ze,e))&&gl();let r=n?It(t):t;return xr(e,r,yr)}function xr(e,t,n=null){if(!e.equals(t)){rn.set(e,Ot?t:e.v);var r=Ht.ensure();if(r.capture(e,t),(e.f&_e)!==0){const a=e;(e.f&ye)!==0&&fa(a),ke===null&&ra(a)}e.wv=Ui(),Ii(e,ye,n),M!==null&&(M.f&ge)!==0&&(M.f&(ht|$t))===0&&(Je===null?Yl([e]):Je.push(e)),!r.is_fork&&kr.size>0&&!Ai&&Bl()}return t}function Bl(){Ai=!1;for(const e of kr){(e.f&ge)!==0&&de(e,dt);let t;try{t=Wn(e)}catch{t=!0}t&&Cn(e)}kr.clear()}function Gn(e){E(e,e.v+1)}function Ii(e,t,n){var r=e.reactions;if(r!==null)for(var a=r.length,o=0;o<a;o++){var l=r[o],s=l.f,f=(s&ye)===0;if(f&&de(l,t),(s&vr)!==0)kr.add(l);else if((s&_e)!==0){var u=l;ke==null||ke.delete(u),(s&Xt)===0&&(s&Ge&&(M===null||(M.f&pr)===0)&&(l.f|=Xt),Ii(u,dt,n))}else if(f){var v=l;(s&at)!==0&&ot!==null&&ot.add(v),n!==null?n.push(v):ca(v)}}}function Hl(e,t){if(t){const n=document.body;e.autofocus=!0,Rt(()=>{document.activeElement===n&&e.focus()})}}let Oi=!1;function Pi(){Oi||(Oi=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Un])==null||t.call(n)})},{capture:!0}))}function Er(e){var t=B,n=M;qe(null),bt(null);try{return e()}finally{qe(t),bt(n)}}function Kl(e,t,n,r=n){e.addEventListener(t,()=>Er(n));const a=e[Un];a?e[Un]=()=>{a(),r(!0)}:e[Un]=()=>r(!0),Pi()}let Sr=!1,Ot=!1;function Li(e){Ot=e}let B=null,lt=!1;function qe(e){B=e}let M=null;function bt(e){M=e}let Ze=null;function Mi(e){B!==null&&(Ze===null?Ze=[e]:Ze.push(e))}let Me=null,Ve=0,Je=null;function Yl(e){Je=e}let Di=1,an=0,on=an;function Ni(e){on=e}function Ui(){return++Di}function Wn(e){var t=e.f;if((t&ye)!==0)return!0;if(t&_e&&(e.f&=~Xt),(t&dt)!==0){for(var n=e.deps,r=n.length,a=0;a<r;a++){var o=n[a];if(Wn(o)&&$i(o),o.wv>e.wv)return!0}(t&Ge)!==0&&ke===null&&de(e,ge)}return!1}function Fi(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Ze!==null&&Ae.call(Ze,e)))for(var a=0;a<r.length;a++){var o=r[a];(o.f&_e)!==0?Fi(o,t,!1):t===o&&(n?de(o,ye):(o.f&ge)!==0&&de(o,dt),ca(o))}}function Vi(e){var x;var t=Me,n=Ve,r=Je,a=B,o=Ze,l=Le,s=lt,f=on,u=e.f;Me=null,Ve=0,Je=null,B=(u&(ht|$t))===0?e:null,Ze=null,_n(e.ctx),lt=!1,on=++an,e.ac!==null&&(Er(()=>{e.ac.abort(br)}),e.ac=null);try{e.f|=pr;var v=e.fn,p=v();e.f|=Vt;var d=e.deps,b=C==null?void 0:C.is_fork;if(Me!==null){var m;if(b||qn(e,Ve),d!==null&&Ve>0)for(d.length=Ve+Me.length,m=0;m<Me.length;m++)d[Ve+m]=Me[m];else e.deps=d=Me;if(ha()&&(e.f&Ge)!==0)for(m=Ve;m<d.length;m++)((x=d[m]).reactions??(x.reactions=[])).push(e)}else!b&&d!==null&&Ve<d.length&&(qn(e,Ve),d.length=Ve);if(si()&&Je!==null&&!lt&&d!==null&&(e.f&(_e|dt|ye))===0)for(m=0;m<Je.length;m++)Fi(Je[m],e);if(a!==null&&a!==e){if(an++,a.deps!==null)for(let P=0;P<n;P+=1)a.deps[P].rv=an;if(t!==null)for(const P of t)P.rv=an;Je!==null&&(r===null?r=Je:r.push(...Je))}return(e.f&zt)!==0&&(e.f^=zt),p}catch(P){return pi(P)}finally{e.f^=pr,Me=t,Ve=n,Je=r,B=a,Ze=o,_n(l),lt=s,on=f}}function Gl(e,t){let n=t.reactions;if(n!==null){var r=ce.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}if(n===null&&(t.f&_e)!==0&&(Me===null||!Ae.call(Me,t))){var o=t;(o.f&Ge)!==0&&(o.f^=Ge,o.f&=~Xt),o.v!==ve&&ra(o),zl(o),qn(o,0)}}function qn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Gl(e,n[r])}function Cn(e){var t=e.f;if((t&it)===0){de(e,ge);var n=M,r=Sr;M=e,Sr=!0;try{(t&(at|Yr))!==0?Ql(e):va(e),Ki(e);var a=Vi(e);e.teardown=typeof a=="function"?a:null,e.wv=Di;var o;V&&ml&&(e.f&ye)!==0&&e.deps}finally{Sr=r,M=n}}}async function ln(){await Promise.resolve(),ee()}function i(e){var t=e.f,n=(t&_e)!==0;if(B!==null&&!lt){var r=M!==null&&(M.f&it)!==0;if(!r&&(Ze===null||!Ae.call(Ze,e))){var a=B.deps;if((B.f&pr)!==0)e.rv<an&&(e.rv=an,Me===null&&a!==null&&a[Ve]===e?Ve++:Me===null?Me=[e]:Me.push(e));else{(B.deps??(B.deps=[])).push(e);var o=e.reactions;o===null?e.reactions=[B]:Ae.call(o,B)||o.push(B)}}}if(Ot&&rn.has(e))return rn.get(e);if(n){var l=e;if(Ot){var s=l.v;return((l.f&ge)===0&&l.reactions!==null||zi(l))&&(s=fa(l)),rn.set(l,s),s}var f=(l.f&Ge)===0&&!lt&&B!==null&&(Sr||(B.f&Ge)!==0),u=(l.f&Vt)===0;Wn(l)&&(f&&(l.f|=Ge),$i(l)),f&&!u&&(Ti(l),ji(l))}if(ke!=null&&ke.has(e))return ke.get(e);if((e.f&zt)!==0)throw e.v;return e.v}function ji(e){if(e.f|=Ge,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&_e)!==0&&(t.f&Ge)===0&&(Ti(t),ji(t))}function zi(e){if(e.v===ve)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(rn.has(t)||(t.f&_e)!==0&&zi(t))return!0;return!1}function Zn(e){var t=lt;try{return lt=!0,e()}finally{lt=t}}function Wl(e){M===null&&(B===null&&fl(),ul()),Ot&&cl()}function ql(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function st(e,t){var n=M;n!==null&&(n.f&We)!==0&&(e|=We);var r={ctx:Le,deps:null,nodes:null,f:e|ye|Ge,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};C==null||C.register_created_effect(r);var a=r;if((e&mn)!==0)Sn!==null?Sn.push(r):Ht.ensure().schedule(r);else if(t!==null){try{Cn(r)}catch(l){throw xe(r),l}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Jt)===0&&(a=a.first,(e&at)!==0&&(e&jt)!==0&&a!==null&&(a.f|=jt))}if(a!==null&&(a.parent=n,n!==null&&ql(a,n),B!==null&&(B.f&_e)!==0&&(e&$t)===0)){var o=B;(o.effects??(o.effects=[])).push(a)}return r}function ha(){return B!==null&&!lt}function Cr(e){const t=st(dr,null);return de(t,ge),t.teardown=e,t}function je(e){Wl();var t=M.f,n=!B&&(t&ht)!==0&&(t&Vt)===0;if(n){var r=Le;(r.e??(r.e=[])).push(e)}else return Bi(e)}function Bi(e){return st(mn|rl,e)}function Zl(e){Ht.ensure();const t=st($t|Jt,e);return()=>{xe(t)}}function Jl(e){Ht.ensure();const t=st($t|Jt,e);return(n={})=>new Promise(r=>{n.outro?Xn(t,()=>{xe(t),r(void 0)}):(xe(t),r(void 0))})}function da(e){return st(mn,e)}function Xl(e){return st(yn|Jt,e)}function $r(e,t=0){return st(dr|t,e)}function Se(e,t=[],n=[],r=[]){Si(r,t,n,a=>{st(dr,()=>e(...a.map(i)))})}function Jn(e,t=0){var n=st(at|t,e);return n}function Hi(e,t=0){var n=st(Yr|t,e);return n}function mt(e){return st(ht|Jt,e)}function Ki(e){var t=e.teardown;if(t!==null){const n=Ot,r=B;Li(!0),qe(null);try{t.call(null)}finally{Li(n),qe(r)}}}function va(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const a=n.ac;a!==null&&Er(()=>{a.abort(br)});var r=n.next;(n.f&$t)!==0?n.parent=null:xe(n,t),n=r}}function Ql(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&ht)===0&&xe(t),t=n}}function xe(e,t=!0){var n=!1;(t||(e.f&nl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Yi(e.nodes.start,e.nodes.end),n=!0),de(e,Wr),va(e,t&&!n),qn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)o.stop();Ki(e),e.f^=Wr,e.f|=it;var a=e.parent;a!==null&&a.first!==null&&Gi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Yi(e,t){for(;e!==null;){var n=e===t?null:gt(e);e.remove(),e=n}}function Gi(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Xn(e,t,n=!0){var r=[];Wi(e,r,!0);var a=()=>{n&&xe(e),t&&t()},o=r.length;if(o>0){var l=()=>--o||a();for(var s of r)s.out(l)}else a()}function Wi(e,t,n){if((e.f&We)===0){e.f^=We;var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)(s.is_global||n)&&t.push(s);for(var a=e.first;a!==null;){var o=a.next;if((a.f&$t)===0){var l=(a.f&jt)!==0||(a.f&ht)!==0&&(e.f&at)!==0;Wi(a,t,l?n:!1)}a=o}}}function es(e){qi(e,!0)}function qi(e,t){if((e.f&We)!==0){e.f^=We,(e.f&ge)===0&&(de(e,ye),Ht.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&jt)!==0||(n.f&ht)!==0;qi(n,a?t:!1),n=r}var o=e.nodes&&e.nodes.t;if(o!==null)for(const l of o)(l.is_global||t)&&l.in()}}function Zi(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var a=n===r?null:gt(n);t.append(n),n=a}}function Ji(e){const t={get:n=>Bn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(Bn(t.store),{[n]:r}):Object.assign(Bn(t.store),n),t.store.set(Bn(t.store))},store:Il(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Ji({}),i18n:Ji({}),instances:new Set,plugins:new Set};const ts={ariaLinkLabel:"Altcha (official website)",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (official website)">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};"$altcha"in globalThis&&globalThis.$altcha.i18n.set("en",ts);const ns="5";typeof window<"u"&&((Co=window.__svelte??(window.__svelte={})).v??(Co.v=new Set)).add(ns);const sn=Symbol("events"),Xi=new Set,pa=new Set;function Qi(e,t,n,r={}){function a(o){if(r.capture||ga.call(t,o),!o.cancelBubble)return Er(()=>n==null?void 0:n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Rt(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function be(e,t,n,r,a){var o={capture:r,passive:a},l=Qi(e,t,n,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Cr(()=>{t.removeEventListener(e,l,o)})}function Tr(e,t,n){(t[sn]??(t[sn]={}))[e]=n}function Ar(e){for(var t=0;t<e.length;t++)Xi.add(e[t]);for(var n of pa)n(e)}let eo=null;function ga(e){var P,T;var t=this,n=t.ownerDocument,r=e.type,a=((P=e.composedPath)==null?void 0:P.call(e))||[],o=a[0]||e.target;eo=e;var l=0,s=eo===e&&e[sn];if(s){var f=a.indexOf(s);if(f!==-1&&(t===document||t===window)){e[sn]=t;return}var u=a.indexOf(t);if(u===-1)return;f<=u&&(l=f)}if(o=a[l]||e.target,o!==t){Dn(e,"currentTarget",{configurable:!0,get(){return o||n}});var v=B,p=M;qe(null),bt(null);try{for(var d,b=[];o!==null;){var m=o.assignedSlot||o.parentNode||o.host||null;try{var x=(T=o[sn])==null?void 0:T[r];x!=null&&(!o.disabled||e.target===o)&&x.call(o,e)}catch(X){d?b.push(X):d=X}if(e.cancelBubble||m===t||m===null)break;o=m}if(d){for(let X of b)queueMicrotask(()=>{throw X});throw d}}finally{e[sn]=t,delete e.currentTarget,qe(v),bt(p)}}}const ba=(($o=globalThis==null?void 0:globalThis.window)==null?void 0:$o.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function rs(e){return(ba==null?void 0:ba.createHTML(e))??e}function to(e){var t=na("template");return t.innerHTML=rs(e.replaceAll("<!>","<!---->")),t.content}function ze(e,t){var n=M;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function le(e,t){var n=(t&yl)!==0,r=(t&wl)!==0,a,o=!e.startsWith("<!>");return()=>{if(N)return ze(U,null),U;a===void 0&&(a=to(o?e:"<!>"+e),n||(a=Fe(a)));var l=r||hi?document.importNode(a,!0):a.cloneNode(!0);if(n){var s=Fe(l),f=l.lastChild;ze(s,f)}else ze(l,l);return l}}function as(e,t,n="svg"){var r=!e.startsWith("<!>"),a=`<${n}>${r?e:"<!>"+e}</${n}>`,o;return()=>{if(N)return ze(U,null),U;if(!o){var l=to(a),s=Fe(l);o=Fe(s)}var f=o.cloneNode(!0);return ze(f,f),f}}function ma(e,t){return as(e,t,"svg")}function Rr(e=""){if(!N){var t=pt(e+"");return ze(t,t),t}var n=U;return n.nodeType!==Vn?(n.before(n=pt()),Re(n)):mr(n),ze(n,n),n}function no(){if(N)return ze(U,null),U;var e=document.createDocumentFragment(),t=document.createComment(""),n=pt();return e.append(t,n),ze(t,n),e}function H(e,t){if(N){var n=M;((n.f&Vt)===0||n.nodes.end===null)&&(n.nodes.end=U),tn();return}e!==null&&e.before(t)}function is(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const os=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ls(e){return os.includes(e)}const ss={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function cs(e){return e=e.toLowerCase(),ss[e]??e}const us=["touchstart","touchmove"];function fs(e){return us.includes(e)}function yt(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Nn]??(e[Nn]=e.nodeValue))&&(e[Nn]=n,e.nodeValue=`${n}`)}function ro(e,t){return ao(e,t)}function hs(e,t){ta(),t.intro=t.intro??!1;const n=t.target,r=N,a=U;try{for(var o=Fe(n);o&&(o.nodeType!==jn||o.data!==Jr);)o=gt(o);if(!o)throw Qt;vt(!0),Re(o);const l=ao(e,{...t,anchor:o});return vt(!1),l}catch(l){if(l instanceof Error&&l.message.split(`
`).some(s=>s.startsWith("https://svelte.dev/e/")))throw l;return l!==Qt&&console.warn("Failed to hydrate: ",l),t.recover===!1&&dl(),ta(),Al(n),vt(!1),ro(e,t)}finally{vt(r),Re(a)}}const Ir=new Map;function ao(e,{target:t,anchor:n,props:r={},events:a,context:o,intro:l=!0,transformError:s}){ta();var f=void 0,u=Jl(()=>{var v=n??t.appendChild(pt());Nl(v,{pending:()=>{}},b=>{Tt({});var m=Le;if(o&&(m.c=o),a&&(r.$$events=a),N&&ze(b,null),f=e(b,r)||{},N&&(M.nodes.end=U,U===null||U.nodeType!==jn||U.data!==oi))throw zn(),Qt;At()},s);var p=new Set,d=b=>{for(var m=0;m<b.length;m++){var x=b[m];if(!p.has(x)){p.add(x);var P=fs(x);for(const fe of[t,document]){var T=Ir.get(fe);T===void 0&&(T=new Map,Ir.set(fe,T));var X=T.get(x);X===void 0?(fe.addEventListener(x,ga,{passive:P}),T.set(x,1)):T.set(x,X+1)}}}};return d(Zt(Xi)),pa.add(d),()=>{var P;for(var b of p)for(const T of[t,document]){var m=Ir.get(T),x=m.get(b);--x==0?(T.removeEventListener(b,ga),m.delete(b),m.size===0&&Ir.delete(T)):m.set(b,x)}pa.delete(d),v!==n&&((P=v.parentNode)==null||P.removeChild(v))}});return ya.set(f,u),f}let ya=new WeakMap;function ds(e,t){const n=ya.get(e);return n?(ya.delete(e),n(t)):Promise.resolve()}class Or{constructor(t,n=!0){R(this,"anchor");L(this,ct,new Map);L(this,Dt,new Map);L(this,ut,new Map);L(this,dn,new Set);L(this,or,!0);L(this,Ur,t=>{if(h(this,ct).has(t)){var n=h(this,ct).get(t),r=h(this,Dt).get(n);if(r)es(r),h(this,dn).delete(n);else{var a=h(this,ut).get(n);a&&(h(this,Dt).set(n,a.effect),h(this,ut).delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(const[o,l]of h(this,ct)){if(h(this,ct).delete(o),o===t)break;const s=h(this,ut).get(l);s&&(xe(s.effect),h(this,ut).delete(l))}for(const[o,l]of h(this,Dt)){if(o===n||h(this,dn).has(o))continue;const s=()=>{if(Array.from(h(this,ct).values()).includes(o)){var u=document.createDocumentFragment();Zi(l,u),u.append(pt()),h(this,ut).set(o,{effect:l,fragment:u})}else xe(l);h(this,dn).delete(o),h(this,Dt).delete(o)};h(this,or)||!r?(h(this,dn).add(o),Xn(l,s,!1)):s()}}});L(this,La,t=>{h(this,ct).delete(t);const n=Array.from(h(this,ct).values());for(const[r,a]of h(this,ut))n.includes(r)||(xe(a.effect),h(this,ut).delete(r))});this.anchor=t,I(this,or,n)}ensure(t,n){var r=C;n&&!h(this,Dt).has(t)&&!h(this,ut).has(t)&&h(this,Dt).set(t,mt(()=>n(this.anchor))),h(this,ct).set(r,t),N&&(this.anchor=U),h(this,Ur).call(this,r)}}ct=new WeakMap,Dt=new WeakMap,ut=new WeakMap,dn=new WeakMap,or=new WeakMap,Ur=new WeakMap,La=new WeakMap;function vs(e,t,...n){var r=new Or(e);Jn(()=>{const a=t()??null;r.ensure(a,a&&(o=>a(o,...n)))},jt)}function wa(e){Le===null&&ll(),je(()=>{const t=Zn(e);if(typeof t=="function")return t})}function me(e,t,n=!1){var r;N&&(r=U,tn());var a=new Or(e),o=n?jt:0;function l(s,f){if(N){var u=ui(r);if(s!==parseInt(u.substring(1))){var v=Qr();Re(v),a.anchor=v,vt(!1),a.ensure(s,f),vt(!0);return}}a.ensure(s,f)}Jn(()=>{var s=!1;t((f,u=0)=>{s=!0,l(u,f)}),s||l(-1,null)},o)}const ps=Symbol("NaN");function gs(e,t,n){N&&tn();var r=new Or(e);Jn(()=>{var a=t();a!==a&&(a=ps),r.ensure(a,n)})}function io(e,t,n=!1,r=!1,a=!1,o=!1){var l=e,s="";if(n){var f=e;N&&(l=Re(Fe(f)))}Se(()=>{var u=M;if(s===(s=t()??"")){N&&tn();return}if(n&&!N){u.nodes=null,f.innerHTML=s,s!==""&&ze(Fe(f),f.lastChild);return}if(u.nodes!==null&&(Yi(u.nodes.start,u.nodes.end),u.nodes=null),s!==""){if(N){U.data;for(var v=tn(),p=v;v!==null&&(v.nodeType!==jn||v.data!=="");)p=v,v=gt(v);if(v===null)throw zn(),Qt;ze(U,p),l=Re(v);return}var d=r?_l:a?kl:void 0,b=na(r?"svg":a?"math":"template",d);b.innerHTML=s;var m=r||a?b:b.content;if(ze(Fe(m),m.lastChild),r||a)for(;Fe(m);)l.before(Fe(m));else l.before(m)}})}function bs(e,t,n){var r;N&&(r=U,tn());var a=new Or(e);Jn(()=>{var o=t()??null;if(N){var l=ui(r),s=l===Jr,f=o!==null;if(s!==f){var u=Qr();Re(u),a.anchor=u,vt(!1),a.ensure(o,o&&(v=>n(v,o))),vt(!0);return}}a.ensure(o,o&&(v=>n(v,o)))},jt)}function ms(e,t){var n=void 0,r;Hi(()=>{n!==(n=t())&&(r&&(xe(r),r=null),n&&(r=mt(()=>{da(()=>n(e))})))})}function oo(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=oo(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ys(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=oo(e))&&(r&&(r+=" "),r+=t);return r}function ws(e){return typeof e=="object"?ys(e):e??""}const lo=[...` 	
\r\f \v\uFEFF`];function _s(e,t,n){var r=e==null?"":""+e;if(n){for(var a of Object.keys(n))if(n[a])r=r?r+" "+a:a;else if(r.length)for(var o=a.length,l=0;(l=r.indexOf(a,l))>=0;){var s=l+o;(l===0||lo.includes(r[l-1]))&&(s===r.length||lo.includes(r[s]))?r=(l===0?"":r.substring(0,l))+r.substring(s+1):l=s}}return r===""?null:r}function so(e,t=!1){var n=t?" !important;":";",r="";for(var a of Object.keys(e)){var o=e[a];o!=null&&o!==""&&(r+=" "+a+": "+o+n)}return r}function _a(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ks(e,t){if(t){var n="",r,a;if(Array.isArray(t)?(r=t[0],a=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,l=0,s=!1,f=[];r&&f.push(...Object.keys(r).map(_a)),a&&f.push(...Object.keys(a).map(_a));var u=0,v=-1;const x=e.length;for(var p=0;p<x;p++){var d=e[p];if(s?d==="/"&&e[p-1]==="*"&&(s=!1):o?o===d&&(o=!1):d==="/"&&e[p+1]==="*"?s=!0:d==='"'||d==="'"?o=d:d==="("?l++:d===")"&&l--,!s&&o===!1&&l===0){if(d===":"&&v===-1)v=p;else if(d===";"||p===x-1){if(v!==-1){var b=_a(e.substring(u,v).trim());if(!f.includes(b)){d!==";"&&p++;var m=e.substring(u,p).trim();n+=" "+m+";"}}u=p+1,v=-1}}}}return r&&(n+=so(r)),a&&(n+=so(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function xs(e,t,n,r,a,o){var l=e[qr];if(N||l!==n||l===void 0){var s=_s(n,r,o);(!N||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s)),e[qr]=n}else if(o&&a!==o)for(var f in o){var u=!!o[f];(a==null||u!==!!a[f])&&e.classList.toggle(f,u)}return o}function ka(e,t={},n,r){for(var a in n){var o=n[a];t[a]!==o&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,r))}}function Es(e,t,n,r){var a=e[Zr];if(N||a!==t){var o=ks(t,r);(!N||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e[Zr]=t}else r&&(Array.isArray(r)?(ka(e,n==null?void 0:n[0],r[0]),ka(e,n==null?void 0:n[1],r[1],"important")):ka(e,n,r));return r}function xa(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Z(t))return Cl();for(var r of e.options)r.selected=t.includes(co(r));return}for(r of e.options){var a=co(r);if(Tl(a,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Ss(e){var t=new MutationObserver(()=>{xa(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Cr(()=>{t.disconnect()})}function co(e){return"__value"in e?e.__value:e.value}const Qn=Symbol("class"),er=Symbol("style"),uo=Symbol("is custom element"),fo=Symbol("is html"),Cs=Fn?"link":"LINK",$s=Fn?"input":"INPUT",Ts=Fn?"option":"OPTION",As=Fn?"select":"SELECT",Rs=Fn?"progress":"PROGRESS";function Ea(e){if(N){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;q(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;q(e,"checked",null),e.checked=a}}};e[Un]=n,Rt(n),Pi()}}function Is(e,t){var n=Sa(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==Rs)||(e.value=t??"")}function Os(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function q(e,t,n,r){var a=Sa(e);N&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Cs)||a[t]!==(a[t]=n)&&(t==="loading"&&(e[il]=n),n==null?e.removeAttribute(t):typeof n!="string"&&vo(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Ps(e,t,n,r,a=!1,o=!1){if(N&&a&&e.nodeName===$s){var l=e,s=l.type==="checkbox"?"defaultChecked":"defaultValue";s in n||Ea(l)}var f=Sa(e),u=f[uo],v=!f[fo];let p=N&&u;p&&vt(!1);var d=t||{},b=e.nodeName===Ts;for(var m in t)m in n||(n[m]=null);n.class?n.class=ws(n.class):n[Qn]&&(n.class=null),n[er]&&(n.style??(n.style=null));var x=vo(e);for(const Y in n){let $=n[Y];if(b&&Y==="value"&&$==null){e.value=e.__value="",d[Y]=$;continue}if(Y==="class"){var P=e.namespaceURI==="http://www.w3.org/1999/xhtml";xs(e,P,$,r,t==null?void 0:t[Qn],n[Qn]),d[Y]=$,d[Qn]=n[Qn];continue}if(Y==="style"){Es(e,$,t==null?void 0:t[er],n[er]),d[Y]=$,d[er]=n[er];continue}var T=d[Y];if(!($===T&&!($===void 0&&e.hasAttribute(Y)))){d[Y]=$;var X=Y[0]+Y[1];if(X!=="$$")if(X==="on"){const ae={},Pe="$$"+Y;let D=Y.slice(2);var fe=ls(D);if(is(D)&&(D=D.slice(0,-7),ae.capture=!0),!fe&&T){if($!=null)continue;e.removeEventListener(D,d[Pe],ae),d[Pe]=null}if(fe)Tr(D,e,$),Ar([D]);else if($!=null){let pe=function(kt){d[Y].call(this,kt)};d[Pe]=Qi(D,e,pe,ae)}}else if(Y==="style")q(e,Y,$);else if(Y==="autofocus")Hl(e,!!$);else if(!u&&(Y==="__value"||Y==="value"&&$!=null))e.value=e.__value=$;else if(Y==="selected"&&b)Os(e,$);else{var K=Y;v||(K=cs(K));var Ce=K==="defaultValue"||K==="defaultChecked";if($==null&&!u&&!Ce)if(f[Y]=null,K==="value"||K==="checked"){let ae=e;const Pe=t===void 0;if(K==="value"){let D=ae.defaultValue;ae.removeAttribute(K),ae.defaultValue=D,ae.value=ae.__value=Pe?D:null}else{let D=ae.defaultChecked;ae.removeAttribute(K),ae.defaultChecked=D,ae.checked=Pe?D:!1}}else e.removeAttribute(Y);else Ce||x.includes(K)&&(u||typeof $!="string")?(e[K]=$,K in f&&(f[K]=ve)):typeof $!="function"&&q(e,K,$)}}}return p&&vt(!0),d}function Pr(e,t,n=[],r=[],a=[],o,l=!1,s=!1){Si(a,n,r,f=>{var u=void 0,v={},p=e.nodeName===As,d=!1;if(Hi(()=>{var m=t(...f.map(i)),x=Ps(e,u,m,o,l,s);d&&p&&"value"in m&&xa(e,m.value);for(let T of Object.getOwnPropertySymbols(v))m[T]||xe(v[T]);for(let T of Object.getOwnPropertySymbols(m)){var P=m[T];T.description===xl&&(!u||P!==u[T])&&(v[T]&&xe(v[T]),v[T]=mt(()=>ms(e,()=>P))),x[T]=P}u=x}),p){var b=e;da(()=>{xa(b,u.value,!0),Ss(b)})}d=!0})}function Sa(e){return e[gr]??(e[gr]={[uo]:e.nodeName.includes("-"),[fo]:e.namespaceURI===li})}var ho=new Map;function vo(e){var t=e.getAttribute("is")||e.nodeName,n=ho.get(t);if(n)return n;ho.set(t,n=[]);for(var r,a=e,o=Element.prototype;o!==a;){r=Xo(a);for(var l in r)r[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&n.push(l);a=Qa(a)}return n}function Ls(e,t,n=t){var r=new WeakSet;Kl(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Ca(e)?$a(o):o,n(o),C!==null&&r.add(C),await ln(),o!==(o=t())){var l=e.selectionStart,s=e.selectionEnd,f=e.value.length;if(e.value=o??"",s!==null){var u=e.value.length;l===s&&s===f&&u>f?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=l,e.selectionEnd=Math.min(s,u))}}}),(N&&e.defaultValue!==e.value||Zn(t)==null&&e.value)&&(n(Ca(e)?$a(e.value):e.value),C!==null&&r.add(C)),$r(()=>{var a=t();if(e===document.activeElement){var o=C;if(r.has(o))return}Ca(e)&&a===$a(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Ca(e){var t=e.type;return t==="number"||t==="range"}function $a(e){return e===""?null:+e}function Ta(e,t){return e===t||(e==null?void 0:e[wn])===t}function Kt(e={},t,n,r){var a=Le.r,o=M;return da(()=>{var l,s;return $r(()=>{l=s,s=[],Zn(()=>{Ta(n(...s),e)||(t(e,...s),l&&Ta(n(...l),e)&&t(null,...l))})}),()=>{let f=o;for(;f!==a&&f.parent!==null&&f.parent.f&Wr;)f=f.parent;const u=()=>{s&&Ta(n(...s),e)&&t(null,...s)},v=f.teardown;f.teardown=()=>{u(),v==null||v()}}}),e}const Ms={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Lr(e,t,n){return new Proxy({props:e,exclude:t},Ms)}function se(e,t,n,r){var a=r,o=!0,l=()=>(o&&(o=!1,a=r),a),s;s=e[t],s===void 0&&r!==void 0&&(s=l());var f;f=()=>{var d=e[t];return d===void 0?l():(o=!0,d)};var u=!1,v=ua(()=>(u=!1,f())),p=M;return(function(d,b){if(arguments.length>0){const m=b?i(v):d;return E(v,m),u=!0,a!==void 0&&(a=m),d}return Ot&&u||(p.f&it)!==0?v.v:i(v)})}function Ds(e){return new Ns(e)}class Ns{constructor(t){L(this,Nt);L(this,et);var o;var n=new Map,r=(l,s)=>{var f=Ri(s,!1,!1);return n.set(l,f),f};const a=new Proxy({...t.props||{},$$events:{}},{get(l,s){return i(n.get(s)??r(s,Reflect.get(l,s)))},has(l,s){return s===al?!0:(i(n.get(s)??r(s,Reflect.get(l,s))),Reflect.has(l,s))},set(l,s,f){return E(n.get(s)??r(s,f),f),Reflect.set(l,s,f)}});I(this,et,(t.hydrate?hs:ro)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&ee(),I(this,Nt,a.$$events);for(const l of Object.keys(h(this,et)))l==="$set"||l==="$destroy"||l==="$on"||Dn(this,l,{get(){return h(this,et)[l]},set(s){h(this,et)[l]=s},enumerable:!0});h(this,et).$set=l=>{Object.assign(a,l)},h(this,et).$destroy=()=>{ds(h(this,et))}}$set(t){h(this,et).$set(t)}$on(t,n){h(this,Nt)[t]=h(this,Nt)[t]||[];const r=(...a)=>n.call(this,...a);return h(this,Nt)[t].push(r),()=>{h(this,Nt)[t]=h(this,Nt)[t].filter(a=>a!==r)}}$destroy(){h(this,et).$destroy()}}Nt=new WeakMap,et=new WeakMap;let po=class{};typeof HTMLElement=="function"&&(po=class extends HTMLElement{constructor(t,n,r){super();R(this,"$$ctor");R(this,"$$s");R(this,"$$c");R(this,"$$cn",!1);R(this,"$$d",{});R(this,"$$r",!1);R(this,"$$p_d",{});R(this,"$$l",{});R(this,"$$l_u",new Map);R(this,"$$me");R(this,"$$shadowRoot",null);this.$$ctor=t,this.$$s=n,r&&(this.$$shadowRoot=this.attachShadow(r))}addEventListener(t,n,r){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const a=this.$$c.$on(t,n);this.$$l_u.set(n,a)}super.addEventListener(t,n,r)}removeEventListener(t,n,r){if(super.removeEventListener(t,n,r),this.$$c){const a=this.$$l_u.get(n);a&&(a(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(a){return o=>{const l=na("slot");a!=="default"&&(l.name=a),H(o,l)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=Us(this);for(const a of this.$$s)a in r&&(a==="default"&&!this.$$d.children?(this.$$d.children=t(a),n.default=!0):n[a]=t(a));for(const a of this.attributes){const o=this.$$g_p(a.name);o in this.$$d||(this.$$d[o]=Mr(o,a.value,this.$$p_d,"toProp"))}for(const a in this.$$p_d)!(a in this.$$d)&&this[a]!==void 0&&(this.$$d[a]=this[a],delete this[a]);this.$$c=Ds({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=Zl(()=>{$r(()=>{var a;this.$$r=!0;for(const o of Ut(this.$$c)){if(!((a=this.$$p_d[o])!=null&&a.reflect))continue;this.$$d[o]=this.$$c[o];const l=Mr(o,this.$$d[o],this.$$p_d,"toAttribute");l==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,l)}this.$$r=!1})});for(const a in this.$$l)for(const o of this.$$l[a]){const l=this.$$c.$on(a,o);this.$$l_u.set(o,l)}this.$$l={}}}attributeChangedCallback(t,n,r){var a;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Mr(t,r,this.$$p_d,"toProp"),(a=this.$$c)==null||a.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return Ut(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function Mr(e,t,n,r){var o;const a=(o=n[e])==null?void 0:o.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Us(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function Yt(e,t,n,r,a,o){let l=class extends po{constructor(){super(e,n,a),this.$$p_d=t}static get observedAttributes(){return Ut(t).map(s=>(t[s].attribute||s).toLowerCase())}};return Ut(t).forEach(s=>{Dn(l.prototype,s,{get(){return this.$$c&&s in this.$$c?this.$$c[s]:this.$$d[s]},set(f){var p;f=Mr(s,f,t),this.$$d[s]=f;var u=this.$$c;if(u){var v=(p=bn(u,s))==null?void 0:p.get;v?u[s]=f:u.$set({[s]:f})}}})}),r.forEach(s=>{Dn(l.prototype,s,{get(){var f;return(f=this.$$c)==null?void 0:f[s]}})}),e.element=l,l}var Fs=le('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');function go(e,t){Tt(t,!0);let n=se(t,"loading"),r=Lr(t,["$$slots","$$events","$$legacy","$$host","loading"]),a;function o(){a==null||a.click()}var l={get loading(){return n()},set loading(v){n(v),ee()}},s=Fs(),f=ue(s);Pr(f,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Kt(f,v=>a=v,()=>a);var u=oe(f,2);return Xr(2),ne(s),Se(()=>q(s,"data-loading",n())),Tr("click",u,o),H(e,s),At(l)}Ar(["click"]),Yt(go,{loading:{}},[],[],{mode:"open"});var Vs=le('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');function bo(e,t){Tt(t,!0);let n=se(t,"loading"),r=Lr(t,["$$slots","$$events","$$legacy","$$host","loading"]);var a={get loading(){return n()},set loading(s){n(s),ee()}},o=Vs(),l=ue(o);return Pr(l,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Xr(2),ne(o),Se(()=>q(o,"data-loading",n())),H(e,o),At(a)}Yt(bo,{loading:{}},[],[],{mode:"open"});var js=le('<div><a target="_blank" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');function Aa(e,t){Tt(t,!0);let n=se(t,"strings");const r="https://altcha.org";var a={get strings(){return n()},set strings(s){n(s),ee()}},o=js(),l=ue(o);return q(l,"href",r),ne(o),Se(()=>q(l,"aria-label",n().ariaLinkLabel)),H(e,o),At(a)}Yt(Aa,{strings:{}},[],[],{mode:"open"});var zs=le('<div class="altcha-footer"><p></p> <!></div>');function Ra(e,t){Tt(t,!0);let n=se(t,"logo"),r=se(t,"strings");var a={get logo(){return n()},set logo(u){n(u),ee()},get strings(){return r()},set strings(u){r(u),ee()}},o=zs(),l=ue(o);io(l,()=>r().footer,!0),ne(l);var s=oe(l,2);{var f=u=>{Aa(u,{get strings(){return r()}})};me(s,u=>{n()&&u(f)})}return ne(o),H(e,o),At(a)}Yt(Ra,{logo:{},strings:{}},[],[],{mode:"open"});var Bs=le('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');function mo(e,t){Tt(t,!0);let n=se(t,"loading"),r=Lr(t,["$$slots","$$events","$$legacy","$$host","loading"]),a;function o(){a==null||a.click()}var l={get loading(){return n()},set loading(v){n(v),ee()}},s=Bs(),f=ue(s);Pr(f,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Kt(f,v=>a=v,()=>a);var u=oe(f,2);return ne(s),Se(()=>q(s,"data-loading",n())),Tr("click",u,o),H(e,s),At(l)}Ar(["click"]),Yt(mo,{loading:{}},[],[],{mode:"open"});var Ee=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(Ee||{}),G=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(G||{}),Hs=le('<div class="altcha-code-challenge-title"> </div>'),Ks=le('<div class="altcha-spinner"></div>'),Ys=ma('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),Gs=ma('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),Ws=ma('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),qs=le('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),Zs=le('<audio hidden="" autoplay=""></audio>'),Js=le('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');function yo(e,t){Tt(t,!0);let n=se(t,"audioUrl"),r=se(t,"codeChallenge"),a=se(t,"config"),o=se(t,"imageUrl"),l=se(t,"onCancel"),s=se(t,"onReload"),f=se(t,"onSubmit"),u=se(t,"strings"),v=j(void 0),p=j(void 0),d=j(void 0),b=j(!1),m=j(""),x=j(!1);wa(()=>(a().disableAutoFocus||ln().then(()=>{var k;(k=i(d))==null||k.focus()}),()=>{i(p)&&(i(p).pause(),E(p,void 0))}));function P(){E(v,Ee.PAUSED,!0)}function T(k){E(v,Ee.ERROR,!0)}function X(){E(v,Ee.READY,!0)}function fe(){E(v,Ee.LOADING,!0)}function K(){E(v,Ee.PLAYING,!0)}function Ce(){E(v,Ee.PAUSED,!0)}function Y(k){var J;k.code==="Space"?(k.preventDefault(),k.stopPropagation(),ae()):k.code==="Escape"&&(k.preventDefault(),k.stopPropagation(),(J=l())==null||J())}function $(k){var J;k.preventDefault(),k.stopPropagation(),(J=f())==null||J(i(m))}function ae(){i(p)?i(v)===Ee.LOADING||(i(p).paused?(n()&&i(p).src!==n()&&(i(p).src=n()),i(p).currentTime=0,i(p).play()):i(p).pause()):(E(x,!0),requestAnimationFrame(()=>{i(p)&&n()&&(i(p).src=n(),i(p).play())}))}var Pe={get audioUrl(){return n()},set audioUrl(k){n(k),ee()},get codeChallenge(){return r()},set codeChallenge(k){r(k),ee()},get config(){return a()},set config(k){a(k),ee()},get imageUrl(){return o()},set imageUrl(k){o(k),ee()},get onCancel(){return l()},set onCancel(k){l(k),ee()},get onReload(){return s()},set onReload(k){s(k),ee()},get onSubmit(){return f()},set onSubmit(k){f(k),ee()},get strings(){return u()},set strings(k){u(k),ee()}},D=Js(),pe=ue(D),kt=ue(pe);{var Ye=k=>{var J=Hs(),gn=ue(J,!0);ne(J),Se(()=>yt(gn,u().verificationRequired)),H(k,J)};me(kt,k=>{a().codeChallengeDisplay!=="standard"&&k(Ye)})}var Ne=oe(kt,2),he=ue(Ne,!0);ne(Ne);var xt=oe(Ne,2),S=oe(xt,2),Q=ue(S);Ea(Q),Q.disabled=i(b),Kt(Q,k=>E(d,k),()=>i(d));var $e=oe(Q,2);{var y=k=>{var J=qs(),gn=ue(J);{var Da=Ue=>{var Et=Ks();H(Ue,Et)},ur=Ue=>{var Et=Ys();H(Ue,Et)},Na=Ue=>{var Et=Gs();H(Ue,Et)},Ua=Ue=>{var Et=Ws();H(Ue,Et)};me(gn,Ue=>{i(v)===Ee.LOADING?Ue(Da):i(v)===Ee.ERROR?Ue(ur,1):i(v)===Ee.PLAYING?Ue(Na,2):Ue(Ua,-1)})}ne(J),Se(()=>{q(J,"title",u().getAudioChallenge),J.disabled=i(v)===Ee.LOADING||i(v)===Ee.ERROR,q(J,"aria-label",i(v)===Ee.LOADING?u().loading:u().getAudioChallenge)}),be("click",J,()=>ae(),!0),H(k,J)};me($e,k=>{r().audio&&k(y)})}var vn=oe($e,2);ne(S);var Fr=oe(S,2),tt=ue(Fr),Ma=ue(tt,!0);ne(tt);var pn=oe(tt,2),lr=ue(pn,!0);ne(pn),ne(Fr),ne(pe);var sr=oe(pe,2);{var cr=k=>{var J=Zs();Kt(J,gn=>E(p,gn),()=>i(p)),be("error",J,T),be("loadstart",J,fe),be("canplay",J,X),be("pause",J,Ce),be("playing",J,K),be("ended",J,P),H(k,J)};me(sr,k=>{i(x)&&k(cr)})}return ne(D),Se(()=>{yt(he,u().enterCodeFromImage),q(xt,"src",o()),q(Q,"minlength",r().length||1),q(Q,"maxlength",r().length),q(Q,"placeholder",u().enterCode),q(Q,"aria-label",i(v)===Ee.LOADING?u().loading:i(v)===Ee.PLAYING?"":u().enterCodeAria),q(Q,"aria-live",i(v)?"assertive":"polite"),q(Q,"aria-busy",i(v)===Ee.LOADING),q(vn,"title",u().reload),q(vn,"aria-label",u().reload),q(tt,"aria-label",u().verify),yt(Ma,u().verify),q(pn,"aria-label",u().cancel),yt(lr,u().cancel)}),be("submit",pe,$,!0),Tr("keydown",Q,Y),Ls(Q,()=>i(m),k=>E(m,k)),be("click",vn,()=>{var k;return(k=s())==null?void 0:k()},!0),be("click",pn,()=>{var k;return(k=l())==null?void 0:k()},!0),H(e,D),At(Pe)}Ar(["keydown"]),Yt(yo,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});var Xs=le('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),Qs=le('<div class="altcha-popover-arrow"></div>'),ec=le('<div role="button" class="altcha-popover-close">&times;</div>'),tc=le('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);function Ia(e,t){Tt(t,!0);let n=se(t,"anchor"),r=se(t,"children"),a=se(t,"display",7,"standard"),o=se(t,"backdrop",7,!1),l=se(t,"onClickOutside"),s=se(t,"onClickOutsideDelay",7,600),f=se(t,"onClose"),u=se(t,"placement",7,"auto"),v=se(t,"updateUISignal"),p=se(t,"variant",7,"neutral"),d=Lr(t,["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","updateUISignal","variant"]),b=j(void 0),m=j(void 0),x=j(!1),P=j(0);je(()=>{u()!=="auto"&&E(x,u()==="top")}),je(()=>{v()&&Ce()}),wa(()=>{const S=a()==="bottomsheet"||a()==="overlay";return S&&(i(m)&&document.body.append(i(m)),i(b)&&document.body.append(i(b))),Ce(),ln().then(()=>{E(P,Date.now(),!0)}),()=>{S&&(i(m)&&document.body.removeChild(i(m)),i(b)&&document.body.removeChild(i(b)))}});function T(){var S;(S=f())==null||S()}function X(S){var $e,y;const Q=S.target;!(($e=i(b))!=null&&$e.contains(Q))&&(!s()||i(P)+s()<Date.now())&&((y=l())==null||y())}function fe(){Ce()}function K(){Ce()}function Ce(){if(n()&&u()==="auto"&&i(b)){const S=n().getBoundingClientRect(),$e=document.documentElement.clientHeight-(S.top+S.height)<i(b).clientHeight;i(x)!==$e&&E(x,$e)}}var Y={get anchor(){return n()},set anchor(S){n(S),ee()},get children(){return r()},set children(S){r(S),ee()},get display(){return a()},set display(S="standard"){a(S),ee()},get backdrop(){return o()},set backdrop(S=!1){o(S),ee()},get onClickOutside(){return l()},set onClickOutside(S){l(S),ee()},get onClickOutsideDelay(){return s()},set onClickOutsideDelay(S=600){s(S),ee()},get onClose(){return f()},set onClose(S){f(S),ee()},get placement(){return u()},set placement(S="auto"){u(S),ee()},get updateUISignal(){return v()},set updateUISignal(S){v(S),ee()},get variant(){return p()},set variant(S="neutral"){p(S),ee()}},$=tc();be("click",nn,X,!0),be("resize",nn,fe),be("scroll",nn,K);var ae=kn($);{var Pe=S=>{var Q=Xs();Kt(Q,$e=>E(m,$e),()=>i(m)),H(S,Q)};me(ae,S=>{o()&&S(Pe)})}var D=oe(ae,2);Pr(D,()=>({...d,class:`altcha-popover ${(t.class||"")??""}`,"data-popover":!0,"data-variant":p(),"data-top":i(x),"data-display":a()}));var pe=ue(D);{var kt=S=>{var Q=Qs();H(S,Q)};me(pe,S=>{a()==="standard"&&S(kt)})}var Ye=oe(pe,2);{var Ne=S=>{var Q=ec();be("click",Q,T,!0),H(S,Q)};me(Ye,S=>{a()!=="standard"&&S(Ne)})}var he=oe(Ye,2),xt=ue(he);return vs(xt,()=>r()??Ft),ne(he),ne(D),Kt(D,S=>E(b,S),()=>i(b)),H(e,$),At(Y)}Yt(Ia,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:"open"});function nc(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function rc(e,t="altcha-css",n){var r,a;if(typeof document<"u"&&document&&!document.getElementById(t)){const o=document.createElement("style");o.id=t,o.textContent=e;const l=((r=document.currentScript)==null?void 0:r.nonce)??((a=document.querySelector('meta[name="csp-nonce"]'))==null?void 0:a.content);l&&(o.nonce=l),document.head.appendChild(o)}}async function wo(e){var d;const{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:a,onOutOfMemory:o=b=>b>1?Math.floor(b/2):0,counterMode:l,timeout:s=9e4}=e,f=Math.min(16,Math.max(1,n)),u=[],v=()=>{for(const b of u)b.terminate()};for(let b=0;b<f;b++)u.push(await a(t.parameters.algorithm));let p=null;try{p=await Promise.race(u.map((b,m)=>(r.signal.addEventListener("abort",()=>{b.postMessage({type:"abort"})}),new Promise((x,P)=>{b.addEventListener("error",T=>{P(T)}),b.addEventListener("message",T=>{if(T.data){for(const X of u)X!==b&&X.postMessage({type:"abort"});if(T.data.error)return P(new Error(T.data.error))}x(T.data)}),b.postMessage({challenge:t,counterMode:l,counterStart:m,counterStep:f,timeout:s,type:"work"})}))))}catch(b){if(b instanceof Error&&!!((d=b==null?void 0:b.message)!=null&&d.includes("Out of memory"))&&o){v();const x=o(f);if(x)return wo({...e,challenge:t,controller:r,concurrency:x,createWorker:a})}throw b}finally{v()}return r.signal.aborted?null:p||null}class ac{constructor(t={}){R(this,"TAG_CODES",{INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10});R(this,"maxSamples");R(this,"sampleInterval");R(this,"target");R(this,"focusStartTime",0);R(this,"focusInteraction",0);R(this,"focusInteractionTimer",null);R(this,"lastPointerSample",0);R(this,"lastTouchSample",0);R(this,"lastScrollSample",0);R(this,"pendingPointer",null);R(this,"pendingTouch",null);R(this,"focus",[]);R(this,"pointer",[]);R(this,"scroll",[]);R(this,"touch",[]);R(this,"onFocus",t=>{if(this.focusInteraction===2)return;const n=t.target;if(!(n instanceof Element))return;const r=performance.now();this.focusStartTime===0&&(this.focusStartTime=r),this.focus.push([Math.round(r-this.focusStartTime),n.tabIndex,this.TAG_CODES[n.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus)});R(this,"onInteraction",t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)});R(this,"onPointer",t=>{if(t.pointerType==="touch")return;const n=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(n)],n-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=n,this.pendingPointer=null,this.evict(this.pointer))});R(this,"onScroll",()=>{const t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))});R(this,"onTouchMove",t=>{const n=t.timeStamp||performance.now(),r=t.touches[0];r&&(this.pendingTouch=[Math.round(r.clientX),Math.round(r.clientY),Math.round(n),Math.round(r.force*1e3)/1e3,Math.round(r.radiusX||0),Math.round(r.radiusY||0)],n-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=n,this.pendingTouch=null,this.evict(this.touch)))});const{maxSamples:n=60,sampleInterval:r=50,target:a=window}=t;this.maxSamples=n,this.sampleInterval=r,this.target=a,this.attach()}destroy(){const t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){const t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}}var ic=le('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),oc=le('<div class="altcha-overlay-content"></div>'),lc=le('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),sc=le('<div class="altcha-floating-arrow"></div>'),cc=le('<input type="hidden"/>'),uc=le('<div class="altcha-error">Secure context (HTTPS) required.</div>'),fc=le('<div class="altcha-error"> </div>'),hc=le('<div class="altcha-error"> </div>'),dc=le("<!> <!>",1),vc=le('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);function pc(e,t){Tt(t,!0);const n=()=>yi(v,"$altchaDefaults",a),r=()=>yi(m,"$altchaI18nStore",a),[a,o]=Ol(),l='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',s='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',f=["ar","fa","he","ur"],{isSecureContext:u}=globalThis,{store:v}=globalThis.$altcha.defaults,p=navigator.hardwareConcurrency||2,d=navigator.deviceMemory||0,b=d&&d<=4?Math.min(4,p):p,m=globalThis.$altcha.i18n.store,x=t.$$host,P=(c,g)=>{ln().then(()=>{x==null||x.dispatchEvent(new CustomEvent(c,{detail:g}))})};let T=null,X=j(It(new URL(location.origin))),fe=j(!1),K=j(null),Ce=j(null),Y=j(null),$=j(It(G.UNVERIFIED)),ae=j(void 0),Pe=j(void 0),D=j(null),pe=j(void 0),kt=j(null),Ye=j(null),Ne=j(null),he=j(null),xt=j(It([])),S=j(0),Q=j(It({})),$e=j(!0);const y=Ie(()=>({fetch:(c,g)=>fetch(c,g),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:b,...n(),...i(Q)})),vn=Ie(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),Fr=Ie(()=>mc(i(y).type)),tt=Ie(()=>i(y).auto),Ma=Ie(()=>i($)===G.VERIFYING),pn=Ie(()=>!i(y).hideFooter),lr=Ie(()=>!i(y).hideLogo&&i(y).display!=="bar"),sr=Ie(()=>yc(r(),[i(y).language,document.documentElement.lang,...navigator.languages])),cr=Ie(()=>f.includes(i(sr).language)?"rtl":void 0),k=Ie(()=>({...i(sr).strings})),J=Ie(()=>{var c,g,_;return(g=(c=i(K))==null?void 0:c.audio)!=null&&g.match(/^(https?:)?\//)?Vr(i(K).audio,i(X),{language:i(y).audioChallengeLanguage||i(sr).language}).toString():(_=i(K))==null?void 0:_.audio}),gn=Ie(()=>{var c,g,_;return(g=(c=i(K))==null?void 0:c.image)!=null&&g.match(/^(https?:)?\//)?Vr(i(K).image,i(X)):(_=i(K))==null?void 0:_.image});je(()=>{fr({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),je(()=>{if(t.configuration)try{fr(JSON.parse(t.configuration))}catch{te("unable to parse the `configuration` attribute (JSON expected)")}}),je(()=>{i(Y)!==i(y).display&&jr(i(y).display)}),je(()=>{i(fe)&&i($)===G.VERIFYING&&E(fe,!1)}),je(()=>{!i(fe)&&i($)===G.VERIFIED&&E(fe,!0)}),je(()=>{if(!i(fe)){const c=Fa();c&&c.checked&&(c.checked=!1)}}),je(()=>{var c;i($)===G.VERIFIED&&((c=Fa())==null||c.setCustomValidity(""))}),je(()=>{if(i(tt)==="onload"){const c=setTimeout(()=>{Ln()},1);return()=>{c&&clearTimeout(c)}}}),je(()=>{i(Ye)&&te("error:",i(Ye))}),je(()=>{i(he)&&i(y).setCookie&&Pc(i(he),i(y).setCookie)}),wa(()=>{var c,g,_,w;return te("mounted","3.0.11"),x&&globalThis.$altcha.instances.add(x),E(D,(c=i(pe))==null?void 0:c.closest("form"),!0),(g=i(D))==null||g.addEventListener("reset",Ro),(_=i(D))==null||_.addEventListener("submit",Io,{capture:!0}),(w=i(D))==null||w.addEventListener("focusin",Ao),Da(),i(y).humanInteractionSignature&&(te("human interaction signature enabled"),T=new ac),P("load"),u||te("secure context (HTTPS) required"),()=>{var O,A,F;Na(),x&&globalThis.$altcha.instances.delete(x),i(Ne)&&clearTimeout(i(Ne)),(O=i(D))==null||O.removeEventListener("reset",Ro),(A=i(D))==null||A.removeEventListener("submit",Io,{capture:!0}),(F=i(D))==null||F.removeEventListener("focusin",Ao),T==null||T.destroy()}});function Da(){E(xt,[...globalThis.$altcha.plugins].map(c=>new c(x)),!0),te("activating plugins",i(xt).map(c=>c.constructor.name));for(const c of i(xt))c.activate()}async function ur(c,...g){let _;for(const w of i(xt))_=await w[c].call(w,...g);return _}function Na(){for(const c of i(xt))c.destroy()}function Ua(c){const[g,_]=c.salt.split("?"),w={};if(_)try{Object.assign(w,Object.fromEntries(new URLSearchParams(_).entries()))}catch{}const O={codeChallenge:c.codeChallenge,parameters:{algorithm:c.algorithm,cost:1,data:w,expiresAt:w!=null&&w.expires?parseInt(w.expires,10):void 0,keyLength:c.algorithm==="SHA-512"?64:c.algorithm==="SHA-384"?48:32,nonce:nc(new TextEncoder().encode(c.salt)),keyPrefix:c.challenge,salt:""},signature:c.signature};return Object.defineProperties(O,{_originalSalt:{enumerable:!1,value:c.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),O}function Ue(c,g){return{algorithm:c.parameters.algorithm,challenge:c.parameters.keyPrefix,number:g.counter,salt:"_originalSalt"in c?c._originalSalt:c.parameters.nonce,signature:c.signature,took:g.time||0}}async function Et(c){await new Promise(g=>setTimeout(g,c))}async function To(c=i(y).challenge,g){const _=await ur("onFetchChallenge",c);let w=null;if(_!==void 0)return _;if(typeof c=="string")if(c.startsWith("{")){te("parsing JSON challenge");try{w=JSON.parse(c)}catch{throw new Error("Unable to parse JSON challenge.")}}else{te("fetching challenge from",(g==null?void 0:g.method)||"GET",c),E(X,new URL(c,location.origin),!0);const O=await i(y).fetch(c,{credentials:i(y).credentials||void 0,...g});await Po(O);const A=O.headers.get("x-altcha-config");A&&Rc(A);const F=await O.json();if(F&&"his"in F&&F.his){if(te("requested HIS"),!T)throw new Error("Server requested HIS data but collector is disabled.");return To(Vr(F.his.url,i(X)),{body:JSON.stringify({his:T.export()}),headers:{"content-type":"application/json"},method:"POST"})}F&&"hisResult"in F&&F.hisResult&&te("HIS result",F.hisResult),w=F}else if(c&&typeof c=="object")try{w=JSON.parse(JSON.stringify(c))}catch{throw new Error("Unable to parse JSON challenge.")}if(gc(w)&&(w=Ua(w)),!bc(w))throw new Error("Challenge validation failed.");return w}function gc(c){return typeof c=="object"&&"challenge"in c}function bc(c){return!!c&&typeof c=="object"&&"parameters"in c&&!!c.parameters&&typeof c.parameters=="object"&&"algorithm"in c.parameters&&"nonce"in c.parameters&&"salt"in c.parameters&&"keyPrefix"in c.parameters}function Fa(){return document.getElementById(i(vn))}function mc(c){switch(c){case"checkbox":return go;case"switch":return mo;case"native":default:return bo}}function yc(c,g){const _=Object.keys(c).map(O=>O.toLowerCase());let w=g.reduce((O,A)=>(A=A.toLowerCase(),O||(c[A]?A:null)||_.find(F=>A.split("-")[0]===F.split("-")[0])||null),null);return c[w||""]||(w="en"),{language:w,strings:c[w]}}function wc(c){switch(c){case"bar":return i(y).barPlacement||"bottom";case"floating":return i(y).floatingPlacement||"auto";default:return}}function _c(c){var _;return[...((_=i(D))==null?void 0:_.querySelectorAll(l))||[]].reduce((w,O)=>{const A=O.name,F=O.value;return A&&F&&(w[A]=/\n/.test(F)?F.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):F),w},{})}function kc(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Vr(c,g,_){const w=new URL(c,g);if(w.search||(w.search=g.search),_)for(const O in _)_[O]!==void 0&&_[O]!==null&&w.searchParams.set(O,_[O]);return w.toString()}function xc(c){!i(fe)&&c.currentTarget.checked?(c.preventDefault(),c.currentTarget.checked=!1,i($)!==G.VERIFYING&&Ln()):c.currentTarget.checked||(c.preventDefault(),nt())}function Ec(c){i($)===G.VERIFYING?c.currentTarget.setCustomValidity(i(k).waitAlert):i(y).validationMessage&&c.currentTarget.setCustomValidity(i(y).validationMessage)}function Sc(){jr(i(y).display),nt()}function Cc(){zr()}function $c(c){const g=c.target;i(y).display==="floating"&&g&&!(x!=null&&x.contains(g))&&!g.hasAttribute("data-backdrop")&&!g.closest("[data-popover]")&&i($)!==G.VERIFIED&&!i(y).floatingPersist&&Va()}function Ao(c){i(tt)==="onfocus"&&i($)===G.UNVERIFIED&&Ln()}function Ro(){jr(i(y).display),nt()}function Io(c){const g=c.target;(g==null?void 0:g.getAttribute("data-code-challenge"))!=="true"&&i(tt)==="onsubmit"&&i($)===G.UNVERIFIED&&(c.preventDefault(),c.stopPropagation(),E(kt,c.submitter,!0),ja(),Ln().then(_=>{_&&!i(K)&&ln().then(()=>{Oo(i(kt))})}))}function Tc(c){c.persisted&&(jr(i(y).display),nt())}function Ac(){zr()}function Rc(c){var g,_;try{const w=JSON.parse(c);w&&typeof w=="object"&&fr({serverVerificationFields:(g=w==null?void 0:w.sentinel)==null?void 0:g.fields,serverVerificationTimeZone:(_=w==null?void 0:w.sentinel)==null?void 0:_.timeZone,verifyUrl:w.verifyurl,...w})}catch(w){te("unable to configure from x-altcha-config header",w)}}function Ic(c=20){var we;if(!i(pe))return;const g=i(y).floatingPlacement;if(!i(Pe)&&(E(Pe,(i(y).floatingAnchor instanceof HTMLElement?i(y).floatingAnchor:i(y).floatingAnchor?document.querySelector(i(y).floatingAnchor):(we=i(D))==null?void 0:we.querySelector(s))||i(D),!0),!i(Pe))){te("unable to find floating anchor element");return}const _=parseInt(i(y).floatingOffset,10)||12,w=i(Pe).getBoundingClientRect(),O=i(pe).getBoundingClientRect(),A=document.documentElement.clientHeight,F=document.documentElement.clientWidth,Te=!g||g==="auto"?w.bottom+O.height+_+c>A:g==="top",ie=Math.max(c,Math.min(F-c-O.width,w.left+w.width/2-O.width/2));if(i(pe).style.setProperty("--altcha-floating-left",`${ie}px`),i(pe).style.setProperty("--altcha-floating-top",Te?`${w.top-(O.height+_)}px`:`${w.bottom+_}px`),i(pe).setAttribute("data-floating-position",Te?"top":"bottom"),i(ae)){const Ct=i(ae).getBoundingClientRect();i(ae).style.left=w.left-ie+w.width/2-Ct.width/2+"px"}}async function Oc(c,g){const _=await ur("onRequestServerVerification",c,g);if(_!==void 0)return _;if(te("requesting server verification from",i(y).verifyUrl),!i(y).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");const w=await i(y).fetch(Vr(i(y).verifyUrl,i(X)),{body:JSON.stringify({code:g,fields:i(y).serverVerificationFields?_c():void 0,payload:c,timeZone:i(y).serverVerificationTimeZone?kc():void 0}),credentials:i(y).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await Po(w);const O=await w.json();return O&&typeof O=="object"&&"payload"in O&&O.payload&&P("serververification",O),O}function Oo(c){var g;i(D)&&"requestSubmit"in i(D)?i(D).requestSubmit(c):(g=i(D))!=null&&g.reportValidity()&&(c?c.click():i(D).submit())}function Pc(c,g={}){const{domain:_,name:w=i(y).name,maxAge:O,path:A,sameSite:F,secure:Te}=g;let ie=`${encodeURIComponent(w)}=${encodeURIComponent(c)}`;_&&(ie+=`; Domain=${_}`),O!=null&&(ie+=`; Max-Age=${O}`),A&&(ie+=`; Path=${A}`),F&&(ie+=`; SameSite=${F}`),Te&&(ie+="; Secure"),document.cookie=ie}function jr(c){switch(c){case"bar":case"floating":case"overlay":Va(),(!i(tt)||i(tt)==="off")&&(i(Q).auto="onsubmit");break;case"standard":ja()}i(Y)!==c&&E(Y,c,!0)}function Lc(c){i(Ne)&&clearTimeout(i(Ne));const g=()=>{i($)!==G.UNVERIFIED?(E(fe,!1),rt(G.EXPIRED)):nt(),P("expired")},_=c*1e3-Date.now();_>=1?E(Ne,setTimeout(g,_),!0):g()}async function Po(c){var _;if(c.status>=400){if((_=c.headers.get("content-type"))!=null&&_.includes("/json")){let w;try{w=await c.json()}catch{}if(w&&"error"in w)throw new Error(`Server responded with ${c.status} - ${w.error}`)}throw new Error(`Server responded with ${c.status}.`)}const g=c.headers.get("content-type");if(!g||!g.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${g}.`)}async function Lo(c){var _;if(!i(he)){rt(G.ERROR,"Cannot verify code challenge without PoW payload.");return}rt(G.VERIFYING);let g=null;if(i(y).verifyUrl)g=await Oc(i(he),c);else if(i(y).verifyFunction)g=await i(y).verifyFunction(i(he),c);else{rt(G.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}g!=null&&g.payload&&(E(he,g.payload,!0),te("server payload",i(he))),(g==null?void 0:g.verified)===!0?(te("verified"),rt(G.VERIFIED),P("verified",{payload:i(he)}),i(tt)==="onsubmit"&&ln().then(()=>{Oo(i(kt))})):rt(G.ERROR,(g==null?void 0:g.reason)||"Verification failed."),i(y).disableAutoFocus||(_=Fa())==null||_.focus()}function fr(c){Object.assign(i(Q),{...Object.fromEntries(Object.entries(c).filter(([g,_])=>_!==void 0))})}function Mc(){return{...i(y)}}function Dc(){return i($)}function Va(){E($e,!1)}function te(...c){(i(y).debug||c.some(g=>g instanceof Error))&&console[c[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${i(y).name}]`,...c)}function nt(c=G.UNVERIFIED,g=null){E(fe,!1),E(Ye,g,!0),E(he,null),i(Ce)&&i(Ce).abort(),i(Ne)&&(clearTimeout(i(Ne)),E(Ne,null)),rt(c)}function rt(c,g=null){E($,c,!0),E(Ye,g,!0),P("statechange",{payload:i(he),state:i($)})}function ja(){E($e,!0),ln().then(()=>{zr()})}function zr(){switch(i(y).display){case"floating":return Ic()}E(S,i(S)+1)}async function Ln(c={}){var we,Ct;const{concurrency:g=Math.max(1,i(y).workers),controller:_=new AbortController,minDuration:w=i(y).minDuration}=c,O=performance.now();let A=null,F=null,Te=!1;const ie=await ur("onVerify",c);if(ie!==void 0)return ie;nt(G.VERIFYING),E(Ce,_,!0);try{if(!u)throw new Error("Secure context (HTTPS) required.");if(i(y).mockError)throw new Error("Mock error.");if(i(y).test)return te("running test mode with null challenge"),await Et(Math.max(0,w-(performance.now()-O))),(we=i(Ce))!=null&&we.signal.aborted?(nt(),null):(E(he,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),te("verified"),rt(G.VERIFIED),P("verified",{payload:i(he)}),{payload:i(he)});if(A=await To(),!A)throw new Error("Failed to fetch challenge.");te("challenge",A),"configuration"in A&&(te("re-configuring from challenge",A.configuration),fr(A.configuration)),A.parameters.expiresAt&&Lc(A.parameters.expiresAt),Te="_version"in A&&A._version===1;const ft=globalThis.$altcha.algorithms.get(A.parameters.algorithm);if(!ft)throw new Error(`Unsupported algorithm ${A.parameters.algorithm}.`);if(F=await wo({challenge:A,concurrency:g,controller:_,createWorker:ft,counterMode:Te?"string":"uint32",onOutOfMemory:jo=>{if(te("out of memory error received"),P("outofmemory"),i(y).retryOnOutOfMemoryError&&jo>1){const zo=Math.floor(jo/2);return te(`retrying with ${zo} workers...`),zo}},timeout:i(y).timeout}),(Ct=i(Ce))!=null&&Ct.signal.aborted)return nt(),null;if(!F)throw new Error("Failed to find solution.");te("solution",F),await Et(Math.max(0,w-(performance.now()-O))),E(K,A.codeChallenge||i(y).codeChallenge||null,!0),Te?E(he,btoa(JSON.stringify(Ue(A,F))),!0):E(he,btoa(JSON.stringify({challenge:{parameters:A.parameters,signature:A.signature},solution:F})),!0),i(K)?(te("requesting code verification"),rt(G.CODE),P("codechallenge",{codeChallenge:i(K)})):i(y).verifyUrl?await Lo():(te("verified"),rt(G.VERIFIED),P("verified",{payload:i(he)}))}catch(ft){return te("verification failed",ft),rt(G.ERROR,String(ft)),null}finally{E(Ce,null)}return{challenge:A,payload:i(he),solution:F}}var Nc={configure:fr,getConfiguration:Mc,getState:Dc,hide:Va,log:te,reset:nt,setState:rt,show:ja,updateUI:zr,verify:Ln},Mo=vc();be("scroll",ea,Cc),be("click",ea,$c),be("pageshow",nn,Tc),be("resize",nn,Ac);var Do=kn(Mo);{var Uc=c=>{var g=ic();H(c,g)};me(Do,c=>{i(y).display==="overlay"&&i($e)&&c(Uc)})}var St=oe(Do,2),No=ue(St);{var Fc=c=>{var g=lc(),_=kn(g),w=oe(_,2);{var O=A=>{var F=oc();io(F,()=>{var Te;return(Te=document.querySelector(i(y).overlayContent))==null?void 0:Te.innerHTML},!0),ne(F),H(A,F)};me(w,A=>{i(y).overlayContent&&A(O)})}be("click",_,Sc,!0),H(c,g)};me(No,c=>{i(y).display==="overlay"&&i($e)&&c(Fc)})}var za=oe(No,2),Ba=ue(za),Ha=ue(Ba),Uo=ue(Ha);{let c=Ie(()=>i(y).display==="standard"&&i(tt)!=="onsubmit"||i($)===G.VERIFYING);bs(Uo,()=>i(Fr),(g,_)=>{_(g,{get id(){return i(vn)},name:"",get required(){return i(c)},get loading(){return i(Ma)},get checked(){return i(fe)},onchange:xc,oninvalid:Ec})})}var Ka=oe(Uo,2),Vc=ue(Ka);{var jc=c=>{var g=Rr();Se(()=>yt(g,i(k).verificationRequired)),H(c,g)},zc=c=>{var g=Rr();Se(()=>yt(g,i(k).verifying)),H(c,g)},Bc=c=>{var g=Rr();Se(()=>yt(g,i(k).verified)),H(c,g)},Hc=c=>{var g=Rr();Se(()=>yt(g,i(k).label)),H(c,g)};me(Vc,c=>{i($)===G.CODE&&i(K)?c(jc):i($)===G.VERIFYING?c(zc,1):i($)===G.VERIFIED?c(Bc,2):c(Hc,-1)})}ne(Ka),ne(Ha);var Kc=oe(Ha,2);{var Yc=c=>{Aa(c,{get strings(){return i(k)}})};me(Kc,c=>{i(lr)&&c(Yc)})}ne(Ba);var Fo=oe(Ba,2);{var Gc=c=>{{let g=Ie(()=>i(y).display==="bar"&&i(lr));Ra(c,{get logo(){return i(g)},get strings(){return i(k)}})}};me(Fo,c=>{i(pn)&&c(Gc)})}var Vo=oe(Fo,2);{var Wc=c=>{var g=sc();Kt(g,_=>E(ae,_),()=>i(ae)),H(c,g)};me(Vo,c=>{i(y).display==="floating"&&c(Wc)})}var qc=oe(Vo,2);{var Zc=c=>{var g=cc();Ea(g),Se(()=>{q(g,"name",i(y).name),Is(g,i(he))}),H(c,g)};me(qc,c=>{i(y).setCookie||c(Zc)})}ne(za);var Jc=oe(za,2);{var Xc=c=>{Ia(c,{get anchor(){return i(pe)},onClickOutside:()=>{u&&nt()},get placement(){return i(y).popoverPlacement},role:"alert",variant:"error",get dir(){return i(cr)},get updateUISignal(){return i(S)},children:(g,_)=>{var w=no(),O=kn(w);{var A=ie=>{var we=uc();H(ie,we)},F=ie=>{var we=fc(),Ct=ue(we,!0);ne(we),Se(()=>yt(Ct,i(k).expired)),H(ie,we)},Te=ie=>{var we=hc(),Ct=ue(we,!0);ne(we),Se(()=>{q(we,"title",i(Ye)),yt(Ct,i(k).error)}),H(ie,we)};me(O,ie=>{!i(Ye)&&!u?ie(A):!i(Ye)&&i($)===G.EXPIRED?ie(F,1):ie(Te,-1)})}H(g,w)},$$slots:{default:!0}})},Qc=c=>{var g=no(),_=kn(g);gs(_,()=>i(K),w=>{{let O=Ie(()=>i(y).codeChallengeDisplay!=="standard");Ia(w,{get anchor(){return i(pe)},get backdrop(){return i(O)},get display(){return i(y).codeChallengeDisplay},onClose:()=>{nt()},get placement(){return i(y).popoverPlacement},role:"dialog",get"aria-label"(){return i(k).verificationRequired},get dir(){return i(cr)},get updateUISignal(){return i(S)},children:(A,F)=>{var Te=dc(),ie=kn(Te);yo(ie,{get audioUrl(){return i(J)},get imageUrl(){return i(gn)},onCancel:()=>nt(),onReload:()=>Ln(),onSubmit:ft=>Lo(ft),get codeChallenge(){return i(K)},get config(){return i(y)},get strings(){return i(k)}});var we=oe(ie,2);{var Ct=ft=>{Ra(ft,{get logo(){return i(lr)},get strings(){return i(k)}})};me(we,ft=>{i(pn)&&i(y).codeChallengeDisplay!=="standard"&&ft(Ct)})}H(A,Te)},$$slots:{default:!0}})}}),H(c,g)};me(Jc,c=>{i(Ye)||i($)===G.EXPIRED||!u?c(Xc):i(K)&&i($)===G.CODE&&c(Qc,1)})}ne(St),Kt(St,c=>E(pe,c),()=>i(pe)),Se(c=>{q(St,"data-state",i($)),q(St,"data-display",i(y).display||void 0),q(St,"data-placement",c),q(St,"data-visible",i($e)||void 0),q(St,"dir",i(cr)),q(Ka,"for",i(vn)),St.dir=St.dir},[()=>wc(i(y).display)]),H(e,Mo);var eu=At(Nc);return o(),eu}typeof window<"u"&&window.customElements&&!customElements.get("altcha-widget")&&customElements.define("altcha-widget",Yt(pc,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));const _o=`(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  function getDigest(algorithm) {
    switch (algorithm) {
      case "PBKDF2/SHA-512":
        return "SHA-512";
      case "PBKDF2/SHA-384":
        return "SHA-384";
      case "PBKDF2/SHA-256":
      default:
        return "SHA-256";
    }
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, cost, keyLength = 32 } = parameters;
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      password,
      { name: "PBKDF2" },
      false,
      ["deriveKey"]
    );
    const derivedKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: cost,
        hash: getDigest(algorithm)
      },
      passwordKey,
      { name: "AES-GCM", length: keyLength * 8 },
      true,
      ["encrypt"]
    );
    return {
      derivedKey: new Uint8Array(await crypto.subtle.exportKey("raw", derivedKey))
    };
  }
  handler({
    deriveKey
  });
})();
`,ko=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",_o],{type:"text/javascript;charset=utf-8"});function Oa(e){let t;try{if(t=ko&&(self.URL||self.webkitURL).createObjectURL(ko),!t)throw"";const n=new Worker(t,{name:e==null?void 0:e.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(_o),{name:e==null?void 0:e.name})}}const xo=`(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, keyLength = 32 } = parameters;
    const iterations = Math.max(1, parameters.cost);
    let data = void 0;
    let derivedKey = void 0;
    for (let i = 0; i < iterations; i++) {
      if (i === 0) {
        data = concatBuffers(salt, password);
      } else {
        data = derivedKey;
      }
      derivedKey = new Uint8Array(
        (await crypto.subtle.digest(algorithm, data)).slice(0, keyLength)
      );
    }
    return {
      parameters: {},
      derivedKey
    };
  }
  handler({
    deriveKey
  });
})();
`,Eo=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",xo],{type:"text/javascript;charset=utf-8"});function Pa(e){let t;try{if(t=Eo&&(self.URL||self.webkitURL).createObjectURL(Eo),!t)throw"";const n=new Worker(t,{name:e==null?void 0:e.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(xo),{name:e==null?void 0:e.name})}}return rc(`:root {
  --altcha-border-color: var(--altcha-color-neutral);
  --altcha-border-width: 1px;
  --altcha-border-radius: 6px;
  --altcha-color-base: light-dark(oklch(100% 0.00011 271.152), oklch(20.904% 0.00002 271.152));
  --altcha-color-base-content: light-dark(
  	oklch(20.904% 0.00002 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-error: oklch(51.284% 0.20527 28.678);
  --altcha-color-error-content: oklch(100% 0.00011 271.152);
  --altcha-color-neutral: light-dark(oklch(83.591% 0.0001 271.152), oklch(46.04% 0.00005 271.152));
  --altcha-color-neutral-content: light-dark(
  	oklch(46.76% 0.00005 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-primary: oklch(40.279% 0.2449 268.131);
  --altcha-color-primary-content: oklch(100% 0.00011 271.152);
  --altcha-color-success: oklch(55.748% 0.18968 142.511);
  --altcha-color-success-content: oklch(100% 0.00011 271.152);
  --altcha-checkbox-border-color: light-dark(
  	oklch(66.494% 0.00233 15.434),
  	oklch(51.028% 0.00006 271.152)
  );
  --altcha-checkbox-border-radius: 5px;
  --altcha-checkbox-border-width: var(--altcha-border-width);
  --altcha-checkbox-outline: 2px solid var(--altcha-checkbox-outline-color);
  --altcha-checkbox-outline-color: -webkit-focus-ring-color;
  --altcha-checkbox-outline-offset: 2px;
  --altcha-checkbox-size: 22px;
  --altcha-checkbox-transition-duration: var(--altcha-transition-duration);
  --altcha-input-background-color: var(--altcha-color-base);
  --altcha-input-border-radius: 3px;
  --altcha-input-border-width: 1px;
  --altcha-input-color: var(--altcha-color-base-content);
  --altcha-max-width: 320px;
  --altcha-padding: 0.75rem;
  --altcha-popover-arrow-size: 6px;
  --altcha-popover-color: var(--altcha-border-color);
  --altcha-shadow: drop-shadow(3px 3px 6px oklch(0% 0 0 / 0.2));
  --altcha-spinner-color: var(--altcha-color-base-content);
  --altcha-switch-background-color: var(--altcha-color-neutral);
  --altcha-switch-border-radius: calc(infinity * 1px);
  --altcha-switch-height: var(--altcha-checkbox-size);
  --altcha-switch-padding: 0.25rem;
  --altcha-switch-width: calc(var(--altcha-checkbox-size) * 1.75);
  --altcha-switch-toggle-border-radius: 100%;
  --altcha-switch-toggle-color: var(--altcha-color-neutral-content);
  --altcha-switch-toggle-size: calc(
  	var(--altcha-switch-height) - calc(var(--altcha-switch-padding) * 2)
  );
  --altcha-transition-duration: 0.6s;
  --altcha-z-index: 99999999;
  --altcha-z-index-popover: 999999999;
}

@supports (-moz-appearance: none) {
  :root {
    --altcha-checkbox-outline-color: var(--altcha-color-primary);
  }
}
.altcha {
  all: revert-layer;
  display: none;
  font-family: inherit;
  font-size: inherit;
  position: relative;
}
.altcha[data-visible] {
  display: block;
}
.altcha-popover, .altcha-popover * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha a, .altcha-popover a {
  color: currentColor;
  text-decoration: none;
}
.altcha a:hover, .altcha-popover a:hover {
  color: currentColor;
}
.altcha-main {
  align-items: start;
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width, 1px) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius, 0);
  color: var(--altcha-color-base-content);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: var(--altcha-padding);
  max-width: var(--altcha-max-width, 100%);
}
.altcha-main > * {
  display: flex;
  width: 100%;
}
.altcha-main > *:first-child {
  flex-grow: 1;
}
.altcha-checkbox-wrap {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 0.5rem;
}
.altcha-checkbox-wrap > * {
  display: flex;
}
.altcha-logo {
  opacity: 0.7;
}
.altcha-footer {
  align-items: center;
  display: flex;
  flex-grow: 1;
  gap: 0.5rem;
  justify-content: flex-end;
  font-size: 0.7rem;
  opacity: 0.7;
}
.altcha-footer p {
  margin: 0;
  padding: 0;
}
.altcha-error {
  font-size: 0.85rem;
}
.altcha-button {
  align-items: center;
  background: var(--altcha-color-primary);
  border: var(--altcha-input-border-width) solid var(--altcha-color-primary);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-color-primary-content);
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  gap: 0.5rem;
  padding: 0.35rem;
}
.altcha-button:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-button > .altcha-spinner, .altcha-button > svg {
  height: 20px;
  width: 20px;
}
.altcha-button-secondary {
  background: transparent;
  border-color: var(--altcha-color-neutral);
  color: var(--altcha-color-neutral-content);
}
.altcha-input {
  background: var(--altcha-input-background-color);
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-input-color);
  flex-grow: 1;
  font-size: 1rem;
  min-width: 0;
  padding: 0.25rem;
  width: auto;
}
.altcha-input:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-spinner {
  animation: altcha-rotate 0.6s linear infinite;
  border-radius: 100%;
  border: var(--altcha-checkbox-border-width) solid var(--altcha-spinner-color);
  border-bottom-color: transparent;
  border-right-color: transparent;
  opacity: 0.7;
}
.altcha-popover {
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius);
  color: var(--altcha-color-base-content);
  filter: var(--altcha-shadow);
  position: absolute;
  left: calc(var(--altcha-padding) / 2);
  max-width: calc(var(--altcha-max-width) - var(--altcha-padding));
  top: calc(var(--altcha-padding) + var(--altcha-checkbox-size) + var(--altcha-popover-arrow-size));
  z-index: var(--altcha-z-index-popover);
}
.altcha-popover-arrow {
  border: var(--altcha-popover-arrow-size) solid transparent;
  border-bottom-color: var(--altcha-popover-color);
  content: "";
  height: 0;
  left: calc(var(--altcha-checkbox-size) / 2);
  position: absolute;
  top: calc(var(--altcha-popover-arrow-size) * -2);
  width: 0;
}
.altcha-popover-content {
  max-height: 100dvh;
  overflow: auto;
  padding: var(--altcha-padding);
}
.altcha-popover[data-top=true][data-display=standard] {
  bottom: calc(100% - (var(--altcha-padding) - var(--altcha-popover-arrow-size)));
  top: auto;
}
.altcha-popover[data-top=true][data-display=standard] .altcha-popover-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-popover-color);
  bottom: calc(var(--altcha-popover-arrow-size) * -2);
  top: auto;
}
.altcha-popover[data-variant=error] {
  --altcha-popover-color: var(--altcha-color-error);
  background-color: var(--altcha-color-error);
  border-color: var(--altcha-color-error);
  color: var(--altcha-color-error-content);
}
.altcha-popover[data-variant=error] .altcha-popover-content {
  padding: calc(var(--altcha-padding) / 1.5) var(--altcha-padding);
}
.altcha-popover[data-display=overlay] {
  animation: altcha-overlay-slidein 0.5s forwards;
  left: 50%;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] {
  animation: altcha-bottomsheet-slideup 0.5s forwards;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  bottom: -100%;
  left: 50%;
  position: fixed;
  top: auto;
  transform: translate(-50%, 0);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] .altcha-popover-content {
  padding-bottom: calc(var(--altcha-padding) * 2);
}
.altcha-popover-backdrop {
  background: var(--altcha-color-base-content);
  bottom: 0;
  left: 0;
  opacity: 0.1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.5s;
  z-index: var(--altcha-z-index);
}
.altcha-popover-close {
  color: var(--altcha-color-base-content);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 1.25rem;
  line-height: 0.95;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1.25rem;
  z-index: var(--altcha-z-index);
}
[dir=rtl] .altcha-popover {
  left: auto;
  right: calc(var(--altcha-padding) / 2);
}
[dir=rtl] .altcha-popover-arrow {
  left: auto;
  right: calc(var(--altcha-checkbox-size) / 2);
}
[dir=rtl] .altcha-popover-close {
  left: 0;
  right: auto;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer, .altcha-popover[data-display=overlay] .altcha-footer {
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 0.5rem;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer svg, .altcha-popover[data-display=overlay] .altcha-footer svg {
  height: 18px;
  width: 18px;
  vertical-align: middle;
}
.altcha-code-challenge > form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.altcha-code-challenge-title {
  font-weight: 600;
}
.altcha-code-challenge-text {
  font-size: 0.85rem;
}
.altcha-code-challenge-image {
  background: white;
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  object-fit: contain;
  height: 50px;
}
.altcha-code-challenge-row {
  display: flex;
  gap: 0.5rem;
}
.altcha-code-challenge-buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: var(--altcha-padding);
  justify-content: space-between;
}
.altcha-code-challenge-buttons button {
  justify-content: center;
  width: 100%;
}
.altcha-checkbox {
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input {
  appearance: none;
  background: var(--altcha-input-background-color);
  border: var(--altcha-checkbox-border-width, 2px) solid var(--altcha-checkbox-border-color);
  border-radius: var(--altcha-checkbox-border-radius);
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input:before {
  border-radius: var(--altcha-checkbox-border-radius);
  content: "";
  width: 100%;
  height: 100%;
  background: var(--altcha-color-neutral);
  display: block;
  transform: scale(0);
}
.altcha-checkbox input:checked {
  background-color: var(--altcha-color-success);
  border-color: var(--altcha-color-success);
}
.altcha-checkbox input:checked::before {
  background-color: var(--altcha-color-success);
  opacity: 0;
  transform: scale(2.2);
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox svg {
  --altcha-radio-svg-size: calc(var(--altcha-checkbox-size) * 0.5);
  --altcha-radio-svg-offset: calc(var(--altcha-checkbox-size) * 0.25);
  fill: none;
  left: var(--altcha-radio-svg-offset);
  height: var(--altcha-radio-svg-size);
  opacity: 0;
  position: absolute;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  top: var(--altcha-radio-svg-offset);
  transform: translate3d(0, 0, 0);
  width: var(--altcha-radio-svg-size);
}
.altcha-checkbox input:checked + svg {
  color: var(--altcha-color-success-content);
  opacity: 1;
  stroke-dashoffset: 0;
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox[data-loading=true] .altcha-checkbox-spinner {
  display: block;
}
.altcha-checkbox-native {
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native input {
  height: var(--altcha-checkbox-size);
  margin: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox-native[data-loading=true] .altcha-checkbox-native-spinner {
  display: block;
}
.altcha-switch {
  align-items: center;
  border-radius: var(--altcha-switch-border-radius);
  background-color: var(--altcha-switch-background-color);
  display: flex;
  height: var(--altcha-switch-height);
  padding: var(--altcha-switch-padding);
  position: relative;
  width: var(--altcha-switch-width);
}
.altcha-switch:focus-within {
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-switch input {
  appearance: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.altcha-switch-toggle {
  align-items: center;
  background-color: var(--altcha-switch-toggle-color);
  border-radius: var(--altcha-switch-toggle-border-radius);
  cursor: pointer;
  display: flex;
  height: var(--altcha-switch-toggle-size);
  justify-content: center;
  left: var(--altcha-switch-padding);
  position: absolute;
  transition: width 150ms ease-out, left 150ms ease-out;
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch-spinner {
  display: none;
  height: var(--altcha-switch-toggle-size);
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch[data-loading=true] {
  pointer-events: none;
}
.altcha-switch[data-loading=true] .altcha-switch-spinner {
  display: block;
}
.altcha-switch[data-loading=true] .altcha-switch-toggle {
  background-color: transparent;
  left: calc(50% - var(--altcha-switch-toggle-size) / 2);
}
[data-state=verified] .altcha-switch {
  --altcha-switch-background-color: var(--altcha-color-success);
}
[data-state=verified] .altcha-switch-toggle {
  background-color: var(--altcha-color-success-content);
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl] .altcha-switch-toggle {
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl][data-state=verified] .altcha-switch-toggle {
  left: var(--altcha-switch-padding);
}
.altcha-floating-arrow {
  border: 6px solid transparent;
  border-bottom-color: var(--altcha-border-color);
  content: "";
  height: 0;
  left: 12px;
  position: absolute;
  top: -12px;
  width: 0;
}
.altcha-overlay-backdrop {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha-overlay-close {
  display: inline-block;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  height: 1rem;
  line-height: 0.85;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1rem;
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] {
  animation: altcha-overlay-slidein var(--altcha-transition-duration) forwards;
  filter: var(--altcha-shadow);
  left: 50%;
  opacity: 0;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating] {
  display: none;
  filter: var(--altcha-shadow);
  left: var(--altcha-floating-left, -100%);
  position: fixed;
  top: var(--altcha-floating-top, -100%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=floating] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating][data-floating-position=top] .altcha-floating-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-border-color);
  bottom: -12px;
  top: auto;
}
.altcha[data-display=floating][data-visible] {
  display: flex;
}
.altcha[data-display=bar] {
  bottom: -100%;
  filter: var(--altcha-shadow);
  left: 0;
  position: fixed;
  right: 0;
  transition: bottom var(--altcha-transition-duration), top var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=bar] .altcha-main {
  align-items: center;
  border-radius: 0;
  border-width: var(--altcha-border-width) 0 0 0;
  flex-direction: row;
  max-width: 100% !important;
}
.altcha[data-display=bar] .altcha-main > * {
  width: auto;
}
.altcha[data-display=bar][data-placement=top] {
  bottom: auto;
  top: -100%;
}
.altcha[data-display=bar][data-placement=top] .altcha-main {
  border-width: 0 0 var(--altcha-border-width) 0;
}
.altcha[data-display=bar][data-placement=bottom]:not([data-state=unverified]) {
  bottom: 0;
}
.altcha[data-display=bar][data-placement=top]:not([data-state=unverified]) {
  top: 0;
}
.altcha[data-display=invisible] {
  display: none;
}

@keyframes altcha-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes altcha-bottomsheet-slideup {
  100% {
    bottom: 0;
  }
}
@keyframes altcha-overlay-slidein {
  100% {
    opacity: 1;
    top: 50%;
  }
}`),$altcha.algorithms.set("SHA-256",()=>new Pa),$altcha.algorithms.set("SHA-384",()=>new Pa),$altcha.algorithms.set("SHA-512",()=>new Pa),$altcha.algorithms.set("PBKDF2/SHA-256",()=>new Oa),$altcha.algorithms.set("PBKDF2/SHA-384",()=>new Oa),$altcha.algorithms.set("PBKDF2/SHA-512",()=>new Oa),Ho}var Jo=ou();const lu=au(Jo),fu=ru({__proto__:null,default:lu},[Jo]);export{fu as a};
