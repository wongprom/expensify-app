import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
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

export default Header;
