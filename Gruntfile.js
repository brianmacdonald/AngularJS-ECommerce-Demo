module.exports = function (grunt) {
    'use strict';
    var ASSETS_BASE_DIR = "app/";
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
                    'modernizr/modernizr.js': 'modernizr/modernizr.js',
                    'outerlayer/outerlayer.js': 'outerlayer/outerlayer.js',
                    'outerlayer/item.js': 'outerlayer/item.js',
                    'imagesloaded/imagesloaded.pkgd.js': 'imagesloaded/imagesloaded.pkgd.js',
                    'masonry/masonry.js': 'masonry/masonry.js',
                    'angular-masonry/angular-masonry.js': 'angular-masonry/angular-masonry.js'
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
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "dist/app/assets/css/theme1-bundle.css": ASSETS_BASE_DIR + "less/themes/theme1/theme1.less",
                    "dist/app/assets/css/theme2-bundle.css": ASSETS_BASE_DIR + "less/themes/theme2/theme2.less",
                    "dist/app/assets/css/theme3-bundle.css": ASSETS_BASE_DIR + "less/themes/theme3/theme3.less"
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