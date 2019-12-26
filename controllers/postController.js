const {postService} = require('../services/index')
const {createPost} = postService

const postBlog = async (req, res, next) => {
    const {title, description} = req.body
    try {
        saved = await createPost({title, description})
        res.status(201).json(saved)
        next()
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    postBlog
}