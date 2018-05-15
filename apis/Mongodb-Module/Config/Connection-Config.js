						//  ==========
						//  = 链接模块 =
						//  ==========
//引入mongoose模块
var mongoose = require('mongoose');
//创建链接
const dbUrl = "mongodb://localhost:27017/Tplay";
//建立连接
mongoose.connect(dbUrl);
//监听链接是否链接成功
mongoose.connection.on("connected",(socket) => {
	console.log(`${dbUrl}链接成功`);
})
//将mongoose对象作为对位提供的接口
module.exports = mongoose;
