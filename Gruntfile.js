module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: './index.html',
          dest: 'dist/index.html'
        }
      },
      cssmin: {  
        'dist/css/common.css': 'css/common.css',
        'dist/style.css':'style.css'
      },
      uglify: {
        release:{
          files: {
            'dist/js/common.js': 'js/common.js'
          }
        }
      },
      imagemin: {                               
        files: {
          expand: true,
          src: ['img/*.{png,jpg,gif}'],
          dest: 'dist/'
        }
      }   
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify','imagemin']);
  };