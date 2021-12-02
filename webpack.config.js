module.exports = {
    entry: './entrypointFile.js',
    module: {
        parser: {
            javascript: {
                commonjsMagicComments: true,
            },
        },
        rules: [{
            test: /\.properties$/,
            use: {loader: './localize-loader.js'}
        }]
    },

}
