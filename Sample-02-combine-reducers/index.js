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

console.log("current state is ", store.getState());

store.dispatch({
  type: "CHANGE_NAME",
  value: "new name"
});
