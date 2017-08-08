require('@progress/kendo-ui/css/web/kendo.common-material.css');
require('@progress/kendo-ui/css/web/kendo.material.css');
require('angular');

var homeModule = require('./home/home.module');

var acdmAppComponent = require('./acdm-app.component');

angular.module('acdmModule', [homeModule]).
  component('acdmApp', acdmAppComponent);

module.exports = 'acdmModule';
