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