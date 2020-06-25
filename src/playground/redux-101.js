import { createStore } from 'redux';

const store = new createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
      break;
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
      break;
    case 'RESET':
      return {
        count: (state.count = 0),
      };
      break;

    default:
      return state;
      break;
  }
  // if (action.type === 'INCREMENT') {
  //   return {
  //     count: state.count + 1,
  //   };
  // } else {
  //   console.log('running');
  //   return state;
  // }
});

console.log(store.getState());

//* Actions

//* increment count

store.dispatch({
  type: 'INCREMENT',
});
store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'RESET',
});
store.dispatch({
  type: 'DECREMENT',
});

//* decrement count
//* reset count to zero

console.log(store.getState());
