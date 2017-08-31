var LoginController = function(
  $http, $scope, $state, AuthService, $rootScope, ConstantConfig) {
  $scope.login = function() {
    // requesting the token by usename and passoword
    // console.log('login');
    $http({
      url: ConstantConfig.AUTHENTICATE_SERVICE_URL,
      method: 'POST',
      params: {
        username: $scope.username,
        password: $scope.password,
      },
    }).then(
      function(res) {
        $scope.password = null;
        console.log(res.data.token);
        // checking if the token is available in the response
        if (res.data.token) {
          $scope.message = '';
          // setting the Authorization Bearer token with JWT token
          $http.defaults.headers.common['Authorization'] = 'Bearer ' +
            res.token;
          // setting the user in AuthService
          AuthService.user = res.data.user;
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
        $scope.message = 'Authetication Failed !';
      }
    )
    // .catch(function(res) {
    //   $scope.message = 'Authetication Failed !';
    // })
    ;
  };
};

var loginComponent = {
  template: require('./login.component.html'),
  controller: LoginController,
};

module.exports = loginComponent;

