const router = require('express').Router();
const WatchItem = require('../../components/WatchItem');
const { Watch } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const watchs = await Watch.findAll({ raw: true, exclude: ['user_id', 'type_id'] });
    res.json(watchs);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:watchId', async (req, res) => {
  try {
    const watch = await Watch.findOne({ raw: true, where: { id: req.params.watchId } });
    res.json(watch);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, image, type_id } = req.body;
    const newWatch = await Watch.create({
      name,
      image,
      type_id,
      user_id: req.session.userId,
    });
    res.json({
      message: 'success',
      html: res.renderComponent(WatchItem, { watch: newWatch }, { htmlOnly: true }),
    });
  } catch ({ message }) {
    res.json({ message });
  }
});
router.delete('/:watchId', async (req, res) => {
  try {
    const { watchId } = req.params;
    const result = await Watch.destroy({ where: { id: watchId, user_id: req.session.userId } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:watchId', async (req, res) => {
  try {
    const { watchId } = req.params;
    const { name, image, type_id } = req.body;
    const watch = await Watch.update(
      {
        name,
        image,
        user_id: req.session.userId,
        type_id,
      },
      { where: { id: watchId, user_id: req.session.userId } }
    );
    res.json(watch);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;