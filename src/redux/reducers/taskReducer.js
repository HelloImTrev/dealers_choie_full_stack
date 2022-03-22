import axios from "axios";

//ACTION CONSTANTS
const LOAD_TASKS = 'LOAD_TASK';
const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';

//ACTION CREATORS
const _loadTasks = (tasks) => {
  return {
    type: LOAD_TASKS,
    tasks
  };
};

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
};

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

export const updateTask = (task) => {
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

//REUDCER
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

export default taskReducer;