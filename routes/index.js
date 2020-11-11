var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  // fetch('https://www.baidu.com').then(v => {
  //   console.log('123456', v);
  // })
  getH()
  res.render('index', { title: 'Express' });
});

function getH(){
  for (let index = 0; index < 10; index++) {
    request({url:'https://www.materialtools.com/SMSContent/46?page='+index}, function (error, response, body) {
      // if(body.includes('阿里巴巴集团')|| body.includes('18871004311')) {
        console.log('1111',body );
      // }
    })
  }
}

module.exports = router;
