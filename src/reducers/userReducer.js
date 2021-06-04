import Cookies from 'js-cookie';
import { FETCH_USERS, LOGIN, LOGOUT } from '../actions/types';

const user = Cookies.get('user');

const initialState = {
  users: [],
  user: user ? JSON.parse(user) : {},
  auth: !!user,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case LOGIN:
      Cookies.set('user', action.payload);
      return {
        ...state,
        auth: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        auth: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
