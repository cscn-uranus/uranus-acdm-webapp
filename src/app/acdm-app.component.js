require('angular');

var acdmAppController = function AcdmAppController($scope) {
  $scope.title = 'acdm-app';
};
var acdmAppComponent = {
  template: require('./acdm-app.component.html'),
  controller: acdmAppController,
};

module.exports = acdmAppComponent;
