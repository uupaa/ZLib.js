# ZLib.js [![Build Status](https://travis-ci.org/uupaa/ZLib.js.svg)](https://travis-ci.org/uupaa/ZLib.js)

[![npm](https://nodei.co/npm/uupaa.zlib.js.svg?downloads=true&stars=true)](https://nodei.co/npm/uupaa.zlib.js/)

zlib implementation.


- ZLib.js made of [WebModule](https://github.com/uupaa/WebModule).
- [Spec](https://github.com/uupaa/ZLib.js/wiki/ZLib)

## Browser and NW.js(node-webkit)

```js
<script src="<module-dir>/lib/WebModule.js"></script>
<script src="<module-dir>/lib/ZLib.js"></script>
<script>
var ziped = new Uint8Array(...);
var unziped = WebModule.ZLib.inflate(ziped);
</script>
```

## WebWorkers

```js
importScripts("<module-dir>lib/WebModule.js");
importScripts("<module-dir>lib/ZLib.js");

```

## Node.js

```js
require("<module-dir>lib/WebModule.js");
require("<module-dir>lib/ZLib.js");

```

