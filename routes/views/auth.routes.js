const router = require('express').Router();
const LogAdmin = require('../../components/LogAdmin');

router.get('/', (req, res) => {
  console.log('hi');
  res.end();
});

router.get('/log', (req, res) => {
  res.send(res.renderComponent(LogAdmin, { title: 'LogAdmin page' }));
});

module.exports = router;
