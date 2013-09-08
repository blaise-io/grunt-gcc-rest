/*
 * grunt-gcc-rest
 * https://github.com/blaise-io/grunt-gcc-rest
 *
 * Copyright (c) 2013 Blaise Kal
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'gruntfile.js', 'tasks/*.js', '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: {
            tests: ['tmp']
        },
        compile: {
            test: {
                options: {
                    params: {
                        language: 'ECMASCRIPT5_STRICT'
                    }
                },
                files: {
                    'tmp/compiled.js': [
                        'test/fixtures/foo.js',
                        'test/fixtures/bar.js'
                    ]
                }
            }
        },
        nodeunit: {
            tests: ['test/*_test.js']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'compile', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
