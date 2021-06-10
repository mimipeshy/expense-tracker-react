import { logout } from '../actions';

describe('logout Action Creator', () => {
  it('has the correct type', () => {
    const action = logout();

    expect(action.type).toEqual('LOGOUT');
  });
});
