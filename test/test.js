var assert = require('assert');
var readChunk = require('read-chunk');
var isIco = require('../');

function check(filename) {
  return isIco(readChunk.sync(filename, 0, 4));
}

it('should return true when passing an ico', function () {
  assert(check('test/fixture.ico'));
});

it('should return false when not passing an ico', function () {
  assert(!check('test/fixture.avi'));
});
