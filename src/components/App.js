import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: []
    }
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <div>
        <h1>Fullstack Task</h1>
        <div className="container">
        </div>
      </div>
    )
  }
}

export default App;