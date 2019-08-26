(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{204:function(e,t,n){"use strict";n.r(t);n(14),n(15),n(8),n(22),n(16),n(0);var a=n(69),o=n(219),r=n(221),s=n(217),i=n(218),c=n(220),l=n(225),u={code:"// We can declare a variable with let:\nlet x\n\n// And then assign it:\nx = 'let is evil'\n\n// But let's not! (heh, heh)\nconsole.log(`\\`x\\` === '${x}'`)\n\n// This does not work! And no, a semicolon won't save you.\n// Uncomment the next line to see what happens. (Hint: it breaks)\n// const y; y = 'We broken'\n\n// Declare and assign at the same time\nconst z = 'We cool'\n\nconsole.log(`Assigning const when declaring works! \\`z\\` === '${z}'`)",imports:"",requires:""},b={code:"const x = 7\n\ntry {\n  x = 'seven'\n} catch (e) {\n  console.log(`Can't change the type of x: ${e}`)\n}\n\ntry {\n  x = 3\n} catch (e) {\n  console.log(`Can't change the value of x: ${e}`)\n}",imports:"",requires:"",theme:"light"},m=n(231),p={code:"// NOT WHAT YOU MIGHT EXPECT\n\nconst obj = Object.freeze({\n  name: 'Bob',\n  nicknames: ['J.R.', 'Dobbs'],\n  favourites: {\n    colour: 'blue',\n    number: 7,\n    value: 'slack'\n  }\n})\n\nobj.name = 'Sam'\nconsole.log(`Name changed to Sam? Name: '${obj.name}'. No. Good!`)\n\nobj.nicknames[2] = 'Bobby'\nconsole.log(`Append Bobby to the nicknames? Nicknames: '${obj.nicknames.join(', ')}'. Well, crap.`)\n\nobj.favourites.colour = 'purple'\nconsole.log(`Change favourite colour to purple? '${obj.favourites.colour}'. Sob...`)",imports:"",requires:"",theme:"dark"},d={code:"// DO NOT DO ANY OF THIS. JUST DON'T.\ntry {\n  // `x` does not yet exist so this will throw and Error\n  console.log(`x === ${x} (x is not declared)`)\n} catch (e) {\n  console.log(e)\n}\n\nlet x // declares x but does not assign a value\n\nconsole.log(`x === ${x} (\\`x\\` has been declared but not assigned a value)`)\n\nx = 7 // assigning the number 7 to x\n\nconsole.log(`x === ${x} (\\`x\\` is a number type)`)\n\nx = 'seven' // reassigning x to the string 'seven'\n\nconsole.log(`WTF? Now x === '${x}' (\\`x\\` is a string type). Is that crazy or what?`)",imports:"",requires:"",theme:"dark"},g={code:"// The rest syntax can collect arguments to a function\n// Note that it must always be the last destructured variable\n\nfunction oneAttaTime (x, ...xs) {\n  console.log('The value of x is', x)\n  console.log('The value of xs is', xs)\n}\n\n// Uncomment this to see that it won't work\n// function wrongOrder (...xs, x) { console.log('oops') }\n\noneAttaTime('first', 'second', 'third')",imports:"",requires:""},h={code:"// The rest syntax is used to collect multiple values to a single variable:\nconst [x, ...xs] = [1, 2, 3, 4, 5]\n\nconsole.log(`\\`x\\` === ${x}`)\nconsole.log(`\\`xs\\` === ${JSON.stringify(xs)}`)",imports:"",requires:""},f={code:"const {\n  colour, ...rest\n} = {\n  colour: 'pink',\n  food: 'Tiramisu',\n  show: 'Game of Thrones',\n  song: 'Swimming Pools (Drank)'\n}\n\nconsole.log(`\\`colour\\` === ${colour}`)\nconsole.log(`\\`rest\\` === ${JSON.stringify(rest)}`)",imports:"",requires:""},y={code:"// The spread syntax is used to distribute multiple values from a collection:\nconst digits = [0, 1, 2, 3, 4, 5]\nconst moreDigits = [6, 7, 8, 9]\n\nconsole.log(`[...digits, ...moreDigits] === ${JSON.stringify([...digits, ...moreDigits])}`)\nconsole.log(`[5, ...moreDigits] === ${JSON.stringify([5, ...moreDigits])}`)\nconsole.log(`[...digits, 6, 7] === ${JSON.stringify([...digits, 6, 7])}`)\nconsole.log(`[-1, ...digits, 6] === ${JSON.stringify([-1, ...digits, 6])}`)\n\n// We're making copies!\nconsole.log(`digits is not changed:`, digits)\nconsole.log(`moreDigits is not changed:`, moreDigits)",imports:"",requires:""},j={code:"// The spread syntax works with objects as well:\nconst rgb = {\n  red: 'f00',\n  green: '0f0',\n  blue: '00f'\n}\nconst cmyk = {\n  cyan: '0ff',\n  magenta: 'f0f',\n  yellow: 'ff0',\n  black: '000'\n}\n\n// No overlap here\nconsole.log(`{ ...rgb, ...cmyk } is`, { ...rgb, ...cmyk })\n\n// We can overwrite individual values\nconsole.log(`{ ...cmyk, cyan: '0FF', yellow:  'FF0' }`, { ...cmyk, cyan: '0FF', yellow:  'FF0' })\n\n// Ordering is important!\nconsole.log(`{ cyan: '0FF', ...cmyk, yellow:  'FF0' }`, { cyan: '0FF', ...cmyk, yellow:  'FF0' })\n\n// We're making copies!\nconsole.log(`rgb is not changed:`, rgb)\nconsole.log(`cmyk is not changed:`, cmyk)",imports:"",requires:""};n.d(t,"_frontmatter",function(){return O}),n.d(t,"default",function(){return x});var O={},v={_frontmatter:O},w=o.a;function x(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(w,Object.assign({},v,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Variables are ","“","set and forget","”"),Object(a.b)("p",null,"One fun ","“","feature","”"," of JavaScript is that variables are not ",Object(a.b)(c.a,{href:"https://en.wikipedia.org/wiki/Type_system#Static_type_checking",mdxType:"OffsiteLink"},"statically typed"),". That means not only that we can reassign variables or mutate their values, but also that we can change their ",Object(a.b)("em",{parentName:"p"},"type"),"."),Object(a.b)("p",null,"We know what you're thinking! Whoa, that's insane, right? We can not only mutate the value of a variable but also the ",Object(a.b)("strong",{parentName:"p"},"type"),"? No way!"),Object(a.b)("p",null,"But we kid you not, JavaScript actually considers this a ",Object(a.b)("em",{parentName:"p"},"feature"),". Go figure."),Object(a.b)("p",null,"Here is an example: We could declare a variable with ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"let"),", then later assign a number as its value, and then later still assign a string to the same variable:"),Object(a.b)(r.a,Object.assign({},d,{theme:"dark",warn:function(){return Object(a.b)("small",null,"Don't give in to ",Object(a.b)("code",null,"let"),". That leads to the dark side. Once you start down the dark path, forever will it dominate your destiny.")},mdxType:"CodeBlock"})),Object(a.b)("p",null,"If you were looking for an effective way to create ",Object(a.b)("strong",{parentName:"p"},"hard-to-find bugs")," in your code, you'd be hard-pressed (heh) to find a better one. If variables can change not only value, but also ",Object(a.b)("strong",{parentName:"p"},"type"),", then how can you be sure what the value or type of ",Object(a.b)("em",{parentName:"p"},"any")," variable is anywhere in your code?"),Object(a.b)("p",null,"In short, if you enjoy chasing down bugs due to unexpected mutations","—","have fun with that!","—","then ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"let")," and mutability are for you!"),Object(a.b)("p",null,"In functional JavaScript, we ",Object(a.b)("strong",{parentName:"p"},"assign values when they are declared"),", then we never change them. No, really. ",Object(a.b)("em",{parentName:"p"},"Never"),"."),Object(a.b)("p",null,"How do we manage this? Read on."),Object(a.b)("h3",null,Object(a.b)("span",{id:"use-const-exclusively"},"Use ",Object(a.b)("code",null,"const")," exclusively!")),Object(a.b)("p",null,"As a start, we prevent variables from being reassigned. We do this with ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"const"),", a misnamed keyword. It is misnamed because it does not actually create a constant, but only prevents ",Object(a.b)("em",{parentName:"p"},"re-assignment"),". More on this below."),Object(a.b)("p",null,"Here is ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"const")," in action. Note: there is never a good reason to use ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"let")," or, heaven forbid, ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"var")," in your applications. (If you're building a library, on the other hand, then let's talk.)"),Object(a.b)(r.a,Object.assign({},b,{mdxType:"CodeBlock"})),Object(a.b)("h3",null,Object(a.b)("span",{id:"assign-upon-declaration"},"Assign variables when they are declared")),Object(a.b)("p",null,"We said that ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"const")," can't be reassigned, so if we declare it without assigning a value, then we're stuck. In the real world, JavaScript usually won't let you do this (depends on the interpreter). So we have to ",Object(a.b)("strong",{parentName:"p"},"assign the value at the point of declaration"),":"),Object(a.b)(r.a,Object.assign({},u,{mdxType:"CodeBlock"})),Object(a.b)("h3",null,Object(a.b)("span",{id:"never-mutate"},"Once a variable has been assigned, don't be changing it")),Object(a.b)("p",null,"Unreassignable is not the same thing as ","“","immutable","”"," (unchangeable). If a ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"const")," is assigned a complex value, such as an ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Array")," or ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Object"),", then it ",Object(a.b)("em",{parentName:"p"},"is"),"  possible to reach into that complex value and change it ",Object(a.b)("em",{parentName:"p"},"without")," ","“","reassigning","”"," the variable. This is a significant failing of ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"const")," in our not-really-so-humble opinion. It can give one a false sense of security."),Object(a.b)(l.a,{mdxType:"TerminologyBlock"},"When a variable cannot be changed (mutated), we say that that variable is ",Object(a.b)("strong",null,"immutable"),". ",Object(a.b)(c.a,{href:"https://en.wikipedia.org/wiki/Immutable_object",mdxType:"OffsiteLink"},"Immutability")," is extremely important in functional programming because it helps us to achieve ",Object(a.b)("strong",null,"referential transparency"),". ",Object(a.b)(c.a,{href:"https://en.wikipedia.org/wiki/Referential_transparency",mdxType:"OffsiteLink"},"Referential transparency")," means that our variable can be replaced with its value at any time without altering the program's behaviour, which means we can use ",Object(a.b)(c.a,{href:"https://en.wikipedia.org/wiki/Substitution_(algebra)",mdxType:"OffsiteLink"},"substitution")," to simplify and reason about our code."),Object(a.b)("p",null,"JavaScript does offer, however, a way to reach into objects and make them ","“","read-only","”",". Now they really are immutable. Unfortunately, this capability only freezes one level at a time, so to fully ","“","freeze","”"," an object, we have to traverse the entire tree freezing all the levels."),Object(a.b)(r.a,Object.assign({},p,{theme:"dark",warn:function(){return Object(a.b)("small",null,"“Take thy beak from out my heart, and take thy form from off my door!” Quoth the Raven “Nevermore.”")},mdxType:"CodeBlock"})),Object(a.b)("p",null,"Well, now, ain't that a damn shame. Mutations be getting all up in them nested objects."),Object(a.b)("p",null,"To make this easier, a few people have written libraries and utility functions, such as ",Object(a.b)(c.a,{href:"https://www.npmjs.com/package/deep-freeze",mdxType:"OffsiteLink"},"deep-freeze"),". Or we can just write a function that calls itself and traverses the object freezing each level in turn:"),Object(a.b)(r.a,Object.assign({},m.a,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"Unfortunately, these fail to mutate ",Object(a.b)("strong",{parentName:"p"},"silently")," rather than throwing an error. Sigh... nothing is perfect."),Object(a.b)("p",null,"Truth is that with best practices and making it a habit to keep things immutable, you probably don't need a ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"freeze")," function except in unit tests. In your unit tests, you most definitely should ensure that you aren't mutating variables."),Object(a.b)("h3",null,Object(a.b)("span",{id:"never-destroy-state"},"Don't erase state: create new state instead!")),Object(a.b)("p",null,"It might not be clear yet, but refusing to change a variable once it has been assigned is actually about preserving state."),Object(a.b)("p",null,"Think about it. Suppose I use ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"let")," to create a variable ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"x")," and assign it value ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"3"),". (Don't, but hypothetically...)"),Object(a.b)("p",null,"Now a bit later, I assign it a new value. Say, ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"5"),". OK, what was the previous value?"),Object(a.b)("p",null,"You might remember, ",Object(a.b)("em",{parentName:"p"},"but your code doesn't"),", because you ",Object(a.b)("em",{parentName:"p"},"overwrote it"),". Now why you wanna destroy that state? What did it ever do to you?"),Object(a.b)("p",null,"In functional JavaScript we keep track of state, in general, by making ",Object(a.b)("strong",{parentName:"p"},"new copies")," when we want to change something. This means that if I go back to look at the value of ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"x")," for any reason, then it is still ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"3"),". My ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"newX")," is ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"5"),"."),Object(a.b)("p",null,"This also allows us to set up ","“","time-travel debugging","”",", where we can move a slider back and forth and see how the state of our application changes over time. Often, it means that we can ","“","replay","”"," everything, too. It almost makes debugging fun."),Object(a.b)("p",null,"Almost."),Object(a.b)("p",null,"Speaking of state, one of the reasons we keep our variables immutable and our functions ","“","pure","”"," is to ",Object(a.b)("strong",{parentName:"p"},"avoid sharing state"),". That's kind of a mantra for functional programmers: ",Object(a.b)("em",{parentName:"p"},"no shared state"),"."),Object(a.b)("p",null,"Sharing state is a good way to create difficult-to-find bugs. And it makes parallel processing difficult. When each process is responsible for its own state, life is sweet."),Object(a.b)("p",null,"So think about state whenever you write code. After all, every application manages some kind of state. If nothing ever changed, then what would be the point of the app?"),Object(a.b)("h3",null,Object(a.b)("span",{id:"use-destructuring-to-make-copies"},"Use destructuring and the rest/spread operators to make copies")),Object(a.b)("p",null,"We've shown how we can avoid reassignment of variables by using ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"const"),", and how we can avoid mutation by making copies, and we've mentioned the spread (and rest) syntax. Let's take a closer look at our syntax options."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"rest")," syntax and the ",Object(a.b)("strong",{parentName:"p"},"spread")," syntax look the same. Both use an ellipsis: ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"...")," So what's the difference? It's fairly simple: the ",Object(a.b)("strong",{parentName:"p"},"rest")," syntax is used on the ",Object(a.b)("em",{parentName:"p"},"left-hand side")," of an expression, and the ",Object(a.b)("strong",{parentName:"p"},"spread")," syntax is used on the ",Object(a.b)("em",{parentName:"p"},"right-hand side"),"."),Object(a.b)("p",null,"Check it out:"),Object(a.b)(r.a,Object.assign({},h,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"Remember that JavaScript arrays ",Object(a.b)("em",{parentName:"p"},"preserve ordering"),". You can think of the left-hand side of the assignment operator as a ","“","pattern","”"," or ","“","mask","”"," for the right-hand side. By placing ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"x")," in the position of the first element of the array, it is assigned the first element of our ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"[1, 2, 3, 4, 5]")," array, which is ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"1"),"."),Object(a.b)("p",null,"Now we want to scoop up the remaining elements of the array","—","the ","“","rest","”"," of them","—","and put them in another variable. The custom of using ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"x")," and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"xs")," for the head and the tail of an array is very common and well understood in functional programming (not just in JavaScript). So we use ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"...xs")," to collect all the remaining elements save the first of ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"[1, 2, 3, 4, 5]")," and put them in an array, which is ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"[2, 3, 4, 5]"),"."),Object(a.b)("p",null,"We call ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"x")," the ","“","head","”"," of our array, and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"xs")," the ","“","tail","”",". Note that the head has the type of the first element in the array, whereas the tail is always an array of elements (even when empty)."),Object(a.b)("p",null,"We can also use the ",Object(a.b)("strong",{parentName:"p"},"rest")," syntax to collect key-value pairs from an object:"),Object(a.b)(s.a,{code:f.code,mdxType:"Highlighter"}),Object(a.b)("p",null,"Unfortunately, Runkit doesn't support this, but you can copy and paste the above into the Chrome Developer Tools console and see that it works. You should find that there is a variable ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"colour")," with the value 'pink', and a variable ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"rest")," with the value:"),Object(a.b)(s.a,{code:"{\n  food: 'Tiramisu',\n  show: 'Game of Thrones',\n  song: 'Swimming Pools (Drank)'\n}",mdxType:"Highlighter"}),Object(a.b)("p",null,"Now let's consider the ",Object(a.b)("strong",{parentName:"p"},"spread")," syntax. When we use ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"...")," on the ",Object(a.b)("strong",{parentName:"p"},"right-hand side")," of the assignment operator, it takes a collection of values","—","it could be either an array or an object","—","and ","“","spreads","”"," them out into a new array or object."),Object(a.b)("p",null,"Here we see the spread syntax in action with an array:"),Object(a.b)(r.a,Object.assign({},y,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"And here with an object:"),Object(a.b)(r.a,Object.assign({},j,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"The ordering is important. As you can see from the code example above, when overwriting, whichever comes ",Object(a.b)("em",{parentName:"p"},"last"),", wins."),Object(a.b)("p",null,"One other common use for the ",Object(a.b)("strong",{parentName:"p"},"rest")," syntax is to collect arguments into an array. With the ",Object(a.b)("strong",{parentName:"p"},"rest")," syntax, the variable name with the ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"...")," ",Object(a.b)("em",{parentName:"p"},"must come last"),". It's greedy. If you put it first, it will collect everything and there won't be any left:"),Object(a.b)(r.a,Object.assign({},g,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"rest")," syntax is also great when destructuring props as they come into a React component. Sadly, Runkit doesn't support this, but try it in the DevTools console:"),Object(a.b)(s.a,{code:"// Imagine that this is a React component\nfunction example ({ name, ...props }) {\n  console.log('name is', name)\n  console.log('props is', props)  \n}\nexample({ name: 'Bob', nickname: 'J.R.', seeks: 'slack' })",mdxType:"Highlighter"}),Object(a.b)("p",null,"So useful. Now that we understand how functions provide high ",Object(a.b)(i.a,{to:"/inductive/reusability/",mdxType:"Link"},"reusability")," and variables should be ","“",Object(a.b)(i.a,{to:"/inductive/immutability/",mdxType:"Link"},"set and forget"),"”",", let's see how we can ",Object(a.b)(i.a,{to:"/inductive/iteration/",mdxType:"Link"},"avoid loops"),"."),Object(a.b)("small",null,"Errors, bugs, suggestions, questions? Contact ",Object(a.b)("a",{href:"mailto:charles_munat@bnz.co.nz"},"Charles Munat")),".")}x.isMDXComponent=!0},210:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(68),s=n.n(r);n.d(t,"a",function(){return s.a});n(211),n(9).default.enqueue,o.a.createContext({})},211:function(e,t,n){var a;e.exports=(a=n(213))&&a.default||a},212:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP"}}}}},213:function(e,t,n){"use strict";n.r(t);n(52),n(17),n(14),n(15),n(8),n(22);var a=n(0),o=n.n(a),r=n(96);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(r.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},214:function(e,t,n){"use strict";var a=n(215),o=n(0),r=n.n(o),s=n(223),i=n.n(s);function c(e){var t=e.lang,n=e.title,o=a.data.site;return r.a.createElement(i.a,{htmlAttributes:{lang:t},title:n?n+" | "+o.siteMetadata.title:o.siteMetadata.title},r.a.createElement("script",{src:"https://embed.runkit.com","data-element-id":"runkit"}))}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},215:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP",description:"Functional JavaScript for the OO programmer.",author:"@chasm"}}}}},216:function(e,t,n){"use strict";var a=n(212),o=(n(222),n(0)),r=n.n(o),s=(n(16),n(41),n(210)),i=n(23);function c(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{to:"/inductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Bottom-up"),r.a.createElement(s.a,{to:"/deductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Top-down"),r.a.createElement(s.a,{to:"/cypress",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Cypress"))}function l(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{to:"/inductive/reusability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Reusability"),r.a.createElement(s.a,{to:"/inductive/immutability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Variables"),r.a.createElement(s.a,{to:"/inductive/iteration",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Looping"),r.a.createElement(s.a,{to:"/inductive/composition",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pipelines"))}function u(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{to:"/deductive/pure-functions/",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pure functions"),r.a.createElement(s.a,{to:"/deductive/more-fp-concepts",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"More FP concepts"))}function b(e){switch(e.location.pathname.split("/")[1]){case"inductive":return r.a.createElement(l,null);case"deductive":return r.a.createElement(u,null);default:return r.a.createElement(c,null)}}var m=function(e){var t=e.siteTitle,n=e.location,a=function(e){switch(e.pathname.split("/")[1]){case"inductive":return"ForestGreen";case"deductive":return"MediumBlue";case"cypress":return"Maroon";default:return"RebeccaPurple"}}(n);return r.a.createElement("header",{style:{background:a,marginBottom:"1.45rem"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0,display:"inline-block",flexGrow:1}},r.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),r.a.createElement("div",{style:{flexShrink:1}},r.a.createElement(b,{location:n}))))};function p(e){return r.a.createElement(i.Location,null,function(t){return r.a.createElement(m,Object.assign({},t,e))})}m.defaultProps={siteTitle:""};t.a=function(e){var t=e.children,n=a.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{siteTitle:n.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t)))}},217:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),o=n.n(a),r=n(445),s=n(443),i=n(444);function c(e){var t=e.code,n=void 0===t?"":t,a=e.language,c=void 0===a?"javascript":a,l=e.showLineNumbers,u=void 0===l||l,b=e.startingLineNumber,m=void 0===b?1:b,p=e.theme,d=void 0===p?"light":p,g=e.warn,h=void 0===g?function(){return null}:g;return o.a.createElement(o.a.Fragment,null,h(),o.a.createElement(r.a,{language:c,style:"light"===d?s.a:i.a,showLineNumbers:u,startingLineNumber:m},n))}},218:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(14),n(15),n(8),n(22),n(16);var a=n(210),o=n(0),r=n.n(o),s=n(23);var i=/#|\?/g,c=function(e){return function(t){t.preventDefault,Object(s.navigate)(e)}};function l(e){var t=e.children,n=e.to,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","to"]);return i.test(n)?r.a.createElement("a",Object.assign({onClick:c(n),href:n},o),t):r.a.createElement(a.a,Object.assign({to:n},o),t)}},219:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(210);function s(){return o.a.createElement("span",{className:"separator"},"»")}function i(e){var t=e.title,n=e.trail;return void 0===n?null:o.a.createElement("p",null,function(e,t){return void 0===t&&(t=[]),o.a.createElement(o.a.Fragment,null,t.map(function(e){var t=e.href,n=e.label;return o.a.createElement(a.Fragment,{key:t},o.a.createElement(r.a,{to:t},n),o.a.createElement(s,null))}),e)}(t,n))}var c=n(216),l=n(214);t.a=function(e){var t=e.children,n=e.pageContext.frontmatter,a=n.title,r=n.trail;return o.a.createElement(c.a,null,o.a.createElement(l.a,{title:a}),o.a.createElement(i,{title:a,trail:r}),o.a.createElement("article",null,t))}},220:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),o=n.n(a);function r(e){var t=e.children,n=e.href;return o.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer","aria-label":"Offsite link: opens in new window",className:"offsite-link",title:"Offsite link: opens in a new window"},t)}},221:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),o=n.n(a),r=n(224),s=n.n(r),i=n(217);function c(e){var t=e.code,n=void 0===t?"":t,r=e.imports,c=void 0===r?"":r,l=e.requires,u=void 0===l?"":l,b=e.theme,m=void 0===b?"light":b,p=e.warn,d=void 0===p?function(){return null}:p,g=Object(a.useState)(!1),h=g[0],f=g[1];return Object(a.useEffect)(function(){var e=setInterval(function(){f(Boolean(window)&&Boolean(window.RunKit))},1e3);return h&&clearInterval(e),function(){return clearInterval(e)}},[]),h?o.a.createElement("div",{className:"code-block"},d(),o.a.createElement(s.a,{source:""+u+n,nodeVersion:"12",theme:"solarized-"+m})):o.a.createElement(i.a,{code:""+c+n,theme:m,warn:d})}},225:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),o=n.n(a);function r(e){var t=e.children,n=Object(a.useState)(!1),r=n[0],s=n[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,o.a.createElement("a",{onClick:function(){return s(!r)},style:{cursor:"pointer"}},o.a.createElement("strong",null,r?"Hide ":"Show "," Evil Terminology"))),r&&o.a.createElement("blockquote",null,t))}},231:function(e,t,n){"use strict";t.a={code:"// Object.freeze stupidly mutates in place instead of returning a copy. Doh!\nfunction freezeRecursively (obj) {\n  Object.freeze(obj)\n  \n  Object.getOwnPropertyNames(obj).map(\n    prop => {\n      if (typeof obj[prop] === 'object') {\n        freezeRecursively(obj[prop]) // here the function calls itself\n      }\n    }\n  )\n}\n\n// So we will make a copy and freeze that using our above function\nfunction freeze (obj) {\n  const out = { ...obj }\n  \n  freezeRecursively(out)\n  \n  return out\n}\n\n// Allowing us to use it like this\nconst obj = freeze({\n  name: 'Bob',\n  nicknames: ['J.R.', 'Dobbs'],\n  favourites: {\n    colour: 'blue',\n    number: 7,\n    value: 'slack'\n  }\n})\n\nobj.name = 'Tom'\nconsole.log(`obj.name !== 'Tom': Still '${obj.name}'.`)\n\nobj.nicknames[2] = 'Bobby'\nconsole.log(`obj.nicknames does not include 'Bobby': Still '${obj.nicknames.join(', ')}'.`)\n\nobj.favourites.colour = 'red'\nconsole.log(`obj.favourites.colour !== 'red': Still '${obj.favourites.colour}'. Yay!`)",imports:"",requires:""}}}]);
//# sourceMappingURL=component---src-pages-inductive-immutability-index-mdx-35eba984c022d2300fcc.js.map