angular.module("com.ec.addproducts",[])
    .controller("addproductsController",["$scope",function ($scope) {
        $('.type-lists').children('li').addClass('open');
        $('.forward').children('li').addClass('open');
        $('.comcrete').children('li').addClass('file');
        $('.type-lists').find("li").click(function () {
            $(this).toggleClass('close').children('ul').toggle(200);
        });
        $('li').click(function (ev) {
            ev.stopPropagation();
        });
        $("input[type='checkbox']").click(function () {
            if($(this).is(':checked')){
                $(this).attr("checked","checked");
                $(this).parent().addClass("on");
            }else{
                $(this).removeAttr("checked");
                $(this).parent().removeClass("on");
            }
        })

        $(".save-sub").click(function () {
            fetch("http://localhost:3000/addOrder", {
                method: "POST",
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body:  `pictureCaptions=${$(".pictureCaptions").val()}&shortTitle=${$(".shortTitle").val()}&itenNo=${$(".itenNo").val()}&origin=${$(".origin").val()}&texture=${$(".texture").val()}&brand=${$(".brand").val()}&productWeight=${$(".productWeight").val()}
&monad=${$(".monad").val()} &showPrice=${$(".showPrice").val()}&marketValue=${$(".marketValue").val()}&keyword=${$(".keyword").val()}`
            }).then(function(res) {
                return res.json();
            }).then(function (data) {
            });
        })
    }])