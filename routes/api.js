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

// 获取员工信息
router.get('/employee', function (req, res, next) {
  connection.query("select * from employee", function (err, rows) {
    res.json(rows);
  })
});

// 增加员工信息
router.post('/employee', function (req, res, next) {
  var body = req.body;
  connection.query('insert into employee values(?, ?, ?, ?, ?, ?, ?)',
    [body['id'], body['name'], body['sex'], body['age'], body['phone'], body['date'], body['salary']],
    function (err, rows) {
      if (err) {
        res.end(err.message);
      }
      res.end();
    })
});

module.exports = router;