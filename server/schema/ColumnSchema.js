var mongoose=require('mongoose')
var columnSchema = new mongoose.Schema({
    name: String
  });

let Column = mongoose.model('Column', columnSchema);
module.exports=Column