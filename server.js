const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Use Railway's PORT

app.get("/", (req, res) => {
  res.send("Hello, World! 🚀 Your server is running! it's from ahmed");
});
app.get("/get", (req, res) => {
  res.send("Hello, World! 🚀 Your server is running! it's from ahmed and this is the get route");
});
app.post("/echo", (req, res) => {
  
  res.json({
    message: "Data received successfully!",
    from: "12323",
    to: "0000",
    welcomeMessageEnabled: true,
    welcomeMessage : "Bonjour, bienvenu dans notre entreprise",
    hasBlackList : false,
    voicemail : true
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
