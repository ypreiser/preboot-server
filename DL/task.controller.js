const taskModel = require('./task.model')

async function create(data) {
    return await taskModel.create(data)
}

async function read(filter={}) {
    return await taskModel.find(filter)
}

async function readOne(filter) {
    return await taskModel.findOne(filter)
}

async function updateById(id, data) {
    return await taskModel.updateOne({ _id: id }, data)
}
async function updateMany(filter, data) {
    return await taskModel.updateMany(filter, data)
}
async function deleteOne(id) {
    return await taskModel.findOneAndUpdate(id, { isDeleted: true })
}
async function deleteMany(filter) {
    return await taskModel.updateMany(filter, { isDeleted: true })
}
async function markDoneOne(id) {
    return await taskModel.findOneAndUpdate(id, { isDone: true })
}
async function markDoneMany(filter) {
    return await taskModel.updateMany(filter, { isDone: true })
}


module.exports = {markDoneMany, markDoneOne,create, read, readOne, updateById, deleteOne , deleteMany, updateMany}




// const starter = async () => {
//     const db = require('./db')
//     await db.connect()
//     try {
//         let test = await read()
//         console.log(test);
//     } catch (error) {
//         console.error(error);
//     }
// }
// starter()
