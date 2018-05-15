var mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/test";
mongoose.connect(dbUrl);

module.exports = mongoose;