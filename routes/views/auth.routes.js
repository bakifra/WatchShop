const router = require('express').Router();
const LogAdmin = require('../../components/LogAdmin');
// const RegAdmin = require('../../components/RegAdmin');

// router.get('/reg', (req, res) => {
//   res.send(res.renderComponent(RegAdmin, { title: 'RegAdmin page' }));
// });

router.get('/', (req, res) => {
  // if (userId) {
  //   res.redirect('/admin');
  // } else {
  //   res.redirect('/admin/log');
  // }
  // res.redirect('/admin/log');
  console.log('hi');
  res.end();
});

router.get('/log', (req, res) => {
  res.send(res.renderComponent(LogAdmin, { title: 'LogAdmin page' }));
});

module.exports = router;

// {"cookie":{"originalMaxAge":43200000,"expires":"2023-06-09T00:05:03.987Z","httpOnly":true,"path":"/"},"userId":1,"__lastAccess":1686225903988}
// {"cookie":{"originalMaxAge":43200000,"expires":"2023-06-09T00:06:34.268Z","httpOnly":true,"path":"/"}}
