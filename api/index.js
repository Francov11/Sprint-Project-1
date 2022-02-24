const express = require('express');
const cors = require('cors')
const passport = require('passport')
const helmet = require('helmet')
const session = require('express-session')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(passport.initialize())
app.use(session({
    secret: 'mi-secreto'
}))

const auth0 = require('./auth0/config/config')
app.use('/', auth0)

const auth = require('./users/routes/auth');
app.use('/auth', auth);

const users = require('./users/routes/users');
app.use('/users', users);

const addressBook = require('./users/routes/addressBook');
app.use('/addressBook', addressBook);

const products = require('./products/routes/products.routes');
app.use('/products', products);

const payments = require('./payments/routes/routes');
app.use('/payments', payments);

const orders = require('./orders/routes/Orders.routes');
app.use('/orders', orders);

const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server listening on port http://localhost:${port}`);
})

module.exports = app