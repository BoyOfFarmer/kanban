var express = require('express');
var router = express.Router();
var Column =require('../schema/ColumnSchema')
var Task =require('../schema/TaskSchema')

/* GET users listing. */
router.post('/', function(req, res, next) {
    let columnId = req.body.columnId;
    Task.deleteMany({inColumn: columnId}).then((docs) => {
        return Column.deleteOne({_id: columnId })
    })
    .then((doc) => {
        res.send();
    })
    .catch(e => {console.log(e);res.status(400).send()});
});

module.exports = router;
