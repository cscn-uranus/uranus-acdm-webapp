/**
 * Created by Zeus on 2017/8/8.
 */
// var loginController = function($rootScope, $http, $location) {
//   var self = this;
//
//   var authenticate = function(credentials, callback) {
//     var headers = credentials ? {authorization: 'Basic '
//     + btoa(credentials.username + ':' + credentials.password),
//     } : {};
//
//     $http.get('user', {headers: headers}).then(function(response) {
//       if (response.data.name) {
//         $rootScope.authenticated = true;
//       } else {
//         $rootScope.authenticated = false;
//       }
//       callback && callback();
//     }, function() {
//       $rootScope.authenticated = false;
//       callback && callback();
//     });
//   };
//
//   authenticate();
//   self.credentials = {};
//   self.login = function() {
//     authenticate(self.credentials, function() {
//       if ($rootScope.authenticated) {
//         $location.path('/main');
//         self.error = false;
//       } else {
//         $location.path('/index');
//         self.error = true;
//       }
//     });
//   };
// };
// function loginController($scope, $rootScope, $location,
// $cookieStore, UserService) {
//   $scope.rememberMe=false;
// }
var loginController = function LoginController(
  $scope, $rootScope, $location, $cookieStore, UserService) {

  $scope.rememberMe = false;

  $scope.login = function() {
    UserService.authenticate($.param({
      username: $scope.username,
      password: $scope.password,
    }), function(authenticationResult) {
      var accessToken = authenticationResult.token;
      $rootScope.accessToken = accessToken;
      if ($scope.rememberMe) {
        $cookieStore.put('accessToken', accessToken);
      }
      UserService.get(function(user) {
        $rootScope.user = user;
        $location.path('/');
      });
    });
  };
};


var loginComponent = {
  template: require('./login.component.html'),
  controller: loginController,
};

module.exports = loginComponent;


