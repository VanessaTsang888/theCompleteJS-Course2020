'use strict';

/******************************************************************************************************************************************************* 

87. SECTION INTRO: theory

How everything I learnt so far works under the hood.
To write better code and to understand other developers code.

89. An High-Level Overview of JS:

This is just the surface:
JS is a High-level Object-oriented, multi-paradigm programming language.

Another description of JS:
A high-level, prototype-based object oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, gardaged-colled
programming language with first-class functions and a non-blocking event loop concurrency model.

High-level:
Computer program needs resources.
With C-coding language you have to manually manage these resources, i.e. asking computer for memory to create a new variable. On the other side,
high-level languages such as JavaScript and Python, where we do not have to manage resources at all as they have 'abstractions' that take all of that
work away from us. This make the language easier to learn, easier to use but will never be as fast or as optimised as low-level languages such as C.

Garbage-collected:
A tool Garbage-collection takes away the memory management from us, an algorithm inside of
the JS Engine (cleans our memory so we don't have to manually do it).

Interpreted or just-in-time compiled:
The computer's processor only understands zeros and ones which is machine code. Every programmes needs to be in machine code. Since that's not practical
to write we write human-readable JavaScript code, which needs to be translated into machine code. This step is either compiling or interpreting. This
happens inside the JS Engine. No one write machine code manually. 


Multi-paradigm:
Paradigm is an approach and overall mindset of structuring our code, which will direct your coding style and technique. 

Three Popular Paradigm are:
Procedural programming;
Object-oriented Programming (OOP);
Functional programming (FP).

Procedural programming is what we've been doing so far. Organising the code in a very linear way, with some functions in between.
We can classify paradigns as imperative or imerative. JS is flexible and versatile as it dose all 3 popular paradigm. In this course we'll
use all of them.

Prototype-based object oriented:
In JS everything is an Object except for primitive values such as numbers, strings etc. Arrays are objects.
We can create an array then push it due to prototypal inheritance. We create an array from a blue print which is called a prototype which contains all
the array methods. The array inherits all the methods from the blue print so we can use them on the arrays. 

first-class functions:
Functions are treated just as regular variables. We can pass functions into other functions and can return functions from functions - allow
us for functional programming. I've been using first-class functions without knowing they are first-calss functions. Here we pasted the closeModal
function into the addEventListener function as argument just as it was a regular variable:

    overlay.addEventListener("click", closeModal);

 Dynamic:
 JS is a dynamic language meaning its dynamically-typed.
 No data types definitions. Types becomes known at runtime.
 Data type of variable is automatically changed.
 We don't assign data types to variables. Instead they only become known when JS engine executes our code. The types of variables can easily be changed as
 we reassign variables. If I want to limited bugs, I can use JS with TypeScript.

 Single-threaded:
 Concurrency model: how the JS engine handles multiple tasks happening at the same time. Why do we need that? As JS runs in one single-thread, so it can
 only do one thing at a time. Therefore, we need a way to handle multiple things happening at the same time. A thread is a set of instructions that is executed
 in the computer's CPU. The thread is where our code is executed in a machine's processor.
 What about a long-running task? It would block the single thread. We want non-bloking behavior so we use an event loop: takes long running tasks, executes
 them in the background and puts them back in the main thread once they are finished.

****************************************************************************************************************************************************** */


/******************************************************************************************************************************************************* 

90. The JS Engine and Runtime:

JS Engine:
Program that executes JS code. Most well known egine is Google's V-Eight, which powers Chrome and Node.js that's JS runtime - we use to build server-side
apps with JS, so outside of any browser. The other browsers have their own JS Engines.

The Engines Components and How It Works?
JS Engine.

Call Stack is where our code is executed, using execution context.
The Heap is an unstructured memory pool that stores all the objects that our app needs - Object in memory.

How can our code ecompliled to machine code to machine code so that it actually can be executed afterwards?
The difference between compilation and interpretation.
Computer's processor only understands 0's and 1's. 

Compilation: our entire source code is converted into machine code at once, and written to a binary file that can be executed by a computer.

Source Code: Step 1. Compliation > Portable File - machine code: > Step 2. Execution > Program Running.


Interpretation: interpreter runs through the source code and executes it line by line.
The source code is converted before it's executed.
JS used to be an interpreted language but its much slower than compiled languages. Today, low performance is no longer acceptable. 

Modern JS uses a mix between compilation and interpretation called Just-In-Time (JIT) Compilation:
Entire source code is converted into machine code at once, then executed immediately. Then executes it straight away. Still have 2 steps of regular ahead of time
compilation but no portable file to execute. The execution happens immediately after a comilation.

Parsing: a process of JS reading our source code.
During the process, the source code is parsed into a data structure called the abstract syntax tree or AST.

Diagram:
Parsing > Copilation (Just-In_Time compilation) > Execution > Optimisation.

Execution happens in the JS engines call stack.
This process is what makes mdern engines like V-eight so fast. All this parsing, compliation and optimisation happens in some special threads inside the engine
that we cannot access from our code.

JS RUNTIME:
In the browser - Chrome, Safari, ????, Firefox.

A container inclduing all the things that we need to use JS - in this case in the browser.
The heart of any JS Runtime is JS Engine - Heap and Call Stack. Without the engine there is no runtime and the other way so they come as a pair.
In order for it to work, we also need access to the web APIs = DOM, Timers, Fetch API, console.log etc.
Web APIs are functionalities provided to the engine but not part of the JS language. JS gets access to these APIs through the global window object.
JS Runtime also includes CALLBACK QUEUE:
click | timer | data ...
i.e. we attached event handler functions to DOM elements like a button to react to certain events. These event handler functions are also called Callback Functions.
The CB function is passed to the Stack so that it can be exectuted. This happens due to the event loop.

JS can exist outside of browsers, i.e. in Node.js This is what Node.js JS Runtime looks like: the above:
The JS Engine, the Web APIs, the Callback Queue going into the Call Stack using the event loop. Instead of the Web APIs, we have multiple C++ bindings & thread Pool.
Therefore, different JS Runtime do exist.

****************************************************************************************************************************************************** */


/******************************************************************************************************************************************************* 

91. Execution Contexts and The Call Stack:

Execution Contexts:

Human-readable Code: Function body only executed when called! > Compilation > Creation of Global Exectution Context (for top-level code, NOT inside a function)
| Then computer CPU processing the machine code that it received | Then functions starts to execute as well > Execution Context: environment in which a piece of
JS is executed. Stores all the necessary info for some code to be executed. Similar to a pizza (JS code) in side a box (execution context) with cutlary, receipt
which is needed to execute our source code.

In one JS project, only one global execution context, its the default and created for code that is not inside any function (top-level).

One execution context per function:
for each function call a new execution context is created. Same for methods since they're functions attached to objects.

The execution contexts make up the Call Stack.
Its the event loop that provides these Callback Functions.

Execution Context In Detail:
What's Inside Exectuion Context?

Variable Environment:
1. let, const and var declarations.
2. Functions.
3. Arguments Object.

Scope Chain:
Consists of references to variables that are located outside of the current function. It's stored in each execution context. 

'this' keyword:
Each context also gets a
special variable called the 'this' keyword.

The content of the execution context, so the variable environment, scope chain, and 'this' keyword is generated in a so-called creation phase which happens
right before execution. Execution context belonging to Arrow Functions do not get their own arguments obk=ject or 'this' keyword. Instead they can use the arguments
object and 'this' keyword from their closest regular function parent. 

Simulate The Creation Phase for a code example.

The Call Stack:
A place where execution contexts get stacked on top of each other, to keep track of where we are in the programs execution.

'Places' where execution contexts get stacked on top of each other, to keep track of where we are in the execution.

return c:
The function exectution context, will be popped off the stack and disappear from the computer's memory.
Then the previous exectution context will become the active exectution context again.

Only when the program is finished is when the global execution context is also popped off the stack. 

Concluseion:

Our JS code runs inside of execution contexts that are in the stack.

****************************************************************************************************************************************************** */


/******************************************************************************************************************************************************* 

92. SCOPE AND THE SCOPE CHAIN:

Each Execution Context has a variable environment, Scope chain, 'this' keyword.

What Scoping means? Scope Concepts:

Scoping controls how our program's variables are organised and accesed by the JS Engine. "Where do variables live? or "Where can we access a certain variable 
and where not?"

Lexical Scoping: scoping is controlled by placement of functions and blocks in the programs code;
Child functions have access to its parent function.

Scope: Space or environment in which a certain variable is declared (variable environment in case of functions). There is global scope, function scope and block scope;

Scope of a variable: is the entire region of our code where a certain variable can be accessed.

Global Scope:

const me = 'Jonas';
const job = 'teacher';
const year = 1989;

1. outside of any function or block.
2. Variables declared in glabal scope are accessible everywhere.

Function Scope:

1. Each function creates a scope called Function Scope and the variables declared inside that function scope are only accessible inside that function, NOT outside.
2. Also called local scope.
Local variables live in the function. Al types of functions create their own scope.

Block Scope (ES6):

Blocks also create scopes.
Everything between braces are blocks or blocks of code i.e. blocks within an if-statement or for-loop:

if (year >= 1981 && year <= 1996) {
    const millenial = true;
    const food = 'Avocado toast';
}

console.log(millenial);

1. Variables declared inside of a blcok are only accessible only inside block (block scoped) NOT outside of the block.
2. However, this only applies to declared with let or const variables. Only let and const are restricted to the block in which they were created.
That's why we say let and const variables are blocked scoped. var variables are function scoped. ES5 and before we only had Global Scope and Function Scope.
3. In ES6, all functions are now also block scoped, at least in 'strict mode'. Functions that are declared inside a block are only accessible inside that block.

The Scope Chain:
Look at code and build the scope chain. Starting with the Global Scope, the variable declaration:
myName = 'Jonas';

First Scope is: first()
has the age variable.
Second Scope (a function inside a function) has the job variable: job = 'teacher';

How will the JS Engine know the values of inside the second scope when they are declared in the first scope? Every scope always has access to all the variables
from all its outter or parents scopes (function inside a function). 

Variable Look-up:
Scope has access to variables from all outer scopes. The second() scope will look-up in scope chain for the variable in the first() scope and if can't find it
there, then will look-up in the Global scope. If it can't find the variable then it will throw an error. When it has found the variable, then it will use it.
This do not work the other way round. A certain scope will never have access to the variables of an inner scope. i.e. The first() scope will never get access to
the job variable that is stored in the second() scope. So one scope can only look up in the scope chain, but it can not look down. So only parent scope can be
used but no child scopes.

Both the if block scope and the second() scope are child (or sibling scopes) scopes of the first() scope so the if block scope can't look down in the second() scope
due to the rules of Lexical Scoping - they cannot have access to each others variables as one is not written inside of the other one.

Scope Chain Vs. Call Stack:

What is the difference? 
Scope Chain: order in which functions are written in the code. Has nothing to do with the order in which functions were called.
Call Stack - order in which funtions were called.

Variable Environment (VE).
c and b can NOT be found in third() scope.
The order the function is called do not affect the scope chain. 

SUMMARY:
1. Scoping is all about: scoping asks the question Where do variales live? or Where can we access a caertain variable, and where not?
2. Three types of scopes: the global scope, scopes defined by functions, and scopes defined by blocks.
3. Only let and const variables are block-scoped. Variables declared with car edn up in the closest function scope;
4. Lexical Scoping: the rules of where we can access variables are based on exactly where in the code functions and blocks are written;
5. The Scope Chain: every scope always has access to all the variables from all its outer scopes.
6. Variable Lookup: When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for.
7. The scope chain is a one-way street: a scope will never have access to the variables of an inner scope. Only of outter scopes.
8. The scope chain has nothing to do with the order in which the functions were called. It does not affect the scope chain at all.

****************************************************************************************************************************************************** */

/******************************************************************************************************************************************************* 

93. Scoping in Practice:

****************************************************************************************************************************************************** */

// CalcAge functiion declaration that will receive a birthYear. It will calculate an age.
// The current year minus the birth year.
// The calcAge is defined in the Global Scope as its in the top level code.
// This function creates its own scoope which will be equivalent to the variable environment of its execution context.
// The firstName variable NOT in the calcAge function, but it's a global varible that I've defined outside of the CalcAge function. Therefore, through the
// scope chain it will be made available also inside the calcAge function.

/*
function CalcAge(birthYear) {
    const age = 2037 - birthYear;
    // console.log(firstName); // Jonas // when this was executed, JS did not find this variable in this scope so it did a variable lookup in the scope chain.
    
    // Will create a new scope:
    function printAge() {
        const output = `${firstName}, born in ${birthYear}`;
        console.log(output);

        // Check if the person based on the birthYear is a millennial - if you were born between 1981 - 1996.
        // birthYear must be at least 1981 and below 1996. This is a Block Scope. The lookup for the firstName is evern longer.
        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating New variable with same name oas outer scope's variable:
            const firstName = 'Steven'; // this would work as this variable is in same scope. So JS will use that variable and not perform variable lookup. Variable shadowing?
            
            // Reassigning outer scope's variable:
            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str); // Oh, and you're a millenial, Jonas

            // function that will add two values:
            function add (a, b) {
                return a + b;
            }

        }
        // console.log(str); // This will throw an error as const and let variables block scoped so avaiable only inside the block in which they were created.
        console.log(millenial); // JS can acutally find the millenial variable since it was declared with var keyword which are function scoped. They simply ignor the Block as they not block scoped.
        // the scope of the add function is defined within the if-statement block, so only there we can use the add function which means functions are blocked scoped in strict mode.
        // add(2, 3); // add is not deined
    }
    printAge(); // You are 46, born in 1991.
    return age;
}
*/

// A Global variable:
const firstName = 'Jonas';
CalcAge(1991);

// Even though the variable firstName was defined after the calcAge function which is fine as the code in the function is only executed one its called
// which happens after the declaration of the firstName variable.
// The engine as its executing the printAge function is trying to find the age variable in the current scope but can't find it there so it goes to the
// parent scope where it found it within the calcAge function. Same for the birthYear variable as for scoping the parameter of a function works just
// like normal variables.

// console.log(age); // age variable is not accessible outside of the calcAge function
// printAge(); // Same for functions.

// Create a Block scope within the printAge function. See code above.
// Block scopes started in ES6.
// firstName are different variables and defined in different scopes? We can have repeated variable names same as same parameter names.


/******************************************************************************************************************************************************* 


94. Variables Environment: Hoisting and The TDZ:

Execution ceontext always contains 3 parts: a variable environment, the scope chain in the current context, and the 'this' keyword.

The Variable Environment - how variables are acutally created in JS.
In JS we have a mechanism called Hoisting:
1. Makes some types of variables accessible /usable in the code befoe they are actually declared, "Variables lifted to the top of their scope".

Behind The Scenes: how oisting really works:
Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environlment object.

Hoisting don't work for all variable types due to the way hosting works for:

                                                HOISTED?          INITIAL VALUE:                       SCOPE:        What This Means?

1. Function Declarations:                        YES             Set to the Actual function            Block          We can use function declarations before they are actually declared in the code as they are stored in the variable environment object even before the code starts executing. Function declarations work this way due to Hoisting.                        

2. variables defined with var:                   YES              undefined (bugs, dont use car)       Function

3. Variables defined with let or const:          NO                Set to <uninitialised>, TDZ          Blcok         No value to work with. These variables are placed in a Temporal Dead Zone (TDZ).

4. Function expressions & arrow functions:      Depends on if they were created using var, const or let. 

Temporal Dead Zone, Let and Const:

Example: TDZ for the job variable within the if-statement:

if (myName === 'Jonas') {
    console.log(`Jonas is a ${job}'); 
    const age = 2037 - 1989;
    console.log(age); // ReferenceError: Cannot access 'job' before initialization.
    const job = 'teacher';
    console.log(x);
}

job variable: It's the region of the scope in which the variable is defined, but can't be used in anyway.
Each const and let variables get their own TDZ that starts at the begining of the scope untik the line where it is defined. The variable is only safe to use after
the TDZ.

Why TDZ?
Introduced in ES6. The behavior makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided as using
a variable that is set to undefined can cause serious bugs.
const should never be reassigned and only assigned when execution actually reaches the declaration. That makes it impossible to use it before.

If hoisting creates so many problems why it exist in the first place?
So we can use function declarations before we use them - this is essential for some programming techneques such as mutual recursion, and make code a lot more
readable. We use let and const to work around this problem.

****************************************************************************************************************************************************** */


/******************************************************************************************************************************************************* 

95. Hoisting and TDZ in Practice:

This is not important for me to learn ReactJS. Therefore, I'm moving leaving this out.

****************************************************************************************************************************************************** */

/******************************************************************************************************************************************************* 

96. The 'this' keyword:

This is not important for me to learn ReactJS. Therefore, I'm only going to watch this video without taking any notes.

****************************************************************************************************************************************************** */

/******************************************************************************************************************************************************* 

97. The 'this' keyword in Practice:

This is not important for me to learn ReactJS. Therefore, I'm only going to watch this video without taking any notes.

****************************************************************************************************************************************************** */


/*******************************************************************************************************************************************************
 * 
 * 98. Regular Functions vs. Arrow Functions
 *
 * The 'this' keyword related to regular functions and Arrow Functions:
 * How each of the different functions work in regards to the 'this' keyword, so I can use them according to my specific needs.
 *
 * The argument keyword only exist in regular functions: function declaration and function expression but not arrow functions.
 * There is a more modern way to deal with parameters.
 * 
 * ****************************************************************************************************************************************************** */
 
// Variables created with var, creates properties on the global object. Don't use var to declare variables.
var firstName = 'Matila';

// To this jonas object, add a second method (a simple greet method) but this time use an Arrow Function:
const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        // console.log(this);
        console.log(2037 - this.year);
        
// Solution 1:        
        // extra variable that we normall call self and set to 'this'. Self is defined as 'this':
        // ES6 solution is to use an arrow funtion.
        // const self = this; // true

        // // return ?? if a person is a Millennial.
        // const isMillenial = function () {
        //     console.log(self); // Undefined
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

// solution 2
// This will work as we can use 'this' keyword in this type of function.
// Using the parent scope  the jonas object so the this keyword is true.
        const isMillenial = function () {
            console.log(this); // true
            console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMillenial(); // a regular function call that happens inside a method
    },
// a simple greet method:
// Arrow Functions do not get its own 'this' keyword and will use the 'this' keyword from its suroundings - its parents scope of this greet method is the
// Use case of the arrow function:
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`) // window object, Hey Matila due to the var used on that variable.
    },
};

// global scope that is the window object.
// When we try to access a property that doesn't exist on a certain object, we do not get an error, but undefined.
// On the Window Object there isn't the firstName, so we get the: Undefined logout.
jonas.greet(); // Hey undefined
jonas.calcAge();
console.log(this.firstName);

// For Best Practice, never use an arrow function as a method.
// Hey Undefined is still a bug and can be avoided by just using a regular function.
// A clear rule: a regular function call has the 'this' keyword set to undefined. There is 2 solutions to this problem:
// first use an extra variable that we normall call self.
// second solution: ES6 solution is to use an arrow funtion. 

// Functions also get access to an arguments keyword, not just to the 'this' keyword - onlyi available in regular functions:
// Arguments keyword

const addExpre = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpre(2, 5); // an array with 2 and 5

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(1, 5, 8); // arguments is not defined


/*******************************************************************************************************************************************************

99. Primatives vs. Objects:

Primatives: ie. numbers, strings and Booleans.

 ********************************************************************************************************************************************************/

// This works as expected.
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

// but now a different scenario which has an object.
const me = {
    name: 'Jonas',
    age: 30,
};
// Copy this object as i have a friend also called Jonas as well.
const friend = me;
// The is the same but the ages are different.
friend.age = 27;
console.log('Friend:', friend); // 27
console.log('Me:', me); // 27

// Why is both age 27?

/* 

PRIMITIVES, OBJECTS AND THE JS ENGINE:

PRIMITIVES Number. String, Boolean, Undefined, Null, Symbol, BigInt. Everything else are Objects.
OBJECTS: those are NOT primitives - objects created with the:
Object Literal, Arrays, Functions, many more...

When talking about memory and memory management, it's usual to call primitives, primitive types, and Objects reference types as of the different way due
to the different ways they are stored in memory.

THE JS ENGINE: has 2 components - The Call Stack where functions are executed and Heap where objects are stored in memory. All our objects or reference types
will get stored in the memory Heap.
Primitive types are stored in the Call Stack as that's where execution context run.

HOw do all this work?

Reference to memory address in Heap.
Conclusion:
Call variables declared with const are immutable but only true for primitive values not for reference values.
Both me and friend points to same object in the memory heap. So when something chances, it will be reflected in both friend and me. Pointing to the exact same
value - the memory address i.e. D30F. This is how reference values work in JS.

*/


/*******************************************************************************************************************************************************

100. Primitives vs. Objects in Practice:

I watched this video without taking notes as I feel I don't need to take notes for this lecture.

 ********************************************************************************************************************************************************/


