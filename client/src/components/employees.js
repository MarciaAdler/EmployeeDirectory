import React from "react";
import SortBtn from "./SortBtn";
import Filter from "./Filter";

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [], department: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // run this the first time it loads to bring in the data
  componentDidMount() {
    fetch("/employees")
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        this.setState({
          employees: result
        });
      });
  }

  populateTable() {
    return this.state.employees.map((employee, index) => {
      // console.log(employee);
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.role}</td>
          <td>{employee.department}</td>
        </tr>
      );
    });
  }

  sort = col => {
    fetch("/employees/col/" + col)
      .then(res => res.json())
      .then(result => {
        this.setState({
          employees: result
        });
      });
  };

  // handleChange(event) {
  //   const { name, value } = event.target;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  // handleSubmit(event) {
  //   alert("A department was submitted: " + this.state.department);
  //   this.filter(this.state.department);
  //   event.preventDefault();
  // }

  // filter = department => {
  //   fetch("/employees/department/" + department)
  //     .then(res => res.json())
  //     .then(result => {
  //       this.setState({
  //         employees: result
  //       });
  //     });
  // };

  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                First Name
                <SortBtn col={"firstName"} sort={this.sort} />
              </th>
              <th scope="col">
                Last Name <SortBtn col={"lastName"} sort={this.sort} />
              </th>

              <th scope="col">
                Role
                <SortBtn col={"role"} sort={this.sort} />
              </th>
              <th scope="col">
                Department
                <SortBtn col={"department"} sort={this.sort} />
                <Filter
                  department={this.state.department}
                  filter={this.filter}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              </th>
            </tr>
          </thead>
          <tbody>{this.populateTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default Employees;
