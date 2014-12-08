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
      uglify: {
      	files: ['dev/js/libs/*.js','dev/js/*.js'],
      	tasks: ['uglify']
      }
    },

    uglify: {
        js: {
            files: { 'assets/js/dixit.js': ['dev/js/libs/*.js','dev/js/*.js']},
            options: {
                preserveComments: false
            }
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'uglify']);
};
