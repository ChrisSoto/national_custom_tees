import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import CleanCSS from 'clean-css';

export default function (eleventyConfig) {

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		extensions: "html",
		formats: ["webp"],
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
  });

  eleventyConfig.addPassthroughCopy({
    "global.out.css": "/css/global.css",
  });

  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
}

export const config = {
  dir: {
    input: "src",
    output: "dist"
  }
};