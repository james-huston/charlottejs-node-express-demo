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

