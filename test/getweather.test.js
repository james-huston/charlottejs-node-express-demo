
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
});
