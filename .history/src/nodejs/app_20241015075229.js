const express = require("express");
const mysql = require("mysql");

// Create an Express application
const app = express();
const port = 3000;

// Middleware to parse incoming JSON
app.use(express.json());

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// Home route
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to the Blood Bank Database!</h1><p>Use /donate to donate blood, or /find-blood to find available blood types.</p>"
  );
});

// Add a blood donation
app.post("/donate", (req, res) => {
  const { donor_name, blood_type, quantity } = req.body;
  const query =
    "INSERT INTO donations (donor_name, blood_type, quantity) VALUES (?, ?, ?)";
  db.query(query, [donor_name, blood_type, quantity], (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json({
        message: "Blood donation recorded successfully",
        donationId: result.insertId,
      });
    }
  });
});

// Find blood based on blood type
app.get("/find-blood", (req, res) => {
  const { blood_type } = req.query;
  const query = "SELECT * FROM donations WHERE blood_type = ?";
  db.query(query, [blood_type], (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      if (results.length === 0) {
        res.json({ message: "No blood available for the specified type" });
      } else {
        res.json(results);
      }
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
