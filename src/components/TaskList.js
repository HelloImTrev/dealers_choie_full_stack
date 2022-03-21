import React from "react";
import TaskListSideBar from "./TasklistSideBar";
import { Card, Row, Col, Button } from "react-bootstrap";
import { deleteTask } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

const TaskList = () => {

  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

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
                    Current Assignee: {task.employeeId ? task.employee.name : 'unassigned'}
                  </Card.Text>
                  <Button onClick={() => dispatch(deleteTask(task))} variant="danger">Delete</Button>
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
