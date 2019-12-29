const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')
const {userController} = controller
//this controller might be needed for admin panel

router.get('/:userId', userController.getUserById)

module.exports = router