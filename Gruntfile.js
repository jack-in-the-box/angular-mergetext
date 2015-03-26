module.exports = function( grunt ) {

  'use strict';

  var SRC = 'src';

  grunt.initConfig({
    pkg    : grunt.file.readJSON('package.json'),
    banner : '/* \n * <%= pkg.name %> <%= pkg.version %>\n',
    uglify : {
      production : {
        src: [ 'src/**/*.js' ],
        dest: 'angular-mergetext.min.js'
      }
    },

    copy : {
      production : {
        files : [
          { src: 'src/angular-mergetext.js', dest : 'angular-mergetext.js' }
        ]
      }
    },

    karma : {
      spec: {
        configFile : 'karma.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('test', [ 'karma' ]);
  grunt.registerTask('build', [ 'test', 'copy', 'uglify']);
};
