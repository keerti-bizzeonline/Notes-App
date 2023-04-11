import notesReducer from "./notesReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ notesReducer });

export default rootReducer;
