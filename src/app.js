import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => <div>This is from ExpenseDasshboard</div>;
const AddExpensePage = () => <div>This is from AddEcpensePage</div>;
const EditExpensePage = () => <div>This is from EditExpensePage</div>;
const HelpPage = () => <div>This is from HelpPage</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/edit" component={EditExpensePage} />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));
