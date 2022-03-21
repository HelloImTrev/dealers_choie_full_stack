import  { applyMiddleware, combineReducers, createStore } from "redux";
import axios from "axios";
import thunk from "redux-thunk";

//ACTION CONSTANTS
const LOAD_TASKS = 'LOAD_TASK';
const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';

const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';
const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

//ACTION CREATORS
const _loadTasks = (tasks) => {
  return {
    type: LOAD_TASKS,
    tasks
  };
}

const _loadEmployees = (employees) => {
  return{
    type: LOAD_EMPLOYEES,
    employees
  };
}

const _createTask = (task) => {
  return {
    type: CREATE_TASK,
    task
  }
};

const _createEmployee = (employee) => {
  return {
    type: CREATE_EMPLOYEE,
    employee
  }
}

const _deleteTask = (task) => {
  return{
    type: DELETE_TASK,
    task
  }
}

const _deleteEmployee = (employee) => {
  return{
    type: DELETE_EMPLOYEE,
    employee
  }
}

const _updateTask = (tasks) => {
  return{
    type: UPDATE_TASK,
    tasks
  }
}

//THUNKS
export const loadTasks = () => {
  return async (dispatch) => {
    const tasks = (await axios.get('/api/tasks')).data;
    dispatch(_loadTasks(tasks));
  }
}

export const loadEmployees = () => {
  return async (dispatch) => {
    const employees = (await axios.get('/api/employees')).data;
    dispatch(_loadEmployees(employees));
  }
}

export const createNewTask = (task) => {
  return async (dispatch) => {
    try{
      const res = (await axios.post('/api/tasks', {taskName: task})).data;
      dispatch(_createTask(res));
    } catch(e) {
      console.log(e);
    }
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

export const deleteTask = (task) => {
  return async (dispatch) => {
    try{
      await axios.delete(`/api/tasks/${task.id}`);
      dispatch(_deleteTask(task));
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

export const updateTask = (task) => {
  console.log(task);
  return async (dispatch) => {
    try {
      await axios.put(`/api/tasks/${task.id}`);
      const updatedTasks = (await axios.get('/api/tasks')).data;
      dispatch(_updateTask(updatedTasks));
    } catch(e) {
      console.log(e);
    }
  }
}

//REUDCERS
const taskReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_TASKS:
      return action.tasks;
    case CREATE_TASK:
      return [...state, action.task];
    case UPDATE_TASK:
      return action.tasks;
    case DELETE_TASK:
      return state.filter(task => task.id !== action.task.id)
    default:
      return state;
  }
}

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

//ROOT REDUCER
const reducer = combineReducers({
  tasks: taskReducer,
  employees: employeeReducer
})

//STORE
const store = createStore(reducer, applyMiddleware(thunk));

export default store;