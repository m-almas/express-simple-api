//import all relevant controllers here and export from one place 
const postController = require('./postController')
const userController = require('./userController')
const authController = require('./authController')
module.exports = {
    postController, 
    userController, 
    authController, 
}