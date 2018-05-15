// cookie的写入
function setCookie(name,value,days,path){
    days = days || 0;
    path = path || '/';
    var oDate = new  Date();
    oDate.setDate(oDate.getDate() + days);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate + ';path=' + path;
}
// cookie的读取
function getCookie(name){
    var newCookie = document.cookie.split('; ');
    for(var i = 0; i < newCookie.length; i++){
        var result = newCookie[i].split('=');
        if(result[0] === name){
            return decodeURIComponent(result[1]);
        }
    }
}

//功能：删除cookie(根据键删除cookie)
//参数：
//key：键；
function removeCookie(key){
	saveCookie(key,"",-1);
}


