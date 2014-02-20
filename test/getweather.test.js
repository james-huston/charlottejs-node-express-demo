
var request = require('superagent');
var port = process.env.PORT || 3000;

describe('Our server getweather route', function () {
  describe('when posted a single zip', function () {
    it('should provide weather data for that zip', function (done) {
      request
        .post('http://localhost:' + port + '/getweather')
        .send({
          zipcodes: '90210'
        })
        .set('Accept', 'application/json')
        .end(function (res) {
          var data = res.body || {};

          data.status.should.equal('ok');
          data.data.currently.should.be.an.instanceOf(Object);
          data.data.currently.should.have.property([
            'time',
            'summary',
            'icon',
            'temperature'
          ]);
          done();
        });
    });
  });

  describe('when posting 2 valid zips', function () {
    it('should provide results for both', function (done) {
      request
        .post('http://localhost:' + port + '/getweather')
        .send({
          zipcodes: '90210 44093'
        })
        .set('Accept', 'application/json')
        .end(function (res) {
          var data = res.body || {};

          data.status.should.equal('ok');
          data.results.should.equal(2);

          data.data['90210'].should.be.an.instanceOf(Object);

          data.data['44093'].should.be.an.instanceOf(Object);
          done();
        });
    });
  });

  describe('when posting 5 valid zips', function () {
    it('should provide results for all', function (done) {
      request
        .post('http://localhost:' + port + '/getweather')
        .send({
          zipcodes: '90210 44093 28173 21431 28210'
        })
        .set('Accept', 'application/json')
        .end(function (res) {
          var data = res.body || {};

          data.status.should.equal('ok');
          data.results.should.equal(5);

          data.data['90210'].should.be.an.instanceOf(Object);
          data.data['44093'].should.be.an.instanceOf(Object);
          data.data['28173'].should.be.an.instanceOf(Object);
          data.data['21431'].should.be.an.instanceOf(Object);
          data.data['28210'].should.be.an.instanceOf(Object);

          done();
        });
    });
  });
});
