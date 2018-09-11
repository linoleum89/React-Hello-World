import React from 'react'

export default class App extends React.Component {
	handlerClick = () => {
		console.log('class properties work')
	}
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Hello World</h1>
				<button onClick={this.handlerClick}>click</button>
			</div>
		)
	}
}
