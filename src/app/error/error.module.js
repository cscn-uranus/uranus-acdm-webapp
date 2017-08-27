var accessDeniedComponent = require('./access-denied.component');
var pageNotFoundComponent = require('./page-not-found.component');

angular.module('errorModule', []).
  component('accessDenied', accessDeniedComponent).
  component('pageNotFound', pageNotFoundComponent)

module.exports = 'errorModule';
