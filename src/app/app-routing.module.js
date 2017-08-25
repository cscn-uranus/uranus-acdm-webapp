require('jquery');
require('@uirouter/angularjs');
// require('login/loginModule');
var appRoutingModule = angular.module('appRoutingModule', ['ui.router']);
// 路由控制

appRoutingModule.config(function(
  $stateProvider, $urlRouterProvider, $httpProvider) {
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  $urlRouterProvider.otherwise('/');
  $stateProvider.
    state('index', {
      url: '/',
      name: 'index',
      views: {
        '': {
          template: require('./app.login.html'),
        },
      },
      // templateUrl: './app.login.html',
      // controller: 'loginController',
      // data: {
      //   loginCheck: false,
      // },
    }).
    state('main', {
      url: '/main',
      name: 'main',
      views: {
        '': {
          template: require('./home/home.component.html'),
        },
      },
      // templateUrl: './home/home.component.html',
      // data: {
      //   loginCheck: true,
      // },
    });
});

appRoutingModule.run(
  function($rootScope, $state, $stateParams, $location, auth, $window) {
    // $rootScope.$state = $state;
    // $rootScope.$stateParams = $stateParams;
    // $rootScope.go = function(state) {
    //   $state.go(state);
    // };
    // 路由访问控制
    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams) {
        // 路由访问控制
        if (toState.name != 'permission-limit' &&
          !auth.isAccessUrl(toState.name)) {
          var user = angular.fromJson($window.sessionStorage.USER);
          console.log('control user:' + user);
          if (user == null) {
            // 验证失败，应跳转至登录界面
            $location.path('/index');
          }
          event.preventDefault();
          $state.go('index');
        }
      });
  });
/*
 * 自定义服务，基于角色的访问控制
 */
appRoutingModule.service('auth', [
  '$http', '$window', function($http, $window) {
    var roles = []; // 应从后端数据库获取的角色表
    // 应从后端获取的角色权限Url映射表，结构为{"role":["/page1", "/page2"……]}
    var urlPermissions = {};
    // 去后端获取
    (function() {
      // 此处为测试方便
      roles = ['ROLE_ADMIN', 'ROLE_USER'];
      urlPermissions = {
        // 管理员可以访问所用页面，此处实现了通配符
        'ROLE_ADMIN': ['*'],
        // 普通用户可以访问**路径下的界面
        // 'ROLE_USER': ['tab1', 'tab2', 'permission-limit'],
        'ROLE_USER': ['*'],
      };
    })();

    function convertState(state) {
      return state.replace('.', '\\\.').replace('*', '.*');
    }

    return {
      // 是否有访问某url的权限
      isAccessUrl: function(url) {
        var user = angular.fromJson($window.sessionStorage.USER);
        console.log('user:' + user);
        for (var role in roles) {
          if (user.role.toLowerCase() == roles[role].toLowerCase()) {
            for (var i in urlPermissions[roles[role]]) {
              var regx = eval(
                '/' + convertState(urlPermissions[roles[role]][i]) + '/');
              if (regx.test(url)) {
                return true;
              }
            }
          }
        }
        return false;
      },
    };
  }]);

module.exports = 'appRoutingModule';


