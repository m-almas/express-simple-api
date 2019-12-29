const {registerValidation} = require('./validation/authValidation')
const {userService} = require('../services/index')
const {InternalServerErr, ValidationFailedErr} = require('../errors/index')

const registerUser = async (req, res, next) => {
    const user = req.body 
    try {
        await registerValidation(user)
    } catch (error) {
        ValidationFailedErr(res, error)
        return
    }
    //validated
    try {
        const registered = await userService.createUser(user)
    } catch (error) {
        InternalServerErr(res, error)
        return
    }
    
    res.json(registered)
    next()
}

module.exports = {
    registerUser
}