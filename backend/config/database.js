const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

connection.connect((databaseErr) => {
  let logLevel, logContent;

  try {
    if (databaseErr) {
      console.log("Database is NOT connected due to error: " + databaseErr.sqlMessage);
    } else {
      console.log("Database is connected")
    }
  } catch (error) {
    console.log("Database is NOT connected due to error: " + error.message);
  }
});


module.exports = connection;
