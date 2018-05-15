'use  strice';
// 头部时间提示
setInterval(function() {
    let oDate = new Date(),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMinute = oDate.getMinutes(),
        oSecond = oDate.getSeconds();
    oMinute < 10 ? oMinute = '0' + oMinute : oMinute;
    oSecond < 10 ? oSecond = '0' + oSecond : oSecond;
    let timeStr = `${oYear}年${oMonth}月${oDay}日${oHour}时${oMinute}分${oSecond}秒`;
    $('.time').html(timeStr);
},1000);

// 头部下拉菜单点击事件
$('.msg').click(function() {
    $('.msg-drop').stop().slideToggle();
});
$('.user-info').click(function() {
    $('.user-drop').stop().slideToggle();
});
// 下拉列表回收事件
$(document).click(function (e) {
    let oMsg = $(".msg")[0],
        oUser = $('.user-info')[0];
    if (oMsg !== e.target && !$.contains(oMsg, e.target)) {
        $(".msg-drop").hide();
    }
    if(oUser !== e.target && !$.contains(oUser,e.target)) {
        $('.user-drop').hide();
    }
});

// aside点击事件
$('.aside-nav ul ul li').click(function() {
    $(this).find(".icon-right-sorting-o").addClass('iconshow').parent().parent().siblings().children().find('.icon-right-sorting-o').removeClass('iconshow');
    $(this).find("a").addClass('aside-r').parent().siblings().find('a').removeClass('aside-r');
});
$('.aside-nav ul li:has(ul)').click(function() {
    $(this).children('ul').stop().slideToggle().parent().siblings().children('ul').slideUp();
});

$('.aside-nav ul li').click(function(ev) {
    ev.stopPropagation();
});
$('.aside-nav ul li ul li a').click(function() {
    $('.aside-cont').children('a').text($(this).text())
});
// aside底部点击事件
let is = true;
$('.aside-fot').click(function() {
    if(is == true) {
        $('aside').animate({width:"60px"},500);
        $('aside .aside-list').css({"display":"none"});
        $('aside .iconlist').css({"display":"block"});
        $('.aside-fot .iconfont').addClass("iconleft");
        $('.aside-hdshow').css({"display":"none"});
        $('.aside-hdhide').css({"display":"block"});
        $('.aside-hd').css({"padding":"0px 5px"});
        is = false;
    }else {
        $('aside').animate({width:"189px"},0);
        $('aside .aside-list').css({"display":"block"});
        $('aside .iconlist').css({"display":"none"});
        $('.aside-fot .iconfont').removeClass("iconleft");
        $('.aside-hdshow').css({"display":"block"});
        $('.aside-hdhide').css({"display":"none"});
        $('.aside-hd').css({"padding":"8px 5px"});
        is = true;
    }
});
$('.iconlist li').click(function() {
    $(this).addClass('border-left').siblings().removeClass('border-left');
});
$('.aside-hdhide').mouseenter(function() {
    $('.aside-hdshow').addClass("aside-show");
});
$('.aside-hd').mouseleave(function() {
    $('.aside-hdshow').removeClass("aside-show");
});

// 获取登录的管理员的信息
let sUserInfo = JSON.parse(getCookie("userinfo"));
let oUserInfo = sUserInfo[0];
let sUserName = oUserInfo.userlevel;
$('#userlevel').text(sUserName);

// 弹出框函数封装
function dialog() {
    // 创建元素并添加到页面最后
    let MyModal = (function() {
        function modal(fn) {
            this.fn = fn; //点击确定后的回调函数
            this._addClickListen();
        }
        // 函数的原型对象
        modal.prototype = {
            show: function() {
                // 拟态框出现
                let bigModal = $('.m-modal');
                bigModal.fadeIn(100);
                // 拟态框出现后，提示框的运动
                bigModal.children('.m-modal-dialog').animate({"margin-top": "30px","opacity":"1","z-index":"999"}, 250);
                bigModal.children('.m-modal-add').animate({"opacity":"0","z-index":'-1'}, 0);
                bigModal.children('.m-modal-update').animate({"opacity":"0","z-index":'-1'}, 0);
            },
            // 第二个函数
            _addClickListen: function() {
                // 利用that改变闭包造成的tis指向改变的问题
                let that = this;
                $(".m-modal").find('*').on("click", function(event) {
                    event.stopPropagation(); //阻止事件冒泡
                });
                $(".m-modal,.m-modal-close,.m-btn-cancel").on("click", function(event) {
                    that.hide();
                });
                $(".m-btn-sure").on("click", function(event) {
                    that.fn();
                    that.hide();
                });
            },
            // 拟态框消失掉
            hide: function() {
                let $modal = $('.m-modal');
                $modal.children('.m-modal-dialog').animate({
                    "margin-top": "-100%"
                }, 500);
                $modal.fadeOut(100);
            }
        };
        return {
            modal: modal
        }
    })();
    let m1 = new MyModal.modal(function(){});
    $('.btn2').on("click", function() {
        m1.show();
        $(".sure-delete").click(() =>{
            $(this).parent().parent().hide();
        });
    });
    $('.ase').on("click",function() {
        $('.m-modal').fadeIn(100);
        $('.m-modal-add').animate({"margin-top": "30px","opacity":"1","z-index":'999'}, 250);
        $('.m-modal-dialog').animate({"opacity":"0","z-index":"0"}, 0);
        var that= $(this).parent().parent();
        $('.imsure').on("click",function () {
            $(that).find('.state').children('a').css('background',"#abbac3");
            $(that).find('.state').children('a').html('已停用');
            $(that).find('.ase').css('background',"#abbac3");
            $(that).find('.ase').children('i').removeClass('icon-ok').addClass('icon-close');
        });
        $('.imcancel').on("click",function () {
            $(that).find('.state').children('a').css('background',"#82af6f");
            $(that).find('.state').children('a').html('已启用');
            $(that).find('.ase').css('background',"#82af6f");
            $(that).find('.ase').children('i').removeClass('icon-close').addClass('icon-ok');
        })
    });
    $('.arep').click(function() {
        $('.m-modal').fadeIn(100);
        $('.m-modal-update').animate({"margin-top": "30px","opacity":"1","z-index":'999'}, 250);
        $('.m-modal-dialog').animate({"opacity":"0","z-index":"0"}, 0);
        $('.m-modal-add').animate({"opacity":"0","z-index":"0"}, 0);
    })
}

// 获取登录管理员的ip地址
function getYourIP(){
    var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
    if (RTCPeerConnection) (function () {
        var rtc = new RTCPeerConnection({iceServers:[]});
        if (1 || window.mozRTCPeerConnection) {
            rtc.createDataChannel('', {reliable:false});
        };
        rtc.onicecandidate = function (evt) {
            if (evt.candidate) grepSDP("a="+evt.candidate.candidate);
        };
        rtc.createOffer(function (offerDesc) {
            grepSDP(offerDesc.sdp);
            rtc.setLocalDescription(offerDesc);
        }, function (e) { console.warn("offer failed", e); });
        var addrs = Object.create(null);
        addrs["0.0.0.0"] = false;
        function updateDisplay(newAddr) {
            if (newAddr in addrs) return;
            else addrs[newAddr] = true;
            var displayAddrs = Object.keys(addrs).filter(function (k) { return addrs[k]; });
            for(var i = 0; i < displayAddrs.length; i++){
                if(displayAddrs[i].length > 16){
                    displayAddrs.splice(i, 1);
                    i--;
                }
            }
            // document.getElementsByClassName('.index-address').textContent = displayAddrs[0];
            $('.index-address').text(displayAddrs[0])
        }

        function grepSDP(sdp) {
            var hosts = [];
            sdp.split('\r\n').forEach(function (line, index, arr) {
                if (~line.indexOf("a=candidate")) {
                    var parts = line.split(' '),
                        addr = parts[4],
                        type = parts[7];
                    if (type === 'host') updateDisplay(addr);
                } else if (~line.indexOf("c=")) {
                    var parts = line.split(' '),
                        addr = parts[2];
                    updateDisplay(addr);
                }
            });
        }
    })();
    else{
        document.getElementById('list').textContent = "请使用主流浏览器：chrome,firefox,opera,safari";
    }
}
