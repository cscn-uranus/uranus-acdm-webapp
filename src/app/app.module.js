require('angular');

var appRoutingModule = require('./app-routing.module');

var homeModule = require('./home/home.module');

var acdmAppComponent = require('./app.component');

angular.module('appModule', [homeModule, appRoutingModule]).
  component('acdmApp', acdmAppComponent);

module.exports = 'appModule';
