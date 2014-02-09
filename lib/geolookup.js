
var request = require('superagent');

var endpoint =
  'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=';

module.exports = function (zipcode, callback) {
  if (!zipcode || 'string' !== typeof zipcode) {
    return callback(new Error('Invalid zip code'));
  }

  request
    .get(endpoint + zipcode)
    .set('Accept', 'application/json')
    .end(function (err, res) {
      if (err) {
        return callback(err);
      }

      res.body = res.body || {};
      if (!res.body.status || res.body.status !== 'OK') {
        return callback(new Error('Google says things are not ok'));
      }

      var data = res.body.results[0] || {};

      data.geometry = data.geometry || {};

      var location = data.geometry.location;

      if (!location || !location.lat || !location.lng) {
        return callback(new Error('Invalid response location data'));
      }

      return callback(
        undefined,
        location.lng,
        location.lat
      );
    });
};
