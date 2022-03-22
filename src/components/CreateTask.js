import React from "react";
import { connect } from "react-redux";
import { createNewTask } from "../redux/reducers/taskReducer";

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      task: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const newTask = event.target.taskName.value;
    const assignee = event.target.taskAssignee.value;

    this.props.createNewTask(newTask, assignee);

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
          onChange={this.handleChange}
          value={this.state.task}
        />
        <select name="taskAssignee" className="task-assignee-select form-select" aria-label="Default select example">
          <option defaultValue>Select assignee</option>
          {this.props.employees.map(employee => <option value={employee.id} key={employee.id}>{employee.name}</option>)}
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
    createNewTask: (task, assignee) => dispatch(createNewTask(task, assignee)),
  };
};

export default connect(mapState, mapDispatch)(CreateTask);
