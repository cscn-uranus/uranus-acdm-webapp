var AuthService = require('./auth.service');

angular.module('serviceModule', []).
  service('AuthService', AuthService);

module.exports = 'serviceModule';
