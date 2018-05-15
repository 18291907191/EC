angular.module("com.ec.order.processing",[])
    .controller("orderProcessingController",["$scope","orderProcessingService","$http",function ($scope,orderProcessingService,$http) {
        setTimeout(function() {
            dialog()
        },1000);
        orderProcessingService.querydata().then((success)=>{
            $scope.adoptOrder = success.data
        });
        $(".orderList").children("li").click(function () {
            $(this).children("ul").stop().slideToggle()
        });
        $(".hideSpan").click(function () {
            $(this).css("display","none")
            $(".orderList").css("width","1")
            $(".orderList").find("ul").css("display","none")
            $(".orderList").find("li").css("display","none")
            $(".orderList").find("p").css("display","none")
            $(".showSpan").css("display","block")
        });
        $(".showSpan").click(function () {
            $(this).css("display","none")
            $(".orderList").css("width","220")
            $(".orderList").find("ul").css("display","block")
            $(".orderList").find("li").css("display","block")
            $(".orderList").find("p").css("display","block")
            $(".hideSpan").css("display","block")
        })

       setInterval(function () {
           $(".operateA").click(function () {
               $(".managementShadow").css("display","block")
           });

           $(".cansel").click(function () {
               $(".managementShadow").css("display","none")
           });
           $(".deleteA").click(function () {
               $(".m-modal").css("display","block")
               Delete($(this))
           });

           //删除当前选中数据
           function Delete(aaa) {
               $(".m-btn-sure").click(function () {
                   $(".m-modal").css("display","none")
                   if(aaa.parent().parent().find(".checkboxs").is(":checked")){
                       aaa.parent().parent().empty()
                   }

                   // aaa.parent().parent().remove()
                   //向服务器发起请求，删除当前数据
                   // fetch("http://localhost:3000/delete", {
                   //     method: "POST",
                   //     headers: {
                   //         'Content-Type': 'application/x-www-form-urlencoded'
                   //     },
                   //     body:  `id=${$scope.orderList[0]._id}`
                   // }).then(function(res) {
                   //     return res.json();
                   // }).then(function (data) {
                   //     // console.log(data)
                   // });
               })
               $(".m-btn-cancel").click(function () {
                   $(".m-modal").css("display","none")
               })
           }
       },1000)
        //删除当前选中数据
        function Delete(aaa) {
            $(".m-btn-sure").click(function () {
                $(".m-modal").css("display","none")
                if(aaa.parent().parent().find(".checkboxs").is(":checked")){
                    aaa.parent().parent().empty()
                }

                // aaa.parent().parent().remove()
                //向服务器发起请求，删除当前数据
                // fetch("http://localhost:3000/delete", {
                //     method: "POST",
                //     headers: {
                //         'Content-Type': 'application/x-www-form-urlencoded'
                //     },
                //     body:  `id=${$scope.orderList[0]._id}`
                // }).then(function(res) {
                //     return res.json();
                // }).then(function (data) {
                //     // console.log(data)
                // });
            })
            $(".m-btn-cancel").click(function () {
                $(".m-modal").css("display","none")
            })
        }
    }])
    .service("orderProcessingService",["$http",function ($http) {
        return{
            querydata:function(){
                return $http({
                    method: 'GET',
                    url: 'http://localhost:3000/adoptOrder'
                });
            }
        };
    }])