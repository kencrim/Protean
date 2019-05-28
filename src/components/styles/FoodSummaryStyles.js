import styled from 'styled-components';

const MealTable = styled.table`
	border-collapse: collapse;
	width: 70%;
	font-family: Arial, Helvetica, sans-serif;
`
const MealTableRow = styled.tr`
  background-color:#f5f5f5;
  &:hover {background-color: #e0e0e0;}
  cursor: pointer;
`
const MealTableHead = styled.th`
	padding: 8px;
  text-align: left;
	border-bottom: 1px solid #ddd;
  font-family: Arial, Helvetica, sans-serif;
  background-color:#f5f5f5;
`
const MealTableItem = styled.td`
	padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-family: Arial, Helvetica, sans-serif;
`
export {MealTable, MealTableRow, MealTableHead, MealTableItem}