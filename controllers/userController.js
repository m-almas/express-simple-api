const {userService} = require('../services/index')
const {CannotFindUserErr} = require('../errors/index')

const getUserById = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.userId)
        res.json({user: user})
        next()
    } catch (error) {
        CannotFindUserErr(res, error)
    }
}

module.exports = {
    getUserById, 
}