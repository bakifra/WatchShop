const router = require('express').Router();
const About = require('../../components/About');

router.get('/', async (req, res) => {
  try {
    res
      .status(200)
      .send(
        res.renderComponent(About, { title: 'Часы от Романа' }),
      );
  } catch (error) {
    console.error(error.message, 'МЭЙН РОУТЕС ПРИЛЁГ');
    res.status(500);
  }
});

module.exports = router;
