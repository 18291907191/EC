angular.module("com.ec.modules.index",[])
    .controller("systemIndexController",["$scope",function ($scope) {
        $('.index-hd').click(function(ev) {
            let e = ev || window.event;
            let oSrc= e.srcElement||e.target;
            if(oSrc.nodeName == "I") {
                $('.index-hd').css({"display":"none"});
            }
        });
        $(function() {
            // 调用获取ip地址的函数
            getYourIP();
            // 从cookie中获取数据
            $('.index-time').text(getCookie("logintime"));
        });
    }])
    .service("systemIndexService",function () {

    });
