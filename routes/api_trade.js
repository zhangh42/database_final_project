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


// 获取教义信息
router.get('/trade', function (req, res, next) {
    connection.query("select * from trade inner join product inner join employee \
                    inner join customer on trade.P_id = product.P_id and trade.E_id = employee.E_id \
                    and trade.C_id = customer.C_id", function (err, rows) {
            res.json(rows);
        })
});

module.exports = router;