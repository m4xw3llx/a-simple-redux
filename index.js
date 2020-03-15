const { Store } = require("./store.js");

let initState = {
  counter: {
    count: 0
  },
  info: {
    name: "",
    description: ""
  }
};

console.log("type of Store is: ", typeof Store);

// create store
const store = Store.createStore(initState);

// subscribe store
store.subscribe(() => {
  let state = store.getState();
  console.log(`${state.info.name}：${state.info.description}`);
});

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count);
});

// change store state
store.changeState({
  ...store.getState(),
  counter: {
    count: 100
  }
});

store.changeState({
  ...store.getState(),
  info: {
    name: "xxx",
    description: "nnn"
  }
});
