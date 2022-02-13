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
