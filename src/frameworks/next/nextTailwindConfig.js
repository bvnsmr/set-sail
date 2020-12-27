const postcssConfig = require('./templates/postcssConfigTemplate');
const tailwindConfig = require('./templates/tailwindConfigTemplate');
const tailwindCss = require('./templates/tailwindCssTemplate');

module.exports = {
  dependencies: [],
  devDependencies: [
    'tailwindcss@latest',
    'postcss@latest',
    'autoprefixer@latest',
  ],
  scripts: [],
  templates: [
    { path: './postcss.config.js', file: postcssConfig },
    { path: './tailwind.config.js', file: tailwindConfig },
    { path: './styles/globals.css', file: tailwindCss },
  ],
};
