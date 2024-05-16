"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        name: "Trending",
      },
      {
        name: "Cooking",
      },
      {
        name: "Healthy Food",
      },
      {
        name: "Life Style",
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Tags", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tags", null, {});
  },
};
