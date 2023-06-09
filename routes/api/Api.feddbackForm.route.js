const getform = require('express').Router();
// const newOrder = require('../../components/FeedbackForm');s
// const db = require('../../db/models');
// const { json } = require('sequelize');
const mailer = require('../../nodemailer');
const { Order } = require('../../db/models');

getform.post('/newOrder', async (req, res) => {
  const {
    name, phone, email, message, img1, img2, customerId,
  } = req.body;
  try {
    const new1Order = await Order.create({
      name, phone, email, message, img1, img2, customerId,
    });
    const messageAnswer = {
      from: 'WatchShop <2814598@inbox.ru>',
      to: req.body.email,
      subject: 'Ваш заказ принят!',
      text: 'Поздравляем! Вы успешно оставили заказ на уникальные часы ручной работы! В ближайшее время с Вами свяжется наш менеджер, для уточнения деталей. Данное письмо не требует ответа.',
    };
    mailer(messageAnswer);
    // res.json(new1Order);
    res.json({
      message: 'ok',
      // html:
    });
    // res.locals.user = new1Order;
    res.json({ message: 'Успешно отправлено' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = getform;
