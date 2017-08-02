import angular from 'angular';
import './home.scss';

let home = () => {
  return {
    template: require('./home.html'),
    controller: 'HomeCtrl',
    controllerAs: 'home'
  }
};

class HomeCtrl {
  constructor() {
    this.name = "Hello world!"
  }
}

const MODULE_NAME = 'home';

angular.module(MODULE_NAME, [])
  .directive('home', home)
  .controller('HomeCtrl', HomeCtrl);

export default MODULE_NAME;