import{w as i}from"./index.Sqr9V-ww.js";import{g as s}from"./scheduler.BYFkvuIw.js";const l=i(!1),f=i(null),n=i([]),c=i(null);function u(o=1){var a,r;const e=s(n).length,t=s(n)[e-1];return s(f)||(a=t==null?void 0:t.callbacks)!=null&&a.onBeforeClose&&((r=t==null?void 0:t.callbacks)==null?void 0:r.onBeforeClose())===!1?!1:(s(l)&&e>0&&f.set(!0),l.set(!1),c.set("pop"),p(o),!0)}function h(){return u(1)}function d(o,e,t){s(f)||(c.set("push"),s(l)&&s(n).length&&f.set(!0),l.set(!1),n.update(a=>[...a,{component:o,props:e}]))}function p(o=1){n.update(e=>e.slice(0,Math.max(0,e.length-o)))}export{h as c,l as e,n as m,d as o,f as t};
