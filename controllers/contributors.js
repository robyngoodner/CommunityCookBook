const ContributorModel = require('../models/Contributor');

function index (req, res, next) {
    ContributorModel.find({}, function (err, contributors) {
        res.render('index', {
            contributors,
            user: req.user
        })
    })
}

module.exports = {
    index
}