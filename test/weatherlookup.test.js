
var Lookup = require('../lib/weatherlookup');
var apiKey = require('../forecast.io.js').apiKey;

describe('The WeatherLookup module', function () {
  var lookup;

  beforeEach(function () {
    lookup = new Lookup(apiKey);
  });

  describe('with bad input data', function () {
    it('should error on empty latitude', function (done) {
      lookup.getWeather(undefined, 1, function (err) {
        err.should.be.an.instanceOf(Object);
        done();
      });
    });

    it('should error on empty longitude', function (done) {
      lookup.getWeather(1, undefined, function (err) {
        err.should.be.an.instanceOf(Object);
        done();
      });
    });
  });

  describe('with real data', function () {
    it('should get us some weather', function (done) {
      lookup.getWeather(37.8267, -122.423, function (err, data) {
        if (err) {
          return done(err);
        }

        data.should.have.keys([
          'latitude',
          'longitude',
          'timezone',
          'offset',
          'currently',
          'minutely',
          'hourly',
          'daily',
          'flags'
        ]);

        done();
      });
    });
  });

});
