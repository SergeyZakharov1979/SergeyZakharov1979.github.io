"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "build/css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 2 versions"
            ]}),
            require("css-mqpacker")({
              sort: true
            })
          ]
        },
        src: "build/css/*.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css",
            "build/js/*.js"
          ]
        },
        options: {
          server: "build/",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      html: {
        files: ["*.html"],
        tasks: ["copy:html", "htmlmin"]
      },
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss", "cssmin"]
      },
      js: {
        files: ["js/**/*.js"],
        tasks: ["copy:js", "concat", "uglify"]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: "build/css",
          src: ["*.css", "!*.min.css"],
          dest: "build/css",
          ext: ".min.css"
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          "build/index.html": "build/index.html"
        }
      }
    },

    concat: {
      options: {
        separator: ";"
      },
      dist: {
        src: ["build/js/picturefill.js", "build/js/script.js"],
        dest: "build/js/script.js"
      }
    },

    uglify: {
      my_target: {
        files: {
          "build/js/script.min.js": ["build/js/script.js"]
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimisationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif}"]
        }]
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**",
            "js/**",
            "*.html"
          ],
          dest: "build"
        }]
      },
      html: {
        files: [{
          expand: true,
          src: ["*.html"],
          dest: "build"
        }]
      },
      js: {
        files: [{
          expand: true,
          src: ["*js/**"],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    }

  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "postcss",
    "concat",
    "uglify",
    "cssmin",
    "imagemin",
    "htmlmin"
  ]);
};
