const express = require('express')
const app = express()

const cors = require('cors');
app.use(cors())
app.use(express.json())
const port = 2525


const db = require('./DL/db')
db.connect()

const taskRouter = require("./task.router")
app.use("/", taskRouter)

app.get('/test',(req,res)=>{
    res.send("tested")
})

app.listen(port, () => console.log(`**** Server ${port} is up ****`))
