import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";

console.log('REDUCER----------------');
export default combineReducers({
  tasks: HomeReducer
});
