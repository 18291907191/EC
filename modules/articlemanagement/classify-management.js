angular.module("com.ec.modules.classify-management",[])
    .controller("classifymanagementcontroller",["$scope","classifymanagementservice","$http",function ($scope,classifymanagementservice,$http) {
        classifymanagementservice.getdataa().then((success)=>{
            $scope.classify = success.data
        })
        // console.log($scope.lists[0])
        // 根据每一行删除
        $scope.del = function($index){
            // $scope.lists.pop()
            if(confirm("确认还是取消？")){
                // $(".m-modal").css('display','block');
                $scope.classify.splice($index,1)

            }else{
                $scope.classify.splice($index,0)
            }

        }
        // 全部删除
        $scope.Alldel = function($index){
            if(confirm("你要全部删除吗?")){
                $scope.classify.splice($index,6)
            }else{
                $scope.classify.splice($index,0)
            }
        }
        // 添加
        $scope.add = function($index){




        }
    }])
    .service("classifymanagementservice",function ($http) {
        this.getdataa  = function(){
            return $http({
                method: 'GET',
                url: "http://localhost:3000/class"
            })
        }
        // this.del  = function(){
        //     return $http({
        //         method: 'post',
        //         url: "http://localhost:3000/del"
        //     })
        // }
    })



