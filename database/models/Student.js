/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },

  imageurl: {
    type: Sequelize.STRING,
    // defaultValue: 'https://www.pngfind.com/pngs/m/163-1631127_student-school-study-skills-college-test-students-pictures.png', // Set your default image URL here
    allowNull: true,
  },

  gpa: {
    type: Sequelize.DECIMAL(3, 1), // Precision of 3 digits and 1 decimal place
    allowNull: true,
    validate: {
      isDecimal: true,
      min: 0.0,
      max: 4.0,
    },
  },
  
  campusId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
});

// Export the student model
module.exports = Student;