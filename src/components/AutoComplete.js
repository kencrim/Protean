import React from 'react';
import {AutoCompleteContainer, AutoCompleteInput, SuggestionList, Suggestion} from './styles/AutoCompleteStyles.js'

export default class AutoComplete extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			suggestions: []
		}
		this.items = [
			"Chicken Breast",
			"Chicken Thigh",
			"Chicken Broth",
			"Fried Chicken",
			"Greek Yogurt",
			"Ground Beef"		
		];
		this.onTextChange = this.onTextChange.bind(this);
	}
	onTextChange(e){
		const search = e.target.value;

		let suggestions = [];
		if(search.length > 0) {
			const regex = new RegExp(`^${search}`, 'i');
			suggestions = this.items.sort().filter(v => regex.test(v));
		}
		this.setState({ suggestions, search });
	}
	suggestionSelected(val) {
		this.setState({
			search: val,
			suggestions: []
		})
	}
	render () {
		return (
			<AutoCompleteContainer>
				<AutoCompleteInput value={this.state.search} onChange={this.onTextChange}type="text" />
				<SuggestionList>
					{this.state.suggestions.map((item) => <Suggestion onClick={() => this.suggestionSelected(item)}>{item}</Suggestion>)}
				</SuggestionList>
			</AutoCompleteContainer>
		)
	}
}