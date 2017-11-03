var express = require('express');
var router = express.Router();
var request = require('request');
var messages = [
  {
    name: 'Liz',
    message: 'Hello'
  },
  {
    name: 'Trevor',
    message: 'How\'s it going?'
  }
];

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res) {
  res.sendFile('node.html', {root: 'public'});
});

router.get('/chat', function(req,res) {
  console.log("In chat");
  res.send(messages);
});

router.post('/chat', function(req, res) {
  console.log("In Chat Post");
  console.log(req.body);
  messages.push(req.body);
  res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;
