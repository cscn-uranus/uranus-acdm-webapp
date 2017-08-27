var ConstantConfig = require('./constant.config');

angular.module('configModule', []).
  constant('ConstantConfig', ConstantConfig);

module.exports = 'configModule';
