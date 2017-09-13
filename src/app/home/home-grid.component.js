var homeGridController = function($scope) {
  $scope.name = 'grid';
};
var homeGridComponent = {
  template: require('./home-grid.component.html'),
  controller: homeGridController,
};
module.exports = homeGridComponent;
