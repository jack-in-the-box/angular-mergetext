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
    },

    jshint: {
        options: {
            "bitwise": true,
            "camelcase": false,
            "curly": true,
            "eqeqeq": true,
            "es3": false,
            "forin": true,
            "freeze": true,
            "immed": true,
            "indent": 4,
            "latedef": "nofunc",
            "newcap": true,
            "noarg": true,
            "noempty": true,
            "nonbsp": true,
            "nonew": true,
            "plusplus": false,
            "quotmark": "single",
            "undef": false,
            "unused": false,
            "strict": false,
            "maxparams": 10,
            "maxdepth": 5,
            "maxstatements": 40,
            "maxcomplexity": 8,
            "maxlen": 180,
            "asi": false,
            "boss": false,
            "debug": false,
            "eqnull": true,
            "esnext": false,
            "evil": false,
            "expr": false,
            "funcscope": false,
            "globalstrict": false,
            "iterator": false,
            "lastsemic": false,
            "laxbreak": false,
            "laxcomma": false,
            "loopfunc": true,
            "maxerr": false,
            "moz": false,
            "multistr": false,
            "notypeof": false,
            "proto": false,
            "scripturl": false,
            "shadow": false,
            "sub": true,
            "supernew": false,
            "validthis": true,
            "noyield": false,

            "browser": true,
            "node": true,
            "jasmine": true,
            "globals": {
                "angular": false,
                "$": false,
                "_": false,
                "CKEDITOR": false
            }
        },
        all: ['src/**/*.js', 'test/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('test', [ 'karma' ]);
  grunt.registerTask('build', [ 'jshint', 'test', 'copy', 'uglify']);
};
