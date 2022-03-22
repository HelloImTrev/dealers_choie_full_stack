import axios from "axios";

const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';
const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

//ACTION CREATORS
const _loadEmployees = (employees) => {
  return{
    type: LOAD_EMPLOYEES,
    employees
  };
}

const _createEmployee = (employee) => {
  return {
    type: CREATE_EMPLOYEE,
    employee
  }
}

const _deleteEmployee = (employee) => {
  return{
    type: DELETE_EMPLOYEE,
    employee
  }
}

//THUNKS
export const loadEmployees = () => {
  return async (dispatch) => {
    const employees = (await axios.get('/api/employees')).data;
    dispatch(_loadEmployees(employees));
  }
}

export const createNewEmployee =(employee) => {
  return async (dispatch) => {
    try{
      console.log(employee);
      const res = (await axios.post('/api/employees', {name: employee})).data;
      dispatch(_createEmployee(res));
    } catch(e) {
      console.log(e);
    }
  }
}

export const deleteEmployee = (employee) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/employees/${employee.id}`);
      dispatch(_deleteEmployee(employee));
    } catch(e) {
      console.log(e);
    }
  }
}

//REDUCER
const employeeReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_EMPLOYEES:
      return action.employees;
    case CREATE_EMPLOYEE:
      return [...state, action.employee];
    case DELETE_EMPLOYEE:
      return state.filter(employee => employee.id !== action.employee.id);
    default:
      return state;
  }
}

export default employeeReducer;