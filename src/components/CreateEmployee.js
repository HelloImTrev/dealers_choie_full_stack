import React from "react";
import { connect } from "react-redux";
import { createNewEmployee } from "../redux/reducers/employeeReducer";

class CreateEmployee extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const newEmployee = event.target.employeeName.value;

    this.props.createNewEmployee(newEmployee);
    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="employeeName"
          className="employee-name-input form-control"
          placeholder="Employee Name"
          aria-label="Name"
          aria-describedby="addon-wrapping"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <button className="side-button btn btn-success" type="submit">
          Hire Employee
        </button>
      </form>
    );
  }
}

//export default CreateEmployee;

const mapDispatch = (dispatch) => {
  return {
    createNewEmployee: (employee) => dispatch(createNewEmployee(employee)),
  };
};

export default connect(null, mapDispatch)(CreateEmployee);
