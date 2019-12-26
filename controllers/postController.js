const {postService} = require('../services/index') // accessing service 
const {UnexpectedErr} = require('../errors/index')

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
        res.json(post)
    } catch (error) {
        UnexpectedErr(res, error)
    }
}

const postBlog = async (req, res, next) => {
    const {title, description} = req.body
    try {
        saved = await postService.createPost({title, description})
        res.status(201).json(saved)
        next()
    } catch (error) {
        console.log(error);
        
    }
} 

module.exports = {
    postBlog,
    getPosts
}