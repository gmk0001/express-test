var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
