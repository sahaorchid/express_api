const express = require('express')
const apiRoutes = require('./routes/blogs/index')

const app = express()

app.use('/api',apiRoutes)

app.listen(3000,()=>{
    console.log("server started")
})