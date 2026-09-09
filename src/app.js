const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Beneficiary Service");
});

app.get("/health", (req, res) => {
  res.status(200).send("Beneficiary Service is healthy");
});

app.listen(PORT, () => {
  console.log(`Beneficiary Service running on port ${PORT}`);
});
