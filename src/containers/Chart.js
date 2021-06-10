/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import { fetchExpenses } from '../actions';

function Chart({ expenses = [], fetchExpenses, user }) {
  function addAmountChart() {
    document.getElementById('amount').innerHTML = '';

    //  the data that powers the bar chart, a simple array of numeric values
    const amountData = expenses.map((expense) => expense.amount);
    // const amountName = expenses.map((expense) => expense.name);

    //  the size of the overall svg element
    const height = 300;
    const width = 300;

    //  the width of each bar and the offset between each bar
    const barWidth = 20;
    const barOffset = 5;
    d3.select('#amount')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', '#4cb5e8')
      .selectAll('rect')
      .data(amountData)
      .enter()
      .append('rect')
      .attr('width', barWidth)
      .attr('height', (data) => data)
      .attr('x', (data, i) => i * (barWidth + barOffset))
      .attr('y', (data) => height - data);
  }

  useEffect(() => {
    fetchExpenses(user.id);
    addAmountChart();
    // eslint-disable-next-line
    }, [expenses]);

  return (
    <div className="chart-container">
      <h2>Expense Graph</h2>
      <div id="amount" className="bar-chart" />
    </div>
  );
}

Chart.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps())(Chart);
