var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function lowerCase(html) {
  var x = html.toLowerCase();
  console.log(x);
};

getHTML(requestOptions, lowerCase);
