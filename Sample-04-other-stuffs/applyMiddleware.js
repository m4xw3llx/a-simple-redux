const applyMiddleware = function(...middlewares) {
  return function createStore(oldCreateStore) {
    return function newCreateStore(reducer, initState) {
      const oldStore = oldCreateStore(reducer, initState);
      const middlewaresApplied = middlewares.map(mw => mw(oldStore));
      let next = oldStore.dispatch;

      for (let i = 0; i < middlewaresApplied.length; i++) {
        const mw = middlewaresApplied.reverse()[i];
        next = mw(next);
      }

      oldStore.dispatch = next;
      return oldStore;
    };
  };
};

exports.applyMiddleware = applyMiddleware;
