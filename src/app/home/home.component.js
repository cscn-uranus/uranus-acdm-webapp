var homeModule = require('./home.module');

var homeComponent = homeModule.
  component('home', {
    templateUrl: './home.component.html',
    controller: function homeController() {
      this.user = 'hello';
    },
  });

module.exports = homeComponent;
