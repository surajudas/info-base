(self.webpackChunkinfo_base=self.webpackChunkinfo_base||[]).push([[783],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),a=r(7067);function o(t,r,s){return a()?(e.exports=o=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o},e.exports.__esModule=!0,e.exports.default=e.exports),o.apply(null,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),s=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),a=r(319),o=r(9713),s=r(7316),c=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),f=r(4983).mdx,p=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,o=s(e,c),l=p(t),d=u.useMemo((function(){if(!r)return null;var e=i({React:u,mdx:f},l),t=Object.keys(e),o=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(o)))}),[r,t]);return u.createElement(d,i({},o))}},4e3:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),a=r(1597),o=r(396);var s=function(){return n.createElement("nav",{className:"mt-6 mb-8"},n.createElement("ul",{className:"flex pl-0"},n.createElement("li",{className:"pr-8 list-none"},n.createElement(a.rU,{to:"/",className:"text-slate-700"},"Home")),n.createElement("li",{className:"pr-8 list-none"},n.createElement(a.rU,{to:"/dummy",className:"text-slate-700"},"About Me")),n.createElement("li",{className:"pr-8 list-none"},n.createElement(a.rU,{to:"/all-pages",className:"text-slate-700"},"All Pages"))))},c=function(e){var t=e.showBanner,c=e.fixFooter,l=e.pageTitle,i=e.children,u=(0,a.K2)("3159585216");return n.createElement("div",{className:"m-auto max-w-[500px] mt-4"},n.createElement("title",null,u.site.siteMetadata.title," - ",l),t?n.createElement("header",{className:"w-72"},n.createElement(o.S,{alt:"Info Base",src:"../images/heading.svg",__imageData:r(6892)}),n.createElement("p",{className:"mt-2 text-center text-slate-600"},"A site to collect my information and sometimes share it")):"",n.createElement(s,null),n.createElement("main",null,n.createElement("h1",{className:"text-teal-700 text-2xl mb-3 font-light"},">",l),i),n.createElement("footer",{className:c?"w-[17.5rem] py-6 bg-white fixed bottom-0":"w-[17rem] pt-24 pb-4 bg-white bottom-0"},n.createElement("p",{className:"block text-center text-gray-600 text-sm"},"©Suraj Das")))}},8536:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(2102),o=r(4e3);t.default=function(e){var t=e.data;return n.createElement(o.Z,{showBanner:!1,fixFooter:!1,pageTitle:t.mdx.frontmatter.title},n.createElement("p",{className:"text-sm text-gray-600"},t.mdx.frontmatter.date),n.createElement("div",{className:"mdx mt-4 flex flex-col flex-nowrap gap-y-3 text-gray-700"},n.createElement(a.MDXRenderer,null,t.mdx.body)))}},6892:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/50a63/heading.svg","srcSet":"/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/145c5/heading.svg 155w,\\n/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/17e4d/heading.svg 310w,\\n/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/50a63/heading.svg 619w","sizes":"(min-width: 619px) 619px, 100vw"},"sources":[{"srcSet":"/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/46a8a/heading.webp 155w,\\n/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/11515/heading.webp 310w,\\n/info-base/static/7fc4dc79daf791ada944e5deeb8089b2/abe99/heading.webp 619w","type":"image/webp","sizes":"(min-width: 619px) 619px, 100vw"}]},"width":619,"height":257}')}}]);
//# sourceMappingURL=component---src-pages-articles-mdx-slug-js-2a083c788ec055492a03.js.map