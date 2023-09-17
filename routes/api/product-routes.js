const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

// get all products
router.get("/", (req, res) => {
  // Creates a GET route at `/api/products` that returns all products
  // be sure to include its associated Category and Tag data
  Product.findAll({
    // Finds all products
    include: [
      {
        model: Category, // Includes the Category model
        attributes: ["category_name"], // Returns the category_name attribute
      },
      {
        model: Tag, // Includes the Tag model
        attributes: ["tag_name"], // Returns the tag_name attribute
      },
    ],
  })
    .then((productData) => res.json(productData)) // Sends the product data as a json response
    .catch((err) => {
      // If there's an error, returns the error as a json response
      console.log(err); // Logs the error to the console
      res.status(500).json(err); // Returns the error as a json response
    });
});

// get one product
router.get("/:id", (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  Product.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Category,
        attributes: ["category_name"],
      },
      {
        model: Tag,
        attributes: ["tag_name"],
      },
    ],
  })
    .then((productData) => res.json(productData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create new product
router.post("/", (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 50.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        // If there are tagIds in the request body
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          // Creates an array of productTagIds
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr); // Returns the productTagIds
      }
      // If there are no tagIds respond with status 200 and Json representation of the product
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds)) // Sends the productTagIds as a json response
    .catch((err) => {
      // If there's an error, returns the error as a json response
      console.log(err);
      res.status(400).json(err); //Returns status 400 for a bad request as a json response
    });
});

// Update product
router.put("/:id", (req, res) => {
  // Updates a product by its `id` value
  Product.update(req.body, {
    // Updates the product data
    where: {
      // Finds the product based on the id given in the request parameters
      id: req.params.id,
    },
  })
    .then((product) => {
      return ProductTag.findAll({ where: { product_id: req.params.id } }); // Finds all associated product tags
    })
    .then((productTags) => {
      // productTags is an array of objects
      const productTagIds = productTags.map(({ tag_id }) => tag_id); // Using the map method, creates an array of productTagIds
      const newProductTags = req.body.tagIds // Creates an array of new productTagIds
        .filter((tag_id) => !productTagIds.includes(tag_id)) // Filtering out the productTagIds that are not in the request body
        .map((tag_id) => {
          // map method creates an array of objects
          return {
            product_id: req.params.id, // Sets the product_id to the id given in the request parameters
            tag_id,
          };
        });
      // Figure out which ones to remove
      const productTagsToRemove = productTags // Creates an array of productTagIds to remove
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id)) // Filters out the productTagIds that are not in the request body
        .map(({ id }) => id); // Creates an array of productTagIds to remove

      // Run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }), // Destroys the productTagIds to remove
        ProductTag.bulkCreate(newProductTags), // Creates the new productTagIds
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // If there's an error, returns the error as a json response
      res.status(400).json(err); // Returns status 400 for a bad request as a json response
    });
});

// Delete one product by its `id` value
router.delete("/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((productData) => {
      if (!productData) {
        // If no product is found with that id, return an error
        res.status(404).json({ message: "No Product found with that ID." });
        return;
      }
      res.json(productData); // else return the product data
    })
    .catch((err) => {
      // If there's an error, return the error
      console.log(err);
      res.status(500).json(err); // Return status 500 which is a server error
    });
});

module.exports = router; // Exports the router object
