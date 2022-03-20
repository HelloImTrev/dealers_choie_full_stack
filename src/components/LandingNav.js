import React from "react";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return(
    <nav className="landing-nav">
      <Link to='/employees'><button>Employee List</button></Link>
      <Link to='/tasklist'><button>Task List</button></Link>
    </nav>
  )
}

export default LandingNav;