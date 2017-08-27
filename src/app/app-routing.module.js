require('@uirouter/angularjs');

var appRoutingModule = angular.module('appRoutingModule',
  ['ui.router']);

appRoutingModule.config(function(
  $stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  $urlRouterProvider.otherwise('/page-not-found');
  $stateProvider.
    state('auth', {
      url: '/',
      name: 'home',
      component: 'home',
    }).
    state('login', {
      url: '/login',
      name: 'login',
      component: 'login',
    }).
    state('access-denied', {
      url: '/access-denied',
      name: 'accessDenied',
      component: 'accessDenied',
    }).
    state('page-not-found', {
      url: '/page-not-found',
      name: 'pageNotFound',
      component: 'pageNotFound',
    });
  $locationProvider.html5Mode(true);
});
appRoutingModule.run(
  function($transitions) {
    $transitions.onStart({to: 'auth.**'}, function(trans) {
      var auth = trans.injector().get('AuthService');
      if (!auth.user) {
        return trans.router.stateService.target('login');
      }
    });
  }
);
module.exports = 'appRoutingModule';


