"use strict";(self.webpackChunkzoomkoding_com=self.webpackChunkzoomkoding_com||[]).push([[637],{3974:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(7294),n=a(1280),c=a(5150),s=a(5313);var l=function(e){var t=e.post,a=e.timeToRead;return r.createElement("header",{className:"post-header"},t.emoji&&r.createElement("div",{className:"emoji"},t.emoji),r.createElement("h1",{className:"title"},t.title),r.createElement("div",{className:"info"},r.createElement("div",{className:"info-top"},r.createElement("span",{className:"author"},"posted by ",r.createElement("strong",null,t.author),",")," ",r.createElement("span",null,t.date)),r.createElement("div",{className:"info-middle"},a," min read"),r.createElement("div",{className:"categories"},t.categories.map((function(e){return r.createElement(s.Link,{className:"category",key:e,to:"/posts/"+e},"#",e)})))))};var i=function(e){var t=e.prevPost,a=e.nextPost;return r.createElement("div",{className:"post-navigator"},r.createElement("div",{className:"post-navigator-card-wrapper"},a&&r.createElement(s.Link,{className:"post-card prev",key:a.id,to:a.slug},r.createElement("div",{className:"direction"},"이전 글"),r.createElement("div",{className:"title"},a.title))),r.createElement("div",{className:"post-navigator-card-wrapper"},t&&r.createElement(s.Link,{className:"post-card next",key:t.id,to:t.slug},r.createElement("div",{className:"direction"},"다음 글"),r.createElement("div",{className:"title"},t.title))))},o=a(7405);var m=function(e){var t=e.html;return r.createElement("div",{className:"post-content"},r.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t}}))};var d=function(e){var t=e.repo,a=e.path,n=(0,r.createRef)(),c=(0,r.useRef)(!1);return(0,r.useEffect)((function(){if(n.current&&!c.current){var e=localStorage.getItem("isDarkMode"),a=document.createElement("script"),r={src:"https://utteranc.es/client.js",repo:t,branch:"main",theme:JSON.parse(e)?"photon-dark":"github-light",label:"✨💬✨",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(r).forEach((function(e){a.setAttribute(e,r[e])})),n.current.appendChild(a),c.current=!0}}),[t,n,a]),r.createElement("div",{className:"utterances",ref:n})};var u=function(e){var t,a,s=e.data,u=new o.Z(s.cur),p=s.prev&&new o.Z(s.prev),v=s.next&&new o.Z(s.next),E=(null===(t=s.site)||void 0===t?void 0:t.siteMetadata).comments,f=null==E||null===(a=E.utterances)||void 0===a?void 0:a.repo;return r.createElement(n.Z,null,r.createElement(c.Z,{title:null==u?void 0:u.title,description:null==u?void 0:u.excerpt}),r.createElement(l,{post:u,timeToRead:u.timeToRead}),r.createElement(m,{html:u.html}),f&&r.createElement(d,{repo:f,path:u.slug}),r.createElement(i,{prevPost:p,nextPost:v}))}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-e731ed68f8d1bf697370.js.map