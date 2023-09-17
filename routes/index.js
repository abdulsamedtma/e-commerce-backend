const router = require("express").Router(); // Imports the router object
const apiRoutes = require("./api"); // Imports the api folder

router.use("/api", apiRoutes); // Adds the prefix of `/api` to routes created in `api` folder

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>"); // Sends a message if the user tries to access any other route
});

module.exports = router; // Exports the router object
