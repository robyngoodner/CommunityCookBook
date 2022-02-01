const db = require('../models');

// Rest Routes
/*
 * Index - GET - /contributors  - Presentational - respond with all contributors
 * New - GET - /contributors/new  - Presentational Form - a page with a form to create a new contributor
 * Show - GET - /contributors/:id  - Presentational - respond with specific contributor by id
 * Create - Post - /contributors  - Functional - recieve data from new route to create a contributor
 * Edit - GET - /contributors/:id/edit  - Presentational Form - respond with a form prefilled with contributor data
 * Update - PUT - /contributors/:id  - Functional - recieve data from edit to update a specific contributor
 * Delete - DELETE - /contributors/:id  - Functional - Deletes contributor by id from request
 */


function index (req, res, next) {
    db.Contributor.find({}, function (err, contributors) {
        res.render('index', {
            contributors,
            user: req.user
        })
    })
}

function about (req, res, next) {
    res.render('about', {
        user: req.user
    })
}

module.exports = {
    index,
    about
}