const getform = require('express').Router();
// const newOrder = require('../../components/FeedbackForm');s
// const db = require('../../db/models');
// const { json } = require('sequelize');
const mailer = require('../../nodemailer');
const { Order, Customer } = require('../../db/models');

getform.post('/newOrder', async (req, res) => {
  const {
    name, phone, email, orderDescription, img1, img2,
  } = req.body;
  try {
    const newCustomer = await Customer.create({ name, phone, email });
    const customId = newCustomer.id;
    await Order.create({
      orderDescription, img1, img2, customerId: customId,
    });

    const messageAnswer = {
      from: 'WatchShop <2814598@inbox.ru>',
      to: req.body.email,
      subject: 'Ваш заказ принят!',
      text: 'Поздравляем! Вы успешно оставили заказ на уникальные часы ручной работы! В ближайшее время с Вами свяжется наш менеджер, для уточнения деталей. Данное письмо не требует ответа.',
    };
    mailer(messageAnswer);
    res.json({ message: 'ok' });
    
    // res.json({ message: 'ok' });
    // res.redirect('/');
    // res.json({ message: 'Успешно отправлено' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = getform;
