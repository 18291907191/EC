								//  ==========
								//  =操作模块CURD=
								//  ==========
//引入js和数据库的配置
var dataModule = require('../Data-Module/Data-Module');
module.exports = {
	/*
	*根据条件增加用户信息
	*/
	add:function(addObj,cb){
		var user = new dataModule(addObj)
		user.save(cb);
	},
	/*
	*根据条件删除用户信息
	*/
	delete:function(where,cb){
		dataModule.remove(where).exec(cb)
	},
	/*
	*根据条件修改用户信息
	*/
	update:function (where,setObj,cb) {
        dataModule.update(where,setObj).exec(cb)
    },
	/*
	*根据条件查询用户信息
	*/
	query:function(where,cb){
		dataModule.find(where).exec(cb)
	},
	/*
	*根据条件分页查询用户信息
	*/
	page:function(where,pageIndex,pageSize,cb){
		dataModule.find(where).skip(pageIndex * pageSize).limit(pageSize).exec(cb)
	}
}



