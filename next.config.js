
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['eNRqpigfTJBxfv98VhNj1b'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  