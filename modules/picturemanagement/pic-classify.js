angular.module("com.ec.picclassify",[])
    .controller("picclassifyController",["$scope",function ($scope) {
        dialog();
        /*复选框全选*/
        $('.quan').children('input').click(function () {
            var sel=$(this).prop('checked');
            $('td').children('input').prop('checked',sel);
        })
    }])