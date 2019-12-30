const { User, encryptPassword, sanitize } = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const getUserById = async (userId) => {
    return User.findById(userId)
}

const createUser = async (user) => {
    try {
        const encryptedPassword = await encryptPassword(user.password)
        const saveUser = new User({
            email: user.email,
            userName: user.userName,
            encryptedPassword: encryptedPassword
        })
        const savedUser = await saveUser.save()
        return sanitize(savedUser)
    } catch (error) {
        //TODO: elaborate
        console.log('error at createUser', error);
    }

}

const loginUser = async (user) => {
    //TODO: comparePassword and email 
    const fetchedUser = await User.findOne({ email: user.email })
    if (!fetchedUser) { throw { message: 'Incorrect email or password' }}
    const isCorrect = bcrypt.compareSync(user.password, fetchedUser.encryptedPassword);
    if (!isCorrect) { throw { message: 'Incorrect email or password' }}
    const accessToken = jwt.sign({
                    _id: fetchedUser._id
                }, process.env.TOKEN_SECRET)
    return accessToken
}

module.exports = {
    getUserById,
    createUser,
    loginUser
}