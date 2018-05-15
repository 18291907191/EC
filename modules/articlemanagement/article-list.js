angular.module("com.qf.jd.modules.article-list",[])
    .controller("articlelistcontroller",["$scope","$http","articlelistservice",function ($scope,$http,articlelistservice) {
        articlelistservice.getdatags().then((success)=>{
            $scope.list = success.data
        })
        // 全部删除
        $(".del").click(function () {
            if(confirm("你要全部删除吗?")){
                $(".tt").remove()
            }else{
            }
        })
        // 根据每一行删除
        $scope.del = function($index){
            // $scope.lists.pop()
            if(confirm("确认还是取消？")){
                $scope.list.splice($index,1)
            }else{
                $scope.list.splice($index,0)
            }

        }
// 左边栏隐藏出现
        $(function() {
            $(".rbtnn1").click(function() {

                    $(".article-classify").css('display','none');
                    $(".article-classify").animate({left: -220}, 1000);
                    $(".lbtnn1").css('opacity','1');
                    $(".rbtnn1").css('display','none');
                    $(".lbtnn1").click(function() {
                        console.log(569)
                        $(".article-classify").css('display','block');
                    $(".article-classify").animate({left:0}, 1000);
                    $
                    $(".rbtnn1").css('display','block');
                    $(".lbtnn1").css('opacity','0');
                })
        })
            })

    }])
    .service("articlelistservice",function ($http) {
        this.getdatags  = function(){
            return $http({
                method: 'GET',
                url: "http://localhost:3000/article"
            })
        }
    })