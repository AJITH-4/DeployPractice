const express=require('express')
const dotenv = require("dotenv")
dotenv.config()
const indexRouter = require('./route/index')
const userRouter = require('./route/user')
const app=express()
const PORT = process.env.PORT 
app.use(express.json())

app.use('/',indexRouter)
app.use('/users',userRouter)

app.listen(PORT,()=>console.log("app is listening "+PORT))
