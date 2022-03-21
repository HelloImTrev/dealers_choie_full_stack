import React from "react";
import EmployeeSideBar from "./EmployeeSideBar";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const EmployeeList = () => {

  const employees = useSelector(state => state.employees);

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
                  <Card.Text>Task list will go here</Card.Text>
                  <Button onClick={() => console.log("hi")} variant="danger">
                    Fire Employee
                  </Button>
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
