require('angular');
require('@progress/kendo-ui/js/kendo.core');
require('@progress/kendo-ui/js/kendo.angular');
require('@progress/kendo-ui/js/kendo.menu');


var homeNavController = function($scope) {
  $scope.menuOrientation = 'horizontal';
};
var homeNavComponent = {
  template: require('./home-nav.component.html'),
  controller: homeNavController,
};

module.exports = homeNavComponent;
