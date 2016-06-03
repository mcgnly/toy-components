// module.export = function(grunt) {
//     require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

//     grunt.initConfig({
//         //     "babel": {
//         //         options: {
//         //             sourceMap: true
//         //         },
//         //         dist: {
//         //             files: {
//         //                 "dist/app.js": "entities/*.js"
//         //             }
//         //         }
//         //     }
//     });
//     grunt.registerTask("default", []);
// }


// module.exports = function(grunt) {

//   // Project configuration.
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json'),
//     uglify: {
//       options: {
//         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//       },
//       build: {
//         src: 'src/<%= pkg.name %>.js',
//         dest: 'build/<%= pkg.name %>.min.js'
//       }
//     }
//   });

//   // Load the plugin that provides the "uglify" task.
//   grunt.loadNpmTasks('grunt-contrib-uglify');

//   // Default task(s).
//   grunt.registerTask('default', ['uglify']);

// };

module.exports = grunt => {     // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
        
    require('load-grunt-tasks')(grunt);

        
    grunt.initConfig({

        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/app.js": "entities/Tiger.js"
                }
            }
        }
    });    
    grunt.registerTask('default', ['babel']);
};