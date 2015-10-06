'use strict';

import React from 'react'

const colors = ['#FF0000', '#00FF00', '#0000FF']

class MyReactComponent extends React.Component {

	constructor() {
		// Always call super() as the first thing you do in an extended constructor!
		super()

		// In ES6, initial state is set as a property of the class
		this.state = {
			colorIndex: 0
		}
	}

	handleClick(e) {
		e.preventDefault()
		let nextColor = this.state.colorIndex + 1
		let setColor = nextColor > colors.length - 1 ? 0 : nextColor

		this.setState({
			colorIndex: setColor
		})
	}

	render() {
		let color = colors[this.state.colorIndex]
		return <a href="#" style={{color:color}} onClick={this.handleClick.bind(this)}>
			Hello there, {this.props.name}!
		</a>
	}
}

export default MyReactComponent;
