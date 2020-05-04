const pluginRss = require("@11ty/eleventy-plugin-rss");
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
    // variables will be parsed inside permalink string
    eleventyConfig.setDynamicPermalinks(true);
    // merge local data and global data ,default local ovverdie global data
    eleventyConfig.setDataDeepMerge(true);
    // add syntax parser and highlighter form markdown 
    eleventyConfig.addPlugin(pluginSyntaxHighlight);
    // add plugin to build rss feed
    eleventyConfig.addPlugin(pluginRss);
    // eleventyConfig.addPlugin(pluginNavigation);
    // when changing input must specify input directory when copying files **eleventy
    eleventyConfig.addPassthroughCopy({ "eleventy/blog/**/*.jpg": "blog/images" });
    eleventyConfig.addPassthroughCopy({ "eleventy/blog/**/*.png": "blog/images" });
    eleventyConfig.addPassthroughCopy({ "eleventy/blog/**/*.gif": "blog/images" });
    eleventyConfig.addPassthroughCopy({ "eleventy/blog/**/*.css": "blog/images" });
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

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
        if (n < 0) {
            return array.slice(n);
        }

        return array.slice(0, n);
    });

    // make fereindly url
    eleventyConfig.addFilter("slugify", function (value) {
        return value.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .trim("")
            .replace(/ +/g, '-');
    });

    eleventyConfig.addFilter("dump", function (value) {
        console.log(value);
    });

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc+1' }).toFormat('yyyy-LL-dd');
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc+1' }).toFormat("LLL, dd yyyy");
    });

    // eleventyConfig.addCollection("myPosts", function (collection) {
    //     console.log(collection.getAll());
    //     return [];
    // });
    // add a collection will be accessible form collections.TagList
    eleventyConfig.addCollection("tagList", require("./eleventy/_11ty/getTagList"));

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

        dir: {
            input: "eleventy",
            includes: "_includes",
            data: "_data",
            output: "public"
        }

    };
};