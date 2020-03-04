const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  role: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  department: {
    type: String,
    trim: true,
    required: "String is Required"
  }
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
