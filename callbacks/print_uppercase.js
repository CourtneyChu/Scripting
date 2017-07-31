var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function upperCase(html) {
  var x = html.toUpperCase();
  console.log(x);
};

getHTML(requestOptions, upperCase);
