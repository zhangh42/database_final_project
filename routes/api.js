// 异步加载的接口函数

var express = require('express');
var router = express.Router();

// 数据库操作模块
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'shoppingmanagement'
});
// 连接数据库
connection.connect(function (err) {
  if (err) {
    console.log('数据库连接失败！');
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('数据库连接成功');
  console.log('connected as id ' + connection.threadId);
});


/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("but nothing now...");
  res.end();
});

router.get('/employee', function (req, res, next) {
    connection.query("select * from employee", function(err, rows){
      res.json(rows);
    })
});

module.exports = router;