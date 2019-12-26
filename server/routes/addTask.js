var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
var Task =require('../schema/TaskSchema')

/* GET users listing. */
router.post('/', function(req, res, next) {
    if (!req.body.inColumn || !req.body.header) {
        res.status(404).send();
    }
    var task = new Task({
        header:req.body.header,
        desc: req.body.desc || "",
        priority: req.body.priority || 5,
        worker: req.body.worker || [],
        inColumn: req.body.inColumn,
    })
    task.save((errors,doc)=>{
        if(errors){
            res.status(400).send();
        }
        else{
            res.json({id:doc._id})
        }
    })
});

module.exports = router;
