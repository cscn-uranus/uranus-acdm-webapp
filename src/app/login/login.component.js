var loginController = function(
  $rootScope, $http, $location, $window, ConstantConfig) {
  var self = this;
  var REST_LOGIN_URI = ConstantConfig.SERVICE_URL;
  var authenticate = function(credentials, callback) {
    var headers = credentials ? {
      authorization: 'Basic '
      + btoa(credentials.username + ':'
        + credentials.password),
    } : {};
    $http.get(REST_LOGIN_URI, {
      headers: headers,
    }).then(function(response) {
      // 从后台返回的数据
      // console.log(response.data);
      // 在sessionStorage中存储用户信息
      $window.sessionStorage.USER = angular.toJson({
        'username': response.data.username,
        'role': response.data.roles,
      });
      console.log('sessionUser:' + $window.sessionStorage.USER);
      if (response.data.username) {
        $rootScope.authenticated = true;
      } else {
        $rootScope.authenticated = false;
      }
      callback && callback($rootScope.authenticated);
    }, function() {
      $rootScope.authenticated = false;
      callback && callback(false);
    });
  };
  authenticate();
  self.credentials = {};
  self.login = function() {
    authenticate();
    authenticate(self.credentials, function(authenticated) {
      if (authenticated) {
        console.log('Login succeeded');
        $location.path('/main');
        self.error = false;
        $rootScope.authenticated = true;
      } else {
        console.log('Login failed');
        $location.path('/index');
        self.error = true;
        $rootScope.authenticated = false;
      }
    });
  };
  self.logout = function() {
    $http.post('logout', {}).finally(function() {
      $rootScope.authenticated = false;
      $location.path('/index');
    });
  };
};

var loginComponent = {
  template: require('./login.component.html'),
  controller: loginController,
  controllerAs: 'controller',
};

module.exports = loginComponent;


