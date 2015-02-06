var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var send = {
     welcome : "node-serve!"
  };
  res.send(send);
});

router.post('/', function (req, res) {
});

module.exports = router;
