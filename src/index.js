import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App';

//store
import { createStore } from 'redux';

import countReducer from './reducers.js'

/*
Output: 
{
    count: 0
}
*/

const store = createStore(countReducer);

// Whenever the store state changes, update the UI by
// reading the latest store state and showing new data
function render() {
  const state = store.getState();
  console.log('state: ', state);
}

// Update the UI with the initial data
render();
// And subscribe to redraw whenever the data changes in the future
store.subscribe(render);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
