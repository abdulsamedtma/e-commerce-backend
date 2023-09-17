const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {} // Initialize Tag model (table) by extending off Sequelize's Model class

Tag.init( // Set up fields and rules for Tag model
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER, // Integer
      allowNull: false, // Doesn't allow null values
      primaryKey: true, // Set as primary key
      autoIncrement: true, // Uses auto increment
    },
    tag_name: { // Define tag_name column
      type: DataTypes.STRING, // String 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
