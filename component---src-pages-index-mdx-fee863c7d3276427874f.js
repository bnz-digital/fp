(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{209:function(e,t,n){"use strict";n.r(t);n(14),n(15),n(8),n(22),n(16);var a=n(0),r=n.n(a),o=n(69),i=n(219),l=n(229),c=l.a.div.withConfig({displayName:"Card",componentId:"imefuh-0"})(["border:1px solid gray;border-radius:10px;height:22rem;margin:0 auto 1rem;max-width:100%;width:16rem;"]),s=l.a.p.withConfig({displayName:"CardDescription__CardTitle",componentId:"bxqiqr-0"})(["color:DarkSlateGray;font-size:0.9rem;margin:1rem 0.5rem;padding:0;"]),u=(n(29),n(210)),d=l.a.img.withConfig({displayName:"CardImage__StyledCardImage",componentId:"sc-9bxwmb-0"})(["cursor:pointer;margin:0;padding:0;width:100%;"]);function p(e){var t=e.name,n=e.to;return r.a.createElement(u.a,{to:n},r.a.createElement(d,{src:"images/"+t}))}d.displayName="StyledCardImage";var m=l.a.div.withConfig({displayName:"Cards",componentId:"sc-15u7x5u-0"})(["align-items:top;display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:2rem;"]),b=l.a.h2.withConfig({displayName:"CardTitle",componentId:"sc-15plaws-0"})(["color:LightSlateGray;font-size:1.2rem;margin:0.5rem;padding:0;cursor:pointer;&:before{content:'';}&:hover{text-decoration:none;}"]),f=n(218);n.d(t,"_frontmatter",function(){return y}),n.d(t,"default",function(){return w});var y={},h={_frontmatter:y},g=i.a;function w(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(g,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(m,{mdxType:"Cards"},Object(o.b)(c,{mdxType:"Card"},Object(o.b)(p,{name:"inductive-simplified.png",to:"/inductive/",mdxType:"CardImage"}),Object(o.b)(b,{mdxType:"CardTitle"},Object(o.b)("small",null,"How to FP:"),Object(o.b)("br",null),Object(o.b)(f.a,{to:"/inductive/","aria-label":"Bottom-up FP",mdxType:"Link"},"Examples → concepts")),Object(o.b)(s,{mdxType:"CardDescription"},"Start with the examples and work up to abstract concepts.")),Object(o.b)(c,{mdxType:"Card"},Object(o.b)(p,{name:"deductive-simplified.png",to:"/deductive/",mdxType:"CardImage"}),Object(o.b)(b,{mdxType:"CardTitle"},Object(o.b)("small",null,"How to FP:"),Object(o.b)("br",null),Object(o.b)(f.a,{to:"/deductive/","aria-label":"Top-down FP",mdxType:"Link"},"Concepts → examples")),Object(o.b)(s,{mdxType:"CardDescription"},"Start with abstract concepts and work down to the examples.")),Object(o.b)(c,{mdxType:"Card"},Object(o.b)(p,{name:"cypress.png",to:"/cypress/",mdxType:"CardImage"}),Object(o.b)(b,{mdxType:"CardTitle"},Object(o.b)("small",null,"Resources:"),Object(o.b)("br",null),Object(o.b)(f.a,{to:"/cypress/","aria-label":"Cypress.io",mdxType:"Link"},"Cypress")),Object(o.b)(s,{mdxType:"CardDescription"},"Best practices to follow in Cypress.io and anti-patterns to avoid."))),Object(o.b)("h2",null,"How to use this resource"),Object(o.b)("p",null,"There are two approaches to learning ","“","how to FP","”"," provided here. You can do either or both. Also included is a list of patterns and anti-patterns for quick reference."),Object(o.b)("h2",null,"Styles of learning"),Object(o.b)("p",null,"There are two fundamental and ",Object(o.b)("em",{parentName:"p"},"opposing")," approaches to learning: ",Object(o.b)("strong",{parentName:"p"},"inductive")," and ",Object(o.b)("strong",{parentName:"p"},"deductive"),". If you've studied science, logic, or philosophy, you've probably heard these terms before."),Object(o.b)("h3",null,"Inductive learning: from real-world examples to abstract theory"),Object(o.b)("p",null,"Inductive learning is generally the best way to learn, especially when you're new to a subject. You begin with concrete, real-world examples. After you've seen a few examples and played with them, you begin to notice patterns. From these patterns you derive the abstract rules."),Object(o.b)("figure",null,Object(o.b)("img",{src:"images/inductive.png",alt:"Inductive learning goes from concrete examples to abstract concepts.",style:{border:"1px solid lightgray"}})),Object(o.b)("p",null,"For example, to learn functional programming, you jump right in and begin writing functions. You're not worried about abstract concepts such as referential transparency, side-effects, substitution, or the \"lambda calculus\". You're just writing code."),Object(o.b)("p",null,"After we've guided you through a few examples (or given you a Runkit to play with), we extract a principle. We start with the simplest principles and build up from there. We hold off on explaining ",Object(o.b)("em",{parentName:"p"},"why")," until you've seen the ",Object(o.b)("em",{parentName:"p"},"what"),". This works best for most people and especially when you're new to a topic."),Object(o.b)(f.a,{to:"/inductive/","aria-label":"bottom-up fp",mdxType:"Link"},Object(o.b)("strong",null,"Try it the inductive way: learn FP from the bottom up")),Object(o.b)("h3",null,"Deductive learning: from abstract theory to real-world examples"),Object(o.b)("p",null,"The other method is to start with abstract principles, explain them, and then move on to examples. This works best for people who are already pretty familiar with the material, or at least with similar materials. You need a lot of ",Object(o.b)("strong",{parentName:"p"},"context"),", which beginners by definition don't have."),Object(o.b)("p",null,"For example, if you're an expert in, say, Java, and you want to learn C#","—","a very similar language","—","then you can probably start at the theory level and just learn the ",Object(o.b)("em",{parentName:"p"},"differences")," between the two languages before moving on to examples."),Object(o.b)("figure",null,Object(o.b)("img",{src:"images/deductive.png",alt:"Deductive learning goes from abstract concepts to concrete examples.",style:{border:"1px solid lightgray"}})),Object(o.b)("p",null,"But if you're changing paradigms","—","say from OOP to FP","—","or new to learning programming, then you'll probably do better with the inductive method above."),Object(o.b)("p",null,"If you're not sure, then you might try starting with the deductive (top-down) style, and then if you find yourself confused, switch to the inductive (bottom-up) style. There are even links in the deductive version to help you do that."),Object(o.b)("p",null,"Let us know what you think."),Object(o.b)(f.a,{to:"/deductive/","aria-label":"top-down fp",mdxType:"Link"},Object(o.b)("strong",null,"Try it the deductive way: learn FP from the top down")),Object(o.b)("h2",null,"Resources"),Object(o.b)("p",null,"Once you've grasped the fundamental differences of the functional, declarative approach and have embraced immutability, pure functions, and functional composition, you can use the resources here to polish up your skills. Or start here, if you prefer, and refer back to the ","“","How-to-FP","”"," tutorials as needed."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)(f.a,{to:"/cypress/","aria-label":"Cypress.io",mdxType:"Link"},"Cypress"))))}w.isMDXComponent=!0},210:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(68),i=n.n(o);n.d(t,"a",function(){return i.a});n(211),n(9).default.enqueue,r.a.createContext({})},211:function(e,t,n){var a;e.exports=(a=n(213))&&a.default||a},212:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP"}}}}},213:function(e,t,n){"use strict";n.r(t);n(52),n(17),n(14),n(15),n(8),n(22);var a=n(0),r=n.n(a),o=n(96);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},214:function(e,t,n){"use strict";var a=n(215),r=n(0),o=n.n(r),i=n(223),l=n.n(i);function c(e){var t=e.lang,n=e.title,r=a.data.site;return o.a.createElement(l.a,{htmlAttributes:{lang:t},title:n?n+" | "+r.siteMetadata.title:r.siteMetadata.title},o.a.createElement("script",{src:"https://embed.runkit.com","data-element-id":"runkit"}))}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},215:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP",description:"Functional JavaScript for the OO programmer.",author:"@chasm"}}}}},216:function(e,t,n){"use strict";var a=n(212),r=(n(222),n(0)),o=n.n(r),i=(n(16),n(41),n(210)),l=n(23);function c(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{to:"/inductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Bottom-up"),o.a.createElement(i.a,{to:"/deductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Top-down"),o.a.createElement(i.a,{to:"/cypress",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Cypress"))}function s(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{to:"/inductive/reusability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Reusability"),o.a.createElement(i.a,{to:"/inductive/immutability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Variables"),o.a.createElement(i.a,{to:"/inductive/iteration",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Looping"),o.a.createElement(i.a,{to:"/inductive/composition",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pipelines"))}function u(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{to:"/deductive/pure-functions/",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pure functions"),o.a.createElement(i.a,{to:"/deductive/more-fp-concepts",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"More FP concepts"))}function d(e){switch(e.location.pathname.split("/")[1]){case"inductive":return o.a.createElement(s,null);case"deductive":return o.a.createElement(u,null);default:return o.a.createElement(c,null)}}var p=function(e){var t=e.siteTitle,n=e.location,a=function(e){switch(e.pathname.split("/")[1]){case"inductive":return"ForestGreen";case"deductive":return"MediumBlue";case"cypress":return"Maroon";default:return"RebeccaPurple"}}(n);return o.a.createElement("header",{style:{background:a,marginBottom:"1.45rem"}},o.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0,display:"inline-block",flexGrow:1}},o.a.createElement(i.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),o.a.createElement("div",{style:{flexShrink:1}},o.a.createElement(d,{location:n}))))};function m(e){return o.a.createElement(l.Location,null,function(t){return o.a.createElement(p,Object.assign({},t,e))})}p.defaultProps={siteTitle:""};t.a=function(e){var t=e.children,n=a.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{siteTitle:n.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t)))}},218:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(14),n(15),n(8),n(22),n(16);var a=n(210),r=n(0),o=n.n(r),i=n(23);var l=function(e){return function(t){t.preventDefault;var n=window&&"localhost"===window.location.hostname?e:"/fp"+e;Object(i.navigate)(n)}};function c(e){var t=e.children,n=e.to,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","to"]);return n.indexOf("#")>-1||n.indexOf("?")>-1?o.a.createElement("a",Object.assign({onClick:l(n)},r,{style:{cursor:"pointer"}}),t):o.a.createElement(a.a,Object.assign({to:n},r),t)}},219:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(210);function i(){return r.a.createElement("span",{className:"separator"},"»")}function l(e){var t=e.title,n=e.trail;return void 0===n?null:r.a.createElement("p",null,function(e,t){return void 0===t&&(t=[]),r.a.createElement(r.a.Fragment,null,t.map(function(e){var t=e.href,n=e.label;return r.a.createElement(a.Fragment,{key:t},r.a.createElement(o.a,{to:t},n),r.a.createElement(i,null))}),e)}(t,n))}var c=n(216),s=n(214);t.a=function(e){var t=e.children,n=e.pageContext.frontmatter,a=n.title,o=n.trail;return r.a.createElement(c.a,null,r.a.createElement(s.a,{title:a}),r.a.createElement(l,{title:a,trail:o}),r.a.createElement("article",null,t))}}}]);
//# sourceMappingURL=component---src-pages-index-mdx-fee863c7d3276427874f.js.map