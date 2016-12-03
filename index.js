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

var through = require('through2');
var gutil = require('gulp-util');
var Iconizr = require('iconizr');
var PluginError = gutil.PluginError;
var PLUGIN_NAME = 'gulp-iconizr';

/**
 * Iconizr
 *
 * @param {Object} config Configuration
 * @returns {*}
 */
module.exports = function (config) {

    // Extend plugin error
    function extendError(pError, error) {
        if (error && (typeof error === 'object')) {
            ['name', 'errno'].forEach(function (property) {
                if (property in error) {
                    this[property] = error[property];
                }
            }, pError);
        }

        return pError;
    }

    // Variables
    var iconizr = new Iconizr(config);
    var shapes = 0;

    // Intercept error log and convert to plugin errors
    iconizr.config.log.error = function (message, error) {
        this.emit('error', extendError(new PluginError(PLUGIN_NAME, message), error));
    };

    /**
     * Buffer incoming contents
     *
     * @param {File} file File
     * @param enc
     * @param {Function} cb Callback
     */
    function bufferContents(file, enc, cb) {
        // Ignore empty files
        if (file.isNull()) {
            cb();
            return;
        }

        // We don't do streams (yet)
        if (file.isStream()) {
            this.emit('error', new Error('gulp-iconizr: Streaming not supported'));
            cb();
            return;
        }

        var error = null;
        try {
            iconizr.add(file);
            ++shapes;
        } catch (e) {
            error = (!e.plugin || (e.plugin !== PLUGIN_NAME)) ? extendError(new PluginError(PLUGIN_NAME, e.message), e) : e;
        }
        return cb(error);
    }

    /**
     * End the stream
     *
     * @param {Function} cb Callback
     */
    function endStream(cb) {
        var stream = this;
        iconizr.compile(function (error, result /*, data*/) {
            if (error) {
                stream.emit('error', new PluginError(PLUGIN_NAME, error));
            } else if (shapes > 0) {
                for (var mode in result) {
                    for (var resource in result[mode]) {
                        stream.push(result[mode][resource]);
                    }
                }
            }
            cb();
        });
    }

    return through.obj(bufferContents, endStream);
};
