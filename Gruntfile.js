module.exports = function (grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('compile-css', ['sass:app', 'autoprefixer:app']);
    grunt.registerTask('compile-js', ['browserify:app', 'uglify:app']);

    grunt.registerTask('init', ['compile-js', 'compile-css']);

    grunt.registerTask('default', ['watch']);

    grunt.initConfig({

        /**
         * Watch
         */
        watch: {
            css: {
                files: ['src/sass/*.scss','src/sass/**/*.scss','src/sass/**/**/*.scss'],
                tasks: ['compile-css'],
                options: {
                    interrupt: true,
                    livereload: 35729
                }
            },
            javascript: {
                files: ['src/js/*.js','src/js/**/*.js','src/js/**/**/*.js'],
                tasks: ['compile-js'],
                options: {
                    interrupt: true,
                    livereload: 35729
                }
            }
        },

        /**
         * CSS
         */
        sass: {
            app: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'src/css/style.min.css': 'src/sass/style.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                // Task-specific options go here.
            },
            app: {
                src: 'src/css/style.min.css',
                dest: 'web/assets/style.min.css'
            }
        },

        /**
         * Javascript
         */
        browserify: {
            app: {
                files: {
                    'web/assets/app.js': ['src/js/app.js']
                }
            }
        },
        uglify: {
            app: {
                files: {
                    'web/assets/app.min.js': ['web/assets/app.js']
                }
            }
        }
    });
};
