'use strict';

var path = require('path');

module.exports = function (grunt) {

    var destDir = 'app/build';

    var pathToRequire = 'app/lib/require';

    var pathToLib = [
        'lib/lodash/lodash.js',
        'lib/modernizr/modernizr-custom.js',
        'lib/knockout/knockout-3.4.0.js'
    ];

    var pathToSrc = [
        'app/src/**/*.js',
        'app/src/*.js'
    ];

    var pathToApp = [
        'app/es5/**/*.js',
        'app/es5/*.js'
    ];

    var pathToLayout = [
        'app/styles/js/app.v2.js',
        'app/styles/js/charts/easypiechart/jquery.easy-pie-chart.js',
        'app/styles/js/charts/sparkline/jquery.sparkline.min.js',
        'app/styles/js/charts/flot/jquery.flot.min.js',
        'app/styles/js/charts/flot/jquery.flot.tooltip.min.js',
        'app/styles/js/charts/flot/jquery.flot.resize.js',
        'app/styles/js/charts/flot/jquery.flot.grow.js',
        'app/styles/js/charts/flot/demo.js',
        'app/styles/js/calendar/bootstrap_calendar.js',
        'app/styles/js/calendar/demo.js',
        'app/styles/js/sortable/jquery.sortable.js'
    ];

    grunt.initConfig({
        watch: {
            js: {
                files: [].concat(pathToRequire).concat(pathToLib).concat(pathToLayout).concat(pathToApp).concat(pathToSrc).concat(['Gruntfile.js']),
                tasks: ['babel:build', /*'browserify',*/ 'concat:vendors',/* 'concat:layout',*/ 'express']
            },
            html: {
                files: ['app/**/*.html', 'app/*.html'],
                tasks: ['babel:build', /*'browserify', */'concat:vendors',/* 'concat:layout',*/ 'express']
            },
            css: {
                files: ['app/**/*.css', 'app/*.css', 'app/**/*.less', 'app/*.less', 'app/**/*.sass', 'app/*.sass'],
                tasks: ['babel:build', /*'browserify',*/ 'concat:vendors', /*'concat:layout',*/ 'express']
            }
        },
        express: {
            dev: {
                options: {
                    script: 'server/server.js'
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                      destDir + '/**/*',
                      destDir + '/*',
                      'app/es5/**/*',
                      'app/es5/*'
                    ]
                }]
            }
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015'],
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'app/src/',
                    src: ['**/*.js'],
                    dest: 'app/build/',
                    ext: '.js'
                }]
            }
        },
        copy: {
            require: {
                files: [
                    {
                        expand: true,
                        cwd: pathToRequire,
                        dest: destDir,
                        src: ['**/*.js'],
                        processContentExclude: ['**/*.js']
                    }
                ]
            },
            lib: {
                files: [
                    {
                        expand: true,
                        cwd: 'app',
                        dest: destDir,
                        src: pathToLib,
                        processContentExclude: ['**/*.js']
                    }
                ]
            }

        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('dev', ['clean:dist', 'babel:build', /*'browserify', */'concat:vendors', /*'concat:layout',*/ 'express', 'watch']);
    grunt.registerTask('default', ['dev']);
};
