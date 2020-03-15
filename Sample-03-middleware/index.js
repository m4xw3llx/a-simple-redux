const { Store } = require("./store.js");
const countReducer = require("./app1.js");
const infoReducer = require("./app2.js");
const combineReducers = require("./combineReducer.js");

let combinedReducers = combineReducers.combineReducers({
  counter: countReducer.counterReducer,
  info: infoReducer.infoReducer
});

const store = Store(combinedReducers);

store.subscribe(() => {
  console.log("current state after edit is : ", store.getState());
});

// MIDDLEWARE IMPLEMENT
// Rewrite the dispatch of store

// Logger middleware
const next = store.dispatch;
// store.dispatch = action => {
//   console.log("😀this state", store.getState());
//   console.log("😀action", action);
//   next(action);
//   console.log("😀next state", store.getState());
// };

const loggerMiddleware = action => {
  console.log("😀this state", store.getState());
  console.log("😀action", action);
  next(action);
  console.log("😀next state", store.getState());
};

const errorHandleMiddleware = action => {
  try {
    next(action);
  } catch (err) {
    console.error("😟Error is ", err);
  }
};

// handle error middleware
store.dispatch = action => {
  try {
    next(action);
  } catch (err) {
    console.error("Error is ", err);
  }
};

// TEST
store.dispatch({
  type: "CHANGE_NAME",
  value: "new name"
});
