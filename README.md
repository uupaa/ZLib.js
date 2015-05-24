# ZLib.js [![Build Status](https://travis-ci.org/uupaa/ZLib.js.png)](http://travis-ci.org/uupaa/ZLib.js)

[![npm](https://nodei.co/npm/uupaa.zlib.js.png?downloads=true&stars=true)](https://nodei.co/npm/uupaa.zlib.js/)

zlib implementation.

## Document

- [ZLib.js wiki](https://github.com/uupaa/ZLib.js/wiki/ZLib)
- [WebModule](https://github.com/uupaa/WebModule)
    - [Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html)
    - [Development](https://github.com/uupaa/WebModule/wiki/Development)

## Run on

### Browser and node-webkit

```js
<script src="lib/ZLib.js"></script>
<script>
var ziped = new Uint8Array(...);
var unziped = ZLib.inflate(ziped);
</script>
```

### WebWorkers

```js
importScripts("lib/ZLib.js");

```

### Node.js

```js
require("lib/ZLib.js");

```

