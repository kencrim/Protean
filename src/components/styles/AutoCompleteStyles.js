import styled from 'styled-components';

const AutoCompleteContainer = styled.div`
	width: 100%;
	border: 1px solid grey;
	box-shadow: 0 0 0 1px rgba(0, 0, 0 , .1), 0 2px 4px 1px rgba(0, 0, 0, .18);
	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;
	color: rgba(0, 0, 0, 0.73);
`
const AutoCompleteInput = styled.input`
	width: 100%;
	border: 0;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;
	color: rgba(0, 0, 0, 0.73);
	padding: 10px 5px;
	box-sizing: border-box;
	outline: none;
`
const SuggestionList = styled.ul`
	border-top: 1px solid grey;
	list-style-type: none;
	text-align: left;
	margin: 0px;
	padding: 0px;
	&::before {
		content: ""
	}
`
const Suggestion = styled.li`
	padding: 10px 5px;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
		background-color: rgba(128,128,128,.20);
	}	
`

export {AutoCompleteContainer, AutoCompleteInput, SuggestionList, Suggestion}