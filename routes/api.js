// 异步加载的接口函数

var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("but nothing now...");
  res.end();
});

var employee = require('./api_employee');
router.use(employee);

var customer = require('./api_customer');
router.use(customer);

var product = require('./api_product');
router.use(product);

module.exports = router;