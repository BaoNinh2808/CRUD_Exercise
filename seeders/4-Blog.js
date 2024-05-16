"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        title: "6 ways to prepare breakfast for 30",
        description: `<img src="/img/blog/details/details-pic.jpg" alt=""><p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <h3>The corner window forms a place within a place that is a resting point within the large space.</h3>
        <p>The study area is located at the back with a view of the vast nature. Together with the other
        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
        the components. The use of materials seeks connection to the main house, the adjacent
        stables</p>`,
        imagePath: "/img/blog/blog-1.jpg",
        summary:
          "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
        categoryId: 1,
        authorId: 1,
      },
      {
        title: "Visit the clean farm in the US",
        description: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <h3>The corner window forms a place within a place that is a resting point within the large space.</h3>
        <p>The study area is located at the back with a view of the vast nature. Together with the other
        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
        the components. The use of materials seeks connection to the main house, the adjacent
        stables</p>`,
        imagePath: "/img/blog/blog-2.jpg",
        summary:
          "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
        categoryId: 2,
        authorId: 2,
      },
      {
        title: "Cooking tips make cooking simple",
        description: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <h3>The corner window forms a place within a place that is a resting point within the large space.</h3>
        <p>The study area is located at the back with a view of the vast nature. Together with the other
        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
        the components. The use of materials seeks connection to the main house, the adjacent
        stables</p>`,
        imagePath: "/img/blog/blog-3.jpg",
        summary:
          "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
        categoryId: 3,
        authorId: 3,
      },
      {
        title: "Crab Pool Security",
        description: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <h3>The corner window forms a place within a place that is a resting point within the large space.</h3>
        <p>The study area is located at the back with a view of the vast nature. Together with the other
        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
        the components. The use of materials seeks connection to the main house, the adjacent
        stables</p>`,
        imagePath: "/img/blog/blog-4.jpg",
        summary:
          "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
        categoryId: 4,
        authorId: 4,
      },
      {
        title: "The Moment You Need To Remove Garlic From The Menu",
        description: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <h3>The corner window forms a place within a place that is a resting point within the large space.</h3>
        <p>The study area is located at the back with a view of the vast nature. Together with the other
        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
        the components. The use of materials seeks connection to the main house, the adjacent
        stables</p>`,
        imagePath: "/img/blog/blog-5.jpg",
        summary:
          "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
        categoryId: 1,
        authorId: 5,
      },
      {
        title: "6 ways to prepare breakfast",
        description: `<p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        <h3>The corner window forms a place within a place that is a resting point within the large space.</h3>
        <p>The study area is located at the back with a view of the vast nature. Together with the other
        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
        the components. The use of materials seeks connection to the main house, the adjacent
        stables</p>`,
        imagePath: "/img/blog/blog-6.jpg",
        summary:
          "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
        categoryId: 3,
        authorId: 2,
      },
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Blogs", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Blogs", null, {});
  },
};
