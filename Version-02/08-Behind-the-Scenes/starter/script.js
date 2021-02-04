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



****************************************************************************************************************************************************** */
















