import React from "react";
import EmployeeSideBar from "./EmployeeSideBar";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../redux/reducers/employeeReducer";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  return (
    <div id="employeelist-page">
      <EmployeeSideBar />
      <div className="list-container">
        <Row md={3} className="g-4">
          {employees.map((employee) => (
            <Col key={employee.id}>
              <Card>
                <Card.Body>
                  <Card.Title>Employee: {employee.name}</Card.Title>
                  <Card.Text>
                    Current Tasks:
                    {employee.tasks ? employee.tasks.map((task) => (<li key={task.id}>{task.taskName}</li>)) : ''}
                  </Card.Text>
                  <Button onClick={() => dispatch(deleteEmployee(employee))} variant="danger">Fire Employee</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default EmployeeList;
