import { combineReducers } from "redux";
import registerReducer from "../actions/registerAction";
import loginUserReducer from "./loginUserReducer";
const rootReducer = combineReducers({
loginUserReducer,
registerReducer,
 
});

export default rootReducer;
