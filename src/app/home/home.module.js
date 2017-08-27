require('@progress/kendo-ui/js/kendo.core');
require('@progress/kendo-ui/js/kendo.angular');
require('@progress/kendo-ui/js/kendo.datepicker');
require('@progress/kendo-ui/js/kendo.menu');
require('./home.component.scss');
var homeComponent = require('./home.component');
var homeFooterComponent = require('./home-footer.component');
var homeGridComponent = require('./home-grid.component');
var homeHeaderComponent = require('./home-header.component');
var homeNavComponent = require('./home-nav.component');
var homeRightComponent = require('./home-right.component');

angular.module('homeModule', ['kendo.directives']).
  component('home', homeComponent).
  component('homeFooter', homeFooterComponent).
  component('homeGrid', homeGridComponent).
  component('homeHeader', homeHeaderComponent).
  component('homeNav', homeNavComponent).
  component('homeRight', homeRightComponent);

module.exports = 'homeModule';

