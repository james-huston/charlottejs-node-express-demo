
var lookup = require('../lib/geolookup');

describe('The GeoLookup module', function () {
  it('should actually be a function', function () {
    lookup.should.be.an.instanceOf(Function);
  });

  describe('when getting invalid data', function () {
    it('should throw an error if you dont pass a zip', function (done) {
      lookup(undefined, function (err) {
        err.should.be.an.instanceOf(Object);
        done();
      });
    });

    it('should throw an error if you pass a non string', function (done) {
      lookup({}, function (err) {
        err.should.be.an.instanceOf(Object);
        done();
      });
    });
  });

  describe('with a valid zipcode', function () {
    it('should return long/lat for a real zip', function (done) {
      lookup('90210', function (err, longitude, lattitude) {
        if (err) {
          return done(err);
        }

        longitude.should.equal(-118.4104684);
        lattitude.should.equal(34.1030032);
        done();
      });
    });
  });

});
