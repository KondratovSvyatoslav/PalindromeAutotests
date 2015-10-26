var nightwatch = require('./lib/index.js');

module.exports = function (grunt) {

    'use strict';

    nightwatch.initGrunt(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),



        nightwatch_report: {
            files: ['reports/*.xml'],
            options: {
                outputDir: 'reports/summary'
            }
        }



    });


    grunt.loadNpmTasks('grunt-nightwatch-report');



    // Default task(s).

    grunt.registerTask('default',['nightwatch_report']);
};
