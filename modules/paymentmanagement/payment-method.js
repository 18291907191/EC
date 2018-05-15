angular.module("com.ec.payment.method",[])
    .controller("paymentMethodController",["$scope",function ($scope) {
         $(".rightPay").click(function (ev) {
             var e = ev || window.event;
             var o = ev.srcElement || ev.target
             if(o.className == "deletespan"){
                 $(".rightPay").css("display","none")
             }
         })
    }])