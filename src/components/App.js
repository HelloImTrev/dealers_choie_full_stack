import React from "react";
import TaskList from "./TaskList";
import store from "../redux/store";
import { loadTasks } from '../redux/store';
import CreateTask from "./CreateTask";
import LandingPage from "./LandingPage";
import { Route } from "react-router-dom";
import EmployeePage from "./EmployeePage";


class App extends React.Component {

  async componentDidMount() {
   await store.dispatch(loadTasks());
  }

  render() {
    return(
      <div>
        <div className="root-container">
          <Route exact path='/' component={LandingPage} />
          <Route path='/employees' component={EmployeePage} />
          <Route path='/tasklist' component={TaskList} />
        </div>
      </div>
    )
  }
}

export default App;