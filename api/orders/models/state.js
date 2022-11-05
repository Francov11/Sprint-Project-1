const mongoose = require('../../config/db.config')
const { Schema } = mongoose

//Status model
const statusScheme = new Schema({
    state: { type: String, required: true},
},
    {
        timestamps: true
    }
)
const orderStatus = mongoose.model('orderStatus', statusScheme)

//Exports
module.exports = orderStatus
