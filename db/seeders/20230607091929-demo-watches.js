'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const watchesData = [
      {
        typeId: 1,
        name: 'Не розовый закат',
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        description: 'Очень крутые',
        orderId: 1,
      },
      {
        typeId: 1,
        name: 'Не розовый закат 2',
        image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvbGV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        description: 'Ну Оооочень крутые',
        orderId: 1,
      },
      {
        typeId: 1,
        name: 'Не розовый закат',
        image: 'https://images.unsplash.com/photo-1610889672442-5629e6845d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJvbGV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        description: 'Очень крутые',
        orderId: 1,
      },
      {
        typeId: 1,
        name: 'Не розовый закат',
        image: 'https://www.bestwatch.ru/bigimage/Bulova/96B228.jpg',
        description: 'Очень крутые',
        orderId: 1,
      },
      {
        typeId: 1,
        name: 'Не розовый закат',
        image: 'https://feeltime.com.ua/files/resized/products/feeltime-sevenfriday-p1-05-hulk-olive-case-1.836x836.center.center.jpg',
        description: 'Очень крутые',
        orderId: 1,
      },
      {
        typeId: 2,
        name: 'Не розовый закат',
        image: 'https://www.telegraf-spb.ru/wa-data/public/shop/products/34/20/12034/images/20121/20121.1400x1000.jpg',
        description: 'Очень крутые',
        orderId: 2,
      },
      {
        typeId: 2,
        name: 'Не розовый закат',
        image: 'https://www.telegraf-spb.ru/wa-data/public/shop/products/59/45/14559/images/1763/1763.1400x1000.jpg',
        description: 'Очень крутые',
        orderId: 2,
      },
      {
        typeId: 2,
        name: 'Не розовый закат',
        image: 'https://www.telegraf-spb.ru/wa-data/public/shop/products/22/71/27122/images/46357/46357.1400x1000.jpg',
        description: 'Очень крутые',
        orderId: 2,
      },
      {
        typeId: 2,
        name: 'Не розовый закат',
        image: 'https://cs5.livemaster.ru/storage/4d/e8/d7b8d195729566d0f3b4befd682v--vintazh-vintazhnyj-nabor-pesochnyh-chasov-na-1-3-i-5-min-fran.jpg',
        description: 'Очень крутые',
        orderId: 2,
      },
      {
        typeId: 2,
        name: 'Не розовый закат',
        image: 'https://www.ikea.com/ru/ru/images/products/tillsyn-tillsyun-dekorativnye-pesochnye-chasy-prozrachnoe-steklo-svetlo-rozovyy__0942808_pe796626_S5.JPG',
        description: 'Очень крутые',
        orderId: 2,
      },
      {
        typeId: 3,
        name: 'Не розовый закат',
        image: 'https://fridaywood.ru/wp-content/uploads/2022/01/3016.jpg',
        description: 'Очень крутые',
        orderId: 3,
      },
      {
        typeId: 3,
        name: 'Не розовый закат',
        image: 'https://ae01.alicdn.com/kf/H5a8c9059d8d74991b0bd8ea87dc8b712A.jpg',
        description: 'Очень крутые',
        orderId: 3,
      },
      {
        typeId: 3,
        name: 'Не розовый закат',
        image: 'https://krot.info/uploads/posts/2022-03/1647198771_1-krot-info-p-prikolnii-tsiferblat-smeshnie-foto-1.jpg',
        description: 'Очень крутые',
        orderId: 3,
      },
      {
        typeId: 3,
        name: 'Не розовый закат',
        image: 'https://sunmag.me/wp-content/uploads/2018/09/sunmag-2-prikolnyye-nastennyye-chasy-s-kartinkami.jpg',
        description: 'Очень крутые',
        orderId: 3,
      },
      {
        typeId: 3,
        name: 'Не розовый закат',
        image: 'https://cs2.livemaster.ru/storage/d6/d2/bab43d3f2520d5107dcd0442e0po--dlya-doma-i-interera-dizajnerskie-nastennye-chasy-strekoza.jpg',
        description: 'Очень крутые',
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