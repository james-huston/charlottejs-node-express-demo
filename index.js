
// get express
var express = require('express');

// get the port we want to run on. you can override the default using
// the PORT environment variable by running the server like this:
//    $ PORT=8080 node index.js
var appPort = process.env.PORT || 3000;

// create our app server
var app = express();
app.use(express.json());

// register EJS as our template engine and tell the server
// where are views are at. the 2nd param to 'view engine' is
// the extension on our view files.
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(express.static('app/static'));

// create a route for the root to say hello
app.get('/', function (req, res) {
  res.render('index', {helloTarget: 'World'});
});

app.post('/getweather', require('./app/routes/getweather'));

// add a quick and dirty error handler
app.on('error', function (err) {
  console.log('Error: ' + err.toString());
});

// start listening for requests
app.listen(appPort, function () {
  console.log('Server listening on port: ' + appPort);
});

