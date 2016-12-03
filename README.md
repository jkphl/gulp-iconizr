# gulp-iconizr [![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url] [![Development Dependency Status][devdepstat-image]][devdepstat-url]

SVG + PNG icon kit generator — Gulp plugin wrapping around [node-iconizr](https://github.com/jkphl/node-iconizr/tree/dev) (dev branch) that creates a CSS icon kit from a bunch of SVG files, serving them as SVG / PNG sprites or embedded data URIs along with suitable CSS / Sass / LESS / Stylus etc. stylesheet resources and a JavaScript loader for easy integration into your HTML documents.

**Sorry, no serious documentation so far. :(** 

## Installation

To install `gulp-iconizr` as a development dependency, simply run:

```shell
npm install --save-dev jkphl/gulp-iconizr
```

## Usage

Add it to your `gulpfile.js` and use it like this:

```javascript
const gulp       = require('gulp');
const iconizr    = require('gulp-iconizr');

gulp.task('iconizr', function () {
    var config = { /* ... */ };

    return gulp.src('**/*.svg', {cwd: 'path/to/svgs'})
        .pipe(iconizr(config))
        .pipe(gulp.dest('path/to/dist'));
});
```

For a glimpse of the configuration options please see the (likewise incomplete — sorry!) [node-iconizr documentation](https://github.com/jkphl/node-iconizr/tree/dev#configuration-basics).

## Changelog

Please refer to the [changelog](CHANGELOG.md) for a complete release history.


## Legal

Copyright © 2016 Joschi Kuphal <joschi@kuphal.net> / [@jkphl](https://twitter.com/jkphl).

*gulp-iconizr* is licensed under the terms of the [MIT license](LICENSE).


[npm-url]: https://npmjs.org/package/gulp-iconizr
[npm-image]: https://badge.fury.io/js/gulp-iconizr.png
[npm-downloads]: https://img.shields.io/npm/dm/gulp-iconizr.svg

[travis-url]: http://travis-ci.org/jkphl/gulp-iconizr
[travis-image]: https://secure.travis-ci.org/jkphl/gulp-iconizr.png

[coveralls-url]: https://coveralls.io/r/jkphl/gulp-iconizr
[coveralls-image]: https://img.shields.io/coveralls/jkphl/gulp-iconizr.svg

[depstat-url]: https://david-dm.org/jkphl/gulp-iconizr
[depstat-image]: https://david-dm.org/jkphl/gulp-iconizr/status.svg
[devdepstat-url]: https://david-dm.org/jkphl/gulp-iconizr?type=dev
[devdepstat-image]: https://david-dm.org/jkphl/gulp-iconizr/dev-status.svg
