module.exports = {
    entry: {
           main: './app.js'
        },
    output : {
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:  /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015']
                 }
            }
            ]
        }

   
    }; 