import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newExpense } from '../actions';

function AddExpense({ newExpense, user }) {
  function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('date').value = '';
  }

  function addNewExpense(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    newExpense({
      user_id: user.id,
      name,
      amount,
      date,
    });
    resetForm();
  }

  return (
    <div className="add-Expense-container">
      <h1>Add Expense</h1>
      <form action="" className="add-Expense-form">
        <label htmlFor="name">
          name:
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="amount">
          amount:
          <input type="number" id="amount" name="amount" />
        </label>
        <label htmlFor="date">
          date:
          <input type="date" id="date" />
        </label>
        <button type="submit" onClick={addNewExpense}>
          Add Expense
        </button>
      </form>
    </div>
  );
}

AddExpense.propTypes = {
  newExpense: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  user: state.userReducer.user,
});

const mapDispatchToProps = () => ({
  newExpense,
});

export default connect(mapStateToProps, mapDispatchToProps())(AddExpense);
