import { combineReducers } from "redux";
import authenticateReducer from "states/auth/reducer";

const rootReducer = combineReducers({
  auth: authenticateReducer,
});

export default rootReducer;
