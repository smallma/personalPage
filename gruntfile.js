module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass'],
          dest: 'css',
          ext: '.css'
        }],
        options: {
          sourcemap: 'none'
        }
      }
    },
    watch: {
      css: {
        files: 'sass/*.sass',
        tasks: ['sass'],
      },
      js: {
        files: 'js/*.js',
        tasks: ['jshint']
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            '*.html',
            'js/**/*.js',
            'css/**/*.css'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './',
            index: 'index.html'
          }
        }
      }
    },

  });

  grunt.registerTask('default', ['browserSync', 'watch', 'jshint', 'sass']);

};