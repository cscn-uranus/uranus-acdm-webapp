var acdmAppController = function AcdmAppController($scope) {
  $scope.title = 'acdm-app';
};
var acdmAppComponent = {
  template: require('./app.component.html'),
  controller: acdmAppController,
};

module.exports = acdmAppComponent;
