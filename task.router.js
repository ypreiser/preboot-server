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

router.post('/', (req,res)=>{

}) 

router.delete('/',(req,res)=>{}) 
router.delete('/:id',(req,res)=>{}) 
router.put('/',(req,res)=>{}) 
router.put('/:id',(req,res)=>{}) 

module.exports = router