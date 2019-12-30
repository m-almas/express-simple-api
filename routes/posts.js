const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')
const {postController, tokenController} = controller
router.use('/:id',tokenController)
router.get('/', postController.getPosts);
router.get('/:id', postController.getPostById);

router.post('/create', postController.postBlog);

module.exports = router;