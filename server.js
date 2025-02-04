const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Use Railway's PORT

app.get("/", (req, res) => {
  res.send("Hello, World! 🚀 Your server is running! it's from ahmed");
});
app.post("/echo", (req, res) => {
  const { from, to } = req.body;

  if (!from || !to) {
    return res.status(400).json({ error: "Both 'from' and 'to' fields are required!" });
  }

  res.json({
    message: "Data received successfully!",
    from: from,
    to: to,
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
