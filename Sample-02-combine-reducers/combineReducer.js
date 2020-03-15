function combineReducers(reducers) {
  // reducer is function which put state and action in and return new state.
  const reducerKeys = Object.keys(reducers);
  return function combination(state = {}, action) {
    const nextState = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const preStateForKey = state[key];
      const nextStateForKey = reducer(preStateForKey, action);
      nextState[key] = nextStateForKey;
    }
    return nextState;
  };
}

exports.combineReducers = combineReducers;
