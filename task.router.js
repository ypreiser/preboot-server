const express = require('express')
const router = express.Router()
const taskService = require('./task.service');

router.get('/',(req,res)=>{
    try {
        let result = taskService.getAllActiveTasks
        res.send(result)  
  } catch (error) {
    console.error(error);
  }
})

router.post('/:id', (req,res)=>{
 req.params.id
    res.send("updated")
}) 

router.delete('/item/:id',(req,res)=>{}) 
router.put('/item/:id',(req,res)=>{}) 

module.exports = router