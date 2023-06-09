
const router = require('express').Router();
const MainPage = require("../../components/MainPage");
const { Watch, Type } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const watches = await Watch.findAll({
      order: [['id', 'ASC']],
      include: {
        model: Type,
      },
    });
    res.send(res.renderComponent(MainPage, { title: 'Watch page', watches }));
  } catch ({ message }) {
    res.json(message);
  }
});
//router.get('/', (req, res) => {
  //res.send(res.renderComponent(MainPage, { title: 'Main page' }));

// });

module.exports = router;
