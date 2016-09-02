# number-timeago [![Build Status](https://travis-ci.org/falm/number-timeago.svg?branch=master)](https://travis-ci.org/falm/number-timeago)
> A number timeago package support 2..years.ago() method

## Install
```bash
$ npm install number-timeago
```
It's also available on NPMCDN https://unpkg.com/number-timeago@0.1.1/number.timeago.js

## Usage
**Node.js CommonJS**
```js
require("number-timeago")();
```
**AMD**
```js
require(['number-timeago'], function (NumberTimeAgo) {
  NumberTimeAgo();
});  
```
then

```js
// seconds
20..seconds // => 20,000 milliseconds
// minutes
10..minutes // => 600,000 milliseconds
// weeks, days, months, years so on

// time ago
2..months.ago() // will return 2 months ago Date object
// => Mon Mar 28 2016 11:46:07 GMT+0800 (CST)
```

## License

MIT © [Falm](https://github.com/falm)
