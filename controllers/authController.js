const { registerValidation, loginValidation } = require('./validation/authValidation')
const { userService } = require('../services/index')
const { InternalServerErr, ValidationFailedErr } = require('../errors/index')

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
        res.json(registered)
        next()
    } catch (error) {
        InternalServerErr(res, error)
        return
    }

}

const loginUser = async (req, res, next) => {
    const user = req.body
    try {
        await loginValidation(user)
    } catch (error) {
        //TODO: elaborate
        console.log('at validation');
    }

    try {
        const accessToken = await userService.loginUser(user)
        res.header('Authorization', accessToken).json({message:'successfully registered'})
        next()
    } catch (error) {
        //TODO: elaborate 
        console.log('error at login user', error)
    }
}

module.exports = {
    registerUser,
    loginUser
}