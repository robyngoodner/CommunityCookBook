const router = require('express').Router();
const ctrl = require("../controllers")

router.get('/', ctrl.contributors.index);
router.get('/about', ctrl.contributors.about);

module.exports = router;