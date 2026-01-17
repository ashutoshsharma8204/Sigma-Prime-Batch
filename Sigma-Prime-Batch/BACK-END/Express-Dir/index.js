const express = require("express");
const app = express();

let port = 3000;

// Middleware
app.use((req, res, next) => {
  console.log("Hello I am middleware");
  next(); // very important
});

// Home route
app.get("/", (req, res) => {
  res.send("Hello, I am root");
});

// Dynamic route
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`Welcome to the page of ${username} with id of ${id}`);
});



// Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
