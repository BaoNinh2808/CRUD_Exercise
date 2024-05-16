"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        blogId: 1,
        tagId: 1,
      },
      {
        blogId: 1,
        tagId: 2,
      },
      {
        blogId: 1,
        tagId: 3,
      },
      {
        blogId: 2,
        tagId: 1,
      },
      {
        blogId: 2,
        tagId: 4,
      },
      {
        blogId: 3,
        tagId: 1,
      },
      {
        blogId: 4,
        tagId: 2,
      },
      {
        blogId: 5,
        tagId: 3,
      },
      {
        blogId: 6,
        tagId: 4,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("BlogTag", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("BlogTag", null, {});
  },
};
