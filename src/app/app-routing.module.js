require('@uirouter/angularjs');

var appModule = angular.module('appRoutingModule', ['ui.router']);

appModule.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>',
  };

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>',
  };

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});

module.exports = 'appRoutingModule';
