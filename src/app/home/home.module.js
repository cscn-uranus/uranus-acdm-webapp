require('@progress/kendo-ui/js/kendo.core');
require('@progress/kendo-ui/js/kendo.angular');
require('@progress/kendo-ui/js/kendo.datepicker');
require('@progress/kendo-ui/js/kendo.menu');

var homeNavComponent = require('./home-nav.component');
var homeGridComponent = require('./home-grid.component');

angular.module('homeModule', ['kendo.directives']).
  component('homeNav', homeNavComponent).
  component('homeGrid', homeGridComponent);

module.exports = 'homeModule';

