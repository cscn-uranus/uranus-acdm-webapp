var homeNavController = function(
  $http, $scope, AuthService, $state, $rootScope) {
  $scope.menuOrientation = 'horizontal';
  $scope.user = AuthService.user;
  $scope.$on('LoginSuccessful', function() {
    console.log('scope on login');
    $scope.user = AuthService.user;
  });
  $scope.$on('LogoutSuccessful', function() {
    $scope.user = null;
  });
  $scope.logout = function() {
    AuthService.user = null;
    $rootScope.$broadcast('LogoutSuccessful');
    $state.go('login');
  };
};
var homeNavComponent = {
  template: require('./home-nav.component.html'),
  controller: homeNavController,
};

module.exports = homeNavComponent;
