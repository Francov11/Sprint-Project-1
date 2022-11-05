const mongoose = require('../../config/db.config')
const { Schema } = mongoose

//Orders model
const orderScheme = new Schema({
  userId: { type: mongoose.Types.ObjectId, require: true },
  order: [
    {
      product: { type: String, require: true },
      productPrice: { type: Number, require: true },
      amount: { type: Number, require: true }
    }
  ],
  state: { type: String, default: 'new' },
  price: { type: Number, require: true },
  methodOfPayment: { type: String, require: true },
  shippingAddress: { type: String, require: true },
},
{
  timestamps: true
}
)

const orders = mongoose.model('orders', orderScheme)

//Exports
module.exports = orders