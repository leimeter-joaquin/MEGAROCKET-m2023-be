const express = require("express");
const cors = require("cors");
const app = express();

// Enable all CORS requests
app.use(cors());

// Define a route
app.get("/", function (req, res) {
  res.send("Hello, World!");
});

// Start the server
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
