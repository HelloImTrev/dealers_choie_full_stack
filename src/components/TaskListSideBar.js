import React from "react";
import { Link } from "react-router-dom";
import CreateTask from "./CreateTask";

const TaskListSideBar = () => {
  return (
    <div className="side-bar">
      <section className="sidebar-nav">
        <Link to='/'><a className="side-bar-nav-link">Home</a></Link>
        <Link to="/employees"><a className="side-bar-nav-link">Employees</a></Link>
      </section>
      <section className="task-inputs">
        <h3 className="side-bar-title">New Task</h3>
        <CreateTask />
      </section>
    </div>
  );
};

export default TaskListSideBar;
