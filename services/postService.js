const Post = require('../models/Post')

const getPosts = async () => {
    return await Post.find()
}

const getPostById = async(postId) => {
    return await Post.findById(postId)
}

const createPost = async (content) => {
    const post = new Post({
        title: content.title,
        description: content.description,
    })
    const savedPost = await post.save()
    return savedPost
}

module.exports = {
    createPost, 
    getPosts,
    getPostById
}