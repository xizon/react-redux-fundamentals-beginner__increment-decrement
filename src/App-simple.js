import React, { Component } from 'react';
import { connect } from 'react-redux';

/* 
React-Redux是Redux的官方React绑定库。它能够使你的React组件从Redux store中读取数据，并且向store分发actions以更新数据。
它提供connect方法，用于从UI 组件生成容器组件。 connect的意思，就是将这两种组件连起来。 export default connect(mapStateToProps, mapDispatchToProps)(AppUI);
 */

class App extends Component {

	/* 注意: increment = () => { ... } 这种写法无需使用 bind(this) */

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
