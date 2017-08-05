require('angular');

require('@progress/kendo-ui/js/kendo.angular');
require('@progress/kendo-ui/js/kendo.datepicker');

var homeComponent = require('./home.component');

angular.module('acdmHome', ['kendo.directives']).
  component('acdmHome', homeComponent);

module.exports = 'acdmHome';

