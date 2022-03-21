import React from "react";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return(
    <nav className="landing-nav">
      <Link to='/employees'><button className="landing-btn btn btn-primary">Employee List</button></Link>
      <Link to='/tasklist'><button className="landing-btn btn btn-primary">Task List</button></Link>
    </nav>
  )
}

export default LandingNav;