(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return r}),n.d(t,"default",function(){return u});n(14),n(15),n(8),n(22),n(16),n(0);var i=n(69),a=n(218),l=n(217);var r={},c={_frontmatter:r},o=a.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(o,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Functional programming in JavaScript is easy.")),Object(i.b)("p",null,"Easier, in fact, than OOP in JavaScript."),Object(i.b)("p",null,"If you've been looking at academic discourses about functional programming with terms such as ",Object(i.b)("em",{parentName:"p"},"referential transparency"),", ",Object(i.b)("em",{parentName:"p"},"lambda calculus"),", and the dreaded ",Object(i.b)("em",{parentName:"p"},"monad"),", then it's no wonder you're confused. But you don't need to understand any of that terminology (or even the theory) to ",Object(i.b)("em",{parentName:"p"},"FP"),"."),Object(i.b)("p",null,"Here we present the fundamental ",Object(i.b)("strong",{parentName:"p"},"techniques")," for functional programming without all the painful academic theory and terminology. You, too, can FP."),Object(i.b)("h2",null,"How to FP"),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/","aria-label":"Reusability",mdxType:"Link"},"Functions are the basic unit of reusability"),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#purity-rules",mdxType:"Link"},"Given the same arguments, a function must return the same result")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#real-functions-have-parameters",mdxType:"Link"},"Functions take at least one parameter")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#real-functions-return-a-value",mdxType:"Link"},"Functions return exactly one result")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#join-the-higher-order",mdxType:"Link"},"Functions can be passed as arguments to other functions")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#who-wants-curry",mdxType:"Link"},"Functions can be returned from other functions")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#we-can-has-recursion",mdxType:"Link"},"Functions can call functions, ",Object(i.b)("em",null,"including themselves"))),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#say-no-to-side-effects",mdxType:"Link"},"Don't be reaching outside the function to mess with shit")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#no-mutating-variables",mdxType:"Link"},"Make copies when passing by reference")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/reusability/#closures-are-cool",mdxType:"Link"},"Functions can remember things for you")))),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/immutability/","aria-label":"Immutability",mdxType:"Link"},"Variables are “set and forget”"),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/immutability/#use-const-exclusively",mdxType:"Link"},"Use ",Object(i.b)("code",null,"const")," exclusively!")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/immutability/#assign-upon-declaration",mdxType:"Link"},"Assign variables when they are declared")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/immutability/#never-mutate",mdxType:"Link"},"Once a variable has been assigned, don't be changing it")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/immutability/#never-destroy-state",mdxType:"Link"},"Don't erase state: create new state instead!")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/immutability/#use-destructuring-to-make-copies",mdxType:"Link"},"Use destructuring and the rest/spread operators to make copies")))),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/","aria-label":"Iteration",mdxType:"Link"},"Loops are so last millennium!"),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#recusrive-functions",mdxType:"Link"},"Functions can call themselves! No, really!")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#map",mdxType:"Link"},"Use ",Object(i.b)("code",null,"map")," to modify each value in a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#reduce",mdxType:"Link"},"Use ",Object(i.b)("code",null,"reduce")," to combine elements in a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#reduce-again",mdxType:"Link"},"More fun with ",Object(i.b)("code",null,"reduce"))),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#filter",mdxType:"Link"},"Use ",Object(i.b)("code",null,"filter")," to choose particular values from a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#adjust",mdxType:"Link"},"Use ",Object(i.b)("code",null,"adjust")," to update a single value in a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#append-insert-prepend",mdxType:"Link"},"Use ",Object(i.b)("code",null,"append"),", ",Object(i.b)("code",null,"insert"),", or ",Object(i.b)("code",null,"prepend")," to add an item to a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#remove",mdxType:"Link"},"Use ",Object(i.b)("code",null,"remove")," to remove an item from a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#concat",mdxType:"Link"},"Use ",Object(i.b)("code",null,"concat")," or ",Object(i.b)("code",null,"zip")," to combine two lists")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#times",mdxType:"Link"},"Use ",Object(i.b)("code",null,"times")," to create a new list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#head",mdxType:"Link"},"Use ",Object(i.b)("code",null,"head")," or destructuring to get the first item in a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#tail",mdxType:"Link"},"Use ",Object(i.b)("code",null,"tail")," or destructuring to get the list minus the first element")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#all",mdxType:"Link"},"Use ",Object(i.b)("code",null,"all"),", ",Object(i.b)("code",null,"any"),", or ",Object(i.b)("code",null,"none")," to test a list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#flatten",mdxType:"Link"},"Use ",Object(i.b)("code",null,"flatten")," to flatten nested lists into a single list")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/iteration/#avoid-foreach",mdxType:"Link"},"Avoid ",Object(i.b)("code",null,"forEach"),"! Avoid ",Object(i.b)("code",null,"forEach"),"! Avoid ",Object(i.b)("code",null,"forEach"),"!")))),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/composition/","aria-label":"Composition",mdxType:"Link"},"We can has pipelines!"),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/composition/#pipe",mdxType:"Link"},"Use ",Object(i.b)("code",null,"pipe")," or ",Object(i.b)("code",null,"compose")," to combine functions into pipelines")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/composition/#curry",mdxType:"Link"},"Use ",Object(i.b)("code",null,"curry")," to make functions that make functions")),Object(i.b)("li",null,Object(i.b)(l.a,{to:"/inductive/composition/#state-state-state",mdxType:"Link"},"Think in terms of state!"))))),Object(i.b)("small",null,"Errors, bugs, suggestions, questions? Contact ",Object(i.b)("a",{href:"mailto:charles_munat@bnz.co.nz"},"Charles Munat")),".")}u.isMDXComponent=!0},210:function(e,t,n){"use strict";var i=n(0),a=n.n(i),l=n(68),r=n.n(l);n.d(t,"a",function(){return r.a});n(211),n(9).default.enqueue,a.a.createContext({})},211:function(e,t,n){var i;e.exports=(i=n(213))&&i.default||i},212:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP"}}}}},213:function(e,t,n){"use strict";n.r(t);n(52),n(17),n(14),n(15),n(8),n(22);var i=n(0),a=n.n(i),l=n(96);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(l.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},214:function(e,t,n){"use strict";var i=n(215),a=n(0),l=n.n(a),r=n(221),c=n.n(r);function o(e){var t=e.lang,n=e.title,a=i.data.site;return l.a.createElement(c.a,{htmlAttributes:{lang:t},title:n?n+" | "+a.siteMetadata.title:a.siteMetadata.title},l.a.createElement("script",{src:"https://embed.runkit.com","data-element-id":"runkit"}))}o.defaultProps={lang:"en",meta:[],description:""},t.a=o},215:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP",description:"Functional JavaScript for the OO programmer.",author:"@chasm"}}}}},216:function(e,t,n){"use strict";var i=n(212),a=(n(220),n(0)),l=n.n(a),r=(n(16),n(41),n(210)),c=n(23);function o(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{to:"/inductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Bottom-up"),l.a.createElement(r.a,{to:"/deductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Top-down"),l.a.createElement(r.a,{to:"/patterns-antipatterns",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Patterns"))}function u(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{to:"/inductive/reusability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Reusability"),l.a.createElement(r.a,{to:"/inductive/immutability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Variables"),l.a.createElement(r.a,{to:"/inductive/iteration",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Looping"),l.a.createElement(r.a,{to:"/inductive/composition",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pipelines"))}function s(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{to:"/deductive/pure-functions/",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pure functions"),l.a.createElement(r.a,{to:"/deductive/more-fp-concepts",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"More FP concepts"))}function b(e){switch(e.location.pathname.split("/")[1]){case"inductive":return l.a.createElement(u,null);case"deductive":return l.a.createElement(s,null);default:return l.a.createElement(o,null)}}var d=function(e){var t=e.siteTitle,n=e.location,i=function(e){switch(e.pathname.split("/")[1]){case"inductive":return"ForestGreen";case"deductive":return"MediumBlue";case"patterns-antipatterns":return"Maroon";default:return"RebeccaPurple"}}(n);return l.a.createElement("header",{style:{background:i,marginBottom:"1.45rem"}},l.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0,display:"inline-block",flexGrow:1}},l.a.createElement(r.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),l.a.createElement("div",{style:{flexShrink:1}},l.a.createElement(b,{location:n}))))};function m(e){return l.a.createElement(c.Location,null,function(t){return l.a.createElement(d,Object.assign({},t,e))})}d.defaultProps={siteTitle:""};t.a=function(e){var t=e.children,n=i.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{siteTitle:n.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t)))}},217:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n(14),n(15),n(8),n(22),n(16);var i=n(210),a=n(0),l=n.n(a),r=n(23);var c=/#|\?/g,o=function(e){return function(){return Object(r.navigate)(e)}};function u(e){var t=e.children,n=e.to,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","to"]);return c.test(n)?l.a.createElement("a",Object.assign({onClick:o(n)},a),t):l.a.createElement(i.a,Object.assign({to:n},a),t)}},218:function(e,t,n){"use strict";var i=n(0),a=n.n(i),l=n(210);function r(){return a.a.createElement("span",{className:"separator"},"»")}function c(e){var t=e.title,n=e.trail;return void 0===n?null:a.a.createElement("p",null,function(e,t){return void 0===t&&(t=[]),a.a.createElement(a.a.Fragment,null,t.map(function(e){var t=e.href,n=e.label;return a.a.createElement(i.Fragment,{key:t},a.a.createElement(l.a,{to:t},n),a.a.createElement(r,null))}),e)}(t,n))}var o=n(216),u=n(214);t.a=function(e){var t=e.children,n=e.pageContext.frontmatter,i=n.title,l=n.trail;return a.a.createElement(o.a,null,a.a.createElement(u.a,{title:i}),a.a.createElement(c,{title:i,trail:l}),a.a.createElement("article",null,t))}}}]);
//# sourceMappingURL=component---src-pages-inductive-index-mdx-fa331f233b89f6e95e7c.js.map