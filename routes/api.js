// 异步加载的接口函数

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("but nothing now...");
  res.end();
});

module.exports = router;