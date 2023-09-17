const { ProductTag } = require('../models'); // Imports the ProductTag model

// Creates an array of objects that will be used to seed the ProductTag model
const productTagData = [
  {
    product_id: 1, // Product id
    tag_id: 6, // Tag id
  },
  {
    product_id: 1, // Product id
    tag_id: 7, // Tag id
  },
  {
    product_id: 1, // Product id
    tag_id: 8, // Tag id
  },
  {
    product_id: 2, // Product id
    tag_id: 6, // Tag id
  },
  {
    product_id: 3, // Product id
    tag_id: 1, // Tag id
  },
  {
    product_id: 3, // Product id
    tag_id: 3, // Tag id
  },
  {
    product_id: 3, // Product id
    tag_id: 4, // Tag id
  },
  {
    product_id: 3, // Product id
    tag_id: 5, // Tag id
  },
  {
    product_id: 4, // Product id
    tag_id: 1, // Tag id
  },
  {
    product_id: 4, // Product id
    tag_id: 2, // Tag id
  },
  {
    product_id: 4, // Product id
    tag_id: 8, // Tag id
  },
  {
    product_id: 5, // Product id
    tag_id: 3, // Tag id
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData); // Uses the bulkCreate method to seed the ProductTag table

module.exports = seedProductTags; // Exports the seedProductTags function
