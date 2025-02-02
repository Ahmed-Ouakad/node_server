const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Use Railway's PORT

app.get("/", (req, res) => {
  res.send("Hello, World! 🚀 Your server is running! it's from ahmed");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
