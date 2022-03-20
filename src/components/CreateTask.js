import React from "react";
import { connect, useDispatch } from "react-redux";
import { createNewTask } from "../redux/store";

class CreateTask extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      task: event.target.value
    });
  };

  async handleSubmit(event) {
    event.preventDefault();
    const newTask = event.target.taskName.value; 

    this.props.createNewTask(newTask);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input name="taskName" placeholder="Enter task name" onChange={this.handleChange} value={this.state.task}/>
        <button type="submit">Add Task</button>
      </form>
    )
  }
};

const mapDispatch = (dispatch) => {
  return {
    createNewTask: (task) => dispatch(createNewTask(task))
  }
}

export default connect(null, mapDispatch)(CreateTask);