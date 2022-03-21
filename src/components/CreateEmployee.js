import React from "react";

class CreateEmployee extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });

    console.log(this.state.name);
  };

  async handleSubmit(event) {
    event.preventDefault();
    const newEmployee = event.target.employeeName.value; 

    console.log(newEmployee);

    this.setState({
      task:''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="employeeName" className="employee-name-input form-control" placeholder="Employee Name" aria-label="Name" aria-describedby="addon-wrapping" onChange={this.handleChange} value={this.state.name}/>
        <button className="side-button btn btn-success" type="submit">Hire Employee</button>
      </form>
    )
  };
};


export default CreateEmployee;

// const mapDispatch = (dispatch) => {
//   return {
//     createNewTask: (task) => dispatch(createNewTask(task))
//   }
// }

// export default connect(null, mapDispatch)(CreateTask);