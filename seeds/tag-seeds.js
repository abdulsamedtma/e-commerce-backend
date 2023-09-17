const { Tag } = require('../models'); // Imports the Tag model

// Creates an array of objects that will be used to seed the Tag model
const tagData = [
  {
    tag_name: 'rock music', // Tag name
  },
  {
    tag_name: 'pop music', // Tag name
  },
  {
    tag_name: 'blue', // Tag name
  },
  {
    tag_name: 'red', // Tag name
  },
  {
    tag_name: 'green', // Tag name
  },
  {
    tag_name: 'white', // Tag name
  },
  {
    tag_name: 'gold', // Tag name
  },
  {
    tag_name: 'pop culture', // Tag name
  },
];

const seedTags = () => Tag.bulkCreate(tagData); // Uses the bulkCreate method to seed the Tag table

module.exports = seedTags; // Exports the seedTags function
