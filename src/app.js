import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => <div>This is from ExpenseDasshboard</div>;
const AddExpensePage = () => <div>This is from AddEcpensePage</div>;
const EditExpensePage = () => <div>This is from EditExpensePage</div>;
const HelpPage = () => <div>This is from HelpPage</div>;
const NotFoundPage = () => <div>404 Page</div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));
