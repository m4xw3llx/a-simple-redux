const { Store } = require("./store.js");
const countReducer = require("./app1.js");
const infoReducer = require("./app2.js");
const combineReducers = require("./combineReducer.js");
const applyMiddleware = require("./applyMiddleware.js");
const errorhandle = require("./errorHandleMiddleWare.js");
const logger = require("./loggerMiddleWare.js");

let combinedReducers = combineReducers.combineReducers({
  counter: countReducer.counterReducer,
  info: infoReducer.infoReducer
});

const createStoreRewrite = applyMiddleware.applyMiddleware(
  errorhandle.errorHandleMiddleWare,
  logger.loggerMiddleWare
);
const store = Store(combinedReducers, undefined, createStoreRewrite);

store.subscribe(() => {
  console.log("current state after edit is : ", store.getState());
});

// MIDDLEWARE IMPLEMENT
// Rewrite the dispatch of store

// handle error middleware
// store.dispatch =
// TEST
store.dispatch({
  type: "CHANGE_NAME",
  value: "new name"
});
