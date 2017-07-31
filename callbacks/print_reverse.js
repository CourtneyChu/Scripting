var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverseIt(html) {
  var x = html.split("");
  var y = x.reverse();
  var j = y.join("");
  console.log(j);
};

getHTML(requestOptions, reverseIt);
