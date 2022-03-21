import React from "react";
import CreateEmployee from "./CreateEmployee";

const EmployeeSideBar = () => {
  return (
    <div className="side-bar">
      <section className="side-bar-details">
        <h3 className="side-bar-title">New Employee</h3>
        <CreateEmployee />
      </section>
    </div>
  );
};

export default EmployeeSideBar;