const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static("client/build"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/directory", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const employees = [
  {
    name: "Cher Morabito",
    role: "Senior Producer",
    department: "Events"
  },
  {
    name: "Michael Bito",
    role: "Managing Director",
    department: "Finance"
  },
  {
    name: "Layla Grace",
    role: "Operations Analyst",
    department: "Operations"
  },
  {
    name: "Noah James",
    role: "Software Engineer",
    department: "IT"
  },
  {
    name: "Jeffrey Adler",
    role: "Senior Manager",
    department: "Human Resources"
  },
  {
    name: "Lily Daly",
    role: "Associate",
    department: "Human Resources"
  },
  {
    name: "Calvin Jones",
    role: "Associate Producer",
    department: "Events"
  }
];

app.get("/api/employees", (req, res) => {
  res.json(employees);
});

app.listen(PORT, () => {
  console.log(`listenting on port ${PORT}`);
});
