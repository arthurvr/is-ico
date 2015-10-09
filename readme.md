# is-ico [![Build Status](https://travis-ci.org/arthurvr/is-ico.svg?branch=master)](https://travis-ci.org/arthurvr/is-ico)

> Check if a Buffer/Uint8Array is a `.ico` file


## Installation

```
$ npm install --save is-ico
```


## Usage

```js
const readChunk = require('read-chunk'); // npm install read-chunk
const isIco = require('is-ico');
const buffer = readChunk.sync('favicon.ico', 0, 4);

isIco(buffer);
//=> true
```


## License

MIT © [Arthur Verschaeve](https://github.com/arthurvr)
