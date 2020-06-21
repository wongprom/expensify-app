class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    console.log('handle toggle was clicked');
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>VisibilityToggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide detail text' : 'Show detail text'}
        </button>
        {this.state.visibility && <p>paragrapg to hide/show</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let showParagraph = false;
// const buttonHandler = () => {
//   console.log('clicked');
//   showParagraph = !showParagraph;
//   console.log(showParagraph);
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={buttonHandler}>
//         {showParagraph ? 'Hide paragraph' : 'Show paragraph'}
//       </button>
//       {showParagraph && <p>Some text in paragraph</p>}
//     </div>
//   );
//   ReactDOM.render(jsx, document.getElementById('app'));
// };
// render();
