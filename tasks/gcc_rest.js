'use strict';

var gcc = require('gcc-rest');

module.exports = function(grunt) {

    grunt.registerMultiTask('gcc_rest', 'Compile code using Google Closure Compiler’s REST API.', function() {
        var done = this.async();
        var options = this.options({
            params: {}
        });

        this.files.forEach(function(file) {
            file.src.filter(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    gcc.addFile(filepath);
                }
            });

            gcc.console.error = grunt.log.error;
            gcc.console.warn = grunt.log.warn;
            gcc.console.info = grunt.log.ok;

            gcc.params(options.params);

            var handleResult = function(json) {
                 grunt.file.write(file.dest, json.compiledCode);
                 grunt.log.writeln('File "' + file.dest + '" created.');
                 done();
            };

            gcc.compilePassJson(handleResult);
        });

    });

};
