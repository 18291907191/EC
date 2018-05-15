angular.module("com.ec.addbrand",[])
    .controller("addbrandController",["$scope",function ($scope) {
        /*添加内容与归类内容的跳转*/
        $('.all-go').click(function(){
            $('.proname-list').eq(1).append($('.proname-list').eq(0).children('li'));
        })
        $('.all-back').click(function(){
            $('.proname-list').eq(0).append($('.proname-list').eq(1).children('li'));
        })
        // console.log($('.proname-list').eq(0).html());
        $('.proname-list').eq(0).children('li').each(function (k,v) {
            $(v).click(function () {
                $(this).css({'background':'blue','color':'#fff'})
                var that=$(this);
                $('.sel-go').click(function () {
                    $('.proname-list').eq(1).append(that);
                    that.css({'background':'#fff','color':'#858585'})
                    $('.proname-list').eq(1).children('li').each(function (k,v) {
                        $(v).click(function () {
                            $(this).css({'background':'blue','color':'#fff'})
                            var index=$(this);
                            $('.sel-back').click(function () {
                                $('.proname-list').eq(0).append(index);
                                index.css({'background':'#fff','color':'#858585'})
                            })
                        })
                    })
                })
            })
        })
        /*上传的图片在页面中预览*/
        $(document).ready(function () {
            $('.repeat').change(function () {
                var current_pic=this.files[0];
                preview_picture(current_pic);
            })
            function preview_picture(pic) {
                var r=new FileReader();
                r.readAsDataURL(pic)
                r.onload=function (e) {
                    $('.upload').children('img').attr('src',this.result);
                }
            }
        })
        /*添加内容限制字数*/
        var oMsg = document.getElementsByClassName('con-msg')[0];
        var oNum = document.getElementsByClassName('fontnum')[0];
        //compositionstart oninput compositionend
        //compositionstart事件:当输入内容结束前执行的事件
        //oninput	文本框事件
        //compositionend: 当输入内容结束后执行的事件
        var cut = function(){
            if(this.value.length > 500){
                this.value = this.value.slice(0,500);
            }
            oNum.innerHTML = 500 - this.value.length;
        }.bind(oMsg);
//		定义是否为中文的标识
        var isInputChinese;
        oMsg.oninput = function(){
            if(!isInputChinese){
                cut();
            }
        }
        oMsg.addEventListener('compositionstart',function(){
            isInputChinese = true;
            if(!isInputChinese){
                cut();
            }
        })
        oMsg.addEventListener('compositionend',function(){
            isInputChinese = false;
            cut();
        })
    }])