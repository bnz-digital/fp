(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c}),n.d(t,"default",function(){return b});n(14),n(15),n(8),n(22),n(16),n(0);var i=n(69),a=n(215),l=n(208);var c={},o={_frontmatter:c},r=a.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(r,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Functional programming in JavaScript is easy.")),Object(i.b)("p",null,"Easier, in fact, than OOP in JavaScript."),Object(i.b)("p",null,"If you've been looking at academic discourses about functional programming with terms such as ",Object(i.b)("em",{parentName:"p"},"referential transparency"),", ",Object(i.b)("em",{parentName:"p"},"lambda calculus"),", and the dreaded ",Object(i.b)("em",{parentName:"p"},"monad"),", then it's no wonder you're confused. But you don't need to understand any of that terminology (or even the theory) to ",Object(i.b)("em",{parentName:"p"},"FP"),"."),Object(i.b)("p",null,"Here we present the fundamental ",Object(i.b)("strong",{parentName:"p"},"techniques")," for functional programming without all the painful academic theory and terminology. You, too, can FP."),Object(i.b)("h2",null,"How to FP"),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/","aria-label":"Reusability",mdxType:"Link"},"Functions are the basic unit of reusability"),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#purity-rules",mdxType:"Link"},"Given the same arguments, a function must return the same result")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#real-functions-have-parameters",mdxType:"Link"},"Functions take at least one parameter")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#real-functions-return-a-value",mdxType:"Link"},"Functions return exactly one result")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#join-the-higher-order",mdxType:"Link"},"Functions can be passed as arguments to other functions")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#who-wants-curry",mdxType:"Link"},"Functions can be returned from other functions")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#we-can-has-recursion",mdxType:"Link"},"Functions can call functions, ",Object(i.b)("em",null,"including themselves"))),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#say-no-to-side-effects",mdxType:"Link"},"Don't be reaching outside the function to mess with shit")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#no-mutating-variables",mdxType:"Link"},"Make copies when passing by reference")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#closures-are-cool",mdxType:"Link"},"Functions can remember things for you")))),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/immutability/","aria-label":"Immutability",mdxType:"Link"},"Variables are “set and forget”"),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/immutability/#use-const-exclusively",mdxType:"Link"},"Use ",Object(i.b)("code",null,"const")," exclusively!")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/immutability/#assign-upon-declaration",mdxType:"Link"},"Assign variables when they are declared")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/immutability/#never-mutate",mdxType:"Link"},"Once a variable has been assigned, don't be changing it")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/immutability/#never-destroy-state",mdxType:"Link"},"Don't erase state: create new state instead!")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/immutability/#use-destructuring-to-make-copies",mdxType:"Link"},"Use destructuring and the rest/spread operators to make copies")))),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/","aria-label":"Iteration",mdxType:"Link"},"Loops are so last millennium!"),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#recusrive-functions",mdxType:"Link"},"Functions can call themselves! No, really...")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#map",mdxType:"Link"},"Use ",Object(i.b)("code",null,"map")," to modify each value in a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#filter",mdxType:"Link"},"Use ",Object(i.b)("code",null,"filter")," to choose particular values from a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#adjust",mdxType:"Link"},"Use ",Object(i.b)("code",null,"adjust")," to update a single value in a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#append",mdxType:"Link"},"Use ",Object(i.b)("code",null,"append"),", ",Object(i.b)("code",null,"insert"),", or ",Object(i.b)("code",null,"prepend")," to add an item to a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#concat",mdxType:"Link"},"Use ",Object(i.b)("code",null,"concat")," or ",Object(i.b)("code",null,"zip")," to combine two lists")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#times",mdxType:"Link"},"Use ",Object(i.b)("code",null,"times")," to create a new list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#reduce",mdxType:"Link"},"Use ",Object(i.b)("code",null,"reduce")," to combine elements in a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#reduce-again",mdxType:"Link"},"Use ",Object(i.b)("code",null,"reduce")," to convert a list to some other data type")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#head",mdxType:"Link"},"Use ",Object(i.b)("code",null,"head")," or destructuring to get the first item in a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#tail",mdxType:"Link"},"Use ",Object(i.b)("code",null,"tail")," or destructuring to get the list minus the first element")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#all",mdxType:"Link"},"Use ",Object(i.b)("code",null,"all"),", ",Object(i.b)("code",null,"any"),", or ",Object(i.b)("code",null,"none")," to test a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#flatten",mdxType:"Link"},"Use ",Object(i.b)("code",null,"flatten")," to flatten nested lists into a single list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#avoid-foreach",mdxType:"Link"},"Avoid ",Object(i.b)("code",null,"forEach"),"! Avoid ",Object(i.b)("code",null,"forEach"),"! Avoid ",Object(i.b)("code",null,"forEach"),"!")))),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/composition/","aria-label":"Composition",mdxType:"Link"},"We can has pipelines!"),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/composition/#pipe",mdxType:"Link"},"Use ",Object(i.b)("code",null,"pipe")," or ",Object(i.b)("code",null,"compose")," to combine functions into pipelines")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/composition/#curry",mdxType:"Link"},"Use ",Object(i.b)("code",null,"curry")," to make functions that make functions")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/composition/#state-state-state",mdxType:"Link"},"Think in terms of state!")))),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/patterns-antipatterns/","aria-label":"Patterns and anti-patterns",mdxType:"Link"},"Patterns and anti-patterns"),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/patterns-antipatterns/#one",mdxType:"Link"},"Do this not that")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/patterns-antipatterns/#two",mdxType:"Link"},"Do this not that")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/patterns-antipatterns/#three",mdxType:"Link"},"Do this not that")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/patterns-antipatterns/#four",mdxType:"Link"},"Do this not that")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/patterns-antipatterns/#five",mdxType:"Link"},"Do this not that"))))))}b.isMDXComponent=!0},208:function(e,t,n){"use strict";var i=n(0),a=n.n(i),l=n(68),c=n.n(l);n.d(t,"a",function(){return c.a});n(209),n(10).default.enqueue,a.a.createContext({})},209:function(e,t,n){var i;e.exports=(i=n(211))&&i.default||i},210:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP"}}}}},211:function(e,t,n){"use strict";n.r(t);n(53),n(17),n(14),n(15),n(8),n(22);var i=n(0),a=n.n(i),l=n(96);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(l.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},212:function(e,t,n){"use strict";var i=n(213),a=n(0),l=n.n(a),c=n(218),o=n.n(c);function r(e){var t=e.lang,n=e.title,a=i.data.site;return l.a.createElement(o.a,{htmlAttributes:{lang:t},title:n?n+" | "+a.siteMetadata.title:a.siteMetadata.title},l.a.createElement("script",{src:"https://embed.runkit.com","data-element-id":"runkit"}))}r.defaultProps={lang:"en",meta:[],description:""},t.a=r},213:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP",description:"Functional JavaScript for the OO programmer.",author:"@chasm"}}}}},214:function(e,t,n){"use strict";var i=n(210),a=(n(217),n(0)),l=n.n(a),c=n(208),o=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0,display:"inline-block",flexGrow:1}},l.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),l.a.createElement("div",{style:{flexShrink:1}},l.a.createElement(c.a,{to:"/reusability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Reusability"),l.a.createElement(c.a,{to:"/immutability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Variables"),l.a.createElement(c.a,{to:"/iteration",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Looping"),l.a.createElement(c.a,{to:"/composition",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pipelines"),l.a.createElement(c.a,{to:"/patterns-antipatterns",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Patterns"))))};o.defaultProps={siteTitle:""};var r=o;t.a=function(e){var t=e.children,n=i.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r,{siteTitle:n.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t)))}},215:function(e,t,n){"use strict";var i=n(0),a=n.n(i),l=n(208);function c(){return a.a.createElement("span",{className:"separator"},"»")}function o(e){var t=e.title,n=e.trail;return void 0===n?null:a.a.createElement("p",null,function(e,t){return void 0===t&&(t=[]),a.a.createElement(a.a.Fragment,null,t.map(function(e){var t=e.href,n=e.label;return a.a.createElement(i.Fragment,{key:t},a.a.createElement(l.a,{to:t},n),a.a.createElement(c,null))}),e)}(t,n))}var r=n(214),b=n(212);t.a=function(e){var t=e.children,n=e.pageContext.frontmatter,i=n.title,l=n.trail;return a.a.createElement(r.a,null,a.a.createElement(b.a,{title:i}),a.a.createElement(o,{title:i,trail:l}),a.a.createElement("article",null,t))}}}]);
//# sourceMappingURL=component---src-pages-inductive-index-mdx-e5bb7e5c584b60867799.js.map