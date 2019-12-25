const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const verify = require('./verifyToken');
const {UnexpectedErr} = require('../errors/index');
//Routes
router.use(verify)  
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(
            {
                posts: posts,
                user: req.user
            });
    } catch (error) {
        UnexpectedErr(res)
    }
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;

    try {
        const post = await Post.findById(id);
        res.json(post);
    } catch (error) {
        UnexpectedErr(res)
    }
});

router.post('/create', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    })
    try {
        const savedData = await post.save();
        res.json(savedData);
    } catch (error) {
        res.json({ message: error });
    }

});

module.exports = router;