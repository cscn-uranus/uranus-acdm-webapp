var homeNavController = function($scope) {
  $scope.menuOrientation = 'horizontal';
};
var homeNavComponent = {
  template: require('./home-nav.component.html'),
  controller: homeNavController,
};

module.exports = homeNavComponent;
