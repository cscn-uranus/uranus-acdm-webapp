module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'node': true,
  },
  'extends': 'google',
  'globals': {
    'angular': true,
    'require': true,
  },
  'rules': {
    'no-var': 0,
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'windows',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
  },
};
