const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static("client/build"));

const Employee = require("./employeeModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/directory", {
  useNewUrlParser: true
  //useFindAndModify: false
});

app.get("/employees", (req, res) => {
  Employee.find().then(employees => {
    res.json(employees);
  });
});

app.get("/employees/department/:department", async (req, res) => {
  console.log(req.params.department);
  const employees = await Employee.find({ department: req.params.department });
  console.log("employees", employees);
  res.json(employees);
});

app.get("/employees/col/:col", async (req, res) => {
  const sortQuery = {};
  sortQuery[req.params.col] = 1;
  const employees = await Employee.find().sort(sortQuery);
  res.json(employees);
});
Employee.deleteMany({}, function(err) {
  if (err) {
    console.log(err);
  }
});

const data = [
  {
    firstName: "Cher",
    lastName: "Morabito",
    role: "Senior Producer",
    department: "events"
  },
  {
    firstName: "Michael",
    lastName: "Bito",
    role: "Managing Director",
    department: "finance"
  },
  {
    firstName: "Layla",
    lastName: "Grace",
    role: "Operations Analyst",
    department: "operations"
  },
  {
    firstName: "Noah",
    lastName: "James",
    role: "Software Engineer",
    department: "engineering"
  },
  {
    firstName: "Jeffrey",
    lastName: "Adler",
    role: "Senior Manager",
    department: "human resources"
  },
  {
    firstName: "Lily",
    lastName: "Daly",
    role: "Associate",
    department: "human resources"
  },
  {
    firstName: "Calvin",
    lastName: "Jones",
    role: "Associate Producer",
    department: "events"
  }
];
Employee.create(data)
  .then(dbEmployee => {
    console.log(dbEmployee);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.listen(PORT, () => {
  console.log(`listenting on port ${PORT}`);
});
