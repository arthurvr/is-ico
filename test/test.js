import test from 'ava';
import readChunk from 'read-chunk';
import isIco from '../';

function check(filename) {
  return isIco(readChunk.sync(filename, 0, 4));
}

test('should return true when passing an ico', t => {
  t.true(check('test/fixture.ico'));
});

test('should return false when not passing an ico', t => {
  t.false(check('test/fixture.avi'));
});
