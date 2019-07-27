(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return o}),a.d(t,"default",function(){return s});a(14),a(15),a(8),a(22),a(16),a(0);var n=a(69),r=a(218),i=a(217);var o={},l={_frontmatter:o},c=r.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"FP is easy, but it can seem difficult at first.")),Object(n.b)("p",null,"Functional programming (FP) is a programming paradigm, meaning that it is a way of thinking about software construction based on some fundamental, defining principles. Other examples of programming paradigms include object-oriented programming (OOP) and procedural programming."),Object(n.b)("h2",null,"Why Functional Programming?"),Object(n.b)("p",null,"Functional code tends to be more concise, more predictable, and easier to test than imperative or object-oriented code","—","but if you're unfamiliar with it and the common patterns associated with it, then functional code can also seem a lot more dense."),Object(n.b)("p",null,"Functional Programming revolves around the idea that a program is made of a set of functions and that they follow certain rules. Forget classes and inheritance: the patterns that you will encounter are quite different here."),Object(n.b)("p",null,"FP is the process of building software by:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"composing ",Object(n.b)("em",{parentName:"li"},"pure functions")," and,"),Object(n.b)("li",{parentName:"ul"},"avoiding ",Object(n.b)("em",{parentName:"li"},"shared state"),", ",Object(n.b)("em",{parentName:"li"},"mutable data"),", and ",Object(n.b)("em",{parentName:"li"},"side-effects"),". ")),Object(n.b)("p",null,"Let's learn more about these concepts..."),Object(n.b)("h2",null,"FP from the top down"),Object(n.b)("ul",null,Object(n.b)("li",null,Object(n.b)(i.a,{to:"/deductive/pure-functions/","aria-label":"Pure functions",mdxType:"Link"},"Pure functions"),Object(n.b)("ul",null,Object(n.b)("li",null,Object(n.b)(i.a,{to:"/deductive/pure-functions/#avoid-side-effects",mdxType:"Link"},"Avoid side effects")),Object(n.b)("li",null,Object(n.b)(i.a,{to:"/deductive/pure-functions/#avoid-shared-state",mdxType:"Link"},"Avoid shared state")),Object(n.b)("li",null,Object(n.b)(i.a,{to:"/deductive/pure-functions/#avoid-mutating-state",mdxType:"Link"},"Avoid mutating state")),Object(n.b)("li",null,Object(n.b)(i.a,{to:"/deductive/pure-functions/#const-not-immutable",mdxType:"Link"},Object(n.b)("code",null,"const")," does not mean immutable")),Object(n.b)("li",null,Object(n.b)(i.a,{to:"/deductive/pure-functions/#is-purity-possible",mdxType:"Link"},"Can we write a program using only pure functions?")))),Object(n.b)("li",null,Object(n.b)(i.a,{to:"/deductive/more-fp-concepts/","aria-label":"More FP Concepts",mdxType:"Link"},"More FP concepts"),Object(n.b)("ul",null,Object(n.b)("li",null,Object(n.b)(i.a,{to:"/deductive/more-fp-concepts/#higher-order-functions",mdxType:"Link"},"Higher-order functions for reusability")),Object(n.b)("li",null,Object(n.b)(i.a,{to:"/deductive/more-fp-concepts/#declarative-vs-imperative",mdxType:"Link"},"Declarative vs. imperative style")),Object(n.b)("li",null,Object(n.b)(i.a,{to:"/deductive/more-fp-concepts/#composition",mdxType:"Link"},"Functional composition")),Object(n.b)("li",null,Object(n.b)(i.a,{to:"/deductive/more-fp-concepts/#currying",mdxType:"Link"},"Currying")),Object(n.b)("li",null,Object(n.b)(i.a,{to:"/deductive/more-fp-concepts/#things-to-avoid",mdxType:"Link"},"More things to avoid"))))),Object(n.b)("h2",null,"Appendix"),Object(n.b)("h3",null,"Which languages follow which paradigms? (For the curious...)"),Object(n.b)("p",null,"You might be very surprised. Purely FP, OOP, or procedural langauges are fairly rare. Many langagues begin with a procedural base and then add FP and/or OOP features. Among these are some very popular langauges commonly considered object-oriented."),Object(n.b)("p",null,"C++, C#, Java, and JavaScript are all procedural languages with features of object-oriented languages and functional programming languages. Java in particular has been moving quickly in a functional direction, perhaps spurred on by Scala, which is a multi-paradigm competitor to Java."),Object(n.b)("p",null,"In JavaScript (ECMAScript), the move toward a strongly functional paradigm has been accelerating annually for several years."),Object(n.b)("p",null,"BASIC, C, COBOL, and Fortran are examples of procedural languages still in use."),Object(n.b)("p",null,'Object-oriented languages as most of us know them should really be called "class-oriented", as they make a distinction between classes and instances. Some languages are purely OO, for example Ruby, in which ',Object(n.b)("em",{parentName:"p"},"everything")," is an object. Scala has classes and inheritance, but also strong functional features."),Object(n.b)("p",null,"JavaScript is actually an object-oriented ",Object(n.b)("em",{parentName:"p"},"prototype-based"),' language, which means is lacks the distinction between classes and instances, although the recent (and controversial) addition of "class" syntax hides this a bit. But JavaScript has reasonably strong functional capabilities, and they get stronger with each new version.'),Object(n.b)("p",null,"Popular object-oriented ",Object(n.b)("em",{parentName:"p"},"class-based")," languages include C++, C#, Java (and Groovy), Objective-C, Perl 5, PHP 5, Python, Ruby, and Scala."),Object(n.b)("p",null,"Popular functional programming languages include Erlang and Elixir, F#, Groovy, JavaScript, Java (since version 8), Kotlin, Lisp, Perl 6, PHP, Python, Ruby, Rust, and Scala. ",Object(n.b)("strong",{parentName:"p"},"Pure")," functional programming languages include Elm, Haskell, and PureScript."),Object(n.b)("p",null,'As you can see, most of the popular languages are now multi-paradigm. Ruby, for example, is a "pure" object-oriented class-based language (everything is an object), but Ruby can still be used in a very functional style (and this style is often recommended strongly).'),Object(n.b)("p",null,"There are many ways to classify programming languages. If you're interested, check out this ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/List_of_programming_languages_by_type#Procedural_languages"}),"list of programming languages by type"),". Note how many languages appear under many different types."),Object(n.b)("h3",null,"FP vs. OOP"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://kentcdodds.com/blog/classes-complexity-and-functional-programming"}),"Great blog post from Kent C. Dodds"))),Object(n.b)("h3",null,"Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://immutable-js.github.io/immutable-js/docs/#/"}),"ImmutableJS")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://ramdajs.com/"}),"RamdaJS")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://www.npmjs.com/package/eslint-plugin-fp"}),"ESLint FP plugin")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://medium.com/@cscalfani/"}),"OOP vs. FP")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"goodbye-object-oriented-programming-a59cda4c0e53"}),"Goodby object-oriented programming")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://tsh.io/blog/7-reasons-to-use-functional-programming-on-frontend-1-2/"}),"7 reasons to use FP on the front end"))),Object(n.b)("h3",null,"Sources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0"}),"Master the JavaScript interview: What is FP?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-currying-5652e489cce8"}),"Functional programming paradigms in modern JavaScript: currying")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-3-1b0fd14eb1a7"}),"So you want to be a functional programmer, part 3")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1"}),"Functional programming paradigms in modern JavaScript: pure functions")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://tsh.io/blog/7-reasons-to-use-functional-programming-on-frontend-1-2/"}),"7 reasons to use FP on the front end"))))}s.isMDXComponent=!0},210:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(68),o=a.n(i);a.d(t,"a",function(){return o.a});a(211),a(9).default.enqueue,r.a.createContext({})},211:function(e,t,a){var n;e.exports=(n=a(213))&&n.default||n},212:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP"}}}}},213:function(e,t,a){"use strict";a.r(t);a(52),a(17),a(14),a(15),a(8),a(22);var n=a(0),r=a.n(n),i=a(96);function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(a,!0).forEach(function(t){l(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({location:t,pageResources:a},a.json)):null}},214:function(e,t,a){"use strict";var n=a(215),r=a(0),i=a.n(r),o=a(221),l=a.n(o);function c(e){var t=e.lang,a=e.title,r=n.data.site;return i.a.createElement(l.a,{htmlAttributes:{lang:t},title:a?a+" | "+r.siteMetadata.title:r.siteMetadata.title},i.a.createElement("script",{src:"https://embed.runkit.com","data-element-id":"runkit"}))}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},215:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP",description:"Functional JavaScript for the OO programmer.",author:"@chasm"}}}}},216:function(e,t,a){"use strict";var n=a(212),r=(a(220),a(0)),i=a.n(r),o=(a(16),a(41),a(210)),l=a(23);function c(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{to:"/inductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Bottom-up"),i.a.createElement(o.a,{to:"/deductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Top-down"),i.a.createElement(o.a,{to:"/patterns-antipatterns",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Patterns"))}function s(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{to:"/inductive/reusability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Reusability"),i.a.createElement(o.a,{to:"/inductive/immutability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Variables"),i.a.createElement(o.a,{to:"/inductive/iteration",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Looping"),i.a.createElement(o.a,{to:"/inductive/composition",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pipelines"))}function u(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{to:"/deductive/pure-functions/",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pure functions"),i.a.createElement(o.a,{to:"/deductive/more-fp-concepts",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"More FP concepts"))}function m(e){switch(e.location.pathname.split("/")[1]){case"inductive":return i.a.createElement(s,null);case"deductive":return i.a.createElement(u,null);default:return i.a.createElement(c,null)}}var b=function(e){var t=e.siteTitle,a=e.location,n=function(e){switch(e.pathname.split("/")[1]){case"inductive":return"ForestGreen";case"deductive":return"MediumBlue";case"patterns-antipatterns":return"Maroon";default:return"RebeccaPurple"}}(a);return i.a.createElement("header",{style:{background:n,marginBottom:"1.45rem"}},i.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0,display:"inline-block",flexGrow:1}},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("div",{style:{flexShrink:1}},i.a.createElement(m,{location:a}))))};function p(e){return i.a.createElement(l.Location,null,function(t){return i.a.createElement(b,Object.assign({},t,e))})}b.defaultProps={siteTitle:""};t.a=function(e){var t=e.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))}},217:function(e,t,a){"use strict";a.d(t,"a",function(){return s});a(14),a(15),a(8),a(22),a(16);var n=a(210),r=a(0),i=a.n(r),o=a(23);var l=/#|\?/g,c=function(e){return function(){return Object(o.navigate)(e)}};function s(e){var t=e.children,a=e.to,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["children","to"]);return l.test(a)?i.a.createElement("a",Object.assign({onClick:c(a)},r),t):i.a.createElement(n.a,Object.assign({to:a},r),t)}},218:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(210);function o(){return r.a.createElement("span",{className:"separator"},"»")}function l(e){var t=e.title,a=e.trail;return void 0===a?null:r.a.createElement("p",null,function(e,t){return void 0===t&&(t=[]),r.a.createElement(r.a.Fragment,null,t.map(function(e){var t=e.href,a=e.label;return r.a.createElement(n.Fragment,{key:t},r.a.createElement(i.a,{to:t},a),r.a.createElement(o,null))}),e)}(t,a))}var c=a(216),s=a(214);t.a=function(e){var t=e.children,a=e.pageContext.frontmatter,n=a.title,i=a.trail;return r.a.createElement(c.a,null,r.a.createElement(s.a,{title:n}),r.a.createElement(l,{title:n,trail:i}),r.a.createElement("article",null,t))}}}]);
//# sourceMappingURL=component---src-pages-deductive-index-mdx-a4c7d0857918a1987745.js.map