let initState = {
  count: 0
};

function counterReducer(state, action) {
  if (!state) {
    return initState;
  }
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "ADD": {
      return {
        ...state,
        count: state.count + action.value
      };
    }
    default:
      return state;
  }
}

exports.counterReducer = counterReducer;
