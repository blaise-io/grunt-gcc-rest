/*
 * grunt-gcc-rest
 * https://github.com/blaise-io/grunt-gcc-rest
 *
 * Copyright (c) 2013 Blaise Kal
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

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
        gcc_rest: {
            tests: {
                options: {
                    params: {}
                },
                files: {
                    'tmp/compiled.js': [
                        'test/fixtures/*.js'
                    ]
                }
            }
        },
        nodeunit: {
            tests: ['test/*_test.js']
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', ['clean', 'gcc_rest', 'nodeunit']);
    grunt.registerTask('default', ['jshint', 'test']);

};
