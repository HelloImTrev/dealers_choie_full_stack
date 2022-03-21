import React from "react";

const MainNav = () => {
  return(
    <nav id="main-nav">
      <Link to='/employees'><button>Employee List</button></Link>
      <Link to='/tasklist'><button>Task List</button></Link>
    </nav>
  )
}

export default MainNav;