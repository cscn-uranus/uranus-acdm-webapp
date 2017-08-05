require('angular');

var homeController = function() {
  this.birthday = null;
};
var homeComponent = {
  template: require('./home.component.html'),
  controller: homeController,
};

module.exports = homeComponent;
