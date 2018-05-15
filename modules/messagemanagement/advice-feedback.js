angular.module("com.ec.modules.advice-feedback",[])
    .controller("advicefeedbackcontroller",["$scope","advicefeedbackservice","$http",function ($scope,advicefeedbackservice,$http) {
        advicefeedbackservice.getdata().then((success)=>{
           $scope.lists = success.data
        })
        // console.log($scope.lists[0])
        // 根据每一行删除
        $scope.del = function($index){
            // $scope.lists.pop()
           if(confirm("确认还是取消？")){
               $scope.lists.splice($index,1)
           }else{
               $scope.lists.splice($index,0)
           }

        }
        // 全部删除
        $scope.Alldel = function($index){
            if(confirm("你要全部删除吗?")){
                $scope.lists.splice($index,2)
            }else{
                $scope.lists.splice($index,0)
            }
        }
        // 添加
        $scope.add = function($index){




        }
    }])
    .service("advicefeedbackservice",function ($http) {
        this.getdata  = function(){
            return $http({
                method: 'GET',
                url: "http://localhost:3000/feed"
            })
        }
            // this.del  = function(){
            //     return $http({
            //         method: 'post',
            //         url: "http://localhost:3000/del"
            //     })
            // }
    })