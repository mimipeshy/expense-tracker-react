import {
    FETCH_USERS, NEW_EXPENSE, FETCH_EXPENSES, LOGIN, LOGOUT,
} from './types';

const url = 'https://peris-expense-track.herokuapp.com';

export const fetchUsers = () => dispatch => {
    fetch(`${url}/users`)
        .then(res => res.json())
        .then(users => dispatch({
            type: FETCH_USERS,
            payload: users,
        }));
};
export const fetchExpenses = id => dispatch => {
    fetch(`${url}/expenses`)
        .then(data => data.json())
        .then(records => {
            const filteredExpenses = expenses.filter(expense => expense.user_id === id);
            dispatch({
                type: FETCH_EXPENSES,
                payload: filteredExpenses,
            });
        });
};

export const newExpense = postData => dispatch => {
    fetch(`${url}/expenses`, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(expense => dispatch({
            type: NEW_EXPENSE,
            payload: expense,
        }));
};

export const login = (userObj, username) => dispatch => {
    if (userObj) {
        dispatch({
            type: LOGIN,
            payload: userObj,
        });
    } else {
        fetch(`${url}/users`, {
            method: 'POST',
            body: JSON.stringify({ username }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(newUser => dispatch({
                type: LOGIN,
                payload: newUser,
            }));
    }
};

export const logout = () => ({
    type: LOGOUT,
    payload: '',
});