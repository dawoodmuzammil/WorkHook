const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    dob: Date,
    userType: String,
    isStudent: Boolean 
})

module.exports = mongoose.model('User', UserSchema);