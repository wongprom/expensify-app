import { createStore } from 'redux';

const store = new createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy =
        typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
      break;
    case 'DECREMENT':
      const decrementBy =
        typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
      break;
    case 'RESET':
      return {
        count: (state.count = 0),
      };
      break;
    case 'SET':
      return {
        count: action.count,
      };
      break;

    default:
      return state;
      break;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//! ACTIONS

//* increment count
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5,
});

store.dispatch({
  type: 'INCREMENT',
});

//* reset count to zero
store.dispatch({
  type: 'RESET',
});

//* decrement count
store.dispatch({
  type: 'DECREMENT',
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10,
});

store.dispatch({
  type: 'SET',
  count: 101,
});
