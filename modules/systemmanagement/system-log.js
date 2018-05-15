angular.module("com.ec.modules.system-log",[])
    .controller("systemlogcontroller",["$scope","systemlogservice","$http",function ($scope,systemlogservice,$http) {
        systemlogservice.getdata().then((success)=>{
            $scope.logsnum = success.data
        })

    }])
    .service("systemlogservice",function ($http) {
        this.getdata  = function(){
            return $http({
                method: 'GET',
                url: "http://localhost:3000/logs"
            })
        }
        // this.del  = function(){
        //     return $http({
        //         method: 'post',
        //         url: "http://localhost:3000/del"
        //     })
        // }
    })