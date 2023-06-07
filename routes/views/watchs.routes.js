const router = require('express').Router();
const WatchPage = require('../../components/WatchPage');
const Watchs = require('../../components/Watchs');
const { Watch, Type } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    // const animals = await Animal.findAll({
    //   raw: true,
    //   order: [['id', 'ASC']],
    //   include: {
    //     model: User,
    //     include: {
    //       model: Like,
    //     },
    //   },
    // });
    const watchs = await Watch.findAll({
      order: [['id', 'ASC']],
      include: {
        model: Type,
      },
    });
    res.send(res.renderComponent(Watchs, { title: 'Animals page', watchs }));
  } catch ({ message }) {
    res.json(message);
  }
});

router.get('/:watchId', async (req, res) => {
  try {
    const { watchId } = req.params;
    const watch = await Watch.findOne({ where: { id: watchId } });
    res.send(res.renderComponent(WatchPage, { title: 'Watch page', watch }));
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;