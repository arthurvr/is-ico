# is-ico [![Build Status](https://secure.travis-ci.org/arthurvr/is-ico.png?branch=master)](https://travis-ci.org/arthurvr/is-ico)

> Check if a Buffer/Uint8Array is a `.ico` file

## Installation

```
$ npm install --save is-ico
```

## Usage

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var isIco = require('is-ico');
var buffer = readChunk.sync('video.ico', 0, 4);

isIco(buffer);
//=> true
```

## License

MIT
