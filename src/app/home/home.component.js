var homeController = function($scope) {
  $scope.orientation = 'horizontal';
};
var homeComponent = {
  template: require('./home.component.html'),
  controller: homeController,
};
module.exports = homeComponent;
