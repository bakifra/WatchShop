const router = require('express').Router();
const AdminMain = require('../../components/adminComponents/AdminMain');
const { Watch, Type } = require('../../db/models');

router.get('/', async (req, res) => {
  console.log('hi');
  try {
    const watches = await Watch.findAll({
      order: [['id', 'ASC']],
      include: {
        model: Type,
      },
    });
    res
      .status(200)
      .send(
        res.renderComponent(AdminMain, { title: 'Admin Page', watches }),
      );
  } catch ({ message }) {
    res.send({ message });
  }

  // router.get('/', (req, res) => {
  // res.send(res.renderComponent(MainPage, { title: 'Main page' }));
});

module.exports = router;
