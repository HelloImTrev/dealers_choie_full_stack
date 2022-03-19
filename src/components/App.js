import React from "react";
import axios from "axios";
import TaskList from "./TaskList";
import store from "../redux/store";
import { loadTasks } from '../redux/store';
import CreateTask from "./CreateTask";

class App extends React.Component {

  async componentDidMount() {
   await store.dispatch(loadTasks());
  }

  render() {
    return(
      <div>
        <h1>Fullstack Task</h1>
        <div className="container">
          <TaskList />
          <CreateTask />
        </div>
      </div>
    )
  }
}



export default App;