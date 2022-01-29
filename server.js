//External Modules
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');

//Internal Modules
const routes = require('./routes');

//Instanced Module
const app = express();

//Middleware
app.use(express.static("public"));
app.use(methodOverride("_method"));

//Internal Routes
//app.use('/recipes, routes.recipes)
//etc

//System Variables
const PORT = 3000;

//App Config
app.set('view engine', 'ejs');

//Routes
app.get('/', (req, res) => {
    res.render('index')
})

//Server bind
app.listen(PORT, function() {
    console.log(`Server active on port ${PORT}`);
});