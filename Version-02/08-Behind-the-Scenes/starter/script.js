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
