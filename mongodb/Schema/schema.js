var mongoose = require("../connect/connect");

var Schema =  mongoose.Schema;
var userSchema = new Schema({
    name:{type:String},
    pass:{type:Number},
})

var userModel = mongoose.model("users",userSchema)
module.exports = userModel;