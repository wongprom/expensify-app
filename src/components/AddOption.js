import React from 'react';

class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  addOptionFormHandler = (e) => {
    console.log('Add OptionFormHandler');
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    // this.setState(() => {
    //   return {
    //     error,
    //   };
    // });
    // ! syntax for returning object
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOptionFormHandler}>
          <input type="text" name="option" />
          <button>Submit form</button>
        </form>
      </div>
    );
  }
}
export default AddOption;
