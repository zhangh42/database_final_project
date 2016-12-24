// 数据库操作模块
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'shoppingmanagement'
});

// connection.connect();

module.exports = connection;

