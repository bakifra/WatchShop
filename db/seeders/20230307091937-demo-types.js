/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const typesData = [
      {
        type_name: 'наручные часы',
      },
      {
        type_name: 'песочные часы',
      },

      {
        type_name: 'настенные часы',
      },
    ];
    const types = typesData.map((type) => ({
      ...type,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Types', types);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Types');
  },
};
