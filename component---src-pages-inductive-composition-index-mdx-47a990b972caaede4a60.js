(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{207:function(e,t,n){"use strict";n.r(t);n(14),n(15),n(8),n(22),n(16),n(0);var a=n(69),o=n(218),r=(n(217),n(223)),i=n(219),s=n(220),c=n(224),l={code:"// Ramda's double underscore __ works like the _ in FP\nconst { __, curry } = require('ramda')\n\nconst doSomeArithmetic = curry((a, b, c, d) => a + b * c - d)\n\n// This is da bomb!\nconsole.log(`doSomeArithmetic(10)(7)(5)(3) is ${doSomeArithmetic(10, 7, 5, 3)}`)\n\n// Arguments are supplied to the first empty parameter, so do observe ordering\nconsole.log('doSomeArithmetic(__, __, __, 3)(10, 7, 5) is '\n  + `${doSomeArithmetic(__, __, __, 3)(10, 7, 5)}`)\nconsole.log('doSomeArithmetic(__, 7, __, 3)(10, 5) is '\n  + `${doSomeArithmetic(__, 7, __, 3)(10, 5)}`)\nconsole.log('doSomeArithmetic(__, __, __, 3)(10, __, 5)(7) is '\n  + `${doSomeArithmetic(__, __, __, 3)(10, __, 5)(7)}`)",imports:"",requires:""},u={code:"const { otherwise, pick, pipe, then } = require('ramda')\n\nconst makeQuery = email => ({ query: email })\nconst useDefault = () => ({\n  nameGiven: 'Aleister',\n  nameFamily: 'Crowley',\n  email: 'aleister@goldendawn.com'\n})\n\n// Use setTimeout to simulate an asynchronous process\nconst fetchProfile = options => new Promise((resolve, reject) => {\n  options.query === 'bob@slack.com'\n    ? setTimeout(() => resolve({\n        nameGiven: 'Bob',\n        nameFamily: 'Dobbs',\n        email: 'bob@slack.com'\n      }), 3000)\n    : setTimeout(() => reject({\n        error: 'Bad email address'\n      }), 6000)\n})\n\n// Returns a promise\nconst getProfleFromEmail = pipe(\n  makeQuery,                               // convert email to query\n  fetchProfile,                            // use query to fetch profile\n  otherwise(useDefault),                   // default profile if fetch fails\n  then(pick(['nameGiven', 'nameFamily']))  // extract just the names from the profile\n)\n\n// The first of these fails and gets the default profile\n// The second passes and retrieves the profile for bob@slack.com\n// Note the delay and the order of output\nconsole.log('Wait for it!')\ngetProfleFromEmail('joe@chicago.com').then(console.log) // resolves in 6 seconds\ngetProfleFromEmail('bob@slack.com').then(console.log)   // resolves in 3 seconds\n",imports:"",requires:""},p={code:"// DO NOT DO THIS!\nfunction getColourTheBadWay (a, b) {\n  let colour\n\n  if (a && b) {\n    colour = 'red'\n  } else if (a) {\n    colour = 'yellow'\n  } else if (b) {\n    colour = 'orange'\n  } else {\n    colour = 'black'\n  }\n\n  return colour\n}\n\nconsole.log(`getColourTheBadWay(true, true) is ${getColourTheBadWay(true, true)}`)\nconsole.log(`getColourTheBadWay(true, false) is ${getColourTheBadWay(true, false)}`)\nconsole.log(`getColourTheBadWay(false, true) is ${getColourTheBadWay(false, true)}`)\nconsole.log(`getColourTheBadWay(false, false) is ${getColourTheBadWay(false, false)}`)",imports:"",requires:""},m={code:"const { curry } = require('ramda')\n\nconst doSomeArithmetic = curry((a, b, c, d) => a + b * c - d)\n\nconsole.log(`doSomeArithmetic(10, 7, 5, 3) is ${doSomeArithmetic(10, 7, 5, 3)}`)\nconsole.log(`doSomeArithmetic(10, 7, 5)(3) is ${doSomeArithmetic(10, 7, 5, 3)}`)\nconsole.log(`doSomeArithmetic(10, 7)(5, 3) is ${doSomeArithmetic(10, 7, 5, 3)}`)\nconsole.log(`doSomeArithmetic(10)(7, 5, 3) is ${doSomeArithmetic(10, 7, 5, 3)}`)\nconsole.log(`doSomeArithmetic(10, 7)(5)(3) is ${doSomeArithmetic(10, 7, 5, 3)}`)\nconsole.log(`doSomeArithmetic(10)(7)(5, 3) is ${doSomeArithmetic(10, 7, 5, 3)}`)\nconsole.log(`doSomeArithmetic(10)(7)(5)(3) is ${doSomeArithmetic(10, 7, 5, 3)}`)",imports:"",requires:""},b={code:"const { __, add, compose, divide, multiply, pipe, subtract } = require('ramda')\n\n// The hard-to-read way\nconst doTheMathNested = x => divide(\n  multiply(\n    9,\n    subtract(\n      20,\n      add(5, x)\n    ),\n  ),\n  60\n)\n\n// add and multiply are commutative, so ordering of parameters doesn't matter\n// subtract and divide are not cummutative, so ordering counts\n// Here we want to divide our number by 60, not divide 60 by it, so we need the __ placeholder\n// compose runs right to left, which is more traditional, but possibly harder to read\nconst doTheMathByCompose = compose(\n  divide(__, 60),\n  multiply(9),\n  subtract(20),\n  add(5)\n)\n\n// pipe runs left to right, which may be easier to comprehend\nconst doTheMathByPipe = pipe(\n  add(5),\n  subtract(20),\n  multiply(9),\n  divide(__, 60)\n)\n\n// ((20 - (7  + 5)) * 9) / 60\nconsole.log(`doTheMathNested(7) is ${doTheMathNested(7)}`)\nconsole.log(`doTheMathByCompose(7) is ${doTheMathByCompose(7)}`)\nconsole.log(`doTheMathByPipe(7) is ${doTheMathByPipe(7)}`)\nconsole.log(`((20 - (7  + 5)) * 9) / 60 is ${((20 - (7  + 5)) * 9) / 60}`)",imports:"",requires:""},d={code:"function getColour (a, b) {\n  if (a && b) { return 'blue' }\n  \n  if (a) { return 'cyan' }\n  \n  if (b) { return 'magenta' }\n  \n  return 'white'\n}\n\nconsole.log(`getColour(true, true) is ${getColour(true, true)}`)\nconsole.log(`getColour(true, false) is ${getColour(true, false)}`)\nconsole.log(`getColour(false, true) is ${getColour(false, true)}`)\nconsole.log(`getColour(false, false) is ${getColour(false, false)}`)",imports:"",requires:""},h={code:"const { __, add, curry, map, pipe, reduce, tap } = require('ramda')\n\nconst binaries = ['1', '100', '1001', '10000', '11001']\n\n// We can curry the JS parseInt function\n// Then partially apply it by supplying the second parameter\n// parseBinary takes a binary number string and converts it to an integer\nconst parseBinary = curry(parseInt)(__, 2)\n\n// We can use tap to log out the value at any point in the pipe\n// THIS IS A SIDE EFFECT! DO NOT USE tap TO CHANGE STATE!\nconst sumBinary = pipe(\n  tap(console.log),\n  map(parseBinary),    // map the binary strings to integers\n  tap(console.log),\n  map(Math.sqrt),      // map the integers to their square roots\n  tap(console.log),\n  reduce(add, 0),      // add the square roots up to get the sum\n  tap(console.log),\n  n => n.toString(2),  // convert the integer sum to a binary number string\n  tap(console.log)\n)\n\nconsole.log(`binaries is [${binaries}]`)\nconsole.log('Tapping the pipe:')\n\nconst sum = sumBinary(binaries)\n\nconsole.log('Pipe complete')\nconsole.log(`The sum of the squares of the binaries is binary ${sum}`)",imports:"",requires:""},g=n(230),f={code:"const { sort } = require('ramda')\n\nfunction selectComparator (type) {\n  switch(type) {\n    case 'DESC':\n      return (a, b) => b - a\n    case 'LENGTH_ASC':\n      return (a, b) => a.length - b.length\n    case 'LENGTH_DESC':\n      return (a, b) => b.length - a.length\n    default:\n      return (a, b) => a - b\n  }\n}\n\nconst names = ['Bob', 'Carol', 'Ted', 'Alice', 'Samson', 'Delilah']\n\n// Array.sort sorts in place mutating the array\n// DO NOT USE THIS!\nconsole.log('names is:', names)\nconsole.log('names.sort() is', names.sort())\nconsole.log('names is now:', names)\nconsole.log('Bad sort. Bad! Let\\'s try again:')\n\n// USE THIS\nconsole.log(\n  `sort(selectComparator('LENGTH_DESC'), names) is:`,\n  sort(selectComparator('LENGTH_DESC'), names)\n)\nconsole.log('names is unchanged:', names)\nconsole.log(\n  `sort(selectComparator('LENGTH_ASC'), names) is:`,\n  sort(selectComparator('LENGTH_ASC'), names)\n)\nconsole.log(\n  `sort(selectComparator('DESC'), [2, 5, 3, 9, 1]) is:`,\n  sort(selectComparator('DESC'), [2, 5, 3, 9, 1])\n)\nconsole.log(\n  `sort(selectComparator('ASC'), [2, 5, 3, 9, 1]) is:`,\n  sort(selectComparator('ASC'), [2, 5, 3, 9, 1])\n)",imports:"",requires:""};n.d(t,"_frontmatter",function(){return y}),n.d(t,"default",function(){return w});var y={},O={_frontmatter:y},j=o.a;function w(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(j,Object.assign({},O,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"We can has pipelines!"),Object(a.b)("p",null,"Everything we've discussed up to this point has been prologue. The ",Object(a.b)("strong",{parentName:"p"},"true")," power of functional programming comes from ",Object(a.b)("strong",{parentName:"p"},"combining functions")," to create a kind of function ","“","pipeline","”","."),Object(a.b)("p",null,"Here is the ",Object(a.b)("strong",{parentName:"p"},"most important thing")," for you to understand about piping data from one function to another:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("strong",{parentName:"li"},"first function")," in a pipeline can take ",Object(a.b)("strong",{parentName:"li"},"any number of parameters"),"."),Object(a.b)("li",{parentName:"ul"},"Each succeeding function in the pipeline ",Object(a.b)("strong",{parentName:"li"},"must take only a single parameter"),".")),Object(a.b)("p",null,"The reason for this should be obvious: every function after the first one is getting its input from the output of the preceeding function. As a function can only return a single value, there is no way to pass more than one argument to the next function in the pipe. Right?"),Object(a.b)(c.a,{mdxType:"TerminologyBlock"},"The number of parameters a function accepts is called its ",Object(a.b)(s.a,{href:"https://en.wikipedia.org/wiki/Arity",mdxType:"OffsiteLink"},"arity"),". The above can be restated thus: In a pipeline of functions, the first function can have ",Object(a.b)("em",null,"any")," arity, but each succeeding function must have arity of 1.",Object(a.b)("br",null),Object(a.b)("br",null),"This process of combining functions together is called ",Object(a.b)(s.a,{href:"https://en.wikipedia.org/wiki/Function_composition_(computer_science)",mdxType:"OffsiteLink"},"function composition"),". We can compose functions in JavaScript because functions are ",Object(a.b)(s.a,{href:"https://en.wikipedia.org/wiki/First-class_function",mdxType:"OffsiteLink"},"first-class citizens"),", meaning that they can be passed into and returned from other functions.",Object(a.b)("br",null),Object(a.b)("br",null),"Functions that either take or return another function are called ",Object(a.b)(s.a,{href:"https://en.wikipedia.org/wiki/Higher-order_function",mdxType:"OffsiteLink"},"higher-order functions"),". JavaScript supports higher-order functions."),Object(a.b)("p",null,"Of course, functions in a pipe other than the first function ",Object(a.b)("em",{parentName:"p"},"can")," accept more than one parameter. It's just that only a single argument will be passed from the preceeding function. But if the parameters after the first one have suitable default values, that can still work."),Object(a.b)("p",null,"But pipelining functions will become much more useful to us if there is a way to ","“","partially apply","”"," functions so that we ","“","pre-load","”"," them with the other arguments they need. We can do this by creating functions that can return other functions if they are called with fewer arguments than the number of parameters they expect."),Object(a.b)(c.a,{mdxType:"TerminologyBlock"},"When we modify a function to permit it to accept a subset of its parameters (i.e., a number of arguments less than the “arity” of the function), and to return a new function that “remembers” the arguments already passed, accepts the remaining parameters, and then applies all of them and returns the result, then we call that ",Object(a.b)(s.a,{href:"https://en.wikipedia.org/wiki/Currying",mdxType:"OffsiteLink"},"currying")," the function, and we say that the function has been “curried”.",Object(a.b)("br",null),Object(a.b)("br",null),"When we create a ",Object(a.b)(s.a,{href:"https://en.wikipedia.org/wiki/Closure_(computer_programming)",mdxType:"OffsiteLink"},"closure")," by passing fewer arguments to a function than there are parameters and getting back a new function, we call that ",Object(a.b)(s.a,{href:"https://en.wikipedia.org/wiki/Partial_application",mdxType:"OffsiteLink"},"partial application")," and the function (closure) returned a “partially-applied function”."),Object(a.b)("p",null,"Here is where we ",Object(a.b)("strong",{parentName:"p"},"separate the pros from the novices"),". We mentioned default values for the extra parameters above, and if you think that way, then your inclination will be to make the data that we intend to pass down the pipe the ",Object(a.b)("strong",{parentName:"p"},"first")," parameter, because that's the one that will be passed by the preceeding function, right?"),Object(a.b)("p",null,"But this means that the only way to fill the remaining arguments is with default values, which is pretty limiting."),Object(a.b)("p",null,"But if we can apply fewer arguments than there are parameters to a function, and get back a function that remembers those arguments and accepts the remaining parameters, then ",Object(a.b)("strong",{parentName:"p"},"we want the parameter that will be ","“","chained","”"," to be the ",Object(a.b)("em",{parentName:"strong"},"last")," parameter"),", not the first. We'll see this when we get to using ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"pipe")," and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"compose")," below."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This is where the Underscore and Lodash libraries went wrong")," (fixed in Lodash/FP), and what Ramda and Sanctuary got so right."),Object(a.b)("p",null,"In Underscore and Lodash, the argument we want to pass down the pipe is passed as the ",Object(a.b)("strong",{parentName:"p"},"first")," parameter, which means there is no way to set any remaining parameters, except by default value. Underscore and Lodash get around this by forcing you to add a ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"chain")," function call","—","an absolute code ",Object(a.b)("em",{parentName:"p"},"stink"),"—","and they expect you to pipe function calls by dotting them together."),Object(a.b)("p",null,"Ramda and Sanctuary, in contrast, allow you to ","“","partially apply","”"," functions so that only the last parameter remains unfilled, and then use ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"pipe")," or ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"compose")," to chain them together to create a new function that takes any number of parameters, passes the data down the chain of functions, and returns the final result."),Object(a.b)("p",null,"Enough chat! Let's cut to the chase!"),Object(a.b)("h3",{id:"curry"},"Use ",Object(a.b)("code",null,"curry")," to make functions that make functions"),Object(a.b)("p",null,"The ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"curry")," function takes a function that expects one or more parameters and turns it into a function that allows partial application of those parameters, ideally in any combination (but preserving order). Like this:"),Object(a.b)(r.a,Object.assign({},m,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"But with Ramda's ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"curry")," function, we can also use the ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"__")," placeholder for some really clever FP:"),Object(a.b)(r.a,Object.assign({},l,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"Vanilla JS is quite a bit more difficult. The easiest way is simply to be functional and create our own curry function:"),Object(a.b)(r.a,Object.assign({},g.a,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"Lovely. But our own ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"curry")," function does not allow the use of the ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"__")," placeholder. We could add that, but now our function becomes quite a bit more complex","—","if you check the Ramda source code, they break it out into four different functions and a constant."),Object(a.b)("p",null,"Our suggestion: If you want to do serious functional programming with these sorts of functions, just use Ramda or Sanctuary."),Object(a.b)("p",null,"With a good build system, e.g., Webpack, you should be able to ","“","tree shake","”"," out any unused code, so you don't bulk up your compiled code."),Object(a.b)("p",null,"Now to see what we can do with ","“","curried","”"," functions."),Object(a.b)("p",null,"(Note: Pretty much every function included in Ramda is pre-curried, so you can partially apply any of them. And you have the ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"curry")," function to curry your own functions. Just remember, as Stan Lee reminds us, that with great power comes great responsibility.)"),Object(a.b)("h3",{id:"pipe"},"Use ",Object(a.b)("code",null,"pipe")," or ",Object(a.b)("code",null,"compose")," to combine functions into pipelines"),Object(a.b)("p",null,"The ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"pipe")," and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"compose")," functions ",Object(a.b)("strong",{parentName:"p"},"do the same thing"),", just in different directions. Each takes functions as parameters (in Sanctuary they are passed in a single parameter as an array). Each applies the functions one after the other. The difference is: ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"pipe")," applies them left to right, and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"compose")," applies them right to left."),Object(a.b)("p",null,"The reasons for this are historical. Use whichever makes more sense to you."),Object(a.b)("p",null,"Consider a situation such as this:"),Object(a.b)(i.a,{code:"const combinedFunctions = (a, b, c) => outerFunction(\n  middleFunction(\n    innerFunction(a, b, c)\n  )\n)",mdxType:"Highlighter"}),Object(a.b)("p",null,"This is essentially what ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"pipe")," and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"compose")," do, but you don't need to wrap ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"innerFunction"),", ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"middleFunction"),", and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"outerFunction")," in a yet another function as we do above. You just pass them to ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"pipe")," or ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"compose")," and you get a function back."),Object(a.b)("p",null,"The ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"pipe")," function takes the function arguments ",Object(a.b)("strong",{parentName:"p"},"in the order that they will be applied"),". In the above, nested example, the functions will be applied from the innermost to the outermost, right? So our ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"pipe")," would look like this:"),Object(a.b)(i.a,{code:"const combinedFunctions = pipe(innerFunction, middleFunction, outerFunction)",showLineNumbers:!1,mdxType:"Highlighter"}),Object(a.b)("p",null,"In contrast, the ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"compose")," function follows the ","“","nested","”"," order that we see them in the above example (outermost to innermost):"),Object(a.b)(i.a,{code:"const combinedFunctions = compose(outerFunction, middleFunction, innerFunction)",showLineNumbers:!1,mdxType:"Highlighter"}),Object(a.b)("p",null,"But the functions are still applied in the same order: ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"innerFunction")," to ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"middleFunction")," to ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"outerFunction"),"."),Object(a.b)("p",null,"So ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"innerFunction")," can take as many parameters as it needs, but ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"middleFunction")," and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"outerFunction")," will each be passed only the result of the previous function, so they can only operate on a single parameter."),Object(a.b)("p",null,"Suppose I used the (curried) Ramda functions, ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"add"),", ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"subtract"),", ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"multiply"),", and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"divide"),". Each takes two parameters, so I will need to supply one of them for each (except, possibly, the first function in the pipeline)."),Object(a.b)("p",null,"I want to create a function that takes a number, adds five, subtracts that sum from twenty, multiplies the difference by nine, and divides that product by sixty, in that order."),Object(a.b)("p",null,"Yes, yes, yes. We know. This is an absurd example and we'd just use the ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"+"),", ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"-"),", ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"*"),", and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"/")," operators. But it's about the principle! So let's run with it."),Object(a.b)("p",null,"Here's our example:"),Object(a.b)(r.a,Object.assign({},b,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"Here's a more complex example in which we use ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"tap")," to ","“","tap","”"," into the pipe and use a side effect to log the value to the console. Remember that ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"tap")," passes the value unchanged, so it is always and ",Object(a.b)("em",{parentName:"p"},"only")," used for side effects such as logging. ",Object(a.b)("strong",{parentName:"p"},"Do not use ",Object(a.b)("code",Object.assign({parentName:"strong"},{className:"language-text"}),"tap")," to mutate program state!")),Object(a.b)(r.a,Object.assign({},h,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"We can also use Ramda's ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"then")," and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"otherwise")," to handle async behaviour with Promises. See if you can figure out what this does:"),Object(a.b)(r.a,Object.assign({},u,{mdxType:"CodeBlock"})),Object(a.b)("h3",{id:"state-state-state"},"Think in terms of state!"),Object(a.b)("p",null,"In the simplest sense, the ",Object(a.b)("strong",{parentName:"p"},"state")," of your application is anything that could conceivably be different at time t",Object(a.b)("sub",null,"2")," than it was at time t",Object(a.b)("sub",null,"1"),": ",Object(a.b)("code",null,"value",Object(a.b)("sub",null,"t1")," !== value",Object(a.b)("sub",null,"t2")),"."),Object(a.b)("p",null,"When we work in a functional paradigm, our concerns about state are twofold:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Do not destroy state: make a new copy"),Object(a.b)("li",{parentName:"ol"},"Do not share state between processes: keep processes isolated")),Object(a.b)("p",null,"We can't always keep these promises, but we should do our utmost to live up to these best practices."),Object(a.b)("p",null,"The two most important practices for handling state properly are ",Object(a.b)("strong",{parentName:"p"},"immutability")," and keeping our functions ",Object(a.b)("strong",{parentName:"p"},"pure"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Immutability")," means that once we create a variable, we never reassign it or change it. It is ","“","frozen","”",". If we need to change it, we make a new copy that reflect the change. This means that we never lose track of our previous state (until we want to). It also means that if we know what value a variable had when it was assigned, then we know what value it has now. It never changes."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Pure functions")," help us to isolate processes to avoid sharing state. They also help with immutability by always returning a copy rather than mutating in place. A pure function, if you recall, is a function that always returns the same result for the same arguments, and does not affect the program in any other way: no reaching out from within a function; no reaching into functions to muck about."),Object(a.b)("p",null,"How can we avoid mutating variables? The best way is to ",Object(a.b)("em",{parentName:"p"},"use functions")," instead of loops, conditionals, and other constructs."),Object(a.b)("p",null,"For example, suppose that I want to assign a variable ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"colour")," differntly depending on the value of variables ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"a")," and ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"b"),":"),Object(a.b)(r.a,Object.assign({},p,{theme:"dark",warn:function(){return Object(a.b)("small",null,"Lasciate ogne speranza, voi ch'entrate!")},mdxType:"CodeBlock"})),Object(a.b)("p",null,"A much better style is this:"),Object(a.b)(r.a,Object.assign({},d,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"Not only to we get rid of ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"let"),", assigning a variable altogether, and mutation, but our code is cleaner, more readable, and more succinct. We also lose the ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"else")," construct. The function returns the moment the correct answer is found. The use of ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"return")," is very clear."),Object(a.b)("p",null,"What's more, with the use of ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"return")," the ",Object(a.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"switch")," statement, formerly something to avoid, becomes quite useful as a sort of switchboard or pattern matcher:"),Object(a.b)(r.a,Object.assign({},f,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"You will see this pattern over and over again."),Object(a.b)("p",null,"When we mutate variables or reassign them, and when we reach outside of functions to change state in the global context, we create chaos. Anarchy! Who knows what is changing what else and when?"),Object(a.b)("p",null,"It's like spaghetti code. You find yourself tracing from line to line and function to function and even file to file just to figure out where something was mutated."),Object(a.b)("p",null,"Avoid the anarchy! A well-regulated state, being necessary to the security of your code base, the right of variables to be free of mutation and functions to be free of side effects shall not be infringed."),Object(a.b)("p",null,"Functional programming gives you all the tools to build fast, efficient, understandable, and error-free code. Embrace the functional style."),Object(a.b)("blockquote",null,"Things fall apart; the centre cannot hold;",Object(a.b)("br",null),"Mere anarchy is loosed upon the world..."),Object(a.b)("p",null,"What rough beast, indeed."),Object(a.b)("small",null,"Errors, bugs, suggestions, questions? Surplus rye whiskey? Contact ",Object(a.b)("a",{href:"mailto:charles_munat@bnz.co.nz"},"Charles Munat")),".")}w.isMDXComponent=!0},210:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(68),i=n.n(r);n.d(t,"a",function(){return i.a});n(211),n(9).default.enqueue,o.a.createContext({})},211:function(e,t,n){var a;e.exports=(a=n(213))&&a.default||a},212:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP"}}}}},213:function(e,t,n){"use strict";n.r(t);n(52),n(17),n(14),n(15),n(8),n(22);var a=n(0),o=n.n(a),r=n(96);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(r.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},214:function(e,t,n){"use strict";var a=n(215),o=n(0),r=n.n(o),i=n(222),s=n.n(i);function c(e){var t=e.lang,n=e.title,o=a.data.site;return r.a.createElement(s.a,{htmlAttributes:{lang:t},title:n?n+" | "+o.siteMetadata.title:o.siteMetadata.title},r.a.createElement("script",{src:"https://embed.runkit.com","data-element-id":"runkit"}))}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},215:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP",description:"Functional JavaScript for the OO programmer.",author:"@chasm"}}}}},216:function(e,t,n){"use strict";var a=n(212),o=(n(221),n(0)),r=n.n(o),i=(n(16),n(41),n(210)),s=n(23);function c(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{to:"/inductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Bottom-up"),r.a.createElement(i.a,{to:"/deductive",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Top-down"),r.a.createElement(i.a,{to:"/patterns-antipatterns",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Patterns"))}function l(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{to:"/inductive/reusability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Reusability"),r.a.createElement(i.a,{to:"/inductive/immutability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Variables"),r.a.createElement(i.a,{to:"/inductive/iteration",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Looping"),r.a.createElement(i.a,{to:"/inductive/composition",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pipelines"))}function u(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{to:"/deductive/pure-functions/",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pure functions"),r.a.createElement(i.a,{to:"/deductive/more-fp-concepts",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"More FP concepts"))}function p(e){switch(e.location.pathname.split("/")[1]){case"inductive":return r.a.createElement(l,null);case"deductive":return r.a.createElement(u,null);default:return r.a.createElement(c,null)}}var m=function(e){var t=e.siteTitle,n=e.location,a=function(e){switch(e.pathname.split("/")[1]){case"inductive":return"ForestGreen";case"deductive":return"MediumBlue";case"patterns-antipatterns":return"Maroon";default:return"RebeccaPurple"}}(n);return r.a.createElement("header",{style:{background:a,marginBottom:"1.45rem"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0,display:"inline-block",flexGrow:1}},r.a.createElement(i.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),r.a.createElement("div",{style:{flexShrink:1}},r.a.createElement(p,{location:n}))))};function b(e){return r.a.createElement(s.Location,null,function(t){return r.a.createElement(m,Object.assign({},t,e))})}m.defaultProps={siteTitle:""};t.a=function(e){var t=e.children,n=a.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{siteTitle:n.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t)))}},217:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(14),n(15),n(8),n(22),n(16);var a=n(210),o=n(0),r=n.n(o),i=n(23);var s=/#|\?/g,c=function(e){return function(){return Object(i.navigate)(e)}};function l(e){var t=e.children,n=e.to,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","to"]);return s.test(n)?r.a.createElement("a",Object.assign({onClick:c(n)},o),t):r.a.createElement(a.a,Object.assign({to:n},o),t)}},218:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(210);function i(){return o.a.createElement("span",{className:"separator"},"»")}function s(e){var t=e.title,n=e.trail;return void 0===n?null:o.a.createElement("p",null,function(e,t){return void 0===t&&(t=[]),o.a.createElement(o.a.Fragment,null,t.map(function(e){var t=e.href,n=e.label;return o.a.createElement(a.Fragment,{key:t},o.a.createElement(r.a,{to:t},n),o.a.createElement(i,null))}),e)}(t,n))}var c=n(216),l=n(214);t.a=function(e){var t=e.children,n=e.pageContext.frontmatter,a=n.title,r=n.trail;return o.a.createElement(c.a,null,o.a.createElement(l.a,{title:a}),o.a.createElement(s,{title:a,trail:r}),o.a.createElement("article",null,t))}},219:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),o=n.n(a),r=n(445),i=n(443),s=n(444);function c(e){var t=e.code,n=void 0===t?"":t,a=e.language,c=void 0===a?"javascript":a,l=e.showLineNumbers,u=void 0===l||l,p=e.startingLineNumber,m=void 0===p?1:p,b=e.theme,d=void 0===b?"light":b,h=e.warn,g=void 0===h?function(){return null}:h;return o.a.createElement(o.a.Fragment,null,g(),o.a.createElement(r.a,{language:c,style:"light"===d?i.a:s.a,showLineNumbers:u,startingLineNumber:m},n))}},220:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),o=n.n(a);function r(e){var t=e.children,n=e.href;return o.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer","aria-label":"Offsite link: opens in new window",className:"offsite-link",title:"Offsite link: opens in a new window"},t)}},223:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),o=n.n(a),r=n(225),i=n.n(r),s=n(219);function c(e){var t=e.code,n=void 0===t?"":t,r=e.imports,c=void 0===r?"":r,l=e.requires,u=void 0===l?"":l,p=e.theme,m=void 0===p?"light":p,b=e.warn,d=void 0===b?function(){return null}:b,h=Object(a.useState)(!1),g=h[0],f=h[1];return Object(a.useEffect)(function(){var e=setInterval(function(){f(Boolean(window)&&Boolean(window.RunKit))},1e3);return g&&clearInterval(e),function(){return clearInterval(e)}},[]),g?o.a.createElement("div",{className:"code-block"},d(),o.a.createElement(i.a,{source:""+u+n,nodeVersion:"12",theme:"solarized-"+m})):o.a.createElement(s.a,{code:""+c+n,theme:m,warn:d})}},224:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),o=n.n(a);function r(e){var t=e.children,n=Object(a.useState)(!1),r=n[0],i=n[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,o.a.createElement("a",{onClick:function(){return i(!r)},style:{cursor:"pointer"}},o.a.createElement("strong",null,r?"Hide ":"Show "," Evil Terminology"))),r&&o.a.createElement("blockquote",null,t))}},230:function(e,t,n){"use strict";t.a={code:'// curryN takes the number of parameters and the function\nconst curryN = (n, f) => (...args) => // return a function that takes some arguments\n  args.length === n  // if all the arguments have been supplied\n    ? f(...args)     // then call the function with the args and return the result\n    : curryN(\n      n - args.length,\n      (...newArgs) => f(...args, ...newArgs)\n    )                // else recurse for the remaining arguments\n\nconst curry = f => curryN(f.length, f) // Create a closure on the number of parameters\n  \n// A function that takes 3 parameters\nconst uncurried = (x, y, z) => ([x, y, z])\n\n// Try applying it without currying\nconsole.log(`uncurried(1, 2, 3) is ${JSON.stringify(uncurried(1, 2, 3))}`)\n\n// Oops\ntry {\n  console.log(`uncurried(1, 2)(3) is ${JSON.stringify(uncurried(1, 2)(3))}`)\n  console.log(`uncurried(1)(2, 3) is ${JSON.stringify(uncurried(1)(2, 3))}`)\n  console.log(`uncurried(1)(2)(3) is ${JSON.stringify(uncurried(1)(2)(3))}`)\n} catch (e) {\n  console.log(`Uh, oh: ${e}`)\n}\n\n// Now let\'s try again, but with our function curried properly\nconst curried = curry((x, y, z) => ([x, y, z]))\n\n// Everything works\nconsole.log(`curried(4, 5, 6) is ${JSON.stringify(curried(4, 5, 6))}`)\nconsole.log(`curried(4, 5)(6) is ${JSON.stringify(curried(4, 5)(6))}`)\nconsole.log(`curried(4)(5, 6) is ${JSON.stringify(curried(4)(5, 6))}`)\nconsole.log(`curried(4)(5)(6) is ${JSON.stringify(curried(4)(5)(6))}`)\n\n// We can partially apply our function to create new functions\n// that "remember" one or more arguments\nconst prependSeven = curried(7)\nconst prependSevenAndEight = prependSeven(8)\nconsole.log(`prependSevenAndEight(9) is ${JSON.stringify(prependSevenAndEight(9))}`)',imports:"",requires:""}}}]);
//# sourceMappingURL=component---src-pages-inductive-composition-index-mdx-47a990b972caaede4a60.js.map