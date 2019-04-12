import React, {Component} from 'react';
import ReactDom from 'react-dom';

import SampleComponent from './SampleComponent.js';
import FoodSearch from './FoodSearch.js'
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
			<UserContext.Provider value={this.state.user}>
				<SampleComponent />
				<FoodSearch />
			</UserContext.Provider>
			</div>
		)
	}

}

export default App;