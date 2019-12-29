

const invalidToken = function (res) {
    res.status(400).json('Invalid Token')
}

const accessDenied = function (res) {
    res.status(401).json('Access denied')
}

const unexpectedErr = function (res, err) {
    res.status(500).json({ 'message': 'Internal server error', 'error': err })
}

const cannotFindUserErr = function (res, err) {
    res.status(400).json({'message':'can not find the user'})
}

const internalServerErr = function (res, err) {
    res.status(500).json({'message':'internal server error'})
}

module.exports = {
    InvalidToken: invalidToken,
    AccessDenied: accessDenied,
    UnexpectedErr: unexpectedErr, 
    CannotFindUserErr: cannotFindUserErr,
    InternalServerErr: internalServerErr
}