const mongoose = require('../../config/db.config')
const { Schema } = mongoose

//Product model
const productScheme = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    isVisible: { type: String, required: true, default: 'true' },
},
    {
        timestamps: true
    }
)

const products = mongoose.model('products', productScheme)

//Exports
module.exports = products