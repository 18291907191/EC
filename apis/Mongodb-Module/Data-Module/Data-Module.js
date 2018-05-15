								//  ==========
								//  = 数据模型 =
								//  ==========
//引入链接的模块
var mongoose = require('../Config/Connection-Config');
//创建数据与test下members集合向对应的数据结构
var Schema = mongoose.Schema;
var userSchema = new Schema({
	name:{type:String},
  account:{type:String},
  password:{type:String}
})
// var productSchema = new Schema({
// 	title:{type:String},
// 	author:{type:String}
// })
//将数据结构和test下members绑定
var userModel = mongoose.model("members",userSchema);
// var articlesModel = mongoose.model("articles",productSchema);
//会员信息表
module.exports = userModel;
//产品表
// module.exports = articlesModel;
