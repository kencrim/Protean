import React, {Component} from 'react';
import {MealTableItem, MealTableRow} from './styles/FoodSummaryStyles.js'


export default class FoodSumTableRow extends Component {
	constructor(props){
		super(props);
		this.state = {
			expanded: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			expanded: !this.state.expanded
		})
	}
	render(){
		let meal = this.props.meal;
		return (
			<>
				<MealTableRow onClick={this.handleClick}>
	    			<MealTableItem><b>{meal.name}</b></MealTableItem>
	    			<MealTableItem>{meal.calories} cal</MealTableItem>
	    			<MealTableItem>{meal.protein}g</MealTableItem>
	    			<MealTableItem>{meal.fat}g</MealTableItem>
	    			<MealTableItem>{meal.carbs}g</MealTableItem>
	  			</MealTableRow>
	  			{
	  				this.state.expanded ?
	  				meal.ingredients.map((ingredient) => {
	  					return (
	  						<tr>
				    			<MealTableItem>{ingredient.amount}g {ingredient.name}</MealTableItem>
				    			<MealTableItem>{ingredient.calories} cal</MealTableItem>
				    			<MealTableItem>{ingredient.protein}g</MealTableItem>
				    			<MealTableItem>{ingredient.fat}g</MealTableItem>
				    			<MealTableItem>{ingredient.carbs}g</MealTableItem>
				  			</tr>
	  					)
	  				})
	  				:
	  				null 
	  			}
  			</>
  		)
	}
}