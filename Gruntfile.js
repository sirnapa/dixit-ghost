module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/funnix.css': 'dev/scss/funnix.scss',
          'assets/css/rockntown.css': 'dev/scss/rockntown.scss'
        }
      }
    },
      
    watch: {
      sass: {
        files: ['dev/scss/*.scss','dev/scss/componentes/*.scss','dev/scss/variables/*.scss'],
        tasks: ['sass']
      },
      concat: {
      	files: ['dev/js/libs/*.js','dev/js/*.js'],
      	tasks: ['concat']
      }
    },

    concat: {
      libs: {
        src: ['dev/js/libs/*.js','dev/js/*.js'],
        dest: 'assets/js/dixit.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'concat']);
};
