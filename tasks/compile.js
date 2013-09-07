/**jshint globalstrict:true, sub:true*/
'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('compile', 'Compile code using Google Closure Compiler’s REST API.', function() {
        var done = this.async();
        done();
    });

};
