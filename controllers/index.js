//import all relevant controllers here and export from one place 
const postController = require('./postController')
const userController = require('./userController')
module.exports = {
    postController, 
    userController
}