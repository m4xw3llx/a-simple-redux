const createStore = function(reducer, initState, createStoreRewrite) {
  if (createStoreRewrite) {
    const resultStore = createStoreRewrite(createStore);
    return resultStore(reducer, initState);
  }

  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function unsubscribe(listener) {
    const index = listeners.findIndex(listener);
    listeners.splice(index, 1);
    console.log("unsubscribe complete ", listeners.length);
  }

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let index = 0; index < listeners.length; index++) {
      const listener = listeners[index];
      listener();
    }
  }

  dispatch({ type: Symbol() });

  return {
    subscribe,
    unsubscribe,
    getState,
    dispatch
  };
};

exports.Store = createStore;
