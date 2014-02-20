
var lookupLib = require('../../lib');

module.exports = function (req, res) {
  var postData = req.body || {};

  if (!postData.zipcodes) {
    console.log('Request with no zipcodes', req);
    return res.json({ status: 'error'});
  }

  if (postData.zipcodes.length === 5) {
    console.log('single zip request', postData.zipcodes);
    lookupLib.getCurrentWeather(postData.zipcodes, function (err, data) {
      if (err) {
        console.log(err);
        return res.json({
          status: 'error',
          error: err.toString()
        });
      }

      return res.json({
        status: 'ok',
        results: 1,
        data: {
          currently: data
        }
      });
    });
  } else if (postData.zipcodes.indexOf(' ') > 0) {
    console.log('multizip request', postData.zipcodes);
    // split our string
    var zipArray = postData.zipcodes.split(' ');

    // remove anything that doesn't look like a zip
    for (var loopy = 0; loopy < zipArray.length; loopy++) {
      if ('string' !== typeof zipArray[loopy] || zipArray[loopy].length !== 5) {
        zipArray.splice(loopy, 1);
      }
    }

    // bail if we don't have any zips
    if (!zipArray.length) {
      console.log('invalid list of zips');
      return res.json({
        status: 'error'
      });
    }

    var results = {};
    var responses = 0;

    var getZipData = function (zipcode) {
      console.log('looking up ', zipcode);
      lookupLib.getCurrentWeather(zipcode, function (err, data) {
        console.log('got response', zipcode);
        responses++;

        if (err) {
          results[zipcode] = {};
          console.log('error lookup up zipcode', zipcode, err.toString());
          return;
        }

        results[zipcode] = {
          currently: data
        };

        if (responses === zipArray.length) {
          return res.json({
            status: 'ok',
            results: zipArray.length,
            data: results
          });
        }
      });
    }

    zipArray.forEach(getZipData);
  }
};
