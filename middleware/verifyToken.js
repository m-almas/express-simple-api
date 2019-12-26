const jwt = require('jsonwebtoken')
const {InvalidToken, AccessDenied} = require('../errors/index')

module.exports = function(req,res,next) {
    let token = req.header('Authorization')
    
    if (!token) return AccessDenied(res)
   
    token = token.split(' ')[1]
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return InvalidToken(res)
    }
}
