'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const customersData = [
      {
        name: "TOLYA",
        email: "tolyane@mail.ru",
        phone: "+78889990000",
      },
      {
        name: "ANNA",
        email: "anya_ne@mail.ru",
        phone: "78889990001",
      },
      {
        name: "ARTEM",
        email: "artem_ne@mail.ru",
        phone: "78889990002",
      },
      {
        name: "JURII",
        email: "Juriy_ne@mail.ru",
        phone: "78889990003",
      },
      {
        name: "LIZA",
        email: "liza_ne@mail.ru",
        phone: "78889990004",
      },
      {
        name: "MARINA",
        email: "marina_ne@mail.ru",
        phone: "78889990005",
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
