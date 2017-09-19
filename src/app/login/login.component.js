var LoginController = function(
  $http, $scope, $state, AuthService, $rootScope, ConstantConfig) {
  // requesting the token by usename and passoword
  // 添加回车按键与登陆按钮绑定事件
  $scope.myKeyup = function(e) {
    var keycode = window.event ? e.keyCode : e.which;
    if (keycode === 13) {
      $scope.login();
    }
  };
  $scope.login = function() {
    $http({
      url: ConstantConfig.AUTHENTICATE_SERVICE_URL,
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
        var str = [];
        for (var p in obj) {
          str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
        return str.join('&');
      },
      data: {
        username: $scope.username,
        password: $scope.password,
      },
    }).then(
      function(res) {
        $scope.password = null;
        // checking if the token is available in the response
        if (res.data.token) {
          $scope.message = '';
          // setting the Authorization Bearer token with JWT token
          $http.defaults.headers.common['Authorization'] = 'Bearer ' +
            res.data.token;
          // setting the user in AuthService
          AuthService.user = res.data.user;
          AuthService.token= res.data.token;
          $rootScope.$broadcast('LoginSuccessful');
          // going to the auth page
          $state.go('auth');
          console.log('login successful!');
        } else {
          // if the token is not present in the response then the
          // authentication was not successful. Setting the error message.
          $scope.message = 'Authetication Failed !';
          console.log('login failed!');
        }
      }, function(errResponse) {
        $scope.message = '登陆失败！';
      }
    );
  };
};

var loginComponent = {
  template: require('./login.component.html'),
  controller: LoginController,
};
module.exports = loginComponent;

