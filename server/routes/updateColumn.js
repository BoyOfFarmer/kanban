var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
var Column =require('../schema/ColumnSchema')

/* GET users listing. */
router.post('/', function(req, res, next) {
    Column.findOne({_id:req.body.columnId},function(err,docs){
        if(err){
            res.json("Error")
        }
        else{
            //docs.remove()
            docs.name=req.body.name
            docs.save(function(err) {
                if(err) {
                    res.json("Save Error")
                } 
                else {
                    res.json("ok")
                }    
            })
            
        }
    })
});

module.exports = router;
