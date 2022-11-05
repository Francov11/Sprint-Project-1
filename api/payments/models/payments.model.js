const mongoose = require('../../config/db.config')
const { Schema } = mongoose;

//Payments model
const paymentScheme = new Schema({
    method: { type: String, required: true }
},
    {
        timestamps: true
    }
)

const payments = mongoose.model("payments", paymentScheme)

//Exports
module.exports = payments
