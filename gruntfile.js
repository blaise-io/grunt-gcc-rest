/**jshint globalstrict:true, sub:true*/
'use strict';

module.exports = function(grunt) {
    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.registerTask('test', ['compile']);
    grunt.registerTask('default', ['test']);
};
