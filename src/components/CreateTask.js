import React from "react";
import { Button } from "bootstrap";
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
    this.setState({
      task:''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="taskName" className="task-name-input form-control" placeholder="Task Name" aria-label="Name" aria-describedby="addon-wrapping" onChange={this.handleChange} value={this.state.task}/>
        {/* <input className="side-input" name="taskName" placeholder="Enter task name" onChange={this.handleChange} value={this.state.task}/> <br /> */}
        <button className="side-button btn btn-success" type="submit">Add Task</button>
      </form>
    )
  };
};

const mapDispatch = (dispatch) => {
  return {
    createNewTask: (task) => dispatch(createNewTask(task))
  }
}

export default connect(null, mapDispatch)(CreateTask);