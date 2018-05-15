angular.module("com.ec.modules.system-settings",[])
    .controller("systemsettingscontroller",["$scope",function ($scope) {
        $(document).ready(function($){

            $("#fadetab").tabso({

                cntSelect:"#fadecon",

                tabEvent:"click",

                tabStyle:"fade"

            });
        });
        $(document).ready(function(){
            $(".webname1").blur(function(){
                var reg = /[\u4e00-\u9fa5]{25,50}$/
                var newpwd=$(".webname1").val();
                if (!reg.test(newpwd)) {
                   alert("请正确输入网站名称")
                }else {
                    alert("ok")
                }
            });
        });
        $(document).ready(function(){
            $(".webname2").blur(function(){
                var reg = /[\u4e00-\u9fa5]{1,5}$/
                var newpwd=$(".webname2").val();
                if (!reg.test(newpwd)) {
                    alert("请正确输入")
                }else {
                    alert("ok")
                }
            });
        });
        $(document).ready(function(){
            $(".webname3").blur(function(){
                var reg = /[\u4e00-\u9fa5]{80}$-[\u4e00-\u9fa5]{160}$/
                var newpwd=$(".webname3").val();
                if (!reg.test(newpwd)) {
                    alert("请正确输入")
                }else {
                    alert("ok")
                }
            });
        });
        $(document).ready(function(){
            $(".webname4").blur(function(){
                var reg = / ^\d{1,10}$/
                var newpwd=$(".webname4").val();
                if (!reg.test(newpwd)) {
                    alert("请正确输入")
                }else {
                    alert("ok")
                }
            });
        });
        $(document).ready(function(){
            $(".save").click(function(){
                var regContent = new RegExp("(扑街)|(你妈的)|(他妈的)");
                var newpwd=$(".webname5").val();
                if (!regContent.test(newpwd)) {
                    alert("你好")
                }else {
                     alert("请注意您的措辞")
                }
            });
        });




    }])
    .service("systemsettingsservice",function () {

    })