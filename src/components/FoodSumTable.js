import FoodSumTableRow from './FoodSumTableRow.js'
import {MealTable, MealTableRow, MealTableHead} from './styles/FoodSummaryStyles.js'

export default props => {
	return (
		<MealTable>
			<tbody>
			<tr>
				<MealTableHead>Meal</MealTableHead>
				<MealTableHead>Calories</MealTableHead>
				<MealTableHead>Protein</MealTableHead>
				<MealTableHead>Fat</MealTableHead>
				<MealTableHead>Carbs</MealTableHead>
			</tr>
			{
				props.meals.map((meal) => {
					return <FoodSumTableRow meal={meal}/>
				})
			}
			</tbody>
		</MealTable>
	)
}