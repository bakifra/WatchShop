const router = require('express').Router();

const mainRoute = require('./views/main.routes');

const authRoute = require('./views/auth.routes');
const authApiRoute = require('./api/auth.routes');

router.use('/', mainRoute);
router.use('/admin', authRoute);
router.use('/api/admin', authApiRoute);


module.exports = router;
