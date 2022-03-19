import React from "react";

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

    console.log(this.state.task);
  };

  handleSubmit(event) {
    event.preventDefault();
    
  }

  render() {
    return(
      <form>
        <input name="taskName" placeholder="Enter task name" onChange={this.handleChange}/>
        <button type="submit">Add Task</button>
      </form>
    )
  }
};

export default CreateTask;