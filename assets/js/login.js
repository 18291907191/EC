// 登录界面事件
let oLoginForm = $('.login-form ul li input');
oLoginForm.focus(function() {
    $(this).prev('label').css({"border-right-color":"skyblue"}).parent().siblings().children('label').css({"border-right-color":"#ddd"});
    $(this).parent().css({"border-color":"skyblue"}).siblings().css({"border-color":"#ddd"})
});
oLoginForm.blur(function() {
    $(this).prev('label').css({"border-right-color":"#ddd"});
    $(this).parent().css({"border-color":"#ddd"})
});
// 页面加载完成从cookie中获取cookie数据并添加到文本框中
$(function() {
    // 从cookie中获取数据
    let  sCookie = getCookie("logininfo");
    // 判断数据 是否存在，存在则获取 ，不存在则创建空数组
    let aCookie = sCookie ? JSON.parse(sCookie) : [];
        let adminAccount = aCookie.account;
        let adminPassword = aCookie.password;
        $('#userId').val(adminAccount);
        $('#userPass').val(adminPassword);
});

let oline = $('.inline');
oline.mouseover(function() {
    $('.login-title').show();
});
oline.mouseout(function() {
    $('.login-title').hide();
});
// 键盘回车确认登录
$(document).keypress(function(e) {
    // 回车键事件
    if(e.which == 13) {
        $(".btn2").click();
    }
});
// 实例化二维码验证
let verifyCode = new GVerify("v_container");
// 登录按钮
$('.btn2').click(function() {
    // 获取 二维码，账号密码
    let res = verifyCode.validate($("#code_input").val());
    let oAccount = $('#userId').val();
    let oPassword = $('#userPass').val();
    let oSavePass = $('#savepass');
    // 点击获取登录时间
    let oTime = new Date().toLocaleString();
    if(res){
        $.post(
            "http://localhost/tpl/adminlogin.php",
            {
                "userId":oAccount,
                "userPass":oPassword
            },
            function(data){
                let oData = JSON.parse(data);
                console.log(oData);
                let truefalse = oData[0].truefalse;
                // console.log(truefalse);
                if(oData.length > 0 &&  truefalse == 1){
                    //记录cookie1
                    // 将登录的管理员的信息存入cookie
                    setCookie("userinfo",JSON.stringify(oData),7);
                    // 将管理员登录的时间存入cookie
                    setCookie("logintime",oTime,0);
                    // 获取账户和密码
                    let oAdminInfo = {
                        account:oAccount,
                        password:oPassword,
                    };
                    // 如果选择保存密码将数据缓存在cookie中保存7天
                    if(oSavePass.prop("checked")) {
                        setCookie("logininfo",JSON.stringify(oAdminInfo),7);
                    }
                    location.href = "index.html";
                }else{
                    alert("登录失败，用户名或者密码有误！");
                }
            }
        );
    }
    else{
        alert(" 格式输入有误，请重新输入...");
        location.reload();
    }
    });