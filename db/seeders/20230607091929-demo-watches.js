/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const watchesData = [
      {
        typeId: 1,
        name: 'Как мамы',
        image: 'https://images.unsplash.com/photo-1573261821759-fdd1b36d9ca5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'Солидные',
        orderId: 1,
      },
      {
        typeId: 1,
        name: 'Как у кореша',
        image: 'https://images.unsplash.com/photo-1580287017488-706e4d7598a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'Классные',
        orderId: 1,
      },
      {
        typeId: 1,
        name: 'Не розовый закат',
        image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1010&q=80',
        description: 'Крутяк',
        orderId: 1,
      },
      {
        typeId: 1,
        name: 'Как у деда',
        image: 'https://images.unsplash.com/photo-1617265860230-7794d7c2bcaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
        description: 'Для суровых',
        orderId: 1,
      },
      {
        typeId: 1,
        name: 'Как папы',
        image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'Что-то на богатом',
        orderId: 1,
      },
      {
        typeId: 2,
        name: 'Синий закат',
        image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'С синим песочком',
        orderId: 2,
      },
      {
        typeId: 2,
        name: 'Золотой закат',
        image: 'https://images.unsplash.com/photo-1590773871641-c5564fa5312c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'С золотым песочком',
        orderId: 2,
      },
      {
        typeId: 2,
        name: 'Не розовый закат',
        image: 'https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'С обычным песочком',
        orderId: 2,
      },
      {
        typeId: 2,
        name: 'Голубой закат',
        image: 'https://images.unsplash.com/photo-1640609432611-f4e2ae26898c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
        description: 'С голубым песочком',
        orderId: 2,
      },
      {
        typeId: 2,
        name: 'Черный закат',
        image: 'https://images.unsplash.com/photo-1602176639962-4b9eb28cfa4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'С черным песочком',
        orderId: 2,
      },
      {
        typeId: 3,
        name: 'Современные',
        image: 'https://images.unsplash.com/photo-1575203091586-611fe505bb0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'Минималистичные',
        orderId: 3,
      },
      {
        typeId: 3,
        name: 'Как в музее',
        image: 'https://images.unsplash.com/photo-1602503497793-4094d8c53e88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
        description: 'Ааагонь',
        orderId: 3,
      },
      {
        typeId: 3,
        name: 'Норм часы',
        image: 'https://images.unsplash.com/photo-1668678437217-ad4bcac34f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'Подойдет для всех',
        orderId: 3,
      },
      {
        typeId: 3,
        name: 'Как на работе',
        image: 'https://images.unsplash.com/photo-1649583501374-f2a7ab8a4cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=937&q=80',
        description: 'С римскими циферками',
        orderId: 3,
      },
      {
        typeId: 3,
        name: 'Как у бабушки',
        image: 'https://images.unsplash.com/photo-1656517094120-f38b8d635589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
        description: 'Обычные',
        orderId: 3,
      },
    ];
    const watches = watchesData.map((watch) => ({
      ...watch,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Watches', watches);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Watches');
  },
};
