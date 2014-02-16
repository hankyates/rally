module.exports = function(grunt) {

  grunt.initConfig({
    simplemocha: {
      files: ['test/**/*_test.js']
    },
    watch: {
      test: {
        files: '<%= simplemocha.files %>',
        tasks: ['simplemocha']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.registerTask('default', ['simplemocha']);

};
