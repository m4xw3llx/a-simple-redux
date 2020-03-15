//  The problem of this version is :  Anyone could change state to any data type
//  e.g. change the `count` of state to an string

// const { Store 1} = require("./store.js");
const { PlanStore } = require("./planedStore.js");
let initState = {
  counter: {
    count: 0
  }
};

// Indeed, this is a reducer
function plan(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: { count: state.counter.count + 1 }
      };
    case "DECREMENT":
      return {
        ...state,
        counter: { count: state.counter.count - 1 }
      };
    default:
      return state;
  }
}

// create store
// const store = Store.createStore(initState);
const store = PlanStore(plan, initState);

// subscribe store

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count);
});

// change store state
// store.changeState({
//   ...store.getState(),
//   counter: {
//     count: 100
//   }
// });

// store.changeState({
//   ...store.getState(),
//   info: {
//     name: "xxx",
//     description: "nnn"
//   }
// });

/*自增*/
store.changeState({
  type: "INCREMENT"
});

/*自减*/
store.changeState({
  type: "DECREMENT"
});

/*我想随便改 计划外的修改是无效的！*/
store.changeState({
  count: "abc"
});
