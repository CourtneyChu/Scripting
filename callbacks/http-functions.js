module.exports = function getHTML (options, callback) {
  var https = require('https');
  var total = ""

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
        total = total + data;
    });

    response.on('end', function() {
      callback(total)
    });

  });


};
