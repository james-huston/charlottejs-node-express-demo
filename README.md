charlottejs-node-express-demo
=============================

Demo project for ChartlotteJS NodeJS intro meetup.

## Step 1 - Setup
In step one we get the basic project setup up. We start off using npm to initialize our package.json.

	npm init
	
We then install the modules we need for our first couple of steps.

	npm install --save express ejs superagent
	
## Step 2 - Hello World!
In step 2 we get our app server running using [Express](http://expressjs.com) and say hello to the world. To run the server we just point node at it.

	node index.js
	
If you need to run it on a different port (default is 3000), you can do so by setting an environment variable like so.

	PORT=8080 node index.js

## Step 3 - EJS and templates
In step 3 we change our hello output to come from a template using EJS instead of hardcoding it in our app.

## Step 4 - Google Geocoding API to lookup long/lat from a zip
In this step we create a library to lookup long/lat for a zip code using the [Google's geocode api](https://developers.google.com/maps/documentation/geocoding/). We also create our first unit test and use Mocha to run it. This library is exported as a simple function that you just require and then execute.

Let's add the Mocha and Should libraries as development dependencies.

	npm install --save-dev mocha should
	
We have also added some tests and a simple runner to our package.json. To run the tests do the following from the root of the project.

	npm test
	
## Step 5 - Forecast.io weather lookup
Now it's time to go and get our weather. We are using [Forecast.io](http://forecast.io) for this. Here we create a library for doing just that with a few unit tests to make sure it's working. This modules is done as a class rather than a simple function so if you look at the tests you can see we need to instantiate it and then call our lookup method.

In order to use [Forecast.io's](http://forecast.io) api you must register and get an api key. [Registration](https://developer.forecast.io/) is free and gives you 1000 requests per day. Once you register you need to create a file in the root of the project call forecast.io.js with the following contents.

	module.exports = {
		apiKey: 'yourapikeyhere'
	};

This will allow the tests and the application to access the api.

## Step 6 - getweather route in our server
We add a second route to our server here that handles a post request to get our weather data. The function that is used for handling this request is moved to it's own module under app/routes so that it doesn't clutter up our server's index file. Nothing to fancy there, take our post data, grab the zip, use our weather lookup library from step 5 to get the current weather for the zip and return it back to the browser.

## Step 7 - The UI

Now we setup our UI to make an ajax request with a zip and display the data coming back. We just use some jQuery and client side EJS templates to make it quick and easy even if it's not very clean. You can now [load the index](http://localhost:3000) page of the app, enter a zip, and see the weather.

## Step 8 - Multiple Zips without the async library

So let's do some real async and look up multiple zips at the same time. The code added here uses callbacks directly for a handling our results and does manual tracking of responses to make sure we have them all before we continue. This works (and quite well) but we will make it a bit cleaner in the final step.

It's important to not here that as you run the tests there tends to be very little time difference between a single request, 2 requests, and 5 requests. Here you can really start to see the power of async IO in node.