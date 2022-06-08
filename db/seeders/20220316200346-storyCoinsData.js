'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('StoryCoins', [
      { count: 69, storyId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      { count: 20, storyId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      { count: 44, storyId: 3, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      { count: 55, storyId: 4, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      { count: 22, storyId: 5, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      { count: 35, storyId: 6, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      { count: 65, storyId: 7, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      { count: 88, storyId: 8, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      { count: 15, storyId: 9, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      { count: 33, storyId: 10, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      { count: 56, storyId: 11, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      { count: 78, storyId: 12, userId: 1, createdAt: new Date(), updatedAt: new Date()}
    ], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('StoryCoins', null, {});

  }
};
