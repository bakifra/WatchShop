const router = require('express').Router();
const { Customer } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const customers = await Customer.findAll({
      raw: true,
    });
    console.log(customers);
    // res.json(watchs);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
