angular.module("com.ec.modules.adminlist",[])
    .controller("adminListController",["$scope","adminListService","$http",function ($scope,adminListService,$http) {
        setTimeout(function() {
            dialog();
        },2000);
        /*菜单列表*/
        let oTypelists = $('.type-lists');
        oTypelists.children('li').addClass('open');
        $('.forward').children('li').addClass('open');
        $('.comcrete').children('li').addClass('file');
        oTypelists.find("li").click(function () {
            $(this).toggleClass('close').children('ul').toggle(200);
        });
        $('li').click(function (ev) {
            ev.stopPropagation();
        });
        /*复选框全选*/
        $('.quan').children('input').click(function () {
            let sel=$(this).prop('checked');
            $('td').children('input').prop('checked',sel);
        });
        /*页面菜单的显示*/
        $('.none').click(function () {
            $('.product-left').fadeToggle(200,0);
            $('.bebig').fadeTo(300,1);
        });
        $('.bebig').click(function () {
            $('.product-left').fadeToggle(200,0);
            $('.bebig').css('display','none');
        });
        // // 数据的获取
        adminListService.querydata().then((success)=>{
            $scope.adata = success.data;
            // 统计管理员的各个的数量
            let oData = success.data;
            let superCont = 0;
            let productEditorCont = 0;
            let generalCont = 0;
            for(let i in oData) {
                $('#allmanage').html(oData.length);
                let sUserLevel = oData[i].userlevel;
                let sUserStatic = oData[i].truefalse;
                if(sUserStatic == "1"){
                    $scope.static = "已开启";
                }
                if(sUserStatic == "0"){
                    $scope.static = "已停用";
                    setTimeout(function() {
                        if($('.spantd').html() == "已停用") {
                            let n = Number(i) + 1;
                            let oTr = $('tr')[n];
                            $(oTr).find('.state').children('a').css('background',"#abbac3");
                        }
                    },100);
                }
                switch (true) {
                    case sUserLevel == "超级管理员":
                        superCont += 1;
                        $('#supermanage').html(superCont);
                        break;
                    case sUserLevel == "产品编辑管理员":
                        productEditorCont += 1;
                        $('#producteditormanage').html(productEditorCont);
                        break;
                    case  sUserLevel == "普通管理员":
                        generalCont += 1;
                        $('#generalmanage').html(generalCont);
                        break;
                }
                // 点击停用时，修改权限，禁止登录
            }
        });
        setTimeout(function() {
            $('.type-content .ase').on("click",function() {
                var that= $(this).parent().parent();
                $('.imsure').on("click",function () {
                    let oAdminId = $(that).find(".adminid").html();
                    let stop = 0;
                    $.post(
                        "http://localhost/tpl/adminlistupdata.php",
                        {
                            "oAdminId":oAdminId,
                            "stop": stop,
                        },
                        // function(data) {
                        //     if(data == "1") {
                        //         alert("停用成功");
                        //     } else {
                        //         alert("停用失败")
                        //     }
                        // }
                    )
                });
                $('.imcancel').on("click",function () {
                    let oAdminId = $(that).find(".adminid").html();
                    let stop = 1;
                    $.post(
                        "http://localhost/tpl/adminlistupdata.php",
                        {
                            "oAdminId":oAdminId,
                            "stop":stop,
                        },
                        // function(data) {
                        //     if(data == "1") {
                        //         alert("启用成功")
                        //     } else {
                        //         alert("启用失败")
                        //     }
                        // }
                    )
                })
            });
        },2000)
    }])
    .service("adminListService",["$http",function ($http) {
        return{
            querydata:function(){
                return $http({
                    method: 'POST',
                    url: 'http://localhost/tpl/adminquery.php'
                });
            }
        };
    }]);