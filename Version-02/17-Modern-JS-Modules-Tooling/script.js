import cloneDeep from './node_modules/lodash-es/cloneDeep.js';


// This not including in start file but I've included for Secure Coding purposes and hope it will not cause me any issues?
// 'use strict';

/*********************************************************************************************************************************************************** 

264. Section Intro:

Building JS apps in the real world. Not about the language itself, but more about the development process, the modern build tools, the whole modern ecosystem
that has been created around JS 

***********************************************************************************************************************************************************/

/*********************************************************************************************************************************************************** 

266. An Overview of Modern JS Development:

How we write JS today. We divde our projects into multiple moduals and these modules can share data between them making our code more organised and maintainable.
We can include 3rd party modules into our own code. There are may open source modules which are also called packages that developers share on the NPM repo, i.e.
the popular frameworks such as React, jQuery, Leaflet etc are available through npm - Node Package Manager - the go to repro for all kinds of packages in modern
JS Development. In the commandline install npm. So nmp is both the repro in which packages live and a program that we use on our computers to install and manage
these packages.

Lets say we done writing our code, we divided our modules and we included 3rd party modules as well. Then our project needs to go through a Build Process where
one big final JS bundle is built. That's the final file, which will deploy to our web server for production (app being used by real users in the real world).
Its the JS files that will be sent to browsers in production. The build process can be really complex but we'll keep it simple and only include 2 steps.

Two Steps of The Build Process:
S1. Bundle all our modules together into one big file: complex process which can eliminate unused code and compress our code as well. This step is vey important
for 2 big reasons. First older browsers don't support modules at all, so code that's in a module could not be executed by any older browser. Better performance
to send less files to the browsers, its beneficial that the bundling step compresses our code.

S2. We do something called Transpiling and Polyfilling:
To convert all modern JS syntax and features back to old ES5 syntax, so even older broswers can understand our code without breaking. This is normally done using
a tool called Babel. 

After The Two Steps, we end up with that final JS bundle, ready to be deployed on a server for production. We don't perform these steps ourselves. We use a
special tool to to implement this build process for us and the most popular is Webpack and Parcel. These are called JS bundlers as they take our raw code and
transform into a JS bundle. Webpack is the most popular one but can be difficult to set up - a lot of things to configure mannully in order to make it work
properly. parcel is a Zero Config bundler which works out of the box. These development tools also available on npm.

/*********************************************************************************************************************************************************** 


// This not including in start file but I've included for Secure Coding purposes and hope it will not cause me any issues?
'use strict';

/*********************************************************************************************************************************************************** 

264. Section Intro:

Building JS apps in the real world. Not about the language itself, but more about the development process, the modern build tools, the whole modern ecosystem
that has been created around JS 

***********************************************************************************************************************************************************/

/*********************************************************************************************************************************************************** 

266. An Overview of Modern JS Development:

How we write JS today. We divde our projects into multiple moduals and these modules can share data between them making our code more organised and maintainable.
We can include 3rd party modules into our own code. There are may open source modules which are also called packages that developers share on the NPM repo, i.e.
the popular frameworks such as React, jQuery, Leaflet etc are available through npm - Node Package Manager - the go to repro for all kinds of packages in modern
JS Development. In the commandline install npm. So nmp is both the repro in which packages live and a program that we use on our computers to install and manage
these packages.

Lets say we done writing our code, we divided our modules and we included 3rd party modules as well. Then our project needs to go through a Build Process where
one big final JS bundle is built. That's the final file, which will deploy to our web server for production (app being used by real users in the real world).
Its the JS files that will be sent to browsers in production. The build process can be really complex but we'll keep it simple and only include 2 steps.

Two Steps of The Build Process:
S1. Bundle all our modules together into one big file: complex process which can eliminate unused code and compress our code as well. This step is vey important
for 2 big reasons. First older browsers don't support modules at all, so code that's in a module could not be executed by any older browser. Better performance
to send less files to the browsers, its beneficial that the bundling step compresses our code.

S2. We do something called Transpiling and Polyfilling:
To convert all modern JS syntax and features back to old ES5 syntax, so even older broswers can understand our code without breaking. This is normally done using
a tool called Babel. 

After The Two Steps, we end up with that final JS bundle, ready to be deployed on a server for production. We don't perform these steps ourselves. We use a
special tool to to implement this build process for us and the most popular is Webpack and Parcel. These are called JS bundlers as they take our raw code and
transform into a JS bundle. Webpack is the most popular one but can be difficult to set up - a lot of things to configure mannully in order to make it work
properly. parcel is a Zero Config bundler which works out of the box. These development tools also available on npm.

***********************************************************************************************************************************************************/


/*********************************************************************************************************************************************************** 

267. An Overview of Modern JS Development:

Why Modules?

This is how software design work in general: a camera with lots of different components example:
X5 pints.

How Modules work in JS:
Native E6 JS Modules System:

Modules stored in files, exactly one module per file.

ES6 Modules | Script:

They are both files but modern ES6 Modules and Script. 

In ES6, all top level variables are scoped to the module. So variables are private to the variable by default. The only way an outside module can access a value that's inside the module is exporting that value.

In Scripts, all top level variables are always global. This can lead to problems like global Global NameSpace Pollution, where multiple scripts try to declare variables with same name then these variables collide. So Private variables are the solution to this problem and that's why ES6 modules implemented it like this.

ES6 modules always executed in strict mode. Scripts are executed in sloppy mode by default. So with modules, no need to manually declare strict mode. Also, the 'this' keyword is always undefined at the top level whilst in Scripts it points at the window object.

What is special about modules is that we can export and import values between them using this ES6 import and Export syntax. In regular Scripts, Exporting and Importing values is impossible.
Import and Export can only happen at the top-level (outside of any fn or any if-block).

Importing values is always the first thing that happens in a module.

In order to link a module to a HTML file, we need the type attribute set to module, instead of a plain script tag: <script type="module">

Downloading modules files happens auto in an async way. This is true for a module loaded from HTML as well as for modules that are importing one module into another using the import syntax. Regular scripts on the other hand are downloaded by default in a blocking sync way, unless we use the async or differ attributes on the script tag.

Importing Modules Before Execution:
	1. Modules are imported synchronously
	2. Possible thanks to top-level ("static") imports, which make imports known before execution. So the code is still being read before being executed.
	
This makes bundling and dead code elimination possible. So knowing all dependencies between modules before execution bundlers like webpack and Parcel can then join multiple modules together and eliminate that code.

Downloading happens in a Async way. Only importing operation itself happens synchronously.

**********************************************************************************************************************************************************/


/*********************************************************************************************************************************************************** 


272. Intro to NPM:

To manage dependencies in a better and modern way.

npn -v
I have: 6.14.8

npm init
Keep press Enter key, type yes to the question. Open the package.json file and take a look at the code inside that file.

Install the leaflet file but using npm:
doc file: lhttps://leafletjs.com/reference-1.7.1.html
npm install leaflet or npm i leaflet
Will stat downloading
Now the dependencies for leaflet will appear in the package.json file
Folder: node_modules/leaflet > dist > leaflet-src.js

To use this library its easier with a module bundler. For now we not using leaflet. For now we use lodash a collection of useful functions etc: https://loadash.com/
npm i lodash -es
Now will appear on the left side bar. We have a file for each of the methods that are available in lodash
Cloning objects: cloneDeep.js

I got up to 12:24 into the lecture and done everythings as per the instructor but I get an error in the console and unable to resolve the problem and I've
tried everything I can to resolve this but no luck and I need to move onto the next lecture highlighted in dark green as my deadline to complete this course
is tomorrow morning.


**********************************************************************************************************************************************************/



/*********************************************************************************************************************************************************** 


273. Bunding with Parcel and NPM Scripts:

Use npm to install Parcel. 





**********************************************************************************************************************************************************/








