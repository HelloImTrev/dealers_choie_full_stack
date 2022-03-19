import React from "react";
import axios from "axios";
import TaskList from "./TaskList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  async componentDidMount() {
    const res = await axios.get('/api/tasks');
    const task = res.data;
    this.setState({
      tasks: task
    })
  }

  render() {
    return(
      <div>
        <h1>Fullstack Task</h1>
        <div className="container">
          <TaskList tasks={this.state.tasks}/>
        </div>
      </div>
    )
  }
}

export default App;