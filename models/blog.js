"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blog.belongsTo(models.Category, { foreignKey: "categoryId" });
      Blog.belongsToMany(models.Tag, {
        through: "BlogTag",
        foreignKey: "blogId",
        otherKey: "tagId",
      });
      Blog.belongsTo(models.User, { foreignKey: "authorId" });
      Blog.hasMany(models.Comment, { foreignKey: "blogId" });
    }
  }
  Blog.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      imagePath: DataTypes.STRING,
      summary: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return Blog;
};
