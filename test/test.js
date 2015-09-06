'use strict';
var test = require('ava');
var readChunk = require('read-chunk');
var isIco = require('../');

function check(filename) {
  return isIco(readChunk.sync(filename, 0, 4));
}

test('should return true when passing an ico', function (t) {
  t.true(check('test/fixture.ico'));
});

test('should return false when not passing an ico', function (t) {
  t.false(check('test/fixture.avi'));
});
