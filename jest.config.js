module.exports = {
  transform: {
    '^.+\\.ts$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  testRegex: '\\.test\\.(js|ts)$',
  verbose: true,
};
