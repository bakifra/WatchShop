'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const ordersData = [
      {
        customerId: 1,
        orderDescription: 'Хочу розовенькие',
        img1: 'https://spb.kronostime.ru/upload/iblock/296/casio-ltp-1303d-4a_1.jpg',
        img2: 'https://spb.kronostime.ru/upload/iblock/296/casio-ltp-1303d-4a_1.jpg',
      },
      {
        customerId: 2,
        orderDescription: 'Хочу не такие',
        img1: 'https://spb.kronostime.ru/upload/iblock/296/casio-ltp-1303d-4a_1.jpg',
        img2: 'https://spb.kronostime.ru/upload/iblock/296/casio-ltp-1303d-4a_1.jpg',
      },

      {
        customerId: 3,
        orderDescription: 'Такие же но голубые',
        img1: 'https://spb.kronostime.ru/upload/iblock/296/casio-ltp-1303d-4a_1.jpg',
        img2: 'https://spb.kronostime.ru/upload/iblock/296/casio-ltp-1303d-4a_1.jpg',
      },

      {
        customerId: 4,
        orderDescription: 'Сделайте красиво',
        img1: 'https://spb.kronostime.ru/upload/iblock/296/casio-ltp-1303d-4a_1.jpg',
        img2: 'https://spb.kronostime.ru/upload/iblock/296/casio-ltp-1303d-4a_1.jpg',
      },

      {
        customerId: 5,
        orderDescription: 'Сделайте побыстрее неважно как',
        img1: 'https://spb.kronostime.ru/upload/iblock/296/casio-ltp-1303d-4a_1.jpg',
        img2: 'https://spb.kronostime.ru/upload/iblock/296/casio-ltp-1303d-4a_1.jpg',
      }
    ];
    const orders = ordersData.map((order) => ({
      ...order,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Orders', orders);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Orders');
  },
};