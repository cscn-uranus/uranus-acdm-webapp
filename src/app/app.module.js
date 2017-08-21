require('jquery');
require('angular');
require('angular-cookies');
require('angular-resource');
var loginModule = require('./login/login.module');
var appRoutingModule = require('./app-routing.module');
var homeModule = require('./home/home.module');
var acdmAppComponent = require('./app.component');

angular.module('appModule', [homeModule, appRoutingModule, loginModule]).
  component('acdmApp', acdmAppComponent);

module.exports = 'appModule';
