import React, {Component} from 'react';

export default class IngredientForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}
		this.handleToggle = this.handleToggle.bind(this);
	}
	handleToggle() {
		this.setState({
			active: !this.state.active
		})
	}
	render() {
		return (
			<>
				{
					this.state.active ? 
						<>
							<input type="text" />
							<input type="number" />
							<input type="number" />
							<input type="number" />
							<button onClick={this.handleToggle}>Cancel</button>
						</>
					:
						<button onClick={this.handleToggle}>Add Ingredient</button>
				}
			</>
		)
	}
}