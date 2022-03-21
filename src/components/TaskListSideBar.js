import React from "react";
import CreateTask from "./CreateTask";

const TaskListSideBar = () => {
  return (
    <div className="side-bar">
      <section className="sidebar">
        <h3 className="side-bar-title">New Task</h3>
        <CreateTask />
      </section>
    </div>
  );
};

export default TaskListSideBar;