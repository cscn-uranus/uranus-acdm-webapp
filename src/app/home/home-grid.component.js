var homeGridController = function($http, $scope, ConstantConfig, AuthService) {
  var token = AuthService.token;
  // var auth = 'Bearer ' + token;
  // console.log('token is:');
  // console.log(token);
  // console.log(auth);
  $scope.mainGridOptions = {
    dataSource: {
      transport: {
        read: function(e) {
          $http({
            method: 'GET',
            url: ConstantConfig.FLIGHT_INFO_SERVICE_URL + 'flights',
            // headers: {Authorization: auth},
          }).then(function success(response) {
            console.log(response.data);
            e.success(response.data);
          }, function error(response) {
            alert('cannot get the flightInformation');
            console.log(response);
          });
        },
      },
      pageSize: 20,
    },
    resizable: true,
    selectable: 'multiple cell',
    allowCopy: true,
    sortable: true,
    editable: 'inline',
    columns: [
      {
        field: 'id',
        title: 'id',
        width: '50px',
      },
      {
        field: 'flightId',
        title: 'FlightId',
        width: '120px',
        attributes: {
          'class': 'table-cell',
          style: 'text-align: center; font-size: 14px',
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
      // {
      //   field: 'predictedRoute',
      //   title: 'PredictedRoute',
      //   width: '900px',
      // },
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
      }],
  };
};
var homeGridComponent = {
  template: require('./home-grid.component.html'),
  controller: homeGridController,
};
module.exports = homeGridComponent;
