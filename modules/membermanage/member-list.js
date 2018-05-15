angular.module("com.ec.modules.memberlist",[])
    .controller("memberListController",["$scope",function ($scope) {
        // 定义自运行函数
        dialog();
        /*复选框全选*/
        $('.quan').children('input').click(function () {
            let sel=$(this).prop('checked');
            $('td').children('input').prop('checked',sel);
        });
        $('.ase').click(function() {
            $('.m-modal').fadeIn(100);
            $('.m-modal-add').animate({"margin-top": "30px","opacity":"1","z-index":'1'}, 250);
            $('.m-modal-dialog').animate({"opacity":"0","z-index":"0"}, 0);
        })
        $('.arep').click(function() {
            $('.m-modal').fadeIn(100);
            $('.m-modal-update').animate({"margin-top": "30px","opacity":"1","z-index":'1'}, 250);
            $('.m-modal-dialog').animate({"opacity":"0","z-index":"0"}, 0);
            $('.m-modal-add').animate({"opacity":"0","z-index":"0"}, 0);
        })
    }])
    .service("memberListService",function () {
    });