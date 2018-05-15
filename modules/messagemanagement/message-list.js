
angular.module("com.ec.modules.message-list",[])
    .controller("messagelistcontroller",["$scope",function ($scope){
        dialog()
        // 全部删除
        $(".del").click(function () {
            if(confirm("你要全部删除吗?")){
                $(".tt").remove()
            }else{

            }
    })
        // 全选
        $(".del").click(function(){
            if(this.checkbox) {
                $("input[name='你的checkBox组的name']").prop("checked",true);
            }
            else {
                $("input[name='你的checkBox组的name']").prop("checked",false);
            }

        });
    }])
    .service("messagelistservice",function ($http) {

    })