import React from "react";
import axios from "axios";
import TaskList from "./TaskList";
import store from "../redux/store";
import { loadTasks } from '../redux/store';
import CreateTask from "./CreateTask";
import LandingPage from "./LandingPage";


class App extends React.Component {

  async componentDidMount() {
   await store.dispatch(loadTasks());
  }

  render() {
    return(
      <div>
        <div className="root-container">
          <LandingPage />
          {/* <TaskList />
          <CreateTask /> */}
        </div>
      </div>
    )
  }
}

export default App;