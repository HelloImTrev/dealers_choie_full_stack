import  { applyMiddleware, combineReducers, createStore } from "redux";
import taskReducer from "./reducers/taskReducer";
import employeeReducer from "./reducers/employeeReducer";
import thunk from "redux-thunk";

//ROOT REDUCER
const reducer = combineReducers({
  tasks: taskReducer,
  employees: employeeReducer
})

//STORE
const store = createStore(reducer, applyMiddleware(thunk));

export default store;