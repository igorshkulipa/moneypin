'use strict';

var path = require('path');

module.exports = function (grunt) {

    var destDir = 'app/build';

    var pathToRequire = 'app/lib/require';

    var pathToCopyMain = [
        '404.html',
        'index.html',
        'favicon.ico',
        'robots.txt'
    ];

    var pathToCopyLayout = [
        '*.*',
        '**/*.*'
    ];

    var pathToCopyStyles = [
        '*.*',
        '**/*.*'
    ];

    var pathToLib = [
        'lib/lodash/lodash.js',
        'lib/modernizr/modernizr-custom.js',
        'lib/knockout/knockout-3.4.0.js',
        'lib/jquery/jquery-2.2.4.js',
        'lib/pager/pager.js',
        'lib/crossroads/crossroads.js',
        'lib/signals/signals.js',
        'lib/hasher/hasher.js',
        'lib/remodal/remodal.js',
        'lib/jquery/jquery.easy-pie-chart.js',
        'lib/jquery/jquery.sparkline.min.js',
        'lib/jquery/jquery-ui.js'
    ];

    var pathToSrc = [
        'app/src/**/*.js',
        'app/src/*.js'
    ];

    var pathToHtml = [
        '**/*.html',
        '*.html'
    ];

    var pathToBuild = [
        'app/build/**/*.js',
        'app/build/*.js'
    ];

    var pathToLayout = [
        'app/styles/js/app.v2.js',
        'app/styles/js/charts/easypiechart/jquery.easy-pie-chart.js',
        'app/styles/js/charts/sparkline/jquery.sparkline.min.js',
        'app/styles/js/calendar/bootstrap_calendar.js',
        'app/styles/js/calendar/demo.js',
        'app/styles/js/sortable/jquery.sortable.js',
        'app/styles/js/charts/sparkline/jquery.sparkline.min.js',
        'app/styles/js/charts/easypiechart/jquery.easy-pie-chart.js',
        'app/styles/js/charts/flot/jquery.flot.min.js',
        'app/styles/js/charts/flot/jquery.flot.tooltip.min.js',
        'app/styles/js/charts/flot/jquery.flot.resize.js',
        'app/styles/js/charts/flot/jquery.flot.orderBars.js',
        'app/styles/js/charts/flot/jquery.flot.pie.min.js',
        'app/styles/js/charts/flot/jquery.flot.grow.js',
        'app/styles/js/charts/flot/demo.js'
    ];

    grunt.initConfig({
        watch: {
            js: {
                files: ['app/**/*.css', 'app/*.css', 'app/**/*.less', 'app/*.less', 'app/**/*.sass', 'app/*.sass']
                    .concat(pathToRequire).concat(pathToLib).concat(pathToLayout).concat(pathToBuild).concat(pathToSrc).concat(['Gruntfile.js']),
                tasks: ['babel', 'copy', 'concat', 'express']
            },
            html: {
                files: ['app/**/*.html', 'app/*.html'],
                tasks: ['babel', 'copy', 'concat', 'express']
            },
            css: {
                files: ['app/**/*.css', 'app/*.css', 'app/**/*.less', 'app/*.less', 'app/**/*.sass', 'app/*.sass'],
                tasks: ['babel', 'copy', 'concat', 'express']
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
                    src: [destDir + '/**/*', destDir + '/*'].concat(pathToBuild)
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
                    dest: destDir,
                    ext: '.js'
                }]
            }
        },
        copy: {
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
            },
            html: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/src',
                        dest: destDir,
                        src: pathToHtml,
                        processContentExclude: ['**/*.html']
                    }
                ]
            },
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'app',
                        dest: destDir,
                        src: pathToCopyMain,
                        processContentExclude: ['**/*.html']
                    }
                ]
            },
            styles: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/styles',
                        dest: destDir + '/styles',
                        src: pathToCopyStyles,
                        processContentExclude: ['**/*.html']
                    }
                ]
            },
            layout: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/lib/layout',
                        dest: destDir + '/lib/layout',
                        src: pathToCopyStyles,
                        processContentExclude: ['**/*.html']
                    }
                ]
            }
        },
        concat: {
            options: {
                separator: ';\n\n'
            },
            layout: {
                src: pathToLayout,
                dest: 'app/build/layout.js'
            },
            require: {
                src: ['app/lib/require/require.js'],
                dest: 'app/build/require.js'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('dev', ['clean', 'babel', 'copy', 'concat', 'express', 'watch']);
    grunt.registerTask('default', ['dev']);
};
