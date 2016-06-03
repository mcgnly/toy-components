module.exports = {    
    // entry: "./entities/Tiger.js",
    //     output: {        
    //     path: "dist",
    //             filename: "app.js"    
    // },

    entry: "./test/toytest.js",
        output: {        
        path: "testdist",
                filename: "apptest.js"    
    },

    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015']
            }
        }]  
    }
};