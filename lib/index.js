
var geoLookup = require('./geolookup');
var WeatherLookup = require('./weatherlookup');
var apiKey = require('../forecast.io.js').apiKey;

module.exports.getCurrentWeather = function (zipcodes, callback) {
  if ('string' === typeof zipcodes) {
    getWeatherForZip(zipcodes, callback);
  }
};

function getWeatherForZip(zipcode, callback) {
  geoLookup(zipcode, function (err, latitude, longitude) {
    if (err) {
      return callback(err);
    }

    var weatherLookup = new WeatherLookup(apiKey);
    weatherLookup.getWeather(
      latitude,
      longitude,
      function (err, data) {
        if (err) {
          return callback(err);
        }

        data.currently = data.currently || {};

        callback(undefined, data.currently);
      });
  });
}
