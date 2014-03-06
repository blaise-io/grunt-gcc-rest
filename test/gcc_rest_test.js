'use strict';

var grunt = require('grunt');

exports.compile = {
    // Test if first task compiled.
    tests: [
        function(test) {
            var compiled = grunt.file.read('tmp/foo.js');
            test.expect(1);
            test.equal(
                true,
                compiled.match(/foo/) !== null &&
                compiled.match(/foo/).length === 1 &&
                compiled.match(/bar/) === null,
                'Compiling foo.js'
            );
            test.done();
        },

        // Test if multiple files can be used.
        function(test) {
            var compiledMultiple = grunt.file.read('tmp/foo-bar.js');
            test.expect(1);
            test.equal(
                true,
                compiledMultiple.match(/foo/) !== null &&
                compiledMultiple.match(/foo/).length === 1 &&
                compiledMultiple.match(/bar/) !== null &&
                compiledMultiple.match(/bar/).length === 1,
                'Compiling foo.js and bar.js'
            );
            test.done();
        }
    ]
};
