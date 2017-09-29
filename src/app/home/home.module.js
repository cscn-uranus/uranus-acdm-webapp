require('@progress/kendo-ui/js/cultures/kendo.culture.zh-CN');
require('@progress/kendo-ui/js/messages/kendo.messages.zh-CN');
require('@progress/kendo-ui/js/kendo.core');
require('@progress/kendo-ui/js/kendo.angular');
require('@progress/kendo-ui/js/kendo.datepicker');
require('@progress/kendo-ui/js/kendo.menu');
require('@progress/kendo-ui/js/kendo.grid');
require('@progress/kendo-ui/js/kendo.datetimepicker');
require('@progress/kendo-ui/js/kendo.splitter');
require('@progress/kendo-ui/js/kendo.data');
require('@progress/kendo-ui/js/kendo.dataviz');
require('./home.component.scss');

kendo.culture('zh-CN');

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

