(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return r}),n.d(t,"default",function(){return b});n(14),n(15),n(8),n(22),n(16),n(0);var a=n(69),i=n(216),l=n(215);var r={},c={_frontmatter:r},o=i.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(o,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"FP is easy, but can seem difficult at first.")),Object(a.b)("p",null,"Functional programming (FP: E.G., Haskell) is a programming paradigm, meaning that it is a way of thinking about software construction based on some fundamental, defining principles. Other examples of programming paradigms include object-oriented programming (OOP: e.g., Java) and procedural programming (e.g., COBOL)."),Object(a.b)("h2",null,"Why Functional Programming?"),Object(a.b)("p",null,"Functional code tends to be more concise, more predictable, and easier to test than imperative or object-oriented code","—","but if you're unfamiliar with it and the common patterns associated with it, then functional code can also seem a lot more dense."),Object(a.b)("h2",null,"Tell me more about Functional Programming"),Object(a.b)("p",null,"Functional Programming revolves around the idea that a program is made of a set of functions and that they follow certain rules. Forget classes and inheritance: the patterns that you will encounter are quite different here."),Object(a.b)("p",null,"FP is the process of building software by:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"composing ",Object(a.b)("em",{parentName:"li"},"pure functions")," and,"),Object(a.b)("li",{parentName:"ul"},"avoiding ",Object(a.b)("em",{parentName:"li"},"shared state"),", ",Object(a.b)("em",{parentName:"li"},"mutable data"),", and ",Object(a.b)("em",{parentName:"li"},"side-effects"),". ")),Object(a.b)("p",null,"Let's learn more about these concepts..."),Object(a.b)("h2",null,"FP from the top down"),Object(a.b)("ul",null,Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/reusability/","aria-label":"Reusability",mdxType:"Link"},"Functions are the basic unit of reusability"),Object(a.b)("ul",null,Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/reusability/#purity-rules",mdxType:"Link"},"Given the same arguments, a function must return the same result")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/reusability/#real-functions-have-parameters",mdxType:"Link"},"Functions take at least one parameter")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/reusability/#real-functions-return-a-value",mdxType:"Link"},"Functions return exactly one result")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/reusability/#join-the-higher-order",mdxType:"Link"},"Functions can be passed as arguments to other functions")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/reusability/#who-wants-curry",mdxType:"Link"},"Functions can be returned from other functions")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/reusability/#we-can-has-recursion",mdxType:"Link"},"Functions can call functions, ",Object(a.b)("em",null,"including themselves"))),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/reusability/#say-no-to-side-effects",mdxType:"Link"},"Don't be reaching outside the function to mess with shit")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/reusability/#no-mutating-variables",mdxType:"Link"},"Make copies when passing by reference")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/reusability/#closures-are-cool",mdxType:"Link"},"Functions can remember things for you")))),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/immutability/","aria-label":"Immutability",mdxType:"Link"},"Variables are “set and forget”"),Object(a.b)("ul",null,Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/immutability/#use-const-exclusively",mdxType:"Link"},"Use ",Object(a.b)("code",null,"const")," exclusively!")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/immutability/#assign-upon-declaration",mdxType:"Link"},"Assign variables when they are declared")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/immutability/#never-mutate",mdxType:"Link"},"Once a variable has been assigned, don't be changing it")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/immutability/#never-destroy-state",mdxType:"Link"},"Don't erase state: create new state instead!")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/immutability/#use-destructuring-to-make-copies",mdxType:"Link"},"Use destructuring and the rest/spread operators to make copies")))),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/","aria-label":"Iteration",mdxType:"Link"},"Loops are so last millennium!"),Object(a.b)("ul",null,Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#recusrive-functions",mdxType:"Link"},"Functions can call themselves! No, really...")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#map",mdxType:"Link"},"Use ",Object(a.b)("code",null,"map")," to modify each value in a list")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#reduce",mdxType:"Link"},"Use ",Object(a.b)("code",null,"reduce")," to combine elements in a list")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#reduce-again",mdxType:"Link"},"More fun with ",Object(a.b)("code",null,"reduce"))),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#filter",mdxType:"Link"},"Use ",Object(a.b)("code",null,"filter")," to choose particular values from a list")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#adjust",mdxType:"Link"},"Use ",Object(a.b)("code",null,"adjust")," to update a single value in a list")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#append",mdxType:"Link"},"Use ",Object(a.b)("code",null,"append"),", ",Object(a.b)("code",null,"insert"),", or ",Object(a.b)("code",null,"prepend")," to add an item to a list")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#concat",mdxType:"Link"},"Use ",Object(a.b)("code",null,"concat")," or ",Object(a.b)("code",null,"zip")," to combine two lists")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#times",mdxType:"Link"},"Use ",Object(a.b)("code",null,"times")," to create a new list")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#head",mdxType:"Link"},"Use ",Object(a.b)("code",null,"head")," or destructuring to get the first item in a list")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#tail",mdxType:"Link"},"Use ",Object(a.b)("code",null,"tail")," or destructuring to get the list minus the first element")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#all",mdxType:"Link"},"Use ",Object(a.b)("code",null,"all"),", ",Object(a.b)("code",null,"any"),", or ",Object(a.b)("code",null,"none")," to test a list")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#flatten",mdxType:"Link"},"Use ",Object(a.b)("code",null,"flatten")," to flatten nested lists into a single list")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/iteration/#avoid-foreach",mdxType:"Link"},"Avoid ",Object(a.b)("code",null,"forEach"),"! Avoid ",Object(a.b)("code",null,"forEach"),"! Avoid ",Object(a.b)("code",null,"forEach"),"!")))),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/composition/","aria-label":"Composition",mdxType:"Link"},"We can has pipelines!"),Object(a.b)("ul",null,Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/composition/#pipe",mdxType:"Link"},"Use ",Object(a.b)("code",null,"pipe")," or ",Object(a.b)("code",null,"compose")," to combine functions into pipelines")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/composition/#curry",mdxType:"Link"},"Use ",Object(a.b)("code",null,"curry")," to make functions that make functions")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/composition/#state-state-state",mdxType:"Link"},"Think in terms of state!")))),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/patterns-antipatterns/","aria-label":"Patterns and anti-patterns",mdxType:"Link"},"Patterns and anti-patterns"),Object(a.b)("ul",null,Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/patterns-antipatterns/#one",mdxType:"Link"},"Do this not that")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/patterns-antipatterns/#two",mdxType:"Link"},"Do this not that")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/patterns-antipatterns/#three",mdxType:"Link"},"Do this not that")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/patterns-antipatterns/#four",mdxType:"Link"},"Do this not that")),Object(a.b)("li",null,Object(a.b)(l.a,{to:"/inductive/patterns-antipatterns/#five",mdxType:"Link"},"Do this not that"))))),Object(a.b)("h2",null,"FP vs. OOP"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://kentcdodds.com/blog/classes-complexity-and-functional-programming"}),"Great blog from Kent C. Dodds"))),Object(a.b)("h2",null,"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://immutable-js.github.io/immutable-js/docs/#/"}),"ImmutableJS")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://ramdajs.com/"}),"RamdaJS")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://www.npmjs.com/package/eslint-plugin-fp"}),"ESLint FP plugin")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://medium.com/@cscalfani/"}),"OOP vs. FP")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"goodbye-object-oriented-programming-a59cda4c0e53"}),"Goodby object-oriented programming")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://tsh.io/blog/7-reasons-to-use-functional-programming-on-frontend-1-2/"}),"7 reasons to use FP on the front end"))),Object(a.b)("h2",null,"Sources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0"}),"Master the JavaScript interview: What is FP?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-currying-5652e489cce8"}),"Functional programming paradigms in modern JavaScript: currying")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-3-1b0fd14eb1a7"}),"So you want to be a functional programmer, part 3")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1"}),"Functional programming paradigms in modern JavaScript: pure functions")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://tsh.io/blog/7-reasons-to-use-functional-programming-on-frontend-1-2/"}),"7 reasons to use FP on the front end"))))}b.isMDXComponent=!0},208:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(68),r=n.n(l);n.d(t,"a",function(){return r.a});n(209),n(10).default.enqueue,i.a.createContext({})},209:function(e,t,n){var a;e.exports=(a=n(211))&&a.default||a},210:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP"}}}}},211:function(e,t,n){"use strict";n.r(t);n(53),n(17),n(14),n(15),n(8),n(22);var a=n(0),i=n.n(a),l=n(96);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(l.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},212:function(e,t,n){"use strict";var a=n(213),i=n(0),l=n.n(i),r=n(219),c=n.n(r);function o(e){var t=e.lang,n=e.title,i=a.data.site;return l.a.createElement(c.a,{htmlAttributes:{lang:t},title:n?n+" | "+i.siteMetadata.title:i.siteMetadata.title},l.a.createElement("script",{src:"https://embed.runkit.com","data-element-id":"runkit"}))}o.defaultProps={lang:"en",meta:[],description:""},t.a=o},213:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP",description:"Functional JavaScript for the OO programmer.",author:"@chasm"}}}}},214:function(e,t,n){"use strict";var a=n(210),i=(n(218),n(0)),l=n.n(i),r=n(208),c=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0,display:"inline-block",flexGrow:1}},l.a.createElement(r.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),l.a.createElement("div",{style:{flexShrink:1}},l.a.createElement(r.a,{to:"/reusability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Reusability"),l.a.createElement(r.a,{to:"/immutability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Variables"),l.a.createElement(r.a,{to:"/iteration",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Looping"),l.a.createElement(r.a,{to:"/composition",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pipelines"),l.a.createElement(r.a,{to:"/patterns-antipatterns",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Patterns"))))};c.defaultProps={siteTitle:""};var o=c;t.a=function(e){var t=e.children,n=a.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,{siteTitle:n.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t)))}},215:function(e,t,n){"use strict";n.d(t,"a",function(){return b});n(14),n(15),n(8),n(22),n(16);var a=n(208),i=n(0),l=n.n(i),r=n(23);var c=/#|\?/g,o=function(e){return function(){return Object(r.navigate)(e)}};function b(e){var t=e.children,n=e.to,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["children","to"]);return c.test(n)?l.a.createElement("a",Object.assign({onClick:o(n)},i),t):l.a.createElement(a.a,Object.assign({to:n},i),t)}},216:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(208);function r(){return i.a.createElement("span",{className:"separator"},"»")}function c(e){var t=e.title,n=e.trail;return void 0===n?null:i.a.createElement("p",null,function(e,t){return void 0===t&&(t=[]),i.a.createElement(i.a.Fragment,null,t.map(function(e){var t=e.href,n=e.label;return i.a.createElement(a.Fragment,{key:t},i.a.createElement(l.a,{to:t},n),i.a.createElement(r,null))}),e)}(t,n))}var o=n(214),b=n(212);t.a=function(e){var t=e.children,n=e.pageContext.frontmatter,a=n.title,l=n.trail;return i.a.createElement(o.a,null,i.a.createElement(b.a,{title:a}),i.a.createElement(c,{title:a,trail:l}),i.a.createElement("article",null,t))}}}]);
//# sourceMappingURL=component---src-pages-deductive-index-mdx-984b34cf82a9ec84260c.js.map