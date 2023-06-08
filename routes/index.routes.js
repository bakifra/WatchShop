const router = require('express').Router();

const mainRoute = require('./views/main.routes');

const authRoute = require('./views/auth.routes');
const ApiAuthRoute = require('./api/Api.auth.routes');
const watchesRoute = require('./views/watches.routes');

router.use('/', mainRoute);
router.use('/admin', authRoute);
router.use('/api/admin', ApiAuthRoute);
router.use('/watches', watchesRoute);

module.exports = router;
