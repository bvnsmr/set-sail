const cracoConfig = require('./templates/cracoConfigTemplate');
const tailwindConfig = require('./templates/tailwindConfigTemplate');
const tailwindCss = require('./templates/tailwindCssTemplate');
const appTemplate = require('./templates/appTemplate');

module.exports = {
  dependencies: [],
  devDependencies: [
    'tailwindcss@npm:@tailwindcss/postcss7-compat',
    '@tailwindcss/postcss7-compat',
    'postcss@^7',
    'autoprefixer@^9',
    '@craco/craco',
  ],
  scripts: [
    { key: 'start', value: 'craco start' },
    { key: 'build', value: 'craco build' },
    { key: 'test', value: 'craco test' },
  ],
  templates: [
    { path: './craco.config.js', file: cracoConfig },
    { path: './tailwind.config.js', file: tailwindConfig },
    { path: './src/index.css', file: tailwindCss },
    { path: './src/App.js', file: appTemplate },
  ],
};
