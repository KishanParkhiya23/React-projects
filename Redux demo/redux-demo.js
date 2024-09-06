const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);
// console.log(store.getState());

const counterSubscriber = () => {
  const currentState = store.getState();
  console.log(currentState);
};

store.subscribe(counterSubscriber);

// Whenever dispatch method call it will run subscribe method too
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
