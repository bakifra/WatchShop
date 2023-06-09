const getform = require('express').Router();
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
      from: 'Тикики-Такики <2814598@inbox.ru>',
      to: req.body.email,
      subject: 'Ваш заказ на изготовление часов принят!',
      text: `Поздравляем!\nВы успешно оставили заказ на уникальные часы ручной работы! В ближайшее время с Вами свяжется наш менеджер по оставленному вами телефону ${phone}, для уточнения деталей.\nВаш заказ:\nОписание:${orderDescription}\nЭскизы доступны по ссылкам: ${img1}\n${img2}\n\nДанное письмо не требует ответа. Если вы хотите изменить детали заказа позвоните по номеру 8-800-555-35-35 каждый последний четверг нечётного месяца кроме Ноября\nСпасибо!\n\nВаш Ромочка.`,
    };
    mailer(messageAnswer);
    res.json({ message: 'ok' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = getform;
