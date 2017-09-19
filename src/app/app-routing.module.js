require('@uirouter/angularjs');
require('@uirouter/angularjs/release/stateEvents');
var homeGridComponent = require('./home/home-grid.component');
var appRoutingModule = angular.module('appRoutingModule',
  ['ui.router', 'ui.router.state.events']);

appRoutingModule.config(function(
  $stateProvider, $urlRouterProvider, $locationProvider) {
// $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  $urlRouterProvider.otherwise('/page-not-found');
  $stateProvider.
    state('auth', {
      url: '/home',
      name: 'home',
      component: 'home',
    }).
    state('login', {
      url: '/',
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
  // $locationProvider.html5Mode(true);
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
// 监听地址改变
appRoutingModule.run(function(AuthService, $rootScope, $state) {
  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams) {
      if (!AuthService.user) {
        // To avoiding the infinite looping of state change we have to add a
        // if condition.
        if (toState.name != 'login') {
          event.preventDefault();
          $state.go('login');
        }
      } else {
        // checking the user is authorized to view the states
        if (toState.data && toState.data.role) {
          var hasAccess = false;
          for (var i = 0; i < AuthService.user.roles.length; i++) {
            var role = AuthService.user.roles[i];
            if (toState.data.role == role) {
              hasAccess = true;
              break;
            }
          }
          if (!hasAccess) {
            event.preventDefault();
            $state.go('access-denied');
          }
        } else {
          console.log('error!!!!!!!');
        }
      }
    });
});

module.exports = 'appRoutingModule';


