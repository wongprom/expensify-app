import React from 'react';

import Option from './Option';

const Options = (props) => (
  <div>
    <button className="button button--link" onClick={props.handleDeleteOptions}>
      Delete all Options
    </button>
    {props.options.length === 0 && <p>Please add an option to get started</p>}
    {props.options.map((option) => (
      <Option
        handleDeleteOption={props.handleDeleteOption}
        key={option}
        optionText={option}
      />
    ))}
  </div>
);

export default Options;
