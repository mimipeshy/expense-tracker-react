import rootReducer from '../reducers';

const initialState = {
  expenseReducer: {
         "expenses": [],
        },
  userReducer: { auth: false, user: {}, users: [] },
};

it('handles actions of type LOGIN', () => {
  const action = {
    type: 'LOGIN',
    payload: { id: 1, username: 'peshy' },
  };

  const newState = rootReducer(initialState, action);

  expect(newState.userReducer.user).toEqual({ id: 1, username: 'peshy' });
  expect(newState.userReducer.auth).toEqual(true);
});

it('handles actions of type LOGOUT', () => {
  const action = {
    type: 'LOGOUT',
    payload: '',
  };

  const newState = rootReducer(initialState, action);

  expect(newState.userReducer.auth).toEqual(false);
});

it('handles action with unknown type', () => {
  const newState = rootReducer(initialState, { type: 'ASDKLJAD' });

  expect(newState).toEqual(initialState);
});
