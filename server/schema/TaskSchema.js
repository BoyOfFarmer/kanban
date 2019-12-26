var mongoose=require('mongoose')
let Schema = mongoose.Schema;
var taskSchema = new mongoose.Schema({
  header: String,
  desc: String,
  worker:[String],
  priority: Number,
  inColumn: { type: Schema.Types.ObjectId, ref: 'Column' }
})

const Task = mongoose.model('Task', taskSchema);
module.exports=Task;