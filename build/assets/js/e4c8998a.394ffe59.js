"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7122:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},p="Integration",u={unversionedId:"api-reference/integration",id:"api-reference/integration",title:"Integration",description:"To enable the KONSPOT meet in your application you must use JavaScript library script and integrate it into your application:",source:"@site/docs/api-reference/integration.md",sourceDirName:"api-reference",slug:"/api-reference/integration",permalink:"/api-reference/integration",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/integration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Create Konspot Meetings",permalink:"/getting-started/meetings"},next:{title:"API's Methods & Functions",permalink:"/api-reference/api-methods"}},l={},s=[{value:"Creating the Konspot Meet API object",id:"creating-the-konspot-meet-api-object",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integration"},"Integration"),(0,a.kt)("p",null,"To enable the KONSPOT meet in your application you must use JavaScript library script and integrate it into your application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script src="https://connect.konspot.com/external_api.js"><\/script>\n')),(0,a.kt)("h2",{id:"creating-the-konspot-meet-api-object"},"Creating the Konspot Meet API object"),(0,a.kt)("p",null,"After you have integrated the KONSPOT meet API library, you must then create the Konspot API object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const domain = 'demo.konspot.com';\nconst options = {\n    roomName: 'KonspotVideoMeet',\n    width: 700,\n    height: 700,\n    parentNode:document.querySelector('#meet')\n    userInfo: {\n        email: 'email@example.com',\n        displayName: 'Lorem Ipsum'\n    }\n};\napi = new KonspotVideoApi(domain, options)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Optional arguments include:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"roomName: The name of the room to join."),(0,a.kt)("li",{parentName:"ul"},"width: The created IFrame width."),(0,a.kt)("li",{parentName:"ul"},"height: The created IFrame height."),(0,a.kt)("li",{parentName:"ul"},"parentNode: The HTML DOM Element where the IFrame is added as a child.")))}d.isMDXComponent=!0}}]);