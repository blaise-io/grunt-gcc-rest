/**jshint globalstrict:true, sub:true, node:true*/
'use strict';

module.exports = function(grunt) {
    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.initConfig({
        compile: {
            'tmp/compiled.js': ['gruntfile.js'],
            options: {
                params: {
                    language: 'ECMASCRIPT5_STRICT',
                    output_info: ['compiled_code', 'errors', 'warnings'],
                    compilation_level: 'ADVANCED_OPTIMIZATIONS'
                }
            }
        }
    });

    grunt.registerTask('test', ['compile']);
    grunt.registerTask('default', ['test']);
};
