const {User, encryptPassword, sanitize} = require('../models/User')


const getUserById = async (userId) => {
    return User.findById(userId)
}

const createUser = async (user) => {
    try {
        const encryptedPassword = await encryptPassword(user.password)
        const saveUser = new User({
            email : user.email, 
            userName : user.userName, 
            encryptedPassword : encryptedPassword
        }) 
        const savedUser = await saveUser.save()
        return sanitize(savedUser)     
    } catch (error) {
        console.log('error at createUser', error);
    }
    
}

module.exports = {
    getUserById, 
    createUser
}