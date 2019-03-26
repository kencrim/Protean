import React, {Component} from 'react';
import ReactDom from 'react-dom';

import SampleComponent from './SampleComponent.js';
import {UserContext} from './Contexts.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				name: 'Ken'
			}
		}
	}
	render() {
		return (
			<div>
			<p>Server Side Rendering!</p>
			<UserContext.Provider value={this.state.user}>
				<SampleComponent />
			</UserContext.Provider>
			</div>
		)
	}

}

export default App;