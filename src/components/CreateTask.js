import React from "react";
import { connect } from "react-redux";
import { createNewTask } from "../redux/reducers/taskReducer";
import { loadEmployees } from "../redux/reducers/employeeReducer";

class CreateTask extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
      userId: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    const task = {
      taskName: this.state.task,
      employeeId: this.state.userId
    }

    this.props.createNewTask(task);

    this.setState({
      task: '',
      userId: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="taskName"
          className="task-name-input form-control"
          placeholder="Task Name"
          aria-label="Name"
          aria-describedby="addon-wrapping"
          onChange={ev =>this.setState({ task: ev.target.value})}
          value={this.state.task}
        />
        <select name="taskAssignee" className="task-assignee-select form-select" aria-label="Default select example" onChange={ev => this.setState({ userId: ev.target.value })} value={this.state.userId}>
          <option defaultValue>Select assignee</option>
          {this.props.employees.map(employee => <option key={employee.id} value={employee.id}>{employee.name}</option>)}
        </select>
        <button className="side-button btn btn-success" type="submit">
          Add Task
        </button>
      </form>
    );
  }
}

const mapState = state => state;

const mapDispatch = (dispatch) => {
  return {
    createNewTask: (task) => dispatch(createNewTask(task)),
    loadEmployees: () => dispatch(loadEmployees())
  };
};

export default connect(mapState, mapDispatch)(CreateTask);
