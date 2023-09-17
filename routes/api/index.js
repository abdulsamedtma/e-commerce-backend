// Import the router and all API routes
const router = require('express').Router();
const categoryRoutes = require('./category-routes'); // Imports the category-routes.js file
const productRoutes = require('./product-routes'); // Imports the product-routes.js file
const tagRoutes = require('./tag-routes'); // Imports the tag-routes.js file

router.use('/categories', categoryRoutes); // Adds the prefix of `/categories` to routes created in `category-routes.js`
router.use('/products', productRoutes); // Adds the prefix of `/products` to routes created in `product-routes.js`
router.use('/tags', tagRoutes); // Adds the prefix of `/tags` to routes created in `tag-routes.js`

module.exports = router; // Exports the router object
