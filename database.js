// Import the `mysql` package
const mysql = require('mysql');

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // replace with your password
  database: 'hangout' // replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database');
});

// Export the connection
module.exports = db;