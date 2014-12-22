var browserify = require('browserify');
var lib = require('..');
var should = require('chai').should();

describe('locationify', function () {
  it('should be a function', function () {
    lib.should.be.a('function');
  });
});
