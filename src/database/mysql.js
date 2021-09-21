const express = require('express');
const Sequelize = require('sequelize');

require('dotenv').config();
const app = express();
app.use(express.json());

/*const sequelize = new Sequelize('mysql://root@localhost/meeting-24');*/
const sequelize = new Sequelize(process.env.MYSQL_DB_NAME, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: "mysql" ,
    logging: true,
    logging: console.log,
    logging: (...msg) => console.log(msg)
}
);
console.log('hola')
async function authenticate_mysql() {
    try {
        await sequelize.authenticate()
        console.log('conectado');
    } catch (error) {
        console.error(error.message);
    }
};
authenticate_mysql();

module.exports = {authenticate_mysql}