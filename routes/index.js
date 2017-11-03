var express = require('express');
var router = express.Router();
var request = require('request');
var chat = [
  /*{
    name: 'Liz',
    message: 'Hello'
  },
  {
    name: 'Trevor',
    message: 'How\'s it going?'
  }*/
];

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
 });

router.get('/', function(req, res) {
  res.sendFile('node.html', {root: 'public'});
});

router.get('/message', function(req,res) {
  console.log("In Messages");
  res.send(chat);
});

router.post('/message', function(req, res) {
  console.log("In Messages Post");
  console.log(req.body);
  messages.push(req.body);
  res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;
