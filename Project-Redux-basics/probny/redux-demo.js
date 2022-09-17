const redux = require('redux');

const counterReducer = (state = {couter: 0}, action) => {
  if (action.type === 'increment') {
    return {
      couter: state.couter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      couter: state.couter - 1,
    };
  }

  return state
  
};

const store = redux.legacy_createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
} 

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });