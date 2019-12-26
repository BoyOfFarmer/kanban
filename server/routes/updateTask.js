var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
var Task =require('../schema/TaskSchema')

/* GET users listing. */
router.post('/', async function(req, res, next) {
    try {
        console.log(req.body.taskBody)
        await Task.findOneAndUpdate({_id: req.body.taskId}, { $set: req.body.taskBody }, {'new': true})
        res.send();
    } 
    catch(e) {
        console.log(e);
        res.status(400).send();
    }
    // Task.findOne({_id:req.body.taskId},function(err,docs){
    //     if(err){
    //         res.json("Error")
    //     }
    //     else{
    //         //docs.remove()
    //         console.log(docs);
    //         docs.inColumn=req.body.inColumn
    //         docs.save(function(err) {
    //             if(err) {
    //                 res.json("Save Error")
    //             } 
    //             else {
    //                 res.json("ok")
    //             }    
    //         })
            
    //     }
    // })
});

module.exports = router;
