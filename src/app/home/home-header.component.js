/*
 * Created by Zeus on 2017/8/16.
 */
var homeHeaderController = function(
  $http, $scope, AuthService, $state, $rootScope) {
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
var homeHeaderComponent = {
  template: require('./home-header.component.html'),
  controller: homeHeaderController,
};
module.exports = homeHeaderComponent;
