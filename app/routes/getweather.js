
var lookupLib = require('../../lib');

module.exports = function (req, res) {
  var postData = req.body || {};

  if (!postData.zipcodes) {
    console.log('Request with no zipcodes', req);
    return res.json({ status: 'error'});
  }

  lookupLib.getCurrentWeather(postData.zipcodes, function (err, data) {
    if (err) {
      console.log(err);
      return res.json({
        status: 'error',
        error: err.toString()
      });
    }

    res.json({
      status: 'ok',
      data: {
        currently: data
      }
    });
  });
};
