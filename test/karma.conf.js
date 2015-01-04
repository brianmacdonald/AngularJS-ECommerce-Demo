module.exports = function(config){
    config.set({

        basePath : '../',

        files : [
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.min.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular-animate.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular-mocks.js',
            'app/js/**/*.js',
            'tests/unit/**/*.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Firefox'],

        plugins : [
            'karma-firefox-launcher',
            'karma-jasmine'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};