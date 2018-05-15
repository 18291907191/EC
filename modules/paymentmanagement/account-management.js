angular.module("com.ec.account.management",[])
    .controller("accountManagementController",["$scope",function ($scope) {
        dialog();
        $('.quan').children('input').click(function () {
            let sel=$(this).prop('checked');
            $('td').children('input').prop('checked',sel);
        });
    }]);