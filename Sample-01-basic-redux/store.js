const createStore = function(initState) {
  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function getState() {
    return state;
  }

  function changeState(newState) {
    state = newState;
    for (let index = 0; index < listeners.length; index++) {
      const listener = listeners[index];
      listener();
    }
  }

  return {
    subscribe,
    changeState,
    getState
  };
};

exports.Store = {
  createStore
};
