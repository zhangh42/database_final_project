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
router.get('/supplier', function (req, res, next) {
    // 首先获取所有的供应商
    connection.query("select supplier.S_id, supplier.S_name, supplier.S_address,\
     Product_List.PL_product_name, product_list.PL_price from supplier inner join product_list \
     inner join supplier_product_list on supplier_product_list.PL_id = product_list.PL_id \
     and supplier_product_list.S_id = supplier.S_id order by supplier.S_id;",
        function (err, rows) {
            var new_rows = [];
            var lastid = 0;
            var products = [];
            // todo多值处理        
            res.json(rows);
        })
});




module.exports = router;