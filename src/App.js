import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Books from './components/books/books';
import Book from './components/book/book';
import './index.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Books} />
    <Route exact path="/books/:id" component={Book} />
  </Switch>
);

export default App;
