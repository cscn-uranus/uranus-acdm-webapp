require('@progress/kendo-ui/js/kendo.core');
require('@progress/kendo-ui/js/kendo.angular');
require('@progress/kendo-ui/js/kendo.datepicker');
require('@progress/kendo-ui/js/kendo.menu');

var homeHeaderComponent = require('./home-header.component');
var homeNavComponent = require('./home-nav.component');
var homeGridComponent = require('./home-grid.component');
var homeRightComponent = require('./home-right.component');
var homeFooterComponent = require('./home-footer.component');

angular.module('homeModule', ['kendo.directives']).
  component('homeHeader', homeHeaderComponent).
  component('homeNav', homeNavComponent).
  component('homeGrid', homeGridComponent).
  component('homeRight', homeRightComponent).
  component('homeFooter', homeFooterComponent);

module.exports = 'homeModule';

