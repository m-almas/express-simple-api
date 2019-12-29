const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')
const {userController} = controller


router.get('/:userId', userController.getUserById)