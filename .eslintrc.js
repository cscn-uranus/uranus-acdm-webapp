module.exports = {

  'extends': 'google',
  'env': {
    'browser': true,
    'es6': true,
  },
  'parserOptions': {
    'sourceType': 'module',
  },
  'globals': {
    'angular': true,
    'require': true,
  },
  'rules': {
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
