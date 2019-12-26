const Post = require('../models/Post')

const getPosts = async () => {
    return Post.find()
}

const getPostById = async(postId) => {
    return Post.findById(postId)
}

const createPost = async (content) => {
    const post = new Post({
        title: content.title,
        description: content.description,
    })
    
    return post.save()
}

module.exports = {
    createPost, 
    getPosts,
    getPostById
}