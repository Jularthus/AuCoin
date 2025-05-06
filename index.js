const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.send("<h1>I am OK!</h1>");
});

app.post("/post", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (
    req.body.password.toLowerCase().split(" ").join("") !=
      process.env.PASSWORD.toString().toLowerCase().split(" ").join("")
  ) {
    return res.status(401).json({});
  }

  console.log("Nouveau message:", req.body.text);
  const line = `${req.body.text}\n`;
  const filePath = path.join(__dirname, "./fortune/fortune.txt");
  const backup = path.join(__dirname, "./fortune/allFortunes.txt");
  await fs.appendFile(filePath, line);
  await fs.appendFile(backup, line);
  const data = await fs.readFile(filePath, "utf8");
  const nombre = data.split("\n").filter((l) => l.trim() !== "").length;
  res.json({ nbr: nombre });
});

const port = 45678;
app.listen(port, () => {
  console.log("AuCoin is running on port: ", port);
});
