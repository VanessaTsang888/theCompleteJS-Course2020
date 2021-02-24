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
/*

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
// getCountryData('usa');
// Call the fn with the argument of Germany
// getCountryData('germany');

// For predefined order, would need to chain the request meaning to make the second request only after the first request has finished.

*/

/*************************************************************************************************************************************************** 

246. Welcome to Callback Hell:

The original country is Portugal. The task is to render the neighbouring countries.

Create a sequence of AJAX calls, so that the second one runs only after the first one has finished. 

In the country data > properties of boarding countries borders: Array (1)

The second AJAX call depends on the first one as the data about neighbouring countries is the result of the first call. So without the first call,
we wouldn't know which data to fetch in the second call. So we need to implement a sequence of AJAX call.

Nested Callbacks: Neighbour country inside the main country.

*****************************************************************************************************************************************************/


// A fn that simply takes in some data:
// Change the variable names. The className makes Spain smaller.

const renderCountry = function(data, className = '') {
    const html = `
    <article class="country ${className}">
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

const countriesContainer = document.querySelector('.countries');
        // Insert the html. 
        countriesContainer.insertAdjacentHTML('beforeend', html);
        // Set the style to opacity 1:
        countriesContainer.style.opacity = 1;

}
/*

const getCountryAndNeighbour = function(country) {

    const btn = document.querySelector('.btn-country');
// Doing AJAX calls using the XML HTTP request - this exists but its the old school way, many steps.
// AJAX call country 1:
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// Send off request then fetch data in the background. Send off AJAX call is being done in the background while the rest of the code keeps running - asynchronous non-blocking behavior.
request.send();

// Register a Callback on the request object for the load evernt. Wait for the load event. As soon as the data arrives the Callback fn will be called.
// The 'this' keyword is the request. Then the response is in the property response text which will only be set once the data has arrived.
request.addEventListener('load', function() {
    // AJAX call country 1
    const [data] = JSON.parse(this.responseText);
    console.log(data); 

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2): destructure.
    const [neighbour] = data.borders;

    if(!neighbour) return;

// AJAX call country 2: Nested Callbacks:
// Change country to one of the neighbouring countries like Spain and the code for that is ESP which I can find within the Object - Console.
// Listen for load event of this request, call this request 2. The way i'm setting this up is dependant on the first one as I'm firing this one in the Callback fn
// of the first one.

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`); // Now searching for country codes not country names.
    // Send off request then fetch data in the background. Send off AJAX call is being done in the background while the rest of the code keeps running - asynchronous non-blocking behavior.
    request2.send();

    request2.addEventListener('load', function() {
        const data2 = JSON.parse(this.responseText); // the response of this API is no longer an array, when we search for the code.
        console.log(data2);
        // Data for Spain - code: ESP
        renderCountry(data2, 'neighbour');
    });
});
};
// 2 AJAX calls happening at same time. This shows the non-blocking behaviour in action.
// Call the fn with the argument of portugal
// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

// If we want to do more requests in sequence, like the neighbor of the neighbor of the neighbor, then we'll end-up with Callbacks inside of Callbacks inside of Callbacks...
// A lot of Nested Callback. For this kind of structure - Callback Hell: in order to execute asynchronous tasks in sequence. This happens to all asynchronous tasks
// Which are handled by Callbacks, not just AJAX calls. Example: a set timout fn:
// Callback Hell makes our code difficult to read, maintain and understand = bugs.
// In ES6 we can avoid Callback Hell by using Promises.

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            },1000); 
        },1000);      
    }, 1000);
}, 1000);

*/

/*************************************************************************************************************************************************** 

247. Promises and the Fetch API:

A modern JS features called Promises to avoid the Callback Hell. 

1. Replace the XML Http request fn with the way of making AJAX calls using the Fetch API

What is a Promise and what can we do with it?
An object that is used as a placeholder for the future result of an asynchronous operation;
A container for an asynchronously delivered value;
A container or placeholder for a future value (i.e. a response from AJAX call)

A promise will handle a future value, i.e. a Lottery Ticket: Promise that I will receive money if I guess correct outcome. 
I buy the ticket (promise) right now, will wining money in the future if I guess the correct outcome. The lottery draw wich determines if I get the money or not
happens asynchronously. So I don't have to drop everything and keep waiting until the lottery draw happens. If I did guess the correct outcome then I will
receive my money as I have my lottery ticket, which the Promise that I brought.

With Promises we no longer need to rely on events and callback fn's to handle asynchronous results.
Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell.

Since promises work with asynchronous operations they are time sensitive, they change over time and so promises can be in different states - a life cycle of
a promise.

At the begining we say a promise is pending - before the future value is avaiable. During this time, the Async Task is still doing the work in the background
When the task is finished, we say the task is Settled and there are 2 different types of settled promises: fulfilled promises and rejected promises.
2 different states:
Fullfilled: success! The value is now available, i.e. use promise to fetch data from API.
Rejected: has been an error happened during the asynchronus task, i.e. data from an API, an error happened would be for example the user is offline and cannot
connect to the API server.
A promise is only settled once and from there the state will remain unchanged forever. The promise was fullfilled or rejected but impossible to change that state.
We use a promise to get a result which is called to Consume a Promise. When we already have a promise, e.g. promise returned from Fetch API. Its the Fetch API that
builds the promise for us to consume. Most of the time we just comsume a promise and that's what we'll do.

*****************************************************************************************************************************************************/

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// // Send off request then fetch data in the background.
// // Send off AJAX call is being done in the background while the rest of the code keeps running - asynchronous non-blocking behavior.
// request.send();

// Call Fetch, url: specify Portugal
// Will return a Promise and store in the 'request' variable.
// const request = fetch ('https://restcountries.eu/rest/v2/name/portugal');
// console.log(request); // Promise {<pending>}

/*************************************************************************************************************************************************** 

248. Consuming Promises:
Learn How to consume a promise. We'll consume the promise that was returned by the fetch fn.

Impliment the get country data fn from the first lecture but now using a promise.

Instead of the Callback Hell, we can have a flat chain of promises using Arrow Fn that's easy to understand and read.
Promises are powerful and elegant solution to handle async code.

*****************************************************************************************************************************************************/

// Call Fetch, url: specify Portugal
// Will return a Promise and store in the 'request' variable.
// const request = fetch ('https://restcountries.eu/rest/v2/name/portugal');
// console.log(request); // Promise {<pending>}

// Impliment the get country data fn from the first lecture but now using a promise.
// Call a Fetch fn like this will immediately return a Promise - as soon as we start the request. At the begining this promise is still pending as the async task
// of geting the data is still running in the background. Then the promise will be setted either in a fulfilled or rejected state. To handle this fulfilled state
// we can use the '.then' method thats available on all promises. Pass a Callback fn that we want to be executed as soon as the promise is actually fulfilled,
// as soon as the result is available. The fn will receive 1 argument once called by JS - the resulting value of the fulfilled promise - response of AJAX call.
// To be able to read the data from the body, we need to call the JSON method on the response. json is available on all response objects that's coming from the
// Fetch fn - all the resolved values. The json fn is also an Async fn, so will also return a new promise. json will be a new promise and need to handle this as well.
// Then another Callback fn with data as the argument.

/*
const getCountryData = function(country) {
    // const renderCountry;
    fetch (`https://restcountries.eu/rest/v2/name/${country}`).then(function(
        response // a resolved value
        ) {
        console.log(response); // Response {type: "cors", url: "https://restcountries.eu/rest/v2/name/portugal", redirected: false, status: 200, ok: true, …}
        return response.json(); // will be a new promise
    }).then(function(data) {
        console.log(data); // same data as before but this time using 2 promises: 
        renderCountry(data[0]);
    });
};

*/


// Same but simplified version using Arrow Function: cleaner, easier to read than previous version.
// 1. We fetch something;
// 2. Then we get a response which will be Transform to json;
// 3. Then we take that data and render the country to the DOM
// Promises don't aviod Callbacks but Callback Hell.
/*

const getCountryData = function(country) {
    fetch (`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then(data => renderCountry(data[0]));
};
// Call the fn:
getCountryData('portugal'); // portugal card in the console with flag etc

*/

/*************************************************************************************************************************************************** 

249. Chaining Promises:

Chain promises in order to also render the neighboring country of the initial country we give to the fn. We already have a small chain of promises from
the previous lecture. The 2 'then' methods called and sequence are basically already a small chain.
Now we'll chain 2 sequential AJAX calls

Promises allows us to handle complex async operations with as many steps as we want.

Do not chain 'this' method directly onto a new nested promise, instead of returning the promise. Then we are back in Callback Hell. Always
return a promise then handle it outside by simply continuing the chain.

*****************************************************************************************************************************************************/

// Get data about neighbouring country.
// The second call depends on the first call so they need to be done in sequence.
// As soon as we get the data, then we need to get the neighbouring country and do the AJAX call for that one as well.

const getCountryData = function(country) {
    // Contry 1
    fetch (`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
        renderCountry(data[0]);
        // Get the neighbouring country
        const neighbour = data[0].borders[0]
        // if no neighbours then return immediately.
        if (!neighbour) return;
        // Country 2:
        // Return this new promise to chain a new 'then' method on the result of the previous 'then' method
        return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    // Handle the success value of the above promise. Call the json method. The fulfilled value of that promise will become the body, the data that is stored in
    // the body. Pass-in the css class for the neighbour.
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};
// Call the fn:
getCountryData('portugal'); // portugal card in the console with flag etc
// Above, I have 4 steps but I can have more if I want.



