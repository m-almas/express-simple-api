const mongoose = require('mongoose')

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


module.exports = mongoose.model('Users', UserSchema);