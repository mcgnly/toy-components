module.exports = grunt => {     // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
        
    require('load-grunt-tasks')(grunt);

        
    grunt.initConfig({

        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/app.js": "zoo.js"
                }
            }
        }
    });    
    grunt.registerTask('default', ['babel']);
};