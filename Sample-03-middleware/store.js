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
    getState,
    dispatch
  };
};

exports.Store = createStore;
