const router = require('express').Router();

const mainRoute = require('./views/main.routes');
const authRoute = require('./views/auth.routes');

const AdminMainRoute = require('./views/admin.main.routes');
const ApiAuthRoute = require('./api/Api.auth.routes');
const ApiRoute = require('./api/api.routes');

// const ApiWatchRoute = require('./api/Api.auth.routes');

// const AdminCardsPageRoute = require('./views/admin.cards.routes');

const ApiFeddbackFormRoute = require('./api/Api.feddbackForm.route');

router.use('/', mainRoute);
router.use('/admin', authRoute);
router.use('/admin-main', AdminMainRoute);

router.use('/api/admin', ApiAuthRoute);
router.use('/api/customers', ApiRoute);

router.use('/watches', watchesRoute);
// router.use('/admin-main', AdminCardsPageRoute);
router.use('/api/form', ApiFeddbackFormRoute);

module.exports = router;
