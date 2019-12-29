const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        max: 255
    },
    userName: {
        type: String,
        required: true,
        min: 3
    },
    encryptedPassword: {
        type: String,
        required: true
    }
},

    {
        timestamps: true
    }
);

async function encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

module.exports.User = mongoose.model('Users', UserSchema);
module.exports.encryptPassword = encryptPassword 