var https = require('https');

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, cb) {
  var total = ""

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
        total = total + data;
    });

    response.on('end', function() {
      cb(total)
    });

  });

}

getHTML(requestOptions, printHTML);
