const express = require("express");
const router = require("./router");

const app = express();

// Middleware to read JSON data from POST requests
app.use(express.json());

// Use our router
app.use("/", router);

// Render provides the PORT through environment variables
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
