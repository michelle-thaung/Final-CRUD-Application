/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  imageurl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.zillowstatic.com/bedrock/app/uploads/sites/26/shutterstock_262043447-dedc70.jpg', // Set your default image URL here
    allowNull: true,
  }
});

// Export the campus model
module.exports = Campus;