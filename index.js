const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.send("<h1>I am OK!</h1>");
});

app.post("/post", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  console.log("Nouveau message:", req.body.text);
  const line = `${req.body.text}\n`;
  const filePath = path.join(__dirname, "../fortune/newFortune.txt");
  fs.appendFile(filePath, line, (err) => {
    if (err) {
      console.error("Failed to write message:", err);
      return res.status(500).send("Server error.");
    }
  });

  res.json({});
});

const port = 45678;
app.listen(port, () => {
  console.log("AuCoin is running on port: ", port);
});
