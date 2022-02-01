// const res = require('express/lib/response');
const db = require('../models');

// Rest Routes
/*
 * Index - GET - /recipes  - Presentational - respond with all recipes
 * New - GET - /recipes/new  - Presentational Form - a page with a form to create a new recipe
 * Show - GET - /recipes/:id  - Presentational - respond with specific recipe by id
 * Create - Post - /recipes  - Functional - recieve data from new route to create a recipe
 * Edit - GET - /recipes/:id/edit  - Presentational Form - respond with a form prefilled with recipe data
 * Update - PUT - /recipes/:id  - Functional - recieve data from edit to update a specific recipe
 * Delete - DELETE - /recipes/:id  - Functional - Deletes recipe by id from request
 */


//index
//grab all recipes, give to ejs
const idx = (req, res) => {
    db.Recipe.find({}, (err, foundRecipes) => {
        if(err) res.send(err);

        const context = { recipes: foundRecipes };
        res.render("recipes/index", context)
    });
};

//new

const newRecipe = (req, res) => {
    db.Contributor.find({}, (err, foundContributors) => {
        if(err) res.send(err);
        
        const context = { contributors: foundContributors };
        res.render("recipes/new", context)
    })
}

//create recipe
const create = (req, res) => {
    db.Recipe.create(req.body, (err, createdRecipe) => {
        if(err) res.send(err);
        db.Contributor.findById(req.user).exec(function (err, foundContributor) {
            if(err) res.send(err);
            //update contributor recipes array
            foundContributor.recipes.push(createdRecipe); //adds recipe to contributor
            foundContributor.save(); //save contributor
            console.log(createdRecipe);
            res.redirect("/recipes")
        })
    });
}


module.exports = {
    idx,
    newRecipe,
    create,
}