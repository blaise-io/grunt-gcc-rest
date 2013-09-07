# grunt-gcc-rest

> Grunt plugin for compiling code using Google Closure Compiler’s REST API.

## Getting Started
This plugin requires Grunt

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-gcc-rest --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-gcc-rest');
```

## The "compile" task

### Overview
In your project's Gruntfile, add a section named `compile` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    'path/to/compiled.js': ['path/to/file1.js', 'path/to/file2.js'],
    options: {
        params: {
            // Google Closure Compiler parameters ...
        }
    }
})
```

### Options
(TO DO)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
