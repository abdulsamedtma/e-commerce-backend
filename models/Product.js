// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Set up fields and rules for Product model
Product.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER, // Integer
      allowNull: false, // Doesn't allow null values
      primaryKey: true, // Set as primary key
      autoIncrement: true, // Uses auto increment
    },
    product_name:{ // Define product_name column
      type: DataTypes.STRING, // String
      allowNull: false, // Doesn't allow null values
    },
    price:{ // Define price column
      type: DataTypes.DECIMAL, // Decimal
      allowNull: false, // Doesn't allow null values
      validate:{ // Validates that the value is a decimal
        isDecimal: true,
      }
    },
    stock:{ // Define stock column
      type: DataTypes.INTEGER, // Integer
      allowNull: false, // Doesn't allow null values
      defaultValue: 10, // Set a default value of 10
      validate:{ // Validates that the value is numeric
        isNumeric: true,
      }
    },
    category_id:{ // Define category_id column
      type: DataTypes.INTEGER, // Integer
      references:{ // References the category model's id
        model: 'category',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
