<?php
	header("content-type","text/html;charset=utf-8");
	// 指定允许其他域名访问
    header('Access-Control-Allow-Origin:*');
    // 响应类型
    header('Access-Control-Allow-Methods:POST');
    // 响应头设置
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
	//2、在数据库中查询
	   //1)、建立连接，并选择数据库
	   $con = mysql_connect("localhost","root","root");
	   mysql_select_db("ec",$con);
	   //2)、执行SQL语句（查询）
	   $sqlStr="select * from admin";

	   $result=mysql_query($sqlStr,$con);

	   //3)、关闭连接
	//3、响应结果
	//获得$result的行数
	$rows = mysql_num_rows($result);
	$str="[";
    	$query_row = mysql_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
    	while($query_row){
    		$str = $str.'{
                        "Id":"'.$query_row[0].'",
                        "username":"'.$query_row[1].'",
                        "userpass":"'.$query_row[2].'",
                        "usersex":"'.$query_row[3].'",
                        "usertell":"'.$query_row[4].'",
                        "userfullname":"'.$query_row[5].'",
                        "userlevel":"'.$query_row[6].'",
                        "useremail":"'.$query_row[7].'",
                        "createtime":"'.$query_row[8].'",
                        "userip":"'.$query_row[9].'",
                        "truefalse":"'.$query_row[10].'"
                        }';
    		$query_row = mysql_fetch_array($result);
    		if($query_row){
    			$str = $str.",";
    		}
    	}
    	$str = $str."]";
    mysql_close($con);

	echo $str;
?>