const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.recipes.idx);
router.get('/new', ctrl.recipes.newRecipe);
router.post('/', ctrl.recipes.create);

module.exports = router;