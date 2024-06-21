"use strict";(self.webpackChunkmy_docusaurus_project=self.webpackChunkmy_docusaurus_project||[]).push([[974],{5680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>m});var r=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),l=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=l(e.components);return r.createElement(p.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=l(t),y=n,m=g["".concat(p,".").concat(y)]||g[y]||u[y]||o;return t?r.createElement(m,i(i({ref:a},s),{},{components:t})):r.createElement(m,i({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c[g]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5401:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(8168),n=(t(6540),t(5680));const o={sidebar_position:1},i="Create a Page",c={unversionedId:"tutorial-basics/create-a-page",id:"tutorial-basics/create-a-page",isDocsHomePage:!1,title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/tutorial-basics/create-a-page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/docs/tutorial-basics/create-a-page",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-basics/create-a-page.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/docs/intro"},next:{title:"Create a Document",permalink:"/docs/tutorial-basics/create-a-document"}},p=[{value:"Create your first React Page",id:"create-your-first-react-page",children:[]},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",children:[]}],l={toc:p},s="wrapper";function g(e){let{components:a,...t}=e;return(0,n.yg)(s,(0,r.A)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"create-a-page"},"Create a Page"),(0,n.yg)("p",null,"Add ",(0,n.yg)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,n.yg)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,n.yg)("strong",{parentName:"p"},"standalone page"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"src/pages/index.js")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"src/pages/foo.md")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,n.yg)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,n.yg)("p",null,"Create a file at ",(0,n.yg)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,n.yg)("p",null,"A new page is now available at ",(0,n.yg)("inlineCode",{parentName:"p"},"http://localhost:3000/my-react-page"),"."),(0,n.yg)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),(0,n.yg)("p",null,"Create a file at ",(0,n.yg)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,n.yg)("p",null,"A new page is now available at ",(0,n.yg)("inlineCode",{parentName:"p"},"http://localhost:3000/my-markdown-page"),"."))}g.isMDXComponent=!0}}]);