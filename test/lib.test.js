
var lookup = require('../lib');

describe('the lookup lib', function () {
  it('should lookup a single zip', function (done) {
    lookup.getCurrentWeather('90210', function (err, data) {
      if (err) {
        return done(err);
      }

      data.should.be.an.instanceOf(Object);
      data.should.have.property([
        'time',
        'summary',
        'icon',
        'temperature'
      ]);
      done();
    });
  });
});

/*
{ time: 1391922077,
  summary: 'Clear',
  icon: 'clear-night',
  nearestStormDistance: 43,
  nearestStormBearing: 64,
  precipIntensity: 0,
  precipProbability: 0,
  temperature: 54.53,
  apparentTemperature: 54.53,
  dewPoint: 51.67,
  humidity: 0.9,
  windSpeed: 3.6,
  windBearing: 281,
  visibility: 6.4,
  cloudCover: 0.2,
  pressure: 1022.73,
  ozone: 287.31 }
 */