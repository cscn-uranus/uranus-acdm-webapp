var homeGridController = function($http, $scope, ConstantConfig, AuthService) {
  // $scope.name = 'grid';
  var token = AuthService.token;
  var auth = 'Bearer ' + token;
  var flights = null;
  console.log('token is:');
  console.log(token);
  console.log(auth);
  var init = function() {
    console.log('++++++++++');
    $http({
      method: 'GET',
      url: 'http://localhost:8081/apiFlight/flights',
      headers: {'Authorization': auth},
    });
  };
  init();
  var dataSource = new kendo.data.DataSource({
    transport: {
      read:
      //   function(options) {
      //   var config = {
      //     method: 'GET',
      //     url: 'http://localhost:8081/apiFlight/flights',
      //     headers: {'Authorization': auth},
      //   };
      //   $http(config).then(function(res) {
      //     console.log(res);
      //   });
      // },
        {
        url: ConstantConfig.FLIGHT_INFO_SERVICE_URL + 'flights',
        type: 'GET',
        // header: {Authorization: auth},
        beforeSend: function(request) {
          console.log('ccccccccchhhhhhhhh');
          request.setRequestHeader('Authorization', 'auth');
        },
        dataType: 'json',
      },
    },
  });
  $scope.mainGridOptions = {
    dataSource: flights,
    //   {
    //   transport: {
    //     // read: ConstantConfig.FLIGHT_INFO_SERVICE_URL + '/flights',
    //     read: {
    //       url: ConstantConfig.FLIGHT_INFO_SERVICE_URL + '/flights',
    //       dataType: 'json',
    //       type: 'GET',
    //       beforeSend: function(request) {
    //         var auth = 'Bearer ' + token;
    //         request.setRequestHeader('Authorization', auth);
    //       },
    //     },
    //   },
    //   // pageSize: 5,
    //   // serverPaging: true,
    //   // serverSorting: true,
    // },
    // sortable: true,
    // pageable: true,
    // dataBound: function() {
    //   this.expandRow(this.tbody.find('tr.k-master-row').first());
    // },
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
      }],
  };

  $scope.detailGridOptions = function(dataItem) {
    return {
      dataSource: {
        transport: {
          read: 'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders',
        },
        serverPaging: true,
        serverSorting: true,
        serverFiltering: true,
        pageSize: 5,
        filter: {
          field: 'EmployeeID',
          operator: 'eq',
          value: dataItem.EmployeeID,
        },
      },
      scrollable: false,
      sortable: true,
      pageable: true,
      columns: [
        {field: 'OrderID', title: 'ID', width: '56px'},
        {field: 'ShipCountry', title: 'Ship Country', width: '110px'},
        {field: 'ShipAddress', title: 'Ship Address'},
        {field: 'ShipName', title: 'Ship Name', width: '190px'},
      ],
    };
  };
};
var homeGridComponent = {
  template: require('./home-grid.component.html'),
  controller: homeGridController,
};
module.exports = homeGridComponent;
