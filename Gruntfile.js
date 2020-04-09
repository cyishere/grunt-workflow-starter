module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      dist: {
        options: {
          sourcemap: "none",
        },
        files: {
          'dist/css/style.css': 'src/scss/style.scss'
        },
      },
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require("autoprefixer")({
            overrideBrowserslist: ["last 2 versions"],
          }),
        ],
      },
      dist: {
        src: "dist/css/style.css",
      },
    },
    cssmin: {
      target: {
        files: {
          'dist/css/style.min.css': 'dist/css/style.css'
        },
      },
    },
    babel: {
      options: {
        sourceMap: false,
        presets: ["@babel/preset-env"],
      },
      dist: {
        files: {
          "dist/js/app.js": "src/script/app.js",
        },
      },
    },
    watch: {
      css: {
        files: "**/*.scss",
        tasks: ["sass", "postcss", "cssmin"],
      },
      js: {
        files: "src/script/*.js",
        tasks: ["babel"],
      },
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ['dist/css/*.css', 'dist/js/*.js', '*.html']
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");

  grunt.registerTask("default", ["browserSync", "watch"]);
};
