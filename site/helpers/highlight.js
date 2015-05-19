// page/helpers/markdown.js
var Handlebars = require('handlebars');

module.exports = function(lang, text) {
  var ret = '<pre><code class="'+ lang +'">' + text.fn(this) + '</code></pre>';
  return new Handlebars.SafeString(ret);
};


// Handlebars.registerHelper('bold', function(options) {
//   return new Handlebars.SafeString(
//       '<div class="mybold">'
//       + options.fn(this)
//       + '</div>');
// });
