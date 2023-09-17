const express = require("express"); // Imports the express package
const routes = require("./routes"); // Imports the routes folder
// import sequelize connection
const sequelize = require("./config/connection");
const app = express(); // Initializes the express package
const PORT = process.env.PORT || 3001; // Sets the port to 3001

app.use(express.json()); // Sets up the express app to use json
app.use(express.urlencoded({ extended: true })); // Sets up the express app to use urlencoded

app.use(routes); // Sets up the express app to use the routes folder

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`)); // Starts the server on port 3001
});
