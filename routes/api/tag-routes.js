const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // Creates a GET route at `/api/tags`
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product,
    },
  })
    .then((tagData) => res.json(tagData)) // Sends the tag data as a json response
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Creates a GET route at `/api/tags/:id`
router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: Product,
  });
});

// Creates a POST route at `/api/tags`
router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name, // Uses the data from the request body to create a new tag
  })
    .then((tagData) => res.json(tagData)) // Sends the tag data as a json response
    .catch((err) => {
      console.log(err);
      res.status(500).json(err); // Returns a server error
    });
});

// Updates a tag's name by its `id` value
router.put("/:id", (req, res) => {
  Tag.update(
    // Updates the tag data where the id matches the request parameter id
    {
      tag_name: req.body.tag_name, // Uses the data from the request body to update the tag name
    },
    {
      where: {
        id: res.params.id,
      },
    }
  )
    .then((tagData) => {
      // Sends the updated tag data as a json response
      if (!tagData) {
        // If no tag with that id is found
        res.status(404).json({ message: "No Tag found with that ID !" }); // Returns a 404 error with the message "No Tag found with that ID !"
        return;
      }
      res.json(tagData); // If a tag with that id is found, returns the tag data as a json response
    })
    .catch((err) => {
      // If there's an error, returns the error as a json response
      console.log(err);
      res.status(500).json(err); // Returns a server error
    });
});

// Deletes a tag by its `id` value
router.delete("/:id", (req, res) => {
  Tag.destroy({
    // Deletes the tag data where the id matches the request parameter id
    where: {
      id: req.params.id,
    },
  })
    .then((tagData) => {
      // If successful, returns the deleted tag data as a json response
      if (!tagData) {
        // If no tag with that id is found
        res.status(404).json({ message: "No Tag found by that ID !" }); // Returns a 404 error with the message "No Tag found by that ID !"
        return;
      }
      res.json(tagData); // If a tag with that id is found, returns the tag data as a json response
    })
    .catch((err) => {
      // If there's an error, returns the error as a json response
      console.log(err);
      res.status(500).json(err); // Returns a server error
    });
});

module.exports = router; // Exports the router
