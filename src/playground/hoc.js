// Higher Order Component (HOC) - A component (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const ClassifiedInfo = () => (
  <div>
    <h2>Mission Bravo 23</h2>
    <p>Fuga quibusdam quas veniam harum eum et voluptates aut.</p>
  </div>
);

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <h2>Reminder, this info is classefied</h2>
    <p>The Info is : {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info, please don´t share </p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

// const AdminInfo = withAdminWarning(Info);
// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="This is the info" />,
//   document.getElementById('app')
// );

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="Some secret info" />,
  document.getElementById('app')
);
