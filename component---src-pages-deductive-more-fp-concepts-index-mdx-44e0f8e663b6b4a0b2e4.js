(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{205:function(e,t,n){"use strict";n.r(t);n(14),n(15),n(8),n(22),n(16),n(0);var a=n(69),r=n(219),o=n(221),i=n(217),s=n(218),c=n(220),l={code:"const { curry } = require('ramda')\n\nconst fetchData = curry((method, url, data) => {\n  console.log(`Sending a ${method} request to ${url} with query ${data}.`)\n})\n\nconst postRequest = fetchData('POST')\nconst postUser = postRequest('/users')\nconst postPet = postRequest('/pets')\n\npostUser(JSON.stringify({ nameGiven: 'Bob', nameFamily: 'Dobbs' }))\npostUser(JSON.stringify({ nameGiven: 'Bob', nameFamily: 'Dole' }))\n\npostPet(JSON.stringify({ name: 'Bob', species: 'dog' }))",imports:"",requires:""},u={code:"const { add, compose, negate, pipe, sum } = require('ramda')\n\n// compose applies the functions from  right to left\nconst compute = compose(\n  negate,   // 3. Negate (= -25)\n  add(10),  // 2. Add 10 (= 25)\n  sum       // 1. Sum 1-5 (= 15)\n)\n\nconsole.log('Right to left', compute([1, 2, 3, 4, 5])) // -25\n\n// pipe applies the functions from left to right\nconst computeAgain = pipe(\n  sum,      // 1. Sum 1-5 (= 15)\n  add(10),  // 2. Add 10 (= 25)\n  negate    // 3. Negate (= -25)\n)\n\nconsole.log('Left to right', computeAgain([1, 2, 3, 4, 5]))",imports:"",requires:""},m={code:"const { curry } = require('ramda')\n\nconst addEmUp = curry((x, y, z) => x + y + z)\n\nconsole.log('addEmUp(1, 2, 3) is:', addEmUp(1, 2, 3))\nconsole.log('addEmUp(1)(2, 3) is:', addEmUp(1)(2, 3))\nconsole.log('addEmUp(1, 2)(3) is:', addEmUp(1, 2)(3))\nconsole.log('addEmUp(1)(2)(3) is:', addEmUp(1)(2)(3))\n\nconst addOne = addEmUp(1)\nconst addOneAndTwo = addOne(2)\n\nconsole.log('addOneAndTwo(3) is:', addOneAndTwo(3))",imports:"",requires:""},d={code:"// This is a much better way to code\nconst { map } = require('ramda')\n\nconst nums = [1, 2, 3, 4, 5]\nconst square = x => x * x\n\nlet out = map(square, nums) // It's almost plain English\n\nconsole.log('by function', out)\n\n// Or, using the Array.map method (still better than a loop)\nconsole.log('by method', nums.map(square))",imports:"",requires:""},p={code:"const add = (x, y) => x + y\nconst subtract = (x, y) => x - y\nconst evaluate = (f, x, y) => f(x, y)\n\n// evaluate is a function promoting reuse\nconsole.log(`evaluate(add, 3, 2) yields ${evaluate(add, 3, 2)}`)\nconsole.log(`evaluate(subtract, 3, 2) yields ${evaluate(subtract, 3, 2)}`)\n\n// A real world vanilla JS example\n// Array.sort takes a comparator function that takes 2 parameters and returns:\n//   * a negative number if the second goes before the first\n//   * zero if they are the same\n//   * a positive number if the first goes before the second\nconsole.log('Ascending sort', [3, 7, 1, 9, 4].sort((a, b) => a - b))\nconsole.log('Descending sort', [3, 7, 1, 9, 4].sort((a, b) => b - a))\n\n// We can do more than that: how about sorting strings by length\n// rather than alphabetically?\nconsole.log(\n  'By length',\n  ['red', 'green', 'blue'].sort((a, b) => a.length - b.length)\n)",imports:"",requires:""},b={code:"// This is not a good way to do things\nconst nums = [1, 2, 3, 4, 5]\nconst square = x => x * x\n\nlet out = []\n\nfor (let i = 0; i < nums.length; i++) {\n  out[i] = square(nums[i])\n}\n\nconsole.log('by for loop', out)",imports:"",requires:""},g=n(230),h={code:"const { map } = require('ramda')\n\nconst squares = [1, 4, 9, 16, 25]\n\n// Vanilla JS with the Array.map method\nconsole.log('Array.map', squares.map(Math.sqrt))\n\n// The Ramda map equivalent\nconsole.log('Ramda map', map(Math.sqrt, squares))\n\n// But the Ramda map is curried!\nconst mapSquareRoots = map(Math.sqrt)\n\nconsole.log('[1, 4, 9, 16, 25]', mapSquareRoots([1, 4, 9, 16, 25]))\nconsole.log('[36, 49, 64, 81, 100]', mapSquareRoots([36, 49, 64, 81, 100]))",imports:"",requires:""},f={code:"const add = x => y => x + y\n\n// Now we can partially apply add:\nconst addTen = add(10)\n\n// And then use it\nconsole.log('addTen(15) is:', addTen(15))\n\n// We can still pass both arguments at once, but as two calls:\nconsole.log('add(10)(5) is:', add(10)(5))\n\n// But we can't use the function normally:\nconsole.log('add(10, 5) is:', add(10, 5))",imports:"",requires:""};n.d(t,"_frontmatter",function(){return O}),n.d(t,"default",function(){return w});var O={},y={_frontmatter:O},j=r.a;function w(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(j,Object.assign({},y,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There's much more to functional programming. We haven't really begun to see the power it brings."),Object(a.b)("p",null,"(Following on from ",Object(a.b)(s.a,{to:"/deductive/pure-functions/","aria-label":"Pure functions",mdxType:"Link"},"Pure functions"),".)"),Object(a.b)("h3",{id:"higher-order-functions"},"Higher-order functions aid reusability"),Object(a.b)("p",null,"JavaScript has ",Object(a.b)("strong",{parentName:"p"},"first class functions"),", which allow us to treat functions as data","—","that means that we can assign them to variables, pass them as arguments to other functions, return them from functions, etc."),Object(a.b)("p",null,"A ",Object(a.b)("strong",{parentName:"p"},"higher-order functions")," is a function that takes one or more functions as parameters, return a function, or both."),Object(a.b)("p",null,"Functional programming tends to reuse a common set of functional utilities to process data."),Object(a.b)(o.a,Object.assign({},p,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"Object-oriented programming binds functions and data together, so that the functions","—",'now called "methods"',"—","can only operate on the data to which they are attached. For example, in the ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Array.sort")," method above, we must start with an array and then do the sort on that array."),Object(a.b)("p",null,"Granted, we can operate on any ",Object(a.b)("em",{parentName:"p"},"type")," of array","—","strings, numbers, objects, even other arrays","—","but because ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"sort")," is an ",Object(a.b)("em",{parentName:"p"},"instance")," method, we have to call it directly on the Array we want to sort."),Object(a.b)("p",null,"We can also use libraries of true FP functions to do the same thing, but without binding our function to a specific array instance. Compare, for example, the ",Object(a.b)(c.a,{href:"https://ramdajs.com/docs/#map",mdxType:"OffsiteLink"},"Ramda")," ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"map")," function to the built-in, vanilla JS ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Array.map")," ",Object(a.b)("em",{parentName:"p"},"method"),"."),Object(a.b)(o.a,Object.assign({},h,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"As you can see, Ramda's pure ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"map")," function is more powerful and reusable than even the ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Array.map")," method. We'll get to currying and composition more below."),Object(a.b)("h3",{id:"declarative-vs-imperative"},"Declarative vs. imperative style"),Object(a.b)("p",null,"Functional programming is ",Object(a.b)("strong",{parentName:"p"},"declarative"),", meaning that the program logic is expressed without explicitly describing the flow control: it tells the code ",Object(a.b)("em",{parentName:"p"},"what")," to do rather than telling it ",Object(a.b)("em",{parentName:"p"},"how")," to do it."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Imperative")," programs spend lines of code describing the specific steps used to achieve the desired results","—","the flow control: ",Object(a.b)("strong",{parentName:"p"},"How")," to do things."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Declarative")," programs abstract the flow control process, and instead spend lines of code describing the data flow: ",Object(a.b)("strong",{parentName:"p"},"What")," to do."),Object(a.b)("p",null,'This means that under the covers, declarative languages are imperative. At some level, the computer only responds to "how". But by abstracting the "how" into higher-level "what", functional programming makes life much easier for the programmer.'),Object(a.b)("p",null,"Loops are a good example of imperative code. At a quick glance, what does the code below do?"),Object(a.b)(o.a,Object.assign({},b,{theme:"dark",mdxType:"CodeBlock"})),Object(a.b)("p",null,"Notice how you have to work your way through the ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"for")," loop syntax. There's a lot going on. Now compare that to the declarative version:"),Object(a.b)(o.a,Object.assign({},d,{mdxType:"CodeBlock"})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Imperative")," code frequently utilizes statements. A statement is a piece of code which performs some action. Examples of commonly used statements include ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"for"),", ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"if"),", ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"switch"),", ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"throw"),", etc."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Declarative")," code relies more on expressions. An expression is a piece of code which evaluates to some value. Expressions are usually some combination of function calls, values, and operators which are evaluated to produce the resulting value. Examples include:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"2 * 2")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"doubleMap([2, 3, 4])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"Math.max(4, 3, 2)")),Object(a.b)("li",{parentName:"ul"},"etc.")),Object(a.b)("h3",{id:"composition"},"Functional composition"),Object(a.b)("p",null,"Function composition is the act of combining multiple functions together in order to create more complex logical flows. "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"The precondition that we need to have in mind is that when we compose functions each one should take the output from the previous.")),Object(a.b)("p",null,"If we had to add two numbers and then multiply the result of the addition by 10, then we might write something like this:"),Object(a.b)(i.a,{code:"const add = (a, b) => a + b\nconst multiplyByTen = x => x * 10\n\nconst result = multiplyByTen(add(3, 5)) // 10 * (3 + 5)",mdxType:"Highlighter"}),Object(a.b)("p",null,"The code is easy to understand but if we had to perform more operations readability suffers:"),Object(a.b)(i.a,{code:"const sum = (a, b) => a + b\nconst square = x => x * x\nconst addTen = x => x + 10\n\nconst computeNumbers = addTen(square(sum(3, 5))) // 74",mdxType:"Highlighter"}),Object(a.b)("p",null,"We can use ",Object(a.b)(c.a,{href:"https://ramdajs.com/docs/",mdxType:"OffsiteLink"},"Ramda")," to enable us to easily write functional code:"),Object(a.b)(o.a,Object.assign({},u,{mdxType:"CodeBlock"})),Object(a.b)("h3",{id:"currying"},"Currying"),Object(a.b)("p",null,"A ",Object(a.b)("strong",{parentName:"p"},"curried")," function is a function that permits you to pass one parameter at a time. If you pass fewer arguments than the function expects, then it returns a function that takes the remaining arguments and remembers the arguments already passed."),Object(a.b)("p",null,'Essentially, you can "partially apply" curried functions, creating  new functions that remember the arguments already passed (called a "closure"). You can see this in the composition example above with the ',Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"add")," function that takes two parameters, but is partially applied with the first parameter, ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"add(10)")," to create a new function that will take a single number and add 10 to it."),Object(a.b)("p",null,'An easy way to "curry" JavaScript functions is by nesting single-parameter functions:'),Object(a.b)(o.a,Object.assign({},f,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"In the above example, ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"add(10, 5)")," returned a function because it ignored the second argument, so instead it worked the same as ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"add(10)"),": we got back a function that remembers the 10 and takes the second parameter."),Object(a.b)("p",null,"What we want is a function that let's us apply the arguments in any combination. ",Object(a.b)(c.a,{href:"https://ramdajs.com/docs/#curry",mdxType:"OffsiteLink"},"Ramda")," provides us with just such a function:"),Object(a.b)(o.a,Object.assign({},m,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"Currying shines during refactoring when you create a generalized version of a function with lots of parameters and then use it to create specialized versions with fewer parameters. This way we can write more descriptive code and achieve much better code reusability."),Object(a.b)(o.a,Object.assign({},l,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"We can easily write our own function to curry functions (as long as they take a fixed number of arguments","—","can you guess why?). So if you're into impressing your friends (or just curious), check out the example below:"),Object(a.b)(o.a,Object.assign({},g.a,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"Curry FTW."),Object(a.b)("h3",{id:"things-to-avoid"},"More things to avoid"),Object(a.b)("p",null,"A good first step towards writing good Functional code is to stop using the below JS constructs as they break one or more FP principles."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Loops (loops lead to imperative code)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"while"),Object(a.b)("li",{parentName:"ul"},"do...while"),Object(a.b)("li",{parentName:"ul"},"for"),Object(a.b)("li",{parentName:"ul"},"for...of"),Object(a.b)("li",{parentName:"ul"},"for...in"))),Object(a.b)("li",{parentName:"ul"},"Void functions (a void function returns nothing so is impure)"),Object(a.b)("li",{parentName:"ul"},"Variable declarations with ",Object(a.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"var")," or ",Object(a.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"let")," (permit mutation of state)"),Object(a.b)("li",{parentName:"ul"},"Object mutation, for example: ",Object(a.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"obj.x = 5")," (permit mutation of state)"),Object(a.b)("li",{parentName:"ul"},"Array mutator methods (these mutate the Array in place)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"copyWithin"),Object(a.b)("li",{parentName:"ul"},"fill"),Object(a.b)("li",{parentName:"ul"},"pop"),Object(a.b)("li",{parentName:"ul"},"push"),Object(a.b)("li",{parentName:"ul"},"reverse"),Object(a.b)("li",{parentName:"ul"},"shift"),Object(a.b)("li",{parentName:"ul"},"sort"),Object(a.b)("li",{parentName:"ul"},"splice"),Object(a.b)("li",{parentName:"ul"},"unshift"))),Object(a.b)("li",{parentName:"ul"},"Map mutator methods (these mutate the Map in place)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"clear"),Object(a.b)("li",{parentName:"ul"},"delete"),Object(a.b)("li",{parentName:"ul"},"set"))),Object(a.b)("li",{parentName:"ul"},"Set mutator methods (these mutate the Set in place)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"add"),Object(a.b)("li",{parentName:"ul"},"clear"),Object(a.b)("li",{parentName:"ul"},"delete")))),Object(a.b)("small",null,"Errors, bugs, suggestions, questions? Contact ",Object(a.b)("a",{href:"mailto:Prateek_Sharma@bnz.co.nz"},"Prateek Sharma")),".")}w.isMDXComponent=!0},210:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(68),i=n.n(o);n.d(t,"a",function(){return i.a});n(211),n(9).default.enqueue,r.a.createContext({})},211:function(e,t,n){var a;e.exports=(a=n(213))&&a.default||a},212:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP"}}}}},213:function(e,t,n){"use strict";n.r(t);n(52),n(17),n(14),n(15),n(8),n(22);var a=n(0),r=n.n(a),o=n(96);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},214:function(e,t,n){"use strict";var a=n(215),r=n(0),o=n.n(r),i=n(223),s=n.n(i);function c(e){var t=e.lang,n=e.title,r=a.data.site;return o.a.createElement(s.a,{htmlAttributes:{lang:t},title:n?n+" | "+r.siteMetadata.title:r.siteMetadata.title},o.a.createElement("script",{src:"https://embed.runkit.com","data-element-id":"runkit"}))}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},215:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP",description:"Functional JavaScript for the OO programmer.",author:"@chasm"}}}}},216:function(e,t,n){"use strict";var a=n(212),r=(n(222),n(0)),o=n.n(r),i=(n(16),n(41),n(210)),s=n(23);function c(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{to:"/inductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Bottom-up"),o.a.createElement(i.a,{to:"/deductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Top-down"),o.a.createElement(i.a,{to:"/cypress",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Cypress"))}function l(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{to:"/inductive/reusability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Reusability"),o.a.createElement(i.a,{to:"/inductive/immutability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Variables"),o.a.createElement(i.a,{to:"/inductive/iteration",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Looping"),o.a.createElement(i.a,{to:"/inductive/composition",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pipelines"))}function u(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{to:"/deductive/pure-functions/",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pure functions"),o.a.createElement(i.a,{to:"/deductive/more-fp-concepts",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"More FP concepts"))}function m(e){switch(e.location.pathname.split("/")[1]){case"inductive":return o.a.createElement(l,null);case"deductive":return o.a.createElement(u,null);default:return o.a.createElement(c,null)}}var d=function(e){var t=e.siteTitle,n=e.location,a=function(e){switch(e.pathname.split("/")[1]){case"inductive":return"ForestGreen";case"deductive":return"MediumBlue";case"cypress":return"Maroon";default:return"RebeccaPurple"}}(n);return o.a.createElement("header",{style:{background:a,marginBottom:"1.45rem"}},o.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0,display:"inline-block",flexGrow:1}},o.a.createElement(i.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),o.a.createElement("div",{style:{flexShrink:1}},o.a.createElement(m,{location:n}))))};function p(e){return o.a.createElement(s.Location,null,function(t){return o.a.createElement(d,Object.assign({},t,e))})}d.defaultProps={siteTitle:""};t.a=function(e){var t=e.children,n=a.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{siteTitle:n.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t)))}},217:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),r=n.n(a),o=n(445),i=n(443),s=n(444);function c(e){var t=e.code,n=void 0===t?"":t,a=e.language,c=void 0===a?"javascript":a,l=e.showLineNumbers,u=void 0===l||l,m=e.startingLineNumber,d=void 0===m?1:m,p=e.theme,b=void 0===p?"light":p,g=e.warn,h=void 0===g?function(){return null}:g;return r.a.createElement(r.a.Fragment,null,h(),r.a.createElement(o.a,{language:c,style:"light"===b?i.a:s.a,showLineNumbers:u,startingLineNumber:d},n))}},218:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(14),n(15),n(8),n(22),n(16);var a=n(210),r=n(0),o=n.n(r),i=n(23);var s=function(e){return function(t){t.preventDefault,console.log("production"),Object(i.navigate)(e)}};function c(e){var t=e.children,n=e.to,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","to"]);return n.indexOf("#")>-1||n.indexOf("?")>-1?o.a.createElement("a",Object.assign({onClick:s(n),href:n},r),t):o.a.createElement(a.a,Object.assign({to:n},r),t)}},219:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(210);function i(){return r.a.createElement("span",{className:"separator"},"»")}function s(e){var t=e.title,n=e.trail;return void 0===n?null:r.a.createElement("p",null,function(e,t){return void 0===t&&(t=[]),r.a.createElement(r.a.Fragment,null,t.map(function(e){var t=e.href,n=e.label;return r.a.createElement(a.Fragment,{key:t},r.a.createElement(o.a,{to:t},n),r.a.createElement(i,null))}),e)}(t,n))}var c=n(216),l=n(214);t.a=function(e){var t=e.children,n=e.pageContext.frontmatter,a=n.title,o=n.trail;return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:a}),r.a.createElement(s,{title:a,trail:o}),r.a.createElement("article",null,t))}},220:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a);function o(e){var t=e.children,n=e.href;return r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer","aria-label":"Offsite link: opens in new window",className:"offsite-link",title:"Offsite link: opens in a new window"},t)}},221:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),r=n.n(a),o=n(224),i=n.n(o),s=n(217);function c(e){var t=e.code,n=void 0===t?"":t,o=e.imports,c=void 0===o?"":o,l=e.requires,u=void 0===l?"":l,m=e.theme,d=void 0===m?"light":m,p=e.warn,b=void 0===p?function(){return null}:p,g=Object(a.useState)(!1),h=g[0],f=g[1];return Object(a.useEffect)(function(){var e=setInterval(function(){f(Boolean(window)&&Boolean(window.RunKit))},1e3);return h&&clearInterval(e),function(){return clearInterval(e)}},[]),h?r.a.createElement("div",{className:"code-block"},b(),r.a.createElement(i.a,{source:""+u+n,nodeVersion:"12",theme:"solarized-"+d})):r.a.createElement(s.a,{code:""+c+n,theme:d,warn:b})}},230:function(e,t,n){"use strict";t.a={code:'// curryN takes the number of parameters and the function\nconst curryN = (n, f) => (...args) => // return a function that takes some arguments\n  args.length === n  // if all the arguments have been supplied\n    ? f(...args)     // then call the function with the args and return the result\n    : curryN(\n      n - args.length,\n      (...newArgs) => f(...args, ...newArgs)\n    )                // else recurse for the remaining arguments\n\nconst curry = f => curryN(f.length, f) // Create a closure on the number of parameters\n  \n// A function that takes 3 parameters\nconst uncurried = (x, y, z) => ([x, y, z])\n\n// Try applying it without currying\nconsole.log(`uncurried(1, 2, 3) is ${JSON.stringify(uncurried(1, 2, 3))}`)\n\n// Oops\ntry {\n  console.log(`uncurried(1, 2)(3) is ${JSON.stringify(uncurried(1, 2)(3))}`)\n  console.log(`uncurried(1)(2, 3) is ${JSON.stringify(uncurried(1)(2, 3))}`)\n  console.log(`uncurried(1)(2)(3) is ${JSON.stringify(uncurried(1)(2)(3))}`)\n} catch (e) {\n  console.log(`Uh, oh: ${e}`)\n}\n\n// Now let\'s try again, but with our function curried properly\nconst curried = curry((x, y, z) => ([x, y, z]))\n\n// Everything works\nconsole.log(`curried(4, 5, 6) is ${JSON.stringify(curried(4, 5, 6))}`)\nconsole.log(`curried(4, 5)(6) is ${JSON.stringify(curried(4, 5)(6))}`)\nconsole.log(`curried(4)(5, 6) is ${JSON.stringify(curried(4)(5, 6))}`)\nconsole.log(`curried(4)(5)(6) is ${JSON.stringify(curried(4)(5)(6))}`)\n\n// We can partially apply our function to create new functions\n// that "remember" one or more arguments\nconst prependSeven = curried(7)\nconst prependSevenAndEight = prependSeven(8)\nconsole.log(`prependSevenAndEight(9) is ${JSON.stringify(prependSevenAndEight(9))}`)',imports:"",requires:""}}}]);
//# sourceMappingURL=component---src-pages-deductive-more-fp-concepts-index-mdx-44e0f8e663b6b4a0b2e4.js.map