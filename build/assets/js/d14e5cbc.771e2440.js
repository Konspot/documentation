"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[333],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1027:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],p={sidebar_position:3},l="Create Konspot Meetings",c={unversionedId:"getting-started/meetings",id:"getting-started/meetings",title:"Create Konspot Meetings",description:"Konspot Backend Apis to Create And Validate Rooms/Meetings",source:"@site/docs/getting-started/meetings.md",sourceDirName:"getting-started",slug:"/getting-started/meetings",permalink:"/getting-started/meetings",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/meetings.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Account & Basic Settings",permalink:"/getting-started/signup"},next:{title:"Integration",permalink:"/api-reference/integration"}},s={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-konspot-meetings"},"Create Konspot Meetings"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Konspot Backend Apis to Create And Validate Rooms/Meetings")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create Room/Meeting.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://develop.konspot.com/api/quickmeeting?api=Apikey&roomkey=RoomKey")))),(0,i.kt)("li",{parentName:"ul"},"Validate Room.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://develop.konspot.com/api/validateRoom?roomid=room_id&password=password&api=Apikey+'&roomkey=Roomkey")))),(0,i.kt)("li",{parentName:"ul"},"New Participant Joined",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://develop.konspot.com/api/newParticipant?room_id=room_id&name=ParticipantName&konspot_id=ParticipantKonspotId&type=joined&api=ApiKey&roomkey=RoomKey")))),(0,i.kt)("li",{parentName:"ul"},"Participant Left Meeting",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://develop.konspot.com/api/leftParticipant?room_id=room_id&name=ParticipantName&konspot_id=ParticipantKonspotId&type=Left&api=ApiKey&roomkey=RoomKey")))),(0,i.kt)("li",{parentName:"ul"},"Save Chat",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://develop.konspot.com/api/saveChat?room_id=room_id&sendby=participantName&sendto=Everyone&user_id=user_id&chattype=Public&chatcontent=chatcontent&attachment=filePath&filetype=ext&filesize=fileSize&api=ApiKey&roomkey=RoomKey"))))))}d.isMDXComponent=!0}}]);