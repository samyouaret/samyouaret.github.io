module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }]
        }),
        require('@fullhuman/postcss-purgecss')({
            content: [
                './src/js/**/*.js',
                './src/js/*.js',
                './eleventy/*.njk',
                './eleventy/*.liquid',
                './eleventy/*.md',
                './eleventy/**/*.njk',
                './eleventy/**/*.liquid',
                './eleventy/**/*.md',
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
    ]
}