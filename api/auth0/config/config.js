const express = require('express');
const passport = require('passport')
const auth0Strategy = require('passport-auth0').Strategy
const router = express.Router();

passport.use(new auth0Strategy({
    clientID: 'bwh3w3skgdVpRCwbsXSCViQ1RvN9HhiZ',
    clientSecret: 'C89vf7iQgMEpKAKzWzkGitN947ZlX97OkO6Mta3rlR_k2VTFAS5tLyQXcNSa2D4E',
    callbackURL: 'http://localhost:8080/auth0/callback',
    domain: 'dev-1gss67mj.us.auth0.com'
}, (accessToken, refreshToken, profile, done) => {
    if (profile) {
        console.log(profile)
        // toda la logica que quieran realizar con la info del usuario
        done(null, profile)
    } else {
        done(new Error('No se pudo ingresar'))
    }
}))

router.get('/login/auth0', passport.authenticate('auth0'))

router.get('/auth0/callback', passport.authenticate('auth0', {
    failureRedirect: '/error',
    successRedirect: '/home'
}))

module.exports = router