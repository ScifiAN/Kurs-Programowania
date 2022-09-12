import { legacy_createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      couter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      couter: state.counter - 1,
    };
  }

  return state;
};

const store = legacy_createStore(counterReducer);

store.dispatch('increment');
store.dispatch('decrement');

export default store;