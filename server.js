const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static("client/build"));

const Employee = require("./client/public/employeeModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/directory", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.get("/employees", (req, res) => {
  Employee.find().then(employees => {
    res.json(employees);
  });
});
// const data = [
//   {
//     firstName: "Cher",
//     lastName: "Morabito",
//     role: "Senior Producer",
//     department: "Events"
//   },
//   {
//     firstName: "Michael",
//     lastName: "Bito",
//     role: "Managing Director",
//     department: "Finance"
//   },
//   {
//     firstName: "Layla",
//     lastName: "Grace",
//     role: "Operations Analyst",
//     department: "Operations"
//   },
//   {
//     firstName: "Noah",
//     lastName: "James",
//     role: "Software Engineer",
//     department: "IT"
//   },
//   {
//     firstName: "Jeffrey",
//     lastName: "Adler",
//     role: "Senior Manager",
//     department: "Human Resources"
//   },
//   {
//     firstName: "Lily",
//     lastName: "Daly",
//     role: "Associate",
//     department: "Human Resources"
//   },
//   {
//     firstName: "Calvin",
//     lastName: "Jones",
//     role: "Associate Producer",
//     department: "Events"
//   }
// ];
// Employee.create(data)
//   .then(dbEmployee => {
//     console.log(dbEmployee);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

app.listen(PORT, () => {
  console.log(`listenting on port ${PORT}`);
});
