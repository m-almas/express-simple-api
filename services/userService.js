const User = require('../models/User')


const getUserById = async (userId) => {
    return User.findById(userId)
}

const createUser = async (user) => {
    const saveUser = new User(user)
    return saveUser.save()
}

module.exports = {
    getUserById, 
    createUser
}