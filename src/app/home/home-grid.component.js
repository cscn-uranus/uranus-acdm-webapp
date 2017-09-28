var homeGridController = function($http, $scope, ConstantConfig, AuthService) {
  function dateTimeEditor(container, options) {
    $('<input data-text-field="' + options.field + '" data-value-field="' +
      options.field + '" data-bind="value:' + options.field +
      '" data-format="' + options.format + '"/>').
      appendTo(container).
      kendoDateTimePicker({});
  }

  function timeEditor(container, options) {
    $('<input data-text-field="' + options.field + '" data-value-field="' +
      options.field + '" data-bind="value:' + options.field +
      '" data-format="' + options.format + '"/>').
      appendTo(container).
      kendoTimePicker({});
  }

  // parameterMap 不生效，自己写date format的方法
  function date2String(e) {
    for (var i in e.data) {
      if (typeof e.data[i] === 'object') {
        e.data[i] = kendo.toString(e.data[i], 'yyyy-MM-dd HH:mm');
      }
    }
  }

  $scope.mainGridOptions = {
    dataSource: {
      // type: 'json',
      transport: {
        read: function(e) {
          $http({
            method: 'GET',
            url: ConstantConfig.FLIGHT_INFO_SERVICE_URL,
            // headers: {Authorization: auth},
            dataType: 'json',
          }).then(function success(response) {
            e.success(response.data);
            console.log(response.data);
          }, function error(response) {
            alert('cannot get the flightInformation');
            console.log(response);
          });
        },
        update: function(e) {
          date2String(e);
          // console.log(e.data);
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
          date2String(e);
          // console.log(e.data);
          $http({
            method: 'POST',
            url: ConstantConfig.FLIGHT_INFO_SERVICE_URL,
            data: e.data,
            dataType: 'json',
          }).then(function success(response) {
            console.log(e.data);
            console.log(response.data);
            e.success(response.data);
          }, function error(response) {
            alert('cannot create the flightInformation');
            console.log(e.data);
          });
        },
        // create: function(options) {
        //   // make JSONP request to http://demos.telerik.com/kendo-ui/service/products/create
        //   $.ajax({
        //     url: ConstantConfig.FLIGHT_INFO_SERVICE_URL,
        //     data: {
        //       models: kendo.stringify(options.data.models),
        //     },
        //     type: 'POST',
        //     success: function(result) {
        //       // notify the data source that the request succeeded
        //       options.success(result);
        //     },
        //     error: function(result) {
        //       // notify the data source that the request failed
        //       console.log(options.data);
        //       options.error(result);
        //     },
        //   });
        // },
        // 未用原生的transport语法，parameterMap不生效，只有自己写
        parameterMap: function(options, operation) {
          if (operation !== 'read' && options.models) {
            // return {models: kendo.stringify(options.models)};
            var d = new Date(options.Date);
            options.Date = kendo.toString(new Date(d), 'yyyy-MM-dd HH:mm');
            return options;
          }
        },
      },
      batch: false,
      pageSize: 25,
      // pageable: {
      //   pageSize: 25,
      //   page: 3,
      //   previousNext: true,
      //   numeric: true,
      //   buttonCount: 3,
      //   input: true,
      //   refresh: true,
      // },
      schema: {
        type: 'json',
        model: {
          id: 'id',
          fields: {
            id: {type: 'number', editable: false, nullable: false},
            flightId: {type: 'number'},
            actualArrivalAirport: {type: 'string'},
            actualDepartureAirport: {type: 'string'},
            actualInBlockTime: {
              type: 'date',
              // format: '{0: yyyy-MM-dd HH:mm}',
            },
            actualTakeOffTime: {
              type: 'date',
            },
            aircraftGateClosedTime: {
              type: 'date',
            },
            aircraftStandbyReadyTime: {
              type: 'date',
            },
            aircraftStartBoardingTime: {
              type: 'date',
              // format: '{0: yyyy-MM-dd HH:mm}',
            },
            calculatedOffBlockTime: {
              type: 'date',
              // format: '{0: yyyy-MM-dd HH:mm}',
            },
            calculatedTakeOffTime: {
              type: 'date',
              // format: '{0: yyyy-MM-dd HH:mm}',
            },
            cobtType: {
              type: 'string',
            },
            departureAirportParking: {
              type: 'string',
            },
            departureAirportRunway: {
              type: 'string',
            },
            departureAirportsid: {
              type: 'string',
            },
            departureAirportTaxiTime: {
              type: 'number',
            },
            estimatedLandingTime: {
              type: 'date',
              // format: '{0: yyyy-MM-dd HH:mm}',
            },
            estimatedOffBlockTime: {
              type: 'date',
              // format: '{0: yyyy-MM-dd HH:mm}',
            },
            flightNumber: {
              type: 'string',
            },
            predictedAircraftType: {
              type: 'string',
            },
            predictedArrivalAirport: {
              type: 'string',
            },
            predictedDepartureAirport: {
              type: 'string',
            },
            predictedRegisteredId: {
              type: 'string',
            },
            predictedRoute: {
              type: 'string',
            },
            scheduledAircraftType: {
              type: 'string',
            },
            scheduledArrivalAirports: {
              type: 'string',
            },
            scheduledDepartureAirport: {
              type: 'string',
            },
            scheduledArrivalAirport: {
              type: 'string',
            },
            scheduledInBlockTime: {
              type: 'date',
              format: '{0: yyyy-MM-dd HH:mm}',
            },
            scheduledOffBlockTime: {
              type: 'date',
              format: '{0: yyyy-MM-dd HH:mm}',
            },
            targetOffBlockTime: {
              type: 'date',
              format: '{0: yyyy-MM-dd HH:mm}',
            },
            creationTime: {
              type: 'date',
              format: '{0: yyyy-MM-dd HH:mm}',
            },
            updateTime: {
              type: 'date',
              format: '{0: yyyy-MM-dd HH:mm}',
            },
          },
        },
        // parse: function(response) {
        //   for (var i = 0; i < response.length; i++) {
        //     if (response[i].actualInBlockTime !== null) {
        //       response[i].actualInBlockTime =
        //         // new Date(response[i].actualInBlockTime);
        //       kendo.parseDate(response[i].actualInBlockTime,
        //         'yyyy-MM-ddTHH:mm');
        //     }
        //   }
        //   return response;
        // },
      },
    },
    toolbar: ['create', 'save', 'cancel'],
    messages: {
      commands: {
        cancel: '取消',
        canceledit: '取消编辑',
        create: '添加',
        destroy: '删除',
        edit: '编辑',
        save: '保存',
        select: '选择',
        update: '更新',
      },
      noRecords: '查询数据失败',
    },
    columnMenu: {
      messages: {
        columns: '选择字段',
        filter: '筛选',
        sortAscending: '升序',
        sortDescending: '降序',
      },
    },
    navigatable: true,
    mobile: true,
    noRecords: true,
    selectable: true,
    height: 845,
    resizable: true,
    // allowCopy: true,
    sortable: true,
    editable: {
      confirmation: function(e) {
        return '确定要删除航班号为: ' + e.flightId +
          '的数据?';
      },
    },
    filterable: {
      // search: true,
      // ignoreCase: true,
      operators: {
        string: {
          eq: '等于',
          neq: '不等于',
          // isnull: '为空',
          // isnotnull: '不为空',
          // isempty: 'Empty',
          // isnotempty: 'Not empty',
          contains: '包含',
          doesnotcontain: '不包含',
          startswith: '开头为',
          endswith: '结尾为',
        },
        number: {
          eq: '等于',
          neq: '不等于',
          // isnull: 'Null',
          // isnotnull: 'Not null',
          // isempty: 'Empty',
          // isnotempty: 'Not empty',
          contains: '包含',
          doesnotcontain: '不包含',
          startswith: '开头为',
          endswith: '结尾为',
        },
        date: {
          eq: '等于',
          neq: '不等于',
          gt: '晚于',
          lt: '早于',
        },
      },
      messages: {
        info: '选择筛选条件: ',
        and: '且',
        or: '或',
        filter: '确定',
        clear: '取消',
      },
    },
    scrollable: true,
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
        filterable: {
          search: true,
          ignoreCase: true,
        },
        headerAttributes: {
          'class': 'table-header-cell',
          style: 'text-align: left; font-size: 14px',
        },
        // attributes: {
        //   'class': 'table-cell',
        //   // style: 'text-align: center; font-size: 14px',
        // },
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
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        filterable: {
          ui: 'datetimepicker',
        },
        editor: dateTimeEditor,
        // template: '#if(actualInBlockTime === null){##}else' +
        // '{# #= kendo.toString(actualInBlockTime,
        // "yyyy-MM-dd HH:mm:ss") # #}#',
      }, {
        field: 'actualTakeOffTime',
        title: 'ActualTakeOffTime',
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
      }, {
        field: 'aircraftGateClosedTime',
        title: 'AircraftGateClosedTime',
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
      }, {
        field: 'aircraftStandbyApprovedTime',
        title: 'AircraftStandbyApprovedTime',
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
      }, {
        field: 'aircraftStandbyReadyTime',
        title: 'AircraftStandbyReadyTime',
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
      }, {
        field: 'aircraftStartBoardingTime',
        title: 'AircraftStartBoardingTime',
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
      }, {
        field: 'calculatedOffBlockTime',
        title: 'CalculatedOffBlockTime',
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
      }, {
        field: 'calculatedTakeOffTime',
        title: 'CalculatedTakeOffTime',
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
      }, {
        field: 'cobtType',
        title: 'CobtType',
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
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
      }, {
        field: 'estimatedOffBlockTime',
        title: 'EstimatedOffBlockTime',
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
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
        field: 'scheduledArrivalAirport',
        title: 'ScheduledArrivalAirport',
        width: '120px',
      }, {
        field: 'scheduledInBlockTime',
        title: 'ScheduledInBlockTime',
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
      }, {
        field: 'scheduledOffBlockTime',
        title: 'ScheduledOffBlockTime',
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
      }, {
        field: 'targetOffBlockTime',
        title: 'TargetOffBlockTime',
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
      }, {
        field: 'creationTime',
        title: 'CreationTime',
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
      }, {
        field: 'updateTime',
        title: 'UpdateTime',
        width: '160px',
        format: '{0: yyyy-MM-dd HH:mm}',
        editor: dateTimeEditor,
      }, {command: 'destroy', title: 'DELETE ', width: '120px'}],
  };
};
var homeGridComponent = {
  template: require('./home-grid.component.html'),
  controller: homeGridController,
};
module.exports = homeGridComponent;
