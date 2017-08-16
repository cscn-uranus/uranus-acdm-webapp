/**
 * Created by Zeus on 2017/8/8.
 */
require('@progress/kendo-ui/js/kendo.core');
require('@progress/kendo-ui/js/kendo.angular');
require('@progress/kendo-ui/js/kendo.validator');
require('@progress/kendo-ui/js/kendo.button');
require('./login.component.style.css');
// require('./supersized.css');


var loginComponent = require('./login.component');

angular.module('loginModule', ['kendo.directives']).
  component('login', loginComponent);
// .config(function($httpProvider) {
//   $httpProvider.defaults.header.common
// ['X-Requested-With']='XMLHttpRequest';
// });

module.exports = 'loginModule';
