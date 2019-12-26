var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
var columnSchema=require('../schema/ColumnSchema')

/* GET users listing. */
router.post('/', function(req, res, next) {
    var db = mongoose.connection;
    var columns = mongoose.model('Columns', columnSchema);
    req.body.map(item=>{
    var newColumn= new columns({name:item.name,items: item.items})
    newColumn.save((errors,docs)=>{
        if(errors){
            res.json("Error")
        }
    })
}
    )
    res.json("Success")
});

module.exports = router;
