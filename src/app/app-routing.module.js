require('@uirouter/angularjs');

var appRoutingModule = angular.module('appRoutingModule', ['ui.router']);

appRoutingModule.run(function($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
});
appRoutingModule.config(function(
  $stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/index');
  $stateProvider.state('index', {
    url: '/index',
    views: {
      '': {
        template: require('./app.login.html'),
      },
    },
  }).state('main', {
    url: '/main',
    views: {
      '': {
        template: require('./home/home.component.html'),
      },
    },
  });
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});
module.exports = 'appRoutingModule';
// appModule.config(function($stateProvider) {
//   var helloState = {
//     name: 'hello',
//     url: '/hello',
//     template: '<h3>hello world!</h3>',
//   };
//
//   var aboutState = {
//     name: 'about',
//     url: '/about',
//     template: '<h3>Its the UI-Router hello world app!</h3>',
//   };
//
//   $stateProvider.state(helloState);
//   $stateProvider.state(aboutState);
// });


