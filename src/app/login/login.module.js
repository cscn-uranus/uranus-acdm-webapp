/**
 * Created by Zeus on 2017/8/8.
 */
require('@progress/kendo-ui/js/kendo.core');
require('@progress/kendo-ui/js/kendo.angular');
require('@progress/kendo-ui/js/kendo.validator');
require('@progress/kendo-ui/js/kendo.button');
require('./login.component.scss');
// require('./supersized.css');

var loginComponent = require('./login.component');
// 备份
// angular.module('loginModule', ['kendo.directives']).
//   component('login', loginComponent);

// .config(function($httpProvider) {
//   $httpProvider.defaults.header.common
// ['X-Requested-With']='XMLHttpRequest';
// });

var loginModuleConfig = {
  /* When set to false a query parameter is used to pass on the access token.
   * This might be desirable if headers don't work correctly in some
   * environments and is still secure when using https. */
  useAccessTokenHeader: true,
  debug: true,
};

angular.module('loginModule',
  ['kendo.directives', 'ngCookies', 'loginModule.services']).
  config(['$locationProvider', '$httpProvider'],
    function($locationProvider, $httpProvider) {
      $locationProvider.hashPrefix('!');
      $httpProvider.interceptors.push(function($q, $rootScope, $location) {
        return {
          'responseError': function(rejection) {
            var status = rejection.status;
            var config = rejection.config;
            var method = rejection.method;
            var url = config.url;
            if (status == 401) {
              $location.path('/login');
            } else {
              $rootScope.error = method + 'on' + url + 'failed with status' +
                status;
            }
            return $q.reject(rejection);
          },
        };
      });
      $httpProvider.interceptors.push(function($q, $rootScope, $location) {
        return {
          'request': function(config) {
            var isResetCall = config.url.indexOf('rest') == 0;
            if (isResetCall && angular.isDefined($rootScope.accessToken)) {
              var accessToken = $rootScope.accessToken;
              if (loginModuleConfig.useAccessTokenHeader) {
                config.headers['X-Access-Token'] = accessToken;
              } else {
                config.url = config.url + '?token' + accessToken;
              }
            }
            return config || $q.when(config);
          },
        };
      }
      );
    }).
  run(function($rootScope, $location, $cookieStore, UserService) {
    $rootScope.$on('$viewContentLoaded', function() {
      delete $rootScope.error;
    });

    $rootScope.hasRole = function(role) {
      if ($rootScope.user === undefined) {
        return false;
      }
      if ($rootScope.user.roles[role] === undefined) {
        return false;
      }
      return $rootScope.user.roles[role];
    };

    $rootScope.logout = function() {
      delete $rootScope.user;
      delete $rootScope.accessToken;
      $cookieStore.remove('accessToken');
      $location.path('/login');
    };

    var originalPath= $loacation.path();
    $loacation.path('/login');
    var accessToken=$cookieStore.get('accessToken');
    if(accessToken!= undefined) {
      $rootScope.accessToken=accessToken;
      UserService.get(function(user) {
        $rootScope.user=user;
        $location.path(originalPath);
      });
    }

    $rootScope.initialized = true;
  });
var services = angular.module('exampleApp.services', ['ngResource']);

services.factory('UserService', function($resource) {

  return $resource('rest/user/:action', {},
    {
      authenticate: {
        method: 'POST',
        params: {'action': 'authenticate'},
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      },
    }
  );
});

component('login', loginComponent);

module.exports = 'loginModule';
