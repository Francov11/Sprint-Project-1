const mongoose = require('mongoose')
const { Schema } = mongoose

//Users model 
const userScheme = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false }
},
    {
        timestamps: true
    }
);

const users = mongoose.model("users", userScheme)

// Exports
module.exports = users