import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
	handlerClick = () => {
		console.log('class properties work')
	}
	render() {
		const { value, onMessageClick } = this.props
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Hello World</h1>
				<button onClick={this.handlerClick}>click</button>
				<button onClick={() => onMessageClick('INCREMENT')}>increment</button>
				<p>value: {value}</p>
			</div>
		)
	}
}

// Maps `state` to `props`:
// These will be added as props to the component.
function mapState(state) {
	return { value: state.value }
}

// Maps `dispatch` to `props`:
function mapDispatch(dispatch) {
	return {
		onMessageClick(type) {
			dispatch({ type: type, data: {} })
		},
	}
}

export default connect(
	mapState,
	mapDispatch,
)(App)
