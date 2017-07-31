var https = require('https');

function getAndPrintHTML () {
  var total = ""

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
  };

https.get(requestOptions,function (response) {
  response.setEncoding('utf8');

response.on('data', function (data) {
for (var i = 0; i < data.length; i++) {
total = total + data[i];
}
  console.log(total);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}

getAndPrintHTML();
