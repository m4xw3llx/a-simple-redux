const createStore = function(reducer, initState, createStoreRewrite) {
  if (typeof initState === "function") {
    createStoreRewrite = initState;
    initState = undefined;
  }

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

  function replaceReducer(nextReducer) {
    reducer = nextReducer;
    dispatch({ type: Symbol() });
  }

  // dispatch({ type: Symbol() });

  return {
    subscribe,
    unsubscribe,
    getState,
    dispatch,
    replaceReducer
  };
};

exports.Store = createStore;
