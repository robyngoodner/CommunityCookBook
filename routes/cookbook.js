const router = require('express').Router();
const ctrl = require('../controllers')

router.get('/', ctrl.contributors.index)

module.exports = router;