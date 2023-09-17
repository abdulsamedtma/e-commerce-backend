require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL // Creates the connection to the database
  ? new Sequelize(process.env.JAWSDB_URL) // If the JAWSDB_URL environment variable exists (meaning we're deployed on Heroku), it will use that value to connect to the database. Otherwise, it will fall back on the local database URL.
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost", // Host
      dialect: "mysql", // Database we are using
      dialectOptions: { // Prevents errors when deploying to Heroku
        decimalNumbers: true, // Prevents errors when deploying to Heroku
      },
    });

module.exports = sequelize;
