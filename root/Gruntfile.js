'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js'],
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      controller: {
        src: ['controller/**/*.js']
      },
      public: {
        src: ['public/js/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    watch: {
      controller: {
        files: ['controller/**.js'],
        options: {livereload:true}
      },
      public: {
        files: ['public/**.html','public/js/**.js','public/css/**.css'],
        options: {livereload:true}
      },
      app:{
        files:['app.js'],
        options:{livereload:true}
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit']);
  grunt.registerTask('watch', ['watch']);
};
