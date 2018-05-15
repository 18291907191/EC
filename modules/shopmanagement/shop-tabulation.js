angular.module("com.ec.tabulation",[])
    .controller("tabulationController",["$scope",function ($scope) {
        dialog();
        /*菜单列表*/
        $('.type-lists').children('li').addClass('open');
        $('.forward').children('li').addClass('open');
        $('.comcrete').children('li').addClass('file');
        $('.type-lists').find("li").click(function () {
            $(this).toggleClass('close').children('ul').toggle(200);
        });
        $('li').click(function (ev) {
            ev.stopPropagation();
        });
        /*复选框全选*/
        $('.quan').children('input').click(function () {
            var sel=$(this).prop('checked');
            $('td').children('input').prop('checked',sel);
        })

        /*页面菜单的显示*/
        console.log($('.none'))
        $('.none').click(function () {
            $('.product-left').fadeToggle(200,0);
            $('.bebig').fadeTo(300,1);
        })
        $('.bebig').click(function () {
            $('.product-left').fadeToggle(200,0);
            $('.bebig').css('display','none');
        })

    }])