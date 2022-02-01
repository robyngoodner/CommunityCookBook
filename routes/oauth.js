const router = require('express').Router();
const passport = require('passport');

//Google oauth login
router.get(
    "/auth/google",
    passport.authenticate('google', {scope: ['profile', 'email']})
);

//Google oath callback route
router.get(
    "/oauth2callback",
    passport.authenticate('google', {
        successRedirect: '/recipes',
        failureRedirect: '/'
    })
);

//Google oauth logout route
router.get(
    '/logout',
    function(req, res) {
        req.logout();
        res.redirect('/')
    }
)

module.exports = router;