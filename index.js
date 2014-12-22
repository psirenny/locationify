var through = require('through2');
var url = require('url');
var util = require('util');

module.exports = function (href) {
  var parsed = url.parse(href);
  return function () {
    return through(function (buf, enc, next) {
      var code = buf.toString('utf8');
      code = code.replace(/window\.location.hostname(?=([^"]*"[^"]*")*[^"]*$)/g, util.format('"%s"', parsed.hostname));
      code = code.replace(/window\.location.host(?=([^"]*"[^"]*")*[^"]*$)/g, util.format('"%s"', parsed.host));
      code = code.replace(/window\.location.href(?=([^"]*"[^"]*")*[^"]*$)/g, util.format('("%s//%s" + window.location.pathname + window.location.search + window.location.hash)', parsed.protocol, parsed.host));
      code = code.replace(/window\.location.origin(?=([^"]*"[^"]*")*[^"]*$)/g, util.format('"%s//%s"', parsed.protocol, parsed.host));
      code = code.replace(/window\.location.port(?=([^"]*"[^"]*")*[^"]*$)/g, util.format('"%s"', parsed.port || ''));
      code = code.replace(/window\.location.protocol(?=([^"]*"[^"]*")*[^"]*$)/g, util.format('"%s"', parsed.protocol));
      this.push(code);
      next();
    });
  };
};
