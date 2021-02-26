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

/*********************************************************************************************************************************************************** 



