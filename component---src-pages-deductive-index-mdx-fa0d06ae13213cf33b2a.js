(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return l}),n.d(t,"default",function(){return u});n(14),n(15),n(8),n(22),n(16),n(0);var a=n(74),r=n(221),i=n(219),o=n(222);var l={},c={_frontmatter:l},s=r.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"FP is easy, but it can seem difficult at first.")),Object(a.b)("p",null,"Functional programming (FP) is a programming paradigm, meaning that it is a way of thinking about software construction based on some fundamental, defining principles. Other examples of programming paradigms include object-oriented programming (OOP) and procedural programming."),Object(a.b)("h2",null,"Why Functional Programming?"),Object(a.b)("p",null,"Functional code tends to be more concise, more predictable, and easier to test than imperative or object-oriented code","—","but if you're unfamiliar with it and the common patterns associated with it, then functional code can also seem a lot more dense."),Object(a.b)("p",null,"Functional Programming revolves around the idea that a program is made of a set of functions and that they follow certain rules. Forget classes and inheritance: the patterns that you will encounter are quite different here."),Object(a.b)("p",null,"FP is the process of building software by:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"composing ",Object(a.b)("em",{parentName:"li"},"pure functions")," and,"),Object(a.b)("li",{parentName:"ul"},"avoiding ",Object(a.b)("em",{parentName:"li"},"shared state"),", ",Object(a.b)("em",{parentName:"li"},"mutable data"),", and ",Object(a.b)("em",{parentName:"li"},"side-effects"),". ")),Object(a.b)("p",null,"Let's learn more about these concepts..."),Object(a.b)("h2",null,"FP from the top down"),Object(a.b)("ul",null,Object(a.b)("li",null,Object(a.b)(i.a,{to:"/deductive/pure-functions/","aria-label":"Pure functions",mdxType:"Link"},"Pure functions"),Object(a.b)("ul",null,Object(a.b)("li",null,Object(a.b)(i.a,{to:"/deductive/pure-functions/#avoid-side-effects",mdxType:"Link"},"Avoid side effects")),Object(a.b)("li",null,Object(a.b)(i.a,{to:"/deductive/pure-functions/#avoid-shared-state",mdxType:"Link"},"Avoid shared state")),Object(a.b)("li",null,Object(a.b)(i.a,{to:"/deductive/pure-functions/#avoid-mutating-state",mdxType:"Link"},"Avoid mutating state")),Object(a.b)("li",null,Object(a.b)(i.a,{to:"/deductive/pure-functions/#const-not-immutable",mdxType:"Link"},Object(a.b)("code",null,"const")," does not mean immutable")),Object(a.b)("li",null,Object(a.b)(i.a,{to:"/deductive/pure-functions/#is-purity-possible",mdxType:"Link"},"Can we write a program using only pure functions?")))),Object(a.b)("li",null,Object(a.b)(i.a,{to:"/deductive/more-fp-concepts/","aria-label":"More FP Concepts",mdxType:"Link"},"More FP concepts"),Object(a.b)("ul",null,Object(a.b)("li",null,Object(a.b)(i.a,{to:"/deductive/more-fp-concepts/#higher-order-functions",mdxType:"Link"},"Higher-order functions aid reusability")),Object(a.b)("li",null,Object(a.b)(i.a,{to:"/deductive/more-fp-concepts/#declarative-vs-imperative",mdxType:"Link"},"Declarative vs. imperative style")),Object(a.b)("li",null,Object(a.b)(i.a,{to:"/deductive/more-fp-concepts/#composition",mdxType:"Link"},"Functional composition")),Object(a.b)("li",null,Object(a.b)(i.a,{to:"/deductive/more-fp-concepts/#currying",mdxType:"Link"},"Currying")),Object(a.b)("li",null,Object(a.b)(i.a,{to:"/deductive/more-fp-concepts/#things-to-avoid",mdxType:"Link"},"More things to avoid"))))),Object(a.b)("h2",null,"Appendix"),Object(a.b)("h3",null,"Which languages follow which paradigms? (For the curious...)"),Object(a.b)("p",null,"You might be very surprised. Purely FP, OOP, or procedural langauges are fairly rare. Many langagues begin with a procedural base and then add FP and/or OOP features. Among these are some very popular langauges commonly considered object-oriented."),Object(a.b)("p",null,"C++, C#, Java, and JavaScript are all procedural languages with features of object-oriented languages and functional programming languages. Java in particular has been moving quickly in a functional direction, perhaps spurred on by Scala, which is a multi-paradigm competitor to Java."),Object(a.b)("p",null,"In JavaScript (ECMAScript), the move toward a strongly functional paradigm has been accelerating annually for several years."),Object(a.b)("p",null,"BASIC, C, COBOL, and Fortran are examples of procedural languages still in use."),Object(a.b)("p",null,'Object-oriented languages as most of us know them should really be called "class-oriented", as they make a distinction between classes and instances. Some languages are purely OO, for example Ruby, in which ',Object(a.b)("em",{parentName:"p"},"everything")," is an object. Scala has classes and inheritance, but also strong functional features."),Object(a.b)("p",null,"JavaScript is actually an object-oriented ",Object(a.b)("em",{parentName:"p"},"prototype-based"),' language, which means it lacks the distinction between classes and instances, although the recent (and controversial) addition of "class" syntax hides this a bit. But JavaScript has reasonably strong functional capabilities, and they get stronger with each new version.'),Object(a.b)("p",null,"Popular object-oriented ",Object(a.b)("em",{parentName:"p"},"class-based")," languages include C++, C#, Java (and Groovy), Objective-C, Perl 5, PHP 5, Python, Ruby, and Scala."),Object(a.b)("p",null,"Popular functional programming languages include Erlang and Elixir, F#, Groovy, JavaScript, Java (since version 8), Kotlin, Lisp, Perl 6, PHP, Python, Ruby, Rust, and Scala. ",Object(a.b)("strong",{parentName:"p"},"Pure")," functional programming languages include Elm, Haskell, and PureScript."),Object(a.b)("p",null,'As you can see, most of the popular languages are now multi-paradigm. Ruby, for example, is a "pure" object-oriented class-based language (everything is an object), but Ruby can still be used in a very functional style (and this style is often strongly recommended).'),Object(a.b)("p",null,"There are many ways to classify programming languages. If you're interested, check out this ",Object(a.b)(o.a,{href:"https://en.wikipedia.org/wiki/List_of_programming_languages_by_type#Procedural_languages",mdxType:"OffsiteLink"},"list of programming languages by type"),". Note how many languages appear under many different types."),Object(a.b)("h3",null,"FP vs. OOP"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)(o.a,{href:"https://kentcdodds.com/blog/classes-complexity-and-functional-programming",mdxType:"OffsiteLink"},"Great blog post from Kent C. Dodds"))),Object(a.b)("h3",null,"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)(o.a,{href:"https://immutable-js.github.io/immutable-js/docs/#/",mdxType:"OffsiteLink"},"ImmutableJS")),Object(a.b)("li",{parentName:"ul"},Object(a.b)(o.a,{href:"https://ramdajs.com/",mdxType:"OffsiteLink"},"RamdaJS")),Object(a.b)("li",{parentName:"ul"},Object(a.b)(o.a,{href:"https://www.npmjs.com/package/eslint-plugin-fp",mdxType:"OffsiteLink"},"ESLint FP plugin")),Object(a.b)("li",{parentName:"ul"},Object(a.b)(o.a,{href:"https://medium.com/@cscalfani/",mdxType:"OffsiteLink"},"OOP vs. FP")),Object(a.b)("li",{parentName:"ul"},Object(a.b)(o.a,{href:"goodbye-object-oriented-programming-a59cda4c0e53",mdxType:"OffsiteLink"},"Goodby object-oriented programming")),Object(a.b)("li",{parentName:"ul"},Object(a.b)(o.a,{href:"https://tsh.io/blog/7-reasons-to-use-functional-programming-on-frontend-1-2/",mdxType:"OffsiteLink"},"7 reasons to use FP on the front end"))),Object(a.b)("h3",null,"Sources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)(o.a,{href:"https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0",mdxType:"OffsiteLink"},"Master the JavaScript interview: What is FP?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)(o.a,{href:"https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-currying-5652e489cce8",mdxType:"OffsiteLink"},"Functional programming paradigms in modern JavaScript: currying")),Object(a.b)("li",{parentName:"ul"},Object(a.b)(o.a,{href:"https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-3-1b0fd14eb1a7",mdxType:"OffsiteLink"},"So you want to be a functional programmer, part 3")),Object(a.b)("li",{parentName:"ul"},Object(a.b)(o.a,{href:"https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1",mdxType:"OffsiteLink"},"Functional programming paradigms in modern JavaScript: pure functions")),Object(a.b)("li",{parentName:"ul"},Object(a.b)(o.a,{href:"https://tsh.io/blog/7-reasons-to-use-functional-programming-on-frontend-1-2/",mdxType:"OffsiteLink"},"7 reasons to use FP on the front end"))),Object(a.b)("small",null,"Errors, bugs, suggestions, questions? Contact ",Object(a.b)("a",{href:"mailto:Prateek_Sharma@bnz.co.nz"},"Prateek Sharma")),".")}u.isMDXComponent=!0},210:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(68),o=n.n(i);n.d(t,"a",function(){return o.a});n(211),n(10).default.enqueue,r.a.createContext({})},211:function(e,t,n){var a;e.exports=(a=n(214))&&a.default||a},213:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP"}}}}},214:function(e,t,n){"use strict";n.r(t);n(53),n(18),n(14),n(15),n(8),n(22);var a=n(0),r=n.n(a),i=n(99);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(i.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},215:function(e,t,n){"use strict";var a=n(216),r=n(0),i=n.n(r),o=n(419),l=n.n(o);function c(e){var t=e.lang,n=e.title,r=a.data.site;return i.a.createElement(l.a,{htmlAttributes:{lang:t},title:n?n+" | "+r.siteMetadata.title:r.siteMetadata.title},i.a.createElement("script",{src:"https://embed.runkit.com","data-element-id":"runkit"}))}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},216:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP",description:"Functional JavaScript for the OO programmer.",author:"@chasm"}}}}},217:function(e,t,n){"use strict";var a=n(213),r=(n(418),n(0)),i=n.n(r),o=(n(16),n(41),n(210)),l=n(23);function c(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{to:"/inductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Bottom-up"),i.a.createElement(o.a,{to:"/deductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Top-down"),i.a.createElement(o.a,{to:"/cypress",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Cypress"))}function s(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{to:"/inductive/reusability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Reusability"),i.a.createElement(o.a,{to:"/inductive/immutability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Variables"),i.a.createElement(o.a,{to:"/inductive/iteration",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Looping"),i.a.createElement(o.a,{to:"/inductive/composition",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pipelines"))}function u(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{to:"/deductive/pure-functions/",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pure functions"),i.a.createElement(o.a,{to:"/deductive/more-fp-concepts",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"More FP concepts"))}function m(e){switch(e.location.pathname.split("/")[1]){case"inductive":return i.a.createElement(s,null);case"deductive":return i.a.createElement(u,null);default:return i.a.createElement(c,null)}}var p=function(e){var t=e.siteTitle,n=e.location,a=function(e){switch(e.pathname.split("/")[1]){case"inductive":return"ForestGreen";case"deductive":return"MediumBlue";case"cypress":return"Maroon";default:return"RebeccaPurple"}}(n);return i.a.createElement("header",{style:{background:a,marginBottom:"1.45rem"}},i.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0,display:"inline-block",flexGrow:1}},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("div",{style:{flexShrink:1}},i.a.createElement(m,{location:n}),i.a.createElement("span",{style:{display:"inline-block",padding:"0 0.5rem"}},JSON.stringify(n.pathname)))))};function d(e){return i.a.createElement(l.Location,null,function(t){return i.a.createElement(p,Object.assign({},t,e))})}p.defaultProps={siteTitle:""};t.a=function(e){var t=e.children,n=a.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:n.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))}},219:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(14),n(15),n(8),n(22),n(16);var a=n(210),r=n(0),i=n.n(r),o=n(23);var l=function(e){return function(t){t.preventDefault;var n=window&&"localhost"===window.location.hostname?e:"/fp"+e;Object(o.navigate)(n)}};function c(e){var t=e.children,n=e.to,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","to"]);return n.indexOf("#")>-1||n.indexOf("?")>-1?i.a.createElement("a",Object.assign({onClick:l(n)},r,{style:{cursor:"pointer"}}),t):i.a.createElement(a.a,Object.assign({to:n},r),t)}},221:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(210);function o(){return r.a.createElement("span",{className:"separator"},"»")}function l(e){var t=e.title,n=e.trail;return void 0===n?null:r.a.createElement("p",null,function(e,t){return void 0===t&&(t=[]),r.a.createElement(r.a.Fragment,null,t.map(function(e){var t=e.href,n=e.label;return r.a.createElement(a.Fragment,{key:t},r.a.createElement(i.a,{to:t},n),r.a.createElement(o,null))}),e)}(t,n))}var c=n(217),s=n(215);t.a=function(e){var t=e.children,n=e.pageContext.frontmatter,a=n.title,i=n.trail;return r.a.createElement(c.a,null,r.a.createElement(s.a,{title:a}),r.a.createElement(l,{title:a,trail:i}),r.a.createElement("article",null,t))}},222:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),r=n.n(a),i=n(416),o=n(420),l=i.a.span.withConfig({displayName:"OffsiteLink__Link",componentId:"sc-1q37dqh-0"})([".react-icon{color:LightSlateGray;display:inline-block;padding-left:0.3rem;vertical-align:text-top;}"]);function c(e){var t=e.children,n=e.href;return r.a.createElement(l,null,r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer","aria-label":"Offsite link: opens in new window",className:"offsite-link",title:"Offsite link: opens in a new window"},t),r.a.createElement(o.a,{className:"react-icon",size:"1.3rem"}))}}}]);
//# sourceMappingURL=component---src-pages-deductive-index-mdx-fa0d06ae13213cf33b2a.js.map