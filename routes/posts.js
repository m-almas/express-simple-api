const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')
const {postController} = controller
const {UnexpectedErr} = require('../errors/index')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(
            {
                posts: posts,
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

router.post('/create', postController.postBlog);

module.exports = router;