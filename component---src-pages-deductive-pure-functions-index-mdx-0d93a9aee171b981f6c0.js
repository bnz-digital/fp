(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{207:function(e,t,n){"use strict";n.r(t);n(14),n(15),n(8),n(22),n(16),n(0);var a=n(69),o=n(219),r=n(221),i=n(218),s=n(220),l=n(230),c={code:"let mutableDollars = 1 // Mutable binding\n\n// Increment mutableDollars\nmutableDollars += 1\n\nconsole.log(`mutableDollars is ${mutableDollars}, but what was it a moment ago?`)\nconsole.log('History has been lost')\n\nconst dollars = 1 // Cannot be reassigned (hence, immutable here)\n\n// We can only make a new copy\nconst newDollars = dollars + 1\n\nconsole.log(`dollars is still ${dollars}; newDollars is ${newDollars}`)\nconsole.log('History is preserved')\n\ntry {\n  dollars += 1 // Error!\n} catch (e) {\n  console.log(`Can't reassign dollars: ${e}`)\n}",imports:"",requires:""},u={code:"const state1 = { saved: false }\nconst state2 = { saved: false }\n\n// MUTATION! DON'T DO THIS!\nfunction saveByMutation (obj) {\n  obj.saved = true\n\n  return obj\n}\n\n// IMMUTABLE - returns a copy. DO THIS!\nconst saveByCopy = obj => ({ ...obj, saved: true })\n\nconsole.log('saveByMutation(state1) returns:', saveByMutation(state1))\nconsole.log('Now state1 is:', state1)\nconsole.log('saveByCopy(state2) returns:', saveByCopy(state2))\nconsole.log('Now state2 is:', state2)",imports:"",requires:""},b={code:"const obj = { x: 1, inner: { y: 2, z: 3 } }\n\n// We can update properties of obj even though it is a const\nobj.x = 5\nconsole.log(`After obj.x = 5, obj is:`, obj)\n\n// Object.freeze mutates the object, unfortunately, and\n// freezes only one level deep\nObject.freeze(obj)\n\nobj.x = 9\n\n// Unfortunately, the above fails silently\nconsole.log(`After freezing and obj.x = 9, obj is:`, obj)\n\n// But what happens when I try to set obj.inner.z?\nobj.inner.z = 7\n\n// Unfortunately, the above fails silently\nconsole.log(`Despite freezing and after obj.inner.z = 7, obj is:`, obj)",imports:"",requires:""},m={code:"// Impure functions (AVOID THESE!)\n// This function yields a different result when called multiple times,\n// hence it's not a pure function\nconst getRandomNumber = () => Math.random().toFixed(2)\n\nconsole.log(`First call impure: ${getRandomNumber()}`)\nconsole.log(`Second call impure: ${getRandomNumber()}`)\n\n// Pure functions\n// Calling this function with the same arguments yields the same result,\n// even when called multiple times\nconst add = (x, y) => x + y\n\nconsole.log(`First call pure: ${add(2, 3)}`)\nconsole.log(`Second call pure: ${add(2, 3)}`)",imports:"",requires:""},d={code:"// The pure version\nconst addPure = (x, y) => x + y\n\nconsole.log(`First call to  \\`addPure(2, 3)\\`: ${addPure(2, 3)}`)\nconsole.log(`Second call to  \\`addPure(2, 3)\\`: ${addPure(2, 3)}`)\n\nlet x = 2 // Shared state: DON'T DO THIS!\n\n// Our impure version depends on a variable outside its scope\nconst addImpure = y => x + y\n\nconsole.log(`\\`x\\` is \\`2\\`. Let's call \\`addImpure(3)\\`: ${addImpure(3)}`)\n\nx = 6\n\nconsole.log(`\\`x\\` is now \\`6\\`. Now let's call \\`addImpure(3)\\` again: ${addImpure(3)}`)",imports:"",requires:""},p={code:"// With shared state, the order in which function calls are made\n// changes the result of the function calls\nconst x = { value: 2 }\n\n// These operate on the shared state x\nconst incrementX = () => x.value += 1\nconst doubleX = () => x.value *= 2\n\nincrementX()\ndoubleX()\n\nconsole.log(`The value of x after increment then double is ${x.value}`)\n\n// Reset x\nx.value = 2\n\n// Run the functions in reverse order\ndoubleX()\nincrementX()\n\nconsole.log(`The value of x after double then increment is ${x.value}`)",imports:"",requires:""},f={code:"// This function depends on a side effect (AVOID THIS)\nconst displayName = name => console.log(`My name is ${name}`)\n\nconst result = displayName('Prateek') // Logs 'My name is Prateek' to the console\n\nconsole.log(`displayName('Prateek') returned ${result}`)",imports:"",requires:""};n.d(t,"_frontmatter",function(){return h}),n.d(t,"default",function(){return y});var h={},g={_frontmatter:h},j=o.a;function y(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(j,Object.assign({},g,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A ",Object(a.b)(s.a,{href:"https://en.wikipedia.org/wiki/Pure_function",mdxType:"OffsiteLink"},"pure function")," is a function which:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Given the same inputs, always returns the same output, and"),Object(a.b)("li",{parentName:"ol"},"Has no side-effects (we'll explain below)")),Object(a.b)(r.a,Object.assign({},m,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"If you run the above Runkit multiple times, you'll see that the ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"getRandomNumber")," function returns an unpredictable number between 0 and 1, wheras given the same ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"x")," and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"y")," values, the ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"add")," function will always return the same result, e.g., ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"add(2, 3) // returns 5"),"."),Object(a.b)("p",null,"Because pure functions are ",Object(a.b)(s.a,{href:"https://en.wikipedia.org/wiki/Referential_transparency",mdxType:"OffsiteLink"},"referentially transparent"),", we can use ",Object(a.b)(s.a,{href:"https://en.wikipedia.org/wiki/Substitution_(algebra",mdxType:"OffsiteLink"},"substitution"),") to replace a pure function call with its result without changing the meaning of the program. This makes it easier to reason about our programs."),Object(a.b)("p",null,"Returning the same result when called more than once is also called ",Object(a.b)(s.a,{href:"https://en.wikipedia.org/wiki/Idempotence",mdxType:"OffsiteLink"},"idempotency"),"."),Object(a.b)("p",null,"Let's look at another example using shared state:"),Object(a.b)(r.a,Object.assign({},d,{mdxType:"CodeBlock"})),Object(a.b)("h3",{id:"avoid-side-effects"},"Avoid side effects"),Object(a.b)("p",null,"A ",Object(a.b)(s.a,{href:"https://en.wikipedia.org/wiki/Side_effect_(computer_science)",mdxType:"OffsiteLink"},"side effect")," is any application state change that is observable outside the called function other than its return value. Side effects include:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Modifying shared state: any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)"),Object(a.b)("li",{parentName:"ul"},"Logging to the console"),Object(a.b)("li",{parentName:"ul"},"Writing to the screen"),Object(a.b)("li",{parentName:"ul"},"Writing to a file"),Object(a.b)("li",{parentName:"ul"},"Writing to the network"),Object(a.b)("li",{parentName:"ul"},"Triggering any external process"),Object(a.b)("li",{parentName:"ul"},"Calling any other functions with side-effects")),Object(a.b)(r.a,Object.assign({},f,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"As you can see, the effect of calling ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"displayName")," was to log a message to the console. The result returned from the function was ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"undefined"),". So the ",Object(a.b)("em",{parentName:"p"},"effect")," of the function was ",Object(a.b)("em",{parentName:"p"},"not")," solely dependent on the value returned from the function. This, too, is an impure function and should be avoided whenever possible."),Object(a.b)("p",null,"Avoiding side effects makes the effects of a program much easier to understand, and much easier to test."),Object(a.b)("h3",{id:"avoid-shared-state"},"Avoid shared state"),Object(a.b)("p",null,"Shared state is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes. A shared scope can include global scope or closure scopes. Often, in object-oriented programming, objects are shared between scopes by adding properties to other objects."),Object(a.b)("p",null,"For example, a computer game might have a master game object, with characters and game items stored as properties owned by that object. Functional programming avoids shared state","—","instead relying on immutable data structures and pure calculations to derive new data from existing data. "),Object(a.b)("p",null,"The problem with shared state is that in order to understand the effects of a function, you have to know ",Object(a.b)("em",{parentName:"p"},"the entire history of every shared variable that the function uses or affects"),". Race conditions are a very common bug associated with shared state."),Object(a.b)("p",null,"Another common problem associated with shared state is that changing the order in which functions are called can cause a cascade of failures because functions that act on shared state are timing dependent:"),Object(a.b)(r.a,Object.assign({},p,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"The above is obviously oversimplified, but it's not difficult to imagine a more complex example where shared state could get you in trouble. Also, shared state makes it difficult to thread or parallel process. In FP, we avoid shared state as much as possible."),Object(a.b)("h3",{id:"avoid-mutating-state"},"Avoid mutating state"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Immutability")," is a central concept of functional programming because without it, the data flow in your program is ",Object(a.b)("strong",{parentName:"p"},"lossy"),". State history is abandoned, and strange bugs can creep into your software."),Object(a.b)("p",null,"Mutation causes defects. If you have a dollar, and I give you another dollar, it does not change the fact that a moment ago you only had one dollar, and now you have two. Again, mutation ",Object(a.b)("em",{parentName:"p"},"erases history"),", which can manifest as bugs in the program."),Object(a.b)("p",null,"Here's an example:"),Object(a.b)(r.a,Object.assign({},c,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"If you have ever dubgged code where you have tried to find where a variable's value changed to ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"undefined"),", then you'll appreciate ",Object(a.b)("em",{parentName:"p"},"immutability"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This means when we practice functional JavaScript, ",Object(a.b)("em",{parentName:"strong"},"everything is a ",Object(a.b)("code",Object.assign({parentName:"em"},{className:"language-text"}),"const")),".")," We will never use ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"var")," or ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"let"),". "),Object(a.b)("p",null,"When you need to change the value of a variable, you'll create a new variable. Example:"),Object(a.b)(r.a,Object.assign({},u,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"As you can see from the example above, making a copy of state rather than mutating it means that our initial state remains unchanged, so we have lost no history (we can always discard it if we don't need it)."),Object(a.b)("h3",{id:"const-not-immutable"},Object(a.b)("code",null,"const")," does not mean immutable"),Object(a.b)("p",null,"In JavaScript, it's important not to confuse ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"const"),", with immutability. ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"const")," creates a variable name binding which ",Object(a.b)("em",{parentName:"p"},"can't be reassigned")," after creation. ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"const")," does not create immutable objects!"),Object(a.b)("p",null,"If your variable name is bound to a primitive value such as a number, string, or boolean, then ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"const"),' is "effectively" immutable. But if your variable points to a complex object, then although the object itself cannot be replaced, ',Object(a.b)("em",{parentName:"p"},"properties on the object can be mutated.")," This is not true immutability."),Object(a.b)("p",null,"Truly immutable objects can't be changed at all. You can make a value truly immutable by deep freezing the object. JavaScript has a method that freezes an object one-level deep:"),Object(a.b)(r.a,Object.assign({},b,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"As you can see, the top level primitive properties of a frozen object can’t change, but any property which is also an object (including arrays, etc…) can still be mutated","—","so even frozen objects are not immutable unless you walk the whole object tree and freeze every object property."),Object(a.b)("p",null,"A better way to freeze objects to ensure that they are immutable is to write your own ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"deepFreeze")," function that returns a completely frozen ",Object(a.b)("em",{parentName:"p"},"copy")," of the object:"),Object(a.b)(r.a,Object.assign({},l.a,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"There are also several libraries for creating immutable objects (e.g., ",Object(a.b)(s.a,{href:"https://github.com/immutable-js/immutable-js",mdxType:"OffsiteLink"},"Immutable.js"),") or for simply freezing objects recursively (e.g., ",Object(a.b)(s.a,{href:"https://www.npmjs.com/package/deep-freeze",mdxType:"OffsiteLink"},"deep-freeze"),")."),Object(a.b)("p",null,"This is probably overkill in production. The best way to keep things immutable in JavaScript is with best practices. Learn the techniques and the gotchas and practice them religiously. Use libraries such as ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"deep-freeze")," (or write your own utility function) in your ",Object(a.b)("strong",{parentName:"p"},"tests")," to make sure that your code isn't mutating variables or sharing state."),Object(a.b)("h3",{id:"is-purity-possible"},"Can we write a program using only pure functions?"),Object(a.b)("p",null,"No. "),Object(a.b)("p",null,"Any function that reaches out for the DOM or uses variables that are not in its scope is impure. But how can our program work if we can't write out to the DOM (or to logs)? We need I/O."),Object(a.b)("p",null,'In "pure" functional programming languages, the "impure" I/O is isolated in its own module, as is anything else impure. This permits the bulk of the application to be kept pure. The best practice is to do the  same in your code.'),Object(a.b)("p",null,"The goal of FP is to compose the majority of your program from small pieces of logic that can be combined together and reused. Side effects are inevitable, but by limiting them to certain places in your application, they will be easier to manage and track."),Object(a.b)("p",null,"Next, ",Object(a.b)(i.a,{to:"/deductive/more-fp-concepts/","aria-label":"More FP Concepts",mdxType:"Link"},"More FP concepts"),"."),Object(a.b)("small",null,"Errors, bugs, suggestions, questions? Contact ",Object(a.b)("a",{href:"mailto:Prateek_Sharma@bnz.co.nz"},"Prateek Sharma")),".")}y.isMDXComponent=!0},210:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(68),i=n.n(r);n.d(t,"a",function(){return i.a});n(211),n(9).default.enqueue,o.a.createContext({})},211:function(e,t,n){var a;e.exports=(a=n(213))&&a.default||a},212:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP"}}}}},213:function(e,t,n){"use strict";n.r(t);n(52),n(17),n(14),n(15),n(8),n(22);var a=n(0),o=n.n(a),r=n(96);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(r.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},214:function(e,t,n){"use strict";var a=n(215),o=n(0),r=n.n(o),i=n(223),s=n.n(i);function l(e){var t=e.lang,n=e.title,o=a.data.site;return r.a.createElement(s.a,{htmlAttributes:{lang:t},title:n?n+" | "+o.siteMetadata.title:o.siteMetadata.title},r.a.createElement("script",{src:"https://embed.runkit.com","data-element-id":"runkit"}))}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},215:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP",description:"Functional JavaScript for the OO programmer.",author:"@chasm"}}}}},216:function(e,t,n){"use strict";var a=n(212),o=(n(222),n(0)),r=n.n(o),i=(n(16),n(41),n(210)),s=n(23);function l(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{to:"/inductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Bottom-up"),r.a.createElement(i.a,{to:"/deductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Top-down"),r.a.createElement(i.a,{to:"/cypress",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Cypress"))}function c(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{to:"/inductive/reusability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Reusability"),r.a.createElement(i.a,{to:"/inductive/immutability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Variables"),r.a.createElement(i.a,{to:"/inductive/iteration",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Looping"),r.a.createElement(i.a,{to:"/inductive/composition",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pipelines"))}function u(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{to:"/deductive/pure-functions/",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pure functions"),r.a.createElement(i.a,{to:"/deductive/more-fp-concepts",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"More FP concepts"))}function b(e){switch(e.location.pathname.split("/")[1]){case"inductive":return r.a.createElement(c,null);case"deductive":return r.a.createElement(u,null);default:return r.a.createElement(l,null)}}var m=function(e){var t=e.siteTitle,n=e.location,a=function(e){switch(e.pathname.split("/")[1]){case"inductive":return"ForestGreen";case"deductive":return"MediumBlue";case"cypress":return"Maroon";default:return"RebeccaPurple"}}(n);return r.a.createElement("header",{style:{background:a,marginBottom:"1.45rem"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0,display:"inline-block",flexGrow:1}},r.a.createElement(i.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),r.a.createElement("div",{style:{flexShrink:1}},r.a.createElement(b,{location:n}))))};function d(e){return r.a.createElement(s.Location,null,function(t){return r.a.createElement(m,Object.assign({},t,e))})}m.defaultProps={siteTitle:""};t.a=function(e){var t=e.children,n=a.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{siteTitle:n.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t)))}},217:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(0),o=n.n(a),r=n(445),i=n(443),s=n(444);function l(e){var t=e.code,n=void 0===t?"":t,a=e.language,l=void 0===a?"javascript":a,c=e.showLineNumbers,u=void 0===c||c,b=e.startingLineNumber,m=void 0===b?1:b,d=e.theme,p=void 0===d?"light":d,f=e.warn,h=void 0===f?function(){return null}:f;return o.a.createElement(o.a.Fragment,null,h(),o.a.createElement(r.a,{language:l,style:"light"===p?i.a:s.a,showLineNumbers:u,startingLineNumber:m},n))}},218:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(14),n(15),n(8),n(22),n(16);var a=n(210),o=n(0),r=n.n(o),i=n(23);var s=function(e){return function(t){t.preventDefault,Object(i.navigate)(e)}};function l(e){var t=e.children,n=e.to,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","to"]);return n.indexOf("#")>-1||n.indexOf("?")>-1?r.a.createElement("a",Object.assign({onClick:s(n),href:n},o),t):r.a.createElement(a.a,Object.assign({to:n},o),t)}},219:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(210);function i(){return o.a.createElement("span",{className:"separator"},"»")}function s(e){var t=e.title,n=e.trail;return void 0===n?null:o.a.createElement("p",null,function(e,t){return void 0===t&&(t=[]),o.a.createElement(o.a.Fragment,null,t.map(function(e){var t=e.href,n=e.label;return o.a.createElement(a.Fragment,{key:t},o.a.createElement(r.a,{to:t},n),o.a.createElement(i,null))}),e)}(t,n))}var l=n(216),c=n(214);t.a=function(e){var t=e.children,n=e.pageContext.frontmatter,a=n.title,r=n.trail;return o.a.createElement(l.a,null,o.a.createElement(c.a,{title:a}),o.a.createElement(s,{title:a,trail:r}),o.a.createElement("article",null,t))}},220:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),o=n.n(a);function r(e){var t=e.children,n=e.href;return o.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer","aria-label":"Offsite link: opens in new window",className:"offsite-link",title:"Offsite link: opens in a new window"},t)}},221:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(0),o=n.n(a),r=n(224),i=n.n(r),s=n(217);function l(e){var t=e.code,n=void 0===t?"":t,r=e.imports,l=void 0===r?"":r,c=e.requires,u=void 0===c?"":c,b=e.theme,m=void 0===b?"light":b,d=e.warn,p=void 0===d?function(){return null}:d,f=Object(a.useState)(!1),h=f[0],g=f[1];return Object(a.useEffect)(function(){var e=setInterval(function(){g(Boolean(window)&&Boolean(window.RunKit))},1e3);return h&&clearInterval(e),function(){return clearInterval(e)}},[]),h?o.a.createElement("div",{className:"code-block"},p(),o.a.createElement(i.a,{source:""+u+n,nodeVersion:"12",theme:"solarized-"+m})):o.a.createElement(s.a,{code:""+l+n,theme:m,warn:p})}},230:function(e,t,n){"use strict";t.a={code:"// Object.freeze stupidly mutates in place instead of returning a copy. Doh!\nfunction freezeRecursively (obj) {\n  Object.freeze(obj)\n  \n  Object.getOwnPropertyNames(obj).map(\n    prop => {\n      if (typeof obj[prop] === 'object') {\n        freezeRecursively(obj[prop]) // here the function calls itself\n      }\n    }\n  )\n}\n\n// So we will make a copy and freeze that using our above function\nfunction freeze (obj) {\n  const out = { ...obj }\n  \n  freezeRecursively(out)\n  \n  return out\n}\n\n// Allowing us to use it like this\nconst obj = freeze({\n  name: 'Bob',\n  nicknames: ['J.R.', 'Dobbs'],\n  favourites: {\n    colour: 'blue',\n    number: 7,\n    value: 'slack'\n  }\n})\n\nobj.name = 'Tom'\nconsole.log(`obj.name !== 'Tom': Still '${obj.name}'.`)\n\nobj.nicknames[2] = 'Bobby'\nconsole.log(`obj.nicknames does not include 'Bobby': Still '${obj.nicknames.join(', ')}'.`)\n\nobj.favourites.colour = 'red'\nconsole.log(`obj.favourites.colour !== 'red': Still '${obj.favourites.colour}'. Yay!`)",imports:"",requires:""}}}]);
//# sourceMappingURL=component---src-pages-deductive-pure-functions-index-mdx-0d93a9aee171b981f6c0.js.map