import { NEW_EXPENSE, FETCH_EXPENSES } from '../actions/types';

const initialState = {
  expenses: [],
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
      };
    case NEW_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    default:
      return state;
  }
};

export default expenseReducer;
