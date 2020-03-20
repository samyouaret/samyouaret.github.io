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
                './eleventy/_includes/*.njk',
                './eleventy/*.md',
                './eleventy/**/*.md',
                './eleventy/**/*.liquid',
                './eleventy/**/*.njk',
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
    ]
}