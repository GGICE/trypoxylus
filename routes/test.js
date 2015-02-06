var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var db = req.db;
  var send;
  var collection = db.get('test');
  collection.find({}, function (err, doc) {
    if (err) {
      res.send("There was a problem adding the information to the database.");
    }
    else {
      send = doc;
      console.log(doc);
      res.send(send);
    }
  });
});

router.post('/', function (req, res) {
  //host:7778/test?way=del&name=xiaoli
  var db = req.db,
      collection = db.get('test'),
      way = req.query.way,
      name = req.query.name;
  if (way === "del") {
    collection.remove({
      "name": name
    }, function (err,removed) {
      if (err) throw err;
      if(removed > 0){
        res.send(true);
      }else{
        res.send(false);
      }
    });
  }else{
    res.send(false);
  }
});

module.exports = router;
