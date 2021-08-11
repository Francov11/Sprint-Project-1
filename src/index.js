const express = require('express')
const app = express()

app.use(express.json())
   

const users = require('./routes/users');
app.use('/users', users);

const products = require('./routes/products');
app.use('/products', products);

app.listen(4000)