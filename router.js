const express = require("express");

const router = express.Router();

// GET endpoint 1
router.get("/home", (req, res) => {
  res.json({
    message: "Welcome to the Home Page",
  });
});

// GET endpoint 2
router.get("/contact", (req, res) => {
  res.json({
    message: "Welcome to the Contact Page",
    email: "student@example.com",
  });
});

// POST endpoint
router.post("/about", (req, res) => {
  res.json({
    message: "This is the About Us POST endpoint",
    receivedData: req.body,
  });
});

module.exports = router;
