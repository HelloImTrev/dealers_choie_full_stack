import React from "react";
import { Link } from "react-router-dom";
import CreateEmployee from "./CreateEmployee";

const EmployeeSideBar = () => {
  return (
    <div className="side-bar">
      <section className="sidebar-nav">
        <Link to="/"><a className="side-bar-nav-link">Home</a></Link>
        <Link to="/tasklist"><a className="side-bar-nav-link">Tasks</a></Link>
      </section>
      <section className="employee-inputs">
        <h3 className="side-bar-title">New Employee</h3>
        <CreateEmployee />
      </section>
    </div>
  );
};

export default EmployeeSideBar;