'use strict';

var grunt = require('grunt');

exports.compile = {
    setUp: function(done) {
        // setup here if necessary
        done();
    },
    tests: function(test) {
        var compiled = grunt.file.read('tmp/compiled.js');
        test.expect(1);
        test.equal(
            true,
            !!compiled.match('foo') && !!compiled.match('bar'),
            'Compiling files'
        );
        test.done();
    }
};
