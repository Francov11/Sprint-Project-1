require('dotenv')
const express = require('express');
const app = express();
const cors = require('cors')
const helmet = require('helmet')

//Config
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes config
const auth = require('./users/routes/auth');
app.use('/auth', auth);

const users = require('./users/routes/users');
app.use('/users', users);

const products = require('./products/routes/products.routes');
app.use('/products', products);

const payments = require('./payments/routes/routes');
app.use('/payments', payments);

const orders = require('./orders/routes/orders');
app.use('/orders', orders);

//Port
const port = process.env.INDEX_PORT;

app.listen(port, () => {
	console.log(`Server listening on port http://localhost:${port}`);
})

module.exports = app