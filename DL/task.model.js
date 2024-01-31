const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
   
    taskName: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
        required: false
    },
    timeCreated: {
        type: Date,
        default:  Date.now
    },
    timeToComplete: {
        type: Date,
        required: false
    },
    isDone: {
        type:Boolean,
        default : false
    },
    isDeleted:{
        type:Boolean,
        default : false
    }
})
const taskModel = mongoose.model('task', taskSchema)
module.exports = taskModel;

const starter = async () => {
    const db = require('./db')
    await db.connect()
        let test = await taskModel.find({
            taskName:"test"
        })
        console.log(test);
    }
  
starter()