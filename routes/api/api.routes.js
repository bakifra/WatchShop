const router = require('express').Router();
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// var database = require('')

const { Customer } = require('../../db/models');
// работаем по пути /api/customers'

router.get('/', async (req, res) => {
  try {
    const customers = await Customer.findAll({
      raw: true,
    });
    await fs.writeFile('sample.json', JSON.stringify(customers), (err) => {
      if (err) console.log('Error');
    });
    console.log(customers);

    const csvWriter = createCsvWriter({
      path: 'public/customers.csv',
      header: [
        { id: 'name', title: 'NAME' },
        { id: 'email', title: 'EMAIL' },
        { id: 'phone', title: 'PHONE' },
        { id: 'createdAt', title: 'ZAREGAN'},
      ],
    });

    await csvWriter.writeRecords(customers, 'utf-8'); // returns a promise

    console.log('Успешно стыбрили базу');
    res.download('public/customers.csv');
    // res.json(watchs);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;

// читать csv
// npm i csv-parser csv-writer
