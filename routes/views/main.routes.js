
const router = require('express').Router();
const MainPage = require("../../components/MainPage");

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

//router.get('/', (req, res) => {
  //res.send(res.renderComponent(MainPage, { title: 'Main page' }));

//});

module.exports = router;
