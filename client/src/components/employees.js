import React from "react";
//   populateTable() {
//     this.state.employees.map((employee, index) => {
//       console.log(employee);
//       return (
//         <tr>
//           <th scope="row"></th>
//           <td>{employee.firstName}</td>
//           <td>{employee.lastName}</td>
//           <td>{employee.role}</td>
//           <td>{employee.department}</td>
//         </tr>
//       );
//     });
//   }
class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }
  componentDidMount() {
    fetch("/employees")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState(
          {
            employees: result
          },
          this.populateTable
        );
      });
  }
  //   populateTable() {
  //     this.state.employees.map(employee => {
  //       console.log(employee);
  //       return (
  //         <tr>
  //           <th scope="row"></th>
  //           <td>{employee.firstName}</td>
  //           <td>{employee.lastName}</td>
  //           <td>{employee.role}</td>
  //           <td>{employee.department}</td>
  //         </tr>
  //       );
  //     });
  //   }
  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Role</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee, index) => {
              console.log(employee);
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.role}</td>
                  <td>{employee.department}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Employees;
