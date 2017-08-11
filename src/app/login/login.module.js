/**
 * Created by Zeus on 2017/8/8.
 */
require('@progress/kendo-ui/js/kendo.core');
require('@progress/kendo-ui/js/kendo.angular');
require('@progress/kendo-ui/js/kendo.validator');
require('@progress/kendo-ui/js/kendo.button');
var loginComponent = require('./login.component');

angular.module('loginModule', ['kendo.directives']).
  component('login', loginComponent),

module.exports = 'loginModule';
