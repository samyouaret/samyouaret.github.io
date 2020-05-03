const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");
// use my markdown library to parse markdown an not depend on liquid
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {

    eleventyConfig.setLiquidOptions({
        dynamicPartials: true
    });
    eleventyConfig.addPlugin(pluginSyntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginNavigation);
    // when changing input must specify input directory when copying files **eleventy
    eleventyConfig.addPassthroughCopy({ "eleventy/blog/**/*.jpg": "blog/images" });
    eleventyConfig.addPassthroughCopy({ "eleventy/blog/**/*.png": "blog/images" });
    eleventyConfig.addPassthroughCopy({ "eleventy/blog/**/*.gif": "blog/images" });
    eleventyConfig.addPassthroughCopy({ "eleventy/blog/**/*.css": "blog/images" });
    // add plugin to build rss feed
    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
        if (n < 0) {
            return array.slice(n);
        }

        return array.slice(0, n);
    });

    // add markdown parsers
    let options = {
        html: true,
        breaks: false,
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
    // make fereindly url
    eleventyConfig.addFilter("slugify", function (value) {
        return value.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .trim("")
            .replace(/ +/g, '-');
    });

    eleventyConfig.addFilter("logger", function (value) {
        console.log(value);
    });
    
    eleventyConfig.addFilter("type", function (value) {
        console.log(typeof value);
    });

    eleventyConfig.setDynamicPermalinks(true);

    eleventyConfig.addFilter("slugifyDate", function (dateObj) {
        let year = dateObj.getFullYear();
        let date = dateObj.getUTCDate();
        let month = dateObj.getUTCMonth() + 1;
        return `${year}-${month}-${date}`;
    });

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
    });

    // eleventyConfig.addCollection("myPosts", function (collection) {
    //     console.log(collection.getAll());
    //     return [];
    // });

    eleventyConfig.addCollection("tagList", require("./eleventy/_11ty/getTagList"));
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