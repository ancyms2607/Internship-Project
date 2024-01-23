const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    role: [{
        type: String,
        default: "Admin"
    }],
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema)