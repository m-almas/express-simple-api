const Post = require('../models/Post')

const createPost = async (content) => {
    try {
        const post = new Post({
            title: content.title,
            description: content.description, 
        })
        const savedPost = await post.save()
        return savedPost
    } catch (error) {
        throw error
    }
}

module.exports = {
    createPost
}