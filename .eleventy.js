const pluginRss = require("@11ty/eleventy-plugin-rss");

// use my markdown library to parse markdown an not depend on liquid
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {

    eleventyConfig.setLiquidOptions({
        dynamicPartials: true
    });
    // add plugin to build rss feed
    eleventyConfig.addPlugin(pluginRss);

    // add markdown parsers
    let options = {
        html: true,
        breaks: true,
        linkify: true
    };
    // combine the two markdown parsers
    let markdownLib = markdownIt(options).use(markdownItAnchor);
    // set the markdown parser
    eleventyConfig.setLibrary("md", markdownLib);

    // Minify CSS
    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code);
    });
    // Minify CSS
    eleventyConfig.addFilter("slugify", function (value) {
        return value.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-').trim("-")
    });

    eleventyConfig.setDynamicPermalinks(true);
    eleventyConfig.addPassthroughCopy("build");
    eleventyConfig.addPassthroughCopy("images");

    eleventyConfig.addFilter("slugifyDate", function (dateObj) {
        let year = dateObj.getFullYear();
        let date = dateObj.getUTCDate();
        let month = dateObj.getUTCMonth() + 1;
        return `${year}/${month}/${date}`;
    });

    eleventyConfig.addCollection("myPosts", function (collection) {
        console.log(collection.getAll());
        return [];
    });
    // merge local data and global data ,default local ovverdie global data
    // eleventyConfig.setDataDeepMerge(true);
    return {
        templateFormats: [
            "md",
            "njk",
            "html",
            "liquid"
        ],
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",

        // These are all optional, defaults are shown:
        dir: {
            input: "eleventy",
            includes: "_includes",
            data: "_data",
            output: "public"
        }

    };
};