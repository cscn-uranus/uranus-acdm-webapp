import angular from 'angular';
import './home.scss';

let home = () => {
  return {
    template: require('./home.html'),
    controller: 'HomeCtrl',
    controllerAs: 'home',
  };
};

/** This is a description of the foo function. */
class HomeCtrl {
  /** This is a description of the foo function. */
  constructor() {
    this.name = 'Hello world!';
  }
}

const MODULE_NAME = 'home';

angular.module(MODULE_NAME, []).
  directive('home', home).
  controller('HomeCtrl', HomeCtrl);

export default MODULE_NAME;
