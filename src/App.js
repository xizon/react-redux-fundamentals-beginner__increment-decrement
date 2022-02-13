import React, { Component } from 'react';
import { connect } from 'react-redux';

/* 
React-Redux是Redux的官方React绑定库。它能够使你的React组件从Redux store中读取数据，并且向store分发actions以更新数据。
它提供connect方法，用于从UI 组件生成容器组件。 connect的意思，就是将这两种组件连起来。 export default connect(mapStateToProps, mapDispatchToProps)(AppUI);
 */

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