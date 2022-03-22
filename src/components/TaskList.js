import React from "react";
import TaskListSideBar from "./TasklistSideBar";
import { Card, Row, Col, Button } from "react-bootstrap";
import { deleteTask } from "../redux/reducers/taskReducer";
import { useDispatch, useSelector } from "react-redux";
import { loadEmployees } from "../redux/reducers/employeeReducer";

const TaskList = () => {

  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  console.log('TaskList: ',tasks);
  
  return (
    <div id="tasklist-page">
      <TaskListSideBar />
      <div className="list-container">
        <Row md={3} className="g-4">
          {tasks.map((task) => (
            <Col key={task.id}>
              <Card>
                <Card.Body>
                  <Card.Title>Task: {task.taskName}</Card.Title>
                  <Card.Text>
                  <strong>Current Assignee:</strong> {task.employee.name}
                  </Card.Text>
                  <Button className="task-button" onClick={() => dispatch(deleteTask(task))} variant="danger">Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TaskList;
