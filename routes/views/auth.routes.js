const router = require('express').Router();
const LogAdmin = require('../../components/LogAdmin');
// const RegAdmin = require('../../components/RegAdmin');

// router.get('/reg', (req, res) => {
//   res.send(res.renderComponent(RegAdmin, { title: 'RegAdmin page' }));
// });

router.get('/', (req, res) => {
  res.redirect('/admin/log');
});

router.get('/log', (req, res) => {
  res.send(res.renderComponent(LogAdmin, { title: 'LogAdmin page' }));
});

module.exports = router;
