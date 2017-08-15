require('angular-mocks');
require('./app.module');

describe('acdmApp', function() {
  // Load the module that contains the `phoneList` component before each test
  beforeEach(angular.mock.module('appModule'));

  // Test the controller
  describe('AcdmAppController', function() {
    it('title should be acdm-app',
      angular.mock.inject(function($componentController) {
        var scope = {};
        $componentController('acdmApp', {$scope: scope});
        expect(scope.title).toBe('acdm-app');
      }));
  });
});
