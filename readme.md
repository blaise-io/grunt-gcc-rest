# grunt-gcc-rest [![Build Status](https://travis-ci.org/blaise-io/grunt-gcc-rest.png?branch=master)](https://travis-ci.org/blaise-io/grunt-gcc-rest)

> Grunt plugin for compiling code using Google Closure Compiler’s REST API.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-gcc-rest --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile
with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-gcc-rest');
```

## The `gcc_rest` task

### Overview
In your project's Gruntfile, add a section named `gcc_rest`
to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    gcc_rest: {
        options: {
            params: {}
        }
    }
});
```

### Options

#### options.params
Type: `Object`
Default value: `{}`

This parameter contains the request parameters sent to the Google Closure Compiler's REST API.

[Documentation on Google Closure Compiler's request parameters can be found here](https://developers.google.com/closure/compiler/docs/api-ref).
The [additional web service options](http://code.google.com/p/closure-compiler/wiki/AdditionalWebserviceOptions) are also supported.
Unsupported parameters will print a warning. grunt-gcc-rest does not overwrite Google Closure Compiler's default settings.

### Usage Example

```js
grunt.initConfig({
    gcc_rest: {
        files: {
            'destination.js': ['source/*.js']
        },
        options: {
            params: {
                language: 'ECMASCRIPT5_STRICT',
                compilation_level: 'ADVANCED_OPTIMIZATIONS',
                warning_level: 'VERBOSE'
            }
        }
    }
});
```

## Release History
 - 2016-02-29: v0.1.6 Support Grunt 1.0
 - 2014-03-06: v0.1.5 Fix issues when compiling to multiple files
 - 2013-11-08: v0.1.4 Let gcc-rest take care of error logging
 - 2013-11-08: v0.1.3 Fix issue when compiling multiple tasks
 - 2013-10-05: v0.1.2 Fix error in handling gcc-rest logging
 - 2013-09-08: v0.1.0 Initial version
