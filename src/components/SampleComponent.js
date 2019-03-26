import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {UserContext} from './Contexts.js';

export default class SampleComponent extends React.Component {
	render() {
		return (
			<div>
				<p>Placeholder</p>
				<p>Welcome, {this.context.name}!</p>
			</div>
		)
	}
}

SampleComponent.contextType = UserContext;