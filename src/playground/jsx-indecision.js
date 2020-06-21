const app = {
  title: 'Indecision app',
  subTitle: 'Sub title',
  options: [],
};
const formSubmitHandler = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    console.log('e.target.elements', e.target.elements.option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
};

const resetOptionHandler = () => {
  app.options = [];
  renderIndecisionApp();
};

const makeDecisionHandler = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
  console.log('make decision handler was called');
};

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h2>{app.title}</h2>
      {app.subTitle && <h1>{app.subTitle}</h1>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button
        disabled={app.options.length === 0 ? true : false}
        onClick={makeDecisionHandler}
      >
        What should I do ??
      </button>
      <button onClick={resetOptionHandler}>Reset options</button>
      <ol>
        {app.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={formSubmitHandler}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
renderIndecisionApp();
