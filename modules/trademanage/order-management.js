angular.module("com.ec.order.management",[])
    .controller("orderManagementController",["$scope","orderManagementService","$http",function ($scope,orderManagementService,$http) {
        //获取订单数据
      orderManagementService.querydata().then(function (success) {
          //成功时执行
          console.log(success.data)
          $scope.orderList = success.data;
          console.log($scope.orderList)
      })

        //商品类型
          $(".orderList").children("li").click(function () {
               $(this).children("ul").stop().slideToggle()
          })

        //显示隐藏商品类型
         $(".hideSpan").click(function () {
              $(this).css("display","none")
              $(".orderList").css("width","1")
              $(".orderList").find("ul").css("display","none")
              $(".orderList").find("li").css("display","none")
              $(".orderList").find("p").css("display","none")
              $(".showSpan").css("display","block")
         })
        $(".showSpan").click(function () {
              $(this).css("display","none")
              $(".orderList").css("width","220")
              $(".orderList").find("ul").css("display","block")
              $(".orderList").find("li").css("display","block")
              $(".orderList").find("p").css("display","block")
              $(".hideSpan").css("display","block")
        })

        //添加快递模态窗口
       setTimeout(function () {
           $(".operateA").click(function () {
               $(".managementShadow").css("display","block")
           })

           $(".cansel").click(function () {
               $(".managementShadow").css("display","none")
           })
           $(".deleteA").click(function () {
               $(".m-modal").css("display","block")
               Delete($(this))
           })

           //单选按钮

           $(".checkboxs").click(function () {
               $(".checkboxs").each(function (index,domEle){
                   if($(this).is(":checked")){
                   }
                   else{
                       $(".managementTable tr th input").removeAttr("checked")
                   }
               });
           })
           dialog();
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
      //全选按钮
        $(".managementTable tr th input").click(function () {
            if($(this).is(":checked")){
                $(".managementTable").find("tr").find("input").attr("checked","checked")
            }
            else{
                $(".managementTable").find("tr").find("input").removeAttr("checked")
            }

        })

        //添加快递向后台发送快递单
        $(".affirmExpress").click(function () {
            $(".managementShadow").css("display","none")
            var a = $(".expressNum").val()
            var b = $(".form-group select").val()
            var c = $scope.orderList[0]._id
            // let insertData={query:{data:'dfdf',message:'dfdffdf'},mutation:{data:'eeee',message:'dfdfdfge'}}
            fetch("http://localhost:3000/add", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:  `name=${b}&pass=${a}&id=${c}`
        }).then(function(res) {
                return res.json();
            }).then(function (data) {
            });
        })

        //echarts
        var myChart = echarts.init(document.getElementById('quanquan'));
        var labelTop = {
            normal : {
                label : {
                    show : true,
                    position : 'center',
                    formatter : '{b}',
                    textStyle: {
                        baseline : 'bottom'
                    }
                },
                labelLine : {
                    show : false
                }
            }
        };
        var labelFromatter = {
            normal : {
                label : {
                    formatter : function (params){
                        return 100 - params.value + '%'
                    },
                    textStyle: {
                        baseline : 'top'
                    }
                }
            },
        }
        var labelBottom = {
            normal : {
                color: '#ccc',
                label : {
                    show : true,
                    position : 'center'
                },
                labelLine : {
                    show : false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        var radius = [40, 55];
        var option = {
            legend: {
                x : 'center',
                y : 'center',
                data:[
                 // "万般留恋"
                ]
            },
            title : {
                x: 'center'
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                width: '20%',
                                height: '30%',
                                itemStyle : {
                                    normal : {
                                        label : {
                                            formatter : function (params){
                                                return 'other\n' + params.value + '%\n'
                                            },
                                            textStyle: {
                                                baseline : 'middle'
                                            }
                                        }
                                    },
                                }
                            }
                        }
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            series : [
                {
                    type : 'pie',
                    center : ['5%', '50%'],
                    radius : radius,
                    x: '0%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:46, itemStyle : labelBottom},
                        {name:'GoogleMaps', value:54,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['15%', '50%'],
                    radius : radius,
                    x:'20%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:56, itemStyle : labelBottom},
                        {name:'Facebook', value:44,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['25%', '50%'],
                    radius : radius,
                    x:'20%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:56, itemStyle : labelBottom},
                        {name:'Facebook', value:44,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['35%', '50%'],
                    radius : radius,
                    x:'40%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:65, itemStyle : labelBottom},
                        {name:'Youtube', value:35,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['45%', '50%'],
                    radius : radius,
                    x:'60%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:70, itemStyle : labelBottom},
                        {name:'Google+', value:30,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['55%', '50%'],
                    radius : radius,
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:73, itemStyle : labelBottom},
                        {name:'Weixin', value:27,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['65%', '50%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x: '0%',    // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'Twitter', value:22,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['75%', '50%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'20%',    // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'Skype', value:22,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['85%', '50%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'40%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'Messenger', value:22,itemStyle : labelTop}
                    ]
                },
            ]
        };
        myChart.setOption(option);

    }])
.service("orderManagementService",["$http",function ($http) {
    return{
        querydata:function(){
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/gainUserShop'
            });
        }
    };
}])