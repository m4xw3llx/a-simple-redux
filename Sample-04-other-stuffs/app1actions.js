const bindActionCreators = require("./bindActionCreators");

// Action creators
function increment() {
  return {
    type: "INCREMENT"
  };
}

function addValue(value) {
  return {
    type: "ADD",
    value
  };
}

// manul bind
// const actions = store => {
//   return {
//     increment: function() {
//       return store.dispatch(increment.apply(this, arguments));
//     },
//     addValue: function() {
//       return store.dispatch(addValue.apply(this, arguments));
//     }
//   };
// };

// bindActionCreators
const actions = store =>
  bindActionCreators.bindActionCreators(
    { increment, addValue },
    store.dispatch
  );

exports.app1Actions = actions;
