/**
 * Created by Zeus on 2017/8/8.
 */
// var loginController = function($scope) {
//   // $scope.menuOrientation = 'horizontal';
//   // $scope.validate=function(event) {
//   //   event.preventDefault();
//   //   if($scope.validator.validate()){
//   //
//   //   }else{
//   //
//   //   }
//   // };
// };
// $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
var loginController = function($rootScope, $http, $location) {
  var self = this;

  var authenticate = function(credentials, callback) {
    var headers = credentials ? {authorization: 'Basic '
    + btoa(credentials.username + ':' + credentials.password),
    } : {};

    $http.get('user', {headers: headers}).then(function(response) {
      if (response.data.name) {
        $rootScope.authenticated = true;
      } else {
        $rootScope.authenticated = false;
      }
      callback && callback();
    }, function() {
      $rootScope.authenticated = false;
      callback && callback();
    });
  };

  authenticate();
  self.credentials = {};
  self.login = function() {
    authenticate(self.credentials, function() {
      if ($rootScope.authenticated) {
        $location.path('/main');
        self.error = false;
      } else {
        $location.path('/index');
        self.error = true;
      }
    });
  };
};

var loginComponent = {
  template: require('./login.component.html'),
  controller: loginController,
};

module.exports = loginComponent;


