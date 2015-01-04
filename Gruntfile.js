module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        clean: {
            dist: 'dist',
            docs: 'docs/dist'
        },
        copy: {
            html: {
                expand: true,
                src: 'app/templates/*',
                dest: 'dist/app/',
                flatten: true
            },
            js: {
                expand: true,
                src: 'app/js/*',
                dest: 'dist/app/assets/js/',
                flatten: true
            },
            images: {
                expand: true,
                src: 'app/images/*',
                dest: 'dist/app/assets/images/',
                flatten: true
            }
        },
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            scripts: {
                options: {
                    destPrefix: 'dist/app/assets/js/vendor'
                },
                files: {
                    'jquery/jquery.min.js': 'jquery/jquery.min.js',
                    'modernizr/modernizr.js': 'modernizr/modernizr.js'
                }
            },
            css: {
                options: {
                    destPrefix: 'dist/app/assets/css/vendor'
                },
                files: {
                    'bootstrap/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css',
                    'bootstrap/bootstrap-theme.min.css': 'bootstrap/dist/css/bootstrap-theme.min.css'
                }
            }
        },
        watch: {
            src: {
                files: 'app/**',
                tasks: ['copy']
            }
        }
    });
    require('load-grunt-tasks')(grunt);
};