// An object stored the 'count' value
let state = {
  count: 1
};

console.log(state.count);

// An array to store the object subscribers
let listeners = [];

// Subscrib the object modification
function subscribe(listener) {
  listeners.push(listener);
}

// Test function
// change the count to notificate the subscribers
function changeCount(count) {
  state.count = count;
  for (let i = 0; i < listeners.length; i++) {
    const listener = listeners[i];
    listener();
  }
}

// Tesc code
subscribe(() => {
  console.log(state.count);
});

changeCount(2);
changeCount(3);
changeCount(4);
