var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
var Column =require('../schema/ColumnSchema')
var Task =require('../schema/TaskSchema')
const _ = require('lodash');


/* GET users listing. */
router.get('/', async function(req, res, next) {
    var db = mongoose.connection;
    try{
        const cards=await Task.find();
        const cols =await Column.find();
        const entries=_.keyBy(cols.map(item=>{
            return {
                'name': item.name,
                '_id': item._id,
                'item': cards.filter(it => it.inColumn.equals(item._id))
            }
        }), '_id');
        // console.log(grouperds);
        res.json(entries); 
    }
    catch(err){
        console.log(err);
        res.status(400).send();
    }}
);

module.exports = router;
