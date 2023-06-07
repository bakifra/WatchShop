'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const customersData = [
      {
        name: "Толя",
        email: "tolyane@mail.ru",
        phone: "+78889990000",
      },
      {
        name: "Аня",
        email: "anya_ne@mail.ru",
        phone: "78889990001",
      },
      {
        name: "Артём",
        email: "artem_ne@mail.ru",
        phone: "78889990002",
      },
      {
        name: "Юра",
        email: "Juriy_ne@mail.ru",
        phone: "78889990003",
      },
      {
        name: "Лиза",
        email: "liza_ne@mail.ru",
        phone: "78889990004",
      },
    ];
    const customers = customersData.map((person) => ({
      ...person,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Customers', customers);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Customers');
  },
};
