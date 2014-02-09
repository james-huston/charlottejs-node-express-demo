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
In this step we create a library to lookup long/lat for a zip code using the Google geocode api. We also create our first unit test and use Mocha to run it.

Let's add the Mocha and Should libraries as development dependencies.

	npm install --save-dev mocha should
	

	
