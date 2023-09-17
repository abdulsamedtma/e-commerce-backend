const { Product } = require("../models"); // Imports the Product model

// Creates an array of objects that will be used to seed the Product model
const productData = [
  {
    product_name: "Plain T-Shirt", // Product name
    price: 14.99, // Product price
    stock: 14, // Product stock
    category_id: 1, // Product category id
  },
  {
    product_name: "Running Sneakers",
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: "Branded Baseball Hat",
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: "Top 40 Music Compilation Vinyl Record",
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: "Cargo Shorts",
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData); // Uses the bulkCreate method to seed the Product table

module.exports = seedProducts; // Exports the seedProducts function
