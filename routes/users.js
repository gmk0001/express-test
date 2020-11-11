var express = require('express');
var https = require('https');
var qs = require('querystring');
var router = express.Router();

const param = qs.stringify({
  'grant_type': 'client_credentials',
  'client_id': 'OjMUl8RiBAFG65Z3yVZeyGIk',
  'client_secret': 'S1l6yTWGUjNj5btZ6w4L1IZmTxf0D4m1'
});

var post_data = {  
  "image_type	": 'URL',
  "image": 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super',
};//这是需要提交的数据  


var content = qs.stringify(post_data);  

var options = {  
  hostname: 'aip.baidubce.com',  
  port: 443,  //注意端口号 可以忽略不写 写一定写对
  path: '/rest/2.0/face/v1/merge?access_token=24.e50de6af37b030711615f5e58e949550.2592000.1591588000.282335-19789697',  
  method: 'POST',  
  headers: {  
      'Content-Type': 'application/json; charset=UTF-8'  
  }  
};  

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({})
});

router.get('/test', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({})
});

router.get('/baidu', function(req, res, next) {
  https.get(
    {
        hostname: 'aip.baidubce.com',
        path: '/oauth/2.0/token?' + param,
        agent: false
    },
    function (res2) {
      var dataString="";
        // 在标准输出中查看运行结果
        // res.pipe(process.stdout);
        res2.on("data",function(data){
          dataString+=data;
          res.send(dataString)
        });
        // res2.on("end",function(){
        //   res.send('222'+dataString);
        // });
    }
  );
});

router.get('/bdimg', function(req, res, next) {
  var req =https.request(options, function (res2) {  
    res2.setEncoding('utf8');  
    res2.on('data', function (chunk) {  
      res.send(chunk);  
    });  
  });
  req.on('error', function (e) {  
    res.send('problem with request: ');  
});
req.write(content);
req.end();
});

router.get('/download', function(req, res, next) {
  res.download('../public/images/favicon.ico', '2222.ico', function(err){
    if (err) {
      res.json(err);
    } else {
      res.json({});
    }
  });
});

module.exports = router;
