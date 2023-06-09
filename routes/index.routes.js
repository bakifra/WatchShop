const router = require('express').Router();

const mainRoute = require('./views/main.routes');
const authRoute = require('./views/auth.routes');

const AdminMainRoute = require('./views/admin.main.routes');
const ApiAuthRoute = require('./api/Api.auth.routes');

router.use('/', mainRoute);
router.use('/admin', authRoute);
router.use('/admin-main', AdminMainRoute);

router.use('/api/admin', ApiAuthRoute);


module.exports = router;
