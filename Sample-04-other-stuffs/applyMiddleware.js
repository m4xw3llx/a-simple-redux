const applyMiddleware = function(...middlewares) {
  return function createStore(oldCreateStore) {
    return function newCreateStore(reducer, initState) {
      const oldStore = oldCreateStore(reducer, initState);
      const middlewaresApplied = middlewares.map(mw => mw(oldStore));
      let next = compose(...middlewaresApplied)(oldStore.dispatch);
      // middlewaresApplied.reverse().map(mw => {
      //   next = mw(next);
      // });
      oldStore.dispatch = next;
      return oldStore;
    };
  };
};

const compose = function(...funcs) {
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((sum, current) => {
    return function(...args) {
      sum = sum(current(...args));
      return sum;
    };
  });
};

exports.applyMiddleware = applyMiddleware;
