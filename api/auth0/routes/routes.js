const auth0Router = require('../config/auth')

app.get('/error', (req, res) => {
    console.log('La autenticacion fallo')
    res.status(401).json('La autenticacion fallo')
})

app.get('/home',  (req, res) => {
    console.log('La autenticacion fue exitosa')
    res.json('La autenticacion fue exitosa')
})

app.get('/logout', (req, res) => {
    req.logout()
    res.json('Sesion cerrada')
})