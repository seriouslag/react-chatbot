/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 120,
  singleQuote: true,
  semi: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  useTabs: false,
  trailingComma: 'all',
  tailwindConfig: './tailwind.config.js',
  plugins: ['prettier-plugin-tailwindcss'],
};
