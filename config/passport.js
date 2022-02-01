// require('dotenv').config();
const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const Contributor = require('../models/Contributor')

//console.log(Contributor)

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
        },
        function(accessToken, refreshToken, profile, cb){
            Contributor.findOne({
                googleID: profile.id }, function(err, contributor) {
                    if (err) return cb(err);
                    if(contributor) {
                        return cb(null, contributor);
                    } else {
                        const newContributor = new Contributor({
                            name: profile.displayName,
                            email: profile.emails[0].value,
                            googleId: profile.id,
                        });
                        newContributor.save(function (err) {
                            if (err) return cb(err);
                            return cb(null, newContributor)
                        })
                    }
                })
        }
    )
)

passport.serializeUser(function(contributor, done) {
    done(null, contributor.id);
})

passport.deserializeUser(function(id, done){
    Contributor.findById(id, function(err, contributor) {
        done(err, contributor)
    })
})