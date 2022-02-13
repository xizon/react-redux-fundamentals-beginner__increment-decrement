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
