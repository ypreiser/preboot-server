const express = require("express");
const router = express.Router();
const taskService = require("./task.service");

router.get("/", async (req, res) => {
  console.log("1");
  try {
    console.log("2");
    let result = await taskService.getAllActiveTasks();
    console.log("3");
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res) => {
  try {
    let result = await taskService.addTask(req.body);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/", async (req, res) => {
  console.log(1);
  try {
    let result = await taskService.deleteAllTasks();
    console.log(2);
    res.send(result);
    console.log(3);
  } catch (error) {
    res.status(error.status).send(error.msg);
    console.error(error);
    console.log(4);
  }
});
router.delete("/:id", async (req, res) => {
  console.log(1);
  try {
    let result = await taskService.deleteTaskById(req.params.id);
    console.log(2);
    res.send(result);
    console.log(3);
  } catch (error) {
    res.status(error.status).send(error.msg);
    console.error(error);
    console.log(4);
  }
});
router.put("/", (req, res) => {});
router.put("/:id", (req, res) => {});

module.exports = router;
