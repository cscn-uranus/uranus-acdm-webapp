require('angular');

require('@progress/kendo-ui/js/kendo.angular');
require('@progress/kendo-ui/js/kendo.datepicker');

var homeNavComponent = require('./home-nav.component');
var homeGridComponent = require('./home-grid.component');

angular.module('homeModule', ['kendo.directives']).
  component('homeNav', homeNavComponent).
  component('homeGrid', homeGridComponent);

module.exports = 'homeModule';

