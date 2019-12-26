var express = require('express');
var router = express.Router();
var path=require('path')
/* GET home page. */
//server.com/
router.get('/', function(req, res, next) {
  res.sendFile('/public/index.html')
});
router.get('/home',function(req,res,next){
  res.sendFile('/home/danglong/kanban/server/public/index.html')
})
module.exports = router;
