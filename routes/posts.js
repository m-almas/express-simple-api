const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')
const {postController} = controller

router.get('/', postController.getPosts);

router.get('/:id', postController.getPostById);

router.post('/create', postController.postBlog);

module.exports = router;