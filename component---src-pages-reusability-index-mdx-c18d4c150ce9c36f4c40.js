(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{185:function(e,t,n){"use strict";n.r(t);n(14),n(12),n(7),n(20),n(17),n(0);var a=n(60),o=n(193),i=n(186),r=n(194),s=n(195),c={code:"function add (x, y) {\n  return x + y\n}\n\nconsole.log('Does 5 + 7 equal 12?', add(5, 7) === 12 ? 'Yes!' : 'No')\nconsole.log('Is 5 + 7 still 12?', add(5, 7) === 12 ? 'Yes!!' : 'No')\nconsole.log('What about now?', add(5, 7) === 12 ? 'Yes! Still 12! UNBELIEVABLE! Who knew?' : 'Uh, oh')",imports:"",requires:""},l={code:"function areaFromDiameter (diameter) {\n  const radius = diameter / 2\n  \n  return Math.PI * radius * radius\n}\n\nareaFromDiameter(2) // Radius is 1, 1 squared is 1, area should equal PI",imports:"",requires:""},u={code:"const person = {\n  name: 'Bob',\n  position: 'Tester'\n}\n\nfunction updateName (person, name) {\n  person.name = name\n  \n  return person\n}\n\nconsole.log(`updateName(person, 'Bobby') returns person.name of ${updateName(person, 'Bobby').name}`)\nconsole.log(`Now look what happened to our outer person.name: ${person.name}. Not good.`)",imports:"",requires:""},p={code:"let name = 'Bob'\n\nfunction toUpper (name) {\n  name = name.toUpperCase() // name inside the function is a COPY of the string passed in\n  \n  return name // This returns the updated COPY\n}\n\nconsole.log(`toUpper(name) yields ${toUpper(name)}`)\nconsole.log(`But name is still ${name}`)\n\nname = name.toUpperCase() // Why we don't use \"let\"\n\nconsole.log(`But now it isn't: ${name}`)",imports:"",requires:""},m={code:"const person = {\n  name: 'Bob',\n  position: 'Tester'\n}\n\nfunction updateNameCorrectly (person, name) {\n  \n  return {\n    ...person, // copies all of the key-value pairs in person to a new object\n    name // overwrites the name value in the new object\n  }\n}\n\nconsole.log(`updateName(person, 'Bobby') returns person.name of ${updateNameCorrectly(person, 'Bobby').name}`)\nconsole.log(`Now look what happened to our outer person.name: ${person.name}. No change. Hooray! We're GENIUSES!`)",imports:"",requires:""},d={code:"function addToN (n) {\n  return x => n + x\n}\n\nconst addToFive = addToN(5)\nconst addToTen = addToN(10)\n\nconsole.log(`3 + 5 is ${addToFive(3)}`)\nconsole.log(`8 + 5 is ${addToFive(8)}`)\nconsole.log(`17 + 10 is ${addToTen(17)}`)\nconsole.log(`1 + 10 is ${addToTen(1)}`)",imports:"",requires:""},h={code:"// For the love of all that is holy and pure, DO NOT DO THIS!\n\n// Do not let the evil \"let\" into your code!\nlet x = 'x'\n\nfunction doEvil (y) {\n  x = y\n}\n\nconsole.log(`Oh, look what doEvil returns: ${doEvil('y')}`)\n\nconsole.log(`And x is now ${x}! Oh, the humanity!`)\nconsole.log(`doEvil changed something other than through its result. That's just so wrong.`)\n\n// More evil!\n\nlet i = 1\n\nfunction inc (n) {\n  return n + i\n}\n\nconsole.log(`The inc function increments by 1: inc(5) is ${inc(5)}`)\n\ni = 5\n\nconsole.log(`Or does it: inc(5) is ${inc(5)}`)\nconsole.log('Calling inc(5) at different times got different results. Ack! No! No! No!')\n",imports:"",requires:""},b={code:"function getAreaAndCircumferenceFromRadius (radius) {\n  const area = Math.PI * radius * radius\n  const circumference = Math.PI * radius * 2\n\n  return [area, circumference]\n}\n\nconst [area, circumference] = getAreaAndCircumferenceFromRadius(1)\n\nconsole.log(`The area is ${area}`)\nconsole.log(`The circumference is ${circumference}`)",imports:"",requires:""},f={code:"const calculateArea = radius => Math.PI * radius * radius\nconst calculateCircumference = radius => Math.PI * radius * 2\n\nfunction getAreaAndCircumferenceFromRadius (radius) {\n  // We can also return an object\n  return {\n    area: calculateArea(radius),\n    circumference: calculateCircumference(radius)\n  }\n}\n\nconst { area, circumference } = getAreaAndCircumferenceFromRadius(1)\n\nconsole.log(`The area is ${area}`)\nconsole.log(`The circumference is ${circumference}`)",imports:"",requires:""},g={code:"function alwaysTrue () {\n  return true\n}\n\n// Let's try it!\nconsole.log('Calling alwaysTrue', alwaysTrue())\nconsole.log('Calling alwaysTrue again', alwaysTrue())\nconsole.log('Calling alwaysTrue one more time', alwaysTrue())",imports:"",requires:""},w={code:"function sum (nums = []) {\n  if (nums.length < 1) { return 0 }\n\n  const [head, ...tail] = nums\n\n  return head + sum(tail)\n}\n\nconsole.log('The sum of [] is:', sum([]))\nconsole.log('The sum of [5] is:', sum([5]))\nconsole.log('The sum of [1, 2, 3] is:', sum([1, 2, 3]))",imports:"",requires:""},y={code:"function testN (n) {\n  if (n <= -1) { return false }\n  if (n >= 1) { return true}\n\n  return undefined\n}\n\nconsole.log('Testing -5:', testN(-5))\nconsole.log('Testing 7:', testN(7))\nconsole.log('Testing 0:', testN(0))",imports:"",requires:""},j={code:"const asc = (a, b) => a - b\nconst desc = (a, b) => b - a\n\nconst getFirstCapCharCode = s => s.match(/[A-Z]/)[0].charCodeAt(0)\n\nconst firstCapAsc = (a, b) => getFirstCapCharCode(a) - getFirstCapCharCode(b)\nconst firstCapDesc = (a, b) => getFirstCapCharCode(b) - getFirstCapCharCode(a)\n\nconsole.log('Sort [3, 5, 1] ascending:', [3, 5, 1].sort())\nconsole.log('Sort [3, 5, 1] ascending:', [3, 5, 1].sort(asc))\nconsole.log('Sort [3, 5, 1] descending:', [3, 5, 1].sort(desc))\n\nconst strs = ['stRinG', 'nuMber', 'Boolean',  'arraY']\n\nconsole.log('Sort strings ascending:', strs.sort(firstCapAsc))\nconsole.log('Sort strings descending:', strs.sort(firstCapDesc))",imports:"",requires:""};n.d(t,"_frontmatter",function(){return O}),n.d(t,"default",function(){return C});var O={},v={_frontmatter:O},N=o.a;function C(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(N,Object.assign({},v,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Functions are the basic unit of reusability"),Object(a.b)("p",null,"Functional programming is programming ",Object(a.b)("em",{parentName:"p"},"with functions"),". Shocking, no? Who knew?"),Object(a.b)("p",null,"Functions are the basic unit of reusability. If we have a few lines of code, and they do something that we might want to do again somewhere else in our code, then we can wrap them in a function. Then we can use that function throughout our code."),Object(a.b)("p",null,"We don't have to write the algorithm over and over again, which might mean making mistakes and getting different results. It's wrapped up in the function, and we just call the function to run the code and get a result back."),Object(a.b)("p",null,"We probably want the function to behave slightly differently in different contexts, so we can pass it arguments. These are the parameters of the function: the context in which it operates. The function takes one or more arguments and returns a single result."),Object(a.b)("p",null,"If you think about this, we can consider the input to the function to be the current state of our application (part of it anyway), and the result of the function represents a new, transformed state."),Object(a.b)("p",null,"So functions are the way we change state in our application. Essentially, a function is a black box that takes state (in the form of arguments) and returns new state (in the form of a single result):"),Object(a.b)("p",null,"For example, suppose we wanted to be able to calculate the area of a circle given its diameter. We know that the area of a circle is the radius squared times PI (3.1415926...). We can create a function called ",Object(a.b)("inlineCode",{parentName:"p"},"areaFromDiameter")," that takes the diamter as a parameter and returns the area of the circle with that diameter:"),Object(a.b)(s.a,Object.assign({},l,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"Now we can use that throughout our code. See? Functional programming is easy!"),Object(a.b)("p",null,Object(a.b)("h3",{id:"purity-rules"},"Given the same arguments, a function must return the same result")),Object(a.b)("p",null,"Put another way, what a function returns depends ",Object(a.b)("em",{parentName:"p"},"entirely")," on the arguments passed to the function. Avoid as much as possible writing functions that return a value ",Object(a.b)("em",{parentName:"p"},"independently of the inputs"),"."),Object(a.b)("p",null,"Here is a good example: the ",Object(a.b)("inlineCode",{parentName:"p"},"add")," function. It takes two numbers and returns the sum of the numbers. If we call it with 5 and 7, then it always returns 12. It doesn't sometimes return 12, sometimes 11, sometimes 13. Right? Make all your functions work this way and your life as a programmer will get much, much easier."),Object(a.b)(s.a,Object.assign({},c,{mdxType:"CodeBlock"})),Object(a.b)("p",null,Object(a.b)("h3",{id:"real-functions-have-parameters"},"Functions take at least one parameter")),Object(a.b)("p",null,"You have probably noticed that we can create a function that has no parameters. How about this one?"),Object(a.b)(s.a,Object.assign({},g,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"Kinda boring, huh? Remember that ",Object(a.b)("em",{parentName:"p"},"a function always returns the same result for the same arguments"),". We can't pass this function any arguments, so we can't change the input in any way, hence we can't change the output either. We have a name for this kind of function. We call it a ",Object(a.b)("strong",{parentName:"p"},"constant"),"."),Object(a.b)("p",null,"Ha, ha. Get it? Because its output is ",Object(a.b)("em",{parentName:"p"},"constant"),"."),Object(a.b)("p",null,"Believe it or not, a parameterless function can be useful in rare circumstances in which we ",Object(a.b)("em",{parentName:"p"},"want")," a function to return the same thing every time it is called. There's an exception to every rule, no? But in daily use, remember that ",Object(a.b)("em",{parentName:"p"},"functions take at least one parameter"),"."),Object(a.b)("p",null,Object(a.b)("h3",{id:"real-functions-return-a-value"},"Functions return exactly one result")),Object(a.b)("p",null,'You probably already know that you can\'t return more than one value from a function. But what we mean by "exactly one result" is that you should always return a value. A function that returns no value is ',Object(a.b)("strong",{parentName:"p"},"useless"),", as we'll explain below."),Object(a.b)("p",null,"To be clear, that value might be the value ",Object(a.b)("inlineCode",{parentName:"p"},"undefined"),". But if you are returning ",Object(a.b)("inlineCode",{parentName:"p"},"undefined")," from your function, it should be because whatever is calling the function expects ",Object(a.b)("inlineCode",{parentName:"p"},"undefined")," to be a possible result and will act on it accordingly. That's different from not returning anything (even though a function without a return statement will, by default, return ",Object(a.b)("inlineCode",{parentName:"p"},"undefined"),")."),Object(a.b)("p",null,"To make this explicit to the next programmer","—","that you ",Object(a.b)("em",{parentName:"p"},"intended")," to return ",Object(a.b)("inlineCode",{parentName:"p"},"undefined"),"—","return it explicitly: ",Object(a.b)("inlineCode",{parentName:"p"},"return undefined"),". Here is an example:"),Object(a.b)(s.a,Object.assign({},y,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"There may be rare occasions when we want to return multiple values from a function. In this instance, we can wrap them up into a composite value and return that. Then we can destructure our values out of it on the other end."),Object(a.b)("p",null,"For example, we can use the JavaScript ",Object(a.b)("inlineCode",{parentName:"p"},"Array")," as a kind of tuple. A tuple is an ordered list of elements, typically having different datatypes, such as a number, a string, and a boolean. In JavaScript, arrays aren't limited to a single datatype, so they can work as tuples. "),Object(a.b)("p",null,"Here we have a function that calculates the area and the cirumference of a circle given the radius and returns them in a tuple. We can then destructure them from the tuple:"),Object(a.b)(s.a,Object.assign({},b,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"In general, returning multiple values from a function is a ",Object(a.b)("strong",{parentName:"p"},"code smell"),". Try to avoid it. If you must do it, at least delegate the work to smaller, single-purpose functions:"),Object(a.b)(s.a,Object.assign({},f,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"Notice how the name of our function is kind of long? That's a hint that our function is probably doing too much. Refactor, if possible."),Object(a.b)("p",null,Object(a.b)("h3",{id:"join-the-higher-order"},"Functions can be passed as arguments to other functions")),Object(a.b)("p",null,"Here is where FP starts to come into its own. If we can pass a function as an argument to another function, then our functions become exponentially more powerful."),Object(a.b)("p",null,"This is best explained with an example. The JavaScript ",Object(a.b)("inlineCode",{parentName:"p"},"Array")," object has a ",Object(a.b)("inlineCode",{parentName:"p"},"sort"),' method. The default is to sort in ascending order. This uses a "comparator" function that takes two elements from the array and compares them.'),Object(a.b)("p",null,"If the elements are of equal priority, meaning their ordering doesn't matter, then the comparator function returns zero. If the first argument should come first in the list, then the comparator returns one; if it should come second, it returns minus one. So our default comparator looks like this: ",Object(a.b)("inlineCode",{parentName:"p"},"(a, b) => a - b"),"."),Object(a.b)("p",null,"But what if we want to sort in descending order? Well, we could make our ",Object(a.b)("inlineCode",{parentName:"p"},"sort")," method take a constant, such as ",Object(a.b)("inlineCode",{parentName:"p"},"ASC")," or ",Object(a.b)("inlineCode",{parentName:"p"},"DESC")," and switch up the comparator function so on ",Object(a.b)("inlineCode",{parentName:"p"},"DESC")," it was ",Object(a.b)("inlineCode",{parentName:"p"},"(a, b) => b - a"),", right? But our options are pretty limited here, no? For example, what if we wanted to sort a list of strings by ",Object(a.b)("em",{parentName:"p"},"the first uppercase letter in the string?")," Uh, oh."),Object(a.b)("p",null,'So the "Vanilla JS" ',Object(a.b)("inlineCode",{parentName:"p"},"sort")," method allows us to pass it our own comparator function. Items in the list (array) will be passed to the comparator two at a time, and  the comparator should return 1, 0, or -1 accordingly. How it does that is up to us."),Object(a.b)("p",null,"Here is our example:"),Object(a.b)(s.a,Object.assign({},j,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"Now that is power."),Object(a.b)("p",null,Object(a.b)("h3",{id:"who-wants-curry"},"Functions can be returned from other functions")),Object(a.b)("p",null,"We can also return a function from a function. This means we can use functions as factories to create other functions. Here is an example:"),Object(a.b)(s.a,Object.assign({},d,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"This is a pretty simple example, but more useful than you might think. Later, we'll talk about how  we can \"partially apply\" some types of functions, and we'll use an ",Object(a.b)("inlineCode",{parentName:"p"},"add")," function as an example. When we start maniuplating lists of items ",Object(a.b)("em",{parentName:"p"},"without using loops")," we'll see how incredibly powerful this ability to return a function from a function really is."),Object(a.b)("p",null,"One thing to note is that under normal circumstances, when we call our ",Object(a.b)("inlineCode",{parentName:"p"},"addToN")," function and pass it an argument, say ",Object(a.b)("inlineCode",{parentName:"p"},"5"),", the function creates a local (to the function) variable ",Object(a.b)("inlineCode",{parentName:"p"},"n")," and assigns it the value ",Object(a.b)("inlineCode",{parentName:"p"},"5"),". We can then use it inside our ",Object(a.b)("inlineCode",{parentName:"p"},"addToN")," function."),Object(a.b)("p",null,"Normally when a function exits and returns a value, it releases all its local variables to be garbage collected. But because our ",Object(a.b)("inlineCode",{parentName:"p"},"addToN")," function includes ",Object(a.b)("inlineCode",{parentName:"p"},"n")," in the function it returns, we still have a pointer to that variable, which prevents it from being garbage collected until the function we returned is garbage collected."),Object(a.b)("p",null,'In this way we can "capture" (or "close" on) a bit of state and reuse it over and over again, as we did with our ',Object(a.b)("inlineCode",{parentName:"p"},"addToFive")," and ",Object(a.b)("inlineCode",{parentName:"p"},"addToTen")," functions above. That is a ",Object(a.b)("em",{parentName:"p"},"very powerful")," feature of JavaScript: one you will use over and over and over again."),Object(a.b)("p",null,Object(a.b)("h3",{id:"we-can-has-recursion"},"Functions can call functions, including themselves")),Object(a.b)("p",null,"Suppose we want to add up numbers from an array to get the sum. We could use a loop, but that's so last millennium. Let's try another approach using functions ",Object(a.b)("strong",{parentName:"p"},"without loops"),". We'll see more of this in the next section, conveniently titled ",Object(a.b)(i.a,{to:"/iteration/","aria-label":"Iteration",mdxType:"Link"},Object(a.b)("em",null,"Loops are so last millennium!"))),Object(a.b)("p",null,"We need to consider several different possibilities. For example, what if the list we want to add up is empty? What should we return?"),Object(a.b)("p",null,"You might say an ",Object(a.b)("inlineCode",{parentName:"p"},"Error")," object, and in some instances that might be the best option. But in functional programming, we try to avoid using errors wherever possible. And error in functional programming should mean ",Object(a.b)("em",{parentName:"p"},"the damn thing is broke")," and there ain't no fixing it."),Object(a.b)("p",null,"So what is the sum of an empty list of numbers? Why not zero? In short:"),Object(a.b)(r.a,{code:"sum([]) === 0 // should return true",showLineNumbers:!1,mdxType:"Highlighter"}),Object(a.b)("p",null,"What about a list with only one number in it, such as ",Object(a.b)("inlineCode",{parentName:"p"},"[5]"),"? Well, that's just ",Object(a.b)("inlineCode",{parentName:"p"},"5"),", isn't it? And ",Object(a.b)("inlineCode",{parentName:"p"},"5")," is the same as ",Object(a.b)("inlineCode",{parentName:"p"},"5 + 0"),", which is the same as ",Object(a.b)("inlineCode",{parentName:"p"},"5 + sum([])"),"."),Object(a.b)("p",null,"(Because the same input to a function always yields the same result, we can substitute ",Object(a.b)("inlineCode",{parentName:"p"},"sum([])")," for ",Object(a.b)("inlineCode",{parentName:"p"},"0")," in that last example. If ",Object(a.b)("inlineCode",{parentName:"p"},"sum([])"),' could return different things at different times, then we could not make that substitution. This is the power of "pure" functions.)'),Object(a.b)("p",null,"So if we were to take the list, ",Object(a.b)("inlineCode",{parentName:"p"},"[5]")," and pop the head off it (",Object(a.b)("inlineCode",{parentName:"p"},"5"),") and add it to the sum of the remaining list (",Object(a.b)("inlineCode",{parentName:"p"},"[]"),"), then we'd get our new sum. But doesn't this work for a list of ",Object(a.b)("em",{parentName:"p"},"any")," length? Isn't the sum of ",Object(a.b)("inlineCode",{parentName:"p"},"[1, 2, 3]")," just ",Object(a.b)("inlineCode",{parentName:"p"},"1")," plus the sum of ",Object(a.b)("inlineCode",{parentName:"p"},"[2, 3]"),", which is just ",Object(a.b)("inlineCode",{parentName:"p"},"2")," plus the sum of ",Object(a.b)("inlineCode",{parentName:"p"},"[3]"),", which is just ",Object(a.b)("inlineCode",{parentName:"p"},"3")," plus the sum of ",Object(a.b)("inlineCode",{parentName:"p"},"[]"),", which is just ",Object(a.b)("inlineCode",{parentName:"p"},"0"),"?"),Object(a.b)(r.a,{code:"sum([1, 2, 3]) === 1 + 2 + 3 + 0 === 6",showLineNumbers:!1,mdxType:"Highlighter"}),Object(a.b)("p",null,"So our ",Object(a.b)("inlineCode",{parentName:"p"},"sum"),' function could work by taking the first number in our list (the "head") and adding it to ',Object(a.b)("em",{parentName:"p"},"the sum of the remaining items in the list"),' (the "tail"). And it can do this by calling itself over and over again with the ever-shrinking tail until it hits an empty list in which case it returns zero and the sum is complete:'),Object(a.b)(s.a,Object.assign({},w,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"We get into this more in the next section, but the ability of functions to call themselves means we never need to bother with loops again. And as you'll see, there are many common operations for which we might use this superpower, so naturally we've made built-in methods (and libraries of functions such as ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://ramdajs.com/docs/"}),"Ramda"),") to avoid having to write so many functions over and over again. Reusability, right? High five!"),Object(a.b)("p",null,Object(a.b)("h3",{id:"say-no-to-side-effects"},"Don't be reaching outside the function to mess with shit")),Object(a.b)("p",null,"This is a bad and sometimes hard-to-break habit that many OO programmers have. As we said above, functions take parameters and return a result, and that should be ",Object(a.b)("em",{parentName:"p"},"all")," they do. Functions should not be reaching outside the function to tweak any values or variables in a higher scope, such as the global scope."),Object(a.b)("p",null,"Neither should anything in the outer scope change the return from our function. If it did, then we could not guarantee that for the same arguments we'll always get the same result."),Object(a.b)("p",null,"The exception to this is when we are returning a function from a function, as discussed in ",Object(a.b)(i.a,{to:"#who-wants-curry",mdxType:"Link"},"Functions can be returned from other functions")," above. In that case, we are capturing the value of a variable in the outer function's scope and using it in the scope of the function returned."),Object(a.b)("p",null,'But note that unless the outer function (our "function factory") is ',Object(a.b)("em",{parentName:"p"},"itself")," reaching outside its scope, then as soon as it returns our new function with the captured variable, it goes out of scope. So, effectively, when we capture values in this manner we are not actually reaching outside the function."),Object(a.b)("p",null,'Of course, at some point we must reach outside. We need to have input and output from our program, unless we want to recreate the entire universe inside the program, which might take some time (and a hell of a lot of memory). So the big exception to this rule is input-output. In pure functional programming languages, the "impure" I/O functionality is isolated in its own modules to avoid impurifying the rest of the code.'),Object(a.b)("p",null,"In JavaScript, just make sure that if you're function is changing something outside the function, or if it is affected by the state of something outside the function (other than an argument passed in), that you ",Object(a.b)("em",{parentName:"p"},"know what you're doing and why"),'. Avoid it unless you absolutely have to do it, and then keep any "impure" functions isolated from the rest. Quarantine those babies.'),Object(a.b)("p",null,"Here are examples of things ",Object(a.b)("strong",{parentName:"p"},"you should never do"),". The squeamish among you may wish to cover your eyes lest this code haunt your nightmares. Don't say we didn't warn you."),Object(a.b)(s.a,Object.assign({},h,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"What's an example of when it's OK to use an impure function to affect something other than by the result? How about ",Object(a.b)("inlineCode",{parentName:"p"},"console.log"),"? It returns ",Object(a.b)("inlineCode",{parentName:"p"},"undefined")," no matter what the input, and it reaches out to the console and changes it, and that's outside our function, right? But this is input/output, which we already admitted is an exception. In general, ",Object(a.b)("em",{parentName:"p"},"no exceptions"),"."),Object(a.b)("p",null,Object(a.b)("h3",{id:"no-mutating-variables"},"Make copies when passing by reference")),Object(a.b)("p",null,"Often when programmers are just starting to work with functional JavaScript, they will mutate (change) a value from inside a function without realising it."),Object(a.b)("p",null,'A "feature" of JavaScript is that primitive values, such as numbers, strings, and booleans, are ',Object(a.b)("em",{parentName:"p"},"copied")," when they are passed as arguments to a function:"),Object(a.b)(s.a,Object.assign({},p,{mdxType:"CodeBlock"})),Object(a.b)("p",null,'Simple values are "passed by value", which means they are ',Object(a.b)("em",{parentName:"p"},"copied")," into the function scope. But more complex values, such as arrays and objects, are not copied. Instead, a reference to the original is passed."),Object(a.b)("p",null,"Now, if we mutate (change) that variable in the function scope, we are actually reaching outside the scope to change the original value. This is a big no-no:"),Object(a.b)(s.a,Object.assign({},u,{mdxType:"CodeBlock"})),Object(a.b)("p",null,"So how do we avoid this? We can use the spread operator, ",Object(a.b)("inlineCode",{parentName:"p"},"..."),", to make a copy of our referenced object and then update the copy. Easy peasy!"),Object(a.b)(s.a,Object.assign({},m,{mdxType:"CodeBlock"})),Object(a.b)("p",null,Object(a.b)("h3",{id:"closures-are-cool"},"Functions can remember things for you")),Object(a.b)("p",null,"We already discussed this above in ",Object(a.b)(i.a,{to:"#functions-as-results",mdxType:"Link"},"Functions can be returned from other functions"),", but it's worth revisiting."))}C.isMDXComponent=!0},186:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(13),r=n.n(i),s=n(59),c=n.n(s);n.d(t,"a",function(){return c.a});n(187),o.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},187:function(e,t,n){var a;e.exports=(a=n(189))&&a.default||a},188:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP"}}}}},189:function(e,t,n){"use strict";n.r(t);n(21),n(14),n(12),n(7),n(20);var a=n(0),o=n.n(a),i=n(13),r=n.n(i),s=n(86);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(s.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){c(e,t,n[t])})}return e}({location:t,pageResources:n},n.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},190:function(e,t,n){"use strict";var a=n(191),o=n(0),i=n.n(o),r=n(197),s=n.n(r);function c(e){var t=e.lang,n=e.title,o=a.data.site;return i.a.createElement(s.a,{htmlAttributes:{lang:t},title:n?n+" | "+o.siteMetadata.title:o.siteMetadata.title},i.a.createElement("script",{src:"https://embed.runkit.com","data-element-id":"runkit"}))}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},191:function(e){e.exports={data:{site:{siteMetadata:{title:"How to FP",description:"Functional JavaScript for the OO programmer.",author:"@chasm"}}}}},192:function(e,t,n){"use strict";var a=n(188),o=(n(196),n(0)),i=n.n(o),r=n(186),s=n(13),c=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0,display:"inline-block",flexGrow:1}},i.a.createElement(r.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("div",{style:{flexShrink:1}},i.a.createElement(r.a,{to:"/reusability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Reusability"),i.a.createElement(r.a,{to:"/immutability",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Variables"),i.a.createElement(r.a,{to:"/iteration",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Looping"),i.a.createElement(r.a,{to:"/composition",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Pipelines"),i.a.createElement(r.a,{to:"/patterns-antipatterns",style:{color:"white",textDecoration:"none",textTransform:"lowercase",display:"inline-block",padding:"0 0.5rem"}},"Patterns"))))};c.propTypes={siteTitle:n.n(s).a.string},c.defaultProps={siteTitle:""};var l=c;t.a=function(e){var t=e.children,n=a.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:n.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))}},193:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(186);function r(e){var t=e.title;return t?o.a.createElement("p",null,o.a.createElement(i.a,{to:"/"},"Home")," > ",t):null}var s=n(192),c=n(190);t.a=function(e){var t=e.children,n=e.pageContext.frontmatter.title;return o.a.createElement(s.a,null,o.a.createElement(c.a,{title:n}),o.a.createElement(r,{title:n}),o.a.createElement("article",null,t))}},194:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),o=n.n(a),i=n(405),r=n(404);function s(e){var t=e.code,n=void 0===t?"":t,a=e.showLineNumbers,s=void 0===a||a;return o.a.createElement(i.a,{language:"javascript",style:r.a,showLineNumbers:s},n)}},195:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),o=n.n(a),i=n(199),r=n.n(i),s=n(194);function c(e){var t=e.code,n=void 0===t?"":t,i=e.imports,c=void 0===i?"":i,l=e.requires,u=void 0===l?"":l,p=Object(a.useState)(!1),m=p[0],d=p[1];return Object(a.useEffect)(function(){var e=setInterval(function(){d(Boolean(window)&&Boolean(window.RunKit))},1e3);return m&&clearInterval(e),function(){return clearInterval(e)}},[]),m?o.a.createElement("div",{style:{marginBottom:"1rem"}},o.a.createElement(r.a,{source:""+u+n,nodeVersion:"12"})):o.a.createElement(s.a,{code:""+c+n})}}}]);
//# sourceMappingURL=component---src-pages-reusability-index-mdx-c18d4c150ce9c36f4c40.js.map