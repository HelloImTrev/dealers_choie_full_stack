import  { applyMiddleware, combineReducers, createStore } from "redux";
import axios from "axios";
import thunk from "redux-thunk";

//ACTION CONSTANTS
const LOAD_TASKS = 'LOAD_TASK';

//ACTION CREATORS
const _loadTasks = (tasks) => {
  return {
    type: LOAD_TASKS,
    tasks
  };
}

//THUNK
export const loadTasks = () => {
  return async (dispatch) => {
    const tasks = (await axios.get('/api/tasks')).data;
    dispatch(_loadTasks(tasks));
  }
}

//REUDCERS
const taskReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_TASKS:
      return action.tasks;
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