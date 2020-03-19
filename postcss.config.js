module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: [
                './src/js/**/*.js',
                './src/js/*.js',
                './eleventy/_includes/*.njk',
                './eleventy/*.md',
                './eleventy/**/*.md',
                './eleventy/_includes/*.liquid',
                './eleventy/_includes/*.liquid',
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
    ]
}