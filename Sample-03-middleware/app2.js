let initState = {
  name: "init",
  description: "desc"
};

function infoReducer(state, action) {
  if (!state) {
    return initState;
  }
  switch (action.type) {
    case "CHANGE_NAME": {
      return {
        ...state,
        name: action.value
      };
    }
    case "CHANGE_DESC": {
      return {
        ...state,
        description: action.value
      };
    }
    default: {
      return state;
    }
  }
}

exports.infoReducer = infoReducer;
