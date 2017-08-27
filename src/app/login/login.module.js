require('@progress/kendo-ui/js/kendo.core');
require('@progress/kendo-ui/js/kendo.angular');
require('@progress/kendo-ui/js/kendo.validator');
require('@progress/kendo-ui/js/kendo.button');
require('./login.component.scss');
var configModule = require('../config/config.module');

var loginComponent = require('./login.component');

angular.module('loginModule', ['kendo.directives', configModule]).
  component('login', loginComponent);

module.exports = 'loginModule';
