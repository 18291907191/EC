var express = require('express');
var router = express.Router();

var db = require('../Mongodb-Module/Operation-Module/User-Operation');

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('http://localhost:8080', { title: 'Express' });
    // 数据库查询
    // db.query({"name":"Tplay"},function(error,results){
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    //   res.header("X-Powered-By",' 3.2.1');
    //   res.header("Content-Type", "application/json;charset=utf-8");
    //   console.log(results);
    //   res.json(
    //     results
    //   )
    // })
});
router.get('/users', function(req, res, next) {
    // res.render('http://localhost:8080', { title: 'Express' });
    db.query({"author":"dinghan"},function(error,results){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1');
        res.header("Content-Type", "application/json;charset=utf-8");
        console.log(results);
        res.json(
            results
        )
    })
});

// add: (addObj,cb) => {
//   let user = new dataModule(addObj);
//   user.save(cb);
// }
// db.add(shuihu,(error,result) => {
// 	console.log('添加' + result + '到test/products表中');
// });

router.post('/',function(req,res){
    console.log(req.body);
    db.add(req.body,(error,results)=>{
        console.log(results);
    })
});

module.exports = router;
