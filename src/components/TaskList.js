import React from "react";
import { connect, useSelector } from "react-redux";
import CreateTask from "./CreateTask";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.taskName}</li>;
        })}
      </ul>
      <CreateTask />
    </div>
  );
};

const mapState = (state) => state;

export default connect(mapState, {})(TaskList);
