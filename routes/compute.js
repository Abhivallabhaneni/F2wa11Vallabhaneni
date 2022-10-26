var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  var num = Math.floor(Math.random() *50)
  var num1 = Math.floor(Math.random() *50)
  var num2 = Math.floor(Math.random() *50)
  var imu1 = Math.imul(num);
  var logg1 = Math.log(num1);
  var logg_101 = Math.log10(num2);
  res.render('compute', { title: 'Abhilash Vallabhaneni',
  num:num,
  num1:num1,
  num2:num2,
  imu1:imu1,
  logg1:logg1,
  logg_101:logg_101,
});

});

module.exports = router;