module.exports = (grunt) => {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('../package.json'),

    copy: {
      my_target: {
        src: 'dir1/*.js',
        dest: 'dir2/',
      },
    },

    uglify: {
      my_target: {
        files: {
          'dest/output.min.js': ['dir1/*.js'],
        },
      },
    },

    watch: {
      w1: {
        files: ['dir1/*.js'],
        tasks: ['uglify:my_target', 'copy:my_target' ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
