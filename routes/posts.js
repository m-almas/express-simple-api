const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')
const {postController, tokenController} = controller

router.get('/', postController.getPosts);

router.get('/:id',tokenController, postController.getPostById);

router.post('/create', postController.postBlog);

module.exports = router;