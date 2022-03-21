import  { applyMiddleware, combineReducers, createStore } from "redux";
import axios from "axios";
import thunk from "redux-thunk";

//ACTION CONSTANTS
const LOAD_TASKS = 'LOAD_TASK';
const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

//ACTION CREATORS
const _loadTasks = (tasks) => {
  return {
    type: LOAD_TASKS,
    tasks
  };
}

const _createTask = (task) => {
  return {
    type: CREATE_TASK,
    task
  }
};

const _deleteTask = (task) => {
  return{
    type: DELETE_TASK,
    task
  }
}

//THUNK
export const loadTasks = () => {
  return async (dispatch) => {
    const tasks = (await axios.get('/api/tasks')).data;
    dispatch(_loadTasks(tasks));
  }
}

export const createNewTask = (task) => {
  return async (dispatch) => {
    try{
      const res = await (await axios.post('/api/tasks', {taskName: task})).data;
      dispatch(_createTask(res));
    } catch(e) {
      console.log(e);
    }
  }
}

export const deleteTask = (task) => {
  return async (dispatch) => {
    console.log(task);
    try{
      await axios.delete(`/api/tasks/${task.id}`);
      dispatch(_deleteTask(task));
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
    case DELETE_TASK:
      return state.filter(task => task.id !== action.task.id)
    default:
      return state;
  }
}

//ROOT REDUCER
const reducer = combineReducers({
  tasks: taskReducer
  //TODO Add user reducer
})

//STORE
const store = createStore(reducer, applyMiddleware(thunk));

export default store;