const express = require("express");
const mysql = require("mysql2");

// Create an Express application
const app = express();
const port = 3000;

// Setup connection to MySQL
const db = mysql.createConnection({
  host: "mysql", // This is the name of the service in docker-compose.yml
  user: "user",
  password: "password",
  database: "example_db",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// Create a simple route
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to CMSC 408 Database Project!</h1><p>Use the /students endpoint to see database content.</p>"
  );
});

// Create an API route to fetch data from MySQL
app.get("/students", (req, res) => {
  const query = "SELECT * FROM students"; // Assumes a 'students' table exists
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
