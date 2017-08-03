'use strict';
var angular = require('angular');
var homeComponent = require('./home/home.component');
require('kendo.angular');
require('kendo.core');

var acdmApp = angular.module('acdmApp', ['kendo.directives', homeComponent]);

module.exports = acdmApp;
