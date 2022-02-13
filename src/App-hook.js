import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

	//Receive redux (useSelector钩子在概念上大致相当于 mapStateToProps 参数来连接)
	const renderCounter = useSelector((state) => {
		return state.count
	}); 

	 // useDispatch钩子从 Redux 存储中返回对 dispatch 函数的引用
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
