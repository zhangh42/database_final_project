
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


var express = require('express');
var router = express.Router();

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

// 修改员工信息
router.patch('/employee', function (req, res, next) {
    var body = req.body;

    // 提取需要更新的参数
    var sql = 'UPDATE employee SET ';
    var keys = Object.keys(body);
    for (var i = 0; i < keys.length; i++) {
        if (body[keys[i]]) {
            sql += 'E_' + keys[i] + '=' + mysql.escape(body[keys[i]]) + ',';
        }
    }
    // 去掉多余的逗号
    if (sql.endsWith(',')) {
        sql = sql.slice(0, sql.length - 1);
    }
    sql += ' WHERE E_id=' + body.id;
    console.log(sql);
    connection.query(sql, function (err, rows) {
        if (err) {
            res.end(err.message);
        }
        res.end();
    })
});

// 删除员工信息
router.delete('/employee', function (req, res, next) {
    var body = req.body;
    connection.query('DELETE FROM employee WHERE E_id = ?', [body.E_id], function (err, rows) {
        if (err) {
            res.end(err.message);
        }
        res.end();
    });
});

module.exports = router;