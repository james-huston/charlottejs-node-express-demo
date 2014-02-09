
// get express and create our app server
var express = require('express');
var app = express();

// get the port we want to run on. you can override the default using
// the PORT environment variable by running the server like this:
//    $ PORT=8080 node index.js
var appPort = process.env.PORT || 3000;

// register EJS as our template engine and tell the server
// where are views are at. the 2nd param to 'view engine' is
// the extension on our view files.
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

// create a route for the root to say hello
app.get('/', function (req, res) {
  res.render('index', {helloTarget: 'World'});
});

// add a quick and dirty error handler
app.on('error', function (err) {
  console.log('Error: ' + err.toString());
});

// start listening for requests
app.listen(appPort, function () {
  console.log('Server listening on port: ' + appPort);
});

