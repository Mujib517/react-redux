import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  users: userReducer
});

export default rootReducer;