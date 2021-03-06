# react-redux-fundamentals-beginner__increment-decrement

[English](README.md) | [中文](README_CN.md)

---

Redux +React - Simple counter principle (class + hook + stateless function)

## File Structures

```sh
src/
├── reducers.js
├── index.js (Entry file, for client/browser)
├── App-simple.js (React component - Stateless)
├── App-hook.js (React component - Hook)
└── App.js (React component)
```


## Installation And Test


**Step 1.** First, using an absolute path into your app folder directory.

```sh
$ cd /{your_directory}/react-redux-fundamentals-beginner__increment-decrement
```


**Step 2.** Before doing all dev stuff make sure you have `Node 14+` installed. After that, run the following code in the main directory to install the node module dependencies.

```sh
$ sudo npm install
```

**Step 3.** Run this project with `create-react-app`

```sh
$ npm run start
```

**Step 4.** When you done, this will spin up a server that can be accessed at

```sh
http://localhost:3000
```




---

### index.js
```js
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

```

### reducers.js
```js
// Reducer
// Counter reaction
//---------
let initialState = {count: 0}
export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }

    case 'DECREMENT':
      return { count: state.count - 1 }
      
    default:
      return state
  }

}

```

### App.js

```js
import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

		//from `mapDispatchToProps()`
		this.props.handleIncrement();
	}


	render() {

		//from `mapStateToProps()`
		const preloadedState_count = this.props.count;

		function renderCounter() {
			return preloadedState_count !== null ? preloadedState_count : '';
		}


		return (
			<React.Fragment>
				<a href='#' onClick={() => { this.props.handleIncrement(); }}>Increment</a><br />
				<a href='#' onClick={() => { this.props.handleDecrement(); }}>Decrement</a><br />

				<h1>{renderCounter()}</h1>
			</React.Fragment>
		);
	}

}

const mapStateToProps = (state) => {

	return {
		count: state.count  //Receive redux
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleIncrement: () => dispatch({ type: 'INCREMENT' }),
		handleDecrement: () => dispatch({ type: 'DECREMENT' })
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
```

### App-simple.js (Stateless)
```js
import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {

	/* Note: increment = () => { ... } does not require bind(this) */

	increment() {
		this.props.dispatch({
			type: "INCREMENT"
		});
	};

	decrement() {
		this.props.dispatch({
			type: "DECREMENT"
		});
	};


	componentDidMount() {
		this.increment();
	}



	render() {

		//from `mapStateToProps()`
		const preloadedState_count = this.props.count;

		function renderCounter() {
			return preloadedState_count !== null ? preloadedState_count : '';
		}


		return (
			<React.Fragment>
				<a href='#' onClick={this.increment.bind(this)}>Increment</a><br />
				<a href='#' onClick={this.decrement.bind(this)}>Decrement</a><br />

				<h1>{renderCounter()}</h1>
			</React.Fragment>
		);
	}

}

const mapStateToProps = state => {
	return {
		count: state.count
	};
};

export default connect(mapStateToProps)(App);

```

### App-hook.js (Hook)
```js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

	//Receive redux (The `useSelector` hook is equivalent to the `mapStateToProps` to connect)
	const renderCounter = useSelector((state) => {
		return state.count
	}); 

	 // The `useDispatch` hook returns a reference to the `dispatch` from the Redux store
	const dispatch = useDispatch(); 


	const increment = () => {
		dispatch({
			type: "INCREMENT"
		});
	};

	const decrement = () => {
		dispatch({
			type: "DECREMENT"
		});
	};


	useEffect(() => {
		increment();
	}, [])


	return (
		<React.Fragment>
			<a href='#' onClick={increment}>Increment</a><br />
			<a href='#' onClick={decrement}>Decrement</a><br />

			<h1>{renderCounter}</h1>
		</React.Fragment>
	);
}

export default App;

```
