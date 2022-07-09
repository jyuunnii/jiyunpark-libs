const baseConfig = require('../../jest.config');
const pkg = require('./package.json');

module.exports = {
  ...baseConfig,
  displayName: {
    name: `${pkg.name}`,
    color: 'blue',
  },
};
