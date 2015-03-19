'use strict';

module.exports = function (buf) {
  if (!buf || buf.length < 4) {
    return false;
  }

  return buf[0] === 0x00 && buf[1] === 0x00 && buf[2] === 0x01 && buf[3] === 0x00;
};
