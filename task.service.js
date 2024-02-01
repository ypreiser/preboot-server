const taskController = require("./DL/task.controller");

async function addTask(task) {
  const { taskName, taskDate, userId } = await task;
  if (!taskName) throw "Task is missing taskName";
  if (!taskDate) throw "Task is missing taskDate";
  const newTask = await taskController.create({
    taskName,
    timeToComplete: taskDate,
    userId,
  });
  return newTask;
}
async function getAllActiveTasks() {
  const tasks = await taskController.read({ isDeleted: false });
  if (!tasks.length) throw "No tasks";
  return tasks;
}

async function getTasksByFilter(filter) {
  const tasks = await taskController.read(filter);
  if (!tasks.length) throw "No tasks";
  return tasks;
}

async function getActiveTasksByFilter(filter) {
  const tasks = await taskController.read({ ...filter, isActive: true });
  if (!tasks.length) throw "No active tasks";
  return tasks;
}

async function deleteTaskById(id) {
  console.log("ts1");
  try {
    const task = await taskController.deleteOne({ _id: id });
    console.log("ts2");
    if (task.isDeleted) throw { status: 404, msg: "Could not find task" };
    console.log("ts3");
    return task;
  } catch (error) {
    console.log(error);
    throw { status: 404, msg: "Could not find task" };
  }
}

async function deleteAllTasks(filter = { isDeleted: false }) {
  const tasks = await taskController.read(filter);
  if (!tasks.length) throw { status: 404, msg: "Could not find tasks" };
  await taskController.deleteMany(filter);
  return tasks;
}
async function markTaskDoneById(id) {
  const task = await taskController.deleteOne({ _id: id });
  if (!task.length) throw "Could not find task";
  return task;
}
async function MarkAllTasksDone(filter = {}) {
  const task = await taskController.markDoneMany(filter);
  if (!task.length) throw "Could not find tasks";
  return task;
}

async function updateById(id, updatedTask) {
  const task = await taskController.markDoneOne({ _id: id }, updatedTask);
  if (!task) throw "Could not update task";
  return task;
}

module.exports = {
  getTasksByFilter,
  deleteTaskById,
  addTask,
  deleteAllTasks,
  markTaskDoneById,
  getActiveTasksByFilter,
  MarkAllTasksDone,
  getAllActiveTasks,
  updateById,
};
// const starter = async () => {
//   const db = require("./DL/db");
//   await db.connect();
//   try {
//     let test = await getAllActiveTasks();
//     console.log(test);
//   } catch (error) {
//     console.error(error);
//   }
// };
// starter();
