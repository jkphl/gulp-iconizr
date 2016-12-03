'use strict';

/**
 * gulp-iconizr is a Gulp wrapper around the node-iconizr SVG + PNG icon kit creation library
 *
 * @see https://github.com/jkphl/gulp-iconizr
 *
 * @author Joschi Kuphal <joschi@kuphal.net> (https://github.com/jkphl)
 * @copyright © 2016 Joschi Kuphal
 * @license MIT https://raw.github.com/jkphl/gulp-iconizr/master/LICENSE
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function () {
    gulp.src(['test/*.js', 'index.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'))
});

// gulp.task('test', function () {
//     var gutil = require('gulp-util');
//     var config = {
//         log: 'verbose',
//         icons: {
//             render: {
//                 css: true
//             }
//         }
//     };
//     return gulp.src('**/*.svg', {cwd: 'test/fixtures'})
//         .pipe(require('.')(config))
//         .on('error', gutil.log)
//         .pipe(gulp.dest('tmp'));
// });

gulp.task('default', ['lint']);
