const { Store } = require("./store.js");
const countReducer = require("./app1.js");
const infoReducer = require("./app2.js");
const combineReducers = require("./combineReducer.js");
const applyMiddleware = require("./applyMiddleware.js");
const errorhandle = require("./errorHandleMiddleWare.js");
const logger = require("./loggerMiddleWare.js");

const app1Actions = require("./app1actions");

let combinedReducers = combineReducers.combineReducers({
  counter: countReducer.counterReducer,
  info: infoReducer.infoReducer
});

const createStoreRewrite = applyMiddleware.applyMiddleware(
  errorhandle.errorHandleMiddleWare,
  logger.loggerMiddleWare
);

const store = Store(combinedReducers, undefined, createStoreRewrite);
store.replaceReducer(combinedReducers);

const subscriber = () => {
  console.log("current state after edit is : ", store.getState());
};

store.subscribe(subscriber);
// store.unsubscribe(subscriber);

// TEST
// store.dispatch({
//   type: "CHANGE_NAME",
//   value: "new name"
// });

// manul action creator
// const actions = app1Actions.app1Actions(store);

// bindActionCreators
const actions = app1Actions.app1Actions(store);
actions.addValue(5);
