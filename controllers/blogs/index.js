const blogModel = require('../../models/blogs/index')
let utils= require('../../utils')
const express = require('express')
const bodyParser = require('body-parser')
const { apiRouter, } = require('../../routes/blogs/index')

const app = express()
app.use(express.json())

async function getBlogs(req,res){
    const blogs = await blogModel.fetchAll()
    res.json(blogs)
}

function addBlog(req,res){
    console.log((req.body))

}

module.exports={
    getBlogs,
    addBlog,
}

