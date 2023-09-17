const seedCategories = require('./category-seeds'); // Imports the seedCategories function
const seedProducts = require('./product-seeds'); // Imports the seedProducts function
const seedTags = require('./tag-seeds'); // Imports the seedTags function
const seedProductTags = require('./product-tag-seeds'); // Imports the seedProductTags function

const sequelize = require('../config/connection'); // Imports the connection to the database

// Creates a function that seeds the database
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n'); // Syncs the database and logs a message to the console
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n'); // Seeds the Category table and logs a message to the console

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n'); // Seeds the Product table and logs a message to the console

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n'); // Seeds the Tag table and logs a message to the console

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n'); // Seeds the ProductTag table and logs a message to the console

  process.exit(0); // Exits the process
};

seedAll(); // Calls the seedAll function
