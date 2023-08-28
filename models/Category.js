const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Add the association
Category.associate = (models) => {
  Category.hasMany(models.Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE', // This ensures that if a category is deleted, associated products are also deleted
  });
};

module.exports = Category;
