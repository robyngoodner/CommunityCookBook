//External Modules
require('dotenv').config();
require('./models/index')
require('./config/passport');
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport')


//Internal Modules
const routes = require('./routes');

//Instanced Module
const app = express();

//Middleware
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.use(
    session({
        secret: "crowdsourcedCookBook",
        resave: false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes.contributors)
app.use('/', routes.oauth)

//Internal Routes
app.use('/recipes', routes.recipes)
//etc

//System Variables
const PORT = process.env.PORT || 3000;

//App Config
app.set('view engine', 'ejs');

//Server bind
app.listen(PORT, function() {
    console.log(`Server active on port ${PORT}`);
});