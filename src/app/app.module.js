require('jquery');
require('angular');
require('angular-cookies');
require('angular-resource');
require('./app.component.scss');
require('@uirouter/angularjs');
require('@uirouter/angularjs/release/stateEvents');

var appRoutingModule = require('./app-routing.module');
var loginModule = require('./login/login.module');
var homeModule = require('./home/home.module');
var errorModule = require('./error/error.module');
var serviceModule = require('./service/service.module');
var acdmAppComponent = require('./app.component');

var appModule = angular.module('appModule',
  [
    appRoutingModule,
    homeModule,
    loginModule,
    errorModule,
    serviceModule,
    'ui.router',
    'ui.router.state.events']
).component('acdmApp', acdmAppComponent);

// appModule.run(function(AuthService, $rootScope, $state) {
//   $rootScope.$on('$stateChangeStart',
//     function(event, toState, toParams, fromState, fromParams) {
//       console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
//       console.log('authuser is:' + AuthService.user);
//       if (!AuthService.user) {
//         // To avoiding the infinite looping of state change we have to add a
//         // if condition.
//         if (toState.name != 'login') {
//           event.preventDefault();
//           $state.go('login');
//         }
//       } else {
//         // checking the user is authorized to view the states
//         if (toState.data && toState.data.role) {
//           var hasAccess = false;
//           for (var i = 0; i < AuthService.user.roles.length; i++) {
//             var role = AuthService.user.roles[i];
//             if (toState.data.role == role) {
//               hasAccess = true;
//               break;
//             }
//           }
//           if (!hasAccess) {
//             event.preventDefault();
//             $state.go('access-denied');
//           }
//         } else {
//           console.log('error!!!!!!!');
//         }
//       }
//     });
// });

module.exports = 'appModule';
