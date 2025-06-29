//Install Node.js (if not yet): https://nodejs.org

//create project 

//bash
mkdir erp-backend
cd erp-backend
npm init -y
npm install express

//new

const express = require("express");
const app = express();
app.use(express.json()); // for JSON body parsing

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@college.com" && password === "123456") {
    res.json({ message: "Login successful ✅" });
  } else {
    res.status(401).json({ error: "Invalid credentials ❌" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

//run server

node index.js



//Connect Frontend Login to This Backend (30 mins)

fetch("http://localhost:3000/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password })
})

