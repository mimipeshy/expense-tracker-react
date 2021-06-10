/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchExpenses } from '../actions';

function Expenses({ expenses = [], fetchExpenses, user }) {
  useEffect(() => {
    fetchExpenses(user.id);
    // eslint-disable-next-line
    }, []);
  return (
    <div className="expenses-container">
      <h2>All Expenses</h2>
      <div>
        <div className="expense-header">
          <p>No</p>
          <p>Name</p>
          <p>Amount</p>
          <p>Date</p>
        </div>
        {expenses
                    && expenses.map((expense, index) => (
                      <div key={expense.id} className="expense-item">
                        <p>{index + 1}</p>
                        <p>
                          {expense.name}
                        </p>
                        <p>
                          {' '}
                          $
                          {expense.amount}
                        </p>
                        <p>{expense.date}</p>
                      </div>
                    ))}
      </div>
    </div>
  );
}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(Object),
  fetchExpenses: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.expenseReducer.expenses,
  user: state.userReducer.user,
});

const mapDispatchToProps = () => ({
  fetchExpenses,
});

export default connect(mapStateToProps, mapDispatchToProps())(Expenses);
