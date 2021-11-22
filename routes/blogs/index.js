const express = require('express')

const { getBlogs,addBlog } = require('../../controllers/blogs/index')
const apiRouter = express.Router()

apiRouter.get('/',getBlogs)
apiRouter.post('/add',addBlog)

module.exports=apiRouter