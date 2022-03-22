import React from "react";
import TaskList from "./TaskList";
import store from "../redux/store";
import { loadTasks } from "../redux/reducers/taskReducer";
import { loadEmployees } from "../redux/reducers/employeeReducer";
import LandingPage from "./LandingPage";
import { Route } from "react-router-dom";
import EmployeeList from "./EmployeeList";


class App extends React.Component {

  async componentDidMount() {
   await store.dispatch(loadTasks());
   await store.dispatch(loadEmployees());
  }

  render() {
    return(
      <div>
        <div className="root-container">
          <Route exact path='/' component={LandingPage} />
          <Route path='/employees' component={EmployeeList} />
          <Route path='/tasklist' component={TaskList} />
        </div>
      </div>
    )
  }
}

export default App;