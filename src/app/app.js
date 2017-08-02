import angular from 'angular';
import home from './home/home';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app',
  };
};

/** This is a description of the foo function. */
class AppCtrl {
  /** This is a description of the foo function. */
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [home]).
  directive('app', app).
  controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
