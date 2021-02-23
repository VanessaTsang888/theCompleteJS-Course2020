'use strict';


///////////////////////////////////////

/*************************************************************************************************************************************************** 

241. Section Intro

Important JS features:

Asynchronous JS:
The goals of this is to deal with long running tasks that run in the background.
The most common use case for Asynchronous JS is to fetch from remote servers, in AJAX calls. 

Will learn about Promises, the fetch function, async await, error handling. 

*****************************************************************************************************************************************************/


/*************************************************************************************************************************************************** 

243. Asynchronous JS, AJAX, And APIs:

What is synchronous code (the opposite to asynchronous)?

Most code id synchronous code.

Synchronous: code executed line by line in the exact order of execution that I define in my code, as in this example: Synchronous vs. Asynchronous code.
Each line of code waits for previous line to finish;
The execution of thread is part of the execution context which do actually execute the code in the computer's processor. So each line of code always waits for the previous line to finish execution.

Long-running operations block code execution;
This can cause a problem when a line of code take long time to run., i.e. an alert statement that creates an alert window. This will block the code execution. So nothing will happen on the page until the user clicks the 'ok' button. Only then the code can continue to executing. So the alert statement is example of a long running operation which blocks execution of the code. Once the 'ok' button is clicked, the next line can run. 

Most of the time Synchronous is fine and makes sense, but imagine that execution would have to wait for 5 second timer to finish that would be terrible as in the meanwhile nothing on the page would work during these 5 seconds, that is when Asynchronous code come into play.

Asynchronous code is executed after a task that runs in the "background" finishes;
Asynchronous code is non-blcoking;
Execution doesn't wait for an asynchronous task to finish its works;

Execution doesn't wait for an asynchronous task to finish its work:
Alert is blocking Synchronous code, but with the timer the Callback is Asynchronous - non blocking as in meantime the rest of code can keep running normally.
The Callback will be exectued as well and runs after all the other code eventhough in the code it doesn't appear at the end. Therefore, an action was deferred
into the future inoder to make the code non-blocking.

Asynchronous Programming:
Coordinating behaviour of a program over a period of time.
NOT Occuring At The Same time.

As below, We need a Callback fn to impliement the Asynchronous behaviour. However, Callback fn alone don't auto make code Asynchronous!

Asynchronous Code/behaviour: running a timer, loading an image, Geolocation API or AJAX calls.

AJAX (Asynchronous JS And XML):
Allows us to communictate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically. So without
reloading our page mannually. So that we can use that data in our app dynamically.

Say we have our JS app running in the browser (client), and we want the app to get some data from a web server. With AJAX we can do an HTTP request to the server
which has this data and the server will the set back a response the requested data. This back and forth between client and server all happens Asynchronously
in the background. There are different types of requests like GET requests to receive data or POST requests to send data to a server. When we ask server to send
us some data, this server usually contains a web API. This API is the one that has the data that we're asking for.

API (Application Programming Interface):
DOM API, Geolocation API, Own Class API, "Online" APIs, 

Piece of software that can be used by another piece of software in order to allow apps to talk to each other and exchange info;
Types of APIs in web development:
Self contained piece of software that allow other piece of software to interact with them.
we can impliment a small and simple API in a class where we make some methods available as a public interface. Objects made from a class can be seen as self-contained
encapsulated pieces of software that other pieces of software can interact with.
"Online" APIs: API when we use AJAX: An app running on a web server which receives requests for data then retrieves this data from some database, then sends it back
to the client as response;

We can build our own APIs but that requires backend development - development with servers and databases i.e. node.js  We are interested with 3rd party APIs.
There are APIs for everything:
Weather data, Data about countries, Flighs data, Currency conversion data, APIs for sending email or SMS, Google Maps etc

We don't use XML anymore but we still use the word AJAX. Instead most API today we use the JSON data format - JS Object converted into a string. So easy to
use in JS once the data arrives.

*****************************************************************************************************************************************************/

/*
// Example of Synchronous code with alert window/prompt = long running operation which blocks execution of the code:
const p = document.querySelector(' .p');
p.textContent = 'My name is Vanessa';
// alert statement
alert('Text set!'); // next line of code will only run when user has clicked the 'ok' button on the alert window
p.getElementsByClassName.color = 'red';

// 5 second timer - nothing on the page would work during these 5 seconds - need Asynchronous code instead of Synchronous code:
const p = document.querySelector(' .p');
// Will start a timer in an asynchronous way meaning timer will run in the background without preventing the main code from executing.
// We also register a callback fn (Asynchronous JS) which will be executed only after the timer has finished running. Its Asynchronous as it only going to be
// exectued after a task that is running in the background finishes execution, the timer.
setTimeout(function () {
    p.textContent = 'My name is Vanessa';
}, 5000);
p.getElementsByClassName.color = 'red';

// Another example, loading an image. First 2 lines run in a Synchronous way. Then the img.src is set in an Asynchronous way. Once the image finished loading
// a load event will auto be emitted by JS. Since we listening for that event, our callback fn is finally executed. We deferred an action into the future making
// the code asynchronous and non-blocking.
// EventListener alone don't make code Asynchronous - its not doing any work in the background.

const img = document.querySelector(' .dog');
img.scr = 'dog.jpg'; // img is loading Asynchronously in the background
img.addEventListener('load', function() { // we are not listening for the load event to happen
    img.classList.add('fadeIn');
});
p.style.width = '300px';

*/

/*************************************************************************************************************************************************** 

244. Our First AJAX Call: XML Http Request:

Create 2 nice UI Components. 2 cards that Contains data about certain countries which will come from 3rd party Online API.
1. A card for Portugal
2. A card for USA
Would work for any country in the world.

*****************************************************************************************************************************************************/

// This will take a string as an input of a country
const getCountryData = function(country) {

    const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


// Doing AJAX calls using the XML HTTP request - this exists but its the old school way, many steps.
// XML HTTP request function:
// Call the XMLHttpRequest function and store in new variable named: request.
// We need the URL to which we'll make the AJAX call. The type of request 'GET'. We needa string containing the URL to which the AJAX call should be made.
// The API we going to use is: GitHub repro: public-apis/public-apis > choose the REST Countries
// Choose an API with CORS otherwise we can't access it from our code. Scroll down the page until we find the API Endpoint which is a URL. 
// Search API by country name: https://restcountries.eu/
// 

const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// Send off request then fetch data in the background.
// Send off AJAX call is being done in the background while the rest of the code keeps running - asynchronous non-blocking behavior.
request.send();

// Register a Callback on the request object for the load evernt. Wait for the load event. As soon as the data arrives the Callback fn will be called.
// The 'this' keyword is the request. Then the response is in the property response text which will only be set once the data has arrived.
request.addEventListener('load', function() {
    // console.log(this.responseText); // JSON data
    // convert the JSON data - big string of text
    // De-structure the array that contains 1 object.
    const [data] = JSON.parse(this.responseText);
    // Object with all the data about Portugal inc. the link to the img of the flag. An array containg one object.
    // after De-structure the object looks better. 
    console.log(data); 

    // Build the card component using HTML code.
    const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
`;
        // Insert the html. 
        countriesContainer.insertAdjacentHTML('beforeend', html);
        // Set the style to opacity 1:
        countriesContainer.style.opacity = 1;
    });
};
// 2 AJAX calls happening at same time. This shows the non-blocking behaviour in action.
// Call the fn with the argument of portugal
getCountryData('portugal');
// Call the fn with the argument of USA
getCountryData('usa');
// Call the fn with the argument of Germany
getCountryData('germany');

// For predefined order, would need to chain the request meaning to make the second request only after the first request has finished.

















