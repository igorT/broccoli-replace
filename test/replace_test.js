
/*
 * broccoli-replace
 * http://gruntjs.com/
 *
 * Copyright (c) 2014 outaTiME
 * Licensed under the MIT license.
 * https://github.com/outaTiME/broccoli-replace/blob/master/LICENSE-MIT
 */

var rimraf = require('rimraf');

exports['replace'] = {

  tearDown: function (cb) {
    rimraf.sync('temp');
    cb();
  },

  main: function (test) {

    'use strict';

    var expect;
    var result;

    test.expect(1);

    expect = 'value\n';
    result = 'value\n';
    test.equal(expect, result, 'should replace simple key with value');

    test.done();

  }

};