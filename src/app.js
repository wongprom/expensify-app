import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => <div>This is from ExpenseDasshboard</div>;
const AddExpensePage = () => <div>This is from AddEcpensePage</div>;
const EditExpensePage = () => <div>This is from EditExpensePage</div>;
const HelpPage = () => <div>This is from HelpPage</div>;
const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go Home</Link>
  </div>
);
const Header = (params) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact activeClassName="is-active">
      Dashboard{' '}
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      CREATE{' '}
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      HELP{' '}
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      EDIT{' '}
    </NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));
