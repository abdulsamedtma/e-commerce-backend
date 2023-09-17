const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {} // Initialize ProductTag model (table) by extending off Sequelize's Model class

// Set up fields and rules for ProductTag model
ProductTag.init(
  {
    // Define columns
    id:{
      type: DataTypes.INTEGER, // Integer
      allowNull: false, // Doesn't allow null values
      primaryKey: true, // Set as primary key
      autoIncrement: true, // Uses auto increment
    },
    product_id:{ // Define product_id column
      type: DataTypes.INTEGER, // Integer
      references:{ // References the product model's id
        model: 'product',
        key: 'id',
      }
    },
    tag_id:{ // Define tag_id column
      type: DataTypes.INTEGER, // Integer
      references:{ // References the tag model's id
        model: 'tag',
        key: 'id',
      }
    } 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
