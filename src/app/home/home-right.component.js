var homeRightController = function($http, $scope, ConstantConfig, AuthService) {
  $scope.rightGridOptions = {
    dataSource: {
      // type: 'json',
      transport: {
        read: function(e) {
          $http({
            method: 'GET',
            url: ConstantConfig.FLOW_CONTROL_INFO_SERVICE_URL,
            // headers: {Authorization: auth},
          }).then(function success(response) {
            e.success(response.data);
          }, function error(response) {
            alert('cannot get the flowControlInformation');
            console.log(response);
          });
        },
        update: function(e) {
          $http({
            method: 'PUT',
            url: ConstantConfig.FLOW_CONTROL_INFO_SERVICE_URL,
            data: e.data,
            // headers: {Authorization: auth},
          }).then(function success(response) {
            e.success(response.data);
          }, function error(response) {
            alert('cannot edit the flowControlInformation');
            console.log(response);
          });
        },
        destroy: function(e) {
          $http({
            method: 'DELETE',
            url: ConstantConfig.FLOW_CONTROL_INFO_SERVICE_URL + '/' + e.data.id,
            // headers: {Authorization: auth},
          }).then(function success(response) {
            // console.log(response.data);
            e.success(response.data);
          }, function error(response) {
            alert('cannot delete the flowControlInformation');
            console.log(response);
          });
        },
        create: function(e) {
          $http({
            method: 'POST',
            url: ConstantConfig.FLOW_CONTROL_INFO_SERVICE_URL,
            data: e.data,
          }).then(function success(response) {
            console.log(response.data);
            e.success(response.data);
          }, function error(response) {
            alert('cannot create the flowControlInformation');
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
            flowControlId: {type: 'number'},
            assignSlot: {type: 'string'},
            controlledExemptArrivalAirport: {type: 'string'},
          },
        },
      },
    },
    selectable: true,
    // toolbar: ['create', 'save', 'cancel'],
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
    },
    columnMenu: {
      messages: {
        columns: '选择字段',
        filter: '筛选',
        sortAscending: '升序',
        sortDescending: '降序',
      },
    },
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
        field: 'flowControlId',
        title: 'FlowControlId',
        width: '120px',
        // attributes: {
        //   // 'class': 'table-cell',
        //   // style: 'text-align: center; font-size: 14px',
        // },
      }, {
        field: 'assignSlot',
        title: 'AssignSlot',
        width: '120px',
      }, {
        field: 'controlledExemptArrivalAirport',
        title: 'ControlledExemptArrivalAirport',
        width: '120px',
      }, {
        field: 'controlledExemptDepartureAirport',
        title: 'ControlledExemptDepartureAirport',
        width: '120px',
      }, {
        field: 'controlledExemptFrontPoint',
        title: 'ControlledExemptFrontPoint',
        width: '120px',
      }, {
        field: 'controlledExemptRearPoint',
        title: 'ControlledExemptRearPoint',
        width: '120px',
      }, {
        field: 'controlledIncludeArrivalAirport',
        title: 'ControlledIncludeArrivalAirport',
        width: '120px',
      }, {
        field: 'aircraftStandbyReadyTime',
        title: 'AircraftStandbyReadyTime',
        width: '120px',
      }, {
        field: 'controlledIncludeDepartureAirport',
        title: 'ControlledIncludeDepartureAirport',
        width: '120px',
      }, {
        field: 'controlledIncludeFrontPoint',
        title: 'ControlledIncludeFrontPoint',
        width: '120px',
      }, {
        field: 'controlledIncludeRearPoint',
        title: 'ControlledIncludeRearPoint',
        width: '120px',
      }, {
        field: 'controlledPoint',
        title: 'ControlledPoint',
        width: '120px',
      }, {
        field: 'controlledType',
        title: 'ControlledType',
        width: '120px',
      }, {
        field: 'creationTime',
        title: 'CreationTime',
        width: '120px',
      }, {
        field: 'endTime',
        title: 'EndTime',
        width: '120px',
      }, {
        field: 'mitValue',
        title: 'MitValue',
        width: '120px',
      }, {
        field: 'name',
        title: 'Name',
        width: '350px',
      }, {
        field: 'publishUser',
        title: 'PublishUser',
        width: '120px',
      }, {
        field: 'reason',
        title: 'Reason',
        width: '120px',
      }, {
        field: 'remark',
        title: 'Remark',
        width: '240px',
      }, {
        field: 'source',
        title: 'Source',
        width: '120px',
      }, {
        field: 'startTime',
        title: 'StartTime',
        width: '120px',
      }, {
        field: 'status',
        title: 'Status',
        width: '120px',
      }, {
        field: 'target',
        title: 'Target',
        width: '120px',
      },
      {
        field: 'updateTime',
        title: 'UpdateTime',
        width: '120px',
      }, {
        field: 'flowcontrolStatusEnum',
        title: 'FlowcontrolStatusEnum',
        width: '120px',
      }, {command: 'destroy', title: 'DELETE ', width: '120px'}],

  };
};
var homeRightComponent = {
  template: require('./home-right.component.html'),
  controller: homeRightController,
};

module.exports = homeRightComponent;
