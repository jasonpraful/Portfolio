const path = require('path')
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  optimizedImages,
 { sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },}
])