import React, {Component} from 'react';
import ReactDom from 'react-dom';

import SampleComponent from './SampleComponent.js';
import FoodSearch from './FoodSearch.js';
import FoodSummary from './FoodSummary.js';
import IngredientForm from './IngredientForm.js';
import {FoodSearchContainer} from './styles/HomePageStyles.js';
import {UserContext} from './Contexts.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				name: 'Ken'
			},
			meals: [
				{
					name:'Breakfast',
					calories:400,
					protein:32,
					fat:10,
					carbs:5,
					ingredients:[
						{
							name:'eggs',
							amount:200,
							calories:200,
							protein:20,
							fat:2,
							carbs:0,
						},
						{
							name:'sausage',
							amount:100,
							calories:200,
							protein:12,
							fat:8,
							carbs:5,
						}
					]
				},
				{
					name:'Lunch',
					calories:500,
					protein:21,
					fat:12,
					carbs:2,
					ingredients:[
						{
							name:'chicken',
							amount:200,
							calories:200,
							protein:20,
							fat:2,
							carbs:0,
						},
						{
							name:'rice',
							amount: 100,
							calories:300,
							protein:12,
							fat:8,
							carbs:5,
						}
					]
				}
			]
		}
	}
	render() {
		return (
			<div>
			<UserContext.Provider value={this.state.user}>
				<SampleComponent />
				<FoodSummary meals={this.state.meals}/>
				<FoodSearchContainer>
					<FoodSearch />
				</FoodSearchContainer>
				<IngredientForm />
			</UserContext.Provider>
			</div>
		)
	}

}

export default App;