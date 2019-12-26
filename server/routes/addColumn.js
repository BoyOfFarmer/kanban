var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
var Column =require('../schema/ColumnSchema')
/* GET users listing. */
router.post('/', function(req, res, next) {
    
    var column = new Column({name:req.body.name});
    column.save((errors,doc)=>{
        if(errors){
            res.json("Error")
        }
        else{
            res.json({id:doc._id})
        }
    })
});

module.exports = router;
