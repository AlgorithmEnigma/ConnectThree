const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');

module.exports = {
	plugins: [
		// Some plugins, like postcss-nested, need to run before Tailwind
		nested(),
		tailwind(),

		// But others, like autoprefixer, need to run after

		autoprefixer()
	]
};
