const router = require('express').Router();
const AdminCardsPage = require('../../components/adminComponents/AdminCardsPage');


const { Watch, Type } = require('../../db/models');




router.get('/', async (req, res) => {
  try {
    const watches = await Watch.findAll({
      order: [['id', 'ASC']],
      include: {
        model: Type,
      },
    });
    res.send(res.renderComponent(AdminCardsPage, { title: 'AdminCardPage', watches }));
  } catch ({ message }) {
    res.json(message);
  }
});


module.exports = router;