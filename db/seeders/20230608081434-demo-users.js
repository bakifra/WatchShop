/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const rawPass = '123';
    const user = [{
      name: 'admin',
      email: '2814598@inbox.ru',
      password: await bcrypt.hash(rawPass, 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }];

    await queryInterface.bulkInsert('Users', user);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
