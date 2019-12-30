const {postService} = require('../services/index') // accessing service 
const {UnexpectedErr} = require('../errors/index')
const {validatePost} = require('./validation/createPostValid')
const getPosts = async (req, res, next) => {
    try {
        const posts = await postService.getPosts() 
        res.json({posts: posts})
        next()
    } catch (error) {
        UnexpectedErr(res, error)
    }
}

const getPostById = async (req, res, next) => {
    try {
        const postId = req.params.id
        const post = await postService.getPostById(postId)
        res.json({post, user:req.user})
    } catch (error) {
        UnexpectedErr(res, error)
    }
}

const postBlog = async (req, res, next) => {
    //here we should validate our data
    
    try {
        await validatePost(req)
        const {title, description} = req.body
        saved = await postService.createPost({title, description})
        res.status(201).json(saved)
        next()
    } catch (error) {
        res.status(400).json(error)
    }
} 

module.exports = {
    getPosts,
    getPostById,
    postBlog,
}