

const invalidToken = function (res) {
    res.status(400).json('Invalid Token')
}

const accessDenied = function (res) {
    res.status(401).json('Access denied')
}

const unexpectedErr = function (res) {
    res.status(500).json('Internal server error')
}

module.exports = {
    InvalidToken: invalidToken,
    AccessDenied: accessDenied,
    UnexpectedErr: unexpectedErr
}