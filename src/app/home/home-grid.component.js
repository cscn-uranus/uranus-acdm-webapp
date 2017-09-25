var homeGridController = function($http, $scope, ConstantConfig, AuthService) {
  $scope.mainGridOptions = {
    dataSource: {
      // type: 'json',
      transport: {
        read: function(e) {
          $http({
            method: 'GET',
            url: ConstantConfig.FLIGHT_INFO_SERVICE_URL,
            // headers: {Authorization: auth},
          }).then(function success(response) {
            e.success(response.data);
          }, function error(response) {
            alert('cannot get the flightInformation');
            console.log(response);
          });
        },
        update: function(e) {
          $http({
            method: 'PUT',
            url: ConstantConfig.FLIGHT_INFO_SERVICE_URL,
            data: e.data,
            // headers: {Authorization: auth},
          }).then(function success(response) {
            e.success(response.data);
          }, function error(response) {
            alert('cannot edit the flightInformation');
            console.log(response);
          });
        },
        destroy: function(e) {
          $http({
            method: 'DELETE',
            url: ConstantConfig.FLIGHT_INFO_SERVICE_URL + '/' + e.data.id,
            // headers: {Authorization: auth},
          }).then(function success(response) {
            // console.log(response.data);
            e.success(response.data);
          }, function error(response) {
            alert('cannot delete the flightInformation');
            console.log(response);
          });
        },
        create: function(e) {
          $http({
            method: 'POST',
            url: ConstantConfig.FLIGHT_INFO_SERVICE_URL,
            data: e.data,
          }).then(function success(response) {
            console.log(response.data);
            e.success(response.data);
          }, function error(response) {
            alert('cannot create the flightInformation');
            console.log(e.data);
          });
        },
        parameterMap: function(options, operation) {
          if (operation !== 'read' && options.models) {
            return {models: kendo.stringify(options.models)};
          }
        },
      },
      batch: false,
      pageSize: 25,
      schema: {
        model: {
          id: 'id',
          fields: {
            id: {editable: false, nullable: false},
            flightId: {type: 'number'},
            actualArrivalAirport: {type: 'string'},
            actualDepartureAirport: {type: 'string'},
          },
        },
      },
    },
    selectable: true,
    toolbar: [
      {
        name: 'create',
        text: '添加',
      },
      {
        name: 'save',
        text: '保存',
      },
      {
        name: 'cancel',
        text: '取消',
      }],
    height: 845,
    resizable: true,
    allowCopy: true,
    sortable: true,
    editable: true,
    filterable: true,
    columns: [
      // {
      //   field: 'id',
      //   title: 'id',
      //   width: '50px',
      // },
      {
        field: 'flightId',
        title: 'FlightId',
        width: '120px',
        attributes: {
          'class': 'table-cell',
          // style: 'text-align: center; font-size: 14px',
        },
      }, {
        field: 'actualArrivalAirport',
        title: 'ActualArrivalAirport',
        width: '120px',
      }, {
        field: 'actualDepartureAirport',
        title: 'ActualDepartureAirport',
        width: '120px',
      }, {
        field: 'actualInBlockTime',
        title: 'ActualInBlockTime',
        width: '120px',
      }, {
        field: 'actualTakeOffTime',
        title: 'ActualTakeOffTime',
        width: '120px',
      }, {
        field: 'aircraftGateClosedTime',
        title: 'AircraftGateClosedTime',
        width: '120px',
      }, {
        field: 'aircraftStandbyApprovedTime',
        title: 'AircraftStandbyApprovedTime',
        width: '120px',
      }, {
        field: 'aircraftStandbyReadyTime',
        title: 'AircraftStandbyReadyTime',
        width: '120px',
      }, {
        field: 'aircraftStartBoardingTime',
        title: 'AircraftStartBoardingTime',
        width: '120px',
      }, {
        field: 'calculatedOffBlockTime',
        title: 'CalculatedOffBlockTime',
        width: '120px',
      }, {
        field: 'calculatedTakeOffTime',
        title: 'CalculatedTakeOffTime',
        width: '120px',
      }, {
        field: 'cobtType',
        title: 'CobtType',
        width: '120px',
      }, {
        field: 'creationTime',
        title: 'CreationTime',
        width: '120px',
      }, {
        field: 'departureAirportParking',
        title: 'DepartureAirportParking',
        width: '120px',
      }, {
        field: 'departureAirportRunway',
        title: 'DepartureAirportRunway',
        width: '120px',
      }, {
        field: 'departureAirportsid',
        title: 'DepartureAirportsid',
        width: '120px',
      }, {
        field: 'departureAirportTaxiTime',
        title: 'DepartureAirportTaxiTime',
        width: '120px',
      }, {
        field: 'estimatedLandingTime',
        title: 'EstimatedLandingTime',
        width: '120px',
      }, {
        field: 'estimatedOffBlockTime',
        title: 'EstimatedOffBlockTime',
        width: '120px',
      }, {
        field: 'flightNumber',
        title: 'FlightNumber',
        width: '120px',
      }, {
        field: 'predictedAircraftType',
        title: 'PredictedAircraftType',
        width: '120px',
      }, {
        field: 'predictedArrivalAirport',
        title: 'PredictedArrivalAirport',
        width: '120px',
      }, {
        field: 'predictedDepartureAirport',
        title: 'PredictedDepartureAirport',
        width: '120px',
      }, {
        field: 'predictedRegisteredId',
        title: 'PredictedRegisteredId',
        width: '120px',
      },
      {
        field: 'predictedRoute',
        title: 'PredictedRoute',
        width: '1100px',
      },
      {
        field: 'scheduledAircraftType',
        title: 'ScheduledAircraftType',
        width: '120px',
      }, {
        field: 'scheduledArrivalAirports',
        title: 'ScheduledArrivalAirports',
        width: '120px',
      }, {
        field: 'scheduledDepartureAirport',
        title: 'ScheduledDepartureAirport',
        width: '120px',
      }, {
        field: 'scheduledInBlockTime',
        title: 'ScheduledInBlockTime',
        width: '120px',
      }, {
        field: 'scheduledOffBlockTime',
        title: 'ScheduledOffBlockTime',
        width: '120px',
      }, {
        field: 'targetOffBlockTime',
        title: 'TargetOffBlockTime',
        width: '120px',
      }, {
        field: 'actualTakeOffTime',
        title: 'ActualTakeOffTime',
        width: '120px',
      }, {
        field: 'updateTime',
        title: 'UpdateTime',
        width: '120px',
      }, {
        field: 'scheduledArrivalAirport',
        title: 'ScheduledArrivalAirport',
        width: '120px',
      }, {command: 'destroy', title: 'DELETE ', width: '150px'}],
  };
};
var homeGridComponent = {
  template: require('./home-grid.component.html'),
  controller: homeGridController,
};
module.exports = homeGridComponent;
