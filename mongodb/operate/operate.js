var userModel = require("../Schema/schema");

module.exports = {
    add:function(obj,cb){
        var user = new userModel(obj);
        user.save(cb);
    },
    query:function (where,cb){
        userModel.find(where).exec(cb)
    },
    update:function (where,setObj,cb){
        userModel.update(where,setObj).exec(cb)
    },
    remove:function (where,cb){
        userModel.remove(where).exec(cb)
    },
}