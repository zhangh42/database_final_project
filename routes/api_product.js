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

// 获取商品信息
router.get('/product', function (req, res, next) {
    connection.query("select * from product inner join supplier on product.S_id = supplier.S_id", function (err, rows) {
        res.json(rows);
    })
});

// 增加商品信息
router.post('/product', function (req, res, next) {
    var body = req.body;

    connection.query('insert into product values(?, ?, ?, ?, ?, ?)',
        [body['id'], body['name'], body['sex'], body['age'], body['phone'], body['address']],
        function (err, rows) {
            if (err) {
                res.end(err.message);
            }
            res.end();
        })
});

// 修改商品信息
router.patch('/product', function (req, res, next) {
    var body = req.body;

    // 提取需要更新的参数
    var sql = 'UPDATE product SET ';
    var keys = Object.keys(body);
    for (var i = 0; i < keys.length; i++) {
        if (body[keys[i]]) {
            sql += 'P_' + keys[i] + '=' + mysql.escape(body[keys[i]]) + ',';
        }
    }
    // 去掉多余的逗号
    if (sql.endsWith(',')) {
        sql = sql.slice(0, sql.length - 1);
    }
    sql += ' WHERE P_id=' + body.id;
    console.log(sql);
    connection.query(sql, function (err, rows) {
        if (err) {
            res.end(err.message);
        }
        res.end();
    })
});

// 删除顾客信息
router.delete('/product', function (req, res, next) {
    var body = req.body;
    connection.query('DELETE FROM product WHERE P_id = ?', [body.P_id], function (err, rows) {
        if (err) {
            res.end(err.message);
        }
        res.end();
    });
});

module.exports = router;