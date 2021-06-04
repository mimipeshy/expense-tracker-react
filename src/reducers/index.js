import { combineReducers } from 'redux';
import userReducer from './userReducer';
import expenseReducer from './expenseReducer';

const rootReducer = combineReducers({
  userReducer,
  expenseReducer,
});

export default rootReducer;
