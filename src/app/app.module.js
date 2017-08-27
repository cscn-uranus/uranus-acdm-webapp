require('jquery');
require('angular');
require('angular-cookies');
require('angular-resource');
require('./app.component.scss');

var appRoutingModule = require('./app-routing.module');

var loginModule = require('./login/login.module');
var homeModule = require('./home/home.module');
var errorModule = require('./error/error.module');
var serviceModule = require('./service/service.module');
var acdmAppComponent = require('./app.component');

angular.module('appModule',
  [appRoutingModule, homeModule, loginModule, errorModule, serviceModule]
).component('acdmApp', acdmAppComponent);

module.exports = 'appModule';
