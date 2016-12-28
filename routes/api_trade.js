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

router.post('/trade', function (req, res, next) {
    var body = req.body;
    connection.query("select P_quantity from product where P_id = ?", [body.P_id],
        function (err, rows) {
            if (err) {
                res.end(err.message);
            }
            if (rows[0].P_quantity < body.P_quantity) {
                res.end("库存不足");
            } else {
                body.T_price = body.P_price * body.P_quantity;
                connection.query("insert into trade values(?, ?, ?, ?, ?, ?, ?)",
                    [null, body.T_date,body.P_quantity, body.T_price, body.E_id, body.C_id, body.P_id],
                    function (err, rows) {
                        if (err) {
                            res.end(err.message);
                        }
                        res.end();
                    });
            }
        })
});

router.delete('/trade', function (req, res, next) {
    var body = req.body;
    connection.query('DELETE FROM trade WHERE T_id = ?', [body.T_id],
        function (err, rows) {
            if (err) {
                res.end(err.message);
            }
            res.end();
        });
})

module.exports = router;