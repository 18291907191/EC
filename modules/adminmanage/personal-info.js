angular.module("com.ec.modules.personalinfo",[])
    .controller("personalInfoController",["$scope","personalInfoService","$http",function ($scope,personalInfoService,$http) {
        setTimeout(function() {
            dialog();
        },2000);
        $('.none').click(function () {
            $('.product-left').hide();
            $('.bebig').show();
            $(this).hide();
        });
        $('.bebig').click(function () {
            $('.product-left').show();
            $('.none').show();
            $(this).css("display","none");
        });
        $('.quan').children('input').click(function () {
            let sel=$(this).prop('checked');
            $('td').children('input').prop('checked',sel);
        });
        setInterval(function() {
            $('#reg').val(new Date().toLocaleString())
        },1000);
        personalInfoService.querydata().then((success)=>{
            $scope.adata = success.data
        })
    }])
    .service("personalInfoService",["$http",function ($http) {
        return{
            querydata:function(){
                return $http({
                    method: 'POST',
                    url: 'http://localhost/tpl/adminquery.php'
                });
            }
        };
    }]);