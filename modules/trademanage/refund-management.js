angular.module("com.ec.refund.management",[])
    .controller("refundManagementController",["$scope","refundManagementService","$http",function ($scope,refundManagementService,$http) {
        refundManagementService.querydata().then(function (success) {
            //成功时执行
            console.log(success.data)
            $scope.returnsList = success.data;
        })
    }])
    .service("refundManagementService",["$http",function ($http) {
        return{
            querydata:function(){
                return $http({
                    method: 'GET',
                    url: 'http://localhost:3000/returns'
                });
            }
        };
    }])