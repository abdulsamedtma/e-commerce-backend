const { Category } = require('../models'); // Imports the Category model

// Creates an array of objects that will be used to seed the Category model
const categoryData = [
  {
    category_name: 'Shirts', 
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);  // Uses the bulkCreate method to seed the Category table

module.exports = seedCategories; // Exports the seedCategories function
